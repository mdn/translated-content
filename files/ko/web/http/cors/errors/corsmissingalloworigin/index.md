---
title: "Reason: CORS header 'Access-Control-Allow-Origin' missing"
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
---

{{HTTPSidebar}}

## 원인

```plain
원인 : CORS header 'Access-Control-Allow-Origin' missing
```

## 무엇이 문제인가요?

{{Glossary("CORS")}} 요청에 대한 응답에 현재 오리진 내에서 작동하는 콘텐츠가 리소스에 액세스할 수 있는지 여부를 결정하는 데 사용되는 필수 {{HTTPHeader("Access-Control-Allow-Origin")}} 헤더가 없습니다.

서버가 사용자의 제어 하에 있는 경우, 요청 사이트의 오리진을 `Access-Control-Allow-Origin` 헤더 값에 추가하여 액세스가 허용된 도메인 집합에 추가합니다.

예를 들어, `https://amazing.site` 사이트에 CORS를 사용하여 리소스에 액세스하려면 헤더는 다음과 같아야 합니다 :

```http
Access-Control-Allow-Origin: https://amazing.site
```

또한 `*` 와일드카드를 사용하여 모든 사이트에서 액세스할 수 있도록 사이트를 구성할 수도 있습니다. 공용 API에만 사용해야 합니다. 개인 API는 절대 `*`를 사용해서는 안 되며 대신 특정 도메인 또는 도메인이 설정되어 있어야 합니다. 또한 이 와일드카드는 [`crossorigin`](/ko/docs/Web/HTML/Global_attributes#crossorigin) 속성이 `anonymous`로 설정된 요청에 대해서만 작동하며 요청에서 쿠키와 같은 자격 증명을 보내는 것을 방지합니다.

```http
Access-Control-Allow-Origin: *
```

> **경고:** 와일드카드를 사용하여 모든 사이트가 개인 API에 액세스할 수 있도록 허용하는 것은 좋지 않습니다.

모든 사이트가 `*`를 사용하지 않고 CORS 요청을 수행할 수 있도록 하려면
와일드카드(예: 자격 증명 사용)는 서버가 요청의 `Origin` 헤더 값을 읽고 해당 값을 사용하여 `Access-Control-Allow-Origin`을 설정해야 하며, 또한 일부 헤더가 오리진에 따라 동적으로 설정되고 있음을 나타내기 위해 `Vary: Origin` 헤더를 설정해야 합니다.

헤더를 설정하는 정확한 명령문은 웹 서버에 따라 다릅니다. Apache에서 다음을 추가하십시오.
Apache에서 다음과 같은 행을 서버의 구성에 추가합니다(해당하는 `<Directory>`, `<Location>`, `<Files>`, or `<VirtualHost>` 섹션 내). 구성은 일반적으로 `.conf` 파일(`httpd.conf`와 `apache.conf`와 같은 일반적인 이름) 또는 `.htaccess` 파일에 있습니다.

```
Header set Access-Control-Allow-Origin 'origin-list'
```

Nginx의 경우 이 헤더를 설정하는 명령은 다음과 같습니다 :

```
add_header 'Access-Control-Allow-Origin' 'origin-list';
```

## 더 보기

- [CORS 에러](/ko/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
