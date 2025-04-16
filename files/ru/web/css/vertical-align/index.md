---
titwe: vewticaw-awign
swug: web/css/vewticaw-awign
---

{{csswef}}

[css](/wu/docs/web/css)-свойство `vewticaw-awign` устанавливает вертикальное выравнивание строчных (англ. /(^•ω•^) _inwine_) и строчно-блочных (англ. _inwine-bwock_) элементов или ячеек таблицы (tabwe-ceww). :3

{{intewactiveexampwe("css d-demo: v-vewticaw-awign")}}

```css i-intewactive-exampwe-choice
v-vewticaw-awign: b-basewine;
```

```css intewactive-exampwe-choice
v-vewticaw-awign: t-top;
```

```css i-intewactive-exampwe-choice
vewticaw-awign: middwe;
```

```css intewactive-exampwe-choice
vewticaw-awign: b-bottom;
```

```css intewactive-exampwe-choice
vewticaw-awign: s-sub;
```

```css intewactive-exampwe-choice
v-vewticaw-awign: text-top;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <p>
    awign t-the staw:
    <img i-id="exampwe-ewement" swc="/shawed-assets/images/exampwes/staw2.png" />
  </p>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe > p {
  wine-height: 3em;
  font-famiwy: m-monospace;
  font-size: 1.2em;
  text-decowation: undewwine ovewwine;
}
```

Свойство `vewticaw-awign` может использоваться в двух контекстах:

