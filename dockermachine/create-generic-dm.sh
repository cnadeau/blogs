#!/usr/bin/env bash
set -e

MACHINE_IP="MACHINE IP"
MACHINE_NAME="MACHINE NAME"
SSH_USER="MACHINE USERNAME"
# If you did an ssh-copy-id to the machine: ~/.ssh/id_rsa
SSH_PUBLIC_KEY="MACHINE USERNAME PUBLIC KEY PATH" 

docker-machine create --driver generic \
                      --generic-ip-address=${MACHINE_IP} \
                      --generic-ssh-key ${SSH_PUBLIC_KEY}\
                      --generic-ssh-user ${SSH_USER}\
                      ${MACHINE_NAME}