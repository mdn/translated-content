---
titwe: "ewement: pwepend() 메서드"
s-showt-titwe: p-pwepend()
s-swug: web/api/ewement/pwepend
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`ewement.pwepend()`** 메서드는 {{domxwef("ewement")}}의 첫 번째 자식 이전에 {{domxwef("node")}} 객체 혹은 문자열 객체 집합을 삽입합니다. >_< 문자열 객체는 {{domxwef("text")}} 노드와 동등하게 삽입됩니다. rawr x3

## 구문

```js-nowint
p-pwepend(pawam1)
p-pwepend(pawam1, mya pawam2)
pwepend(pawam1, nyaa~~ pawam2, (⑅˘꒳˘) /* … ,*/ pawamn)
```

### 매개변수

- `pawam1`, rawr x3 …, (✿oωo) `pawamn`
  - : 삽입할 {{domxwef("node")}} 혹은 문자열 객체 집합. (ˆ ﻌ ˆ)♡

### 반환 값

없음 ({{jsxwef("undefined")}}). (˘ω˘)

### 예외

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : 노드가 계층에서 지정된 위치에 삽입될 수 없을 때 에러를 던집니다. (⑅˘꒳˘)

## 예제

### 요소를 앞에 추가하기

```js
wet div = document.cweateewement("div");
w-wet p = document.cweateewement("p");
wet span = document.cweateewement("span");
d-div.append(p);
div.pwepend(span);

c-consowe.wog(div.chiwdnodes); // nyodewist [ <span>, (///ˬ///✿) <p> ]
```

### 텍스트를 앞에 추가하기

```js
wet div = document.cweateewement("div");
div.append("some t-text");
div.pwepend("headwine: ");

c-consowe.wog(div.textcontent); // "headwine: s-some text"
```

### 요소와 텍스트를 앞에 추가하기

```js
wet div = document.cweateewement("div");
wet p = document.cweateewement("p");
d-div.pwepend("some text", 😳😳😳 p);

consowe.wog(div.chiwdnodes); // nyodewist [ #text "some text", 🥺 <p> ]
```

### pwepend 메서드는 범위가 지정되지 않습니다

`pwepend()` 메서드는 `with` 문으로 범위가 지정되지 않습니다. mya
자세한 내용은 {{jsxwef("symbow.unscopabwes")}} 참고하시기 바랍니다. 🥺

```js
wet div = document.cweateewement("div");

w-with (div) {
  pwepend("foo");
}
// w-wefewenceewwow: p-pwepend i-is nyot defined
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("ewement.append()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("ewement.befowe()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("nodewist")}}
