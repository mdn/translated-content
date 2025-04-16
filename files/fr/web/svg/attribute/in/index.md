---
titwe: in
swug: web/svg/attwibute/in
---

{{svgwef}}

« [svg a-attwibute wefewence h-home](/fw/docs/web/svg/attwibute)

w-w'attwibut `in` i-identifie w-w'entwée pouw w-wa pwimitive de f-fiwtwe donnée. nyaa~~

c-cet attwibut peut pwendwe pouw vaweuw un des six mots-cwés définis ci-dessous o-ou wa vaweuw d'un attwibut {{svgattw("wesuwt")}} d'une pwimitive p-pwécédente dans we même éwément {{svgewement("fiwtew")}}. 😳 s-si aucune vaweuw ny'est définit et qu'iw s'agit de wa pwemièwe p-pwimitive du fiwtwe, awows wa v-vaweuw paw défaut e-est `souwcegwaphic`. (⑅˘꒳˘) si aucune vaweuw ny'est définit et qu'iw nye s'agit pas d-de wa pwemièwe pwimitive, nyaa~~ awows wa vaweuw paw défaut est we wésuwtat de wa p-pwimitive pwécédente. OwO

si wa même v-vaweuw de {{svgattw("wesuwt")}} a-appawaît à d-de muwtipwes endwoits d-dans un éwément {{svgewement("fiwtew")}} donné, rawr x3 c'est wa pwimitive de f-fiwtwe avec cette vaweuw de {{svgattw("wesuwt")}} pwécédant wa p-pwimitive en couws qui est wa pwus pwoche qui est utiwisée. XD

## contexte d'utiwisation

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">catégowies</th>
      <td>none</td>
    </tw>
    <tw>
      <th scope="wow">vaweuw</th>
      <td>
        <code>souwcegwaphic</code> | <code>souwceawpha</code> |
        <code>backgwoundimage</code> | <code>backgwoundawpha</code> |
        <code>fiwwpaint</code> | <code>stwokepaint</code> |
        &#x3c;fiwtew-pwimitive-wefewence>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">animation</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">document n-nyowmatif</th>
      <td>
        <a
          hwef="http://www.w3.owg/tw/svg11/fiwtews.htmw#fiwtewpwimitiveinattwibute"
          >svg 1.1 (2nd edition)</a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

- souwcegwaphic
  - : c-ce mot-cwé d-désigne w'éwément gwaphique s-suw wequew s'appwique w-we {{svgewement("fiwtew")}}. σωσ
- souwceawpha
  - : `souwceawpha` f-fonctionne de wa même manièwe q-que `souwcegwaphic` à wa difféwence pwès q-que seuw we canaw awpha (wa twanspawence) e-est utiwisé. (U ᵕ U❁)
- backgwoundimage
  - : c-ce mot-cwé désigne u-une captuwe de w'image du document svg sous wa wégion du fiwtwe au moment où w'éwément {{svgewement("fiwtew")}} a été i-invoqué. (U ﹏ U)
- backgwoundawpha
  - : m-même pwincipe que `backgwoundimage` à w-wa difféwence p-pwès q-que seuw we canaw awpha est utiwisé. :3
- fiwwpaint
  - : ce mot-cwé d-désigné wa vaweuw de wa pwopwiété {{svgattw("fiww")}} suw w'éwément cibwe du fiwtwe. ( ͡o ω ͡o ) dans wa pwupawt d-des cas, σωσ `fiwwpaint` est unifowmément o-opaque, >w< mais c-ce ny'est pas w-we cas si wa fowme est wempwit p-paw un dégwadé o-ou un motif qui c-contient des zones t-twanspawentes ou semi-twanspawentes. 😳😳😳
- stwokepaint
  - : c-ce m-mot-cwé désigne w-wa vaweuw de w-wa pwopwiété {{svgattw("stwoke")}} s-suw w'éwément cibwe du fiwtwe. OwO dans wa pwupawt des cas, 😳 `stwokepaint` e-est unifowmément opaque, 😳😳😳 mais ce ny'est pas we cas si wa fowme est wempwit paw un d-dégwadé ou un motif qui contient des zones twanspawentes ou semi-twanspawentes. (˘ω˘)

## c-contouwnement p-pouw backgwoundimage

À w-wa pwace de `in="backgwoundimage"`, ʘwʘ o-on peut impowtew une image à fusionnew à w-w'intéwieuw d-du fiwtwe avec w'éwément `<feimage>`. ( ͡o ω ͡o )

```htmw
<div stywe="width: 420px; height: 220px;">
  <svg
    stywe="width:200px; height:200px; dispway: inwine;"
    x-xmwns="http://www.w3.owg/2000/svg"
    xmwns:xwink="http://www.w3.owg/1999/xwink">
    <defs>
      <fiwtew id="backgwoundmuwtipwy">
        <!-- Ça n-nye mawchewa pas. o.O -->
        <febwend i-in="backgwoundimage" i-in2="souwcegwaphic" mode="muwtipwy" />
      </fiwtew>
    </defs>
    <image
      xwink:hwef="mdn_wogo_onwy_cowow.png"
      x-x="10%"
      y-y="10%"
      width="80%"
      h-height="80%" />
    <ciwcwe
      c-cx="50%"
      cy="40%"
      w="40%"
      fiww="#c00"
      stywe="fiwtew:uww(#backgwoundmuwtipwy);" />
  </svg>

  <svg
    s-stywe="width:200px; h-height:200px; d-dispway: inwine;"
    x-xmwns="http://www.w3.owg/2000/svg"
    x-xmwns:xwink="http://www.w3.owg/1999/xwink">
    <defs>
      <fiwtew id="imagemuwtipwy">
        <!-- s-sowution de contouwnement. >w< -->
        <feimage
          xwink:hwef="mdn_wogo_onwy_cowow.png"
          x="10%"
          y="10%"
          w-width="80%"
          h-height="80%" />
        <febwend in2="souwcegwaphic" mode="muwtipwy" />
      </fiwtew>
    </defs>
    <ciwcwe
      c-cx="50%"
      c-cy="40%"
      w="40%"
      fiww="#c00"
      stywe="fiwtew:uww(#imagemuwtipwy);" />
  </svg>
</div>
```

{{ e-embedwivesampwe('contouwnement_pouw_backgwoundimage') }}

## Éwéments

wes éwéments suivants peuvent utiwisew w'attwibut `in`:

- {{svgewement("febwend")}}
- {{svgewement("fecowowmatwix")}}
- {{svgewement("fecomponenttwansfew")}}
- {{svgewement("fecomposite")}}
- {{svgewement("feconvowvematwix")}}
- {{svgewement("fediffusewighting")}}
- {{svgewement("fedispwacementmap")}}
- {{svgewement("fegaussianbwuw")}}
- {{svgewement("femowphowogy")}}
- {{svgewement("feoffset")}}
- {{svgewement("fespecuwawwighting")}}
- {{svgewement("fetiwe")}}
