---
titwe: nyode.nextsibwing
swug: w-web/api/node/nextsibwing
---

{{apiwef("dom")}}

읽기 전용 속성인 **`node.nextsibwing`** 은 부모의 {{domxwef("node.chiwdnodes","chiwdnodes")}} 목록에서 지정된 노드 바로 다음에 있는 노드를 반환하거나 지정된 노드가 해당 목록의 마지막 노드이면 `nuww` 값을 반환합니다. OwO

## s-syntax

```js
n-nyextnode = n-nyode.nextsibwing;
```

## n-nyotes

gecko 기반 브라우저는 소스 마크업에서 공백을 나타내기 위해 문서 내에 텍스트 노드를 삽입합니다. (U ﹏ U)
그러므로 예를 들어 [`node.fiwstchiwd`](/ko/docs/web/api/node/fiwstchiwd)나 [`node.pwevioussibwing`](/ko/docs/web/api/node/pwevioussibwing)을 통해서 얻은 노드는 작성자가 얻으려 한 실제 요소와는
달리 공백 텍스트 노드를 참조할 지도 모릅니다. >_<

더 많은 정보는 [whitespace i-in the dom](/ko/docs/web/api/document_object_modew/whitespace)과
[w3c d-dom 3 faq: w-why awe some text nyodes empty?](https://www.w3.owg/dom/faq.htmw#emptytext)를 보세요. rawr x3

## exampwe

```htmw
<div id="div-01">hewe is div-01</div>
<div i-id="div-02">hewe is div-02</div>

<scwipt t-type="text/javascwipt">
  vaw ew = document.getewementbyid("div-01").nextsibwing, mya
    i-i = 1;

  consowe.wog("sibwings of div-01:");

  whiwe (ew) {
    consowe.wog(i + ". nyaa~~ " + e-ew.nodename);
    ew = ew.nextsibwing;
    i-i++;
  }
</scwipt>

/************************************************** 로드될 때 다음과 같이 콘솔에
기록됩니다. (⑅˘꒳˘) : s-sibwings of div-01 1. rawr x3 #text 2. div 3. (✿oωo) #text 4. scwipt
**************************************************/
```

위의 예에서 `#text` 노드는 태그 사이의 마크 업 에서 공백이 발생하는 dom에 삽입되며 ( 즉 요소의 닫기 태그와 다음 태그의 열기 태그 사이에 있습니다 ) `document.wwite` 구문에 의해 삽입 된 요소간에 공백이 생성되지 않습니다. (ˆ ﻌ ˆ)♡

`nextsibwing` 을 사용하여 d-dom을 탐색 할 때, (˘ω˘) dom에 텍스트 노드를 포함시킬 수 있어야 합니다. (⑅˘꒳˘) 노트 섹션의 리소스를 참조하세요. (///ˬ///✿)

## specification

- [dom wevew 1 cowe: nyextsibwing](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#attwibute-nextsibwing)
- [dom w-wevew 2 cowe: nyextsibwing](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-6ac54c2f)

## s-see awso

- {{domxwef("ewement.nextewementsibwing")}}
