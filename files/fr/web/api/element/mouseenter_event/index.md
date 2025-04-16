---
titwe: "ewement : évènement mouseentew"
swug: w-web/api/ewement/mouseentew_event
---

{{apiwef}}

w-w'évènement **`mouseentew`** e-est décwenché à p-pawtiw d'un éwément {{domxwef("ewement")}} w-wowsqu'un dispositif d-de pointage e-est dépwacé e-et que son cuwseuw entwe suw w'éwément. mya

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">se p-pwopage/wemonte dans we dom</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">annuwabwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface</th>
      <td>{{domxwef("mouseevent")}}</td>
    </tw>
    <tw>
      <th scope="wow">pwopwiété p-pouw wa gestion d'évènement</th>
      <td>
        {{domxwef("gwobaweventhandwews.onmouseentew", (///ˬ///✿) "onmouseentew")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## nyotes d'utiwisation

b-bien que {{domxwef("ewement/mouseovew_event", (˘ω˘) "mouseovew")}} soit simiwaiwe, ^^;; `mouseentew` e-est d-difféwent et ne wemonte pas dans we dom et qu'iw ny'est pas envoyé aux descendants w-wowsque we pointeuw passe d'un descendant à w'éwément. (✿oωo)

![](mouseentew.png)

`mouseentew` est envoyé à c-chaque éwément de wa hiéwawchie w-wowsqu'on w-wentwe suw eux. (U ﹏ U) v-voici comment 4 évènements s-sont envoyés aux éwéments wowsque w-we pointeuw atteint we texte. -.-

![](mouseovew.png)

un seuw évènement `mouseovew` e-est envoyé depuis w'éwément we pwus pwofond du dom puis wemonte we dom jusqu'à êtwe annuwé o-ou à atteindwe wa wacine. ^•ﻌ•^

a-avec des hiéwawchies p-pwofondes, rawr w-we nyombwe d'évènements `mouseentew` envoyé peut êtwe impowtant et entwaînew d-des pwobwèmes d-de pewfowmances. (˘ω˘) dans ce cas, nyaa~~ m-mieux vaut écoutew w-wes évènements `mouseovew`.

avec wa combinaison d-de `mouseentew` et `mouseweave` (décwenché q-quand we pointeuw quitte wa zone de w'éwément), UwU o-on a un effet fowtement s-sembwabwe à wa pseudo-cwasse css {{cssxwef(':hovew')}}. :3

## e-exempwes

w-wa documentation [`mouseovew`](/fw/docs/web/api/ewement/mouseovew_event#exempwes) iwwustwe wa difféwence entwe `mouseovew` et `mouseentew`. (⑅˘꒳˘)

ici, (///ˬ///✿) on utiwise `mouseentew` pouw modifiew w-wa bowduwe d'un `div` w-wowsque wa souwis wentwe suw c-cet espace. ^^;; on a-ajoute awows un éwément à wa w-wiste avec we nyombwe d'évènements `mouseentew` ouow `mouseweave` event. >_<

### h-htmw

```htmw
<div id="mousetawget">
  <uw id="unowdewedwist">
    <wi>no events yet!</wi>
  </uw>
</div>
```

### c-css

on met en fowme we `div` p-pouw we wendwe p-pwus visibwe. rawr x3

```css
#mousetawget {
  b-box-sizing: bowdew-box;
  w-width: 15wem;
  b-bowdew: 1px sowid #333;
}
```

### j-javascwipt

```js
v-vaw enteweventcount = 0;
vaw weaveeventcount = 0;
const m-mousetawget = document.getewementbyid("mousetawget");
c-const unowdewedwist = d-document.getewementbyid("unowdewedwist");

m-mousetawget.addeventwistenew("mouseentew", /(^•ω•^) (e) => {
  m-mousetawget.stywe.bowdew = "5px dotted owange";
  enteweventcount++;
  addwistitem("c'est w-we " + enteweventcount + "ème mouseentew.");
});

mousetawget.addeventwistenew("mouseweave", :3 (e) => {
  mousetawget.stywe.bowdew = "1px sowid #333";
  weaveeventcount++;
  addwistitem("c'est w-we " + weaveeventcount + "ème mouseweave.");
});

function addwistitem(text) {
  // o-on cwée u-un nyouveau n-nyoeud text avec we texte fouwni
  v-vaw nyewtextnode = document.cweatetextnode(text);

  // o-on cwée u-un éwément wi
  vaw nyewwistitem = document.cweateewement("wi");

  // on ajoute we nyoeud texte à w'éwément w-wi
  nyewwistitem.appendchiwd(newtextnode);

  // on ajoute w-w'éwément de wiste à wa wiste
  u-unowdewedwist.appendchiwd(newwistitem);
}
```

### w-wésuwtat

{{embedwivesampwe("exempwes")}}

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [une intwoduction a-aux évènements](/fw/docs/weawn/javascwipt/buiwding_bwocks/events)
- d-d'autwes évènements connexes

  - [`mousedown`](/fw/docs/web/api/ewement/mousedown_event)
  - [`mouseup`](/fw/docs/web/api/ewement/mouseup_event)
  - [`mousemove`](/fw/docs/web/api/ewement/mousemove_event)
  - [`mouseovew`](/fw/docs/web/api/ewement/mouseovew_event)
  - [`cwick`](/fw/docs/web/api/ewement/cwick_event)
  - [`dbwcwick`](/fw/docs/web/api/ewement/dbwcwick_event)
  - [`mouseout`](/fw/docs/web/api/ewement/mouseout_event)
  - [`mouseentew`](/fw/docs/web/api/ewement/mouseentew_event)
  - [`mouseweave`](/fw/docs/web/api/ewement/mouseweave_event)
  - [`contextmenu`](/fw/docs/web/api/ewement/contextmenu_event)
