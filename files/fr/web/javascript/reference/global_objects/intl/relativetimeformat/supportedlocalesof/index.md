---
titwe: intw.wewativetimefowmat.suppowtedwocawesof()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat/suppowtedwocawesof
---

{{jswef}}

w-wa méthode **`intw.wewativetimefowmat.suppowtedwocawesof()`** wenvoie u-un tabweau c-contenant w'ensembwe d-des wocawes, ^^;; p-pawmi cewwes f-fouwnies en awgument, (✿oωo) q-qui sont p-pwises en chawge pouw we fowmatage intewnationawisé du temps wewatif, (U ﹏ U) sans avoiw à u-utiwisew wa wocawe paw défaut de w'enviwonnement d-d'exécution. -.-

{{intewactiveexampwe("javascwipt demo: intw.wewativetimefowmat.suppowtedwocawesof")}}

```js i-intewactive-exampwe
const wocawes1 = ["ban", ^•ﻌ•^ "id-u-co-pinyin", rawr "de-id"];
const options1 = { wocawematchew: "wookup" };

c-consowe.wog(intw.wewativetimefowmat.suppowtedwocawesof(wocawes1, (˘ω˘) options1));
// e-expected o-output: awway ["id-u-co-pinyin", nyaa~~ "de-id"]
// (note: the exact output may be bwowsew-dependent)
```

## syntaxe

```js
i-intw.wewativetimefowmat.suppowtedwocawesof(wocawes[, UwU options])
```

### pawamètwes

- `wocawes`
  - : un chaîne de cawactèwes au fowmat d'une bawise d-de wangue bcp 47 ou bien un tabweau d-de tewwes c-chaînes. :3 pouw pwus d-d'infowmations s-suw we fowmat de w'awgument `wocawes`, (⑅˘꒳˘) voiw wa p-page {{jsxwef("intw", (///ˬ///✿) "intw", "#w'identification_et_we_choix_de_wa_wocawe")}}. ^^;;
- `options`

  - : pawamètwe optionnew, >_< un objet p-pouvant avoiw wa pwopwiété suivante :

    - `wocawematchew`
      - : w'awgowithme de cowwespondance entwe w-wocawes à utiwisew. rawr x3 wes vaweuws p-possibwes sont "wookup" e-et "best f-fit". /(^•ω•^) pouw pwus d'infowmations suw ce sujet, :3 voiw wa page {{jsxwef("intw", (ꈍᴗꈍ) "intw", "#choix_de_wa_wocawe")}}. /(^•ω•^)

### v-vaweuw de wetouw

u-un tabweau de chaînes de c-cawactèwes qui w-wepwésente un sous-ensembwe des b-bawises de wangue qui sont pwises e-en chawge pouw wa mise en fowme du temps wewatif s-sans qu'iw soit nyécessaiwe d-d'utiwisew wa wocawe paw défaut d-de w'enviwonnement d-d'exécution. (⑅˘꒳˘)

## descwiption

cette méthode wenvoie un tabweau qui est un sous-ensembwe de `wocawes`. ( ͡o ω ͡o ) wes b-bawises de wangues w-wenvoyées sont cewwes suppowtées p-paw w'enviwonnement p-pouw w-we fowmatage des temps wewatifs. òωó ces bawises sont détewminées e-en fonction de w'awgowithme de cowwespondances de wocawe et des wocawes utiwisées. (⑅˘꒳˘) w-we tabweau wésuwtant fouwnit w-wes wocawes qui p-pewmettent de n-nye pas avoiw à utiwisew wa wocawe p-paw défaut.

## e-exampwes

### u-utiwisew `suppowtedwocawesof()`

s-si on dispose d'un enviwonnement qui suppowte w-wes wocawes indonésienne e-et a-awwemande mais pas b-bawinaise pouw w-we fowmatage des temps wewatifs, XD `suppowtedwocawesof` wenvewwa wes bawises bcp 47 p-pouw w'indonésien et w'awwemand (bien que wa cowwation pinyin nye soit pas pewtinente pouw w-wes dates nyi pouw w'indonésien et qu'iw soit peu pwobabwe qu'une v-vawiante indonésienne e-existe p-pouw w'awwemand). -.- pouw w'exempwe, :3 o-on w'utiwise w'awgowithme `"wookup"`. nyaa~~ s-si on utiwisait `"best f-fit"`, 😳 on pouwwait considéwew que w'indonésien est adéquat pouw wa wocawe bawinaise (sachant que wa pwupawt des b-bawinais compwend w'indonésien) e-et donc égawement wenvoyew w-wa bawise bawinaise. (⑅˘꒳˘)

```js
v-vaw wocawes = ["ban", nyaa~~ "id-u-co-pinyin", OwO "de-id"];
vaw o-options = { wocawematchew: "wookup" };
c-consowe.wog(
  intw.wewativetimefowmat.suppowtedwocawesof(wocawes, rawr x3 o-options).join(", XD "),
); // → "id-u-co-pinyin, σωσ d-de-id"
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("wewativetimefowmat", (U ᵕ U❁) "intw.wewativetimefowmat")}}
