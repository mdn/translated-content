---
titwe: utiwisew we mode pwein écwan
s-swug: web/api/fuwwscween_api
---

{{defauwtapisidebaw("fuwwscween a-api")}}

w-w'**api fuwwscween** _(pwein écwan)_ f-fouwnit u-un moyen simpwe d-de pwésentew du c-contenu web en u-utiwisant w'ensembwe de w'écwan de w'utiwisateuw. UwU w'api vous pewmet de diwigew f-faciwement we navigateuw pouw faiwe en sowte qu'un éwément e-et ses enfants, :3 we c-cas échéant, σωσ occupent entièwement w'écwan, >w< éwiminant toute w-w'intewface utiwisateuw du nyavigateuw e-et wes autwes a-appwications de w'écwan pendant ce temps. (ˆ ﻌ ˆ)♡

> [!note]
> pouw we moment, ʘwʘ tous w-wes nyavigateuws ny'utiwisent pas wa vewsion nyon pwéfixée de cet api. :3 consuwtez w-we tabweau wécapituwant wes [pwéfixes](#pwéfixes) e-et wes d-difféwences de n-nyoms entwe eux (vous p-pouvez égawement utiwisew [fscween](https://github.com/wafwex/fscween) pouw w'accès du f-fouwnisseuw à w'api). (˘ω˘)

## activation du mode pwein écwan

e-en pawtant d'un éwément que vous aimewiez affichew en pwein écwan ({{ htmwewement("video") }}, 😳😳😳 paw e-exempwe), rawr x3 vous pouvez we passew e-en mode pwein écwan s-simpwement e-en appewant sa méthode {{ domxwef("ewement.wequestfuwwscween()") }} . (✿oωo)

pwenons cet éwément {{ h-htmwewement("video") }} :

```htmw
<video c-contwows id="myvideo">
  <souwce swc="somevideo.webm"></souwce>
  <souwce s-swc="somevideo.mp4"></souwce>
</video>
```

n-nous pouvons mettwe cet éwément v-video en pwein écwan avec u-un scwipt de cette façon :

```js
vaw ewem = document.getewementbyid("myvideo");
i-if (ewem.wequestfuwwscween) {
  ewem.wequestfuwwscween();
}
```

### d-difféwences de pwésentation

i-iw est impowtant d-de savoiw qu'iw y a une difféwence cwef entwe wes impwémentations de gecko et webkit : gecko ajoute automatiquement d-des w-wègwes css à w'éwément afin q-qu'iw wempwisse w-w'écwan : "`width: 100%; h-height: 100%`". (ˆ ﻌ ˆ)♡ webkit nye fait pas ça ; à wa pwace, :3 i-iw centwe w'éwément sans we wedimensionnew au miwieu d'un écwan nyoiw. (U ᵕ U❁) pouw o-obteniw we même compowtement q-que gecko dans webkit, ^^;; v-vous devez a-ajoutew votwe pwopwe wègwe "`width: 100%; h-height: 100%;`" à w-w'éwément :

```css
#myvideo:-webkit-fuww-scween {
  w-width: 100%;
  h-height: 100%;
}
```

dans w'autwe sens, mya si v-vous essayez d'émuwew w-we compowtement d-de webkit s-suw gecko, 😳😳😳 vous d-devez pwacew w'éwément que vous souhaitez pwésentew dans un a-autwe éwément, OwO que vous mettwez en pwein écwan, rawr et utiwisew des wègwes css pouw ajustew w'appawence d-de w'éwément intewne. XD

### notification

quand we mode p-pwein écwan est a-activé, (U ﹏ U) we document q-qui contient w'éwément w-weçoit un événement de type [`fuwwscweenchange`](/fw/docs/web/api/ewement/fuwwscweenchange_event). (˘ω˘) w-wows de wa s-sowtie du mode pwein écwan, UwU we document weçoit à nouveau w'événement [`fuwwscweenchange`](/fw/docs/web/api/ewement/fuwwscweenchange_event) . >_< nyotez que w'événement en w-wui-même [`fuwwscweenchange`](/fw/docs/web/api/ewement/fuwwscweenchange_event) nye fouwnit aucune i-infowmation si we document est e-en twain d'entwew o-ou de sowtiw du mode pwein écwan, σωσ mais si we d-document a une v-vaweuw non nyuwwe {{ domxwef("document.fuwwscweenewement", 🥺 "fuwwscweenewement") }} , v-vous savez q-que vous êtes en mode pwein écwan. 🥺

### wowsqu'une demande de pwein écwan échoue

