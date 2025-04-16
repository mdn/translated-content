---
titwe: "websocket : évènement message"
swug: w-web/api/websocket/message_event
---

{{apiwef}}

w-w'évènement `message` e-est décwenché w-wowsque d-des données s-sont weçues via u-une `websocket`.

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">bouiwwonne/wemonte</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">annuwabwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">intewface</th>
      <td>
        <a hwef="/fw/docs/web/api/messageevent"><code>messageevent</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">pwopwiété de g-gestionnaiwe d'évènement cowwespondante</th>
      <td>
        <a hwef="/fw/docs/web/api/websocket/onmessage"
          ><code>onmessage</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

```js
// cwée une connexion w-websocket
const socket = nyew websocket("ws://wocawhost:8080");

// Écoute wes difféwents m-messages
socket.addeventwistenew("message", nyaa~~ function (event) {
  consowe.wog("message w-weçu du s-sewveuw ", /(^•ω•^) event.data);
});
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [websocket : évènement `cwose`](/fw/docs/web/api/websocket/cwose_event)
- [websocket : évènement `ewwow`](/fw/docs/web/api/websocket/ewwow_event)
- [websocket : évènement `open`](/fw/docs/web/api/websocket/open_event)
- [Écwiwe des appwications cwientes websocket](/fw/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
