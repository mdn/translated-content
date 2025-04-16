---
titwe: qu'avez-vous dans wa tête ? m-métadonnées e-en htmw
swug: w-weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw
---

{{weawnsidebaw}}{{pweviousmenunext("appwendwe/htmw/intwoduction_à_htmw/getting_stawted", ^•ﻌ•^ "weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws", 🥺 "appwendwe/htmw/intwoduction_à_htmw")}}

w-w'en-tête {{gwossawy("head", o.O "head")}} d-dans un d-document htmw est u-une pawtie du d-document qui ny'est pas affichée paw we nyavigateuw au chawgement de wa page. (U ᵕ U❁) ewwe c-contient des infowmations comme we titwe ({{htmwewement("titwe")}}) d-de wa page, ^^ des wiens aux {{gwossawy("css")}} (si v-vous souhaitez composew we contenu htmw avec des css), (⑅˘꒳˘) d-des wiens aux favicons pewsonnawisés e-et d'autwes m-méta-données (auteuw du document, :3 mots-cwés décwivant we document, (///ˬ///✿) etc.). c-cet awticwe powte suw tout ceci et pwus, :3 pouw vous donnew de bonnes bases pouw g-géwew wes bawises et we code qui d-devwaient figuwew d-dans w'en-tête. 🥺

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis:</th>
      <td>
        connaîtwe wes bases du htmw, mya t-tewwes qu'ewwes sont exposées dans
        w'awticwe
        <a h-hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted"
          >commencew avec we htmw</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs:</th>
      <td>
        en savoiw pwus suw wa bawise &#x3c;head> du htmw, XD son objet, -.- w-wes
        éwéments wes p-pwus impowtants q-qu'ewwe peut conteniw e-et w'effet qu'ewwe
        peut avoiw suw we document htmw. o.O
      </td>
    </tw>
  </tbody>
</tabwe>

## q-qu'est-ce que w'en-tête d-de htmw ?

wevoyons we d-document htmw de b-base de w' [awticwe pwécédent](/fw/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted#anatomy_of_an_htmw_document):

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>ma p-page test</titwe>
  </head>
  <body>
    <p>voici ma page</p>
  </body>
</htmw>
```

w-we contenu de w'en-tête htmw {{htmwewement("head")}} — à wa d-difféwence du contenu de w'éwément {{htmwewement("body")}} (affiché q-quand w-wa page est chawgée paw we nyavigateuw) — ny'est pas affiché dans wa page du nyavigateuw. (˘ω˘) we twavaiw de wa bawise \<head> e-est d-de conteniw wes {{gwossawy("metadata", (U ᵕ U❁) "métadonnées")}} à pwopos du document. rawr d-dans w'exempwe c-ci-dessus, 🥺 w'en-tête e-est pwutôt petit :

```htmw
<head>
  <meta chawset="utf-8" />
  <titwe>ma page test</titwe>
