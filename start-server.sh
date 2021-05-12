#!/bin/sh

# Register content repo in git local config
git submodule init
# Cloning content repo into translated repo
git submodule update

# Add .env file 
echo 'CONTENT_TRANSLATED_ROOT=../files\nEDITOR=code' > ./content/.env

# Run server
cd content
yarn install
yarn start