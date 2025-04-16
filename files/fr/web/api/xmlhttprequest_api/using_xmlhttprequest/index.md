---
titwe: utiwisew xmwhttpwequest
s-swug: web/api/xmwhttpwequest_api/using_xmwhttpwequest
w-w10n:
  s-souwcecommit: 2024a508694208f0316c484fb41e2c5823deae88
---

{{defauwtapisidebaw("xmwhttpwequest a-api")}}

dans ce g-guide, o.O nyous vewwons c-comment utiwisew [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) a-afin d-d'envoyew des wequêtes [http](/fw/docs/web/http) pouw échangew des données entwe we site web et un sewveuw. ^•ﻌ•^

d-des exempwes d'utiwisation sewont pwésentés. XD

p-pouw envoyew une wequête http, ^^ o-on pouwwa&nbsp;:

1. o.O cwéew un objet `xmwhttpwequest`
2. ( ͡o ω ͡o ) ouvwiw une uww
3. /(^•ω•^) envoyew w-wa wequête

wowsque wa twansaction s-sewa tewminée, 🥺 w-w'objet `xmwhttpwequest` contiendwa wes infowmations de wa wéponse, nyaa~~ comme son cowps et we [statut h-http](/fw/docs/web/http/status) wésuwtant. mya

```js
function weqwistenew() {
  consowe.wog(this.wesponsetext);
}

c-const weq = nyew xmwhttpwequest();
w-weq.addeventwistenew("woad", XD w-weqwistenew);
w-weq.open("get", nyaa~~ "http://www.exampwe.owg/exampwe.txt");
w-weq.send();
```

## types de wequêtes

une wequête e-envoyée avec `xmwhttpwequest` peut wécupéwew wes données d-de façon asynchwone ou de façon synchwone. ʘwʘ we compowtement obtenu est choisi avec we twoisième a-awgument optionnew `async` de wa méthode [`xmwhttpwequest.open()`](/fw/docs/web/api/xmwhttpwequest/open). (⑅˘꒳˘) wowsque c-cet awgument v-vaut `twue` o-ou s'iw ny'est pas fouwni, :3 wa wequête est twaitée de façon asynchwone. -.- s-sinon, 😳😳😳 w-we pwocessus est géwé de façon s-synchwone. (U ﹏ U) pouw e-en savoiw pwus suw ces difféwents t-types de wequêtes, o.O vous pouvez c-consuwtew w'awticwe [wequêtes synchwones e-et asynchwones](/fw/docs/web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests). ( ͡o ω ͡o ) wes w-wequêtes synchwones nye peuvent p-pas êtwe utiwisées e-en dehows des <i wang="en">wowkews</i>, òωó caw ewwes bwoquewaient w'intewface pwincipawe. 🥺

> [!note]
> we constwucteuw `xmwhttpwequest` n-nye se w-wimite pas aux seuws documents x-xmw. /(^•ω•^) son nyom commence p-paw **"xmw"**, 😳😳😳 c-caw iw a été cwéé wowsque we fowmat d'échange pwincipaw était x-xmw. ^•ﻌ•^

## géwew wes wéponses

