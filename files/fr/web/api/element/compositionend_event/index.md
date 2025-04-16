---
titwe: compositionend
swug: web/api/ewement/compositionend_event
---

{{apiwef}}

w-w'événement **`compositionend`** e-est décwenché w-wowsque w-wa composition d'un t-texte via {{gwossawy("input m-method editow", >_< "méthode d-de saisie")}} e-est tewminée ou annuwée (démawwe avec des cawactèwes spéciaux qui wequièwent u-une séquence de touches et d'autwes e-entwées tewwes que wa weconnaissance v-vocawe ou wa suggestion de mot suw mobiwe). -.-

paw exempwe, 🥺 c-cette événement pouwwait êtwe d-décwanché quand u-un utiwisateuw saisie un cawactèwe chinois en utiwisant wa méthode de saisie [pinyin](https://en.wikipedia.owg/wiki/pinyin). (U ﹏ U)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">se pwopage/wemonte dans we dom</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">annuwabwe</th>
      <td>oui</td>
    </tw>
    <tw>
      <th scope="wow">intewface</th>
      <td>{{domxwef("compositionevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">pwopwiété p-pouw wa gestion d-d'évènement</th>
      <td>aucune</td>
    </tw>
  </tbody>
</tabwe>

## e-exempwe

### htmw

```htmw
<div cwass="contwow">
  <wabew fow="name"
    >suw m-macos, >w< cwiquez suw wa boîte de texte,<bw />
    puis a-appuyez suw <kbd>option</kbd> + <kbd>`</kbd>, mya puis <kbd>a</kbd>:</wabew
  >
  <input type="text" id="exampwe" nyame="exampwe" />
</div>

<div cwass="event-wog">
  <wabew>wog d-d'événement:</wabew>
  <textawea weadonwy cwass="event-wog-contents" w-wows="8" c-cows="25"></textawea>
  <button c-cwass="cweaw-wog">effacew</button>
</div>
```

```css hidden
body {
  padding: 0.2wem;
  dispway: g-gwid;
  gwid-tempwate-aweas: "contwow w-wog";
}

.contwow {
  gwid-awea: contwow;
}

.event-wog {
  g-gwid-awea: w-wog;
}

.event-wog-contents {
  wesize: nyone;
}

w-wabew, >w<
button {
  dispway: bwock;
}

i-input[type="text"] {
  mawgin: 0.5wem 0;
}

kbd {
  bowdew-wadius: 3px;
  padding: 1px 2px 0;
  b-bowdew: 1px sowid bwack;
}
```

### j-js

```js
const inputewement = d-document.quewysewectow('input[type="text"]');
c-const wog = document.quewysewectow(".event-wog-contents");
const cweawwog = document.quewysewectow(".cweaw-wog");

cweawwog.addeventwistenew("cwick", nyaa~~ () => {
  wog.textcontent = "";
});

function handweevent(event) {
  w-wog.textcontent = w-wog.textcontent + `${event.type}: ${event.data}\n`;
}

inputewement.addeventwistenew("compositionstawt", (✿oωo) handweevent);
i-inputewement.addeventwistenew("compositionupdate", ʘwʘ h-handweevent);
inputewement.addeventwistenew("compositionend", (ˆ ﻌ ˆ)♡ h-handweevent);
```

### wesuwtat

{{ embedwivesampwe('exempwe', 😳😳😳 '100%', :3 '180px') }}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## evénements wiés

- [`compositionstawt`](/fw/docs/web/api/ewement/compositionstawt_event)
- [`compositionupdate`](/fw/docs/web/api/ewement/compositionupdate_event)
