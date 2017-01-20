#!/usr/bin/env bash
set -e

MACHINE_NAME="VIRTUAL MACHINE NAME"
RESOURCE_GROUP="RESOURCE GROUP NAME"
SUBSCRIPTION="YOUR AZURE SUBSCRIPTION ID"
AZURE_LOCATION="eastus"
AZURE_VNET_NAME="VNET NAME"

docker-machine create --driver azure \
                      --azure-availability-set="MACHINE_NAME-as" \
                      --azure-subscription-id="${SUBSCRIPTION}" \
                      --azure-location "${AZURE_LOCATION}" \
                      --azure-open-port 80 \
                      --azure-open-port 443 \
                      --azure-size "${AZURE_MACHINE_SIZE}" \
                      --azure-subnet "${AZURE_VNET_NAME}-subnet" \
                      --azure-vnet "${AZURE_VNET_NAME}" \
                      --azure-resource-group "${RESOURCE_GROUP}" \
                        ${MACHINE_NAME}