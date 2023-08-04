---
title: ETag
slug: Web/HTTP/Headers/ETag
---

{{HTTPSidebar}}

**ETag** HTTP 응답 헤더는 특정 버전의 리소스를 식별하는 식별자입니다. 웹 서버가 내용을 확인하고 변하지 않았으면, 웹 서버로 full 요청을 보내지 않기 때문에, 캐쉬가 더 효율적이게 되고, 대역폭도 아낄 수 있습니다. 허나, 만약 내용이 변경되었다면, "mid-air collisions" 이라는 리소스 간의 동시 다발적 수정 및 덮어쓰기 현상을 막는데 유용하게 사용됩니다.

만약 특정 URL 의 리소스가 변경된다면, 새로운 ETag 가 생성됩니다. ETag 는 지문과 같은 역할을 하면서 다른 서버들이 추적하는 용도에 이용되기도 합니다. ETag 를 비교하여 리소스가 서로 같은지의 여부를 빠르게 판단할 수 있지만, 서버에서 무기한으로 지속될 수 있도록 설정할 수도 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 문법

```
ETag: W/"<etag_value>"
ETag: "<etag_value>"
```

## 참고

- `W/` {{optional_inline}}
  - : `'W/'` (대/소문자를 구분합니다.) [weak validator](/ko/docs/Web/HTTP/Conditional_requests#Weak_validation) 가 사용되었음을 나타냅니다. Weak validators 는 만들기는 쉽지만 비교하기에는 효율성이 떨어집니다. Strong validators 는 비교하기에는 이상적이지만 효율적으로 만들기가 어렵습니다. 동일한 자원의 두 가지 Weak `Etag` 값은 동일할 수 있지만, 바이트 단위까지 동일하진 않습니다.
- "\<etag_value>"
  - : Entity tags 는 요청된 값을 ASCII 코드와 같이 고유한 형태로 나타냅니다. (예 : `"675af34563dc-tr34"`)
    `ETag` 의 값을 생성하는 방법(Method)은 단순히 한가지로 정해져있진 않습니다. 때때로, 콘텐츠의 해시, 마지막으로 수정된 타임스탬프의 해시, 혹은 그냥 개정번호를 이용합니다. 예를들어, MDN 는 wiki(콘텐츠)의 16진수 해시를 사용합니다.

## 예시

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### 충돌 피하기 (mid-air collisions)

`ETag`와 HTTP헤더의 {{HTTPHeader("If-Match")}}를 이용하여 충돌을 예측할 수 있습니다.

예를 들어 MDN을 편집할 때, 현재 위키 콘텐츠는 해시되어 `Etag` 안에 들어갑니다.

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4
```

위키 페이지에 변경사항을 저장할 때, {{HTTPMethod("POST")}}의 요청은 {{HTTPHeader("If-Match")}}헤더에 새로운 변경사항이 발생했는지 판별하기 위해, 기존의 `ETag`값을 포함하여 요청을 진행합니다.

```
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

해시가 일치하지 않으면, 문서가 변경되었다는 의미이며 {{HTTPStatus("412")}} `Precondition Failed` (전제조건 실패) 에러를 던져주게 됩니다.

### 변경되지 않은 리소스의 캐싱

`ETag`의 다른 용례는 변경되지 않은 리소스를 캐시하는 것 입니다. 사용자가 URL을 재방문 했을 때(`ETag`를 가지고 있는 상태에서), 보유한 `ETag`가 너무 오래되어 사용될 수 없다고 판단되면, 클라이언트는 {{HTTPHeader("If-None-Match")}} 헤더 필드에 `ETag`를 전송합니다.

```
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

서버는 클라이언트의 `ETag`를 현재 버전 리소스의 `ETag`와 비교하고, 두 값이 일치하는 경우(리소스에 변경이 없는 경우) {{HTTPStatus("304")}} `Not Modified` 상태를 반환합니다. 이 상태는 캐시된 버전이 여전히 유효하다는 것을 클라이언트에게 알려줍니다.

## 사양

| 사양                           | 제목                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| {{RFC("7232", "ETag", "2.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## 브라우저 호환성

{{Compat}}

## 참고

- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
- {{HTTPStatus("412")}} `Precondition Failed`
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
