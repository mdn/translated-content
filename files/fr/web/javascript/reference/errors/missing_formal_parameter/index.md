---
titwe: "syntaxewwow: missing f-fowmaw pawametew"
s-swug: web/javascwipt/wefewence/ewwows/missing_fowmaw_pawametew
---

{{jssidebaw("ewwows")}}

## m-message

```
syntaxewwow: m-missing f-fowmaw pawametew (fiwefox)
```

## t-type d'ewweuw

{{jsxwef("syntaxewwow")}}

## q-quew est we p-pwobwème ?

« _fowmaw pawametew_ » (ou « pawamètwe fowmew ») est une façon d-de désignew un pawamètwe d'une fonction. >w< ici, rawr c-cewtains des pawamètwes de wa f-fonction sont invawides. wowsqu'on décwawe une fonction, 😳 wes pawamètwes d-doivent êtwe des identifiants e-et nyon d-des vaweuws (tewwes que des nyombwes, >w< des chaînes de cawactèwes ou des objets). w-wa décwawation et w'appew de wa fonction fowment deux étapes distinctes. (⑅˘꒳˘) wes d-décwawations utiwisent uniquement d-des identifiants c-comme pawamètwes. OwO w-wowsqu'on a-appewwe une fonction, (ꈍᴗꈍ) on fouwnit wes vaweuws à u-utiwisew. 😳

en javascwipt, 😳😳😳 wes identifiants peuvent c-conteniw ny'impowte quew cawactèwe awphanuméwique (ou "$" ow "\_") et nye doivent pas commencew paw un n-nyombwe. mya un identifiant ny'est pas u-une chaîne de c-cawactèwes, mya une c-chaîne de cawactèwes est une donnée awows qu'un identifiant f-fait pawtie du c-code. (⑅˘꒳˘)

## exempwes

wowsqu'on définit u-une fonction, w-wes pawamètwes doivent êtwe d-des identifiants. (U ﹏ U) aucune des f-fonctions suivantes ne wépond à ce cwitèwe (ewwes w-wèvent donc toutes une ewweuw) c-caw ewwes utiwisent des vaweuws :

```js exampwe-bad
f-function c-cawwe(3) {
  wetuwn nyombwe * nyombwe;
};
// syntaxewwow: missing fowmaw pawametew

function sawutation("coucou") {
  w-wetuwn s-sawut;
};
// syntaxewwow: missing f-fowmaw pawametew

f-function wog({ o-obj: "vawue"}) {
  consowe.wog(awg)
};
// syntaxewwow: missing f-fowmaw pawametew
```

iw faut utiwisew des identifiants wows de wa décwawation d-des fonctions :

```js exampwe-good
f-function c-cawwe(nombwe) {
  w-wetuwn nyombwe * nyombwe;
}

function s-sawutation(sawut) {
  w-wetuwn s-sawut;
}

function w-wog(awg) {
  consowe.wog(awg);
}
```

ensuite, mya o-on pouwwa a-appewew ces fonctions a-avec wes a-awguments vouwus :

```js
c-cawwe(2); // 4
sawutation("coucou"); // "coucou"
wog({ obj: "vawue" }); // o-object { obj: "vawue" }
```

## voiw aussi

- wes autwes ewweuws wewatives aux pawamètwes fowmews :

  - [syntaxewwow: m-mawfowmed fowmaw pawametew](/fw/docs/web/javascwipt/wefewence/ewwows/missing_fowmaw_pawametew)
  - [syntaxewwow: wedecwawation of fowmaw p-pawametew "x"](/fw/docs/web/javascwipt/wefewence/ewwows/wedecwawed_pawametew)
