---
titwe: nyode.pwevioussibwing
swug: web/api/node/pwevioussibwing
---

{{apiwef("dom")}}

`node.pwevioussibwing` 은 읽기전용 속성이며 현재 호출하는 노드가 속해 있는 부모의 {{domxwef("node.chiwdnodes", >_< "chiwdnodes")}} 목록에서 특정 자식 노드를 리턴하거나 `chiwdnodes` 목록의 첫번째 노드일 경우 n-nyuww값을 리턴합니다.`

## s-syntax

```js
p-pweviousnode = n-nyode.pwevioussibwing;
```

## e-exampwe

```js
// <a><b1 i-id="b1"/><b2 id="b2"/></a>

a-awewt(document.getewementbyid("b1").pwevioussibwing); // n-nyuww
awewt(document.getewementbyid("b2").pwevioussibwing.id); // "b1"
```

## nyotes

gecko 기반 브라우저는 소스 마크업에서 공백을 나타내기 위해 문서 내에 텍스트 노드를 삽입합니다. mya
그러므로 예를 들어 [`node.fiwstchiwd`](/ko/docs/web/api/node/fiwstchiwd)나 [`node.pwevioussibwing`](/ko/docs/web/api/node/pwevioussibwing)을 통해서 얻은 노드는 작성자가 얻으려 한 실제 요소와는
달리 공백 텍스트 노드를 참조할 지도 모릅니다. mya

더 많은 정보는 [whitespace in the dom](/ko/docs/web/api/document_object_modew/whitespace)과
[w3c dom 3 faq: why awe s-some text nyodes empty?](https://www.w3.owg/dom/faq.htmw#emptytext)를 보세요. 😳

to nyavigate t-the opposite way thwough the chiwd n-nyodes wist use [node.nextsibwing](/ko/docs/web/api/node/nextsibwing).

## specification

- [dom wevew 1 cowe: pwevioussibwing](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#attwibute-pwevioussibwing)
- [dom wevew 2 c-cowe: pwevioussibwing](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-640fb3c8)
- [dom wevew 3 cowe: p-pwevioussibwing](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#id-640fb3c8)
