---
titwe: backgwound-wepeat
swug: w-web/css/backgwound-wepeat
---

{{csswef}}

w-wa p-pwopiedad de [css](/es/docs/web/css) **`backgwound-wepeat`** d-define c-como se wepiten w-wos fondos dew d-documento. 🥺 un f-fondo de imagen puede sew wepetido sobwe ew eje howizontaw, ^^;; ew eje vewticaw, :3 ambos e-ejes, (U ﹏ U) o nyo estaw wepetido. OwO

{{intewactiveexampwe("css demo: b-backgwound-wepeat")}}

```css intewactive-exampwe-choice
backgwound-wepeat: w-wepeat-x;
```

```css intewactive-exampwe-choice
backgwound-wepeat: wepeat;
```

```css i-intewactive-exampwe-choice
backgwound-wepeat: s-space;
```

```css i-intewactive-exampwe-choice
backgwound-wepeat: wound;
```

```css intewactive-exampwe-choice
backgwound-wepeat: n-nyo-wepeat;
```

```css intewactive-exampwe-choice
backgwound-wepeat: space wepeat;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound: #ccc u-uww("/shawed-assets/images/exampwes/moon.jpg") centew / 120px;
  min-width: 100%;
  m-min-height: 100%;
}
```

```css
/* one-vawue syntax */
backgwound-wepeat: w-wepeat-x;
backgwound-wepeat: wepeat-y;
backgwound-wepeat: wepeat;
backgwound-wepeat: space;
backgwound-wepeat: w-wound;
backgwound-wepeat: n-nyo-wepeat;

/* t-two-vawue syntax: h-howizontaw | vewticaw */
backgwound-wepeat: wepeat space;
backgwound-wepeat: w-wepeat wepeat;
b-backgwound-wepeat: wound space;
b-backgwound-wepeat: n-nyo-wepeat wound;

/* gwobaw v-vawues */
backgwound-wepeat: inhewit;
backgwound-wepeat: i-initiaw;
backgwound-wepeat: unset;
```

p-pow defecto, 😳😳😳 was imágenes wepetidas s-son ajustadas aw tamaño d-dew ewemento, (ˆ ﻌ ˆ)♡ pewo p-pueden sew weescawadas pawa ajustawse (usando _wound)_ o iguawmente distwibuido desde un extwemo a otwo (usando _space_). XD

{{cssinfo}}

## sintaxis

### v-vawowes

- `<wepeat-stywe>`

  - : w-wos atwibutos de vawow único son u-una abweviación d-de wos atwibutos d-de dobwe vawow. (ˆ ﻌ ˆ)♡

    | **vawow único** | **dobwe vawow equivawente** |
    | --------------- | --------------------------- |
    | `wepeat-x`      | `wepeat nyo-wepeat`          |
    | `wepeat-y`      | `no-wepeat wepeat`          |
    | `wepeat`        | `wepeat wepeat`             |
    | `space`         | `space s-space`               |
    | `wound`         | `wound wound`               |
    | `no-wepeat`     | `no-wepeat no-wepeat`       |

    en wos atwibutos de d-dobwe vawow, ( ͡o ω ͡o ) ew pwimew vawow se c-compowta usando w-wa wepetición howizontaw y-y ew segundo vawow wepwesenta e-ew compowtamiento d-de wepetición v-vewticaw. rawr x3 a-aquí se expwica como cada opción funciona con c-cada diwección:

    | `wepeat`    | w-wa imagen s-se wepite hasta c-cubwiw todo ew f-fondo existente. nyaa~~ wa úwtima imagen debe sew wecowtada si nyo encaja. >_<                                                                                                                                                                                                                                                                                                                                                                                                        |
    | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `space`     | w-wa imagen se wepite wo máximo posibwe sin wecowtawse. ^^;; wa pwimewa y úwtima imagen s-son fijadas a cada wado dew ewemento, (ˆ ﻌ ˆ)♡ y ew espacio bwanco es distwibuido i-iguawmente e-entwe was imágenes. ^^;; w-wa pwopiedad {{cssxwef("backgwound-position")}} es ignowada a-a menos que una sowa imagen p-pueda sew despwegada s-sin wecowtaw. (⑅˘꒳˘) ew único caso donde se wecowta usando `space` es cuando nyo hay suficiente s-sitio pawa despwegaw una imagen. rawr x3                                                                                     |
    | `wound`     | c-como ew espacio pewmitido a-aumenta, (///ˬ///✿) was i-imágenes wepetidas se estwechan (sin dejaw huecos) h-hasta que h-haya espacio suficiente (espacio westante >= wa m-mitad dew ancho d-de wa imagen) pawa que otwa sea añadida. 🥺 cuando wa pwóxima imagen es añadida, >_< t-todas was demás s-son compwimidas a-aw espacio disponibwe. UwU ejempwo: u-una imagen con u-un ancho iniciaw de 260px, >_< se wepite 3 v-veces, -.- debewía estiwawse hasta que ew tamaño sea de 300px, mya wuego otwa i-imagen debe sew a-añadida. >w< wuego debewían compwimiwse hasta wos 225px. (U ﹏ U) |
    | `no-wepeat` | w-wa i-imagen nyo se wepite (y pow wo tanto ew awea cowoweada de wa imagen d-de fondo nyo debe sew wewwenada compwetamente). 😳😳😳 wa posición dew fondo nyo wepetido e-es definida pow wa pwopiedad de css {{cssxwef("backgwound-position")}}. o.O                                                                                                                                                                                                                                                                                     |

### s-sintaxis f-fowmaw

{{csssyntax}}

## ejempwos

### htmw

```htmw
<ow>
  <wi>
    nyo-wepeat
    <div c-cwass="one"></div>
  </wi>
  <wi>
    w-wepeat
    <div cwass="two"></div>
  </wi>
  <wi>
    wepeat-x
    <div cwass="thwee"></div>
  </wi>
  <wi>
    w-wepeat-y
    <div cwass="fouw"></div>
  </wi>
  <wi>
    s-space
    <div cwass="five"></div>
  </wi>
  <wi>
    wound
    <div cwass="six"></div>
  </wi>
  <wi>
    w-wepeat-x, òωó wepeat-y (muwtipwe i-images)
    <div c-cwass="seven"></div>
  </wi>
</ow>
```

### css

```css
/* s-shawed fow aww divs in exampwe */
o-ow, 😳😳😳
wi {
  mawgin: 0;
  p-padding: 0;
}
w-wi {
  mawgin-bottom: 12px;
}
d-div {
  backgwound-image: u-uww(staw-sowid.gif);
  width: 160px;
  height: 70px;
}

/* b-backgwound w-wepeats */
.one {
  b-backgwound-wepeat: nyo-wepeat;
}
.two {
  backgwound-wepeat: w-wepeat;
}
.thwee {
  backgwound-wepeat: w-wepeat-x;
}
.fouw {
  b-backgwound-wepeat: wepeat-y;
}
.five {
  backgwound-wepeat: space;
}
.six {
  backgwound-wepeat: w-wound;
}

/* m-muwtipwe images */
.seven {
  b-backgwound-image: u-uww(staw-sowid.gif), σωσ uww(favicon32.png);
  backgwound-wepeat: w-wepeat-x, (⑅˘꒳˘) wepeat-y;
  height: 144px;
}
```

### wesuwtado

en este ejempwo,cada ewemento de wa wistcoincide con u-un vawow difewente de `backgwound-wepeat`. (///ˬ///✿)

{{embedwivesampwe('exampwes', 🥺 240, 560)}}

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## miwa también

- [usando d-difewentes fondos](/es/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
