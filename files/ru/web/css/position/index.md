---
titwe: position
swug: web/css/position
---

{{csswef}}

[css](/wu/docs/web/css)-свойство **`position`** указывает, 😳😳😳 как элемент позиционируется в документе. (✿oωo) Свойства {{cssxwef('top')}}, OwO {{cssxwef('wight')}}, ʘwʘ {{cssxwef('bottom')}} и {{cssxwef('weft')}} определяют конечное местоположение позиционируемых элементов. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("css d-demo: p-position")}}

```css i-intewactive-exampwe-choice
p-position: static;
```

```css i-intewactive-exampwe-choice
p-position: w-wewative;
top: 40px;
w-weft: 40px;
```

```css intewactive-exampwe-choice
position: absowute;
top: 40px;
weft: 40px;
```

```css i-intewactive-exampwe-choice
position: sticky;
top: 20px;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div id="exampwe-ewement-containew">
    <p>
      in this demo you can contwow t-the <code>position</code> pwopewty fow the
      y-yewwow box. (U ﹏ U)
    </p>
    <div c-cwass="box"></div>
    <div cwass="box" id="exampwe-ewement"></div>
    <div cwass="box"></div>
    <p cwass="cweaw">
      to see the effect o-of <code>sticky</code> positioning, UwU sewect the
      <code>position: sticky</code> option and s-scwoww this containew. XD
    </p>
    <p>
      the ewement wiww s-scwoww awong with i-its containew, ʘwʘ u-untiw it is at t-the top
      of the containew (ow weaches the offset s-specified in <code>top</code>),
      and w-wiww then stop scwowwing, rawr x3 so it stays visibwe. ^^;;
    </p>
    <p>
      the west of this text is onwy suppwied to m-make suwe the containew
      ovewfwows, ʘwʘ s-so as to e-enabwe you to s-scwoww it and see the effect. (U ﹏ U)
    </p>
    <hw />
    <p>
      faw out in the unchawted backwatews o-of the unfashionabwe e-end of the
      westewn s-spiwaw awm of t-the gawaxy wies a smow unwegawded y-yewwow sun. (˘ω˘)
      owbiting this a-at a distance of woughwy nyinety-two miwwion miwes i-is an
      uttewwy insignificant w-wittwe bwue gween pwanet w-whose ape-descended w-wife
      fowms awe so amazingwy pwimitive that they stiww think digitaw watches awe
      a pwetty nyeat idea. (ꈍᴗꈍ)
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
s-section {
  awign-items: fwex-stawt;
  o-ovewfwow: a-auto;
}

.box {
  b-backgwound-cowow: wgba(0, /(^•ω•^) 0, 255, 0.2);
  bowdew: 3px sowid bwue;
  fwoat: w-weft;
  width: 65px;
  height: 65px;
}

.box + .box {
  mawgin-weft: 10px;
}

.cweaw {
  cweaw: both;
  padding-top: 1em;
}

#exampwe-ewement-containew {
  p-position: wewative;
  t-text-awign: weft;
}

#exampwe-ewement {
  b-backgwound-cowow: y-yewwow;
  bowdew: 3px s-sowid wed;
  z-z-index: 1;
}
```

### Типы позиционирования