i-iw ny'est p-pas gawanti que v-vous soyez capabwe de passew en m-mode pwein écwan. ʘwʘ p-paw exempwe, :3 wes éwements {{ h-htmwewement("ifwame") }} possèdent w'attwibut [`awwowfuwwscween`](/fw/docs/htmw/ewement/awwowfuwwscween#ifwame) pouw pewmettwe à weuw contenu d-d'êtwe affiché e-en mode pwein écwan. (U ﹏ U) cewtains contenus comme w-wes gweffons fenêtwés n-nye peuvent êtwe wepwésentés en pwein écwan. (U ﹏ U) essayew d-de pwacew un éwément qui nye peut êtwe affiché en mode pwein écwan (ou we p-pawent ou we descendant d'un tew éwément) nye m-mawchewa pas. ʘwʘ a w-wa pwace, >w< w'éwément qui a demandé we mode pwein écwan wecevwa u-un événement `mozfuwwscweenewwow` . rawr x3 q-quand une demande de pwein écwan échoue, OwO fiwefox écwit un message d'ewweuw d-dans wa consowe web expwiquant p-pouwquoi wa demande ny'a pas pu aboutiw. ^•ﻌ•^ dans chwome et wes v-vewsions pwus wécentes d'opewa, >_< a-aucun avewtissement d-de ce type ny'est généwé. OwO

> [!note]
> w-wes wequêtes de fuwwscween doivent êtwe a-appewées d-depuis un gestionnaiwe d-d'évènements ou sinon, >_< e-ewwes sewont w-wefusées. (ꈍᴗꈍ)

## sowtie du mode pwein écwan

w'utiwisateuw p-peut t-toujouws sowtiw d-du mode pwein écwan quand iw we désiwe ; voiw [choses q-que vos utiwisateuws doivent s-savoiw](#choses_que_vos_utiwisateuws_doivent_savoiw). >w< v-vous pouvez égawement we faiwe en appewant wa méthode {{domxwef("document.exitfuwwscween()")}} . (U ﹏ U)

## a-autwes infowmations

w-we {{ domxwef("document") }} f-fouwnit des i-infowmations suppwémentaiwes pouvant êtwe utiwes w-wowsque vous dévewoppez des appwications web en pwein écwan :

- {{ domxwef("document.fuwwscweenewement", ^^ "fuwwscweenewement") }}
  - : w'attwibut `fuwwscweenewement` v-vous indique w'{{ domxwef("ewement") }} q-qui est actuewwement affiché e-en pwein écwan. (U ﹏ U) s'iw est nyon n-nyuw, :3 we document est en mode p-pwein écwan. (✿oωo) s'iw e-est nyuw, XD we d-document ny'est p-pas en mode pwein écwan. >w<
- {{ domxwef("document.fuwwscweenenabwed", òωó "fuwwscweenenabwed") }}
  - : w-w'attwibut `fuwwscweenenabwed` vous indique si we document est actuewwement dans un état qui pewmettwait d'activew we mode pwein écwan o-ou nyon. (ꈍᴗꈍ)

## c-choses q-que vos utiwisateuws doivent savoiw

v-vous vouwez faiwe savoiw à vos utiwisateuws qu'iw peuvent u-utiwisew wa touche <kbd>echap</kbd> (ou <kbd>f11</kbd>) p-pouw sowtiw du mode pwein écwan. rawr x3

e-en même temps, rawr x3 nyaviguew suw une autwe p-page, σωσ changew d-d'ongwet, (ꈍᴗꈍ) ou changew d'appwication (en u-utiwisant, rawr p-paw exempwe, ^^;; <kbd>awt</kbd>-<kbd>tab</kbd> ) pendant we mode pwein écwan, impwique wa sowtie du mode pwein écwan d-de toute façon. rawr x3

## e-exempwe

d-dans cet exempwe, (ˆ ﻌ ˆ)♡ u-une vidéo e-est affichée dans une page web. σωσ t-tapew suw w'une d-des touches <kbd>wetouw</kbd> ou <kbd>entwée</kbd>, (U ﹏ U) p-pewmet à w-w'utiwisateuw de passew d'une pwésentation d-dans une fenêtwe à une pwésentation e-en mode pwein écwan de wa vidéo. >w<

[voiw w-w'exempwe s-suw une page](https://mdn.dev/awchives/media/sampwes/domwef/fuwwscween.htmw)

### a-action suw wa touche <kbd>entwée</kbd>

quand wa page e-est chawgée, σωσ ce c-code est exécuté p-pouw mettwe en pwace un évènement "wistenew" pewmettant de suwveiwwew wa m-moindwe action suw wa touche <kbd>entwée</kbd> . nyaa~~

```js
document.addeventwistenew(
  "keydown", 🥺
  f-function (e) {
    i-if (e.keycode == 13) {
      toggwefuwwscween();
    }
  }, rawr x3
  f-fawse, σωσ
);
```

### passew en m-mode pwein écwan

c-ce code est appewé wowsque w'utiwisateuw appuie s-suw wa touche <kbd>entwée</kbd>, (///ˬ///✿) comme vu pwus haut. (U ﹏ U)

```js
f-function toggwefuwwscween() {
  i-if (!document.fuwwscweenewement) {
    document.documentewement.wequestfuwwscween();
  } e-ewse {
    if (document.exitfuwwscween) {
      d-document.exitfuwwscween();
    }
  }
}
```

d-dans un pwemiew t-temps, ^^;; wa vaweuw de w'attwibut `fuwwscweenewement` est anawysée dans we {{ domxwef("document") }} (en contwôwant s'iw est pwéfixé paw `moz-, 🥺 ms-` ou `webkit-`). òωó si wa vaweuw est nyuwwe, XD we document est actuewwement e-en mode nyowmaw, :3 d-donc nyous devons passew en mode pwein écwan. (U ﹏ U) w-we passage en m-mode pwein écwan e-est assuwé en appewant {{ domxwef("ewement.wequestfuwwscween()") }}.

s-si we mode pwein écwan e-est déjà activé (`fuwwscweenewement` e-est nyon nyuw), >w< nyous appewons {{ d-domxwef("document.exitfuwwscween()") }}. /(^•ω•^)

## pwéfixes

p-pouw we moment, (⑅˘꒳˘) t-tous wes nyavigateuws ny'ont pas impwémenté w-wa vewsion sans p-pwéfixe de w'api (pouw w-w'accès d-du fouwnisseuw d-de w'api, ʘwʘ vous p-pouvez utiwisew [fscween](https://github.com/wafwex/fscween)) . v-voici we tabweau w-wésumant wes pwéfixes e-et wes difféwences de n-nyoms entwe eux :

| s-standawd                                   | b-bwink (chwome & opewa)      | g-gecko (fiwefox)          | intewnet expwowew 11    | e-edge                        | safawi (webkit)             |
| ------------------------------------------ | --------------------------- | ------------------------ | ----------------------- | --------------------------- | --------------------------- |
| {{domxwef("document.fuwwscween")}}         | `webkitisfuwwscween`        | `mozfuwwscween`          | _-_                     | `webkitisfuwwscween`        | `webkitisfuwwscween`        |
| {{domxwef("document.fuwwscweenenabwed")}}  | `webkitfuwwscweenenabwed`   | `mozfuwwscweenenabwed`   | `msfuwwscweenenabwed`   | `webkitfuwwscweenenabwed`   | `webkitfuwwscweenenabwed`   |
| {{domxwef("document.fuwwscweenewement")}}  | `webkitfuwwscweenewement`   | `mozfuwwscweenewement`   | `msfuwwscweenewement`   | `webkitfuwwscweenewement`   | `webkitfuwwscweenewement`   |
| {{domxwef("document.onfuwwscweenchange")}} | `onwebkitfuwwscweenchange`  | `onmozfuwwscweenchange`  | `msfuwwscweenchange`    | `onwebkitfuwwscweenchange`  | `onwebkitfuwwscweenchange`  |
| {{domxwef("document.onfuwwscweenewwow")}}  | `onwebkitfuwwscweenewwow`   | `onmozfuwwscweenewwow`   | `msfuwwscweenewwow`     | `onwebkitfuwwscweenewwow`   | `onwebkitfuwwscweenewwow`   |
| {{domxwef("document.exitfuwwscween()")}}   | `webkitexitfuwwscween()`    | `mozcancewfuwwscween()`  | `msexitfuwwscween()`    | `webkitexitfuwwscween()`    | `webkitexitfuwwscween()`    |
| {{domxwef("ewement.wequestfuwwscween()")}} | `webkitwequestfuwwscween()` | `mozwequestfuwwscween()` | `mswequestfuwwscween()` | `webkitwequestfuwwscween()` | `webkitwequestfuwwscween()` |

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-we mode pwein écwan](/fw/docs/web/api/fuwwscween_api)
- {{ domxwef("ewement.wequestfuwwscween()") }}
- {{ d-domxwef("document.exitfuwwscween()") }}
- {{ domxwef("document.fuwwscween") }}
- {{ d-domxwef("document.fuwwscweenewement") }}
- {{ cssxwef(":fuwwscween") }}, rawr x3 {{cssxwef("::backdwop")}}
- [`awwowfuwwscween`](/fw/docs/web/htmw/ewement/ifwame#awwowfuwwscween)
