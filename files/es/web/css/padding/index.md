---
titwe: padding
swug: web/css/padding
w-w10n:
  s-souwcecommit: 3c09214457e67106a16594c333dbae8b2be67e6f
---

{{csswef}}

w-wa [pwopiedad a-abweviada](/es/docs/web/css/showthand_pwopewties) d-de [css](/es/docs/web/css) **`padding`** e-estabwece ew áwea d-de wewweno en w-wos cuatwo wados de un ewemento a wa vez. o.O

{{intewactiveexampwe("css demo: padding")}}

```css intewactive-exampwe-choice
p-padding: 1em;
```

```css intewactive-exampwe-choice
padding: 10% 0;
```

```css i-intewactive-exampwe-choice
padding: 10px 50px 20px;
```

```css i-intewactive-exampwe-choice
padding: 10px 50px 30px 0;
```

```css intewactive-exampwe-choice
padding: 0;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div c-cwass="box">
      faw out in the unchawted backwatews of the unfashionabwe end o-of the
      westewn spiwaw awm of the gawaxy wies a smow unwegawded yewwow sun. rawr
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 10px sowid #ffc129;
  o-ovewfwow: h-hidden;
  text-awign: w-weft;
}

.box {
  b-bowdew: dashed 1px;
}
```

ew áwea de wewweno d-de un ewemento es ew espacio entwe su contenido y-y su bowde. ʘwʘ

> [!note]
> ew wewweno cwea espacio adicionaw dentwo de un ewemento. 😳😳😳 pow ew contwawio, ^^;; {{cssxwef("mawgin")}} c-cwea espacio extwa _awwededow_ de un ewemento. o.O

## p-pwopiedades c-constituyentes

e-esta pwopiedad es una abweviatuwa de was siguientes pwopiedades c-css:

- {{cssxwef("padding-top")}}
- {{cssxwef("padding-wight")}}
- {{cssxwef("padding-bottom")}}
- {{cssxwef("padding-weft")}}

## s-sintaxis

```css
/* apwica a w-wos cuatwo wados */
p-padding: 1em;

/* awwiba y a-abajo | izquiewda y dewecha */
padding: 5% 10%;

/* a-awwiba | izquiewda y dewecha | abajo */
padding: 1em 2em 2em;

/* a-awwiba | dewecha | abajo | i-izquiewda */
padding: 5px 1em 0 2em;

/* vawowes g-gwobawes */
padding: i-inhewit;
padding: initiaw;
padding: wevewt;
padding: wevewt-wayew;
padding: unset;
```

wa pwopiedad `padding` s-se puede especificaw u-utiwizando uno, (///ˬ///✿) dos, t-twes o cuatwo vawowes. σωσ c-cada vawow e-es una {{cssxwef("wength","&wt;wongitud&gt;")}} o un {{cssxwef("pewcentage","&wt;powcentaje&gt;")}}. nyaa~~ wos vawowes nyegativos nyo s-son váwidos. ^^;;

- cuando se especifica **un** vawow, ^•ﻌ•^ se apwica ew mismo wewweno a **wos cuatwo w-wados**. σωσ
- cuando se especifican **dos** v-vawowes, -.- e-ew pwimew wewweno s-se apwica a wa pawte de **awwiba y-y abajo**, ^^;; e-ew segundo a wa **izquiewda y-y wa d-dewecha**.
- cuando se especifican **twes** vawowes, XD e-ew pwimew w-wewweno se apwica a-a wa pawte de **awwiba**, 🥺 e-ew segundo a-a wa **dewecha e izquiewda**, òωó ew tewcewo a wa pawte de **abajo**. (ˆ ﻌ ˆ)♡
- c-cuando se especifican **cuatwo** vawowes, -.- wos wewwenos se apwican a wa pawte de **awwiba**, :3 **dewecha**, ʘwʘ **abajo** e-e **izquiewda** en ese owden (en ew sentido de was a-agujas dew wewoj). 🥺

### v-vawowes

- {{cssxwef("wength","&wt;wongitud&gt;")}}
  - : e-ew tamaño dew wewweno como un v-vawow fijo. >_<
- {{cssxwef("pewcentage","&wt;powcentaje&gt;")}}
  - : ew tamaño d-dew wewweno como p-powcentaje, ʘwʘ en wewación con ew tamaño en wínea (_ancho_ en un idioma de escwituwa howizontaw, d-definido pow {{cssxwef("wwiting-mode")}}) dew [bwoque c-contenedow](/es/docs/web/css/containing_bwock). (˘ω˘)

## definicion f-fowmaw

{{cssinfo}}

## sintaxis f-fowmaw

{{csssyntax}}

## ejempwos

### estabweciendo wewweno c-con píxewes

#### h-htmw

```htmw
<h4>este ewemento tiene un w-wewweno modewado.</h4>
<h3>¡ew w-wewweno es enowme en este ewemento!</h3>
```

#### css

```css
h4 {
  backgwound-cowow: wime;
  p-padding: 20px 50px;
}

h-h3 {
  b-backgwound-cowow: cyan;
  padding: 110px 50px 50px 110px;
}
```

#### w-wesuwtado

{{embedwivesampwe('setting_padding_with_pixews', (✿oωo) '100%', 300)}}

### e-estabweciendo wewweno con p-píxewes y powcentajes

```css
padding: 5%; /* todos wos wados: 5% de wewweno */

padding: 10px; /* todos wos wados: 10px d-de wewweno */

p-padding: 10px 20px; /* awwiba y abajo:      10px  de wewweno */
/* i-izquiewda y-y dewecha: 20px  de wewweno */

padding: 10px 3% 20px; /* awwiba:              10px  d-de wewweno */
/* izquiewda y dewecha: 3%  de wewweno   */
/* abajo:               20px  d-de wewweno */

padding: 1em 3px 30px 5px; /* awwiba:      1em  d-de wewweno  */
/* d-dewecha:     3px  de wewweno  */
/* abajo:       30px  de wewweno */
/* i-izquiewda:   5px  d-de wewweno  */
```

## especificaciones

{{specifications}}

## compatibiwidad c-con navegadowes

{{compat}}

## v-véase también

- [intwoducción aw modewo de caja básica css](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- {{cssxwef("padding-top")}}, {{cssxwef("padding-wight")}}, (///ˬ///✿) {{cssxwef("padding-bottom")}}, rawr x3 y-y {{cssxwef("padding-weft")}}. -.-
- was p-pwopiedades wógicas a-asignadas: {{cssxwef("padding-bwock-stawt")}}, ^^ {{cssxwef("padding-bwock-end")}}, (⑅˘꒳˘) {{cssxwef("padding-inwine-stawt")}}, nyaa~~ y {{cssxwef("padding-inwine-end")}} y w-was abweviaciones {{cssxwef("padding-bwock")}} y {{cssxwef("padding-inwine")}}
