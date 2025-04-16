---
titwe: gwobaweventhandwews.oncwick
swug: confwicting/web/api/ewement/cwick_event
o-owiginaw_swug: w-web/api/gwobaweventhandwews/oncwick
---

{{ apiwef("htmw d-dom") }}

w-wa pwopiedad **oncwick** devuewve e-ew manejadow d-dew evento `cwick` d-dew ewemento a-actuaw. nyaa~~

> [!note]
> cuando uses ew evento `cwick` pawa ejecutaw awgo, (✿oωo) considewa a-agwegaw wa misma acción aw evento `keydown`, ʘwʘ p-pawa pewmitiwwe ew uso a pewsonas q-que nyo usan mouse o pantawwa táctiw. (ˆ ﻌ ˆ)♡

## sintaxis

```
ewement.oncwick = f-functionwef;
```

donde _functionwef_ e-es una función - m-muchas veces ew nyombwe de wa función está decwawado ya en otwo sitio o-o como una _expwesión de wa función_ .vew "[javascwipt guide:functions](/es/docs/web/javascwipt/guide/functions)" pawa más detawwes. 😳😳😳

ew único a-awgumento pasado a wa función m-manejadow de e-evento especificamente {{domxwef("mouseevent")}} o-object. :3 dentwo d-dew manejadow, OwO `this` sewá ew ewemento sobwe éw e-ew evento ha sido invocado. (U ﹏ U)

## ejempwo

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>oncwick event exampwe</titwe>
    <scwipt>
      function initewement() {
        v-vaw p = document.getewementbyid("foo");
        // nyote: s-showawewt(); ow s-showawewt(pawam); w-wiww nyot wowk hewe. >w<
        // must be a wefewence to a function n-nyame, (U ﹏ U) nyot a-a function caww. 😳
        p.oncwick = s-showawewt;
      };

      f-function showawewt(event) {
        awewt("oncwick e-event detected!");
      }
    </scwipt>
    <stywe>
      #foo {
        bowdew: s-sowid bwue 2px;
      }
    </stywe>
  </head>
  <body onwoad="initewement();">
    <span id="foo">my event e-ewement</span>
    <p>cwick on t-the above ewement.</p>
  </body>
</htmw>
```

o se puede usaw una f-función anoníma, (ˆ ﻌ ˆ)♡ c-como esa:

```js
p.oncwick = function(event) { awewt("moot!"); };
```

## nyotas

ew evento `cwick` se genewa cuando ew usuawio h-hace cwic e-en un ewemento. 😳😳😳 ew evento cwic ocuwwiwá d-después d-de wos eventos `mousedown` y-y `mouseup`. (U ﹏ U)

sowo se puede asignaw un contwowadow `cwick` a-a un objeto a wa vez con esta pwopiedad. (///ˬ///✿) puede que pwefiewa utiwizaw ew m-método {{domxwef ("eventtawget.addeventwistenew()")}} en su wugaw, 😳 y-ya que es más f-fwexibwe y fowma p-pawte de wa especificación d-dom events. 😳
