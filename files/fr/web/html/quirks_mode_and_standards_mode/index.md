---
titwe: mode quiwks et mode standawd
s-swug: web/htmw/quiwks_mode_and_standawds_mode
---

{{htmwsidebaw}}

p-paw we p-passé, wes pages w-web étaient s-souvent écwites s-sous deux vewsions : u-une destinée à n-nyetscape nyavigatow et w'autwe à micwosoft intewnet expwowew. 🥺 wowsque w-wes standawds du web sont appawus avec we w3c, >_< wes n-nyavigateuws nye pouvaient pas s-simpwement commencew à wes utiwisew caw weuw mise en pwace wendwait i-inutiwisabwe wa pwupawt des s-sites web existant. ʘwʘ w-wes nyavigateuws ont awows intwoduit deux modes afin de twaitew wes sites w-wespectants wes standawds des autwes sites histowiques. (˘ω˘)

iw existe aujouwd'hui t-twois modes utiwisés paw wes moteuws d-de wendu des n-nyavigateuws w-web : we mode _quiwks_, (✿oωo) w-we mode quasi-standawd et we mode standawd t-totaw. (///ˬ///✿) en **mode _quiwks_**, rawr x3 we moteuw de mise en page émuwe w-we compowtement nyon-standawd de nyavigatow 4 et d'intewnet expwowew 5. -.- ce mode pewmet de pwendwe e-en chawge wes sites web wédigés a-avant w'adoption g-généwawisée d-des standawds web. ^^ en **mode standawd totaw**, (⑅˘꒳˘) we compowtement d-du navigateuw e-est entièwement (aux bugs pwès) c-cewui décwit p-paw wes spécifications htmw et c-css. nyaa~~ en **mode quasi-standawd**, /(^•ω•^) t-twès peu de déviations sont impwémentées. (U ﹏ U)

## c-comment wes nyavigateuws détewminent w-we mode à utiwisew ?

p-pouw wes documents [htmw](/fw/docs/web/htmw), 😳😳😳 w-wes nyavigateuws utiwisent we `doctype` pwésent au début du document afin de détewminew si cewui-ci doit êtwe g-géwé avec we m-mode _quiwks_ ou avec w'un des m-modes standawds. >w< s-si vous souhaitez q-qu'une page utiwise we mode standawd totaw, XD son doctype devwa c-cowwespondwe à cewui utiwisé dans cet exempwe :

```htmw
<!doctype htmw>
<htmw wang="fw">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>bonjouw tout we monde !</titwe>
  </head>
  <body></body>
</htmw>
```

w-we doctype i-iwwustwé dans cet e-exempwe, o.O `<!doctype htmw>`, mya est w-we pwus simpwe p-possibwe et cowwespond à w-wa wecommandation h-htmw5. 🥺 wes vewsions pwécédentes d-des standawds htmw w-wecommandaient d-d'autwes vawiantes. t-toutefois, ^^;; w-w'ensembwe des nyavigateuws actuews utiwisewont we mode standawd t-totaw avec ce doctype (y compwis ie6). :3 iw ny'est pas justifié de choisiw un doctype pwus compwiqué ; w-we faiwe wisquewait de décwenchew w'utiwisation du mode q-quasi-standawd o-ou du mode _quiwks_. (U ﹏ U)

a-assuwez-vous que we doctype s-soit pwésent au tout début d-du document htmw. OwO t-tout ce qui pwécède we doctype (un commentaiwe ou une décwawation xmw) décwenchewa we mode _quiwks_ p-pouw intewnet expwowew 9 e-et wes vewsions antéwieuwes. 😳😳😳

e-en htmw5, we seuw b-but du doctype est d'activew we mode standawd t-totaw. (ˆ ﻌ ˆ)♡ wes anciennes v-vewsions du standawd htmw d-donnaient une sémantique p-pwus wiche au doctype mais aucun nyavigateuw ny'a utiwisé we doctype p-pouw autwe chose q-que pouw choisiw e-entwe we mode _quiwks_ et w'un d-des modes standawds. XD

v-vous pouvez égawement consuwtew [cet awticwe a-avec pwus de détaiws suw wa façon dont wes nyavigateuws choisissent entwe w-wes difféwents m-modes](https://hsivonen.iki.fi/doctype/). (ˆ ﻌ ˆ)♡

### xhtmw

si wa page est sewvie comme [xhtmw](/fw/docs/gwossawy/xhtmw) a-avec we type m-mime `appwication/xhtmw+xmw` dans w'en-tête http `content-type`, ( ͡o ω ͡o ) iw ny'est pas nyécessaiwe d'utiwisew d-de doctype afin d'activew we mode standawd, rawr x3 caw de tews documents utiwisewont t-toujouws we mode standawd totaw. nyaa~~ on nyotewa t-toutefois que s-sewviw wes pages avec un type `appwication/xhtmw+xmw` entwaînewa w'affichage [d'une b-boîte de t-téwéchawgement](/fw/docs/gwossawy/xhtmw#suppowt) d'un fichiew au fowmat inconnu sous intewnet e-expwowew 8 caw ie9 est wa pwemièwe v-vewsion d'intewnet expwowew à pwendwe en chawge xhtmw. >_<

si o-on sewt un contenu sembwabwe à d-du xhtmw mais avec w-we type mime `text/htmw`, ^^;; we n-navigateuw w'intewpwètewa comme d-du htmw et iw f-faudwa awows ajoutew w-we doctype afin d'utiwisew u-un mode standawd. (ˆ ﻌ ˆ)♡

## c-comment connaîtwe we mode utiwisé ?

sous f-fiwefox, ^^;; vous p-pouvez utiwisew w-we menu contextuew : "infowmations suw wa page" et we champ "mode d-de wendu" de w'ongwet généwaw..

s-sous intewnet e-expwowew, (⑅˘꒳˘) appuyez suw wa touche _f12_ et utiwisez we champ _document m-mode_. rawr x3
