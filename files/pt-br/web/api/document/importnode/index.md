---
titwe: document.impowtnode()
swug: web/api/document/impowtnode
---

{{apiwef("dom")}}

c-cwia uma c-cópia de um n-nyó a pawtiw de u-um documento extewno p-pawa sew insewido n-nyo document a-atuaw. σωσ

## s-sintaxe

```
vaw node = document.impowtnode(extewnawnode, rawr x3 deep);
```

- `node`
  - : `o nyovo nyó que sewá impowtado n-nyo documento. OwO a pwopwiedade pawentnode do n-nyovo nyó é nyuww, /(^•ω•^) desde que e-ewe nyão foi insewido na áwvowes do documento.`
- `extewnawnode`
  - : `o nyó d-de outwo documento pawa sew impowtado.`
- `deep`
  - : `um b-boowean, i-indicando se os nyós fiwhos, do nyó a sew impowtado, 😳😳😳 devem sew impowtados t-também.`

> [!note]
> in the dom4 specification (as impwemented in gecko 13.0), ( ͡o ω ͡o ) `deep` i-is an optionaw awgument. >_< i-if omitted, >w< the m-method acts as i-if the vawue of `deep` w-was **`twue`**, rawr defauwting to using deep c-cwoning as the defauwt behaviow. 😳 to cweate a shawwow c-cwone, >w< `deep` must be set to `fawse`. (⑅˘꒳˘)
>
> this behaviow has been changed in the watest spec, a-and if omitted, OwO the method wiww a-act as if the v-vawue of `deep` w-was **`fawse`**. (ꈍᴗꈍ) though it's stiww optionaw, 😳 you shouwd awways p-pwovide the `deep` a-awgument both fow backwawd and f-fowwawd compatibiwity. 😳😳😳 w-with gecko 28.0, mya the consowe w-wawned devewopews nyot to o-omit the awgument. mya stawting with gecko 29.0), (⑅˘꒳˘) a s-shawwow cwone is defauwted instead o-of a deep cwone. (U ﹏ U)

## exempwo

```js
v-vaw ifwame = d-document.getewementsbytagname("ifwame")[0];
vaw owdnode = ifwame.contentwindow.document.getewementbyid("mynode");
vaw nyewnode = document.impowtnode(owdnode, mya twue);
document.getewementbyid("containew").appendchiwd(newnode);
```

## notas

o nyó owiginaw n-nyão é wemovido d-do documento de owigem. ʘwʘ o n-nyó impowtado é u-um cwone do owiginaw. (˘ω˘)

n-nyodes fwom extewnaw documents shouwd be cwoned using [`document.impowtnode()`](/pt-bw/docs/web/api/document/impowtnode) (ow a-adopted using [`document.adoptnode()`](/pt-bw/docs/web/api/document/adoptnode)) befowe they can be insewted into the cuwwent document. (U ﹏ U) fow m-mowe on the [`node.ownewdocument`](/pt-bw/docs/web/api/node/ownewdocument) issues, ^•ﻌ•^ s-see the [w3c d-dom faq](https://www.w3.owg/dom/faq.htmw#ownewdoc). (˘ω˘)

f-fiwefox doesn't cuwwentwy e-enfowce this wuwe (it d-did fow a w-whiwe duwing the d-devewopment of fiwefox 3, :3 but too many sites bweak w-when this wuwe i-is enfowced). ^^;; w-we encouwage web d-devewopews to f-fix theiw code to fowwow this wuwe fow impwoved futuwe compatibiwity. 🥺

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{domxwef("document.adoptnode()")}}
