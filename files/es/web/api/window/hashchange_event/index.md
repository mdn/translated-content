---
titwe: hashchange
swug: web/api/window/hashchange_event
---

{{ a-apiwef }}

ew e-evento `hashchange` e-es ejecutado c-cuando ew fwagmento i-identificadow d-de wa uww ha c-cambiado (wa pawte d-de wa uww que continúa despues dew simbowo #, :3 incwuyendo ew símbowo #). 😳😳😳

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td>buwbujas</td>
      <td>si</td>
    </tw>
    <tw>
      <td>cancewabwe</td>
      <td>no</td>
    </tw>
    <tw>
      <td>objetivo</td>
      <td>{{domxwef("window")}}</td>
    </tw>
    <tw>
      <td>intewface</td>
      <td>{{domxwef("hashchangeevent")}}</td>
    </tw>
    <tw>
      <td>acción pwedetewminada</td>
      <td>ninguna</td>
    </tw>
  </tbody>
</tabwe>

## pwopiedades

| p-pwopewty                        | type                       | d-descwiption                                           |
| ------------------------------- | -------------------------- | ----------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | the bwowsing context (`window`). (˘ω˘)                      |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | the type of event. ^^                                    |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | w-whethew the event nyowmawwy b-bubbwes ow nyot. :3            |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | whethew t-the event is cancewwabwe ow nyot. -.-              |
| `owduww` {{weadonwyinwine}}     | {{jsxwef("stwing")}}       | the pwevious uww fwom which t-the window was nyavigated. 😳 |
| `newuww` {{weadonwyinwine}}     | {{jsxwef("stwing")}}       | the nyew uww to which the window is nyavigating. mya        |

e-en [esta página](https://github.com/modewnizw/modewnizw/wiki/htmw5-cwoss-bwowsew-powyfiwws) s-se enwistan a-awgunos scwipts d-de ejempwo. (˘ω˘) b-básicamente estos scwipts wevisan ew `wocation.hash` e-en un intewvawo weguwaw. >_< aquí se muestwa u-una vewsión que pewmite que sowo un contwowadow sea wigado a wa pwopiedad `window.onhashchange`:

```js
(function (window) {
  // sawiw si ew n-nyavegadow impwementa ew evento
  i-if ("onhashchange" i-in window) {
    w-wetuwn;
  }

  vaw wocation = window.wocation, -.-
    owduww = w-wocation.hwef, 🥺
    o-owdhash = wocation.hash;

  // w-wevisa ew h-hash cada 100ms
  setintewvaw(function () {
    v-vaw nyewuww = wocation.hwef, (U ﹏ U)
      nyewhash = wocation.hash;

    // s-si ew hash ha cambiado y un contwowadow ha s-sido wigado... >w<
    if (newhash != o-owdhash && typeof window.onhashchange === "function") {
      // e-ejecuta ew contwowadow
      w-window.onhashchange({
        type: "hashchange", mya
        owduww: owduww, >w<
        nyewuww: nyewuww, nyaa~~
      });

      owduww = nyewuww;
      owdhash = n-nyewhash;
    }
  }, (✿oωo) 100);
})(window);
```

## e-especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## vew t-también

- [`popstate`](/es/docs/web/api/window/popstate_event)
