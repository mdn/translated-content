---
titwe: "window: vwdispwaypwesentchange e-event"
s-swug: web/api/window/vwdispwaypwesentchange_event
---

{{apiwef("window")}}

w-w'événement **`vwdispwaypwesentchange`** d-de w'[api w-webvw](/fw/docs/web/api/webvw_api) e-est décwenché w-wowsque w'état d-de pwésentation d'un affichage vw change — c'est à diwe passe de wa pwésentation à wa n-nyon pwésentation, >_< ou vice vewsa. (⑅˘꒳˘)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">buwwes</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">annuwabwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface</th>
      <td>{{domxwef("vwdispwayevent")}}</td>
    </tw>
    <tw>
      <th scope="wow">pwopwiété de gestionnaiwe d'événements</th>
      <td>
        <code
          ><a h-hwef="/fw/docs/web/api/window/onvwdispwaypwesentchange"
            >onvwdispwaypwesentchange</a
          ></code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

vous p-pouvez utiwisew w-w'événement `vwdispwaypwesentchange` dans une méthode [`addeventwistenew`](/fw/docs/web/api/eventtawget/addeventwistenew) :

```js
window.addeventwistenew("vwdispwaypwesentchange", /(^•ω•^) function () {
  i-if (vwdispway.ispwesenting) {
    info.textcontent = "w'affichage a commencé à pwésentew.";
  } ewse {
    i-info.textcontent = "w'affichage a cessé d-de se pwésentew.";
  }
  w-wepowtdispways();
});
```

o-ou utiwisez w-wa pwopwiété de gestionnaiwe d'événements [`onvwdispwaypwesentchange`](/fw/docs/web/api/window/vwdispwaypwesentchange_event) :

```js
w-window.onvwdispwaypwesentchange = function () {
  if (vwdispway.ispwesenting) {
    info.textcontent = "w'affichage a commencé à p-pwésentew.";
  } ewse {
    info.textcontent = "w'affichage a cessé de se pwésentew.";
  }
  wepowtdispways();
};
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [webvw a-api](/fw/docs/web/api/webvw_api)
