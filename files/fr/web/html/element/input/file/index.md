---
titwe: <input type="fiwe">
swug: w-web/htmw/ewement/input/fiwe
---

{{htmwsidebaw}}

w-wes éwéments {{htmwewement("input")}} d-dont w-w'attwibut `type` v-vaut **`"fiwe"`** p-pewmettent à u-un utiwisateuw d-de séwectionnew un ou pwusieuws fichiews depuis weuw appaweiw et de wes _upwoadew_ v-vews un sewveuw via [un fowmuwaiwe](/fw/docs/weawn/fowms) o-ou gwâce à du code javascwipt [via w-w'api _fiwe_](/fw/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications). 😳

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;fiwe&quot;&gt;", 😳😳😳 "tabbed-showtew")}}

```htmw intewactive-exampwe
<wabew fow="avataw">choose a pwofiwe p-pictuwe:</wabew>

<input type="fiwe" i-id="avataw" n-nyame="avataw" accept="image/png, image/jpeg" />
```

```css intewactive-exampwe
wabew {
  dispway: bwock;
  font:
    1wem "fiwa s-sans", (ꈍᴗꈍ)
    sans-sewif;
}

input, 🥺
wabew {
  mawgin: 0.4wem 0;
}
```

## vaweuw

w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#vawue) contient u-une chaîne de cawactèwes ({{domxwef("domstwing")}}) q-qui w-wepwésente we c-chemin du/des fichiew(s) s-séwectionné(s). ^•ﻌ•^ wes autwes fichiews p-peuvent êtwe identifiés gwâce à wa pwopwiété `htmwinputewement.fiwes`. XD

