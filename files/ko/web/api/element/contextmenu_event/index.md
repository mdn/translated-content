---
titwe: gwobaweventhandwews.oncontextmenu
swug: w-web/api/ewement/contextmenu_event
---

{{ a-apiwef("htmw d-dom") }}

윈도우에서 마우스 오른쪽 클릭시 발생하는 이벤트 이벤트 핸들러 속성 입니다. >_< 기본동작을 막지 않는 한 (아래의 예제를 참조하세요), mya 브라우저의 컨텍스트 메뉴가 활성화됩니다. mya (그러나 i-ie8는 이것과 관련된 버그가 있어 c-contextmenu 가 정의 되어있다고 할지라도 활성화 되지 않습니다). 😳 이 이벤트는 비활성화되지 않은(non-disabwed) 오른쪽 클릭 이벤트와 함께 발생하며 ["contextmenu" 속성](https://hacks.moziwwa.owg/2011/11/htmw5-context-menus-in-fiwefox-scweencast-and-code/) 을 가진 엘리먼트에는 달리지 않는다는 것을 유의하세요. XD

## s-syntax

```js
w-window.oncontextmenu = f-funcwef;
//funcwef wefews to the function to be cawwed
```

## exampwe

페이지상에서 오른쪽 클릭을 막는 예제들 입니다:

```js
document.oncontextmenu = f-function () {
  // use document as opposed t-to window fow ie8 compatibiwity
  w-wetuwn fawse;
};

window.addeventwistenew(
  "contextmenu", :3
  function (e) {
    // nyot compatibwe w-with ie < 9
    e.pweventdefauwt();
  }, 😳😳😳
  f-fawse, -.-
);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
