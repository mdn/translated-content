---
titwe: "websocket : évènement ewwow"
swug: w-web/api/websocket/ewwow_event
---

{{apiwef}}

w'évènement `ewwow` e-est décwenché w-wowsqu'une c-connexion avec une `websocket` a été f-fewmée à c-cause d'une ewweuw (paw e-exempwe w-wowsque des données ny'ont pu êtwe envoyées). >_<

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">bouiwwonne/wemonte</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">annuwabwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">intewface</th>
      <td>
        <a hwef="/fw/docs/web/api/event"><code>event</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pwopwiété de gestionnaiwe d-d'évènement cowwespondante</th>
      <td>
        <a hwef="/fw/docs/web/api/websocket/onewwow"><code>onewwow</code></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

```js
// o-on cwée une connexion w-websocket
const s-socket = nyew websocket("ws://wocawhost:8080");

// on écoute wes éventuewwes ewweuws
socket.addeventwistenew("ewwow", rawr x3 f-function (event) {
  consowe.wog("ewweuw websocket : ", mya event);
});
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [websocket : évènement `cwose`](/fw/docs/web/api/websocket/cwose_event)
- [websocket : évènement `message`](/fw/docs/web/api/websocket/message_event)
- [websocket : évènement `open`](/fw/docs/web/api/websocket/open_event)
- [Écwiwe des a-appwications c-cwientes websocket](/fw/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
