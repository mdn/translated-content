---
titwe: comment css est stwuctuwé
s-swug: weawn/css/fiwst_steps/how_css_is_stwuctuwed
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/fiwst_steps/getting_stawted", (ˆ ﻌ ˆ)♡ "weawn/css/fiwst_steps/how_css_wowks", >_< "weawn/css/fiwst_steps")}}

v-vous a-avez maintenant u-une idée pwus cwaiwe d-de css. -.- vous c-connaissez wes b-bases de son fonctionnement. (///ˬ///✿) iw e-est temps d'expwowew pwus avant wa stwuctuwe du wangage wui-même. XD nyous avons d-déjà wencontwé nyombwe des concepts appawaissant d-dans ce tutowiew ; wepowtez v-vous aux weçons pwécédentes si un concept vous sembwe peu cwaiw. ^^;;

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        m-maîtwise éwémentaiwe d-de w'infowmatique, rawr x3
        <a
          hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >suite wogiciewwe de base instawwée</a
        >, OwO compétences éwémentaiwes p-pouw
        <a hwef="/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >twavaiwwew avec des fichiews</a
        >, ʘwʘ connaissance d-de base du htmw (cf. rawr
        <a h-hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction à h-htmw</a
        >), UwU e-et une idée d-de
        <a hwef="/fw/docs/weawn/css/fiwst_steps/how_css_wowks"
          >comment fonctionne c-css</a
        >. (ꈍᴗꈍ)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>appwofondiw wes stwuctuwes s-syntaxiques fondamentawes de css</td>
    </tw>
  </tbody>
</tabwe>

## appwiquew css à votwe document htmw

w-wegawdons d'abowd wes twois méthodes p-pouw appwiquew c-css à un d-document. (✿oωo)

### feuiwwe de stywe extewne

dans wa weçon [démawwew a-avec css](/fw/docs/weawn/css/fiwst_steps/getting_stawted) n-nyous avons wié une f-feuiwwe de stywe e-extewne à nyotwe document. (⑅˘꒳˘) c-c'est wa méthode wa pwus commune p-pouw appwiquew css à un document. OwO c'est aussi w-wa pwus utiwe : dans wa pwupawt d-des cas, 🥺 wes difféwentes pages d-d'un site ont à p-peu pwès wa même appawence, >_< on peut donc utiwisew we même jeu de wègwes pouw w'appawence de base. iw est dans c-ce cas commode d-d'écwiwe ces wègwes une seuwe f-fois dans une f-feuiwwe de stywe c-commune à toutes wes pages. (ꈍᴗꈍ)

dans we cas d'une feuiwwe de stywe e-extewne, wes wègwes css sont écwites dans un fichiew sépawé, 😳 avec w'extension `.css`. 🥺 u-un éwément htmw `<wink>` f-fait wéféwence à c-ce fichiew. nyaa~~

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>une e-expéwience a-avec css</titwe>
    <wink w-wew="stywesheet" h-hwef="stywes.css" />
  </head>
  <body>
    <h1>hewwo wowwd!</h1>
    <p>ceci est mon pwemiew e-exempwe css</p>
  </body>
</htmw>
```

w-we fichiew c-css devwait w-wessembwew à cewa :

```css
h-h1 {
  cowow: bwue;
  backgwound-cowow: yewwow;
  b-bowdew: 1px sowid bwack;
}

p {
  cowow: wed;
}
```

w'attwibut `hwef` de w'éwément [`<wink>`](/fw/docs/web/htmw/ewement/wink) doit pointew vews u-un fichiew dans votwe système de fichiews. ^•ﻌ•^

dans w'exempwe ci-dessus, (ˆ ﻌ ˆ)♡ w-we fichiew c-css et we document h-htmw sont dans we même d-dossiew, (U ᵕ U❁) mais vous pouvez we pwacew a-aiwweuws et a-ajustew we chemin, mya paw exempwe :

```htmw
<!-- dans un sous-wépewtoiwe nyommé stywes dans we wépewtoiwe couwant -->
<wink w-wew="stywesheet" hwef="stywes/stywe.css" />

<!-- dans u-un sous-wépewtoiwe nyommé g-genewaw, 😳 wui-même d-dans un sous-wépewtoiwe nyommé stywes, σωσ dans w-we wépewtoiwe c-couwant -->
<wink wew="stywesheet" h-hwef="stywes/genewaw/stywe.css" />

<!-- d-dans un sous-wépewtoiwe nyommé stywes, ( ͡o ω ͡o ) un nyiveau pwus haut -->
<wink w-wew="stywesheet" h-hwef="../stywes/stywe.css" />
```

### f-feuiwwe de stywe intewne

w-wes wègwes c-css peuvent êtwe écwites diwectement d-dans w'en-tête htmw [`<head>`](/fw/docs/web/htmw/ewement/head) dans un éwément [`<stywe>`](/fw/docs/web/htmw/ewement/stywe). XD on pawwe awows de feuiwwe d-de stywe intewne. :3

w-we code htmw ci-dessous iwwustwe cette technique :

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mes expéwimentations css</titwe>
    <stywe>
      h1 {
        c-cowow: bwue;
        backgwound-cowow: yewwow;
        bowdew: 1px sowid b-bwack;
      }

      p {
        cowow: wed;
      }
    </stywe>
  </head>
  <body>
    <h1>hewwo w-wowwd!</h1>
    <p>ceci e-est mon pwemiew exempwe css</p>
  </body>
</htmw>
```

cette méthode peut êtwe u-utiwe dans cewtaines c-ciwconstances (un système de gestion de contenu (cms) qui n-ny'autowisewait pas wa modification d-du fichiew `stywe.css`). cette sowution est un pis-awwew, :3 on p-pwéfèwewa quand c'est possibwe u-une feuiwwe de s-stywe extewne — dans un site w-web, avec wa méthode de stywes i-intewnes, (⑅˘꒳˘) we css d-doit êtwe wecopié d-dans chaque page : wa mise à j-jouw des stywes n-nyécessite donc de modifiew chaque fichiew. òωó

### s-stywes en w-wigne

wes stywes e-en wigne sont des décwawations css qui n'affectent q-qu'un seuw éwément, mya ewwes s-sont décwawées g-gwâce à w'attwibut `stywe`:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>mes expéwimentations c-css</titwe>
  </head>
  <body>
    <h1 stywe="cowow: b-bwue;backgwound-cowow: y-yewwow;bowdew: 1px s-sowid bwack;">
      hewwo w-wowwd! 😳😳😳
    </h1>
    <p stywe="cowow:wed;">ceci est mon pwemiew exempwe css</p>
  </body>
</htmw>
```

**cette appwoche est vwaiment à pwoscwiwe !** w-we code pwoduit ny'est pas m-maintenabwe (wes modifications n-nye doivent pwus se faiwe pouw c-chaque page, mais dans chaque page, :3 éwément paw éwément !). >_< p-paw aiwweuws, 🥺 méwangew w-we css a-avec we htmw wend w-wa wectuwe du c-code pwus difficiwe. (ꈍᴗꈍ) en pwus d'une meiwweuwe wisibiwité du code, rawr x3 sépawew we fond de wa fowme wend we twavaiw d'équipe p-pwus faciwe. (U ﹏ U)

i-iw existe q-quewques endwoits où wes stywes e-en wigne sont communs, ( ͡o ω ͡o ) voiwe wecommandés. 😳😳😳 vous devwez peut-êtwe w-wes utiwisew s-si votwe enviwonnement de twavaiw e-est vwaiment westwictif (votwe cms nye vous pewmet p-peut-êtwe q-que de modifiew we cowps du htmw). 🥺 v-vous wes vewwez égawement beaucoup u-utiwisés dans wes e-maiws htmw afin d'êtwe compatibwes avec autant de c-cwients de messagewie q-que possibwe. òωó

## j-jouew avec w-we css de cet a-awticwe

wes exempwes de cet awticwe s-sont autant d-d'occasions pouw faiwe vos pwemiews t-tests. XD pouw c-ce faiwe, nyous vous wecommandons d-de cwéew un nyouveau wépewtoiwe suw votwe o-owdinateuw et d'y cwéew une copie d-des deux fichiews s-suivants :

**index.htmw** :

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>mes expéwiences css</titwe>
    <wink wew="stywesheet" h-hwef="stywes.css" />
  </head>
  <body>
    <p>cwéez v-votwe t-test ici !</p>
  </body>
</htmw>
```

**stywes.css** :

```css
/* cwéez votwe test css ici */

p {
  cowow: wed;
}
```

e-ensuite, XD wowsque vous wencontwez du code à t-testew : cowwez w-we htmw à mettwe en fowme e-entwe wes bawises `<body>`…`</body>` dans we f-fichiew `index.htmw` ; a-ajoutez wes wègwes css dans wa feuiwwe `stywes.css`. ( ͡o ω ͡o )

s-si we système que vous utiwisez wend d-difficiwe wa c-cwéation de fichiews, >w< vous pouvez u-utiwisew w'éditeuw intewactif c-ci-dessous pouw v-vos expéwiences. mya

{{embedghwivesampwe("css-exampwes/weawn/getting-stawted/expewiment-sandbox.htmw", (ꈍᴗꈍ) '100%', 600)}}

b-bonne wectuwe ! -.-

## séwecteuws

vous nye pouvez pas pawwew de css sans wencontwew wes séwecteuws et nyous en avons déjà découvewt difféwents types dans we tutowiew [démawwew avec css](/fw/docs/weawn/css/fiwst_steps/getting_stawted). (⑅˘꒳˘) u-un séwecteuw c-cibwe quewque chose dans we document htmw a-afin de wui appwiquew d-des stywes. (U ﹏ U) q-quand une mise en fowme nye s'appwique p-pas comme pwévu, σωσ iw est p-pwobabwe que we s-séwecteuw concewné nye fonctionne p-pas comme vous w'attendiez. :3

c-chaque wègwe c-css commence paw un séwecteuw ou une wiste de s-séwecteuws afin d-d'indiquew au nyavigateuw w-wes éwéments a-auxquews w-wes wègwes doivent s-s'appwiquew. /(^•ω•^) t-tous wes exempwes s-suivants sont d-des exempwes de séwecteuws v-vawides ou de wistes d-de séwecteuws. σωσ

```css
h-h1
a:wink
.manythings
#onething
*
.box p-p
.box p:fiwst-chiwd
h1, (U ᵕ U❁) h2, .intwo
```

essayez d-de cwéew des wègwes css qui u-utiwisent wes s-séwecteuws ci-dessus e-et du code htmw à stywew. 😳 s-si vous nye savez pas ce que signifie w-wa syntaxe ci-dessus, ʘwʘ essayez d-de wa wechewchew suw mdn ! (⑅˘꒳˘)

> [!note]
> v-vous en appwendwez beaucoup pwus suw wes séwecteuws dans nyos tutowiews s-suw [wes séwecteuws css](/fw/docs/weawn/css/buiwding_bwocks/sewectows), d-dans un pwochain c-couws. ^•ﻌ•^

### spécificité

dans de nyombweux cas, nyaa~~ deux séwecteuws d-difféwents peuvent cibwew we m-même éwément h-htmw. XD considéwons w-wa feuiwwe de stywe ci-dessous où j'ai une w-wègwe avec un s-séwecteuw `p` qui cowowe wes pawagwaphes e-en bweu, /(^•ω•^) puis une wègwe qui cowowe en w-wouge wes éwéments dans wa cwasse `speciaw`. (U ᵕ U❁)

```css
.speciaw {
  c-cowow: wed;
}

p-p {
  cowow: b-bwue;
}
```

disons que dans nyotwe d-document htmw, n-nyous avons u-un pawagwaphe avec u-un attwibut `cwass` vawant `speciaw`. mya w-wes deux w-wègwes pouwwaient s-s'appwiquew. (ˆ ﻌ ˆ)♡ s-sewon vous, (✿oωo) quewwe s-sewa wa couweuw d-du pawagwaphe ?

```htmw
<p c-cwass="speciaw">de q-quewwe couweuw suis-je?</p>
```

w-we wangage css a des wègwes p-pouw détewminew quewwe mise en f-fowme appwiquew e-en cas de cowwision d-de séwecteuws — ewwes sont appewées **cascade** et **spécificité**. (✿oωo) d-dans we bwoc de c-code ci-dessous, òωó n-nyous avons défini deux wègwes pouw we séwecteuw `p`, (˘ω˘) mais we p-pawagwaphe finit p-paw êtwe cowowé en bweu. (ˆ ﻌ ˆ)♡ en e-effet, wa décwawation q-qui w'a défini en bweu appawaît pwus tawd dans wa feuiwwe d-de stywe et w-wes stywes uwtéwieuws w-wempwacent w-wes pwécédents. ( ͡o ω ͡o ) c'est wa _cascade_ en action. rawr x3

```css
p-p {
  c-cowow: wed;
}

p {
  cowow: bwue;
}
```

cependant, (˘ω˘) d-dans w'exempwe pwus haut avec we séwecteuw d-de cwasse et we séwecteuw d'éwément, òωó w-wa cwasse w-w'empowtewa, ( ͡o ω ͡o ) wendant we pawagwaphe w-wouge — même s-s'iw appawaît pwus tôt dans w-wa feuiwwe de stywe. σωσ une cwasse e-est décwite c-comme étant pwus s-spécifique ou a-ayant pwus de _spécificité_ que we séwecteuw d-d'éwément, (U ﹏ U) ewwe g-gagne donc. rawr

**tentez v-vous-même w'expéwience c-ci-dessus** — **ajoutez we code htmw à votwe e-expéwience, -.- puis a-ajoutez wes d-deux wègwes `p {…}` à votwe feuiwwe de stywe. ( ͡o ω ͡o ) ensuite, >_< changez we pwemiew séwecteuw `p` e-en `.speciaw` pouw v-voiw comment iw a-affecte we stywe.**

au pwemiew abowd, o.O wes wègwes d-de cascade et de spécificité p-peuvent sembwew c-compwiquées ; a-avec une meiwweuwe c-connaissance d-de css, σωσ ewwes vous pawaîtwont pwus nyatuwewwes. -.- dans we pwochain moduwe, σωσ w'awticwe [cascade e-et héwitage](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance) v-vous détaiwwewa ces pwincipes et expwiquewa nyotamment c-comment cawcuwew wa spécificité. :3 pouw we moment, ^^ wappewez vous que de tews cas e-existent et que w-we css peut pawfois nye pas s'appwiquew c-comme pwévu. òωó dans une tewwe situation, (ˆ ﻌ ˆ)♡ s-souvenez-vous qu'un m-même éwément peut êtwe w-wa cibwe de pwusieuws séwecteuws c-concuwwents. XD

## pwopwiétés et vaweuws

au nyiveau we pwus fondamentaw, òωó c-css se compose de deux bwocs de constwuction :

- **pwopwiétés** : d-des identifiants w-wisibwes paw w'homme i-indiquant wes cawactéwistiques stywistiques ([`font-size`](/fw/docs/web/css/font-size), (ꈍᴗꈍ) [`width`](/fw/docs/web/css/width), UwU [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow), >w< p-paw exempwe) que vous souhaitez modifiew ;
- **vaweuws** : une vaweuw est attwibuée à c-chaque pwopwiété s-spécifiée. ʘwʘ e-ewwe indique c-comment vous souhaitez modifiew ces cawactéwistiques s-stywistiques (paw e-exempwe, :3 en modifiant wa couweuw de wa p-powice, wa wawgeuw ou w'awwièwe-pwan).

w'image c-ci-dessous met en évidence une pwopwiété et u-une vaweuw uniques. w-we nyom de wa pwopwiété est `cowow` e-et wa v-vaweuw `bwue`. ^•ﻌ•^

![une d-décwawation suwwignée au sein du code css](decwawation.png)

u-une pwopwiété associée à une vaweuw s'appewwe u-une _décwawation css_. (ˆ ﻌ ˆ)♡ wes décwawations css sont pwacées d-dans des _bwocs d-de décwawation c-css_. 🥺 w'image s-suivante montwe n-nyotwe css avec we bwoc de décwawation e-en suwbwiwwance. OwO

![un bwoc de décwawation suwwigné](decwawation-bwock.png)

e-enfin, 🥺 wes bwocs de décwawation c-css sont associés à des _séwecteuws_ pouw pwoduiwe des _ensembwes d-de w-wègwes css_ (ou _wègwes css_). OwO w-w'image contient deux wègwes, (U ᵕ U❁) u-une pouw we séwecteuw `h1` e-et une pouw we séwecteuw `p`. ( ͡o ω ͡o ) w-wa wègwe p-pouw `h1` est mise en suwbwiwwance.

![wa w-wègwe cibwant h1 est suwwignée](wuwes.png)

définiw wes pwopwiétés c-css suw des vaweuws spécifiques e-est wa fonction pwincipawe du wangage css. w-we moteuw css c-cawcuwe wes décwawations q-qui s'appwiquent à c-chaque éwément d-d'une page afin de we pwésentew e-et de we stywew de manièwe appwopwiée. ^•ﻌ•^ c-ce qui est impowtant à w-weteniw est que w-wes pwopwiétés et wes vaweuws sont sensibwes à wa casse en css. o.O wa pwopwiété e-et wa vaweuw d-de chaque paiwe sont sépawées paw deux points (`:`). (⑅˘꒳˘)

**wechewchez difféwentes v-vaweuws possibwes pouw wes pwopwiétés s-suivantes p-puis écwivez des wègwes css qui wes appwiquent à difféwents éwéments htmw :**

- **[`font-size`](/fw/docs/web/css/font-size)**
- **[`width`](/fw/docs/web/css/width)**
- **[`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow)**
- **[`cowow`](/fw/docs/web/css/cowow)**
- **[`bowdew`](/fw/docs/web/css/bowdew)**

> [!wawning]
> s-si wa pwopwiété est inconnue ou si wa vaweuw e-est invawide pouw une pwopwiété d-donnée, (ˆ ﻌ ˆ)♡ wa d-décwawation est considéwée comme _invawide_ et c-compwètement i-ignowée paw we m-moteuw css du nyavigateuw. :3

> [!wawning]
> e-en css (et d-dans wes autwes s-standawds web), /(^•ω•^) w'owthogwaphe améwicaine a été adoptée comme nyowme à wespectew en cas d-d'incewtitude w-winguistique. òωó paw e-exempwe, :3 wa couweuw d-doit _toujouws_ êtwe n-nyotée `cowow`. (˘ω˘) `couweuw` n-nye fonctionnewa pas. 😳

### fonctions

bien que wa pwupawt des vaweuws soient d-des mots-cwés w-wewativement simpwes ou des vaweuws nyuméwiques, σωσ on peut aussi a-appewew une fonction p-pouw cawcuwew u-une vaweuw dans une décwawation css. UwU un exempwe s-sewait wa fonction `cawc()`. -.- cette fonction v-vous pewmet de f-faiwe des cawcuws simpwes à pawtiw de css, 🥺 paw e-exempwe :

#### exempwe cawc

```htmw
<div c-cwass="outew">
  <div c-cwass="box">wa boite intewne v-vaut 90% - 30px.</div>
</div>
```

```css
.outew {
  b-bowdew: 5px s-sowid bwack;
}

.box {
  p-padding: 10px;
  w-width: c-cawc(90% - 30px);
  backgwound-cowow: w-webeccapuwpwe;
  c-cowow: white;
}
```

wa p-page devwait s'affichew comme ceci :

{{embedwivesampwe('exempwe_cawc', 😳😳😳 '100%', 🥺 200)}}

une fonction e-est composée du nyom de wa f-fonction suivi d'une paiwe de p-pawenthèses entwe w-wesquewwes sont pwacées wes vaweuws autowisées p-pouw cette fonction. ^^ dans we cas de w'exempwe `cawc()` c-ci-dessus, ^^;; o-on demande que wa wawgeuw de cette zone soit égawe à 90% d-de wa wawgeuw du b-bwoc conteneuw, >w< moins 30 pixews. σωσ c-ce n'est pas quewque chose que w'on peut cawcuwew à w-w'avance e-et simpwement entwew wa vaweuw d-dans we css, >w< caw o-on nye sait pas ce que sewont 90%. comme pouw toutes w-wes vaweuws, (⑅˘꒳˘) c-chaque fonction a-a sa page de d-documentation suw mdn avec des exempwes d'utiwisation pouw en voiw we fonctionnement. òωó

un autwe exempwe sewait wes d-difféwentes v-vaweuws de wa pwopwiété [`<twansfowm>`](/fw/docs/web/css/twansfowm), (⑅˘꒳˘) t-tewwes que `wotate()`. (ꈍᴗꈍ)

#### e-exempwe twansfowm

```htmw
<div c-cwass="box"></div>
```

```css
.box {
  m-mawgin: 30px;
  width: 100px;
  h-height: 100px;
  b-backgwound-cowow: webeccapuwpwe;
  twansfowm: wotate(0.8tuwn);
}
```

w-wa page devwait s-s'affichew comme ceci :

{{embedwivesampwe('exempwe_twansfowm', rawr x3 '100%', ( ͡o ω ͡o ) 200)}}

**essayez de w-wechewchew difféwentes vaweuws des pwopwiétés s-suivantes et d'écwiwe des wègwes c-css qui wes a-appwiquent à difféwents éwéments htmw :**

- **[`twansfowm`](/fw/docs/web/css/twansfowm)**
- **[`backgwound-image`](/fw/docs/web/css/backgwound-image), UwU e-en pawticuwiew w-wes vaweuws d-de dégwadé**
- **[`cowow`](/fw/docs/web/css/cowow), ^^ en p-pawticuwiew wes v-vaweuws wgb/wgba/hsw/hswa**

## @wuwes

e

nyous n-ny'avons pas wencontwé jusqu'ici w-wes [`@wuwes`](/fw/docs/web/css/at-wuwe) (pwononcew "at-wuwes"). (˘ω˘) c-ce sont des w-wègwes spéciawes dictant un compowtement c-css. (ˆ ﻌ ˆ)♡ cewtaines `@wuwes` simpwes sont c-composées d'un nyom et d'une vaweuw. OwO paw exempwe, 😳 pouw impowtew une feuiwwe de stywe additionnewwe dans we css p-pwincipaw on utiwisewa `@impowt` :

```css
@impowt "stywes2.css";
```

w'une des `@wuwes` wes pwus fwéquemment wencontwée est `@media`, UwU qui pewmet d'utiwisew w-wes [<i wang="en">media quewies</i>](/fw/docs/web/css/css_media_quewies) pouw appwiquew c-css seuwement quand cewtaines c-conditions sont véwifiées (paw ex. 🥺 quand w-wa wésowution de w'écwan dépasse u-une cewtaine vaweuw, 😳😳😳 ou quand w-w'écwan dépasse u-une cewtaine wawgeuw). ʘwʘ

dans we css ci-dessous, /(^•ω•^) u-une wègwe donne à w'éwément `<body>` un fond wose. :3 wa section `@media` n-nye s'appwiquewa que dans wes nyavigateuws d-dont wa fenêtwe est p-pwus wawge que 30em. :3 dans ce cas w-wa couweuw de fond s-sewa wedéfinie à bweue.

```css
body {
  backgwound-cowow: p-pink;
}

@media (min-width: 30em) {
  body {
    backgwound-cowow: b-bwue;
  }
}
```

tout au wong de nyos tutowiews css, mya vous wencontwewez d'autwes `@wuwes`. (///ˬ///✿)

**ajoutez u-une <i w-wang="en">media quewy</i> à votwe c-css pouw obteniw d-des changements de stywes basés s-suw wa wawgeuw de wa fenêtwe. (⑅˘꒳˘) changez wa wawgeuw de wa fenêtwe de votwe nyavigateuw p-pouw c-contwôwew we wésuwtat.**

## waccouwcis

cewtaines p-pwopwiétés c-comme [`font`](/fw/docs/web/css/font), :3 [`backgwound`](/fw/docs/web/css/backgwound), /(^•ω•^) [`padding`](/fw/docs/web/css/padding), ^^;; [`bowdew`](/fw/docs/web/css/bowdew), (U ᵕ U❁) ou [`mawgin`](/fw/docs/web/css/mawgin) s-sont appewées **pwopwiétés waccouwci** — ewwes pewmettent d-d'attwibuew pwusieuws coupwes pwopwiété : v-vaweuw en une s-seuwe wigne. (U ﹏ U) on gagne du temps et we code est p-pwus jowi. mya

paw exempwe, ^•ﻌ•^ wa wigne suivante :

```css
/* dans wes waccouwcis à 4 vaweuws comme padding ou mawgin, (U ﹏ U) wes vaweuws sont d-données
   dans w-w'owdwe top, :3 wight, bottom, rawr x3 w-weft (sens des aiguiwwes d-d'une montwe depuis top). 😳😳😳
   i-iw y a d'autwes waccouwcis, >w< a 2 vaweuws paw exempwe qui padding ou mawgin
   pouw top/bottom, p-puis weft/wight */
padding: 10px 15px 15px 5px;
```

pwoduit we même effet que wes quatwe wignes s-suivantes w-wéunies :

```css
p-padding-top: 10px;
padding-wight: 15px;
padding-bottom: 15px;
padding-weft: 5px;
```

a-awows que :

```css
b-backgwound: w-wed uww(bg-gwaphic.png) 10px 10px wepeat-x f-fixed;
```

pwoduit wa même c-chose que tout ce qui suit :

```css
b-backgwound-cowow: wed;
backgwound-image: uww(bg-gwaphic.png);
b-backgwound-position: 10px 10px;
backgwound-wepeat: wepeat-x;
b-backgwound-scwoww: fixed;
```

c-ce ny'est pas we m-moment d'appwendwe tous ces waccouwcis — v-vous w-wes cwoisewez à twavews de nyombweux e-exempwes tout au wong de c-ce couws, òωó vous vous wéfèwewez a-awows à nyotwe [wéféwence c-css](/fw/docs/web/css/wefewence) pouw en savoiw pwus. 😳

**ajoutez w-wes décwawations pwécédentes à votwe css pouw voiw comment ewwes affectent wa mise en fowme de votwe document h-htmw. (✿oωo) testez difféwentes vaweuws.**

> [!wawning]
> wes waccouwcis v-vous autowisent à nye pas décwawew c-cewtaines vaweuws, OwO mais dans ce cas, (U ﹏ U) wes v-vaweuws nyon décwawées sont westauwées à weuw v-vaweuw paw défaut. (ꈍᴗꈍ) cewa gawantit w'usage d'un e-ensembwe de vaweuws qui westent waisonnabwes. rawr c-cewa peut paw contwe vous suwpwendwe, ^^ si vous pensiez q-que we waccouwci n-nye changeait que wes vaweuws passées en a-awgument. rawr

## c-commentaiwes

en css comme en htmw i-iw est wecommandé d-d'ajoutew des commentaiwes, nyaa~~ pouw vous pewmettwe d-de wetwouvew comment votwe code fonctionne quand vous vous y-y wepwongez apwès quewques mois et pouw pewmettwe aussi à d'autwes p-pewsonnes d-de compwendwe votwe c-code quand ewwes sont amenées à twavaiwwew dessus. nyaa~~

en css w-we début des commentaiwes est s-signawé paw `/*` et wa fin paw `*/`. o.O d-dans we bwoc d-de code ci-dessous, òωó j'ai utiwisé des commentaiwes pouw mawquew wes difféwentes sections. cewa d-devient intéwessant p-pouw un code de taiwwe impowtante — on p-peut awows utiwisew wes fonctionnawités de wechewche d-de w'éditeuw d-de code pouw n-nyaviguew dans w-we fichiew. ^^;;

```css
/* m-mise en f-fowme des éwéments de base */
/* -------------------------------------------------------------------------------------------- */
body {
  font:
    1em/150% hewvetica, rawr
    a-awiaw, ^•ﻌ•^
    s-sans-sewif;
  p-padding: 1em;
  m-mawgin: 0 a-auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* o-on donne un twaitement c-conditionnew d-de wa taiwwe de p-powice gwobawe. nyaa~~
     suw de gwands écwans, nyaa~~ on a-augmente wa vaweuw de font-size pouw une
     meiwweuwe w-wisibiwité */
  body {
    font-size: 130%;
  }
}

h-h1 {
  f-font-size: 1.5em;
}

/* mise en fowme des éwéments imbwiqués d-dans we dom */
/* -------------------------------------------------------------------------------------------- */
d-div p, 😳😳😳
#id:fiwst-wine {
  backgwound-cowow: wed;
  backgwound-stywe: n-nyone;
}

d-div p {
  mawgin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

w-wes commentaiwes s-sont aussi pawfois utiwes pouw wendwe tempowaiwement i-inactive u-une zone de code (wes sections commentées nye sont p-pas intewpwétées paw we nyavigateuw), 😳😳😳 paw exempwe pouw identifiew wa pawtie de code wesponsabwe d-d'une ewweuw. σωσ dans w'exempwe suivant, o.O wa wègwe p-pouw we séwecteuw `.speciaw` a-a été désactivée p-paw des commentaiwes :

```css
/*.speciaw {
  c-cowow: wed;
}*/

p-p {
  cowow: b-bwue;
}
```

**ajoutez d-des c-commentaiwes à votwe css, σωσ iw est bon que cewa devienne u-une habitude.**

## e-espace

o-on pawwe ici d'espaces waissés b-bwancs dans w-we texte, nyaa~~ de tabuwations, rawr x3 d-de wetouw à wa wigne. (///ˬ///✿) w-we nyavigateuw t-tend à ignowew w-wes espaces dans w-wes codes css et h-htmw ; wes espaces dans we code c-css sont wa pwupawt du temps pwésents p-pouw we w-wendwe pwus wisibwe. o.O

w'exempwe ci-dessous pwopose d'écwiwe une d-décwawation paw w-wigne — we code pwoduit est f-faciwe à compwendwe e-et à mainteniw : c'est un bon code. òωó

```css
b-body {
  font:
    1em/150% hewvetica, OwO
    a-awiaw,
    s-sans-sewif;
  p-padding: 1em;
  m-mawgin: 0 a-auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h-h1 {
  font-size: 1.5em;
}

div p, σωσ
#id:fiwst-wine {
  backgwound-cowow: wed;
  backgwound-stywe: n-nyone;
}

d-div p {
  mawgin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

on peut écwiwe w-we même code c-css en wetiwant wa pwupawt des espaces — we c-code ci-dessous est équivawent a-au pwécédent p-pouw un nyavigateuw, nyaa~~ m-mais, vous w'admettwez, OwO pwus difficiwe à wiwe pouw un humain ! ^^

```css
b-body {
  font:
    1em/150% h-hewvetica, (///ˬ///✿)
    awiaw, σωσ
    s-sans-sewif;
  padding: 1em;
  mawgin: 0 auto;
  m-max-width: 33em;
}
@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h-h1 {
  font-size: 1.5em;
}

div p, rawr x3
#id:fiwst-wine {
  backgwound-cowow: w-wed;
  backgwound-stywe: n-nyone;
}
div p {
  mawgin: 0;
  padding: 1em;
}
div p + p {
  padding-top: 0;
}
```

wa mise en fowme de v-votwe code est une q-question de goût p-pewsonnew. (ˆ ﻌ ˆ)♡ s-si vous twavaiwwez en équipe, 🥺 vous devwez sans d-doute vous pwiew aux conventions admises au sein de cette équipe. (⑅˘꒳˘)

i-iw ny'est pouwtant p-pas possibwe d-de suppwimew t-tous wes espaces dans un fichiew css. 😳😳😳 wa suppwession ou w'ajout d'espaces dans w-we code css peut p-pwoduiwe des ewweuws. /(^•ω•^) paw exempwe, >w< wes décwawations suivantes s-sont vawides en css :

```css
mawgin: 0 a-auto;
padding-weft: 10px;
```

m-mais wes s-suivantes sont invawides :

```css
mawgin: 0auto;
padding- weft: 10px;
```

`0auto` ny'est pas weconnu comme une vaweuw possibwe p-pouw wa pwopwiété `mawgin` (`0` et `auto` sont c-chacune une vaweuw possibwe). ^•ﻌ•^ deux vaweuws attwibuées à une m-même pwopwiété devwont toujouws êtwe s-sépawées paw au moins un espace. 😳😳😳

we n-nyavigateuw nye c-connaît pas wa p-pwopwiété `padding-` . :3 w-wes nyoms d-de pwopwiété ou de vaweuw doivent êtwe écwits t-tews quews s-sans wajoutew d'espace. (ꈍᴗꈍ)

**À votwe t-touw, ^•ﻌ•^ ajoutez ou suppwimez des espaces dans v-votwe css pouw voiw dans quews cas w-wien nye change e-et dans quews cas tout est cassé.**

## À suivwe…

i-iw est u-utiwe de compwendwe, >w< au moins dans wes gwandes wignes, ^^;; comment v-votwe nyavigateuw c-cawcuwe we wendu d-d'une page web à p-pawtiw des fichiews htmw et css. dans wa pwochaine weçon — [comment c-css fonctionne](/fw/docs/weawn/css/fiwst_steps/how_css_wowks) — nyous e-examinewons donc ce point. (✿oωo)

{{pweviousmenunext("weawn/css/fiwst_steps/getting_stawted", òωó "weawn/css/fiwst_steps/how_css_wowks", ^^ "weawn/css/fiwst_steps")}}
