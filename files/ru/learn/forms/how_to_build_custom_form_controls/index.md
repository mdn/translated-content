---
title: Как создавать пользовательские виджеты форм
slug: Learn/Forms/How_to_build_custom_form_controls
---

{{LearnSidebar}}

Существует много случаев, когда возможностей стандартных элементов управления HTML форм недостаточно. Если вы хотите [придать лучший вид](/ru/docs/Learn/Forms/Advanced_form_styling) каким-либо элементам управления (например, {{HTMLElement("select")}}) или вы хотите добавить особое поведение, то у вас нет другого выбора, кроме как создать собственные элементы управления.

В этой статье мы рассмотрим как создать собственный элемент управления. Для этого мы возьмём пример: переделка элемента {{HTMLElement("select")}} .

> [!NOTE]
> Мы сфокусируемся на создании виджетов, а не на том чтобы сделать код универсальным и многоразовым; поэтому будут использоваться некоторый нетривиальный JavaScript-код и манипуляции DOM в неизвестном контексте, что выходит за рамки этой статьи.

## Дизайн, структура и семантика

В начале создания пользовательского виджета необходимо обрисовать что именно вы хотите. Это сэкономит драгоценное время. Особенно важно чётко определить все состояния вашего виджета. Чтобы это сделать, лучше начать с существующего виджета, состояния и реакции которого хорошо известны, так что вы сможете просто подражать им насколько это возможно.

В нашем примере мы будем переделывать элемент {{HTMLElement("select")}}. Вот такой результат мы хотим достичь:

![Три состояния выпадающего списка](custom-select.png)

Этот скриншот показывает три основных состояния нашего виджета: нормальное состояние (слева); активное состояние (посередине) и развёрнутое состояние (справа).

С точки зрения реакций нужно чтобы наш виджет взаимодействовал как с мышью, так и с клавиатурой, так же как и стандартный виджет. Давайте сначала определим, как виджет приходит в каждое состояние:

- Виджет в нормальном состоянии когда:

  - :&#x20;

    - страница загружается
    - виджет был активным и пользователь кликает где-то вне виджета
    - виджет был активным и пользователь перемещает фокус на другой виджет при помощи клавиатуры

- Виджет в активном состоянии когда:

  - :&#x20;

    - пользователь кликает на него
    - пользователь нажимает клавишу Tab, и он получает фокус
    - виджет был в развёрнутом состоянии и пользователь кликает на виджет.

- Виджет в развёрнутом состоянии:

  - :&#x20;

    - виджет в любом другом состоянии и пользователь кликает на него

Теперь, когда мы знаем, как изменяются состояния, важно определить, как изменить значение виджета:

- Значение изменяется когда:

  - :&#x20;

    - пользователь кликает на один-из-вариантов когда виджет в развёрнутом состоянии
    - пользователь нажимает клавиши стрелка вверх или вниз когда виджет в активном состоянии

Наконец, давайте определим, как будут вести себя варианты виджета:

- когда виджет развернут, выбранный вариант подсвечен
- когда курсор мыши находится над вариантом, он подсвечен и ранее подсвеченный вариант возвращается в его обычное состояние

Для нашего примера остановимся на этом; но, если вы внимательный читатель, вы заметите, что некоторые реакции отсутствуют. Например, как вы думаете, что произойдёт если пользователь нажмёт клавишу "tab" когда виджет в развёрнутом состоянии? Ответом будет... ничего. OK, правильная реакция кажется очевидной, но поскольку она не определена в наших спецификациях, то очень легко пропустить реализацию этой реакции. Это особенно верно для командной работы, когда те, кто определяет какими должны быть реакции виджета сами не реализуют их.

Другой забавный пример: что произойдёт, если пользователь нажмёт клавишу вверх или вниз когда виджет находится в развёрнутом состоянии? Это немного сложнее. Если вы предположите, что активное и развёрнутое состояние полностью различны, то ответом снова будет "ничего не произойдёт" , потому что мы не определили никаких взаимодействий с клавиатурой в открытом состоянии. С другой стороны, если вы предположите, что активное и развёрнутое состояние немного похожи, значение может изменится, но выбранный вариант точно не будет соответственно подсвечен, опять же потому, что мы не определили никаких действий с клавиатуры над вариантами когда виджет находится в развёрнутом состоянии (мы определили только то, что произойдёт, когда виджет развернётся, но ничего более).

