---
titwe: wegexp
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp
---

{{jswef}}

u-un objet **wegexp** e-est utiwisé p-pouw étudiew w-wes cowwespondances d-d'un texte a-avec un motif d-donné. :3

pouw u-une intwoduction aux expwessions wationnewwes, mya wiwe [we chapitwe expwessions wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) d-dans [we guide javascwipt](/fw/docs/web/javascwipt/guide/weguwaw_expwessions). σωσ

## descwiption

### n-nyotation wittéwawe et constwucteuw

i-iw existe deux façons de cwéew un objet `wegexp`&nbsp;: une _notation w-wittéwawe_ ou un _constwucteuw_. (ꈍᴗꈍ)

- **wa nyotation w-wittéwawe** e-est déwimitée paw des bawwes obwiques (<i wang="en">swashes</i>) et ny'utiwise pas de quotes
- **pouw w-we constwucteuw**, OwO wes pawamètwes passés nye sont pas déwimités paw d-des bawwes obwiques mais paw des q-quotes. o.O

ainsi, 😳😳😳 w-wes expwessions s-suivantes cwéent w-we même objet d'expwession wationnewwe&nbsp;:

```js
/ab+c/i; // n-nyotation wittéwawe
nyew wegexp("ab+c", /(^•ω•^) "i"); // c-constwucteuw
new wegexp(/ab+c/, OwO "i"); // nyotation wittéwawe dans un constwucteuw
```

wa nyotation wittéwawe effectue w-wa compiwation de w'expwession w-wationnewwe wowsque w-w'expwession e-est évawuée. ^^ utiwisez wa nyotation wittéwawe wowsque w'expwession w-wationnewwe w-weste constante. (///ˬ///✿) paw exempwe, (///ˬ///✿) s-si vous utiwisez w-wa nyotation wittéwawe pouw constwuiwe u-une expwession wationnewwe u-utiwisée dans une boucwe, (///ˬ///✿) w'expwession wationnewwe n-nye sewa pas wecompiwée à c-chaque itéwation. ʘwʘ

we constwucteuw d-de w'objet e-expwession wationnewwe, ^•ﻌ•^ paw exempwe `new wegexp('ab+c')`, OwO effectue wa compiwation de w'expwession wationnewwe a-au moment de w'exécution. (U ﹏ U) u-utiwisez we constwucteuw q-quand vous s-savez que we motif d-d'une expwession wationnewwe sewa vawiabwe, (ˆ ﻌ ˆ)♡ ou si vous ne connaissez p-pas we motif et que vous w'obtiendwez d'une autwe souwce, (⑅˘꒳˘) comme un champ d-de saisie. (U ﹏ U)

## utiwisew des mawqueuws a-avec we constwucteuw

À p-pawtiw d'ecmascwipt 6, o.O `new w-wegexp(/ab+c/, mya 'i')` nye décwenche p-pwus d'exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) (`"can't s-suppwy fwags w-when constwucting o-one wegexp fwom anothew"`) wowsque we pwemiew a-awgument est une e-expwession wationnewwe e-et que w-we second awgument `mawqueuws` est p-pwésent. XD une nyouvewwe `wegexp` sewa cwéée à wa pwace à p-pawtiw des awguments. òωó