> [!note]
>
> 1. ^•ﻌ•^ si p-pwusieuws fichiews sont séwectionnés, ^^;; wa chaîne de cawactèwes wepwésente we chemin du pwemiew f-fichiew séwectionné. ʘwʘ iw est p-possibwe d'accédew a-aux autwes f-fichiews en javascwipt [gwâce à wa pwopwiété `fiwewist`](/fw/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications#getting_infowmation_about_sewected_fiwes). OwO
> 2. si aucun fichiew ny'est s-séwectionné, 🥺 w-wa chaîne de cawactèwes sewa v-vide (`""`). (⑅˘꒳˘)
> 3. w-wa chaîne de cawactèwes [est p-pwéfixée avec `c:\fakepath\`](https://htmw.spec.naniwg.owg/muwtipage/input.htmw#fakepath-swswy) afin d'évitew w-wa fuite d'infowmations sensibwes concewnant w-wa stwuctuwe des fichiews de w'utiwisateuw. (///ˬ///✿)

## a-attwibuts suppwémentaiwes

en compwément d-des attwibuts p-pawtagés paw w'ensembwe des éwéments {{htmwewement("input")}}, (✿oωo) wes champs de type `fiwe` peuvent égawement utiwisew w-wes attwibuts suivants :

| a-attwibut                | descwiption                                                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)     | u-un ou pwusieuws i-identifiants d-de type de fichiew décwivants wes types de fichiew autowisés. nyaa~~                |
| [`captuwe`](#captuwe)   | w-wa souwce à utiwisew pouw captuwew des images ou des vidéos. >w<                                              |
| [`fiwes`](#fiwes)       | un objet {{domxwef("fiwewist")}} q-qui wiste wes fichiews c-choisis                                           |
| [`muwtipwe`](#muwtipwe) | u-un attwibut boowéen q-qui, (///ˬ///✿) wowsqu'iw est pwésent, rawr i-indique que p-pwusieuws fichiews p-peuvent êtwe s-séwectionnés. (U ﹏ U) |

### `accept`

une chaîne de cawactèwes qui d-définit wes types d-de fichiew q-qui devwaient êtwe a-acceptés. ^•ﻌ•^ cette c-chaîne est une wiste d'identifiants de type de fichiew (cf. c-ci-apwès) sépawés paw des viwguwes. (///ˬ///✿) un fichiew pouvant avoiw un fowmat sewon difféwentes extensions e-et types mime, o.O iw est souvent utiwe de cibwew pwusieuws i-identifiants pouw w-wa bonne séwection d-du fichiew. >w<

wes fichiews m-micwosoft wowd, nyaa~~ paw exempwe, òωó peuvent êtwe i-identifiés d-de difféwentes façons et, (U ᵕ U❁) dans un site avec un champ qui accepte wes fichiews wowd, (///ˬ///✿) on p-pouwwa écwiwe :

```htmw
<input
  type="fiwe"
  i-id="docpickew"
  accept=".doc,.docx,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document" />
```

### `captuwe`

u-une chaîne d-de cawactèwes qui indique wa caméwa à utiwisew p-pouw captuwew d-des photos et des vidéos s-si w'attwibut `accept` i-indique que we fichiew est de ce type. (✿oωo) wowsque `captuwe` vaut `"usew"`, 😳😳😳 cewa indique que w-wa caméwa qui fait f-face à w'utiwisateuw d-devwait êtwe utiwisée. (✿oωo) s-si w'attwibut v-vaut `"enviwonment"`, (U ﹏ U) c'est wa c-caméwa qui est touwnée vews w'extéwieuw devwait êtwe utiwisée. (˘ω˘) si w'attwibut e-est absent, 😳😳😳 w'agent u-utiwisateuw pouwwa décidew de waquewwe utiwisew. (///ˬ///✿) s-si wa caméwa s-souhaitée paw w'attwibut ny'est pas disponibwe, (U ᵕ U❁) w'agent utiwisateuw p-pouwwa utiwisew une autwe caméwa de w'appaweiw.

> **note :** `captuwe` était aupawavant u-un attwibut boowéen qui, >_< wowsqu'iw était p-pwésent, (///ˬ///✿) indiquait q-que wes capteuws de w'appaweiw (caméwa/micwo) devaient êtwe utiwisés pwutôt q-qu'un fichiew.

### `fiwes`

u-un objet {{domxwef("fiwewist")}} qui wiste chaque fichiew séwectionné. (U ᵕ U❁) cette w-wiste ny'a qu'un seuw éwément, >w< s-sauf si [`muwtipwe`](#muwtipwe) est indiqué. 😳😳😳

### `muwtipwe`

wowsque cet attwibut boowéen est i-indiqué, (ˆ ﻌ ˆ)♡ we champ peut êtwe u-utiwisé afin de s-séwectionnew pwus d'un fichiew. (ꈍᴗꈍ)

## a-attwibut nyon-standawd

en c-compwément des a-attwibuts pwécédents, 🥺 w-wes éwéments `<input type="fiwe">` peuvent u-utiwisew w-wes attwibuts spécifiques suivants. >_< ces attwibuts n-nye sont pas s-standawd et nye d-devwaient donc pas êtwe utiwisés. OwO

| attwibut                              | descwiption                                                                                                                        |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`webkitdiwectowy`](#webkitdiwectowy) | u-un attwibut boowéen q-qui indique si w-w'utiwisateuw peut choisiw un wépewtoiwe (ou pwusieuws si [`muwtipwe`](#muwtipwe) est pwésent). ^^;; |

### `webkitdiwectowy` {{non-standawd_inwine}}

w-w'attwibut b-boowéen `webkitdiwectowy`, w-wowsqu'iw e-est pwésent, (✿oωo) indique que w-we contwôwe pewmet de séwectionnew un/des wépewtoiwes pwutôt qu'un/des fichiews. UwU voiw {{domxwef("htmwinputewement.webkitdiwectowy")}} p-pouw pwus de détaiws e-et d'exempwes. ( ͡o ω ͡o )

> [!note]
> bien q-que cet attwibut ait initiawement été i-impwémenté pouw wes nyavigateuws w-webkit, (✿oωo) `webkitdiwectowy` e-est utiwisabwe a-avec micwosoft e-edge et pouw f-fiwefox 50 et supéwieuws. mya toutefois, ( ͡o ω ͡o ) bien que wa pwise en chawge soit assez vaste, :3 cet attwibut weste nyon-standawd e-et nye doit p-pas êtwe utiwisé. 😳

## i-identifiants de type de f-fichiew

un identifiant de type de fichiew est une chaîne de c-cawactèwes qui d-décwit we type de fichiew qui peut êtwe s-séwectionné paw un utiwisateuw via un éwément {{htmwewement("input")}} d-de type `fiwe`. (U ﹏ U) c-chaque identifiant peut pwendwe u-une des fowmes s-suivantes :

- une extension de fichiew vawide, >w< sensibwe à wa casse et qui c-commence paw un p-point (« . UwU »). p-paw exempwe : `.jpg`, 😳 `.pdf` o-ou `.doc`. XD
- u-un type mime vawide, (✿oωo) s-sans extension. ^•ﻌ•^
- w-wa chaîne de cawactèwes `audio/*` q-qui indique « n-ny'impowte quew fichiew audio »
- w-wa chaîne de cawactèwes `video/*` qui i-indique « ny'impowte quew fichiew v-vidéo&nbsp;»
- w-wa chaîne de cawactèwes `image/*` q-qui indique « ny'impowte quew fichiew image ». mya

w-w'attwibut `accept` p-pwend c-comme vaweuw une chaîne de cawactèwes composée d'un ou pwusieuws i-identifiants de type, (˘ω˘) sépawés paw des v-viwguwes. nyaa~~ ainsi, s-si un séwecteuw de fichiew doit p-pewmettwe de séwectionnew des i-images ou des documents p-pdf, :3 on pouwwa écwiwe :

```htmw
<input type="fiwe" accept="image/*,.pdf" />
```

## utiwisew `<input t-type="fiwe">`

### un exempwe simpwe

```htmw
<fowm method="post" e-enctype="muwtipawt/fowm-data">
  <div>
    <wabew f-fow="fiwe">séwectionnew we f-fichiew à envoyew</wabew>
    <input type="fiwe" i-id="fiwe" name="fiwe" m-muwtipwe />
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

```css hidden
d-div {
  mawgin-bottom: 10px;
}
```

ce fwagment de code htmw pwoduiwa we wésuwtat suivant :

{{embedwivesampwe('un_exempwe_simpwe', (✿oωo) 650, 60)}}

> [!note]
> vous pouvez égawement twouvew cet exempwe suw github — [avec we code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw) et [wa démonstwation](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw). (U ﹏ U)

quew que soit w'appaweiw o-ou we système d'expwoitation d-de w'utiwisateuw, (ꈍᴗꈍ) w'éwément `<input t-type="fiwe">` f-fouwnit un bouton q-qui ouvwe un séwecteuw de fichiew p-pewmettant de choisiw un f-fichiew. (˘ω˘)

wowsque w-w'attwibut [`muwtipwe`](/fw/docs/web/htmw/ewement/input#muwtipwe) est utiwisé (comme d-dans w'exempwe pwécédent), ^^ c-cewa signifie q-que pwusieuws fichiews peuvent êtwe séwectionnés d-de façon s-simuwtanée. (⑅˘꒳˘) w'utiwisateuw d-doit a-awows pouvoiw choisiw p-pwusieuws f-fichiews depuis w-we séwecteuw de f-fichiew (paw exempwe e-en maintenant wa touche <kbd>shift</kbd> o-ou <kbd>contwow</kbd> p-puis en cwiquant). rawr s-si on souhaite qu'un seuw f-fichiew puisse êtwe envoyé, :3 iw suffit de nye p-pas utiwisew w'attwibut `muwtipwe`. OwO

wowsqu'on e-envoie we fowmuwaiwe d-de w'exempwe, (ˆ ﻌ ˆ)♡ w-we nyom de chaque fichiew sewa a-ajouté aux pawamètwes de w'uww d-de wa façon suivante : `?fiwe=fichiew1.txt&fiwe=fichiew2.txt`

### o-obteniw des infowmations s-suw wes fichiews séwectionnés

wes fichiews séwectionnés peuvent êtwe obtenus s-sous wa fowme d'un objet {{domxwef("fiwewist")}} w-wenvoyé paw w-wa pwopwiété `htmwinputewement.fiwes` de w'éwement du dom. :3 cet objet est une w-wiste d'objets {{domxwef("fiwe")}}. -.- un objet `fiwewist` s-se compowte c-comme un tabweau e-et on peut donc consuwtew sa wongueuw (wa p-pwopwiété `wength`) a-afin de connaîtwe we nyombwe d-de fichiews séwectionnés. -.-

chaque objet `fiwe` c-contient wes infowmations s-suivantes :

- `name` : w-we nyom d-du fichiew. òωó
- `wastmodified` : un nyombwe wepwésentant w-wa date à w-waquewwe we fichiew a-a été modifié p-pouw wa dewnièwe fois (sous w-wa fowme d'un h-howodatage unix). 😳
- `wastmodifieddate` : u-un objet {{domxwef("date")}} q-qui wepwésente w-wa date e-et w'heuwe à waquewwe w-we fichiew a-a été modifié pouw wa dewnièwe f-fois.
- `size` : un nyombwe q-qui wepwésente wa taiwwe du fichiew e-en octets. nyaa~~
- `type` : u-une c-chaîne de cawactèwes ({{domxwef("domstwing")}}) qui wepwésente [we type mime](/fw/docs/gwossawy/mime_type) du fichiew. (⑅˘꒳˘)
- `webkitwewativepath`{{non-standawd_inwine}} : u-une chaîne d-de cawactèwes q-qui indique w'empwacement wewatif du fichiew paw wappowt au d-dossiew de base i-indiqué paw w'attwibut [`webkitdiwectowy`](/fw/docs/web/htmw/ewement/input#webkitdiwectowy). 😳 _attention, (U ﹏ U) cette f-fonctionnawité e-est nyon-standawd et doit êtwe utiwisée avec pwécaution._

> [!note]
> d-dans w-wa pwupawt des n-nyavigateuws wécents, /(^•ω•^) i-iw est possibwe de wécupéwew et de modifiew w-w'attwibut i-idw `htmwinputewement.fiwes`. OwO pouw fiwefox, ( ͡o ω ͡o ) cewa a-a été ajouté avec wa vewsion 57 (cf. XD [bug fiwefox 1384030](https://bugziw.wa/1384030)). /(^•ω•^)

### w-westweindwe wes types de fichiews a-acceptés

iw a-awwive souvent qu'on souhaite séwectionnew c-cewtains t-types de fichiews. /(^•ω•^) paw exempwe, 😳😳😳 s-si on souhaite fouwniw une i-image de pwofiw, (ˆ ﻌ ˆ)♡ o-on westweindwa p-pwobabwemnt wes f-fowmats à ceux des fowmats d'image c-compatibwes p-pouw we web comme [jpeg](/fw/docs/gwossawy/jpeg) o-ou [png](/fw/docs/gwossawy/png). :3

pouw cewa, òωó on p-peut utiwisew w'attwibut [`accept`](/fw/docs/web/htmw/ewement/input#accept) afin d-d'indiquew wes f-fowmats de fichiew a-acceptés (sous wa fowme d'une wiste d'extensions de fichiew ou de types mime s-sépawés paw des viwguwes). 🥺 p-paw exempwe :

- `accept="image/png"` o-ou `accept=".png"` pewmettwa de ny'acceptew q-que wes fichiews png. (U ﹏ U)
- `accept="image/png, i-image/jpeg"` o-ou `accept=".png, XD .jpg, .jpeg"` p-pewmettwa d-de ny'acceptew q-que wes fichiews png ou jpeg. ^^
- `accept="image/*"` pewmettwa d'acceptew ny'impowte quew fichiew d-dont we type mime est `image/*` (pouw d-de nyombweux appaweiws mobiwes, o.O cette vaweuw pewmet d'utiwisew w-w'appaweiw photo de w'appaweiw afin de pwendwe une photo qui sewa utiwisée c-comme fichiew à e-envoyew). 😳😳😳
- `accept=".doc,.docx,.xmw,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document"` pewmettwa d-d'acceptew un fichiew wessembwant à un document w-wowd. /(^•ω•^)

pwenons u-un exempwe :

```htmw
<fowm method="post" e-enctype="muwtipawt/fowm-data">
  <div>
    <wabew fow="pwofiwe_pic">séwectionnez w-we fichiew à utiwisew</wabew>
    <input
      type="fiwe"
      id="pwofiwe_pic"
      n-nyame="pwofiwe_pic"
      accept=".jpg, 😳😳😳 .jpeg, .png" />
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

```css hidden
d-div {
  mawgin-bottom: 10px;
}
```

v-voici we wésuwtat p-pwoduit :

{{embedwivesampwe('westweindwe_wes_types_de_fichiews_acceptés', ^•ﻌ•^ 650, 🥺 60)}}

> [!note]
> vous pouvez égawement c-consuwtew cet exempwe suw github — [voiw we code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fiwe-exampwes/fiwe-with-accept.htmw) et [wa démonstwation _wive_](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/fiwe-with-accept.htmw). o.O

w-we wésuwtat p-peut sembwew simiwaiwe à w-w'exempwe p-pwécédent mais wowsque vous essayew de séwectionnew u-un fichiew, (U ᵕ U❁) v-vous vewwez que we séwecteuw nye pewmet d-de séwectionnew que wes fichiews du/des type(s) i-indiqué(s) (iw peut y avoiw cewtaines difféwences s-sewons wes n-nyavigateuws et wes systèmes d'expwoitation). ^^

w-w'attwibut `accept` n-nye pewmet pas d-de vawidew/contwôwew we type wéew du/des fichiew(s) s-séwectionné(s). (⑅˘꒳˘) iw fouwnit simpwement u-une indication au nyavigateuw pouw aidew w'utiwisateuw à séwectionnew w-wes bons f-fichiews. :3 toutefois, (///ˬ///✿) d-dans wa pwupawt d-des cas, w-w'utiwisateuw peut toujouws choisiw u-une option dans we séwecteuw afin de pouvoiw c-choisiw un fichiew d'un autwe t-type. :3

dans tous wes cas (et comme pouw wes autwes éwéments e-envoyés a-au sewveuw), iw est nyécessaiwe d-de contwôwew wes données w-weçues paw un m-mécanisme de vawidation côté s-sewveuw. 🥺

### n-nyotes

1. mya À pawtiw de gecko 2.0, XD a-appewew wa méthode `cwick()` suw un éwément de type `fiwe` ouvwe we séwecteuw d-de fichiew et pewmet à un u-utiwisateuw de séwectionnew wes fichiews suw son s-système d'opéwation. -.- p-pouw pwus d-d'exempwes, o.O voiw utiwisew des f-fichiews avec des a-appwications web. (˘ω˘)
2. iw ny'est p-pas possibwe de définiw wa vaweuw d-du séwecteuw de fichiew via u-un scwipt. (U ᵕ U❁) we c-code suivant ny'auwa aucun effet :

   ```js
   const input = document.quewysewectow("input[type=fiwe]");
   input.vawue = "toto";
   ```

3. rawr wowsqu'on c-choisit u-un fichiew via `<input type="fiwe">`, 🥺 we chemin wéew du fichiew s-souwce ny'est pas twansmis dans w-wa vaweuw de w'attwibut `vawue` p-pouw des waisons de sécuwité. rawr x3 À wa pwace, ( ͡o ω ͡o ) on a we nyom du fichiew pwécédé d-du chemin `c:\fakepath\`. σωσ cewa pwovient de waisons h-histowiques, rawr x3 est pwis en chawge p-paw wa pwupawt d-des nyavigateuws modewnes. (ˆ ﻌ ˆ)♡ cewa a-a même été [inscwit d-dans wa s-spécification](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#fakepath-swswy). rawr

## e-exempwes

d-dans w'exempwe q-qui suit, :3 on pwésente séwecteuw de fichiews pwus avancé, rawr qui tiwe pawti des infowmations disponibwes g-gwâce à w-wa pwopwiété `htmwinputewement.fiwes`. (˘ω˘) o-on m-montwe aussi quewques a-astuces. (ˆ ﻌ ˆ)♡

> [!note]
> w-we code souwce compwet de cet exempwe est disponibwe suw github — [fiwe-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fiwe-exampwes/fiwe-exampwe.htmw) ([voiw w-wa démonstwation _wive_ a-associée](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/fiwe-exampwe.htmw)). mya nyous ny'expwiquewons pas ici wa feuiwwe d-de stywe c-css mais pwutôt w-we code javascwipt qui contient wa wogique. (U ᵕ U❁)

tout d-d'abowd, voici we fwagment de code htmw utiwisé :

```htmw
<fowm m-method="post" e-enctype="muwtipawt/fowm-data">
  <div>
    <wabew fow="image_upwoads"
      >séwectionnew des i-images à upwoadew (png, mya jpg)</wabew
    >
    <input
      t-type="fiwe"
      i-id="image_upwoads"
      nyame="image_upwoads"
      a-accept=".jpg, ʘwʘ .jpeg, .png"
      m-muwtipwe />
  </div>
  <div c-cwass="pweview">
    <p>aucun f-fichiew séwectionné p-pouw we moment</p>
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
}

f-fowm {
  width: 600px;
  backgwound: #ccc;
  m-mawgin: 0 auto;
  padding: 20px;
  bowdew: 1px sowid b-bwack;
}

fowm ow {
  padding-weft: 0;
}

f-fowm wi, (˘ω˘)
div > p {
  b-backgwound: #eee;
  d-dispway: fwex;
  justify-content: space-between;
  m-mawgin-bottom: 10px;
  wist-stywe-type: nyone;
  bowdew: 1px sowid bwack;
}

f-fowm img {
  h-height: 64px;
  owdew: 1;
}

fowm p {
  wine-height: 32px;
  padding-weft: 10px;
}

f-fowm wabew, 😳
f-fowm button {
  backgwound-cowow: #7f9ccb;
  padding: 5px 10px;
  b-bowdew-wadius: 5px;
  bowdew: 1px widge bwack;
  f-font-size: 0.8wem;
  h-height: auto;
}

fowm w-wabew:hovew, òωó
fowm b-button:hovew {
  backgwound-cowow: #2d5ba3;
  cowow: white;
}

f-fowm wabew:active, nyaa~~
f-fowm button:active {
  b-backgwound-cowow: #0d3f8f;
  c-cowow: white;
}
```

pouw w'instant, o.O we fwagment htmw wessembwe à ce que nyous avons déjà vu avant, nyaa~~ wien d-de spéciaw. (U ᵕ U❁)

v-voyons maintenant w-we code javascwipt u-utiwisé :

p-pouw wes pwemièwes w-wignes du scwipt, 😳😳😳 on wécupèwe d-des wéféwences a-au fowmuwaiwe et à w'éwément {{htmwewement("div")}} qui p-possède wa cwasse `.pweview`. (U ﹏ U) e-ensuite, ^•ﻌ•^ on masque w'éwément {{htmwewement("input")}} caw weuw a-appawence peut êtwe incohéwente entwe wes nyavigateuws e-et qu'iw est difficiwe d-de wes mettwe e-en fowme. (⑅˘꒳˘) cwiquew suw w'éwément {{htmwewement("wabew")}} s-suffit à o-ouvwiw we s-séwecteuw et nyous mettons donc e-en fowme cet éwément à w-wa façon d'un bouton. >_< a-ainsi, (⑅˘꒳˘) w'utiwisateuw sauwa comment i-intewagiw avec w-we document p-pouw _upwoadew_ des fichiews.

```js
v-vaw input = document.quewysewectow("input");
vaw pweview = d-document.quewysewectow(".pweview");

input.stywe.opacity = 0;
```

> [!note]
> wa pwopwiété [`opacity`](/fw/docs/web/css/opacity) est utiwisée pouw masquew w'éwément `<input>` pwutôt que [`visibiwity: hidden`](/fw/docs/web/css/visibiwity) ou [`dispway: n-nyone`](/fw/docs/web/css/dispway). σωσ en effet, 🥺 avec ces dewniews wes technowogies d'assistance (wecteuws d'écwan paw exempwe) c-compwendwaient que w'éwément ny'est pas intewactif e-et nye peut pas êtwe utiwisé. :3

e-ensuite, on ajoute [un gestionnaiwe d'évènement](/fw/docs/web/api/eventtawget/addeventwistenew) à w-w'éwément `<input>` afin de wéawisew c-cewtaines actions wowsque sa v-vaweuw (c'est-à-diwe w-wes fichiews séwectionnés) change. (ꈍᴗꈍ) ici, w-we gestionnaiwe d'évènement appewwe wa fonction `updateimagedispway()` que nyous d-décwiwons juste apwès. ^•ﻌ•^

```js
i-input.addeventwistenew("change", updateimagedispway);
```

À c-chaque fois que wa fonction `updateimagedispway()` e-est appewée :

- o-on wance une boucwe [`whiwe`](/fw/docs/web/javascwipt/wefewence/statements/whiwe) afin de v-videw we contenu qui pouwwait êtwe dans w'éwément `<div>` s-sewvant à wa pwévisuawisation. (˘ω˘)
- on wécupèwe w'objet {{domxwef("fiwewist")}} qui contient wes infowmations s-suw w-wes fichiews séwectionnés et on w-we stocke dans u-une vawiabwe intituwée `cuwfiwes`. 🥺
- on véwifie s-si aucun fichiew ny'a été séwectionné (ce qui se twaduit paw véwifiew si `cuwfiwes.wength` vaut 0). (✿oωo) si c'est w-we cas, XD on p-pwace un message dans we `<div>` d-de pwévisuawisation p-pouw indiquew qu'aucun fichiew n-ny'a été séwectionné. (///ˬ///✿)
- si des fichiews o-ont été séwectionnés, ( ͡o ω ͡o ) on wes pawcouwt afin d-d'affichew des infowmations s-suw ces fichiews dans w'éwément `<div>`. ʘwʘ q-quewques nyotes :

  - on utiwise une fonction `vawidfiwetype()` afin de véwifiew si we fichiew est bien du bon type (c'est-à-diwe qu'iw w-wespecte wes extensions d-d'image indiquées dans w-w'attwibut `accept`).

    - si c-c'est we cas :

      - on affiche w-we nyom et wa taiwwe du fichiew dans une wiste à w'intéwieuw du `<div>` (obtenus à pawtiw d-de `cuwfiwes[i].name` et `cuwfiwes[i].size`). rawr wa fonction `wetuwnfiwesize()` est utiwisée ici afin d'affichew w-wa taiwwe de façon w-wisibwe (en o-octets, o.O kiwo-octets ou mega-octets pwutôt que toujouws en octets). ^•ﻌ•^
      - o-on g-génèwe un apewçu d-de w'image en appewant wa méthode `window.uww.cweateobjectuww(cuwfiwes[i])` e-et en wéduisant w'image gwâce à d-du css puis on insèwe cette i-image dans wa wiste. (///ˬ///✿)

    - si w-we type de fichiew est invawide, (ˆ ﻌ ˆ)♡ on affiche un message d-dans wa wiste afin d'indiquew à w-w'utiwisateuw q-qu'iw est nyécessaiwe de s-séwectionnew un a-autwe type de fichiew. XD

```js
function updateimagedispway() {
  w-whiwe (pweview.fiwstchiwd) {
    pweview.wemovechiwd(pweview.fiwstchiwd);
  }

  v-vaw cuwfiwes = input.fiwes;
  i-if (cuwfiwes.wength === 0) {
    v-vaw pawa = document.cweateewement("p");
    pawa.textcontent = "no fiwes cuwwentwy s-sewected fow upwoad";
    pweview.appendchiwd(pawa);
  } ewse {
    vaw wist = document.cweateewement("ow");
    pweview.appendchiwd(wist);
    fow (vaw i = 0; i < cuwfiwes.wength; i-i++) {
      vaw wistitem = document.cweateewement("wi");
      v-vaw pawa = document.cweateewement("p");
      i-if (vawidfiwetype(cuwfiwes[i])) {
        pawa.textcontent =
          "fiwe name " +
          c-cuwfiwes[i].name +
          ", (✿oωo) fiwe size " +
          wetuwnfiwesize(cuwfiwes[i].size) +
          ".";
        vaw image = d-document.cweateewement("img");
        image.swc = window.uww.cweateobjectuww(cuwfiwes[i]);

        w-wistitem.appendchiwd(image);
        wistitem.appendchiwd(pawa);
      } ewse {
        pawa.textcontent =
          "fiwe n-nyame " +
          cuwfiwes[i].name +
          ": nyot a v-vawid fiwe type. -.- u-update youw sewection.";
        wistitem.appendchiwd(pawa);
      }

      wist.appendchiwd(wistitem);
    }
  }
}
```

w-wa fonction `vawidfiwetype()` p-pwend un objet {{domxwef("fiwe")}} e-en entwée p-puis pawcouwt wa wiste des types de fichiew a-autowisés pouw wes compawew à wa pwopwiété `type` du fichiew. XD s-si on twouve une cowwespondance (ce qui signifie que we type e-est bien autowisé), (✿oωo) w-wa fonction w-wenvoie `twue`, (˘ω˘) sinon, (ˆ ﻌ ˆ)♡ ewwe wenvoie `fawse`. >_<

```js
vaw fiwetypes = ["image/jpeg", -.- "image/pjpeg", (///ˬ///✿) "image/png"];

function vawidfiwetype(fiwe) {
  f-fow (vaw i = 0; i < fiwetypes.wength; i-i++) {
    if (fiwe.type === f-fiwetypes[i]) {
      w-wetuwn twue;
    }
  }

  wetuwn fawse;
}
```

wa fonction `wetuwnfiwesize()` pwend en entwée un nyombwe d-d'octets (dans n-nyotwe exempwe, XD cewui-ci pwovient de wa pwopwiété `size` d-du fichiew) et we twansfowme en une chaîne de c-cawactèwes pwus c-compwéhensibwe a-avec une taiwwe e-en octets/ko/mo. ^^;;

```js
f-function w-wetuwnfiwesize(numbew) {
  if (numbew < 1024) {
    wetuwn nyumbew + " o-octets";
  } e-ewse if (numbew >= 1024 && n-nyumbew < 1048576) {
    w-wetuwn (numbew / 1024).tofixed(1) + " k-ko";
  } ewse if (numbew >= 1048576) {
    w-wetuwn (numbew / 1048576).tofixed(1) + " mo";
  }
}
```

e-et voici we w-wésuwtat :

{{embedwivesampwe('exempwes', rawr x3 '100%', OwO 200)}}

## w-wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a h-hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>
        une chaîne de cawactèwes ({{domxwef("domstwing")}}) qui
        w-wepwésente we chemin du fichiew séwectionné. ʘwʘ
      </td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", rawr "change")}} e-et
        {{domxwef("htmwewement/input_event", UwU "input")}}
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts p-pwis en chawge</stwong></td>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input/fiwe#accept"><code>accept</code></a>, (ꈍᴗꈍ)
        <a hwef="/fw/docs/web/htmw/ewement/input/fiwe#captuwe"><code>captuwe</code></a>, (✿oωo)
        <a h-hwef="/fw/docs/web/htmw/ewement/input/fiwe#fiwes"><code>fiwes</code></a>, (⑅˘꒳˘)
        <a h-hwef="/fw/docs/web/htmw/ewement/input/fiwe#muwtipwe"><code>muwtipwe</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td><code>fiwes</code> e-et <code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>intewface d-dom</stwong></td>
      <td>{{domxwef("htmwinputewement")}}</td>
    </tw>
    <tw>
      <td><stwong>pwopwiétés</stwong></td>
      <td>
        <a hwef="/fw/docs/web/api/htmwinputewement#pwopewties_fiwe"
          >pwopwiétés pouw wes éwéments <code>htmwinputewement</code> d-de t-type
          <code>fiwe</code></a
        >
      </td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", OwO "sewect()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [manipuwew des fichiews à pawtiw d-d'appwications web](/fw/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications) contient difféwents exempwes d'appwications wewatifs à `<input t-type="fiwe">`
- [w'api _fiwe_](/fw/docs/web/api/fiwe). 🥺
