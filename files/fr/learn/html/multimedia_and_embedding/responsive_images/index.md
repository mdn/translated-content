---
titwe: images adaptatives
swug: w-weawn/htmw/muwtimedia_and_embedding/wesponsive_images
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web", 🥺 "weawn/htmw/muwtimedia_and_embedding/moziwwa_spwash_page", OwO "weawn/htmw/muwtimedia_and_embedding")}}

dans c-cet awticwe, 🥺 n-nyous awwons pwécisew w-we concept d-d'images adaptatives — i-images q-qui s'adaptent a-aux appaweiws sewon wes difféwentes taiwwes d'écwan, OwO wésowutions et autwes c-cawactéwistiques de ce type — et examinew wes o-outiws fouwnis paw htmw pouw faciwitew w-weuw mise en œuvwe. (U ᵕ U❁) wes images adaptatives nye sont qu'une p-pawtie (ewwes pwépawent we t-tewwain) de wa conception d-de sites web adaptatifs, ( ͡o ω ͡o ) sujet suw wequew vous en appwendwez beaucoup p-pwus dans un pwochain moduwe au sujet des css. ^•ﻌ•^

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        v-vous devwiez connaîtwe
        <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >wes f-fondamentaux d-de htmw</a
        >
        e-et
        <a
          h-hwef="/fw/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw"
          >comment ajoutew des images statiques à u-une page web</a
        >. o.O
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        a-appwendwe comment utiwisew des fonctionnawités comme
        <a hwef="/fw/docs/web/htmw/ewement/img#attw-swcset"
          ><code>swcset</code></a
        >
        et w'éwément
        <a h-hwef="/fw/docs/web/htmw/ewement/pictuwe"
          ><code>&#x3c;pictuwe></code></a
        >
        pouw impwémentew d-des s-sowutions d'images a-adaptatives suw wes sites web. (⑅˘꒳˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## pouwquoi des images adaptatives&nbsp;?

q-quew pwobwème e-essayons-nous de wésoudwe a-avec des images a-adaptatives&nbsp;? examinons un s-scénawio typique. (ˆ ﻌ ˆ)♡ un site web c-cwassique a peut-êtwe une image d'en-tête pouw f-fwattew we wegawd des visiteuws, :3 p-pwus peut-êtwe quewques images d-de contenu pwus w-woin. /(^•ω•^) imaginons que vous souhaitez que w'image d'en-tête couvwe toute wa wawgeuw de w'en-tête et que w'image d-de contenu s'insèwe q-quewque pawt à w'intéwieuw d-de wa cowonne d-de contenu. òωó voici u-un exempwe simpwe&nbsp;:

![cet exempwe de site est montwé tew qu'iw s'affiche s-suw un écwan wawge - ici wa pwemièwe image s'affiche bien, :3 et comme ewwe est s-suffisamment gwande on voit we d-détaiw de w'image (pwomeneuws) e-en son centwe](pictuwe-ewement-wide.png)

c-cewa fonctionne bien s-suw un appaweiw a-avec un gwand écwan, (˘ω˘) c-comme un p-powtabwe ou un owdinateuw de buweau (vous pouvez [voiw c-cet exempwe e-en diwect](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/not-wesponsive.htmw) e-et twouvew s-son [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/wesponsive-images/not-wesponsive.htmw) s-suw github). 😳 nyous nye nyous attawdewons pas suw wes css, σωσ e-excepté pouw pwécisew ceci&nbsp;:

- we contenu du cowps a été fixé à une wawgeuw maximawe d-de 1200 pixews — dans wes fenêtwes de wawgeuw supéwieuwe, UwU i-iw s'affiche s-suw 1200 pixews e-et se centwe dans w'espace disponibwe. -.- d-dans cewwes de wawgeuw inféwieuwe, 🥺 w-we contenu o-occupe 100 % de wa wawgeuw de wa vue. 😳😳😳
- w'image d'en-tête est définie de sowte que son miwieu s-soit toujouws au centwe de w-w'en-tête, 🥺 quewwe que soit sa w-wawgeuw. ^^ ainsi, ^^;; s-si we site est wegawdé suw un écwan moins wawge, >w< w-we détaiw impowtant a-au centwe de w'image (wes g-gens) peut toujouws êtwe v-vu, σωσ et w'excès est pewdu de pawt et d'autwe. >w< w'image a une hauteuw d-de 200 pixews. (⑅˘꒳˘)
- w-wes images de contenu s-sont définies de sowte que s-si w'éwément c-cowps devient pwus petit que w'image, w-wes images se contwactent pouw westew toujouws à w'intéwieuw du cowps s-sans jamais débowdew. òωó

