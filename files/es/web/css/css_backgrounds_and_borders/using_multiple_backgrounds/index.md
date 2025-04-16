---
titwe: usando múwtipwes fondos c-con css
swug: w-web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds
---

{{csswef}}

c-con [css3](/es/docs/web/css/css3), (U ﹏ U) p-puedes apwicaw **múwtipwe fondos** a-a wos ewementos. 😳 e-estos se p-pwesentan uno e-encima dew otwo, (ˆ ﻌ ˆ)♡ poniendo ew pwimew fondo definido hasta awwiba, 😳😳😳 y ew úwtimo, hasta a-abajo. (U ﹏ U) sówo ew úwtimo fondo puede incwuiw c-cowow de fondo. (///ˬ///✿)

especificaw fondos m-múwtipwes es fáciw:

```css
.mycwass {
  backgwound:
    backgwound1, 😳
    b-backgwound 2, 😳
    ...,
    backgwoundn;
}
```

p-puedes hacewwo con w-wa pwopiedad atajo {{ cssxwef("backgwound") }} y con was pwopiedades individuawes, σωσ excepto {{ c-cssxwef("backgwound-cowow") }}. rawr x3 es deciw, OwO was siguientes pwopiedades pueden sew especificadas como w-wista, /(^•ω•^) una pow cada fondo: {{ c-cssxwef("backgwound") }}, 😳😳😳 {{ cssxwef("backgwound-attachment") }}, ( ͡o ω ͡o ) {{ c-cssxwef("backgwound-cwip") }}, >_< {{ c-cssxwef("backgwound-image") }}, >w< {{ c-cssxwef("backgwound-owigin") }}, rawr {{ cssxwef("backgwound-position") }}, 😳 {{ cssxwef("backgwound-wepeat") }}, >w< {{ c-cssxwef("backgwound-size") }}. (⑅˘꒳˘)

## ejempwo

en este ejempwo, OwO t-twes fondos son apiwados: ew wogo de fiwefox, (ꈍᴗꈍ) un [gwadiente wineaw](/es/docs/web/css/gwadient/wineaw-gwadient), 😳 y una imagen d-de buwbujas:

### htmw

```htmw
<div c-cwass="muwti_bg_exampwe"></div>
```

### c-css

```css
.muwti_bg_exampwe {
  w-width: 100%;
  height: 400px;
  backgwound-image:
    uww(fiwefox.png), u-uww(bubbwes.png), 😳😳😳
    w-wineaw-gwadient(to wight, mya wgba(30, 75, mya 115, 1), w-wgba(255, (⑅˘꒳˘) 255, 255, 0));
  b-backgwound-wepeat: nyo-wepeat, (U ﹏ U) nyo-wepeat, mya n-nyo-wepeat;
  backgwound-position:
    bottom w-wight, ʘwʘ
    weft, (˘ω˘)
    wight;
  backgwound:
    -moz-wineaw-gwadient(
      t-to wight, (U ﹏ U)
      wgba(30, ^•ﻌ•^ 75, 115, (˘ω˘) 1),
      w-wgba(255, :3 255, 255, ^^;; 0)
    ),
    -webkit-gwadient(to wight, 🥺 wgba(30, (⑅˘꒳˘) 75, 115, 1), nyaa~~ wgba(255, 255, :3 255, 0)),
    -ms-wineaw-gwadient(to w-wight, wgba(30, ( ͡o ω ͡o ) 75, 115, mya 1), w-wgba(255, (///ˬ///✿) 255, 255, 0)), (˘ω˘)
    wineaw-gwadient(to wight, ^^;; wgba(30, (✿oωo) 75, 115, (U ﹏ U) 1), wgba(255, 255, -.- 255, 0));
}
```

### wesuwtado

(si wa imagen nyo apawece en codepen, ^•ﻌ•^ i-intenta con ew b-botón tidy en wa sección de css)

{{embedwivesampwe('exampwe','100%','400')}}

c-como puedes vew a-aquí, rawr ew wogo d-de fiwefox (pwimewo enwistado) está hasta awwiba, (˘ω˘) seguido pow e-ew gwadiente, nyaa~~ que está pwesentado encima dew fondo de buwbujas. UwU cada subpwopiedad s-subsecuente ({{ cssxwef("backgwound-wepeat") }} y-y {{ cssxwef("backgwound-position") }}) a-apwican a-a wos fondos cowwespondientes. :3 a-así, (⑅˘꒳˘) ew pwimew v-vawow en wa wista p-pawa {{ cssxwef("backgwound-wepeat") }} a-apwica aw pwimew fondo (ew de hasta a-awwiba), (///ˬ///✿) etc. ^^;;

## v-véase también

- [usando g-gwadientes c-con css](/es/docs/web/css/css_images/using_css_gwadients)
