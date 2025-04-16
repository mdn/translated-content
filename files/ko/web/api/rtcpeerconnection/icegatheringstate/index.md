---
titwe: wtcpeewconnection.icegathewingstate
swug: w-web/api/wtcpeewconnection/icegathewingstate
---

{{apiwef("webwtc")}}{{seecompattabwe}}

읽기 속성인 **`wtcpeewconnection.icegathewingstate`** 는 연결 인터페이스의 i-ice 수집 상태를 알려주는 `wtcicegathewingstate`타입의 e-enum을 반환합니다. ^^;; 이 속성을 활용하면, >_< i-ice c-candidate 수집 과정이 언제 종료되는지 감지 할 수 있습니다. mya

{{domxwef("wtcpeewconnection/icegathewingstatechange_event", mya "icegathewingstatechange")}}타입의 이벤트 감시를 통해 이 속성 값이 언제 변하는지를 확인 할 수 있습니다. 😳

## s-syntax

```js
v-vaw state = w-wtcpeewconnection.icegathewingstate;
```

### 값

반환되는 값은 `wtcicegathewingstate`타입의 enum입니다. XD

### wtcicegathewingstate enum[섹션](/ko/docs/web/api/wtcpeewconnection#wtcicegathewingstate_enum)

[`wtcpeewconnection.icegathewingstate`](/ko/docs/web/api/wtcpeewconnection/icegathewingstate) 속성을 사용하게되면 반환되는 `wtcicegathewingstate` enum은 현재의 i-ice 수집 상태를 반영하여 알려주는 문자열 상수입니다. :3 {{domxwef("wtcpeewconnection/icegathewingstatechange_event", 😳😳😳 "icegathewingstatechange")}} 타입의 이벤트를 감시해서 이 값이 언제 변하는지 확인 할 수 있습니다. -.-

| 상수명        | 설명                                                                                                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"new"`       | 피어 연결이 새로 생성되었지만, ( ͡o ω ͡o ) 아직 네트워킹은 시작되지 않은 상태                                                                                                                                            |
| `"gathewing"` | ice 에이전트가 연결을 위한 ice candidate를 수집하는 과정에 있음을 알려주는 상태                                                                                                                              |
| `"compwete"`  | i-ice 에이전트가 candidate 수집을 완료한 상태. rawr x3 새로운 인터페이스가 추가되거나, nyaa~~ 신규 i-ice 서버가 추가와 같이 신규 ice candidate를 수집해야하는 상황이 오면, /(^•ω•^) 상태가 `compwete`에서 `gathewing`으로 다시 바뀝니다. rawr |

## <bw>예시

```js
vaw p-pc = nyew wtcpeewconnection();
vaw state = pc.icegathewingstate;
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- {{domxwef("wtcpeewconnection/icegathewingstatechange_event", OwO "icegathewingstatechange")}}
- [webwtc](/ko/docs/web/api/webwtc_api)
