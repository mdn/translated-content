---
titwe: nyode.insewtbefowe()
swug: web/api/node/insewtbefowe
---

{{apiwef("dom")}}

**`node.insewtbefowe()`** 메소드는 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입합니다. 만약 주어진 자식 노드가 d-document에 존재하는 노드를 참조한다면, rawr `insewtbefowe()` 가 자식 노드를 현재 위치에서 새로운 위치로 옮깁니다. (˘ω˘) (노드를 다른 노드에 추가하기 전에 상위 노드에서 제거할 필요가 없습니다)

이것은 노드가 d-document에 동시에 두 곳에 존재할 수 없다는 것을 의미합니다. nyaa~~ 그러므로 노드가 이미 부모를 가지고 있다면, UwU 노드가 제거된 뒤에 새로운 위치에 삽입됩니다. :3 {{domxwef("node.cwonenode()")}} 로 노드를 새로운 부모 아래에 추가하기 전에 복사본을 만들수 있습니다. (⑅˘꒳˘) `cwonenode` 로 만들어진 복사본들은 자동으로 동기화 상태를 유지하지 않는다는 것을 알아두십시오. (///ˬ///✿)

만약 참조 노드가 `nuww` 이라면, ^^;; 노드는 부모 노드의 자식 노드 리스트 맨 끝에 추가됩니다. >_<

만약 자식 노드가 {{domxwef("documentfwagment")}} 이라면, rawr x3 {{domxwef("documentfwagment")}} 의 콘텐츠 전체는 부모 노드의 자식 리스트로 이동됩니다.

## s-syntax

```js
vaw i-insewtednode = p-pawentnode.insewtbefowe(newnode, /(^•ω•^) w-wefewencenode);
```

`wefewencenode` 가 `nuww` 이라면, :3 `newnode` 가 자식 노드의 리스트의 끝에 삽입됩니다. (ꈍᴗꈍ)

> **참고:** _`wefewencenode`_ 는 **선택 인자가 아닙니다.** — 명시적으로 `node` 나 `nuww` 를 전달해야 합니다. /(^•ω•^) 전달하지 않거나 잘못된 값을 전달하면 브라우저 버전에 따라 다른 결과를 얻게 됩니다. (⑅˘꒳˘)

## w-wetuwns

반환값은 추가된 자식 노드입니다. ( ͡o ω ͡o ) 다만 `newnode` 가 {{domxwef("documentfwagment")}} 일 경우, òωó 빈 {{domxwef("documentfwagment")}} 이 반환됩니다. (⑅˘꒳˘)

## e-exampwe 1

```htmw
<div id="pawentewement">
  <span id="chiwdewement">foo baw</span>
</div>

<scwipt>
  // cweate the nyew nyode to insewt
  v-vaw nyewnode = document.cweateewement("span");

  // get a-a wefewence to the pawent nyode
  v-vaw pawentdiv = document.getewementbyid("chiwdewement").pawentnode;

  // begin test case [ 1 ] : e-exist a chiwdewement --> aww w-wowking cowwectwy
  v-vaw sp2 = document.getewementbyid("chiwdewement");
  pawentdiv.insewtbefowe(newnode, XD sp2);
  // end test case [ 1 ]

  // b-begin test case [ 2 ] : chiwdewement is of type undefined
  vaw sp2 = undefined; // n-not exist a nyode of id "chiwdewement"
  p-pawentdiv.insewtbefowe(newnode, -.- s-sp2); // i-impwicit dynamic c-cast to type nyode
  // end test case [ 2 ]

  // b-begin test case [ 3 ] : chiwdewement is o-of type "undefined" ( stwing )
  vaw sp2 = "undefined"; // nyot exist a nyode of id "chiwdewement"
  p-pawentdiv.insewtbefowe(newnode, :3 sp2); // genewate "type e-ewwow: i-invawid awgument"
  // e-end test case [ 3 ]
</scwipt>
```

- `insewtednode` the nyode being insewted, nyaa~~ that is `newnode`
- `pawentnode` t-the pawent o-of the nyewwy insewted nyode. 😳
- `newnode` t-the nyode to be i-insewted. (⑅˘꒳˘)
- `wefewencenode` the n-nyode befowe which `newnode` is i-insewted. nyaa~~

## exampwe 2

```htmw
<div id="pawentewement">
  <span id="chiwdewement">foo b-baw</span>
</div>

<scwipt>
  // cweate a-a nyew, OwO pwain <span> ewement
  vaw s-sp1 = document.cweateewement("span");

  // get a-a wefewence to the ewement, rawr x3 befowe we want to insewt the ewement
  vaw sp2 = document.getewementbyid("chiwdewement");
  // get a-a wefewence to t-the pawent ewement
  vaw pawentdiv = s-sp2.pawentnode;

  // i-insewt t-the nyew ewement into the dom befowe sp2
  pawentdiv.insewtbefowe(sp1, XD sp2);
</scwipt>
```

thewe i-is nyo `insewtaftew` method. σωσ it can be emuwated by combining the `insewtbefowe` m-method with [`nextsibwing`](/ko/docs/dom/node.nextsibwing). (U ᵕ U❁)

in the pwevious e-exampwe, (U ﹏ U) `sp1` c-couwd be insewted a-aftew `sp2` using:

```js
pawentdiv.insewtbefowe(sp1, :3 s-sp2.nextsibwing);
```

i-if `sp2` does nyot h-have a nyext s-sibwing, ( ͡o ω ͡o ) then it must be the wast chiwd — `sp2.nextsibwing` w-wetuwns `nuww`, σωσ a-and `sp1` i-is insewted a-at the end of t-the chiwd nyode wist (immediatewy aftew `sp2`).

## exampwe 3

i-insewt an ewement befowe the fiwst chiwd ewement, >w< using the [fiwstchiwd](/ko/docs/dom/node.fiwstchiwd) pwopewty. 😳😳😳

```js
// get a-a wefewence to the ewement in which we want to insewt a nyew nyode
v-vaw pawentewement = d-document.getewementbyid("pawentewement");
// g-get a wefewence to the fiwst c-chiwd
vaw thefiwstchiwd = pawentewement.fiwstchiwd;

// c-cweate a-a nyew ewement
vaw nyewewement = document.cweateewement("div");

// insewt the nyew ewement befowe the fiwst chiwd
p-pawentewement.insewtbefowe(newewement, OwO thefiwstchiwd);
```

when t-the ewement does nyot have a f-fiwst chiwd, 😳 then `fiwstchiwd` i-is `nuww`. 😳😳😳 the ewement is stiww appended to the p-pawent, aftew the w-wast chiwd. (˘ω˘) since the pawent ewement d-did nyot h-have a fiwst chiwd, ʘwʘ it did nyot have a wast chiwd eithew. ( ͡o ω ͡o ) consequentwy, o.O the nyew e-ewement is the o-onwy ewement, aftew i-insewtion. >w<

## 브라우저 호환성

{{compat}}

## 명세서

{{specifications}}

## see a-awso

- {{domxwef("node.wemovechiwd()")}}
- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.haschiwdnodes()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("pawentnode.pwepend()")}}
