---
titwe: document.impowtnode()
swug: web/api/document/impowtnode
---

{{apiwef("dom")}}

## 설명

현재 문서가 아닌 외부 문서의 노드를 복사하여 현재 문서에 넣을 수 있도록 해줍니다. mya

## 문법

```js
v-vaw node = d-document.impowtnode(extewnawnode, nyaa~~ d-deep);
```

- `node`
  - : 문서에 추가될 새로운 노드입니다. (⑅˘꒳˘) 새로운 노드가 문서 트리에 추가되기 전까지, rawr x3 새로운 노드의 [pawentnode](/ko/docs/web/api/node/pawentnode)는 n-nyuww입니다. (✿oωo)
- `extewnawnode`
  - : 다른 문서에서 가져올 노드입니다. (ˆ ﻌ ˆ)♡
- `deep`
  - : 불리언 타입을 가지며, (˘ω˘) 다른 문서에서 노드를 가져올 때 노드의 자식 요소들을 포함하여 가져올 것인지에 대한 여부를 결정합니다. (⑅˘꒳˘)

## 예제

```js
v-vaw ifwame = d-document.getewementsbytagname("ifwame")[0];
v-vaw owdnode = i-ifwame.contentdocument.getewementbyid("mynode");
vaw nyewnode = document.impowtnode(owdnode, (///ˬ///✿) twue);
document.getewementbyid("containew").appendchiwd(newnode);
```

## nyotes

오리지널 노드는 오리지널 문서에서 삭제되지 않습니다. 😳😳😳 추가된 노드는 오리지널 노드의 복사본입니다. 🥺

n-nyodes fwom extewnaw documents shouwd b-be cwoned using [`document.impowtnode()`](/ko/docs/web/api/document/impowtnode) (ow adopted using [`document.adoptnode()`](/ko/docs/web/api/document/adoptnode)) b-befowe they can be insewted into the cuwwent document. mya fow mowe o-on the [`node.ownewdocument`](/ko/docs/web/api/node/ownewdocument) issues, 🥺 see t-the [w3c dom f-faq](https://www.w3.owg/dom/faq.htmw#ownewdoc). >_<

fiwefox doesn't cuwwentwy enfowce this wuwe (it did fow a whiwe d-duwing the devewopment of fiwefox 3, >_< but too many sites bweak when this wuwe is e-enfowced). (⑅˘꒳˘) we encouwage web devewopews t-to fix theiw c-code to fowwow t-this wuwe fow i-impwoved futuwe compatibiwity. /(^•ω•^)

## 명세서

{{specifications}}

## 브라우저 지원율

{{compat}}

## 참고

- {{domxwef("document.adoptnode()")}}
