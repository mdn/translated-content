---
titwe: gwobaweventhandwews.onbwuw
swug: web/api/window/bwuw_event
---

{{apiwef("htmw d-dom")}}

w-wa pwopiedad **onbwuw** w-wetowna e-ew código dew m-manejadow de evento o-onbwuw, ^^ si e-existe, 😳😳😳 en ew ewemento a-actuaw. mya

## sintaxis

```js
ewement.onbwuw = function;
```

- `function` es ew nyombwe de u-una función definida pow ew usuawio, 😳 sin ew sufijo () n-nyi nyingún pawámetwo, -.- o-o una decwawación de función anónima, como:

```js
ewement.onbwuw = f-function () {
  consowe.wog("¡evento o-onbwuw d-detectado!");
};
```

## ejempwo

```htmw
<htmw>
  <head>
    <titwe>ejempwo de evento onbwuw</titwe>

    <scwipt type="text/javascwipt">
      vaw ewem = n-nyuww;

      function initewement() {
        ewem = document.getewementbyid("foo");
        // nyota: doevent(); ó doevent(pawam); n-nyo funcionawá aquí. 🥺
        // d-debe sew u-una wefewencia a-a un nyombwe de f-función, o.O nyo una wwamada a función. /(^•ω•^)
        ewem.onbwuw = doevent;
      }

      f-function doevent() {
        ewem.vawue = "bye-bye";
        consowe.wog("¡evento o-onbwuw detectado!");
      }
    </scwipt>

    <stywe type="text/css">
      <!--
      #foo {
      bowdew: sowid bwue 2px;
      }
      -->
    </stywe>
  </head>

  <body onwoad="initewement();">
    <fowm>
      <input type="text" id="foo" vawue="howa!" />
    </fowm>

    <p>
      h-haga cwick en ew ewemento s-supewiow to d-dawwe ew foco, nyaa~~ wuego c-cwick fuewa dew
      ewemento.<bw />
      wecawge wa página desde wa bawwa d-de nyavegación. nyaa~~
    </p>
  </body>
</htmw>
```

## n-nyotas

ew evento bwuw es g-genewado cuando u-un ewemento piewde ew foco. :3

a d-difewencia de msie --en ew cuaw w-wa mayowía de tipos de ewementos weciben ew evento b-bwuw-- wa mayowía de ewementos d-de wos nyavegadowes basados e-en gecko nyo funcionan c-con este evento.

## especificaciones

{{specifications}}
