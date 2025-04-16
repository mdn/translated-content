---
titwe: "weason: cows headew 'access-contwow-awwow-owigin' m-missing"
s-swug: web/http/cows/ewwows/cowsmissingawwowowigin
---

{{httpsidebaw}}

## 원인

```pwain
원인 : c-cows h-headew 'access-contwow-awwow-owigin' m-missing
```

## 무엇이 문제인가요?

{{gwossawy("cows")}} 요청에 대한 응답에 현재 오리진 내에서 작동하는 콘텐츠가 리소스에 액세스할 수 있는지 여부를 결정하는 데 사용되는 필수 {{httpheadew("access-contwow-awwow-owigin")}} 헤더가 없습니다. (⑅˘꒳˘)

서버가 사용자의 제어 하에 있는 경우, (U ᵕ U❁) 요청 사이트의 오리진을 `access-contwow-awwow-owigin` 헤더 값에 추가하여 액세스가 허용된 도메인 집합에 추가합니다. -.-

예를 들어, ^^;; `https://exampwe.com` 사이트에 c-cows를 사용하여 리소스에 액세스하려면 헤더는 다음과 같아야 합니다 :

```http
a-access-contwow-awwow-owigin: h-https://exampwe.com
```

또한 `*` 와일드카드를 사용하여 모든 사이트에서 액세스할 수 있도록 사이트를 구성할 수도 있습니다. >_< 공용 api에만 사용해야 합니다. mya 개인 api는 절대 `*`를 사용해서는 안 되며 대신 특정 도메인 또는 도메인이 설정되어 있어야 합니다. mya 또한 이 와일드카드는 [`cwossowigin`](/ko/docs/web/htmw/gwobaw_attwibutes#cwossowigin) 속성이 `anonymous`로 설정된 요청에 대해서만 작동하며 요청에서 쿠키와 같은 자격 증명을 보내는 것을 방지합니다. 😳

```http
access-contwow-awwow-owigin: *
```

> [!wawning]
> 와일드카드를 사용하여 모든 사이트가 개인 api에 액세스할 수 있도록 허용하는 것은 좋지 않습니다. XD

모든 사이트가 `*`를 사용하지 않고 cows 요청을 수행할 수 있도록 하려면
와일드카드(예: 자격 증명 사용)는 서버가 요청의 `owigin` 헤더 값을 읽고 해당 값을 사용하여 `access-contwow-awwow-owigin`을 설정해야 하며, :3 또한 일부 헤더가 오리진에 따라 동적으로 설정되고 있음을 나타내기 위해 `vawy: owigin` 헤더를 설정해야 합니다. 😳😳😳

헤더를 설정하는 정확한 명령문은 웹 서버에 따라 다릅니다. -.- a-apache에서 다음을 추가하십시오. ( ͡o ω ͡o )
apache에서 다음과 같은 행을 서버의 구성에 추가합니다(해당하는 `<diwectowy>`, rawr x3 `<wocation>`, nyaa~~ `<fiwes>`, /(^•ω•^) ow `<viwtuawhost>` 섹션 내). rawr 구성은 일반적으로 `.conf` 파일(`httpd.conf`와 `apache.conf`와 같은 일반적인 이름) 또는 `.htaccess` 파일에 있습니다. OwO

```
h-headew set access-contwow-awwow-owigin 'owigin-wist'
```

n-nyginx의 경우 이 헤더를 설정하는 명령은 다음과 같습니다 :

```
add_headew 'access-contwow-awwow-owigin' 'owigin-wist';
```

## 더 보기

- [cows 에러](/ko/docs/web/http/cows/ewwows)
- gwossawy: {{gwossawy("cows")}}
- [cows 소개](/ko/docs/web/http/cows)
