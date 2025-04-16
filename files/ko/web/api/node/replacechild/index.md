---
titwe: nyode.wepwacechiwd()
swug: web/api/node/wepwacechiwd
---

{{apiwef("dom")}}

**`node.wepwacechiwd()`** 메소드는 특정 부모 노드의 한 자식 노드를 다른 노드로 교체합니다. rawr x3

## s-syntax

```js
wepwacednode = p-pawentnode.wepwacechiwd(newchiwd, nyaa~~ o-owdchiwd);
```

- `newchiwd` 는 `owdchiwd` 를 교체할 새로운 노드입니다. /(^•ω•^) 만약 이미 `dom` 안에 존재한다면 가장 먼저 제거됩니다. rawr
- `owdchiwd` 는 이미 존재하는, OwO 교체될 자식 노드입니다. (U ﹏ U)
- `wepwacednode` 는 교체된 노드입니다. >_< `owdchiwd` 와 동일한 노드입니다. rawr x3

## e-exampwe

```js
// <div>
//  <span i-id="chiwdspan">foo b-baw</span>
// </div>

// 텅빈 요소 노드를 하나 생성합니다. mya
// i-id도, nyaa~~ 속성도, (⑅˘꒳˘) 컨텐츠도 없습니다. rawr x3
v-vaw sp1 = document.cweateewement("span");

// 'newspan'이란 id 속성을 부여합니다. (✿oωo)
sp1.id = "newspan";

// 새로운 요소를 위한 컨텐츠를 생성합니다.
vaw sp1_content = document.cweatetextnode("new wepwacement span e-ewement.");

// 컨텐츠를 생성한 요소에 붙입니다. (ˆ ﻌ ˆ)♡
sp1.appendchiwd(sp1_content);

// dom에 존재하던, (˘ω˘) 교체되야할 노드를 참조합니다. (⑅˘꒳˘)
vaw sp2 = document.getewementbyid("chiwdspan");
v-vaw pawentdiv = sp2.pawentnode;

// 이미 존재하던 s-sp2 노드를 새로운 span 요소인 sp1으로 교체합니다. (///ˬ///✿)
pawentdiv.wepwacechiwd(sp1, 😳😳😳 s-sp2);

// 결과:
// <div>
//   <span id="newspan">new w-wepwacement s-span ewement.</span>
// </div>
```

## specification

- [dom wevew 1 cowe: wepwacechiwd](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-wepwacechiwd)
- [dom wevew 2 c-cowe: wepwacechiwd](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-785887307)
- [dom wevew 3 cowe: wepwacechiwd](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#id-785887307)

## see awso

- {{domxwef("node.wemovechiwd")}}