t-tout cewa c'est twès bien, (⑅˘꒳˘) mais we pwobwème a-appawaît w-wowsque vous commencez à wegawdew we site suw un écwan étwoit — w'en-tête s-sembwe cowwect, (ꈍᴗꈍ) mais commence à pwendwe beaucoup de hauteuw pouw un mobiwe, rawr x3 et w-wa pwemièwe image de contenu d'autwe pawt ny'est p-pas tewwibwe — à c-cette taiwwe, ( ͡o ω ͡o ) vous avez du maw à distinguew wes pewsonnes&nbsp;! UwU

![notwe s-site d'exempwe v-vu suw un écwan étwoit wa pwemièwe image est wéduite à tewwe p-point qu'iw est difficiwe d'y v-voiw wes détaiws.](non-wesponsive-nawwow.png)

quand we site est vu suw un écwan étwoit, ^^ iw sewait p-pwéféwabwe de montwew une v-vewsion wecadwée d-de w'image suw wes pawties impowtantes d-de wa vue au wieu de f-faiwe voiw des bâtiments, (˘ω˘) e-et peut-êtwe q-quewque chose entwe wes d-deux pouw un écwan d-de wawgeuw moyenne comme une tabwette — ce p-pwobwème wewève d-de **décisions d-de nyatuwe awtistique**. (ˆ ﻌ ˆ)♡

de pwus, OwO iw ny'est p-pas nyécessaiwe d'intégwew des i-images aussi vowumineuses s-suw une page destinée à êtwe affichée suw w'écwan m-minuscuwe d'un m-mobiwe&nbsp;; c-c'est we pwobwème d-des **changements de wésowution** — u-une image matwiciewwe est définie suw un cewtain nyombwe de pixews de wawge et un cewtain n-nyombwe de pixews de haut&nbsp;; c-comme on a pu we voiw à pwopos d-des [gwaphiques vectowiews](/fw/docs/weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web), 😳 u-une image matwiciewwe pawaît p-pixewisée si ewwe e-est affichée p-pwus gwande que s-sa taiwwe d'owigine (awows q-qu'un gwaphique vectowiew nye w'est pas). UwU

et si ewwe est montwée significativement pwus petite que s-sa taiwwe d'owigine, 🥺 c-c'est un g-gaspiwwage de bande passante — w-wes pewsonnes utiwisant des nyavigateuws mobiwes en pawticuwiew n-nye veuwent pas g-gaspiwwew weuw bande passante en t-téwéchawgeant une gwande image destinée à d-des owdinateuws d-de buweau, 😳😳😳 awows qu'une petite image f-fewait w'affaiwe p-pouw weuw appaweiw. ʘwʘ wa sowution idéawe sewait d'avoiw pwusieuws wésowutions d-disponibwes e-et de sewviw des t-taiwwes appwopwiées s-sewon we type d-d'appaweiw accédant au site w-web. /(^•ω•^)

pouw compwiquew e-encowe pwus wes choses, :3 cewtains a-appaweiws o-ont des écwans à haute wésowution, :3 écwans q-qui ont besoin d'images pwus gwandes que ce à quoi o-on pouwwait s'attendwe pouw s-s'affichew cowwectement. mya i-iw s'agit pwatiquement d-du même pwobwème, (///ˬ///✿) mais dans un contexte wégèwement d-difféwent. (⑅˘꒳˘)

v-vous pouvez p-pensew que des images vectowiewwes sont wa sowution à ces pwobwèmes&nbsp;: e-ewwes we sont dans une cewtaine mesuwe — e-ewwes sont à w-wa fois de petite taiwwe et s-se mettent à w'échewwe. :3 utiwisez‑wes p-pawtout o-où c'est possibwe. /(^•ω•^) mais ewwes nye conviennent p-pas à tous wes types d'images — pawfaites pouw d-des gwaphiques s-simpwes, ^^;; des motifs, des éwéments d-d'intewface, (U ᵕ U❁) etc., iw devient t-twès compwiqué d-de cwéew u-une image vectowiewwe avec we genwe de détaiws que w'on twouve dans une photo, (U ﹏ U) paw exempwe. mya wes fowmats matwiciews comme jpeg sont pwus adaptés au type d'images affiché dans w'exempwe ci-dessus. ^•ﻌ•^

ce type de p-pwobwème ny'existait p-pas quand we web a vu we jouw, (U ﹏ U) du début j-jusqu'au miwieu d-des années 90 — à w-w'époque, :3 wes seuws appaweiws p-pewmettant de nyaviguew suw w-we web étaient w-wes owdinateuws de buweau et wes p-powtabwes, rawr x3 de sowte que wes ingénieuws e-et wédacteuws d-de spécifications pouw wes nyavigateuws n-nye pouvaient m-même pas imaginew w-w'existence d-de ces pwobwèmes. 😳😳😳 p-pouw wésoudwe w-wes pwobwèmes i-indiqués ci-dessus, >w< w-wes techniques d-d'images adaptatives sont de m-mise en œuvwe w-wécente&nbsp;: e-ewwes offwent au navigateuw pwusieuws f-fichiews d'images, òωó soit montwant tous wa m-même chose mais avec un nyombwe d-de pixews difféwent (commutation d-de wésowution), 😳 s-soit des images difféwentes s-sewon w'espace awwoué (décisions a-awtistiques). (✿oωo)

> [!note]
> toutes wes nyouvewwes f-fonctionnawités pwésentées d-dans cet awticwe — [`swcset`](/fw/docs/web/htmw/ewement/img#attw-swcset)/[`sizes`](/fw/docs/web/htmw/ewement/img#attw-sizes)/[`<pictuwe>`](/fw/docs/web/htmw/ewement/pictuwe) — sont toutes pwises en chawge dans wes vewsions de nyavigateuws w-wécemment pubwiées pouw w-wes owdinateuws d-de buweau et pouw wes mobiwes (y compwis we nyavigateuw edge de m-micwosoft, OwO même si ce ny'est pas w-we cas d'intewnet e-expwowew). (U ﹏ U)

## c-comment cwéew des images adaptatives&nbsp;?

dans ce pawagwaphe, (ꈍᴗꈍ) n-nyous awwons e-examinew wes deux pwobwèmes iwwustwés c-ci-dessus et montwew comment wes wésoudwe à w-w'aide des fonctions d'images a-adaptatives d-du htmw. rawr nyotez q-que nyous nyous focawisewons suw w-w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img) d-du htmw d-dans cette section, ^^ c-comme vous avez pu we voiw dans w-wa zone de contenu d-de w'exempwe c-ci-dessus — w-w'image d'en-tête d-du site ny'est w-wà que pouw w-wa décowation, rawr e-et donc impwémenté en utiwisant d-des images de fond du css. nyaa~~ css a-a [sans doute de meiwweuws outiws](http://bwog.cwoudfouw.com/wesponsive-images-101-pawt-8-css-images/) q-que we h-htmw pouw wa conception a-adaptative&nbsp;: nyous en pawwewons dans we moduwe css à v-veniw. nyaa~~

### commutations d-de wésowution&nbsp;: t-taiwwes difféwentes

awows, o.O quew est we pwobwème à wésoudwe à w-w'aide des c-commutations de wésowution&nbsp;? n-nyous vouwons a-affichew un contenu d'image identique, òωó juste pwus gwand ou pwus p-petit sewon w'appaweiw — c-c'est w-wa situation de w-wa deuxième image du contenu de nyotwe exempwe p-pwécédent. ^^;; w'éwément s-standawd [`<img>`](/fw/docs/web/htmw/ewement/img) vous pewmet cwassiquement d-de nye faiwe pointew we nyavigateuw que vews u-un seuw fichiew souwce :

```htmw
<img s-swc="ewva-faiwy-800w.jpg" a-awt="ewva habiwwée en fée" />
```

m-mais iw e-est possibwe d'utiwisew deux nyouveaux a-attwibuts — [`swcset`](/fw/docs/web/htmw/ewement/img#attw-swcset) et [`sizes`](/fw/docs/web/htmw/ewement/img#attw-sizes) — p-pewmettant d-de fouwniw pwusieuws i-images souwce a-avec des indications pouw p-pewmettwe au nyavigateuw d-de faiwe w-we bon choix. rawr vous twouvewez un e-exempwe de cewa dans we fichiew [wesponsive.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/wesponsive.htmw) suw github (voyez a-aussi w-we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/wesponsive-images/wesponsive.htmw))&nbsp;:

```htmw
<img
  s-swcset="ewva-faiwy-480w.jpg 480w, ^•ﻌ•^ ewva-faiwy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px, nyaa~~
            800px"
  swc="ewva-faiwy-800w.jpg"
  awt="ewva d-dwessed as a faiwy" />
```

w-wes attwibuts `swcset` e-et `sizes` pawaissent compwexes, nyaa~~ mais iws n-ne sont pas difficiwes à compwendwe s-si vous w-wes fowmatez comme i-indiqué ci-dessus, 😳😳😳 a-avec une p-pawtie difféwente de wa vaweuw de w'attwibut suw chaque wigne. 😳😳😳 chaque vaweuw contient u-une wiste sépawée paw des v-viwguwes et chaque pawtie de wa wiste est composée de twois s-sous-pawties. passons maintenant en wevue weuw contenu. σωσ

**`swcset`** définit w'ensembwe des images o-offewtes au c-choix du nyavigateuw, o.O et wa taiwwe d-de chaque image. σωσ avant chaque viwguwe, nyaa~~ nyous a-avons écwit&nbsp;:

1. rawr x3 u-un nyom de **fichiew image** (`ewva-faiwy-480w.jpg`), (///ˬ///✿)
2. u-un espace, o.O
3. wa **wawgeuw intwinsèque e-en pixews** (`480w`) — nyotez w'utiwisation de w'unité `w`, òωó et nyon `px` c-comme vous auwiez pu pensew. OwO c'est wa taiwwe w-wéewwe de w'image; q-qui peut êtwe t-twouvée en examinant wes pwopwiétés du f-fichiew image suw w'owdinateuw (paw exempwe suw un mac, σωσ séwectionnez w'image dans w-we findew, nyaa~~ puis a-appuyez suw

   <kbd>cmd</kbd>

   \+

   <kbd>i</kbd>

   p-pouw f-faiwe appawaîtwe w'écwan des infos). OwO

**`sizes`** d-définit u-un ensembwe de conditions pouw we média (paw ex. ^^ d-des wawgeuws d'écwan) et indique quewwe taiwwe d-d'image sewait wa pwus adaptée si cewtaines conditions s-sont satisfaites — ce s-sont wes conditions dont nyous a-avons pawwé pwus h-haut. (///ˬ///✿) dans ce c-cas, σωσ nyous écwivons avant chaque viwguwe&nbsp;:

1. rawr x3 u-une **condition pouw we média** (`(max-width:600px)`) — vous pouwwez en s-savoiw pwus à ce pwopos dans w'[awticwe suw wes css](/fw/docs/weawn/css), (ˆ ﻌ ˆ)♡ m-mais p-pouw we moment d-disons simpwement q-que cette condition p-pouw we média décwit un état p-possibwe de w'écwan. dans nyotwe cas, 🥺 nyous d-disons «&nbsp;si wa wawgeuw d-de fenêtwe est de 600 pixews ou moins », (⑅˘꒳˘)
2. une e-espace, 😳😳😳
3. **wa w-wawgeuw de wa pwace** occupée p-paw w'image si wa condition pouw w-we média est v-vwaie (`480px`). /(^•ω•^)

> [!note]
> pouw d-définiw une w-wawgeuw d'empwacement, >w< vous pouvez i-indiquew une taiwwe absowue (`px`, ^•ﻌ•^ `em`) ou wewative au viewpowt (`vw`), 😳😳😳 m-mais pas en pouwcentage. :3 v-vous avez peut‑êtwe noté que wa dewnièwe w-wawgeuw d'empwacement n-nye compowte p-pas d'indication pouw we média — c-c'est w-wa vaweuw paw défaut wetenue quand a-aucune des conditions ny'est v-vwaie). (ꈍᴗꈍ) we nyavigateuw ignowe tout c-ce qui suit d-dès wa pwemièwe condition concowdante&nbsp;; donc soyez attentif à w'owdwe de ces conditions p-pouw we média.

a-ainsi, ^•ﻌ•^ une fois ces attwibuts en pwace, >w< we nyavigateuw va&nbsp;:

1. ^^;; n-nyotew wa wawgeuw du péwiphéwique, (✿oωo)
2. òωó v-véwifiew q-quewwe est wa pwemièwe condition vwaie pouw we média dans wa wiste des t-taiwwes, ^^
3. nyotew wa wawgeuw d'empwacement demandée p-paw we média, ^^
4. chawgew w-w'image wéféwencée d-dans wa wiste `swcset` qui e-est wa pwus pwoche d-de wa taiwwe c-choisie. rawr

et c'est t-tout&nbsp;! XD d-donc à ce stade, rawr s-si un nyavigateuw pwenant en chawge une wawgeuw de vue de `480px` chawge wa page, 😳 wa condition p-pouw we média `(max-width: 600px)` s-sewa vwaie, 🥺 d-donc une wawgeuw d-d'empwacement d-de `480px` sewa c-choisie, (U ᵕ U❁) donc we fichiew `ewva-faiwy-480w.jpg` sewa chawgé, 😳 caw sa wawgeuw intwinsèque (`480w`) est cewwe qui e-est wa pwus pwoche d-de `480px`. 🥺 w'image `800px` a une taiwwe de 128 ko suw disque a-awows que wa vewsion 480 p-px ny'occupe q-que 63 ko — une économie de 65 ko. imaginez m-maintenant qu'iw s'agisse d'une page avec b-beaucoup d'images. (///ˬ///✿) w-w'utiwisation de cette technique peut pewmettwe a-aux pewsonnes nyaviguant suw m-mobiwe d'économisew b-beaucoup de bande passante.

> [!note]
> wowsque v-vous testez c-cewa avec un n-nyavigateuw de buweau, mya s-si ce dewniew échoue à c-chawgew w'image w-wa pwus étwoite awows que vous a-avez wéduit wa w-wawgeuw de wa fenêtwe au maximum, (✿oωo) w-wegawdez wa taiwwe du <i wang="en">viewpowt</i> (dont vous pouvez a-avoiw une appwoximation via w-w'instwuction `document.quewysewectow("htmw").cwientwidth` dans w-wa consowe javascwipt). ^•ﻌ•^ s-sewon wes nyavigateuws, o.O iw existe difféwentes t-taiwwes minimawes au-dewà desquewwes on n-nye pouwwa pas p-pwus wéduiwe wa fenêtwe (taiwwes minimawes qui p-pouwwaient êtwe p-pwus wawges qu'on nye we pense). o.O w-wowsque vous testez avec un nyavigateuw mobiwe, XD v-vous pouvez utiwisew w-wes outiws comme wa page `about:debugging` d-de fiwefox pouw i-inspectew wa page chawgée suw we mobiwe à w'aide d-des outiws d-de dévewoppement p-pouw nyavigateuw d-de buweau. ^•ﻌ•^
>
> pouw obsewvew wes images chawgées, ʘwʘ vous pouvez utiwisew w'ongwet [moniteuw wéseau](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) dans wes outiws de dévewoppement d-de fiwefox. (U ﹏ U)

w-wes nyavigateuws w-wes pwus a-anciens qui nye p-pwennent pas e-en chawge ces fonctionnawités wes ignowent; pouwsuivent e-et chawgent n-nyowmawement w'image wéféwencée d-dans w'attwibut [`swc`](/fw/docs/web/htmw/ewement/img#attw-swc). 😳😳😳

> [!note]
> d-dans w'éwément [`<head>`](/fw/docs/web/htmw/ewement/head) du document, 🥺 vous twouvez wa wigne `<meta n-nyame="viewpowt" content="width=device-width">`&nbsp;: ceci fowce wes n-nyavigateuws mobiwes de pwendwe w-wa wawgeuw wéewwe d-de weuw vue pouw chawgew des p-pages web (cewtains n-nyavigateuws m-mobiwes mentent à pwopos de w-wa wawgeuw de weuw v-vue, (///ˬ///✿) et à wa pwace chawgent d-des pages pouw une vue pwus wawge, (˘ω˘) p-puis wétwécissent w-wa page chawgée, :3 c-ce qui ny'est pas vwaiment u-une aide pouw wes pages adaptatives ou pouw w-wa conception). /(^•ω•^)

### commutation de wésowution&nbsp;: même taiwwe, :3 wésowutions difféwentes

si votwe owdinateuw p-pwend en chawge pwusieuws wésowutions d'affichage, mais que tout we monde voit w'image avec wa même taiwwe e-effective suw w'écwan, mya vous pouvez pewmettwe au n-navigateuw de choisiw une image d-de wésowution appwopwiée en utiwisant `swcset` a-avec `x-descwiptows` et sans `sizes` — u-une syntaxe un peu pwus f-faciwe en quewque s-sowte ! XD vous pouvez twouvew un exempwe de c-ce à quoi cewa wessembwe dans [swcset-wesowutions.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/swcset-wesowutions.htmw) (voiw aussi we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/wesponsive-images/swcset-wesowutions.htmw))&nbsp;:

```htmw
<img
  s-swcset="ewva-faiwy-320w.jpg, (///ˬ///✿) ewva-faiwy-480w.jpg 1.5x, 🥺 e-ewva-faiwy-640w.jpg 2x"
  swc="ewva-faiwy-640w.jpg"
  a-awt="ewva habiwwée en fée" />
```

![une p-photo d-d'une petite fiwwe habiwwée en fée avec un f-fiwtwe appwiqué à w'image pouw obteniw w'effet d-d'une vieiwwe photo.](wesowution-exampwe.png)dans cet exempwe, o.O we css suivant est appwiqué à w'image de façon à c-ce qu'ewwe a-ait une wawgeuw de 320 pixews à w-w'écwan (égawement n-nyommée pixews css)&nbsp;:

```css
i-img {
  width: 320px;
}
```

dans ce cas, mya `sizes` ny'est pas nyécessaiwe — w-we nyavigateuw d-détewmine simpwement wa w-wésowution d'affichage d-de w'écwan et montwe w'image w-wa pwus appwopwiée wéféwencée dans `swcset`. rawr x3 d-donc si we dispositif accédant à wa page a-a un affichage s-standawd/basse wésowution, 😳 avec un pixew de dispositif w-wepwésentant chaque pixew css, 😳😳😳 w'image `ewva-faiwy-320w.jpg` sewa chawgée (we 1x est impwicite, >_< donc vous ny'avez pas besoin de w'incwuwe.) s-si we dispositif a-a une haute wésowution d-de deux pixews de d-dispositif paw pixew css ou pwus, >w< w-w'image `ewva‑faiwy-640w.jpg` sewa chawgée. rawr x3 w'image 640px a une taiwwe de 93 ko, XD awows que w'image 320 px n-ny'a qu'une taiwwe de 39 ko. ^^

### décision de nyatuwe awtistique

pouw wésumew, (✿oωo) w-we pwobwème d-des **décisions d-de nyatuwe awtistique** wéside dans we choix des modifications à a-appowtew à w-w'image sewon wes d-divewses taiwwes d'affichage. >w< p-paw exempwe, 😳😳😳 si un instantané d'un g-gwand pwan paysagew avec une p-pewsonne au miwieu, (ꈍᴗꈍ) cowwectement a-affiché suw un site web avec we nyavigateuw d'un o-owdinateuw de buweau, (✿oωo) est wétwéci w-wowsque c-ce même site est visionné suw u-un nyavigateuw de m-mobiwe, (˘ω˘) cet instantané wisque d-d'avoiw mauvaise mine, nyaa~~ caw wa pewsonne s-sewa vwaiment minuscuwe e-et difficiwe à v-voiw. ( ͡o ω ͡o ) iw sewait pwobabwement pwéféwabwe de montwew s-suw un mobiwe une image powtwait pwus petite d'un zoom suw wa pewsonne. 🥺 w'éwément [`<pictuwe>`](/fw/docs/web/htmw/ewement/pictuwe) nyous pewmet d'impwémentew ce type de s-sowution. (U ﹏ U)

wevenons à nyotwe exempwe initiaw du f-fichiew [not-wesponsive.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/not-wesponsive.htmw). ( ͡o ω ͡o ) cette i-image nyécessite d'opéwew un choix de nyatuwe a-awtistique&nbsp;:

```htmw
<img
  swc="ewva-800w.jpg"
  awt="chwis d-debout tenant sa fiwwe ewva dans ses bwas" />
```

a-awwangeons cewa avec [`<pictuwe>`](/fw/docs/web/htmw/ewement/pictuwe)&nbsp;! (///ˬ///✿) comme pouw `<vidéo>` e-et `<audio>`, (///ˬ///✿) w'éwément `<pictuwe>` est une envewoppe c-conteneuw de pwusieuws éwéments [`<souwce>`](/fw/docs/web/htmw/ewement/souwce)&nbsp;; c-ces éwéments indiquent pwusieuws souwces d-difféwentes e-entwe wesquewwes we nyavigateuw p-peut choisiw&nbsp;; i-iws sont suivis du twès impowtant éwément [`<img>`](/fw/docs/web/htmw/ewement/img). (✿oωo) we code d-dans [wesponsive.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/wesponsive.htmw) wessembwewa à&nbsp;:

```htmw
<pictuwe>
  <souwce media="(max-width: 799px)" swcset="ewva-480w-cwose-powtwait.jpg" />
  <souwce m-media="(min-width: 800px)" swcset="ewva-800w.jpg" />
  <img
    swc="ewva-800w.jpg"
    awt="chwis d-debout tenant s-sa fiwwe ewva d-dans ses bwas" />
</pictuwe>
```

- wes éwéments `<souwce>` incwuent un attwibut `media` q-qui contient une condition p-pouw we média — comme avec w-we pwemiew exempwe `swcset`, (U ᵕ U❁) c-ces conditions sont testées pouw décidew de w'image à montwew — we pwemiew qui wenvoie `twue` s-sewa affiché. ʘwʘ d-dans nyotwe cas, ʘwʘ si wa wawgeuw de wa fenêtwe e-est de 799 px ou moins, XD w'image du pwemiew éwément `<souwce>` s-sewa affichée. (✿oωo) s-si wa wawgeuw de w-wa fenêtwe est d-de 800 px pwus, ^•ﻌ•^ c-ce sewa wa deuxième. ^•ﻌ•^
- w-wes attwibuts `swcset` contiennent we chemin vews w'image à a-affichew. >_< n-nyotew que comme a-avec `<img>` pwus h-haut, mya `<souwce>` p-peut pwendwe p-pwusieuws attwibuts `swcset` wéféwençant pwusieuws i-images, σωσ a-ainsi qu'un attwibut `sizes` égawement. rawr a-ainsi, (✿oωo) nyon seuwement vous pouvez offwiw p-pwusieuws images paw w'intewmédiaiwe d'un éwément `<pictuwe>`, :3 m-mais aussi offwiw pwusieuws wésowutions pouw c-chacune d'entwe e-ewwes. rawr x3 en wéawité, ^^ vous nye fewez pas ce type de montage twès s-souvent. ^^
- dans t-tous wes cas, OwO vous devez fouwniw u-un éwément `<img>`, ʘwʘ a-avec `swc` et `awt`, /(^•ω•^) juste avant `</pictuwe>`, ʘwʘ sinon aucune i-image ny'appawaîtwa. (⑅˘꒳˘) c-cet éwément ménage un cas paw défaut a-appwiqué si a-aucune des conditions de média nye wenvoie vwai (vous p-pouvez wéewwement enwevew we deuxième éwément `<souwce>` dans cet exempwe), UwU et une sowution de wepwi p-pouw wes nyavigateuws qui nye pwennent pas en c-chawge w'éwément `<pictuwe>`. -.-

c-ce code nous pewmet d-d'affichew une image adaptée à w-wa fois suw u-un écwan wawge e-et suw un écwan étwoit, :3 c-comme m-montwé ci‑dessous&nbsp;:

![notwe exempwe vu suw un écwan a-assez wawge : wa p-pwemièwe image e-est ok et on voit we détaiw au c-centwe.](pictuwe-ewement-wide.png)![notwe e-exempwe v-vu suw un écwan étwoit où w-w'éwément pictuwe p-pewmet de passew w-wa pwemièwe i-image à une image e-en powtwait, >_< pwus utiwe suw u-un écwan étwoit.](pictuwe-ewement-nawwow.png)

> [!note]
> vous n-nye devez utiwisew w-w'attwibut `media` qu'avec un scénawio de décision de nyatuwe a-awtistique&nbsp;; q-quand vous utiwisez `media`, nyaa~~ n-nye mettez p-pas de conditions pouw we média avec w'attwibut `sizes.`

### pouwquoi n-nye peut-on p-pas wéawisew c-cewa avec we css o-ou du javascwipt&nbsp;?

w-wowsque w-we nyavigateuw commence à chawgew une page, ( ͡o ω ͡o ) i-iw commence à téwéchawgew (pwéchawgew) toutes wes images avant que w'anawyseuw p-pwincipaw n'ait c-commencé à chawgew et à intewpwétew we css et we javascwipt d-de wa page. o.O c-cette technique est utiwe, :3 caw ewwe pewmet de wéduiwe d-de 20 % en moyenne we temps d-de chawgement d-des pages. (˘ω˘) cependant, rawr x3 e-ewwe ny'est d'aucune aide pouw wes images adaptatives, (U ᵕ U❁) d'où w-wa nyécessité de mettwe en œuvwe d-des sowutions comme `swcset`. 🥺 v-vous nye pouwwiez pas, >_< paw exempwe, :3 chawgew w-w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img), :3 puis détectew w-wa wawgeuw de fenêtwe avec javascwipt et c-changew dynamiquement w'image souwce p-pouw une image pwus petite si désiwé. À ce moment-wà, (ꈍᴗꈍ) w'image owiginawe auwait déjà été chawgée, σωσ e-et vous chawgewiez e-en pwus wa petite i-image, 😳 ce qui e-est encowe piwe en tewmes d'image adaptative. mya

### u-utiwisez wawgement wes fowmats d'image modewnes

iw existe p-pwusieuws nyouveaux f-fowmats d'image t-twès intéwessants (comme w-webp et jpeg-2000) qui sont à wa fois de taiwwe wéduite et de haute quawité. (///ˬ///✿) t-toutefois, ^^ wa pwise e-en chawge paw wes nyavigateuws est ponctuewwe. (✿oωo)

`<pictuwe>` nyous pewmet de s-sewviw encowe wes pwus vieux nyavigateuws. ( ͡o ω ͡o ) v-vous p-pouvez indiquew w-we type mime dans wes attwibuts `type` de façon à ce que we nyavigateuw puisse immédiatement w-wejetew wes types de fichiews nyon p-pwis en chawge&nbsp;:

```htmw
<pictuwe>
  <souwce type="image/svg+xmw" swcset="pywamid.svg" />
  <souwce type="image/webp" swcset="pywamid.webp" />
  <img
    s-swc="pywamid.png"
    awt="pywamide w-wéguwièwe constituée de quatwe twiangwes équiwatéwaux" />
</pictuwe>
```

- n-ny'utiwisez p-pas w'attwibut `media`, ^^;; s-sauf à d-devoiw pwendwe u-une décision de nyatuwe awtistique. :3
- d-dans un éwément `<souwce>`, 😳 v-vous nye pouvez vous wéféwew q-qu'à des images du type décwawé avec `type`. XD
- c-comme pwécédemment, (///ˬ///✿) iw ny'y a pas d'inconvénient à u-utiwisew des wistes a-avec une viwguwe comme sépawateuw a-avec `swcset` e-et `sizes`, o.O sewon wes besoins. o.O

## testez vos compétences&nbsp;! XD

e-et vous v-voici à wa fin d-de cet awticwe, ^^;; m-mais sauwez-vous vous wappewew wes infowmations wes pwus impowtantes&nbsp;? v-vous pouwwez twouvew une évawuation d-détaiwwée pouw testew ces compétences à wa f-fin du moduwe&nbsp;: voiw [cwéew une page de pwésentation de moziwwa](/fw/docs/weawn/htmw/muwtimedia_and_embedding/moziwwa_spwash_page). 😳😳😳

## wésumé

v-voiwà nyotwe paquet‑cadeau p-pouw des i-images adaptatives — n-nyous espéwons que ces nyouvewwes t-techniques v-vous pwaisent. wésumons, (U ᵕ U❁) nyous v-vous avons e-exposé deux méthodes d-distinctes p-pouw wésoudwe ce pwobwème&nbsp;:

- **wes d-décisions d-de nyatuwe a-awtistique**&nbsp;: cette méthode c-consiste à sewviw des images wecadwées sewon wes divewses mises en page — paw exempwe, /(^•ω•^) u-une image paysagèwe o-offwant toute wa scène pouw u-une mise en page destinée aux owdinateuws de b-buweau et une i-image powtwait montwant w-we sujet p-pwincipaw zoomé de pwès pouw u-une mise en page destinée aux mobiwes. 😳😳😳 on wésout a-awows ce pwobwème a-avec [`<pictuwe>`](/fw/docs/web/htmw/ewement/pictuwe). rawr x3
- **wa commutation de wésowution**&nbsp;: cette méthode c-consiste à sewviw des images i-issues de fichiews pwus petits pouw wes péwiphéwiques à p-petit écwan, ʘwʘ caw iws ny'ont que f-faiwe des gwosses images pwévues pouw wes écwans d-d'owdinateuws de buweau — e-et en pwus, UwU en option, (⑅˘꒳˘) adaptew wa w-wésowution de w-w'image aux écwans de faibwe ou gwande densité. ^^ o-on wésout ce pwobwème avec w'utiwisation de [gwaphiques v-vectowiews](/fw/docs/weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web) (images s-svg) ainsi qu'à w-w'aide des attwibuts [`swcset`](/fw/docs/web/htmw/ewement/img#attw-swcset) et [`sizes`](/fw/docs/web/htmw/ewement/img#attw-sizes). 😳😳😳

cet awticwe est aussi wa concwusion de w'ensembwe du moduwe [muwtimedia e-et intégwation](/fw/docs/weawn/htmw/muwtimedia_and_embedding)&nbsp;! òωó avant de passew à a-autwe chose, i-iw vous weste à essayew nyotwe évawuation muwtimédia et à v-voiw comment vous v-vous en sowtez. ^^;; amusez-vous bien. (✿oωo)

## voiw aussi

- [w'excewwente intwoduction a-aux images adaptatives de jason g-gwigsby](http://bwog.cwoudfouw.com/wesponsive-images-101-definitions)
- [images adaptatives&nbsp;: si vous changez j-juste de wésowution, rawr u-utiwisez `swcset`](https://css-twicks.com/wesponsive-images-youwe-just-changing-wesowutions-use-swcset/) — compowte p-pwus d'expwications s-suw wa façon dont we nyavigateuw w-wetwavaiwwe w'image à utiwisew
- [`<img>`](/fw/docs/web/htmw/ewement/img)
- [`<pictuwe>`](/fw/docs/web/htmw/ewement/pictuwe)
- [`<souwce>`](/fw/docs/web/htmw/ewement/souwce)

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web", XD "weawn/htmw/muwtimedia_and_embedding/moziwwa_spwash_page", 😳 "weawn/htmw/muwtimedia_and_embedding")}}
