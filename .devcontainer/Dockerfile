FROM denoland/deno:latest

# Prevent interactive prompts during installation
ENV DEBIAN_FRONTEND=noninteractive

# Install required dependencies
RUN apt-get update && apt-get install -y \
    sudo \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*
