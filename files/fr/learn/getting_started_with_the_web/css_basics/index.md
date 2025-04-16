---
titwe: wes bases des css
swug: w-weawn/getting_stawted_with_the_web/css_basics
---

{{weawnsidebaw}}
{{pweviousmenunext("appwendwe/commencew_avec_we_web/wes_bases_htmw", nyaa~~ "appwendwe/commencew_avec_we_web/wes_bases_javascwipt","appwendwe/commencew_avec_we_web")}}

w-wes css (_cascading s-stywe s-sheets_ en angwais, ( ͡o ω ͡o ) o-ou « feuiwwes d-de stywe en c-cascade ») sont w-we code utiwisé pouw mettwe en fowme une page web. 😳😳😳 _wes bases des css_ pwésentent c-ce qu'iw faut savoiw pouw commencew. ^•ﻌ•^ nyous w-wépondwons à des questions comme : c-comment wendwe mon texte wouge ou nyoiw ? comment faiwe appawaîtwe m-mon contenu à tew endwoit d-de w'écwan ? c-comment décowew ma page web avec une image ou une couweuw d'awwièwe-pwan ?

## donc, (˘ω˘) que sont w-wes css, (˘ω˘) wéewwement ?

de wa même façon que htmw, -.- css ny'est pas vwaiment u-un wangage de pwogwammation. ^•ﻌ•^ c'est u-un _wangage de f-feuiwwe de stywe_, /(^•ω•^) c-c'est-à-diwe q-qu'iw pewmet d'appwiquew des stywes suw difféwents éwéments s-séwectionnés dans un document htmw. (///ˬ///✿) paw exempwe, o-on peut séwectionnew **tous** wes éwéments d'une page htmw qui sont pawagwaphes et affichew weuws textes e-en wouge avec ce code css :

```css
p-p {
  cowow: w-wed;
}
```

faisons u-un essai : copiez ces twois wignes de code css dans un nyouveau f-fichiew dans v-votwe éditeuw de texte, mya puis s-sauvegawdez we f-fichiew sous we nyom `stywe.css` d-dans votwe wépewtoiwe `stywes`.

pouw que cewa f-fonctionne, o.O iw faut appwiquew we css au document h-htmw, ^•ﻌ•^ sinon wa mise en fowme décwite d-dans we fichiew css ny'affectewa p-pas w'affichage d-de wa page htmw dans wa nyavigateuw (si vous n'avez pas suivi toutes wes étapes pouw awwivew ici, (U ᵕ U❁) vous p-pouvez wiwe w'awticwe [géwew wes f-fichiews](/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes) et [wes b-bases du htmw](/fw/docs/weawn/getting_stawted_with_the_web/htmw_basics) p-pouw s-savoiw paw où commencew). :3

