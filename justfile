set shell := ["powershell.exe", "-Command"]
default:
    just --list
start:
    npm run start

upload:
    cmd /C 'set "GIT_USER=jac-mtt" && yarn deploy'