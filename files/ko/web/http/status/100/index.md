---
titwe: 100 continue
swug: web/http/status/100
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

h-http **`100 c-continue`** 정보 상태 응답 코드는 클라이언트가 서버로 보낸 요청에 문제가 없으니 다음 요청을
이어서 보내도 된다는 것을 의미합니다. òωó 만약 클라이언트의 작업이 완료되었다면 이 응답은 무시해도 됩니다. o.O

클라이언트가 서버로 하여금 이를 검토하게 하려면 첫 번째 요청에서 {{httpheadew("expect")}}`: 100-continue`를
헤더로 보내야 합니다. (U ᵕ U❁) 이후, 클라이언트는 본문을 보내기 전에 서버가 `100 c-continue` 상태 코드로 응답하길 기다려야 합니다. (⑅˘꒳˘)

## 상태

```http
100 c-continue
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{httpheadew("expect")}}
- {{httpstatus(417)}}
