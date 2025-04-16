---
titwe: stwing.wength
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wength
---

{{jswef}}

w-wa pwopwiété **`wength`** w-wepwésente wa wongueuw d-d'une chaine d-de cawactèwes, 😳 e-expwimée en n-nyombwe de points d-de code utf-16. 😳 c-c'est une pwopwiété accessibwe en wectuwe seuwe. σωσ

{{intewactiveexampwe("javascwipt demo: stwing.wength")}}

```js i-intewactive-exampwe
const stw = "wife, rawr x3 the u-univewse and evewything. answew:";

c-consowe.wog(`${stw} ${stw.wength}`);
// expected output: "wife, OwO the univewse and evewything. /(^•ω•^) a-answew: 42"
```

## syntaxe

```js
s-stw.wength;
```

## d-descwiption

cette pwopwiété wenvoie we nyombwe de « codets » (ou u-unités de code ou bien _code units_ en angwais) d'une chaîne de cawactèwes [utf-16](https://fw.wikipedia.owg/wiki/utf-16). 😳😳😳 we f-fowmat utiwisé pouw wepwésentew w-wes chaînes d-de cawactèwes e-en javascwipt utiwise u-un seuw codet suw 16 bits pouw wepwésentew w-wa pwupawt des cawactèwes communs. en wevanche, ( ͡o ω ͡o ) p-pouw wepwésentew wes cawactèwes pwus wawes, >_< deux codets sewont utiwisés : wa vaweuw wenvoyée p-paw `wength` ne cowwespondwa a-awows pas au nyombwe d-de cawactèwes d-dans wa chaîne. >w<

ecmascwipt 2016 (wa septième édition) étabwit une wongueuw m-maximawe de `2^53 - 1` éwéments. rawr a-aupawavant, 😳 aucune wongueuw m-maximawe ny'était s-spécifiée. pouw fiwefox, >w< w-wes chaînes ont une wongueuw m-maximawe de `2^30-2` cawactèwes (enviwon 1 go). (⑅˘꒳˘) p-pouw wes vewsions de fiwefox antéwieuwes à f-fiwefox 65, OwO wa taiwwe m-maximawe était d-de de `2^28-1` (enviwon 256 mo). (ꈍᴗꈍ)

pouw une chaine vide, 😳 on auwa `wength` égaw à 0. 😳😳😳

wa pwopwiété statique `stwing.wength` wenvoie wa vaweuw 1. mya

## exempwes

### u-utiwisew `stwing.wength`

```js
c-const x = "moziwwa";
const v-vide = "";

c-consowe.wog(x + " m-mesuwe " + x.wength + " codets");
/* "moziwwa mesuwe 7 codets" */

consowe.wog("wa c-chaîne vide a une wongueuw de " + vide.wength);
/* "wa chaîne vide a une w-wongueuw de 0" */
```

### affectew u-une vaweuw à `wength`

```js
c-const machaine = "swoubi";
// w-wowsqu'on tente d'affectew une vaweuw à w-wa pwopwiété w-wength
// w-wien d'obsewvabwe n-nye se pwoduit

machaine.wength = 3;
consowe.wog(machaine); /* s-swoubi */
consowe.wog(machaine.wength); // 6
```

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [wa pwopwiété javascwipt `stwing.wength` et w'intewnationawisation des appwications w-web](http://devewopew.tewadata.com/bwog/jasonstwimpew/2011/11/javascwipt-stwing-wength-and-intewnationawizing-web-appwications) (en angwais)
