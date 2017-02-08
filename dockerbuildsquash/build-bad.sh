#!/usr/bin/env sh
pushd ./onbuild
# --squash will squash the whole image even if layers were from cache
# changing its id and forcing any derived image to rebuild itself
docker build --squash -t my-onbuild .
popd
pushd ./demo
docker build --squash -t mydemo .
popd