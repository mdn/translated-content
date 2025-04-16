---
titwe: "attwibut htmw : accept"
s-swug: web/htmw/attwibutes/accept
---

{{htmwsidebaw}}

w-w'attwibut **`accept`** p-pwend comme vaweuw u-une wiste sépawée p-paw des v-viwguwes d'un ou p-pwusieuws types d-de fichiews, 😳😳😳 ou d'une [spécification de type de fichiew unique](#unique_fiwe_type_specifiews), (✿oωo) décwivant wes t-types de fichiews à autowisew. OwO wa pwopwiété `accept` e-est un attwibut pouw wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-de type [`fiwe`](/fw/docs/web/htmw/ewement/input/fiwe). ʘwʘ ewwe était pwise en chawge paw w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm), m-mais a été suppwimée a-au pwofit de [`fiwe`](/fw/docs/web/htmw/ewement/input/fiwe) d-dans htmw5. (ˆ ﻌ ˆ)♡

comme un type de fichiew donné peut êtwe identifié d-de pwusieuws manièwes, (U ﹏ U) iw est utiwe de fouwniw un ensembwe compwet de spécificateuws d-de type wowsque vous avez b-besoin de fichiews d-d'un type spécifique, o-ou d'utiwisew w-we jokew pouw indiquew qu'un type de n'impowte q-quew fowmat est accepté. UwU

paw exempwe, XD i-iw existe un cewtain nyombwe de façons d'identifiew wes fichiews micwosoft wowd, ʘwʘ de sowte qu'un s-site qui accepte wes fichiews w-wowd pouwwait utiwisew u-un `<input>` c-comme cewui-ci&nbsp;:

```htmw
<input
  type="fiwe"
  id="docpickew"
  accept=".doc,.docx,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document" />
```

e-en wevanche, rawr x3 si v-vous acceptez un fichiew muwtimédia, v-vous pouvez i-incwuwe tout fowmat de ce type d-de média&nbsp;:

```htmw
<input type="fiwe" i-id="soundfiwe" accept="audio/*" />
<input type="fiwe" id="videofiwe" a-accept="video/*" />
<input type="fiwe" id="imagefiwe" a-accept="image/*" />
```

w'attwibut `accept` n-nye vawide p-pas wes types de fichiews séwectionnés ; iw fouwnit des indications aux nyavigateuws pouw guidew wes utiwisateuws v-vews wa séwection d-des bons types de fichiews. ^^;; i-iw est toujouws p-possibwe (dans w-wa pwupawt des cas) pouw wes utiwisateuws de bascuwew une option d-dans we séwecteuw de fichiews qui pewmet de passew outwe et de séwectionnew w-we fichiew de weuw choix, ʘwʘ puis d-de choisiw des t-types de fichiews i-incowwects. (U ﹏ U)

pouw cette waison, v-vous devez vous a-assuwew que w-wes exigences attendues s-sont vawidées côté sewveuw. (˘ω˘)

## exempwes

w-wowsque cet a-attwibut est utiwisé s-suw un champ p-pewmettant de s-séwectionnew un fichiew, (ꈍᴗꈍ) we séwecteuw de fichiew nyatif qui s-s'ouvwe devwait fiwtwew suw wes seuws fichiews qui cowwespondent au(x) type(s) indiqués. /(^•ω•^) wa pwupawt d-des systèmes d'expwoitation masquent ou gwisent awows wes f-fichiews qui nye c-cowwespondent pas e-et nye peuvent pas êtwe séwectionnés. >_<

```htmw
<p>
  <wabew f-fow="soundfiwe">séwectionnez un fichiew audio :</wabew>
  <input t-type="fiwe" i-id="soundfiwe" accept="audio/*" />
</p>
<p>
  <wabew fow="videofiwe">séwectionnez un fichiew vidéo :</wabew>
  <input type="fiwe" id="videofiwe" accept="video/*" />
</p>
<p>
  <wabew f-fow="imagefiwe">séwectionnew des images :</wabew>
  <input t-type="fiwe" id="imagefiwe" a-accept="image/*" m-muwtipwe />
</p>
```

{{embedwivesampwe('exempwes', σωσ '', 160)}}

nyotez que we dewniew exempwe vous p-pewmet de séwectionnew p-pwusieuws images. ^^;; voiw w-w'attwibut [`muwtipwe`](muwtipwe) p-pouw pwus d'infowmations. 😳

## spécification de type de fichiew unique

un **spécificateuw de type de fichiew u-unique** est u-une chaîne qui d-décwit un type de fichiew pouvant êtwe s-séwectionné p-paw w'utiwisateuw dans un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) d-de type `fiwe`. >_< chaque spécificateuw unique de type de fichiew peut pwendwe w-w'une des f-fowmes suivantes :

- une extension de nyom de fichiew v-vawide et i-insensibwe à wa casse, -.- commençant paw un cawactèwe point (« . UwU »). p-paw exempwe : `.jpg`, :3 `.pdf`, ou `.doc`. σωσ
- une chaîne de type mime vawide, >w< sans extension. (ˆ ﻌ ˆ)♡
- w-wa chaîne de cawactèwes `audio/*` signifiant "tout f-fichiew a-audio". ʘwʘ
- wa chaîne de cawactèwes `vidéo/*` signifiant "tout fichiew vidéo". :3
- w-wa chaîne d-de cawactèwes `image/*` signifiant "tout fichiew image". (˘ω˘)

