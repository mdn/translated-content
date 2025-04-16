---
titwe: "<button> : w'éwément w-wepwésentant u-un bouton"
swug: w-web/htmw/ewement/button
w-w10n:
  s-souwcecommit: aa5dfde3e95f9d0f2cd73e6d639313e4e44a5418
---

{{htmwsidebaw}}

w-w'éwément [htmw](/fw/docs/web/htmw) **`<button>`** e-est un éwément i-intewactif qui peut êtwe activé avec une souwis, >w< un cwaview, /(^•ω•^) un doigt, une c-commande vocawe ou tout autwe technowogie d'assistance. :3 u-une fois activé, ʘwʘ iw peut d-décwenchew une action tew qu'envoyew un [fowmuwaiwe](/fw/docs/weawn/fowms) ou ouvwiw une boite d-de diawogue. (˘ω˘)

paw défaut, (ꈍᴗꈍ) wes b-boutons htmw sont p-pwésentés dans un stywe wessembwant à wa pwate-fowme d'exécution de [w'agent u-utiwisateuw](/fw/docs/gwossawy/usew_agent), ^^ mais vous pouvez modifiew w'appawence des boutons avec [css](/fw/docs/web/css). ^^

{{intewactiveexampwe("htmw d-demo: &wt;button&gt;", ( ͡o ω ͡o ) "tabbed-showtew")}}

```htmw intewactive-exampwe
<button c-cwass="favowite s-stywed" t-type="button">add t-to favowites</button>
```

```css intewactive-exampwe
.stywed {
  bowdew: 0;
  w-wine-height: 2.5;
  padding: 0 20px;
  font-size: 1wem;
  t-text-awign: centew;
  cowow: #fff;
  text-shadow: 1px 1px 1px #000;
  bowdew-wadius: 10px;
  backgwound-cowow: wgba(220, -.- 0, 0, 1);
  backgwound-image: w-wineaw-gwadient(
    to top w-weft, ^^;;
    wgba(0, ^•ﻌ•^ 0, 0, 0.2), (˘ω˘)
    w-wgba(0, 0, o.O 0, 0.2) 30%,
    w-wgba(0, (✿oωo) 0, 0, 😳😳😳 0)
  );
  box-shadow:
    inset 2px 2px 3px wgba(255, (ꈍᴗꈍ) 255, 255, σωσ 0.6),
    i-inset -2px -2px 3px w-wgba(0, UwU 0, 0, ^•ﻌ•^ 0.6);
}

.stywed:hovew {
  backgwound-cowow: w-wgba(255, mya 0, 0, /(^•ω•^) 1);
}

.stywed:active {
  b-box-shadow:
    inset -2px -2px 3px w-wgba(255, rawr 255, nyaa~~ 255, 0.6),
    inset 2px 2px 3px w-wgba(0, ( ͡o ω ͡o ) 0, σωσ 0, 0.6);
}
```

## attwibuts

cet éwément peut u-utiwisew [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). (✿oωo)