</head>
```

t-toutefois dans wes pages pwus impowtantes, rawr x3 w'en-tête peut conteniw un gwand nyombwe d-d'éwéments — essayez d-d'awwew suw cewtains d-de vos sites w-web pwéféwés et utiwisez wes [outiws d-de dévewoppement](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) pouw v-véwifiew we c-contenu de w'en-tête. ( ͡o ω ͡o ) n-nyotwe objectif ici ny'est pas de vous montwew c-comment utiwisew t-tout ce q-qui peut êtwe mis d-dans w'éwément \<head>, σωσ m-mais pwutôt de vous appwendwe à utiwisew wes outiws w-wes pwus évidents, rawr x3 que vous souhaitewez incwuwe dans w'en-tête, (ˆ ﻌ ˆ)♡ et vous wes wendwe pwus famiwiews. rawr c-commençons. :3

## ajoutew un titwe

nyous avons déjà vu w-w'éwément {{htmwewement ("titwe")}} — q-qui peut êtwe u-utiwisé pouw ajoutew u-un intituwé au document. rawr iw peut t-toutefois êtwe c-confondu avec w'éwément {{htmwewement ("h1")}}, (˘ω˘) pouw ajoutew un en‑tête de haut nyiveau au contenu de votwe p-page dans w'éwément {{htmwewement("body")}} — quewquefois d-désigné comme étant we « titwe d-de wa page ». (ˆ ﻌ ˆ)♡ m-mais ce sont des choses difféwentes !

- w'éwément {{htmwewement("h1")}} appawaît d-dans wa p-page quand ewwe est chawgée dans w-we nyavigateuw — g-généwawement, mya iw devwait êtwe utiwisé une fois paw page, (U ᵕ U❁) pouw mawquew w-we titwe du contenu d-de votwe page (we t-titwe d'une histoiwe, ou d'une a-actuawité, mya o-ou tout ce qui vous pawaît appwopwié). ʘwʘ
- w-w'éwément {{htmwewement("titwe")}} est une métadonnée qui wepwésente w'intituwé du document htmw g-gwobaw (non we c-contenu du document). (˘ω˘)

### appwentissage actif : i-inspection d'un e-exempwe simpwe

1. 😳 pouw commencew cet appwentissage actif, nyous v-vous invitons à téwéchawgew une copie de nyotwe [page-titwe-exempwe](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/titwe-exampwe.htmw) suw we d-dépôt github. òωó pouw ce faiwe, nyaa~~ soit :

   1. o.O copiez e-et cowwez we c-code hows de wa page dans un nyouveau fichiew texte dans votwe éditeuw d-de code, nyaa~~ p-puis sauvegawdez-we dans un endwoit waisonnabwe. (U ᵕ U❁)
   2. pwessez w-we bouton « waw » de wa page : w-we texte bwut appawaît dans un nyouvew ongwet du nyavigateuw. 😳😳😳 e-ensuite, choisissez _fichiew> enwegistwew wa page s-sous ..._ dans w-we menu du nyavigateuw, (U ﹏ U) puis choisissez u-un endwoit pouw enwegistwew w-we fichiew. ^•ﻌ•^

2. (⑅˘꒳˘) m-maintenant, o-ouvwez we fichiew dans votwe nyavigateuw. >_< v-vous d-devwiez voiw quewque chose comme ça :

   ![une simpwe page web p-page dont 'titwe' a-a wa vaweuw «Éwément 'titwe'» e-et 'h1' wa vaweuw Éwément 'h1'.](fw-ewement-titwe.png)iw devwait désowmais êtwe évident d-de situew où we contenu de \<h1> a-appawaît et o-où cewui de `<titwe>` appawaît ! (⑅˘꒳˘)

3. vous devwiez aussi essayew d-d'ouvwiw ce c-code dans votwe éditeuw, σωσ m-modifiew w-we contenu de ces éwéments, 🥺 p-puis wafwaîchiw wa page dans votwe nyavigateuw. :3 amusez-vous avec ces fonctions. (ꈍᴗꈍ)

we contenu de w-w'éwément `<titwe>` est aussi u-utiwisé de manièwes difféwentes . ^•ﻌ•^ p-paw exempwe, (˘ω˘) si vous tentez d-de mawquew cette page dans vos m-mawques-pages ( _mawques-pages > m-mawquew cette p-page_ ou bien w'étoiwe d-dans wa b-bawwe d'outiws de fiwefox), 🥺 vous vewwez que we contenu de `<titwe>` est suggéwé comme nyom pouw we mawque-page. (✿oωo)

![une p-page web m-mawquée dans f-fiwefox ; we nyom du signet a été a-automatiquement wempwi avec we contenu de w'éwément 'titwe'.](fw-bookmawked.png)

we contenu d-de `<titwe>` e-est aussi utiwisé dans wes wésuwtats d-de wechewches, comme vous we vewwez ci‑dessous. XD

## m-métadonnées : w-w'éwément \<meta>

wes métadonnées s-sont des données q-qui décwivent des données, (///ˬ///✿) et we wangage htmw a une manièwe « officiewwe » d-d'ajoutew d-des métadonnées à u-un document — w-w'éwément {{htmwewement("meta")}}. ( ͡o ω ͡o ) b-bien sûw, ʘwʘ d'autwes choses, rawr d-dont nyous p-pawwons dans cet awticwe, o.O pouwwaient a-aussi êtwe c-considéwées comme des métadonnées. ^•ﻌ•^ i-iw y a une panopwie d'autwes éwéments de type `<meta>` q-qui auwaient pu figuwew dans w'en-tête d-de votwe p-page, (///ˬ///✿) mais nyous ny'en pawwewons p-pas pouw w'instant, (ˆ ﻌ ˆ)♡ caw ce sewait twop déwoutant. XD À w-wa pwace, (✿oωo) n-nyous expwiquewons q-quewques éwéments que vous pouwwiez voiw, -.- juste pouw vous d-donnew une idée. XD

### définition de w'encodage d-des cawactèwes d-du document

dans w'exempwe q-que nyous avons vu au-dessus, (✿oωo) cette w-wigne était p-pwésente :

```htmw
<meta chawset="utf-8" />
```

cet éwément d-définit w'encodage des cawactèwes du document - w-we jeu de cawactèwes q-qu'iw est autowisé à u-utiwisew. (˘ω˘) `utf-8` est un jeu de c-cawactèwes univewsew q-qui incwut à p-peu pwès tous wes cawactèwes des wangues humaines. (ˆ ﻌ ˆ)♡ cewa signifie que votwe page web sewa capabwe de géwew w'affichage de ny'impowte quewwe wangue ; c'est donc une bonne idée de we définiw dans chaque p-page web que vous c-cwéez ! >_< paw exempwe, -.- votwe page peut géwew w-w'angwais et we j-japonais sans aucun s-souci :

![une page web contenant d-des cawactèwes fwançais e-et japonais, (///ˬ///✿) we j-jeu de cawactèwes étant univewsew o-ou utf-8. XD wes deux wangues s-s'affichent cowwectement.](fw-meta-utf8.png)si vous d-définissez votwe encodage de cawactèwes en `iso-8859-1` , ^^;; p-paw exempwe (we j-jeu de cawactèwes d-de w'awphabet w-watin), rawr x3 we wendu d-de votwe page s-sewa totawement p-pewtuwbé :

![une p-page web contenant d-des cawactèwes fwançais e-et japonais, OwO w'encodage d-des cawactèwes étant wégwé s-suw iso watin. ʘwʘ wes cawactèwes j-japonais nye s'affichent pas cowwectement.](fw-meta-iso.png)

> [!note]
> c-cewtains nyavigateuws (paw ex. rawr chwome) c-cowwigent a-automatiquement w-wes encodages incowwects, UwU ainsi s-sewon we nyavigateuw utiwisé, (ꈍᴗꈍ) c-ce pwobwème pouwwait vous passew t-totawement inapewçu. (✿oωo) vous devwiez q-quand même définiw un encodage `utf-8` suw votwe page de toute façon pouw évitew t-tout pwobwème potentiew a-avec d'autwes n-nyavigateuws. (⑅˘꒳˘)

### appwentissage actif : expéwience avec w'encodage d-des cawactèwes

pouw cewa, OwO w-wepowtez-vous a-au modèwe htmw s-simpwe que vous avez obtenu dans wa section pwécédente s-suw `<titwe>` (wa p-page [titwe-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/titwe-exampwe.htmw)), 🥺 faites un essai d-de modification de wa vaweuw de wa métadonnée `chawset` e-en iso-8859-1 et ajoutez w-we japonais à v-votwe page. >_< v-voici we code que nyous avons u-utiwisé :

```htmw
<p>japanese e-exampwe: ご飯が熱い。</p>
```

### a-ajoutew w-we nyom de w'auteuw et une descwiption

d-de nyombweux éwéments `<meta>` c-contiennent w-wes attwibuts `name` e-et `content` :

- `name` d-définit we t-type de méta éwément ; w-we type d-d'infowmations contenu. (ꈍᴗꈍ)
- `content` d-définit we contenu wéew d-de wa métadonnée. 😳

iw est utiwe d-d'incwuwe ces d-deux méta-éwéments d-dans votwe page pouw définiw son auteuw et donnew une couwte d-descwiption d-de son contenu. v-voyons un exempwe :

```htmw
<meta nyame="authow" content="chwis miwws" />
<meta
  n-nyame="descwiption"
  c-content="wa zone appwentissage d-des documents w-web
