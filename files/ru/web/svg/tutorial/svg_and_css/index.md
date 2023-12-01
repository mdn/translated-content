---
title: SVG и CSS
slug: Web/SVG/Tutorial/SVG_and_CSS
---

На этой странице показано, как использовать CSS со специальным языком для создания графики: [SVG](/ru/docs/SVG).

Вы сделаете небольшой пример, которые можно будет запустить в любом браузере с поддержкой SVG.

Это вторая секция Части II [Руководство по CSS](/ru/docs/Web/Guide/CSS/Getting_started).
Предыдущая секция: [JavaScript](/ru/docs/Web/JavaScript/Getting_Started)
Следующая секция: [Данные XML](/ru/docs/Web/Guide/CSS/Getting_started/XML_data)

### Общая информация: SVG

_SVG_ (Scalable Vector Graphics) является подмножеством языка XML и предназначен для создания графики.

SVG можно использовать для статических изображений, а также для анимаций и создания пользовательских интерфейсов.

Как и прочие языки, основанные на XML, SVG поддерживает использование таблиц стилей CSS, что позволяет отделить различные варианты визуального отображения от структуры данных.

Кроме того, таблицы стилей, которые вы используете в других языках разметки документов, могут содержать ссылку на SVG графику, в тех местах, где необходимо изображение. Например, в таблице стилей, для вашего HTML документа, можно указать ссылку (URL) на SVG графику в свойстве background.

| На момент написания статьи (середина 2011 года), большинство современных браузеров имеет базовую поддержку SVG, в том числе Internet Explorer 9 и выше. Некоторые дополнительные возможности SVG не поддерживаются, либо поддерживаются лишь частично, в определённых браузерах. Для более подробной информации о текущей поддержке SVG, см. [SVG tables on caniuse.com](http://caniuse.com/#search=SVG), либо в таблицах совместимости [SVG element reference](/ru/docs/SVG/Element), для информации о поддержке отдельных элементов.В остальные версии можно добавить поддержку SVG, установив дополнительный плагин, например, предоставленный компанией [Adobe](http://www.adobe.com/svg/viewer/install/main.html).Более подробная информация о SVG в Mozilla, представлена на станице [SVG](/ru/docs/SVG) в этой wiki. |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

### За дело: Демонстрация SVG

Создайте новый документ SVG, как обычный текстовый файл, `doc8.svg`. Скопируйте и вставьте содержимое блока ниже, убедитесь, что пролистали его полностью, чтобы скопировать все:

```xml
<?xml version="1.0" standalone="no"?>

<?xml-stylesheet type="text/css" href="style8.css"?>

<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="600px" height="600px" viewBox="-300 -300 600 600"
  xmlns="http://www.w3.org/2000/svg" version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">

<title>SVG demonstration</title>
<desc>Mozilla CSS Getting Started - SVG demonstration</desc>

<defs>
  <g id="segment" class="segment">
    <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
    <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
    </g>
  <g id="quadrant">
    <use xlink:href="#segment"/>
    <use xlink:href="#segment" transform="rotate(18)"/>
    <use xlink:href="#segment" transform="rotate(36)"/>
    <use xlink:href="#segment" transform="rotate(54)"/>
    <use xlink:href="#segment" transform="rotate(72)"/>
    </g>
  <g id="petals">
    <use xlink:href="#quadrant"/>
    <use xlink:href="#quadrant" transform="rotate(90)"/>
    <use xlink:href="#quadrant" transform="rotate(180)"/>
    <use xlink:href="#quadrant" transform="rotate(270)"/>
    </g>
  <radialGradient id="fade" cx="0" cy="0" r="200"
      gradientUnits="userSpaceOnUse">
    <stop id="fade-stop-1" offset="33%"/>
    <stop id="fade-stop-2" offset="95%"/>
    </radialGradient>
  </defs>

<text id="heading" x="-280" y="-270">
  SVG demonstration</text>
<text  id="caption" x="-280" y="-250">
  Move your mouse pointer over the flower.</text>

<g id="flower">
  <circle id="overlay" cx="0" cy="0" r="200"
    stroke="none" fill="url(#fade)"/>
  <use id="outer-petals" xlink:href="#petals"/>
  <use id="inner-petals" xlink:href="#petals"
    transform="rotate(9) scale(0.33)"/>
  </g>

</svg>
```

Создайте новый файл CSS, `style8.css`. копируйте и вставьте содержимое блока ниже, убедитесь, что пролистали его полностью, чтобы скопировать все:

```css
/*** SVG demonstration ***/

/* page */
svg {
  background-color: beige;
}

#heading {
  font-size: 24px;
  font-weight: bold;
}

#caption {
  font-size: 12px;
}

/* flower */
#flower:hover {
  cursor: crosshair;
}

/* gradient */
#fade-stop-1 {
  stop-color: blue;
}

#fade-stop-2 {
  stop-color: white;
}

/* outer petals */
#outer-petals {
  opacity: 0.75;
}

#outer-petals .segment-fill {
  fill: azure;
  stroke: lightsteelblue;
  stroke-width: 1;
}

#outer-petals .segment-edge {
  fill: none;
  stroke: deepskyblue;
  stroke-width: 3;
}

#outer-petals .segment:hover > .segment-fill {
  fill: plum;
  stroke: none;
}

#outer-petals .segment:hover > .segment-edge {
  stroke: slateblue;
}

/* inner petals */
#inner-petals .segment-fill {
  fill: yellow;
  stroke: yellowgreen;
  stroke-width: 1;
}

#inner-petals .segment-edge {
  fill: none;
  stroke: yellowgreen;
  stroke-width: 9;
}

#inner-petals .segment:hover > .segment-fill {
  fill: darkseagreen;
  stroke: none;
}

#inner-petals .segment:hover > .segment-edge {
  stroke: green;
}
```

Откройте документ в вашем браузере с поддержкой SVG. Переместите указатель мыши на изображение.

Эта wiki не поддерживает вставку SVG в страницы, поэтому мы не имеем возможности продемонстрировать это здесь. Изображение будет выглядеть так:

| ![SVG demonstration](svg-flower.png) |
| ------------------------------------ |

Примечания к демонстрации:

- Документ SVG привязывается к таблице стилей общепринятым способом.
- SVG содержит собственные свойства CSS и их значения. Некоторые из них похожи на значения CSS для HTML.

| Изменить таблицу стилей так, чтобы все внутренние лепестки становились розовыми, по наведению курсора на одного из них, при этом нельзя менять принцип работы других лепестков. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[Посмотреть решение к этому заданию.](/en/CSS/Getting_Started/Challenge_solutions#SVG_and_CSS)

#### Что дальше?

В этой демонстрации, ваш браузер с поддержкой SVG уже знает, как отображать элементы SVG. Таблица стилей всего лишь некоторым образом меняет отображение. То же самое происходит с документами HTML и XUL. Однако CSS можно использовать для любых документов XML, в которых нет предусмотренного по умолчанию способа отображения элементов. Данный пример продемонстрирован на следующей странице: [Данные XML](/ru/docs/Web/Guide/CSS/Getting_started/XML_data)
