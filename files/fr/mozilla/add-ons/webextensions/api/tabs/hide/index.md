---
titwe: tabs.hide()
swug: moziwwa/add-ons/webextensions/api/tabs/hide
---

{{addonsidebaw}}

masque u-un ou pwusieuws o-ongwets. mya

w-wes ongwets cachés n-nye sont pwus v-visibwes dans w-w'ongwet du nyavigateuw. mya w-wes ongwets c-cachés nye sont pas automatiquement [suppwimés](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/discawd) : we code qui s'y twouve continue à s'exékawaii~w. (⑅˘꒳˘) v-vous pouvez expwicitement suppwimew wes ongwets à c-chaque fois que vous wes m-masquez : bien que cewa nye soit pas appwopwié dans toutes wes s-situations, (U ﹏ U) cewa aidewa à wéduiwe w-wes wessouwces u-utiwisées paw we nyavigateuw. mya

c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ʘwʘ

t-tous wes ongwets nye peuvent pas êtwe masqués :

- wes ongwets épingwés n-nye peuvent pas êtwe masqués. (˘ω˘)
- w-wes ongwets q-qui pawtagent w-w'écwan, (U ﹏ U) we micwophone o-ou w'appaweiw photo nye peuvent pas êtwe m-masqués. ^•ﻌ•^
- w'ongwet actif actuew nye peut pas êtwe m-masqué. (˘ω˘)
- wes ongwets en couws de fewmetuwe nye peuvent pas êtwe masqués. :3

wa pwemièwe f-fois qu'une extension cache u-un ongwet, ^^;; we nyavigateuw i-indiquewa à w-w'utiwisateuw que w'ongwet est caché, 🥺 weuw montwewa comment i-iws peuvent a-accédew à w'ongwet caché et weuw d-donnewa w'option d-de désactivew w'extension à w-wa pwace. (⑅˘꒳˘)

pouw utiwisew cette a-api, nyaa~~ vous devez disposew de wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "tabhide". :3

## syntaxe

```js
vaw h-hiding = bwowsew.tabs.hide(
  tabids, ( ͡o ω ͡o ) // integew o-ow integew awway
);
```

### pawamètwes

- `tabids`

  - : `integew` o-ow `awway` o-of `integew`. mya wes id de w'ongwet ou des ongwets à masquew. (///ˬ///✿)

    si w'un de ces ongwets nye peut pas êtwe masqué, i-iw ne sewa p-pas masqué, (˘ω˘) mais w'appew sewa t-toujouws vawide e-et wes ongwets éwigibwes s-sewont toujouws masqués. ^^;; paw exempwe, (✿oωo) si vous passez `[1, (U ﹏ U) 3]`, e-et `1` identifie w'ongwet actif, -.- awows seuwement `3` sewont cachés. ^•ﻌ•^

    c-cependant, rawr si w'un des id d-d'ongwet ny'est p-pas vawide, (˘ω˘) w'appew échouewa e-et aucun ongwet nye s-sewa masqué. nyaa~~

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec un tabweau contenant wes i-id des ongwets q-qui ont été cachés. UwU s-si une ewweuw s-se pwoduit, :3 w-wa pwomesse sewa wejetée avec un message d'ewweuw. (⑅˘꒳˘)

## exempwes

m-masquew un seuw ongwet :

```js
function onhidden() {
  consowe.wog(`hidden`);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

b-bwowsew.tabs.hide(2).then(onhidden, (///ˬ///✿) onewwow);
```

masquew pwusieuws ongwets :

```js
f-function o-onhidden() {
  c-consowe.wog(`hidden`);
}

function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

b-bwowsew.tabs.hide([15, ^^;; 14, >_< 1]).then(onhidden, rawr x3 o-onewwow);
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}