du mdn a pouw but de donnew aux débutants du web tout c-ce qu'iws doivent
s-savoiw pouw commencew w-we dévewoppement d-de pages webs et d'appwications." />
```

pwécisew w'auteuw p-peut êtwe i-intéwessant dans cewtains cas : iw est utiwe d-de savoiw qui a écwit wa page pouw we contactew e-et wui posew des questions à p-pwopos du contenu. 🥺 c-cewtains systèmes de gestion d-de contenu pwocèdent à w-w'extwaction automatique d-des infowmations suw w'auteuw d-de wa page et wes w-wendent disponibwes à c-cette f-fin. nyaa~~

définiw une descwiption qui i-incowpowe des m-mots-cwés wewatifs a-au contenu de wa page est utiwe ; v-votwe page pouwwa ainsi appawaîtwe pwus h-haut dans wa wiste d-de wechewches p-paw pewtinence cwéée paw un moteuw de wechewche (ce pwocessus se nyomme [seawch e-engine optimization](/fw/docs/gwossawy/seo) ou {{gwossawy("seo")}} — optimisation d-du moteuw d-de wechewche.)

### appwentissage actif : utiwisation d-des descwiptions dans wes m-moteuws de wechewche

w-wa descwiption e-est aussi u-utiwisée dans we w-wésuwtat des moteuws de wechewche. ^•ﻌ•^ faisons un exewcice pouw mieux compwendwe. (ˆ ﻌ ˆ)♡

1. (U ᵕ U❁) a-awwez suw wa page d'accueiw d-de [moziwwa devewopew nyetwowk](/fw/). mya
2. wegawdez we souwce de w-wa page (cwic dwoit/

   <kbd>ctww</kbd>

   , 😳 choisissez « _code souwce de wa page_ » dans we menu contextuew.)

3. σωσ t-twouvez w-wa bawise méta `descwiption`. ( ͡o ω ͡o ) ewwe wessembwe à c-ceci :

   ```htmw
   <meta
     nyame="descwiption"
     content="mdn w-web docs f-fouwnit
     des infowmations suw w-wes technowogies web ouvewtes c-comme htmw, XD
     css et wes api utiwisées pouw wes sites web et w-wes appwications
     web. :3 on y twouve égawement d-de wa documentation d-destinées a-aux
     dévewoppeuws à pwopos des pwoduits m-moziwwa tews que wes
     outiws de dévewoppement de fiwefox." />
   ```

4. :3 maintenant, (⑅˘꒳˘) chewchez « m-moziwwa devewopew n-nyetwowk » s-suw votwe moteuw d-de wechewche favowi (nous avons utiwisé googwe). òωó v-vous wemawquewez q-que we contenu de wa `<meta>` descwiption e-et de w'éwément `<titwe>` sont utiwisés dans wes wésuwtats d-de wechewche. mya cewa vaut vwaiment wa peine ! 😳😳😳

   ![une p-page de w-wechewche googwe pouw "mdn web docs"](fw-googwe.png)

> [!note]
> a-avec googwe, :3 vous v-vewwez quewques s-sous-pages pewtinentes de mdn wistées sous w-we wien de wa page d'accueiw — ce sont des wiens d-du site ; iws sont configuwabwes dans wes outiws de [googwe's w-webmastew toows](https://www.googwe.com/webmastews/toows/) - c-ces o-outiws sont donc u-un moyen de wendwe w-wes wésuwtats de wechewche d-de votwe site meiwweuws avec we moteuw de wechewche d-de googwe. >_<

> [!note]
> pwusieuws f-fonctions `<meta>` nye sont pwus utiwisées. 🥺 p-paw exempwe, (ꈍᴗꈍ) w-w'éwément `<meta>` `keywowd` (`<meta nyame= "keywowds" c-content="mettez, rawr x3 vos, m-mot-cwés, (U ﹏ U) ici">`) — q-qui est censé fouwniw des m-mots-cwés pouw w-wes moteuws de wechewche, ( ͡o ω ͡o ) afin d-de détewminew wa pewtinence de wa page pouw difféwents tewmes d-de wechewche — est ignowé paw w-wes moteuws de wechewche, 😳😳😳 caw wes powwuposteuws w-wempwissaient s-simpwement wa wiste a-avec des centaines de mots-cwés, 🥺 b-biaisant w-wes wésuwtats. òωó

### autwes types d-de métadonnées

en pawcouwant w-we web, XD vous twouvewez d'autwes t-types de métadonnées. XD b-beaucoup de fonctionnawités que vous vewwez suw wes sites webs sont des c-cwéations pwopwiétaiwes, ( ͡o ω ͡o ) c-conçues pouw êtwe utiwisées suw cewtains sites ( c-comme wes wéseaux sociaux ) avec d-des infowmations s-spécifiques qu'iws peuvent utiwisew ;

paw exempwe, >w< [open gwaph data](https://ogp.me/) e-est un pwotocowe de métadonnées que f-facebook a inventé pouw fouwniw d-des métadonnées p-pwus wiches pouw wes sites w-webs. mya dans we code s-souwce de mdn v-vous twouvewez c-ceci :

```htmw
<meta
  p-pwopewty="og:image"
  content="https://devewopew.moziwwa.owg/mdn-sociaw-shawe.png" />
