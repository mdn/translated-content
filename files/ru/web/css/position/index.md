---
title: position
slug: Web/CSS/position
---

{{CSSRef}}Свойство {{cssxref('','CSS')}} **`position`** указывает, как элемент позиционируется в документе. {{cssxref('top')}}, {{cssxref('right')}}, {{cssxref('bottom')}} и {{cssxref('left')}} определяют конечное местоположение позиционированных элементов.{{EmbedInteractiveExample("pages/css/position.html")}}

### Типы позиционирования

- **Позиционируемый элемент** — это элемент, у которого {{cssxref('computed_value', 'вычисленное значение')}} `position` является `relative`, `absolute`, `fixed` либо `sticky`. (Другими словами, это все, кроме `static`.)
- **Относительно позиционируемый элемент** является элементом, {{cssxref('computed_value', 'вычисленное значение')}} `position` которого является `relative`. Свойства {{cssxref('top')}} и {{cssxref('bottom')}} определяют смещение по вертикали от его нормального положения; свойства {{cssxref('left')}} и {{cssxref('right')}} задают горизонтальное смещение.
- **Абсолютно позиционируемый элемент** — это элемент, чьё {{cssxref('computed_value', 'вычисленное значение')}} `position` является `absolute` или `fixed`. {{cssxref('top')}}, {{cssxref('right')}}, {{cssxref('bottom')}} и {{cssxref('left')}} задают смещения от краёв {{cssxref('Containing_Block', 'содержащего блок элемента')}}. (Содержащий блок является предком, относительно которого расположен элемент.) Если элемент имеет поля, они добавляются к смещению. Элемент устанавливает новый [контекст форматирования блока](/ru/docs/Web/Guide/CSS/Block_formatting_context) (BFC) для своего содержимого.
- **Элемент с липкой позицией** — это элемент, у которого {{cssxref('computed_value', 'значение вычисленного')}} `position` является `sticky`. Он рассматривается как относительно позиционированный до тех пор, пока {{cssxref('Containing_Block', 'содержащий его блок')}} не пересечёт указанный порог (например, установка {{cssxref('top')}} в значение, отличное от `auto`) внутри его корня потока (или в контейнере, в котором он прокручивается), после чего он обрабатывается как «застрявший» до тех пор, пока не встретит противоположный край {{cssxref('Containing_Block', 'содержащего его блока')}}.

В большинстве случаев абсолютно позиционированные элементы, которые имеют {{cssxref('height')}} и {{cssxref('width')}} установленные в `auto`, имеют размер, соответствующий их содержимому. Тем не менее, незамещаемые, абсолютно позиционированные элементы можно сделать такими, чтобы они заполнили доступное вертикальное пространство, указав как {{cssxref('top')}}, так и {{cssxref('bottom')}}, и оставляя {{cssxref('height')}} неопределённым (то есть , `auto`). Ими также можно заполнить доступное горизонтальное пространство, указав как {{cssxref('left')}}, так и {{cssxref('right')}}, и оставляя {{cssxref('width')}} как `auto`.

За исключением только что описанного случая (абсолютно позиционированных элементов, заполняющих доступное пространство):

- Если указаны `top` и `bottom` (технически, не `auto`) — приоритет будет у `top`.
- Если указаны `left` и `right`: приоритет будет у `left`, когда {{cssxref('direction')}} `ltr` (английский язык, горизонтальный японский и т. д.), приоритет будет у `right`, когда {{cssxref('direction')}} является `rtl` (персидский , Арабский, иврит и т. д.).

## Синтаксис

Свойство `position` указывается как одно ключевое слово, выбранное из списка значений ниже.

### Значения

- `static`
  - : Это значение позволяет элементу находиться в обычном его состоянии, расположенном на своём месте в документе. Свойства `top`, `right`, `bottom`, `left` и `z-index` _не применяются_ к данному элементу. Это значение по умолчанию.
- `relative`
  - : Элемент позиционируется в соответствии с нормальным потоком документа, а затем смещается _относительно себя_ на основе значений `top`, `right`, `bottom` и `left`. Смещение не влияет на положение любых других элементов, то есть пространство, выделяемое для элемента в макете страницы, такое же, как если бы позиция была `static`. Это значение создаёт новый {{cssxref('CSS_Positioning/Understanding_z_index/The_stacking_context','контекст наложения')}}, когда значение `z-index` не `auto`. Его влияние на элементы `table-*-group`, `table-row`, `table-column`, `table-cell` и `table-caption` не определено.
- `absolute`
  - : Элемент удаляется из обычного потока документа, и для элемента в макете страницы не выделяется дополнительное пространство. Он располагается относительно своего ближайшего спозиционированного предка, если такой есть; в противном случае он помещается относительно исходного {{cssxref('Containing_Block', 'содержащего блока')}}. Его конечная позиция определяется значениями `top`, `right`, `bottom`, и `left`. Это значение создаёт новый {{cssxref('CSS_Positioning/Understanding_z_index/The_stacking_context', 'контекст наложения')}}, когда значение `z-index` не `auto`. Внешние отступы абсолютно спозиционированных блоков не {{cssxref('CSS_Box_Model/Mastering_margin_collapsing', 'схлопываются')}} с отступами других блоков.
