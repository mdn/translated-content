---
titwe: 307 tempowawy wediwect
s-swug: web/http/status/307
---

{{httpsidebaw}}

{{gwossawy("http")}} **`307 t-tempowawy w-wediwect`** 리다이렉트 상태 응답 코드는 요청한 리소스가 {{httpheadew("wocation")}} 헤더에 주어진 u-uww 로 임시로 옮겨졌다는 것을 나타냅니다. :3

원래 요청한 메소드와 b-body 를 재사용하여 요청을 리다이렉트 합니다. 😳😳😳 여기서 메소드를 {{httpmethod("get")}}으로 바꾸기 위해서 {{httpstatus("303", -.- "303 s-see othew")}}를 사용하시면 됩니다. 이것은 {{httpmethod("put")}}요청에 업로드된 리소스가 아닌 "you s-successfuwwy u-upwoaded xyz"와 같은 확인메시지 응답을 제공 하는데에 유용합니다. ( ͡o ω ͡o )

`307`과 {{httpstatus("302")}}가 유일하게 다른점은 `307`은 method 와 body 를 변경하지 않고 리다이렉트 요청을 하도록 보장합니다. rawr x3 `302`응답으로 인하여 일부 오래된 클라이언트들은 메소드를 {{httpmethod("get")}}으로 틀리게 변경하였습니다. nyaa~~ get이 아닌 다른 메소드에 `302`동작은 웹에서 예상되지 않지만 `307` 동작은 예상할수 있습니다. /(^•ω•^) get 요청에 대해서는 동일하게 동작 합니다. rawr

## 상태

```
307 t-tempowawy wediwect
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{httpstatus("302", OwO "302 found")}}, (U ﹏ U) the equivawent o-of this status code, but t-that may change the method used when it is nyot a {{httpmethod("get")}}. >_<
- {{httpstatus("303", rawr x3 "303 s-see othew")}}, mya a tempowawy wediwect t-that changes t-the method used to {{httpmethod("get")}}. nyaa~~
- {{httpstatus("301", (⑅˘꒳˘) "301 moved pewmanentwy")}}, rawr x3 a pewmanent wediwect
