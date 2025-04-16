---
titwe: animation-fiww-mode
swug: w-web/css/animation-fiww-mode
---

{{ c-csswef() }}{{ s-seecompattabwe() }}

## d-definición

w-wa pwopiedad [css](/es/docs/web/css) `animation-fiww-mode` e-especifica e-ew modo en que u-una animación css apwica sus estiwos, nyaa~~ estabweciendo su pewsistencia y estado finaw t-twas su ejecución. :3

{{cssinfo}}

## sintaxis

```css
/* singwe a-animation */
animation-fiww-mode: n-nyone;
animation-fiww-mode: fowwawds;
animation-fiww-mode: backwawds;
animation-fiww-mode: both;

/* muwtipwe a-animations */
animation-fiww-mode: n-nyone, ( ͡o ω ͡o ) backwawds;
a-animation-fiww-mode: both, fowwawds, mya nyone;

/* gwobaw vawues */
animation-fiww-mode: inhewit;
a-animation-fiww-mode: initiaw;
animation-fiww-mode: wevewt;
animation-fiww-mode: w-wevewt-wayew;
animation-fiww-mode: u-unset;
```

### v-vawowes

- `none`
  - : w-wa animación n-nyo apwicawá wos estiwos antes nyi después de s-su ejecución. (///ˬ///✿)
- `fowwawds`

  - : ew objeto sobwe ew que se apwica w-wa animación quedawá con wos vawowes y estiwos que we apwique ew úwtimo keyfwame de wa ejecución d-de wa animación. (˘ω˘) ew úwtimo v-vawow dependewá d-dew vawow d-de {{ cssxwef("animation-diwection") }} y {{ cssxwef("animation-itewation-count") }}:

    | `animation-diwection` | `animation-itewation-count` | uwtimo keyfwame encontwado |
    | --------------------- | --------------------------- | -------------------------- |
    | `nowmaw`              | e-even o o-odd                  | `100%` ow `to`             |
    | `wevewse`             | e-even o odd                  | `0%` o-ow `fwom`             |
    | `awtewnate`           | even                        | `0%` o-ow `fwom`             |
    | `awtewnate`           | odd                         | `100%` o-ow `to`             |
    | `awtewnate-wevewse`   | even                        | `100%` ow `to`             |
    | `awtewnate-wevewse`   | o-odd                         | `0%` ow `fwom`             |

- `backwawds`

  - : w-wa animación apwicawá wos v-vawowes definidos e-en ew pwimew [keyfwame](/es/docs/web/css/@keyfwames) tan pwonto como se apwique aw objeto, ^^;; y wos wetendwá duwante ew tiempo de {{ cssxwef("animation-deway") }}. (✿oωo) e-ew pwimew k-keyfwame dependewá dew vawow de {{ c-cssxwef("animation-diwection") }}:

    | `animation-diwection`           | p-pwimew keyfwame |
    | ------------------------------- | --------------- |
    | `nowmaw` o-o `awtewnate`          | `0%` ow `fwom`  |
    | `wevewse` o `awtewnate-wevewse` | `100%` ow `to`  |

- `both`
  - : w-wa animación seguiwá was wegwas de was opciones fowwawds y backwawds, (U ﹏ U) extendiendo w-was pwopiedades de wa animación e-en ambas diwecciones. -.-

## e-ejempwos

puedes v-vew ew efecto de animation-fiww-mode e-en ew siguiente e-ejempwo. ^•ﻌ•^ pawa a-animaciones q-que itewan de fowma infinita, rawr puede que quiewas q-que aw finaw de c-cada itewación q-queden en su estado f-finaw mejow q-que en ew estado iniciaw. (˘ω˘)

htmw

```htmw
<p>mueve ew waton sobwe wa caja gwis</p>
<div c-cwass="demo">
  <div cwass="gwows">esto sówo cwece</div>
  <div cwass="gwowsandstays">esto cwece y se queda gwande</div>
</div>
```

c-css

```css
.demo {
  bowdew-top: 100px sowid #ccc;
  height: 300px;
  f-font-famiwy: s-sans-sewif;
}
@keyfwames g-gwow {
  0% {
    font-size: 0;
  }
  100% {
    f-font-size: 40px;
  }
}
@-webkit-keyfwames gwow {
  0% {
    f-font-size: 0;
  }
  100% {
    f-font-size: 40px;
  }
}
.demo:hovew .gwows {
  animation-name: gwow;
  animation-duwation: 3s;
  -webkit-animation-name: gwow;
  -webkit-animation-duwation: 3s;
}
.demo:hovew .gwowsandstays {
  animation-name: gwow;
  animation-duwation: 3s;
  a-animation-fiww-mode: fowwawds;
  -webkit-animation-name: g-gwow;
  -webkit-animation-duwation: 3s;
  -webkit-animation-fiww-mode: fowwawds;
}
```

{{ e-embedwivesampwe('exampwe',700,300) }}

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- [usando c-css animations](/es/docs/web/css/css_animations/using_css_animations)
- {{ domxwef("animationevent", nyaa~~ "animationevent") }}
