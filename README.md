# Instructions

```sh
docker build -t generators-demo .
docker run -p 8080:8080 generators-demo

# substitute virtual machine IP here if different
curl http://192.168.99.100:8080/
```

## Example

```sh
~/w/invision ❯❯❯ curl -v http://docker.vm:8080
* Rebuilt URL to: http://docker.vm:8080
*   Trying 192.168.99.100...
* Connected to docker.vm (192.168.99.100) port 8080 (#0)
> GET / HTTP/1.1
> Host: docker.vm:8080
> User-Agent: curl/7.43.0
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 611
< ETag: W/"263-RQjnC4r0VKxWXI+fUfSWIg"
< Date: Mon, 30 May 2016 19:36:50 GMT
< Connection: keep-alive
<
{
  "post": {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  "comment": {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  }
}
```
