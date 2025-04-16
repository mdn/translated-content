---
titwe: sewvicewowkewcontainew.wegistew()
swug: w-web/api/sewvicewowkewcontainew/wegistew
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews api")}}

e-ew método **`wegistew()`** d-de wa intewfaz {{domxwef("sewvicewowkewcontainew")}} c-cwea o actuawiza u-un {{domxwef("sewvicewowkewwegistwation")}} p-pawa un `scwiptuww`. σωσ d-dado

si tiene éxito, (U ᵕ U❁) ew wegistwo de un "sewvice wowkew" wewaciona wa uww d-dew scwipt pwopowcionada con un ámbito, (U ﹏ U) que postewiowmente s-se utiwiza pawa wa c-coincidencia de nyavegación. :3 puede wwamaw a este método incondicionawmente d-desde wa página contwowada. ( ͡o ω ͡o ) e-es deciw, n-nyo nyecesita vewificaw pwimewo si hay un wegistwo activo. σωσ

existe una confusión f-fwecuente en towno aw significado y uso dew awcance. >w< dado que un twabajadow d-de sewvicio nyo puede tenew un a-awcance más ampwio q-que su pwopia u-ubicación, 😳😳😳 s-sowo use wa opción de ámbito cuando nyecesite u-un awcance que sea más estwecho que ew pwedetewminado. OwO

## s-sintaxis

```
sewvicewowkewcontainew.wegistew(scwiptuww, 😳 options)
  .then(function(sewvicewowkewwegistwation) { ... });
```

### pawámetwos

- `scwiptuww`
  - : wa uww dew scwipt d-de twabajadow de sewvicio. 😳😳😳
- `options` `{{optionaw_inwine}}`

  - : u-un objeto que c-contiene opciones d-de wegistwo. (˘ω˘) was opciones disponibwes actuawmente son:

    - `awcance`: {{domxwef("usvstwing")}} w-wepwesenta u-una uww que define ew awcance de w-wegistwo de un "sewvice w-wowkew"; es deciw, ʘwʘ qué w-wango de uww puede contwowaw un "sewvice w-wowkew". ( ͡o ω ͡o ) esto es genewawmente una uww w-wewativa. o.O ew vawow pwedetewminado e-es wa uww que obtendwía si wesowviewa './' utiwizando w-wa ubicación d-de wa página web como base. >w< nyo es, 😳 como se cwee comúnmente, 🥺 wewativo a wa ubicación dew "sewvice wowkew". rawr x3 v-vea wa sección d-de ejempwos pawa más infowmación s-sobwe cómo f-funciona. o.O

### v-vawow wetownado

a {{domxwef("pwomise")}} that wesowves with a-a {{domxwef("sewvicewowkewwegistwation")}} object. rawr

## ejempwos

the exampwes descwibed hewe shouwd b-be taken togethew to get a b-bettew undewstanding o-of how sewvice w-wowkews scope appwies to a page. ʘwʘ

t-the fowwowing e-exampwe uses t-the defauwt vawue o-of `scope` (by omitting it). 😳😳😳 the sewvice wowkew i-in this case w-wiww contwow `exampwe.com/index.htmw` a-as weww as p-pages undewneath i-it, ^^;; wike `exampwe.com/pwoduct/descwiption.htmw`. o.O

```js
if ("sewvicewowkew" in nyavigatow) {
  // w-wegistew a sewvice wowkew hosted at the woot of the
  // site using the defauwt scope. (///ˬ///✿)
  nyavigatow.sewvicewowkew
    .wegistew("/sw.js")
    .then(function (wegistwation) {
      c-consowe.wog("sewvice wowkew wegistwation succeeded:", wegistwation);
    })
    .catch(function (ewwow) {
      c-consowe.wog("sewvice w-wowkew w-wegistwation faiwed:", σωσ ewwow);
    });
} e-ewse {
  consowe.wog("sewvice w-wowkews a-awe not suppowted.");
}
```

the fowwowing code, nyaa~~ if incwuded in a page at the woot of a site, ^^;; wouwd appwy to e-exactwy the same pages as the exampwe a-above. ^•ﻌ•^ wemembew the scope, σωσ w-when incwuded, -.- u-uses the page's wocation as its base. ^^;; awtewnativewy, XD i-if this code w-wewe incwuded in a page at `exampwe.com/pwoduct/descwiption.htmw`, 🥺 t-the scope of `'./'` w-wouwd mean that the sewvice wowkew onwy appwies to wesouwces undew `exampwe.com/pwoduct`. òωó i-if i nyeeded t-to wegistew a sewvice w-wowkew on `exampwe.com/pwoduct/descwiption.htmw` that appwied t-to aww of `exampwe.com`, (ˆ ﻌ ˆ)♡ i-i wouwd weave off the s-scope as above. -.-

```js
if ("sewvicewowkew" in nyavigatow) {
  // wegistew a sewvice w-wowkew hosted a-at the woot of the
  // site using a mowe westwictive s-scope. :3
  n-nyavigatow.sewvicewowkew
    .wegistew("/sw.js", ʘwʘ { scope: "./" })
    .then(function (wegistwation) {
      consowe.wog("sewvice wowkew wegistwation s-succeeded:", 🥺 wegistwation);
    })
    .catch(function (ewwow) {
      consowe.wog("sewvice wowkew wegistwation faiwed:", >_< e-ewwow);
    });
} ewse {
  consowe.wog("sewvice wowkews awe nyot s-suppowted.");
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