- `fixed`
  - : Элемент выбивается из обычного потока документа, и для элемента в макете страницы не создаётся пространство. Он позиционируется относительно исходного {{cssxref('Containing_Block', 'содержащего блока')}}, установленного {{glossary("viewport")}}, за исключением случаев, когда один из его предков имеет свойство `transform`, `perspective`, или `filter`, установленное на что-то иное, кроме `none` (см. [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), и в этом случае этот предок ведёт себя как содержащий блок. (Обратите внимание, что существуют несогласованности браузера с `perspective` и `filter`, способствующими содержанию формирования блоков.) Его конечная позиция определяется значениями `top`, `right`, `bottom` и `left`. Это значение всегда создаёт новый {{cssxref('CSS_Positioning/Understanding_z_index/The_stacking_context', 'контекст наложения')}}. При печати `fixed`-элемент помещается в одно и то же место на _каждой странице_.
- `sticky`
  - : Элемент позиционируется в соответствии с нормальным потоком документа, а затем смещается относительно его ближайшего _прокручивающего предка_ и {{cssxref('Containing_Block', 'содержащего блока')}} (ближайший родительский уровень блока), включая элементы, связанные с таблицей, на основе значений `top`, `right`, `bottom`, и `left`. Смещение не влияет на положение любых других элементов.Это значение всегда создаёт новый {{cssxref('CSS_Positioning/Understanding_z_index/The_stacking_context', 'контекст наложения')}}. Обратите внимание, что липкий элемент «прилипает» к его ближайшему предшественнику, имеющему «механизм прокрутки» (созданный при `overflow` равном `hidden`, `scroll`, `auto` или `overlay`), даже если тот не является ближайшим фактически прокручивающим предком. Это эффективно препятствует любому «липкому» поведению (см. [Github issue on W3C CSSWG](https://github.com/w3c/csswg-drafts/issues/865)).

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Относительное позиционирование

Относительно позиционированные элементы смещены на определённую величину от их обычной позиции в документе, но без смещения, влияющего на другие элементы. В приведённом ниже примере обратите внимание, как размещаются другие элементы, как если бы «Two» занимало пространство своего обычного расположения.

#### HTML

```html
<div class="box" id="one">One</div>
<div class="box" id="two">Two</div>
<div class="box" id="three">Three</div>
<div class="box" id="four">Four</div>
```

#### CSS

```css
.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#two {
  position: relative;
  top: 20px;
  left: 20px;
  background: blue;
}
```

{{ EmbedLiveSample('Relative_positioning', '600px', '200px') }}

### Абсолютное позиционирование

Элементы, расположенные относительно друг друга, остаются в нормальном потоке документа. В противоположность этому, элемент с абсолютным позиционированием, выбивается из потока; таким образом, другие элементы располагаются без учёта абсолютных. Абсолютно позиционируемый элемент располагается относительно его ближайшего предка (который не является `static`). Если такого предка не существует, то абсолютный элемент позиционируется относительно ICB (начальный содержащий блок - см. также [определение W3C](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)), который содержит блок корневого элемента документа.

Простой пример:

```html
<h1>Абсолютное позиционирование</h1>
<p>
  Я базовый элемент уровня блока. Мои соседи сидят на новых строках ниже меня.
</p>
<p class="positioned">
  По умолчанию моя ширина 100% ширины родителя и я достиг такого же высокого
  уровня, как и весь дочерний контент. Наша общая ширина и высота - это наш
  контент+заполнение+ширина/высота границы.
</p>
<p>
  Мы отделены нашей маржой. Из-за развала края мы отделены шириной одного из
  наших полей, а не обоих.
</p>
<p>
  встроенные элементы <span>как этот</span> и <span>вот этот</span> будут сидеть
  в одной строке друг с другом и соседними текстовыми узлами, если в ней есть
  место. Переполнение встроенных элементов
  <span
    >перейдёт на новую строку, если это возможно, - как содержимое этого
    текста</span
  >, или просто перейдёт к новой строке, а если нет, то встанет, как это
  изображение:<img src="long.jpg" />
</p>
```

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{EmbedLiveSample('Absolute_positioning', '100%', 420)}}

### Фиксированное позиционирование

Фиксированное позиционирование аналогично абсолютному, за исключением того, что блок, содержащий элемент, является начальным содержащим блоком, установленным в окне просмотра, если только у какого-либо предка не было `transform`, `perspective`, или свойства `filter`, отличное от `none` (см. [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), из-за чего этот предок занимает место элементов, содержащих блок. Это можно использовать для создания «плавающего» элемента, который остаётся в том же положении независимо от прокрутки. В приведённом ниже примере окно c `id="one"` фиксируется в 80 пикселях от верхней части страницы и в 10 пикселях слева. Даже после прокрутки оно остаётся в том же месте относительно окна просмотра.

#### HTML

```html
<div class="outer">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <div class="box" id="one">One</div>
</div>
```

#### CSS

```css
.box {
  background: red;
  width: 100px;
  height: 100px;
  margin: 20px;
  color: white;
}
#one {
  position: fixed;
  top: 80px;
  left: 10px;
}
.outer {
  width: 500px;
  height: 500px;
  overflow: scroll;
  padding-left: 150px;
}
```

{{EmbedLiveSample('Fixed_positioning', '800px', '300px')}}

### Липкое позиционирование

Липкое позиционирование можно рассматривать как гибрид относительного и фиксированного позиционирования. Липкий позиционированный элемент обрабатывается как относительно позиционированный до тех пор, пока он не пересечёт заданный порог, после чего он будет считаться фиксированным, пока не достигнет границы его родителя. Например...

```css
#one {
  position: sticky;
  top: 10px;
}
```

... позиционирует элемент с id "one" относительно до тех пор, пока видовой экран не будет прокручен таким образом, чтобы элемент был меньше 10 пикселей от вершины. Помимо этого порога элемент будет зафиксирован на 10 пикселей сверху.

Типичное использование для липкого позиционирования - для заголовков в алфавитном списке. Заголовок «B» появится чуть ниже элементов, начинающихся с «A», пока они не будут прокручиваться за кадром. Вместо того, чтобы скользить за кадром с остальной частью содержимого, заголовок «B» затем останется фиксированным в верхней части окна просмотра, пока все элементы «B» не будут прокручиваться на экране, и в этот момент он будет закрыт «C», заголовок и т. д.

Вы должны указать порог с по крайней мере одним из {{cssxref('top')}}, {{cssxref('right')}}, {{cssxref('bottom')}}, или {{cssxref('left')}} для того, чтобы липкое позиционирование могло вести себя так, как ожидалось. В противном случае он будет неотличим от относительного позиционирования.

#### HTML

```html
<div>
  <dl>
    <dt>A</dt>
    <dd>Andrew W.K.</dd>
    <dd>Apparat</dd>
    <dd>Arcade Fire</dd>
    <dd>At The Drive-In</dd>
    <dd>Aziz Ansari</dd>
  </dl>
  <dl>
    <dt>C</dt>
    <dd>Chromeo</dd>
    <dd>Common</dd>
    <dd>Converge</dd>
    <dd>Crystal Castles</dd>
    <dd>Cursive</dd>
  </dl>
  <dl>
    <dt>E</dt>
    <dd>Explosions In The Sky</dd>
  </dl>
  <dl>
    <dt>T</dt>
    <dd>Ted Leo & The Pharmacists</dd>
    <dd>T-Pain</dd>
    <dd>Thrice</dd>
    <dd>TV On The Radio</dd>
    <dd>Two Gallants</dd>
  </dl>
</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

dl {
  margin: 0;
  padding: 24px 0 0 0;
}

dt {
  background: #b8c1c8;
  border-bottom: 1px solid #989ea4;
  border-top: 1px solid #717d85;
  color: #fff;
  font:
    bold 18px/21px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}

dd {
  font:
    bold 20px/45px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}

dd + dd {
  border-top: 1px solid #ccc;
}
```

{{EmbedLiveSample('Sticky_positioning', '500px', '300px')}}

## Доступность

Убедитесь, что элементы, расположенные с `absolute` или `fixed` значением, не затеняют другой контент при увеличении страницы, увеличивая размер текста.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Visual Presentation: Understanding SC 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Производительность и доступность

Элементы прокрутки, содержащие `fixed` или `sticky` контент, могут вызвать проблемы с производительностью и доступностью. Когда пользователь прокручивает страницу, браузер должен перерисовать `sticky` или `fixed` контент в новом месте. В зависимости от содержимого, которое необходимо перерисовать, производительности браузера и скорости обработки устройства, браузер может не справиться с перерисовкой со скоростью 60 кадров в секунду, что вызывает проблемы с доступностью для людей с чувствительностью и раздражением для всех. Одним из решений является добавление {{cssxref ('will-change', 'will-change: transform')}} к позиционированным элементам для визуализации элемента на его собственном уровне, повышения скорости перерисовки и, следовательно, повышения производительности и доступности.

## Характеристики

| Спецификация                                                        | Статус                        | Коммент                              |
| ------------------------------------------------------------------- | ----------------------------- | ------------------------------------ |
| {{SpecName('CSS2.1', 'visuren.html#propdef-position', 'position')}} | {{Spec2('CSS2.1')}}           |                                      |
| {{SpecName('CSS3 Positioning','#position-property','position')}}    | {{Spec2('CSS3 Positioning')}} | Добавляет значение свойства `sticky` |

## Совместимость с браузером

{{Compat}}
