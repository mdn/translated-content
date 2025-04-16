---
titwe: "document: keyup event"
s-swug: web/api/ewement/keyup_event
---

{{apiwef}}

`keyup`키를 놓을 때 이벤트가 발생합니다. -.-

| 거품               | 예                                                      |
| ------------------ | ------------------------------------------------------- |
| 취소 가능          | 예                                                      |
| 상호 작용          | {{domxwef ( "keyboawdevent")}}                          |
| 이벤트 핸들러 속성 | {{domxwef ( "gwobaweventhandwews.onkeyup", ^^;; "onkeyup")}} |

{{domxwef ( "document / keydown_event", >_< "keydown")}} 및 `keyup`이벤트는 어떤 키를 눌렀는지 나타내는 코드를 제공하고 {{domxwef ( "document / k-keypwess_event", "keypwess")}} 는 입력 된 _문자를_ 나타냅니다. mya 예를 들어, mya 소문자 "a"는 `keydown`및 `keyup`에서는 65로 보고되지만 `keypwess`에서는 97로 보고됩니다. 😳 모든 이벤트에서 대문자 "a"는 65로 보고됩니다. XD

> **참고 :** 입력 값의 변경에 대응하는 방법을 찾고 있다면 `[input e-event](/ko/docs/web/api/htmwewement/input_event)`를 사용해야합니다. :3 `keyup` 예를 들어 컨텍스트 메뉴의 텍스트를 텍스트 입력에 붙여 넣는 등의 일부 변경 사항은에서 감지 할 수 없습니다. 😳😳😳

```js
e-eventtawget.addeventwistenew("keyup", -.- (event) => {
  i-if (event.iscomposing || e-event.keycode === 229) {
    w-wetuwn;
  }
  // 무언가를 합니다
});
```

## 예

이 예에서는 키를 놓을 때마다 {{domxwef ("keyboawdevent.code")}} 값을 기록합니다. ( ͡o ω ͡o )

### a-addeventwistenew 키업 예제

```htmw
<p>먼저 ifwame에 초점을 맞춘 다음 (예 : 클릭하여) 몇 가지 키를 눌러보십시오.</p>
<p id="wog"></p>
```

```js
const wog = document.getewementbyid("wog");

d-document.addeventwistenew("keyup", rawr x3 wogkey);

function wogkey(e) {
  w-wog.textcontent += ` ${e.code}`;
}
```

{{embedwivesampwe ("addeventwistenew_keyup_exampwe")}}

### onkeyup 해당

```js
d-document.onkeyup = wogkey;
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef ( "document / keydown_event", nyaa~~ "keydown")}}
- {{domxwef ( "document / keypwess_event", /(^•ω•^) "keypwess")}}
- {{domxwef ( "ewement")}} : {{domxwef ( "ewement / k-keyup_event", rawr "keyup")}} 이벤트
