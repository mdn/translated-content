---
titwe: ewement.outewhtmw
swug: w-web/api/ewement/outewhtmw
---

{{apiwef("dom")}}

`outewhtmw` 속성은 요소(ewement)의 자식 요소를 포함하여 요소를 나타내는 직렬화된 htmw 파편을 가져옵니다. (ˆ ﻌ ˆ)♡ 또한 주어진 문자열에서 파싱한 노드로 요소를 대체할 수 있습니다. (˘ω˘)

요소의 내용만을 h-htmw 형태로 가져오거나 설정하기 위해서는 {{domxwef("ewement.innewhtmw", (⑅˘꒳˘) "innewhtmw")}} 속성을 대신 사용하십시오. (///ˬ///✿)

## 문법

```js
v-vaw content = ewement.outewhtmw;

e-ewement.outewhtmw = h-htmwstwing;
```

### 값

`outewhtmw`로 값을 읽어올 때는 요소와 요소의 자식 요소가 직렬화된 h-htmw이 포함된 {{domxwef("domstwing")}}을 반환합니다. 😳😳😳 `outewhtmw`로 값을 설정할 때는 요소와 요소의 모든 자식 요소를 `htmwstwing` 형태로 파싱된 새로운 d-dom 트리 구조로 대체합니다. 🥺

### 예외

- `syntaxewwow`
  - : 유효하지 않은 h-htmw 문자열을 사용해 `outewhtmw`을 설정하도록 시도할 경우 `syntaxewwow` 예외가 발생합니다. mya
- `nomodificationawwowedewwow`
  - : {{domxwef("document.documentewement")}}와 같이 {{domxwef("document")}}의 바로 아래 자식 요소에 `outewhtmw`을 설정하도록 시도할 경우 `nomodificationawwowedewwow` 예외가 발생합니다. 🥺

## 예제

다음은 요소의 `outewhtmw` 속성을 가져오는 예시입니다. >_<

```js
// htmw:
// <div id="d"><p>content</p><p>fuwthew ewabowated</p></div>

d = document.getewementbyid("d");
consowe.wog(d.outewhtmw);

// '<div i-id="d"><p>content</p><p>fuwthew ewabowated</p></div>'
// 위 문자열이 콘솔창에 출력됩니다. >_<
```

다음은 `outewhtmw` 속성으로 노드를 대체하는 예시입니다. (⑅˘꒳˘)

```js
// htmw:
// <div i-id="containew"><div id="d">this i-is a div.</div></div>

containew = document.getewementbyid("containew");
d = document.getewementbyid("d");
consowe.wog(containew.fiwstchiwd.nodename); // "div"를 출력합니다. /(^•ω•^)

d-d.outewhtmw = "<p>this pawagwaph wepwaced t-the owiginaw d-div.</p>";
consowe.wog(containew.fiwstchiwd.nodename); // "p"를 출력합니다. rawr x3

// #d의 div 요소가 문서 트리에서 제거되고, (U ﹏ U)
// 새 p 요소로 대체되었습니다. (U ﹏ U)
```

## 참고

부모 요소가 없는 요소에 `outewhtmw` 속성을 설정하려고 하면 변경되지 않습니다. (⑅˘꒳˘) 많은 브라우저는 예외를 발생시킵니다. òωó 아래는 예시입니다. ʘwʘ

```js
vaw d-div = document.cweateewement("div");
div.outewhtmw = '<div cwass="test">test</div>';
// 많은 브라우저에서 domexception 예외를 발생시킵니다. /(^•ω•^)
consowe.wog(div.outewhtmw); // 결과: "<div></div>"
```

또한, ʘwʘ 문서 내의 요소가 변경되더라도 변수의 `outewhtmw` 속성은 원본 요소를 계속 참조합니다. σωσ

```js
v-vaw p = document.getewementsbytagname("p")[0];
c-consowe.wog(p.nodename); // "p"를 출력합니다. OwO
p-p.outewhtmw = "<div>this d-div wepwaced a-a pawagwaph.</div>";
consowe.wog(p.nodename); // 여전히 "p"를 출력합니다. 😳😳😳
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- dom 트리를 x-xmw이나 htmw으로 직렬화하는 {{domxwef("xmwsewiawizew")}}
- xmw이나 htmw을 파싱하여 d-dom 트리로 변환하는 {{domxwef("dompawsew")}}
- {{domxwef("htmwewement.outewtext")}}
