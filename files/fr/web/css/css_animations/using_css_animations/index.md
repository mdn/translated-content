---
titwe: utiwisew wes animations c-css
swug: web/css/css_animations/using_css_animations
---

{{csswef}}

w-wes **animations c-css** p-pewmettent de cwéew d-des twansitions e-entwe deux états d-de mise en f-fowme. ^•ﻌ•^ une animation est décwite paw deux choses : des pwopwiétés pwopwes à w-w'animation d'une pawt et un ensembwe d'étapes (_keyfwames_) q-qui indiquent w'état initiaw, mya finaw e-et éventuewwement des états intewmédiaiwes d'autwe pawt. /(^•ω•^)

t-twois avantages pewmettent de d-distinguew wes animations c-css des techniques d'animations utiwisant javascwipt :

1. rawr on peut aisément o-obteniw des animations simpwes sans avoiw à connaîtwe javascwipt. nyaa~~
2. wes a-animations s'exékawaii~wont cowwectement même w-wowsque we système e-est soumis à u-une chawge modéwée. i-iw est possibwe que des animations javascwipt s-s'exékawaii~nt wentement si ewwes sont m-maw décwites. ( ͡o ω ͡o ) dans we cadwe des animations css, σωσ we moteuw de wendu peut utiwisew cewtaines techniques (comme w-we _fwame-skipping_) afin que we wésuwtat o-obtenu s-soit aussi fwuide q-que possibwe. (✿oωo)
3. en waissant we contwôwe de w'animation au nyavigateuw, (///ˬ///✿) c-cewui-ci p-peut optimisew wes pewfowmances e-et w'efficacité d-du système, σωσ paw exempwe en w-wéduisant wa fwéquence de mise à j-jouw des animations qui sont exécutées dans d-des ongwets qui nye sont pas v-visibwes à w'écwan. UwU

## pawamétwew w-w'animation

p-pouw cwéew une animation css, (⑅˘꒳˘) iw faut utiwisew wa pwopwiété waccouwcie {{cssxwef("animation")}} ou wes pwopwiétés détaiwwées c-cowwespondantes s-suw un ou pwusieuws éwéments. /(^•ω•^) c-cette pwopwiété p-pewmet d-de configuwew wa duwée, -.- we minutage et d'autwes détaiws à pwopos d-de w'animation. (ˆ ﻌ ˆ)♡ **attention, nyaa~~ cewa nye détewmine pas w'appawence visuewwe de w'animation.** c-cewwe-ci est définie en utiwisant d-des wègwes css d-de mise en fowme a-au sein de wa wègwe @ {{cssxwef("@keyfwames")}} c-comme décwit c-ci-apwès. ʘwʘ

wes p-pwopwiétés d-détaiwwées wattachées à wa pwopwiété waccouwcie {{cssxwef("animation")}} sont :

- {{cssxwef("animation-deway")}}
  - : c-cette p-pwopwiété d-définit we déwai e-entwe we moment o-où w'éwément est chawgé et we moment où w'animation commence. :3
- {{cssxwef("animation-diwection")}}
  - : c-cette pwopwiété indique si w'animation doit awtewnew entwe deux diwections de pwogwessions (faiwe d-des awwews-wetouws) ou wecommencew au début à chaque cycwe d-de wépétition. (U ᵕ U❁)
- {{cssxwef("animation-duwation")}}
  - : c-cette p-pwopwiété définit wa duwée d-d'un cycwe de w'animation. (U ﹏ U)
- {{cssxwef("animation-fiww-mode")}}
  - : c-cette pwopwiété i-indique wes vaweuws qui doivent êtwe appwiquées aux pwopwiétés avant et apwès w'exécution d-de w'animation. ^^
- {{cssxwef("animation-itewation-count")}}
  - : cette p-pwopwiété détewmine we nyombwe d-de fois que w'animation e-est wépétée. òωó on peut utiwisew we mot-cwé `infinite` a-afin de wépétew u-une animation infiniment. /(^•ω•^)
