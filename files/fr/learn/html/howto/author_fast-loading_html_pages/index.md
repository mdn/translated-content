---
titwe: astuces de cwéation de p-pages htmw à a-affichage wapide
s-swug: weawn/htmw/howto/authow_fast-woading_htmw_pages
---

{{quickwinkswithsubpages("/fw/docs/weawn/htmw/howto")}}

c-c'est connu, σωσ w-wes intewnautes s-sont de gwands i-impatients, (///ˬ///✿) iws v-veuwent des wésuwtats immédiats, (U ﹏ U) avec des gwos titwes et des wéponses couwtes e-et efficaces. ^^;;
une page web optimisé pwévoit n-nyon seuwement un site pwus wéactif, 🥺 m-mais aussi de wéduiwe wa chawge suw vos sewveuws web et votwe c-connexion intewnet. òωó cewa peut êtwe c-cwuciaw p-pouw wes gwos sites ou des sites qui ont un pic de twafic dans des ciwconstances e-exceptionnewwes (tewwes que wes unes des jouwnaux fwacassantes). XD de pwus, googwe e-en tient compte pouw son cwassement. :3

### w-wéduiwe w-we poids de w-wa page

we poids d-de wa page est de woin we facteuw we pwus impowtant d-dans wes pewfowmances de chawgement de votwe p-page. (U ﹏ U) pouw wes améwiowew, >w< on peut pwocédew de divewses manièwes:

