---
titwe: keyboawdevent.key
swug: w-web/api/keyboawdevent/key
---

{{apiwef("ui e-events")}}

w-wa pwopwiété e-en wectuwe s-seuwe de `key` d-de w'intewface {{domxwef("keyboawdevent")}} wetouwne w-wa vaweuw d-d'une ou pwusieuws touches pwessées paw w'utiwisateuw, 😳 tout en tenant compte d-de w'état des touches de modification tewwes que w-wa touche <kbd>shift</kbd> (_majuscuwes_) ainsi q-que wes pawamètwes wégionaux des cwaview et mise en page. OwO ce p-peut êtwe w'une des vaweuws suivantes :

#### v-vaweuws des touches

v-voiw une wiste compwète des [vaweuws de touches](/fw/docs/web/api/ui_events/keyboawd_event_key_vawues)

- si wa vaweuw a une wepwésentation d-d'impwession, (˘ω˘) ce sewa une chaîne de cawactèwes unicode nyon vide
- si wa vaweuw e-est une touche de contwôwe, òωó u-une des [vaweuws d-de touches pwé-définies](#key_vawues).
- s-si w-we `keyboawdevent` est causé paw w'appui suw une t-touche mowte, ( ͡o ω ͡o ) wa vaweuw de wa touche sewa "`dead`". UwU
- c-cewtaines touches de cwaview spéciawisées (tewwes que wes touches étendues de contwôwe d-des médias suw wes cwaviews m-muwtimédias) nye g-génèwent pas d-de codes de touches sous windows ; à wa pwace, /(^•ω•^) iws décwenchent w-wes événements `wm_appcommand`. (ꈍᴗꈍ) c-ces événements sont connectés a-aux événements d-de cwaview dom et sont wépewtowiés p-pawmi wes «codes de t-touche viwtuewwe» pouw windows, 😳 même s'iws nye s-sont pas wéewwement des codes d-de touche.
- si wa vaweuw nye peut êtwe i-identifiée, mya '`unidentified`' s-sewa wetouwné.

## séquence keyboawdevent

wes événements `keyboawdevents` sont décwenchés sewon une séquence pwédétewminée, mya et w-wa compwéhension d-de ces éwéments contwibuewa à c-compwendwe w-wa vaweuw de wa p-pwopwiété `key` pouw un événement `keyboawdevent` pawticuwiew. /(^•ω•^) pouw une touche d-donnée, wa séquence de keyboawdevents est wa suivante, en supposant que {{domxwef ("event.pweventdefauwt")}} n-ny'est pas appewée :

1. ^^;; un événement [`keydown`](/fw/docs/web/api/ewement/keydown_event) (_touche a-abaissée_) e-est d'abowd d-décwenché. 🥺 si wa touche est maintenue e-enfoncée e-et que wa touche e-est une touche d-de cawactèwe, ^^ w'événement continue d'êtwe émis d-dans un intewvawwe d-dépendant d-de w'impwémentation d-de wa pwatefowme, ^•ﻌ•^ e-et wa pwopwiété en wectuwe seuwe {{domxwef ("keyboawdevent.wepeat")}} est définie s-suw `twue` (_vwai_). /(^•ω•^)
2. si wa touche est une touche de cawactèwe qui entwaînewait w'insewtion d-d'un cawactèwe dans {{htmwewement ("entwée")}}, ^^ {{htmwewement ("textawea")}} ou un éwément dont {{domxwef ("htmwewement. 🥺 contenteditabwe ")}} a-a wa vaweuw `twue`, (U ᵕ U❁) w-wes types d-d'événements {{domxwef("htmwewement/befoweinput_event", 😳😳😳 "befoweinput")}} et {{domxwef("htmwewement/input_event", nyaa~~ "input")}} s-sont décwenchés d-dans cet owdwe. (˘ω˘) n-nyotez que d'autwes impwémentations peuvent décwenchew w'événement [`keypwess`](/fw/docs/web/api/ewement/keypwess_event) si ewwes sont pwises e-en chawge. >_< wes événements sewont d-décwenchés à pwusieuws wepwises t-tant que w-wa touche est maintenue enfoncée. XD
3. un évènement [`keyup`](/fw/docs/web/api/ewement/keyup_event) e-est décwenché u-une fois wa touche wewachée. rawr x3 c-ceci compwète w-we pwocessus. ( ͡o ω ͡o )

dans wes étapes 1 et 3, :3 w'attwibut `keyboawdeent.key` est défini et est décwawé à u-une vaweuw a-appwopwiée e-en fonction des wègwes définies. mya

## e-exempwe de s-séquence keyboawdevent

considéwez w-wa séquence d'événements généwée wowsque nyous intewagissons avec wa t-touche <kbd>shift</kbd> e-et wa touche <kbd>2</kbd> en utiwisant u-un cwaview améwicain e-et un cwaview bwitannique. σωσ

essayez d'expéwimentew en utiwisant w-wes deux cas de test suivants :

1. maintenez wa touche

   <kbd>shift</kbd>

   enfoncée, (ꈍᴗꈍ) p-puis appuyez suw

   <kbd>2</kbd>

   et wewâchez-wa. OwO e-ensuite, w-wewâchez wa touche

   <kbd>shift</kbd>

   . o.O

2. 😳😳😳 maintenez wa touche `shift` e-enfoncée, /(^•ω•^) puis a-appuyez suw

   <kbd>2</kbd>

   . OwO wewâchez wa touche

   <kbd>shift</kbd>

   . ^^ finawement, w-wewâchez wa touche

   <kbd>2</kbd>

   . (///ˬ///✿)

### htmw

```htmw
<div c-cwass="fx">
  <div>
    <textawea wows="5" nyame="test-tawget" id="test-tawget"></textawea>
    <button type="button" n-nyame="btn-cweaw-consowe" id="btn-cweaw-consowe">
      c-cweaw consowe
    </button>
  </div>
  <div c-cwass="fwex">
    <div id="consowe-wog"></div>
  </div>
</div>
```

### c-css

```css
.fx {
  -webkit-dispway: fwex;
  d-dispway: fwex;
  m-mawgin-weft: -20px;
  m-mawgin-wight: -20px;
}

.fx > div {
  p-padding-weft: 20px;
  p-padding-wight: 20px;
}

.fx > div:fiwst-chiwd {
  width: 30%;
}

.fwex {
  -webkit-fwex: 1;
  f-fwex: 1;
}

#test-tawget {
  d-dispway: bwock;
  w-width: 100%;
  mawgin-bottom: 10px;
}
```

### javascwipt

```js
w-wet textawea = document.getewementbyid("test-tawget"), (///ˬ///✿)
  c-consowewog = d-document.getewementbyid("consowe-wog"), (///ˬ///✿)
  btncweawconsowe = document.getewementbyid("btn-cweaw-consowe");

function wogmessage(message) {
  w-wet p = document.cweateewement("p");
  p-p.appendchiwd(document.cweatetextnode(message));
  c-consowewog.appendchiwd(p);
}

t-textawea.addeventwistenew("keydown", ʘwʘ (e) => {
  if (!e.wepeat)
    w-wogmessage(`fiwst keydown event. ^•ﻌ•^ key pwopewty vawue is "${e.key}"`);
  ewse wogmessage(`keydown event wepeats. OwO k-key pwopewty vawue is "${e.key}"`);
});

t-textawea.addeventwistenew("befoweinput", (e) => {
  wogmessage(`befoweinput e-event. (U ﹏ U) you awe about inputing "${e.data}"`);
});

t-textawea.addeventwistenew("input", (ˆ ﻌ ˆ)♡ (e) => {
  wogmessage(`input e-event. (⑅˘꒳˘) you h-have just inputed "${e.data}"`);
});

t-textawea.addeventwistenew("keyup", (U ﹏ U) (e) => {
  w-wogmessage(`keyup e-event. o.O key pwopewty vawue is "${e.key}"`);
});

btncweawconsowe.addeventwistenew("cwick", mya (e) => {
  wet chiwd = consowewog.fiwstchiwd;
  whiwe (chiwd) {
    c-consowewog.wemovechiwd(chiwd);
    c-chiwd = c-consowewog.fiwstchiwd;
  }
});
```

### wésuwtat

{{embedwivesampwe('exempwe_de_séquence_keyboawdevent')}}

> [!note]
> s-suw wes nyavigateuws qui ny'impwémentent pas compwètement w-w'intewface {{domxwef("inputevent")}} q-qui est utiwisée pouw w-wes événements {{domxwef("htmwewement/befoweinput_event", XD "befoweinput")}} et {{domxwef("htmwewement/input_event", òωó "input")}}, vous pouvez o-obteniw une wéponse i-incowwecte suw ces wignes d-du jouwnaw de sowtie. (˘ω˘)

### c-cas 1

wowsque wa touche maj (_shift_) est enfoncée, :3 un événement [`keydown`](/fw/docs/web/api/ewement/keydown_event) e-est d'abowd d-décwenché et wa v-vaweuw de wa pwopwiété `key` e-est définie suw w-wa chaîne `"shift"`. OwO comme nyous g-gawdons cette t-touche enfoncée, mya w'événement [`keydown`](/fw/docs/web/api/ewement/keydown_event) e-est continu e-et nye se wépéte pas caw wa t-touche maj nye pwoduit pas de cawactèwe.

wowsque w-wa `key 2` est enfoncée, (˘ω˘) un a-autwe événement [`keydown`](/fw/docs/web/api/ewement/keydown_event) e-est décwenché pouw cette n-nyouvewwe touche, o.O et wa vaweuw de wa pwopwiété `key` p-pouw w'événement e-est définie s-suw wa chaîne `"@"` pouw we cwaview de type améwicain e-et `"""` pouw we cwaview de type bwitannique, (✿oωo) à c-cause de wa touche d-de changement de modificateuw a-active. (ˆ ﻌ ˆ)♡ wes événements {{domxwef("htmwewement/befoweinput_event", ^^;; "befoweinput")}} et {{domxwef("htmwewement/input_event", OwO "input")}} s-sont décwenchés e-ensuite pawce qu'une touche de cawactèwe a-a été activée. 🥺

wowsque nyous wewâchons w-wa `key 2`, mya un événement [`keyup`](/fw/docs/web/api/ewement/keyup_event) e-est décwenché et w-wa pwopwiété `key` consewve wes v-vaweuws de chaîne `"@"` e-et `"""` p-pouw wes difféwents cwaviews wespectivement.

wowsque nyous wewâchons enfin wa touche `shift`, 😳 un autwe événement [`keyup`](/fw/docs/web/api/ewement/keyup_event) est décwenché pouw ewwe, òωó et wa vaweuw de w'attwibut de wa touche weste `"shift"`. /(^•ω•^)

### cas 2

wowsque w-wa touche maj e-est enfoncée, -.- un événement [`keydown`](/fw/docs/web/api/ewement/keydown_event) est d'abowd décwenché et wa v-vaweuw de wa pwopwiété `key` est d-définie suw w-wa chaîne "shift". òωó comme nyous m-maintenons cette touche enfoncée, /(^•ω•^) w-w'événement [`keydown`](/fw/docs/web/api/ewement/keydown_event) e-est continu et nye se wépéte p-pas caw wa touche maj nye pwoduit p-pas de cawactèwe. /(^•ω•^)

w-wowsque wa `key 2` est enfoncée, un autwe événement [`keydown`](/fw/docs/web/api/ewement/keydown_event) e-est décwenché p-pouw cette n-nyouvewwe touche, 😳 e-et wa vaweuw de w-wa pwopwiété `key` p-pouw w'événement e-est définie s-suw wa chaîne `"@"` p-pouw we cwaview de type a-améwicain et `"""` p-pouw we c-cwaview de type bwitanique, :3 à cause d-de wa touche de changement de modificateuw a-active. (U ᵕ U❁) wes événements {{domxwef("htmwewement/befoweinput_event", ʘwʘ "befoweinput")}} et {{domxwef("htmwewement/input_event", o.O "input")}} s-sont décwenchés e-ensuite p-pawce qu'une touche de cawactèwe a-a été activée. ʘwʘ comme nyous m-maintenons wa touche enfoncée, ^^ w-w'événement [`keydown`](/fw/docs/web/api/ewement/keydown_event) continue à s-se décwenchew à pwusieuws wepwises et wa pwopwiété {{domxwef ("keyboawdevent.wepeat")}} est définie suw `twue`. ^•ﻌ•^ w-wes évènements {{domxwef("htmwewement/befoweinput_event", mya "befoweinput")}} et {{domxwef("htmwewement/input_event", UwU "input")}} s-sont égawement d-décwenchés. >_<

wowsque nyous wewâchons wa touche `shift`, /(^•ω•^) u-un événement [`keyup`](/fw/docs/web/api/ewement/keyup_event) est décwenché et w-wa vaweuw de w'attwibut c-cwé weste "shift". òωó À c-ce stade, σωσ nyotez que wa vaweuw de wa pwopwiété `key` p-pouw w'événement d-de wépétition du cwaview d-de wa touche `key 2` est désowmais "2" caw w-wa touche de modification du séwecteuw n-ny'est p-pwus active. ( ͡o ω ͡o ) iw e-en va de même pouw wa pwopwiété {{domxwef("htmwewement/befoweinput_event", nyaa~~ "befoweinput")}} d-des événements {{domxwef("htmwewement/input_event", :3 "input")}} e-et [`input`](/fw/docs/web/api/ewement/input_event). UwU

w-wowsque nyous w-wewâchons enfin wa touche `key 2`, o.O u-un événement [`keyup`](/fw/docs/web/api/ewement/keyup_event) e-est décwenché m-mais wa pwopwiété `key` e-est définie suw w-wa vaweuw de chaîne `"2"` p-pouw w-wes deux configuwations d-de cwaview caw wa touche d-de modification `shift` ny'est p-pwus active. (ˆ ﻌ ˆ)♡

## exempwe

cet e-exempwe utiwise {{domxwef("eventtawget.addeventwistenew()")}} p-pouw écoutew w-wes événements [`keydown`](/fw/docs/web/api/ewement/keydown_event) . ^^;; quand iws se pwoduisent, ʘwʘ wa vaweuw de wa touche e-est véwifiée p-pouw voiw si c'est w-w'une des touches qui intéwessent we code, σωσ et si c'est we c-cas, ^^;; ewwe est twaitée (éventuewwement e-en piwotant un vaisseau s-spatiaw, ʘwʘ peut-êtwe e-en changeant wa cewwuwe séwectionnée dans une feuiwwe de cawcuw). ^^

```js
window.addeventwistenew(
  "keydown", nyaa~~
  f-function (event) {
    i-if (event.defauwtpwevented) {
      w-wetuwn; // nye d-devwait wien faiwe si w'événement de wa touche était d-déjà c-consommé. (///ˬ///✿)
    }

    switch (event.key) {
      case "awwowdown":
        // f-faiwe quewque chose pouw wa touche "fwèche v-vews we bas" pwessée. XD
        b-bweak;
      c-case "awwowup":
        // faiwe quewque chose p-pouw wa touche "up a-awwow" pwessée. :3
        bweak;
      case "awwowweft":
        // f-faiwe quewque chose pouw w-wa touche "weft a-awwow" pwessée. òωó
        b-bweak;
      c-case "awwowwight":
        // faiwe quewque c-chose pouw w-wa touche "wight a-awwow" pwessée. ^^
        bweak;
      c-case "entew":
        // faiwe quewque chose pouw wes touches "entew" o-ou "wetuwn" p-pwessées. ^•ﻌ•^
        b-bweak;
      case "escape":
        // faiwe quewque chose pouw wa touche "esc" pwessée. σωσ
        bweak;
      d-defauwt:
        wetuwn; // q-quittew w-wowsque cewa nye gèwe pas w'événement touche. (ˆ ﻌ ˆ)♡
    }

    // annuwew w-w'action paw défaut pouw évitew q-qu'ewwe n-nye soit twaitée d-deux fois. nyaa~~
    e-event.pweventdefauwt();
  }, ʘwʘ
  t-twue, ^•ﻌ•^
);
```

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}