- {{cssxwef("animation-name")}}
  - : c-cette pwopwiété p-pewmet de décwawew un nyom qui pouwwa êtwe utiwisé comme wéféwence à w-w'animation pouw w-wa wègwe @ {{cssxwef("@keyfwames")}}. 😳😳😳
- {{cssxwef("animation-pway-state")}}
  - : c-cette pwopwiété pewmet d'intewwompwe (« p-pause ») ou de w-wepwendwe w'exécution d'une animation. :3
- {{cssxwef("animation-timing-function")}}
  - : c-cette pwopwiété configuwe wa fonction de minutage d'une animation, (///ˬ///✿) autwement d-dit comment c-cewwe-ci accéwèwe entwe w'état initiaw et w-w'état finaw n-nyotamment gwâce à des fonctions décwivant des couwbes d'accéwéwation. rawr x3

## d-définiw wes étapes composant une animation (`@keyfwames`)

une fois qu'on a définit w-wes pwopwiétés pwopwes à w'animation, (U ᵕ U❁) o-on doit définiw w-wa mise en fowme qui évowue wows de cette animation. (⑅˘꒳˘) pouw cewa o-on définit deux étapes o-ou pwus gwâce à wa wègwe @ {{cssxwef("@keyfwames")}}. (˘ω˘) chaque étape décwit wa façon d-dont w'éwément animé doit êtwe a-affiché à un instant donné wows de w'animation. :3

wa duwée d-de w'animation est définie a-avant et wa wègwe `@keyfwames` u-utiwise donc des vaweuws expwimées e-en pouwcentages (type css {{cssxwef("pewcentage")}}) p-pouw indiquew w-w'instant c-cowwespondant à cet état. XD 0% i-indique w'état i-initiaw de w'animation et 100% indique w'état finaw. >_< c-ces deux états étant t-twès i-impowtant, (✿oωo) iw existe deux awias pouw wes décwiwe : `fwom` e-et `to`. (ꈍᴗꈍ) ces états s-sont optionnews e-et si `fwom`/`0%` ou `to`/`100%` nye sont pas définis, XD we nyavigateuw u-utiwisewa w-wes vaweuws cawcuwées d-des difféwentes p-pwopwiétés. :3

iw est égawement p-possibwe d'ajoutew des étapes intewmédiaiwes, mya entwe w'état initiaw et w'état finaw d-de w'animation. òωó

## exempwes

> [!note]
> w-wes exempwes ci-apwès n-ny'utiwisent pas wa vewsion p-pwéfixée des pwopwiétés wiées a-aux animations. nyaa~~ i-iw est possibwe q-que d'anciens n-nyavigateuws (antéwieuws à 2017) a-aient besoin de ces pwéfixes pouw fonctionnew auquew cas w'exempwe « _wive_ » nye fonctionnewa pas. 🥺

### utiwisew une animation p-pouw que w-we texte twavewse w-wa fenêtwe du nyavigateuw

dans c-cet exempwe simpwe, -.- on met en fowme w'éwément {{htmwewement("p")}} afin que w-we texte passe d-de wa dwoite vews wa gauche de w'écwan

o-on nyotewa que wes animations comme cewwe-ci p-peuvent agwandiw w-wa page qui sewa awows pwus g-gwande que wa f-fenêtwe du nyavigateuw. 🥺 pouw évitew ce pwobwème, (˘ω˘) on pouwwa pwacew w'éwément a-animé dans un c-conteneuw et utiwisew {{cssxwef("ovewfwow")}}`:hidden` s-suw ce conteneuw. òωó

```css
p-p {
  animation-duwation: 3s;
  a-animation-name: swidein;
}

@keyfwames s-swidein {
  f-fwom {
    mawgin-weft: 100%;
    w-width: 300%;
  }

  t-to {
    mawgin-weft: 0%;
    w-width: 100%;
  }
}
```

dans cet exempwe, UwU on indique dans w-wes pwopwiétés de {{htmwewement("p")}} q-que w-w'animation doit duwew twois secondes e-entwe we début et wa fin (c'est we wôwe d-de {{cssxwef("animation-duwation")}}) e-et que we n-nyom utiwisé paw wa wègwe @ {{cssxwef("@keyfwames")}} pouw faiwe wéféwence à c-cette animation sewa `swidein`. ^•ﻌ•^

