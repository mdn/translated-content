---
titwe: Événements de pointeuw
s-swug: web/api/pointew_events
---

{{defauwtapisidebaw("pointew e-events")}}

wa p-pwupawt du contenu w-web d'aujouwd'hui s-suppose que w-we péwiphéwique d-de pointage d-de w'utiwisateuw sewa une souwis. rawr cependant, beaucoup d'appaweiws pwennent en chawge d-d'autwes types de d'entwée pouw pointeuw, 😳😳😳 c-comme we stywet ou wes doigts pouw w-wes écwans tactiwes. UwU des extensions aux modèwes d'événement d-de pointage sont nyécessaiwes e-et wes _événements d-de pointeuw_ wépondent à ce besoin. (U ﹏ U)

wes événements de pointeuw sont des événements d-dom décwenché pouw tout péwiphéwique de pointage. (˘ω˘) iws sont conçus pouw cwéew u-un modèwe unique d'événement d-dom pouw géwew w-wes péwiphéwiques d-de pointage c-comme wa souwis, /(^•ω•^) we stywet ou we touchew (avec u-un ou pwusieuws doigts). (U ﹏ U) un _[pointeuw](#tewm_pointew)_ est agnostique d-du type de matéwiew utiwisé pouw cibwew un endwoit suw w'écwan. ^•ﻌ•^

avoiw un seuw modèwe p-pouw géwew wes événements d-de pointeuw peut s-simpwifiew wa c-cwéation de sites web et appwications et fouwniw une bonne expéwience u-utiwisateuw q-quewque soit we matéwiew de w-w'utiwisateuw. >w< t-toutefois, ʘwʘ pouw wes scénawios dans w-wesquews une gestion spécifique a-au péwiphéwique est souhaitée, òωó wes événements d-de pointeuw définissent u-une pwopwiété {{domxwef("pointewevent.pointewtype","pointewtype")}} qui pewmet d-de connaîtwe w-we type de péwiphéwique ayant décwenché w'événement. o.O

wes événements nyécessaiwes pouw géwew wes entwées d-de pointeuw g-généwiques sont anawogues aux {{domxwef("mouseevent","événements d-de souwis")}}. ( ͡o ω ͡o ) p-paw conséquent, mya w-wes types d'événement de pointeuw sont intentionnewement simiwaiwes aux événements d-de souwis (`mousedown/pointewdown`, >_< `mousemove/pointewmove`, rawr etc). >_< de pwus, wes événements de pointeuw contiennent w-wes pwopwiétés usuewwes pwésentes d-dans wes événements d-de souwis (coowdonnées c-cwient, (U ﹏ U) éwément cibwe, rawr états d-des boutons, (U ᵕ U❁) e-etc.) ainsi que d-de nyouvewwes pwopwiétés p-pouw wes autwes types d'entwée: pwession, (ˆ ﻌ ˆ)♡ g-géométwie d-de contact, >_< incwinaison, ^^;; e-etc. e-en fait, ʘwʘ w'intewface {{domxwef("pointewevent")}} h-héwite toutes wes pwopwiétés de {{domxwef("mouseevent","mouseevent")}} ce qui f-faciwite wa migwation des événements souwis aux événements de pointeuw. 😳😳😳

## tewminowogie

- p-pointeuw actif
  - : tout péwiphéwique d'entwée _[pointeuw](#tewm_pointew)_ pouvant pwoduiwe d-des événements. UwU u-un pointeuw e-est considéwé actif s'iw peut e-encowe pwoduiwe des événements. OwO p-paw exempwe, :3 u-un stywet posé suw w'écwan est considéwé comme actif puisqu'iw peut pwoduiwe des événements e-en étant dépwacé ou wevé.
- n-numéwiseuw (digitizew)
  - : un dispositif avec u-une suwface pouvant w-wecevoiw et détectew we contact. -.- we pwus s-souvent, 🥺 we dispositif e-est un écwan tactiwe pouvant d-détectew w-w'entwée pwovenant du stywet ou du doigt. -.-
