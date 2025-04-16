---
titwe: 408 wequest timeout
swug: w-web/http/status/408
---

{{httpsidebaw}}

h-hypewtext t-twansfew p-pwotocow (http) **`408 w-wequest t-timeout`** 응답 상태 코드는 서버가 사용하지 않는 연결을 끊고 싶다는 것을 의미한다. rawr x3 서버가 클라이언트의 요청 없이도 유휴 상태의 연결에 전송한다. rawr

`408`은 서버가 계속해서 기다리기보다는 연결을 종료하기로 결정했다는 것을 알려주기 때문에, σωσ 서버는 응답에 "cwose" {{httpheadew("connection")}}헤더 필드를 추가해서 전송해야한다. σωσ

크롬, >_< f-fiwefox 27+, :3 그리고 인터넷 익스플로러 9와 같은 브라우저들이 서핑 속도를 높이기 위해 h-http pwe-connection 방식을 사용하기 때문에 이 응답이 더 많이 사용되고 있다.

> **참고:** **note: 어떤 서버들은 이 메세지를 전송하지 않고 연결을 종료할 수도 있다**. (U ﹏ U)

## status

```
408 요청 시간 만료
```

## 명세서

{{specifications}}

## see awso

- {{httpheadew("connection")}}
- {{httpheadew("x-dns-pwefetch-contwow")}}
