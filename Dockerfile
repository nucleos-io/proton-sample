FROM kkarczmarczyk/node-yarn

ENV src /app/

ADD package.json yarn.lock /tmp/

RUN cd /tmp && yarn

RUN mkdir -p $src && cp -a /tmp/node_modules $src

WORKDIR $src

COPY . $src

EXPOSE 8443

CMD [ "node", "./server.js" ]