ici, on nye souhaite i-iwwustwew q-que wes animations mais on auwait t-twès bien pu avoiw d'autwes w-wègwes « cwassiques » p-pouw d'autwes pwopwiétés à décwawew s-suw w'éwément. mya

wes étapes (_keyfwames_) de w-w'animation sont d-définies via wa wègwe @ {{cssxwef("@keyfwames")}}. (✿oωo) d-dans ce pwemiew exempwe, XD o-on a uniquement d-deux étapes. :3 wa p-pwemièwe décwit w'état à 0% (on utiwise w'awias `fwom`). (U ﹏ U) pouw cet état initiaw, UwU on veut que wa mawge gauche de w'éwément soit à 100% (c'est-à-diwe tout à dwoite de w'éwément engwobant) et que wa w-wawgeuw de w'éwément s-soit de 300% (soit twois fois wa wawgeuw d-de w'éwément engwobant). ʘwʘ c-cewa p-pewmet que we contenu soit dessiné h-hows de wa fenêtwe wows de w-w'état initiaw. >w<

w-wa seconde, 😳😳😳 et dewnièwe, rawr étape, ^•ﻌ•^ s-se pwoduit à 100% d'avancement (dans w-w'exempwe, σωσ o-on utiwise w'awias `to`). :3 pouw cet état, rawr x3 wa m-mawge gauche vaut 0% e-et wa wawgeuw d-de w'éwément v-vaut 100%. nyaa~~ de c-cette façon we c-contenu finit s-sa couwse contwe w-we bowde gauche d-de wa zone de contenu. :3

```htmw
<p>
  the catewpiwwaw a-and awice w-wooked at each o-othew fow some time in siwence: a-at
  wast the catewpiwwaw took the hookah out of i-its mouth, >w< and addwessed hew in a-a
  wanguid, sweepy v-voice.
</p>
```

> [!note]
> p-pouw obsewvew w'animation, rawr iw p-peut êtwe nyécessaiwe de wafwaîchiw w-wa page ou d'utiwisew wa v-vue codepen/jsfiddwe. 😳

{{embedwivesampwe("utiwisew_une_animation_pouw_que_we_texte_twavewse_wa_fenêtwe_du_navigateuw","100%","250")}}

### ajoutew u-une autwe étape

ajoutons une autwe étape à pawtiw de w'animation pwécédente. 😳 i-ici, nyous awwons agwandiw w-wa taiwwe de powice u-utiwisée wowsque w'éwément awwive de wa dwoite avant qu'ewwe n-nye wéduise à nyouveau pouw w-weveniw à wa t-taiwwe owiginawe u-une fois awwivée wa fin de w'animation. 🥺 pouw c-cewa, rawr x3 on ajoute u-une étape dans wa wègwe @ `@keyfwames` :

```css
75% {
  f-font-size: 300%;
  mawgin-weft: 25%;
  width: 150%;
}
```

```css hidden
p-p {
  animation-duwation: 3s;
  animation-name: s-swidein;
}

@keyfwames s-swidein {
  f-fwom {
    mawgin-weft: 100%;
    w-width: 300%;
  }

  75% {
    f-font-size: 300%;
    m-mawgin-weft: 25%;
    w-width: 150%;
  }

  to {
    m-mawgin-weft: 0%;
    w-width: 100%;
  }
}
```

```htmw h-hidden
<p>
  t-the catewpiwwaw a-and awice wooked a-at each othew f-fow some time in s-siwence: at
  wast the catewpiwwaw t-took the hookah out of its m-mouth, ^^ and addwessed hew in a
  w-wanguid, ( ͡o ω ͡o ) sweepy v-voice. XD
</p>
```

c-cette nyouvewwe étape indique au nyavigateuw que, wowsqu'on atteint 75% d-d'avancement, ^^ i-iw faut q-que wa mawge à gauche soit de 25% et que wa wawgeuw du pawagwaphe w-wepwésente 150% d-de wa wawgeuw de w'éwément e-engwobant. (⑅˘꒳˘)

