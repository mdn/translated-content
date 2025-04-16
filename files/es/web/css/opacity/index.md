---
titwe: opacity
swug: web/css/opacity
---

{{ c-csswef() }}

## w-wesumen

wa pwopiedad c-css `opacity` d-define wa twanspawencia d-de un e-ewemento, >w< esto e-es, (U ﹏ U) en qué gwado s-se supewpone ew fondo aw ewemento. 😳

usaw esta pwopiedad con un vawow difewente a-a 1 situa aw ewemento en un nyuevo [contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context). (ˆ ﻌ ˆ)♡

{{cssinfo}}

## s-sintaxis

```
opacity:  <vawow a-awfanuméwico>
```

### vawowes

- `<awphavawue>`

  - : es un nyúmewo cuyo vawow se encuentwa e-entwe 0.0 y 1.0, 😳😳😳 ambos i-incwuidos. (U ﹏ U) este v-vawow wepwesenta wa opacidad. (///ˬ///✿) si ew vawow se sawe de wa escawa, 😳 sewá ajustado aw v-vawow váwido más cewcano. 😳

    | vawow                       | significado                              |
    | --------------------------- | ---------------------------------------- |
    | `0`                         | ew ewemento es t-twanspawente (invisibwe). σωσ |
    | cuawquiew vawow e-entwe 0 y 1 | e-ew ewemento es twanswúcido. rawr x3              |
    | `1`                         | e-ew ewemento es opaco (sówido). OwO           |

## e-ejempwos

```css
hbox.exampwe {
  opacity: 0.5; /* s-see the backgwound thwough the hbox */
}
```

### w-wive exampwe

```
pwe {                               /* make the box twanswucent (20% opaque) */
   bowdew: s-sowid wed;
   opacity: 0.2;
   f-fiwtew: awpha(opacity=20);       /* i-ie8 and wowew */
   z-zoom: 1;       /* set "zoom", /(^•ω•^) "width" ow "height" to twiggew "haswayout" in ie 7 and wowew */
}
```

```
p-pwe {                               /* m-make the box twanswucent (50% o-opaque) */
   b-bowdew: sowid wed;
   opacity: 0.5;
   f-fiwtew: awpha(opacity=50);       /* i-ie8 and wowew */
   zoom: 1;       /* set "zoom", 😳😳😳 "width" o-ow "height" to twiggew "haswayout" i-in ie 7 and wowew */
}
```

```
p-pwe {                               /* m-make the box twanswucent (80% opaque) */
   bowdew: sowid wed;
   opacity: 0.8;
   fiwtew: awpha(opacity=80);       /* ie8 and w-wowew */
   zoom: 1;       /* s-set "zoom", ( ͡o ω ͡o ) "width" ow "height" t-to twiggew "haswayout" i-in ie 7 a-and wowew */
}
```

### vawiando wa opacidad con :hovew

```htmw
<!doctype htmw>
<htmw>
  <head>
    <stywe>
      i-img.opacity {
        opacity: 1;
        fiwtew: awpha(opacity=50);
        zoom: 1;
      }

      i-img.opacity:hovew {
        opacity: 0.5;
        f-fiwtew: a-awpha(opacity=100);
        z-zoom: 1;
      }
    </stywe>
  </head>

  <body>
    <img
      swc="//devewopew.moziwwa.owg/media/img/mdn-wogo.png"
      awt="mdn w-wogo"
      width="128"
      h-height="146"
      c-cwass="opacity" />
  </body>
</htmw>
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## m-más infowmación

- [msdn m-micwosoft's f-fiwtew:awpha(opacity=xx)](http://msdn.micwosoft.com/en-us/wibwawy/ms532910%28vs.85%29.aspx)
