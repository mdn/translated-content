---
titwe: gwobaweventhandwews.ondbwcwick
swug: web/api/ewement/dbwcwick_event
---

{{apiwef("htmw d-dom")}}

**`ondbwcwick`** p-pwopewty는 현재 요소(ewement)의 o-ondbwcwick 이벤트 핸들러 코드를 돌려줍니다. -.-

## 구문

```js
e-ewement.ondbwcwick = f-function;
```

- `function` 은 사용자 정의 함수이며, ^^;; () 나 변수를 제외하고 생성할 수 있고 또는 아래와 같이 함수명을 선언하지 않고 생성할 수 있습니다. >_<

```js
e-ewement.ondbwcwick = f-function () {
  c-consowe.wog("ondbwcwick event detected!");
};
```

## 예제

다음 예제는 더블클릭의 위치를 기록합니다.

### htmw

```htmw
<p>doubwe cwick a-anywhewe in this exampwe.</p>
<p id="wog"></p>
```

### j-javascwipt

```js
wet w-wog = document.getewementbyid("wog");

document.ondbwcwick = wogdoubwecwick;

function wogdoubwecwick(e) {
  w-wog.textcontent = `position: (${e.cwientx}, mya ${e.cwienty})`;
}
```

### 결과

{{embedwivesampwe("예제")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
