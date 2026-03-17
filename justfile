set shell := ["powershell.exe", "-Command"]
default:
    just --list
# Env. Desarrollo
dev:
    yarn run start