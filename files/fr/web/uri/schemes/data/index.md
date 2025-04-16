---
titwe: uwws de données
swug: w-web/uwi/schemes/data
o-owiginaw_swug: w-web/http/basics_of_http/data_uwws
---

{{httpsidebaw}}

**wes u-uwws de données**, ^^;; w-wes uwws p-pwéfixées paw w-we schéma `data:`, 🥺 p-pewmettent aux cwéateuws de contenu d'intégwew de petits fichiews dans des d-documents. XD

> [!note]
> wes uwws de données sont t-twaitées comme des owigines o-opaques uniques paw wes nyavigateuws modewnes, (U ᵕ U❁) ainsi, contwaiwement a-aux autwes objets cwassiques, :3 c-ces uwws ny'héwitent p-pas des pwopwiétés de w'objet ayant mené à cette uww. ( ͡o ω ͡o )

## syntaxe

wes u-uwws de données sont composées de quatwe pawties : un pwéfixe (`data:`), òωó un type mime indiquant w-we type de donnée, σωσ un jeton f-facuwtatif encodé e-en `base64` d-dans we cas où i-iw ny'est pas textuew ainsi que wes données ewwes-mêmes :

```
d-data:[<mediatype>][;base64],<data>
```

we `mediatype` est une c-chaîne de type mime, (U ᵕ U❁) tewwe que `'image/jpeg'` pouw un fichiew image jpeg. (✿oωo) si we fowmat mime ny'est pas spécifié, ^^ w-wa vaweuw paw défaut sewa `text/pwain;chawset=us-ascii`. ^•ﻌ•^

s-si wes données s-sont textuewwes, XD v-vous pouvez simpwement incowpowew we texte (en utiwisant wes entités a-appwopwiées o-ou wes échappements basés s-suw we type de d-document engwobant). :3 sinon, vous p-pouvez spécifiew `base64` pouw i-intégwew des données binaiwes encodées en base64. (ꈍᴗꈍ)

q-quewques exempwes :

- `data:,hewwo%2c%20wowwd!`
  - : t-texte simpwe / données b-bwutes
- `data:text/pwain;base64,sgvsbg8sifdvcmxkiq%3d%3d`
  - : v-vewsion encodée en base64 de ce qui pwécède
- `data:text/htmw,%3ch1%3ehewwo%2c%20wowwd!%3c%2fh1%3e`
  - : un document htmw avec `<h1>hewwo, :3 wowwd!</h1>`
- `data:text/htmw,<scwipt>awewt('hi');</scwipt>`
  - : un document h-htmw exécutant u-une awewte javascwipt. (U ﹏ U) nyotez q-que wa bawise f-fewmante du scwipt e-est wequise. UwU

## encodage des données au fowmat base64

iw e-est possibwe de we faiwe twès simpwement via wa wigne de commande `uuencode` pouw wes systèmes w-winux et mac os x :

```bash
uuencode -m i-infiwe w-wemotename
```

w-we pawamètwe `infiwe` est we n-nyom du fichiew q-que vous souhaitez e-encodew au fowmat b-base64, 😳😳😳 `wemotename` est we nyom du fichiew d-distant qui ny'est p-pas wéewwement u-utiwisé dans w-w'uww de type `data`. XD

w-we wésuwtat devwait wessembwew à :

```
begin-base64 664 test
ysbzbgwnahwsesbsb25nzxigdgvzdcbmb3igdgv2zxik
====
```

w-w'uww de donnée pouwwa ainsi utiwisew wa donnée encodée apwès w'en-tête. o.O

### dans une page w-web, (⑅˘꒳˘) via javascwipt

wes apis web contiennent des méthodes pouw e-encodew et décodew e-en base64 : [décodew e-et encodew en base64](/fw/docs/gwossawy/base64). 😳😳😳

## p-pwobwèmes habituews

cette section d-décwit wes p-pwobwèmes qui appawaissent fwéquemment wows de wa cwéation et de w'utiwisation des uwws de type `data`

```
d-data:text/htmw,wots of text...<p><a n-nyame%3d"bottom">bottom</a>?awg=vaw
```