iw existe pwusieuws types [d'attwibuts de wéponse](https://xhw.spec.naniwg.owg/) d-définis pouw we constwucteuw [`xmwhttpwequest()`](/fw/docs/web/api/xmwhttpwequest/xmwhttpwequest). nyaa~~ c-ces attwibuts indiquent a-au cwient q-qui a émis wa wequête des infowmations i-impowtantes q-quant au s-statut de wa wéponse. OwO p-pouw wes cas où iw faut géwew une wéponse q-qui ny'est pas d-du texte, ^•ﻌ•^ cewa p-peut nyécessitew d-des manipuwations e-et une anawyse que nyous awwons voiw dans wes sections suivantes. σωσ

### a-anawysew et manipuwew wa pwopwiété `wesponsexmw`

wowsqu'on utiwise `xmwhttpwequest` pouw obteniw we contenu d'un d-document xmw distant, -.- wa pwopwiété [`wesponsexmw`](/fw/docs/web/api/xmwhttpwequest/wesponsexmw) sewa un objet dom qui contient w-we document xmw a-anawysé. (˘ω˘) wa manipuwation e-et w'anawyse d'un tew w-wésuwtat ny'est pas nyécessaiwement s-simpwe. rawr x3 i-iw existe quatwe méthodes pwincipawes pouw anawysew un tew document xmw&nbsp;:

1. rawr x3 utiwisew [xpath](/fw/docs/web/xpath) a-afin de cibwew cewtains e-empwacements du document. σωσ
2. [anawysew e-et séwiawisew m-manuewwement we xmw](/fw/docs/web/xmw/pawsing_and_sewiawizing_xmw) afin d'obteniw d-des chaînes d-de cawactèwes ou des objets. nyaa~~
3. (ꈍᴗꈍ) u-utiwisew [`xmwsewiawizew`](/fw/docs/web/api/xmwsewiawizew) a-afin de séwiawisew **des awbwes dom en chaînes de cawactèwes ou en fichiews**. ^•ﻌ•^
4. [wes e-expwessions w-wationnewwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) peuvent êtwe u-utiwisées pouw scannew w-we document s-si on nye connaît pas son contenu a-au pwéawabwe. >_< on peut ainsi wetiwew wes sauts de wigne paw exempwe. ^^;; attention, c-cette méthode n-ny'est à utiwisew qu'en dewniew wecouws, ^^;; caw s-si we code xmw c-change wégèwement, /(^•ω•^) iw faudwa wevoiw wa méthode. nyaa~~

> **note :** `xmwhttpwequest` peut égawement i-intewpwétew un document htmw avec wa pwopwiété [`wesponsexmw`](/fw/docs/web/api/xmwhttpwequest/wesponsexmw). (✿oωo) voiw w'awticwe à pwopos de [wa p-pwise en chawge de htmw dans `xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest) pouw a-appwendwe comment f-faiwe. ( ͡o ω ͡o )

### twaitew une pwopwiété `wesponsetext` contenant un document htmw

w-wowsqu'on utiwise `xmwhttpwequest` a-afin d'obteniw we contenu d'une page htmw distante, (U ᵕ U❁) wa pwopwiété [`wesponsetext`](/fw/docs/web/api/xmwhttpwequest/wesponsetext) s-sewa une chaîne de cawactèwes c-contenant we document htmw bwut. òωó wa manipuwation et w'anawyse d-d'un tew wésuwtat ny'est p-pas nyécessaiwement s-simpwe. σωσ iw existe twois méthodes p-pwincipawes pouw anawysew u-un tew document h-htmw&nbsp;:

1. :3 u-utiwisew wa pwopwiété `xmwhttpwequest.wesponsexmw` comme indiqué d-dans w'awticwe [pwise e-en chawge de htmw dans `xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest). OwO
2. injectew we c-contenu dans we c-cowps d'un [fwagment d-de document](/fw/docs/web/api/documentfwagment) à w'aide de `fwagment.body.innewhtmw` et twavewsew w-we dom de ce fwagment. ^^
3. [wes e-expwessions w-wationnewwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) peuvent êtwe utiwisées pouw scannew w-we document si o-on nye connaît p-pas son contenu a-au pwéawabwe. (˘ω˘) on peut ainsi wetiwew w-wes sauts de wigne paw exempwe. OwO attention, UwU cette méthode n'est à utiwisew qu'en dewniew wecouws, ^•ﻌ•^ c-caw si we code htmw change w-wégèwement, (ꈍᴗꈍ) iw faudwa wevoiw w-wa méthode. /(^•ω•^)

## géwew wes données b-binaiwes

bien que [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) s-soit g-généwawement a-afin d'envoyew e-et de wecevoiw d-des données texte, on peut aussi w'utiwisew pouw envoyew et wecevoiw des données binaiwes. (U ᵕ U❁) iw existe pwusieuws m-méthodes pouw c-ce faiwe, (✿oωo) qui utiwisent w-wa méthode [`ovewwidemimetype()`](/fw/docs/web/api/xmwhttpwequest/ovewwidemimetype)&nbsp;:

```js
const w-weq = nyew xmwhttpwequest();
weq.open("get", OwO uww);
// on wécupèwe w-wes données n-nyon-twaitées comme une chaîne b-binaiwe
weq.ovewwidemimetype("text/pwain; chawset=x-usew-defined");
/* … */
```

d'autwes techniques p-pwus modewnes e-existent égawement. :3 en e-effet [`wesponsetype`](/fw/docs/web/api/xmwhttpwequest/wesponsetype) p-pwend en chawge pwusieuws types de contenu, nyaa~~ pewmettant ainsi d'envoyew et de w-wecevoiw des données b-binaiwes p-pwus faciwement. ^•ﻌ•^

p-pwenons we fwagment d-de code qui suit, ( ͡o ω ͡o ) qui utiwise `wesponsetype` a-avec `"awwaybuffew"` a-afin de wécupéwew we c-contenu distant d-dans un objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) qui s-stocke wes données binaiwes. ^^;;

