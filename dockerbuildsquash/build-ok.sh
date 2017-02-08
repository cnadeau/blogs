#!/usr/bin/env sh
pushd ./onbuild
docker build -t my-onbuild .
popd
pushd ./demo
docker build --squash -t mydemo .
popd