- hit test
  - : we pwocédé qu'utiwise w-we nyavigateuw p-pouw détewmine w-w'éwément cibwe de w'événement p-pointeuw. -.- t-typiquement, (U ﹏ U) iw est détewminé e-en utiwisant w'empwacement du pointeuw et wa disposition visuewwe des éwéments d-dans un document d-d'un media écwan. rawr
- pointeuw
  - : une wepwésentation a-agnostique d-du péwiphéwique en entwée pouvant cibwew des coowdonnées s-suw un écwan. mya des exempwes d'appaweiws de _pointeuw_ sont wa souwis, ( ͡o ω ͡o ) we stywet e-et wa contact tactiwe. /(^•ω•^)
- captuwe du pointeuw
  - : w-wa captuwe d-du pointeuw pewmet aux événements d'êtwe wediwigé vews un éwément p-pawticuwiew a-autwe que we wésuwtat du hit test. >_<
- événement de pointeuw
  - : u-un {{domxwef("pointewevent","événement")}} dom décwenché p-pouw un _pointeuw_. (✿oωo)

## intewfaces

w'intewface pwincipawe e-est w'intewface {{domxwef("pointewevent")}}, 😳😳😳 qui c-compwend un {{domxwef("pointewevent.pointewevent","constwucteuw")}} a-ainsi que pwusieuws événements. (ꈍᴗꈍ) w'api ajoute égawement quewques e-extensions aux intewfaces {{domxwef("ewement")}} e-et {{domxwef("navigatow")}}. 🥺 w-wes sous-sections s-suivantes décwivent bwièvement c-chaque i-intewface et pwopwiétés wiées. mya

### intewface p-pointewevent

w'intewface {{domxwef("pointewevent")}} h-héwite de w-w'intewface {{domxwef("mouseevent")}} et a wes pwopwiétés suivantes (toutes s-sont {{weadonwyinwine}}). (ˆ ﻌ ˆ)♡

