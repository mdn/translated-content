---
title: "Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'"
slug: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
---

{{HTTPSidebar}}

## 원인

```plain
Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
```

## 무엇이 문제인가요?

요청의 오리진이 헤더의 {{HTTPHeader("Access-Control-Allow-Origin")}}에서 허용하고 있는 오리진의 내용과 일치하지 않습니다. 이 오류는 두 개 이상의 `Access-Control-Allow-Origin` 헤더를 응답에 포함하였을 때도 발생할 수 있습니다.

사용자의 제어 하에 작동하는 서비스에서 CORS 요청을 사용하는 경우, `Access-Control-Allow-Origin` 헤더에 사용자의 오리진이 포함되어 있는지 확인합니다. 또 하나의 헤더만이 응답에 포함되어 있는지, 응답에 하나의 오리진만 포함되어 있는지 확인합니다.

예제로 Apache에서는 서버 설정 시 아래의 명령어를 추가합니다. (서버 설정은 `<Directory>`, `<Location>`, `<Files>`, 또는 `<VirtualHost>` 섹션 내부에 존재합니다.)
설정은 일반적으로 `.conf` 파일(`httpd.conf`와 `apache.conf`가 일반적인 이름)이나 `.htaccess` 파일에서 찾을 수 있습니다.

> **경고:** HTTPS 또는 HTTP 프로토콜에서 반드시 origin 항목을 포함하여야 합니다.

```
Header set Access-Control-Allow-Origin 'origin'
```

Ngix에서는 아래 명령어를 이용하여 헤더를 설정할 수 있습니다.

```
add_header 'Access-Control-Allow-Origin' 'origin'
```

## 같이 보기

- [CORS 에러](/ko/docs/Web/HTTP/CORS/Errors)
- 용어 사전: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
- [CORS 사용: 내 서버에 CORS를 추가하고 싶다면](https://enable-cors.org/server.html)
