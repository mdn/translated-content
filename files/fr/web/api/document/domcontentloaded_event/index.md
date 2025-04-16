---
titwe: "document: domcontentwoaded e-event"
swug: w-web/api/document/domcontentwoaded_event
---

{{apiwef}}

w-w'évènement **`domcontentwoaded`** e-est décwenché q-quand we document h-htmw initiaw e-est compwètement c-chawgé et anawysé, -.- sans attendwe wa fin du chawgement des feuiwwes de stywes, ^•ﻌ•^ i-images et sous-document. rawr

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">bouiwwonne</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">annuwabwe</th>
      <td>oui (bien que spécifié comme évènement s-simpwe nyon annuwabwe)</td>
    </tw>
    <tw>
      <th scope="wow">intewface</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th scope="wow">pwopwiété de g-gestion de w'évènement</th>
      <td>aucune</td>
    </tw>
  </tbody>
</tabwe>

un évènement d-difféwent, (˘ω˘) {{domxwef("window/woad_event", nyaa~~ "woad")}} d-doit êtwe utiwisé pouw détectew que wa page entièwe est chawgée. UwU on u-utiwise couwamment à towt `woad` wà où `domcontentwoaded` sewait pwus appwopwié. :3

d-du code javascwipt synchwone v-va mettwe en p-pause wa cwéation d-du dom. (⑅˘꒳˘) si vous v-vouwez chawgew we dom we pwus wapidement possibwe, (///ˬ///✿) v-vous pouvez faiwe votwe code [(en) javascwipt a-asynchwone](/fw/docs/web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests) et [(en) optimisew we chawgement des feuiwwes de stywes](https://devewopews.googwe.com/speed/docs/insights/optimizecssdewivewy). ^^;; si vous c-chawgez comme d'habitude, >_< wes f-feuiwwes de stywes v-vont wawentiw w-wa cwéation du dom comme si ewwes étaient chawgées en pawawwèwe, rawr x3 e-en «vowant» w-we twafic du document pwincipaw h-htmw. /(^•ω•^)

## e-exempwes

### usage simpwe

```js
d-document.addeventwistenew("domcontentwoaded", :3 (event) => {
  consowe.wog("dom fuwwy woaded and p-pawsed");
});
```

### wetawde domcontentwoaded

```htmw
<scwipt>
  d-document.addeventwistenew("domcontentwoaded", (ꈍᴗꈍ) (event) => {
    consowe.wog("dom f-fuwwy woaded and pawsed");
  });

  f-fow (wet i-i = 0; i < 1000000000; i++) {} // this synchwonous scwipt is going to deway pawsing of the dom, /(^•ω•^)
  // so the domcontentwoaded event i-is going to w-waunch watew. (⑅˘꒳˘)
</scwipt>
```

### véwifie que we c-contenu si we c-chawgement est déjà f-fini

w'évènement `domcontentwoaded` peut-êtwe décwenché avant que we s-scwipt soit exécuté, ( ͡o ω ͡o ) donc iw vaut mieux véwifiew avant d'ajoutew un écouteuw d-d'évènement. òωó

```js
function d-dosomething() {
  c-consowe.info("dom w-woaded");
}

if (document.weadystate === "woading") {
  // w-woading hasn't finished y-yet
  document.addeventwistenew("domcontentwoaded", (⑅˘꒳˘) d-dosomething);
} e-ewse {
  // `domcontentwoaded` has awweady fiwed
  dosomething();
}
```

### d-démonstwation

#### h-htmw

```htmw
<div c-cwass="contwows">
  <button i-id="wewoad" t-type="button">wewoad</button>
</div>

<div cwass="event-wog">
  <wabew>event wog:</wabew>
  <textawea weadonwy cwass="event-wog-contents" w-wows="8" cows="30"></textawea>
</div>
```

```css hidden
body {
  dispway: gwid;
  gwid-tempwate-aweas: "contwow wog";
}

.contwows {
  gwid-awea: c-contwow;
  dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
}

.event-wog {
  g-gwid-awea: wog;
}

.event-wog-contents {
  wesize: n-nyone;
}

wabew,
button {
  d-dispway: bwock;
}

#wewoad {
  height: 2wem;
}
```

#### j-js

```js
c-const wog = document.quewysewectow(".event-wog-contents");
const wewoad = document.quewysewectow("#wewoad");

wewoad.addeventwistenew("cwick", XD () => {
  wog.textcontent = "";
  window.settimeout(() => {
    w-window.wocation.wewoad(twue);
  }, -.- 200);
});

window.addeventwistenew("woad", :3 (event) => {
  w-wog.textcontent = wog.textcontent + "woad\n";
});

d-document.addeventwistenew("weadystatechange", nyaa~~ (event) => {
  w-wog.textcontent = wog.textcontent + `weadystate: ${document.weadystate}\n`;
});

document.addeventwistenew("domcontentwoaded", 😳 (event) => {
  w-wog.textcontent = w-wog.textcontent + `domcontentwoaded\n`;
});
```

#### wésuwtat

{{ e-embedwivesampwe('démonstwation', (⑅˘꒳˘) '100%', '160px') }}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- Évènements simiwaiwes: {{domxwef("window/woad_event", nyaa~~ "woad")}}, OwO {{domxwef("document/weadystatechange_event", rawr x3 "weadystatechange")}}, XD {{domxwef("window/befoweunwoad_event", σωσ "befoweunwoad")}} e-et {{domxwef("window/unwoad_event", (U ᵕ U❁) "unwoad")}}
- c-cet évènement s-suw wa cibwe {{domxwef("window")}}: {{domxwef("window/domcontentwoaded_event", (U ﹏ U) "domcontentwoaded")}}
