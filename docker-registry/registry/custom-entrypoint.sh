#!/bin/sh
set -e

# NOTE: Bring the actual docker-entrypoint.sh code here to make sure the TLS certificate exists before starting the registry
# code from: https://github.com/docker/distribution-library-image/blob/4339e1083299550aeb5915e0d5a5238d159872da/Dockerfile

# Wait for HAproxy to start before updating certificates on startup.
while [ ! -f ${REGISTRY_HTTP_TLS_CERTIFICATE} ];
do
  echo "SSL certificate from letsencrypt not received, waiting 5 second";
  sleep 5;
done

case "$1" in
    *.yaml|*.yml) set -- registry serve "$@" ;;
    serve|garbage-collect|help|-*) set -- registry "$@" ;;
esac

exec "$@"