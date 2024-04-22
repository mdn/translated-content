---
title: Элементы изображений, медиа и форм
slug: Learn/CSS/Building_blocks/Images_media_form_elements
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}

В этом уроке мы рассмотрим, как обрабатываются определённые специальные элементы в CSS. Элементы изображений, других медиа и форм ведут себя иначе при их стилизации в CSS чем обычные блоки. Понимание того, что возможно, а что нет спасут вас от лишних разочарований и этот урок прольёт свет на некоторые из этих основных вещей, которые вам нужно знать.

| Prerequisites: | Basic computer literacy, [basic software installed](/en-US/Learn/Getting_started_with_the_web/Installing_basic_software), basic knowledge of [working with files](/en-US/Learn/Getting_started_with_the_web/Dealing_with_files), HTML basics (study [Introduction to HTML](/ru/docs/Learn/HTML/Introduction_to_HTML)), and an idea of how CSS works (study [CSS first steps](/ru/docs/Learn/CSS/First_steps).) |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objective:     | To understand the way that some elements behave unusually when styled with CSS.                                                                                                                                                                                                                                                                                                                                |

## Замещаемые элементы

Изображения и видео описываются как **[Замещаемые элементы](/ru/docs/Web/CSS/Replaced_element)**. Это значит, что CSS не может влиять на внутреннюю планировку этих элементов — только на их позицию на странице среди других элементов. Однако, как мы увидим, существуют различные вещи, которые CSS может сделать с изображением.

Конкретные замещаемые элементы, такие как изображения и видео, можно также описать, как элементы имеющие **соотношение сторон**. Это значит, что такой элемент имеет размер как по горизонтали (x) так и по вертикали (y) и будет отображаться используя "родные" размеры файла по умолчанию.

## Размер изображений (калибровка)

Как вы уже знаете из этих уроков, всё в CSS генерирует блоки. Если вы поместите файл изображения внутрь блока, который больше или меньше исходного размера файла изображения в обоих направлениях, то он отобразиться либо в меньшем размере чем блок, либо перекроет его. Вам нужно принять решение с тем, что произойдёт с перекрытием.

В примере ниже у нас два блока, оба имеют размер по 200px:

- Один содержит изображение, которое 200px — оно меньше, чем блок и не растягивается что бы заполнить его.
- Второй больше 200px и перекрывает блок.

{{EmbedGHLiveSample("css-examples/learn/images/size.html", '100%', 1000)}}

Так что же мы можем сделать с проблемой перекрывания?

Как мы учили в [нашем предыдущем уроке](/ru/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS), распространённая техника — это сделать {{cssxref("max-width")}} изображения - 100%. Это позволит уменьшить размер изображения по отношению к блоку, но не увеличит его. Такой метод будет работать и с другими замещаемыми элементами такими как [`<video>`](/ru/docs/Web/HTML/Element/video) или [`<iframe>`](/ru/docs/Web/HTML/Element/iframe).

**Попробуйте добавить `max-width: 100%` к элементу `<img>` в примере выше. Вы увидите, что меньшее изображение останется неизмененным, а большее изображение станет меньше, чтобы заполнить блок.**

Вы можете сделать другие варианты изображений внутри контейнеров. Например, вы можете захотеть дать изображению такие размеры, чтоб оно полностью покрывало блок.

Здесь вам может помочь свойство {{cssxref("object-fit")}}. Используя `object-fit`, можно определять размеры замещаемого элемента для заполнения блока различными способами.

Ниже мы использовали значение `cover`, которое уменьшает изображение, сохраняя соотношение сторон так, что он аккуратно заполняет блок. Поскольку соотношения сторон сохраняются, некоторые части изображения будут обрезаны блоком.

{{EmbedGHLiveSample("css-examples/learn/images/object-fit.html", '100%', 1000)}}

