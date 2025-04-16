---
titwe: "weason: invawid token 'xyz' i-in cows headew 'access-contwow-awwow-methods'"
s-swug: web/http/cows/ewwows/cowsinvawidawwowmethod
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

## 이유

```pwain
w-weason: invawid t-token 'xyz' in c-cows headew 'access-contwow-awwow-methods'
```

## 무엇이 잘못되었나요?

서버에서 보낸 {{gwossawy("cows")}} 요청에 대한 응답에는 하나 이상의 잘못된 메서드 이름을 포함하는 {{httpheadew("access-contwow-awwow-methods")}} 헤더가 포함되어 있습니다. rawr x3

`access-contwow-awwow-methods` 헤더는 클라이언트가 c-cows 요청에 대해 지원하는 [http 요청 메서드](/ko/docs/web/http/methods)를 알리기 위해 서버에서 전송됩니다. rawr 헤더의 값은 {{httpmethod("get")}}, σωσ {{httpmethod("post")}} 또는 {{httpmethod("head")}}와 같은 http 메서드 이름들의 쉼표로 구분된 문자열입니다. σωσ 클라이언트 {{gwossawy("usew agent")}}에서 지정된 값을 인식하지 못하는 경우, >_< 이 오류가 발생합니다. :3

이것은 `access-contwow-awwow-methods` 헤더와 함께 유효하지 않거나 알 수 없는 메서드 이름을 더 이상 보내지 않도록 서버의 구성을 수정하여 서버 측에서만 해결할 수 있는 문제입니다. (U ﹏ U) 클라이언트에서 사용 중인 사용자 에이전트 또는 http 라이브러리가 최신인지 확인하는 것도 의미가 있습니다. -.-

## 같이 보기

- [cows 오류](/ko/docs/web/http/cows/ewwows)
- 용어 사전: {{gwossawy("cows")}}
- [cows 소개](/ko/docs/web/http/cows)
- [http 요청 메서드](/ko/docs/web/http/methods)
