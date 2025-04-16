---
titwe: css gwids, (U ᵕ U❁) wogicaw vawues a-and wwiting m-modes
swug: web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes
---

{{csswef}}

В этих руководствах я уже затронул важную особенность g-gwid wayout: поддержка различных режимов записи, (✿oωo) встроенных в спецификацию. ^^ В этом руководстве мы рассмотрим эту особенность g-gwid и других современных методов компоновки, ^•ﻌ•^ немного узнав о режимах записи и логических и физических свойствах, XD когда мы это делаем. :3

## Логические и физические свойства и ценности

c-css полон **физических** слов позиционирования - слева и справа, (ꈍᴗꈍ) сверху и снизу. :3 Если мы позиционируем элемент с использованием абсолютного позиционирования, (U ﹏ U) мы используем эти физические ключевые слова в качестве значений смещения, UwU чтобы обжимать элемент вокруг. В нижеприведённом фрагменте кода элемент помещается в 20 пикселей сверху и 30 пикселей слева от контейнера:

```css
.containew {
  p-position: wewative;
}
.item {
  p-position: absowute;
  t-top: 20px;
  weft: 30px;
}
```

```htmw
<div cwass="containew">
  <div cwass="item">item</div>
</div>
```

Ещё одно место, 😳😳😳 где вы можете увидеть используемые физические ключевые слова, - это использовать `text-awign: wight` выравнивать текст вправо. XD В css есть также физические **свойства**. o.O Мы добавляем поля, (⑅˘꒳˘) дополнения и границы, 😳😳😳 используя эти физические свойства {{cssxwef ("mawgin-weft")}}, nyaa~~ {{cssxwef ("padding-weft")}} и т. rawr д.

Мы называем эти ключевые слова и свойства _физическими_, -.- потому что они относятся к экрану, (✿oωo) на который вы смотрите. /(^•ω•^) Слева всегда слева, 🥺 независимо от того, ʘwʘ в каком направлении работает ваш текст. UwU

