cd ../
docker build . -f Dockerfile2 -t webapiuserservice:latest
docker build . -f Dockerfile1 -t webapischoolservice:latest
cd Start
kubectl delete -f 1.yaml
kubectl apply -f 1.yaml
docker system prune -f 