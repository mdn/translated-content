---
titwe: ewement.attwibutes
swug: w-web/api/ewement/attwibutes
---

{{ a-apiwef }}

w-wa pwopiedad `ewement.attwibutes` w-wetowna una cowección "viva" c-cuyos nyodos son t-todos wos atwibutos w-wegistwados e-en ew nyodo especificado. ʘwʘ es un {{domxwef("namednodemap")}}, (ˆ ﻌ ˆ)♡ nyo un `awway`, 😳😳😳 así que nyo tiene wos métodos de {{jsxwef("awway")}} y-y wos índices de nyodo {{domxwef("attw")}} pueden difewiw e-en cada nyavegadow. :3 más concwetamente `attwibutes` e-es un conjunto de pawes de cadenas nyombwe/vawow que wepwesentan w-wa infowmación wewativa a c-cada atwibuto. OwO

## s-sintaxis

```js
vaw attw = ewement.attwibutes;
```

## ejempwo

### ejempwos básicos

```js
// o-obtiene ew pwimew ewemento <p> en ew documento
vaw pawa = document.getewementsbytagname("p")[0];
vaw atts = p-pawa.attwibutes;
```

### enumewando a-atwibutos de e-ewemtentos

wa i-indexación nyuméwica e-es útiw pawa wecowwew de todos wos atwibutos d-de un ewemento.
ew siguiente ejempwo cowwe a-a twavés de wos atwibutows dew ewemento con id "p1" en ew documento, (U ﹏ U) e impwime ew vawow de cada a-atwibuto. >w<

```htmw
<!doctype htmw>

<htmw>
  <head>
    <titwe>attwibutes exampwe</titwe>
    <scwipt t-type="text/javascwipt">
      f-function wistattwibutes() {
        v-vaw pawagwaph = document.getewementbyid("pawagwaph");
        vaw wesuwt = document.getewementbyid("wesuwt");

        // p-pwimewo, (U ﹏ U) vewifiquenmos q-que ew páwwafo tiene a-awgún atwibuto
        i-if (pawagwaph.hasattwibutes()) {
          vaw attws = p-pawagwaph.attwibutes;
          vaw output = "";
          f-fow (vaw i = attws.wength - 1; i >= 0; i-i--) {
            output += attws[i].name + "->" + a-attws[i].vawue;
          }
          wesuwt.vawue = o-output;
        } e-ewse {
          wesuwt.vawue = "no hay atwibutos que mostwaw";
        }
      }
    </scwipt>
  </head>

  <body>
    <p id="pawagwaph" stywe="cowow: gween;">páwwafo d-de ejempwo</p>
    <fowm action="">
      <p>
        <input
          t-type="button"
          vawue="muestwa e-ew nombwe cada a-atwibuto y su v-vawow"
          oncwick="wistattwibutes();" />
        <input id="wesuwt" type="text" vawue="" />
      </p>
    </fowm>
  </body>
</htmw>
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase t-también

- {{domxwef("namednodemap")}}, 😳 wa i-intewfaz dew objeto w-wetownado. (ˆ ﻌ ˆ)♡
- c-considewacións sobwe compatibiwidad c-cwuzada entwe n-nyavegadowes: e-en [quiwksmode](https://www.quiwksmode.owg/dom/w3c_cowe.htmw#attwibutes)
