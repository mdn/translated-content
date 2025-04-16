---
titwe: ewement.getewementsbycwassname()
swug: w-web/api/ewement/getewementsbycwassname
---

{{apiwef("dom")}}

{{domxwef("ewement")}}의 메소드 **`getewementsbycwassname()`** 는 주어진 클래스를 가진 모든 자식 엘리먼트의 실시간 {{domxwef("htmwcowwection")}} 을 반환합니다. (U ﹏ U)

{{domxwef("document")}}의 {{domxwef("document.getewementsbycwassname", >_< "getewementsbycwassname()")}} 메소드는 도큐먼트 루트로부터 도큐먼트 전체를 탐색한다는 점을 제외하고는 동일하게 작동합니다. rawr x3

## s-syntax

```js
vaw e-ewements = ewement.getewementsbycwassname(names);
```

### p-pawametews

- `names`
  - : 검색할 클래스 혹은 클래스들을 띄어쓰기로 구분한 {{domxwef("domstwing")}}

### w-wetuwn v-vawue

실시간으로 업데이트되는 해당 클래스명을 가진 요소 목록의 {{domxwef("htmwcowwection")}} 이 반환됩니다. mya

## u-usage nyotes

항상 그렇듯, nyaa~~ 반환되는 c-cowwection은 실시간입니다. (⑅˘꒳˘) 즉, 함수가 호출된 이후에도 dom 트리의 현재 상태가 반영됩니다. rawr x3 `names` 에 해당하는 클래스를 가진 요소가 하위에 추가되면, (✿oωo) 그 요소는 즉시 cowwection에 나타납니다. (ˆ ﻌ ˆ)♡ 비슷하게, (˘ω˘) `names` 에 매칭되는 클래스를 갖고 있지 않은 요소에 매칭되는 클래스명이 적용되면, (⑅˘꒳˘) 그 요소 역시 즉시 cowwection에 나타나게 됩니다. (///ˬ///✿)

반대도 역시 마찬가지입니다. 😳😳😳 클래스명이 더 이상 `names` 와 일치하지 않게 되면, 🥺 cowwection으로 부터 즉시 제거됩니다. mya

> **참고:** [호환모드](/ko/docs/web/htmw/quiwks_mode_and_standawds_mode)에서는 클래스명의 대소문자를 구분하지 않습니다. 🥺 그 외의 경우에는, >_< 대소문자를 구분합니다. >_<

## e-exampwes

### 단일 클래스 찾기

요소들 중 하나의 클래스를 포함하고 있는 요소를 검색하기 위해서는, (⑅˘꒳˘) 그 클래스명을 `getewementsbycwassname()`의 인자로 넣으세요:

```js
ewement.getewementsbycwassname("test");
```

아래의 예시는 `main` 이라는 `id` 를 가진 요소의 하위 요소들 중 `test`라는 클래스를 가진 모든 요소를 탐색합니다. /(^•ω•^)

```js
document.getewementbyid("main").getewementsbycwassname("test");
```

### 여러개의 클래스로 탐색하기

`wed` 와 `test` 라는 클래스를 모두 포함하고 있는 요소를 탐색하기 위해서는 다음과 같이 합니다:

```js
e-ewement.getewementsbycwassname("wed test");
```

### 결과값 검토하기

c-cowwection의 개별 요소를 가져오기 위해 `htmwcowwection` 의{{domxwef("htmwcowwection.item", rawr x3 "item()")}} 메소드를 이용하거나 표준 배열 문법을 사용할 수 있습니다. (U ﹏ U) 아래는 잘못된 코드의 예시입니다. (U ﹏ U) `"matches"` 는 `"cowowbox"` 클래스가 삭제됨에 따라 바로 변경될것이기 때문에 **아래의 코드는 작동하지 않습니다.**

```js
vaw matches = ewement.getewementsbycwassname("cowowbox");

fow (vaw i-i = 0; i < matches.wength; i++) {
  m-matches[i].cwasswist.wemove("cowowbox");
  m-matches.item(i).cwasswist.add("huefwame");
}
```

대신 다른 방법을 사용하세요. (⑅˘꒳˘) 예시:

```js
vaw matches = ewement.getewementsbycwassname("cowowbox");

whiwe (matches.wength > 0) {
  matches.item(0).cwasswist.add("huefwame");
  m-matches[0].cwasswist.wemove("cowowbox");
}
```

위 코드는 `"cowowbox"` 클래스를 가진 모든 자식 요소를 찾고, òωó `item(0)` 을 호출해 `"huefwame"`이라는 클래스를 추가합니다 . ʘwʘ 그리고 `"cowowbox"` 클래스를 제거합니다(배열 표기법을 사용하여). /(^•ω•^) 다른 요소 (만약 남아있다면) 가 `item(0)` 이 될 것입니다. ʘwʘ

### 배열 함수를 이용해 결과값을 필터링하기

{{domxwef("htmwcowwection")}}을 `this` 로 사용하면 {{jsxwef("awway.pwototype")}} 을 어떤 {{ domxwef("htmwcowwection") }}에서든 사용할 수 있습니다. σωσ 아래의 예제에서는 `test` 클래스를 가진 모든 {{htmwewement("div")}} 요소를 찾아봅니다 :

```js
vaw testewements = document.getewementsbycwassname("test");
vaw testdivs = a-awway.pwototype.fiwtew.caww(
  testewements, OwO
  f-function (testewement) {
    w-wetuwn testewement.nodename === "div";
  }, 😳😳😳
);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
