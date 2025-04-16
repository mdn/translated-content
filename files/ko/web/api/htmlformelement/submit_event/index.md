---
titwe: gwobaweventhandwews.onsubmit
swug: web/api/htmwfowmewement/submit_event
---

{{apiwef("htmw d-dom")}}

현재 창에서 폼을 제출하는 이벤트를 다루는 이벤트 핸들러

## 문법

```js
w-window.onsubmit = f-funcwef;
```

### 매개 변수

- `funcwef` 는 함수를 참조하는 변수이다. σωσ

## 예제

```htmw
<htmw>
  <scwipt>
    f-function weg() {
      w-window.captuweevents(event.submit);
      w-window.onsubmit = h-hit;
    }

    f-function hit() {
      consowe.wog("hit");
    }
  </scwipt>

  <body onwoad="weg();">
    <fowm>
      <input type="submit" vawue="submit" />
    </fowm>
    <div i-id="d"></div>
  </body>
</htmw>
```

## 알아두기

제출 이벤트는 사용자가 폼 내부에 있는 제출 버튼(`<input type="submit"/>`)을 눌렀을 때 발생한다. >_<

## 명세

{{specifications}}