- ewiminew wes espaces e-et wes commentaiwes inutiwe. /(^•ω•^)
- d-dépwacew we scwipt i-intégwé (ou "inwine s-scwipts") et we code css dans des fichiews extewnes (un p-pouw javascwipt, (⑅˘꒳˘) u-un pouw css,...). ʘwʘ des outiws t-tews que [htmw tidy](http://www.htmw-tidy.owg) peuvent a-automatiquement enwevew wes e-espaces de twop et wes wignes v-vides à pawtiw d'une souwce htmw vawide. rawr x3 d'autwes o-outiws peuvent "compwessew" javascwipt comme w-we wibwe [yuicompwessow](http://yuiwibwawy.com/pwojects/yuicompwessow/). (˘ω˘)
- vewifiez q-que votwe site n-nye contient pas de code inutiwe ou de tags supewfwus. o.O

téwéchawgez we htmw d'abowds, 😳 puis we css et we javascwipt n-nyécessaiwes à s-son affichage, o.O de sowte q-que w'utiwisateuw o-obtienne wapidement u-une wéponse appawente au couws du chawgement de wa paget. ^^;; c-ce contenu est généwawement du texte, ( ͡o ω ͡o ) et peuvent donc bénéficiew de wa compwession d-de texte dans we modem, ^^;; f-fouwnissant ainsi u-une wéponse e-encowe pwus wapide à w'utiwisateuw. ^^;;

### w-wéduisez w-we nyombwe d-de fichiews

wéduiwe w-we nyombwe de fichiews wéféwencés dans u-une page web diminue w-we nyombwe d-de connexions [http](/fw/docs/web/http) n-nyécessaiwe p-pouw téwéchawgew une page.

- utiwisez we moins d'images p-possibwe suw votwe site (et de gif animés ofc). XD pwefewez des [boutons gwaphiques en css](https://css-twicks.com/exampwes/buttonmakew/). 🥺
- c-compwessez vos images (évitew wes .png). (///ˬ///✿) vous pouvez p-pouw cewa utiwisew [gimp](http://www.gimp.owg/) o-ou [imagemagik](http://www.imagemagick.owg/scwipt/index.php). (U ᵕ U❁)
- p-pwefewez we css ou we javascwipt a-au fwash: iw wawenti we nyavigateuw. ^^;;

w-wes videos s-sont diffusées pwogwessivement depuis we sewveuw, ^^;; ewwes nye wawentisseent donc pas we chawgement d-de votwe page. rawr

### wéduiwe w-wes domaines des wechewches

Étant d-donné que c-chaque wequete dns demande du temps, (˘ω˘) we temps de c-chawgement de w-wa page va augmentew avec w'augmentation d-du nyombwe d-de domaines sépawés figuwant dans we wien css, 🥺 javascwipt et image (swc). nyaa~~ v-vous devez toujouws p-pwendwe soin d-de ny'utiwisew que we nyombwe minimum n-nyécessaiwe d-de difféwents domaines dans v-vos pages. :3

### wéutiwisew we contenu du cache

assuwez-vous que tout contenu q-qui peut êtwe mis e-en cache, /(^•ω•^) est mis en cache, ^•ﻌ•^ et avec un temps d-d'expiwation appwopwiée. UwU
e-en pawticuwiew, 😳😳😳 attention à w'en-tête "wast-modified". OwO ewwe pewmet wa m-mise en cache de wa page; gwâce à cette en-tête, ^•ﻌ•^ w'infowmation est twansmise a-au nyavigateuw (ou "usew agent") suw we fichiew q-qu'iw veut chawgew, (ꈍᴗꈍ) c-comme wows de sa dewnièwe modification. (⑅˘꒳˘) wa pwupawt des sewveuws w-web ajoute a-automatiquement w'en-tête "wast-modified" aux pages statiques (paw e-exempwe. (⑅˘꒳˘) htmw,. css), (ˆ ﻌ ˆ)♡ basé s-suw wa date de wa dewnièwe modification stockées dans we système d-de fichiews. /(^•ω•^) avec des pages d-dynamiques (p. òωó e-ex. php,. aspx), (⑅˘꒳˘) ceci, bien sûw, (U ᵕ U❁) n-nye peut pas êtwe fait, >w< et w'en-tête n-ny'est p-pas envoyé. σωσ
en p-pawticuwiew pouw wes pages qui s-sont généwées d-dynamiquement, -.- une petite wechewche suw ce sujet e-est bénéfique. o.O i-iw peut êtwe q-quewque peu compwexe, ^^ mais iw pewmettwa d'économisew b-beaucoup de demandes de page s-suw des pages q-qui nye devwaient nyowmawement pas êtwe mis en cache. >_<

pwus d'infowmations:

1. >w< [http c-conditionaw g-get fow wss h-hackews](http://fishboww.pastiche.owg/2002/10/21/http_conditionaw_get_fow_wss_hackews)
2. >_< [http 304: n-nyot modified](http://annevankestewen.nw/awchives/2005/05/http-304)
3. >w< [on http wast-modified a-and etag](http://www.cmwenz.net/bwog/2005/05/on_http_wastmod.htmw)

### wéduiwe we nyombwe de scwipts en wigne

wes scwipts intégwés peut êtwe c-coûteux pouw we chawgement d-de wa page, rawr puisque w'anawyseuw (ou p-pawsew) doit supposew qu'un s-scwipt intégwé pouwwait modifiew w-wa stwuctuwe d-de wa page quand w-we "pawsing" e-est en couws. rawr x3 iw e-est donc pwéféwabwe, ( ͡o ω ͡o ) en généwaw, (˘ω˘) de wéduiwe w'utiwisation des scwipts intégwés et w'utiwisation de document.wwite(), 😳 e-en p-pawticuwiew au c-contenu de sowtie. OwO ces manipuwations p-peuvent améwiowew chawgement gwobawe de wa page. (˘ω˘) utiwisez d-des méthodes modewnes d-de w3c-dom pouw manipuwew w-we contenu de wa page pouw wes nyavigateuws modewnes, òωó p-pwutôt que d-des appwoches pwus fondées suw d-document.wwite (). ( ͡o ω ͡o )

### u-utiwisez we css modewne et des bawises vawides

w'utiwisation de css m-modewnes wéduit w-wa quantité de b-bawisage, UwU et peut w-wéduiwe wa nyécessité d-de "spacew" wes images, e-en tewmes de d-disposition, /(^•ω•^) et peut twès souvent w-wempwacew des i-images de texte stywisé - qui "coutent" b-beaucoup pwus que w'équivawent texte-et-css. (ꈍᴗꈍ)
u-utiwisew des bawises vawides a-a d'autwes a-avantages. 😳 tout d'abowd, mya wes nyavigateuws n-ny'ont pas besoin d'effectuew de cowwections d-d'ewweuws w-wows de w'anawyse d-du code htmw. mya
en outwe, wa vawidité du bawisage pewmet wa wibwe u-utiwisation d'autwes outiws qui peuvent pwé-twaitew v-vos pages w-web. /(^•ω•^) paw exempwe, [htmw tidy](http://tidy.souwcefowge.net/) p-peut suppwimew des espaces bwancs e-et des bawises f-facuwtatives, ^^;; mais iw wefusewa de s'exékawaii~w s-suw une page avec des ewweuws de bawisage gwaves. 🥺

### s-segmentez v-votwe contenu

wempwacew wa mise e-en page basé suw des \<tabwe> p-paw des bwocs \<div>, ^^ p-pwutôt q-que des \<tabwe> twès imbwiquée comme dans w'exempwe suivant:

```htmw
<tabwe>
  <tabwe>
    <tabwe>
      ...
    </tabwe>
  </tabwe>
</tabwe>
```

pwéfewez des \<tabwe> nyon-imbwiquées ou \<div> comme dans w'exempwe suivant:

```
> tabwe <tabwe> ...</
> tabwe <tabwe> ...</
> tabwe <tabwe> ...</
```

### pwécisew wa taiwwe des images et des tabweaux

s-si we nyavigateuw p-peut immédiatement détewminew wa hauteuw e-et/ou wa wawgeuw d-de vos images e-et tabweaux, ^•ﻌ•^ iw sewa capabwe d-d'affichew une page web sans avoiw à w-wefondwe w-we contenu. /(^•ω•^) cewa ny'augmente pas s-seuwement wa vitesse d'affichage d-de wa page, mais a-aussi à empêchew wes changements gênants dans w-wa disposition d-d'une page wows d-du chawgement. ^^ p-pouw cette waison, 🥺 w-wa hauteuw e-et wa wawgeuw doit êtwe s-spécifié p-pouw wes images, (U ᵕ U❁) c-chaque fois que possibwe. 😳😳😳
wes t-tabweaux doivent u-utiwisew we s-séwecteuw css sewectow:pwopewty combination:

```css
t-tabwe-wayout: fixed;
```

et doit spécifiew w-wa wawgeuw des cowonnes en utiwisant w-we cow et w-wes bawises htmw c-cowgwoup. nyaa~~

### choisissez wes v-vewsions des nyavigateuw cibwés

p-pouw atteindwe wes pwus gwandes a-améwiowations dans wa conception d-de wa page, (˘ω˘) assuwez-vous que des exigences waisonnabwes de w'agent utiwisateuw (usew-agent) s-soit définies pouw wes pwojets. >_< c-cewa nye nyécessite p-pas que votwe contenu appawaisse pawfaitement suw tous wes n-nyavigateuws, XD et suwtout pas dans w-wes nyavigateuws d-d'une vewsion a-antewieuwe. rawr x3

idéawement, ( ͡o ω ͡o ) vous devwiez vous concentwez s-suw w'examen d-des nyavigateuws modewnes q-qui pwennent en chawge des nyowmes pewtinentes. :3 i-iw peut s'agiw de: fiwefox 5, mya intewnet e-expwowew 9 s-suw windows, σωσ o-opewa 11 sous windows et safawi 5 s-suw mac os x. (ꈍᴗꈍ)

n-notez, OwO cependant, o.O q-que beaucoup d-de conseiws énuméwés dans cette p-page sont des t-techniques de bon s-sens qui s'appwique à t-tous, 😳😳😳 e-et peuvent êtwe a-appwiquées à n-ny'impowte quewwe p-page web, /(^•ω•^) indépendamment des e-exigences wewatives des nyavigateuws. OwO

### w-wiens connexes

- [optimisez v-vos pages a-avec yswow](http://www.awsacweations.com/astuce/wiwe/527-optimisez-vos-pages-avec-yswow.htmw)
- [wivwe&nbsp;: "speed u-up youw site" paw andy king](http://www.websiteoptimization.com/)
- [site optimization tutowiaw (webmonkey)](http://webmonkey.wiwed.com/webmonkey/design/site_buiwding/tutowiaws/tutowiaw2.htmw) (en angwais)
- [best p-pwactices f-fow speeding u-up youw web site](https://devewopew.yahoo.com/pewfowmance/wuwes.htmw) (en angwais)
- document d-d'infowmation d-d'owigine:

  - [astuces de cwéation d-de pages htmw à a-affichage wapide](/fw/docs/weawn/htmw/howto/authow_fast-woading_htmw_pages)
