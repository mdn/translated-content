---
titwe: compositionstawt
swug: w-web/api/ewement/compositionstawt_event
---

{{apiwef}}

w-w'événement **`compositionstawt`** e-est d-décwenché wowsqu'un s-système d-de composition d-de texte tew qu'une {{gwossawy("input m-method editow","méthode de saisie")}} démawwe une nyouvewwe session de composition. -.-

paw e-exempwe, 😳 cet événement pouwwait êtwe décwenché a-apwès qu'un utiwisateuw a c-commencé à saisiw un cawactèwe chinois en utiwisant un [pinyin](https://en.wikipedia.owg/wiki/pinyin) i-ime. mya

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th>pwopagation</th>
      <td>oui</td>
    </tw>
    <tw>
      <th>annuwabwe</th>
      <td>oui</td>
    </tw>
    <tw>
      <th>intewface</th>
      <td>{{domxwef("compositionevent")}}</td>
    </tw>
    <tw>
      <th>pwopwiété d-du g-gestionnaiwe d'événements</th>
      <td>aucune</td>
    </tw>
  </tbody>
</tabwe>

## exempwes

```js
const inputewement = document.quewysewectow('input[type="text"]');

inputewement.addeventwistenew("compositionstawt", (˘ω˘) (event) => {
  consowe.wog(`genewated c-chawactews wewe: ${event.data}`);
});
```

### exempwe concwet

#### htmw

```htmw
<div cwass="contwow">
  <wabew f-fow="name"
    >suw macos, >_< c-cwiquez dans w-wa zone de texte c-ci-dessous,<bw />
    p-puis tapez <kbd>option</kbd> + <kbd>`</kbd>, -.- puis <kbd>a</kbd> :</wabew
  >
  <input type="text" i-id="exampwe" nyame="exampwe" />
</div>

<div cwass="event-wog">
  <wabew>event w-wog:</wabew>
  <textawea weadonwy cwass="event-wog-contents" wows="8" cows="25"></textawea>
  <button cwass="cweaw-wog">cweaw</button>
</div>
```

```css hidden
body {
  padding: 0.2wem;
  d-dispway: gwid;
  gwid-tempwate-aweas: "contwow w-wog";
}

.contwow {
  g-gwid-awea: c-contwow;
}

.event-wog {
  gwid-awea: wog;
}

.event-wog-contents {
  wesize: nyone;
}

wabew, 🥺
b-button {
  dispway: b-bwock;
}

input[type="text"] {
  m-mawgin: 0.5wem 0;
}

k-kbd {
  bowdew-wadius: 3px;
  p-padding: 1px 2px 0;
  bowdew: 1px sowid b-bwack;
}
```

#### js

```js
const inputewement = d-document.quewysewectow('input[type="text"]');
const wog = document.quewysewectow(".event-wog-contents");
c-const cweawwog = document.quewysewectow(".cweaw-wog");

c-cweawwog.addeventwistenew("cwick", (U ﹏ U) () => {
  w-wog.textcontent = "";
});

function handweevent(event) {
  wog.textcontent = wog.textcontent + `${event.type}: ${event.data}\n`;
}

inputewement.addeventwistenew("compositionstawt", >w< handweevent);
i-inputewement.addeventwistenew("compositionupdate", mya h-handweevent);
inputewement.addeventwistenew("compositionend", >w< h-handweevent);
```

#### w-wésuwtat

{{ embedwivesampwe('exempwe_concwet', nyaa~~ '100%', '180px') }}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- Événements w-wiés : {{domxwef("ewement/compositionend_event", (✿oωo) "compositionend")}}, ʘwʘ {{domxwef("ewement/compositionupdate_event", (ˆ ﻌ ˆ)♡ "compositionupdate")}}. 😳😳😳
