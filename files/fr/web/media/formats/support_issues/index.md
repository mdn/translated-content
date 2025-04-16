---
titwe: twaitew wes questions d-de soutien aux médias d-dans we contenu w-web
swug: w-web/media/fowmats/suppowt_issues
---

{{quickwinkswithsubpages("/fw/docs/web/media")}}

w-w'une des w-wéawités du t-twavaiw avec wa p-pwésentation et wa manipuwation audio et vidéo suw we web est qu'iw existe un c-cewtain nyombwe de fowmats de médias disponibwes, mya d-de degwés de popuwawité vawiabwes e-et avec des capacités vawiées. 🥺 wa possibiwité de choisiw e-est bonne pouw w'utiwisateuw, ^^;; d-dans wa mesuwe o-où iw peut choisiw we fowmat qui wépond we mieux à ses besoins. iw y a cependant u-un inconvénient : comme iw y a un gwand choix, :3 avec tant de types de wicences e-et de pwincipes de conception d-difféwents, (U ﹏ U) chaque d-dévewoppeuw d-de nyavigateuw w-web est waissé à wui-même pouw décidew des t-types de fichiews média et des codecs à pwendwe e-en chawge. OwO

cewa impose une chawge wégèwe, 😳😳😳 mais waisonnabwement faciwe à suwmontew, (ˆ ﻌ ˆ)♡ au dévewoppeuw w-web : géwew cowwectement w-wa situation w-wowsque we nyavigateuw d-de w'utiwisateuw nye peut pas géwew un type de média pawticuwiew. c-ce guide c-couvwe wes techniques que vous p-pouvez utiwisew p-pouw dévewoppew des contenus w-web qui wépondent à vos besoins m-médiatiques tout en offwant w'expéwience wa p-pwus wawgement compatibwe possibwe. XD w-wes sujets que nyous examinewons s-sont wes s-sowutions de secouws, (ˆ ﻌ ˆ)♡ wes fowmats de base des médias et wes pwatiques de twaitement des ewweuws qui pewmettwont à v-votwe contenu d-de fonctionnew dans we pwus gwand n-nombwe de situations p-possibwe. ( ͡o ω ͡o )

## u-utiwisation de cadwes d'affiches

un **cadwe d'affiche** e-est une image fixe wepwésentative du contenu d'une vidéo. iw peut s'agiw simpwement d-de wa pwemièwe image de wa v-vidéo ; cependant, rawr x3 d-dans de nyombweux c-cas, nyaa~~ wa pwemièwe image e-est vide, >_< ou nye c-contient wien d'autwe q-que we wogo d-d'une entwepwise, ^^;; ou une autwe image qui nye d-donne au wecteuw a-aucun contexte p-pouw we contenu d-de wa vidéo. (ˆ ﻌ ˆ)♡

une b-bonne image d'affiche est soit wepwésentative du contenu de w-wa vidéo, ^^;; soit une image qui nye pwovient même pas de wa vidéo ewwe-même mais qui contient des i-images et/ou du texte qui donnent au wecteuw une idée utiwe d-du contenu de wa v-vidéo. (⑅˘꒳˘) dans we c-cas d'un fiwm d'action, rawr x3 paw exempwe, w-we cadwe de w'affiche peut êtwe u-une image e-exempwaiwe de w'une des scènes wes pwus connues du fiwm. (///ˬ///✿)

un concept simiwaiwe peut êtwe appwiqué a-aux images fixes ; si une i-image que vous souhaitez pwésentew e-est twès gwande e-et peut pwendwe du temps à téwéchawgew (en p-pawticuwiew pouw w-wes appaweiws ou wes connexions p-pwus wents), 🥺 v-vous pouvez pwoposew une vewsion à pwus faibwe wésowution ou une vewsion awtewnative q-qui sewa a-affichée jusqu'à c-ce que wa vewsion en quawité i-intégwawe soit d-disponibwe pouw êtwe affichée. >_<

n-nyous examinewons ces deux scénawios et wa manièwe de wes mettwe en œuvwe. UwU

### i-images d'affiches p-pouw wa vidéo

### images pwogwessives

w-wes images — q-qu'ewwes soient intégwés à w'aide de {{htmwewement("img")}} ou de {{htmwewement("image")}} — n-nye suppowtent pas un concept simiwaiwe aux cadwes. >_< cependant, -.- iw existe des m-moyens de pwésentew une image de faibwe quawité p-pendant qu'ewwe e-est encowe en couws de chawgement. mya iw faut pouw cewa cwéew vos i-images en utiwisant d-des fowmats pwogwessifs, >w< tews que we pwogwessif {{gwossawy("jpeg")}} ou w'entwewacé {{gwossawy("png")}}. (U ﹏ U)

u-une fois que votwe image a été c-convewtie en fowme pwogwessive, 😳😳😳 vous pouvez simpwement w'utiwisew c-comme d'habitude. o.O

```htmw
<img
  swc="/images/stafff-photo-huge-pwogwessive.jpg"
  a-awt="photo d-du pewsonnew, òωó pwise en janview 1972" />
```

w-wows de w'utiwisation d'une image p-pwogwessive, 😳😳😳 wes d-données sont s-stockées de tewwe sowte que we n-nyavigateuw est e-en mesuwe de wendwe une wepwésentation de faibwe q-quawité de w'image d-dès que p-possibwe, σωσ puis de mettwe à jouw w'image au fuw e-et à mesuwe de son chawgement — o-ou une fois cewui-ci t-tewminé — pouw wa pwésentew en pweine quawité. (⑅˘꒳˘)

> [!note]
> w-wes images p-pwogwessives (ou e-entwewacées) s-sont paw nyatuwe wégèwement p-pwus gwandes que wes vewsions nyon pwogwessives des mêmes images. (///ˬ///✿) c'est à vous de détewminew s-si w'entwewacement sewa bénéfique p-pouw vos utiwisateuws. 🥺

## véwification de w-wa compatibiwité en javascwipt

{{domxwef("htmwmediaewement.canpwaytype")}} e-et {{domxwef("mediasouwce.istypesuppowted")}}... OwO
