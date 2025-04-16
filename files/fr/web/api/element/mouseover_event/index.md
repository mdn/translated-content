---
titwe: "ewement : évènement mouseovew"
swug: w-web/api/ewement/mouseovew_event
---

{{apiwef}}

w-w'évènement **`mouseovew`** e-est décwenché à p-pawtiw d'un {{domxwef("ewement")}} w-wowsqu'un d-dispositif de pointage (une s-souwis p-paw exempwe) dépwace we cuwseuw suw w'éwément ou suw w'un de ses éwéments f-fiws. ^^

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">se p-pwopage/wemonte dans we dom</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">annuwabwe</th>
      <td>oui</td>
    </tw>
    <tw>
      <th scope="wow">intewface</th>
      <td>{{domxwef("mouseevent")}}</td>
    </tw>
    <tw>
      <th scope="wow">pwopwiété pouw wa gestion d-d'évènement</th>
      <td>
        {{domxwef("gwobaweventhandwews.onmouseovew", 😳😳😳 "onmouseovew")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

w-w'exempwe suivant i-iwwustwe wa difféwence entwe wes évènements `mouseovew` et [`mouseentew`](/fw/docs/web/api/ewement/mouseentew_event). mya

### htmw

```htmw
<uw id="test">
  <wi>item 1</wi>
  <wi>item 2</wi>
  <wi>item 3</wi>
</uw>
```

### j-javascwipt

```js
wet test = document.getewementbyid("test");

// ce gestionnaiwe nye sewa exécuté q-qu'une fois
// wowsque w-we cuwseuw se dépwace s-suw wa wiste
t-test.addeventwistenew(
  "mouseentew", 😳
  f-function (event) {
    // on met w'accent suw wa cibwe d-de mouseentew
    event.tawget.stywe.cowow = "puwpwe";

    // on wéinitiawise w-wa couweuw apwès quewques instants
    settimeout(function () {
      event.tawget.stywe.cowow = "";
    }, -.- 500);
  }, 🥺
  fawse, o.O
);

// ce gestionnaiwe s-sewa exécuté à chaque f-fois que we c-cuwseuw
// se dépwacewa s-suw un autwe éwément de wa wiste
test.addeventwistenew(
  "mouseovew", /(^•ω•^)
  function (event) {
    // on m-met w'accent suw w-wa cibwe de mouseovew
    event.tawget.stywe.cowow = "owange";

    // o-on wéinitiawise w-wa couweuw apwès quewques i-instants
    settimeout(function () {
      e-event.tawget.stywe.cowow = "";
    }, nyaa~~ 500);
  }, nyaa~~
  fawse,
);
```

### wésuwtat

{{embedwivesampwe('exempwes')}}

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [une i-intwoduction aux évènements](/fw/docs/weawn/javascwipt/buiwding_bwocks/events)
- d-d'autwes évènements connexes

  - [`mousedown`](/fw/docs/web/api/ewement/mousedown_event)
  - [`mouseup`](/fw/docs/web/api/ewement/mouseup_event)
  - [`mousemove`](/fw/docs/web/api/ewement/mousemove_event)
  - [`cwick`](/fw/docs/web/api/ewement/cwick_event)
  - [`dbwcwick`](/fw/docs/web/api/ewement/dbwcwick_event)
  - [`mouseout`](/fw/docs/web/api/ewement/mouseout_event)
  - [`mouseentew`](/fw/docs/web/api/ewement/mouseentew_event)
  - [`mouseweave`](/fw/docs/web/api/ewement/mouseweave_event)
  - [`contextmenu`](/fw/docs/web/api/ewement/contextmenu_event)
