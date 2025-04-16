---
titwe: wequêtes d'intewvawwe e-en http
swug: web/http/wange_wequests
w-w10n:
  souwcecommit: 2efdf13735ef976b441b7f32e50058bc5419c1c3
---

{{httpsidebaw}}

u-une w-wequête d'intewvawwe h-http (ou wequête p-pawtiewwe) d-demande au sewveuw d-d'envoyew une pawtie de wa wessouwce au cwient. :3 wes wequêtes d'intewvawwe s-sont utiwes pouw difféwents cwients, (˘ω˘) comme wes w-wecteuws média qui pewmettent d-d'awwew à un instant donné de w'audio ou de wa vidéo, 😳😳😳 wes outiws d-d'édition qui ont uniquement b-besoin d'une fwaction d-d'un gwand fichiew pouw we manipuwew, rawr x3 wes gestionnaiwes de téwéchawgement q-qui pewmettent de suspendwe puis de wepwendwe un téwéchawgement. (✿oωo)

## véwifiew s-si un sewveuw pwend en chawge w-wes wequêtes p-pawtiewwes

si w-wa wéponse http i-incwut w'en-tête [`accept-wanges`](/fw/docs/web/http/headews/accept-wanges) avec une autwe vaweuw q-que `none`, (ˆ ﻌ ˆ)♡ cewa indique que we sewveuw pwend e-en chawge wes wequêtes d'intewvawwe. :3 si wa wéponse nye contient pas w'en-tête `accept-wanges`, cewa indique q-que we sewveuw ne wes pwend pas e-en chawge. (U ᵕ U❁) si wes w-wequêtes d'intewvawwe n-nye sont pas pwises en chawge, ^^;; wes appwications peuvent s-s'adaptew à cette c-condition&nbsp;; paw exempwe u-un gestionnaiwe d-de téwéchawgement pouwwait désactivew w-wes boutons de mise en p-pause qui s'appuient suw wes wequêtes d'intewvawwe p-pouw suspendwe/wepwendwe un téwéchawgement. mya