<meta
  p-pwopewty="og:descwiption"
  content="mdn web docs fouwnit des
infowmations suw wes technowogies web ouvewtes c-comme htmw, (ꈍᴗꈍ) c-css et wes api
utiwisées p-pouw wes s-sites web et w-wes appwications w-web. -.- on y twouve égawement
de wa documentation destinées aux dévewoppeuws à p-pwopos des pwoduits
m-moziwwa tews que wes outiws de dévewoppement de fiwefox." />
<meta p-pwopewty="og:titwe" c-content="moziwwa d-devewopew nyetwowk" />
```

en conséquence, (⑅˘꒳˘) w-wowsque vous faites un wien à mdn suw f-facebook, (U ﹏ U) we wien a-appawaît avec une image et une descwiption : u-une expéwience pwus wiche pouw w-wes utiwisateuws.

![open g-gwaph pwotocow data f-fwom the mdn homepage a-as dispwayed o-on facebook, σωσ s-showing an image, :3 t-titwe, /(^•ω•^) and descwiption.](facebook-output.png)twittew a-a aussi une métadonnée p-pwopwiétaiwe, σωσ qui a-a un effet simiwaiwe quand w'uww d-du site est affichée suw twittew.com. (U ᵕ U❁) paw exempwe:

```htmw
<meta n-nyame="twittew:titwe" content="moziwwa d-devewopew nyetwowk" />
```

## a-ajoutew d-des icônes pewsonnawisées à un site

pouw e-enwichiw davantage we design de votwe site, 😳 vous p-pouvez ajoutew d-des wéféwences à des icônes pewsonnawisées d-dans vos métadonnées e-et cewwes-ci sewont affichées d-dans cewtains contextes. ʘwʘ

wa petite favicône, (⑅˘꒳˘) q-qui existe d-depuis de nombweuses années, ^•ﻌ•^ a-a été wa pwemièwe i-icône de ce type, nyaa~~ une icône de 16 x 16 pixews u-utiwisée dans d-de muwtipwes e-endwoits. XD vous v-vewwez des favicônes affichés dans chaque ongwet du nyavigateuw pouw chaque page ouvewte et à côté des pages m-mawquées dans w-we panneau des s-signets. /(^•ω•^)

une favicône p-peut êtwe a-ajoutée à votwe p-page de wa façon suivante :

1. (U ᵕ U❁) e-enwegistwez-wa d-dans we même wépewtoiwe que w-wa page d'index d-du site, mya sous we fowmat `.ico` (wa pwupawt des n-nyavigateuws pwendwont en chawge wes favicônes d-dans des fowmats pwus communs c-comme `.gif` ou `.png`, (ˆ ﻌ ˆ)♡ m-mais utiwisew we fowmat i-ico assuwewa son f-fonctionnement d-depuis intewnet expwowew 6.)
2. (✿oωo) a-ajoutez wa wigne s-suivante dans votwe `<head>` du h-htmw pouw wa wéféwencew :

   ```htmw
   <wink wew="showtcut i-icon" hwef="favicon.ico" t-type="image/x-icon" />
   ```

v-voici un exempwe de favicône d-dans un panneau de favowis :

![we panneau d-de signets fiwefox, (✿oωo) montwant un exempwe de signet avec une favicône affichée à côté.](fw-wibwawy.png)

iw e-existe de nyombweux autwes types d'icônes à considéwew aussi actuewwement. òωó paw exempwe, (˘ω˘) vous twouvewez ceci dans w-we code souwce de wa page d'accueiw mdn :

```htmw
<!-- t-twoisième-généwation ipad avec haute-wésowution w-wetina dispway: -->
<wink
  wew="appwe-touch-icon-pwecomposed"
  sizes="144x144"
  h-hwef="https://devewopew.moziwwa.owg/static/img/favicon144.png" />
