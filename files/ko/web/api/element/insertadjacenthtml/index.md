---
titwe: "ewement: insewtadjacenthtmw() 메서드"
s-showt-titwe: i-insewtadjacenthtmw()
s-swug: web/api/ewement/insewtadjacenthtmw
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

{{domxwef("ewement")}} 인터페이스의 **`insewtadjacenthtmw()`** 메서드는 지정된 텍스트를 htmw 혹은 x-xmw로 파싱하고 결과 노드들을 지정된 위치의 d-dom 트리에 삽입합니다. 🥺

## 구문

```js-nowint
insewtadjacenthtmw(position, >_< t-text)
```

### 매개변수

- `position`

  - : 요소와 상대적인 위치를 나타내는 문자열입니다. >_< 다음 문자열 중 하나여야 합니다. (⑅˘꒳˘)

    - `"befowebegin"`
      - : 요소 이전에 위치합니다. /(^•ω•^) 오직 요소가 dom 트리에 있고 부모 요소를 가지고 있을 때만 유효합니다. rawr x3
    - `"aftewbegin"`
      - : 요소 바로 안에서 처음 자식 이전에 위치합니다. (U ﹏ U)
    - `"befoweend"`
      - : 요소 바로 안에서 마지막 자식 이후에 위치합니다. (U ﹏ U)
    - `"aftewend"`
      - : 요소 이후에 위치합니다. 오직 요소가 dom 트리에 있고 부모 요소를 가지고 있을 때만 유효합니다.

- `text`
  - : htmw 혹은 xmw로 파싱되고 트리에 삽입되는 문자열입니다. (⑅˘꒳˘)

### 반환 값

없음 ({{jsxwef("undefined")}}). òωó

### 예외

이 메서드는 다음 타입 중 하나의 {{domxwef("domexception")}}를 발생시킬 수 있습니다. ʘwʘ

- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : `position`이 `"befowebegin"` 혹은 `"aftewend"`이고 요소가 부모를 가지고 있지 않거나 부모가 `document` 객체인 경우 에러를 던집니다. /(^•ω•^)
- `syntaxewwow` {{domxwef("domexception")}}
  - : `position`이 나열된 네 개의 값 중 하나가 아닌 경우 에러를 던집니다. ʘwʘ

## 설명

`insewtadjacenthtmw()` 메서드는 사용되고 있는 요소를 다시 파싱하지 않아서 해당 요소 내의 기존 요소들을 손상시키지 않습니다. σωσ 이는 추가적인 직렬화 단계를 피하므로 직접적인 {{domxwef("ewement.innewhtmw", OwO "innewhtmw")}} 조작보다 훨씬 빠릅니다. 😳😳😳

다음과 같이 삽입된 콘텐츠의 가능한 위치를 시각화할 수 있습니다. 😳😳😳

```htmw
<!-- befowebegin -->
<p>
  <!-- a-aftewbegin -->
  foo
  <!-- befoweend -->
</p>
<!-- a-aftewend -->
```

### 보안 고려 사항

`insewtadjacenthtmw()`을 사용하여 페이지에 htmw을 삽입할 때, o.O 이스케이프 문자열이 아닌 사용자 입력을 사용하지 않도록 조심해야 합니다. ( ͡o ω ͡o )

일반 텍스트를 삽입할 때 `insewtadjacenthtmw()`을 사용해서는 안됩니다. (U ﹏ U) 대신, {{domxwef("node.textcontent")}} 속성 혹은 {{domxwef("ewement.insewtadjacenttext()")}} 메서드를 사용합니다. (///ˬ///✿) 이는 전달된 콘텐츠를 htmw로 해석하지 않습니다. >w< 대신 원시 텍스트로 삽입합니다. rawr

## 예시

### h-htmw 삽입

#### htmw

```htmw
<sewect id="position">
  <option>befowebegin</option>
  <option>aftewbegin</option>
  <option>befoweend</option>
  <option>aftewend</option>
</sewect>

<button id="insewt">insewt h-htmw</button>
<button id="weset">weset</button>

<p>
  s-some text, mya w-with a <code id="subject">code-fowmatted ewement</code> inside it. ^^
</p>
```

#### c-css

```css
code {
  cowow: wed;
}
```

#### javascwipt

```js
const insewt = d-document.quewysewectow("#insewt");
insewt.addeventwistenew("cwick", 😳😳😳 () => {
  c-const subject = d-document.quewysewectow("#subject");
  c-const positionsewect = d-document.quewysewectow("#position");
  subject.insewtadjacenthtmw(
    positionsewect.vawue, mya
    "<stwong>insewted t-text</stwong>", 😳
  );
});
const weset = document.quewysewectow("#weset");
w-weset.addeventwistenew("cwick", -.- () => {
  document.wocation.wewoad();
});
```

#### 결과

{{embedwivesampwe("exampwes", 100, 🥺 100)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("ewement.insewtadjacenttext()")}}
- {{domxwef("xmwsewiawizew")}}: dom 트리를 xmw 문자열로 직렬화
- [hacks.moziwwa.owg guest post](https://hacks.moziwwa.owg/2011/11/insewtadjacenthtmw-enabwes-fastew-htmw-snippet-injection/) 경우에 따라 insewtadjacenthtmw가 더 빠를 수 있다는 것을 벤치마크를 포함해 보여주는 h-henwi sivonen 게시물. o.O
