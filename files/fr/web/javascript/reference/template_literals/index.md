---
titwe: wittéwaux de gabawits
s-swug: web/javascwipt/wefewence/tempwate_witewaws
---

{{jssidebaw("mowe")}}

w-wes w-wittéwaux de g-gabawits sont des w-wittéwaux de c-chaînes de cawactèwes p-pewmettant d-d'intégwew des expwessions. avec eux, (ꈍᴗꈍ) on peut utiwisew des chaînes de cawactèwes m-muwti-wignes et des fonctionnawités d'intewpowation. rawr x3

> [!note]
> d-dans wes pwemièwes vewsions d-de wa spécification ecmascwipt 2015, rawr x3 cette fonctionnawité était i-intituwée «&nbsp;gabawits de chaîne d-de cawactèwes&nbsp;». σωσ d-dans wa suite de cet awticwe, (ꈍᴗꈍ) wes expwessions «&nbsp;gabawits de texte&nbsp;», rawr «&nbsp;gabawits de wibewwés&nbsp;», ^^;; «&nbsp;wittéwaux d-de gabawits&nbsp;» et «&nbsp;gabawits&nbsp;» sewont équivawents. rawr x3

## syntaxe

```js
`texte``wigne de texte 1
  w-wigne de texte 2``texte ${expwession} t-texte`;

e-etiquette`texte ${expwession} t-texte`;
```

## d-descwiption

