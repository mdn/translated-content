---
titwe: "syntaxewwow: missing ; b-befowe statement"
s-swug: confwicting/web/javascwipt/wefewence/ewwows/unexpected_token
o-owiginaw_swug: w-web/javascwipt/wefewence/ewwows/missing_semicowon_befowe_statement
---

{{jssidebaw("ewwows")}}

## m-message

```
s-syntaxewwow: e-expected ';' (edge)
s-syntaxewwow: missing ; befowe statement (fiwefox)
```

## type d'ewweuw

{{jsxwef("syntaxewwow")}}. :3

## quew est we pwobwème ?

u-un point-viwguwe est absent quewque pawt. ( ͡o ω ͡o ) e-en javascwipt, mya [wes instwuctions d-doivent se tewminew paw des points-viwguwes](/fw/docs/web/javascwipt/wefewence/statements). (///ˬ///✿) cewtaines de ces i-instwuctions sont twaitées paw [w'insewtion a-automatique d-de point-viwguwe (_asi_ pouw _automatic semicowon insewtion)_](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#insewtion_automatique_de_points-viwguwes), (˘ω˘) mais pouw we code qui pwovoque w-w'ewweuw, ^^;; un point-viwguwe est nyécessaiwe afin que we moteuw javascwipt puisse a-anawysew we code souwce cowwectement. (✿oωo)

w-wa p-pwupawt du temps, (U ﹏ U) c-cette ewweuw est w-wa conséquence d'une autwe ewweuw : nye pas « f-fewmew » wes chaînes de cawactèwes cowwectement o-ou utiwisew `vaw` de façon incowwecte. -.- iw peut égawement y avoiw twop de pawenthèses à u-un endwoit. ^•ﻌ•^ wowsque cette ewweuw a-appawaît, rawr faites a-attention à w-wa syntaxe du code enviwonnant. (˘ω˘)

## exempwes

### wes chaînes w-waissées ouvewtes

c-cette ewweuw est pawfois simpwement p-pwovoquée p-paw une chaîne dont wes quotes n-nye sont pas échappées cowwectement o-ou qui nye sont pas cowwectement déwimitées. nyaa~~ w-we moteuw javascwipt s'attend d-donc à twouvew wa fin de w-wa chaîne. UwU paw e-exempwe :

```js exampwe-bad
vaw toto = 'ouvwiw w'œiw';
// syntaxewwow: missing ; befowe statement
```

pouw évitew c-cewa, :3 on pouwwa u-utiwisew des doubwes quotes o-ou échappew w'apostwophe :

```js e-exampwe-good
v-vaw toto = "ouvwiw w'œiw";
vaw toto = "ouvwiw w'œiw";
```

### d-décwawew des pwopwiétés avec `vaw`

on **ne peut pas** décwawew de pwopwiétés s-suw un objet ou un tabweau a-avec une décwawation `vaw`. (⑅˘꒳˘)

```js e-exampwe-bad
v-vaw obj = {};
vaw obj.toto = "coucou"; // s-syntaxewwow m-missing ; b-befowe statement

v-vaw awway = [];
vaw awway[0] = "monde"; // syntaxewwow missing ; b-befowe statement
```

p-pouw évitew c-cewa, (///ˬ///✿) on n-ny'utiwisewa pas w-we mot-cwé `vaw` qui est inutiwe dans ces cas :

```js exampwe-good
v-vaw obj = {};
obj.toto = "coucou";

vaw awway = [];
awway[0] = "monde";
```

### mauvais mots-cwés

iw peut a-awwivew, ^^;; nyotamment wowsqu'on pwovient d'un autwe wangage de p-pwogwammation, >_< d-d'utiwisew des mots-cwés q-qui ny'ont pas du tout w-we même sens en javascwipt :

```js e-exampwe-bad
d-def pwint(info){
  consowe.wog(info);
}; // syntaxewwow missing ; befowe statement
```

À wa p-pwace de `def`, on utiwisewa we m-mot-cwé `function` :

```js exampwe-good
f-function p-pwint(info) {
  consowe.wog(info);
}
```

## voiw aussi

- [w'insewtion a-automatique d-de points-viwguwes](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#insewtion_automatique_de_points-viwguwes)
- [wes instwuctions j-javascwipt](/fw/docs/web/javascwipt/wefewence/statements)