В нашем примере пропущенные спецификации очевидны, так что мы с ними справимся, но это может стать реальной проблемой для новых экзотических виджетов, когда никто не имеет ни малейшего представления о том как они должны реагировать. Всегда лучше потратить время на этом этапе дизайна, потому что если вы плохо определите, или забудете определить реакцию виджета, то будет очень сложно изменять её, когда пользователи уже привыкнут. Если у вас есть сомнения - спросите мнения у окружающих, и, если позволяет бюджет, не стесняйтесь [выполнять пользовательские тесты](https://ru.wikipedia.org/wiki/%D0%AE%D0%B7%D0%B0%D0%B1%D0%B8%D0%BB%D0%B8%D1%82%D0%B8-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5). Этот процесс называется UX Design ([Дизайн взаимодействия с пользователем](https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B2%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F_%D1%81_%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%BC)). Если вы хотите узнать больше об этой теме, вам следует посетить следующие полезные ресурсы:

- [UXMatters.com](http://www.uxmatters.com/)
- [UXDesign.com](http://uxdesign.com/)
- [The UX Design section of SmashingMagazine](http://uxdesign.smashingmagazine.com/)

> [!NOTE]
> Также, в большинстве систем, есть способ развернуть элемент {{HTMLElement("select")}} чтобы посмотреть все доступные варианты (это то-же что кликнуть мышью элемент {{HTMLElement("select")}} ). Это возможно комбинацией Alt+Стрелка вниз для Windows и не реализовано в нашем примере —но это будет просто сделать, так как механизм уже реализован дл события `click`.

### Определение структуры и семантики HTML

Теперь, когда основная функциональность виджета определена, пора начать создание виджета. Первым делом определим его HTML структуру и придадим основную семантику. Вот всё что нам нужно чтобы переделать элемент {{HTMLElement("select")}}:

```html
<!-- Это основной контейнер для нашего виджета.
     Атрибут tabindex позволяет пользователю переместить фокус на виджет.
     Позже мы увидим, что лучше его установить через JavaScript. -->
<div class="select" tabindex="0">
  <!-- Этот контейнер послужит для отображения текущего значения виджета -->
  <span class="value">Cherry</span>

  <!-- Этот контейнер содержит все варианты. доступные для нашего виджета.
       Так как это список, то есть смысл использовать элемент ul. -->
  <ul class="optList">
    <!-- Каждый вариант содержит то значение, которое будет отображено, позже мы увидим
         как получить то значение, которое будет отправлено вместе с данными формы -->
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

Обратите внимание на использование имён классов: они описывают каждый соответствующий элемент независимо от фактически используемых базовых элементов HTML. Важно быть уверенными что нам не придётся жёстко привязывать наши CSS и JavaScript к HTML структуре,тогда мы сможем позже вносить изменения не нарушая код виджета. Например, если вы захотите создать эквивалент элемента {{HTMLElement("optgroup")}}.

### Создание внешнего вида с помощью CSS

Теперь у нас есть структура и мы можем заняться дизайном нашего виджета. Весь смысл создания нашего собственного виджета в том, чтобы мы могли придать ему такой внешний вид, как мы захотим. Поэтому мы разделим нашу работу с CSS на две части: в первой части будут правила CSS абсолютно необходимые чтобы реакции нашего виджета были как у элемента {{HTMLElement("select")}} , а вторая чать будет состоять из красивеньких рюшечек, чтобы виджет выглядел так, как нам нравится.

#### Обязательные стили

Обязательные стили - это те, которые необходимы для обработки трёх состояний нашего виджета..

```css
.select {
  /* Это создаст контекст позиционирования для списка вариантов */
  position: relative;

  /* Это сделает наш виджет частью текстового потока и одновременно сделает его
     изменяемого размера */
  display: inline-block;
}
```

Ещё нам нужен дополнительный класс `active,` чтобы определить, как будет выглядеть наш виджет в активном состоянии. Так как наш виджет может находится в фокусе, то мы укажем этот стиль ещё и для псевдокласса {{cssxref(":focus")}} чтобы быть уверенными, что виджет будет вести себя одинаково.

```css
.select .active,
.select:focus {
  outline: none;

  /* Это свойство - box-shadow - необязательно, однако нам важно видеть активное состояние
    т.к. мы используем его по умолчанию. Можете спокойно его переопределить. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Теперь давайте стилизуем список опций:

```css
/* Селектор .select здесь применён для удобства (синтаксический сахар), чтобы быть уверенными,
   что определяемые классы находятся в нашем виджете. */
.select .optList {
  /* Это позволит нам быть уверенными, что список вариантов будет показан ниже значения
   и вне HTML потока */
  position: absolute;
  top: 100%;
  left: 0;
}
```

Ещё нам нужен дополнительный класс, для обращения к списку вариантов, когда он скрыт. Это необходимо чтобы справиться с различиями активного и развёрнутого состояния, т.к. они не совсем совпадают.

```css
.select .optList.hidden {
  /* Это самый простой из доступных способов путь скрыть список,
     а о доступности мы ещё поговорим в конце */
  max-height: 0;
  visibility: hidden;
}
```

#### Украшательства

Теперь, когда основная функциональность на месте, можем начинать развлекаться. То, что мы сделаем дальше, является всего лишь примером того, что возможно, и будет соответствовать скриншоту в начале этой статьи. Но вы можете свободно экспериментировать и посмотреть на что вы способны.

```css
.select {
  /* Все размеры будут выражены в em по соображениям удобства
     (чтобы быть уверенными, что виджет будет изменять размер если пользователь будет
     использовать увеличение в текстовом режиме браузера). Вычисления сделаны из расчёта что
     1em == 16px что является умолчанием для большинства браузеров.
     Если вы затрудняетесь с преобразованием px в em, попробуйте http://riddle.pl/emcalc/ */
  font-size: 0.625em; /* это (10px) новый размер шрифта для нашего контекста для значения
                            em в исходном контексте */
  font-family: Verdana, Arial, sans-serif;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* Нам нужно добавить дополнительное пространство для стрелки вниз */
  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  /* Первое объявление - для браузеров не поддерживающих линейный градиент.
     Второе объявление - потому что основанные на WebKit браузеры ещё не избавились от префикса в нем.
     Если вам нужна поддержка устаревших браузеров, попробуйте http://www.colorzilla.com/gradient-editor/ */
  background: #f0f0f0;
  background: -webkit-linear-gradient(90deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  /* Так как значение может быть шире, чем наш виджет, нужно быть уверенными, что оно не изменит
     ширину виджета */
  display: inline-block;
  width: 100%;
  overflow: hidden;

  vertical-align: top;

  /* И, если содержимое слишком длинное, лучше иметь красивенькие точечки. */
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

Нам не нужен дополнительный элемент, чтобы создать стрелку вниз; вместо этого мы используем псевдоэлемент {{cssxref(":after")}}. Также её можно создать при помощи простого фонового изображения в классе `select`.

```css
.select:after {
  content: "▼"; /* Мы используем Unicode символ U+25BC; смотрите http://www.utf8-chartable.de */
  position: absolute;
  z-index: 1; /* Важно чтобы стрелка не перекрывала элементы списка */
  top: 0;
  right: 0;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  height: 100%;
  width: 2em; /* 20px */
  padding-top: 0.1em; /* 1px */

  border-left: 0.2em solid #000; /* 2px */
  border-radius: 0 0.1em 0.1em 0; /* 0 1px 1px 0 */

  background-color: #000;
  color: #fff;
  text-align: center;
}
```

Далее стилизуем список вариантов:

```css
.select .optList {
  z-index: 2; /* Мы явно сказали, что список вариантов всегда будет перекрывать стрелку вниз */

  /* это сбросит значения стиля по умолчанию для элемента ul */
  list-style: none;
  margin: 0;
  padding: 0;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* Это для того, чтобы убедиться что если значения будут короче виджета
     то список вариантов останется таким же по размеру как и сам виджет */
  min-width: 100%;

  /* В случае, если список слишком длинный, его содержимое не будет помещаться по вертикали
     (что автоматически добавит полосу прокрутки), но этого никогда не произойдёт по горизонтали
     (потому что мы не установили ширину и содержимое списка будет регулировать её
     автоматически. Если это будет невозможно - содержимое будет обрезано.) */
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;

  border: 0.2em solid #000; /* 2px */
  border-top-width: 0.1em; /* 1px */
  border-radius: 0 0 0.4em 0.4em; /* 0 0 4px 4px */

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4); /* 0 2px 4px */
  background: #f0f0f0;
}
```

Для вариантов нам нужно добавить класс `highlight` чтобы сделать возможным идентифицировать значение которе пользователь выберет (или выбрал).

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

Итак, вот результат с нашими тремя состояниями ([исходный код можно посмотреть здесь](/ru/docs/Learn/Forms/How_to_build_custom_form_controls/Example_1)):

#### Основное состояние

```html hidden
<div class="select">
  <span class="value">Cherry</span>
  <ul class="optList hidden">
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

{{EmbedLiveSample("Основное_состояние", 120, 130)}}

#### Активное состояние

```html hidden
<div class="select active">
  <span class="value">Cherry</span>
  <ul class="optList hidden">
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

{{EmbedLiveSample("Активное_состояние", 120, 130)}}

#### Развёрнутое состояние

```html hidden
<div class="select active">
  <span class="value">Cherry</span>
  <ul class="optList">
    <li class="option highlight">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #fff;
}
```

{{EmbedLiveSample("Развёрнутое_состояние", 120, 130)}}

## Оживляем виджет с помощью JavaScript

Теперь, когда наш дизайн и структура готовы, мы можем написать код на JavaScript чтобы виджет действительно заработал.

> [!WARNING]
> Следующий код представлен в образовательных целях и не может быть использован как-есть. Помимо прочего, как мы убедимся, он не пригоден для дальнейшего развития и не будет работать в устаревших браузерах. В нем также есть избыточность которую необходимо оптимизировать использования в рабочем режиме.

> [!NOTE]
> Создание многократно используемых виджетов может быть немного сложнее. [W3C Web Component draft](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/explainer/index.html) является одним из ответов на этот конкретный вопрос. [The X-Tag project](http://x-tags.org/) попытка реализовать эту спецификацию; пожалуйста, посмотрите этот проект.

### Почему не работает?

Прежде чем мы начнём, запомните одну важную вещь о JavaScript: в браузере **это ненадёжная технология**. Когда вы создаёте пользовательские виджеты, вы будете полагаться на JavaScript потому что это необходимое звено для связки. Однако во многих случаях JavaScript невозможно запустить в браузере:

- Пользователь отключил JavaScript: Это самый редкий случай; сейчас очень мало людей отключают JavaScript.
- Скрипт не загружается. Это один из самых распространённых случаев, особенно в мобильном мире, где сеть не очень надёжная.
- Скрипт глючит.Вы должны всегда учитывать эту возможность.
- Скрипт конфликтует со сторонним скриптом. Это может случиться со скриптами отслеживания или любыми букмарклетами (bookmarklets), которые использует пользователь.
- Скрипт конфликтует с расширением браузера или зависит от него (такими как расширение [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/) в Firefox, или расширение [NotScripts](https://chrome.google.com/webstore/detail/notscripts/odjhifogjcknibkahlpidmdajjpkkcfn) в Chrome).
- Пользователь использует устаревший браузер, и одна из требуемых функций не поддерживается. Это часто случается, когда вы используете передовые API.

Из-за этого очень важно серьёзно подумать о том, что произойдёт, если JavaScript не сработает. Детальное рассмотрение этой проблемы выходит за рамки данной статьи, поскольку эта проблема тесно связана с тем, насколько универсальным и многократно используемым вы хотите сделать свой сценарий, но мы рассмотрим основы этого в нашем примере.

В нашем примере, если наш JavaScript-код не работает, мы используем стандартный элемент {{HTMLElement("select")}}. Для этого, нам нужны две вещи.

Во-первых нам нужно добавить стандартный элемент {{HTMLElement("select")}} перед каждым использованием нашего пользовательского виджета. Это также необходимо, чтобы отправить данные из нашего пользовательского виджета вместе с остальными данными формы; подробнее рассмотрим это позже.

```html
<body class="no-widget">
  <form>
    <select name="myFruit">
      <option>Cherry</option>
      <option>Lemon</option>
      <option>Banana</option>
      <option>Strawberry</option>
      <option>Apple</option>
    </select>

    <div class="select">
      <span class="value">Cherry</span>
      <ul class="optList hidden">
        <li class="option">Cherry</li>
        <li class="option">Lemon</li>
        <li class="option">Banana</li>
        <li class="option">Strawberry</li>
        <li class="option">Apple</li>
      </ul>
    </div>
  </form>
</body>
```

Во-вторых нам нужно два новых класса, чтобы скрыть ненужные элементы (то есть "настоящие" элементы {{HTMLElement("select")}}, если скрипт запустился, или наш пользовательский виджет, если скрипт не запустился). По умолчанию наш HTML код скрывает наш пользовательский виджет.

```css
.widget select,
.no-widget .select {
  /* Этот CSS селектор значит:
     - или мы присваиваем классу body значение "widget" и таким образом мы скрываем элемент {{HTMLElement("select")}}
     - или мы не меняем класс body, тогда класс body остаётся в значении "no-widget",
       и элементы, чей класс "select" будут скрыты */
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

Теперь нам нужен модуль JavaScript, чтобы определить, запущен скрипт или нет. Этот модуль очень простой: если наш скрипт запустится во время загрузки страницы, то он удалит класс класс `no-widget` и добавит класс `widget`, чем поменяет видимость элемента {{HTMLElement("select")}} и нашего пользовательского виджета.

```js
window.addEventListener("load", function () {
  document.body.classList.remove("no-widget");
  document.body.classList.add("widget");
});
```

#### Без JS

Посмотрите [полный исходный код](/ru/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#no_js).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

{{EmbedLiveSample("Без_JS",120,130)}}

#### Вместе с JS

Посмотрите [полный исходный код](/ru/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#js).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});
```

{{EmbedLiveSample("Вместе_с_JS", 120, 130)}}

> [!NOTE]
> Если вы действительно хотите сделать свой код универсальным и многоразовым, то вместо переключения классов гораздо лучше просто добавить класс элементам {{HTMLElement("select")}} чтобы их скрыть, и динамически добавлять дерево DOM представляющее пользовательский виджет после каждого элемента {{HTMLElement("select")}} на странице.

### Облегчение работы

В коде который мы собираемся написать, для выполнения всех необходимых действий мы будем использовать стандартный DOM API. Однако, хотя поддержка DOM API в браузерах стала гораздо лучше, все ещё есть нюансы с устраевшеними браузерами (особенно со старым добрым Internet Explorer).

Чтобы избежать неприятностей с устаревшими браузерами есть два способа: использовать отдельный фреймворк такой как [jQuery](https://jquery.com/), [$dom](https://github.com/julienw/dollardom), [prototype](http://prototypejs.org/), [Dojo](http://dojotoolkit.org/), [YUI](http://yuilibrary.com/), и т.п., или самостоятельно реализовать недостающие функции которые вам нужны (что можно легко сделать через условную загрузку, например используя библиотеку [yepnope](http://yepnopejs.com/)).

Мы планируем использовать следующие функции (от самых рискованных до самых безопасных):

1. {{domxref("element.classList","classList")}}
2. {{domxref("EventTarget.addEventListener","addEventListener")}}
3. [`forEach`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) (This is not DOM but modern JavaScript)
4. {{domxref("element.querySelector","querySelector")}} and {{domxref("element.querySelectorAll","querySelectorAll")}}

Помимо доступности этих специфических функций, остаётся ещё одна проблема чтобы начать. Объект возвращаемый функцией {{domxref("element.querySelectorAll","querySelectorAll()")}} имеет тип {{domxref("NodeList")}} что отличается от [`Array`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array). Это важно потому, что объекты `Array` поддерживают функцию [`forEach`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), а {{domxref("NodeList")}} не поддерживает. Так как {{domxref("NodeList")}} очень похож на `Array` и нам очень удобно использовать `forEach`, мы можем просто добавить `forEach` к объекту {{domxref("NodeList")}} чтобы облегчить нам жизнь, например так:

```js
NodeList.prototype.forEach = function (callback) {
  Array.prototype.forEach.call(this, callback);
};
```

Мы не шутили, когда сказали, что это легко сделать.

### Создание процедур обработки событий

Итак, начало положено, и мы можем приступить к функциям, которые будут использоваться для взаимодействия с пользователем.

```js
// Эта функция будет вызываться каждый раз, когда наш виджет будет деактивирован
// Ей передаётся один параметр
// select : DOM нода класса `select` который должен быть деактивирован
function deactivateSelect(select) {
  // Если виджет не активен, то и делать-то нечего
  if (!select.classList.contains("active")) return;

  // Получаем список опций для нашего виджета
  var optList = select.querySelector(".optList");

  // Закрываем список опций
  optList.classList.add("hidden");

  // и деактивируем сам виджет
  select.classList.remove("active");
}

// Эта функция будет вызываться каждый раз, когда пользователь захочет (де)активировать наш виджет
// Ей передаются два параметра:
// select : DOM нода класса `select` для активации
// selectList : список всех DOM нод с классом `select`
function activeSelect(select, selectList) {
  // Если виджет активен, то и делать-то нечего
  if (select.classList.contains("active")) return;

  // Нам нужно отключить активное состояние всех наших виджетов
  // Так как функция deactivateSelect соответствует всем требованиям
  // функции forEach мы вызываем её без использования промежуточной анонимной функции
  selectList.forEach(deactivateSelect);

  // А теперь мы возвращаем активное состояние нужного виджета
  select.classList.add("active");
}

// Эта функция будет вызываться каждый раз, когда пользователь будет открывать/закрывать список вариантов
// Ей передаётся один параметр:
// select : DOM нода со списком для переключения состояния
function toggleOptList(select) {
  // Список хранится в виджете
  var optList = select.querySelector(".optList");

  // Мы меняем класс виджета чтобы показать/скрыть его
  optList.classList.toggle("hidden");
}

// Эта функция будет вызываться каждый раз, когда нам нужно подсветить вариант
// Ей передаются два параметра:
// select : DOM нода класса `select` содержащая вариант для подсветки
// option : DOM нода класса `option` для подсветки
function highlightOption(select, option) {
  // Мы получаем список всех вариантов доступных в нашем элементе
  var optionList = select.querySelectorAll(".option");

  // Мы удаляем подсветку всех вариантов
  optionList.forEach(function (other) {
    other.classList.remove("highlight");
  });

  // Подсвечиваем нужный вариант
  option.classList.add("highlight");
}
```

Это все, что вам нужно для обработки различных состояний пользовательского виджета.

Далее мы связываем эти функции с соответствующими событиями:

```js
// Мы обрабатываем событие при загрузке документа.
window.addEventListener("load", function () {
  var selectList = document.querySelectorAll(".select");

  // Каждый наш собственный виджет должен быть проинициализирован
  selectList.forEach(function (select) {
    // также как и его элементы `option`
    var optionList = select.querySelectorAll(".option");

    // Когда пользователь проводит мышью над элементом `option`, мы подсвечиваем этот вариант
    optionList.forEach(function (option) {
      option.addEventListener("mouseover", function () {
        // Замечание: использование переменных `select` и `option`
        // ограничено рамками нашей функции.
        highlightOption(select, option);
      });
    });

    // Когда пользователь кликает на наш виджет
    select.addEventListener("click", function (event) {
      // Замечание: использование переменной `select`
      // ограничено рамками нашей функции.

      // Мы переключаем видимость списка вариантов
      toggleOptList(select);
    });

    // Когда виджет получает фокус
    // Виджет получает фокус когда пользователь кликает на него
    // или переходит на него клавишей табуляции
    select.addEventListener("focus", function (event) {
      // Замечание: использование переменных `select` и `selectList`
      // ограничено рамками нашей функции.

      // Мы активируем наш виджет
      activeSelect(select, selectList);
    });

    // Когда виджет теряет фокус
    select.addEventListener("blur", function (event) {
      // Замечание: использование переменной `select`
      // ограничено рамками нашей функции.

      // Мы деактивируем виджет
      deactivateSelect(select);
    });
  });
});
```

В этот момент наш виджет будет изменять состояние в соответствии с нашим дизайном, но не будет обновлять его значение. С этим мы разберёмся дальше.

#### Живой пример

Посмотрите [полный исходный код](/ru/docs/Learn/Forms/How_to_build_custom_form_controls/Example_3).

```html hidden
<form class="no-widget">
  <select name="myFruit" tabindex="-1">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select" tabindex="0">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");

    optionList.forEach((option) => {
      option.addEventListener("mouseover", () => {
        highlightOption(select, option);
      });
    });

    select.addEventListener(
      "click",
      (event) => {
        toggleOptList(select);
      },
      false,
    );

    select.addEventListener("focus", (event) => {
      activeSelect(select, selectList);
    });

    select.addEventListener("blur", (event) => {
      deactivateSelect(select);
    });

    select.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        deactivateSelect(select);
      }
    });
  });
});
```

{{EmbedLiveSample("Живой_пример", 120, 130)}}

### Обработка значения виджета

Теперь, когда наш виджет работает, мы должны добавить код, чтобы обновить его значение в соответствии с выбором пользователя и сделать возможным отправку этого значения вместе с данными формы.

Самый простой способ сделать это - использовать встроенный виджет который также есть в нашей форме. Такой виджет будет отслеживать значение со всеми встроенными элементами управления, предоставленными браузером, и значение будет отправлено, как обычно, при отправке формы. Нет смысла заново изобретать велосипед, когда все это уже сделано за нас.

Как было показано ранее, у нас есть стандартный виджет {{HTMLElement("select")}} в качестве запасного варианта для повышения доступности; поэтому мы просто синхронизируем его значение с нашим собственным виджетом:

```js
// Эта функция обновляет отображённое значение и синхронизирует его со стандартным виджетом
// Ей передаётся два параметра:
// select : DOM нода класса `select` содержащая значение которое будет обновлено
// index  : индекс выбранного значения
function updateValue(select, index) {
  // Нам нужно получить стандартный виджет для данного пользовательского
  // В нашем примере стандартный виджет является братом (sibling) пользовательского виджета
  var nativeWidget = select.previousElementSibling;

  // Нам также нужно получить значение заполнителя нашего пользовательского виджета
  var value = select.querySelector(".value");

  // И нам нужен весь список вариантов
  var optionList = select.querySelectorAll(".option");

  // Установим значение текущего номера выбранного элемента равным index
  nativeWidget.selectedIndex = index;

  // Соответственно установим значение заполнителя
  value.innerHTML = optionList[index].innerHTML;

  // И мы подсвечиваем соответствующий вариант нашего пользовательского виджета
  highlightOption(select, optionList[index]);
}

// Эта функция возвращает текущий номер выбранного элемента в стандартном виджете
// Ей передаётся один параметр:
// select : DOM нода класса `select` соответствующая стандартному виджету
function getIndex(select) {
  // Нам нужно получить доступ к стандартному виджету соответствующему данному
  // пользовательскому виджету
  // В нашем примере стандартный виджет - брат (sibling) пользовательского виджета
  var nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}
```

Используя эти две функции мы можем связать стандартный виджет с пользовательским:

```js
// Мы обрабатываем привязку события при загрузке документа.
window.addEventListener("load", function () {
  var selectList = document.querySelectorAll(".select");

  // Каждый пользовательский виджет необходимо инициализировать:
  selectList.forEach(function (select) {
    var optionList = select.querySelectorAll(".option"),
      selectedIndex = getIndex(select);

    // Мы делаем наш пользовательский виджет фокусируемым
    select.tabIndex = 0;

    // Мы делаем стандартный виджет более не фокусируемым
    select.previousElementSibling.tabIndex = -1;

    // Убеждаемся, что выбранное по умолчанию значение корректно отображено
    updateValue(select, selectedIndex);

    // Каждый раз, когда пользователь кликает на вариант, мы соответственно обновляем значение
    optionList.forEach(function (option, index) {
      option.addEventListener("click", function (event) {
        updateValue(select, index);
      });
    });

    // Когда виджет находится в фокусе, при каждом нажатии клавиши на клавиатуре, мы соответственно
    // обновляем  значение
    select.addEventListener("keyup", function (event) {
      var length = optionList.length,
        index = getIndex(select);

      // Когда пользователь нажимает стрелку вниз, мы переходим на следующий вариант
      if (event.keyCode === 40 && index < length - 1) {
        index++;
      }

      // Когда пользователь нажимает стрелку вверх, мы переходим на предыдущий вариант
      if (event.keyCode === 38 && index > 0) {
        index--;
      }

      updateValue(select, index);
    });
  });
});
```

В приведённом выше коде стоить отметить свойство [`tabIndex`](/ru/docs/Web/API/HTMLElement/tabIndex). Использование этого свойства необходимо чтобы стандартный виджет никогда не получил фокус, и чтобы убедиться, что наш пользовательский виджет получает фокус когда пользователь использует клавиатуру или мышь.

С этим мы закончили! Вот результат:

#### Живой пример

Посмотрите [полный исходный код](/ru/docs/Learn/Forms/How_to_build_custom_form_controls/Example_4).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");

    optionList.forEach((option) => {
      option.addEventListener("mouseover", () => {
        highlightOption(select, option);
      });
    });

    select.addEventListener("click", (event) => {
      toggleOptList(select);
    });

    select.addEventListener("focus", (event) => {
      activeSelect(select, selectList);
    });

    select.addEventListener("blur", (event) => {
      deactivateSelect(select);
    });
  });
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");
    const selectedIndex = getIndex(select);

    select.tabIndex = 0;
    select.previousElementSibling.tabIndex = -1;

    updateValue(select, selectedIndex);

    optionList.forEach((option, index) => {
      option.addEventListener("click", (event) => {
        updateValue(select, index);
      });
    });

    select.addEventListener("keyup", (event) => {
      let index = getIndex(select);

      if (event.key === "Escape") {
        deactivateSelect(select);
      }
      if (event.key === "ArrowDown" && index < optionList.length - 1) {
        index++;
      }
      if (event.key === "ArrowUp" && index > 0) {
        index--;
      }

      updateValue(select, index);
    });
  });
});
```

{{EmbedLiveSample("Живой_пример", 120, 130)}}

Но подождите, мы точно закончили?

## Добавляем доступность

Мы создали нечто работающее, и, хотя это далеко от полнофункционального выпадающего списка, работает это хорошо. Однако то, что мы сделали, это не более, чем возня с DOM. У него нет настоящей семантики, и хотя оно выглядит как раскрывающейся список, с точки зрения браузера - это не так, поэтому вспомогательные технологии не смогут понять что это он и есть. Короче говоря, этот хорошенький список для выбора фруктов не является доступным для людей с ограниченными возможностями!

К счастью существует решение, и оно называется [ARIA](/ru/docs/Web/Accessibility/ARIA). ARIA - аббревиатура для "Accessible Rich Internet Application" (Доступное всем интернет приложение), и представляет собой [W3C спецификацию](https://www.w3.org/TR/wai-aria/) специально разработанную для того, что мы здесь делаем: делаем веб приложения и пользовательские виджеты ассистивными (доступными для людей с ограниченными возможностями). В основном, это набор атрибутов, которые расширяют HTML, чтобы мы смогли лучше описать роли, состояния и свойства, так что только что изобретённый элемент выглядит как будто он был тем стандартным, за которого он себя выдаёт. Использовать эти атрибуты очень просто, поэтому давайте сделаем это.

### Атрибут `role`

Ключевой атрибут используемый в [ARIA](/ru/docs/Web/Accessibility/ARIA) - это [`role`](/ru/docs/Web/Accessibility/ARIA/ARIA_Techniques). Атрибут [`role`](/ru/docs/Web/Accessibility/ARIA/ARIA_Techniques) принимает значение, определяющее для чего используется элемент. Каждая роль определяет свои собственные требования и поведение. В нашем примере мы используем роль [`listbox`](/ru/docs/Web/Accessibility/ARIA/Roles/listbox_role). Это "составная роль" ("composite role"), т.е. элементы такой роли имеют потомков, у каждого из которых есть отдельная роль (в данном случае, как минимум один дочерний элемент с ролью `option`).

Стоит также отметить что ARIA определяет роли, которые по умолчанию применяются к стандартной разметке HTML. Например, элемент {{HTMLElement("table")}} соответствует роли `grid`, а элемент {{HTMLElement("ul")}} соответствует роли `list`. Так как мы используем элемент {{HTMLElement("ul")}}, то нам необходимо убедиться что роль `listbox` нашего виджета заменит роль `list` элемента {{HTMLElement("ul")}}. С этой целью, мы будем использовать роль `presentation`. Эта роль разработана чтобы можно было отметить, что элемент не имеет особого значения, а используется исключительно чтобы представить информацию. Мы применим его к нашему элементу {{HTMLElement("ul")}}.

Чтобы ввести роль [`listbox`](/ru/docs/Web/Accessibility/ARIA/Roles/listbox_role) нам нужно просто внести следующие изменения в HTML:

```html
<!-- Мы добавили атрибут role="listbox" в наш элемент верхнего уровня -->
<div class="select" role="listbox">
  <span class="value">Cherry</span>
  <!-- Также мы добавили атрибут role="presentation" в элемент ul -->
  <ul class="optList" role="presentation">
    <!-- И мы добавили атрибут role="option" во все элементы li -->
    <li role="option" class="option">Cherry</li>
    <li role="option" class="option">Lemon</li>
    <li role="option" class="option">Banana</li>
    <li role="option" class="option">Strawberry</li>
    <li role="option" class="option">Apple</li>
  </ul>
</div>
```

> [!NOTE]
> Включение как атрибута `role` так и атрибута `class` необходимо только если вы хотите обеспечить поддержку устаревших браузеров, которые не поддерживают [селекторы атрибутов CSS](/ru/docs/Web/CSS/Attribute_selectors).

### Атрибут `aria-selected`

Использовать только атрибут [`role`](/ru/docs/Web/Accessibility/ARIA/ARIA_Techniques) недостаточно. [ARIA](/ru/docs/Web/Accessibility/ARIA) также предоставляет множество атрибутов состояний и свойств. Чем больше и уместнее вы их используете, тем ваш виджет будет более понятен для вспомогательных технологий. В нашем случае мы ограничимся использованием одного атрибута: `aria-selected`.

Атрибут `aria-selected` используется для отметки текущего выбранного варианта; это позволяет ассистивным технологиям информировать пользователя о текущем выборе. Мы будем используя JavaScript динамически отмечать выбранный вариант каждый раз, когда пользователь его выбирает. С этой целью нам нужно пересмотреть нашу функцию `updateValue()`:

```js
function updateValue(select, index) {
  var nativeWidget = select.previousElementSibling;
  var value = select.querySelector(".value");
  var optionList = select.querySelectorAll(".option");

  // Мы уверены что все варианты не выбраны
  optionList.forEach(function (other) {
    other.setAttribute("aria-selected", "false");
  });

  // Мы уверены что выбранный вариант отмечен
  optionList[index].setAttribute("aria-selected", "true");

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
}
```

Ниже окончательный результат всех этих изменений (для большей наглядности попробуйте эти примеры со вспомогательными технологиями, такими как [NVDA](http://www.nvda-project.org/) или [VoiceOver](https://www.apple.com/accessibility/voiceover/)).

#### Живой пример

Посмотрите [полный исходный код](/ru/docs/Learn/Forms/How_to_build_custom_form_controls/Example_5).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select" role="listbox">
    <span class="value">Cherry</span>
    <ul class="optList hidden" role="presentation">
      <li class="option" role="option" aria-selected="true">Cherry</li>
      <li class="option" role="option">Lemon</li>
      <li class="option" role="option">Banana</li>
      <li class="option" role="option">Strawberry</li>
      <li class="option" role="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.setAttribute("aria-selected", "false");
  });

  optionList[index].setAttribute("aria-selected", "true");

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");
    const selectedIndex = getIndex(select);

    select.tabIndex = 0;
    select.previousElementSibling.tabIndex = -1;

    updateValue(select, selectedIndex);

    optionList.forEach((option, index) => {
      option.addEventListener("mouseover", () => {
        highlightOption(select, option);
      });

      option.addEventListener("click", (event) => {
        updateValue(select, index);
      });
    });

    select.addEventListener("click", (event) => {
      toggleOptList(select);
    });

    select.addEventListener("focus", (event) => {
      activeSelect(select, selectList);
    });

    select.addEventListener("blur", (event) => {
      deactivateSelect(select);
    });

    select.addEventListener("keyup", (event) => {
      let index = getIndex(select);

      if (event.key === "Escape") {
        deactivateSelect(select);
      }
      if (event.key === "ArrowDown" && index < optionList.length - 1) {
        index++;
      }
      if (event.key === "ArrowUp" && index > 0) {
        index--;
      }

      updateValue(select, index);
    });
  });
});
```

{{EmbedLiveSample("Живой_пример", 120, 130)}}

## Заключение

Мы рассмотрели все основы создания пользовательского виджета формы, и это, как вы видите, нетривиальная задача, и часто проще и лучше положиться на сторонние библиотеки, чем писать их самому с нуля (если, конечно, ваша цель - не создать такую библиотеку).

Вот несколько библиотек, которые вам стоит рассмотреть перед тем как создавать собственную:

- [jQuery UI](http://jqueryui.com/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)
- [Nice Forms](http://www.emblematiq.com/lab/niceforms/)
- [и многие другие…](https://www.google.fr/search?q=HTML+custom+form+controls&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:fr:official&client=firefox-a)

Если вы хотите двигаться далее, то код в этом примере нуждается в некотором улучшении прежде чем станет универсальным и многоразовым. Это упражнение, которое вы можете попробовать выполнить. Две подсказки, которые помогут вам в этом: первый аргумент всех наших функций одинаков, это значит что эти функции должны быть в одном контексте. Было бы разумным создать объект для совместного использования этого контекста. Также вам нужно сделать его функциональным; это значит, что ему необходимо одинаково хорошо работать с различными браузерами, чья совместимость с Web стандартами очень отличается. Повеселись!

{{PreviousMenuNext("Learn/HTML/Forms/Form_validation", "Learn/HTML/Forms/Sending_forms_through_JavaScript", "Learn/HTML/Forms")}}
