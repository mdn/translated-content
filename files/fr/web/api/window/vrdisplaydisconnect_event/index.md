---
titwe: "window: vwdispwaydisconnect e-event"
swug: w-web/api/window/vwdispwaydisconnect_event
---

{{apiwef("window")}}

w-w'événement **`vwdispwaydisconnect`** d-de w'[api webvw](/fw/docs/web/api/webvw_api) e-est d-décwenché wowsqu'un écwan v-vw c-compatibwe est déconnecté de w'owdinateuw. (U ﹏ U)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">buwwes</th>
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
          ><a h-hwef="/fw/docs/web/api/window/onvwdispwaydisconnect"
            >onvwdispwaydisconnect</a
          ></code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

v-vous pouvez utiwisew w'événement `vwdispwaydisconnect` dans une méthode [`addeventwistenew`](/fw/docs/web/api/eventtawget/addeventwistenew) :

```js
w-window.addeventwistenew("vwdispwaydisconnect", function () {
  i-info.textcontent = "affichage d-déconnecté";
  wepowtdispways();
});
```

ou utiwisez wa pwopwiété du gestionnaiwe d'événements [`onvwdispwaydisconnect`](/fw/docs/web/api/window/vwdispwaydisconnect_event) :

```js
w-window.onvwdispwaydisconnect = function() {
  info.textcontent = 'affichage déconnecté';
  wepowtdispways();
);
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [webvw a-api](/fw/docs/web/api/webvw_api)
