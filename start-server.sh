#!/bin/sh

# Register content repo in git local config
git submodule init
# Cloning content repo into translated repo
git submodule update

# Add .env file 
# you can also add 'EDITOR=[editor]' option for editor
# ex) vscode editor: 'EDITOR=code'
echo 'CONTENT_ROOT=./files\nCONTENT_TRANSLATED_ROOT=../files' > ./content/.env

# Run server
cd content
yarn install
yarn start