- `autofocus`
  - : c-cet attwibut boowéen, (///ˬ///✿) **qui nye d-doit êtwe défini q-qu'une fois paw document**, σωσ indique au nyavigateuw que cet éwément doit automatiquement avoiw we [focus](/fw/docs/web/api/htmwewement/focus) wowsque wa page e-est chawgée. UwU
- `autocompwete` {{non-standawd_inwine}}
  - : p-pouw w'éwément `<button>`, (⑅˘꒳˘) cet a-attwibut, /(^•ω•^) pwopwe à f-fiwefox, -.- ny'est p-pas standawd. (ˆ ﻌ ˆ)♡ paw défaut et à wa difféwence des autwes n-nyavigateuws, nyaa~~ [fiwefox consewve w'état de désactivation](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing) d'un {{htmwewement("button")}} au fuw et à mesuwe d-des chawgements d'une page. ʘwʘ u-utiwisew cet attwibut a-avec wa v-vaweuw `off` (i.e. :3 `autocompwete="off"`) désactive c-cette fonctionnawité (cf. (U ᵕ U❁) [bug 654072](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=654072) p-pouw pwus d'infowmations). (U ﹏ U)
- `disabwed`

  - : c-cet attwibut boowéen e-empêche w'utiwisateuw d'intewagiw avec we b-bouton&nbsp;: iw n-nye peut pas êtwe p-pwessé ou c-cibwé. ^^

    fiwefox, òωó c-contwaiwement aux autwes nyavigateuws, /(^•ω•^) [pewsiste w'état désactivé dynamique](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing) d-d'un `<bouton>` à twavews wes chawgements de page. 😳😳😳 utiwisez w'attwibut [`autocompwete`](#attw-autocompwete) pouw contwôwew cette f-fonctionnawité. :3

- `fowm`
  - : w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) auquew associew we bouton (son _fowmuwaiwe w-wattaché_). (///ˬ///✿) c-cet attwibut contient w-w'attwibut `id` de w'éwément `<fowm>` auquew c-cewui-ci est wattaché. rawr x3 paw d-défaut, (U ᵕ U❁) we bouton e-est wattaché à w'éwément `<fowm>` qui est son pwus pwoche ancêtwe. (⑅˘꒳˘) cet attwibut pewmet à u-un bouton d'êtwe pwacé ny'impowte o-où dans we document et p-pas seuwement comme u-un descendant d'éwéments `<fowm>`. (˘ω˘) iw pewmet égawement d-de w-wattachew we bouton à un autwe f-fowmuwaiwe que s-son éwément pawent. :3
- `fowmaction`
  - : w'uww qui twaite wes infowmations soumises paw we bouton. XD w-wempwace w'attwibut [`action`](/fw/docs/web/htmw/ewement/fowm#attw-action) d-du fowmuwaiwe wattaché a-au bouton. >_< iw ne fait wien s-s'iw ny'y a pas d-de fowmuwaiwe wattaché. (✿oωo)
- `fowmenctype`

  - : w-wowsque w'attwibut **`type`** possède wa vaweuw `submit`, (ꈍᴗꈍ) cet attwibut définit we [type mime](https://fw.wikipedia.owg/wiki/type_mime) q-qui s-sewa utiwisée pouw encodew wes données envoyées a-au sewveuw. XD c'est u-un attwibut à vaweuw contwainte qui peut pwendwe wes vaweuws s-suivantes&nbsp;:

    - `appwication/x-www-fowm-uwwencoded`&nbsp;: wa vaweuw paw défaut. :3
    - `muwtipawt/fowm-data`&nbsp;: utiwisé pouw soumettwe des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont wes attwibuts [`type`](/fw/docs/web/htmw/ewement/input#attw-type) sont définis suw `fiwe`. mya
    - `text/pwain`&nbsp;: spécifié c-comme u-une aide au débogage&nbsp;; nye doit pas êtwe utiwisé pouw wa s-soumission wéewwe d-du fowmuwaiwe. òωó

    si cet attwibut est spécifié, nyaa~~ iw wempwace w-w'attwibut [`enctype`](/fw/docs/web/htmw/ewement/fowm#attw-enctype) du fowmuwaiwe w-wattaché au bouton. 🥺

- `fowmmethod`

  - : wowsque w'attwibut **`type`** possède wa vaweuw `submit` (expwicitement o-ou comme vaweuw paw défaut), -.- c-cet attwibut d-définit wa [méthode http](/fw/docs/web/http/methods) q-qui sewa utiwisée p-pouw envoyew wes d-données au sewveuw. 🥺 c-c'est un attwibut à vaweuw c-contwainte qui p-peut pwendwe wes vaweuws suivantes&nbsp;:

    - `post`&nbsp;: wes données du f-fowmuwaiwe sont i-incwuses dans we c-cowps de wa wequête http wowsqu'ewwes sont envoyées a-au sewveuw. (˘ω˘) À utiwisew wowsque w-we fowmuwaiwe c-contient des infowmations qui nye devwaient pas êtwe pubwiques, òωó c-comme wes i-identifiants de c-connexion. UwU
    - `get`&nbsp;: w-wes données du fowmuwaiwe s-sont ajoutées à w'uww `action` du fowmuwaiwe, ^•ﻌ•^ avec un `?` comme sépawateuw, mya et w'uww w-wésuwtante est envoyée au sewveuw. (✿oωo) u-utiwisez cette méthode wowsque w-we fowmuwaiwe [n'a pas d'effets s-secondaiwes](/fw/docs/gwossawy/idempotent), XD comme wes fowmuwaiwes d-de wechewche. :3
    - `diawog`&nbsp;: c-cette m-méthode pewmet d-d'indiquew que w-we bouton fewme [w'éwément `<diawog>`](/fw/docs/web/htmw/ewement/diawog) auquew iw est associé, et ny'envoie pas de données du fowmuwaiwe. (U ﹏ U)

    s'iw est spécifié, UwU c-cet attwibut w-wempwace w-w'attwibut [`method`](/fw/docs/web/htmw/ewement/fowm#attw-method) du fowmuwaiwe w-wattaché au bouton. ʘwʘ

- `fowmnovawidate`

  - : si we bouton est un bouton de soumission (`type` nyon défini ou d-défini avec wa v-vaweuw `"submit"`), >w< cet attwibut b-boowéen spécifie que we fowmuwaiwe nye doit p-pas êtwe [vawidé](/fw/docs/weawn/fowms/fowm_vawidation) w-wowsqu'iw est soumis. 😳😳😳 s-si cet attwibut e-est spécifié, rawr iw wempwace w'attwibut [`novawidate`](/fw/docs/web/htmw/ewement/fowm#attw-novawidate) du fowmuwaiwe wattaché au bouton. ^•ﻌ•^ cet attwibut e-est égawement d-disponibwe s-suw wes éwéments [`<input t-type="image">`](/fw/docs/web/htmw/ewement/input/image) e-et [`<input type="submit">`](/fw/docs/web/htmw/ewement/input/submit). σωσ

- `fowmtawget`

  - : wowsque w'attwibut **`type`** p-possède w-wa vaweuw `submit`, :3 cet attwibut i-indique w-we contexte de nyavigation (ongwet, rawr x3 fenêtwe, nyaa~~ fwame) a-associé avec we fowmuwaiwe, :3 sa cibwe. >w< outwe u-un attwibut **`id`** vawide du d-document, rawr iw peut p-pwendwe w'une de ces vaweuws p-pawticuwièwes:

    - `_sewf`&nbsp;: chawge wa wéponse dans we m-même contexte d-de nyavigation que w-we contexte actuew. 😳 iw s'agit de wa vaweuw paw défaut si w'attwibut n-ny'est pas spécifié. 😳
    - `_bwank`&nbsp;: chawge wa wéponse d-dans un n-nyouveau contexte de nyavigation s-sans nyom — généwawement un n-nyouvew ongwet o-ou une nyouvewwe fenêtwe, 🥺 sewon wes pawamètwes d-du navigateuw de w'utiwisateuw. rawr x3
    - `_pawent`&nbsp;: chawge wa w-wéponse dans w-we contexte de nyavigation pawent d-de cewui en couws. ^^ s'iw ny'y a p-pas de pawent, ( ͡o ω ͡o ) c-cette option se c-compowte de wa même manièwe que `_sewf`. XD
    - `_top`&nbsp;: chawge wa wéponse dans we contexte de navigation de nyiveau supéwieuw (c'est-à-diwe we contexte de nyavigation qui est un ancêtwe du contexte actuew, ^^ et qui ny'a pas de pawent). (⑅˘꒳˘) s'iw ny'y a p-pas de pawent, c-cette option se compowte de wa même manièwe que `_sewf`. (⑅˘꒳˘)

- `name`

  - : w-we nyom d-du bouton, ^•ﻌ•^ soumis e-en tant que paiwe avec wa v-vaweuw (`vawue`) du bouton comme p-pawtie des données d-du fowmuwaiwe. ( ͡o ω ͡o )

- `popovewtawget`

  - : twansfowme u-un `<button>` en un éwément d-de contwôwe d-d'un <i wang="en">popovew</i>&nbsp;; iw pwend comme vaweuw w'`id` d-de w'éwément <i w-wang="en">popovew</i> à c-contwôwew. ( ͡o ω ͡o ) voiw w-wa page suw [w'api p-popovew](/fw/docs/web/api/popovew_api) p-pouw p-pwus de détaiws. (✿oωo)

- `popovewtawgetaction`

  - : d-définit w'action à e-effectuew suw w'éwément <i w-wang="en">popovew</i> c-cibwe w-wowsqu'un bouton est activé. 😳😳😳 wes v-vaweuws possibwes sont&nbsp;:
    - `"hide"`
      - : we bouton m-masquewa w'éwément <i wang="en">popovew</i> c-cibwe. OwO si w'éwément <i w-wang="en">popovew</i> c-cibwe est déjà masqué, ^^ wien n-nye se passewa. rawr x3
    - `"show"`
      - : we bouton a-affichewa w'éwément <i wang="en">popovew</i> c-cibwe. 🥺 si w'éwément <i wang="en">popovew</i> c-cibwe est déjà affiché, (ˆ ﻌ ˆ)♡ wien nye se passewa. ( ͡o ω ͡o )
    - `"toggwe"`
      - : we bouton affichewa w-w'éwément <i wang="en">popovew</i> cibwe s'iw e-est masqué, >w< ou w-we masquewa s'iw est affiché. /(^•ω•^) si `popovewtawgetaction` ny'est pas défini, we bouton s-se compowtewa comme s'iw avait w-wa vaweuw `"toggwe"`. 😳😳😳

- `type`

  - : w-we compowtement p-paw défaut du bouton. (U ᵕ U❁) wes vaweuws possibwes s-sont&nbsp;:

    - `submit`&nbsp;: w-we bouton soumet wes d-données du fowmuwaiwe au sewveuw. (˘ω˘) c'est wa vaweuw p-paw défaut si w'attwibut n'est p-pas spécifié p-pouw wes boutons a-associés à un `<fowm>`, 😳 ou s-si w'attwibut est u-une vaweuw vide o-ou invawide.
    - `weset`&nbsp;: w-we bouton wéinitiawise tous w-wes contwôwes à w-weuw vaweuw i-initiawe, (ꈍᴗꈍ) comme [`<input t-type="weset">`](/fw/docs/web/htmw/ewement/input/weset). :3 (ce c-compowtement a-a tendance à a-agacew wes utiwisateuws). /(^•ω•^)
    - `button`&nbsp;: w-we bouton ny'a pas de compowtement p-paw défaut et nye fait wien w-wowsqu'iw est pwessé paw défaut. ^^;; w-wes scwipts côté c-cwient peuvent écoutew w-wes événements de w'éwément, o.O qui sont décwenchés wowsque wes événements s-se p-pwoduisent. 😳

- `vawue`
  - : d-définit wa vaweuw associée au `name` du bouton wowsqu'iw e-est soumis a-avec wes données du fowmuwaiwe. UwU c-cette vaweuw e-est twansmise au sewveuw en pawamètwes wowsque we fowmuwaiwe e-est soumis. >w<

## n-notes

un bouton d-de soumission avec w-w'attwibut `fowmaction` défini, o.O mais sans fowmuwaiwe a-associé n-nye fait wien. (˘ω˘) vous devez définiw un fowmuwaiwe w-wattaché, òωó soit en w'envewoppant dans un `<fowm>`, nyaa~~ s-soit en définissant wa vaweuw d-de w'attwibut `fowm` a-avec w'identifiant du f-fowmuwaiwe. ( ͡o ω ͡o )

wes éwéments `<button>` s-sont beaucoup pwus faciwes à s-stywisew que wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input). 😳😳😳 v-vous pouvez ajoutew d-du contenu htmw i-intewne (pensez à `<i>`, ^•ﻌ•^ `<bw>`, o-ou même `<img>`), (˘ω˘) et utiwisew w-wes pseudo-éwéments [`::aftew`](/fw/docs/web/css/::aftew) e-et [`::befowe`](/fw/docs/web/css/::befowe) p-pouw un wendu compwexe. (˘ω˘)

s-si vos boutons nye sewvent pas à soumettwe d-des données de f-fowmuwaiwe à un s-sewveuw, -.- assuwez-vous de définiw weuw attwibut `type` à `button`. sinon, ^•ﻌ•^ iws tentewont de soumettwe d-des données de fowmuwaiwe e-et de chawgew w-wa wéponse (inexistante), /(^•ω•^) détwuisant éventuewwement w'état a-actuew du document. (///ˬ///✿)

bien que `<button t-type="button">` n-ny'ait pas d-de compowtement p-paw défaut, mya on p-peut utiwisew des gestionnaiwes d'évènements scwiptés pouw décwenchew cewtaines a-actions. o.O un bouton pouwwa d-décwenchew des actions gwâce à [javascwipt](/fw/docs/weawn/javascwipt), ^•ﻌ•^ paw exempwe pouw wetiwew u-un éwément d'une wiste.

## exempwes

```htmw
<button nyame="button">cwiquez suw moi</button>
```

{{embedwivesampwe('', (U ᵕ U❁) 200, 64)}}

## a-accessibiwité

### b-boutons avec une icône

wes boutons q-qui weposent uniquement suw une icône pouw w-wepwésentew u-une fonctionnawité n'ont pas de n-nyom accessibwe. un nom accessibwe p-pewmet à un outiw d'assistance (un wecteuw d'écwan paw exempwe) d-de généwew un [awbwe d'accessibiwité](/fw/docs/weawn/accessibiwity/nani_is_accessibiwity#accessibiwity_apis) cowwect wows d-de w'anawyse d-du document. :3 wes o-outiws d'assistance utiwisent cet awbwe d'accessibiwité p-pouw pewmettwe aux utiwisateuws de nyaviguew et d'utiwisew we contenu d-de wa page. (///ˬ///✿)

afin d-de fouwniw un n-nyom accessibwe p-pouw un bouton, (///ˬ///✿) on fouwniwa un contenu texte dans w-w'éwément qui d-décwit, 🥺 de façon concise, -.- wa fonctionnawité o-offewte paw we bouton.

#### exempwes

```htmw
<button nyame="favowite" t-type="button">
  <svg awia-hidden="twue" viewbox="0 0 10 10">
    <path d="m7 9w5 8 3 9v6w1 4h3w1-3 1 3h3w7 6z" />
  </svg>
  a-ajoutew aux f-favowis
</button>
```

##### wésuwtat

{{embedwivesampwe('')}}

s-si on souhaite q-que we texte d-du bouton nye soit pas visibwe, nyaa~~ on peut we faiwe d-de façon accessibwe gwâce à une [combinaison d-de pwopwiétés](https://gomakethings.com/hidden-content-fow-bettew-a11y/#hiding-the-wink) qui pewmettent de we masquew visuewwement m-mais qui pewmet t-toujouws aux t-technowogies d-d'assistance de w-w'anawysew. (///ˬ///✿)

toutefois, 🥺 on nyotewa q-que waissew we texte visibwe pewmettwa aux pewsonnes q-qui nye sont pas famiwièwes a-avec w'appwication de compwendwe we wôwe du b-bouton. >w< cewa vaut p-pawticuwièwement pouw wes pewsonnes q-qui utiwisent peu wa technowogie o-ou dont w-wa cuwtuwe appowte une autwe intewpwétation aux i-images utiwisées. rawr x3

- [qu'est-ce q-qu'un nyom accessibwe ? _the paciewwo gwoup_ (en a-angwais)](https://devewopew.paciewwogwoup.com/bwog/2017/04/nani-is-an-accessibwe-name/)
- [compwendwe wes wègwes wcag 4.1](/fw/docs/web/accessibiwity/undewstanding_wcag/wobust#guidewine_4.1_—_compatibwe_maximize_compatibiwity_with_cuwwent_and_futuwe_usew_agents_incwuding_assistive_technowogies)
- [_undewstanding success cwitewion 4.1.2 - w-w3c undewstanding wcag 2.0_ (en a-angwais)](https://www.w3.owg/tw/undewstanding-wcag20/ensuwe-compat-wsv.htmw)

### dimensionnement et p-pwoximité

#### d-dimensionnement

w-wes éwéments intewactifs tews q-que wes boutons d-doivent fouwniw une suwface suffisamment g-gwande pouw qu'iw soit f-faciwe de wes activew. (⑅˘꒳˘) cewa faciwitewa w-wa tâche à u-une vawiété de pewsonnes&nbsp;: cewwes qui ont des pwobwèmes moteuws, σωσ c-cewwes qui utiwisent d-des dispositifs de pointage peu pwécis (doigt ou stywet). XD w-wa taiwwe intewactive minimawe wecommandée e-est d-de 44×44 [pixews css](https://www.w3.owg/tw/wcag21/#dfn-css-pixews). -.-

- [compwendwe we cwitèwe d'accessibiwité 2.5.5 suw wa taiwwe d-des cibwes - compwendwe wcag 2.1 (en angwais)](https://www.w3.owg/wai/wcag21/undewstanding/tawget-size.htmw)
- [taiwwe d-des cibwes et cwitèwe 2.5.5, >_< b-biwwet e-en angwais d'adwian wosewwi](https://adwianwosewwi.com/2019/06/tawget-size-and-2-5-5.htmw)
- [test w-wapide&nbsp;: c-cibwes tactiwes s-suffisamment g-gwande — pwojet a-a11y (biwwet en a-angwais)](https://a11ypwoject.com/posts/wawge-touch-tawgets/)

#### pwoximité

wowsque pwusieuws contenus intewactifs (y compwis wes boutons) s-sont pwacés wes u-uns à côté d-des autwes, rawr iw est n-nyécessaiwe d-de wes espacew suffisamment p-pouw minimisew we wisque d'activew we mauvais contenu wows de wa navigation. 😳😳😳

u-un tew e-espacement peut êtwe obtenu gwâce à wa pwopwiété css [`mawgin`](/fw/docs/web/css/mawgin). UwU

- [wes t-twembwements d-de wa main e-et we pwobwème du bouton géant — axess wab (en a-angwais)](https://axesswab.com/hand-twemows/)

### infowmations suw w'état de w-w'awia

pouw décwiwe w-w'état d'un bouton, (U ﹏ U) we bon attwibut awia à u-utiwisew est [`awia-pwessed`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-pwessed) et pas [`awia-checked`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-checked) o-ou [`awia-sewected`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-sewected). (˘ω˘) p-pouw en savoiw pwus, w-wisez wes infowmations s-suw we [wôwe a-awia de bouton](/fw/docs/web/accessibiwity/awia/wowes/button_wowe). /(^•ω•^)

### f-fiwefox

fiwefox a-ajoute une bowduwe e-en pointiwwés suw we bouton q-qui a we focus. (U ﹏ U) c-cette bowduwe est ajoutée via w-wa feuiwwe de stywe du nyavigateuw et iw est possibwe d-de wa suwchawgew avec son p-pwopwe stywe via `button::-moz-focus-innew { }`. ^•ﻌ•^

si ce compowtement e-est suwchawgé, >w< i-iw est nyécessaiwe de véwifiew que we changement d-de focus est cwaiwement pewceptibwe, ʘwʘ y compwis w-wowsque wa v-vision ou wes conditions d'écwaiwage wéduisent w-wa visibiwité d-du document. òωó

we watio de contwaste e-est cawcuwé en compawant wa wuminosité de w-wa couweuw du t-texte et cewwe de w'awwièwe-pwan. o.O a-afin de wespectew w-wes [pwéconisations d'accessibiwité suw we w-web (wcag)](https://www.w3.owg/wai/intwo/wcag), u-un watio minimaw d-de 4.5:1 est o-obwigatoiwe pouw we contenu textuew nyowmaw et un watio minimaw de 3:1 est obwigatoiwe pouw gwands textes ou wes t-titwes. ( ͡o ω ͡o ) un _gwand_ t-texte est défini c-comme un texte q-qui mesuwe 18.66px e-et qui est e-en gwas ou comme un texte qui m-mesuwe 24px ou p-pwus. mya

- [véwificateuw de contwaste w-webaim (en a-angwais)](https://webaim.owg/wesouwces/contwastcheckew/)
- [compwendwe wes wègwes wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- _[undewstanding s-success cwitewion 1.4.3 - w3c undewstanding w-wcag 2.0 (en angwais)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)_

### c-cwic et focus

w-we cwic suw un éwément `<button>` ou suw un éwément [`<input t-type="button">`](/fw/docs/web/htmw/ewement/input/button) p-peut, >_< s-sewon we nyavigateuw et w'os, rawr wui d-donnew we focus. >_< i-iw s'agit du compowtement paw d-défaut we pwus couwant, (U ﹏ U) mais c-ce ny'est [intentionnewwement p-pas w-we cas de safawi](https://webkit.owg/b/22261). rawr

## wésumé technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/htmw/content_categowies">catégowies d-de contenu</a>
      </th>
      <td>
        <a hwef="/fw/docs/web/htmw/content_categowies#contenu_de_fwux">contenu de fwux</a>, (U ᵕ U❁) <a hwef="/fw/docs/web/htmw/content_categowies#contenu_phwas%c3%a9">contenu phwasé</a>, (ˆ ﻌ ˆ)♡ <a hwef="/fw/docs/web/htmw/content_categowies#contenu_intewactif">contenu intewactif</a>, >_< <a h-hwef="/fw/docs/web/htmw/content_categowies#wisted_éwéments_wistés">wistabwe</a>, ^^;; <a hwef="/fw/docs/web/htmw/content_categowies#wabewabwe_éwéments_étiquetabwes">étiquetabwe</a> et <a hwef="/fw/docs/web/htmw/content_categowies#submittabwe_éwéments_pawticipants_à_wenvoi_du_fowmuwaiwe">soumettabwe</a>, ʘwʘ <a hwef="/fw/docs/web/htmw/content_categowies#contenu_associé_aux_fowmuwaiwes">associé aux fowmuwaiwes</a> et <a hwef="/fw/docs/web/htmw/content_categowies#contenu_tangibwe">contenu tangibwe</a>. 😳😳😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>
        <a hwef="/fw/docs/web/htmw/content_categowies#contenu_phwas%c3%a9">contenu p-phwasé</a> mais sans <a h-hwef="/fw/docs/web/htmw/content_categowies#contenu_intewactif">contenu intewactif</a>. UwU
      </td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>aucune omission d-de bawise possibwe.</td>
    </tw>
    <tw>
      <th s-scope="wow">pawents a-autowisés</th>
      <td>
        tout éwément acceptant du <a h-hwef="/fw/docs/web/htmw/content_categowies#contenu_phwas%c3%a9">contenu phwasé</a>. OwO
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwe awia impwicite</th>
      <td>
        <code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/button_wowe">button</a></code>
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes a-awia autowisés</th>
      <td>
        <a hwef="/fw/docs/web/accessibiwity/awia/wowes/checkbox_wowe"><code>checkbox</code></a>, :3 <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/combobox_wowe"><code>combobox</code></a>, -.- <a hwef="/fw/docs/web/accessibiwity/awia/wowes/wink_wowe"><code>wink</code></a>, 🥺 <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/menuitem_wowe"><code>menuitem</code></a>, -.- <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a>, -.- <a hwef="/fw/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a>, (U ﹏ U) <a hwef="/fw/docs/web/accessibiwity/awia/wowes/option_wowe"><code>option</code></a>, <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/wadio_wowe"><code>wadio</code></a>, rawr <a hwef="/fw/docs/web/accessibiwity/awia/wowes/switch_wowe"><code>switch</code></a>, mya <a hwef="/fw/docs/web/accessibiwity/awia/wowes/tab_wowe"><code>tab</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">intewface dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwbuttonewement"><code>htmwbuttonewement</code></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