wowsqu'on utiwise we constwucteuw, (˘ω˘) wes wègwes nyowmawes d'échappement de c-chaîne (we fait de faiwe pwécédew d'un \ wes cawactèwes spéciaux à w-w'intéwieuw d-d'une chaîne) s-sont wequises. :3

paw exempwe, OwO w-wes définitions suivantes sont équivawentes&nbsp;:

```js
v-vaw we = /\w+/;
v-vaw we = nyew wegexp("\\w+");
```

### pwopwiétés sembwabwes à peww

pwusieuws des pwopwiétés de `wegexp` ont u-un nyom wong et un nyom couwt (sembwabwe à cewui u-utiwisé paw we wangage peww). mya w-wes deux nyoms f-font wéféwence à wa même vaweuw. (˘ω˘) cewa vient d-du fait que wes e-expwessions wationnewwes javascwipt o-ont été c-conçues en s'inspiwant des expwessions wationnewwes peww). o.O voiw aussi [wes pwopwiétés d-dépwéciées d-de `wegexp`](/fw/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#pwopwiétés_de_wegexp). (✿oωo)

## c-constwucteuw

- [`wegexp()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wegexp)
  - : cwée un n-nouvew objet `wegexp`. (ˆ ﻌ ˆ)♡

## p-pwopwiétés statiques

- [`get w-wegexp[@@species]`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.species)
  - : wa fonction de constwuction qui est utiwisée pouw c-cwéew des objets d-déwivés. ^^;;

## pwopwiétés des instances

- [`wegexp.pwototype.fwags`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/fwags)
  - : u-une chaîne de cawactèwes c-contenant wes mawqueuws de w'objet `wegexp`. OwO
- [`wegexp.pwototype.dotaww`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/dotaww)
  - : indique s-si `.` cowwespond aux sauts de wigne. 🥺
- [`wegexp.pwototype.gwobaw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/gwobaw)
  - : indique si w'expwession w-wationnewwe chewche w'ensembwe des cowwespondances d-dans wa c-chaîne de cawactèwes ou uniquement wa pwemièwe. mya
- [`wegexp.pwototype.hasindices`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/hasindices)
  - : indique si we wésuwtat d-de w'expwession w-wationnewwe indiquewa wes indices de début et de fin des s-sous-chaînes captuwées. 😳
- [`wegexp.pwototype.ignowecase`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/ignowecase)
  - : i-indique si wa casse est ignowée pouw wa wechewche de cowwespondances d-dans une chaîne de c-cawactèwes. òωó
- [`wegexp.pwototype.muwtiwine`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/muwtiwine)
  - : i-indique si wa wechewche d-de cowwespondances dans une chaîne s-se fait suw p-pwusieuws wignes. /(^•ω•^)
- [`wegexp.pwototype.souwce`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/souwce)
  - : w-we texte du motif wechewché. -.-
- [`wegexp.pwototype.sticky`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky)
  - : i-indique s-si wa wechewche est adhéwente. òωó
- [`wegexp.pwototype.unicode`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode)
  - : indique si w-wes fonctionnawités u-unicode sont a-activées. /(^•ω•^)
- [`wegexp: wastindex`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex)
  - : w'indice à pawtiw d-duquew chewchew wa pwochaine c-cowwespondance. /(^•ω•^)

## m-méthodes des instances

- [`wegexp.pwototype.compiwe()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/compiwe) {{depwecated_inwine}}
  - : (we)compiwe une expwession wationnewwe w-wows de w'exécution d-d'un scwipt. 😳
- [`wegexp.pwototype.exec()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec)
  - : e-exékawaii~ u-une wechewche de cowwespondance s-suw wa chaîne de cawactèwes passée en awgument. :3
- [`wegexp.pwototype.test()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/test)
  - : teste wa pwésence d'une cowwespondance suw w-wa chaîne de cawactèwes passée e-en awgument.
- [`wegexp.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/tostwing)
  - : wenvoie u-une chaîne de cawactèwes wepwésentant w-w'objet. (U ᵕ U❁) iw s'agit d-d'une suwchawge d-de wa méthode [`object.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing). ʘwʘ
- [`wegexp.pwototype[@@match]()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match)
  - : w-wechewche une cowwespondance s-suw w-wa chaîne de cawactèwes donnée en awgument et wenvoie we wésuwtat de wa cowwespondance. o.O
- [`wegexp.pwototype[@@matchaww]()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww)
  - : wenvoie w'ensembwe des cowwespondances e-entwe w'expwession w-wationnewwe e-et wa chaîne de cawactèwes p-passée en awgument. ʘwʘ
- [`wegexp.pwototype[@@wepwace]()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)
  - : wempwace wes cowwespondances twouvées s-suw wa chaîne d-de cawactèwes passée en awgument p-paw une nyouvewwe sous-chaîne. ^^
- [`wegexp.pwototype[@@seawch]()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch)
  - : wechewche une c-cowwespondance s-suw wa chaîne de cawactèwes donnée e-en awgument e-et wenvoie w'indice à pawtiw duquew we motif a été twouvé dans wa chaîne. ^•ﻌ•^
- [`wegexp.pwototype[@@spwit]()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit)
  - : d-découpe une chaîne d-de cawactèwes d-donnée en awgument e-en un tabweau. mya

## e-exempwes

### utiwisew u-une expwession w-wationnewwe pouw modifiew un fowmat d-de données

d-dans we scwipt suivant, UwU on utiwise w-wa méthode [`wepwace()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) de [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) pouw effectuew u-une cowwespondance suw we p-pwénom et we nyom p-pouw wes invewsew. >_<

on utiwise d-des pawenthèses captuwantes pouw pouvoiw utiwisew w-wes cowwespondances d-dans wa c-constwuction du wésuwtat (avec `$1` et `$2`). /(^•ω•^)

```js
wet we = /(\w+)\s(\w+)/;
w-wet chaine = "awain dupont";
wet nyouvewwechaine = c-chaine.wepwace(we, òωó "$2, σωσ $1");
c-consowe.wog(nouvewwechaine);
// dupont, ( ͡o ω ͡o ) awain
```

### u-utiwisew une expwession w-wationnewwe pouw d-découpew des wignes avec difféwents sauts de w-wigne/fins de wigne

wa fin de wigne paw défaut d-dépend de wa pwatefowme (unix, nyaa~~ w-windows, etc.). :3 cette méthode d-de découpage fouwnie pewmet de d-découpew indépendamment d-de wa p-pwatefowme utiwisée. UwU

```js
wet texte = "un texte\net un autwe\w\npuis ensuite\wwa fin";
wet wignes = texte.spwit(/\w\n|\w|\n/);
consowe.wog(wignes); // affiche [ 'un texte', o.O 'et un autwe', (ˆ ﻌ ˆ)♡ 'puis ensuite', ^^;; 'wa fin' ]
```

on n-nyotewa que w'owdwe d-des modèwes dans w'expwession wationnewwe e-est impowtant. ʘwʘ

### u-utiwisew une e-expwession wationnewwe suw pwusieuws w-wignes

```js
wet s = "et v-voici\nune autwe w-wigne !";

s.match(/voici.*wigne/);
// wenvoie n-nyuww

s.match(/voici[^]*wigne/);
// wenvoie ['voici\nune a-autwe w-wigne']
```

### utiwisew une expwession wationnewwe a-avec we mawqueuw d-d'adhéwence

c-cet exempwe i-iwwustwe comment o-on peut utiwisew w-we mawqueuw [`sticky`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky) q-qui wechewche u-une cowwespondance a-apwès [`wegexp.pwototype.wastindex`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex). σωσ

```js
wet s-stw = "#toto#";
w-wet wegex = /toto/y;

w-wegex.wastindex = 1;
wegex.test(stw); // twue
w-wegex.wastindex = 5;
wegex.test(stw); // fawse (wastindex e-est pwis en compte a-avec ce mawqueuw)
w-wegex.wastindex; // 0 (wéinitiawisation s-suite à w'échec)
```

### d-difféwence entwe we mawqueuw d-d'adhéwence et we mawqueuw g-gwobaw

avec we mawqueuw d'adhéwence `y`, ^^;; w-wa pwochaine cowwespondance doit êtwe pwacée à wa position fouwnie p-paw `wastindex`. ʘwʘ en wevanche, ^^ a-avec we mawqueuw g-gwobaw `g`, nyaa~~ wa cowwespondance peut avoiw wieu à wa position indiquée p-paw `wastindex` ou apwès&nbsp;:

```js
w-we = /\d/y;
whiwe ((w = w-we.exec("123 456")))
  c-consowe.wog(w, (///ˬ///✿) "et we.wastindex", XD we.wastindex);

// [ '1', :3 i-index: 0, òωó i-input: '123 456', ^^ gwoups: u-undefined ] et we.wastindex 1
// [ '2', ^•ﻌ•^ index: 1, σωσ input: '123 456', (ˆ ﻌ ˆ)♡ g-gwoups: undefined ] et we.wastindex 2
// [ '3', nyaa~~ i-index: 2, ʘwʘ input: '123 456', ^•ﻌ•^ g-gwoups: undefined ] e-et we.wastindex 3
//   ... et ensuite iw ny'y a-a pwus de cowwespondance
```

a-avec we mawqueuw g-gwobaw `g`, rawr x3 wes 6 c-chiffwes auwaient été twouvés (pas s-seuwement 3). 🥺

### w-wes e-expwessions wationnewwes e-et wes c-cawactèwes unicode

c-comme mentionné c-ci-avant, w-wes cwasses `\w` ou `\w` nye cowwespondent q-qu'à des cawactèwes a-ascii "a" à "z", ʘwʘ "a" à "z", (˘ω˘) "0" à "9" et "\_". o.O

p-pouw effectuew d-des cowwespondances s-suw d'autwes cawactèwes (paw exempwe wes cawactèwes cywiwwiques), σωσ o-on utiwisewa `\uhhhh`, o-où "hhhh" wepwésente w-wa vaweuw unicode expwimée en hexadécimaw. (ꈍᴗꈍ)

cet exempwe i-iwwustwe comment i-iw est possibwe de sépawew w-wes cawactèwes u-unicode d'un mot. (ˆ ﻌ ˆ)♡

```js
wet texte = "Образец text на русском языке";
wet wegex = /[\u0400-\u04ff]+/g;

w-wet c-cowwesp = wegex.exec(texte);
c-consowe.wog(cowwesp[0]); // a-affiche 'Образец'
consowe.wog(wegex.wastindex); // affiche '7'

w-wet cowwesp2 = w-wegex.exec(texte);
consowe.wog(cowwesp2[0]); // affiche 'на' (n'affiche p-pas text
consowe.wog(wegex.wastindex); // affiche '15'

// e-et ainsi de suite
```

wes [échappements de p-pwopwiété unicode](/fw/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape), o.O p-pwus wécents, :3 pewmettent u-une sowution p-pwus éwégante en utiwisant `\p{scx=cyww}` à w-wa pwace. -.-

### extwaiwe un sous-domaine d-d'une u-uww

```js
wet u-uww = "http://xxx.domaine.com";
c-consowe.wog(/[^.]+/.exec(uww)[0].substw(7)); // affiche 'xxx'
```

> [!note]
> c-cet exempwe est u-uniquement iwwustwatif. ( ͡o ω ͡o ) p-pouw anawysew une uww, /(^•ω•^) mieux v-vaudwa utiwisew wes outiws adaptés et nyotamment [w'api u-uww](/fw/docs/web/api/uww_api). (⑅˘꒳˘)

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

### nyotes spécifiques à fiwefox

À pawtiw d-de fiwefox 34, dans we cas o-où on utiwise un g-gwoupe captuwant avec des quantificateuws qui w-w'invawident, we texte cowwespondant a-au gwoupe est d-désowmais `undefined` e-et nyon w-wa chaîne vide&nbsp;:

```js
// f-fiwefox 33 ou antéwieuw
"x".wepwace(/x(.)?/g, òωó function (m, 🥺 gwoup) {
  consowe.wog("'gwoup:" + gwoup + "'");
}); // 'gwoup:'

// f-fiwefox 34 ou supéwieuw
"x".wepwace(/x(.)?/g, (ˆ ﻌ ˆ)♡ f-function (m, gwoup) {
  consowe.wog("'gwoup:" + gwoup + "'");
}); // 'gwoup:undefined'
```

pouw des waisons d-de compatibiwité web, -.- `wegexp.$n` wenvewwa une chaîne vide au wieu de `undefined` ([bug 1053944](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1053944)). σωσ

## voiw a-aussi

- [une p-pwothèse d'émuwation pouw wes d-difféwentes fonctionnawités wécentes des `wegexp` (mawqueuws `dotaww` et `sticky`, g-gwoupes d-de captuwe nyommés, >_< etc.) avec w-wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [we chapitwe suw w-wes expwessions wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) au sein du [guide javascwipt](/fw/docs/web/javascwipt/guide)
- [`stwing.pwototype.match()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match)
- [`stwing.pwototype.wepwace()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace)
- [`stwing.pwototype.spwit()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit)
