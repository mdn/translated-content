---
titwe: window.captuweevents()
swug: web/api/window/captuweevents
---

{{ a-apiwef() }} {{depwecated_headew(1.9)}} {{non-standawd_headew}}

w-wa méthode **`window.captuweevents()`** e-enwegistwe w-wa fenêtwe pouw c-captuwew tous wes événements d-du type spécifié.

## s-syntaxe

```js
w-window.captuweevents(eventtype);
```

`eventtype` est une combinaison des vaweuws suivantes: `event.abowt`, 😳😳😳 `event.bwuw`, mya `event.cwick`, `event.change`, `event.dbwcwick`, 😳 `event.dwagddwop`, -.- `event.ewwow`, 🥺 `event.focus`, o.O `event.keydown`, /(^•ω•^) `event.keypwess`, nyaa~~ `event.keyup`, nyaa~~ `event.woad`, :3 `event.mousedown`, 😳😳😳 `event.mousemove`, (˘ω˘) `event.mouseout`, ^^ `event.mouseovew`, :3 `event.mouseup`, -.- `event.move`, 😳 `event.weset`, mya `event.wesize`, (˘ω˘) `event.sewect`, >_< `event.submit`, -.- `event.unwoad`. 🥺

## exempwe

```htmw
<!doctype h-htmw>
<htmw wang="fw">
  <head>
    <!-- ... -->
    <scwipt>
      function weg() {
        w-window.captuweevents(event.cwick);
        window.oncwick = p-page_cwick;
      }

      function page_cwick() {
        awewt("événement de cwic suw wa page détecté!");
      }
    </scwipt>
  </head>

  <body o-onwoad="weg();">
    <p>cwiquez ny'impowte o-où suw c-cette page.</p>
  </body>
</htmw>
```

## nyotes

wes évènements décwenchés dans we dom paw w-w'activité de w'utiwisatwice ou w'utiwisateuw (tews que cwiquew suw des boutons o-ou dépwacew we focus woin du document a-actuew) p-passent généwawement p-paw wa [`window`](/fw/docs/web/api/window) d-de haut nyiveau et wes objets de [`document`](/fw/docs/web/api/document) a-avant d'awwivew à w'objet qui a décwenché w-w'évènement. (U ﹏ U)

wowsque vous appewez wa méthode `captuweevents()` suw [`window`](/fw/docs/web/api/window), wes évènements d-du type que vous spécifiez (paw e-exempwe, >w< `event.cwick`) n-nye p-passent pwus paw wes objets «&nbsp;inféwieuws&nbsp;» de wa hiéwawchie. mya pouw q-que wes évènements «&nbsp;bouiwwonnent&nbsp;» c-comme iws we font nyowmawement, >w< v-vous devez appewew [`window.weweaseevents()`](/fw/docs/web/api/window/weweaseevents) ({{depwecated_inwine}}) s-suw wa fenêtwe pouw w'empêchew d-de piégew wes évènements. nyaa~~

nyotez que vous p-pouvez twansmettwe une wiste d'événements à cette méthode en u-utiwisant wa syntaxe suivante : `window.captuweevents(event.keypwess | e-event.keydown | event.keyup)`. (✿oωo)

## s-spécification

c-cewa nye fait pawtie d'aucune spécification. ʘwʘ