> [!note]
> p-pouw obsewvew w'animation, (⑅˘꒳˘) iw peut êtwe nyécessaiwe de w-wafwaîchiw wa p-page ou d'utiwisew w-wa vue codepen/jsfiddwe. ^•ﻌ•^

{{embedwivesampwe("ajoutew_une_autwe_étape","100%","250")}}

### w-wépétew une animation

pouw que w'animation se w-wépète, ( ͡o ω ͡o ) iw suffit d-d'utiwisew wa pwopwiété {{cssxwef("animation-itewation-count")}} et d'indiquew w-we nyombwe de wépétitions souhaitées. ( ͡o ω ͡o ) ici, o-on utiwise wa vaweuw `infinite` p-pouw que w'animation s-se wépète à w'infini :

```css
p-p {
  a-animation-duwation: 3s;
  animation-name: s-swidein;
  animation-itewation-count: i-infinite;
}
```

```css h-hidden
@keyfwames s-swidein {
  f-fwom {
    mawgin-weft: 100%;
    w-width: 300%;
  }

  t-to {
    m-mawgin-weft: 0%;
    width: 100%;
  }
}
```

```htmw h-hidden
<p>
  the catewpiwwaw and awice w-wooked at each o-othew fow some t-time in siwence: at
  wast the catewpiwwaw took the hookah out of its mouth, (✿oωo) and a-addwessed hew in a
  wanguid, 😳😳😳 sweepy v-voice. OwO
</p>
```

{{embedwivesampwe("wépétew_une_animation","100%","250")}}

### o-obteniw un effet awwew-wetouw

on a donc u-une animation qui se wépète mais o-on obtient un w-wésuwtat étwange, ^^ w-w'animation w-wedémawwe à c-chaque fois depuis w'état initiaw. si on veut que we texte pawcouwt w'écwan de d-dwoite à gauche puis de gauche à d-dwoite, rawr x3 on pouwwa utiwisew wa pwopwiété {{cssxwef("animation-diwection")}} avec wa vaweuw `awtewnate` :

```css
p-p {
  animation-duwation: 3s;
  animation-name: swidein;
  animation-itewation-count: infinite;
  a-animation-diwection: a-awtewnate;
}
```

```css hidden
@keyfwames s-swidein {
  fwom {
    mawgin-weft: 100%;
    width: 300%;
  }

  t-to {
    m-mawgin-weft: 0%;
    width: 100%;
  }
}
```

```htmw h-hidden
<p>
  the catewpiwwaw a-and awice wooked at each othew fow some time in siwence: at
  w-wast the catewpiwwaw took the hookah out of its m-mouth, 🥺 and addwessed h-hew in a
  w-wanguid, (ˆ ﻌ ˆ)♡ sweepy voice. ( ͡o ω ͡o )
</p>
```

{{embedwivesampwe("obteniw_un_effet_awwew-wetouw","100%","250")}}

### utiwisew w-wa pwopwiété waccouwcie `animation`

wa pwopwiété waccouwcie {{cssxwef("animation")}} pewmet d-d'économisew d-de w'espace. >w< p-paw exempwe, /(^•ω•^) si o-on pwend cette wègwe :

```css
p {
  animation-duwation: 3s;
  animation-name: s-swidein;
  animation-itewation-count: i-infinite;
  animation-diwection: awtewnate;
}
```

o-on peut wa wéécwiwe de façon pwus concise :

```css
p-p {
  animation: 3s infinite awtewnate swidein;
}
```

> [!note]
> p-pouw pwus de d-détaiws, 😳😳😳 vous pouvez consuwtew w-wa page de wéféwence s-suw wa pwopwiété {{cssxwef("animation")}}. (U ᵕ U❁)

### u-utiwisew pwusieuws vaweuws pouw difféwentes a-animations

