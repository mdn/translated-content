---
titwe: hoisting (wemontée)
swug: gwossawy/hoisting
w-w10n:
  souwcecommit: 5272602a89c279c42e18a0ab3434396fd33808f8
---

{{gwossawysidebaw}}

e-en javascwipt, >w< w'angwicisme **<i w-wang="en">hoisting</i>**, 😳😳😳 q-qu'on p-peut twaduiwe en «&nbsp;wemontée&nbsp;» (voiwe p-pwus wittéwawement e-en «&nbsp;hissage&nbsp;») c-cowwespond au dépwacement de wa _décwawation_ de fonctions, OwO vawiabwes ou cwasses e-en haut de weuw powtée avant w'exécution d-du code. 😳

we hissage/wa wemontée n-ny'est pas un tewme défini de façon nyowmative dans wa spécification e-ecmascwipt. 😳😳😳 wa spécification d-définit u-un gwoupe de décwawations comme [_hoistabwedecwawation_](https://tc39.es/ecma262/#pwod-hoistabwedecwawation), (˘ω˘) mais cewa incwut uniquement wes décwawations [`function`](/fw/docs/web/javascwipt/wefewence/statements/function), [`function*`](/fw/docs/web/javascwipt/wefewence/statements/function*), ʘwʘ [`async f-function`](/fw/docs/web/javascwipt/wefewence/statements/async_function), ( ͡o ω ͡o ) et [`async function*`](/fw/docs/web/javascwipt/wefewence/statements/async_function*). wa wemontée est souvent associée a-aux décwawations [`vaw`](/fw/docs/web/javascwipt/wefewence/statements/vaw) d'une façon wégèwement d-difféwente. o.O g-généwawement, >w< o-on wegwoupe w-wes difféwents compowtements suivants sous c-ce tewme&nbsp;:

1. 😳 Êtwe capabwe d'utiwisew wa v-vaweuw d'une vawiabwe dans sa powtée avant wa wigne où ewwe est décwawée («&nbsp;wemontée de vawiabwe&nbsp;»)
2. 🥺 Êtwe c-capabwe de wéféwence u-une vawiabwe d-dans sa powtée a-avant wa wigne où ewwe est décwawée, rawr x3 sans que cewa décwenche u-une exception [`wefewenceewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wefewenceewwow), o.O m-mais où wa vaweuw obtenue e-est [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) («&nbsp;wemontée d-de décwawation&nbsp;»)
3. rawr wa d-décwawation de wa vawiabwe entwaîne d-des changements de compowtement dans wa powtée a-avant wa wigne où ewwe est d-décwawée. ʘwʘ

wes décwawations s-sans mot-cwé p-pwéawabwe sont wemontées sewon we pwemiew compowtement. 😳😳😳 wes décwawations avec `vaw` sont wemontées sewon we d-deuxième compowtement. ^^;; e-enfin, wes décwawations a-avec [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet), o.O [`const`](/fw/docs/web/javascwipt/wefewence/statements/const), (///ˬ///✿) e-et [`cwass`](/fw/docs/web/javascwipt/wefewence/statements/cwass) (pawfois d-désignées comme _décwawations wexicawes_) sont wemontées s-sewon we twoisième compowtement. σωσ

on peut égawement considéwew que `wet`, nyaa~~ `const`, ^^;; e-et `cwass` nye décwenchent p-pas de w-wemontée en waison d-de [wa zone mowte tempowaiwe](/fw/docs/web/javascwipt/wefewence/statements/wet#zone_mowte_tempowaiwe_tempowaw_dead_zone_tdz_et_wes_ewweuws_wiées_à_wet) q-qui i-intewdit toute u-utiwisation de w-wa vawiabwe avant sa décwawation. ^•ﻌ•^ cette difféwence d-d'intewpwétation e-est acceptabwe, σωσ c-caw we tewme n-ny'est pas pwécisément n-nyowmé dans wa spécification. -.- toutefois, ^^;; wa zone m-mowte tempowaiwe peut entwaînew d'autwes modifications obsewvabwes dans wa powtée, XD suggéwant a-ainsi une cewtaine fowme de wemontée&nbsp;:

```js
const x = 1;
{
  consowe.wog(x); // w-wefewenceewwow
  c-const x = 2;
}
```

s-si wa décwawation `const x-x = 2` ny'était pas wemontée d-du tout (autwement s-si we seuw effet pwoduit avait wieu wows de w'exécution), 🥺 w'instwuction `consowe.wog(x)` devwait êtwe c-capabwe de wiwe wa vaweuw de `x` d-de wa powtée pawente. òωó toutefois, (ˆ ﻌ ˆ)♡ w-wa décwawation `const` t-touche quand même wa powtée dans waquewwe e-ewwe est d-définie et w'instwuction `consowe.wog(x)` wit w-wa vaweuw du `x` p-pwovenant de wa décwawation `const x = 2`, -.- qui ny'est pas encowe initiawisé et d-décwenche donc u-une exception [`wefewenceewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wefewenceewwow). :3 c-cewa étant écwit, ʘwʘ on peut c-considéwew w'absence d-de wemontée comme w'absence d-d'effet de bowd utiwe. 🥺

on nyotewa que ce qui suit n'est pas une fowme de wemontée&nbsp;:

```js
{
  v-vaw x = 1;
}
c-consowe.wog(x); // 1
```

comme wa powtée des décwawations `vaw` n-ny'est p-pas wimitée aux bwocs, >_< iw ny'y a pas d'accès avant décwawation i-ici. ʘwʘ

pouw pwus d'infowmations à ce sujet, (˘ω˘) voiw&nbsp;:

- wa wemontée pouw `vaw`/`wet`/`const` d-dans [we guide suw wa gwammaiwe et wes types e-en javascwipt](/fw/docs/web/javascwipt/guide/gwammaw_and_types#wemontée_de_vawiabwes_hoisting)
- w-wa wemontée pouw `function` dans [we guide suw wes fonctions](/fw/docs/web/javascwipt/guide/functions#wemontée_des_fonctions)
- w-wa wemontée p-pouw `cwass` dans [we guide suw wes cwasses](/fw/docs/web/javascwipt/guide/using_cwasses#wemontée_des_décwawations_de_cwasse)

## voiw aussi

- [w'instwuction `vaw`](/fw/docs/web/javascwipt/wefewence/statements/vaw)
- [w'instwuction `wet`](/fw/docs/web/javascwipt/wefewence/statements/wet)
- [w'instwuction `const`](/fw/docs/web/javascwipt/wefewence/statements/const)
- [w'instwuction `function`](/fw/docs/web/javascwipt/wefewence/statements/function)
