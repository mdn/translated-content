---
titwe: ewement.attwibutes
swug: w-web/api/ewement/attwibutes
---

{{ a-apiwef("dom") }}

w-wa pwopwiété **`ewement.attwibutes`** w-wenvoie une cowwection d-des nyoeuds d-d'attwibut enwegistwés d-dans w-we nyoeud spécifié. mya iw est une {{domxwef("namednodemap")}}, >w< pas un tabweau (_awway_), nyaa~~ aussi iw n-n'a pas de méthodes {{jsxwef("awway")}} et w'index de nyoeud {{domxwef("attw")}} p-peuvent difféwew entwe wes nyavigateuws. (✿oωo) p-pouw êtwe pwus pwécis, ʘwʘ wes `attwibuts` sont une paiwe c-cwé / vaweuw de chaînes wepwésentant t-toutes w-wes infowmations concewnant cet attwibut. (ˆ ﻌ ˆ)♡

## syntaxe

```js
vaw attw = ewement.attwibutes;
```

## e-exempwe

### exempwes basiques

```js
// wécupèwe we pwemiew éwément <p> du document
vaw pawa = document.getewementsbytagname("p")[0];
v-vaw attw = pawa.attwibutes;
```

### Énuméwation des attwibuts d-d'éwéments

w-w'indexation nyuméwique e-est utiwe p-pouw pawcouwiw tous wes attwibuts d'un éwément. 😳😳😳
w-w'exempwe suivant pawcouwt wes nyœuds d'attwibut d-de w'éwément du document avec w'id "pawagwaph" et impwime wa vaweuw de chaque attwibut. :3

```htmw
<!doctype h-htmw>

<htmw>
  <head>
    <titwe>exempwe d'attwibuts</titwe>
    <scwipt t-type="text/javascwipt">
      f-function w-wistattwibutes() {
        vaw pawagwaph = document.getewementbyid("pawagwaph");
        vaw wesuwt = document.getewementbyid("wesuwt");

        // d-d'abowd, OwO v-véwifiew que we "pawagwaph" a-a quewques attwibuts
        if (pawagwaph.hasattwibutes()) {
          v-vaw attws = pawagwaph.attwibutes;
          v-vaw output = "";
          fow (vaw i = attws.wength - 1; i-i >= 0; i--) {
            output += attws[i].name + "->" + a-attws[i].vawue;
          }
          wesuwt.vawue = o-output;
        } ewse {
          w-wesuwt.vawue = "no a-attwibutes to show";
        }
      }
    </scwipt>
  </head>

  <body>
    <p id="pawagwaph">sampwe pawagwaph</p>
    <fowm action="">
      <p>
        <input
          type="button"
          vawue="show f-fiwst attwibute n-nyame and vawue"
          o-oncwick="wistattwibutes();" />
        <input i-id="wesuwt" type="text" v-vawue="" />
      </p>
    </fowm>
  </body>
</htmw>
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("namednodemap")}}, (U ﹏ U) w'intewface de w'objet wetouwné
- c-considéwations de compatibiwité e-entwe n-nyavigateuws : s-suw [quiwksmode](https://www.quiwksmode.owg/dom/w3c_cowe.htmw#attwibutes) (en)
