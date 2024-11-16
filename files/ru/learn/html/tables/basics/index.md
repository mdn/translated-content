---
title: HTML таблицы основы
slug: Learn/HTML/Tables/Basics
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

Этот раздел познакомит вас с таблицами HTML, представив самые базовые понятия - строки и ячейки, заголовки, слияние строк и столбцов, а также объединение всех ячеек в столбце в целях стилизации.

| Начальные условия: | Знание основ HTML (читайте [Введение в HTML - Introduction to HTML](/ru/docs/Learn/HTML/Introduction_to_HTML)). |
| ------------------ | --------------------------------------------------------------------------------------------------------------- |
| Цель:              | Общее знакомство с таблицами HTML.                                                                              |

## Что такое таблица ?

Таблица - это структурированный набор данных, состоящий из строк и столбцов (**табличных данных**). Таблицы позволяют быстро и легко посмотреть значения, показывающие некоторую взаимосвязь между различными типами данных, например - человек и его возраст, или расписание в плавательном бассейне.

![A sample table showing names and ages of some people - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![A swimming timetable showing a sample data table](swimming-timetable.png)

Люди постоянно используют таблицы, причём уже давно, как показывает документ по переписи в США, относящийся к 1800 году:

![A very old parchment document; the data is not easily readable, but it clearly shows a data table being used.](1800-census.jpg)

Так что не удивительно, что создатели HTML включили в него средства для структурирования и представления табличных данных в сети.

### Как работает таблица?

Смысл таблицы в том, что она жёсткая. Информацию легко интерпретировать, визуально сопоставляя заголовки строк и столбцов. Например, посмотрите на приведённую ниже таблицу и найдите единственное личное местоимение, используемое в третьем лице , с полом ♀, выступающее в качестве объекта в предложении. Ответ можно найти, сопоставив соответствующие заголовки столбцов и строк.

<table>
  <caption>
    Personal pronouns
  </caption>
  <tbody>
    <tr>
      <th colspan="3"></th>
      <th scope="col">Субъект</th>
      <th scope="col">Объект</th>
    </tr>
    <tr>
      <th rowspan="5" scope="rowgroup">Единствен. числ.</th>
      <th colspan="2" scope="row">1 Лицо</th>
      <td>Я</td>
      <td>меня</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">2 Лицо</th>
      <td>ты</td>
      <td>тебя</td>
    </tr>
    <tr>
      <th rowspan="3" scope="rowgroup">3 Лицо</th>
      <th scope="row">♂</th>
      <td>он</td>
      <td>его</td>
    </tr>
    <tr>
      <th scope="row">♀</th>
      <td>она</td>
      <td>её</td>
    </tr>
    <tr>
      <th scope="row">o</th>
      <td>оно</td>
      <td>его</td>
    </tr>
    <tr>
      <th rowspan="3" scope="rowgroup">Множ.числ.</th>
      <th colspan="2" scope="row">1 Лицо</th>
      <td>мы</td>
      <td>нас</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">2 Лицо</th>
      <td>вы</td>
      <td>вас</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">2 Лицо</th>
      <td>они</td>
      <td>их</td>
    </tr>
  </tbody>
</table>

Если правильно представить таблицу HTML, интерпретировать её данные смогут даже люди, имеющие проблемы со зрением.

### Оформление таблиц

[Исходный код HTML (HTML source code)](https://github.com/mdn/learning-area/blob/master/html/tables/basic/personal-pronouns.html) вышеприведённой таблице есть в GitHub; посмотрите его и [живой пример (look at the live example)](https://mdn.github.io/learning-area/html/tables/basic/personal-pronouns.html)! Вы заметите, что таблица там выглядит иначе — это потому, что на сайте MDN к этим данным была применена таблица стилей, а приведённый в GitHub пример информации о стиле не имеет.

Не питайте ложных иллюзий - чтобы эффективно представлять таблицы в веб, необходимо придать им хорошую структуру в HTML и применить к ним таблицы стилей ([CSS](/ru/docs/Learn/CSS)). В данном разделе мы сфокусируемся на HTML, чтобы узнать о том, что касается CSS, вам надо обратиться к статье [Стилизация таблиц](/ru/docs/Learn/CSS/Building_blocks/Styling_tables).

В этом разделе мы не фокусируемся на CSS, но всё же дали простейшую таблицу стилей CSS, чтобы сделать таблицы более читабельными. Эту таблицу стилей можно найти [здесь](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css), можно также использовать [шаблон HTML](https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html), применяющий эту стаблицу стилей — вместе они дадут вам хорошую основу для экспериментов с таблицами HTML.

> [!NOTE]
> Посмотрите также [таблицу personal_pronouns с применённым к ней стилем](https://mdn.github.io/learning-area/html/tables/basic/personal-pronouns-styled.html), чтобы получить представление о том, как она выглядит.

### Когда не надо использовать таблицы HTML?

HTML-таблицы следует использовать для табличных данных — это то, для чего они предназначены. К сожалению, многие используют таблицы HTML для оформления веб-страниц, например, одна строка для заголовка, одна для содержимого, одна для сносок, и тому подобное. Подробнее об этом можно узнать в разделе [Вёрстка](/ru/docs/Learn/Accessibility/HTML#%d0%92%d1%91%d1%80%d1%81%d1%82%d0%ba%d0%b0) на [Начальном обучающем модуле доступности](/ru/docs/Learn/Accessibility). Это происходило из-за плохой поддержки CSS в разных браузерах; в наше время такое встречается гораздо реже, но иногда всё же попадается.

Короче говоря, использование таблиц в целях оформления вместо [методов CSS](/ru/docs/Learn/CSS/CSS_layout) является плохой идеей по следующим причинам :

1. **Таблицы, используемые для оформления, уменьшают доступность страниц для людей, имеющих проблемы со зрением**: [Скринридеры (Screenreaders](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screenreaders)), используемые ими, интерпретируют HTML-теги и читают содержимое пользователю. Поскольку таблицы не являются средством для представления структуры таблицы, и разметка получается сложнее, чем при использовании методов CSS, скринридеры вводят пользователей в заблуждение.
2. **Таблицы создают путаницу тегов**: Как уже упоминалось, оформление страниц с помощью таблиц даёт более сложную структуру разметки, чем специально предназначенные для этого методы. Соответственно, такой код труднее писать, поддерживать и отлаживать.
3. **Таблицы не реагируют автоматически на тип устройства**: У надлежащих контейнеров (например, {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}}, или {{htmlelement("div")}}) ширина по умолчанию равна 100% от их родительского элемента. У таблиц же размер по умолчанию подстраивается под их содержимое, так что чтобы они одинаково хорошо работали на разных типах устройств необходимо принимать дополнительные меры.

## Упражнение: ваша первая таблица

Итак, мы уже достаточно говорили о теории, теперь возьмём конкретный пример и построим таблицу.

1. Прежде всего, создайте локальную копию [blank-template.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html) и [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) в новой папке на вашем компьютере.
2. Содержимое любой таблицы заключается между двумя тегами : **[`<table></table>`](/ru/docs/Web/HTML/Element/table)**. Добавьте их в тело HTML.
3. Самым маленьким контейнером в таблице является ячейка, она создаётся элементом **[`<td>`](/ru/docs/Web/HTML/Element/td)** ('td' - сокращение от 'table data'). Введите внутри тегов table следующее:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Чтобы получить строку из четырёх ячеек, необходимо скопировать эти теги три раза. Обновите содержимое таблицы так, чтобы она выглядела следующим образом:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Как видите, ячейки не располагаются одна под другой, на самом деле они автоматически выравниваются по отношению к другим ячейкам той же строки. Каждый элемент `<td>` создаёт отдельную ячейку, а все вместе они создают первую строку. Каждая добавленная ячейка удлиняет эту строку.

Чтобы эта строка перестала расти, а новые ячейки перешли на вторую строку, необходимо использовать элемент **[`<tr>`](/ru/docs/Web/HTML/Element/tr)** ('tr' - сокращение от 'table row'). Попробуем, как это получится.

1. Поместите четыре уже созданных ячейки между тегами `<tr>` как здесь показано:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Теперь, когда одна строка уже есть, добавим ещё — каждую строку надо вложить в дополнительный элемент `<tr>`, а каждая ячейка должна быть внутри `элемента <td>`.

В результате получится таблица, которая будет выглядеть примерно так:

| Hi, I'm your first cell. | I'm your second cell. | I'm your third cell. | I'm your fourth cell. |
| ------------------------ | --------------------- | -------------------- | --------------------- |
| Second row, first cell.  | Cell 2.               | Cell 3.              | Cell 4.               |

> [!NOTE]
> Этот пример можно также найти на GitHub под названием [simple-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/simple-table.html) ([see it live also](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## Добавление заголовков с помощью элементов \<th>

Теперь обратимся к табличным заголовкам — особым ячейкам, которые идут вначале строки или столбца и определяют тип данных, которые содержит данная строка или столбец (как "Person" и "Age" в первом примере данной статьи). Чтобы показать, для чего они нужны, возьмём следующий пример. Сначала исходный код:

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Breed</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Owner</td>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <td>Eating Habits</td>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

Теперь как выглядит таблица:

|               | Knocky                    | Flor            | Ella         | Juan                      |
| ------------- | ------------------------- | --------------- | ------------ | ------------------------- |
| Breed         | Jack Russell              | Poodle          | Streetdog    | Cocker Spaniel            |
| Age           | 16                        | 9               | 10           | 5                         |
| Owner         | Mother-in-law             | Me              | Me           | Sister-in-law             |
| Eating Habits | Eats everyone's leftovers | Nibbles at food | Hearty eater | Will eat till he explodes |

Проблема в том, что, хотя вы и можете представить, о чем идёт речь, ссылаться на эти данные не так легко, как хотелось бы. Лучше, чтобы строка и столбец с заголовками как-то выделялись.

### Упражнение: заголовки

Попробуем улучшить эту таблицу.

1. Сначала создайте локальную копию [dogs-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table.html) и [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) в новой папке на вашем компьютере. HTML содержит пример Dogs, который вы уже видели выше.
2. Чтобы опознавать заголовки таблицы в качестве заголовков, визуально и семантически, можно использовать элемент **[`<th>`](/ru/docs/Web/HTML/Element/th)** ('th' сокращение от 'table header'). Он работает в точности как `<td>`, за исключением того, что обозначает заголовок, а не обычную ячейку. Замените в своём HTML все элементы `<td>`, содержащие заголовки, на элементы `<th>`.
3. Сохраните HTML и загрузите его в браузер, и вы увидите, что заголовки теперь выглядят как заголовки.

> [!NOTE]
> Законченный пример можно найти на [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table-fixed.html) в GitHub ([посмотрите живой пример](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Для чего нужны заголовки?

Мы уже частично ответили на этот вопрос — когда заголовки выделяются, легче искать данные и таблица выглядит лучше.

> [!NOTE]
> По умолчанию к заголовкам таблицы применяется определённый стиль — они выделены жирным шрифтом и выровнены по центру, даже если вы не задавали для них стиль специально.

Заголовки дают дополнительное преимущество — вместе с атрибутом `scope` (который мы будем изучать в следующей статье) они помогают улучшить связь каждого заголовка со всеми данными строки или столбца одновременно, что довольно полезно

## Слияние нескольких строк или столбцов

Иногда нам нужно, чтобы ячейки распространялись на несколько строк или столбцов. Возьмём простой пример, в котором приведены имена животных. Иногда бывает нужно вывести имена людей рядом с именами животных. А иногда это не требуется, и тогда мы хотим, чтобы имя животного занимало всю ширину.

Исходная разметка выглядит так:

```html
<table>
  <tr>
    <th>Animals</th>
  </tr>
  <tr>
    <th>Hippopotamus</th>
  </tr>
  <tr>
    <th>Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th>Crocodile</th>
  </tr>
  <tr>
    <th>Chicken</th>
    <td>Cock</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
```

Но результат не такой, как хотелось бы:

| Animals      |      |
| ------------ | ---- |
| Hippopotamus |      |
| Horse        | Mare |
| Stallion     |      |
| Crocodile    |      |
| Chicken      | Cock |
| Rooster      |      |

Нужно, чтобы "Animals", "Hippopotamus" и "Crocodile" распространялись на два столбца, а "Horse" и "Chicken" - на две строки. К счастью, табличные заголовки и ячейки имеют атрибуты `colspan` `и rowspan`, которые позволяют это сделать. Оба принимают безразмерное числовое значение, которое равно количеству строк или столбцов, на которые должны распространяться ячейки. Например, `colspan="2"` распространяет ячейку на два столбца.

Воспользуемся `colspan` и `rowspan` чтобы улучшить таблицу.

1. Сначала создайте локальную копию [animals-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table.html) и [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) в новой папке на вашем компьютере. Код HTML содержит пример с животными, который вы уже видели выше.
2. Затем используйте атрибут `colspan` чтобы распространить "Animals", "Hippopotamus" и "Crocodile" на два столбца.
3. Наконец, используйте атрибут `rowspan` чтобы распространить "Horse" и "Chicken" на две строки.
4. Сохраните код и откройте его в браузере, чтобы увидеть улучшения.

> [!NOTE]
> Законченный пример можно посмотреть в [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table-fixed.html) на GitHub ([живой пример](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Стилизация столбцов

И последняя возможность, о которой рассказывается в данной статье. HTML позволяет указать, какой стиль нужно применять к целому столбцу данных сразу — для этого применяют элементы **[`<col>`](/ru/docs/Web/HTML/Element/col)** и **[`<colgroup>`](/ru/docs/Web/HTML/Element/colgroup)**. Их ввели, поскольку задавать стиль для каждой ячейки в отдельности или использовать сложный селектор вроде {{cssxref(":nth-child()")}} было бы слишком утомительно.

Возьмём простой пример:

```html
<table>
  <tr>
    <th>Data 1</th>
    <th style="background-color: yellow">Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td style="background-color: yellow">Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td style="background-color: yellow">Jazz</td>
  </tr>
</table>
```

Что даёт нам:

| Data 1   | Data 2 |
| -------- | ------ |
| Calcutta | Orange |
| Robots   | Jazz   |

Он не идеален, поскольку нам пришлось повторить информацию о стиле для всех трёх ячеек в столбце (в реальном проекте, возможно, придётся вводить `class` на всех трёх и вводит правило в таблице стилей). Вместо этого, мы можем задать информацию один раз, в элементе `<col>`. `Элемент <col>` задаётся в контейнере `<colgroup>` сразу же за открывающим тегом `<table>`. Эффект, который мы видели выше, можно задать так:

```html
<table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
  </colgroup>
  <tr>
    <th>Data 1</th>
    <th>Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td>Jazz</td>
  </tr>
</table>
```

Мы определяем два "стилизующих столбца". Мы не применяем стиль к первому столбцу, но пустой элемент `<col>` ввести необходимо — иначе стиль будет применён только к первому столбцу.

Если бы мы хотели применить информацию о стиле к обоим столбцам, мы могли бы просто ввести один элемент `<col>` с атрибутом span, таким образом:

```html
<colgroup>
  <col style="background-color: yellow" span="2" />
</colgroup>
```

Подобно `colspan` и `rowspan`, `span` принимает безразмерное числовое значение, указывающее, к какому количеству столбцов нужно применить данный стиль.

### Упражнение: colgroup и col

Теперь попробуйте сами.

Ниже приведена таблица уроков по языкам. В пятницу (Friday) новый класс целый день изучает голландский (Dutch), кроме того, во вторник (Tuesday) и четверг (Thursdays) есть занятия по немецкому (German). Учительница хочет выделить столбцы, соответствующие дням, когда она преподаёт.

|            | Mon     | Tues    | Wed | Thurs   | Fri   | Sat | Sun |
| ---------- | ------- | ------- | --- | ------- | ----- | --- | --- |
| 1st period | English |         |     | German  | Dutch |     |     |
| 2nd period | English | English |     | German  | Dutch |     |     |
| 3rd period |         | German  |     | German  | Dutch |     |     |
| 4th period |         | English |     | English | Dutch |     |     |

Заново создайте таблицу, проделав указанные ниже действия.

1. Сначала создайте локальную копию файла [timetable.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable.html) в новой папке на вашем компьютере. Код HTML содержит таблицу, которую вы уже видели выше, но без информации о стиле.
2. Добавьте элемент `<colgroup>` вверху таблицы, сразу же под тегом `<table>`, куда вы сможете вставлять элементы `<col>`.
3. Первые два столбца надо оставить без стиля..
4. Добавьте цвет фона для третьего столбца. Значением атрибута `style` будет `background-color:#97DB9A;`
5. Задайте ширину для четвёртого столбца. `Значением атрибута style` будет `width: 42px;`
6. Добавьте цвет фона для пятого столбца. Значением атрибута `style` будет `background-color: #97DB9A;`
7. Добавьте другой цвет фона и границу для шестого столбца, чтобы показать, что это особый день и она ведёт новый класс. Значениями атрибута `style` будут: `background-color:#DCC48E; border:4px solid #C1437A;`
8. Последние два дня выходные; значением атрибута style `будет width: 42px;`

Посмотрите, что у вас получилось. Если застрянете, или захотите себя проверить, можете посмотреть нашу версию в [timetable-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable-fixed.html) ([посмотрите живой пример](https://mdn.github.io/learning-area/html/tables/basic/timetable-fixed.html)).

## Итог

Здесь приведены практически все базовые сведения о таблицах HTML. В следующей статье вы получите более продвинутые сведения на эту тему.

{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}
