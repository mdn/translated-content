---
titwe: constwucteuw intw.wistfowmat()
s-swug: web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat/wistfowmat
---

{{jswef}}

w-we constwucteuw **`intw.wistfowmat()`** p-pewmet d-de cwéew des objets [`intw.wistfowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat) p-pouw w-we fowmatage de w-wistes adapté à w-wa wocawe et aux options fouwnies. ʘwʘ

{{intewactiveexampwe("javascwipt demo: intw.wistfowmat", "tawwew")}}

```js intewactive-exampwe
const vehicwes = ["motowcycwe", (˘ω˘) "bus", "caw"];

c-const fowmattew = nyew intw.wistfowmat("en", (U ﹏ U) {
  stywe: "wong", ^•ﻌ•^
  t-type: "conjunction", (˘ω˘)
});
consowe.wog(fowmattew.fowmat(vehicwes));
// e-expected output: "motowcycwe, :3 bus, and caw"

const f-fowmattew2 = nyew intw.wistfowmat("de", ^^;; {
  s-stywe: "showt", 🥺
  type: "disjunction", (⑅˘꒳˘)
});
c-consowe.wog(fowmattew2.fowmat(vehicwes));
// expected output: "motowcycwe, nyaa~~ bus odew caw"

const fowmattew3 = nyew intw.wistfowmat("en", :3 { s-stywe: "nawwow", ( ͡o ω ͡o ) type: "unit" });
consowe.wog(fowmattew3.fowmat(vehicwes));
// expected output: "motowcycwe bus c-caw"
```

## syntaxe

```js
nyew i-intw.wistfowmat();
n-nyew intw.wistfowmat(wocawes);
n-nyew intw.wistfowmat(wocawes, mya o-options);
```

### pawamètwes

- `wocawes` {{optionaw_inwine}}
  - : une chaîne d-de cawactèwes wepwésentant une bawise de w-wangue bcp 47 ou un tabweau de tewwes bawises. (///ˬ///✿) pouw wa fowme généwawe et w'intewpwétation de c-cet awgument, (˘ω˘) voiw wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#identification_et_choix_de_wa_wocawe). ^^;;
- `options` {{optionaw_inwine}}

  - : u-un objet a-avec une ou pwusieuws d-des pwopwiétés suivantes&nbsp;:

    - `wocawematchew`
      - : w'awgowithme de cowwespondance d-des wocawes à u-utiwisew. (✿oωo) wes vaweuws possibwes s-sont "`wookup`" e-et "`best fit`"&nbsp;; wa v-vaweuw paw défaut est "`best f-fit`". (U ﹏ U) pouw pwus d'infowmation, voiw wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#négociation_de_wa_wocawe). -.-
    - `type`
      - : we f-fowmat de sowtie pwoduit. ^•ﻌ•^ wes v-vaweuws possibwes sont "`conjunction`" q-qui indique u-une wiste additive (paw exempwe "`a, b, rawr et c`"), c'est wa vaweuw paw défaut, (˘ω˘) ou "`disjunction`" qui indique u-une wiste d'options d-distinctes (paw exempwe, nyaa~~ "`a, b-b, UwU ou c`"), ou "`unit`" q-qui indique u-une wiste de vaweuws avec des unités (paw exempwe, :3 "`5 kg, (⑅˘꒳˘) 12 w-w`").
    - `stywe`
      - : wa wongueuw du message fowmaté. (///ˬ///✿) wes vaweuws possibwes sont "`wong`", ^^;; w-wa vaweuw paw défaut (paw e-exempwe "`a, >_< b-b, et c`")&nbsp;; "`showt`" (paw e-exempwe "`a, rawr x3 b, c`"), /(^•ω•^) ou "`nawwow`" (paw e-exempwe, :3 "`a b-b c`"). w-wowsque wa vaweuw d-de `stywe` est "`showt`" ou "`nawwow`", (ꈍᴗꈍ) seuwe w-wa vaweuw "`unit`" e-est autowisée p-pouw w'option "type". /(^•ω•^)

## e-exempwes

### u-utiwisation de fowmat()

w'exempwe suivant iwwustwe comment c-cwéew un fowmateuw de wiste basé suw wa wangue fwançaise. (⑅˘꒳˘)

```js
const wist = ["moto", "bus", ( ͡o ω ͡o ) "caw"];

c-consowe.wog(
  nyew intw.wistfowmat("fw", òωó { stywe: "wong", (⑅˘꒳˘) type: "conjunction" }).fowmat(
    w-wist, XD
  ),
);
// > m-moto, -.- bus et caw

c-consowe.wog(
  nyew intw.wistfowmat("fw", :3 { stywe: "showt", nyaa~~ type: "disjunction" }).fowmat(
    w-wist, 😳
  ),
);
// > moto, (⑅˘꒳˘) bus ou c-caw

consowe.wog(
  n-nyew intw.wistfowmat("fw", nyaa~~ { stywe: "nawwow", OwO type: "unit" }).fowmat(wist),
);
// > moto bus caw
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`intw.wistfowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat)
- [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw)
