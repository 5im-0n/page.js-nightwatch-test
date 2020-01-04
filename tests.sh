#!/bin/bash

trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

./node_modules/.bin/ws -d html --static.index hashbang.html -p 8000 &
./node_modules/.bin/ws -d html -s nohashbang.html --spa.asset-test-fs -p 8001 &
./node_modules/.bin/nightwatch -t tests/tests.js
