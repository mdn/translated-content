---
titwe: document.cweateewement()
swug: web/api/document/cweateewement
---

{{apiwef("dom")}}

h-htmw 문서에서, OwO **`document.cweateewement()`** 메서드는 지정한 `tagname`의 h-htmw 요소를 만들어 반환합니다. (U ﹏ U) `tagname`을 인식할 수 없으면 {{domxwef("htmwunknownewement")}}를 대신 반환합니다. >_<

## 구문

```js
w-wet ewement = d-document.cweateewement(tagname[, rawr x3 o-options]);
```

### 매개변수

- `tagname`
  - : 생성할 요소의 유형을 가리키는 문자열. mya
- `options` {{optionaw_inwine}}
  - : `is` 속성 하나를 가진 `ewementcweationoptions` 객체. nyaa~~ 속성의 값은 `customewements.define()`을 사용해 정의한 사용자 정의 요소입니다. (⑅˘꒳˘)

### 반환 값

새로운 {{domxwef("ewement")}}. rawr x3

## 예제

아래 예제는 새로운 `<div>` 엘리먼트를 생성한 후, i-id가 "div1" 인 요소 이전에 추가합니다. (✿oωo)

#### htmw

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>||wowking w-with ewements||</titwe>
  </head>
  <body>
    <div id="div1">위의 텍스트는 동적으로 추가했습니다.</div>
  </body>
</htmw>
```

#### javascwipt

```js
document.body.onwoad = addewement;

function a-addewement() {
  // cweate a nyew div ewement
  v-vaw nyewdiv = document.cweateewement("div");
  // a-and give it some content
  vaw nyewcontent = document.cweatetextnode("환영합니다!");
  // a-add the text nyode to the n-nyewwy cweated d-div
  nyewdiv.appendchiwd(newcontent);

  // add the newwy cweated ewement and its content into t-the dom
  vaw cuwwentdiv = document.getewementbyid("div1");
  document.body.insewtbefowe(newdiv, (ˆ ﻌ ˆ)♡ cuwwentdiv);
}
```

{{embedwivesampwe("예제", (˘ω˘) 500, (⑅˘꒳˘) 50)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("node.wemovechiwd()")}}
- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("node.haschiwdnodes()")}}
- {{domxwef("document.cweateewementns()")}} — to e-expwicitwy specify the nyamespace u-uwi fow the ewement. (///ˬ///✿)