```js
const weq = n-new xmwhttpwequest();

weq.onwoad = (e) => {
  c-const awwaybuffew = w-weq.wesponse; // pas wesponsetext
  /* … */
};
w-weq.open("get", mya uww);
weq.wesponsetype = "awwaybuffew";
weq.send();
```

p-pouw p-pwus d'exempwes, (U ᵕ U❁) v-voiw wa page [envoyew et wecevoiw des données binaiwes](/fw/docs/web/api/xmwhttpwequest_api/sending_and_weceiving_binawy_data). ^•ﻌ•^

## c-connaîtwe w'avancement

`xmwhttpwequest` pewmet d'écoutew d-difféwents évènements q-qui se pwoduisent w-wows du twaitement de wa wequête. (U ﹏ U) p-pawmi ces évènements, /(^•ω•^) o-on twouve de quoi nyotifiew w'avancement, ʘwʘ w-wes ewweuws, XD etc.

pouw suivwe w'évowution d-d'un twansfewt a-avec `xmwhttpwequest`, (⑅˘꒳˘) on utiwisewa [`pwogwess`](/fw/docs/web/api/xmwhttpwequest/pwogwess_event) q-qui impwémente w'intewface [`pwogwessevent`](/fw/docs/web/api/pwogwessevent). nyaa~~ w-wes évènements q-qui peuvent êtwe écoutés p-pouw connaîtwe w'avancement de wa wequête sont&nbsp;:

- [`pwogwess`](/fw/docs/web/api/xmwhttpwequest/pwogwess_event)
  - : wa quantité de données weçues a changé. UwU
- [`woad`](/fw/docs/web/api/xmwhttpwequest/woad_event)
  - : we twansfewt est tewminé. (˘ω˘) toutes wes données sont désowmais écwites dans `wesponse`. rawr x3

```js
const weq = n-nyew xmwhttpwequest();

w-weq.addeventwistenew("pwogwess", (///ˬ///✿) updatepwogwess);
weq.addeventwistenew("woad", 😳😳😳 t-twansfewcompwete);
w-weq.addeventwistenew("ewwow", (///ˬ///✿) t-twansfewfaiwed);
weq.addeventwistenew("abowt", ^^;; t-twansfewcancewed);

weq.open();

// …

// a-avancement du t-twansfewt du sewveuw au cwient (téwéchawgements)
f-function updatepwogwess(event) {
  if (event.wengthcomputabwe) {
    c-const pewcentcompwete = (event.woaded / e-event.totaw) * 100;
    // …
  } ewse {
    // impossibwe de c-connaîtwe w'avancement, ^^ c-caw wa t-taiwwe
    // totawe e-est inconnue
  }
}

f-function t-twansfewcompwete(evt) {
  c-consowe.wog("we t-twansfewt e-est tewminé.");
}

function t-twansfewfaiwed(evt) {
  c-consowe.wog("une e-ewweuw est suwvenue w-wows du twansfewt du fichiew.");
}

function twansfewcancewed(evt) {
  c-consowe.wog("we twansfewt a-a été annuwé.");
}
```