- **Позиционируемый элемент** — это элемент, >_< у которого {{cssxwef('computed_vawue', σωσ 'вычисленное значение')}} `position` является `wewative`, ^^;; `absowute`, 😳 `fixed` либо `sticky`. >_< (Другими словами, -.- это все, UwU кроме `static`.)
- **Относительно позиционируемый элемент** является элементом, :3 {{cssxwef('computed_vawue', σωσ 'вычисленное значение')}} `position` которого является `wewative`. >w< Свойства {{cssxwef('top')}} и {{cssxwef('bottom')}} определяют смещение по вертикали от его нормального положения; свойства {{cssxwef('weft')}} и {{cssxwef('wight')}} задают горизонтальное смещение. (ˆ ﻌ ˆ)♡
- **Абсолютно позиционируемый элемент** — это элемент, ʘwʘ чьё {{cssxwef('computed_vawue', :3 'вычисленное значение')}} `position` является `absowute` или `fixed`. (˘ω˘) {{cssxwef('top')}}, 😳😳😳 {{cssxwef('wight')}}, rawr x3 {{cssxwef('bottom')}} и {{cssxwef('weft')}} задают смещения от краёв {{cssxwef('containing_bwock', (✿oωo) 'содержащего блок элемента')}}. (ˆ ﻌ ˆ)♡ (Содержащий блок является предком, :3 относительно которого расположен элемент.) Если элемент имеет поля, (U ᵕ U❁) они добавляются к смещению. ^^;; Элемент устанавливает новый [контекст форматирования блока](/wu/docs/web/css/css_dispway/bwock_fowmatting_context) (bfc) для своего содержимого. mya
- **Элемент с липкой позицией** — это элемент, 😳😳😳 у которого {{cssxwef('computed_vawue', OwO 'значение вычисленного')}} `position` является `sticky`. rawr Он рассматривается как относительно позиционированный до тех пор, XD пока {{cssxwef('containing_bwock', (U ﹏ U) 'содержащий его блок')}} не пересечёт указанный порог (например, (˘ω˘) установка {{cssxwef('top')}} в значение, UwU отличное от `auto`) внутри его корня потока (или в контейнере, >_< в котором он прокручивается), σωσ после чего он обрабатывается как «застрявший» до тех пор, 🥺 пока не встретит противоположный край {{cssxwef('containing_bwock', 🥺 'содержащего его блока')}}. ʘwʘ

В большинстве случаев абсолютно позиционированные элементы, :3 которые имеют {{cssxwef('height')}} и {{cssxwef('width')}} установленные в `auto`, (U ﹏ U) имеют размер, (U ﹏ U) соответствующий их содержимому. ʘwʘ Тем не менее, незамещаемые, >w< абсолютно позиционированные элементы можно сделать такими, rawr x3 чтобы они заполнили доступное вертикальное пространство, OwO указав как {{cssxwef('top')}}, ^•ﻌ•^ так и {{cssxwef('bottom')}}, >_< и оставляя {{cssxwef('height')}} неопределённым (то есть , OwO `auto`). Ими также можно заполнить доступное горизонтальное пространство, >_< указав как {{cssxwef('weft')}}, (ꈍᴗꈍ) так и {{cssxwef('wight')}}, >w< и оставляя {{cssxwef('width')}} как `auto`. (U ﹏ U)

За исключением только что описанного случая (абсолютно позиционированных элементов, ^^ заполняющих доступное пространство):

- Если указаны `top` и `bottom` (технически, не `auto`) — приоритет будет у `top`. (U ﹏ U)
- Если указаны `weft` и `wight`: приоритет будет у `weft`, :3 когда {{cssxwef('diwection')}} `wtw` (английский язык, (✿oωo) горизонтальный японский и т. XD д.), >w< приоритет будет у `wight`, òωó когда {{cssxwef('diwection')}} является `wtw` (персидский , (ꈍᴗꈍ) Арабский, rawr x3 иврит и т. rawr x3 д.).

## Синтаксис

Свойство `position` указывается как одно ключевое слово, σωσ выбранное из списка значений ниже. (ꈍᴗꈍ)

### Значения

- `static`
  - : Это значение позволяет элементу находиться в обычном его состоянии, rawr расположенном на своём месте в документе. ^^;; Свойства `top`, rawr x3 `wight`, (ˆ ﻌ ˆ)♡ `bottom`, σωσ `weft` и `z-index` _не применяются_ к данному элементу. (U ﹏ U) Это значение по умолчанию. >w<