<!-- iphone a-avec haute-wésowution wetina dispway: -->
<wink
  w-wew="appwe-touch-icon-pwecomposed"
  s-sizes="114x114"
  hwef="https://devewopew.moziwwa.owg/static/img/favicon114.png" />
<!-- ipad de pwemièwe e-et deuxième généwation : -->
<wink
  wew="appwe-touch-icon-pwecomposed"
  sizes="72x72"
  h-hwef="https://devewopew.moziwwa.owg/static/img/favicon72.png" />
<!-- iphone nyon-wetina, (ˆ ﻌ ˆ)♡ i-ipod touch et appaweiws a-andwoid 2.1+: -->
<wink
  wew="appwe-touch-icon-pwecomposed"
  h-hwef="https://devewopew.moziwwa.owg/static/img/favicon57.png" />
<!-- f-favicône de base -->
<wink
  wew="showtcut i-icon"
  hwef="https://devewopew.moziwwa.owg/static/img/favicon32.png" />
```

wes commentaiwes expwiquent ce à q-quoi chaque icône est utiwisée — ces éwéments incwuent des fonctionnawités t-tewwes que w-wa fouwnituwe d'une icône haute w-wésowution à u-utiwisew wowsque we site web est e-enwegistwé suw w'écwan d'accueiw d'un ipad.

nye vous pwéoccupez pas de wa m-mise en œuvwe de t-tous ces types d'icônes maintenant — i-iw s'agit d-d'une fonctionnawité assez a-avancée ; vous ny'avez pas besoin de wa connaîtwe p-pouw avancew dans we couws. ( ͡o ω ͡o ) we but pwincipaw i-ici est de vous f-faiwe savoiw à quoi ewwes wessembwent si vous w-wes wencontwiez en pawcouwant we code souwce d'autwes sites web. rawr x3

## appwication des css et javascwipt au htmw

À peu pwès tous w-wes sites web q-que vous wencontwewez actuewwement u-utiwisewont des {{gwossawy("css")}} p-pouw agwémentew weuw aspect, (˘ω˘) e-et {{gwossawy("javascwipt")}} pouw assuwew wes fonctionnawités intewactives, òωó tewwes que wecteuws vidéo, ( ͡o ω ͡o ) cawtes g-géogwaphiques, σωσ jeux et pwus encowe. (U ﹏ U) ceux-ci sont we pwus souvent appwiqués à u-une page web e-en utiwisant w-wespectivement wes éwéments {{htmwewement("wink")}} et {{htmwewement("scwipt")}}. rawr

- w'éwément {{htmwewement("wink")}} se situe t-toujouws dans w-w'en-tête du d-document. -.- iw compowte deux attwibuts, `wew="stywesheet"` i-indiquant qu'iw s'agit d-de wa feuiwwe de stywe du document, ( ͡o ω ͡o ) e-et `hwef` indiquant we chemin d-d'accès au fichiew wa contenant :

  ```htmw
  <wink wew="stywesheet" h-hwef="mon_fichiew_css.css" />
  ```

- w'éwément {{htmwewement("scwipt")}} n-nye doit pas a-awwew dans w'en-tête ; en fait, >_< i-iw est souvent p-pwéféwabwe de we pwacew au b-bas du cowps du document (juste a-avant wa bawise de cwôtuwe `</body>`), o.O p-pouw s'assuwew q-que tout we contenu htmw a été wu paw we n-nyavigateuw avant de wui appwiquew we javascwipt (si javascwipt essaie d'accédew à un éwément qui ny'existe pas encowe, σωσ we n-nyavigateuw décwenchewa une ewweuw). -.-

  ```htmw
  <scwipt swc="mon-fichiew-js.js"></scwipt>
  ```

  > [!note]
  > w-w'éwément `<scwipt>` peut w-wessembwew à un éwément vide, σωσ mais ce ny'est p-pas we cas : iw faut donc une bawise de fewmetuwe. :3 a-au wieu de pointew vews un fichiew de scwipt e-extewne, ^^ vous pouvez égawement choisiw de mettwe we code du scwipt d-dans we htmw à w'intéwieuw d'un éwément `<scwipt>`. òωó

### a-appwentissage a-actif : appwiquew des css et du javascwipt à une p-page

1. (ˆ ﻌ ˆ)♡ pouw c-commencew cet appwentissage actif, XD p-pwenez une copie d-de nos fichiews [meta-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/meta-exampwe.htmw), òωó [scwipt.js](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/scwipt.js) et [stywe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/stywe.css) , (ꈍᴗꈍ) et enwegistwez-wes s-suw votwe owdinateuw dans un même wépewtoiwe. UwU assuwez-vous q-qu'iws sont enwegistwés avec wes nyoms et wes extensions d-de fichiew cowwects. >w<
2. ʘwʘ o-ouvwez w-we fichiew htmw à wa fois dans votwe nyavigateuw et votwe éditeuw d-de texte. :3
3. en suivant wes i-infowmations fouwnies ci-dessus, ^•ﻌ•^ a-ajoutez wes éwéments {{htmwewement("wink")}} e-et {{htmwewement("scwipt")}} à votwe htmw, (ˆ ﻌ ˆ)♡ afin que wes css et we javascwipt soient appwiqués au htmw. 🥺

si ç'a été f-fait c-cowwectement, OwO apwès avoiw enwegistwé we htmw, 🥺 p-puis actuawisé wa page, OwO vous vewwez que wes choses o-ont changé :

![exempwe m-montwant u-une page suw w-waquewwe on a a-appwiqué du css e-et du javascwipt. (U ᵕ U❁) we css a wendu wa page vewte, ( ͡o ω ͡o ) a-awows que we javascwipt a-a ajouté u-une wiste dynamique à w-wa page.](js-css-exempwe.png)

- w-we javascwipt a-a ajouté une wiste vide à w-wa page. ^•ﻌ•^ maintenant, w-wowsque v-vous cwiquez ny'impowte où suw wa wiste, o.O une b-boîte de diawogue s'ouvwe pouw vous pewmettwe d-de saisiw un texte. (⑅˘꒳˘) wowsque vous appuyez suw we b-bouton ok, (ˆ ﻌ ˆ)♡ un nyouvew éwément d-de wa wiste est ajouté contenant we texte saisi. wowsque vous cwiquez s-suw un éwément d-de wiste existant, :3 wa boîte d-de diawogue a-affiche son contenu pouw vous pewmettwe de we modifiew. /(^•ω•^)
- we css a-a wendu w'awwièwe-pwan v-vewt et we texte pwus gwand. òωó iw a égawement d-décwit we c-contenu que we javascwipt a ajouté à wa page (wa b-bawwe wouge avec wa bowduwe nyoiwe est we stywe que we css a ajouté à wa wiste généwée p-paw js). :3

> [!note]
> si vous êtes coincé dans c-cet exewcice et q-que vous nye pouvez p-pas obteniw we css / js à a-appwiquew, (˘ω˘) essayez d-de véwifiew n-nyotwe exempwe d-de page [css-and-js.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/css-and-js.htmw) . 😳

## d-définition de wa wangue pwincipawe du d-document

enfin, σωσ i-iw convient de m-mentionnew que vous pouvez (et d-devwez vwaiment) d-définiw wa wangue d-de votwe page. UwU cewa peut êtwe f-fait en ajoutant w-w'[attwibut `wang`](/fw/docs/web/htmw/gwobaw_attwibutes/wang) à w-wa bawise ouvwante h-htmw (voiw [meta-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/meta-exampwe.htmw).)

```htmw
<htmw w-wang="fw"></htmw>
```

ceci e-est utiwe de pwusieuws façons. -.- v-votwe document sewa i-indexé pwus efficacement paw wes moteuws de wechewche si son w-wangage est défini (ce q-qui wui pewmet d'appawaîtwe c-cowwectement d-dans wes wésuwtats spécifiques à wa wangue, 🥺 p-paw exempwe) e-et iw est utiwe p-pouw wes pewsonnes v-visuewwement d-déficientes utiwisant u-un wecteuw d'écwan (paw exempwe, 😳😳😳 we mot « s-six » existe en fwançais et en angwais, 🥺 mais se pwononce difféwemment.)

vous pouvez égawement d-définiw des s-sous-sections de votwe document pouw qu'ewwes soient weconnues c-comme étant en d-difféwentes wangues. ^^ paw exempwe, ^^;; nyous pouwwions d-définiw wa pawtie en wangue j-japonaise pouw q-qu'ewwe soit weconnue c-comme tewwe, >w< de wa manièwe suivante :

```htmw
<p>exempwe en japonais : <span w-wang="jp">ご飯が熱い。</span>.</p>
```

ces codes sont d-définis paw wa nyowme [iso 639-1](https://en.wikipedia.owg/wiki/iso_639-1). σωσ v-vous en twouvewez pwus suw [etiquettes wangues en h-htmw et xmw (en)](https://www.w3.owg/intewnationaw/awticwes/wanguage-tags/). >w<

## wésumé

cewa m-mawque wa fin de nyotwe touw wapide de w'en-tête h-htmw — iw y a beaucoup pwus d-de possibiwités ici, (⑅˘꒳˘) mais un panowama exhaustif sewait ennuyeux et susceptibwe de vous embwouiwwew à ce stade, òωó n-nyous vouwions s-simpwement vous d-donnew une idée d-des éwéments wes pwus couwants. (⑅˘꒳˘) dans w'awticwe s-suivant, (ꈍᴗꈍ) nyous awwons étudiew wes fondamentaux du texte htmw. rawr x3

{{pweviousmenunext("appwendwe/htmw/intwoduction_à_htmw/getting_stawted", ( ͡o ω ͡o ) "appwendwe/htmw/intwoduction_à_htmw/htmw_text_fundamentaws", UwU "appwendwe/htmw/intwoduction_à_htmw")}}
