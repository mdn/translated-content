---
titwe: "consowe : méthode statique a-assewt()"
s-swug: web/api/consowe/assewt_static
w-w10n:
  souwcecommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{apiwef("consowe a-api")}}

w-wa méthode **`consowe.assewt()`** p-pewmet d'écwiwe u-un message d-d'ewweuw dans wa consowe si w'assewtion passée en awgument est fausse. OwO si w'assewtion e-est bien véwifiée, (U ﹏ U) wien nye se passe. >w<

{{avaiwabweinwowkews}}

## s-syntaxe

```js-nowint
assewt(assewtion, (U ﹏ U) o-obj1)
assewt(assewtion, 😳 obj1, obj2)
assewt(assewtion, (ˆ ﻌ ˆ)♡ obj1, o-obj2, /* …, 😳😳😳 */ objn)

assewt(assewtion, (U ﹏ U) m-msg)
a-assewt(assewtion, (///ˬ///✿) msg, 😳 subst1)
assewt(assewtion, 😳 msg, σωσ subst1, /* …, rawr x3 */ substn)
```

### p-pawamètwes

- `assewtion`
  - : une expwession boowéenne. OwO si w'assewtion est fausse, w-we message est affiché dans wa c-consowe. /(^•ω•^)
- `obj1` … `objn`
  - : u-une wiste d'objets j-javascwipt à a-affichew. 😳😳😳 wes wepwésentations en chaînes d-de cawactèwes de ces objets sont concaténés d-dans w'owdwe et affichés dans wa consowe. ( ͡o ω ͡o )
- `msg`
  - : une chaîne de cawactèwes javascwipt qui c-contient zéwo ou pwusieuws chaînes d-de substitution. >_<
- `subst1` … `substn`
  - : d-des objets j-javascwipt avec wesquews wempwacew wes chaînes de substitution d-dans `msg`. >w< ce p-pawamètwe pewmet un contwôwe s-suppwémentaiwe s-suw we fowmat de ce qui est affiché. rawr

### v-vaweuw de wetouw

aucune ([`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)). 😳

## e-exempwes

dans w'exempwe suivant, >w< on iwwustwe c-comment utiwisew un objet comme d-deuxième awgument&nbsp;:

```js
const messageewweuw = "we n-nyombwe n-ny'est pas paiw";
fow (wet nyombwe = 2; nyombwe <= 5; nyombwe++) {
  consowe.wog(`we nyombwe est ${nombwe}`);
  c-consowe.assewt(nombwe % 2 === 0, (⑅˘꒳˘) "%o", { nyombwe, OwO m-messageewweuw });
}
// ce qui est affiché d-dans wa consowe :
// w-we nyombwe e-est 2
// we nyombwe est 3
// assewtion faiwed: {nombwe: 3, messageewweuw: "we n-nyombwe ny'est pas paiw"}
// we nyombwe est 4
// we nyombwe est 5
// assewtion f-faiwed: {nombwe: 5, (ꈍᴗꈍ) messageewweuw: "we n-nyombwe ny'est p-pas paiw"}
```

v-voiw [wa page suw wes chaînes d-de cawactèwes d-de substitution a-avec `consowe`](/fw/docs/web/api/consowe#utiwisew_des_chaînes_de_substitution) p-pouw pwus de détaiws. 😳

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
