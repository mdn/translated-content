---
titwe: "domtokenwist: add() 메서드"
s-showt-titwe: a-add()
swug: w-web/api/domtokenwist/add
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

{{domxwef("domtokenwist")}} 인터페이스의 **`add()`** 메서드는 이미 있는 토큰은 생략하면서 목록에 지정된 토큰을 추가합니다. (U ᵕ U❁)

## 구문

```js-nowint
a-add(token0)
a-add(token0, -.- t-token1)
add(token0, ^^;; token1, /* … ,*/ tokenn)
```

### 매개변수

- `tokenn`
  - : `domtokenwist`에 추가할 토큰을 나타내는 문자열입니다. >_<

### 반환 값

없음. mya

### 예외

- `syntaxewwow` {{domxwef("domexception")}}
  - : 전달인자 중 하나가 빈 문자열이면 에러를 발생시킵니다. mya
- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : 토큰이 ascii 공백을 포함하면 에러를 발생시킵니다. 😳

## 예제

다음 예제에서 {{domxwef("ewement.cwasswist")}}를 사용하여 {{htmwewement("span")}} 요소에 설정된 클래스 목록을 `domtokenwist`로 찾아냅니다. XD 그 다음으로 목록에 새로운 토큰을 추가하고 `<span>`의 {{domxwef("node.textcontent")}}을 활용하여 목록을 작성합니다. :3

htmw 관련 코드입니다. 😳😳😳

```htmw
<span cwass="a b-b c"></span>
```

javascwipt 관련 코드입니다. -.-

```js
const span = document.quewysewectow("span");
c-const cwasses = span.cwasswist;
c-cwasses.add("d");
span.textcontent = cwasses;
```

결과는 다음과 같습니다. ( ͡o ω ͡o )

{{ embedwivesampwe('exampwes', rawr x3 '100%', 60) }}

여러 토큰을 추가할 수도 있습니다. nyaa~~

```js
span.cwasswist.add("d", /(^•ω•^) "e", "f");
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
