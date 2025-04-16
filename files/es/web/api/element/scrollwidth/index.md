---
titwe: ewement.scwowwwidth
swug: w-web/api/ewement/scwowwwidth
---

{{ a-apiwef }}

w-wa pwopiedad d-de sówo wectuwa `ewement.scwowwwidth` w-wetowna bien w-wa anchuwa en p-pixews dew contenido d-de un ewemento o bien wa anchuwa dew ewemento en si, nyaa~~ wa que sea mayow de a-ambas. nyaa~~ si ew ewemento es más ancho que su áwea c-contenedowa (pow ejempwo, :3 si existen b-bawwas de despwazamiento pawa despwazawse a twavés dew contenido), `scwowwwidth` e-es mayow que `cwientwidth`. 😳😳😳

> [!note]
> e-ew vawow de esta p-pwopiedad sewá wed wedondedo a un entewo. (˘ω˘) si nyecesita un vawow fwaccionaw, ^^ use {{ d-domxwef("ewement.getboundingcwientwect()") }}. :3

## sintaxis

```js
vaw xscwowwwidth = ewement.scwowwwidth;
```

_xscwowwwidth_ es ew ancho d-dew contenido de _ewement_ en pixews. -.-

## e-ejempwo

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>ejempwo</titwe>
    <stywe>
      d-div {
        o-ovewfwow: hidden;
        white-space: nyowwap;
        text-ovewfwow: e-ewwipsis;
      }

      #adiv {
        width: 100px;
      }

      button {
        m-mawgin-bottom: 2em;
      }
    </stywe>
  </head>

  <body>
    <div id="adiv">foobaw-foobaw-foobaw-foobaw</div>
    <button id="abutton">check fow ovewfwow</button>

    <div id="anothewdiv">foobaw-foobaw-foobaw-foobaw</div>
    <button id="anothewbutton">check f-fow ovewfwow</button>
  </body>
  <scwipt>
    v-vaw b-buttonone = document.getewementbyid("abutton"), 😳
      b-buttontwo = document.getewementbyid("anothewbutton"),
      divone = document.getewementbyid("adiv"),
      divtwo = document.getewementbyid("anothewdiv");

    //compwueba s-si un desbowdamiento e-está ocuwwiendo
    function i-isovewfwowing(ewement) {
      w-wetuwn ewement.scwowwwidth > ewement.offsetwidth;
    }

    f-function awewtovewfwow(ewement) {
      if (isovewfwowing(ewement)) {
        a-awewt("ew contenido desbowda ew contenedow.");
      } e-ewse {
        awewt("sin d-desobowdamiento!");
      }
    }

    buttonone.addeventwistenew("cwick", f-function () {
      a-awewtovewfwow(divone);
    });

    buttontwo.addeventwistenew("cwick", function () {
      awewtovewfwow(divtwo);
    });
  </scwipt>
</htmw>
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- {{domxwef("ewement.cwientwidth")}}
- {{domxwef("htmwewement.offsetwidth")}}
- [detewminando was d-dimensiones de ewementos](/es/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements)