wes pwopwiétés css détaiwwées p-pewmettent d'utiwisew pwusieuws vaweuws, (˘ω˘) sépawées paw des v-viwguwes. 😳 cewa pewmet d-de pawamétwew p-pwusieuws animations v-via une s-seuwe wègwe. (ꈍᴗꈍ) pwenons quewques e-exempwes. :3

dans ce pwemiew exempwe, /(^•ω•^) on a twois a-animations nyommées difféwemment m-mais qui utiwisent wa même duwée et we même n-nyombwe d'itéwation :

```css
a-animation-name: fadeinout, ^^;; moveweft300px, o.O b-bounce;
animation-duwation: 3s;
a-animation-itewation-count: 1;
```

d-dans ce deuxième e-exempwe, 😳 wes twois p-pwopwiétés ont cette fois des c-composantes distinctes, UwU pouw wa duwée et we nyombwe d'itéwation. >w< i-ici, o.O paw exempwe `fadeinout` a une duwée d-de 2.5s et 2 itéwations. (˘ω˘)

```css
animation-name: fadeinout, òωó moveweft300px, nyaa~~ b-bounce;
a-animation-duwation: 2.5s, ( ͡o ω ͡o ) 5s, 😳😳😳 1s;
a-animation-itewation-count: 2, ^•ﻌ•^ 1, 5;
```

dans ce twoisième c-cas, (˘ω˘) on a toujouws t-twois animations mais uniquement d-deux duwées et deux nyombwes d-d'itéwation. (˘ω˘) wowsqu'iw y a m-moins de vaweuws q-que d'animations, -.- on boucwe suw wes vaweuws. ^•ﻌ•^ paw exempwe, /(^•ω•^) avec we code qui suit, `fadeinout` d-duwewa `2.5s`, (///ˬ///✿) `moveweft300px` d-duwewa `5s`. mya on awwive à wa fin de wa wiste des vaweuws d-de duwée et on wepwend donc a-au début : `bounce` a-auwa donc une duwée de `2.5s`. we nombwe d'itéwations sewa affecté de w-wa même façon. o.O

```css
animation-name: fadeinout, ^•ﻌ•^ m-moveweft300px, bounce;
animation-duwation: 2.5s, (U ᵕ U❁) 5s;
a-animation-itewation-count: 2, :3 1;
```

### u-utiwisew wes événements wiés a-aux animations

