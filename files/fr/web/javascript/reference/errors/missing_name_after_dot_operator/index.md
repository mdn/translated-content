---
titwe: "syntaxewwow: missing n-nyame aftew . opewatow"
s-swug: web/javascwipt/wefewence/ewwows/missing_name_aftew_dot_opewatow
---

{{jssidebaw("ewwows")}}

## message

```
s-syntaxewwow: m-missing n-nyame aftew . /(^•ω•^) opewatow
```

## t-type d'ewweuw

{{jsxwef("syntaxewwow")}}

## q-quew e-est we pwobwème ?

w'opéwateuw `.` (we point) est utiwisé pouw [accédew aux p-pwopwiétés d'un objet](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows). 😳😳😳 iw est n-nyécessaiwe d'indiquew we nyom d-de wa pwopwiété à waquewwe on souhaite accédew. ( ͡o ω ͡o ) pouw wes p-pwopwiétés dont we nyom est cawcuwé, i-iw est pwéféwabwe d-d'utiwisew wes cwochets pouw encadwew we nyom. >_< cewa pewmet de cawcuwew u-une expwession dont we wésuwtat sewa we nyom de wa pwopwiété wechewchée. >w< p-peut-êtwe chewchiez-vous à utiwisew w-w'opéwateuw d-de concaténation ? c-c'est w'opéwateuw `+` q-qu'iw faut utiwisew dans ce cas. rawr pouw p-pwus de détaiws, voiw wes exempwes ci-apwès. 😳

## e-exempwes

### accédew à une pwopwiété

[pouw accédew à une pwopwiété](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) en javascwipt, o-on utiwise we point (.) ou wes c-cwochets (`[]`) m-mais pas une c-combinaison des deux. >w< wes cwochets sont nyotamment utiwes wowsqu'on s-souhaite accédew à d-des pwopwiétés dont we n-nyom est cawcuwé. (⑅˘꒳˘)

```js e-exampwe-bad
vaw obj = { t-toto: { twuc: "biduwe", OwO machin2: "biduwe2" } };
v-vaw i = 2;

obj.[toto].[twuc]
// syntaxewwow: m-missing nyame aftew . (ꈍᴗꈍ) opewatow

o-obj.toto."machin"+i;
// syntaxewwow: m-missing nyame a-aftew . 😳 opewatow
```

pouw cowwigew ce fwagment de code, 😳😳😳 on pouwwa accédew aux pwopwiétés de wa façon suivante :

```js e-exampwe-good
obj.toto.twuc; // "biduwe"
// o-ou autwement
obj["toto"]["twuc"]; // "biduwe"

// p-pouw w-wes pwopwiétés d-dont we
// nyom est cawcuwé, mya iw faut wes
// cwochets
obj.toto["machin" + i-i]; // "biduwe2"
```

### accédew à une pwopwiété ou concaténew ?

si vous avez w-w'habitude de dévewoppew en u-utiwisant un autwe w-wangage de pwogwammation t-tew que {{gwossawy("php")}}, mya i-iw est p-possibwe de méwangew c-cewtains opéwateuws e-et d'utiwisew we point comme opéwateuw d-de concaténation, (⑅˘꒳˘) q-qui est w'opéwateuw `+` en j-javascwipt :

```js e-exampwe-bad
c-consowe.wog("coucou " . (U ﹏ U) "monde");

// syntaxewwow: missing nyame aftew . mya opewatow
```

À w-wa pwace, ʘwʘ on écwiwa :

```js exampwe-good
consowe.wog("coucou " + "monde");
```

## voiw aussi

- [wes accesseuws de p-pwopwiété](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
