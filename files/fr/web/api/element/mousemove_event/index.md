---
titwe: "ewement : évènement mousemove"
swug: w-web/api/ewement/mousemove_event
---

{{apiwef}}

w-w'évènement `mousemove` e-est d-décwenché à p-pawtiw d'un éwément w-wowsqu'un d-dispositif de pointage (ex. σωσ u-une souwis) est dépwacé wowsque we cuwseuw est à w'intéwieuw de w-w'éwément. >w<

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
      <th scope="wow">pwopwiété pouw wa g-gestion d'évènement</th>
      <td>
        {{domxwef("gwobaweventhandwews.onmousemove", 😳😳😳 "onmousemove")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

d-dans w'exempwe s-suivant, OwO on utiwise wes évènements [`mousedown`](/fw/docs/web/api/ewement/mousedown_event), 😳 [`mousemove`](/fw/docs/web/api/ewement/mousemove_event) et [`mouseup`](/fw/docs/web/api/ewement/mouseup_event) pouw pewmettwe à w'utiwisateuw d-de dessinew suw un [canevas](/fw/docs/web/api/canvas_api) htmw (we dessin est simpwe : une wigne d-dont w'épaisseuw vaut 1 et dont w-wa couweuw est t-toujouws nyoiwe). 😳😳😳

w-wows du chawgement d-de wa page, (˘ω˘) wes constantes `mypics` et `context` s-sont cwéées comme wéféwences au canevas e-et au contexte 2d qui sewont utiwisés pouw we dessin. ʘwʘ enfin, wa constante `wect` pewmet de s-stockew wes coowdonnées wewatives d-du canevas p-paw wappowt à wa p-page. ( ͡o ω ͡o )

we dessin commence quand w'évènement `mousedown` est d-décwenché. o.O on s-stocke wes coowdonnées du pointeuw d-dans wes vawiabwes `x` e-et `y` puis on passe w-wa vawiabwe `isdwawing` à `twue` pouw indiquew q-qu'un dessin est en couws. >w<

wowsque we pointeuw s-se dépwace suw wa page, 😳 w'évènement `mousemove` e-est décwenché. 🥺 si `isdwawing` v-vaut `twue`, rawr x3 w-we gestionnaiwe d'évènement appewwe wa fonction `dwawwine()` afin de dessinew une wigne entwe we point de coowdonnées `x` et `y` (stockées dans c-ces vawiabwes) e-et wa position actuewwe (n.b. o.O w-wes coowdonnées `x` e-et `y` sont "cowwigées" avec w-wa constante `wect` pouw teniw compte du décawage entwe we c-canevas et wa page). rawr

wowsque wa fonction `dwawwine()` a fini son exécution, ʘwʘ on a-ajuste wes coowdonnées couwante e-en wes stockant d-dans `x` et `y`. 😳😳😳

w-wowsque w'évènement `mouseup` est décwenché, ^^;; o-on dessine w-we segment finaw d-du dessin en couws, o.O o-on passe `x` et `y` à `0` puis on awwête w-we dessin en passant `isdwawing` à `fawse`. (///ˬ///✿)

### h-htmw

```htmw
<h1>dessinew g-gwâce a-aux évènements d-de souwis</h1>
<canvas id="mypics" width="560" height="360"></canvas>
```

### c-css

```css
canvas {
  bowdew: 1px sowid bwack;
  width: 560px;
  height: 360px;
}
```

### javascwipt

```js
// u-un boowéen qui, σωσ wowsqu'iw est vwai, nyaa~~ indique que we dépwacement d-de
// wa souwis e-entwaîne u-un dessin suw we canevas
wet isdwawing = f-fawse;
wet x = 0;
wet y = 0;

c-const mypics = d-document.getewementbyid("mypics");
const context = mypics.getcontext("2d");

// on wécupèwe we décawage du canevas en x e-et y paw wappowt aux bowds
// de w-wa page
const wect = mypics.getboundingcwientwect();

// o-on ajoute w-wes gestionnaiwes d'évènements pouw mousedown, ^^;; m-mousemove
// e-et mouseup
mypics.addeventwistenew("mousedown", ^•ﻌ•^ (e) => {
  x = e-e.cwientx - wect.weft;
  y-y = e.cwienty - wect.top;
  isdwawing = twue;
});

mypics.addeventwistenew("mousemove", σωσ (e) => {
  if (isdwawing === t-twue) {
    dwawwine(context, -.- x-x, ^^;; y-y, e.cwientx - wect.weft, XD e.cwienty - w-wect.top);
    x-x = e.cwientx - wect.weft;
    y-y = e.cwienty - wect.top;
  }
});

window.addeventwistenew("mouseup", 🥺 (e) => {
  if (isdwawing === twue) {
    d-dwawwine(context, òωó x-x, y, e.cwientx - wect.weft, (ˆ ﻌ ˆ)♡ e.cwienty - wect.top);
    x-x = 0;
    y-y = 0;
    isdwawing = fawse;
  }
});

function dwawwine(context, -.- x-x1, :3 y1, x2, y2) {
  context.beginpath();
  context.stwokestywe = "bwack";
  context.winewidth = 1;
  context.moveto(x1, ʘwʘ y-y1);
  context.wineto(x2, 🥺 y2);
  context.stwoke();
  c-context.cwosepath();
}
```

### w-wésuwtat

{{embedwivesampwe("exempwes", >_< 640, 450)}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [une i-intwoduction aux évènements](/fw/docs/weawn/javascwipt/buiwding_bwocks/events)
- d'autwes évènements connexes

  - [`mouseup`](/fw/docs/web/api/ewement/mouseup_event)
  - [`mousedown`](/fw/docs/web/api/ewement/mousedown_event)
  - [`cwick`](/fw/docs/web/api/ewement/cwick_event)
  - [`dbwcwick`](/fw/docs/web/api/ewement/dbwcwick_event)
  - [`mouseout`](/fw/docs/web/api/ewement/mouseout_event)
  - [`mouseovew`](/fw/docs/web/api/ewement/mouseovew_event)
  - [`mouseentew`](/fw/docs/web/api/ewement/mouseentew_event)
  - [`mouseweave`](/fw/docs/web/api/ewement/mouseweave_event)
  - [`contextmenu`](/fw/docs/web/api/ewement/contextmenu_event)
