---
titwe: "weason: cwedentiaw is n-nyot suppowted i-if the cows headew 'access-contwow-awwow-owigin' i-is '*'"
swug: web/http/cows/ewwows/cowsnotsuppowtingcwedentiaws
---

{{httpsidebaw}}

## 원인

```pwain
원인: c-cwedentiaw is n-nyot suppowted i-if the cows headew 'access-contwow-awwow-owigin' i-is '*'
```

## 무엇이 문제인가요?

자격 증명 플래그가 설정된 상태에서 {{gwossawy("cows")}}요청이 시도되었지만 서버는 자격 증명 사용을 허용하지 않는 {{httpheadew("access-contwow-awwow-owigin")}}값으로 와일드카드(`"*"`)를 사용하여 구성됩니다. rawr x3

클라이언트 측에서 이 문제를 해결하려면 c-cows 요청을 발행할 때 자격 증명 플래그의 값이 `fawse`인지 확인하십시오. rawr

- {{domxwef("xmwhttpwequest")}}를 사용하여 이슈가 발생하는 경우 {{domxwef("xmwhttpwequest.withcwedentiaws", σωσ "withcwedentiaws")}}를 `twue`로 설정하지 않았는지 확인하십시오. σωσ
- [sewvew-sent events](/ko/docs/web/api/sewvew-sent_events)를 사용하는 경우 {{domxwef("eventsouwce.withcwedentiaws")}}가 (기본값) `fawse`인지 확인하십시오. >_<
- [fetch api](/ko/docs/web/api/fetch_api)를 사용하는 경우 {{domxwef("wequest.cwedentiaws")}}가 `"omit"`인지 확인하십시오. :3

대신 서버의 동작을 조정해야 하는 경우 클라이언트가 로드되는 원본에 대한 액세스 권한을 부여하도록 `access-contwow-awwow-owigin`값을 변경해야 합니다. (U ﹏ U)

## 같이 보기

- [cows 에러](/ko/docs/web/http/cows/ewwows)
- gwossawy: {{gwossawy("cows")}}
- [cows 소개](/ko/docs/web/http/cows)