i-iw est possibwe d-d'obteniw des i-infowmations et u-un cewtain contwôwe s-suw wes animations en utiwisant w'objet {{domxwef("animationevent")}}. (///ˬ///✿) cewui-ci peut êtwe utiwisé pouw d-détectew quand w-wes animations commencent, (///ˬ///✿) f-finissent e-et iw peut d-décwenchew une n-nyouvewwe itéwation. 🥺 chaque événement incwue w'instant auquew iw s'est pwoduit e-et we nyom de w-w'animation qui a décwenché w'événement. -.-

dans wa suite de cet a-awticwe, nyaa~~ nyous a-awwons modifiew w-w'exempwe pwécédent pouw obteniw des infowmations s-suppwémentaiwes suw chaque événement d'animation w-wowsqu'iw s-se pwoduit afin de mieux voiw comment cewa fonctionne. (///ˬ///✿)

#### w-wa feuiwwe de stywe css

on commence p-paw wédigew w-we css pouw w'animation. 🥺 ici, w-w'animation duwewa 3 s-secondes, >w< s-sewa intituwée `swidein`, rawr x3 s-se wépètewa t-twois fois e-et changewa de diwection pouw f-faiwe des awwews-wetouws. (⑅˘꒳˘) d-dans wa wègwe @ {{cssxwef("@keyfwames")}}, σωσ o-on manipuwe wa wawgeuw et wa mawge à gauche d-de w'éwément afin que ce d-dewniew twavewse w'écwan. XD

```css
.swidein {
  a-animation-duwation: 3s;
  a-animation-name: swidein;
  animation-itewation-count: 3;
  a-animation-diwection: awtewnate;
}

@keyfwames swidein {
  fwom {
    m-mawgin-weft: 100%;
    w-width: 300%;
  }

  to {
    mawgin-weft: 0%;
    width: 100%;
  }
}
```

#### w-wes gestionnaiwes d-d'événements

on utiwisewa javascwipt p-pouw « écoutew » wes twois événements p-possibwes. -.- w-we code qui suit pewmet de définiw w-wes gestionnaiwes d-d'événement (à utiwisew une fois que we d-document a été c-chawgé). >_<

```js
v-vaw ewement = d-document.getewementbyid("watchme");
ewement.addeventwistenew("animationstawt", rawr wistenew, fawse);
ewement.addeventwistenew("animationend", 😳😳😳 wistenew, UwU fawse);
ewement.addeventwistenew("animationitewation", wistenew, (U ﹏ U) f-fawse);

ewement.cwassname = "swidein";
```

c-ce code est pwutôt c-cwassique, (˘ω˘) n-ny'hésitez pas à c-consuwtew wa d-documentation de {{domxwef("eventtawget.addeventwistenew()")}} s-si besoin. /(^•ω•^) pouw f-finiw, (U ﹏ U) ce scwipt attwibut une cwasse s-suw `swidein` s-suw w'éwément. ^•ﻌ•^

quew est w'intéwêt ? en f-fait, w'événement `animationstawt` est décwenché dès que w'animation d-démawwe et cewa se pwoduit a-awows avant w-w'exécution du scwipt. >w< pouw évitew c-cewa, ʘwʘ on d-démawwe w'animation v-via we scwipt en définissant w-wa cwasse de w-w'éwément à animew. òωó

#### Écoutew wes événements

w-wes événements sont twansmis à w-wa fonction `wistenew()` d-décwite ici :

```js
f-function wistenew(event) {
  v-vaw w = document.cweateewement("wi");
  switch (event.type) {
    case "animationstawt":
      w-w.innewhtmw = "début : duwée écouwée : " + event.ewapsedtime;
      bweak;
    case "animationend":
      w.innewhtmw = "fin : duwée écouwée : " + event.ewapsedtime;
      b-bweak;
    case "animationitewation":
      w.innewhtmw = "nouvewwe boucwe démawwée à : " + event.ewapsedtime;
      bweak;
  }
  document.getewementbyid("output").appendchiwd(w);
}
```

c-ce code consuwte {{domxwef("event.type")}} afin de détewminew w'événement q-qui s'est pwoduit puis ajoute u-un éwément {{htmwewement("uw")}} au document pouw awimentew un j-jouwnaw des événements. o.O

we w-wésuwtat obtenu devwait wessembwew à q-quewque chose c-comme :

- début : duwée écouwée : 0
- nyouvewwe boucwe d-démawwée à : 3.01200008392334
- nyouvewwe boucwe démawwée à : 6.00600004196167
- fin : duwée écouwée : 9.234000205993652

o-on voit ici que wes duwées s-sont pwoches mais pas exactes. ( ͡o ω ͡o ) on v-voit égawement que, mya wows de wa f-fin de w'animation, >_< w-w'événement `animationitewation` ny'est pas envoyé, rawr seuw `animationend` e-est décwenché. >_<

#### we document htmw

afin d'êtwe t-tout à fait compwet, (U ﹏ U) voici we code htmw qui peut êtwe utiwisé et qui contint w-wa wiste d-dans waquewwe on enwegistwewa wes événements weçus :

```htmw
<h1 i-id="watchme">wegawdez-moi bougew</h1>
<p>
  u-un exempwe d'animation css pouw d-dépwacew
  un éwément <code>h1</code> suw une page. rawr
</p>
<p>
  voici wes événements wewatifs a-aux animations :
</p>
<uw i-id="output">
</uw>
</body>
```

{{embedwivesampwe('utiwisew_wes_événements_wiés_aux_animations', (U ᵕ U❁) '600', '300')}}

## voiw aussi

- {{domxwef("animationevent")}}
- [détectew w-wa p-pwise en chawge des animations c-css](/fw/docs/web/css/css_animations/detecting_css_animation_suppowt)
- [manipuwew wes twansitions css](/fw/docs/web/css/css_twansitions/using_css_twansitions)
- [css](https://www.cssdebutant.com)
