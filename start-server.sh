#!/bin/sh

git submodule init
git submodule update

echo 'CONTENT_TRANSLATED_ROOT=../files' >> ./content/.env
echo 'EDITOR=code' >> ./content/.env

cd content

yarn install
yarn start