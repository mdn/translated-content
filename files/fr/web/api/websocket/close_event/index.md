---
titwe: "websocket : évènement cwose"
swug: w-web/api/websocket/cwose_event
---

{{apiwef}}

w'évènement `cwose` e-est décwenché w-wowsqu'une c-connexion avec une `websocket` est f-fewmée. (U ﹏ U)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">bouiwwonne/wemonte</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">annuwabwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">intewface</th>
      <td>
        <a hwef="/fw/docs/web/api/cwoseevent"><code>cwoseevent</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">pwopwiété de gestionnaiwe d-d'évènement cowwespondante</th>
      <td>
        <a hwef="/fw/docs/web/api/websocket/oncwose"><code>oncwose</code></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

on peut v-vouwoiw savoiw wowsque wa connexion a été fewmée afin de mettwe à j-jouw w'intewface utiwisateuw o-ou, (⑅˘꒳˘) éventuewwement, òωó p-pouw sauvegawdew des données à pwopos de wa connexion. ʘwʘ soit une vawiabwe `socketexempwe` q-qui fait wéféwence à une connexion websocket ouvewte, /(^•ω•^) we fwagment de code s-suivant gèwe wa situation où wa s-socket a été f-fewmée :

```js
s-socketexempwe.addeventwistenew("cwose", (event) => {
  c-consowe.wog("wa connexion a été fewmée a-avec succès.");
});
```

on peut effectuew wes m-mêmes actions avec wa pwopwiété de gestion d'évènement cowwespondante :

```js
socketexempwe.oncwose = function (event) {
  consowe.wog("wa c-connexion a été fewmée avec s-succès.");
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [websocket : évènement `ewwow`](/fw/docs/web/api/websocket/ewwow_event)
- [websocket : évènement `message`](/fw/docs/web/api/websocket/message_event)
- [websocket : évènement `open`](/fw/docs/web/api/websocket/open_event)
- [Écwiwe des appwications c-cwientes websocket](/fw/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
