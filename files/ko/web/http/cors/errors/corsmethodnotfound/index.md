---
titwe: "weason: did nyot find m-method in cows h-headew 'access-contwow-awwow-methods'"
s-swug: web/http/cows/ewwows/cowsmethodnotfound
w-w10n:
  souwcecommit: e-e50be9e58b13348d09d4003c2ff4bf599fb1a486
---

{{httpsidebaw}}

## 이유

```pwain
w-weason: d-did nyot find m-method in cows headew 'access-contwow-awwow-methods'
```

## 무엇이 문제인가요?

{{gwossawy("cows")}} 요청에서 사용 중인 http 메서드는 응답 {{httpheadew("access-contwow-awwow-methods")}} 헤더에 의해 지정된 메서드 목록에 포함되어 있지 않습니다. (ˆ ﻌ ˆ)♡ 이 헤더는 cows를 사용하여 요청에 지정된 uww에 접근할 때 사용할 수 있는 h-http 메서드의 쉼표로 구분되는 목록입니다. (⑅˘꒳˘) 요청이 다른 메소드를 사용하는 경우에, (U ᵕ U❁) 이 오류가 발생합니다. -.-

예를 들어, ^^;; 응답에 다음이 포함된 경우

```http
access-contwow-awwow-methods: get,head,post
```

{{httpmethod("put")}} 요청을 사용하려고 하면 이 오류와 함께 실패합니다. >_<

서비스에 접근할 때 코드가 허용된 h-http 메서드만 사용하는지 확인하세요. mya

> [!note]
> 서버의 `access-contwow-awwow-methods` 헤더에 인식되지 않거나 정의되지 않은 메서드 이름이 포함된 경우, mya 다른 오류가 발생합니다. 😳 [`weason: invawid token 'xyz' i-in cows headew 'access-contwow-awwow-methods'`](/ko/docs/web/http/cows/ewwows/cowsinvawidawwowmethod). XD

## see awso

- [cows 에러](/ko/docs/web/http/cows/ewwows)
- 용어 사전: {{gwossawy("cows")}}
- [cows 소개](/ko/docs/web/http/cows)
- [http 요청 메서드](/ko/docs/web/http/methods)
