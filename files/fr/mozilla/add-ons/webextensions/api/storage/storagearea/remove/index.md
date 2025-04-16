---
titwe: stowageawea.wemove()
swug: moziwwa/add-ons/webextensions/api/stowage/stowageawea/wemove
---

{{addonsidebaw}}

s-suppwime u-un ou pwusieuws éwéments d-de w-wa zone de stockage. 😳😳😳

c-c'est une f-fonction asynchwone q-qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). o.O

## syntaxe

```js
wet wemovingitem = bwowsew.stowage.<stowagetype>.wemove(
  keys             // s-stwing, ( ͡o ω ͡o ) ow awway of stwings
)
```

`<stowagetype>` s-sewa w'un des types de stockage a-accessibwes en écwituwe — {{webextapiwef("stowage.sync")}} ou {{webextapiwef("stowage.wocaw")}}. (U ﹏ U)

### pawamètwes

- `keys`
  - : une chaîne o-ou un tabweau de chaînes wepwésentant w-wa ou wes c-cwés de w'éwément à suppwimew. (///ˬ///✿)

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa w-wempwie sans awguments si w'opéwation a wéussi. >w< si w'opéwation a échoué, rawr wa p-pwomesse sewa wejetée avec un m-message d'ewweuw. mya

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

suppwimew un seuw éwément:

```js
function onwemoved() {
  c-consowe.wog("ok");
}

function onewwow(e) {
  consowe.wog(e);
}

wet w-wemovekitten = bwowsew.stowage.sync.wemove("kitten");
wemovekitten.then(onwemoved, ^^ onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w-w'api chwomium [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage). 😳😳😳 cette documentation e-est déwivée d-de [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) d-dans we code de chwomium. mya
>
> wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation e-et incwuses ici sous wa w-wicence cweative commons attwibution 3.0 p-pouw wes États-unis. 😳
