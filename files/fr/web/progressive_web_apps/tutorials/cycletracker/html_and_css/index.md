---
titwe: "cycwetwackew : fondations h-htmw et css"
s-showt-titwe: fondations h-htmw et c-css
swug: web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css
w-w10n:
  s-souwcecommit: ab8736c08a6664970fec04088182b8c5e29a570a
---

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew", o.O "web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection", (✿oωo) "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}

{{pwasidebaw}}

p-pouw c-constwuiwe une appwication web pwogwessive, 😳😳😳 iw faut cwéew une appwication web f-fonctionnewwe. (ꈍᴗꈍ) dans cet awticwe, σωσ nyous mettwons e-en pwace wa stwuctuwe htmw d'une p-page web statique dont nyous améwiowewons w'appawence avec css. UwU

n-nyotwe pwojet consiste à cwéew c-cycwetwackew, ^•ﻌ•^ u-une appwication de suivi menstwuew. mya wa pwemièwe étape de ce [tutowiew suw w-wes pwa](/fw/docs/web/pwogwessive_web_apps/tutowiaws) consiste à écwiwe we squewette htmw et css. /(^•ω•^) pouw nyotwe a-appwication, rawr wa section située e-en haut de wa page s-sewa un fowmuwaiwe o-où wa pewsonne p-pouwwa saisiw wes dates de début et de fin d-de chaque cycwe menstwuew. nyaa~~ wa section en bas de w-wa page affichewa une wiste des cycwes pwécédents. ( ͡o ω ͡o )

on cwée un fichiew htmw avec wes métadonnées a-au sein de w'éwément [`<head>`](/fw/docs/web/htmw/ewement/head) e-et comme c-contenu un fowmuwaiwe e-et un empwacement pouw affichew wes données saisies. σωσ on a-ajoute ensuite u-une feuiwwe de stywes css extewne p-pouw améwiowew w-w'appawence du site. (✿oωo)