Если мы используем `contain` в качестве значения, изображение будет уменьшаться до тех пор, пока не станет достаточно маленьким чтобы заполнить блок. Это приведёт к "почтовой упаковке", если оно не будет иметь такого же соотношения сторон, как блок.

Вы также можете попробовать значение `fill`, которое будет заполнять блок, но при этом не сохранять соотношение сторон.

## Замещаемые элементы в вёрстке

При использовании различных методов вёрстки CSS на замещаемых элементах, вы можете обнаружить, что они ведут себя немного иначе, чем другие элементы. Например, во flex или grid layout элементы растягиваются по умолчанию чтобы заполнить всю площадь. Изображения растягиваться не будут, вместо этого они будут выравнены на начало площади flex- или grig-контейнера.

Вы можете увидеть, как это происходит в примере ниже, где мы имеем grid-контейнер из двух столбцов и двух строк, который содержит 4 объекта. Все `<div>` элементы имеют цвет фона и растягиваются чтобы заполнить строки и столбцы. Однако, изображение не растягивается.

{{EmbedGHLiveSample("css-examples/learn/images/layout.html", '100%', 1000)}}

Если вы изучаете эти уроки по порядку, тогда вы, возможно, ещё не рассматривали layout. Просто держите в уме, что замещаемые элементы, становясь частью grid- или flex-разметки, ведут себя иначе по умолчанию, главным образом, чтобы избежать их странного растяжения по разметке.

Для того чтобы заставить изображение растянуться чтобы заполнить grid-ячейку, вы должны сделать что-то наподобие следующего:

```css
img {
  width: 100%;
  height: 100%;
}
```

Это, однако, растянет изображение, и скорее всего это не то чего бы вам хотелось делать.

## Элементы форм

Элементы форм могут быть сложной проблемой когда дело касается их стилизации в CSS, и [Web Forms module](/ru/docs/Learn/Forms) содержит детальные руководства по хитрым аспектам стилизации элементов форм, которые я не буду представлять здесь в полном объёме. В этом разделе статьи стоит выделить несколько ключевых моментов.

Многие элементы управления форм добавляются на вашу страницу с помощью элемента [`<input>`](/ru/docs/Web/HTML/Element/input) — он определяет простые поля формы, такие как ввод текста, и более сложные поля, добавленные в HTML5, такие как средства выбора цвета и даты. Существуют некоторые дополнительные элементы, такие как [`<textarea>`](/ru/docs/Web/HTML/Element/textarea) для ввода многострочного текста, а также элементы которые содержали части маркировки форм, такие как [`<fieldset>`](/ru/docs/Web/HTML/Element/fieldset) и [`<legend>`](/ru/docs/Web/HTML/Element/legend).

HTML5 также содержит атрибуты, которые позволяют веб-разработчикам указывать какие поля являются обязательными и даже тип контента, который необходимо вводить. Если пользователь вводит неожидаемые данные или оставляет обязательные поля пустыми, браузер может выдать сообщение об ошибке. Разные браузеры несовместимы в том, сколько стилей и настроек они допускают для таких элементов.

### Стилизация элементов ввода текста

Элементы, позволяющие вводить текст, такие как `<input type="text">`, конкретные типы вроде `<input type="email">`, и элемент `<textarea>`, являются довольно простыми в стилизации и как правило ведут себя также, как и другие блоки на вашей странице. Однако, стилизация по умолчанию таких элементов будет отличаться в зависимости от операционной системы и браузера которые использует пользователь, посещая сайт.

В примере ниже мы стилизовали несколько вводов текста используя CSS — вы можете увидеть, что такие вещи как borders, margins и padding, все применяются так как вы бы ожидали. Мы используем селекторы атрибутов для выборов различных типов ввода. Попробуйте изменить то, как эти формы выглядят, регулируя границы, добавляя цвет фона полям и изменяя шрифты padding.

{{EmbedGHLiveSample("css-examples/learn/images/form.html", '100%', 1000)}}

