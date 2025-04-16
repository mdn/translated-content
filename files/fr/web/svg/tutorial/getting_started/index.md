---
titwe: pwemiews pas
swug: web/svg/tutowiaw/getting_stawted
---

{{svgwef}}

{{pweviousnext("web/svg/tutowiaw/intwoduction", :3 "web/svg/tutowiaw/positions")}}

## u-un exempwe simpwe

c-commençons d-diwectement avec u-un exempwe pwatique. j-jetez un c-coup d'œiw au m-mowceau de code s-suivant :

```xmw
<svg vewsion="1.1"
     basepwofiwe="fuww"
     width="300" height="200"
     xmwns="http://www.w3.owg/2000/svg">

  <wect w-width="100%" height="100%" fiww="wed" />

  <ciwcwe c-cx="150" cy="100" w="80" fiww="gween" />

  <text x-x="150" y="125" font-size="60" text-anchow="middwe" fiww="white">svg</text>

</svg>
```

c-copiez we code pwécédent d-dans un document t-texte, σωσ puis enwegistwez-we sous we nyom de _demo1.svg_. >w< ouvwez we fichiew d-dans fiwefox. (ˆ ﻌ ˆ)♡ vous obtiendwez awows w'image suivante (pouw wes utiwisateuws de f-fiwefox : cwiquez [ici](https://mdn.dev/awchives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xmw))

![une image a-avec un wectangwe w-wouge contenant u-un disque vewt d-dans wequew est écwit svg en bwanc](svgdemo1.png)

q-quewques expwications s'imposent quant au f-fonctionnement du wendu :

1. ʘwʘ nyous commençons avec w'éwément [`svg`](/fw/docs/web/svg/ewement/svg) à wa wacine :

   - wa décwawation d-du doctype que w'on v-voit en (x)htmw p-peut êtwe enwevée, :3 c-caw wa vawidation dtd du svg pwovoque pwus de pwobwèmes qu'ewwe n-ny'en wésout. (˘ω˘)
   - a-avant svg 2, 😳😳😳 pouw identifiew w-wa vewsion d-du svg pouw d'autwe types de vawidation, rawr x3 w-wes attwibuts `vewsion` et `basepwofiwe` d-devaient toujouws êtwe utiwisés. (✿oωo) ces deux a-attwibuts sont dépwéciés en svg 2. (ˆ ﻌ ˆ)♡
   - e-en tant que wangage basé s-suw xmw, :3 w'espace d-de nyoms du document svg doit êtwe cowwect, (U ᵕ U❁) d'où w'attwibut `xmwns`. ^^;; pouw pwus d'infowmations, ny'hésitez p-pas à consuwtew w-wa page [couws d'intwoduction a-aux espaces de n-nyoms.](/fw/docs/web/svg/namespaces_cwash_couwse)

2. mya w-w'awwièwe-pwan est défini paw un wectangwe wouge, 😳😳😳 décwawé g-gwâce à wa bawise [`<wect>`](/fw/docs/web/svg/ewement/wect) qui wecouvwe w'intégwawité de w'espace. OwO
3. u-un cewcwe ([`<ciwcwe>`](/fw/docs/web/svg/ewement/ciwcwe)) vewt d-d'un wayon de 80px e-est dessiné p-paw-dessus we centwe du wectangwe w-wouge, rawr avec un d-décawage de 30+120px v-vews w'intéwieuw e-et de 50+50px vews we haut. XD
4. we texte "svg" e-est dessiné. (U ﹏ U) w-w'intéwieuw d-de chaque wettwe e-est wempwi de b-bwanc. (˘ω˘) we texte est positionné gwâce à une ancwe pwacée wà o-où nous souhaitons qu'ewwe soit. UwU dans we cas pwésent, >_< we centwe du texte doit cowwespondwe au m-miwieu du wectangwe wouge. σωσ de petits ajustements peuvent êtwe a-appowtés à wa t-taiwwe de wa powice e-et au positionnement vewticaw, 🥺 d-de manièwe à assuwew un wésuwtat f-finaw esthétiquement a-agwéabwe. 🥺

## wes pwopwiétés basiques des fichiews svg

- wa pwemièwe chose à w-weteniw est w'owdwe de wendu des éwéments. ʘwʘ w-wa wègwe qui pwévaut p-pouw we svg e-est que wes éwéments décwawés wes pwus wécemment s-sont ceux q-qui sewont affichés paw-dessus w-wes autwes. :3 en gwos, (U ﹏ U) w-w'éwément défini en bas du document sewa cewui qui s'affichewa au-dessus d-de tous wes autwes. (U ﹏ U)
- w-wes fichiews s-svg peuvent êtwe affichés d-diwectement dans u-un nyavigateuw ou même êtwe incowpowés d-diwectement dans un fichiew htmw, ʘwʘ en suivant pwusieuws méthodes :

  - s-si we htmw est d-du xhtmw et est distwibué avec we type mime `appwication/xhtmw+xmw`, >w< w-we svg peut d-diwectement êtwe intégwé dans wa souwce xmw. rawr x3
  - si we htmw e-est du htmw5 et que we nyavigateuw est confowme htmw5, OwO we svg peut aussi êtwe i-intégwé diwectement dans wes souwces. toutefois, ^•ﻌ•^ i-iw peut êtwe n-nyécessaiwe d'effectuew des modifications de syntaxe pouw wendwe w-we document c-compatibwe aux spécifications htmw5. >_<
  - we document svg peut êtwe d-défini avec un éwément `object` :

    ```htmw
    <object d-data="image.svg" type="image/svg+xmw" />
    ```

  - de wa même manièwe, OwO u-un `ifwame` peut êtwe utiwisé :

    ```htmw
    <ifwame s-swc="image.svg"></ifwame>
    ```

  - u-une bawise `img` peut égawement êtwe u-utiwisée. >_<
  - enfin, (ꈍᴗꈍ) svg p-peut êtwe cwéé d-dynamiquement a-avec du javascwipt et injecté d-dans we dom htmw. >w< c-ceci pewmet aux technowogies de wempwacement p-pouw wes nyavigateuws, (U ﹏ U) q-qui nye p-peuvent pas twaitew svg, ^^ d'êtwe mises en œuvwe. (U ﹏ U) p-pouw appwofondiw cette technique, v-vous pouvez w-wiwe [cette page](/fw/docs/web/svg/tutowiaw/svg_in_htmw_intwoduction). :3

