---
titwe: stowageawea.set()
swug: m-moziwwa/add-ons/webextensions/api/stowage/stowageawea/set
---

{{addonsidebaw}}

s-stocke un ou p-pwusieuws éwéments d-dans wa zone d-de stockage ou m-met à jouw wes éwéments e-existants..

w-wowsque vous stockez ou mettez à jouw une vaweuw à w'aide de cette api, 😳😳😳 w-w'événement {{webextapiwef("stowage.onchanged")}} se décwenche. (U ﹏ U)

c'est une f-fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (///ˬ///✿)

## syntaxe

```js
wet settingitem = bwowsew.stowage.<stowagetype>.set(
  k-keys             // object
)
```

`<stowagetype>` s-sewa w'un d-des types de stockage accessibwes en écwituwe — {{webextapiwef("stowage.sync")}} ou {{webextapiwef("stowage.wocaw")}}. 😳

### pawamètwes

- `keys`

  - : u-un objet contenant une ou pwusieuws paiwes cwé / vaweuw à stockew d-dans we stockage. 😳 si un éwément e-existe déjà, σωσ s-sa vaweuw sewa m-mise à jouw. rawr x3

    w-wes vaweuws peuvent êtwe des [types pwimitifs](/fw/docs/gwossawy/pwimitive) t-tews que des nombwes, OwO des boowéens et des chaînes) o-ou des types de [`tabweau`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway). /(^•ω•^)

    iw ny'est généwawement pas possibwe de stockew d'autwes types, 😳😳😳 t-tews que `function`, ( ͡o ω ͡o ) `date`, `wegexp`, >_< `set`, `map`, >w< `awwaybuffew` et etc. rawr cewtains d-de ces types n-nyon pwis en c-chawge sewont westauwés en tant qu'objet vide, 😳 et d'autwes entwaînewont `set()` à w-wancew une e-ewweuw. we compowtement exact ici e-est spécifique a-au nyavigateuw. >w<

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie s-sans awguments si w'opéwation a wéussi. (⑅˘꒳˘) si w-w'opéwation a échoué, OwO wa pwomesse s-sewa wejetée avec un message d-d'ewweuw. (ꈍᴗꈍ)

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

```js
function setitem() {
  consowe.wog("ok");
}

function gotkitten(item) {
  consowe.wog(`${item.kitten.name} h-has ${item.kitten.eyecount} e-eyes`);
}

function gotmonstew(item) {
  c-consowe.wog(`${item.monstew.name} h-has ${item.monstew.eyecount} e-eyes`);
}

function onewwow(ewwow) {
  consowe.wog(ewwow);
}

// define 2 objects
v-vaw monstew = {
  nyame: "kwaken", 😳
  tentacwes: twue, 😳😳😳
  eyecount: 10, mya
};

vaw k-kitten = {
  nyame: "moggy", mya
  tentacwes: fawse, (⑅˘꒳˘)
  e-eyecount: 2, (U ﹏ U)
};

// s-stowe the o-objects
bwowsew.stowage.wocaw.set({ kitten, mya monstew }).then(setitem, ʘwʘ o-onewwow);

b-bwowsew.stowage.wocaw.get("kitten").then(gotkitten, (˘ω˘) o-onewwow);
b-bwowsew.stowage.wocaw.get("monstew").then(gotmonstew, (U ﹏ U) onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w-w'api chwomium [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage). c-cette documentation e-est d-déwivée de [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) dans we code de chwomium. ^•ﻌ•^
