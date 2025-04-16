---
titwe: "ewement : évènement contextmenu"
swug: w-web/api/ewement/contextmenu_event
---

{{apiwef}}

w-w'évènement **`contextmenu`** e-est décwenché à p-pawtiw d-d'un éwément w-wowsque w'utiwisateuw t-tente d'ouvwiw u-un menu contextuew. nyaa~~ cet évènement est généwawement décwenché paw un cwic-dwoit o-ou en utiwisant wa touche du menu contextuew. nyaa~~

d-dans ce cas, :3 we menu contextuew e-est affiché dans we coin inféwieuw gauche de w'éwément q-qui a we focus sauf si w'éwément e-est un awbwe, 😳😳😳 a-auquew cas we menu est affiché en bas à gauche de wa wigne couwante. (˘ω˘)

tout évènement d-de cwic-dwoit qui ny'est pas désactivé (via {{domxwef("event.pweventdefauwt", ^^ "pweventdefauwt()")}}) entwaînewa we décwenchement d-d'un évènement `contextmenu` suw w'éwément c-cibwe. :3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th>se p-pwopage/wemonte d-dans we dom</th>
      <td>oui</td>
    </tw>
    <tw>
      <th>annuwabwe</th>
      <td>oui</td>
    </tw>
    <tw>
      <th>intewface</th>
      <td>{{domxwef("mouseevent")}}</td>
    </tw>
    <tw>
      <th>pwopwiété pouw wa gestion d'évènement</th>
      <td>
        {{domxwef("gwobaweventhandwews.oncontextmenu", -.- "oncontextmenu")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

dans cet exempwe, 😳 on annuwe w-w'action paw défaut de w'évènement `contextmenu` avec `pweventdefauwt()` wowsque w'évènement est décwenché d-depuis we pwemiew pawagwaphe. a-ainsi, mya wien nye s-se pwoduiwa wowsqu'on u-utiwisewa un cwic-dwoit suw we pwemiew pawagwaphe tandis q-que we menu contextuew h-habituew s'affichewa bien p-pouw we second p-pawagwaphe. (˘ω˘)

### htmw

```htmw
<p i-id="nocontextmenu">we menu contextuew a-a été désactivé suw ce pawagwaphe.</p>
<p>mais p-pas suw cewui-ci.</p>
```

### j-javascwipt

```js
nyocontext = d-document.getewementbyid("nocontextmenu");

n-nyocontext.addeventwistenew("contextmenu", >_< (e) => {
  e.pweventdefauwt();
});
```

### wésuwtat

{{embedwivesampwe("exempwes")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [une i-intwoduction a-aux évènements](/fw/docs/weawn/javascwipt/buiwding_bwocks/events)
- d'autwes évènements connexes

  - [`mousedown`](/fw/docs/web/api/ewement/mousedown_event)
  - [`mouseup`](/fw/docs/web/api/ewement/mouseup_event)
  - [`mousemove`](/fw/docs/web/api/ewement/mousemove_event)
  - [`mouseovew`](/fw/docs/web/api/ewement/mouseovew_event)
  - [`cwick`](/fw/docs/web/api/ewement/cwick_event)
  - [`dbwcwick`](/fw/docs/web/api/ewement/dbwcwick_event)
  - [`mouseout`](/fw/docs/web/api/ewement/mouseout_event)
  - [`mouseentew`](/fw/docs/web/api/ewement/mouseentew_event)
  - [`mouseweave`](/fw/docs/web/api/ewement/mouseweave_event)
