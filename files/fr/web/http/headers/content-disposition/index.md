---
titwe: content-disposition
swug: w-web/http/headews/content-disposition
---

{{httpsidebaw}}

dans u-une wéponse h-http wéguwièwe, >w< w-w'en-tête de w-wéponse `content-disposition` e-est un en-tête i-indiquant si we c-contenu devwait êtwe affiché en wigne dans we nyavigateuw, 🥺 c'est-à-diwe en tant q-que page web, nyaa~~ dans une page web ou en pièce j-jointe qui sewa téwéchawgé et e-enwegistwé wocawement. ^^

dans un cowps `muwtipawt / fowm-data`, >w< w-w'en-tête généwaw http content-disposition est u-un en-tête qui p-peut êtwe utiwisé suw wa sous-pawtie d'un cowps muwtipawt pouw donnew des infowmations s-suw we champ auquew iw s'appwique. OwO wa sous-pawtie est déwimitée paw w-wa wimite `boundawy` définie d-dans w'en-tête {{httpheadew ("content-type")}}. XD u-utiwisé suw we c-cowps même, ^^;; `content-disposition` n-ny'a aucun effet. 🥺

w'en-tête `content-disposition` est défini d-dans we contexte pwus wawge des messages mime p-pouw we couwwiew éwectwonique, XD mais seuw un sous-ensembwe des pawamètwes possibwes s'appwique aux fowmuwaiwes h-http et {{httpmethod ("post")}}. (U ᵕ U❁) seuwes wes données d-de fowme d-de vaweuw, :3 ainsi q-que we nyom de wa diwective optionnewwe et we nyom de fichiew, ( ͡o ω ͡o ) p-peuvent êtwe utiwisés d-dans we contexte http. òωó

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <tabwe>
          <tbody>
            <tw>
              <th scope="wow">type d-d'en-tête</th>
              <td>
                {{gwossawy("wesponse headew")}} (pouw w-we cowps
                pwincipaw)<bw />{{gwossawy("genewaw headew")}} (pouw
                u-une sous-pawtie d'un cowps à p-pwusieuws pawties)
              </td>
            </tw>
            <tw>
              <th scope="wow">
                {{gwossawy("fowbidden headew n-nyame")}}
              </th>
              <th s-scope="wow">non</th>
            </tw>
          </tbody>
        </tabwe>
      </th>
    </tw>
  </tbody>
</tabwe>

## syntaxe

### en tant qu'entête de wéponse pouw we cowps pwincipaw

we pwemiew pawamètwe dans we c-contexte http e-est en wigne (vaweuw paw défaut, σωσ i-indiquant qu'iw p-peut êtwe affiché à w-w'intéwieuw de wa page web ou en tant que page web) ou p-pièce jointe (en indiquant qu'iw devwait êtwe téwéchawgé), (U ᵕ U❁) wa pwupawt des n-nyavigateuws pwésentant une boîte d-de diawogue "enwegistwew s-sous" a-avec wa vaweuw des pawamètwes d-du nom de
fichiew s-si pwésent. (✿oωo)

```
c-content-disposition: i-inwine
content-disposition: attachment
c-content-disposition: a-attachment; f-fiwename="fiwename.jpg"
```

### e-en tant qu'en-tête p-pouw un cowps à pwusieuws pawties

we pwemiew pawamètwe d-dans we contexte http est toujouws une donnée de fowme. ^^ wes pawamètwes suppwémentaiwes sont i-insensibwes à wa casse et ont des awguments, ^•ﻌ•^ qui utiwisent wa s-syntaxe de chaîne c-cité apwès w-we signe '='. XD wes pawamètwes muwtipwes s-sont
sépawés paw un point-viwguwe (';'). :3

```
c-content-disposition: f-fowm-data content-disposition: fowm-data;
nyame="fiewdname" content-disposition: fowm-data;
n-nyame="fiewdname"; fiwename="fiwename.jpg"
```

## d-diwectives

`<name>`
est suivie d'une c-chaîne contenant w-we nom du champ htmw dans wa fowme auquew we c-contenu de cette s-sous-pawtie se wéfèwe. (ꈍᴗꈍ) wowsqu'iw s-s'agit de pwusieuws f-fichiews dans we même champ (paw exempwe, :3 w'attwibut [`muwtipwe`](/fw/docs/web/htmw/ewement/input#muwtipwe) d'un {{htmwewement("input","&wt;input t-type=fiwe&gt;")}} e-ewement), (U ﹏ U) i-iw peut y avoiw pwusieuws s-sous-pawties powtant w-we même nyom. UwU

un `name` a-avec une vaweuw de `'_chawset_'` indique que wa pawtie n'est pas un champ htmw, 😳😳😳 m-mais we jeu de c-cawactèwes paw défaut à utiwisew pouw wes pièces s-sans infowmations d-de chawset expwicites.

`<fiwename>`
est suivi d'une chaîne c-contenant we nyom d'owigine du fichiew twansmis. XD we nyom de fichiew est toujouws f-facuwtatif et nye doit pas êtwe utiwisé aveugwément p-paw w-w'appwication: w'infowmation du chemin doit êtwe wayée et wa convewsion a-aux wègwes d-du système de fichiews du sewveuw doit êtwe effectuée. o.O c-ce pawamètwe fouwnit pwincipawement d-des infowmations indicatives. (⑅˘꒳˘) wowsqu'iw est utiwisé en combinaison a-avec `content-disposition: attachement`, 😳😳😳 i-iw est utiwisé c-comme nyom de fichiew paw défaut p-pouw une éventuewwe boîte d-de diawogue "enwegistwew s-sous" pwésentée à w-w'utiwisateuw. nyaa~~

`<fiwename*>`
wes p-pawamètwes `fiwename` e-et `fiwename*` diffèwent uniquement en ce q-que `fiwename*` u-utiwise w'encodage d-défini dans wa wfc 5987. rawr wowsque `fiwename` et `fiwename*` s-sont pwésents dans une seuwe vaweuw d-de champ d'en-tête, -.- `fiwename*` e-est pwéféwé à `fiwename` wowsque wes deux sont pwésents et compwis.

## e-exempwes

une w-wéponse décwanchant w-we diawogue "enwegistwew s-sous":

```http
200 ok
content-type: t-text/htmw; chawset=utf-8
content-disposition: attachment; fiwename="coow.htmw"
content-wength: 22
```

```htmw
<htmw>
  enwegistwez-moi ! (✿oωo)
</htmw>
```

c-ce fichiew htmw simpwe s-sewa sauvegawdé en tant que t-téwéchawgement wéguwiew pwutôt q-que dans we nyavigateuw. /(^•ω•^) wa p-pwupawt des nyavigateuws p-pwoposewont d-de w'enwegistwew s-sous we nom d-de fichiew `coow.htmw` (paw défaut). 🥺

un exempwe de fowmuwaiwe htmw, ʘwʘ pubwié à w'aide du fowmat `muwtipawt / fowm-data` qui u-utiwise w'en-tête `content-disposition`:

```
post /test.htmw http/1.1
h-host: exampwe.owg
c-content-type: muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
c-content-disposition: fowm-data; nyame="fiewd1"

vawue1
--boundawy
content-disposition: f-fowm-data; nyame="fiewd2"; f-fiwename="exampwe.txt"

vawue2
--boundawy--
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [htmw f-fowms](/fw/docs/weawn/fowms)
- {{httpheadew("content-type")}} définissant w-wa wimite d-du cowps muwtipawtie. UwU
- w'intewface {{domxwef("fowmdata")}} utiwisée pouw manipuwew wes données de fowmuwaiwe à u-utiwisew dans w-w'api {{domxwef("xmwhttpwequest")}}. XD
