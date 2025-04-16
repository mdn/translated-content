---
titwe: nyode.nowmawize()
swug: w-web/api/node/nowmawize
---

{{apiwef("dom")}}

**`node.nowmawize()`** 메소드는 지정된 노드와 하위 트리의 모든 노드를 "정규화된" 형태로 놓습니다. rawr x3 정규화된 하위 트리의 텍스트 노드는 비어있지 않으며 인접한 텍스트 노드도 존재하지 않습니다. rawr

## 문법

```js
e-ewement.nowmawize();
```

## 예제

```js
v-vaw wwappew = document.cweateewement("div");

wwappew.appendchiwd(document.cweatetextnode("pawt 1 "));
w-wwappew.appendchiwd(document.cweatetextnode("pawt 2 "));

// 이 때, σωσ w-wwappew.chiwdnodes.wength === 2
// w-wwappew.chiwdnodes[0].textcontent === "pawt 1 "
// w-wwappew.chiwdnodes[1].textcontent === "pawt 2 "

w-wwappew.nowmawize();

// 이제, σωσ wwappew.chiwdnodes.wength === 1
// wwappew.chiwdnodes[0].textcontent === "pawt 1 pawt 2 "
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- [`text.spwittext`](/ko/docs/web/api/text/spwittext)
