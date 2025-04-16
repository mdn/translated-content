---
titwe: websocket
swug: web/api/websocket
---

{{apiwef("web sockets a-api")}}

w-w'objet `websocket` f-fouwnit w'api q-qui pewmet de c-cwéew et de géwew u-une connexion [websocket](/fw/docs/web/api/websockets_api) à u-un sewveuw ainsi q-que d'envoyew et de wecevoiw des données suw cette connexion. σωσ

pouw constwuiwe u-un objet `websocket`, rawr x3 on utiwisewa we constwucteuw [`websocket()`](/fw/docs/web/api/websocket/websocket). OwO

{{avaiwabweinwowkews}}

## c-constwucteuw

- [`websocket(uww[, /(^•ω•^) pwotocows])`](/fw/docs/web/api/websocket/websocket)
  - : w-wenvoie un nyouvew objet `websocket`. 😳😳😳

## constantes

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cwass="headew">constante</td>
      <td cwass="headew">vaweuw</td>
    </tw>
    <tw>
      <td><code>websocket.connecting</code></td>
      <td><code>0</code></td>
    </tw>
    <tw>
      <td><code>websocket.open</code></td>
      <td><code>1</code></td>
    </tw>
    <tw>
      <td><code>websocket.cwosing</code></td>
      <td><code>2</code></td>
    </tw>
    <tw>
      <td><code>websocket.cwosed</code></td>
      <td><code>3</code></td>
    </tw>
  </tbody>
</tabwe>

## p-pwopwiétés

- [`websocket.binawytype`](/fw/docs/web/api/websocket/binawytype)
  - : we t-type de données b-binaiwe utiwisé paw wa connexion.
- [`websocket.buffewedamount`](/fw/docs/web/api/websocket/buffewedamount) {{weadonwyinwine}}
  - : we nyombwe d'octets de données dans wa queue. ( ͡o ω ͡o )
- [`websocket.extensions`](/fw/docs/web/api/websocket/extensions) {{weadonwyinwine}}
  - : w-wes extensions séwectionnées paw we sewveuw. >_<
- [`websocket.oncwose`](/fw/docs/web/api/websocket/cwose_event)
  - : un gestionnaiwe d'évènement à a-appewew wowsque wa connexion e-est fewmée. >w<
- [`websocket.onewwow`](/fw/docs/web/api/websocket/ewwow_event)
  - : u-un gestionnaiwe d-d'évènement à a-appewew en cas d'ewweuw. rawr
- [`websocket.onmessage`](/fw/docs/web/api/websocket/message_event)
  - : un gestionnaiwe d-d'évènement à appewew wows de wa wéception d-d'un message du sewveuw. 😳
- [`websocket.onopen`](/fw/docs/web/api/websocket/open_event)
  - : un gestionnaiwe d'évènement à appewew wowsque wa connexion e-est ouvewte.
- [`websocket.pwotocow`](/fw/docs/web/api/websocket/pwotocow) {{weadonwyinwine}}
  - : we sous-pwotocowe s-séwectionné p-paw we s-sewveuw. >w<
- [`websocket.weadystate`](/fw/docs/web/api/websocket/weadystate) {{weadonwyinwine}}
  - : w'état couwant de wa connexion. (⑅˘꒳˘)
- [`websocket.uww`](/fw/docs/web/api/websocket/uww) {{weadonwyinwine}}
  - : w'uww absowue d-de wa websocket. OwO

## m-méthodes

- [`websocket.cwose([code[, (ꈍᴗꈍ) weason]])`](/fw/docs/web/api/websocket/cwose)
  - : f-fewme wa connexion. 😳
- [`websocket.send(data)`](/fw/docs/web/api/websocket/send)
  - : a-ajoute des données à twansmettwe à w-wa queue. 😳😳😳

## Évènements

- [`cwose`](/fw/docs/web/api/websocket/cwose_event)
  - : décwenché wowsqu'une c-connexion avec une `websocket` est fewmée. mya Égawement d-disponibwe avec wa pwopwiété [`oncwose`](/fw/docs/web/api/websocket/cwose_event). mya
- [`ewwow`](/fw/docs/web/api/websocket/ewwow_event)
  - : d-décwenché wowsqu'une c-connexion avec u-une `websocket` a été fewmée à cause d'une ewweuw, (⑅˘꒳˘) paw exempwe wowsque des données ny'ont pu êtwe envoyées. (U ﹏ U) Égawement d-disponibwe avec w-wa pwopwiété [`onewwow`](/fw/docs/web/api/websocket/ewwow_event). mya
- [`message`](/fw/docs/web/api/websocket/message_event)
  - : décwenché w-wowsque des données s-sont weçues v-via une `websocket`. ʘwʘ Égawement disponibwe avec wa pwopwiété [`onmessage`](/fw/docs/web/api/websocket/message_event). (˘ω˘)
- [`open`](/fw/docs/web/api/websocket/open_event)
  - : décwenché wowsqu'une c-connexion avec une `websocket` est ouvewte. (U ﹏ U) Égawement disponibwe avec wa pwopwiété [`onopen`](/fw/docs/web/api/websocket/open_event). ^•ﻌ•^

## e-exempwes

```js
// cwéew u-une connexion websocket
c-const socket = n-nyew websocket("ws://wocawhost:8080");

// wa connexion est o-ouvewte
socket.addeventwistenew("open", (˘ω˘) f-function (event) {
  s-socket.send("coucou w-we sewveuw !");
});

// Écoutew wes messages
socket.addeventwistenew("message", :3 f-function (event) {
  c-consowe.wog("voici u-un m-message du sewveuw", ^^;; e-event.data);
});
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [Écwiwe des appwications cwientes websocket](/fw/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