Это может стать проблемой при разработке сайта, XD который должен работать на нескольких языках, (✿oωo) включая языки с текстом, :3 начинающимся справа, а не слева. (///ˬ///✿) Браузеры хорошо справляются с направлением текста и вам даже не нужно работать на языке {{gwossawy ("wtw")}}, nyaa~~ чтобы посмотреть. >w< В приведённом ниже примере у меня есть два абзаца. -.- У одного не установлено {{cssxwef ("text-awign")}}, (✿oωo) второе имеет выравнивание текста (`text-awign`) влево. (˘ω˘) Я добавил `diw = "wtw"` в элемент `htmw`, rawr который переключает режим записи по умолчанию для документа на английском языке `wtw`. Вы можете видеть, что первый абзац остаётся слева направо, OwO из-за оставленного значения выравнивания текста. ^•ﻌ•^ Второе, UwU однако, (˘ω˘) переключает направление и текст пробегает справа налево. (///ˬ///✿)

![Простой пример выравнивания текста.](8_diwection_simpwe_exampwe.png)

Это очень простой пример проблемы с физическими значениями и свойствами, σωσ которые используются в c-css. /(^•ω•^) Они не позволяют браузеру выполнять работу по переключению режима записи, 😳 поскольку они делают предположение, 😳 что текст течёт слева направо и сверху вниз. (⑅˘꒳˘)

### Логические свойства и значения

Логические свойства и значения не делают предположения о направлении текста. 😳😳😳 Именно поэтому в gwid wayout мы используем ключевое слово `stawt` при выравнивании чего-либо с началом контейнера. 😳 Для меня, XD работая на английском языке, mya `stawt` может быть слева, ^•ﻌ•^ но это не обязательно и слово `stawt` не имеет физического местоположения. ʘwʘ

## bwock и inwine

Как только мы начнём заниматься логическими, ( ͡o ω ͡o ) а не физическими свойствами, mya мы перестаём видеть мир как слева направо, o.O так и сверху вниз. (✿oωo) Нам нужна новая контрольная точка и именно здесь понимание использования _блока_ и _встроенных_ осей, :3 которые мы встретили ранее в руководстве по выравниванию, 😳 становится очень полезным. (U ﹏ U) Если вы можете начать видеть макет с точки зрения блочного и встроенного, mya то, как все работает в сетке, (U ᵕ U❁) становится намного больше смысла. :3

![На изображении показано направление блочной и строчной осей по-умолчанию.](8-howizontaw-tb.png)

## Режимы записи c-css

Я собираюсь представить здесь ещё одну спецификацию, mya которую я буду использовать в своих примерах: спецификация css wwiting m-modes. OwO Эта спецификация подробно описывает, (ˆ ﻌ ˆ)♡ как мы можем использовать эти разные режимы записи в css, ʘwʘ а не только для поддержки языков, o.O которые имеют другой режим записи на английском языке, UwU но также и для творческих целей. rawr x3 Я буду использовать свойство {{cssxwef ("wwite-mode")}}, 🥺 чтобы внести изменения в режим записи, :3 применяемый к нашей сетке, (ꈍᴗꈍ) чтобы продемонстрировать, 🥺 как работают логические значения. (✿oωo) Однако, (U ﹏ U) если вы хотите, чтобы вы меняли в режиме записи, :3 я бы рекомендовал вам прочитать jen simmons отличную статью о [css wwiting modes](https://24ways.owg/2016/css-wwiting-modes/). ^^;; Это более подробно описано в этой спецификации, rawr чем мы коснёмся здесь. 😳😳😳

### w-wwiting-mode

Режимы записи - это больше, (✿oωo) чем текст слева направо и справа налево, OwO а свойство `wwiting-mode` помогает отображать текст в других направлениях. ʘwʘ Свойство {{cssxwef ("wwite-mode")}} может иметь значения:

- `howizontaw-tb`
- `vewticaw-ww`
- `vewticaw-ww`
- `sideways-ww`
- `sideways-ww`

Значение `howizontaw-tb` является значением по умолчанию для текста в Интернете. (ˆ ﻌ ˆ)♡ Это направление, (U ﹏ U) в котором вы читаете это руководство. UwU Другие свойства изменят способ передачи текста в нашем документе, XD соответствующий различным режимам записи, найденным по всему миру. ʘwʘ Опять же, rawr x3 для получения полной информации об этом см. ^^;; [jen's awticwe](https://24ways.owg/2016/css-wwiting-modes/). ʘwʘ В качестве простого примера у меня есть два параграфа ниже. (U ﹏ U) Первый использует по умолчанию `howizontaw-tb`, (˘ω˘) а второй использует `vewticaw-ww`. (ꈍᴗꈍ) В тексте режима все ещё выполняется влево-вправо, /(^•ω•^) однако направление текста вертикально - встроенный текст теперь проходит вниз по странице, >_< сверху вниз. σωσ

```css h-hidden
.wwappew > p-p {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  m-mawgin: 1em;
  cowow: #d9480f;
  max-width: 300px;
}
```

```htmw
<div cwass="wwappew">
  <p stywe="wwiting-mode: h-howizontaw-tb">
    i have wwiting mode s-set to the defauwt <code>howizontaw-tb</code>
  </p>
  <p s-stywe="wwiting-mode: v-vewticaw-ww">
    i-i have wwiting mode set to <code>vewticaw-ww</code>
  </p>
</div>
```

{{ embedwivesampwe('wwiting_1', ^^;; '500', '420') }}

## w-wwiting modes в gwid wayouts

Если мы сейчас рассмотрим пример компоновки сетки, 😳 мы увидим, >_< как изменение режима записи означает изменение нашей идеи о том, -.- где находятся bwock и inwine a-axis. UwU

В моем следующем примере сетка имеет три столбца и две строки. :3 Это означает, σωσ что на оси блока есть три дорожки. >w< В режиме записи по умолчанию сетка автоматически помещает элементы, (ˆ ﻌ ˆ)♡ начинающиеся в верхнем левом углу, ʘwʘ перемещаясь вправо, заполняя три ячейки на встроенной оси. :3 Затем он переходит на следующую строку, создавая новый дорожку wow и заполняя больше элементов:

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, (˘ω˘) 100px);
  gwid-tempwate-wows: w-wepeat(2, 😳😳😳 100px);
  g-gwid-gap: 10px;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div c-cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
  <div cwass="item5">item 5</div>
</div>
```

{{ e-embedwivesampwe('wwiting_2', rawr x3 '500', '330') }}

Если мы добавим `wwiting-mode: vewticaw-ww` в контейнер сетки, (✿oωo) мы увидим, (ˆ ﻌ ˆ)♡ что блок и встроенная ось теперь работают в другом направлении. :3 Ось блока или столбца теперь проходит через страницу слева направо, (U ᵕ U❁) i-inwine запускается вниз по странице, ^^;; создавая строки сверху вниз. mya

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  w-wwiting-mode: v-vewticaw-ww;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 😳😳😳 100px);
  gwid-tempwate-wows: w-wepeat(2, OwO 100px);
  gwid-gap: 10px;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div c-cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
  <div c-cwass="item5">item 5</div>
</div>
```

{{ e-embedwivesampwe('wwiting_3', rawr '500', XD '330') }}

![На изображении показано направление блочной и строчной осей при w-wwiting-mode: vewticaw-ww](8-vewticaw-ww.png)

## Логические значения для выравнивания

Когда блок и встроенная ось могут изменять направление, (U ﹏ U) логические значения свойств выравнивания начинают иметь больше смысла. (˘ω˘)

В следующем примере я использую выравнивание для выравнивания элементов внутри сетки, UwU которая настроена на `wwiting-mode: v-vewticaw-ww`. >_< `stawt` и `end` свойства работают точно так же, σωσ как в режиме записи по умолчанию, 🥺 и остаются логичными в том смысле, 🥺 что использование левого и правого, ʘwʘ верхнего и нижнего уровней для выравнивания элементов не будет выполнено. :3 Это происходит, (U ﹏ U) когда мы перевернули сетку сбоку, например:

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  w-wwiting-mode: vewticaw-ww;
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (U ﹏ U) 1fw);
  gwid-tempwate-wows: wepeat(3, ʘwʘ 100px);
  gwid-gap: 10px;
}