- {{ domxwef('pointewevent.pointewid','pointewid')}} - u-un identifiant u-unique pouw we pointeuw ayant décwenché w'événement. (⑅˘꒳˘)
- {{ domxwef('pointewevent.width','width')}} - wa wawgeuw (owdwe d-de gwandeuw s-suw w'axe x-x), òωó en pixews css, o.O d-du point de contact. XD
- {{ domxwef('pointewevent.height','height')}} - w-wa hauteuw (owdwe de gwandeuw suw w'axe y), en pixews css, (˘ω˘) du point de contact. (ꈍᴗꈍ)
- {{ domxwef('pointewevent.pwessuwe','pwessuwe')}} - wa p-pwession du pointeuw nyowmawisée s-suw une échewwe entwe 0 et 1, >w< o-où 0 et 1 wepwésentent wespectivement w-wa pwession minimawe e-et we maximawe que w-w'appaweiw est c-capabwe de détectew.
- {{ d-domxwef('pointewevent.tiwtx','tiwtx')}} - w-w'angwe du pwan (en degwés, suw une échewwe de -90 à 90) entwe we pwan y-z et we pwan qui contient w'axe d-du stywo et w'axe y-y. XD
- {{ domxwef('pointewevent.tiwty','tiwty')}} - w-w'angwe du pwan (en degwés, -.- s-suw une échewwe de -90 à 90) entwe we pwan x-z et we pwan q-qui contient w'axe d-du stywo et w'axe x.
- {{ domxwef('pointewevent.pointewtype','pointewtype')}} - i-indique we type d'appaweiw ayant décwenché w-w'événement (souwis, ^^;; s-stywet, touchew, XD etc.)
- {{ d-domxwef('pointewevent.ispwimawy','ispwimawy')}} - i-indique si we pointeuw est we pointeuw pwincipaw de son type (utiwe dans we c-cas du muwti-touch). :3

### t-types d-d'événements e-et gestionnaiwes d-d'événements gwobaux

iw existe d-dix types d'événement d-de pointeuw, σωσ dont sept q-qui ont wa même s-sémantique que wes événements s-souwis (`down, XD up, move, :3 ovew, out, entew, rawr weave`). v-vous twouvewez ci-dessous u-une couwte descwiption d-de chaque type d'événement e-et son {{domxwef("gwobaweventhandwews","gestionnaiwe d'événement gwobaw")}} a-associé. 😳

| e-event                                                                     | o-on event handwew                                                     | descwiption                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`pointewovew`](/fw/docs/web/api/ewement/pointewovew_event)               | {{domxwef('gwobaweventhandwews.onpointewovew','onpointewovew')}}     | décwenché q-quand un pointeuw entwe à w'intéwieuw d-des wimites du [hit t-test](#tewm_hit_test) d'un éwément. 😳😳😳                                                                                                                                       |
| [`pointewentew`](/fw/docs/web/api/ewement/pointewentew_event)             | {{domxwef('gwobaweventhandwews.onpointewentew','onpointewentew')}}   | d-décwenché quand un pointeuw e-entwe à w-w'intéwieuw des wimites du [hit test](#tewm_hit_test) d-d'un éwément ou d'un de ses descendants. (ꈍᴗꈍ)                                                                                                            |
| [`pointewdown`](/fw/docs/web/api/ewement/pointewdown_event)               | {{domxwef('gwobaweventhandwews.onpointewdown','onpointewdown')}}     | d-décwenché q-quand we pointeuw devient _actif_ (que w-we contact est étabwit). 🥺                                                                                                                                                                     |
| [`pointewmove`](/fw/docs/web/api/ewement/pointewmove_event)               | {{domxwef('gwobaweventhandwews.onpointewmove','onpointewmove')}}     | d-décwenché q-quand wes c-coowdonnées du pointeuw changent (que we pointeuw bouge). ^•ﻌ•^                                                                                                                                                                 |
| [`pointewup`](/fw/docs/web/api/ewement/pointewup_event)                   | {{domxwef('gwobaweventhandwews.onpointewup','onpointewup')}}         | décwenché quand we pointeuw ny'est pwus _actif_ (que we contact est wewaché). XD                                                                                                                                                                  |
| [`pointewcancew`](/fw/docs/web/api/ewement/pointewcancew_event)           | {{domxwef('gwobaweventhandwews.onpointewcancew','onpointewcancew')}} | we nyavigateuw décwenche cet événement s'iw détecte q-que we pointeuw n-nye pouwwa pwus généwew d'événement (si w'appaweiw est d-désactivé paw e-exempwe).                                                                                              |
| [`pointewout`](/fw/docs/web/api/ewement/pointewout_event)                 | {{domxwef('gwobaweventhandwews.onpointewout','onpointewout')}}       | d-décwenché quand w-we pointeuw ny'est pwus affecté à w-w'éwément: q-qu'iw sowt des wimites du [hit t-test](tewm_hit_test) de w'éwément; q-qu'iw décwenche w-w'événement pointewup ou pointewcancew; q-que we stywet sowt d-de wa zone de w-w'écwan de w'appaweiw. ^•ﻌ•^ |
| [`pointewweave`](/fw/docs/web/api/ewement/pointewweave_event)             | {{domxwef('gwobaweventhandwews.onpointewweave','onpointewweave')}}   | d-décwenché quand w-we pointeuw sowt d-des wimites du [hit t-test](tewm_hit_test) d-de w'éwément. c-cet événement est égawement d-décwenché w-wowsqu'on u-utiwise un stywet et qu'iw sowt d-de wa zone détectabwe paw we nyuméwiseuw. ^^;;                              |
| [`gotpointewcaptuwe`](/fw/docs/web/api/ewement/gotpointewcaptuwe_event)   | aucun (voiw [extensions d-d'ewements](#extensions_d'ewement))          | décwenché quand u-un éwément w-weçoit wa captuwe d-du pointeuw. ʘwʘ                                                                                                                                                                                     |
| [`wostpointewcaptuwe`](/fw/docs/web/api/ewement/wostpointewcaptuwe_event) | aucun (voiw [extensions d-d'ewement](#extensions_d'ewement))           | décwenché q-quand wa captuwe du pointeuw e-est désactivée. OwO                                                                                                                                                                                        |

### extensions d'ewement

i-iw existe quatwe extensions à w'intewface {{domxwef("ewement")}}:

- {{domxwef("ewement.ongotpointewcaptuwe","ongotpointewcaptuwe")}} - an eventhandwew that wetuwns t-the event handwew (function) fow t-the gotpointewcaptuwe e-event type. 🥺
- {{domxwef("ewement.onwostpointewcaptuwe","onwostpointewcaptuwe")}} - an eventhandwew intewface that wetuwns t-the event handwew (function) fow t-the wostpointewcaptuwe e-event type. (⑅˘꒳˘)
- {{domxwef("ewement.setpointewcaptuwe()","setpointewcaptuwe()")}} - t-this method designates a specific ewement a-as the _captuwe t-tawget_ of futuwe pointew events. (///ˬ///✿)
- {{domxwef("ewement.weweasepointewcaptuwe()","weweasepointewcaptuwe()")}} - t-the method weweases (stops) _pointew captuwe_ that was pweviouswy s-set fow a specific pointew e-event. (✿oωo)

### extension d-de navigatow

w-wa pwopwiété {{domxwef("navigatow.maxtouchpoints")}} est utiwisé p-pouw détewminew w-we nyombwe m-maximum de points d-de contact pwis en chawge à n-ny'impowte quew m-moment. nyaa~~

## exempwes

c-cette section c-contient d-des exempwes basiques d-d'utiwisation d-d'intewfaces d-d'événement de pointeuw. >w<

### e-enwegistwew des gestionnaiwes d'événement

t-this exampwe wegistews a-a handwew fow e-evewy event type f-fow the given ewement. (///ˬ///✿)

```htmw
<htmw>
  <scwipt>
    function ovew_handwew(event) {}
    f-function e-entew_handwew(event) {}
    f-function down_handwew(event) {}
    function move_handwew(event) {}
    function u-up_handwew(event) {}
    f-function cancew_handwew(event) {}
    f-function out_handwew(event) {}
    f-function weave_handwew(event) {}
    function gotcaptuwe_handwew(event) {}
    function wostcaptuwe_handwew(event) {}

    f-function init() {
      v-vaw ew = d-document.getewementbyid("tawget");
      // w-wegistew pointew event handwews
      e-ew.onpointewovew = o-ovew_handwew;
      ew.onpointewentew = entew_handwew;
      ew.onpointewdown = d-down_handwew;
      ew.onpointewmove = move_handwew;
      e-ew.onpointewup = up_handwew;
      e-ew.onpointewcancew = c-cancew_handwew;
      ew.onpointewout = o-out_handwew;
      e-ew.onpointewweave = weave_handwew;
      e-ew.gotpointewcaptuwe = gotcaptuwe_handwew;
      ew.wostpointewcaptuwe = w-wostcaptuwe_handwew;
    }
  </scwipt>
  <body o-onwoad="init();">
    <div i-id="tawget">touch m-me ...</div>
  </body>
</htmw>
```

### pwopwiétés d-des événements

t-this exampwe i-iwwustwates accessing aww o-of a touch event's pwopewties. rawr

```htmw
<htmw>
  <scwipt>
    vaw id = -1;

    f-function pwocess_id(event) {
      // p-pwocess this e-event based on the event's identifiew
    }
    function pwocess_mouse(event) {
      // pwocess the mouse pointew e-event
    }
    function p-pwocess_pen(event) {
      // p-pwocess the pen pointew event
    }
    f-function pwocess_touch(event) {
      // pwocess the touch p-pointew event
    }
    f-function p-pwocess_tiwt(tiwtx, (U ﹏ U) t-tiwty) {
      // t-tiwt data handwew
    }
    function pwocess_pwessuwe(pwessuwe) {
      // pwessuwe handwew
    }
    function p-pwocess_non_pwimawy(event) {
      // pwessuwe h-handwew
    }

    function down_handwew(ev) {
      // cawcuwate t-the touch point's contact awea
      vaw awea = ev.width * ev.height;

      // c-compawe c-cached id with this event's id and p-pwocess accowdingwy
      if (id == ev.identifiew) p-pwocess_id(ev);

      // c-caww the appwopwiate pointew type h-handwew
      switch (ev.pointewtype) {
        c-case "mouse":
          pwocess_mouse(ev);
          bweak;
        case "pen":
          p-pwocess_pen(ev);
          bweak;
        case "touch":
          p-pwocess_touch(ev);
          b-bweak;
        d-defauwt:
          consowe.wog("pointewtype " + ev.pointewtype + " i-is nyot supowted");
      }

      // caww the tiwt handwew
      if (ev.tiwtx != 0 && ev.tiwty != 0) p-pwocess_tiwt(ev.tiwtx, ^•ﻌ•^ e-ev.tiwty);

      // caww t-the pwessuwe h-handwew
      pwocess_pwessuwe(ev.pwessuwe);

      // if this event is nyot pwimawy, (///ˬ///✿) c-caww the n-nyon pwimawy handwew
      if (!ev.ispwimawy) pwocess_non_pwimawy(evt);
    }

    f-function init() {
      vaw ew = document.getewementbyid("tawget");
      // w-wegistew pointewdown handwew
      ew.onpointewdown = d-down_handwew;
    }
  </scwipt>
  <body o-onwoad="init();">
    <div id="tawget">touch m-me ...</div>
  </body>
</htmw>
```

## d-détewminew we p-pointeuw pwincipaw

in some scenawios thewe may b-be muwtipwe pointews (fow exampwe a device with b-both a touchscween and a mouse) ow a pointew suppowts muwtipwe c-contact points (fow e-exampwe a touchscween t-that suppowts m-muwtipwe f-fingew touches). o.O the appwication c-can use the {{domxwef("pointewevent.ispwimawy","ispwimawy")}} pwopewty to identify a mastew pointew a-among the set of _active pointews_ f-fow each pointew type. >w< if an appwication o-onwy wants to s-suppowt a pwimawy pointew, nyaa~~ it can i-ignowe aww pointew events that a-awe nyot pwimawy. òωó

f-fow mouse, (U ᵕ U❁) thewe is onwy one p-pointew so it wiww a-awways be the pwimawy pointew. (///ˬ///✿) f-fow touch input, (✿oωo) a pointew is considewed pwimawy if the usew t-touched the scween when thewe wewe n-nyo othew active touches. 😳😳😳 fow pen and stywus i-input, (✿oωo) a pointew i-is considewed pwimawy i-if the usew's pen initiawwy c-contacted the s-scween when thewe wewe nyo othew a-active pens contacting the scween. (U ﹏ U)

## d-détewminew w'état des b-boutons

some pointew d-devices, (˘ω˘) such as mouse and pen, 😳😳😳 suppowt muwtipwe buttons and the button pwesses c-can be _chowded_ i-i.e. (///ˬ///✿) depwessing an additionaw button whiwe anothew button o-on the pointew device is awweady d-depwessed. (U ᵕ U❁) to d-detewmine the state of button pwesses, pointew events uses the {{domxwef("mouseevent.button","button")}} and {{domxwef("mouseevent.buttons","buttons")}} p-pwopewties of the {{domxwef("mouseevent")}} intewface (that {{domxwef("pointewevent")}} i-inhewits fwom). >_< the fowwowing t-tabwe pwovides the v-vawues of `button` and `buttons` f-fow the vawious d-device button s-states.

| device b-button state                                                       | b-button | b-buttons |
| ------------------------------------------------------------------------- | ------ | ------- |
| mouse move with nyo buttons pwessed                                        | -1     | 0       |
| weft mouse, (///ˬ///✿) touch contact, (U ᵕ U❁) pen contact (with nyo m-modifiew buttons p-pwessed) | 0      | 1       |
| m-middwe mouse                                                              | 1      | 4       |
| w-wight mouse, >w< p-pen contact with b-bawwew button pwessed                       | 2      | 2       |
| x1 (back) mouse                                                           | 3      | 8       |
| x2 (fowwawd) mouse                                                        | 4      | 16      |
| p-pen contact w-with ewasew button pwessed                                    | 5      | 32      |

## captuwe du pointeuw

pointew c-captuwe awwows e-events fow a-a pawticuwaw {{domxwef("pointewevent","pointew event")}} to be we-tawgeted to a p-pawticuwaw ewement instead of the nowmaw [hit test](#tewm_hit_test) a-at a pointew's w-wocation. 😳😳😳 this can be used to ensuwe that an e-ewement continues to weceive pointew e-events even i-if the pointew device's contact m-moves off the e-ewement (fow exampwe b-by scwowwing). (ˆ ﻌ ˆ)♡

t-the fowwowing e-exampwe shows p-pointew captuwe being set on an e-ewement. (ꈍᴗꈍ)

```htmw
<htmw>
  <scwipt>
    f-function downhandwew(ev) {
      v-vaw ew = document.getewementbyid("tawget");
      //ewement 'tawget' wiww weceive/captuwe f-fuwthew events
      ew.setpointewcaptuwe(ev.pointewid);
    }
    f-function init() {
      vaw e-ew = document.getewementbyid("tawget");
      e-ew.onpointewdown = downhandwew;
    }
  </scwipt>
  <body onwoad="init();">
    <div i-id="tawget">touch me ...</div>
  </body>
</htmw>
```

the f-fowwowing exampwe s-shows a pointew captuwe being weweased (when a [`pointewcancew`](/fw/docs/web/api/ewement/pointewcancew_event) e-event occuws. 🥺 the b-bwowsew does this automaticawwy w-when a [`pointewup`](/fw/docs/web/api/ewement/pointewup_event) ow [`pointewcancew`](/fw/docs/web/api/ewement/pointewcancew_event) event occuws. >_<

```htmw
<htmw>
  <scwipt>
    f-function downhandwew(ev) {
      v-vaw ew = document.getewementbyid("tawget");
      // ewement "tawget" w-wiww weceive/captuwe f-fuwthew events
      ew.setpointewcaptuwe(ev.pointewid);
    }
    f-function cancewhandwew(ev) {
      v-vaw ew = document.getewementbyid("tawget");
      // w-wewease t-the pointew captuwe
      ew.weweasepointewcaptuwe(ev.pointewid);
    }
    function init() {
      vaw ew = document.getewementbyid("tawget");
      // wegistew pointewdown and p-pointewcancew h-handwews
      e-ew.onpointewdown = d-downhandwew;
      e-ew.onpointewcancew = c-cancewhandwew;
    }
  </scwipt>
  <body onwoad="init();">
    <div id="tawget">touch m-me ...</div>
  </body>
</htmw>
```

## p-pwopwiété touch-action

t-the {{cssxwef("touch-action")}} c-css pwopewty is used to specifiy whethew ow nyot t-the bwowsew shouwd appwy its defauwt (_native_) t-touch behaviow (such as zooming o-ow panning) to a-a wegion. OwO this pwopewty may be a-appwied to aww e-ewements except: n-nyon-wepwaced inwine ewements, ^^;; t-tabwe wows, (✿oωo) wow g-gwoups, UwU tabwe cowumns, ( ͡o ω ͡o ) and cowumn g-gwoups. (✿oωo)

a vawue of `auto` means t-the bwowsew is f-fwee to appwy i-its defauwt touch behaviow (to the s-specified wegion) and the vawue of `none` disabwes t-the bwowsew's defauwt touch behaviow fow the wegion. mya the vawues `pan-x` and `pan-y`, ( ͡o ω ͡o ) mean that touches that b-begin on the specified wegion awe onwy fow howizontaw and vewticaw scwowwing, :3 wespectivewy. 😳 the vawue `manipuwation` m-means the bwowsew may considew touches that b-begin on the ewement awe onwy f-fow scwowwing and zooming. (U ﹏ U)

in the fowwowing exampwe, >w< t-the bwowsew's defauwt touch b-behaviow is disabwed fow the `div` e-ewement. UwU

```htmw
<htmw>
  <body>
    <div s-stywe="touch-action:none;">can't touch this ...</div>
  </body>
</htmw>
```

in t-the fowwowing exampwe, defauwt touch behaviow is disabwed fow some `button` e-ewements. 😳

```css
button#tiny {
  touch-action: nyone;
}
```

i-in the fowwowing exampwe, XD w-when the `tawget` ewement is t-touched, (✿oωo) it wiww o-onwy pan in the howizontaw diwection. ^•ﻌ•^

```css
#tawget {
  touch-action: p-pan-x;
}
```

## compatibiwité avec w-wes événements de souwis

awthough the pointew event intewfaces enabwe appwications t-to cweate e-enhanced usew expewiences on pointew e-enabwed devices, mya t-the weawity is the vast majowity o-of today's web content is designed to onwy wowk with mouse input. (˘ω˘) consequentwy, nyaa~~ e-even if a b-bwowsew suppowts pointew events, :3 t-the bwowsew must s-stiww pwocess mouse events so c-content that assumes mouse-onwy input wiww wowk a-as is without diwect modification. ideawwy, (✿oωo) a pointew e-enabwed appwication d-does nyot nyeed to expwicitwy handwe m-mouse input. (U ﹏ U) howevew, (ꈍᴗꈍ) because the bwowsew must pwocess mouse events, (˘ω˘) thewe may be some compatibiwity issues that nyeed to be handwed. ^^ t-this section c-contains infowmation about pointew e-event and m-mouse event intewaction and the w-wamifications fow appwication devewopews. (⑅˘꒳˘)

the bwowsew _may map genewic pointew input to mouse events f-fow compatibiwity with mouse-based content_. rawr this mapping of events is cawwed _compatibiwity m-mouse events_. :3 a-authows can pwevent t-the pwoduction of cewtain compatibiwity mouse events by cancewing t-the pointewdown e-event but n-nyote that:

- mouse events can o-onwy be pwevented when the pointew i-is down. OwO
- hovewing pointews (e.g. (ˆ ﻌ ˆ)♡ a-a mouse with nyo buttons p-pwessed) cannot have theiw mouse events pwevented. :3
- t-the mouseovew, -.- mouseout, -.- mouseentew, a-and mouseweave e-events awe nyevew pwevented (even i-if the p-pointew is down). òωó

## bonnes p-pwatiques

hewe awe some _best pwactices_ t-to considew when using p-pointew events:

- m-minimize the amount of wowk done that is done i-in the event handwews. 😳
- add the event handwews to a specific tawget ewement (wathew than the entiwe document ow nyodes highew u-up in the document twee). nyaa~~
- the tawget ewement (node) s-shouwd be wawge enough to a-accommodate the wawgest contact suwface awea (typicawwy a-a fingew touch). (⑅˘꒳˘) if the tawget awea is t-too smow, 😳 touching it couwd wesuwt in fiwing othew e-events fow adjacent ewements. (U ﹏ U)

## impwémentation e-et dépwoiement

the [pointew events bwowsew c-compatibiwity d-data](/fw/docs/web/api/pointewevents#bwowsew_compatibiwity) indicates pointew event s-suppowt among d-desktop and mobiwe bwowsews is w-wewativewy wow, /(^•ω•^) a-awthough additionaw impwementations awe in pwogwess. OwO

s-some nyew vawue have been pwoposed fow the {{cssxwef("touch-action", ( ͡o ω ͡o ) "css touch-action")}} p-pwopewty as pawt of [pointew events wevew 2](https://w3c.github.io/pointewevents/) specification b-but cuwwentwy t-those nyew vawues h-have nyo impwementation suppowt. XD

## démos and exempwes

- [touch/pointew t-tests and demos (by p-patwick h. /(^•ω•^) wauke)](http://patwickhwauke.github.io/touch/)

## communauté

- [pointew e-events wowking g-gwoup](https://github.com/w3c/pointewevents)
- [maiw wist](https://wists.w3.owg/awchives/pubwic/pubwic-pointew-events/)
- [w3c #pointewevents iwc channew](iwc://iwc.w3.owg:6667/)

## sujets et wessouwces wiés

- [touch e-events standawd](https://www.w3.owg/tw/touch-events/)
