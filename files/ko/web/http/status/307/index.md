---
title: 307 Temporary Redirect
slug: Web/HTTP/Status/307
---

{{HTTPSidebar}}

{{Glossary("HTTP")}} **`307 Temporary Redirect`** 리다이렉트 상태 응답 코드는 요청한 리소스가 {{HTTPHeader("Location")}} 헤더에 주어진 URL 로 임시로 옮겨졌다는 것을 나타냅니다.

원래 요청한 메소드와 Body 를 재사용하여 요청을 리다이렉트 합니다. 여기서 메소드를 {{HTTPMethod("GET")}}으로 바꾸기 위해서 {{HTTPStatus("303", "303 See Other")}}를 사용하시면 됩니다. 이것은 {{HTTPMethod("PUT")}}요청에 업로드된 리소스가 아닌 "You successfully uploaded XYZ"와 같은 확인메시지 응답을 제공 하는데에 유용합니다.

`307`과 {{HTTPStatus("302")}}가 유일하게 다른점은 `307`은 Method 와 Body 를 변경하지 않고 리다이렉트 요청을 하도록 보장합니다. `302`응답으로 인하여 일부 오래된 클라이언트들은 메소드를 {{HTTPMethod("GET")}}으로 틀리게 변경하였습니다. GET이 아닌 다른 메소드에 `302`동작은 웹에서 예상되지 않지만 `307` 동작은 예상할수 있습니다. GET 요청에 대해서는 동일하게 동작 합니다.

## 상태

```
307 Temporary Redirect
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPStatus("302", "302 Found")}}, the equivalent of this status code, but that may change the method used when it is not a {{HTTPMethod("GET")}}.
- {{HTTPStatus("303", "303 See Other")}}, a temporary redirect that changes the method used to {{HTTPMethod("GET")}}.
- {{HTTPStatus("301", "301 Moved Permanently")}}, a permanent redirect