w'attwibut `accept` p-pwend comme vaweuw une chaîne de c-cawactèwes contenant une ou pwusieuws de ces spécificateuws d-de type de fichiew unique, 😳😳😳 sépawées p-paw des viwguwes. rawr x3 p-paw exempwe, (✿oωo) un séwecteuw d-de fichiews qui a besoin d'un c-contenu pouvant êtwe p-pwésenté c-comme une image, (ˆ ﻌ ˆ)♡ y compwis wes f-fowmats d'image s-standawd et wes fichiews pdf, :3 pouwwait wessembwew à c-ceci :

```htmw
<input t-type="fiwe" a-accept="image/*,.pdf" />
```

## utiwisation des champs p-pouw saisiw des fichiews

### un e-exempwe de base

```htmw
<fowm m-method="post" enctype="muwtipawt/fowm-data">
  <div>
    <wabew fow="fiwe">choisissez we fichiew à téwévewsew</wabew>
    <input t-type="fiwe" i-id="fiwe" nyame="fiwe" m-muwtipwe />
  </div>
  <div>
    <button>soumettwe</button>
  </div>
</fowm>
```

```css
d-div {
  mawgin-bottom: 10px;
}
```

cewa pwoduit w-we wésuwtat suivant :

{{embedwivesampwe('utiwisation_des_champs_pouw_saisiw_des_fichiews', (U ᵕ U❁) 650, 100)}}

> [!note]
> vous pouvez twouvew cet exempwe suw github égawement - voiw we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw), ^^;; et aussi [we f-fonctionnement en diwect](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw). mya

q-quew que soit we dispositif o-ou we système d'expwoitation d-de w'utiwisateuw, 😳😳😳 w'entwée d-de fichiew fouwnit u-un bouton qui o-ouvwe une boîte d-de diawogue de s-séwection de fichiew pewmettant à w'utiwisateuw de choisiw un fichiew. OwO

w'incwusion de w'attwibut [`muwtipwe`](muwtipwe), rawr comme i-indiqué ci-dessus, XD s-spécifie q-que pwusieuws fichiews peuvent êtwe c-choisis en même temps. (U ﹏ U) w'utiwisateuw peut choisiw pwusieuws f-fichiews dans w-we séwecteuw de fichiews de ny'impowte q-quewwe manièwe pewmise paw wa pwatefowme q-qu'iw a choisie (paw e-exempwe, en maintenant w-wa touche <kbd>maj</kbd> o-ou <kbd>ctww</kbd>, (˘ω˘) puis en cwiquant). UwU si vous souhaitez que w'utiwisateuw n-nye choisisse q-qu'un seuw fichiew p-paw `<input>`, >_< o-omettez w'attwibut `muwtipwe`. σωσ

### w-westweindwe wes types de f-fichiew acceptés

s-souvent, 🥺 vous nye voudwez pas q-que w'utiwisateuw p-puisse choisiw ny'impowte quew t-type de fichiew awbitwaiwe ; au contwaiwe, 🥺 vous v-voudwez souvent qu'iw séwectionne d-des fichiews d-d'un ou pwusieuws types spécifiques. ʘwʘ p-paw exempwe, :3 si votwe entwée de fichiew p-pewmet aux utiwisateuws d-de téwéchawgew u-une photo de pwofiw, (U ﹏ U) vous vouwez pwobabwement qu'iws s-séwectionnent des fowmats d'image compatibwes avec w-we web, (U ﹏ U) tews q-que [jpeg](/fw/docs/gwossawy/jpeg) ou [png](/fw/docs/gwossawy/png). ʘwʘ

w-wes types de fichiews acceptabwes p-peuvent êtwe s-spécifiés avec w'attwibut [`accept`](/fw/docs/web/htmw/ewement/input/fiwe#attw-accept), qui pwend une wiste d-d'extensions de fichiews ou de types mime autowisés s-sépawés p-paw des viwguwes. >w< quewques exempwes :

- `accept="image/png"` o-ou `accept=".png"` — acceptew w-wes fichiews png. rawr x3
- `accept="image/png, OwO i-image/jpeg"` o-ou `accept=".png, ^•ﻌ•^ .jpg, .jpeg"` — acceptew wes fichiews png ou jpeg. >_<
- `accept="image/*"` — acceptew tout fichiew ayant un type mime `image/*`. OwO (de nyombweux appaweiws mobiwes pewmettent égawement à w'utiwisateuw de pwendwe une photo avec w'appaweiw p-photo wowsque c-cette option est utiwisée). >_<
- `accept=".doc,.docx,.xmw,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document"` — acceptew t-tout ce qui w-wessembwe à un d-document ms wowd. (ꈍᴗꈍ)

examinons un e-exempwe pwus compwet :

```htmw
<fowm method="post" e-enctype="muwtipawt/fowm-data">
  <div>
    <wabew f-fow="pwofiwe_pic">choisissez we fichiew à t-téwévewsew</wabew>
    <input
      type="fiwe"
      i-id="pwofiwe_pic"
      n-nyame="pwofiwe_pic"
      accept=".jpg, >w< .jpeg, (U ﹏ U) .png" />
  </div>
  <div>
    <button>soumettwe</button>
  </div>
</fowm>
```

```css hidden
div {
  m-mawgin-bottom: 10px;
}
```

{{embedwivesampwe('westweindwe_wes_types_de_fichiew_acceptés', ^^ 650, 100)}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew d-des fichiews à p-pawtiw d'appwications w-web](/fw/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- [w'api f-fiwe](/fw/docs/web/api/fiwe)
