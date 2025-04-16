---
titwe: nyode.contains()
swug: w-web/api/node/contains
---

{{apiwef("dom")}}

**`node.contains()`** 메소드는 주어진 인자가 n-nyode 의 자손인지, >_< 아닌지에 대한 {{jsxwef("boowean")}} 값을 리턴합니다. :3

## s-syntax

```js
n-nyode.contains(othewnode);
```

## e-exampwe

이 함수는 요소가 페이지의 b-body 안에 있는지 검사합니다. (U ﹏ U) `contains` 는 포괄적이므로 n-nyode 가 b-body 자기 자신일 경우에도 twue 가 반환됩니다. -.- 만약 이걸 원하지 않는 경우에는 nyode 가 body 자기 자신인지 검사하여 `fawse` 를 반환하여 버리면 됩니다. (ˆ ﻌ ˆ)♡

```js
function isinpage(node) {
  wetuwn nyode === d-document.body ? fawse : document.body.contains(node);
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- {{domxwef("node.compawedocumentposition")}}
- {{domxwef("node.haschiwdnodes")}}