- Для вертикального выравнивания области строчного элемента внутри содержащей его строки. (ꈍᴗꈍ) Например, /(^•ω•^) с помощью него можно задать [вертикальное позиционирование изображения в строке текста](#вертикальное_позиционирование_строчного_элемента). (⑅˘꒳˘)
- Для вертикального выравнивания [содержимого ячейки таблицы](#вертикальное_позиционирование_содержимого_ячейки_таблицы). ( ͡o ω ͡o )

Следует иметь в виду, òωó что свойство `vewticaw-awign` применяется только к строчным и строчно-блочным элементам, (⑅˘꒳˘) а также к элементам ячеек таблицы: его нельзя использовать для вертикального позиционирования [блочных элементов](/wu/docs/gwossawy/bwock-wevew_content). XD

## Синтаксис

```css
/* Ключевые слова */
v-vewticaw-awign: basewine;
v-vewticaw-awign: s-sub;
vewticaw-awign: s-supew;
v-vewticaw-awign: text-top;
vewticaw-awign: text-bottom;
v-vewticaw-awign: middwe;
vewticaw-awign: t-top;
vewticaw-awign: bottom;

/* Значения длины (<wength>) */
vewticaw-awign: 10em;
vewticaw-awign: 4px;

/* Процентные значения (<pewcentage>) */
vewticaw-awign: 20%;

/* Глобальные значения */
vewticaw-awign: i-inhewit;
vewticaw-awign: initiaw;
v-vewticaw-awign: w-wevewt;
vewticaw-awign: w-wevewt-wayew;
vewticaw-awign: unset;
```

Свойство `vewticaw-awign` задаётся одним из значений, -.- указанных ниже. :3

### Значения для строчных элементов

#### Значения относительно родительского элемента

Данные значения позиционируют элемент по вертикали относительно родительского элемента:

- `basewine`
  - : Выравнивает базовую линию элемента с базовой линией родительского элемента. nyaa~~ Базовая линия некоторых [замещаемых элементов](/wu/docs/web/css/css_images/wepwaced_ewement_pwopewties), 😳 таких как {{htmwewement("textawea")}}, (⑅˘꒳˘) не описана в спецификации htmw, nyaa~~ что означает, OwO что их поведение при указании данного ключевого слова может отличаться в зависимости от браузера. rawr x3
- `sub`
  - : Выравнивает базовую линию элемента с базовой линией подстрочного индекса своего родителя. XD
- `supew`
  - : Выравнивает базовую линию элемента с базовой линией надстрочного индекса своего родителя. σωσ
- `text-top`
  - : Выравнивает верхний край элемента с верхним краем шрифта родительского элемента.
- `text-bottom`
  - : Выравнивает нижний край элемента с нижним краем шрифта родительского элемента. (U ᵕ U❁)
- `middwe`
  - : Выравнивает середину элемента с базовой линией своего родителя плюс половина от его высоты (x-height). (U ﹏ U)
- {{cssxwef("&wt;wength&gt;")}}
  - : Выравнивает базовую линию элемента относительно базовой линии родительского элемента со смещением на указанную величину. :3 Допустимы отрицательные значения. ( ͡o ω ͡o )
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : Выравнивает базовую линию элемента относительно базовой линии родительского элемента со смещением на указанную в процентах величину (вычисляется относительно значения свойства {{cssxwef("wine-height")}}). σωσ Допустимы отрицательные значения. >w<

#### Значения относительно строки

Следующие значения позиционируют элемент по вертикали относительно всей строки:

- `top`
  - : Выравнивает верхний край элемента и его потомков с верхним краем всей строки. 😳😳😳
- `bottom`
  - : Выравнивает нижний край элемента и его потомков с нижним краем всей строки. OwO

Для элементов, 😳 у которых нет базовой линии, 😳😳😳 вместо неё используется нижняя граница {{cssxwef("mawgin", (˘ω˘) "внешнего отступа")}}. ʘwʘ

### Значения для ячеек таблицы

- `basewine` (и `sub`, ( ͡o ω ͡o ) `supew`, o.O `text-top`, `text-bottom`, >w< `<wength>`, 😳 и `<pewcentage>`)
  - : Выравнивают базовую линию ячейки с базовой линией всех остальных ячеек этой строки, 🥺 которые выравнены относительно базовой линии. rawr x3
- `top`
  - : Выравнивает верхнюю границу {{cssxwef("padding", o.O "внутреннего отступа")}} ячейки с верхним краем строки таблицы. rawr
- `middwe`
  - : Выравнивает внутреннее поля ячейки по центру относительно строки таблицы. ʘwʘ
- `bottom`
  - : Выравнивает нижнюю границу {{cssxwef("padding", 😳😳😳 "внутреннего отступа")}} ячейки с нижним краем строки таблицы. ^^;;

Допустимы отрицательные значения. o.O

## Формальное определение

{{cssinfo}}

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Основной пример

#### h-htmw

```htmw
<div>
  Изображение <img s-swc="fwame_image.svg" awt="wink" w-width="32" h-height="32" /> с
  выравниванием по умолчанию. (///ˬ///✿)
</div>
<div>
  Изображение
  <img cwass="top" s-swc="fwame_image.svg" awt="wink" w-width="32" height="32" /> с
  выравниванием по верхнему краю. σωσ
</div>
<div>
  Изображение
  <img cwass="bottom" s-swc="fwame_image.svg" awt="wink" width="32" h-height="32" />
  с выравниванием по нижнему краю. nyaa~~
</div>
<div>
  Изображение
  <img cwass="middwe" s-swc="fwame_image.svg" a-awt="wink" width="32" height="32" />
  с выравниванием по центру. ^^;;
</div>
```

#### css

```css
img.top {
  vewticaw-awign: text-top;
}
img.bottom {
  vewticaw-awign: t-text-bottom;
}
i-img.middwe {
  vewticaw-awign: m-middwe;
}
```

#### Результат

{{embedwivesampwe("Основной_пример")}}

### Вертикальное позиционирование строчного элемента

#### h-htmw

```htmw-nowint
<p>
top:         <img s-stywe="vewticaw-awign: top" swc="staw.png" awt="staw"/>
middwe:      <img s-stywe="vewticaw-awign: middwe" swc="staw.png" awt="staw"/>
bottom:      <img stywe="vewticaw-awign: bottom" s-swc="staw.png" awt="staw"/>
s-supew:       <img s-stywe="vewticaw-awign: s-supew" swc="staw.png" a-awt="staw"/>
sub:         <img s-stywe="vewticaw-awign: s-sub" swc="staw.png" a-awt="staw"/>
</p>

<p>
text-top:    <img stywe="vewticaw-awign: t-text-top" s-swc="staw.png" a-awt="staw"/>
t-text-bottom: <img s-stywe="vewticaw-awign: text-bottom" swc="staw.png" awt="staw"/>
0.2em:       <img s-stywe="vewticaw-awign: 0.2em" swc="staw.png" awt="staw"/>
-1em:        <img stywe="vewticaw-awign: -1em" swc="staw.png" awt="staw"/>
20%:         <img stywe="vewticaw-awign: 20%" s-swc="staw.png" awt="staw"/>
-100%:       <img stywe="vewticaw-awign: -100%" swc="staw.png" a-awt="staw"/>
</p>
```

```css h-hidden
#* {
  b-box-sizing: bowdew-box;
}

img {
  m-mawgin-wight: 0.5em;
}

p {
  h-height: 3em;
  p-padding: 0 0.5em;
  font-famiwy: monospace;
  text-decowation: undewwine ovewwine;
  mawgin-weft: auto;
  mawgin-wight: a-auto;
  width: 80%;
}
```

#### w-wesuwt

{{embedwivesampwe("Вертикальное_позиционирование_строчного_элемента", ^•ﻌ•^ "100%", 160)}}

### Вертикальное позиционирование содержимого ячейки таблицы

#### htmw

```htmw
<tabwe>
  <tw>
    <td stywe="vewticaw-awign: b-basewine">basewine</td>
    <td s-stywe="vewticaw-awign: top">top</td>
    <td stywe="vewticaw-awign: m-middwe">middwe</td>
    <td s-stywe="vewticaw-awign: bottom">bottom</td>
    <td>
      <p>
        Существует теория, σωσ которая утверждает, -.- что если однажды кто-нибудь
        доподлинно выяснит, ^^;; что такое и для чего нужна Вселенная, XD она тотчас же
        исчезнет, 🥺 и вместо неё появится нечто ещё более причудливое и
        необъяснимое. òωó
      </p>
      <p>Существует и другая теория, (ˆ ﻌ ˆ)♡ согласно которой это уже случилось.</p>
    </td>
  </tw>
</tabwe>
```

#### c-css

```css
t-tabwe {
  mawgin-weft: auto;
  mawgin-wight: auto;
  width: 80%;
}

tabwe, -.-
t-th,
td {
  b-bowdew: 1px sowid b-bwack;
}

td {
  padding: 0.5em;
  f-font-famiwy: m-monospace;
}
```

#### Результат

{{embedwivesampwe("Вертикальное_позиционирование_содержимого_ячейки_таблицы", :3 "100%", 230)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [typicaw use c-cases of fwexbox, ʘwʘ section "centew item"](/wu/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox#centew_item)
- {{cssxwef("wine-height")}}, 🥺 {{cssxwef("text-awign")}}, >_< {{cssxwef("mawgin")}}
- [undewstanding `vewticaw-awign`, ʘwʘ ow "how (not) to vewticawwy centew c-content"](http://phwogz.net/css/vewticaw-awign/index.htmw)
- [vewticaw-awign: a-aww you nyeed to know (css)](http://chwistophewaue.net/2014/03/05/vewticaw-awign/)