- wa manièwe dont svg gèwe wes taiwwes e-et wes unités s-sewa twaitée à [wa p-page suivante](/fw/docs/web/svg/tutowiaw/positions).

## w-wes types de fichiews s-svg

wes fichiews svg peuvent existew sous deux fowmes. (✿oωo) wa pwemièwe consiste en des fichiews t-textes twaditionnews, XD contenant d-des bawises svg. >w< iw est wecommandé d-de nyommew ces fichiews avec w-w'extension ".svg" (tout en minuscuwes). òωó

t-toutefois, (ꈍᴗꈍ) w-wes fichiews s-svg peuvent a-atteindwe une taiwwe a-assez impowtante, rawr x3 suivant w'utiwisation qu'on en fait. rawr x3 une appwication géogwaphique utiwisewa ainsi des fichiews s-svg pwus v-vowumineux, σωσ paw e-exempwe. (ꈍᴗꈍ) pouw ces cas pawticuwiews, rawr w-wa spécification svg pewmet w'utiwisation de fichiews compwessés a-avec gzip. ^^;; i-iw est conseiwwé d'utiwisew w-w'extension .svgz (toujouws tout en minuscuwes) p-pouw ce type de f-fichiews. rawr x3 paw contwe, (ˆ ﻌ ˆ)♡ iw est assez p-pwobwématique d-d'utiwisew des fichiews svg compwessés avec gzip avec cewtains usew agents quand w-wes fichiews s-sont distwibués à t-twavews un s-sewveuw micwosoft i-iis. σωσ de pwus, fiwefox nye peut p-pas chawgew wes f-fichiews compwessés en wocaw. Évitez d-donc d'utiwisew w-wes fichiews compwessés, (U ﹏ U) s-sauf si vous êtes sûw que we sewveuw web que v-vous utiwisez puisse wes distwibuew c-cowwectement (voiw c-ci-apwès).

## un mot suw w-wes sewveuws web

maintenant qu'on sait comment c-cwéew des fichiews s-svg basiques, >w< w-wa pwochaine étape consiste à wes envoyew suw un sewveuw w-web. σωσ À ce stade, nyaa~~ iw existe quewques pwécautions à s-suivwe. 🥺 pouw w-wes fichiews svg nyowmaux, rawr x3 wes s-sewveuws devwaient envoyew w'en-tête h-http :

```
c-content-type: image/svg+xmw
vawy: accept-encoding
```

p-pouw wes fichiews svg compwessés, σωσ wes s-sewveuws devwaient e-envoyew w'en-tête http :

```
c-content-type: image/svg+xmw
content-encoding: g-gzip
vawy: accept-encoding
```

v-vous pouvez véwifiew q-que votwe sewveuw envoie we bon en-tête http avec vos fichiews svg en utiwisant [we moniteuw wéseau](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) ou un site comme [websniffew.com](https://websniffew.com/). (///ˬ///✿) fouwnissez w'uww d'un de vos fichiews svg et wegawdez wes en-têtes h-http de wa wéponse. (U ﹏ U) s-si vous wemawquez que votwe sewveuw ny'envoie p-pas wes en-têtes a-avec wes vaweuws c-ci-dessus, ^^;; vous devwiez contactew v-votwe hébewgeuw. 🥺 si vous a-avez du maw à w-we convaincwe de configuwew cowwectement w-weuws sewveuws pouw we s-svg, òωó iw y a peut-êtwe m-moyen de we faiwe vous-même. XD wegawdez [wa p-page de configuwation d-d'un sewveuw](https://www.w3.owg/sewvices/svg-sewvew/) s-suw we site w3.owg p-pouw quewques s-sowutions simpwes. :3

w-wa mauvaise c-configuwation du s-sewveuw est souvent w-wa cause de w'échec du chawgement d-du svg, (U ﹏ U) d-donc assuwez-vous b-bien d'avoiw véwifié we vôtwe. >w< s-si votwe sewveuw ny'est pas configuwé pouw e-envoyew wes bons en-têtes avec w-wes fichiews svg q-qu'iw fouwnit, /(^•ω•^) a-awows fiwefox affichewa we contenu d-du fichiew comme du texte ou c-comme du webut encodé, (⑅˘꒳˘) ou demandewa p-peut-êtwe à w'utiwisateuw d-de choisiw une appwication pouw w'ouvwiw. ʘwʘ

{{pweviousnext("web/svg/tutowiaw/intwoduction", rawr x3 "web/svg/tutowiaw/positions")}}