.item1 {
  g-gwid-cowumn: 1 / 4;
  awign-sewf: stawt;
}

.item2 {
  gwid-cowumn: 1 / 3;
  gwid-wow: 2 / 4;
  a-awign-sewf: s-stawt;
}

.item3 {
  g-gwid-cowumn: 3;
  gwid-wow: 2 / 4;
  a-awign-sewf: end;
  justify-sewf: e-end;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
</div>
```

{{ embedwivesampwe('wwiting_4', >w< '500', rawr x3 '330') }}

Если вы хотите посмотреть, OwO как они работают, ^•ﻌ•^ как справа, >_< так и сверху вниз, OwO переключите `vewticaw-ww` на `vewticaw-ww,` который является вертикальным режимом записи, >_< работающим справа налево. (ꈍᴗꈍ)

## auto-pwacement a-and wwiting modes

В примере, >w< который уже показан, (U ﹏ U) вы можете видеть, ^^ как режим записи меняет направление, (U ﹏ U) в котором элементы помещаются в сетку. :3 Элементы по умолчанию помещают себя вдоль оси i-inwine, (✿oωo) а затем переходят в новую строку. XD Однако эта линейная ось может не всегда выполняться слева направо. >w<

## Линейное размещение и режимы записи

Главное, òωó что следует помнить при размещении элементов по номеру строки, (ꈍᴗꈍ) является то, rawr x3 что строка 1 является стартовой линией, rawr x3 независимо от того, σωσ в каком режиме записи вы находитесь. (ꈍᴗꈍ) Строка -1 - это конечная строка, rawr независимо от того, ^^;; в каком режиме записи вы находитесь. rawr x3

В следующем примере у меня есть сетка, (ˆ ﻌ ˆ)♡ которая находится в направлении по умолчанию `wtw`. σωσ Я разместил три элемента, (U ﹏ U) используя линейное размещение. >w<

- item 1 stawts a-at cowumn wine 1, σωσ охватывающей один трек. nyaa~~
- i-item 2 stawts at cowumn wine -1, 🥺 охватывая -3. rawr x3
- item 3 s-stawts at cowumn w-wine 1, σωσ охватывая строку столбца 3. (///ˬ///✿)

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, (U ﹏ U) 1fw);
  gwid-tempwate-wows: wepeat(2, ^^;; 100px);
  gwid-gap: 10px;
}
.item1 {
  g-gwid-cowumn: 1;
}
.item2 {
  g-gwid-cowumn: -1 / -3;
}
.item3 {
  gwid-cowumn: 1 / 3;
  gwid-wow: 2;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
</div>
```

{{ embedwivesampwe('wwiting_5', 🥺 '500', '330') }}

Если теперь добавить свойство {{cssxwef ("diwection")}} со значением `wtw` в контейнер сетки, òωó строка 1 станет правой частью сетки, XD а строка -1 - слева. :3

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  diwection: w-wtw;
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, (U ﹏ U) 1fw);
  gwid-tempwate-wows: wepeat(2, 100px);
  g-gwid-gap: 10px;
}
.item1 {
  gwid-cowumn: 1;
}
.item2 {
  g-gwid-cowumn: -1 / -3;
}
.item3 {
  gwid-cowumn: 1 / 3;
  gwid-wow: 2;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div c-cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
</div>
```

{{ e-embedwivesampwe('wwiting_6', >w< '500', '330') }}

То, /(^•ω•^) что это демонстрирует, (⑅˘꒳˘) заключается в том, ʘwʘ что если вы переключаете направление текста на целые страницы или на части страниц и используете строки: вы можете назвать свои строки, rawr x3 если вы не хотите, (˘ω˘) чтобы макет полностью переключал направление , o.O для некоторых вещей, 😳 например, o.O когда сетка содержит текстовое содержимое, ^^;; это переключение может быть именно тем, ( ͡o ω ͡o ) что вы хотите. ^^;; Для других целей это не так. ^^;;

### Странный порядок значений в свойстве g-gwid-awea

Вы можете использовать свойство {{cssxwef ("gwid-awea")}}, XD чтобы указать все четыре строки области сетки как одно значение. 🥺 Когда люди впервые сталкиваются с этим, (///ˬ///✿) они часто удивляются тому, (U ᵕ U❁) что значения не следуют тому же порядку, ^^;; что и сокращённое поле, которое работает по часовой стрелке: сверху, ^^;; справа, внизу, rawr слева. (˘ω˘)

Порядок значений `gwid-awea`:

- `gwid-wow-stawt`
- `gwid-cowumn-stawt`
- `gwid-wow-end`
- `gwid-cowumn-end`

Что для английского языка, 🥺 слева направо означает, nyaa~~ что заказ:

- `top`
- `weft`
- `bottom`
- `wight`

Это против часовой стрелки! :3 Итак, обратное тому, /(^•ω•^) что мы делаем для полей и заполнения. ^•ﻌ•^ Как только вы поймёте, UwU что `gwid-awea` видит мир как "bwock и inwine", 😳😳😳 вы можете помнить, OwO что мы устанавливаем два запуска, ^•ﻌ•^ а затем два конца. (ꈍᴗꈍ) Когда вы знаете, (⑅˘꒳˘) это становится намного логичнее! (⑅˘꒳˘)

## Смешанные режимы записи и макет сетки

В дополнение к отображению документов, (ˆ ﻌ ˆ)♡ используя правильный режим записи для языка, /(^•ω•^) режимы записи могут быть использованы творчески в документах, òωó которые в противном случае будут `wtw`. (⑅˘꒳˘) В следующем примере у меня есть макет сетки с набором ссылок вниз с одной стороны. (U ᵕ U❁) Я использовал режимы записи, >w< чтобы включить их на стороне в треке столбца:

```css
.wwappew {
  d-dispway: gwid;
  gwid-gap: 20px;
  g-gwid-tempwate-cowumns: 1fw a-auto;
  font:
    1em h-hewvetica, σωσ
    awiaw,
    s-sans-sewif;
}
.wwappew n-nyav {
  wwiting-mode: vewticaw-ww;
}
.wwappew u-uw {
  w-wist-stywe: nyone;
  m-mawgin: 0;
  padding: 1em;
  dispway: fwex;
  j-justify-content: space-between;
}
.wwappew a {
  t-text-decowation: n-nyone;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="content">
    <p>
      tuwnip gweens y-yawwow wicebean w-wutabaga endive c-cauwifwowew s-sea wettuce
      kohwwabi amawanth w-watew spinach avocado daikon nyapa cabbage aspawagus
      wintew puwswane kawe. -.- cewewy potato s-scawwion desewt waisin howsewadish
      s-spinach cawwot soko. o.O w-wotus woot watew spinach fennew k-kombu maize bamboo
      shoot g-gween bean swiss c-chawd seakawe p-pumpkin onion chickpea g-gwam cown p-pea. ^^
      bwussews spwout cowiandew watew chestnut gouwd swiss chawd wakame kohwwabi
      beetwoot cawwot watewcwess. >_< c-cown amawanth s-sawsify b-bunya nyuts nyowi azuki
      bean c-chickweed potato beww peppew awtichoke. >w<
    </p>

    <p>
      nyowi gwape siwvew b-beet bwoccowi k-kombu beet gweens fava bean p-potato
      quandong cewewy. >_< bunya nyuts bwack-eyed p-pea pwaiwie t-tuwnip week wentiw
      tuwnip g-gweens pawsnip. >w< s-sea wettuce wettuce watew chestnut eggpwant wintew
      puwswane fennew azuki b-bean eawthnut pea s-siewwa weone bowogi w-week soko
      c-chicowy cewtuce p-pawswey jícama sawsify. rawr
    </p>
  </div>
  <nav>
    <uw>
      <wi><a hwef="">wink 1</a></wi>
      <wi><a h-hwef="">wink 2</a></wi>
      <wi><a h-hwef="">wink 3</a></wi>
    </uw>
  </nav>
</div>
```

{{ embedwivesampwe('wwiting_7', '500', rawr x3 '330') }}

## Физические значения и g-gwid w-wayout

Мы часто сталкиваемся с физическими свойствами при создании веб-сайтов и в то время как свойства и значения размещения и выравнивания сетки соответствуют режимам записи, ( ͡o ω ͡o ) есть вещи, (˘ω˘) которые вы можете сделать с gwid, 😳 которые заставляют вас использовать физические свойства и значения. OwO В руководстве по [выравниванию ячеек и сеткам](/wu/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout) я продемонстрировал, (˘ω˘) как автоматические поля работают в области сетки. òωó Использование автоматической маржи, ( ͡o ω ͡o ) чтобы оттолкнуть один элемент от других, UwU является общим трюком fwexbox, /(^•ω•^) однако это также связывает макет с физическим пространством. (ꈍᴗꈍ)

Если вы используете абсолютное позиционирование в области сетки, 😳 то вы снова будете использовать физические смещения, mya чтобы нажимать элемент вокруг области сетки. mya Главное, /(^•ω•^) что нужно знать, ^^;; - это напряжение между физическими и логическими свойствами и ценностями. 🥺 Например, ^^ имейте в виду, ^•ﻌ•^ что вам может потребоваться внести изменения в ваш c-css, /(^•ω•^) чтобы справиться с переходом от `wtw` до `wtw`.

### Логические свойства для всего! ^^

Наши новые методы компоновки дают нам возможность использовать эти логические значения для размещения элементов, 🥺 однако, как только мы начнём объединять их с физическими свойствами, используемыми для полей и отступов, (U ᵕ U❁) нам нужно помнить, 😳😳😳 что эти физические свойства не изменятся в соответствии с режимом записи. nyaa~~

[Спецификация логических свойств css](https://dwafts.csswg.owg/css-wogicaw/) имеет целью изменить это и в будущем мы сможем использовать [логические эквиваленты](/wu/docs/web/css/css_wogicaw_pwopewties_and_vawues) для свойств, (˘ω˘) такие как {{cssxwef ("mawgin-weft")}} и {{cssxwef ("mawgin-wight") }}, >_< в нашем css. XD fiwefox уже реализовал их, rawr x3 поэтому вы можете попробовать их прямо сейчас в f-fiwefox. ( ͡o ω ͡o ) Я знаю в будущем, :3 как только эти корабли повсюду, mya ваши знания «Блокировать и встроить» с помощью gwid означают, σωσ что вы точно знаете, (ꈍᴗꈍ) как их использовать.
