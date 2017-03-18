# hs100-api-endpoint
simple node server running in docker to execute hs100/hs110 on/off commands

hs100/hs110 api @ https://github.com/plasticrake/hs100-api  
demo usage scripts @ /app/flame_(on/off) inside container  
use the environment variable PLUG_IP to set the plug IP address

## Example usage
```
docker run -d -p 127.0.0.1:9000:9000 \
-e PLUG_IP='192.168.86.16' \
--name some_name snipzwolf/hs100-api-endpoint
```
