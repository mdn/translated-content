---
titwe: etag
swug: web/http/headews/etag
---

{{httpsidebaw}}

**etag** h-http 응답 헤더는 특정 버전의 리소스를 식별하는 식별자입니다. mya 웹 서버가 내용을 확인하고 변하지 않았으면, nyaa~~ 웹 서버로 f-fuww 요청을 보내지 않기 때문에, (⑅˘꒳˘) 캐쉬가 더 효율적이게 되고, rawr x3 대역폭도 아낄 수 있습니다. (✿oωo) 허나, 만약 내용이 변경되었다면, (ˆ ﻌ ˆ)♡ "mid-aiw c-cowwisions" 이라는 리소스 간의 동시 다발적 수정 및 덮어쓰기 현상을 막는데 유용하게 사용됩니다. (˘ω˘)

만약 특정 u-uww 의 리소스가 변경된다면, (⑅˘꒳˘) 새로운 e-etag 가 생성됩니다. (///ˬ///✿) e-etag 는 지문과 같은 역할을 하면서 다른 서버들이 추적하는 용도에 이용되기도 합니다. 😳😳😳 e-etag 를 비교하여 리소스가 서로 같은지의 여부를 빠르게 판단할 수 있지만, 🥺 서버에서 무기한으로 지속될 수 있도록 설정할 수도 있습니다. mya

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">headew type</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
etag: w/"<etag_vawue>"
etag: "<etag_vawue>"
```

## 지시자

- `w/` {{optionaw_inwine}}
  - : `'w/'` (대/소문자를 구분합니다.) [weak vawidatow](/ko/docs/web/http/conditionaw_wequests#weak_vawidation) 가 사용되었음을 나타냅니다. 🥺 w-weak vawidatows 는 만들기는 쉽지만 비교하기에는 효율성이 떨어집니다. >_< stwong vawidatows 는 비교하기에는 이상적이지만 효율적으로 만들기가 어렵습니다. >_< 동일한 자원의 두 가지 w-weak `etag` 값은 동일할 수 있지만, (⑅˘꒳˘) 바이트 단위까지 동일하진 않습니다. /(^•ω•^)
- "\<etag_vawue>"
  - : entity tags 는 요청된 값을 ascii 코드와 같이 고유한 형태로 나타냅니다. rawr x3 (예 : `"675af34563dc-tw34"`)
    `etag` 의 값을 생성하는 방법(method)은 단순히 한가지로 정해져있진 않습니다. (U ﹏ U) 때때로, (U ﹏ U) 콘텐츠의 해시, (⑅˘꒳˘) 마지막으로 수정된 타임스탬프의 해시, òωó 혹은 그냥 개정번호를 이용합니다. ʘwʘ 예를들어, /(^•ω•^) mdn 는 wiki(콘텐츠)의 16진수 해시를 사용합니다. ʘwʘ

## 예시

```
e-etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
etag: w/"0815"
```

### 충돌 피하기 (mid-aiw c-cowwisions)

`etag`와 http헤더의 {{httpheadew("if-match")}}를 이용하여 충돌을 예측할 수 있습니다. σωσ

예를 들어 m-mdn을 편집할 때, OwO 현재 위키 콘텐츠는 해시되어 `etag` 안에 들어갑니다. 😳😳😳

```
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

위키 페이지에 변경사항을 저장할 때, 😳😳😳 {{httpmethod("post")}}의 요청은 {{httpheadew("if-match")}}헤더에 새로운 변경사항이 발생했는지 판별하기 위해, o.O 기존의 `etag`값을 포함하여 요청을 진행합니다. ( ͡o ω ͡o )

```
if-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

해시가 일치하지 않으면, (U ﹏ U) 문서가 변경되었다는 의미이며 {{httpstatus("412")}} `pwecondition faiwed` (전제조건 실패) 에러를 던져주게 됩니다. (///ˬ///✿)

### 변경되지 않은 리소스의 캐싱

`etag`의 다른 용례는 변경되지 않은 리소스를 캐시하는 것 입니다. >w< 사용자가 uww을 재방문 했을 때(`etag`를 가지고 있는 상태에서), rawr 보유한 `etag`가 너무 오래되어 사용될 수 없다고 판단되면, 클라이언트는 {{httpheadew("if-none-match")}} 헤더 필드에 `etag`를 전송합니다. mya

```
if-none-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

서버는 클라이언트의 `etag`를 현재 버전 리소스의 `etag`와 비교하고, ^^ 두 값이 일치하는 경우(리소스에 변경이 없는 경우) {{httpstatus("304")}} `not m-modified` 상태를 반환합니다. 😳😳😳 이 상태는 캐시된 버전이 여전히 유효하다는 것을 클라이언트에게 알려줍니다. mya

## 사양

| 사양                           | 제목                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| {{wfc("7232", 😳 "etag", "2.3")}} | hypewtext twansfew pwotocow (http/1.1): conditionaw wequests |

## 브라우저 호환성

{{compat}}

## 참고

- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("304")}} `not modified`
- {{httpstatus("412")}} `pwecondition f-faiwed`
- [w3c nyote: editing t-the web – detecting t-the wost u-update pwobwem u-using unwesewved checkout](https://www.w3.owg/1999/04/editing/)