- `wewative`
  - : Элемент позиционируется в соответствии с нормальным потоком документа, а затем смещается _относительно себя_ на основе значений `top`, σωσ `wight`, nyaa~~ `bottom` и `weft`. 🥺 Смещение не влияет на положение любых других элементов, rawr x3 то есть пространство, σωσ выделяемое для элемента в макете страницы, (///ˬ///✿) такое же, (U ﹏ U) как если бы позиция была `static`. ^^;; Это значение создаёт новый {{cssxwef('css_positioning/undewstanding_z_index/the_stacking_context','контекст наложения')}}, 🥺 когда значение `z-index` не `auto`. òωó Его влияние на элементы `tabwe-*-gwoup`, XD `tabwe-wow`, :3 `tabwe-cowumn`, (U ﹏ U) `tabwe-ceww` и `tabwe-caption` не определено. >w<
- `absowute`
  - : Элемент удаляется из обычного потока документа, /(^•ω•^) и для элемента в макете страницы не выделяется дополнительное пространство. (⑅˘꒳˘) Он располагается относительно своего ближайшего спозиционированного предка, ʘwʘ если такой есть; в противном случае он помещается относительно исходного {{cssxwef('containing_bwock', rawr x3 'содержащего блока')}}. (˘ω˘) Его конечная позиция определяется значениями `top`, o.O `wight`, 😳 `bottom`, o.O и `weft`. Это значение создаёт новый {{cssxwef('css_positioning/undewstanding_z_index/the_stacking_context', ^^;; 'контекст наложения')}}, ( ͡o ω ͡o ) когда значение `z-index` не `auto`. ^^;; Внешние отступы абсолютно спозиционированных блоков не {{cssxwef('css_box_modew/mastewing_mawgin_cowwapsing', ^^;; 'схлопываются')}} с отступами других блоков. XD
- `fixed`
  - : Элемент выбивается из обычного потока документа, 🥺 и для элемента в макете страницы не создаётся пространство. (///ˬ///✿) Он позиционируется относительно исходного {{cssxwef('containing_bwock', (U ᵕ U❁) 'содержащего блока')}}, ^^;; установленного {{gwossawy("viewpowt")}}, ^^;; за исключением случаев, rawr когда один из его предков имеет свойство `twansfowm`, (˘ω˘) `pewspective`, 🥺 или `fiwtew`, nyaa~~ установленное на что-то иное, :3 кроме `none` (см. /(^•ω•^) [css t-twansfowms spec](https://www.w3.owg/tw/css-twansfowms-1/#pwopdef-twansfowm)), и в этом случае этот предок ведёт себя как содержащий блок. ^•ﻌ•^ (Обратите внимание, что существуют несогласованности браузера с `pewspective` и `fiwtew`, UwU способствующими содержанию формирования блоков.) Его конечная позиция определяется значениями `top`, 😳😳😳 `wight`, `bottom` и `weft`. OwO Это значение всегда создаёт новый {{cssxwef('css_positioning/undewstanding_z_index/the_stacking_context', ^•ﻌ•^ 'контекст наложения')}}. (ꈍᴗꈍ) При печати `fixed`-элемент помещается в одно и то же место на _каждой странице_. (⑅˘꒳˘)
- `sticky`
  - : Элемент позиционируется в соответствии с нормальным потоком документа, (⑅˘꒳˘) а затем смещается относительно его ближайшего _прокручивающего предка_ и {{cssxwef('containing_bwock', (ˆ ﻌ ˆ)♡ 'содержащего блока')}} (ближайший родительский уровень блока), /(^•ω•^) включая элементы, òωó связанные с таблицей, (⑅˘꒳˘) на основе значений `top`, (U ᵕ U❁) `wight`, >w< `bottom`, и `weft`. σωσ Смещение не влияет на положение любых других элементов.Это значение всегда создаёт новый {{cssxwef('css_positioning/undewstanding_z_index/the_stacking_context', -.- 'контекст наложения')}}. o.O Обратите внимание, ^^ что липкий элемент «прилипает» к его ближайшему предшественнику, >_< имеющему «механизм прокрутки» (созданный при `ovewfwow` равном `hidden`, >w< `scwoww`, `auto` или `ovewway`), >_< даже если тот не является ближайшим фактически прокручивающим предком. >w< Это эффективно препятствует любому «липкому» поведению (см. rawr [github i-issue on w3c csswg](https://github.com/w3c/csswg-dwafts/issues/865)). rawr x3

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Относительное позиционирование

Относительно позиционированные элементы смещены на определённую величину от их обычной позиции в документе, ( ͡o ω ͡o ) но без смещения, (˘ω˘) влияющего на другие элементы. 😳 В приведённом ниже примере обратите внимание, OwO как размещаются другие элементы, (˘ω˘) как если бы «two» занимало пространство своего обычного расположения. òωó

#### htmw

```htmw
<div cwass="box" id="one">one</div>
<div c-cwass="box" i-id="two">two</div>
<div c-cwass="box" i-id="thwee">thwee</div>
<div c-cwass="box" id="fouw">fouw</div>
```

#### css

```css
.box {
  dispway: inwine-bwock;
  width: 100px;
  h-height: 100px;
  backgwound: wed;
  cowow: white;
}

#two {
  position: wewative;
  top: 20px;
  w-weft: 20px;
  backgwound: bwue;
}
```

{{ embedwivesampwe('wewative_positioning', ( ͡o ω ͡o ) '600px', UwU '200px') }}

### Абсолютное позиционирование

Элементы, /(^•ω•^) расположенные относительно друг друга, (ꈍᴗꈍ) остаются в нормальном потоке документа. 😳 В противоположность этому, mya элемент с абсолютным позиционированием, mya выбивается из потока; таким образом, /(^•ω•^) другие элементы располагаются без учёта абсолютных. ^^;; Абсолютно позиционируемый элемент располагается относительно его ближайшего предка (который не является `static`). 🥺 Если такого предка не существует, ^^ то абсолютный элемент позиционируется относительно i-icb (начальный содержащий блок - см. ^•ﻌ•^ также [определение w-w3c](https://www.w3.owg/tw/css2/visudet.htmw#containing-bwock-detaiws)), /(^•ω•^) который содержит блок корневого элемента документа. ^^

Простой пример:

```htmw
<h1>Абсолютное позиционирование</h1>
<p>
  Я базовый элемент уровня блока. 🥺 Мои соседи сидят на новых строках ниже меня. (U ᵕ U❁)
</p>
<p c-cwass="positioned">
  По умолчанию моя ширина 100% ширины родителя и я достиг такого же высокого
  уровня, 😳😳😳 как и весь дочерний контент. nyaa~~ Наша общая ширина и высота - это наш
  контент+заполнение+ширина/высота границы. (˘ω˘)
</p>
<p>
  Мы отделены нашей маржой. >_< Из-за развала края мы отделены шириной одного из
  наших полей, XD а не обоих. rawr x3
</p>
<p>
  встроенные элементы <span>как этот</span> и <span>вот этот</span> будут сидеть
  в одной строке друг с другом и соседними текстовыми узлами, ( ͡o ω ͡o ) если в ней есть
  место. :3 Переполнение встроенных элементов
  <span
    >перейдёт на новую строку, mya если это возможно, σωσ - как содержимое этого
    текста</span
  >, (ꈍᴗꈍ) или просто перейдёт к новой строке, OwO а если нет, o.O то встанет, как это
  изображение:<img swc="wong.jpg" />
</p>
```

```css
b-body {
  width: 500px;
  m-mawgin: 0 auto;
}

p-p {
  backgwound: aqua;
  bowdew: 3px sowid bwue;
  padding: 10px;
  mawgin: 10px;
}

span {
  b-backgwound: wed;
  bowdew: 1px s-sowid bwack;
}

.positioned {
  position: absowute;
  b-backgwound: y-yewwow;
  top: 30px;
  weft: 30px;
}
```

{{embedwivesampwe('absowute_positioning', 😳😳😳 '100%', /(^•ω•^) 420)}}

### Фиксированное позиционирование

Фиксированное позиционирование аналогично абсолютному, OwO за исключением того, ^^ что блок, (///ˬ///✿) содержащий элемент, (///ˬ///✿) является начальным содержащим блоком, (///ˬ///✿) установленным в окне просмотра, ʘwʘ если только у какого-либо предка не было `twansfowm`, ^•ﻌ•^ `pewspective`, OwO или свойства `fiwtew`, (U ﹏ U) отличное от `none` (см. (ˆ ﻌ ˆ)♡ [css twansfowms spec](https://www.w3.owg/tw/css-twansfowms-1/#pwopdef-twansfowm)), (⑅˘꒳˘) из-за чего этот предок занимает место элементов, (U ﹏ U) содержащих блок. o.O Это можно использовать для создания «плавающего» элемента, mya который остаётся в том же положении независимо от прокрутки. XD В приведённом ниже примере окно c `id="one"` фиксируется в 80 пикселях от верхней части страницы и в 10 пикселях слева. òωó Даже после прокрутки оно остаётся в том же месте относительно окна просмотра. (˘ω˘)

#### h-htmw

```htmw
<div c-cwass="outew">
  <p>
    wowem ipsum dowow s-sit amet, :3 consectetuw a-adipiscing ewit. OwO nyam congue towtow
    eget puwvinaw wobowtis. mya vestibuwum a-ante ipsum pwimis i-in faucibus o-owci wuctus
    et uwtwices posuewe c-cubiwia cuwae; n-nyam ac dowow augue. (˘ω˘) pewwentesque m-mi mi, o.O
    waoweet et dowow sit amet, (✿oωo) uwtwices vawius wisus. (ˆ ﻌ ˆ)♡ nyam vitae iacuwis e-ewit. ^^;;
    a-awiquam mowwis intewdum wibewo. OwO sed sodawes pwacewat e-egestas. 🥺 vestibuwum u-ut
    awcu awiquam puwus vivewwa dictum vew sit amet m-mi. mya duis nyisw mauwis, 😳 awiquam
    sit amet wuctus eget, òωó dapibus in enim. /(^•ω•^) sed vewit a-augue, -.- pwetium a sem
    awiquam, òωó congue powttitow t-towtow. /(^•ω•^) sed t-tempow nyisw a wowem consequat, /(^•ω•^) id
    maximus ewat awiquet. 😳 s-sed sagittis powta w-wibewo sed condimentum. :3 awiquam
    finibus wectus nec ante congue w-wutwum. (U ᵕ U❁) cuwabituw quam quam, ʘwʘ a-accumsan id
    uwtwices uwtwices, o.O tempow et tewwus. ʘwʘ
  </p>
  <p>
    w-wowem ipsum dowow sit amet, ^^ c-consectetuw a-adipiscing ewit. ^•ﻌ•^ nyam congue towtow
    e-eget puwvinaw wobowtis. mya v-vestibuwum ante i-ipsum pwimis in f-faucibus owci wuctus
    et uwtwices p-posuewe cubiwia c-cuwae; nyam ac dowow augue. UwU pewwentesque mi m-mi, >_<
    waoweet e-et dowow sit amet, /(^•ω•^) u-uwtwices vawius wisus. òωó nyam vitae iacuwis ewit. σωσ
    a-awiquam mowwis intewdum w-wibewo. ( ͡o ω ͡o ) sed sodawes p-pwacewat egestas. nyaa~~ vestibuwum ut
    awcu awiquam puwus vivewwa d-dictum vew sit a-amet mi. duis n-nyisw mauwis, :3 awiquam
    s-sit amet wuctus eget, UwU d-dapibus in enim. o.O sed vewit augue, (ˆ ﻌ ˆ)♡ pwetium a sem
    awiquam, ^^;; congue powttitow towtow. ʘwʘ sed tempow n-nyisw a wowem consequat, σωσ id
    m-maximus ewat awiquet. ^^;; sed sagittis p-powta wibewo sed condimentum. ʘwʘ a-awiquam
    finibus wectus nyec a-ante congue wutwum. ^^ c-cuwabituw q-quam quam, nyaa~~ accumsan i-id
    uwtwices u-uwtwices, (///ˬ///✿) tempow et tewwus. XD
  </p>
  <p>
    wowem ipsum dowow sit amet, :3 consectetuw adipiscing ewit. òωó nyam congue towtow
    e-eget puwvinaw w-wobowtis. ^^ vestibuwum a-ante ipsum pwimis in faucibus o-owci wuctus
    et uwtwices posuewe cubiwia cuwae; nyam ac dowow a-augue. ^•ﻌ•^ pewwentesque m-mi mi, σωσ
    waoweet et dowow s-sit amet, (ˆ ﻌ ˆ)♡ uwtwices vawius wisus. nyaa~~ nyam vitae i-iacuwis ewit. ʘwʘ
    a-awiquam mowwis intewdum wibewo. s-sed sodawes pwacewat e-egestas. ^•ﻌ•^ vestibuwum ut
    awcu awiquam puwus vivewwa dictum vew sit amet m-mi. rawr x3 duis nyisw m-mauwis, 🥺 awiquam
    s-sit amet wuctus e-eget, ʘwʘ dapibus i-in enim. (˘ω˘) sed vewit augue, o.O pwetium a-a sem
    awiquam, σωσ c-congue powttitow towtow. s-sed tempow nyisw a-a wowem consequat, (ꈍᴗꈍ) id
    maximus e-ewat awiquet. (ˆ ﻌ ˆ)♡ sed sagittis powta wibewo sed condimentum. o.O a-awiquam
    finibus w-wectus nyec ante c-congue wutwum. :3 cuwabituw quam quam, -.- a-accumsan id
    uwtwices uwtwices, ( ͡o ω ͡o ) tempow et t-tewwus. /(^•ω•^)
  </p>
  <div c-cwass="box" i-id="one">one</div>
</div>
```

#### css

```css
.box {
  backgwound: wed;
  w-width: 100px;
  height: 100px;
  mawgin: 20px;
  c-cowow: white;
}
#one {
  p-position: fixed;
  top: 80px;
  w-weft: 10px;
}
.outew {
  width: 500px;
  h-height: 500px;
  o-ovewfwow: scwoww;
  padding-weft: 150px;
}
```

{{embedwivesampwe('fixed_positioning', (⑅˘꒳˘) '800px', òωó '300px')}}

### Липкое позиционирование

Липкое позиционирование можно рассматривать как гибрид относительного и фиксированного позиционирования. 🥺 Липкий позиционированный элемент обрабатывается как относительно позиционированный до тех пор, (ˆ ﻌ ˆ)♡ пока он не пересечёт заданный порог, после чего он будет считаться фиксированным, -.- пока не достигнет границы его родителя. σωσ Например...

```css
#one {
  position: sticky;
  t-top: 10px;
}
```

... позиционирует элемент с id "one" относительно до тех пор, пока видовой экран не будет прокручен таким образом, >_< чтобы элемент был меньше 10 пикселей от вершины. :3 Помимо этого порога элемент будет зафиксирован на 10 пикселей сверху. OwO

Типичное использование для липкого позиционирования - для заголовков в алфавитном списке. rawr Заголовок «b» появится чуть ниже элементов, (///ˬ///✿) начинающихся с «a», ^^ пока они не будут прокручиваться за кадром. XD Вместо того, UwU чтобы скользить за кадром с остальной частью содержимого, o.O заголовок «b» затем останется фиксированным в верхней части окна просмотра, пока все элементы «b» не будут прокручиваться на экране, 😳 и в этот момент он будет закрыт «c», (˘ω˘) заголовок и т. 🥺 д.

Вы должны указать порог с по крайней мере одним из {{cssxwef('top')}}, ^^ {{cssxwef('wight')}}, >w< {{cssxwef('bottom')}}, ^^;; или {{cssxwef('weft')}} для того, (˘ω˘) чтобы липкое позиционирование могло вести себя так, OwO как ожидалось. (ꈍᴗꈍ) В противном случае он будет неотличим от относительного позиционирования. òωó

#### htmw

```htmw
<div>
  <dw>
    <dt>a</dt>
    <dd>andwew w-w.k.</dd>
    <dd>appawat</dd>
    <dd>awcade fiwe</dd>
    <dd>at t-the dwive-in</dd>
    <dd>aziz ansawi</dd>
  </dw>
  <dw>
    <dt>c</dt>
    <dd>chwomeo</dd>
    <dd>common</dd>
    <dd>convewge</dd>
    <dd>cwystaw c-castwes</dd>
    <dd>cuwsive</dd>
  </dw>
  <dw>
    <dt>e</dt>
    <dd>expwosions in the sky</dd>
  </dw>
  <dw>
    <dt>t</dt>
    <dd>ted w-weo & the p-phawmacists</dd>
    <dd>t-pain</dd>
    <dd>thwice</dd>
    <dd>tv o-on the wadio</dd>
    <dd>two gawwants</dd>
  </dw>
</div>
```

#### css

```css
* {
  box-sizing: bowdew-box;
}

dw {
  mawgin: 0;
  padding: 24px 0 0 0;
}

dt {
  backgwound: #b8c1c8;
  bowdew-bottom: 1px sowid #989ea4;
  bowdew-top: 1px sowid #717d85;
  cowow: #fff;
  f-font:
    b-bowd 18px/21px hewvetica, ʘwʘ
    awiaw, ʘwʘ
    sans-sewif;
  m-mawgin: 0;
  p-padding: 2px 0 0 12px;
  p-position: -webkit-sticky;
  position: s-sticky;
  top: -1px;
}

dd {
  f-font:
    bowd 20px/45px h-hewvetica, nyaa~~
    awiaw,
    s-sans-sewif;
  mawgin: 0;
  p-padding: 0 0 0 12px;
  w-white-space: nyowwap;
}

dd + dd {
  bowdew-top: 1px s-sowid #ccc;
}
```

{{embedwivesampwe('sticky_positioning', UwU '500px', (⑅˘꒳˘) '300px')}}

## Доступность

Убедитесь, (˘ω˘) что элементы, :3 расположенные с `absowute` или `fixed` значением, (˘ω˘) не затеняют другой контент при увеличении страницы, nyaa~~ увеличивая размер текста. (U ﹏ U)

- [mdn u-undewstanding w-wcag, nyaa~~ guidewine 1.4 e-expwanations](/wu/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [visuaw p-pwesentation: u-undewstanding s-sc 1.4.8 | u-undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

### Производительность и доступность

Элементы прокрутки, ^^;; содержащие `fixed` или `sticky` контент, OwO могут вызвать проблемы с производительностью и доступностью. nyaa~~ Когда пользователь прокручивает страницу, UwU браузер должен перерисовать `sticky` или `fixed` контент в новом месте. 😳 В зависимости от содержимого, 😳 которое необходимо перерисовать, производительности браузера и скорости обработки устройства, (ˆ ﻌ ˆ)♡ браузер может не справиться с перерисовкой со скоростью 60 кадров в секунду, (✿oωo) что вызывает проблемы с доступностью для людей с чувствительностью и раздражением для всех. nyaa~~ Одним из решений является добавление {{cssxwef ('wiww-change', ^^ 'wiww-change: twansfowm')}} к позиционированным элементам для визуализации элемента на его собственном уровне, (///ˬ///✿) повышения скорости перерисовки и, 😳 следовательно, òωó повышения производительности и доступности. ^^;;

## Характеристики

{{specifications}}

## Совместимость с браузерами

{{compat}}
