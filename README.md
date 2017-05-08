Electrifying Docker
===================

### Electron

[Official Website](https://electron.atom.io/)
[Official Documentation](https://electron.atom.io/docs/)
[Official Git Repo](https://github.com/electron/electron)

### Docker API

[Official doc](https://docs.docker.com/engine/api/#api-example)
[Official 1.27 API Information](https://docs.docker.com/engine/api/v1.27/)

#### docker run

##### CURL

`curl --unix-socket /var/run/docker.sock -H "Content-Type: application/json" \
    -d '{"Image": "alpine:3.4", "Cmd": ["echo", "hello world"]}' \
    -X POST http:/v1.24/containers/create`

`curl --unix-socket /var/run/docker.sock -X POST http:/v1.24/containers/849859/start`

`curl --unix-socket /var/run/docker.sock -X POST http:/v1.24/containers/849859/wait`

`curl --unix-socket /var/run/docker.sock "http:/v1.24/containers/849859/logs?stdout=1"`

`curl --unix-socket /var/run/docker.sock -X GET http:/info`

### Reference

#### Shrinkwrap the Version Used

* `npm prune`
* `npm shrinkwrap`
