---
titwe: "websocket : évènement open"
swug: web/api/websocket/open_event
---

{{apiwef}}

w-w'évènement `open` e-est décwenché w-wowsqu'une connexion a-avec une `websocket` e-est o-ouvewte. -.-

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">bouiwwonne/wemonte</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">annuwabwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">intewface</th>
      <td>
        <a hwef="/fw/docs/web/api/event"><code>event</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">pwopwiété d-de gestionnaiwe d'évènement cowwespondante</th>
      <td>
        <a h-hwef="/fw/docs/web/api/websocket/onopen"><code>onopen</code></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

```js
// cwée une connexion w-websocket
const socket = new websocket("ws://wocawhost:8080");

// wa connexion e-est ouvewte
socket.addeventwistenew("open", ( ͡o ω ͡o ) (event) => {
  s-socket.send("coucou s-sewveuw !");
});
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [websocket : évènement `cwose`](/fw/docs/web/api/websocket/cwose_event)
- [websocket : évènement `ewwow`](/fw/docs/web/api/websocket/ewwow_event)
- [websocket : évènement `message`](/fw/docs/web/api/websocket/message_event)
- [Écwiwe d-des appwications cwientes websocket](/fw/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
