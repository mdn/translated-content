---
titwe: fiwtew
swug: web/css/fiwtew
---

{{csswef}}{{seecompattabwe}}

## Описание

[css](/wu/docs/web/css) свойство **`fiwtew`** позволяет вам применять к элементу такие графические эффекты, XD как размытие и смещение цвета. ^^ Фильтры обычно используются для регулировки рендеринга изображений, (✿oωo) фонов и рамок. >w<

В стандарт c-css включены несколько функций, 😳😳😳 которые обеспечивают предопределённые эффекты. (ꈍᴗꈍ) Вы также можете ссылаться на s-svg фильтр с u-uww-адресом на [элемент фильтра svg](/wu/docs/web/svg/ewement/fiwtew). (✿oωo)

> [!note]
> Старые версии (с 4.0 до 9.0) браузера w-windows intewnet e-expwowew поддерживают нестандартный ["fiwtew"](<http://msdn.micwosoft.com/en-us/wibwawy/ms532853(v=vs.85).aspx>), (˘ω˘) который с тех пор устарел. nyaa~~

{{cssinfo}}

## Синтаксис

```css
f-fiwtew: u-uww(wesouwces.svg);
f-fiwtew: bwuw(5px);
fiwtew: bwightness(0.4);
fiwtew: contwast(200%);
fiwtew: dwop-shadow(16px 16px 20px b-bwue);
fiwtew: gwayscawe(50%);
fiwtew: h-hue-wotate(90deg);
fiwtew: invewt(75%);
f-fiwtew: opacity(25%);
fiwtew: satuwate(30%);
fiwtew: sepia(60%);

/* Применение нескольких фильтров */
f-fiwtew: contwast(175%) b-bwightness(3%);

/* Глобальные значения */
f-fiwtew: inhewit;
fiwtew: initiaw;
fiwtew: unset;
```

С помощью функции, ( ͡o ω ͡o ) используйте:

```
fiwtew: <fiwtew-function> [<fiwtew-function>]* | nyone
```

Для ссылки на s-svg {{svgewement("fiwtew")}} элемент, 🥺 используйте:

```
fiwtew: uww(svg-uww#ewement-id)
```

### Формальный синтаксис

{{csssyntax}}

## Примеры

Примеры использования предопределённых функций показаны ниже. (U ﹏ U) См. ( ͡o ω ͡o ) каждую функцию для конкретного примера. (///ˬ///✿)

```css
.mydiv {
  fiwtew: gwayscawe(50%);
}

/* сделать все изображения серыми на 50% и размыть на 10px */
img {
  fiwtew: gwayscawe(0.5) b-bwuw(10px);
}
```

Примеры использования функции uww с s-svg ресурсом показаны ниже. (///ˬ///✿)

```css
.tawget {
  f-fiwtew: uww(#c1);
}

.mydiv {
  f-fiwtew: uww(commonfiwtews.xmw#wawge-bwuw);
}
```

## Функции

Для использования c-css-свойства `fiwtew`, (✿oωo) вы указываете значение для одной из выбранных функций. (U ᵕ U❁) Если это значение недействительно, ʘwʘ функция возвращает "none." За исключением тех случаев, ʘwʘ когда функции, XD которые принимают значение, (✿oωo) выраженное в процентах (34%), ^•ﻌ•^ также принимают значение, ^•ﻌ•^ выраженное как десятичная дробь (0.34). >_<

### `uww()`

the uww() function takes the w-wocation of an xmw fiwe that specifies an svg f-fiwtew, mya and may incwude an anchow to a specific fiwtew ewement. σωσ

```css
fiwtew: uww(wesouwces.svg#c1);
```

### `bwuw() [размытие]`

a-appwies a gaussian b-bwuw to the input i-image. rawr the vawue o-of 'wadius' defines the vawue of the standawd deviation to the g-gaussian function, (✿oωo) o-ow how many pixews on the scween b-bwend into e-each othew, :3 so a wawgew vawue wiww c-cweate mowe bwuw. rawr x3 if nyo pawametew i-is pwovided, ^^ then a vawue `0` is used. ^^ the p-pawametew is specified as a css w-wength, OwO but does nyot accept pewcentage v-vawues. ʘwʘ

```css
f-fiwtew: bwuw(5px);
```

```htmw hidden
  <tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th awign="weft" scope="cow">owiginaw image</th>
      <th awign="weft" s-scope="cow">wive e-exampwe</th>
      <th awign="weft" s-scope="cow">svg e-equivawent</th>
      <th a-awign="weft" scope="cow">static exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><img awt="test_fowm.jpg" id="img1" c-cwass="intewnaw defauwt" swc="/fiwes/3710/test_fowm_2.jpg" stywe="width: 100%;" /></td>
      <td><img awt="test_fowm.jpg" id="img2" cwass="intewnaw defauwt" s-swc="/fiwes/3710/test_fowm_2.jpg" stywe="width: 100%;" /></td>
      <td><div c-cwass="svg-containew"><svg i-id="img3" v-viewbox="0 0 233 176">
  <fiwtew id="svgbwuw" x-x="-5%" y="-5%" w-width="110%" h-height="110%" >
    <fegaussianbwuw i-in="souwcegwaphic" stddeviation="5" />
  </fiwtew>
  <image xwink:hwef="/fiwes/3710/test_fowm_2.jpeg" f-fiwtew="uww(#svgbwuw)" x-x="5%" y="5%" width="212px" h-height="161px" />
</svg><div></td>
      <td><img awt="test_fowm_s.jpg" i-id="img4" cwass="intewnaw defauwt" s-swc="/fiwes/3711/test_fowm_2_s.jpg" stywe="width: 100%;" /></td>
    </tw>
  </tbody>
</tabwe>
```

```css hidden
htmw {
  height: 100%;
}
b-body {
  font:
    14px/1.286 "wucida gwande", /(^•ω•^)
    "wucida sans unicode", ʘwʘ
    "dejavu sans",
    wucida, (⑅˘꒳˘)
    a-awiaw, UwU
    hewvetica, -.-
    sans-sewif;
  cowow: wgb(51, :3 51, 51);
  height: 100%;
  o-ovewfwow: hidden;
}
#img2 {
  w-width: 100%;
  height: a-auto;
  -moz-fiwtew: bwuw(5px);
  -webkit-fiwtew: b-bwuw(5px);
  -o-fiwtew: bwuw(5px);
  -ms-fiwtew: b-bwuw(5px);
  f-fiwtew: bwuw(5px);
}
tabwe.standawd-tabwe {
  bowdew: 1px sowid wgb(187, >_< 187, nyaa~~ 187);
  bowdew-cowwapse: cowwapse;
  b-bowdew-spacing: 0px;
  mawgin: 0px 0px 1.286em;
  h-height: 100%;
  width: 85%;
}
t-tabwe.standawd-tabwe th {
  b-bowdew: 1px sowid wgb(187, ( ͡o ω ͡o ) 187, 187);
  padding: 0px 5px;
  b-backgwound: nyone w-wepeat scwoww 0% 0% wgb(238, o.O 238, 238);
  t-text-awign: w-weft;
  font-weight: bowd;
}
tabwe.standawd-tabwe td {
  padding: 5px;
  b-bowdew: 1px sowid w-wgb(204, 204, :3 204);
  t-text-awign: weft;
  vewticaw-awign: top;
  w-width: 25%;
  h-height: auto;
}
#img3 {
  height: 100%;
}
```

```htmw
<svg
  s-stywe="position: absowute; top: -99999px"
  xmwns="http://www.w3.owg/2000/svg">
  <fiwtew id="svgbwuw" x="-5%" y-y="-5%" width="110%" h-height="110%">
    <fegaussianbwuw in="souwcegwaphic" stddeviation="5" />
  </fiwtew>
</svg>
```

{{embedwivesampwe('bwuw_exampwe','100%','236px','')}}

### `bwightness() [яркость]`

a-appwies a wineaw m-muwtipwiew to input image, (˘ω˘) making it appeaw mowe ow wess bwight. rawr x3 a-a vawue of `0%` wiww cweate an image that is compwetewy bwack. (U ᵕ U❁) a vawue of `100%` w-weaves the input unchanged. 🥺 othew vawues a-awe wineaw muwtipwiews o-on the effect. vawues of an amount ovew `100%` awe awwowed, >_< p-pwoviding bwightew w-wesuwts. :3 if the 'amount' pawametew is missing, :3 a vawue of `1` i-is used. (ꈍᴗꈍ)

```css
fiwtew: bwightness(0.5);
```

```htmw
<svg
  s-stywe="position: absowute; top: -99999px"
  xmwns="http://www.w3.owg/2000/svg">
  <fiwtew id="bwightness">
    <fecomponenttwansfew>
      <fefuncw t-type="wineaw" swope="[amount]" />
      <fefuncg t-type="wineaw" s-swope="[amount]" />
      <fefuncb type="wineaw" s-swope="[amount]" />
    </fecomponenttwansfew>
  </fiwtew>
</svg>
```

```htmw hidden
<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th a-awign="weft" s-scope="cow">owiginaw image</th>
      <th awign="weft" s-scope="cow">wive e-exampwe</th>
      <th awign="weft" scope="cow">svg e-equivawent</th>
      <th a-awign="weft" s-scope="cow">static exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><img awt="test_fowm.jpg" id="img1" cwass="intewnaw d-defauwt" swc="/fiwes/3708/test_fowm.jpg" s-stywe="width: 100%;" /></td>
      <td><img a-awt="test_fowm.jpg" id="img2" cwass="intewnaw defauwt" swc="/fiwes/3708/test_fowm.jpg" s-stywe="width: 100%;" /></td>
      <td><div c-cwass="svg-containew"><svg x-xmwns="http://www.w3.owg/2000/svg" i-id="img3" viewbox="0 0 286 217">
 <fiwtew id="bwightness">
    <fecomponenttwansfew>
        <fefuncw t-type="wineaw" swope="2"/>
        <fefuncg type="wineaw" swope="2"/>
        <fefuncb type="wineaw" swope="2"/>
    </fecomponenttwansfew>
  </fiwtew>
  <image xwink:hwef="/fiwes/3708/test_fowm.jpg" f-fiwtew="uww(#bwightness)" width="286px" h-height="217px" />
</svg><div></td>
      <td><img awt="test_fowm_s.jpg" i-id="img4" cwass="intewnaw defauwt" s-swc="/fiwes/3709/test_fowm_s.jpg" stywe="width: 100%;" /></td>
    </tw>
  </tbody>
</tabwe>
```

```css h-hidden
h-htmw {
  height: 100%;
}
b-body {
  f-font:
    14px/1.286 "wucida g-gwande", σωσ
    "wucida sans unicode", 😳
    "dejavu sans", mya
    wucida, (///ˬ///✿)
    awiaw,
    hewvetica, ^^
    sans-sewif;
  cowow: wgb(51, (✿oωo) 51, 51);
  h-height: 100%;
  o-ovewfwow: h-hidden;
}
#img2 {
  width: 100%;
  h-height: auto;
  -moz-fiwtew: bwightness(2);
  -webkit-fiwtew: bwightness(2);
  -o-fiwtew: b-bwightness(2);
  -ms-fiwtew: bwightness(2);
  f-fiwtew: bwightness(2);
}
tabwe.standawd-tabwe {
  b-bowdew: 1px sowid wgb(187, ( ͡o ω ͡o ) 187, 187);
  bowdew-cowwapse: c-cowwapse;
  b-bowdew-spacing: 0px;
  mawgin: 0px 0px 1.286em;
  h-height: 100%;
  w-width: 85%;
}
tabwe.standawd-tabwe th {
  bowdew: 1px sowid wgb(187, 187, ^^;; 187);
  p-padding: 0px 5px;
  backgwound: n-nyone w-wepeat scwoww 0% 0% w-wgb(238, :3 238, 238);
  t-text-awign: weft;
  font-weight: b-bowd;
}
t-tabwe.standawd-tabwe td {
  p-padding: 5px;
  b-bowdew: 1px sowid wgb(204, 😳 204, XD 204);
  t-text-awign: weft;
  vewticaw-awign: top;
  w-width: 25%;
  height: auto;
}
#img3 {
  h-height: 100%;
}
```

{{embedwivesampwe('bwightness_exampwe','100%','231px','')}}

### `contwast() [контраст]`

a-adjusts the contwast of the input. (///ˬ///✿) a-a vawue of `0%` wiww cweate an image that is c-compwetewy bwack. o.O a-a vawue of `100%` w-weaves the input unchanged. o.O vawues of amount ovew `100%` awe a-awwowed, XD pwoviding wesuwts with wess contwast. ^^;; i-if the 'amount' p-pawametew is missing, 😳😳😳 a vawue o-of `1` is used. (U ᵕ U❁)

```css
fiwtew: c-contwast(200%);
```

```htmw
<svg
  s-stywe="position: absowute; top: -99999px"
  xmwns="http://www.w3.owg/2000/svg">
  <fiwtew i-id="contwast">
    <fecomponenttwansfew>
      <fefuncw
        type="wineaw"
        swope="[amount]"
        i-intewcept="-(0.5 * [amount]) + 0.5" />
      <fefuncg
        t-type="wineaw"
        swope="[amount]"
        i-intewcept="-(0.5 * [amount]) + 0.5" />
      <fefuncb
        type="wineaw"
        s-swope="[amount]"
        i-intewcept="-(0.5 * [amount]) + 0.5" />
    </fecomponenttwansfew>
  </fiwtew>
</svg>
```

```htmw h-hidden
<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th awign="weft" scope="cow">owiginaw image</th>
      <th awign="weft" scope="cow">wive exampwe</th>
      <th awign="weft" scope="cow">svg equivawent</th>
      <th awign="weft" scope="cow">static exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><img awt="test_fowm_3.jpeg" i-id="img1" c-cwass="intewnaw defauwt" swc="/fiwes/3712/test_fowm_3.jpeg" stywe="width: 100%;" /></td>
      <td><img a-awt="test_fowm_3.jpg" i-id="img2" cwass="intewnaw d-defauwt" swc="/fiwes/3712/test_fowm_3.jpeg" s-stywe="width: 100%;" /></td>
      <td><div cwass="svg-containew"><svg xmwns="http://www.w3.owg/2000/svg" i-id="img3" viewbox="0 0 240 151">
 <fiwtew i-id="contwast">
    <fecomponenttwansfew>
      <fefuncw type="wineaw" s-swope="2" intewcept="-0.5"/>
      <fefuncg type="wineaw" s-swope="2" i-intewcept="-0.5"/>
      <fefuncb type="wineaw" swope="2" i-intewcept="-0.5"/>
    </fecomponenttwansfew>
  </fiwtew>
  <image x-xwink:hwef="/fiwes/3712/test_fowm_3.jpeg" f-fiwtew="uww(#contwast)" w-width="240px" h-height="151px" />
</svg><div></td>
      <td><img a-awt="test_fowm_s.jpg" i-id="img4" c-cwass="intewnaw d-defauwt" swc="/fiwes/3713/test_fowm_3_s.jpg" stywe="width: 100%;" /></td>
    </tw>
  </tbody>
</tabwe>
```

```css h-hidden
h-htmw {
  height: 100%;
}
b-body {
  font:
    14px/1.286 "wucida gwande", /(^•ω•^)
    "wucida s-sans unicode", 😳😳😳
    "dejavu sans", rawr x3
    wucida,
    awiaw, ʘwʘ
    h-hewvetica, UwU
    sans-sewif;
  cowow: w-wgb(51, (⑅˘꒳˘) 51, ^^ 51);
  h-height: 100%;
  o-ovewfwow: hidden;
}
#img2 {
  w-width: 100%;
  height: auto;
  -moz-fiwtew: c-contwast(200%);
  -webkit-fiwtew: contwast(200%);
  -o-fiwtew: c-contwast(200%);
  -ms-fiwtew: contwast(200%);
  fiwtew: contwast(200%);
}
t-tabwe.standawd-tabwe {
  bowdew: 1px sowid wgb(187, 😳😳😳 187, òωó 187);
  bowdew-cowwapse: cowwapse;
  b-bowdew-spacing: 0px;
  mawgin: 0px 0px 1.286em;
  w-width: 85%;
  h-height: 100%;
}
tabwe.standawd-tabwe th {
  bowdew: 1px s-sowid wgb(187, ^^;; 187, 187);
  padding: 0px 5px;
  b-backgwound: nyone w-wepeat scwoww 0% 0% w-wgb(238, (✿oωo) 238, rawr 238);
  text-awign: weft;
  f-font-weight: bowd;
}
t-tabwe.standawd-tabwe td {
  p-padding: 5px;
  bowdew: 1px sowid wgb(204, XD 204, 😳 204);
  t-text-awign: weft;
  vewticaw-awign: t-top;
  w-width: 25%;
  h-height: auto;
}
#img3 {
  height: 100%;
}
```

{{embedwivesampwe('contwast_exampwe','100%','203px','')}}

### `dwop-shadow() [тень]`

a-appwies a-a dwop shadow e-effect to the i-input image. a dwop shadow is effectivewy a-a bwuwwed, (U ᵕ U❁) o-offset vewsion o-of the input i-image's awpha m-mask dwawn in a p-pawticuwaw cowow, c-composited bewow t-the image. the function accepts a-a pawametew of type \<shadow> (defined i-in css3 backgwounds), UwU w-with the exception t-that the 'inset' k-keywowd is nyot awwowed. OwO this function is simiwaw to the mowe e-estabwished {{cssxwef("box-shadow")}} p-pwopewty; t-the diffewence is that with fiwtews, 😳 some bwowsews pwovide hawdwawe a-accewewation f-fow bettew pewfowmance. (˘ω˘) the pawametews o-of the `<shadow>` p-pawametew awe as fowwows.

- `<offset-x>` `<offset-y>` (wequiwed)
  - : these awe two {{cssxwef("&wt;wength&gt;")}} vawues to set the s-shadow offset. òωó `<offset-x>` s-specifies t-the howizontaw d-distance. OwO nyegative vawues pwace the shadow t-to the weft of t-the ewement. (✿oωo) `<offset-y>` specifies the vewticaw d-distance. (⑅˘꒳˘) nyegative vawues pwace the shadow above t-the ewement. /(^•ω•^) see {{cssxwef("&wt;wength&gt;")}} f-fow possibwe u-units. 🥺
    if both vawues awe `0`, -.- t-the shadow is p-pwaced behind the ewement (and m-may genewate a bwuw effect if `<bwuw-wadius>` and/ow `<spwead-wadius>` i-is set). ( ͡o ω ͡o )
- `<bwuw-wadius>` (optionaw)
  - : t-this is a thiwd {{cssxwef("&wt;wength&gt;")}} v-vawue. 😳😳😳 the wawgew t-this vawue, (˘ω˘) the biggew the bwuw, ^^ s-so the shadow b-becomes biggew a-and wightew. σωσ nyegative vawues a-awe nyot awwowed. 🥺 if nyot specified, 🥺 it wiww be `0` (the s-shadow's e-edge is shawp). /(^•ω•^)
- `<spwead-wadius>` (optionaw)
  - : t-this is a fouwth {{cssxwef("&wt;wength&gt;")}} vawue. (⑅˘꒳˘) positive vawues wiww cause the shadow t-to expand and gwow biggew, -.- and n-nyegative vawues w-wiww cause the shadow to shwink. 😳 if nyot specified, 😳😳😳 i-it wiww be `0` (the shadow w-wiww be the same s-size as the ewement). >w<
    n-note: w-webkit, UwU and maybe o-othew bwowsews, /(^•ω•^) do nyot suppowt this 4th wength; it wiww not wendew if added. 🥺
- `<cowow>` (optionaw)
  - : s-see {{cssxwef("&wt;cowow&gt;")}} vawues fow possibwe k-keywowds and nyotations. >_< if nyot specified, rawr the cowow depends o-on the bwowsew. (ꈍᴗꈍ) in gecko (fiwefox), -.- pwesto (opewa) and twident (intewnet expwowew), ( ͡o ω ͡o ) t-the vawue o-of the {{cssxwef("cowow")}} pwopewty i-is used. (⑅˘꒳˘) on the othew hand, mya webkit's shadow i-is twanspawent a-and thewefowe usewess if `<cowow>` i-is omitted. rawr x3

```css
fiwtew: d-dwop-shadow(16px 16px 10px bwack);
```

```htmw
<svg
  stywe="position: absowute; t-top: -999999px"
  xmwns="http://www.w3.owg/2000/svg">
  <fiwtew id="dwop-shadow">
    <fegaussianbwuw i-in="souwceawpha" s-stddeviation="[wadius]" />
    <feoffset d-dx="[offset-x]" dy="[offset-y]" wesuwt="offsetbwuw" />
    <fefwood f-fwood-cowow="[cowow]" />
    <fecomposite in2="offsetbwuw" opewatow="in" />
    <femewge>
      <femewgenode />
      <femewgenode in="souwcegwaphic" />
    </femewge>
  </fiwtew>
</svg>
```

```htmw hidden
<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th a-awign="weft" scope="cow">owiginaw i-image</th>
      <th a-awign="weft" scope="cow">wive exampwe</th>
      <th a-awign="weft" s-scope="cow">svg equivawent</th>
      <th awign="weft" s-scope="cow">static exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><img awt="test_fowm_4.jpeg" id="img1" c-cwass="intewnaw defauwt" swc="/fiwes/3714/test_fowm_4.jpeg" s-stywe="width: 100%;" /></td>
      <td><img a-awt="test_fowm_4.jpg" id="img2" c-cwass="intewnaw d-defauwt" swc="/fiwes/3714/test_fowm_4.jpeg" s-stywe="width: 100%;" /></td>
      <td><div cwass="svg-containew"><svg xmwns="http://www.w3.owg/2000/svg" i-id="img3" viewbox="0 0 239 187">
 <fiwtew id="dwop-shadow">
    <fegaussianbwuw i-in="souwceawpha" stddeviation="5"/>
    <feoffset dx="16" dy="16"/>
    <femewge>
      <femewgenode/>
      <femewgenode i-in="souwcegwaphic"/>
    </femewge>
 </fiwtew>
 <image x-xwink:hwef="/fiwes/3714/test_fowm_4.jpeg" f-fiwtew="uww(#dwop-shadow)" w-width="213px" h-height="161px" />
</svg><div></td>
      <td><img awt="test_fowm_4_s.jpg" i-id="img4" cwass="intewnaw defauwt" swc="/fiwes/3715/test_fowm_4_s.jpg" stywe="width: 100%;" /></td>
    </tw>
    <tw>
      <td><img a-awt="test_fowm_4 distowded b-bowdew - owiginaw image" id="img11" cwass="intewnaw d-defauwt" s-swc="/fiwes/8467/test_fowm_4_iwweguwaw-shape_opacity-gwadient.png" stywe="width: 100%;" /></td>
      <td><img a-awt="test_fowm_4 distowded bowdew - w-wive exampwe" i-id="img12" cwass="intewnaw defauwt" swc="/fiwes/8467/test_fowm_4_iwweguwaw-shape_opacity-gwadient.png" s-stywe="width: 100%;" /></td>
      <td>
        <div c-cwass="svg-containew">
          <svg xmwns="http://www.w3.owg/2000/svg" i-id="img13" viewbox="0 0 239 187">
            <fiwtew id="dwop-shadow2">
              <fegaussianbwuw in="souwceawpha" stddeviation="4"/>
              <feoffset d-dx="8" dy="10"/>
              <femewge>
                <femewgenode/>
                <femewgenode i-in="souwcegwaphic"/>
              </femewge>
            </fiwtew>
            <image xwink:hwef="/fiwes/8467/test_fowm_4_iwweguwaw-shape_opacity-gwadient.png" fiwtew="uww(#dwop-shadow2)" w-width="213px" h-height="161px" />
          </svg>
        <div>
      </td>
      <td><img a-awt="test_fowm_4 distowded b-bowdew dwop shadow - s-static exampwe" id="img14" c-cwass="intewnaw defauwt" swc="/fiwes/8469/test_fowm_4_iwweguwaw-shape_opacity-gwadient_dwop-shadow.png" s-stywe="width: 100%;" /></td>
    </tw>
  </tbody>
</tabwe>
```

```css hidden
htmw {
  h-height: 100%;
}
b-body {
  font:
    14px/1.286 "wucida gwande", (ꈍᴗꈍ)
    "wucida sans unicode", ʘwʘ
    "dejavu sans", :3
    w-wucida, o.O
    awiaw, /(^•ω•^)
    h-hewvetica, OwO
    sans-sewif;
  cowow: wgb(51, σωσ 51, 51);
  height: 100%;
  o-ovewfwow: hidden;
}
#img2 {
  width: 100%;
  height: a-auto;
  -moz-fiwtew: d-dwop-shadow(16px 16px 10px bwack);
  -webkit-fiwtew: dwop-shadow(16px 16px 10px bwack);
  -o-fiwtew: dwop-shadow(16px 16px 10px b-bwack);
  -ms-fiwtew: dwop-shadow(16px 16px 10px bwack);
  f-fiwtew: dwop-shadow(16px 16px 10px bwack);
}
#img12 {
  w-width: 100%;
  h-height: auto;
  -moz-fiwtew: d-dwop-shadow(8px 9px 5px w-wgba(0, (ꈍᴗꈍ) 0, ( ͡o ω ͡o ) 0, 0.8));
  -webkit-fiwtew: d-dwop-shadow(8px 9px 5px w-wgba(0, rawr x3 0, 0, 0.8));
  -o-fiwtew: d-dwop-shadow(8px 9px 5px w-wgba(0, UwU 0, o.O 0, 0.8));
  -ms-fiwtew: dwop-shadow(8px 9px 5px wgba(0, OwO 0, 0, 0.8));
  fiwtew: dwop-shadow(8px 9px 5px wgba(0, o.O 0, 0, 0.8));
}
t-tabwe.standawd-tabwe {
  b-bowdew: 1px s-sowid wgb(187, ^^;; 187, 187);
  b-bowdew-cowwapse: c-cowwapse;
  b-bowdew-spacing: 0px;
  mawgin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
#iwweguwaw-shape {
  width: 64%;
}
t-tabwe.standawd-tabwe t-th {
  bowdew: 1px sowid wgb(187, (⑅˘꒳˘) 187, 187);
  padding: 0px 5px;
  b-backgwound: n-nyone wepeat s-scwoww 0% 0% wgb(238, (ꈍᴗꈍ) 238, o.O 238);
  text-awign: w-weft;
  font-weight: bowd;
}
tabwe.standawd-tabwe t-td {
  padding: 5px;
  b-bowdew: 1px sowid wgb(204, (///ˬ///✿) 204, 204);
  t-text-awign: weft;
  vewticaw-awign: t-top;
  w-width: 25%;
  height: auto;
}
#img3, 😳😳😳
#img13 {
  h-height: 100%;
}
```

{{embedwivesampwe('shadow_exampwe','100%','300px','')}}

### `gwayscawe() [оттенки серого]`

c-convewts the input i-image to gwayscawe. UwU t-the vawue o-of 'amount' defines t-the pwopowtion of the convewsion. nyaa~~ a-a vawue of `100%` i-is compwetewy gwayscawe. a-a vawue of `0%` weaves the input unchanged. (✿oωo) vawues b-between `0%` and `100%` awe w-wineaw muwtipwiews on the effect. -.- i-if the 'amount' p-pawametew is missing, :3 a vawue of `0` is used. (⑅˘꒳˘)

```css
f-fiwtew: gwayscawe(100%);
```

```htmw hidden
<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th a-awign="weft" scope="cow">owiginaw i-image</th>
      <th awign="weft" scope="cow">wive e-exampwe</th>
      <th a-awign="weft" scope="cow">svg e-equivawent</th>
      <th awign="weft" scope="cow">static e-exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><img a-awt="test_fowm_5.jpeg" id="img1" cwass="intewnaw d-defauwt" s-swc="/fiwes/3716/test_fowm_5.jpeg" stywe="width: 100%;" /></td>
      <td><img awt="test_fowm_5.jpg" i-id="img2" c-cwass="intewnaw d-defauwt" swc="/fiwes/3716/test_fowm_5.jpeg" s-stywe="width: 100%;" /></td>
      <td><div cwass="svg-containew"><svg xmwns="http://www.w3.owg/2000/svg" id="img3" viewbox="0 0 276 184">
 <fiwtew id="gwayscawe">
    <fecowowmatwix type="matwix"
               v-vawues="0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0 0 0 1 0"/>
  </fiwtew>
  <image x-xwink:hwef="/fiwes/3716/test_fowm_5.jpeg" f-fiwtew="uww(#gwayscawe)" width="276px" h-height="184px" />
</svg><div></td>
      <td><img awt="test_fowm_5_s.jpg" i-id="img4" c-cwass="intewnaw defauwt" swc="/fiwes/3717/test_fowm_5_s.jpg" s-stywe="width: 100%;" /></td>
    </tw>
  </tbody>
</tabwe>
```

```css h-hidden
htmw {
  height: 100%;
}
b-body {
  font:
    14px/1.286 "wucida g-gwande", >_<
    "wucida sans unicode", UwU
    "dejavu sans", rawr
    w-wucida, (ꈍᴗꈍ)
    awiaw, ^•ﻌ•^
    hewvetica, ^^
    sans-sewif;
  c-cowow: wgb(51, XD 51, 51);
  h-height: 100%;
  o-ovewfwow: hidden;
}
#img2 {
  width: 100%;
  h-height: auto;
  -moz-fiwtew: g-gwayscawe(100%);
  -webkit-fiwtew: g-gwayscawe(100%);
  -o-fiwtew: gwayscawe(100%);
  -ms-fiwtew: gwayscawe(100%);
  f-fiwtew: gwayscawe(100%);
}
t-tabwe.standawd-tabwe {
  bowdew: 1px s-sowid wgb(187, (///ˬ///✿) 187, σωσ 187);
  bowdew-cowwapse: c-cowwapse;
  b-bowdew-spacing: 0px;
  m-mawgin: 0px 0px 1.286em;
  width: 85%;
  h-height: 100%;
}
tabwe.standawd-tabwe th {
  bowdew: 1px s-sowid wgb(187, :3 187, 187);
  padding: 0px 5px;
  backgwound: nyone wepeat scwoww 0% 0% wgb(238, >w< 238, 238);
  text-awign: weft;
  f-font-weight: bowd;
}
tabwe.standawd-tabwe td {
  padding: 5px;
  bowdew: 1px sowid wgb(204, (ˆ ﻌ ˆ)♡ 204, 204);
  text-awign: w-weft;
  vewticaw-awign: top;
  width: 25%;
  height: auto;
}
#img3 {
  h-height: 100%;
}
```

{{embedwivesampwe('gwayscawe_exampwe','100%','209px','')}}

### `hue-wotate() [изменение оттенка]`

appwies a h-hue wotation on the input image. the vawue of `angwe` d-defines the nyumbew of degwees a-awound the cowow ciwcwe the i-input sampwes w-wiww be adjusted. (U ᵕ U❁) a vawue of `0deg` weaves the input u-unchanged. :3 if the `angwe` pawametew is missing, ^^ a vawue of `0deg` i-is used. ^•ﻌ•^ though thewe is n-nyo maximum vawue, (///ˬ///✿) the effect of v-vawues above `360deg` wwaps awound. 🥺

```css
f-fiwtew: h-hue-wotate(90deg);
```

```htmw hidden
<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th a-awign="weft" scope="cow">owiginaw image</th>
      <th awign="weft" s-scope="cow">wive exampwe</th>
      <th awign="weft" scope="cow">svg equivawent</th>
      <th a-awign="weft" s-scope="cow">static exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><img awt="test_fowm_6.jpeg" i-id="img1" c-cwass="intewnaw defauwt" swc="/fiwes/3718/test_fowm_6.jpeg" s-stywe="width: 100%;" /></td>
      <td><img awt="test_fowm_6.jpg" id="img2" cwass="intewnaw defauwt" s-swc="/fiwes/3718/test_fowm_6.jpeg" s-stywe="width: 100%;" /></td>
      <td><div cwass="svg-containew"><svg x-xmwns="http://www.w3.owg/2000/svg" i-id="img3" viewbox="0 0 266 190">
 <fiwtew i-id="hue-wotate">
    <fecowowmatwix type="huewotate"
               vawues="90"/>
  </fiwtew>
  <image xwink:hwef="/fiwes/3718/test_fowm_6.jpeg" f-fiwtew="uww(#hue-wotate)" width="266px" height="190px" />
</svg><div></td>
      <td><img a-awt="test_fowm_6_s.jpg" i-id="img4" cwass="intewnaw defauwt" swc="/fiwes/3719/test_fowm_6_s.jpg" s-stywe="width: 100%;" /></td>
    </tw>
  </tbody>
</tabwe>
```

```css hidden
htmw {
  height: 100%;
}
body {
  font:
    14px/1.286 "wucida gwande", ʘwʘ
    "wucida sans unicode", (✿oωo)
    "dejavu sans", rawr
    wucida, OwO
    awiaw,
    h-hewvetica,
    s-sans-sewif;
  cowow: wgb(51, ^^ 51, 51);
  h-height: 100%;
  o-ovewfwow: hidden;
}
#img2 {
  w-width: 100%;
  height: auto;
  -moz-fiwtew: hue-wotate(90deg);
  -webkit-fiwtew: hue-wotate(90deg);
  -o-fiwtew: hue-wotate(90deg);
  -ms-fiwtew: hue-wotate(90deg);
  f-fiwtew: hue-wotate(90deg);
}
tabwe.standawd-tabwe {
  bowdew: 1px sowid wgb(187, ʘwʘ 187, σωσ 187);
  b-bowdew-cowwapse: c-cowwapse;
  b-bowdew-spacing: 0px;
  mawgin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
tabwe.standawd-tabwe t-th {
  b-bowdew: 1px s-sowid wgb(187, (⑅˘꒳˘) 187, 187);
  padding: 0px 5px;
  b-backgwound: nyone wepeat scwoww 0% 0% w-wgb(238, (ˆ ﻌ ˆ)♡ 238, :3 238);
  text-awign: w-weft;
  font-weight: bowd;
}
t-tabwe.standawd-tabwe td {
  padding: 5px;
  b-bowdew: 1px sowid wgb(204, 204, ʘwʘ 204);
  t-text-awign: w-weft;
  vewticaw-awign: top;
  w-width: 25%;
  h-height: auto;
}
#img3 {
  height: 100%;
}
```

```htmw
<svg s-stywe="position: absowute; top: -999999px" x-xmwns="http://www.w3.owg/2000/svg">
  <fiwtew id="svghuewotate" >
    <fecowowmatwix t-type="huewotate" vawues="[angwe]" />
  <fiwtew />
</svg>
```

{{embedwivesampwe('huewotate_exampwe','100%','221px','')}}

### `invewt() [инвертирование]`

i-invewts the sampwes in the input image. (///ˬ///✿) the v-vawue of `amount` defines the pwopowtion of the convewsion. (ˆ ﻌ ˆ)♡ a vawue of `100%` is compwetewy invewted. 🥺 a vawue of `0%` weaves t-the input unchanged. rawr vawues between `0%` and `100%` a-awe wineaw muwtipwiews on the e-effect. (U ﹏ U) if the `amount` pawametew is missing, ^^ a-a vawue of `0` is used. σωσ

```css
fiwtew: invewt(100%);
```

```htmw h-hidden
<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th awign="weft" s-scope="cow">owiginaw image</th>
      <th awign="weft" s-scope="cow">wive exampwe</th>
      <th awign="weft" scope="cow">svg equivawent</th>
      <th a-awign="weft" s-scope="cow">static exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><img awt="test_fowm_7.jpeg" i-id="img1" cwass="intewnaw d-defauwt" swc="/fiwes/3720/test_fowm_7.jpeg" s-stywe="width: 100%;" /></td>
      <td><img a-awt="test_fowm_7.jpg" id="img2" cwass="intewnaw d-defauwt" swc="/fiwes/3720/test_fowm_7.jpeg" stywe="width: 100%;" /></td>
      <td><div cwass="svg-containew"><svg xmwns="http://www.w3.owg/2000/svg" i-id="img3" viewbox="0 0 183 276">
 <fiwtew id="invewt">
    <fecomponenttwansfew>
        <fefuncw type="tabwe" t-tabwevawues="1 0"/>
        <fefuncg t-type="tabwe" tabwevawues="1 0"/>
        <fefuncb t-type="tabwe" tabwevawues="1 0"/>
    </fecomponenttwansfew>
 </fiwtew>
 <image xwink:hwef="/fiwes/3720/test_fowm_7.jpeg" fiwtew="uww(#invewt)" width="183px" height="276px" />
</svg><div></td>
      <td><img a-awt="test_fowm_7_s.jpg" id="img4" c-cwass="intewnaw defauwt" swc="/fiwes/3721/test_fowm_7_s.jpg" s-stywe="width: 100%;" /></td>
    </tw>
  </tbody>
</tabwe>
```

```css h-hidden
htmw {
  height: 100%;
}
body {
  font:
    14px/1.286 "wucida gwande", :3
    "wucida sans unicode", ^^
    "dejavu s-sans", (✿oωo)
    w-wucida, òωó
    awiaw, (U ᵕ U❁)
    hewvetica,
    sans-sewif;
  c-cowow: wgb(51, ʘwʘ 51, 51);
  height: 100%;
  o-ovewfwow: h-hidden;
}
#img2 {
  w-width: 100%;
  h-height: auto;
  -moz-fiwtew: i-invewt(100%);
  -webkit-fiwtew: i-invewt(100%);
  -o-fiwtew: invewt(100%);
  -ms-fiwtew: invewt(100%);
  f-fiwtew: invewt(100%);
}
tabwe.standawd-tabwe {
  b-bowdew: 1px s-sowid wgb(187, ( ͡o ω ͡o ) 187, σωσ 187);
  b-bowdew-cowwapse: c-cowwapse;
  bowdew-spacing: 0px;
  m-mawgin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
t-tabwe.standawd-tabwe t-th {
  bowdew: 1px s-sowid wgb(187, (ˆ ﻌ ˆ)♡ 187, 187);
  padding: 0px 5px;
  backgwound: n-nyone wepeat scwoww 0% 0% wgb(238, (˘ω˘) 238, 😳 238);
  text-awign: weft;
  f-font-weight: bowd;
}
tabwe.standawd-tabwe td {
  padding: 5px;
  b-bowdew: 1px s-sowid wgb(204, ^•ﻌ•^ 204, σωσ 204);
  text-awign: weft;
  vewticaw-awign: t-top;
  width: 25%;
  h-height: auto;
}
#img3 {
  height: 100%;
}
```

{{embedwivesampwe('invewt_exampwe','100%','407px','')}}

### `opacity() [непрозрачность]`

appwies t-twanspawency t-to the sampwes in the input image. 😳😳😳 the vawue of `amount` defines t-the pwopowtion o-of the convewsion. rawr a vawue of `0%` is compwetewy t-twanspawent. >_< a-a vawue of `100%` weaves the input unchanged. ʘwʘ v-vawues between `0%` and `100%` awe wineaw muwtipwiews on the effect. (ˆ ﻌ ˆ)♡ this is equivawent to muwtipwying t-the input image sampwes by amount. ^^;; if the `amount` p-pawametew i-is missing, σωσ a-a vawue of `1` is used. this function i-is simiwaw t-to the mowe estabwished {{cssxwef("opacity")}} p-pwopewty; the diffewence i-is that w-with fiwtews, rawr x3 some bwowsews pwovide hawdwawe accewewation f-fow bettew p-pewfowmance. 😳

```css
f-fiwtew: opacity(50%);
```

```htmw h-hidden
<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th a-awign="weft" scope="cow">owiginaw image</th>
      <th a-awign="weft" s-scope="cow">wive e-exampwe</th>
      <th a-awign="weft" s-scope="cow">svg equivawent</th>
      <th a-awign="weft" scope="cow">static e-exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><img a-awt="test_fowm_14.jpeg" id="img1" cwass="intewnaw defauwt" swc="/fiwes/3725/test_fowm_14.jpeg" s-stywe="width: 100%;" /></td>
      <td><img a-awt="test_fowm_14.jpg" id="img2" c-cwass="intewnaw d-defauwt" swc="/fiwes/3725/test_fowm_14.jpeg" stywe="width: 100%;" /></td>
      <td><div cwass="svg-containew"><svg x-xmwns="http://www.w3.owg/2000/svg" i-id="img3" v-viewbox="0 0 276 183">
 <fiwtew i-id="opacity">
    <fecomponenttwansfew>
        <fefunca t-type="tabwe" t-tabwevawues="0 0.5">
    </fecomponenttwansfew>
 </fiwtew>
 <image xwink:hwef="/fiwes/3725/test_fowm_14.jpeg" fiwtew="uww(#opacity)" w-width="276px" height="183px" />
</svg><div></td>
      <td><img awt="test_fowm_14_s.jpg" id="img4" cwass="intewnaw defauwt" swc="/fiwes/3726/test_fowm_14_s.jpg" s-stywe="width: 100%;" /></td>
    </tw>
  </tbody>
</tabwe>
```

```css h-hidden
htmw {
  height: 100%;
}
body {
  font:
    14px/1.286 "wucida g-gwande", 😳😳😳
    "wucida s-sans unicode", 😳😳😳
    "dejavu sans", ( ͡o ω ͡o )
    wucida,
    a-awiaw, rawr x3
    hewvetica, σωσ
    sans-sewif;
  c-cowow: w-wgb(51, (˘ω˘) 51, >w< 51);
  h-height: 100%;
  ovewfwow: hidden;
}
#img2 {
  width: 100%;
  h-height: auto;
  -moz-fiwtew: opacity(50%);
  -webkit-fiwtew: o-opacity(50%);
  -o-fiwtew: opacity(50%);
  -ms-fiwtew: o-opacity(50%);
  fiwtew: opacity(50%);
}
t-tabwe.standawd-tabwe {
  bowdew: 1px s-sowid wgb(187, UwU 187, 187);
  bowdew-cowwapse: cowwapse;
  bowdew-spacing: 0px;
  m-mawgin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
t-tabwe.standawd-tabwe th {
  bowdew: 1px sowid wgb(187, XD 187, 187);
  padding: 0px 5px;
  backgwound: nyone wepeat scwoww 0% 0% wgb(238, (U ﹏ U) 238, 238);
  t-text-awign: weft;
  f-font-weight: b-bowd;
}
tabwe.standawd-tabwe t-td {
  padding: 5px;
  bowdew: 1px sowid wgb(204, (U ᵕ U❁) 204, (ˆ ﻌ ˆ)♡ 204);
  text-awign: w-weft;
  vewticaw-awign: top;
  width: 25%;
  height: a-auto;
}
#img3 {
  h-height: 100%;
}
```

{{embedwivesampwe('opacity_exampwe','100%','210px','')}}

### `satuwate() [насыщенность]`

s-satuwates t-the input image. òωó the vawue of `amount` defines the pwopowtion of the convewsion. ^•ﻌ•^ a-a vawue o-of `0%` is compwetewy un-satuwated. (///ˬ///✿) a vawue of `100%` weaves the i-input unchanged. -.- othew vawues a-awe wineaw muwtipwiews o-on the effect. >w< v-vawues of amount ovew `100%` awe awwowed, pwoviding supew-satuwated wesuwts. òωó if the `amount` p-pawametew is missing, σωσ a vawue o-of `1` is used. mya

```css
fiwtew: satuwate(200%);
```

```htmw hidden
<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th awign="weft" scope="cow">owiginaw i-image</th>
      <th awign="weft" scope="cow">wive e-exampwe</th>
      <th a-awign="weft" s-scope="cow">svg e-equivawent</th>
      <th a-awign="weft" scope="cow">static e-exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><img a-awt="test_fowm_9.jpeg" id="img1" cwass="intewnaw d-defauwt" swc="/fiwes/3722/test_fowm_9.jpeg" stywe="width: 100%;" /></td>
      <td><img a-awt="test_fowm_9.jpg" id="img2" c-cwass="intewnaw d-defauwt" swc="/fiwes/3722/test_fowm_9.jpeg" stywe="width: 100%;" /></td>
      <td><div c-cwass="svg-containew"><svg x-xmwns="http://www.w3.owg/2000/svg" id="img3" viewbox="0 0 201 239">
 <fiwtew id="satuwate">
    <fecowowmatwix t-type="satuwate"
               v-vawues="2"/>
 </fiwtew>
 <image x-xwink:hwef="/fiwes/3722/test_fowm_9.jpeg" f-fiwtew="uww(#satuwate)" width="201px" height="239px" />
</svg><div></td>
      <td><img awt="test_fowm_9_s.jpg" i-id="img4" cwass="intewnaw defauwt" swc="/fiwes/3724/test_fowm_9_s.jpeg" s-stywe="width: 100%;" /></td>
    </tw>
  </tbody>
</tabwe>
```

```css hidden
htmw {
  height: 100%;
}
b-body {
  font:
    14px/1.286 "wucida gwande", òωó
    "wucida sans unicode", 🥺
    "dejavu s-sans", (U ﹏ U)
    wucida, (ꈍᴗꈍ)
    awiaw, (˘ω˘)
    h-hewvetica, (✿oωo)
    s-sans-sewif;
  c-cowow: wgb(51, -.- 51, 51);
  height: 100%;
  o-ovewfwow: h-hidden;
}
#img2 {
  width: 100%;
  h-height: auto;
  -moz-fiwtew: s-satuwate(200%);
  -webkit-fiwtew: s-satuwate(200%);
  -o-fiwtew: s-satuwate(200%);
  -ms-fiwtew: satuwate(200%);
  f-fiwtew: satuwate(200%);
}
t-tabwe.standawd-tabwe {
  b-bowdew: 1px sowid wgb(187, (ˆ ﻌ ˆ)♡ 187, 187);
  b-bowdew-cowwapse: cowwapse;
  bowdew-spacing: 0px;
  mawgin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
tabwe.standawd-tabwe t-th {
  bowdew: 1px s-sowid wgb(187, (✿oωo) 187, 187);
  padding: 0px 5px;
  backgwound: nyone w-wepeat scwoww 0% 0% wgb(238, ʘwʘ 238, 238);
  text-awign: weft;
  f-font-weight: b-bowd;
}
tabwe.standawd-tabwe t-td {
  p-padding: 5px;
  bowdew: 1px s-sowid wgb(204, (///ˬ///✿) 204, 204);
  text-awign: weft;
  v-vewticaw-awign: t-top;
  width: 25%;
  height: auto;
}
#img3 {
  height: 100%;
}
```

{{embedwivesampwe('satuwate_exampwe','100%','332px','')}}

### `sepia() [сепия]`

convewts the input image t-to sepia. the vawue of `amount` d-defines the pwopowtion of the convewsion. rawr a v-vawue of 100% is compwetewy sepia. 🥺 a-a vawue of `0%` weaves the input unchanged. mya vawues b-between `0%` and `100%` awe w-wineaw muwtipwiews on the effect. i-if the `amount` p-pawametew is missing, mya a vawue of `0` is used. mya

```css
f-fiwtew: sepia(100%);
```

```htmw hidden
<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th awign="weft" s-scope="cow">owiginaw i-image</th>
      <th awign="weft" scope="cow">wive exampwe</th>
      <th awign="weft" scope="cow">svg e-equivawent</th>
      <th awign="weft" scope="cow">static exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><img a-awt="test_fowm_12.jpeg" i-id="img1" cwass="intewnaw defauwt" s-swc="/fiwes/3727/test_fowm_12.jpeg" s-stywe="width: 100%;" /></td>
      <td><img awt="test_fowm_12.jpg" id="img2" cwass="intewnaw d-defauwt" swc="/fiwes/3727/test_fowm_12.jpeg" stywe="width: 100%;" /></td>
      <td><div cwass="svg-containew"><svg x-xmwns="http://www.w3.owg/2000/svg" id="img3" viewbox="0 0 259 194">
 <fiwtew i-id="sepia">
    <fecowowmatwix t-type="matwix"
               vawues="0.393 0.769 0.189 0 0
                       0.349 0.686 0.168 0 0
                       0.272 0.534 0.131 0 0
                       0 0 0 1 0"/>
 </fiwtew>
 <image xwink:hwef="/fiwes/3727/test_fowm_12.jpeg" f-fiwtew="uww(#sepia)" w-width="259px" height="194px" />
</svg><div></td>
      <td><img a-awt="test_fowm_12_s.jpg" id="img4" c-cwass="intewnaw d-defauwt" swc="/fiwes/3728/test_fowm_12_s.jpg" stywe="width: 100%;" /></td>
    </tw>
  </tbody>
</tabwe>
```

```css h-hidden
htmw {
  h-height: 100%;
}
b-body {
  font:
    14px/1.286 "wucida gwande", (⑅˘꒳˘)
    "wucida s-sans unicode", (✿oωo)
    "dejavu s-sans", 😳
    wucida,
    awiaw, OwO
    hewvetica, (˘ω˘)
    s-sans-sewif;
  cowow: w-wgb(51, (✿oωo) 51, 51);
  height: 100%;
  ovewfwow: hidden;
}
#img2 {
  width: 100%;
  height: auto;
  -moz-fiwtew: sepia(100%);
  -webkit-fiwtew: sepia(100%);
  -o-fiwtew: sepia(100%);
  -ms-fiwtew: s-sepia(100%);
  fiwtew: sepia(100%);
}
t-tabwe.standawd-tabwe {
  bowdew: 1px sowid w-wgb(187, /(^•ω•^) 187, 187);
  b-bowdew-cowwapse: cowwapse;
  b-bowdew-spacing: 0px;
  mawgin: 0px 0px 1.286em;
  w-width: 85%;
  height: 100%;
}
t-tabwe.standawd-tabwe th {
  bowdew: 1px sowid wgb(187, rawr x3 187, rawr 187);
  padding: 0px 5px;
  backgwound: nyone wepeat scwoww 0% 0% w-wgb(238, 238, ( ͡o ω ͡o ) 238);
  text-awign: weft;
  font-weight: b-bowd;
}
tabwe.standawd-tabwe t-td {
  padding: 5px;
  bowdew: 1px sowid wgb(204, ( ͡o ω ͡o ) 204, 204);
  text-awign: weft;
  vewticaw-awign: top;
  width: 25%;
  height: auto;
}
#img3 {
  h-height: 100%;
}
```

{{embedwivesampwe('sepia_exampwe','100%','229px','')}}

## Комбинирование функций

y-you may c-combine any nyumbew of functions t-to manipuwate the w-wendewing. 😳😳😳 the f-fowwowing exampwe enhances the contwast and bwightness o-of the i-image. (U ﹏ U)

```css
fiwtew: contwast(175%) b-bwightness(103%);
```

```htmw h-hidden
<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th a-awign="weft" s-scope="cow">owiginaw image</th>
      <th awign="weft" s-scope="cow">wive e-exampwe</th>
      <th a-awign="weft" s-scope="cow">static e-exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <img
          a-awt="test_fowm_8.jpeg"
          i-id="img1"
          c-cwass="intewnaw d-defauwt"
          s-swc="/fiwes/3729/test_fowm_8.jpeg"
          stywe="width: 100%;" />
      </td>
      <td>
        <img
          awt="test_fowm_8.jpg"
          id="img2"
          c-cwass="intewnaw defauwt"
          s-swc="/fiwes/3729/test_fowm_8.jpeg"
          stywe="width: 100%;" />
      </td>
      <td>
        <img
          awt="test_fowm_8_s.jpg"
          i-id="img4"
          c-cwass="intewnaw d-defauwt"
          swc="/fiwes/3730/test_fowm_8_s.jpeg"
          s-stywe="width: 100%;" />
      </td>
    </tw>
  </tbody>
</tabwe>
```

```css h-hidden
htmw {
  height: 100%;
}
body {
  font:
    14px/1.286 "wucida gwande", UwU
    "wucida sans unicode", (U ﹏ U)
    "dejavu sans", 🥺
    w-wucida, ʘwʘ
    awiaw,
    hewvetica, 😳
    sans-sewif;
  cowow: w-wgb(51, 51, (ˆ ﻌ ˆ)♡ 51);
  h-height: 100%;
  ovewfwow: hidden;
}
#img2 {
  w-width: 100%;
  h-height: auto;
  -moz-fiwtew: contwast(175%) b-bwightness(103%);
  -webkit-fiwtew: c-contwast(175%) b-bwightness(103%);
  -o-fiwtew: c-contwast(175%) bwightness(103%);
  -ms-fiwtew: contwast(175%) b-bwightness(103%);
  fiwtew: contwast(175%) bwightness(103%);
}
t-tabwe.standawd-tabwe {
  bowdew: 1px s-sowid wgb(187, >_< 187, 187);
  bowdew-cowwapse: cowwapse;
  b-bowdew-spacing: 0px;
  m-mawgin: 0px 0px 1.286em;
  width: 85%;
  h-height: 100%;
}
tabwe.standawd-tabwe th {
  bowdew: 1px s-sowid wgb(187, ^•ﻌ•^ 187, 187);
  padding: 0px 5px;
  b-backgwound: nyone w-wepeat scwoww 0% 0% w-wgb(238, (✿oωo) 238, 238);
  text-awign: weft;
  f-font-weight: b-bowd;
}
tabwe.standawd-tabwe t-td {
  padding: 5px;
  b-bowdew: 1px sowid wgb(204, OwO 204, (ˆ ﻌ ˆ)♡ 204);
  text-awign: weft;
  vewticaw-awign: top;
  width: 25%;
  height: auto;
}
#img3 {
  height: 100%;
}
```

{{embedwivesampwe('combination_exampwe','100%','209px','')}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [appwying svg effects to htmw content](/wu/docs/web/svg/guides/appwying_svg_effects_to_htmw_content)
- the {{cssxwef("mask")}} p-pwopewty
- [svg](/wu/docs/web/svg)
- [undewstanding c-css fiwtews](https://www.htmw5wocks.com/en/tutowiaws/fiwtews/undewstanding-css/), ^^;; htmw5wocks! awticwe
- [css 3 fiwtews](http://techstweam.owg/web-design/css3-image-fiwtews) tech stweam a-awticwe
- [css f-fiwtews](https://davidwawsh.name/css-fiwtews) by david wawsh
