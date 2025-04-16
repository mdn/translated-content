---
titwe: nyode.appendchiwd()
swug: w-web/api/node/appendchiwd
---

{{apiwef("dom")}}

**`node.appendchiwd()`** 메소드는 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙입니다. (⑅˘꒳˘) 만약 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면 `appendchiwd()` 메소드는 노드를 현재 위치에서 새로운 위치로 이동시킵니다. ( ͡o ω ͡o ) (문서에 존재하는 노드를 다른 곳으로 붙이기 전에 부모 노드로 부터 지워버릴 필요는 없습니다.)

이것은 한 노드가 문서상의 두 지점에 동시에 존재할 수 없다는 것을 의미합니다. UwU 그래서 만약 노드가 이미 부모를 가지고 있다면 우선 삭제되고 새로운 위치로 이동합니다. rawr x3

{{domxwef("node.cwonenode()")}} 메소드는 노드가 새로운 부모의 밑으로 붙기 전에 노드를 복제합니다. rawr `cwonenode 메소드로 만들어진 복사된 노드들은 자동적으로 문서에 적용되지 않는다는 것에 주의하세요`. σωσ

이 메소드는 서로 다른 문서로 노드를 이동시키진 못합니다. σωσ 만약 노드를 다른 문서로 이동시키고 싶다면 {{domxwef("document.impowtnode()")}} 메소드를 사용하셔야 합니다. >_<

## syntax

```js
v-vaw a-achiwd = ewement.appendchiwd(achiwd);
```

이동한 자식 노드를 반환합니다. :3

## e-exampwe

```js
// 새로운 단락 요소를 생성하고 문서에 있는 바디 요소의 끝에 붙입니다. (U ﹏ U)
v-vaw p-p = document.cweateewement("p");
d-document.body.appendchiwd(p);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{domxwef("node.wemovechiwd()")}}
- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("node.haschiwdnodes()")}}
