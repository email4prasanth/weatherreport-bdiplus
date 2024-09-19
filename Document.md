1. clone the repository
```
sudo su - 
adduser brain (1234)
cat /etc/passwd
usermod -aG sudo brain
su - brain
mkdir 3-tier    
cd 3-tier
git clone https://github.com/email4prasanth/weatherreport-bdiplus.git
ls
cd weatherreport-bdiplus/
ls
```
- Now client, server, readme file is appeared.
2. Setup aws cli ,docker ,kubectl and eksctl
#### configuring aws cli
```
cd (root)
sudo su -
apt update && apt install -y unzip curl jq net-tools
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
aws --version
```
- copy the secret and access key
```
aws configure
```
#### Setup docker
```
su - brain
mkdir docker
cd docker
curl https://get.docker.com | bash
docker images
sudo systemctl status docker
ls -l /var/run/docker.sock
sudo su -
sudo chown root:docker /var/run/docker.sock
sudo chmod 660 /var/run/docker.sock
sudo systemctl restart docker
sudo systemctl status docker
docker images
sudo su -
reboot
su - brain
docker ps
logout ( you will in root usr)
docker images
docker ps (you will get output)
su - brain
sudo groupadd docker (if already exitst continue)
sudo usermod -aG docker brain
logout
su - brain
docker images
docker ps
docker version
```
#### setup kubectl
```
sudo su -
curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
sudo mv ./kubectl /usr/local/bin/kubectl
chmod 777 /usr/local/bin/kubectl
kubectl version 
```
#### setup eksctl
```
sudo su -
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin
sudo chmod 700 /usr/local/bin/eksctl
eksctl version
su - brain  
kubectl version && eksctl version
```
- Create an AMI
### Built frontend and backend images
- Open AWS UI setup Elastic container registery with name `3-tier-front-end`
```
su - brain
cd /3-tier/weatherreport-bdiplus/client
ls -al
aws configure (if required)
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 180294218712.dkr.ecr.us-east-1.amazonaws.com
docker build -t 3-tier-front-end .
docker tag 3-tier-front-end:latest 180294218712.dkr.ecr.us-east-1.amazonaws.com/3-tier-front-end:latest
docker push 180294218712.dkr.ecr.us-east-1.amazonaws.com/3-tier-front-end:latest
docker images
```
- Front-end is runnig at port 3000, Run the container `docker run -d -p 3000:3000 3-tier-front-end:latest` and open Edge/ google `ipv4:3000`.

### Built Backend
#### steps to create OpenWeather API key
- Go to the OpenWeather website and sign up for a free account.
- After registration, log in and navigate to the API Keys section in your account settings.
- Click Create Key, name your key (e.g., "Weather App API"), and submit.
- Your new API key will appear. Copy it and use it in your Node.js backend to fetch weather data.
- store your OpenWeather API key
```
export WEATHER_API_KEY=xxxaaec029cc5d
```
- Add backend folder with necessary files and push to repository.
- Open AWS UI setup Elastic container registery with name `3-tier-back-end` and pull the code to the `mgmt server`.
```
su - brain
sudo apt install npm -Y
npm install express axios dotenv
cd 3-tier/bdiplus/code/Three-tier-Application-Deployment-/backend
ls -al
aws configure (if required)
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 195275668955.dkr.ecr.us-east-1.amazonaws.com
docker build -t 3-tier-backend .
docker tag 3-tier-backend:latest 195275668955.dkr.ecr.us-east-1.amazonaws.com/3-tier-backend:latest
docker push 195275668955.dkr.ecr.us-east-1.amazonaws.com/3-tier-backend:latest
docker images
```
cd 3-tier/bdiplus/code/Three-tier-Application-Deployment-/backend
docker run -d -p 5000:5000 -e WEATHER_API_KEY=$WEATHER_API_KEY 3-tier-backend:latest
rm -rf package-lock.json


```

