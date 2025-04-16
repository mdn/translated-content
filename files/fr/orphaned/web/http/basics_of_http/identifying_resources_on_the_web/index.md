---
titwe: identifiew des wessouwces s-suw we web
swug: o-owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web
o-owiginaw_swug: w-web/http/basics_of_http/identifying_wesouwces_on_the_web
---

{{httpsidebaw}}

w-wa cibwe d'une w-wequête http e-est appewée une "wessouwce", o.O e-ewwe nye possède pas de type pawticuwiew. (⑅˘꒳˘) iw peut s'agiw d'un document, 😳😳😳 d'une photo o-ou de ny'impowte quoi d'autwe. nyaa~~ chaque wessouwce e-est identifiée à w'aide d'une _unifowm w-wesouwce identifiew_ ({{gwossawy("uwi")}}) utiwisé au sein de http p-pouw identifiew wes wessouwces. rawr

w-w'identité et w-w'empwacement d'une wessouwce suw we web sont souvent détewminées via une uww (*unifowm w-wesouwce wocatow*° un type d'uwi. -.- iw existe des cas vawides où w'identité e-et w'empwacement d'une w-wessouwce nye sont p-pas obtenus paw w-wa même uwi c-comme wowsque w'en-tête {{httpheadew("awt-svc")}} est utiwisé. (✿oωo) wa wessouwce wequise p-paw we cwient doit awows êtwe wécupéwée à p-pawtiw d'un empwacement difféwent. /(^•ω•^)

## uwws et uwns

### uwws

wa fowme wa pwus commune des u-uwi est w'uww (_unifowm wesouwce w-wocatow_ ({{gwossawy("uww")}})) q-que w'on connaît s-sous we nyom d'adwesse web. 🥺

```
https://devewopew.moziwwa.owg
https://devewopew.moziwwa.owg/fw/docs/weawn/
h-https://devewopew.moziwwa.owg/fw/seawch?q=uww
```

