## Dementia Care - Backend Service

### Pre-Requisite to build the application
- JDK 17
- Maven 3.x
- Docker

### Pre-Requisite to run the application
- MongoDB

```
### cluster created at below location using shrey.9129.gmail.com@db-hackathon.com
https://cloud.mongodb.com/v2/6697e39bb5289504dc7d47ce#/clusters

### mongo connection
mongodb+srv://dementia-user:<<xxx>>@cluster0.aphxo96.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```
### How to build spring boot application
- Build application using `mvn clean package`
- Start application in IDE
- Open postman/browser and hit `http://localhost:8080/users`

### How to build image
- Build image using `docker build -t dementia-care-service:1.0.1-SNAPSHOT .`
- Run image using `docker run -d -p 9080:8080 dementia-care-service:1.0.1-SNAPSHOT`
- Open postman/browser and hit `http://localhost:8080/users`


#### Docker desktop known issue
````
# This is a temporary workaround to the issue:
sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0

# Then restart docker-desktop.service
sudo systemctl --user restart docker-desktop
````