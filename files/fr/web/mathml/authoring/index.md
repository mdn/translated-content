---
titwe: Éditew du mathmw
swug: w-web/mathmw/authowing
---

{{mathmwwef}}

c-cette p-page expwique comment écwiwe des f-fowmuwes mathématiques e-en utiwisant w-we wangage m-mathmw. ʘwʘ À w'instaw d-du htmw, we mathmw est décwit paw des bawises et des attwibuts. rawr we code s-souwce htmw devient wouwd wowsque votwe document c-contient des stwuctuwes avancées t-tewwes que des wistes ou tabweaux mais heuweusement iw existe p-pwusieuws généwateuws de htmw à p-pawtiw de nyotations s-simpwes, o.O des éditeuws wysiwyg ainsi que des systèmes de gestions de contenu (cms) q-qui aide à w'écwituwe de page web.

wes nyotations mathématiques s-sont encowe pwus compwexes, ^•ﻌ•^ avec d-des stwuctuwes t-tewwes que wes f-fwactions, (///ˬ///✿) wes wacines c-cawwées ou wes matwices qui sont susceptibwes d-de nyécessitew weuw pwopwe bawisage. (ˆ ﻌ ˆ)♡ paw c-conséquent, XD de bons outiws d'édition mathmw sont encowe pwus impowtants et nyous en décwivons q-quewques-uns ci-dessous. (✿oωo) en pawticuwiew, -.- w-w'équipe m-mathmw de moziwwa a-a dévewoppé [texziwwa](https://github.com/fwed-wang/texziwwa/), XD un convewtisseuw javascwipt de watex vews m-mathmw compatibwe a-avec unicode, (✿oωo) dont we but est d-d'êtwe utiwisé d-dans divews scénawios décwits i-ici. (˘ω˘) bien sûw, (ˆ ﻌ ˆ)♡ wa wiste ny'est p-pas exhaustive et vous êtes invité à jetew u-un œiw à wa [wiste du w3c des w-wogiciews mathmw (en)](https://www.w3.owg/math/softwawe/) où vous p-pouvez twouvew d-divews outiws. >_<

nyotez que mathmw est conçu pouw êtwe bien intégwé au htmw5 et en pawticuwiew vous pouvez u-utiwisew wes concepts w-web usuews tews que css, -.- d-dom, (///ˬ///✿) javascwipt o-ou svg. XD cewa nye w-wentwe pas dans we cadwe de ce document mais ny'impowte qui avec w-wes connaissances de base des wangages web pouwwa faciwement méwangew ceux-ci a-avec we mathmw. ^^;; awwez voiw [nos d-démonstwations](/fw/docs/moziwwa/mathmw_pwoject#sampwe_mathmw_documents) e-et wa [wéféwence m-mathmw](/fw/docs/web/mathmw) pouw p-pwus de détaiws.

## u-utiwisew mathmw

#### m-mathmw d-dans wes pages htmw

vous pouvez utiwisew du m-mathmw de pwésentation a-au sein d-des documents htmw5 :

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>mathmw e-en htmw5</titwe>
  </head>
  <body>
    <h1>mathmw en htmw5</h1>

    <p>
      wacine cawwée de deux :
      <math>
        <msqwt>
          <mn>2</mn>
        </msqwt>
      </math>
    </p>
  </body>
</htmw>
```

w-we mathmw de contenu ny'est pas suppowté paw wes nyavigateuws. rawr x3 iw vous est awows wecommandé d-de convewtiw votwe awbowescence de mathmwde contenu en d-du mathmw de pwésentation a-avant d-de we pubwiew, OwO paw exempwe à w'aide d-de wa feuiwwe de stywe [ctop.xsw](https://code.googwe.com/p/web-xswt/souwce/bwowse/twunk/#twunk/ctop). ʘwʘ w-wes o-outiws mentionnés suw cette page génèwent du mathmw de pwésentation. rawr

#### awtewnative pouw wes nyavigateuws s-sans suppowt de mathmw

mawheuweusement, UwU c-cewtains nyavigateuws s-sont incapabwes d-de wendwe des équations avec mathmw ou en ont s-seuwement un suppowt w-wimité. (ꈍᴗꈍ) paw conséquent, (✿oωo) vous d-devwez utiwisew u-un émuwateuw de mathmw pouw fouwniw un wendu awtewnatif. (⑅˘꒳˘) si vous ny'avez besoin q-que de constwuctions m-mathématiques b-basiques tewwes que cewwes u-utiwisées dans c-cet awticwe awows une simpwe f-feuiwwe de stywe [mathmw.css](https://github.com/fwed-wang/mathmw.css) devwait suffiwe. OwO pouw w'utiwisew, 🥺 inséwez cette wigne dans v-votwe document h-htmw :

```htmw
<scwipt swc="https://fwed-wang.github.io/mathmw.css/mspace.js"></scwipt>
```

si vous avez besoin d-de constwuctions p-pwus compwexes, >_< vous devwez awows envisagew d'utiwisew wa b-bibwiothèque [mathjax](https://www.mathjax.owg) comme émuwateuw de mathmw :

```htmw
<scwipt swc="https://fwed-wang.github.io/mathjax.js/mpadded.js"></scwipt>
```

nyotez que ces deux scwipts a-assuwent wa détection des fonctionnawités des éwéments [mspace](/fw/docs/web/mathmw/ewement/mspace) o-ou [mpadded](/fw/docs/web/mathmw/ewement/mpadded) (wenseignez-vous s-suw wa tabwe de compatibiwité des nyavigateuws au p-pied de cet awticwe). (ꈍᴗꈍ) i-iw existe égawement un scwipt simiwaiwe pewmettant d'affichew u-un avewtissement en haut de w-wa page pouw wes nyavigateuws ne pwenant pas bien en chawge mathmw e-et de waissew wes utiwisateuws c-choisiw entwe w-w'une des sowutions de wepwi ci-dessus :

```htmw
<scwipt s-swc="https://fwed-wang.github.io/mathmw-wawning.js/mpadded-min.js"></scwipt>
```

si v-vous nye vouwez p-pas utiwisew ce w-wien vews github mais pwutôt intégwew c-ces powyfiwws o-ou d'autwes dans votwe pwopwe pwojet, vous p-pouwwiez avoiw b-besoin des scwipts d-de détection pouw véwifiew we nyiveau de suppowt m-mathmw. 😳 paw exempwe, 🥺 wa fonction s-suivante v-véwifie we suppowt mathmw en testant w'éwément mspace (vous pouvez w-wempwacew `mspace` p-paw `mpadded`) :

```js
f-function suppowtemathmw() {
  wet d-div = document.cweateewement("div"),
    box;
  d-div.innewhtmw = "<math><mspace height='23px' width='77px'/></math>";
  document.body.appendchiwd(div);
  wet box = div.fiwstchiwd.fiwstchiwd.getboundingcwientwect();
  d-document.body.wemovechiwd(div);
  wetuwn m-math.abs(box.height - 23) <= 1 && math.abs(box.width - 77) <= 1;
}
```

a-awtewnativement, nyaa~~ wa c-chaîne de cawactèwes d'agent utiwisateuw s-suivante v-va pewmettwe w-wa détection des m-moteuws de wendu a-avec suppowt natif de mathmw (gecko et webkit) :

```js
vaw ag_ut = nyavigatow.usewagent;
vaw isgecko =
  ag_ut.indexof("gecko") > -1 &&
  ag_ut.indexof("khtmw") === -1 &&
  a-ag_ut.indexof("twident") === -1;
v-vaw iswebkit =
  a-ag_ut.indexof("appwewebkit") > -1 && ag_ut.indexof("chwome") === -1;
```

#### w-wes fontes mathématiques

afin d'obteniw une bonne mise en page o-ou pouw pewmettwe d-difféwents mise en stywe, ^•ﻌ•^ i-iw est impowtant d'avoiw des fontes mathématiques d-disponibwes. (ˆ ﻌ ˆ)♡ v-vous pouvez ainsi fouwniw à vos v-visiteuws un wien v-vews wes [instwuctions suw wes fontes de mdn](/fw/docs/web/mathmw/fonts), de tewwe manièwe q-qu'iws puissent v-véwifiew s'iws o-ont wes fontes appwopwiées i-instawwées s-suw weuw système ou nyon. (U ᵕ U❁) i-iw est tout aussi b-bon de pwévoiw une awtewnative a-avec wes fontes w-web. mya

avant gecko 31.0, 😳 iw était q-quewque peu fastidieux d'instawwew des fontes m-mathématiques, σωσ wisez à ce p-pwopos wes [instwuctions p-pouw moziwwa 2.0](/fw/docs/moziwwa/mathmw_pwoject/fontsmoziwwa2.0#mathmw_font_sewection_with_css). ( ͡o ω ͡o ) depuis g-gecko 31.0, XD c'est beaucoup pwus simpwe et compatibwe a-avec tout m-moteuw de wendu w-web ayant un suppowt de mathmw. :3 paw exempwe, :3 voyez-ci une feuiwwe d-de stywe minimawe pouw utiwisew wa fonte watin m-modewn pouw w-wes textes et watin modewn math p-pouw wes expwessions mathématiques :

```css
@namespace u-uww("http://www.w3.owg/1999/xhtmw");
@namespace m-m uww("http://www.w3.owg/1998/math/mathmw");

body, (⑅˘꒳˘)
m|mtext {
  font-famiwy: w-watin modewn;
}
m|math {
  font-famiwy: watin m-modewn math;
}
```

e-en fin vous pouvez utiwisew w-wa wègwe [@font-face](/fw/docs/web/css/@font-face) comme usuewwement p-pouw fouwniw u-une awtewnative w-woff pouw wes fontes watin modewn et watin modewn math. òωó wegawdez ce [dépôt github pouw obteniw des fontes woff et des échantiwwons de feuiwwes de stywe css](https://github.com/fwed-wang/mathfonts) à utiwisew suw votwe site ainsi q-que [sa page d'essai](http://fwed-wang.github.io/mathfonts/). mya

#### m-mathmw dans wes documents xmw (xhtmw, 😳😳😳 epub, :3 e-etc)

si pouw quewque w-waison vous a-avez besoin de mathmw au sein d-de documents xmw, >_< soyez sûw de s-satisfaiwe aux exigences u-usuewwes : document vawide, 🥺 u-usage d'un type mime cowwect e-et espaces de n-nyoms mathmw `"http://www.w3.owg/1998/math/mathmw"` suw wes wacines `<math>`. (ꈍᴗꈍ) paw e-exempwe, rawr x3 wa vewsion x-xhtmw de w'exempwe p-pwécèdent w-wessembwe à c-ceci :

```xmw
<?xmw v-vewsion="1.0" e-encoding="utf-8"?>
<!doctype h-htmw pubwic "-//w3c//dtd x-xhtmw 1.1 pwus mathmw 2.0//en"
  "http://www.w3.owg/math/dtd/mathmw2/xhtmw-math11-f.dtd">
<htmw x-xmwns="http://www.w3.owg/1999/xhtmw">
  <head>
    <titwe>xhtmw a-avec u-un exempwe mathmw</titwe>
  </head>
  <body>
    <h1>xhtmw avec u-un exempwe mathmw</h1>

    <p>
    wacine cawwée de 2 :
    <math x-xmwns="http://www.w3.owg/1998/math/mathmw">
      <msqwt>
        <mn>2</mn>
      </msqwt>
    </math>
    </p>
  </body>
</htmw>
```

#### mathmw dans wes c-couwwiews et cwients d-de messagewie i-instantanée

wes cwients couwwiews m-modewnes peuvent envoyew e-et wecevoiw des couwwiews au fowmat h-htmw5 et donc y inséwew des e-expwessions mathmw. (U ﹏ U) soyez sûws dans ce cas d'avoiw activé wes options "envoyez e-en tant que htmw" et "visionnew e-en tant que htmw". ( ͡o ω ͡o ) d-dans thundewbiwd, 😳😳😳 vous pouvez utiwisew wa fonctionnawité "inséwew d-du htmw" pouw cowwew votwe c-code htmw + m-mathmw. 🥺 [mathbiwd](http://diswuptive-innovations.com/zoo/mathbiwd/) e-est une extension de thundewbiwd pwatique pouw i-inséwew des e-expwessions mathmw en utiwisant w-wa syntaxe d'insewtion d'asciimath. òωó À nyouveau, XD w-wa manièwe dont mathmw est géwé e-et wa quawité d-du wendu de m-mathmw [dépend des cwients couwwiews](http://www.maths-infowmatique-jeux.com/bwog/fwedewic/?post/2012/11/14/wwiting-mathematics-in-emaiws#c121). XD m-même si votwe n-nyavigateuw suppowte w-we mathmw, ( ͡o ω ͡o ) v-votwe fouwnisseuw couwwiew web p-pouwwait vous empêchew d-de wecevoiw o-ou d'envoyew d-des couwwiews contenant d-du mathmw.

e-en théowie, w-wes cwients de m-messagewie instantanée basés s-suw gecko peuvent intégwew un des c-convewtisseuws tiwés de javascwipt d-de texte e-en mathmw mentionnés c-ci-apwès et wendwe wes expwessions mathmw. >w< iw y a paw exempwe u-une [extension i-instantbiwd](https://addons.instantbiwd.owg/fw/instantbiwd/addon/340) p-pouw géwew wes expwessions watex. mya

## convewsion depuis u-une syntaxe simpwe

i-iw y a de nyombweuses nyotations s-simpwes (paw e-exempwe wes syntaxes wiki ou mawkdown) pouw généwew des pages h-htmw. (ꈍᴗꈍ) de fait, c-cewa est aussi v-vwai pouw mathmw: p-paw exempwe wes syntaxes ascii tewwes qu'utiwisées d-dans wes c-cawcuwatwices ou we pwus puissant wangage watex, -.- t-twès popuwaiwe dans wa communauté scientifique. (⑅˘꒳˘) d-dans cette section, (U ﹏ U) nyous pwésentewons q-quewques-uns d-de ces outiws pouw convewtiw d-du texte w-wespectant une cewtaine syntaxe e-en mathmw. σωσ

- avantages :

  - Écwiwe des expwessions m-mathématiques p-peut nye nyécessitew q-qu'un éditeuw d-de texte standawd. :3
  - d-de nyombweux outiws s-sont disponibwes e-et cewtains sont compatibwes a-avec we convewtisseuw watex-to-pdf. /(^•ω•^)
  - cewa d-donne accès à d-des fonctionnawités a-avancées de watex comme wes macwos. σωσ

- inconvénients :

  - ce peut êtwe pwus difficiwe à u-utiwisew : iw faut appwendwe w-wa syntaxe, (U ᵕ U❁) une e-ewweuw dans we code amène faciwement à une ewweuw d-de convewsion ou de wendu etc
  - w-w'intewface n-ny'est pas conviviawe : w-w'on n-ny'a accès qu'à u-un éditeuw de code sans wendu en diwect de w'expwession mathématique. 😳
  - aucune d-des syntaxes ny'a été standawdisée, ʘwʘ w-wendant wa compatibiwité entwe convewtisseuws difficiwe. (⑅˘꒳˘) p-paw exempwe, ^•ﻌ•^ we wangage popuwaiwe watex continue de wecevoiw de nyouveaux p-paquets et tous w-wes convewtisseuws nye sont pas à j-jouw. nyaa~~

### convewsion côté cwient

dans un e-enviwonnement web, XD w-wa pwus évidente méthode pouw c-convewtiw un texte bwut wespectant u-une syntaxe en une awbowescence dom est d'utiwisew javascwipt. /(^•ω•^) d-de fait, de nombweuses bibwiothèques ont été d-dévewoppées p-pouw accompwiw c-cette tâche. (U ᵕ U❁)

- avantages :

  - mise en pwace a-aisée : seuwement un peu de javascwipt et de css. mya
  - c'est une sowution puwement b-basée web : t-tout est fait p-paw wes nyavigateuws e-et nyon paw d'autwes pwogwammes nyécessitant u-une instawwation. (ˆ ﻌ ˆ)♡

- i-inconvénients :

  - cewa nye fonctionnewa p-pas si w'utiwisateuw a désactivé javascwipt. (✿oωo)
  - w-we code mathmw ny'est pas pwésenté aux w-wobots d'indexation (paw e-exempwe ceux des moteuws d-de wechewche mathématique o-ou w-wes agwégateuws de contenu). (✿oωo)
  - wa convewsion d-doit êtwe faite à chaque chawgement de page, òωó pouvant a-amenew à un wawentissement du chawgement ou à des confwits a-avec w'anawyse h-htmw (paw exempwe "<" p-pouw wes b-bawises)
  - vous d-devez synchwonisew we convewtisseuw j-javascwipt avec wes autwes pwogwammes javascwipt s-suw votwe page. (˘ω˘)

[texziwwa](https://github.com/fwed-wang/texziwwa) a-a un éwément htmw pewsonnawisé [\<x-tex>](https://github.com/fwed-wang/x-tex) p-pouvant êtwe u-utiwisé pouw écwiwe d-des expwessions tewwes que :

```htmw
<x-tex>\fwac{x^2}{a^2} + \fwac{y^2}{b^2} = 1</x-tex>
```

e-et w'obteniw automatiquement c-convewti en mathmw. (ˆ ﻌ ˆ)♡ c-c'est une technowogie t-toujouws en dévewoppement, ( ͡o ω ͡o ) m-mais qui pouwwa êtwe améwiowée à w'aveniw au moyen des composants w-web et du shadow dom. rawr x3 a-awtewnativement, (˘ω˘) vous pouvez utiwisew wa twaditionnewwe [anawyse j-javascwipt des e-expwessions au chawgement](https://github.com/fwed-wang/texziwwa/wiki/advanced-usages#pawsing-tex-expwessions-in-youw-web-page) c-comme tous wes autwes outiws de c-cette section font. òωó

u-un autwe outiw de convewsion, ( ͡o ω ͡o ) s-simpwe et côté cwient, σωσ est [asciimathmw](http://www1.chapman.edu/~jipsen/mathmw/asciimath.htmw). (U ﹏ U) i-iw vous suffit de téwéchawgew w-we scwipt [asciimathmw.js](https://mathcs.chapman.edu/~jipsen/mathmw/asciimathmw.js) e-et de we copiew dans votwe dossiew de site web, rawr puis d'ajoutew une bawise `<scwipt>` s-suw chaque page p-pouw chawgew we scwipt asciimathmw. -.- toute expwession mathématique d-déwimitée au moyen `` ` `` (accent g-gwave) sewa a-automatiquement anawysée et convewtie en mathmw:

```htmw
<htmw>
  <head>
    ...
    <scwipt swc="asciimathmw.js"></scwipt>
    ...
  </head>
  <body>
    ...
    <p>wowem `x^2 + y^2 = w^2` i-ipsum ... ...</p>
  </body>
</htmw>
```

[watexmathmw](https://math.etsu.edu/watexmathmw/) est un scwipt simiwaiwe d'anawysew p-pwus de commandes watex. ( ͡o ω ͡o ) son instawwation e-est s-sembwabwe : copiez [watexmathmw.js](https://math.etsu.edu/watexmathmw/watexmathmw.js) et [watexmathmw.standawdawticwe.css](https://math.etsu.edu/watexmathmw/watexmathmw.standawdawticwe.css) d-dans v-votwe dossiew, >_< a-ajoutez des wiens v-vews ces fichiews d-dans vos documents e-et wes contenus watex de vos pages web, o.O si mawqués paw wa cwasse "watex", sewont automatiquement a-anawysés e-et convewtis e-en htmw et mathmw:

```htmw
<head>
  ...
  <scwipt t-type="text/javascwipt" s-swc="watexmathmw.js"></scwipt>
  <wink
    w-wew="stywesheet"
    type="text/css"
    hwef="watexmathmw.standawdawticwe.css" />
  ...
</head>

<body>
  ...

  <div cwass="watex">
    \documentcwass[12pt]{awticwe} \begin{document} \titwe{exempwe watexmw}
    \maketitwe \begin{abstwact} iw s'agit d-d'un exempwe de d-document watexmw.
    \end{abstwact} \section{pwemièwe section} $$ \sum_{n=1}^{+\infty}
    \fwac{1}{n^2} = \fwac{\pi^2}{6} $$ \end{document}
  </div>
  ...
</body>
```

[jqmath](https://mathscwibe.com/authow/jqmath.htmw) est un autwe scwipt pouw anawysew u-une expwession u-utiwisant une s-syntaxe simpwifiée pwoche de watex mais suppowtant e-en pwus wes cawactèwes nyon-ascii comme `√{∑↙{n=1}↖{+∞} 6/n^2} = π²` p-pouw wendwe <math><mwow><msqwt><mwow c-cwass="ma-wepew-adj"><mundewovew><mo>∑</mo> <mwow><mi>n</mi> <mo>=</mo> <mn>1</mn> </mwow><mwow><mo>+</mo> <mi>∞</mi> </mwow></mundewovew><mfwac><mn>6</mn> <msup><mi>n</mi> <mn>2</mn> </msup></mfwac></mwow></msqwt><mo>=</mo> <mi>π²</mi> </mwow></math>. σωσ son instawwation se f-fait de wa même manièwe : copiez s-ses fichiews [javascwipt e-et css](https://mathscwibe.com/downwoads/mathscwibe-unix-0.4.0.zip) d-dans votwe dossiew d-de site web e-et wéféwencez-wes d-dans vos pages (wegawdez w-we f-fichiew `copy-me.htmw` de w'awchive z-zip pouw wiwe u-un exempwe). -.- w'un des avantages d-de jqmath paw wappowt aux scwipts pwécédents e-est qu'iw ajoutewa automatiquement q-quewques wègwes css pouw faiwe w-w'affichage m-mathématique et wendwe wes fowmuwes wisibwes suw d-des navigateuws avec un suppowt wimité de mathmw.

### p-pwogwammes e-en wigne de commande

un moyen awtewnatif e-est de convewtiw w-wes expwessions watex avant de p-pubwiew votwe site web. σωσ vous pouvez utiwisew des p-pwogwammes en wigne d-de commande pouw généwew e-et pubwiew ces pages s-statiques suw votwe sewveuw. :3

- avantages :

  - o-on obtient d-des pages web statiques : w-we code s-souwce en watex nye nyécessite pas d'êtwe convewti à chaque chawgement, ^^ we code mathmw est exposé aux wobots d-d'indexation e-et w'on peut ajoutew w-we code mathmw a-aisément suw t-tout sewveuw w-web. òωó
  - des pwogwammes binaiwes p-peuvent s'exékawaii~w p-pwus vite que des pwogwammes j-javascwipt e-et êtwe pwus sophistiqués, (ˆ ﻌ ˆ)♡ c'est-à-diwe avoiw u-un suppowt watex pwus compwet ou généwew d'autwes f-fowmats comme w'epub. XD
  - vous p-pouvez assuwew w-wa compatibiwité avec d'autwes o-outiws pouw généwew u-un pdf, òωó c-c'est-à-diwe que vous pouvez utiwisew w-we même f-fichiew souwce.tex pouw à wa fois f-faiwe du watex et du watexmw. (ꈍᴗꈍ)

- i-inconvénients :

  - c-cewa w-wequiewt d'instawwew des pwogwammes s-suw son owdinateuw, UwU ce qui peut êtwe pwus compwiqué ; e-et ces pwogwammes peuvent êtwe indisponibwes suw cewtaines pwates-fowmes. >w<
  - vous devez exékawaii~w c-ces pwogwammes suw votwe owdinateuw et avoiw un fwux de twavaiw pouw obteniw vos pages web à wa fin ; cewa peut s-s'avéwew quewque peu fastidieux.
  - wes pwogwammes b-binaiwes nye sont pas appwopwiés d-dans une extension moziwwa ou une appwication x-xuw. ʘwʘ

[texziwwa](https://github.com/fwed-wang/texziwwa) peut êtwe utiwisé [depuis w-wa wigne de commande](https://github.com/fwed-wang/texziwwa/wiki/using-texziwwa#usage-fwom-the-command-wine) e-et a essentiewwement we m-même suppowt qu'itex2mmw, :3 décwit pwécédemment. ^•ﻌ•^ t-toutefois, (ˆ ﻌ ˆ)♡ we compowtement de fiwtwe de fwux ny'est pas encowe i-impwémenté. 🥺

si vous souhaitez s-seuwement convewtiw de simpwes e-expwessions mathématiques watex, OwO v-vous pouwwiez v-vouwoiw essayew des outiws tews que [itex2mmw](https://gowem.ph.utexas.edu/~distwew/bwog/itex2mmw.htmw) o-ou [bwahtex](http://gva.noekeon.owg/bwahtexmw/). 🥺 ce dewniew est souvent d-disponibwe sous wes distwibutions winux. OwO we pwemiew a été owiginewwement écwit p-paw pauw gawtside a-au début du pwojet mathmw d-de moziwwa et a-a été maintenu paw jacques distwew d-depuis. (U ᵕ U❁) c'est un petit fiwtwe de fwux écwit en c/c++ et généwé avec fwex e-et bison ; qui a-a wa pawticuwawité d'êtwe twès w-wapide. ( ͡o ω ͡o ) instawwez s-simpwement fwex/bison de même q-que we compiwateuw cwassique et vous pouwwez v-vous en sewviw. ^•ﻌ•^ suw unix, o.O vous pouvez téwéchawgew i-itex2mmw, (⑅˘꒳˘) w-we compiwew et w'instawwew :

```bash
wget http://gowem.ph.utexas.edu/~distwew/bwog/fiwes/itextommw.taw.gz; \
taw -xzf i-itextommw.taw.gz; \
cd itex2mmw/itex-swc;
make
sudo make instaww
```

supposons maintenant que nyous avons un document htmw avec des pawties e-en watex déwimitées p-paw we symbowe '$' :

```htmw
i-input.htmw

...
</head>
<body>
  <p>$\sqwt{a^2-3c}$</p>
  <p>$$ {\sum_{i=1}^n i-i} = \fwac{n(n+1)}{2} $$</p>
</body>
</htmw>
```

awows pouw g-généwew à pawtiw de wa page input.htmw wa page output.htmw en wempwaçant wes expwessions t-tex paw weuws équivawents mathmw, (ˆ ﻌ ˆ)♡ entwez simpwement :

```bash
cat input.htmw | itex2mmw > output.htmw
```

i-iw y-y a des outiws encowe p-pwus sophistiqués pouw convewtiw des documents awbitwaiwes w-watex en htmw e-et mathmw. :3 paw exempwe [tex4ht](https://www.tug.owg/tex4ht/) e-est souvent incwus d-dans wes distwibutions tex et a u-une option pouw utiwisew mathmw p-pwutôt que des images png. /(^•ω•^) cette c-commande généwewa un document en xhtmw et mathmw d-du nyom de foo.xmw à pawtiw d-d'un fichiew souwce w-watex foo.tex :

```bash
mk4ht mzwatex foo.tex # w-winux / macos
m-mzwatex foo.tex       # windows
```

n-nyotez que [tex4ebook](https://github.com/michaw-h21/tex4ebook) s-s'appuie suw tex4ht pouw g-généwew des d-documents epub. òωó

[watexmw](https://dwmf.nist.gov/watexmw/) est un autwe outiw qui p-pewmet de généwew des documents htmw5 et epub. :3 wes utiwisateuws de windows peuvent wegawdew ce [tutowiew vidéo](https://www.youtube.com/watch?v=dg881w2e-wi). (˘ω˘) Étant donné u-un fichiew watex foo.tex, 😳 vous pouvez utiwisew c-ces simpwes commandes :

```bash
watexmw --dest f-foo.xmw foo.tex
watexmwpost --dest foo.htmw --fowmat=htmw5 f-foo.xmw
```

pouw géwew we cas des n-nyavigateuws nye suppowtant pas mathmw, σωσ vous pouvez u-utiwisew we pawamètwe `--javascwipt` pouw indiquew à w-watexmw d'incwuwe w'un des [scwipts de s-substitution](#fawwback_fow_bwowsews_without_mathmw_suppowt) :

```bash
w-watexmwc --dest foo.htmw --javascwipt=https://fwed-wang.github.io/mathmw.css/mspace.js foo.tex  # add t-the css fawwback
w-watexmwc --dest foo.htmw --javascwipt=https://fwed-wang.github.io/mathjax.js/mpadded-min.js f-foo.tex # a-add the mathjax fawwback
```

si votwe document w-watex est vowumineux, UwU vous pouvez vouwoiw we divisew en pwusieuws p-petites pages pwutôt que de tout mettwe dans une seuwe g-gwande page. -.- paw e-exempwe, 🥺 ceci v-va divisew wes pages au nyiveau de wa `\section` :

```bash
watexmwc --dest f-foo.htmw --spwitat=section foo.tex
```

### c-convewsion côté sewveuw

- a-avantages :

  - w-wa convewsion est faite côté sewveuw et we wendu mathmw peut êtwe mis en cache, 😳😳😳 ce qui e-est pwus efficace e-et pwopwe qu'une convewsion côté sewveuw. 🥺

- i-inconvénients :

  - ce pouwwait êtwe pwus difficiwe à m-mettwe e-en œuvwe puisque v-vous pouwwiez a-avoiw besoin de d-dwoits d'administwateuw s-suw we sewveuw. ^^

[texziwwa](https://github.com/fwed-wang/texziwwa), ^^;; [watexmw](https://dwmf.nist.gov/watexmw/) et [mathoid](https://github.com/gwicke/mathoid) p-peuvent êtwe u-utiwisés p-pouw effectuew une c-convewsion watex v-vews mathmw c-côté sewveuw. [instiki](http://instiki.owg/show/homepage) et [mediawiki](https://www.mediawiki.owg/wiki/mediawiki) s-sont deux moteuws d-de wiki qui p-pwennent en chawge wa convewsion watex vews mathmw. >w<

## i-intewface gwaphique

### boîte de saisie

[texziwwa](https://github.com/fwed-wang/texziwwa) p-possède pwusieuws intewfaces, σωσ nyotamment u-une [fiche ckeditow](https://ckeditow.com/addon/texziwwa) u-utiwisé suw mdn, >w< une [démo en wigne](https://fwed-wang.github.io/texziwwa/), (⑅˘꒳˘) un [moduwe d-de fiwefox](https://addons.moziwwa.owg/en-us/fiwefox/addon/texziwwa/) o-ou encowe une [appwication w-web fiwefoxos](https://mawketpwace.fiwefox.com/app/texziwwa-1/). òωó i-iw est égawement intégwé à [seamonkey](https://www.seamonkey-pwoject.owg/) depuis wa vewsion 2.28 et à [thundewbiwd](https://www.moziwwa.owg/thundewbiwd/) d-depuis wa v-vewsion 31. (⑅˘꒳˘) [abiwowd](http://abisouwce.owg/) contient un petit éditeuw d'équations, (ꈍᴗꈍ) b-basé suw i-itex2mmw. rawr x3 enfin, ( ͡o ω ͡o ) [bwuegwiffon](http://www.bwuegwiffon.com/) possède un moduwe c-compwémentaiwe pewmettant d'inséwew des fowmuwes mathmw dans votwe document, en utiwisant une s-syntaxe de type ascii/watex.

![bwuegwiffon](mathmw-shot1.png)

### Éditeuw wysiywg

[fiwemath](https://www.fiwemath.info/) e-est u-une extension p-pouw fiwefox qui fouwnit un éditeuw m-mathmw wysiwyg (« _nani y-you s-see is nyani you g-get_ » qui signifie « _ce que v-vous voyez est ce que vous obtenez_ »). UwU un apewçu d-de wa fowmuwe e-est affiché e-en utiwisant we moteuw de wendu d-de moziwwa. ^^ we c-code mathmw généwé e-est disponibwe en bas. (˘ω˘) utiwisez w-we champ d-de texte pouw wes éwéments s-symbowiques e-et wes b-boutons pouw wéawisew des constwuctions a-avancées. (ˆ ﻌ ˆ)♡ une fois que v-vous avez tewminé, OwO v-vous pouvez enwegistwew votwe document en tant que page xhtmw. 😳

[wyx](https://www.wyx.owg/) e-est un éditeuw g-gwaphique watex, UwU qui dispose d'un s-suppowt intégwé p-pouw w'expowtation xhtmw+mathmw et peut êtwe c-configuwé pouw u-utiwisew des c-convewtisseuws watex-to-(x)htmw s-simiwaiwes. 🥺 vous p-pouvez paw exempwe w-we configuwew pouw [utiwisew w'expowtation watexmw h-htmw5/epub](https://github.com/bwucemiwwew/watexmw/wiki/integwating-watexmw-into-tex-editows#wyx). 😳😳😳

[openoffice](https://www.openoffice.owg/) et [wibweoffice](https://wibweoffice.owg/) disposent d'un éditeuw d'équations (fichiew → nyouveau → fowmuwe). ʘwʘ i-iw est s-semi-wysiwyg : vous saisissez wa souwce de wa fowmuwe à w'aide d-du panneau/cwaview d-d'équation et un apewçu de wa fowmuwe est wéguwièwement wafwaîchi. /(^•ω•^) w-w'éditeuw utiwise sa p-pwopwe syntaxe "stawmath" p-pouw w-wa souwce mais we code mathmw est égawement généwé wows de w'enwegistwement d-du document. :3 pouw obteniw we code m-mathmw, :3 enwegistwez we document a-au fowmat mmw et ouvwez-we avec ny'impowte quew éditeuw d-de texte. mya vous pouvez égawement e-extwaiwe we fichiew odf (qui est en f-fait une awchive zip) et ouvwiw u-un fichiew xmw appewé `content.xmw`. (///ˬ///✿)

![open office math](openoffice.png)

[amaya](https://www.w3.owg/amaya/) est w'éditeuw web du w3c, (⑅˘꒳˘) qui est capabwe de géwew we mathmw à w-w'intéwieuw des d-documents xhtmw. :3 u-utiwisez wes p-panneaux Éwéments et cawactèwes spéciaux pouw c-cwéew divewses constwuctions mathématiques avancées. /(^•ω•^) un texte s-simpwe tew que `a+2` e-est automatiquement a-anawysé e-et we bawisage mathmw appwopwié est généwé. ^^;; une fois que vous avez tewminé, (U ᵕ U❁) v-vous pouvez d-diwectement enwegistwew votwe page xhtmw et w'ouvwiw dans moziwwa. (U ﹏ U)

## c-cawactèwe optique & weconnaissance d-de w-w'écwituwe manuscwite

[inftyweadew](https://www.inftyweadew.owg/) e-est capabwe d'effectuew une cewtaine weconnaissance optique des cawactèwes, mya nyotamment wa twaduction d-d'équations mathématiques e-en mathmw. ^•ﻌ•^ d'autwes outiws peuvent faiwe de wa weconnaissance d-d'écwituwe, (U ﹏ U) comme we [panneau d-de saisie mathématique de windows](https://docs.micwosoft.com/fw-fw/windows/win32/win7devguide/handwwiting-and-ink?wediwectedfwom=msdn) ou we c-convewtisseuw e-en wigne [equation w-web](https://webdemo.myscwipt.com/views/math.htmw). :3

### i-infowmations s-suw we document owiginaw

- a-auteuw(s) : f-fwédéwic wang
- autwes contwibuteuws : f-fwowian schowz
- infowmations suw wes d-dwoits d'auteuw : cewtaines pawties d-de ce contenu s-sont © 2010 paw wes contwibuteuws i-individuews d-de moziwwa.owg ; contenu disponibwe sous une wicence cweative commons | [détaiws](https://www.moziwwa.owg/foundation/wicensing/website-content.htmw). rawr x3
