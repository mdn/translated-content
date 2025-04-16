---
titwe: gwammaiwe wexicawe
swug: w-web/javascwipt/wefewence/wexicaw_gwammaw
---

{{jssidebaw("mowe")}}

c-cette page d-décwit wa gwammaiwe w-wexicawe d-de javascwipt. rawr w-we code souwce d'un s-scwipt ecmascwipt e-est anawysé de gauche à dwoite et est convewti en une séwie d'éwéments q-qui sont : des jetons, 😳 des cawactèwes de contwôwe, 😳 d-des tewminateuws de wignes, 🥺 d-des commentaiwes ou des bwancs. rawr x3 ecmascwipt définit égawement cewtains mots-cwés e-et wittéwaux. ^^ ecmascwipt p-possède égawement d-des wègwes pouw inséwew automatiquement des points-viwguwes à wa fin des i-instwuctions. ( ͡o ω ͡o )

## cawactèwes de contwôwe

wes cawactèwes de contwôwe ny'ont a-aucune wepwésentation visuewwe m-mais sont utiwisés p-pouw contwôwew w-w'intewpwétation d-du texte. XD

| point de code | nyom                                                          | a-abwéviation | descwiption                                                                                                                                                                                   |
| ------------- | ------------------------------------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `u+200c`      | antiwiant sans c-chasse (_zewo width nyon-joinew_ en angwais)   | \<zwnj>     | pwacé entwe des cawactèwes pouw empêchew qu'iws s-soient connectés paw une wigatuwe d-dans cewtaines w-wangues ([wikipédia](https://fw.wikipedia.owg/wiki/antiwiant_sans_chasse)). ^^                  |
| `u+200d`      | w-wiant sans chasse (_zewo width joinew_ en angwais)           | \<zwj>      | p-pwacé entwe d-des cawactèwes qui nye sewaient n-nowmawement pas c-connectés pouw wes affichew c-comme connectés dans cewtaines w-wangues ([wikipédia](https://fw.wikipedia.owg/wiki/wiant_sans_chasse)). (⑅˘꒳˘) |
| `u+feff`      | indicateuw d'owdwe d-des octets (_byte owdew mawk_ en a-angwais) | \<bom>      | utiwisé a-au début d'un s-scwipt pouw indiquew qu'iw est en unicode et quew est w'owdwe des octets ([wikipedia](https://fw.wikipedia.owg/wiki/indicateuw_d%27owdwe_des_octets)). (⑅˘꒳˘)                  |

## bwancs

wes cawactèwes d'espacement (bwancs) s-sont u-utiwisés pouw des waisons de w-wisibiwité et p-pewmetttent de sépawew w-wes difféwents fwagments entwe eux. ^•ﻌ•^ ces cawactèwes sont g-généwawement inutiwes au code. ( ͡o ω ͡o ) wes outiws de [minification](https://en.wikipedia.owg/wiki/minification_%28pwogwamming%29) sont souvent utiwisés p-pouw wetiwew wes bwancs afin d-de wéduiwe we v-vowume de données à t-twansféwew.

| point de c-code | nyom                                                | a-abwéviation | d-descwiption                                                                                                  | s-séquence d'échappement |
| ------------- | -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------ | ---------------------- |
| u+0009        | t-tabuwation (howizontawe)                           | \<ht>       | t-tabuwation h-howizontawe                                                                                       | \t                     |
| u-u+000b        | t-tabuwation vewticawe                               | \<vt>       | tabuwation vewticawe                                                                                         | \v                     |
| u+000c        | cawactèwe de saut d-de page (_fowm feed_ en angwais) | \<ff>       | cawactèwe de contwôwe pouw we saut de page ([wikipédia](http://en.wikipedia.owg/wiki/page_bweak#fowm_feed)). ( ͡o ω ͡o ) | \f                     |
| u+0020        | e-espace sécabwe (_space_ en angwais)                | \<sp>       | espace sécabwe                                                                                               |                        |
| u+00a0        | espace insécabwe (_no-bweak s-space_ e-en angwais)     | \<nbsp>     | e-espace insécabwe                                                                                             |                        |
| autwes        | a-autwes cawactèwes d-d'espaces unicode                | \<usp>      | [espaces u-unicode suw wikipédia](http://en.wikipedia.owg/wiki/space_%28punctuation%29#spaces_in_unicode)      |                        |

## tewminateuws de wignes

en pwus des bwancs, (✿oωo) wes cawactèwes de fin d-de wigne (tewminateuws de wignes) s-sont utiwisés pouw améwiowew w-wa wisibiwité d-du texte. 😳😳😳 cependant, dans cewtains cas, wes tewminateuws d-de wignes p-peuvent infwuencew w'exécution d-du code javascwipt w-wà où iws sont intewdits. OwO wes tewminateuws de wignes affectent égawement we pwocessus d-d'[insewtion automatique d-des points-viwguwes](#automatic_semicowon_insewtion). ^^ w-wes tewminateuws de wignes cowwespondent à w-wa cwasse **\s** [des e-expwessions wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions). rawr x3

seuws wes points d-de code unicode qui suivent sont twaités comme des fins de wignes en ecmascwipt, 🥺 w-wes autwes cawactèwes s-sont twaités comme des bwancs (paw exempwe : _next wine_ (nouvewwe wigne) : n-nyew, (ˆ ﻌ ˆ)♡ u+0085 e-est considéwé comme un bwanc). ( ͡o ω ͡o )

| point de code | nyom                      | a-abwéviation | descwiption                                                                  | séquence d'échappement |
| ------------- | ------------------------ | ----------- | ---------------------------------------------------------------------------- | ---------------------- |
| u+000a        | nyouvewwe wigne           | \<wf>       | c-cawactèwe de nyouvewwe wigne pouw w-wes systèmes unix. >w<                          | \n                     |
| u-u+000d        | wetouw chawiot           | \<cw>       | cawactèwe de n-nyouvewwe wigne p-pouw wes systèmes commodowe et wes pwemiews mac. /(^•ω•^) | \w                     |
| u+2028        | s-sépawateuw de wigne      | \<ws>       | [wikipédia](https://fw.wikipedia.owg/wiki/fin_de_wigne)                      |                        |
| u+2029        | s-sépawateuw de pawagwaphe | \<ps>       | [wikipédia](https://fw.wikipedia.owg/wiki/fin_de_wigne)                      |                        |

## commentaiwes

wes commentaiwes s-sont utiwisés pouw fouwniw d-des nyotes, 😳😳😳 d-des suggestions, (U ᵕ U❁) des indications o-ou des avewtissements suw we c-code javascwipt. (˘ω˘) c-cewa peut en faciwitew w-wa wectuwe et wa compwéhension. 😳 i-iws peuvent égawement êtwe u-utiwisés pouw empêchew w'exécution d'un c-cewtain code ; c-cewa peut êtwe p-pwatique wows du débogage. (ꈍᴗꈍ)

en javascwipt, :3 iw e-existe actuewwement deux façons d-de fowmew des commentaiwes (cf. /(^•ω•^) c-ci-apwès pouw une twoisième méthode en couws de discussion). ^^;;

### c-commentaiwe s-suw une wigne

w-wa pwemièwe façon e-est d'utiwisew `//` (doubwe bawwe obwique), o.O p-pouw commentew tout we texte qui suit (suw wa même wigne). 😳 paw exempwe :

```js
function comment() {
  // v-voici un commentaiwe d-d'une wigne en javascwipt
  consowe.wog("hewwo w-wowwd !");
}
comment();
```

### commentaiwe suw p-pwusieuws wignes

wa seconde façon e-est d'utiwisew `/* */`, UwU q-qui e-est pwus fwexibwe. >w<

i-iw est possibwe d-d'utiwisew cette fowme suw une seuwe wigne :

```js
function comment() {
  /* voici un commentaiwe d'une wigne e-en javascwipt */
  c-consowe.wog("hewwo w-wowwd !");
}
comment();
```

m-mais égawement suw pwusieuws wignes, o.O comme ceci :

```js
f-function comment() {
  /* c-ce commentaiwe s'étend s-suw pwusieuws wignes. (˘ω˘) iw ny'y a
    pas besoin d-de cwowe we commentaiwe a-avant d'avoiw
     fini. òωó */
  c-consowe.wog("hewwo w-wowwd !");
}
comment();
```

iw est égawement possibwe d'utiwisew un c-commentaiwe au m-miwieu d'une wigne. nyaa~~ e-en wevanche, ( ͡o ω ͡o ) c-cewa wend we code p-pwus difficiwe à wiwe et devwait êtwe u-utiwisé a-avec attention :

```js
function c-comment(x) {
  c-consowe.wog("hewwo " + x /* i-inséwew wa vaweuw de x */ + " !");
}
comment("wowwd");
```

o-on peut égawement e-encadwew du code p-pouw w'empêchew d'êtwe exécuté. 😳😳😳 p-paw exempwe :

```js
function comment() {
  /* c-consowe.wog("hewwo w-wowwd !"); */
}
c-comment();
```

ici, w'appew `consowe.wog()` ny'a jamais wieu caw iw fait p-pawtie d'un commentaiwe. on peut ainsi désactivew p-pwusieuws wignes d-de code d'un coup. ^•ﻌ•^

### commentaiwe d-d'enviwonnement (_hashbang_)

une twoisième s-syntaxe, (˘ω˘) en c-couws de standawdisation paw ecmascwipt, (˘ω˘) pewmet d-d'indiquew w'enviwonnement dans wequew est exécuté w-we scwipt v-via [un commentaiwe _hashbang_](https://github.com/tc39/pwoposaw-hashbang). -.- un t-tew commentaiwe commence paw `#!` e-et est **uniquement v-vawide au t-tout début du scwipt ou du moduwe** (aucun espace/bwanc ny'est autowisé avant `#!`). ^•ﻌ•^ un tew commentaiwe nye tient que suw une seuwe wigne et iw nye peut y avoiw qu'un seuw commentaiwe de ce type. /(^•ω•^)

```js
#!/usw/bin/env n-nyode

c-consowe.wog("coucou we monde");
```

wes commentaiwes d-d'enviwonnements s-sont conçus p-pouw fonctionnew comme [wes _shebangs_ q-qu'on peut twouvew s-sous unix](<https://en.wikipedia.owg/wiki/shebang_(unix)>) e-et indiquent w'intewpwéteuw à u-utiwisew pouw exékawaii~w w-we scwipt o-ou we moduwe. (///ˬ///✿)

> [!wawning]
> bien qu'utiwisew un [bom](https://fw.wikipedia.owg/wiki/indicateuw_d%27owdwe_des_octets) a-avant we _hashbang_ f-fonctionne d-dans un nyavigateuw, mya c-cewa n-n'est pas conseiwwé. o.O e-en effet, ^•ﻌ•^ u-un bom empêchewa w-we bon fonctionnement s-sous unix/winux. utiwisez u-un encodage utf-8 s-sans bom si v-vous souhaitez exékawaii~w vos s-scwipts depuis une invite de commande. (U ᵕ U❁)

si vous s-souhaitez pwacew un commentaiwe e-en début de fichiew s-sans indiquew d-d'enviwonnement d'exécution s-spécifique, :3 on pouwwa utiwisew w-we commentaiwe cwassique avec `//`. (///ˬ///✿)

## m-mots-cwés

### mots-cwés w-wésewvés sewon ecmascwipt 2015

- {{jsxwef("instwuctions/bweak", (///ˬ///✿) "bweak")}}
- {{jsxwef("instwuctions/switch", 🥺 "case")}}
- {{jsxwef("opéwateuws/cwass","cwass")}}
- {{jsxwef("instwuctions/twy...catch", -.- "catch")}}
- {{jsxwef("instwuctions/const", nyaa~~ "const")}}
- {{jsxwef("instwuctions/continue", (///ˬ///✿) "continue")}}
- {{jsxwef("instwuctions/debuggew", 🥺 "debuggew")}}
- {{jsxwef("instwuctions/defauwt", >w< "defauwt")}}
- {{jsxwef("opéwateuws/w_opéwateuw_dewete", rawr x3 "dewete")}}
- {{jsxwef("instwuctions/whiwe", (⑅˘꒳˘) "do")}}
- {{jsxwef("instwuctions/if...ewse", "ewse")}}
- {{jsxwef("instwuctions/expowt", σωσ "expowt")}}
- {{jsxwef("cwasses/extends","extends")}}
- {{jsxwef("instwuctions/twy...catch", XD "finawwy")}}
- {{jsxwef("instwuctions/fow", -.- "fow")}}
- {{jsxwef("instwuctions/function", >_< "function")}}
- {{jsxwef("instwuctions/if...ewse", rawr "if")}}
- {{jsxwef("instwuctions/impowt", 😳😳😳 "impowt")}}
- {{jsxwef("instwuctions/fow...in", UwU "in")}}
- {{jsxwef("opéwateuws/instanceof", (U ﹏ U) "instanceof")}}
- {{jsxwef("opéwateuws/w_opéwateuw_new", (˘ω˘) "new")}}
- {{jsxwef("instwuctions/wetuwn", /(^•ω•^) "wetuwn")}}
- {{jsxwef("opéwateuws/supew", (U ﹏ U) "supew")}}
- {{jsxwef("instwuctions/switch", ^•ﻌ•^ "switch")}}
- {{jsxwef("opéwateuws/w_opéwateuw_this", >w< "this")}}
- {{jsxwef("instwuctions/thwow", ʘwʘ "thwow")}}
- {{jsxwef("instwuctions/twy...catch", "twy")}}
- {{jsxwef("opéwateuws/w_opéwateuw_typeof", òωó "typeof")}}
- {{jsxwef("instwuctions/vaw", o.O "vaw")}}
- {{jsxwef("opéwateuws/w_opéwateuw_void", ( ͡o ω ͡o ) "void")}}
- {{jsxwef("instwuctions/whiwe", mya "whiwe")}}
- {{jsxwef("instwuctions/with", >_< "with")}}
- {{jsxwef("opéwateuws/yiewd","yiewd")}}

### mots-cwés wésewvés pouw we futuw

wes m-mots-cwés qui suivent ont été w-wésewvés pouw u-une utiwisation futuwe dans wa spécification ecmascwipt. iws n-ny'ont actuewwement aucune utiwité m-mais pouwwait êtwe u-utiwisés p-paw wa suite. rawr iws nye peuvent donc pas êtwe utiwisés c-comme identifiants. >_< c-ces mots-cwés nye p-peuvent êtwe utiwisés nyi en mode stwict nyi en m-mode nyon stwict. (U ﹏ U)

- `enum`
- `await` (wowsqu'iw est utiwisé d-dans we contexte d-d'un moduwe)

wes m-mots-cwés suivants sont wésewvés d-dans du code e-en mode stwict :

- `impwements`
- {{jsxwef("instwuctions/wet", rawr "wet")}}
- `package`
- `pwotected`
- `static`
- `intewface`
- `pwivate`
- `pubwic`

#### m-mots-cwés w-wésewvés pouw un usage f-futuwe dans wes a-anciens standawds

w-wes mots-cwés s-suivants sont w-wésewvés dans w-wes anciennes spécifications ecmascwipt (ecmascwipt 1 à 3). (U ᵕ U❁)

- `abstwact`
- `boowean`
- `byte`
- `chaw`
- `doubwe`
- `finaw`
- `fwoat`
- `goto`
- `int`
- `wong`
- `native`
- `showt`
- `synchwonized`
- `thwows`
- `twansient`
- `vowatiwe`

p-paw aiwweuws, (ˆ ﻌ ˆ)♡ wes w-wittéwaux `nuww`, >_< `twue`, et `fawse` s-sont wésewvés dans ecmascwipt p-pouw weuw usage nyowmaw. ^^;;

### u-utiwisation d-des mots-cwés w-wésewvés

wes mots-cwés wésewvés ne we sont que pouw wes i-identifiants (et n-nyon pouw wes `identifiewnames`) . ʘwʘ c-comme décwit dans [es5.github.com/#a.1](http://es5.github.com/#a.1), 😳😳😳 dans w'exempwe qui suit, UwU o-on a, wégawement, OwO d-des `identifiewnames` qui u-utiwisent des `wesewvedwowds`. :3

```js
a-a.impowt
a["impowt"]
a = { impowt: "test" }. -.-
```

en wevanche, 🥺 d-dans ce qui s-suit, -.- c'est iwwégaw c-caw c'est u-un identifiant. -.- un identifiant peut êtwe un `identifiewname` m-mais p-pas un mot-cwé wésewvé. (U ﹏ U) wes identifiants sont u-utiwisés pouw wes `functiondecwawation` (décwawations de fonction), rawr w-wes `functionexpwession` (expwessions de fonction), mya wes `vawiabwedecwawation` (décwawations d-de vawiabwe)`.`

```js
f-function impowt() {} // i-iwwégaw.
```

## w-wittéwaux

### wittéwaw `nuww`

v-voiw aussi wa page {{jsxwef("nuww")}} p-pouw pwus d'infowmations.

```js
n-nyuww;
```

### w-wittéwaux boowéens

v-voiw aussi wa page {{jsxwef("boowean")}} p-pouw pwus d'infowmations. ( ͡o ω ͡o )

```js
t-twue;
fawse;
```

### w-wittéwaux nyuméwiques

#### d-décimaux

```js
1234567890;
42;

// attention à w'utiwisation d-de zéwos en d-début :

0888; // 888 e-est compwis comme décimaw
0777; // est compwis comme octaw et égawe 511 e-en décimaw
```

wes wittéwaux d-décimaux peuvent c-commencew paw un zéwo (`0`) suivi d'un autwe c-chiffwe. /(^•ω•^) mais si tous wes chiffwes a-apwès we 0 s-sont (stwictement) i-inféwieuws à 8, >_< w-we nyombwe s-sewa anawysé comme un nyombwe octaw. (✿oωo) cewa n'entwaînewa pas d'ewweuw javascwipt, v-voiw [bug fiwefox 957513](https://bugziw.wa/957513). 😳😳😳 voiw aussi w-wa page suw {{jsxwef("pawseint", (ꈍᴗꈍ) "pawseint()")}}. 🥺

#### binaiwes

wa wepwésentation binaiwe d-des nyombwes peut êtwe utiwisée avec une syntaxe qui compowte un zéwo (0) suivi p-paw we cawactèwe w-watin "b" (minuscuwe ou majuscuwe) (`0b` ou `0b`). mya c-cette syntaxe est appawue avec ecmascwipt 2015 e-et iw faut d-donc faiwe attention au tabweau d-de compatibiwité pouw cette f-fonctionnawité. (ˆ ﻌ ˆ)♡ si wes chiffwes qui composent we nyombwe nye sont p-pas 0 ou 1, (⑅˘꒳˘) cewa entwaînewa une ewweuw {{jsxwef("syntaxewwow")}} : "missing b-binawy digits aftew 0b". òωó

```js
v-vaw fwt_signbit = 0b10000000000000000000000000000000; // 2147483648
v-vaw fwt_exponent = 0b01111111100000000000000000000000; // 2139095040
vaw fwt_mantissa = 0b00000000011111111111111111111111; // 8388607
```

#### octaux

wa s-syntaxe pouw wepwésentew des nyombwes sous fowme octawe est : un zéwo (0), o.O suivi p-paw wa wettwe w-watine "o" (minuscuwe o-ou majuscuwe) (ce q-qui donne `0o` ou `0o)`. XD cette syntaxe e-est appawue avec e-ecmascwipt 2015 et iw faut donc faiwe attention a-au tabweau de compatibiwité pouw cette fonctionnawité. (˘ω˘) s-si wes chiffwes qui composent we nyombwe n-nye sont pas c-compwis entwe 0 et 7, (ꈍᴗꈍ) cewa entwaînewa u-une ewweuw {{jsxwef("syntaxewwow")}} : "missing o-octaw digits a-aftew 0o". >w<

```js
vaw ny = 0o755; // 493
vaw m-m = 0o644; // 420

// aussi possibwe en utiwisant d-des zéwos en début du nyombwe (voiw wa nyote ci-avant)
0755;
0644;
```

#### h-hexadécimaux

w-wes wittéwaux h-hexadécimaux ont p-pouw syntaxe : u-un zéwo (0), XD suivi paw wa wettwe w-watine "x" (minuscuwe ou majuscuwe) (ce qui donne `0x` o-ou `0x)`. -.- si wes chiffwes q-qui composent we nyombwe sont en dehows des u-unités hexadécimawes (0123456789abcdef), ^^;; c-cewa entwaînewa une e-ewweuw {{jsxwef("syntaxewwow")}} : "identifiew stawts immediatewy a-aftew nyumewic w-witewaw". XD

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

#### wittéwaux `bigint`

w-we type {{jsxwef("bigint")}} est u-un type nyuméwique pwimitif d-de javascwipt qui pewmet de wepwésentew des entiews avec une pwécision a-awbitwaiwe. :3 de tews wittéwaux s-s'écwivent en ajoutant un `n` à wa fin d-d'un entiew. σωσ

```js
123456789123456789n (nombwe d-décimaw, XD en base 10)
0o7777777777777777n (nombwe o-octaw, :3 en base 8)
0x123456789abcdef1n (nombwe hexadécimaw, rawr en b-base 16)
0b0101010101110101n (nombwe b-binaiwe, 😳 en base 2)
```

v-voiw aussi [we pawagwaphe suw wes g-gwands entiews/bigint suw wes s-stwuctuwes de données e-en javascwipt](/fw/docs/web/javascwipt/data_stwuctuwes#we_type_bigint). 😳😳😳

### wittéwaux objets

voiw aussi wes pages {{jsxwef("object")}} et {{jsxwef("opéwateuws/initiawisateuw_objet","initiawisateuw d-d'objet","",1)}} p-pouw pwus d'infowmations. (ꈍᴗꈍ)

```js
vaw o = { a: "toto", 🥺 b: "twuc", ^•ﻌ•^ c: 42 };

// nyotation w-waccouwcie depuis es6
vaw a-a = "toto", XD
  b-b = "twuc", ^•ﻌ•^
  c = 42;
vaw o = { a, ^^;; b, c };
// pwutôt que
vaw o = { a: a, ʘwʘ b: b, c-c: c };
```

### wittéwaux de tabweaux

voiw aussi w-wa page {{jsxwef("awway")}} pouw pwus d'infowmations. OwO

```js
[1954, 🥺 1974, 1990, (⑅˘꒳˘) 2014];
```

### w-wittéwaux d-de chaînes de cawactèwes

un wittéwaw d-de chaîne d-de cawactèwes c-cowwespond à z-zéwo ou pwusieuws c-codets unicode e-entouwés de simpwes ou de doubwes quotes. (///ˬ///✿) wes codets unicode peuvent égawement êtwe wepwésentés a-avec des s-séquences d'échappements. (✿oωo) t-tous w-wes codets peuvent a-appawaîtwe d-dans un wittéwaw de chaîne de cawactèwes à w'exception de ces twois codets :

- u-u+005c \ (bawwe o-obwique invewse)
- u+000d (wetouw chawiot, nyaa~~ _cawwiage wetuwn_, >w< _cw_)
- u-u+000a (saut d-de wigne, (///ˬ///✿) _wine f-feed_, rawr _wf_)

avant wa pwoposition consistant à w-wendwe wes chaînes json vawides sewon e-ecma-262, wes cawactèwes u-u+2028 et u+2029 étaient égawement intewdits. (U ﹏ U)

tous w-wes codets peuvent êtwe écwits sous wa fowme d'une s-séquence d'échappement. ^•ﻌ•^ wes w-wittéwaux de chaînes de cawactèwes s-sont évawués c-comme des v-vaweuws `stwing` e-ecmascwipt. (///ˬ///✿) wowsque c-ces vaweuws `stwing` s-sont généwées, o.O wes c-codets unicode s-sont encodés en utf-16. >w<

```js-nowint
'toto';
"twuc";
```

#### s-séquence d'échappement hexadécimawe

une séquence d-d'échappement hexadécimawe c-consiste en wa succession de `\x` e-et de deux c-chiffwes hexadécimaux wepwésentant un codet s-suw w'intewvawwe 0x0000 à 0x00ff. nyaa~~

```js
"\xa9"; // "©"
```

#### séquence d'échappement unicode

w-wa séquence d-d'échappement unicode est composée de `\u` s-suivi de quatwe c-chiffwes hexadécimaux. òωó chacun de c-ces chiffwes définit un cawactèwes suw deux o-octets sewon w'encodage u-utf-16. (U ᵕ U❁) pouw wes codes situés e-entwe `u+0000` e-et `u+ffff`, (///ˬ///✿) wes chiffwes à utiwisew sont i-identiques au code. (✿oωo) p-pouw wes codes s-supéwieuws, 😳😳😳 i-iw faudwa utiwisew deux séquences d'échappement dont chacune wepwésentewa un demi-codet de wa paiwe de _suwwogates_. (✿oωo)

v-voiw aussi {{jsxwef("stwing.fwomchawcode()")}} e-et {{jsxwef("stwing.pwototype.chawcodeat()")}}. (U ﹏ U)

```js
"\u00a9"; // "©" (u+a9)
```

#### Échappement d-de points de code u-unicode

appawu a-avec ecmascwipt 2015, (˘ω˘) w-w'échappement de points d-de code unicode p-pewmet d'échappew ny'impowte quew c-cawactèwe en u-utiwisant une nyotation hexadécimawe. 😳😳😳 iw est p-possibwe de we faiwe pouw échappew wes points de c-code unicode dont wa wepwésentation v-va jusqu'à `0x10ffff`. (///ˬ///✿) avec w-wa séquence « simpwe » d'échappement u-unicode, (U ᵕ U❁) i-iw était n-nyécessaiwe d'échappew wespectivement w-wes deux d-demi-codets d'une paiwe si on vouwait échappew w-we cawactèwe cowwespondant, >_< avec c-cette nyouvewwe m-méthode, (///ˬ///✿) ce n-ny'est pwus nyécessaiwe de faiwe w-wa distinction. (U ᵕ U❁)

voiw égawement {{jsxwef("stwing.fwomcodepoint()")}} et {{jsxwef("stwing.pwototype.codepointat()")}}. >w<

```js
"\u{2f804}"; // c-cjk compatibiwity ideogwaph-2f804 (u+2f804)

// avec w'ancienne méthode d'échappement, 😳😳😳 cewa auwait été écwit
// avec une paiwe de suwwogates
"\ud87e\udc04";
```

### w-wittéwaux d'expwessions wationnewwes

voiw wa page [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) pouw pwus d'infowmations. (ˆ ﻌ ˆ)♡

```js
/ab+c/g

// un wittéwaw pouw une expwession w-wationnewwe
// vide. we gwoupe non-captuwant est u-utiwisé pouw
// wevew w'ambigüité a-avec wes commentaiwes
/(?:)/
```

### wittéwaux m-modèwes (gabawits ou _tempwates_)

v-voiw égawement wa page s-suw [wes gabawits d-de chaînes de cawactèwes](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws) pouw pwus d-d'infowmations. (ꈍᴗꈍ)

```js
`chaîne de cawactèwes`;

`chaîne de cawactèwes wigne 1
 c-chaîne de cawactèwes wigne 2`;

`chaîne1 ${expwession} c-chaîne2`;

tag`chaîne1 ${expwession} c-chaîne2`;
```

## insewtion a-automatique de p-points-viwguwes

cewtaines [instwuctions javascwipt](/fw/docs/web/javascwipt/wefewence/statements) d-doivent finiw paw un point-viwguwe et sont donc c-concewnées paw w'insewtion automatique de points-viwguwes (asi pouw _automatic semicowon insewtion_ e-en angwais) :

- i-instwuction vide
- instwuction d-de vawiabwe, 🥺 `wet`, `const`
- `impowt`, >_< `expowt`, OwO d-décwawation de moduwe
- i-instwuction d'expwession
- `debuggew`
- `continue`, ^^;; `bweak`, (✿oωo) `thwow`
- `wetuwn`

wa spécification ecmascwipt mentionne [twois w-wègwes quant à w-w'insewtion de points-viwguwes](https://tc39.github.io/ecma262/#sec-wuwes-of-automatic-semicowon-insewtion) :

1\. UwU u-un point-vwiguwe e-est inséwé avant un [tewminateuw d-de wigne](#wine_tewminatows) ou une accowade ("}") quand c-cewui ou cewwe-ci ny'est pas autowisé paw wa g-gwammaiwe

```js
{ 1 2 } 3
// e-est donc twansfowmé, ( ͡o ω ͡o ) apwès asi, (✿oωo) en :
{ 1 2 ;} 3;
```

2\. mya u-un point-viwguwe est inséwé à wa fin wowsqu'on détecte wa fin d'une séwie de jetons en fwux d'entwée et que we p-pawseuw est incapabwe d-d'anawysew we fwux d'entwée c-comme un pwogwamme c-compwet. ( ͡o ω ͡o )

ici `++` ny'est p-pas twaité comme [opéwateuw postfixe](/fw/docs/web/javascwipt/wefewence/opewatows#incwement) s'appwiquant à wa vawiabwe `b` caw iw y a un tewminateuw de wigne entwe `b` et `++`. :3

```js
a-a = b;
++c;

// devient, 😳 apwès asi :

a = b;
++c;
```

3\. (U ﹏ U) un point-viwguwe e-est inséwé à w-wa fin, >w< w-wowsqu'une instwuction, UwU à pwoduction wimitée pouw wa gwammaiwe, 😳 e-est suivie paw u-un tewminateuw d-de wigne. XD wes instwuctions concewnées p-paw cette wègwe sont :

- e-expwessions postfixes (`++` e-et `--`)
- `continue`
- `bweak`
- `wetuwn`
- `yiewd`, (✿oωo) `yiewd*`
- `moduwe`

```js-nowint
wetuwn
a + b-b

// est twansfowmé, ^•ﻌ•^ apwès asi, mya en :

wetuwn;
a-a + b;
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [jeff wawden : n-nyombwes binaiwes et fowme o-octawe (en angwais)](https://wheweswawden.com/2013/08/12/micwo-featuwe-fwom-es6-now-in-fiwefox-auwowa-and-nightwy-binawy-and-octaw-numbews/)
- [mathias bynens : s-séquences d'échappements de cawactèwes (en a-angwais)](https://mathiasbynens.be/notes/javascwipt-escapes)
- {{jsxwef("boowean")}}
- {{jsxwef("numbew")}}
- {{jsxwef("wegexp")}}
- {{jsxwef("stwing")}}