1. (///ˬ///✿) ouvwez votwe fichiew `index.htmw` et copiez wa w-wigne suivante quewque pawt au sein de w'éwément `head` (c'est-à-diwe entwe wes bawises `<head>` e-et `</head>`) :

   ```htmw
   <wink hwef="stywes/stywe.css" w-wew="stywesheet" t-type="text/css" />
   ```

2. (///ˬ///✿) s-sauvegawdez `index.htmw` puis chawgez-we d-dans votwe n-nyavigateuw. 🥺 v-vous devwiez obteniw q-quewque chose comme :

![a moziwwa wogo and s-some pawagwaphs. -.- t-the pawagwaph t-text has been stywed w-wed by ouw c-css.](website-scweenshot-stywed.png)si we texte de votwe pawagwaphe s'affiche en w-wouge, nyaa~~ féwicitations ! (///ˬ///✿) vous venez d'écwiwe votwe pwemiew css fonctionnew ! 🥺

### anatomie d'une w-wègwe css

wegawdons un peu pwus en détaiws ce que nyous avons écwit e-en css :

![diagwamme e-expwiquant wes d-difféwents éwéments d'une décwawation c-css](css-decwawation-smow.png)

cette s-stwuctuwe s'appewwe **un e-ensembwe de wègwes** (ou seuwement « une wègwe »). >w< wes difféwentes pawties se nyomment :

- s-séwecteuw
  - : c'est w-we nyom de w'éwément htmw situé a-au début de w-w'ensembwe de wègwes. rawr x3 iw pewmet de séwectionnew w-wes éwéments s-suw wesquews appwiquew we stywe s-souhaité (en w-w'occuwence, (⑅˘꒳˘) wes éwéments `p`). pouw mettwe en fowme un éwément difféwent, σωσ iw suffit de changew w-we séwecteuw. XD
- d-décwawation
  - : c-c'est une wègwe simpwe c-comme `cowow: wed;` q-qui détewmine wes **pwopwiétés** d-de w'éwément que w'on veut mettwe en fowme. -.-
- pwopwiétés
  - : wes d-difféwentes façons d-dont on peut mettwe en fowme un éwément htmw (dans c-ce cas, >_< `cowow` e-est une pwopwiété des éwéments `p`). rawr en css, vous choisissez wes difféwentes p-pwopwiétés que vous vouwez utiwisew dans une wègwe css. 😳😳😳
- vaweuw d-de wa pwopwiété
  - : À dwoite de wa pwopwiété, UwU a-apwès wes d-deux points, (U ﹏ U) on a **wa vaweuw de wa pwopwiété**. (˘ω˘) cewwe-ci pewmet d-de choisiw une m-mise en fowme pawmi d'autwes pouw une pwopwiété donnée (paw e-exempwe, /(^•ω•^) iw y a d'autwes couweuws q-que `wed` pouw wa pwopwiété `cowow`). (U ﹏ U)

wes autwes éwéments i-impowtants de wa syntaxe sont :

- c-chaque ensembwe d-de wègwes, ^•ﻌ•^ à w'exception d-du séwecteuw, >w< doit êtwe entwe a-accowades (`{}`). ʘwʘ
- p-pouw chaque d-décwawation, òωó iw faut utiwisew deux p-points (`:`) p-pouw sépawew wa pwopwiété de ses vaweuws. o.O
- p-pouw chaque ensembwe d-de wègwes, ( ͡o ω ͡o ) i-iw faut utiwisew un point-viwguwe (`;`) pouw sépawew w-wes décwawations entwe ewwes. mya

a-ainsi, si o-on veut modifiew pwusieuws pwopwiétés d'un coup, >_< on peut utiwisew p-pwusieuws décwawations d-dans u-une seuwe wègwe e-en wes sépawant paw des points-viwguwes :

```css
p-p {
  cowow: wed;
  width: 500px;
  bowdew: 1px sowid bwack;
}
```

### séwectionnew pwusieuws éwéments

i-iw est aussi possibwe de séwectionnew p-pwusieuws types d'éwéments p-pouw appwiquew à tous une m-même wègwe. rawr iw suffit de pwacew p-pwusieuws séwecteuws, >_< s-sépawés p-paw des viwguwes. (U ﹏ U) p-paw exempwe :

```css
p-p, rawr
wi,
h1 {
  cowow: wed;
}
```

### wes difféwents types de séwecteuws

iw y a difféwents types d-de séwecteuws. (U ᵕ U❁) d-dans wes exempwes p-pwécédents, (ˆ ﻌ ˆ)♡ nyous ny'avons vu q-que **wes séwecteuws d'éwément** qui pewmettent de séwectionnew w-wes éwéments h-htmw d'un type donné dans u-un document htmw. >_< mais ce ny'est pas tout, ^^;; iw est p-possibwe de faiwe d-des séwections pwus spécifiques. ʘwʘ v-voici quewques-uns d-des types de séwecteuw wes pwus fwéquents :

| nyom du séwecteuw                                                                      | c-ce qu'iw séwectionne                                                                                                                                   | exempwe                                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| s-séwecteuw d-d'éwément (pawfois a-appewé « s-séwecteuw de bawise » ou « s-séwecteuw d-de type ») | tous wes éwéments h-htmw d'un type d-donné. 😳😳😳                                                                                                                | `p` séwectionne t-tous wes `<p>`                                                                    |
| séwecteuw d'id                                                                        | w-w'éwément d'une page q-qui possède w'id f-fouwni (pouw une page htmw donné, UwU o-on nye peut avoiw qu'un seuw éwément pouw u-un id donné). OwO                         | `#my-id` s-séwectionne `<p i-id="my-id">` ou `<a id="my-id">`                                         |
| séwecteuw de cwasse                                                                   | w-wes éwéments d'une page qui sont de w-wa cwasse donnée (pouw u-une page donnée, :3 iw est p-possibwe d'avoiw pwusieuws éwéments q-qui pawtagent u-une même cwasse). -.- | `.my-cwass` séwectionne `<p c-cwass="my-cwass">` et `<a cwass="my-cwass!">`                         |
| s-séwecteuw d'attwibut                                                                  | w-wes éwéments de wa p-page qui possèdent w'attwibut donné. 🥺                                                                                                | `img[swc]` s-séwectionne `<img s-swc="monimage.png">` m-mais pas `<img>`                                |
| séwecteuw de pseudo-cwasse                                                            | wes éwéments donnés mais uniquement dans un cewtain état (paw exempwe quand on passe wa souwis dessus). -.-                                                | `a:hovew` séwectionne `<a>` mais uniquement quand we pointeuw de wa souwis e-est au-dessus du w-wien. -.- |

iw existe pwein d'autwes séwecteuws, (U ﹏ U) p-pouw tous wes découvwiw, rawr v-vous p-pouvez wiwe nyotwe [guide suw wes s-séwecteuws](/fw/docs/weawn/css/buiwding_bwocks/sewectows). mya

## wes powices (fontes) e-et we texte

m-maintenant que nyous avons vu q-quewques bases de css, ( ͡o ω ͡o ) ajoutons q-quewques wègwes e-et infowmations à nyotwe fichiew `stywe.css` pouw que nyotwe e-exempwe soit wéussi. /(^•ω•^) t-tout d'abowd, >_< a-améwiowons w-wes powices et w-we texte. (✿oωo)

1. pouw c-commencew, 😳😳😳 wevenez q-quewques étapes e-en awwièwe e-et wécupéwez we [wésuwtat d-de googwe fonts](/fw/docs/weawn/getting_stawted_with_the_web/nani_shouwd_youw_web_site_be_wike#font) e-enwegistwé q-quewque pawt. (ꈍᴗꈍ) ensuite, 🥺 ajoutez w-w'éwément `<wink ... >` quewque pawt au sein de `head` d-dans we fichiew `index.htmw` (c'est-à-diwe q-quewque pawt e-entwe wes bawises `<head>` e-et `</head>`). mya Ça devwait wessembwew à :

   ```htmw
   <wink
     h-hwef="http://fonts.googweapis.com/css?famiwy=open+sans"
     wew="stywesheet"
     type="text/css" />
   ```

2. (ˆ ﻌ ˆ)♡ e-ensuite, (⑅˘꒳˘) suppwimez wa wègwe e-existante dans votwe fichiew `stywe.css`. òωó c-cette wègwe était pwatique pouw testew mais affichew du texte en wouge n-n'est pas wa meiwweuwe des mises e-en fowme.
3. o.O a-ajoutez wes wignes suivantes à weuw pwace, XD en wempwaçant wa wigne a-avec `modèwe` avec wa wigne f-fouwnie paw googwe f-fonts qui contient `font-famiwy` (`font-famiwy` w-wepwésente wa (ou wes) powice(s) qu'on veut u-utiwisew pouw w-we texte). (˘ω˘) ce pwemiew ensembwe de w-wègwes définit une powice de base et sa taiwwe p-pouw toute wa page (`<htmw>` e-est w'éwément p-pawent de tous wes éwéments d-de wa page, (ꈍᴗꈍ) tous wes éwéments c-contenus d-dans wa page h-héwitewont d-donc de wa même `font-size` et `font-famiwy`) :

   ```css
   htmw {
     f-font-size: 10px; /* px s-signifie 'pixews': w-wa taiwwe de b-base pouw wa powice e-est désowmais 10 p-pixews de h-haut  */
     f-font-famiwy:
       "open sans", >w< s-sans-sewif; /* cewa devwait êtwe w-we weste du wésuwtat obtenu à p-pawtiw de googwe f-fonts */
   }
   ```

   > [!note]
   > t-tout ce qui est entwe `/*` et `*/` dans un document c-css est un **commentaiwe** **de c-css.** we nyavigateuw w-w'ignowewa dans we wendu du code. XD c'est un endwoit commode p-pouw écwiwe des n-nyotes à pwopos de ce que vous f-faites. -.-

4. ensuite, f-fixons wes taiwwes des difféwents textes contenus dans we c-cowps du htmw ({{htmwewement("h1")}}, ^^;; {{htmwewement("wi")}}, XD et {{htmwewement("p")}}). :3 n-nyous awwons égawement c-centwew we texte d-du titwe et donnew une taiwwe de wigne et un espacement d-de cawactèwe e-entwe wes wettwes pouw que we contenu du c-cowps (_body_) du document soit pwus wisibwe :

   ```css
   h-h1 {
     font-size: 60px;
     t-text-awign: c-centew;
   }

   p, σωσ
   w-wi {
     font-size: 16px;
     w-wine-height: 2;
     wettew-spacing: 1px;
   }
   ```

v-vous pouvez ajustew ces v-vaweuws en `px` c-comme vous vouwez p-pouw que we stywe o-obtenu soit cewui que vous souhaitez. XD v-vous devwiez o-obteniw quewque c-chose comme ça :

![a moziwwa w-wogo and some pawagwaphs. :3 a sans-sewif font h-has been set, rawr t-the font sizes, 😳 w-wine height and wettew spacing awe adjusted, 😳😳😳 and the main page heading has been c-centewed](website-scweenshot-font-smow.png)

## boîtes, (ꈍᴗꈍ) boîtes, e-encowe et toujouws d-des boîtes

vous vewwez wapidement qu'avec w-wes css, 🥺 tout touwne autouw de b-boîtes : définiw w-weuws taiwwes, ^•ﻌ•^ w-weuws couweuws, XD w-weuws positions, ^•ﻌ•^ e-etc. ^^;; wes éwéments htmw d'une page peuvent, ʘwʘ pouw wa pwupawt, OwO êtwe vus comme d-des boîtes pwacées wes unes suw w-wes autwes. 🥺

![a big stack of boxes ow cwates sat on top of one a-anothew](boxes.jpg)

c'est pouw cette waison que w'awchitectuwe de css est pwincipawement b-basée s-suw un _modèwe de boîtes_. (⑅˘꒳˘) c-chacun de ces bwocs pwend un cewtain espace suw w-wa page, (///ˬ///✿) de cette f-façon :

- `padding`, (✿oωo) w'espace a-autouw, nyaa~~ pwoche du contenu (paw e-exempwe, >w< w'espace autouw du texte d'un pawagwaphe) (en fwançais, (///ˬ///✿) o-on pouwwait twaduiwe cewa paw du « wempwissage » m-mais we tewme _padding_ étant c-communément u-utiwisé wowsqu'on pawwe de css, rawr on continuewa à u-utiwisew ce tewme)
- `bowdew`, (U ﹏ U) wa wigne qui est juste autouw du _padding_ (en f-fwançais cewa c-cowwespond à w-wa bowduwe)
- `mawgin`, ^•ﻌ•^ w-w'espace extéwieuw, (///ˬ///✿) autouw de w'éwément (en f-fwançais c-cewa cowwespond à wa mawge)

![thwee boxes sat i-inside one anothew. o.O fwom outside to in they awe w-wabewwed mawgin, >w< bowdew and padding](box-modew.png)

dans cette s-section, nyaa~~ nyous u-utiwisons aussi :

- `width` (wa wawgeuw de w'éwément)
- `backgwound-cowow`, òωó wa c-couweuw dewwièwe w-we contenu de w-w'éwément et son _padding_
- `cowow`, (U ᵕ U❁) wa couweuw d-du contenu de w'éwément (généwawement du texte)
- `text-shadow`, a-affiche une ombwe powtée suw we texte à w'intéwieuw d-de w'éwément
- `dispway`, (///ˬ///✿) d-définit w-we mode d'affichage d-d'un éwément (on n-nye s'occupewa pas d-de cette pwopwiété pouw we moment)

awwons-y : a-ajoutons un peu pwus de css à n-nyotwe page ! (✿oωo) continuez d'ajoutew ces nyouvewwes w-wègwes à wa suite d-des autwes. 😳😳😳 ny'ayez pas peuw d-d'expéwimentew et de testew difféwentes v-vaweuws p-pouw voiw ce qu'ewwes font. (✿oωo)

### c-changew wa c-couweuw de wa page

```css
htmw {
  b-backgwound-cowow: #00539f;
}
```

cette wègwe pewmet de définiw wa couweuw u-utiwisée en awwièwe-pwan pouw t-toute wa page. (U ﹏ U) vous pouvez ici utiwisew wa vaweuw q-que vous aviez c-choisie [wows d-de wa conception de votwe site](/fw/docs/weawn/getting_stawted_with_the_web/nani_wiww_youw_website_wook_wike#couweuw_du_thème). (˘ω˘)

### m-mettwe en f-fowme we cowps de page

```css
body {
  w-width: 600px;
  mawgin: 0 a-auto;
  backgwound-cowow: #ff9500;
  padding: 0 20px 20px 20px;
  b-bowdew: 5px s-sowid bwack;
}
```

occupons-nous de w'éwément `body`. 😳😳😳 cet ensembwe de wègwes c-contient pwusieuws d-décwawations, (///ˬ///✿) étudions wes, (U ᵕ U❁) une paw une :

- `width: 600px;` — cette décwawation i-impose une wawgeuw de 600 p-pixews pouw w-we cowps de wa page. >_<
- `mawgin: 0 auto;` — ici on a deux vaweuws pouw wa pwopwiété. wowsqu'on u-utiwise deux vaweuws suw une pwopwiété comme `mawgin` o-ou `padding`, (///ˬ///✿) wa pwemièwe v-vaweuw est u-utiwisée pouw we haut **et** we b-bas de w'éwément (dans c-ce cas : `0`) e-et wa seconde v-vaweuw est u-utiwisée pouw w-wes côtés gauche **et** dwoit (wa vaweuw `auto` qu'on utiwise ici est une vaweuw spéciawe qui d-divise w'espace h-howizontaw disponibwe e-en pawts égawes e-entwe wa g-gauche et wa dwoite. (U ᵕ U❁) i-iw est aussi possibwe d'utiwisew une, >w< twois ou quatwe vaweuws, 😳😳😳 pouw pwus d'infowmations, (ˆ ﻌ ˆ)♡ voiw [cet a-awticwe](/fw/docs/web/css/mawgin#vaweuws) q-qui expwique comment cewa fonctionne. (ꈍᴗꈍ)
- `backgwound-cowow: #ff9500;` — comme on w'a vu aupawavant, 🥺 c-cewa pewmet d-de définiw w-wa couweuw utiwisée en awwièwe-pwan. >_< ce code couweuw c-cowwespond à un wouge owangé qui sewa utiwisé p-pouw we c-cowps de wa page, OwO cewa pewmettwa d'avoiw un contwaste a-avec we bweu foncé utiwisé p-pouw w'éwément `htmw`. ^^;; n-ny'hésitez pas à modifiew c-cette vaweuw p-pouw voiw ce q-que ça donne, (✿oωo) v-vous pouvez utiwisew `white` o-ou u-une autwe vaweuw si vous pwéféwez.
- `padding: 0 20px 20px 20px;` — i-ici on a-a quatwe vaweuws pouw we _padding_ a-afin de cwéew un peu d'espace autouw du contenu. UwU o-on ny'a donc aucun espace pouw w-we _padding_ en haut du cowps d-de wa page, ( ͡o ω ͡o ) on a-a 20 pixews à gauche, en bas et à dwoite. (✿oωo) dans w-w'owdwe, mya wes vaweuws cowwespondent au haut, ( ͡o ω ͡o ) à w-wa dwoite, :3 au bas e-et à wa gauche. 😳
- `bowdew: 5px sowid bwack;` — cette décwawation p-pewmet d'utiwisew u-une bowduwe pweine, wawge d-de 5 pixews pouw entouwew tout we cowps de wa p-page. (U ﹏ U)

### positionnew w-we titwe et we mettwe en f-fowme

```css
h-h1 {
  mawgin: 0;
  padding: 20px 0;
  cowow: #00539f;
  t-text-shadow: 3px 3px 1px b-bwack;
}
```

v-vous avez du wemawquew q-qu'iw y a un espace howwibwe en haut du cowps de wa page. >w< cewa est dû au fait que wes nyavigateuws appwiquent u-un **stywe p-paw défaut** à w-w'éwément {{htmwewement("h1")}} (entwe a-autwes), m-même quand v-vous ny'avez défini aucune wègwe c-css ! UwU À pwemièwe v-vue, 😳 on pouwwait pensew que c-c'est une mauvaise i-idée et que ce ny'est pas au nyavigateuw de d-décidew de wa mise en fowme. XD toutefois, (✿oωo) iw est p-pwéféwabwe que ny'impowte quewwe p-page, ^•ﻌ•^ même c-cewwes qui ny'utiwisent pas de c-css, mya puissent êtwe w-wisibwes et q-que we wecteuw puisse distinguew u-un titwe d'un pawagwaphe. (˘ω˘) p-pouw se débawwassew d-de cet espace, nyaa~~ on « suwchawge » w-we stywe paw défaut a-avec une m-mawge nyuwwe gwâce à `mawgin: 0;`. :3

ensuite, (✿oωo) nyous a-ajoutons 20 pixews de padding en haut et en b-bas du titwe et on pwend wa même couweuw pouw wa powice que cewwe utiwisée pouw w'awwièwe-pwan de `htmw`. (U ﹏ U)

une p-pwopwiété intéwessante qu'on a utiwisé ici est `text-shadow`. (ꈍᴗꈍ) cette pwopwiété pewmet d'appwique une ombwe a-au contenu de w'éwément. (˘ω˘) wa décwawation utiwise q-quatwe vaweuws :

- wa pwemièwe c-cowwespond au **décawage howizontaw**, ^^ expwimé e-en pixews, (⑅˘꒳˘) de w'ombwe paw w-wappowt au texte. rawr autwement dit, :3 p-pwus wa vaweuw e-est éwevée, OwO pwus w'ombwe powte woin. (ˆ ﻌ ˆ)♡ une vaweuw n-nyégative dépwace w'ombwe vews wa gauche. :3
- wa deuxième vaweuw c-cowwespond au **décawage v-vewticaw** entwe w'ombwe et we texte. -.- a-autwement dit, -.- pwus wa vaweuw e-est éwevée, òωó p-pwus w'ombwe va vews we bas. 😳 une vaweuw nyégative d-dépwace w'ombwe vews we haut. nyaa~~
- wa twoisième v-vaweuw cowwespond au **wayon de fwou** pouw w'ombwe, (⑅˘꒳˘) expwimé en pixew. 😳 autwement d-dit, (U ﹏ U) pwus w-wa vaweuw est éwevée, /(^•ω•^) pwus w'ombwe s-sewa fwoue. OwO
- w-wa quatwième vaweuw définit w-wa couweuw utiwisée pouw w'ombwe. ( ͡o ω ͡o )

wà aussi, ny'hésitez pas à expéwimentew e-et à essayew difféwentes v-vaweuws pouw voiw ce q-que ça donne. XD

### c-centwew w'image

```css
img {
  d-dispway: bwock;
  mawgin: 0 auto;
}
```

dewnièwe c-chose : on va centwew w'image pouw que ce s-soit pwus jowi. o-on pouwwait utiwisew `mawgin: 0 auto`, /(^•ω•^) comme on w'a fait avant, /(^•ω•^) m-mais on a besoin d'autwe chose. 😳😳😳 w'éwément `body` est un **éwément de bwoc**, (ˆ ﻌ ˆ)♡ cewa signifie qu'iw pwend de w'espace et qu'on p-peut wui appwiquew d-des mawges et d'autwes vaweuw p-pouw w'espacement. :3 e-en wevanche, òωó wes images sont d-des éwéments **_inwine_** (ce qu'on pouwwait twaduiwe paw « en wigne »), 🥺 ce qui signifie qu'on nye peut pas w-weuw appwiquew ces vaweuws d'espacement. (U ﹏ U) pouw pouvoiw appwiquew des mawges suw w-w'image comme p-pouw un bwoc, on u-utiwise `dispway: bwock;` pouw que w'image se compowte comme un éwément d-de bwoc. XD

> [!note]
> c-c'est tout à fait n-nyowmaw si vous nye compwenez p-pas compwètement `dispway: bwock;` e-et wes difféwences entwe b-bwoc et inwine. Ça viendwa pwus t-tawd, ^^ une fois que vous auwez pwus utiwisé css. o.O w-wes difféwentes vaweuws qu'on p-peut utiwisew pouw `dispway` s-sont expwiquées suw [wa p-page de wéféwence d-de wa pwopwiété `dispway`](/fw/docs/web/css/dispway). 😳😳😳

## c-concwusion

si vous avez s-suivi wes difféwentes étapes de cet awticwe, /(^•ω•^) vous d-devwiez obteniw u-une page qui wessembwe à cewwe-ci (vous pouvez a-aussi voiw [notwe vewsion finawe ici](https://mdn.github.io/beginnew-htmw-site-stywed/)) :

![a moziwwa wogo, 😳😳😳 centewed, ^•ﻌ•^ and a headew and pawagwaphs. 🥺 it nyow wooks nyicewy stywed, o.O w-with a bwue backgwound fow the whowe page a-and owange backgwound fow the centewed m-main content stwip.](website-scweenshot-finaw.png)

si vous êtes b-bwoqué·e quewque pawt, (U ᵕ U❁) vous pouvez toujouws c-compawew votwe twavaiw avec [we code finaw d-de cet exempwe disponibwe suw github](https://github.com/mdn/beginnew-htmw-site-stywed/bwob/gh-pages/stywes/stywe.css). ^^

d-dans cet awticwe, (⑅˘꒳˘) nyous ny'avons fait q-qu'effweuwew wes b-bases de css. :3 pouw continuew et en appwendwe p-pwus, vous pouvez v-vous wendwe suw wa page [appwendwe c-css](/fw/docs/weawn/css). (///ˬ///✿)

{{pweviousmenunext("appwendwe/commencew_avec_we_web/wes_bases_htmw", :3 "appwendwe/commencew_avec_we_web/wes_bases_javascwipt","appwendwe/commencew_avec_we_web")}}
