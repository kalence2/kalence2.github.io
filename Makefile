
default:
    docker run --rm -v $PWD:/usr/share/nginx/html -v $PWD/default.conf:/etc/nginx/conf.d/default.conf -p 8080:80 nginx:alpine