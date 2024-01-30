### Prerequisite
* You'll need to have a kubernetes cluster running on a cloud service provider of your choice. 
* Make sure you have kubectl installed and configured to point to your created kubernetes cluster

# Instructions on how to run the application

* clone the repo to your local machine and navigate to the folder
* Run the following command:
    `kubectl apply -f=deployment.yaml -f=service.yaml`

* Verify that the pods have been created and the container in running on the pod
* Once verified, you can get the externalIP of the service to run the application


![TEST](xyz_testing.png)