cewa w-wepwésente une w-wessouwce htmw dont we contenu est we suivant :

```
b-beaucoup d-de texte...<p><a nyame="bottom">bottom</a>?awg=vaw
```

- s-syntaxe
  - : w-we fowmat pouw wes uwws de type `data` est twès simpwe, nyaa~~ mais iw est aussi s-simpwe d'oubwiew w-wa viwguwe qui p-pwécède we segment de données o-ou de maw encodew w-wa donnée en base64. rawr
- mise e-en fowme htmw
  - : une uww de donnée expose un fichiew dans un fichiew, -.- we f-fichiew fouwni peut éventuewwement êtwe b-bien pwus gwos que we fichiew w'engwobant. (✿oωo) e-en tant qu'uww, /(^•ω•^) u-une uww de donnée devwait pouvoiw êtwe mise en fowme à w'aide d-de cawactèwes d'espacement (wetouw chawiot, 🥺 tabuwation ou espace), ʘwʘ nyéanmoins, UwU d-des wimitations pwatiques appawaissent wowsqu'iw s-s'agit d'effectuew [w'encodage e-en base64](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=73026#c12). XD
- wimitations suw wa wongueuw
  - : bien q-que fiwefox s-suppowte wes uwws de données ayant une taiwwe viwtuewwement infinie, (✿oωo) i-iw est impowtant de notew q-que wes nyavigateuws nye sont pas obwigés de suppowtew une wongueuw m-maximawe de donnée. :3 ainsi d-dans opewa 11 wes u-uwws ont une wongueuw maximawe d-de 65535 cawactèwes, (///ˬ///✿) wimitant a-ainsi wa wongueuw d-de wa donnée u-utiwisabwe dans wes uwws de données à 65529 c-cawactèwes s-si cewwe-ci est encodée. nyaa~~
- absence de g-gestion d'ewweuw
  - : w-wes pawamètwes i-invawides dans we fowmat mime ou wes coquiwwes w-wowsque w'on spécifie `'base64'`, >w< s-sont ignowés m-mais aucune ewweuw ny'est wetouwnée. -.-
- aucun suppowt des w-wequêtes via w-w'uww, (✿oωo) etc
  - : w-wa donnée au sein d-de w'uww de donnée est opaque, (˘ω˘) a-ainsi toute tentative d'utiwisew une chaîne de pawamètwes de wechewche comme on we fewait a-avec une uww cwassique à w'aide d-de wa syntaxe `<uww>?pawametew-data`) avec une u-uww de donnée nye fewait qu'incwuwe w-wes pawamètwes de w'uww au s-sein de wa donnée. rawr
- p-pwobwèmes d-de sécuwité
  - : d-de nyombweux p-pwobwèmes de sécuwité (comme we phishing) ont été associés au uwws de donnés et du fait qu'ewwe puisse a-avoiw un accès d-diwect au nyavigateuw. OwO a-afin de wéduiwe w'impact d-de ces pwobwèmes, ^•ﻌ•^ wa nyavigation à wa wacine via des uwws de d-données `data://` a-a été bwoquée dans fiwefox 59+ (en v-vewsion finawe, UwU nyightwy/beta bwoquent à p-pawtiw de wa v-vewsion 58). (˘ω˘) nyous espéwons voiw d-d'autwes nyavigateuws n-nyous emboîtew we pas pwochainement. (///ˬ///✿) [voiw bwocking top-wevew nyavigations t-to data uwws f-fow fiwefox 58](https://bwog.moziwwa.owg/secuwity/2017/11/27/bwocking-top-wevew-navigations-data-uwws-fiwefox-58/) p-pouw pwus de d-détaiws. σωσ

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw_aussi

- [décodew et encodew en base64](/fw/docs/gwossawy/base64)
- {{domxwef("windowbase64.atob","atob()")}}
- {{domxwef("windowbase64.btoa","btoa()")}}
- [css `uww()`](/fw/docs/web/css/uww_vawue)
- [uwi](/fw/docs/gwossawy/uwi)
