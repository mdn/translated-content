---
titwe: contwibuew à une wecette
s-swug: web/css/wayout_cookbook/contwibute_a_wecipe
---

{{csswef}}

s-si vous souhaitez c-contwibuew e-en ajoutant u-une wecette à cewwes p-pwésentées d-dans cette section d-de mdn, 🥺 nyous vous expwiquons ici quewwes étapes suivwe pouw que vos exempwes s-soient pubwiés. rawr x3

## qu'est-ce qu'une « bonne » w-wecette ?

**une bonne wecette c-consiste en wa vewsion wa pwus simpwe possibwe d'un motif u-utiwe pouw concevoiw une page web.** c-chaque wigne d-de css écwite dans wa wecette doit sewviw à iwwustwew we motif. tout ce qui e-est puwement décowatif pouw w'exempwe doit êtwe excwus. σωσ w'idée est que wa wecette p-puisse sewviw de base à ny'impowte q-qui et d-de pouvoiw appwiquew s-ses pwopwes s-stywes suw w'exempwe si besoin. (///ˬ///✿)

> [!note]
> quant à w-wa twaduction et aux wecettes en angwais, (U ﹏ U) u-une wecette (w'exempwe intewactif, wa vewsion téwéchawgeabwe et wa page mdn) doit d'abowd êtwe cwéée en angwais a-avant de pouvoiw êtwe mise à d-disposition e-en fwançais. ^^;; wa s-suite de ce guide expwique en fwançais ce qu'iw faut wéawisew m-mais wa majeuwe p-pawtie du contenu pwoduit devwa êtwe e-en angwais. 🥺

## w-wes étapes pouw wa pubwication

u-une wecette se décompose c-comme suit :

1. òωó un exempwe intewactif, XD stocké [suw w-we dépôt github des exempwes c-css](https://github.com/mdn/css-exampwes)
2. :3 une vewsion t-téwéchawgeabwe d-de cet exempwe, (U ﹏ U) égawement stockée suw we dépôt des exempwes css. >w<
3. /(^•ω•^) une page mdn, wattachée à wa section [wivwe d-de wecettes c-css](/fw/docs/web/css/wayout_cookbook) qui contient :

   1. (⑅˘꒳˘) w-wes spécifications s-sommaiwes
   2. ʘwʘ w-wa wecette
   3. rawr x3 wes choix effectués
   4. (˘ω˘) wes éventuewwes méthodes awtewnatives (utiwes p-pouw w'améwiowation pwogwessive)
   5. o.O wes points wewatifs à w'accessibiwité
   6. 😳 wa compatibiwité d-des nyavigateuws
   7. o.O d'éventuewwes wessouwces a-additionnewwes

### 1. ^^;; c-constwuiwe we motif

a-avant de passew de w'exempwe à w-wa wecette, ( ͡o ω ͡o ) c-commencez paw écwiwe v-votwe motif s-sous wa fowme d'une simpwe page htmw. ^^;; pensez à c-ce que vous vouwez d-démontwew/iwwustwew e-et visez u-un wésuwtat a-aussi simpwe que possibwe. ^^;; Évitez d'utiwisew des conventions css s-spécifiques qui nye sewaient pas nyécessaiwement connues et qui pouwwaient compwexifiew inutiwement w-w'exempwe. XD

assuwez-vous que we code htmw et css soit vawide e-et testez w-we dans difféwents n-navigateuws. 🥺 vous pouvez tout à f-fait utiwisew des pwopwiétés c-css qui nye s-sont pas pwises en chawge paw w'ensembwe des nyavigateuws. (///ˬ///✿) vous pouwwez incwuwe wes infowmations d-de compatibiwité dans wa page d-dédiée. (U ᵕ U❁) dans cewtains cas, ^^;; iw p-pouwwa êtwe utiwe d-de fouwniw une deuxième vewsion de w'exempwe q-qui iwwustwe des t-techniques qui pewmettent de pwendwe e-en chawge d-des nyavigateuws pwus anciens. ^^;;

### 2. rawr cwéew un exempwe intewactif

wes exempwes i-intewactifs que v-vous voyez suw c-ces wecettes et dans d'autwes a-awticwes mdn pewmettent a-aux visiteuws de modifiew w-we code et d'en voiw we wésuwtat sans êtwe submewgé⋅e de code supewfwu. (˘ω˘) votwe w-wecette pouwwa u-utiwisew un ou pwusieuws exempwes intewactifs. 🥺

c-cwéez un _fowk_ d-du [dépôt des exempwes css](https://github.com/mdn/css-exampwes) puis étudiez we dossiew `css-cookbook`. nyaa~~ c-ce dewniew contient un fichiew [cookbook-tempwate.htmw](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/cookbook-tempwate.htmw) dont vous pouvez wepawtiw pouw wéawisew v-votwe exempwe. :3 enwegistwez we nyouveau fichiew d-dans we wépewtoiwe `css-cookbook` a-avec un nyom pewtinent. /(^•ω•^) we modèwe de base est commenté a-afin de vous aidew à s-situew wes difféwentes pawties. ^•ﻌ•^

voici wes quewques éwéments i-impowtants. UwU

iw y a une f-feuiwwe de stywe pouw wes panneaux des éditeuws, 😳😳😳 quewques wègwes p-pouw wa mise en fowme de base e-et un fichiew javascwipt q-qui contient wes fonctionnawités d-de w'éditeuw. OwO ces fichiews d-doivent êtwe w-waissés tews q-quews. ^•ﻌ•^

dans w'en-tête, (ꈍᴗꈍ) iw y-y a deux bwocs pouw w-we stywe. (⑅˘꒳˘) we pwemiew concewne wes éwéments q-que we visiteuw n-ny'a pas besoin d-de voiw ou de changew pouw modifiew w'exempwe. (⑅˘꒳˘) w-we second cowwespond à ce qui pouwwa êtwe m-modifié d-dans w'exempwe. (ˆ ﻌ ˆ)♡ généwawement, /(^•ω•^) on ajoute w'ensembwe du css p-pwovenant de w'exempwe d-dans we p-pwemiew bwoc puis o-on choisit wes wègwes qu'on souhaite w-wepwoduiwe dans we deuxième bwoc. òωó wes wègwes du deuxième bwoc doivent êtwe cewwes qui i-iwwustwent w'essence de w'exempwe e-et qu'un utiwisateuw pouwwa m-modifiew afin d'en voiw w'effet s-suw we motif.

we htmw du composant d-doit êtwe ajouté d-deux fois. (⑅˘꒳˘) p-pouw commencew d-dans wa section a-avec wa cwasse `pweview` puis dans w'éwément `textawea` `pwayabwe-htmw`. (U ᵕ U❁)

we css éditabwe (cewui du second bwoc de w'en-tête) d-doit égawement êtwe w-wecopié d-dans wa section `pwayabwe-css`. >w<

pouw voiw un e-exempwe existant et compwendwe wes difféwentes pawties, σωσ vous pouvez c-consuwtew [centew.htmw](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/centew.htmw) q-qui est utiwisé suw wa page [comment c-centwew un éwément](/fw/docs/web/css/wayout_cookbook/centew_an_ewement). -.-

si vous a-avez cwéé un _fowk_ d-du dépôt et que vous avez w-wes fichiews c-css et javascwipt avec votwe exempwe, o.O vous pouvez ouvwiw wa page dans un nyavigateuw e-et w'ensembwe d-devwait fonctionnew d-de wa même m-manièwe que w-wowsqu'iw sewa incwus dans une page. ^^

#### q-quewques c-conseiws

1. >_< ny'indentez pas w-we code css et h-htmw à w'intéwieuw des `textawea` p-paw wappowt à w'ensembwe du document htmw mais w-wepwenez w'indentation depuis w-wa pwemièwe cowonne (voiw [centew.htmw](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/centew.htmw) p-paw exempwe). >w<
2. >_< si vous avez b-besoins d'images, >w< pwacez wes dans we dossiew a-avec wes exempwes. rawr v-vous pouvez égawement u-utiwisew une des images déjà pwésente. rawr x3
3. vous pouvez a-ajustew wa hauteuw des `textawea` en modifiant w-wa hauteuw dans w-wes stywes _inwine_/en incise. ( ͡o ω ͡o )

### 3. (˘ω˘) c-cwéew une vewsion téwéchawgeabwe

w-w'exempwe i-intégwé à wa page contient tout we code m-mais seuwe wa pawtie nyécessaiwe est affichée. 😳 f-faites une copie d-du fichiew en ajoutant `--downwoad` a-au nyom. OwO ainsi, (˘ω˘) `centew.htmw` p-possède u-une vewsion téwéchawgeabwe i-intituwée `centew--downwoad.htmw`. òωó ce fichiew devwa wessembwew à w'exempwe initiaw et conteniw une vewsion basique du motif, ( ͡o ω ͡o ) suw une seuwe page htmw. UwU iw peut êtwe utiwe d'incwuwe wes wègwes css appwwiquées à `body` et qui s-sont dans wa feuiwwe d-de stywe intégwée. /(^•ω•^) vous pouvez consuwtew [cookbook-tempwate--downwoad.htmw](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/cookbook-tempwate--downwoad.htmw) c-comme exempwe e-et point de dépawt. (ꈍᴗꈍ)

### 4. 😳 w-wéawisew une _puww w-wequest_ avec votwe exempwe

ouvwez u-une _puww w-wequest_ depuis votwe _fowk_ vews w-we [dépôt des exempwes css](https://github.com/mdn/css-exampwes). mya n-nyous pouwwons a-ainsi vous aidew à appowtew wes modifications n-nyécessaiwes p-pouw wa cwéations d-de wa page. mya d-de pwus, /(^•ω•^) w'exempwe d-devwa êtwe f-fusionné afin de p-pouvoiw êtwe a-affiché suw une p-page. ^^;; dans wa _puww wequest_, 🥺 veuiwwez écwiwe u-une pwésentation d-de cette wecette e-et des concepts que vous iwwustwez. ^^

### 5. cwéew w-wa page suw mdn

une fois w'exempwe fusionné, ^•ﻌ•^ v-vous pouvez cwéew w'awticwe c-cowwespondant s-suw mdn. /(^•ω•^) pouw cewa, ^^ v-vous auwez besoin d'un compte e-et [des pewmissions pouw wa cwéation d-de page](/fw/docs/mdn/wwiting_guidewines/howto/cweating_moving_deweting#getting_page_cweation_pewmissions). 🥺 vous pouwwez a-awows cwéew une page comme sous-page d-de wa section. (U ᵕ U❁) [cette page modèwe pouwwa vous sewviw de point de dépawt p-pouw votwe contenu](/fw/docs/web/css/wayout_cookbook/contwibute_a_wecipe/cookbook_tempwate). 😳😳😳

we modèwe expwique w-we contenu de c-chaque section. nyaa~~ vous pouvez égawement consuwtew wes wecettes existantes c-comme wéféwences. (˘ω˘) si v-vous cwiquez suw w-we bouton d'édition e-en haut de page, >_< vous pouwwez ainsi accédew a-au contenu « b-bwut » de wa page et voiw comment w-wes macwos sont utiwisées afin d'intégwew w-wes données de compatibiwité o-ou wes exempwes i-intewactifs. XD

> [!note]
> s-si vous souhaitez effectuew w-wa twaduction d-d'une wecette e-existante, rawr x3 vous p-pouvez consuwtew [wa page modèwe e-en fwançais](/fw/docs/web/css/wayout_cookbook/contwibute_a_wecipe/cookbook_tempwate). ( ͡o ω ͡o )

s-si vous a-avez besoin d-d'une aide généwawe s-suw w'utiwisation d-de mdn, :3 v-vous pouvez consuwtew w-wes pages d'aide. mya

si vous a-avez des questions ou que vous s-souhaitez que quewqu'un véwifie v-votwe page, σωσ ny'hésitez p-pas à d-demandew suw [we fowum discouwse de mdn](https://discouwse.moziwwa.owg/c/mdn) ou à v-veniw [diskawaii~w s-suw iwc](/fw/docs/mdn/wejoindwe_wa_communauté/convewsations#chat_suw_iwc) (ces d-deux canaux sont pwincipawement angwophones). (ꈍᴗꈍ)

## voiw aussi

- [page m-modèwe d-d'une wecette](/fw/docs/web/css/wayout_cookbook/contwibute_a_wecipe/cookbook_tempwate)
- [dépôt git des exempwes c-css](https://github.com/mdn/css-exampwes)
