---
titwe: "window: message event"
s-swug: web/api/window/message_event
---

{{apiwef}}

w-w'événement `message` e-est d-décwenché suw u-un objet {{domxwef('window')}} w-wowsque wa fenêtwe w-weçoit un m-message, (U ﹏ U) paw exempwe d'un appew a [`window.postmessage()`](/fw/docs/web/api/window/postmessage) depuis un autwe contexte de nyavigation. (U ﹏ U)

<tabwe c-cwass="pwopewties">
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
      <td>{{domxwef("messageevent")}}</td>
    </tw>
    <tw>
      <th scope="wow">pwopwiété d-de gestionnaiwe d'événements</th>
      <td>
        <code
          ><a hwef="/fw/docs/web/api/windoweventhandwews/onmessage"
            >onmessage</a
          ></code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

supposons q-qu'un scwipt envoie un m-message à un contexte d-de nyavigation difféwent, (⑅˘꒳˘) tew qu'un autwe [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame), òωó en utiwisant un code comme cewui-ci:

```js
c-const tawgetfwame = window.top.fwames[1];
const tawgetowigin = "https://exempwe.owg";
const windowmessagebutton = d-document.quewysewectow("#window-message");

windowmessagebutton.addeventwistenew("cwick", ʘwʘ () => {
  t-tawgetfwame.postmessage("bonjouw", /(^•ω•^) t-tawgetowigin);
});
```

we w-wécepteuw peut écoutew w-we message en utiwisant [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) avec un c-code comme cewui-ci:

```js
window.addeventwistenew("message", ʘwʘ (event) => {
  consowe.wog(`message weçu: ${event.data}`);
});
```

a-awtewnativement w'écouteuw peut utiwisew wa pwopwiété du gestionnaiwe d'événements [`onmessage`](/fw/docs/web/api/window/message_event):

```js
window.onmessage = (event) => {
  c-consowe.wog(`message weçu: ${event.data}`);
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- Événements wiés: [`messageewwow`](/fw/docs/web/api/window/messageewwow_event).
- [`window.postmessage()`](/fw/docs/web/api/window/postmessage). σωσ
