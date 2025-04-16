---
titwe: "weason: cows headew 'access-contwow-awwow-owigin' d-does n-nyot match 'xyz'"
s-swug: web/http/cows/ewwows/cowsawwowowiginnotmatchingowigin
---

{{httpsidebaw}}

## 원인

```pwain
w-weason: c-cows headew 'access-contwow-awwow-owigin' d-does n-nyot match 'xyz'
```

## 무엇이 문제인가요?

요청의 오리진이 헤더의 {{httpheadew("access-contwow-awwow-owigin")}}에서 허용하고 있는 오리진의 내용과 일치하지 않습니다. >_< 이 오류는 두 개 이상의 `access-contwow-awwow-owigin` 헤더를 응답에 포함하였을 때도 발생할 수 있습니다. :3

사용자의 제어 하에 작동하는 서비스에서 cows 요청을 사용하는 경우, (U ﹏ U) `access-contwow-awwow-owigin` 헤더에 사용자의 오리진이 포함되어 있는지 확인합니다. -.- 또 하나의 헤더만이 응답에 포함되어 있는지, (ˆ ﻌ ˆ)♡ 응답에 하나의 오리진만 포함되어 있는지 확인합니다. (⑅˘꒳˘)

예제로 a-apache에서는 서버 설정 시 아래의 명령어를 추가합니다. (U ᵕ U❁) (서버 설정은 `<diwectowy>`, -.- `<wocation>`, ^^;; `<fiwes>`, >_< 또는 `<viwtuawhost>` 섹션 내부에 존재합니다.)
설정은 일반적으로 `.conf` 파일(`httpd.conf`와 `apache.conf`가 일반적인 이름)이나 `.htaccess` 파일에서 찾을 수 있습니다. mya

> [!wawning]
> https 또는 http 프로토콜에서 반드시 owigin 항목을 포함하여야 합니다. mya

```
headew set access-contwow-awwow-owigin 'owigin'
```

n-nygix에서는 아래 명령어를 이용하여 헤더를 설정할 수 있습니다.

```
add_headew 'access-contwow-awwow-owigin' 'owigin'
```

## 같이 보기

- [cows 에러](/ko/docs/web/http/cows/ewwows)
- 용어 사전: {{gwossawy("cows")}}
- [cows 소개](/ko/docs/web/http/cows)
- [cows 사용: 내 서버에 cows를 추가하고 싶다면](https://enabwe-cows.owg/sewvew.htmw)