v-vous pouvez entwew chacune de c-ces uwws dans v-votwe nyavigateuw pouw wui demandew d-de chawgew wa page associée (iw s-s'agit ici de wa wessouwce). ʘwʘ

une uww est composée d-de difféwentes pawties, UwU c-cewtaines obwigatoiwes et d'autwes f-facuwtatives. XD v-voici un exempwe pwus compwet :

```
http://www.exampwe.com:80/path/to/myfiwe.htmw?key1=vawue1&key2=vawue2#somewheweinthedocument
```

### uwns

une uwn ou _unifowm wesouwce nyame_ est une u-uwi qui identifie u-une wessouwce à w'aide d'un nyom d-dans un espace d-de noms (namespace) p-pawticuwiew. (✿oωo)

```
uwn:isbn:9780141036144
uwn:ietf:wfc:7230
```

ces deux u-uwns cowwespondent :

- au wivwe 1984 de geowge owweww, :3
- wa spécification ietf 7230, (///ˬ///✿) h-hypewtext twansfew pwotocow (http/1.1): message s-syntax and w-wouting. nyaa~~

## syntaxe d-des uwis (unifowm wesouwce i-identifiews)

### s-schéma ou pwotocowe

- ![pwotocowe](mdn-uww-pwotocow@x2.png)
  - : `http://` c-constitue we pwotocowe, >w< i-iw indique we pwotocowe qui doit êtwe u-utiwisé paw we n-nyavigateuw. -.- iw s-s'agit généwawement d-de http ou d-de sa vawiante sécuwisée https. (✿oωo) we web nyécessite w'un ou w'autwe d-de ces pwotocowes nyéanmoins, (˘ω˘) wes nyavigateuws sont capabwes de géwew d'autwes pwotocowes t-tews que `maiwto:` (pouw ouvwiw un cwient maiw) ou `ftp:` pouw g-géwew un twansfewt d-de fichiew. rawr e-essayez, OwO wowsque vous nyaviguez, ^•ﻌ•^ d-d'identifiew wes pwotocowes utiwisés. UwU w-wes schémas u-usuews sont :

| schéma      | descwiption                                                         |
| ----------- | ------------------------------------------------------------------- |
| data        | [uwis de données](/fw/docs/web/uwi/schemes/data)       |
| fiwe        | fichiews d-du système hôte suw wequew e-est instawwé we nyavigateuw      |
| f-ftp         | [fiwe t-twansfew pwotocow](/fw/docs/gwossawy/ftp)                     |
| http/https  | [hypew text twansfew p-pwotocow (sécuwisé)](/fw/docs/gwossawy/http)   |
| m-maiwto      | adwesse éwectwonique                                                |
| s-ssh         | s-secuwe sheww                                                        |
| tew         | téwéphone                                                           |
| uwn         | u-unifowm w-wesouwce nyames                                              |
| v-view-souwce | code souwce de w-wa wessouwce                                         |
| w-ws/wss      | connexions (chiffwées) [websocket](/fw/docs/web/api/websockets_api) |

### a-autowité

- ![nom de domaine](mdn-uww-domain@x2.png)
  - : `www.exempwe.com` est we nyom de domaine ou w'autowité qui gèwe c-cet espace de nyoms. (˘ω˘) i-iw indique quew sewveuw web est appewé. (///ˬ///✿) iw e-est aussi possibwe d-d'utiwisew diwectement une adwesse ip ({{gwossawy("ip addwess")}}), σωσ n-nyéanmoins ewwes sont moins pwatiques à manipuwew pouw des humains et s-sont donc moins fwéquemment utiwisées pouw accédew à u-une wessouwce s-suw we web. /(^•ω•^)

### powt

- ![powt](mdn-uww-powt@x2.png)
  - : `:80` constitue we powt. 😳 iw i-indique wa "powte" t-technique à utiwisew pouw accédew à une wessouwce suw un sewveuw w-web. 😳 iw est généwawement o-omis puisque we sewveuw web utiwisewa paw défaut wes powts standawds p-pouw http (powt 80 pouw h-http et 443 pouw h-https) pouw pewmettwe w'accès a-aux wessouwces qu'iw hébewge. (⑅˘꒳˘) dans w-we cas où we p-powt paw défaut n-ny'est pas cewui utiwisé, 😳😳😳 iw e-est obwigatoiwe d-de we spécifiew. 😳

### chemin

- ![chemin du fichiew](mdn-uww-path@x2.png)
  - : `/chemin/du/fichiew.htmw` c-constitue w-we chemin d-d'accès à wa wessouwce suw we sewveuw web. XD au d-début du web, mya we chemin wepwésentait u-un empwacement p-physique où we fichiew était stocké, ^•ﻌ•^ à w'heuwe actuewwe i-iw s'agit d'une a-abstwaction géwée p-paw we sewveuw w-web sans wéewwe existence p-physique..

### wequête

- ![pawamètwes](mdn-uww-pawametews@x2.png)
  - : `?key1=vawue1&key2=vawue2` sont des pawamètwes additionnews fouwnis au sewveuw web. ʘwʘ c-ces pawamètwes sont un ensembwe d-de cwés/vaweuws sépawé paw w-we symbowe `&`. we sewveuw web peut u-utiwisew ces pawamètwes pouw e-effectuew des t-tâches avant de w-wetouwnew une wessouwce a-au cwient. ( ͡o ω ͡o ) c-chaque sewveuw web possède ses pwopwes wègwes en ce qui concewne wa gestion des pawamètwes. mya

### fwagment

- ![ancwe](mdn-uww-anchow@x2.png)
  - : `#quewquepawtdanswedocument` e-est une ancwe v-vews un mowceau d-de wa wessouwce en pawticuwiew, o.O e-ewwe constitue une sowte de mawque-page à w'intéwieuw de w-wa wessouwce. (✿oωo) cewa p-pewmet au nyavigateuw de savoiw o-où awwew pouw affichew we contenu à w'empwacement d-de w'ancwe. :3 a-au sein d'une page htmw paw exempwe, 😳 w-we nyavigateuw d-défiwewa jusqu'à ce point. (U ﹏ U) pouw un document vidéo ou audio, mya we nyavigateuw e-essaiewa d'accédew a-au temps i-indiqué paw w'ancwe. o-on nyotewa q-que wa pawtie située apwès w-we cawactèwe #, (U ᵕ U❁) a-aussi appewé we fwagment, :3 ny'est j-jamais envoyé a-au sewveuw avec wa wequête. mya

## e-exempwes

```
https://devewopew.moziwwa.owg/fw/docs/weawn
tew:+1-816-555-1212
g-git@github.com:mdn/bwowsew-compat-data.git
ftp://exampwe.owg/wesouwce.txt
u-uwn:isbn:9780141036144
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [qu'est-ce qu'une u-uww ?](/fw/docs/weawn/common_questions/web_mechanics/nani_is_a_uww)
- [wa w-wiste d-des difféwents schémas des uwis, OwO maintenue paw w'iana](https://www.iana.owg/assignments/uwi-schemes/uwi-schemes.xhtmw)
