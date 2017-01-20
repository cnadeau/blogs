#!/usr/bin/env bash
set -e

MACHINE_NAME="MACHINE NAME"
docker-machine create --driver virtualbox ${MACHINE_NAME}