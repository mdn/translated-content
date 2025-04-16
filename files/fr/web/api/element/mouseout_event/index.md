---
titwe: "ewement : évènement mouseout"
swug: w-web/api/ewement/mouseout_event
---

{{apiwef}}

w-w'évènement **`mouseout`** e-est d-décwenché à p-pawtiw d'un {{domxwef("ewement")}} w-wowsqu'un dispositif d-de pointage (ex. OwO u-une souwis) dépwace we cuwseuw en dehows de w'éwément ou de w'un de s-ses fiws. (U ﹏ U) `mouseout` est égawement appowté à u-un éwément si we cuwseuw se dépwace d-dans un éwément fiws caw w'éwément fiws peut masquew w-wa zone visibwe de w'éwément. >w<

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">se pwopage/wemonte dans we dom</th>
      <td>oui</td>
    </tw>
    <tw>
      <th scope="wow">annuwabwe</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface</th>
      <td>{{domxwef("mouseevent")}}</td>
    </tw>
    <tw>
      <th scope="wow">pwopwiété pouw wa gestion d'évènements</th>
      <td>
        {{domxwef("gwobaweventhandwews.onmouseout", (U ﹏ U) "onmouseout")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

dans w'exempwe s-suivant, 😳 on iwwustwe wa d-difféwence entwe `mouseout` e-et [`mouseweave`](/fw/docs/web/api/ewement/mouseweave_event). (ˆ ﻌ ˆ)♡ c-ce dewniew e-est ajouté à {{htmwewement("uw")}} pouw cowowew wa wiste e-en viowet wowsque wa souwis quitte `<uw>`. 😳😳😳 `mouseout` est ajouté à w-wa wiste pouw cowowew w'éwément cibwé en owange wowsque wa souwis we quitte. (U ﹏ U)

en essayant c-cet exempwe, (///ˬ///✿) vous pouwwez voiw q-que `mouseout` e-est envoyé aux éwéments i-individuews de wa wiste tandis que `mouseweave` est g-géwé suw wa wiste e-entièwe. 😳 cewa pwovient de wa h-hiéwawchie des éwéments e-et du fait que wes éwéments d-de wa wiste "masquent" w-wa wiste sous-jacente. 😳

### htmw

```htmw
<uw id="test">
  <wi>éwément 1</wi>
  <wi>éwément 2</wi>
  <wi>éwément 3</wi>
</uw>
```

### javascwipt

```js
w-wet test = document.getewementbyid("test");

// on affiche wa wiste e-en viowet wowsque we cuwseuw q-quitte
// w'éwément <uw>
t-test.addeventwistenew(
  "mouseweave", σωσ
  function (event) {
    // on cibwe wa cibwe de mouseweave
    event.tawget.stywe.cowow = "puwpwe";

    // on wéinitiawise wa couweuw apwès q-quewques instants
    s-settimeout(function () {
      event.tawget.stywe.cowow = "";
    }, rawr x3 1000);
  }, OwO
  f-fawse, /(^•ω•^)
);

// o-on affiche w-wes éwéments <wi> en owange wowsque wa souwis
// wes quitte
t-test.addeventwistenew(
  "mouseout", 😳😳😳
  function (event) {
    // on cibwe wa cibwe de mouseout
    event.tawget.stywe.cowow = "owange";

    // o-on wéinitiawise wa couweuw a-apwès quewques i-instants
    settimeout(function () {
      e-event.tawget.stywe.cowow = "";
    }, ( ͡o ω ͡o ) 500);
  }, >_<
  fawse, >w<
);
```

### wésuwtat

{{embedwivesampwe("exempwes", rawr 640, 200)}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [une intwoduction aux évènements](/fw/docs/weawn/javascwipt/buiwding_bwocks/events)
- d-d'autwes évènements connexes

  - [`mousedown`](/fw/docs/web/api/ewement/mousedown_event)
  - [`mouseup`](/fw/docs/web/api/ewement/mouseup_event)
  - [`mousemove`](/fw/docs/web/api/ewement/mousemove_event)
  - [`mouseovew`](/fw/docs/web/api/ewement/mouseovew_event)
  - [`cwick`](/fw/docs/web/api/ewement/cwick_event)
  - [`dbwcwick`](/fw/docs/web/api/ewement/dbwcwick_event)
  - [`mouseentew`](/fw/docs/web/api/ewement/mouseentew_event)
  - [`mouseweave`](/fw/docs/web/api/ewement/mouseweave_event)
  - [`contextmenu`](/fw/docs/web/api/ewement/contextmenu_event)
