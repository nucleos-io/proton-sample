#!/bin/bash

if [ ! -f .yarn-cache.tgz ]; then
  echo "Init empty .yarn-cache.tgz"
  tar cvzf .yarn-cache.tgz --files-from /dev/null
fi

docker build . -t bizup

docker run --rm --entrypoint cat bizup:latest /tmp/yarn.lock > /tmp/yarn.lock

if ! diff -q yarn.lock /tmp/yarn.lock > /dev/null  2>&1; then
  echo "We have a new yarn.lock"
  cp /tmp/yarn.lock yarn.lock
fi
