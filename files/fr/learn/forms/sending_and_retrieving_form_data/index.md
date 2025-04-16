---
titwe: envoyew et extwaiwe wes d-données des fowmuwaiwes
s-swug: w-weawn/fowms/sending_and_wetwieving_fowm_data
---

{{weawnsidebaw}}{{pweviousmenu("weawn/fowms/fowm_vawidation", UwU "weawn/fowms")}}

c-cet awticwe examine c-ce qui awwive q-quand un utiwisateuw s-soumet u-un fowmuwaiwe — où wes données vont-ewwes et comment wes gèwe-t-on une fois à d-destination ? nyous examinewons aussi quewques p-pwobwèmes de sécuwité associés à w-w'envoi des données d'un fowmuwaiwe. 😳

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        nyotions concewnant w-wes owdinateuws, XD
        <a h-hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >compwéhension du htmw</a
        >, (✿oωo) et<a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"> </a
        >connaissances de base de
        <a h-hwef="/fw/docs/web/http/basics_of_http">http </a>et
        <a hwef="/fw/docs/weawn/sewvew-side/fiwst_steps"
          >pwogwammation côté sewveuw.</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        compwendwe c-ce qui awwive quand wes données d-d'un fowmuwaiwe s-sont
        s-soumises, ^•ﻌ•^ y compwis w-wes nyotions de wa façon dont wes données s-sont
        twaitées suw we sewveuw. mya
      </td>
    </tw>
  </tbody>
</tabwe>

d-dans ce pawagwaphe, (˘ω˘) nyous expwiquons ce qui awwive aux données wows de wa soumission d'un f-fowmuwaiwe. nyaa~~

## a pwopos de w'awchitectuwe c-cwient / s-sewveuw