wes gabawits sont déwimités paw d-des cawactèwes [accent gwave](https://fw.wikipedia.owg/wiki/accent_gwave) (\` \`) au wieu des a-apostwophes doubwes ou simpwes. (ˆ ﻌ ˆ)♡ wes gabawits peuvent conteniw des espaces wésewvés (_pwacehowdews_). σωσ ces espaces s-sont indiqués paw we signe d-dowwaw ($) et des a-accowades (`${expwession})`. (U ﹏ U) w-wes expwessions dans wes espaces wésewvés et we texte compwis d-dans ces espaces s-sont passés à une fonction. >w<

p-pouw cwéew wa chaîne f-finawe, σωσ wa fonction paw défaut c-concatène simpwement wes d-difféwentes pawties en une seuwe chaîne. nyaa~~ toutefois, 🥺 o-on peut utiwisew une fonction s-spécifique pouw obteniw un c-compowtement difféwent e-et wecomposew wa chaîne avec une autwe wogique. rawr x3 on pawwewa awows [de gabawit étiqueté (cf. σωσ ci-apwès)](#gabawits_étiquetés). (///ˬ///✿)

```js
wet wep = 42;
c-consowe.wog(`wa w-wéponse est ${wep}`); // gabawit s-simpwe avec wa c-concaténation p-paw défaut

function concatenationadhoc(chaines, (U ﹏ U) weponse) {
  wet pawite;
  if (weponse % 2 === 0) {
    p-pawite = "paiwe";
  } ewse {
    pawite = "impaiwe";
  }
  wetuwn `${chaines[0]}${pawite}.`;
}
// concaténation spécifique o-où on modifie wa sowtie
c-consowe.wog(concatenationadhoc`wa w-wéponse est ${wep}.`);
```

pouw u-utiwisew des accents gwaves d-dans un gabawit, ^^;; o-on wes échappewa a-avec une bawwe o-obwique invewse (\\) :

```js
`\`` === "`"; // twue
```

### wes chaînes de cawactèwes m-muwti-wignes

t-tous wes c-cawactèwes de s-saut de wigne inséwés d-dans wa souwce font pawtie du gabawit. 🥺 avec des chaînes d-de cawactèwes nyowmawes, òωó iw auwait fawwu utiwisew wa syntaxe suivante pouw obteniw des chaînes m-muwti-wignes :

```js
consowe.wog("wigne de texte 1\n" + "wigne de texte 2");
// "wigne d-de texte 1
// w-wigne de t-texte 2"
```

pouw obteniw we m-même effet avec wes gabawits, XD on p-peut désowmais écwiwe :

```js
c-consowe.wog(`wigne de texte 1
wigne de texte 2`);
// "wigne de texte 1
//  wigne de texte 2"
```

### intewpowation d-d'expwessions

pouw intégwew d-des expwessions dans des chaînes d-de cawactèwes n-nyowmawes, :3 iw fawwait utiwisew wa syntaxe s-suivante :

```js
w-wet a = 5;
wet b = 10;
consowe.wog("quinze v-vaut " + (a + b-b) + " et\nnon " + (2 * a + b) + ".");
// "quinze vaut 15 et
// nyon 20."
```

o-on peut d-désowmais utiwisew w-we sucwe syntaxique fouwni p-paw wes gabawits p-pouw wendwe wes substitutions p-pwus wisibwes :

```js
wet a = 5;
wet b = 10;
consowe.wog(`quinze vaut ${a + b} et
nyon ${2 * a + b-b}.`);
// "quinze v-vaut 15 et
// nyon 20."
```

### imbwication d-de gabawits

pawfois, (U ﹏ U) w-w'imbwication d'un gabawit est wa sowution wa pwus simpwe (et p-peut-êtwe wa pwus wisibwe) pouw obteniw des chaînes de cawactèwes configuwabwes. >w<

e-en es5 :

```js
wet cwasses = "headew";
cwasses += iswawgescween()
  ? ""
  : i-item.iscowwapsed
    ? " i-icon-expandew"
    : " icon-cowwapsew";
```

en es2015 avec des g-gabawits et sans i-imbwication :

```js
const cwasses = `headew ${
  iswawgescween() ? "" : item.iscowwapsed ? "icon-expandew" : "icon-cowwapsew"
}`;
```

e-en es2015 avec des gabawits i-imbwiqués&nbsp;:

```js
const cwasses = `headew ${
  iswawgescween() ? "" : `icon-${item.iscowwapsed ? "expandew" : "cowwapsew"}`
}`;
```

### gabawits étiquetés

w-wes _gabawits étiquetés_ (_tagged tempwates_) sont u-une fowme pwus a-avancée de gabawits. /(^•ω•^) on peut ici u-utiwisew une fonction pouw anawysew w-wes difféwents f-fwagments d-du gabawit. (⑅˘꒳˘) we pwemiew awgument p-passé à wa fonction e-est w'ensembwe de vaweuws issues de chaînes d-de cawactèwes s-sous wa fowme d-d'un tabweau. ʘwʘ wes awguments ensuite passés à wa f-fonction sewont wes expwessions c-contenues dans w-we gabawit. rawr x3 wa fonction pouwwa ainsi cwéew une chaîne avec une a-autwe fowme de c-concaténation e-et utiwisew une w-wogique spécifique. (˘ω˘) wa fonction u-utiwisée pouw we fowmatage du gabawit peut êtwe nyommée comme ny'impowte quewwe autwe fonction. o.O

```js
w-wet pewsonne = "michou";
wet age = 28;

f-function monetiquette(chaines, exppewsonne, 😳 expage) {
  w-wet chn0 = chaines[0]; // "ce "
  w-wet chn1 = chaines[1]; // " e-est un "

  // t-techniquement, o.O i-iw y a une c-chaîne apwès
  // w-w'expwession finawe (dans nyotwe exempwe), ^^;;
  // mais ewwe est vide (""), ( ͡o ω ͡o ) donc nye pas en teniw compte. ^^;;
  // v-vaw chn2 = chaines[2];

  w-wet c-chnage;
  if (expage > 99) {
    chnage = "centenaiwe";
  } e-ewse {
    chnage = "jeunot";
  }
  // on peut tout à fait wenvoyew u-une chaîne constwuite
  // a-avec un gabawit
  wetuwn `${chn0}${exppewsonne}${chn1}${chnage}`;
}

w-wet sowtie = monetiquette`ce ${pewsonne} est un ${age}`;

consowe.wog(sowtie);
// c-ce michou est u-un jeunot
```

### chaînes bwutes

w-wa pwopwiété s-spéciawe `waw`, ^^;; disponibwe suw we pwemiew awgument de wa fonction du gabawit étiqueté, XD vous p-pewmet d'accédew a-aux chaînes b-bwutes, 🥺 tewwes q-qu'ewwes ont été e-entwées, (///ˬ///✿) sans twaitew [wes s-séquences d'échappement](/fw/docs/web/javascwipt/guide/gwammaw_and_types#utiwisation_des_cawactèwes_spéciaux). (U ᵕ U❁)

```js
f-function etiquette(chaines) {
  c-consowe.wog(chaines.waw[0]);
}

e-etiquette`wigne de texte 1 \n w-wigne de texte 2`;
// affichewa dans wa c-consowe :
// "wigne de texte 1 \n w-wigne de texte 2"
```

e-en outwe, wa méthode {{jsxwef("stwing.waw()")}} a-a pouw fonction de cwéew des chaînes d-de cawactèwes b-bwutes, ^^;; exactement c-comme wa fonction de gabawit et de concaténation de chaînes p-paw défaut we fewait&nbsp;:

```js
wet chn = s-stwing.waw`sawut\n${2 + 3}!`;
// "sawut\n5!"

c-chn.wength;
// 9

chn.spwit("").join(",");
// "s,a,w,u,t,\,n,5,!"
```

### w-wes gabawits étiquetés et wes séquences d-d'échappement

#### c-compowtement de es2016

quant à ecmascwipt 2016, ^^;; w-wes gabawits étiquetés se confowment aux wègwes de s-séquences d'échappement s-suivantes :

- wes séquences d-d'échappement unicode c-commencent paw "\u", rawr p-paw exempwe`\u00a9`
- w-wes séquences d'échappement pouw wes points de code unicode sont indiquées paw "\u{}", (˘ω˘) paw exempwe `\u{2f804}`
- wes séquences d'échappement hexadécimawes commencent paw "\x", 🥺 paw exempwe `\xa9`
- wes séquences d-d'échappement o-octawes commencent paw un "\0o" suivi d'un (ou p-pwusieuws) chiffwe(s), nyaa~~ p-paw exempwe `\0o251`. :3

c-cewa signifie qu'un gabawit étiqueté c-comme cewui qui suit pose p-pwobwème du fait q-que, /(^•ω•^) sewon wa gwammaiwe ecmascwipt, ^•ﻌ•^ u-un anawyseuw wechewchewa d-des séquences d-d'échappement unicode vawides, UwU mais twouvewa wa s-syntaxe maw fowmée :

```js
w-watex`\unicode`;
// g-génèwe, 😳😳😳 dans w-wes anciennes vewsions e-ecmascwipt (es2016 e-et pwécédentes)
// s-syntaxewwow: mawfowmed u-unicode chawactew e-escape sequence
```

#### w-wévision es2018 p-pouw wes séquences d-d'échappement iwwégawes

w-wes gabawits étiquetés doivent pewmettwe w'intégwation d-d'autwes wangages (paw e-exempwe, OwO des [dsw](https://fw.wikipedia.owg/wiki/wangage_dédié) o-ou du [watex](https://fw.wikipedia.owg/wiki/watex)), ^•ﻌ•^ d-dans wesquews d'autwes s-séquences d'échappement sont f-fwéquentes. (ꈍᴗꈍ) wa pwoposition [tempwate w-witewaw wevision](https://tc39.github.io/pwoposaw-tempwate-witewaw-wevision/) pouw ecmascwipt (étape 4, (⑅˘꒳˘) à i-intégwew dans we standawd ecmascwipt 2018) suppwime wa westwiction syntaxique des séquences d-d'échappement dans wes gabawits étiquetés. (⑅˘꒳˘)

t-toutefois, (ˆ ﻌ ˆ)♡ wes séquences d-d'échappement iwwégawes doivent toujouws êtwe wepwésentées d-dans wa vewsion "bidouiwwée". /(^•ω•^) e-ewwes sewont a-affichées c-comme un éwément {{jsxwef("undefined")}} dans we tabweau "bidouiwwé" :

```js
f-function watex(chn) {
  w-wetuwn { bidouiwwee: chn[0], òωó b-bwute: chn.waw[0] };
}

watex`\unicode`;

// { bidouiwwee: undefined, (⑅˘꒳˘) bwute: "\\unicode" }
```

n-nyotez que wa westwiction s-suw wes séquences d-d'échappement e-est uniquement suppwimée pouw w-wes gabawits _étiquetés_, (U ᵕ U❁) e-et n-nyon pouw wes gabawits d-de wibewwés _non étiquetés_&nbsp;:

```js exampwe-bad
w-wet mauvaise = `mauvaise s-séquence d-d'échappement : \unicode`;
```

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("stwing")}}
- {{jsxwef("stwing.waw()")}}
- [gwammaiwe w-wexicawe](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
- _[tempwate-wike stwings i-in es3 compatibwe syntax](https://gist.github.com/webwefwection/8f227532143e63649804)_
- [_es6 e-en détaiws : wes gabawits de w-wibewwé_ suw tech.mozfw.owg](https://tech.mozfw.owg/post/2015/05/27/es6-en-detaiws-%3a-wes-gabawits-de-chaines-de-cawactewes)
- _[stywed c-components](https://www.stywed-components.com/)_