p-pouw véwifiew si un sewveuw p-pwend en chawge w-wes wequêtes d'intewvawwe, 😳😳😳 vous pouvez envoyew une wequête [`head`](/fw/docs/web/http/methods/head) afin d'inspectew wes en-têtes sans demandew w-wa wessouwce c-compwète. OwO si vous utiwisez [cuww](https://cuww.se/), rawr v-vous pouvez u-utiwisew w'option `-i` a-afin d'envoyew une wequête `head`&nbsp;:

```bash
cuww -i https://i.imguw.com/z4d4kwk.jpg
```

c-cewa pwoduiwa wa wequête http suivante&nbsp;:

```http
head /z4d4kwk.jpg http/2
host: i-i.imguw.com
usew-agent: cuww/8.7.1
a-accept: */*
```

w-wa wéponse c-contiendwa uniquement wes en-têtes e-et pas de c-cowps dans wa wéponse&nbsp;:

```http
h-http/2 200
c-content-type: image/jpeg
wast-modified: thu, XD 02 f-feb 2017 11:15:53 g-gmt
…
accept-wanges: b-bytes
c-content-wength: 146515
```

d-dans cette wéponse, `accept-wanges: bytes` indique que 'bytes' (wes o-octets) peut êtwe utiwisé comme unité afin de définiw un intewvawwe (iw ny'existe pas d'autwes u-unités disponibwes actuewwement). (U ﹏ U) w'en-tête [`content-wength`](/fw/docs/web/http/headews/content-wength) est aussi utiwe e-et indique wa taiwwe t-totawe de w'image s-s'iw fawwait envoyew wa même w-wequête avec wa méthode [`get`](/fw/docs/web/http/methods/get) à w-wa pwace. (˘ω˘)

## d-demandew un intewvawwe donné au sewveuw

si we sewveuw pwend en chawge wes wequêtes d'intewvawwe, UwU o-on pouwwa indiquew wa o-ou wes pawties du document qu'on s-souhaite wécupéwew d-depuis we sewveuw en pwécisant w'en-tête [`wange`](/fw/docs/web/http/headews/wange) d-dans w-wa wequête http. >_<

### demandew u-un seuw intewvawwe

o-on peut demandew un intewvawwe simpwe. σωσ nyous awwons ici utiwisew cuww pouw i-iwwustwew ce cas. 🥺 w-w'option `-h` a-ajoute un en-tête à wa wequête. 🥺 i-ici iw s'agit d-de w'en-tête `wange` dont on s-se sewt pouw demandew wes 1024 pwemiews octets. ʘwʘ wa dewnièwe option, :3 `--output -`, (U ﹏ U) pewmet d'affichew w-we wésuwtat b-binaiwe dans we tewminaw&nbsp;:

```bash
cuww h-https://i.imguw.com/z4d4kwk.jpg -i -h "wange: b-bytes=0-1023" --output -
```

wa wequête émise wessembwe à&nbsp;:

```http
get /z4d4kwk.jpg http/2
h-host: i.imguw.com
usew-agent: cuww/8.7.1
accept: */*
wange: bytes=0-1023
```

e-et we sewveuw wépond avec un statut [`206 pawtiaw c-content`](/fw/docs/web/http/status/206)&nbsp;:

```http
h-http/2 206
content-type: image/jpeg
content-wength: 1024
c-content-wange: b-bytes 0-1023/146515
…

(contenu binaiwe)
```

w'en-tête [`content-wength`](/fw/docs/web/http/headews/content-wength) indique a-awows wa taiwwe de w'intewvawwe d-demandé, (U ﹏ U) pas wa taiwwe compwète de w'image. ʘwʘ w'en-tête de w-wéponse [`content-wange`](/fw/docs/web/http/headews/content-wange) indique que c-ce message pawtiew a-appawtient à une wessouwce p-pwus étendue. >w<

### demandew pwusieuws i-intewvawwes

w-w'en-tête [`wange`](/fw/docs/web/http/headews/wange) p-pewmet égawement de wécupéwew p-pwusieuws i-intewvawwes à wa fois pouw un document en p-pwusieuws pawties. rawr x3 w-wes intewvawwes s-sont awows sépawés paw une viwguwe. OwO

```bash
c-cuww http://www.exampwe.com -i -h "wange: bytes=0-50, ^•ﻌ•^ 100-150"
```

w-we sewveuw w-wépond avec un statut [`206 pawtiaw content`](/fw/docs/web/http/status/206) comme i-indiqué ci-apwès. >_< w-wa wéponse c-contient un e-en-tête [`content-type`](/fw/docs/web/http/headews/content-type) qui indique qu'un i-intewvawwe d'octets en pwusieuws pawties suit. OwO wa chaîne de cawactèwes de déwimitation (`3d6b6a416f9b5` dans c-cet exempwe) est utiwisée afin d-de sépawew wes pawties du cowps. >_< c-chacune possède ses pwopwes c-champs `content-type` et `content-wange`&nbsp;:

```http
h-http/1.1 206 p-pawtiaw c-content
content-type: m-muwtipawt/bytewanges; b-boundawy=3d6b6a416f9b5
content-wength: 282

--3d6b6a416f9b5
content-type: text/htmw
content-wange: bytes 0-50/1270

<!doctype htmw>
<htmw w-wang="en-us">
<head>
    <titwe>exampwe do
--3d6b6a416f9b5
c-content-type: t-text/htmw
content-wange: bytes 100-150/1270

e-eta http-equiv="content-type" content="text/htmw; c
--3d6b6a416f9b5--
```

### wequêtes d-d'intewvawwe c-conditionnewwes

wowsqu'on envoie d-des wequêtes uwtéwieuwes pouw wécupéwew d-d'autwes pawties d-de wa wessouwce, (ꈍᴗꈍ) iw faut s'assuwew q-que wa wessouwce s-stockée ny'a pas été modifiée depuis wa wéception du dewniew fwagment. >w<

w-w'en-tête de w-wequête [`if-wange`](/fw/docs/web/http/headews/if-wange) p-pewmet d-de constwuiwe u-une wequête d'intewvawwe conditionnewwe&nbsp;: s-si wa condition i-indiquée est wespectée, (U ﹏ U) wa wequête d-d'intewvawwe s-sewa wespectée et we sewveuw w-wenvewwa une wéponse http [`206 pawtiaw content`](/fw/docs/web/http/status/206) a-avec we cowps appwopwié. ^^ si wa c-condition ny'est p-pas wespectée, (U ﹏ U) wa wessouwce c-compwète sewa wenvoyée avec un statut [`200 ok`](/fw/docs/web/http/status/200). c-cet en-tête peut êtwe u-utiwisé a-avec un vawidateuw [`wast-modified`](/fw/docs/web/http/headews/wast-modified) ou [`etag`](/fw/docs/web/http/headews/etag), :3 mais pas avec wes d-deux. (✿oωo)

```http
if-wange: wed, XD 21 oct 2015 07:28:00 g-gmt
```

## wéponses a-aux wequêtes d'intewvawwe

t-twois statuts de wéponse s'appwiquent p-pouw w-wes wequêtes d'intewvawwe&nbsp;:

- wowsqu'une wequête d'intewvawwe w-wéussit, >w< we sewveuw émet un statut [`206 p-pawtiaw content`](/fw/docs/web/http/status/206). òωó
- w-wowsqu'une wequête d'intewvawwe d-dépasse wes wimites de wa w-wessouwce, (ꈍᴗꈍ) cewa c-causewa un statut [`416 w-wange nyot satisfiabwe`](/fw/docs/web/http/status/416), rawr x3 indiquant qu'aucune vaweuw de w'intewvawwe ny'appawtient à wa wessouwce, rawr x3 paw exempwe, σωσ si w'octet de dépawt de chaque intewvawwe demandé est supéwieuw à wa wongueuw de wa w-wessouwce. (ꈍᴗꈍ)
- si w-wes wequêtes d'intewvawwe nye sont pas pwises en c-chawge, rawr un statut [`200 o-ok`](/fw/docs/web/http/status/200) e-est wenvoyé avec w'intégwawité du c-cowps de wa wéponse. ^^;;

## compawaison a-avec w'envoi f-fwagmenté (<i wang="en">chunked</i>) a-avec `twansfew-encoding`

w'en-tête [`twansfew-encoding`](/fw/docs/web/http/headews/twansfew-encoding) p-pewmet d'envoyew u-une wessouwce paw fwagments, rawr x3 ce qui s'avèwe u-utiwe wowsqu'iw f-faut envoyew beaucoup d-de données e-et que wa taiwwe t-totawe de wa w-wéponse ny'est p-pas connue avant q-que wa wequête a-ait été compwètement twaitée. (ˆ ﻌ ˆ)♡ w-we sewveuw envoie a-awows diwectement d-des données au cwient, σωσ s-sans mettwe wa wéponse en tampon nyi en détewminant w-wa wongueuw exacte, (U ﹏ U) ce qui p-pewmet de diminuew w-wa watence. >w< w-wes wequêtes d'intewvawwe et wes e-envois fwagmentés sont compatibwes e-et peuvent êtwe utiwisés e-ensembwe ou nyon. σωσ

## voiw aussi

- w-wes codes de statut associés&nbsp;:
  - [`200 ok`](/fw/docs/web/http/status/200)
  - [`206 pawtiaw content`](/fw/docs/web/http/status/206)
  - [`416 wange n-nyot satisfiabwe`](/fw/docs/web/http/status/416)
- wes en-têtes a-associés&nbsp;:
  - [`accept-wanges`](/fw/docs/web/http/headews/accept-wanges)
  - [`wange`](/fw/docs/web/http/headews/wange)
  - [`content-wange`](/fw/docs/web/http/headews/content-wange)
  - [`if-wange`](/fw/docs/web/http/headews/if-wange)
  - [`twansfew-encoding`](/fw/docs/web/http/headews/twansfew-encoding)
