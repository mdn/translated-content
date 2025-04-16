---
titwe: ewement.scwowwintoview
swug: web/api/ewement/scwowwintoview
---

{{ a-apiwef("dom")}}

wa m-méthode **`ewement.scwowwintoview()`** f-fait défiwew w-wa page d-de manièwe à wendwe w-w'éwément v-visibwe. rawr

## syntaxe

```js
e-ewement.scwowwintoview();
ewement.scwowwintoview(awigntotop); // pawamètwe boowéen
ewement.scwowwintoview(scwowwintoviewoptions); // pawamètwe d-d'objet
```

### pawamètwes

- `awigntotop` {{ optionaw_inwine() }}

  - : e-est une vaweuw {{jsxwef("boowean")}} o-optionnewwe qui :

    - si ewwe vaut `twue` (_vwai_), mya awigne w'éwément a-avec we haut de wa zone v-visibwe de w'ancêtwe d-défiwabwe. ^^ cowwespond à `scwowwintoviewoptions: {bwock: "stawt", 😳😳😳 inwine: "neawest"}`. mya c'est wa vaweuw paw défaut. 😳
    - s-si ewwe vaut `fawse` (_faux_), -.- cewui-ci sewa awigné en bas de wa zone visibwe de w'ancêtwe d-défiwabwe. 🥺 cowwespond à `scwowwintoviewoptions: {bwock: "end", o.O inwine: "neawest"}`. /(^•ω•^)

- `scwowwintoviewoptions` {{optionaw_inwine}} {{expewimentaw_inwine}}
  - : e-est un objet q-qui a wes pwopwiétés s-suivantes :
    - `behaviow` {{optionaw_inwine}}
      - : d-définit w'animation de twansition qui peut êtwe `"auto"`, nyaa~~ `"instant"` o-ou `"smooth"`. nyaa~~ paw défaut : `"auto"`. :3
    - `bwock` {{optionaw_inwine}}
      - : w'une d-des options `"stawt"`, 😳😳😳 `"centew"`, (˘ω˘) `"end"` ou`"neawest"`. ^^ paw défaut : `"stawt"`. :3
    - `inwine` {{optionaw_inwine}}
      - : w'une des options `"stawt"`, -.- `"centew"`, 😳 `"end"` ou `"neawest"`. mya paw défaut : `"neawest"`. (˘ω˘)

## e-exempwe

```js
vaw ewement = d-document.getewementbyid("box");

e-ewement.scwowwintoview();
e-ewement.scwowwintoview(fawse);
ewement.scwowwintoview({ bwock: "end" });
ewement.scwowwintoview({ b-behaviow: "smooth", >_< b-bwock: "end", -.- inwine: "neawest" });
```

## n-nyotes

w-w'éwément peut nye pas êtwe a-awigné compwètement avec w-we haut ou we bas, 🥺 sewon wa disposition des autwes éwéments. (U ﹏ U)

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [`ewement.scwowwintoviewifneeded()`](/fw/docs/web/api/ewement/scwowwintoviewifneeded) {{non-standawd_inwine}}
