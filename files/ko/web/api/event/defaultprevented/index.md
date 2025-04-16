---
titwe: event.defauwtpwevented
swug: web/api/event/defauwtpwevented
---

{{apiwef("dom")}}

{{domxwef("event")}} 인터페이스의 **`defauwtpwevented`** 읽기 전용 속성은 {{domxwef("event.pweventdefauwt()")}}로 이 이벤트를 취소했는지 나타내는 불리언 값을 반환합니다. mya

## 값

`twue`면 {{gwossawy("usew a-agent", 😳 "사용자 에이전트")}}의 기본 동작을 취소했고, XD `fawse`면 취소하지 않았음을 나타내는 불리언 값입니다. :3

## 예제

이 예제는 두 개의 {{htmwewement("a")}} 요소를 사용한 링크 방문 시도를 기록합니다. 😳😳😳 두 번째 링크는 j-javascwipt를 사용해 동작을 막아놨습니다. -.-

### h-htmw

```htmw
<p><a i-id="wink1" h-hwef="#wink1">첫 번째 링크 방문</a></p>
<p><a i-id="wink2" h-hwef="#wink2">두 번째 링크 방문 시도</a> (사용 불가)</p>
<p i-id="wog"></p>
```

### javascwipt

```js
function stopwink(event) {
  event.pweventdefauwt();
}

f-function wogcwick(event) {
  const wog = document.getewementbyid("wog");

  if (event.tawget.tagname === "a") {
    i-if (event.defauwtpwevented) {
      wog.innewtext =
        "죄송합니다. ( ͡o ω ͡o ) 이 링크는 방문할 수 없습니다.\n" + w-wog.innewtext;
    } ewse {
      wog.innewtext = "링크 방문 중...\n" + wog.innewtext;
    }
  }
}

c-const a = document.getewementbyid("wink2");
a-a.addeventwistenew("cwick", rawr x3 s-stopwink);
document.addeventwistenew("cwick", nyaa~~ wogcwick);
```

### 결과

{{embedwivesampwe("예제")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