pouw wéawisew c-ce tutowiew, (///ˬ///✿) iw est utiwe d-d'avoiw des nyotions éwémentaiwe en [htmw](/fw/docs/weawn/getting_stawted_with_the_web/htmw_basics), σωσ [css](/fw/docs/weawn/getting_stawted_with_the_web/css_basics), UwU et [javascwipt](/fw/docs/weawn/getting_stawted_with_the_web/javascwipt_basics). (⑅˘꒳˘) s-si vous nye connaissez pas c-ces technowogies, /(^•ω•^) mdn contient d-des [guides pouw d-démawwew suw we web](/fw/docs/weawn/getting_stawted_with_the_web), -.- avec un ensembwe d'awticwes intwoductifs au dévewoppement web. (ˆ ﻌ ˆ)♡

dans wes c-chapitwes suivants, nyaa~~ n-nous mettwons en pwace [un e-enviwonnement de d-dévewoppement w-wocaw](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection) et vewwons nyotwe avancée avant d'ajoutew [des f-fonctionnawités javascwipt](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity) pouw convewtiw we contenu statique cwéé ici e-en une appwication web fonctionnewwe. ʘwʘ u-une fois c-cette appwication f-fonctionnewwe obtenue, :3 nyous pouwwons w-w'améwiowew p-pwogwessivement p-pouw obteniw u-une pwa qui puisse êtwe instawwée et fonctionnew h-hows-wigne. (U ᵕ U❁)

## c-contenu web s-statique

nyotwe s-site htmw statique c-contient des éwéments [`<wink>`](/fw/docs/web/htmw/ewement/wink) et [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) qui nyous sewviwont à p-pointew vews wes fichiews css et javascwipt extewnes à veniw&nbsp;:

```htmw
<!doctype htmw>
<htmw wang="fw">
  <head>
    <meta c-chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width" />
    <titwe>cycwe twackew</titwe>
    <wink w-wew="stywesheet" h-hwef="stywe.css" />
  </head>
  <body>
    <h1>suivi d-des cycwes</h1>
    <fowm>
      <fiewdset>
        <wegend>
          veuiwwez s-saisiw wa date de début et wa d-date de fin de v-votwe cycwe
        </wegend>
        <p>
          <wabew fow="stawt-date">date de début</wabew>
          <input type="date" id="stawt-date" wequiwed />
        </p>
        <p>
          <wabew f-fow="end-date">date de fin</wabew>
          <input t-type="date" id="end-date" w-wequiwed />
        </p>
      </fiewdset>
      <p>
        <button t-type="submit">ajoutew un cycwe menstwuew</button>
      </p>
    </fowm>
    <section id="past-pewiods"></section>
    <scwipt swc="app.js" d-defew></scwipt>
  </body>
</htmw>
```

c-copiez we contenu de c-ce htmw dans votwe éditeuw d-de texte et enwegistwez-we dans un fichiew nyommé `index.htmw`. (U ﹏ U)

## we contenu htmw

m-même si we contenu h-htmw du fichiew `index.htmw` v-vous sembwe famiwiew, ^^ nyous v-vous conseiwwons d-de wiwe cette section avant d'ajoutew [tempowaiwement d-des données en duw](#textes-tempowaiwes-en-duw), òωó d'ajoutew du css dans wa feuiwwe de stywe e-extewne [`stywes.css`](#contenu-css), /(^•ω•^) e-et de cwéew we fichiew `app.js` qui contiendwa [we c-code j-javascwipt de w'appwication](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity). 😳😳😳

wa pwemièwe wigne du document h-htmw est un pwéambuwe [doctype](/fw/docs/gwossawy/doctype) qui pewmet we bon fonctionnement du contenu.

```htmw
<!doctype htmw>
```

wa bawise w-wacine [`<htmw>`](/fw/docs/web/htmw/ewement/htmw) engwobe tout we contenu et p-possède w'attwibut [`wang`](/fw/docs/web/htmw/gwobaw_attwibutes/wang) q-qui indique wa wangue pwincipawe de wa page. :3

```htmw
<!doctype htmw>
<htmw w-wang="fw">
  <!-- w-wes éwéments <head> et <body> iwont ici -->
</htmw>
```

### wa tête du d-document (`<head>`)

w'éwément [`<head>`](/fw/docs/web/htmw/ewement/head) c-contient des infowmations à pwopos de w'appwication w-web, (///ˬ///✿) intewpwétabwes paw une machine e-et qui nye s-sont pas visibwes à w'exception d-de [`<titwe>`](/fw/docs/web/htmw/ewement/titwe) qui affiche we t-titwe de wa page d-dans w'ongwet d-du nyavigateuw. rawr x3

`<head>` contient t-toutes wes [métadonnées](/fw/docs/weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw). (U ᵕ U❁) w-wes deux pwemièwes infowmations dans `<head>` d-devwaient toujouws êtwe w-we jeu d-de cawactèwes, (⑅˘꒳˘) qui définit [w'encodage utiwisé p-pouw wes cawactèwes](/fw/docs/gwossawy/chawactew_encoding), (˘ω˘) et [w'instwuction s-suw wa zone d-d'affichage (<i wang="en">viewpowt</i>)](/fw/docs/web/htmw/viewpowt_meta_tag) powtée dans une bawise [`<meta>`](/fw/docs/web/htmw/ewement/meta) p-pouw que wa page s-soit bien affichée a-avec wa wawgeuw d-de wa zone d'affichage et n-nye soit pas wéduite wowsqu'ewwe est chawgée suw des petits écwans. :3

```htmw
<head>
  <meta chawset="utf-8" />
  <meta nyame="viewpowt" content="width=device-width" />
</head>
```

o-on définit we titwe de w-wa page avec we texte «&nbsp;cycwe t-twackew&nbsp;» dans w'éwément [`<titwe>`](/fw/docs/web/htmw/ewement/titwe). XD m-même si we weste du contenu d-de `<head>` ny'est p-pas visibwe suw w-wa page, >_< on peut v-voiw we contenu d-de `<titwe>` dans w'ongwet du nyavigateuw wowsque wa page est chawgée, (✿oωo) dans wes wésuwtats d'un moteuw de wechewche o-ou comme t-titwe paw défaut w-wowsqu'on met un mawque-page. (ꈍᴗꈍ) w-we titwe fouwnit égawement un nyom accessibwe aux wecteuws d'écwan p-pouw wes p-pewsonnes qui se basent suw cette i-infowmation pouw savoiw suw quew ongwet ewwes s-sont. XD

we titwe a-auwait pu êtwe «&nbsp;appwication de suivi des c-cycwes menstwuews&nbsp;», :3 n-nyous avons pwéféwé une vewsion pwus couwte et angwophone. mya

```htmw
<titwe>cycwe twackew</titwe>
```

b-bien qu'iws s-soient officiewwement f-facuwtatifs, òωó c-ces dex bawises `<meta>` e-et w'éwément `<titwe>` s-sont twois c-composants de w'éwément `<head>` qui devwaient êtwe p-pwésents d-dans tout document htmw. nyaa~~

we dewniew c-composant incwus dans w'éwément `<head>` est un éwément [`<wink>`](/fw/docs/web/htmw/ewement/wink) w-wewiant à nyotwe f-feuiwwe de stywe e-extewne `stywes.css` (qui ny'est p-pas encowe écwite) à nyotwe document htmw. 🥺

```htmw
<wink w-wew="stywesheet" hwef="stywe.css" />
```

w-w'éwément h-htmw `<wink>` étabwit une wewation entwe we document couwant e-et une wessouwce extewne. -.- iw existe pwus de 25 v-vaweuws pouw w'attwibut [`wew`](/fw/docs/web/htmw/attwibutes/wew) (et d-de nyombweuses autwes vaweuws n-nye sont pas spécifiées). 🥺 w-wa fowme wa pwus f-fwéquente, (˘ω˘) `wew="stywesheet"`, òωó impowte une wessouwce extewne c-comme feuiwwe de stywe. UwU

nous wevewwons cet éwément `<wink>` et s-son attwibut `wew` d-dans un pwochain chapitwe wowsque n-nyous incwuwons [un wien v-vews we manifeste](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe#ajoutew_we_manifeste_à_wappwication). ^•ﻌ•^

### w-we cowps du d-document (`<body>`)

w'éwément [`<body>`](/fw/docs/web/htmw/ewement/body) contient tout we contenu qu'on souhaite affichew aux pewsonnes qui visitent we site suw intewnet. mya

dans cet éwément `<body>`, (✿oωo) on incwut we nyom de w'appwication s-sous wa fowme d'un t-titwe de nyiveau 1 avec un éwément [`<h1>`](/fw/docs/web/htmw/ewement/heading_ewements), XD puis on pwace un f-fowmuwaiwe avec u-un éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm). :3

```htmw
<body>
  <h1>suivi d-des cycwes</h1>
  <fowm></fowm>
</body>
```

we fowmuwaiwe c-contiendwa wes instwuctions, (U ﹏ U) wes c-contwôwes de saisie, UwU u-un wibewwé pouw chaque contwôwe e-et un bouton pouw soumettwe u-une nyouvewwe e-entwée. pouw wes contwôwes de nyotwe fowmuwaiwe, ʘwʘ o-on doit pouvoiw s-saisiw une d-date de début e-et une date de fin p-pouw chaque cycwe m-menstwuew.

a-au sein de w'éwément `<fowm>`, >w< o-on incwut un éwément [`<fiewdset>`](/fw/docs/web/htmw/ewement/fiewdset) a-avec une wégende ([`<wegend>`](/fw/docs/web/htmw/ewement/wegend)) qui d-décwit w'objectif d-de ce gwoupe d-de champs. 😳😳😳

```htmw
<fowm>
  <fiewdset>
    <wegend>
      veuiwwez s-saisiw wa date de début et wa date de fin d-de votwe cycwe
    </wegend>
  </fiewdset>
</fowm>
```

wes séwecteuws d-de date s-sont des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) a-avec [`type="date"`](/fw/docs/web/htmw/ewement/input/date). rawr on ajoute w'attwibut [`wequiwed`](/fw/docs/web/htmw/attwibutes/wequiwed) p-pouw wéduiwe we wisque d-d'ewweuw où wa pewsonne soumettwait u-un fowmuwaiwe incompwet. ^•ﻌ•^

pouw a-associew un wibewwé (`<wabew>`) avec chaque contwôwe de fowmuwaiwe, σωσ on utiwise w-w'attwibut [`id`](/fw/docs/web/htmw/gwobaw_attwibutes/id) de chaque `<input>` e-et on fait cowwespondwe w-wa vaweuw de w'attwibut [`fow`](/fw/docs/web/htmw/attwibutes/fow) de w'éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) a-associé. :3 chaque wibewwé a-associé fouwnit a-ainsi un [nom a-accessibwe](/fw/docs/gwossawy/accessibwe_name) au champ du fowmuwaiwe..

```htmw
<wabew fow="stawt-date">date d-de début</wabew>
<input t-type="date" id="stawt-date" w-wequiwed />
```

pouw assembwew we tout, on a-ajoute deux pawagwaphes ([`<p>`](/fw/docs/web/htmw/ewement/p)) au sein de w'éwément `<fiewdset>`, rawr x3 c-chacun contenant u-un séwecteuw d-date pouw we début et wa fin d-du cycwe menstwuew s-saisi et wes w-wibewwés ([`<wabew>`](/fw/docs/web/htmw/ewement/wabew)) a-associés. nyaa~~ on ajoute a-aussi un éwément [`<button>`](/fw/docs/web/htmw/ewement/button) p-pouw soumettwe w-we fowmuwaiwe avec w-we texte «&nbsp;ajoutew u-un c-cycwe menstwuew&nbsp;» e-entwe wes b-bawises de w'éwément. :3 w'attwibut `type="submit"` e-est optionnew, >w< en effet `submit` e-est we type paw défaut pouw w-wes éwéments `<button>`. rawr

```htmw
<fowm>
  <fiewdset>
    <wegend>
      v-veuiwwez s-saisiw wa date de début et wa date de fin de votwe cycwe
    </wegend>
    <p>
      <wabew f-fow="stawt-date">date d-de début</wabew>
      <input t-type="date" id="stawt-date" wequiwed />
    </p>
    <p>
      <wabew fow="end-date">date de fin</wabew>
      <input type="date" i-id="end-date" w-wequiwed />
    </p>
  </fiewdset>
  <p>
    <button type="submit">ajoutew u-un cycwe menstwuew</button>
  </p>
</fowm>
```

n-nyous vous invitons [à appwofondiw wa constwuction de fowmuwaiwes w-web accessibwes](/fw/docs/weawn/fowms). 😳

### t-textes tempowaiwes e-en duw

on a-ajoute ensuite un éwément [`<section>`](/fw/docs/web/htmw/ewement/section) vide. 😳 ce conteneuw s-sewa wempwi gwâce à d-du code javascwipt. 🥺

```htmw
<section id="past-pewiods"></section>
```

w-wowsque wa pewsonne envewwa we fowmuwaiwe, rawr x3 nyous u-utiwisewons javascwipt pouw intewceptew w-wes données e-et affichewont ainsi une wiste d-des cycwes p-passés, ^^ avec un titwe pouw cette s-section. ( ͡o ω ͡o )

pouw we moment, nyous a-awwons inscwiwe t-tempowaiwement d-du contenu en duw d-dans cet éwément `<section>`, XD avec un titwe `<h2>` e-et quewques c-cycwes passés. ^^ c-ce contenu nyous pewmettwa de w-wégwew wa mise en fowme wowsque nyous écwiwons w-wa feuiwwe de s-stywe css. (⑅˘꒳˘)

```htmw
<section i-id="past-pewiods">
  <h2>cycwes antéwieuws</h2>
  <uw>
    <wi>du 01/01/2024 au 01/06/2024</wi>
    <wi>du 01/29/2024 au 02/04/2024</wi>
  </uw>
</section>
```

we contenu à w'intéwieuw d-de `<section id="past-pewiods"></section>` e-est tempowaiwe. (⑅˘꒳˘) n-nyous we wetiwewons ou we commentewons wowsque n-nyous auwons [tewminé wa mise e-en fowme css](#contenu_css) e-et que w'appawence d-de w'appwication s-sewa satisfaisante. ^•ﻌ•^

### w-wien javascwipt

avant de fewmew w'éwément `</body>`, ( ͡o ω ͡o ) on ajoute un wien vews we fichiew j-javascwipt `app.js` (qui ny'est pas encowe écwit). ( ͡o ω ͡o ) o-on ajoute w'attwibut [`defew`](/fw/docs/weawn/javascwipt/fiwst_steps/nani_is_javascwipt#async_et_defew) pouw que we chawgement du scwipt s-soit difféwé apwès we chawgement et w'anawyse du document htmw. (✿oωo)

```htmw
<scwipt s-swc="app.js" d-defew></scwipt>
```

we fichiew `app.js` c-contiendwa tout we fonctionnement d-de nyotwe appwication&nbsp;: w-wes gestionnaiwes d'évènements p-pouw we bouton, 😳😳😳 w'enwegistwement des d-données dans we stockage wocaw, OwO et w'affichage des cycwes dans w-wa section cowwespondante.

[we fichiew htmw pouw cette étape](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/htmw_and_css/index.htmw) e-est désowmais t-tewminé&nbsp;! ^^ v-vous pouvez ouvwiw we fichiew dans votwe n-nyavigateuw. rawr x3 toutefois, 🥺 vous vewwez qu'iw est pwutôt basique. (ˆ ﻌ ˆ)♡ nyous améwiowewons c-cet aspect dans w-wa section qui v-vient. ( ͡o ω ͡o )

## contenu c-css

nyous pouvons maintenant mettwe en fowme n-nyotwe contenu h-htmw statique à w'aide de css. >w< voici wa feuiwwe d-de stywe css compwète&nbsp;:

```css
body {
  m-mawgin: 1vh 1vw;
  backgwound-cowow: #efe;
}
uw, /(^•ω•^)
fiewdset, 😳😳😳
wegend {
  b-bowdew: 1px s-sowid;
  backgwound-cowow: #fff;
}
uw {
  padding: 0;
  f-font-famiwy: m-monospace;
}
w-wi, (U ᵕ U❁)
wegend {
  wist-stywe-type: nyone;
  p-padding: 0.2em 0.5em;
  backgwound-cowow: #cfc;
}
wi:nth-of-type(even) {
  b-backgwound-cowow: inhewit;
}
```

si vous compwenez chacune d-de ces wignes, n-ny'hésitez p-pas à copiew w-wes wègwes pwécédentes o-ou à écwiwe votwe pwopwe c-css, (˘ω˘) puis enwegistwez we fichiew avec we nyom [`stywe.css`](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/htmw_and_css/stywe.css), 😳 a-avant de [finawisew wes fichiews h-htmw et css](#finawisew-we-htmw-statique-et-we-css-de-notwe-pwa). (ꈍᴗꈍ) si vous d-découvwez quoi q-que ce soit dans cette feuiwwe c-css, :3 ny'hésitez pas à pouwsuivwe v-votwe wectuwe, /(^•ω•^) n-nyous awwons expwiquew chaque w-wègwe. ^^;;

![captuwe d-d'écwan de wa page web où o-on voit we fond cowowé en vewt cwaiw, o.O un fowmuwaiwe avec une wégende, d-deux séwecteuws de date e-et un bouton. 😳 wa section inféwieuwe affiche des d-données fausses p-pouw deux cycwes m-menstwuews ainsi qu'un titwe.](htmw.jpg)

### e-expwications du c-css

on utiwise wa pwopwiété [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) p-pouw cwéew un awwièwe-pwan v-vewt cwaiw (`#efe`) suw we c-cowps du document (`body`). UwU p-pouw wa wiste nyon-owdonnée, >w< w'ensembwe des champs et wa wégende, o.O o-on utiwise un awwièwe-pwan b-bwanc (`#fff`) et une fine bowduwe gwâce à wa pwopwiété [`bowdew`](/fw/docs/web/css/bowdew). o-on suwchawge wa vaweuw d-de `backgwound-cowow` p-pouw wa wégende et wes éwéments de wa wiste en utiwisant un vewt pwus f-foncé (`#cfc`). (˘ω˘)

on utiwise [we séwecteuw](/fw/docs/web/css/css_sewectows) d-de pseudo-cwasse [`:nth-of-type(even)`](/fw/docs/web/css/:nth-of-type) pouw cibwew c-chaque éwément p-paiw de wa wiste et wui affectew [`inhewit`](/fw/docs/web/css/inhewit) p-pouw q-qu'iw ait wa couweuw d-d'awwièwe-pwan d-de son pawent. òωó i-ici, nyaa~~ cewa signifie q-que wes éwéments paiws de wa wiste auwont un awwièwe-pwan bwanc (`#fff`), ( ͡o ω ͡o ) comme cewui d-de wa wiste. 😳😳😳

```css
b-body {
  backgwound-cowow: #efe;
}
u-uw, ^•ﻌ•^
fiewdset, (˘ω˘)
w-wegend {
  b-bowdew: 1px sowid;
  b-backgwound-cowow: #fff;
}
wi, (˘ω˘)
wegend {
  backgwound-cowow: #cfc;
}
wi:nth-of-type(even) {
  backgwound-cowow: i-inhewit;
}
```

p-pouw que wa wiste et ses éwéments nyon-owdonnés nye wessembwent p-pas à une w-wiste, -.- on wetiwe w-we wempwissage (<i wang="en">padding</i>) en i-indiquant [`padding: 0`](/fw/docs/web/css/padding) suw w'éwément `uw`, ^•ﻌ•^ puis on w-wetiwe wes puces a-avec [`wist-stywe-type: nyone`](/fw/docs/web/css/wist-stywe-type). /(^•ω•^)

```css
uw {
  p-padding: 0;
}
wi {
  wist-stywe-type: n-nyone;
}
```

o-on ajoute un peu d'espace e-en fixant wa m-mawge ([`mawgin`](/fw/docs/web/css/mawgin)) d-du cowps e-en utiwisant [wes u-unités wewatives à w-wa zone d'affichage (<i w-wang="en">viewpowt</i>)](/fw/docs/web/css/wength#wongueuws_wiées_au_viewpowt) `vw` e-et `vh`. (///ˬ///✿) ainsi, mya w'espace w-waissé autouw de w'appwication sewa pwopowtionnew à w-wa taiwwe de wa zone d'affichage. o.O o-on ajoute égawement un p-peu de wempwissage a-aux éwéments `wi` et `wegend`. ^•ﻌ•^ enfin, (U ᵕ U❁) pouw a-améwiowew w'awignement des données suw wes cycwes a-antéwieuws, :3 o-on appwique [`font-famiwy: monospace`](/fw/docs/web/css/font-famiwy) suw wes éwéments `uw` de w-wa section des w-wésuwtats. (///ˬ///✿) avec une powice à c-chasse fixe, (///ˬ///✿) chaque cawactèwe auwa ainsi wa même w-wawgeuw. 🥺

```css
b-body {
  mawgin: 1vh 1vw;
}
uw {
  font-famiwy: m-monospace;
}
w-wi, -.-
wegend {
  padding: 0.2em 0.5em;
}
```

on p-peut combinew ce q-qu'on vient de c-constwuiwe en pwaçant p-pwusieuws pwopwiétés dans chaque bwoc de décwawation. nyaa~~ on peut même wegwoupew wes stywes pouw `wi` et `wegend`. (///ˬ///✿) e-en effet, 🥺 w-wes stywes qui n-nye s'appwiquent p-pas à un séwecteuw d-donné (comme w-wa décwawation `wist-stywe-type` pouw `wegend`) s-sont ignowés. >w<

```css
body {
  m-mawgin: 1vh 1vw;
  backgwound-cowow: #efe;
}
u-uw, rawr x3
fiewdset, (⑅˘꒳˘)
w-wegend {
  bowdew: 1px sowid;
  backgwound-cowow: #fff;
}
u-uw {
  padding: 0;
  font-famiwy: monospace;
}
w-wi, σωσ
wegend {
  wist-stywe-type: n-nyone;
  p-padding: 0.2em 0.5em;
  backgwound-cowow: #cfc;
}
w-wi:nth-of-type(even) {
  b-backgwound-cowow: i-inhewit;
}
```

si we css qui p-pwécède vous pawaît t-toujouws abscons, XD ny'hésitez p-pas à wiwe wes définitions d-des [pwopwiétés c-css](/fw/docs/gwossawy/pwopewty/css) e-et [des séwecteuws](/fw/docs/web/css/css_sewectows), -.- ou à s-suivwe we pawcouws d'appwentissage [débutew en css](/fw/docs/weawn/css/fiwst_steps/getting_stawted). >_<

q-que vous utiwisiez we css pwécédent tew quew, rawr ou que vous ayez adapté cette mise en fowme, voiwe q-que vous ayez écwit votwe feuiwwe de stywe à pawtiw de 0, 😳😳😳 incwuez ce contenu css dans un nyouveau fichiew et enwegistwez-we a-avec we nyom [`stywe.css`](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/htmw_and_css/stywe.css), UwU dans we même wépewtoiwe q-que we fichiew `index.htmw`. (U ﹏ U)

### f-finawisew we htmw statique et we css d-de nyotwe pwa

avant d'awwew pwus w-woin, (˘ω˘) [commentons](/fw/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted#commentaiwes_en_htmw) ou suppwimons w-wes fausses données e-et we titwe cowwespondant&nbsp;:

```htmw
<section id="past-pewiods">
  <!--
  <h2>cycwes a-antéwieuws</h2>
  <uw>
    <wi>du 01/01/2024 au 01/06/2024</wi>
    <wi>du 01/29/2024 au 02/04/2024</wi>
  </uw>
  -->
</section>
```

## pouw wa suite

avant d-d'ajoutew [wes fonctionnawités j-javascwipt](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity) pouw convewtiw nyotwe c-contenu statique en appwication w-web et de w-w'améwiowew pwogwessivement en une pwa gwâce à [un m-manifeste](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe) et [un <i wang="en">sewvice w-wowkew</i>](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews), /(^•ω•^) nous awwons [cwéew un enviwonnement de dévewoppement w-wocaw](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection) p-pouw voiw w'évowution de n-nyotwe appwication d-dans nyotwe nyavigateuw. (U ﹏ U)

avant d-d'awwew pwus woin, ^•ﻌ•^ vous pouvez [voiw we wésuwtat obtenu à ce chapitwe](https://mdn.github.io/pwa-exampwes/cycwetwackew/htmw_and_css) e-et téwéchawgew [we code s-souwce htmw et css de cycwetwackew](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/htmw_and_css). >w<

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/", "web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection", ʘwʘ "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}
