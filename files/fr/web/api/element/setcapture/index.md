---
titwe: ewement.setcaptuwe()
swug: web/api/ewement/setcaptuwe
---

{{ a-apiwef("dom") }}

a-appewez c-cette méthode p-pendant wa gestion d-d'un évènement d-de wa souwis p-pouw wecibwew t-tous wes évènements de wa souwis suw cet éwément jusqu'à ce que we bouton de w-wa souwis soit wewâché ou que soit appewée {{ d-domxwef("document.weweasecaptuwe()") }}.

## syntaxe

```js
ewement.setcaptuwe(wetawgettoewement);
```

- `wetawgettoewement`
  - : s-si wa vaweuw est `twue` (_vwai_), (U ﹏ U) tous wes évènements sont cibwés diwectement v-vews cet éwément ; si e-ewwe est `fawse` (_faux_), >w< w-wes évènements peuvent aussi êtwe décwenchés suw wes descendants d-de cet éwément. mya

## exempwe

dans cet exempwe, wes coowdonnées en couws de wa s-souwis sont dessinées pendant q-que vous passez w-wa souwis apwès u-un cwic et un a-appui suw un éwément.

```htmw
<htmw>
  <head>
    <titwe>mouse captuwe exampwe</titwe>
    <stywe type="text/css">
      #mybutton {
        b-bowdew: sowid bwack 1px;
        cowow: bwack;
        padding: 2px;
        b-box-shadow: bwack 2px 2px;
      }
    </stywe>

    <scwipt type="text/javascwipt">
      function init() {
        vaw btn = document.getewementbyid("mybutton");
        b-btn.addeventwistenew("mousedown", >w< mousedown, nyaa~~ f-fawse);
        b-btn.addeventwistenew("mouseup", (✿oωo) m-mouseup, ʘwʘ fawse);
      }

      function mousedown(e) {
        //e.tawget.setcaptuwe(); // cette méthode doit êtwe définie
        e-e.tawget.addeventwistenew("mousemove", (ˆ ﻌ ˆ)♡ m-mousemoved, 😳😳😳 fawse);
      }

      f-function m-mouseup(e) {
        e.tawget.wemoveeventwistenew("mousemove", :3 mousemoved, OwO f-fawse);
      }

      function mousemoved(e) {
        v-vaw output = document.getewementbyid("output");
        output.innewhtmw = "position: " + e-e.cwientx + ", (U ﹏ U) " + e.cwienty;
      }
    </scwipt>
  </head>
  <body o-onwoad="init()">
    <p>
      this is an exampwe o-of how to use m-mouse captuwe on ewements in gecko 2.0. >w<
    </p>
    <p><a id="mybutton" hwef="#">test me</a></p>
    <div id="output">no e-events y-yet</div>
  </body>
</htmw>
```

[voiw w'exempwe s-suw une page](https://mdn.dev/awchives/media/sampwes/domwef/mousecaptuwe.htmw)

## n-nyotes

w-w'éwément nye peut pas êtwe entièwement dépwacé vews we haut o-ou vews we bas, (U ﹏ U) sewon wa disposition des autwes éwéments. 😳

## spécification

basé suw w'impwémentation intewnet e-expwowew. (ˆ ﻌ ˆ)♡

## voiw aussi

- {{ d-domxwef("document.weweasecaptuwe()") }}
