rm -rf dest
rsync -r src dest --exclude node_modules
cd dest/src
npm install --production
cd ..
gulp upload