> **Предупреждение:** **Важно:** При изменении стиля элементов формы следует соблюдать осторожность, чтобы убедиться, что для пользователя все ещё очевидно, что они являются элементами форм. Вы можете создать форму ввода без границ и фона, которая практически неотличима от окружающего контента и это может сделать очень сложно распознаваемой, чтобы заполнить её.

Как объяснено в уроке [стилизация форм](/ru/docs/Learn/Forms/Styling_web_forms) в части HTML этого курса, многие из более сложных типов ввода определяются операционной системой и не доступны для стилизации. Поэтому вы всегда должны предполагать, что формы будут выглядеть по-разному для разных пользователей и тестировать сложные формы во многих браузерах.

### Наследование и элементы форм

В некоторых браузерах, элементы форм не наследуют стиль шрифтов по умолчанию. Поэтому если вы хотите быть уверенными что ваши поля форм используют шрифт определённый в body или родительском элементе, вы должны добавить это правило в ваш CSS.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### Элементы форм и box-sizing

В разных браузерах элементы формы используют разные правила определения размеров блоков для разных виджетов. вы изучали свойство `box-sizing` в [нашем уроке Блоки в CSS](/ru/docs/Learn/CSS/Building_blocks/The_box_model) и можете использовать эти знания при стилизации форм для обеспечения единообразия при настройке ширины и высоты элементов форм.

Для единообразия рекомендуется устанавливать margin и padding на `0` для всех элементов, а затем добавлять их (margin и padding) при стилизации отдельных элементов.

```css
button,
input,
select,
textarea {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

### Другие полезные настройки

В дополнение к правилам отмеченных выше, вы должны также установить `overflow: auto` для `<textarea>` чтобы IE не отображал полосу прокрутки, когда в этом нет необходимости:

```css
textarea {
  overflow: auto;
}
```

### Собираем все вместе в "перезагрузку"

В качестве последнего шага, мы можем обернуть различные свойства, обсуждаемые выше, в следующую «форму перезагрузки», чтобы обеспечить согласованную основу для работы. Это включает все элементы упомянутые в последних трёх разделах:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

textarea {
  overflow: auto;
}
```

> **Примечание:** Normalizing stylesheets are used by many developers to create a set of baseline styles to use on all projects. Typically these do similar things to those described above, making sure that anything different across browsers is set to a consistent default before you do your own work on the CSS. They are not as important as they once were, as browsers are typically more consistent than in the past. However if you want to take a look at one example, check out [Normalize.css](http://necolas.github.io/normalize.css/), which is a very popular stylesheet used as a base by many projects.

Для дополнительной информации по стилизации форм, посмотрите две статьи в разделе HTML этого руководства.

- [Styling web forms](/ru/docs/Learn/Forms/Styling_web_forms)
- [Advanced form styling](/ru/docs/Learn/Forms/Advanced_form_styling)

## Summary

This lesson has highlighted some of the differences you will encounter when working with images, media, and other unusual elements in CSS. In the next article we'll look over a few tips you'll find useful when you have to style HTML tables.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}

## In this module

1. [Cascade and inheritance](/ru/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2. [CSS selectors](/ru/docs/Learn/CSS/Building_blocks/Selectors)

   - [Type, class, and ID selectors](/ru/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
   - [Attribute selectors](/ru/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
   - [Pseudo-classes and pseudo-elements](/ru/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
   - [Combinators](/ru/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3. [The box model](/ru/docs/Learn/CSS/Building_blocks/The_box_model)
4. [Backgrounds and borders](/ru/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5. [Handling different text directions](/ru/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6. [Overflowing content](/ru/docs/Learn/CSS/Building_blocks/Overflowing_content)
7. [Values and units](/ru/docs/Learn/CSS/Building_blocks/Values_and_units)
8. [Sizing items in CSS](/ru/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9. [Images, media, and form elements](/ru/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [Styling tables](/ru/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [Debugging CSS](/ru/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [Organizing your CSS](/ru/docs/Learn/CSS/Building_blocks/Organizing)