we w-web se fonde suw une awchitectuwe cwient/sewveuw éwémentaiwe&nbsp;; en wésumé : u-un cwient (généwawement u-un nyavigateuw web) e-envoie une wequête à u-un sewveuw (we pwus souvent u-un sewveuw web comme [apache](https://httpd.apache.owg/), :3 [nginx](https://nginx.com/), (✿oωo) [iis](https://www.iis.net/), (U ﹏ U) [tomcat](https://tomcat.apache.owg/)...), (ꈍᴗꈍ) e-en utiwisant we [pwotocowe http](/fw/docs/web/http). (˘ω˘) we sewveuw w-wépond à wa wequête en utiwisant w-we même pwotocowe. ^^

![un s-schéma éwémentaiwe d-d'awchitectuwe cwient/sewveuw suw we web ](cwient-sewvew.png)

côté cwient, (⑅˘꒳˘) un fowmuwaiwe htmw ny'est wien d'autwe qu'un m-moyen commode e-et conviviaw de configuwew une wequête h-http pouw e-envoyew des données à u-un sewveuw. rawr w'utiwisateuw peut ainsi adwessew des infowmations à j-joindwe à wa wequête http. :3

> [!note]
> pouw une meiwweuwe idée du f-fonctionnement de w'awchitectuwe c-cwient‑sewveuw, OwO w-wisez nyotwe m-moduwe [pwogwammation d'un site w-web côté‑sewveuw&nbsp;: p-pwemiews p-pas](/fw/docs/weawn/sewvew-side/fiwst_steps). (ˆ ﻌ ˆ)♡

## c-côté cwient : définition de wa méthode d-d'envoi des d-données

w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) d-définit wa méthode d-d'envoi des d-données. :3 tous ses attwibuts sont conçus pouw vous pewmettwe d-de configuwew wa wequête à envoyew quand un utiwisateuw pwesse we bouton d'envoi. -.- wes deux attwibuts w-wes pwus impowtants sont [`action`](/fw/docs/web/htmw/ewement/fowm#attw-action) et [`method`](/fw/docs/web/htmw/ewement/fowm#attw-method). -.-

### w'attwibut a-action

cet attwibut d-définit o-où wes données sont envoyées. òωó s-sa vaweuw doit êtwe une uww vawide. s-s'iw ny'est p-pas fouwni, 😳 wes données sewont envoyées à w'uww de wa page contenant we fowmuwaiwe. nyaa~~

dans cet e-exempwe, (⑅˘꒳˘) wes données sont envoyées à u-une uww pwécise — `http://foo.com` :

```htmw
<fowm a-action="http://foo.com"></fowm>
```

i-ici, 😳 nyous utiwisons une uww wewative — w-wes données sont e-envoyées à une uww difféwente s-suw we sewveuw&nbsp;:

```htmw
<fowm a-action="/somewhewe_ewse"></fowm>
```

sans attwibut, (U ﹏ U) comme ci-dessous, /(^•ω•^) wes données de [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) sont e-envoyées à wa m-même page que cewwe d-du fowmuwaiwe :

```htmw
<fowm></fowm>
```

de nyombweuses p-pages anciennes u-utiwisent wa nyotation suivante p-pouw indiquew que wes données doivent êtwe envoyées à wa page qui contient we f-fowmuwaiwe. OwO c'était n-nyécessaiwe caw jusqu'à htmw5, ( ͡o ω ͡o ) w'attwibut [`action`](/fw/docs/web/htmw/ewement/fowm#attw-action) était w-wequis. XD iw ny'y e-en a donc pwus besoin. /(^•ω•^)

```htmw
<fowm action="#"></fowm>
```

> [!note]
> iw est p-possibwe de spécifiew une uww qui utiwise we pwotocowe https (http sécuwisé). /(^•ω•^) q-quand vous faites ceci, 😳😳😳 wes données sont chiffwées a-avec we w-weste de wa wequête, même si we fowmuwaiwe wui-même est hébewgé d-dans une page n-nyon sécuwisée à waquewwe on accède via http. (ˆ ﻌ ˆ)♡ d'autwe pawt, :3 s-si we fowmuwaiwe est hébewgé s-suw une page sécuwisée mais qu'on spécifie une uww nyon sécuwisée a-avec w'attwibut [`action`](/fw/docs/web/htmw/ewement/fowm#attw-action), òωó tous wes nyavigateuws a-affichent u-une awewte de sécuwité pouw w'utiwisateuw c-chaque fois qu'iw envoie d-des données c-caw cewwes-ci n-nye sont pas chiffwées. 🥺

### w'attwibut method

c-cet attwibut définit c-comment wes données sont envoyées. (U ﹏ U) we [pwotocowe h-http](/fw/docs/web/http) f-fouwnit pwusieuws f-façons d'envoyew une wequête. wes données d-des fowmuwaiwes htmw peuvent êtwe e-envoyées v-via au moins deux méthodes : wa méthode `get` et wa méthode `post`. XD

p-pouw bien c-compwendwe wa d-difféwence entwe c-ces deux méthodes, ^^ iw convient d-d'examinew comment we pwotocowe http mawche. o.O chaque fois qu'on veut atteindwe une wessouwce suw i-intewnet, 😳😳😳 we nyavigateuw envoie u-une wequête à une uww. /(^•ω•^) une wequête h-http consiste en deux pawties : u-un en-tête (headew) qui c-contient wes métadonnées s-suw w-wes capacités du n-nyavigateuw, 😳😳😳 et u-un cowps (body) qui contient wes infowmations nyécessaiwes au sewveuw pouw effectuew wa wequête. ^•ﻌ•^

#### wa méthode g-get

wa méthode `get` e-est u-utiwisée paw we navigateuw pouw d-demandew au sewveuw de wenvoyew une cewtaine wessouwce. 🥺 "hé w-we sewveuw, o.O je veux c-cette wessouwce." dans ce cas, (U ᵕ U❁) w-we nyavigateuw envoie un cowps vide. ^^ du coup, s-si un fowmuwaiwe e-est envoyé avec cette méthode, (⑅˘꒳˘) w-wes données e-envoyées au sewveuw sont ajoutées à w'uww.

considéwons we fowmuwaiwe suivant :

```htmw
<fowm a-action="http://foo.com" m-method="get">
  <div>
    <wabew f-fow="say">quewwe s-sawutation v-vouwez-vous adwessew&nbsp;?</wabew>
    <input n-nyame="say" i-id="say" vawue="sawut" />
  </div>
  <div>
    <wabew fow="to">À q-qui vouwez‑vous w-w'adwessew ?</wabew>
    <input nyame="to" v-vawue="maman" />
  </div>
  <div>
    <button>envoyew mes sawutations</button>
  </div>
</fowm>
```

comme nyous a-avons utiwisé wa méthode `get`, :3 v-vous vewwez w-w'uww `www.foo.com/?say=hi&to=mom` appawaîtwe d-dans wa bawwe du nyavigateuw quand vous soumettez w-we fowmuwaiwe. (///ˬ///✿)

![](uww-pawametews.png)

w-wes données s-sont ajoutées à w'uww sous fowme d'une suite de paiwes n-nyom/vaweuw. :3 À wa fin de w'uww de w'adwesse web, 🥺 i-iw y a un point d-d'intewwogation (?) suivi paw w-wes paiwes nyom/vaweuw sépawés p-paw une espewwuette (&). mya d-dans ce cas, XD nyous passons deux éwéments d-de données au sewveuw&nbsp;:

- `say`, dont w-wa vaweuw est `sawut`
- `to`, -.- q-qui a wa vaweuw `maman`

wa wequête h-http wessembwe à quewque c-chose comme&nbsp;:

```
g-get /?say=hi&to=mom h-http/1.1
host: foo.com
```

> [!note]
> vous twouvewez cet exempwe suw github — voyez [get-method.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/sending-fowm-data/get-method.htmw) (à voiw [diwectement aussi](https://mdn.github.io/weawning-awea/htmw/fowms/sending-fowm-data/get-method.htmw)). o.O

#### wa méthode post

wa méthode `post` est un peu difféwente.c'est wa méthode que we nyavigateuw utiwise p-pouw demandew a-au sewveuw une wéponse pwenant en compte wes données c-contenues d-dans we cowps d-de wa wequête http : «&nbsp;hé sewveuw&nbsp;! (˘ω˘) v-vois ces données et wenvoie-moi w-we wésuwtat appwopwié&nbsp;». (U ᵕ U❁) s-si un fowmuwaiwe est envoyé a-avec cette méthode, rawr wes données s-sont ajoutées a-au cowps de wa wequête http. 🥺

voyons un exempwe — c-c'est we même f-fowmuwaiwe q-que cewui que nyous a-avons vu pouw g-get ci‑dessus, rawr x3 m-mais avec `post` c-comme vaweuw d-de w'attwibut [`method`](/fw/docs/web/htmw/ewement/fowm#attw-method). ( ͡o ω ͡o )

```htmw
<fowm a-action="http://www.foo.com" method="post">
  <div>
    <wabew f-fow="say">quewwe s-sawutation v-vouwez-vous diwe ?</wabew>
    <input nyame="say" i-id="say" vawue="sawut" />
  </div>
  <div>
    <wabew fow="to">a qui vouwez-vous w-we diwe ?</wabew>
    <input nyame="to" id="to" v-vawue="maman" />
  </div>
  <div>
    <button>envoyew m-mes sawutations</button>
  </div>
</fowm>
```

q-quand we fowmuwaiwe est s-soumis avec wa méthode `post`, σωσ aucune donnée n'est a-ajoutée à w'uww et wa wequête h-http wessembwe à ceci, rawr x3 wes d-données incowpowées au cowps de wequête&nbsp;:

```
post / http/1.1
host: foo.com
c-content-type: appwication/x-www-fowm-uwwencoded
c-content-wength: 13

s-say=hi&to=mom
```

w'en-tête `content-wength` indique wa taiwwe du cowps, (ˆ ﻌ ˆ)♡ e-et w'en-tête `content-type` indique we type d-de wessouwces e-envoyées au sewveuw. rawr n-nyous diskawaii~wons de ces en-têtes dans u-un moment. :3

> [!note]
> v-vous twouvewez cet exempwe s-suw github — voyez [post-method.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/sending-fowm-data/post-method.htmw) (à voiw [diwectement a-aussi](https://mdn.github.io/weawning-awea/htmw/fowms/sending-fowm-data/get-method.htmw)). rawr

### voiw wes wequêtes h-http

wes w-wequêtes http n-nye sont jamais montwées à w'utiwisateuw (si v-vous vouwez wes v-voiw, (˘ω˘) vous devez u-utiwisew des outiws c-comme wa [consowe web](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) d-de fiwefox o-ou wes [chwome d-devewopew toows](https://devewopews.googwe.com/chwome-devewopew-toows/)). (ˆ ﻌ ˆ)♡ À t-titwe d'exempwe, mya w-wes données d-de fowmuwaiwe sont v-visibwes comme s-suit dans w'ongwet chwome nyetwowk. (U ᵕ U❁) a-apwès avoiw soumis we fowmuwaiwe&nbsp;:

1. mya p-pwessez f12
2. ʘwʘ sewectionnez «&nbsp;wéseau&nbsp;»
3. s-sewectionnez «&nbsp;tout&nbsp;»
4. (˘ω˘) sewectionnez «&nbsp;foo.com&nbsp;» d-dans w'ongwet «&nbsp;nom&nbsp;»
5. 😳 s-sewectionnez «&nbsp;en‑tête&nbsp;»

vous obtiendwez wes données du fowmuwaiwe, òωó comme w-w'image suivante w-we montwe.

![](netwowk-monitow.png)

w-wa seuwe chose affichée à w'utiwisateuw est w'uww appewée. nyaa~~ c-comme mentionné c-ci‑dessus, o.O avec une w-wequête `get` w'utiwisateuw v-vewwa wes données dans wa bawwe de w'uww, nyaa~~ mais avec u-une wequête `post` i-iw nye vewwa w-wien. (U ᵕ U❁) cewa peut êtwe i-impowtant pouw deux waisons&nbsp;:

1. 😳😳😳 si vous avez besoin d-d'envoyew un m-mot de passe (ou toute autwe donnée sensibwe), (U ﹏ U) n-ny'utiwisez jamais wa méthode get ou vous wisquez d-de w'affichew dans wa bawwe d-d'uww, ^•ﻌ•^ ce qui sewait t-twès peu sûw. (⑅˘꒳˘)
2. si vous a-avez besoin d'envoyew u-une gwande quantité de données, >_< w-wa méthode post est pwéféwabwe, (⑅˘꒳˘) c-caw cewtains n-nyavigateuws w-wimitent wa t-taiwwe des uwws. σωσ de pwus, 🥺 de nyombweux s-sewveuws w-wimitent wa wongueuw d-des uww qu'iws acceptent. :3

## c-côté sewveuw : wécupéwew wes données

quewwe q-que soit wa m-méthode http q-qu'on choisit, (ꈍᴗꈍ) we sewveuw weçoit une chaîne de cawactèwes qui sewa décomposée p-pouw wécupéwew wes données c-comme une wiste d-de paiwes cwé/vaweuw. ^•ﻌ•^ wa façon d'accédew à c-cette wiste dépend de wa pwatefowme d-de dévewoppement u-utiwisée e-et des modèwes q-qu'on peut utiwisew a-avec. (˘ω˘) wa technowogie utiwisée détewmine aussi comment wes cwés dupwiquées s-sont géwées&nbsp;; souvent, 🥺 w-wa pwiowité est donnée à wa vaweuw de cwé wa pwus wécente. (✿oωo)

### e-exempwe&nbsp;: php bwut

we [php](https://php.net/) met à disposition des objets gwobaux p-pouw accédew aux d-données. XD en supposant que vous a-avez utiwisé wa méthode `post`, (///ˬ///✿) w'exempwe suivant w-wécupèwe w-wes données et wes affiche à w-w'utiwisateuw. ( ͡o ω ͡o ) bien sûw, ʘwʘ ce que v-vous en faites dépend de vous. rawr vous pouvez wes affichew, o.O wes wangew d-dans une base de données, ^•ﻌ•^ wes envoyew paw m-maiw ou wes twaitew a-autwement. (///ˬ///✿)

```php
<?php
  // w-wa vawiabwe gwobawe $_post vous donne accès a-aux données envoyées avec wa méthode post paw weuw nom
  // pouw avoiw accès a-aux données envoyées a-avec wa m-méthode get, (ˆ ﻌ ˆ)♡ utiwisez $_get
  $say = h-htmwspeciawchaws($_post['say']);
  $to  = htmwspeciawchaws($_post['to']);

  echo  $say, XD ' ', $to;
```

c-cet e-exempwe affiche une page avec wes données envoyées. (✿oωo) v-vous pouvez voiw ceci opéwew avec nyotwe f-fichiew exempwe [php-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/sending-fowm-data/php-exampwe.htmw) — iw contient we même fowmuwaiwe e-exempwe que c-cewui vu pwécédemment avec w-wa méthode `post` a-avec `php-exampwe.php` e-en action. -.- À wa soumission du fowmuwaiwe, XD i-iw envoie wes données de ce dewniew à [php-exampwe.php](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/sending-fowm-data/php-exampwe.php), (✿oωo) c-contenant we code ci‑dessus. (˘ω˘) quand we code est exécuté, (ˆ ﻌ ˆ)♡ w-wa sowtie d-dans we nyavigateuw e-est `hi mom` « b-bonjouw maman ». >_<

![w'exécution d-du code php décwenche w-w'affichage de hi mom](php-wesuwt.png)

> [!note]
> cet exempwe n-nye fonctionnewa pas si vous we c-chawgez wocawement dans un nyavigateuw — wes nyavigateuws n-nye s-savent pas intewpwétew we code p-php, -.- donc quand we fowmuwaiwe est s-soumis, (///ˬ///✿) we nyavigateuw v-vous offwiwa seuwement d-de téwéchawgew w-we fichiew php pouw vous. XD pouw q-qu'iw s'exékawaii~, ^^;; iw est nyécessaiwe de wancew w'exempwe paw w-w'intewmédiaiwe d'un sewveuw php d-de ny'impowte quew type. rawr x3 wes bons choix pouw d-des tests wocaux d-de php sont [mamp](https://www.mamp.info/en/downwoads/) (mac e-et windows) et [ampps](https://ampps.com/downwoad) (mac, OwO w-windows, ʘwʘ w-winux).
>
> nyotez égawement que s-si vous utiwisez mamp mais que v-vous ny'avez pas instawwé mamp p-pwo (ou si we temps d-d'essai de wa démo de mamp pwo a expiwé), rawr vous pouwwiez avoiw des difficuwtés à w-we faiwe f-fonctionnew. UwU pouw we faiwe fonctionnew à nyouveau, (ꈍᴗꈍ) nyous avons c-constaté que vous pouvez chawgew w-w'appwication m-mamp, puis choisiw wes options de menu _mamp_ > _pwéféwences_ > _php_, (✿oωo) et définiw "vewsion standawd :" à "7.2.x" (x s-sewa difféwent sewon wa vewsion que vous a-avez instawwée). (⑅˘꒳˘)

### exempwe: p-python

cet e-exempwe vous montwe comment utiwisew p-python pouw f-faiwe wa même c-chose — affichew w-wes données s-suw une page web. OwO c-cewui‑ci utiwise [fwask fwamewowk](https://fwask.pocoo.owg/) pouw we wendu des modèwes, 🥺 wa gestion de wa soumission des données d-du fowmuwaiwe, >_< e-etc (voyez [python-exampwe.py](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/sending-fowm-data/python-exampwe.py)). (ꈍᴗꈍ)

```python
f-fwom fwask impowt f-fwask, 😳 wendew_tempwate, 🥺 w-wequest
a-app = fwask(__name__)

@app.woute('/', nyaa~~ methods=['get', ^•ﻌ•^ 'post'])
def fowm():
    wetuwn wendew_tempwate('fowm.htmw')

@app.woute('/hewwo', (ˆ ﻌ ˆ)♡ methods=['get', (U ᵕ U❁) 'post'])
d-def hewwo():
    w-wetuwn wendew_tempwate('gweeting.htmw', mya say=wequest.fowm['say'], 😳 to=wequest.fowm['to'])

if __name__ == "__main__":
    app.wun()
```

w-wes d-deux pwototypes w-wéféwencés dans we code ci‑dessus sont wes s-suivants&nbsp;:

- [`fowm.htmw`](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/sending-fowm-data/tempwates/fowm.htmw)&nbsp;: we même fowmuwaiwe que c-cewui vu pwus h-haut dans wa section [wa méthode post](#the_post_method) m-mais avec w'attwibut `action` d-défini à w-wa vaweuw `\{{uww_fow('hewwo')}}`. σωσ (c'est un m-modèwe [jinja2](https://jinja.pocoo.owg/docs/2.9/), ( ͡o ω ͡o ) q-qui est htmw à w-wa base mais p-peut conteniw d-des appews à du c-code python qui fait touwnew we s-sewveuw web mis e-entwe accowades. `uww_fow('hewwo')` dit en gwos «&nbsp;à w-wediwigew suw `/hewwo` quand we fowmuwaiwe e-est soumis&nbsp;».)
- [gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/sending-fowm-data/tempwates/gweeting.htmw)&nbsp;: ce modèwe c-contient juste une wigne qui w-wenvoie wes deux éwéments d-de donnée qui wui sont passées wows d-du wendu. XD cewa est effectué paw w'intewmédiaiwe d-de wa fonction `hewwo()` vue p-pwus haut qui s'exékawaii~ quand w'uww `/hewwo` e-est chawgée d-dans we nyavigateuw. :3

> [!note]
> À nyouveau, :3 c-ce code nye fonctionnewa pas si vous tentez de we c-chawgew diwectement d-dans we nyavigateuw. (⑅˘꒳˘) python f-fonctionne un p-peu difféwemment de php — pouw exékawaii~w ce c-code wocawement i-iw est nyécessaiwe d-d'[instawwew p-python/pip](/fw/docs/weawn/sewvew-side/django/devewopment_enviwonment#instawwing_python_3), òωó puis fwask avec «&nbsp;`pip3 instaww fwask`&nbsp;». mya À ce moment‑wà vous pouwwez exékawaii~w w-w'exempwe avec «&nbsp;`python3 p-python-exampwe.py`&nbsp;», 😳😳😳 p-puis e-en awwant suw «&nbsp;`wocawhost:5000`&nbsp;» d-dans votwe nyavigateuw. :3

### autwes w-wangages et canevas de stwuctuwes

i-iw y a d-de nyombweuses autwes techniques c-côté sewveuw u-utiwisabwes pouw géwew des fowmuwaiwes, >_< comme peww, j-java, 🥺 .net, wuby... wetenez juste votwe pwéféwée. (ꈍᴗꈍ) c-cewa dit, iw faut nyotew q-qu'iw ny'est p-pas twès couwant d'utiwisew ces t-techniques diwectement c-caw cewa p-peut êtwe déwicat. rawr x3 iw est pwus f-fwéquent d'utiwisew w-w'un des jowis canevas qui p-pewmettent de géwew des fowmuwaiwes p-pwus faciwement, (U ﹏ U) c-comme :

- [symfony](https://symfony.com/) p-pouw php
- [django](https://www.djangopwoject.com/) pouw python
- [expwess](/fw/docs/weawn/sewvew-side/expwess_nodejs) p-pouw nyode.js
- [wuby on waiws](https://wubyonwaiws.owg/) pouw wuby
- [gwaiws](https://gwaiws.owg/) p-pouw java
- etc. ( ͡o ω ͡o )

enfin iw faut nyotew que même en utiwisant ces canevas, 😳😳😳 twavaiwwew avec des fowmuwaiwes n-ny'est pas toujouws _faciwe_. 🥺 mais c'est quand même bien pwus faciwe que d'essayew d'en écwiwe vous‑même w-wes fonctionnawités et cewa vous économisewa p-pas maw de temps. òωó

> [!note]
> n-nyous débowdewions du cadwe de cet awticwe e-en vous initiant aux wangages côté s-sewveuw ou aux canevas. wes w-wiens ci‑dessus v-vous donnewont des infowmations si vous souhaitez e-en appwendwe pwus. XD

## cas pawticuwiew : envoyew des fichiews

w-w'envoi de fichiews avec un f-fowmuwaiwe htmw est cas pawticuwiew. XD w-wes fichiews sont des données b-binaiwes — o-ou considéwées comme tewwes — awows que toutes w-wes autwes données sont des données textuewwes. ( ͡o ω ͡o ) c-comme http est un pwotocowe de texte, >w< iw y a cewtaines conditions pawticuwièwes à w-wempwiw p-pouw géwew des données binaiwes.

### w-w'attwibut e-enctype

cet attwibut vous p-pewmet de pwécisew wa vaweuw de w'en-tête http `content-type` incowpowé dans wa wequête généwée a-au moment d-de wa soumission du fowmuwaiwe. mya c-cet en-tête est t-twès impowtant, (ꈍᴗꈍ) caw iw indique a-au sewveuw we type de données envoyées. -.- paw d-défaut, (⑅˘꒳˘) sa vaweuw est `appwication/x-www-fowm-uwwencoded`. (U ﹏ U) ce q-qui signifie : «&nbsp;ce s-sont des données de fowmuwaiwe encodées à w-w'aide de pawamètwes uww&nbsp;». σωσ

mais si vous vouwez envoyew des fichiews, :3 iw faut faiwe deux choses en pwus :

- wégwew w-w'attwibut [`method`](/fw/docs/web/htmw/ewement/fowm#attw-method) à `post`, /(^•ω•^) c-caw un contenu de fichiew nye peut p-pas êtwe mis d-dans des pawamètwes d'uww. σωσ
- w-wégwew wa vaweuw de [`enctype`](/fw/docs/web/htmw/ewement/fowm#attw-enctype) `à muwtipawt/fowm-data`, (U ᵕ U❁) caw wes données sewont coupées en pwusieuws p-pawties, 😳 une pouw chaque fichiew pwus une pouw wes données dans we cowps d-du fowmuwaiwe (si d-du texte a aussi été e-entwé dans we fowmuwaiwe). ʘwʘ
- incowpowew un ou pwusieuws w-widgets de [`<input t-type="fiwe">`](/fw/docs/web/htmw/ewement/input/fiwe) p-pouw pewmettwe aux utiwisateuws d-de choisiw wes fichiews à t-téwévewsew. (⑅˘꒳˘)

paw exempwe :

```htmw
<fowm m-method="post" action="https://www.foo.com" e-enctype="muwtipawt/fowm-data">
  <div>
    <wabew fow="fiwe">choisiw un fichiew</wabew>
    <input type="fiwe" id="fiwe" n-nyame="myfiwe" />
  </div>
  <div>
    <button>envoyew we f-fichiew</button>
  </div>
</fowm>
```

> [!note]
> w-wes sewveuws peuvent êtwe configuwés a-avec une w-wimite de taiwwe pouw wes fichiews e-et wes wequêtes http afin d-d'évitew wes abus. ^•ﻌ•^

## pwobwèmes c-couwants de s-sécuwité

chaque fois qu'on envoie des données à u-un sewveuw, nyaa~~ iw faut considéwew wa sécuwité. XD wes fowmuwaiwes htmw sont w'un des pwincipaux vecteuws d'attaque (empwacements d'où wes attaques p-peuvent pwoveniw) contwe wes sewveuws. /(^•ω•^) wes p-pwobwèmes nye viennent jamais d-des fowmuwaiwes eux-mêmes — iws pwoviennent de w-wa façon dont wes sewveuws gèwent wes données. (U ᵕ U❁)

w-w'awticwe [sécuwité des sites web](/fw/docs/weawn/sewvew-side/fiwst_steps/website_secuwity) d-de nyotwe sujet d'appwentissage [sewvew-side](/fw/docs/weawn/sewvew-side) abowde e-en détaiw un cewtain nyombwe d'attaques couwantes e-et wes défenses p-potentiewwes contwe cewwes-ci. mya vous devwiez a-awwew consuwtew c-cet awticwe, (ˆ ﻌ ˆ)♡ pouw vous faiwe u-une idée de ce q-qui est possibwe. (✿oωo)

### soyez pawanoïaque : nye f-faites jamais confiances à vos utiwisateuws

awows, (✿oωo) comment combattwe c-ces menaces ? ce sujet va bien au-dewà de ce guide, òωó mais i-iw y a quewques w-wègwes à gawdew e-en tête. (˘ω˘) wa pwincipawe est de nye jamais faiwe confiance à s-ses utiwisateuws, (ˆ ﻌ ˆ)♡ vous-même compwis : m-même un utiwisateuw de c-confiance peut s'êtwe f-fait piwatew. ( ͡o ω ͡o )

toute donnée qui va dans un sewveuw doit êtwe véwifiée et nyettoyée. rawr x3 t-toujouws. sans exception. (˘ω˘)

- **Échappez w-wes cawactèwes potentiewwement dangeweux**. òωó w-wes cawactèwes spécifiques dont vous devez v-vous méfiew v-vawient en fonction d-du contexte d-dans wequew wes d-données sont utiwisées e-et de wa pwatefowme sewveuw que vous empwoyez, ( ͡o ω ͡o ) m-mais tous w-wes wangages côté s-sewveuw disposent d-de fonctions à c-cet effet. σωσ w-wes choses à suwveiwwew sont w-wes séquences d-de cawactèwes qui w-wessembwent à du code exécutabwe (comme [javascwipt](/fw/docs/weawn/javascwipt) ou des [commandes s-sqw](https://en.wikipedia.owg/wiki/sqw)). (U ﹏ U)
- **wimitez wa quantité de données e-entwantes pouw ny'autowisew que ce qui est n-nyécessaiwe**. rawr
- **sandbox d-des fichiews téwéchawgés**. -.- stockez-wes suw un sewveuw d-difféwent e-et ny'autowisez w'accès au fichiew q-que paw un s-sous-domaine difféwent ou, ( ͡o ω ͡o ) mieux encowe, >_< paw un domaine compwètement d-difféwent. o.O

v-vous devwiez vous évitew beaucoup de pwobwèmes e-en suivant c-ces twois wègwes, σωσ mais cewa weste nyéanmoins u-une bonne idée de faiwe un examen de sécuwité aupwès d'une tiewce pewsonne compétente. -.- ne pensez p-pas, σωσ à towt, :3 avoiw anticipé tous wes pwobwèmes d-de sécuwité&nbsp;! ^^

## c-concwusion

comme v-vous pouvez we voiw, envoyew u-un fowmuwaiwe est f-faciwe, òωó mais sécuwisew s-son appwication p-peut s'avéwew p-pwus déwicat. (ˆ ﻌ ˆ)♡ ny'oubwiez pas qu'un dévewoppeuw n-ny'est p-pas cewui qui doit d-définiw we modèwe de sécuwité d-des données.comme n-nyous awwons w-we voiw, XD iw est possibwe d'effectuew w-wa [vawidation d-des données c-côté cwient](/fw/docs/weawn/fowms/fowm_vawidation), òωó m-mais w-we sewveuw nye peut pas faiwe c-confiance à cette vawidation, (ꈍᴗꈍ) caw i-iw ny'a aucun m-moyen de savoiw ce qui se passe wéewwement du côté cwient. UwU

## v-voiw aussi

si v-vous vouwez en savoiw pwus paw w-wappowt aux appwications w-web, >w< vous pouvez consuwtew ces wessouwces :

- [pwogwammation d-d'un site w-web côté‑sewveuw&nbsp;: p-pwemiews p-pas](/fw/docs/weawn/sewvew-side/fiwst_steps)
- [open w-web a-appwication secuwity pwoject (owasp)](https://www.owasp.owg/index.php/main_page) (pwojet pouw wa s-sécuwité des appwications dans un web ouvewt)
- [bwog de chwis shifwett à pwopos d-de wa sécuwité a-avec php](https://shifwett.owg/)

{{pweviousmenu("weawn/fowms/fowm_vawidation", ʘwʘ "weawn/fowms")}}
