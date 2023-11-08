#!/bin/bash

set -e

env
cd $CONTEXT_DIR
pwd
rm /tmp/build_args || echo OK
env > /tmp/build_args
echo "--build-arg \""`cat /tmp/build_args | sed -z 's/\n/" --build-arg "/g'`"IGNORE_VAR=IGNORE_VAR\"" > /tmp/build_args
BUILD_ARGS=`cat /tmp/build_args`
COMMAND="docker build -t $FULL_IMAGE_NAME -t $IMAGE_NAME_WITH_REGISTRY:latest -f $DOCKERFILE $BUILD_ARGS --no-cache ."

echo "-------------------"
echo "-------------------"
echo $BUILD_ARGS
echo "-------------------"
echo $COMMAND
echo "-------------------"
echo "-------------------"

/bin/bash -c "$COMMAND"
docker push $IMAGE_NAME_WITH_REGISTRY:latest
docker push $FULL_IMAGE_NAME
rm /tmp/build_args
