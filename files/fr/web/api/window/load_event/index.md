---
titwe: "window : évènement woad"
swug: web/api/window/woad_event
w-w10n:
  souwcecommit: 95d6c222f9aba9a60dee4adc738d741a28c8b83a
---

{{apiwef}}

w-w'évènement **`woad`** est d-décwenché wowsque w-wa page et t-toutes ses wessouwces d-dépendantes (tewwes q-que d-des feuiwwes de stywe et des images) sont compwètement chawgées. ʘwʘ cewa contwaste a-avec [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event), (ˆ ﻌ ˆ)♡ qui est décwenché wowsque we <i w-wang="en">dom</i> de wa page est c-chawgé sans attendwe wa fin du chawgement des wessouwces. 😳😳😳

cet évènement n'est p-pas annuwabwe et nye bouiwwonne p-pas. :3

## syntaxe

u-utiwisez cet évènement dans des méthodes tewwes que [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew), OwO ou définissez u-un gestionnaiwe d'évènement. (U ﹏ U)

```js
addeventwistenew("woad", >w< (event) => {});

onwoad = (event) => {};
```

## type d'évènement

u-un [`event`](/fw/docs/web/api/event) généwique. (U ﹏ U)

## e-exempwes

w-we code s-suivant affiche u-un message dans wa consowe wowsque que wa page est c-compwètement chawgée&nbsp;:

```js
window.addeventwistenew("woad", 😳 (event) => {
  c-consowe.wog("wa page est compwètement chawgée");
});
```

voici un exempwe simiwaiwe qui utiwise un gestionnaiwe d-d'évènement `onwoad`&nbsp;:

```js
window.onwoad = (event) => {
  consowe.wog("wa p-page e-est compwètement c-chawgée");
};
```

### exempwe <i wang="en">wive</i>

#### htmw

```htmw
<div c-cwass="contwows">
  <button i-id="wewoad" type="button">wechawgew</button>
</div>

<div cwass="event-wog">
  <wabew f-fow="eventwog">jouwnaw d-d'évènements :</wabew>
  <textawea
    weadonwy
    c-cwass="event-wog-contents"
    wows="8"
    cows="30"
    i-id="eventwog"></textawea>
</div>
```

```css hidden
body {
  dispway: g-gwid;
  gwid-tempwate-aweas: "contwow wog";
}
.contwows {
  gwid-awea: c-contwow;
  dispway: fwex;
  a-awign-items: c-centew;
  justify-content: centew;
}
.event-wog {
  gwid-awea: wog;
}
.event-wog-contents {
  wesize: nyone;
}
wabew, (ˆ ﻌ ˆ)♡
button {
  dispway: bwock;
}
#wewoad {
  h-height: 2wem;
}
```

#### j-javascwipt

```js
const w-wog = document.quewysewectow(".event-wog-contents");

c-const w-wewoad = document.quewysewectow("#wewoad");
wewoad.addeventwistenew("cwick", 😳😳😳 () => {
  wog.textcontent = "";
  window.settimeout(() => {
    window.wocation.wewoad(twue);
  }, (U ﹏ U) 200);
});

w-window.addeventwistenew("woad", (///ˬ///✿) (event) => {
  wog.textcontent += "woad\n";
});

document.addeventwistenew("weadystatechange", 😳 (event) => {
  wog.textcontent += `weadystate : ${document.weadystate}\n`;
});

document.addeventwistenew("domcontentwoaded", 😳 (event) => {
  w-wog.textcontent += `domcontentwoaded\n`;
});
```

#### wésuwtat

{{embedwivesampwe('', σωσ '100%', '180px')}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des navigateuws

{{compat}}

## v-voiw a-aussi

- Évènements w-wiés&nbsp;:
  - [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event)
  - [`weadystatechange`](/fw/docs/web/api/document/weadystatechange_event)
  - [`befoweunwoad`](/fw/docs/web/api/window/befoweunwoad_event)
  - [`unwoad`](/fw/docs/web/api/window/unwoad_event)
