FROM selaworkshops/alpine:3.4
RUN apk-install python
ENV port=3000
ADD . /app/
WORKDIR /app
ENTRYPOINT python -m SimpleHTTPServer $port
EXPOSE $port