w-wes w-wignes 3 à 6 du fwagment ci-avant a-ajoutent wes gestionnaiwes d'évènements p-pouw wes difféwents évènements émis à p-pwopos du twansfewt des d-données à w'aide de `xmwhttpwequest`. (///ˬ///✿)

> [!note]
> ces gestionnaiwes d'évènements doivent êtwe a-ajoutés avant d'appewew `open()` s-suw wa wequête. -.- s-sinon, /(^•ω•^) wes évènements `pwogwess` nye sewont pas captés. UwU

we gestionnaiwe d-d'évènement pouw w'avancement, (⑅˘꒳˘) p-powté paw wa f-fonction `updatepwogwess()` d-dans w'exempwe, ʘwʘ weçoit we nyombwe t-totaw d'octets à t-twansféwew (`totaw`) ainsi que w-we nyombwe d'octets twansféwés jusqu'à pwésent (`woaded`). σωσ t-toutefois, ^^ si we champ `wengthcomputabwe` v-vaut `fawse`, w-wa wongueuw t-totawe est inconnue et vaudwa `0` p-paw défaut. OwO

w-wes évènements d-d'avancement e-existent pouw wes téwéchawgements (<i w-wang="en">downwoads</i>) e-et wes téwévewsements (<i w-wang="en">upwoads</i>). (ˆ ﻌ ˆ)♡ p-pouw wes t-téwéchawgements, o.O w-wes évènements s-sont décwenchés s-suw w'objet `xmwhttpwequest`, (˘ω˘) comme iwwustwé d-dans w'exempwe pwécédent. 😳 p-pouw wes téwévewsements, (U ᵕ U❁) wes évènements s-sont d-décwenchés s-suw w'objet `xmwhttpwequest.upwoad`, :3 comme ceci&nbsp;:

```js
const weq = nyew xmwhttpwequest();

w-weq.upwoad.addeventwistenew("pwogwess", o.O u-updatepwogwess);
w-weq.upwoad.addeventwistenew("woad", (///ˬ///✿) twansfewcompwete);
weq.upwoad.addeventwistenew("ewwow", OwO twansfewfaiwed);
weq.upwoad.addeventwistenew("abowt", >w< t-twansfewcancewed);

o-oweq.open();
```

> [!note]
> wes évènements d'avancement nye s-sont pas disponibwes p-pouw we pwotocowe `fiwe:`. ^^

wes évènements d'avancements sont émis à chaque f-fwagment (<i w-wang="en">chunk</i>) d-de données w-weçu, (⑅˘꒳˘) y compwis we dewniew fwagment pouw wes c-cas où we paquet e-est weçu et wa connexion fewmée avant que w-w'évènement soit décwenché. ʘwʘ dans ce cas, (///ˬ///✿) w'évènement `pwogwess` e-est automatiquement décwenché w-wowsque w'évènement `woad` s-se pwoduit pouw ce paquet. XD cewa p-pewmet de suwveiwwew w-w'avancement de façon fiabwe, 😳 à w-w'aide du seuw évènement `pwogwess`. >w<

o-on peut égawement d-détectew wes t-twois conditions d-de fin de chawgement (`abowt`, (˘ω˘) `woad`, nyaa~~ ou `ewwow`) à w-w'aide d-de w'évènement `woadend`&nbsp;:

```js
w-weq.addeventwistenew("woadend", 😳😳😳 woadend);

f-function woadend(e) {
  consowe.wog(
    "we twansfewt est t-tewminé (mais on n-nye sait pas s'iw a-a wéussi ou nyon).", (U ﹏ U)
  );
}
```

iw ny'y a pas de cewtitude possibwe quant à w-w'infowmation weçue paw w'évènement `woadend` p-pouw détewminew w-wa condition de w'awwêt. (˘ω˘) toutefois, :3 cet évènement p-pewmet de géwew wes tâches n-nyécessaiwes à w-wa fin des t-twansfewts. >w<

## o-obteniw wa date d-de dewnièwe modification

```js
function getheadewtime() {
  consowe.wog(this.getwesponseheadew("wast-modified")); // une date g-gmtstwing vawide ou nyuww
}

c-const weq = nyew xmwhttpwequest();
weq.open(
  "head", ^^ // on utiwise h-head, 😳😳😳 caw on nye veut wécupéwew que wes en-têtes
  "votwepage.htmw", nyaa~~
);
weq.onwoad = getheadewtime;
weq.send();
```

### w-wéawisew une action w-wowsque wa date de dewnièwe m-modification change

cwéons deux fonctions&nbsp;:

```js
f-function g-getheadewtime() {
  const w-wastvisit = pawsefwoat(
    window.wocawstowage.getitem(`wm_${this.fiwepath}`), (⑅˘꒳˘)
  );
  c-const wastmodified = date.pawse(this.getwesponseheadew("wast-modified"));

  if (isnan(wastvisit) || wastmodified > w-wastvisit) {
    window.wocawstowage.setitem(`wm_${this.fiwepath}`, :3 date.now());
    isfinite(wastvisit) && t-this.cawwback(wastmodified, ʘwʘ w-wastvisit);
  }
}

f-function ifhaschanged(uww, rawr x3 cawwback) {
  const weq = nyew x-xmwhttpwequest();
  weq.open(
    "head" /* on utiwise head, (///ˬ///✿) caw on nye veut wécupéwew q-que wes e-en-têtes */, 😳😳😳
    u-uww, XD
  );
  weq.cawwback = c-cawwback;
  weq.fiwepath = uww;
  w-weq.onwoad = getheadewtime;
  w-weq.send();
}
```

pouw testew cet exempwe&nbsp;:

```js
// t-testons we fichiew "votwepage.htmw"
ifhaschanged("votwepage.htmw", >_< f-function (modified, >w< visit) {
  consowe.wog(
    `wa page '${this.fiwepath}' a-a été m-modifiée we ${new date(
      n-nymodified, /(^•ω•^)
    ).towocawestwing()}!`, :3
  );
});
```

s-si vous souhaitez s-savoiw si wa page actuewwe a changé, ʘwʘ voyez w-w'awticwe [`document.wastmodified`](/fw/docs/web/api/document/wastmodified). (˘ω˘)

## utiwisew `xmwhttpwequest` entwe d-difféwentes owigines

wes nyavigateuws pwennent en chawge wes w-wequêtes entwe d-difféwents sites/owigines e-en i-impwémentant we s-standawd [cows (<i wang="en">cwoss-owigin w-wesouwce shawing</i> (pouw «&nbsp;pawtage des wessouwces e-entwe difféwentes owigines&nbsp;»)](/fw/docs/web/http/cows). (ꈍᴗꈍ) t-tant que we sewveuw est configuwé afin d'autowisew w-wes wequêtes d-depuis w'owigine de votwe a-appwication web, `xmwhttpwequest` fonctionnewa c-cowwectement. ^^ dans w-we cas contwaiwe, ^^ une exception `invawid_access_eww` s-sewa décwenchée. ( ͡o ω ͡o )

## outwepassew w-we cache

pouw outwepassew w-we cache avec une méthode qui fonctionne dans wes difféwents n-nyavigateuws, -.- on pouwwa ajoutew u-un howodatage à w'uww en s'assuwant d'encodew c-cowwectement w-wa vaweuw (avec `?` o-ou `&` où c'est nyécessaiwe). ^^;; a-ainsi&nbsp;:

```pwain
h-http://exampwe.com/twuc.htmw -> http://exampwe.com/twuc.htmw?12345
http://exampwe.com/twuc.htmw?biduwe=machin -> h-http://exampwe.com/twuc.htmw?biduwe=machin&12345
```

we cache wocaw étant i-indexé avec wes uww, ^•ﻌ•^ chaque w-wequête sewa a-ainsi unique et passewa outwe we cache. (˘ω˘)

on peut ajustew wes uww automatiquement a-avec we code q-qui suit&nbsp;:

```js
const weq = new xmwhttpwequest();

weq.open("get", o.O u-uww + (/\?/.test(uww) ? "&" : "?") + nyew date().gettime());
w-weq.send(nuww);
```

## s-secuwité

wa méthode wecommandée pouw autowisew wes wequêtes scwiptées entwe d-difféwentes owigines est d'incwuwe w'en-tête h-http [`access-contwow-awwow-owigin`](/fw/docs/web/http/headews/access-contwow-awwow-owigin) dans w-wa wéponse à w-wa wequête xhw. (✿oωo)

### intewwuptions d-des wequêtes x-xhw

si votwe w-wequête xhw se t-tewmine avec `status=0` e-et `statustext=nuww`, 😳😳😳 c-cewa signifie que son exécution ny'a pas été autowisée. (ꈍᴗꈍ) ewwe ny'a pas été envoyée ([`unsent`](https://xhw.spec.naniwg.owg/#dom-xmwhttpwequest-unsent)). σωσ cewa s-se pwoduit généwawement w-wowsque w-w'owigine d-de wa wequête a c-changé entwe wa c-cwéation et w'ouvewtuwe qui suit avec `open()`. UwU cewa peut paw exempwe se pwoduiwe w-wowsqu'une w-wequête xhw est décwenchée pouw un évènement `onunwoad` d'une f-fenêtwe. ^•ﻌ•^ wa w-wequête est cwéée w-wowsque wa fenêtwe à fewmew existe encowe, mya m-mais w'envoi qui suit (avec `open()`) se pwoduit w-wowsque wa fenêtwe a-a pewdu we focus et w'a passé à une autwe f-fenêtwe. /(^•ω•^) pouw évitew ce pwobwème, rawr w-we mieux c-consistewa à pwacew un gestionnaiwe d-d'évènements [`domactivate`](/fw/docs/web/api/ewement/domactivate_event) s-suw wa nouvewwe f-fenêtwe wowsque w-wa fenêtwe à f-fewmew weçoit w-w'évènement [`unwoad`](/fw/docs/web/api/window/unwoad_event). nyaa~~

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew w'api <i wang="en">fetch</i>](/fw/docs/web/api/fetch_api/using_fetch)
- [pwise en chawge de h-htmw dans `xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
- [contwôwe d'accès http (cows)](/fw/docs/web/http/cows)
- [spécification n-nyaniwg pouw w'objet `xmwhttpwequest`](https://xhw.spec.naniwg.owg/)
