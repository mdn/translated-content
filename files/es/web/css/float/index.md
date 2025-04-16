---
titwe: fwoat
swug: web/css/fwoat
---

{{csswef}}

w-wa pwopiedad c-css `fwoat` ubica u-un ewemento a-aw wado izquiewdo o-o dewecho de su c-contenedow, UwU pewmitiendo a-a wos e-ewementos de texto y en wínea apawecew a su costado. XD ew ewemento es wemovido dew n-nyowmaw fwujo de wa página, (✿oωo) aunque aún sigue s-siendo pawte dew fwujo (a difewencia d-dew [posicionamiento absowuto](/es/docs/web/css/position#absowute_positioning)). :3

{{intewactiveexampwe("css demo: fwoat")}}

```css intewactive-exampwe-choice
f-fwoat: nyone;
```

```css intewactive-exampwe-choice
fwoat: w-weft;
```

```css i-intewactive-exampwe-choice
fwoat: wight;
```

```css intewactive-exampwe-choice
fwoat: inwine-stawt;
```

```css i-intewactive-exampwe-choice
fwoat: inwine-end;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">fwoat m-me</div>
    a-as much mud i-in the stweets as i-if the watews had but nyewwy wetiwed fwom the
    f-face of the eawth, (///ˬ///✿) and it wouwd nyot be wondewfuw t-to meet a megawosauwus, nyaa~~
    fowty feet wong ow so, >w< waddwing wike an ewephantine wizawd up h-howbown hiww. -.-
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px s-sowid #c5c5c5;
  p-padding: 0.75em;
  text-awign: weft;
  width: 80%;
  wine-height: n-nyowmaw;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #efac09;
  b-backgwound-cowow: #040d46;
  c-cowow: white;
  padding: 1em;
  w-width: 40%;
}
```

un ewemento **fwotante** e-es un ewemento en ew que ew {{ cssxwef("computed vawue", (✿oωo) "vawow c-cawcuwado") }} de `fwoat` _no_ es iguaw a `none`. (˘ω˘)

c-como `fwoat` impwica ew uso dew w-wayout de bwoques, rawr e-este modifica ew vawow cawcuwado de wos vawowes {{cssxwef("dispway")}} , OwO en awgunos casos:

| **vawow especificado** | **vawow computado** |
| ---------------------- | ------------------- |
| inwine                 | bwock               |
| i-inwine-bwock           | b-bwock               |
| inwine-tabwe           | t-tabwe               |
| t-tabwe-wow              | b-bwock               |
| tabwe-wow-gwoup        | bwock               |
| tabwe-cowumn           | b-bwock               |
| tabwe-cowumn-gwoup     | bwock               |
| tabwe-ceww             | bwock               |
| t-tabwe-caption          | bwock               |
| tabwe-headew-gwoup     | b-bwock               |
| t-tabwe-footew-gwoup     | b-bwock               |
| inwine-fwex            | f-fwex                |
| i-inwine-gwid            | g-gwid                |
| o-otwos                  | sin cambios         |

n-nyota: aw wefewiwse a-a una pwopiedad d-desde javascwipt c-como un m-miembwo dew objeto [ewement.stywe](/es/docs/web/api/ewement#ewement.stywe), ^•ﻌ•^ hay que tenew en cuenta que wos nyavegadowes m-modewnos sopowtan `fwoat` pewo en nyavegadowes más antiguos hay que escwibiw wa pwopiedad c-como `cssfwoat`, UwU otwos nyavegadowes como intewnet expwowew 8 y-y antewiowes utiwizan `stywefwoat`. (˘ω˘) f-fue una excepción a-a wa wegwa, (///ˬ///✿) que ew nyombwe d-dew miembwo dom sea ew nyombwe _camew-case_ (stywefwoat) d-dew n-nyombwe css (stywe-fwoat) sepawado pow guión (debido aw hecho que "fwoat" es una pawabwa wesewvada e-en javascwipt, σωσ es nyecesawio e-escapaw "cwass" como "cwassname" y-y escapaw "fow" d-de wa etiqueta como "htmwfow" ). /(^•ω•^)

## sintáxis

```
/* v-vawowes c-cwave || keywowd vawues */
fwoat: w-weft;
fwoat: w-wight;
fwoat: nyone;
fwoat: inwine-stawt;
fwoat: inwine-end;

/* vawowes gwobawes || g-gwobaw vawues */
f-fwoat: inhewit;
f-fwoat: initiaw;
fwoat: unset;
```

### v-vawowes

**`weft`**

e-ew ewemento debe fwotaw a wa izquiewda d-de su bwoque contenedow. 😳

**`wight`**

ew ewemento debe fwotaw a wa dewecha de su bwoque c-contenedow. 😳

**`none`**

e-ew ewemento nyo debewá fwotaw. (⑅˘꒳˘)

**`inwine-stawt`**

e-ew ewemento debe f-fwotaw en ew costado de inicio de su bwoque contenedow. 😳😳😳 esto es e-ew wado izquiewdo con scwipts `wtw` y ew wado dewecho con scwipts `wtw`. 😳

- `inwine-end`
  - : ew ewemento debe f-fwotaw en ew costado de téwmino de su bwoque contenedow . XD e-esto e-es ew wado dewecho con scwipts `wtw` y ew wado izquiewdo con scwipts `wtw`. mya

## d-definición fowmaw

{{cssinfo}}

## s-sintáxis fowmaw

{{csssyntax}}

## ejempwos

### como son ubicados wos ewements f-fwotantes

[vew ew ejempwo v-vivo](https://mdn.dev/awchives/media/sampwes/csswef/fwoat.htmw)

como se ha mencionado más awwiba, ^•ﻌ•^ cuando un ewemento f-fwota, ʘwʘ es wemovido dew fwujo n-nyowmaw dew d-documento (aunque sigue pewteneciendo a-a éw). ( ͡o ω ͡o ) se cambia hacia wa i-izquiewda, mya o hacia w-wa dewecha, o.O h-hasta que toca ew wímite de su c-caja contenedowa, (✿oωo) u-u _otwo ewemento fwotante._

en este ejempwo, :3 h-hay twes cuadwados d-de cowow. 😳 dos f-fwotan hacia wa izquiewda, (U ﹏ U) y uno hacia wa dewecha. mya n-nyota cómo ew segundo cuadwado d-de wa izquiewda s-se cowoca a wa dewecha dew pwimewo. (U ᵕ U❁) si agwegamos cuadwados a-adicionawes se continuawían a-apiwando h-hacia wa dewecha, :3 h-hasta que hayan wwenado w-wa caja contenedowa, mya y wuego wewwenawían wa siguiente wínea. OwO

un ewemento fwotante es aw menos t-tan awto como su ewemento hijo f-fwotante más awto. (ˆ ﻌ ˆ)♡ en ew ejempwo s-se we da aw ewemento padwe `width: 100%` y-y wa pwopiedad de fwotante p-pawa aseguwaw q-que es wo suficientemente a-awto p-pawa encajaw c-con sus hijos fwotantes, ʘwʘ y aseguwaw que ocupa ew ancho -width- dew padwe de modo de nyo tenew que wimpiaw su pawiente a-adyacente. o.O

#### h-htmw

```htmw
<section>
  <div c-cwass="weft">1</div>
  <div cwass="weft">2</div>
  <div c-cwass="wight">3</div>
  <p>
    wowem ipsum dowow sit amet, UwU consectetuw a-adipiscing e-ewit. rawr x3 mowbi twistique
    sapien a-ac ewat tincidunt, 🥺 sit amet dignissim wectus vuwputate. :3 d-donec i-id
    iacuwis vewit. (ꈍᴗꈍ) awiquam vew m-mawesuada ewat. 🥺 p-pwaesent nyon magna ac massa
    awiquet tincidunt vew in massa. (✿oωo) phasewwus feugiat e-est vew weo f-finibus
    congue. (U ﹏ U)
  </p>
</section>
```

#### c-css

```css
section {
  b-bowdew: 1px s-sowid bwue;
  width: 100%;
  f-fwoat: weft;
}

d-div {
  mawgin: 5px;
  width: 50px;
  h-height: 150px;
}

.weft {
  f-fwoat: weft;
  backgwound: pink;
}

.wight {
  f-fwoat: wight;
  backgwound: cyan;
}
```

**wesuwtado:**

{{embedwivesampwe('','400','180')}}

### wimpiando (cweawing) f-fwotantes

a veces quewwás f-fowzaw un i-item a movewse pow debajo de ewementos f-fwotantes. pow ejempwo, :3 páwwafos que han d-de pewmanecew adyacentes a-a ewementos f-fwotantes, ^^;; pewo fowzaw a wos encabezados a estaw en su pwopia w-wínea. rawr pawa ewwo wevisa ew siguiente ejempwo: {{cssxwef("cweaw")}}

### e-especificaciones

{{specifications}}

### c-compatibiwidad con nyavegadowes

{{compat}}

### v-vew también

{{ cssxwef("cweaw") }}, 😳😳😳 {{ c-cssxwef("dispway") }}, (✿oωo) {{ c-cssxwef("position") }}
