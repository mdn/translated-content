#!/bin/sh

# Register content, yari repo in git local config
git submodule init
# Cloning content, yari repo into translated repo
git submodule update

# Add .env file 
# you can also add 'EDITOR=[editor]' option for editor
# ex) vscode editor: 'EDITOR=code'
echo 'CONTENT_ROOT=../content/files\nCONTENT_TRANSLATED_ROOT=../files' > ./yari/.env

# Run server
cd yari
yarn install
yarn start