---
title: <color>
slug: Web/CSS/color_value
---

{{CSSRef}}

Тип **`<color>`** [CSS](/ru/docs/Web/CSS) [data type](/ru/docs/Web/CSS/CSS_Types) предоставляет цвет в цветовом спектре [sRGB](https://en.wikipedia.org/wiki/SRGB). В `<color>` может включать значения прозрачности Альфа-канала ([alpha-channel](https://en.wikipedia.org/wiki/Alpha_compositing)), указывающие, как цвет [сочетается](https://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending) с его фоном.

В `<color>` может быть определена любым из следующих способов can.

- Использование или подключённого свойства ведённого в параметр (например, `blue` или `transparent`)
- Использование [кубической системы координат RGB](https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation) (via the #-hexadecimal or the `rgb()` and `rgba()` functional notations)![Цветовая модель представлена виде куба](https://en.wikipedia.org/wiki/RGB_color_model#/media/File:RGB_color_solid_cube.png)
- Использование [цилиндрической системы координат HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) (через функциональные обозначения `hsl()` и `hsla()`)

> **Примечание:**В этой статье подробно описывается тип данных \<color>. Дополнительные сведения об использовании цвета в HTML см. В разделе применение цвета к [элементам HTML с помощью CSS](/ru/docs/Web/HTML/Applying_color).

## Синтаксис

Для типа данных задаётся `<color>` с помощью одного из следующих параметров.

> **Примечание:** значения `<color>` точно определены, их фактический внешний вид может отличаться (иногда значительно) от устройства к устройству. Это связано с тем что большинство устройств не откалиброваны, а некоторые браузеры не поддерживают цветовые профили [устройств вывода](https://en.wikipedia.org/wiki/ICC_profile).

### Ключевые цвета

Ключевые слова для цвета - это идентификаторы без учёта регистра, представляющие определённый цвет, например `red`, `blue`, `black` или `lightseagreen`. Хотя названия более или менее описывают их соответствующие цвета, они по существу искусственны, без строгого обоснования используемых имён.

Есть несколько предостережений, которые следует учитывать при использовании ключевых слов цвета:

- [HTML](/ru/docs/Web/HTML) распознает только 16 основных цветовых ключевых слов, найденных в CSS1, используя определённый алгоритм для преобразования нераспознанных значений (часто в совершенно разные цвета). Другие ключевые слова цвета должны использоваться только в CSS и [SVG](/ru/docs/Web/SVG).
- В отличие от HTML, CSS будет полностью игнорировать неизвестные ключевые слова.
- Ключевые слова цвета все представляют собой простые, сплошные цвета, без прозрачности.
- Несколько ключевых слов являются псевдонимами друг для друга:

  - `aqua` / `cyan`
  - `fuchsia` / `magenta`
  - `darkgray` / `darkgrey`
  - `darkslategray` / `darkslategrey`
  - `dimgray` / `dimgrey`
  - `lightgray` / `lightgrey`
  - `lightslategray` / `lightslategrey`
  - `gray` / `grey`
  - `slategray` / `slategrey`

- Хотя многие ключевые слова были адаптированы из [X11](https://en.wikipedia.org/wiki/X_Window_System), их значения RGB могут отличаться от соответствующего цвета в системах X11, поскольку производители иногда адаптируют цвета X11 к своему конкретному оборудованию.

> **Примечание:** Список принятых ключевых слов претерпел много изменений в ходе эволюции CSS:
>
> - CSS Level 1 включал только 16 основных цветов, называемых цветами [VGA](https://en.wikipedia.org/wiki/VGA), поскольку они были взяты из набора отображаемых цветов на видеокартах VGA
> - CSS Level 2 добавил ключевое слово `orange`.
> - Хотя различные цвета не в спецификации (в основном адаптированные из списка цветов X11) поддерживались ранними браузерами, они не были формально определены до уровня SVG 1.0 и CSS Colors 3. Они называются расширенными цветовыми _ключевыми_ словами, _цветами X11_ или цветами SVG.
> - CSS Colors Level 4 добавил ключевое слово rebeccapurple, [чтобы почтить пионера веб-Эрика Мейера.](https://codepen.io/trezy/post/honoring-a-great-man)

<table>
  <thead>
    <tr>
      <th scope="col">Спецификация</th>
      <th scope="col">Эквивалент RGB</th>
      <th scope="col">Ключевое слово</th>
      <th scope="col">RGB hex значение</th>
      <th scope="col">Видео сайта</th>
    </tr>
  </thead>
  <tbody>
    <tr style="position: relative">
      <td rowspan="16">{{SpecName("CSS1")}}</td>
      <td style="background: #000"></td>
      <td style="text-align: center"><code>black</code></td>
      <td><code>#000000</code></td>
      <td style="background: black"></td>
    </tr>
    <tr>
      <td style="background: #c0c0c0"></td>
      <td style="text-align: center"><code>silver</code></td>
      <td><code>#c0c0c0</code></td>
      <td style="background: silver"></td>
    </tr>
    <tr>
      <td style="background: #808080"></td>
      <td style="text-align: center"><code>gray</code></td>
      <td><code>#808080</code></td>
      <td style="background: gray"></td>
    </tr>
    <tr>
      <td style="background: #fff"></td>
      <td style="text-align: center"><code>white</code></td>
      <td><code>#ffffff</code></td>
      <td style="background: white"></td>
    </tr>
    <tr>
      <td style="background: #800000"></td>
      <td style="text-align: center"><code>maroon</code></td>
      <td><code>#800000</code></td>
      <td style="background: maroon"></td>
    </tr>
    <tr>
      <td style="background: #f00"></td>
      <td style="text-align: center"><code>red</code></td>
      <td><code>#ff0000</code></td>
      <td style="background: red"></td>
    </tr>
    <tr>
      <td style="background: #800080"></td>
      <td style="text-align: center"><code>purple</code></td>
      <td><code>#800080</code></td>
      <td style="background: purple"></td>
    </tr>
    <tr>
      <td style="background: #f0f"></td>
      <td style="text-align: center"><code>fuchsia</code></td>
      <td><code>#ff00ff</code></td>
      <td style="background: fuchsia"></td>
    </tr>
    <tr>
      <td style="background: #008000"></td>
      <td style="text-align: center"><code>green</code></td>
      <td><code>#008000</code></td>
      <td style="background: green"></td>
    </tr>
    <tr>
      <td style="background: #0f0"></td>
      <td style="text-align: center"><code>lime</code></td>
      <td><code>#00ff00</code></td>
      <td style="background: lime"></td>
    </tr>
    <tr>
      <td style="background: #808000"></td>
      <td style="text-align: center"><code>olive</code></td>
      <td><code>#808000</code></td>
      <td style="background: olive"></td>
    </tr>
    <tr>
      <td style="background: #ff0"></td>
      <td style="text-align: center"><code>yellow</code></td>
      <td><code>#ffff00</code></td>
      <td style="background: yellow"></td>
    </tr>
    <tr>
      <td style="background: #000080"></td>
      <td style="text-align: center"><code>navy</code></td>
      <td><code>#000080</code></td>
      <td style="background: navy"></td>
    </tr>
    <tr>
      <td style="background: #00f"></td>
      <td style="text-align: center"><code>blue</code></td>
      <td><code>#0000ff</code></td>
      <td style="background: blue"></td>
    </tr>
    <tr>
      <td style="background: #008080"></td>
      <td style="text-align: center"><code>teal</code></td>
      <td><code>#008080</code></td>
      <td style="background: teal"></td>
    </tr>
    <tr>
      <td style="background: #0ff"></td>
      <td style="text-align: center"><code>aqua</code></td>
      <td><code>#00ffff</code></td>
      <td style="background: aqua"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS2.1")}}</td>
      <td style="background: #ffa500"></td>
      <td style="text-align: center"><code>orange</code></td>
      <td><code>#ffa500</code></td>
      <td style="background: orange"></td>
    </tr>
    <tr>
      <td rowspan="130">{{SpecName("CSS3 Colors")}}</td>
      <td style="background: #f0f8ff"></td>
      <td style="text-align: center"><code>aliceblue</code></td>
      <td><code>#f0f8ff</code></td>
      <td style="background: aliceblue"></td>
    </tr>
    <tr>
      <td style="background: #faebd7"></td>
      <td style="text-align: center"><code>antiquewhite</code></td>
      <td><code>#faebd7</code></td>
      <td style="background: antiquewhite"></td>
    </tr>
    <tr>
      <td style="background: #7fffd4"></td>
      <td style="text-align: center"><code>aquamarine</code></td>
      <td><code>#7fffd4</code></td>
      <td style="background: aquamarine"></td>
    </tr>
    <tr>
      <td style="background: #f0ffff"></td>
      <td style="text-align: center"><code>azure</code></td>
      <td><code>#f0ffff</code></td>
      <td style="background: azure"></td>
    </tr>
    <tr>
      <td style="background: #f5f5dc"></td>
      <td style="text-align: center"><code>beige</code></td>
      <td><code>#f5f5dc</code></td>
      <td style="background: beige"></td>
    </tr>
    <tr>
      <td style="background: #ffe4c4"></td>
      <td style="text-align: center"><code>bisque</code></td>
      <td><code>#ffe4c4</code></td>
      <td style="background: bisque"></td>
    </tr>
    <tr>
      <td style="background: #ffebcd"></td>
      <td style="text-align: center"><code>blanchedalmond</code></td>
      <td><code>#ffebcd</code></td>
      <td style="background: blanchedalmond"></td>
    </tr>
    <tr>
      <td style="background: #8a2be2"></td>
      <td style="text-align: center"><code>blueviolet</code></td>
      <td><code>#8a2be2</code></td>
      <td style="background: blueviolet"></td>
    </tr>
    <tr>
      <td style="background: #a52a2a"></td>
      <td style="text-align: center"><code>brown</code></td>
      <td><code>#a52a2a</code></td>
      <td style="background: brown"></td>
    </tr>
    <tr>
      <td style="background: #deb887"></td>
      <td style="text-align: center"><code>burlywood</code></td>
      <td><code>#deb887</code></td>
      <td style="background: burlywood"></td>
    </tr>
    <tr>
      <td style="background: #5f9ea0"></td>
      <td style="text-align: center"><code>cadetblue</code></td>
      <td><code>#5f9ea0</code></td>
      <td style="background: cadetblue"></td>
    </tr>
    <tr>
      <td style="background: #7fff00"></td>
      <td style="text-align: center"><code>chartreuse</code></td>
      <td><code>#7fff00</code></td>
      <td style="background: chartreuse"></td>
    </tr>
    <tr>
      <td style="background: #d2691e"></td>
      <td style="text-align: center"><code>chocolate</code></td>
      <td><code>#d2691e</code></td>
      <td style="background: chocolate"></td>
    </tr>
    <tr>
      <td style="background: #ff7f50"></td>
      <td style="text-align: center"><code>coral</code></td>
      <td><code>#ff7f50</code></td>
      <td style="background: coral"></td>
    </tr>
    <tr>
      <td style="background: #6495ed"></td>
      <td style="text-align: center"><code>cornflowerblue</code></td>
      <td><code>#6495ed</code></td>
      <td style="background: cornflowerblue"></td>
    </tr>
    <tr>
      <td style="background: #fff8dc"></td>
      <td style="text-align: center"><code>cornsilk</code></td>
      <td><code>#fff8dc</code></td>
      <td style="background: cornsilk"></td>
    </tr>
    <tr>
      <td style="background: #dc143c"></td>
      <td style="text-align: center"><code>crimson</code></td>
      <td><code>#dc143c</code></td>
      <td style="background: crimson"></td>
    </tr>
    <tr>
      <td style="background: #0ff"></td>
      <td style="text-align: center">
        <code>cyan</code><br />(synonym of <code>aqua</code>)
      </td>
      <td><code>#00ffff</code></td>
      <td style="background: cyan"></td>
    </tr>
    <tr>
      <td style="background: #00008b"></td>
      <td style="text-align: center"><code>darkblue</code></td>
      <td><code>#00008b</code></td>
      <td style="background: darkblue"></td>
    </tr>
    <tr>
      <td style="background: #008b8b"></td>
      <td style="text-align: center"><code>darkcyan</code></td>
      <td><code>#008b8b</code></td>
      <td style="background: darkcyan"></td>
    </tr>
    <tr>
      <td style="background: #b8860b"></td>
      <td style="text-align: center"><code>darkgoldenrod</code></td>
      <td><code>#b8860b</code></td>
      <td style="background: darkgoldenrod"></td>
    </tr>
    <tr>
      <td style="background: #a9a9a9"></td>
      <td style="text-align: center"><code>darkgray</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgray"></td>
    </tr>
    <tr>
      <td style="background: #006400"></td>
      <td style="text-align: center"><code>darkgreen</code></td>
      <td><code>#006400</code></td>
      <td style="background: darkgreen"></td>
    </tr>
    <tr>
      <td style="background: #a9a9a9"></td>
      <td style="text-align: center"><code>darkgrey</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgrey"></td>
    </tr>
    <tr>
      <td style="background: #bdb76b"></td>
      <td style="text-align: center"><code>darkkhaki</code></td>
      <td><code>#bdb76b</code></td>
      <td style="background: darkkhaki"></td>
    </tr>
    <tr>
      <td style="background: #8b008b"></td>
      <td style="text-align: center"><code>darkmagenta</code></td>
      <td><code>#8b008b</code></td>
      <td style="background: darkmagenta"></td>
    </tr>
    <tr>
      <td style="background: #556b2f"></td>
      <td style="text-align: center"><code>darkolivegreen</code></td>
      <td><code>#556b2f</code></td>
      <td style="background: darkolivegreen"></td>
    </tr>
    <tr>
      <td style="background: #ff8c00"></td>
      <td style="text-align: center"><code>darkorange</code></td>
      <td><code>#ff8c00</code></td>
      <td style="background: darkorange"></td>
    </tr>
    <tr>
      <td style="background: #9932cc"></td>
      <td style="text-align: center"><code>darkorchid</code></td>
      <td><code>#9932cc</code></td>
      <td style="background: darkorchid"></td>
    </tr>
    <tr>
      <td style="background: #8b0000"></td>
      <td style="text-align: center"><code>darkred</code></td>
      <td><code>#8b0000</code></td>
      <td style="background: darkred"></td>
    </tr>
    <tr>
      <td style="background: #e9967a"></td>
      <td style="text-align: center"><code>darksalmon</code></td>
      <td><code>#e9967a</code></td>
      <td style="background: darksalmon"></td>
    </tr>
    <tr>
      <td style="background: #8fbc8f"></td>
      <td style="text-align: center"><code>darkseagreen</code></td>
      <td><code>#8fbc8f</code></td>
      <td style="background: darkseagreen"></td>
    </tr>
    <tr>
      <td style="background: #483d8b"></td>
      <td style="text-align: center"><code>darkslateblue</code></td>
      <td><code>#483d8b</code></td>
      <td style="background: darkslateblue"></td>
    </tr>
    <tr>
      <td style="background: #2f4f4f"></td>
      <td style="text-align: center"><code>darkslategray</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategray"></td>
    </tr>
    <tr>
      <td style="background: #2f4f4f"></td>
      <td style="text-align: center"><code>darkslategrey</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategrey"></td>
    </tr>
    <tr>
      <td style="background: #00ced1"></td>
      <td style="text-align: center"><code>darkturquoise</code></td>
      <td><code>#00ced1</code></td>
      <td style="background: darkturquoise"></td>
    </tr>
    <tr>
      <td style="background: #9400d3"></td>
      <td style="text-align: center"><code>darkviolet</code></td>
      <td><code>#9400d3</code></td>
      <td style="background: darkviolet"></td>
    </tr>
    <tr>
      <td style="background: #ff1493"></td>
      <td style="text-align: center"><code>deeppink</code></td>
      <td><code>#ff1493</code></td>
      <td style="background: deeppink"></td>
    </tr>
    <tr>
      <td style="background: #00bfff"></td>
      <td style="text-align: center"><code>deepskyblue</code></td>
      <td><code>#00bfff</code></td>
      <td style="background: deepskyblue"></td>
    </tr>
    <tr>
      <td style="background: #696969"></td>
      <td style="text-align: center"><code>dimgray</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgray"></td>
    </tr>
    <tr>
      <td style="background: #696969"></td>
      <td style="text-align: center"><code>dimgrey</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgrey"></td>
    </tr>
    <tr>
      <td style="background: #1e90ff"></td>
      <td style="text-align: center"><code>dodgerblue</code></td>
      <td><code>#1e90ff</code></td>
      <td style="background: dodgerblue"></td>
    </tr>
    <tr>
      <td style="background: #b22222"></td>
      <td style="text-align: center"><code>firebrick</code></td>
      <td><code>#b22222</code></td>
      <td style="background: firebrick"></td>
    </tr>
    <tr>
      <td style="background: #fffaf0"></td>
      <td style="text-align: center"><code>floralwhite</code></td>
      <td><code>#fffaf0</code></td>
      <td style="background: floralwhite"></td>
    </tr>
    <tr>
      <td style="background: #228b22"></td>
      <td style="text-align: center"><code>forestgreen</code></td>
      <td><code>#228b22</code></td>
      <td style="background: forestgreen"></td>
    </tr>
    <tr>
      <td style="background: #dcdcdc"></td>
      <td style="text-align: center"><code>gainsboro</code></td>
      <td><code>#dcdcdc</code></td>
      <td style="background: gainsboro"></td>
    </tr>
    <tr>
      <td style="background: #f8f8ff"></td>
      <td style="text-align: center"><code>ghostwhite</code></td>
      <td><code>#f8f8ff</code></td>
      <td style="background: ghostwhite"></td>
    </tr>
    <tr>
      <td style="background: #ffd700"></td>
      <td style="text-align: center"><code>gold</code></td>
      <td><code>#ffd700</code></td>
      <td style="background: gold"></td>
    </tr>
    <tr>
      <td style="background: #daa520"></td>
      <td style="text-align: center"><code>goldenrod</code></td>
      <td><code>#daa520</code></td>
      <td style="background: goldenrod"></td>
    </tr>
    <tr>
      <td style="background: #adff2f"></td>
      <td style="text-align: center"><code>greenyellow</code></td>
      <td><code>#adff2f</code></td>
      <td style="background: greenyellow"></td>
    </tr>
    <tr>
      <td style="background: #808080"></td>
      <td style="text-align: center"><code>grey</code></td>
      <td><code>#808080</code></td>
      <td style="background: grey"></td>
    </tr>
    <tr>
      <td style="background: #f0fff0"></td>
      <td style="text-align: center"><code>honeydew</code></td>
      <td><code>#f0fff0</code></td>
      <td style="background: honeydew"></td>
    </tr>
    <tr>
      <td style="background: #ff69b4"></td>
      <td style="text-align: center"><code>hotpink</code></td>
      <td><code>#ff69b4</code></td>
      <td style="background: hotpink"></td>
    </tr>
    <tr>
      <td style="background: #cd5c5c"></td>
      <td style="text-align: center"><code>indianred</code></td>
      <td><code>#cd5c5c</code></td>
      <td style="background: indianred"></td>
    </tr>
    <tr>
      <td style="background: #4b0082"></td>
      <td style="text-align: center"><code>indigo</code></td>
      <td><code>#4b0082</code></td>
      <td style="background: indigo"></td>
    </tr>
    <tr>
      <td style="background: #fffff0"></td>
      <td style="text-align: center"><code>ivory</code></td>
      <td><code>#fffff0</code></td>
      <td style="background: ivory"></td>
    </tr>
    <tr>
      <td style="background: #f0e68c"></td>
      <td style="text-align: center"><code>khaki</code></td>
      <td><code>#f0e68c</code></td>
      <td style="background: khaki"></td>
    </tr>
    <tr>
      <td style="background: #e6e6fa"></td>
      <td style="text-align: center"><code>lavender</code></td>
      <td><code>#e6e6fa</code></td>
      <td style="background: lavender"></td>
    </tr>
    <tr>
      <td style="background: #fff0f5"></td>
      <td style="text-align: center"><code>lavenderblush</code></td>
      <td><code>#fff0f5</code></td>
      <td style="background: lavenderblush"></td>
    </tr>
    <tr>
      <td style="background: #7cfc00"></td>
      <td style="text-align: center"><code>lawngreen</code></td>
      <td><code>#7cfc00</code></td>
      <td style="background: lawngreen"></td>
    </tr>
    <tr>
      <td style="background: #fffacd"></td>
      <td style="text-align: center"><code>lemonchiffon</code></td>
      <td><code>#fffacd</code></td>
      <td style="background: lemonchiffon"></td>
    </tr>
    <tr>
      <td style="background: #add8e6"></td>
      <td style="text-align: center"><code>lightblue</code></td>
      <td><code>#add8e6</code></td>
      <td style="background: lightblue"></td>
    </tr>
    <tr>
      <td style="background: #f08080"></td>
      <td style="text-align: center"><code>lightcoral</code></td>
      <td><code>#f08080</code></td>
      <td style="background: lightcoral"></td>
    </tr>
    <tr>
      <td style="background: #e0ffff"></td>
      <td style="text-align: center"><code>lightcyan</code></td>
      <td><code>#e0ffff</code></td>
      <td style="background: lightcyan"></td>
    </tr>
    <tr>
      <td style="background: #fafad2"></td>
      <td style="text-align: center"><code>lightgoldenrodyellow</code></td>
      <td><code>#fafad2</code></td>
      <td style="background: lightgoldenrodyellow"></td>
    </tr>
    <tr>
      <td style="background: #d3d3d3"></td>
      <td style="text-align: center"><code>lightgray</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgray"></td>
    </tr>
    <tr>
      <td style="background: #90ee90"></td>
      <td style="text-align: center"><code>lightgreen</code></td>
      <td><code>#90ee90</code></td>
      <td style="background: lightgreen"></td>
    </tr>
    <tr>
      <td style="background: #d3d3d3"></td>
      <td style="text-align: center"><code>lightgrey</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgrey"></td>
    </tr>
    <tr>
      <td style="background: #ffb6c1"></td>
      <td style="text-align: center"><code>lightpink</code></td>
      <td><code>#ffb6c1</code></td>
      <td style="background: lightpink"></td>
    </tr>
    <tr>
      <td style="background: #ffa07a"></td>
      <td style="text-align: center"><code>lightsalmon</code></td>
      <td><code>#ffa07a</code></td>
      <td style="background: lightsalmon"></td>
    </tr>
    <tr>
      <td style="background: #20b2aa"></td>
      <td style="text-align: center"><code>lightseagreen</code></td>
      <td><code>#20b2aa</code></td>
      <td style="background: lightseagreen"></td>
    </tr>
    <tr>
      <td style="background: #87cefa"></td>
      <td style="text-align: center"><code>lightskyblue</code></td>
      <td><code>#87cefa</code></td>
      <td style="background: lightskyblue"></td>
    </tr>
    <tr>
      <td style="background: #778899"></td>
      <td style="text-align: center"><code>lightslategray</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategray"></td>
    </tr>
    <tr>
      <td style="background: #778899"></td>
      <td style="text-align: center"><code>lightslategrey</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategrey"></td>
    </tr>
    <tr>
      <td style="background: #b0c4de"></td>
      <td style="text-align: center"><code>lightsteelblue</code></td>
      <td><code>#b0c4de</code></td>
      <td style="background: lightsteelblue"></td>
    </tr>
    <tr>
      <td style="background: #ffffe0"></td>
      <td style="text-align: center"><code>lightyellow</code></td>
      <td><code>#ffffe0</code></td>
      <td style="background: lightyellow"></td>
    </tr>
    <tr>
      <td style="background: #32cd32"></td>
      <td style="text-align: center"><code>limegreen</code></td>
      <td><code>#32cd32</code></td>
      <td style="background: limegreen"></td>
    </tr>
    <tr>
      <td style="background: #faf0e6"></td>
      <td style="text-align: center"><code>linen</code></td>
      <td><code>#faf0e6</code></td>
      <td style="background: linen"></td>
    </tr>
    <tr>
      <td style="background: #ff00ff"></td>
      <td style="text-align: center">
        <code>magenta</code><br />(synonym of <code>fuchsia</code>)
      </td>
      <td><code>#ff00ff</code></td>
      <td style="background: magenta"></td>
    </tr>
    <tr>
      <td style="background: #66cdaa"></td>
      <td style="text-align: center"><code>mediumaquamarine</code></td>
      <td><code>#66cdaa</code></td>
      <td style="background: mediumaquamarine"></td>
    </tr>
    <tr>
      <td style="background: #0000cd"></td>
      <td style="text-align: center"><code>mediumblue</code></td>
      <td><code>#0000cd</code></td>
      <td style="background: mediumblue"></td>
    </tr>
    <tr>
      <td style="background: #ba55d3"></td>
      <td style="text-align: center"><code>mediumorchid</code></td>
      <td><code>#ba55d3</code></td>
      <td style="background: mediumorchid"></td>
    </tr>
    <tr>
      <td style="background: #9370db"></td>
      <td style="text-align: center"><code>mediumpurple</code></td>
      <td><code>#9370db</code></td>
      <td style="background: mediumpurple"></td>
    </tr>
    <tr>
      <td style="background: #3cb371"></td>
      <td style="text-align: center"><code>mediumseagreen</code></td>
      <td><code>#3cb371</code></td>
      <td style="background: mediumseagreen"></td>
    </tr>
    <tr>
      <td style="background: #7b68ee"></td>
      <td style="text-align: center"><code>mediumslateblue</code></td>
      <td><code>#7b68ee</code></td>
      <td style="background: mediumslateblue"></td>
    </tr>
    <tr>
      <td style="background: #00fa9a"></td>
      <td style="text-align: center"><code>mediumspringgreen</code></td>
      <td><code>#00fa9a</code></td>
      <td style="background: mediumspringgreen"></td>
    </tr>
    <tr>
      <td style="background: #48d1cc"></td>
      <td style="text-align: center"><code>mediumturquoise</code></td>
      <td><code>#48d1cc</code></td>
      <td style="background: mediumturquoise"></td>
    </tr>
    <tr>
      <td style="background: #c71585"></td>
      <td style="text-align: center"><code>mediumvioletred</code></td>
      <td><code>#c71585</code></td>
      <td style="background: mediumvioletred"></td>
    </tr>
    <tr>
      <td style="background: #191970"></td>
      <td style="text-align: center"><code>midnightblue</code></td>
      <td><code>#191970</code></td>
      <td style="background: midnightblue"></td>
    </tr>
    <tr>
      <td style="background: #f5fffa"></td>
      <td style="text-align: center"><code>mintcream</code></td>
      <td><code>#f5fffa</code></td>
      <td style="background: mintcream"></td>
    </tr>
    <tr>
      <td style="background: #ffe4e1"></td>
      <td style="text-align: center"><code>mistyrose</code></td>
      <td><code>#ffe4e1</code></td>
      <td style="background: mistyrose"></td>
    </tr>
    <tr>
      <td style="background: #ffe4b5"></td>
      <td style="text-align: center"><code>moccasin</code></td>
      <td><code>#ffe4b5</code></td>
      <td style="background: moccasin"></td>
    </tr>
    <tr>
      <td style="background: #ffdead"></td>
      <td style="text-align: center"><code>navajowhite</code></td>
      <td><code>#ffdead</code></td>
      <td style="background: navajowhite"></td>
    </tr>
    <tr>
      <td style="background: #fdf5e6"></td>
      <td style="text-align: center"><code>oldlace</code></td>
      <td><code>#fdf5e6</code></td>
      <td style="background: oldlace"></td>
    </tr>
    <tr>
      <td style="background: #6b8e23"></td>
      <td style="text-align: center"><code>olivedrab</code></td>
      <td><code>#6b8e23</code></td>
      <td style="background: olivedrab"></td>
    </tr>
    <tr>
      <td style="background: #ff4500"></td>
      <td style="text-align: center"><code>orangered</code></td>
      <td><code>#ff4500</code></td>
      <td style="background: orangered"></td>
    </tr>
    <tr>
      <td style="background: #da70d6"></td>
      <td style="text-align: center"><code>orchid</code></td>
      <td><code>#da70d6</code></td>
      <td style="background: orchid"></td>
    </tr>
    <tr>
      <td style="background: #eee8aa"></td>
      <td style="text-align: center"><code>palegoldenrod</code></td>
      <td><code>#eee8aa</code></td>
      <td style="background: palegoldenrod"></td>
    </tr>
    <tr>
      <td style="background: #98fb98"></td>
      <td style="text-align: center"><code>palegreen</code></td>
      <td><code>#98fb98</code></td>
      <td style="background: palegreen"></td>
    </tr>
    <tr>
      <td style="background: #afeeee"></td>
      <td style="text-align: center"><code>paleturquoise</code></td>
      <td><code>#afeeee</code></td>
      <td style="background: paleturquoise"></td>
    </tr>
    <tr>
      <td style="background: #db7093"></td>
      <td style="text-align: center"><code>palevioletred</code></td>
      <td><code>#db7093</code></td>
      <td style="background: palevioletred"></td>
    </tr>
    <tr>
      <td style="background: #ffefd5"></td>
      <td style="text-align: center"><code>papayawhip</code></td>
      <td><code>#ffefd5</code></td>
      <td style="background: papayawhip"></td>
    </tr>
    <tr>
      <td style="background: #ffdab9"></td>
      <td style="text-align: center"><code>peachpuff</code></td>
      <td><code>#ffdab9</code></td>
      <td style="background: peachpuff"></td>
    </tr>
    <tr>
      <td style="background: #cd853f"></td>
      <td style="text-align: center"><code>peru</code></td>
      <td><code>#cd853f</code></td>
      <td style="background: peru"></td>
    </tr>
    <tr>
      <td style="background: #ffc0cb"></td>
      <td style="text-align: center"><code>pink</code></td>
      <td><code>#ffc0cb</code></td>
      <td style="background: pink"></td>
    </tr>
    <tr>
      <td style="background: #dda0dd"></td>
      <td style="text-align: center"><code>plum</code></td>
      <td><code>#dda0dd</code></td>
      <td style="background: plum"></td>
    </tr>
    <tr>
      <td style="background: #b0e0e6"></td>
      <td style="text-align: center"><code>powderblue</code></td>
      <td><code>#b0e0e6</code></td>
      <td style="background: powderblue"></td>
    </tr>
    <tr>
      <td style="background: #bc8f8f"></td>
      <td style="text-align: center"><code>rosybrown</code></td>
      <td><code>#bc8f8f</code></td>
      <td style="background: rosybrown"></td>
    </tr>
    <tr>
      <td style="background: #4169e1"></td>
      <td style="text-align: center"><code>royalblue</code></td>
      <td><code>#4169e1</code></td>
      <td style="background: royalblue"></td>
    </tr>
    <tr>
      <td style="background: #8b4513"></td>
      <td style="text-align: center"><code>saddlebrown</code></td>
      <td><code>#8b4513</code></td>
      <td style="background: saddlebrown"></td>
    </tr>
    <tr>
      <td style="background: #fa8072"></td>
      <td style="text-align: center"><code>salmon</code></td>
      <td><code>#fa8072</code></td>
      <td style="background: salmon"></td>
    </tr>
    <tr>
      <td style="background: #f4a460"></td>
      <td style="text-align: center"><code>sandybrown</code></td>
      <td><code>#f4a460</code></td>
      <td style="background: sandybrown"></td>
    </tr>
    <tr>
      <td style="background: #2e8b57"></td>
      <td style="text-align: center"><code>seagreen</code></td>
      <td><code>#2e8b57</code></td>
      <td style="background: seagreen"></td>
    </tr>
    <tr>
      <td style="background: #fff5ee"></td>
      <td style="text-align: center"><code>seashell</code></td>
      <td><code>#fff5ee</code></td>
      <td style="background: seashell"></td>
    </tr>
    <tr>
      <td style="background: #a0522d"></td>
      <td style="text-align: center"><code>sienna</code></td>
      <td><code>#a0522d</code></td>
      <td style="background: sienna"></td>
    </tr>
    <tr>
      <td style="background: #87ceeb"></td>
      <td style="text-align: center"><code>skyblue</code></td>
      <td><code>#87ceeb</code></td>
      <td style="background: skyblue"></td>
    </tr>
    <tr>
      <td style="background: #6a5acd"></td>
      <td style="text-align: center"><code>slateblue</code></td>
      <td><code>#6a5acd</code></td>
      <td style="background: slateblue"></td>
    </tr>
    <tr>
      <td style="background: #708090"></td>
      <td style="text-align: center"><code>slategray</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategray"></td>
    </tr>
    <tr>
      <td style="background: #708090"></td>
      <td style="text-align: center"><code>slategrey</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategrey"></td>
    </tr>
    <tr>
      <td style="background: #fffafa"></td>
      <td style="text-align: center"><code>snow</code></td>
      <td><code>#fffafa</code></td>
      <td style="background: snow"></td>
    </tr>
    <tr>
      <td style="background: #00ff7f"></td>
      <td style="text-align: center"><code>springgreen</code></td>
      <td><code>#00ff7f</code></td>
      <td style="background: springgreen"></td>
    </tr>
    <tr>
      <td style="background: #4682b4"></td>
      <td style="text-align: center"><code>steelblue</code></td>
      <td><code>#4682b4</code></td>
      <td style="background: steelblue"></td>
    </tr>
    <tr>
      <td style="background: #d2b48c"></td>
      <td style="text-align: center"><code>tan</code></td>
      <td><code>#d2b48c</code></td>
      <td style="background: tan"></td>
    </tr>
    <tr>
      <td style="background: #d8bfd8"></td>
      <td style="text-align: center"><code>thistle</code></td>
      <td><code>#d8bfd8</code></td>
      <td style="background: thistle"></td>
    </tr>
    <tr>
      <td style="background: #ff6347"></td>
      <td style="text-align: center"><code>tomato</code></td>
      <td><code>#ff6347</code></td>
      <td style="background: tomato"></td>
    </tr>
    <tr>
      <td style="background: #40e0d0"></td>
      <td style="text-align: center"><code>turquoise</code></td>
      <td><code>#40e0d0</code></td>
      <td style="background: turquoise"></td>
    </tr>
    <tr>
      <td style="background: #ee82ee"></td>
      <td style="text-align: center"><code>violet</code></td>
      <td><code>#ee82ee</code></td>
      <td style="background: violet"></td>
    </tr>
    <tr>
      <td style="background: #f5deb3"></td>
      <td style="text-align: center"><code>wheat</code></td>
      <td><code>#f5deb3</code></td>
      <td style="background: wheat"></td>
    </tr>
    <tr>
      <td style="background: #f5f5f5"></td>
      <td style="text-align: center"><code>whitesmoke</code></td>
      <td><code>#f5f5f5</code></td>
      <td style="background: whitesmoke"></td>
    </tr>
    <tr>
      <td style="background: #9acd32"></td>
      <td style="text-align: center"><code>yellowgreen</code></td>
      <td><code>#9acd32</code></td>
      <td style="background: yellowgreen"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS4 Colors")}}</td>
      <td style="background: #639"></td>
      <td style="text-align: center">
        <a href="https://en.wikipedia.org/wiki/Eric_A._Meyer#Personal_life"
          ><code>rebeccapurple</code></a
        >
      </td>
      <td><code>#663399</code></td>
      <td style="background: rebeccapurple"></td>
    </tr>
  </tbody>
</table>

### [`Прозрачное`]() ключевое слово

Ключевое слово `transparent` представляет собой полностью прозрачный цвет. Это делает фон позади цветного элемента полностью видимым. Технически `transparent`- это ярлык для `rgba (0,0,0,0)`.

> **Примечание:** чтобы предотвратить непредвиденное поведение, например, в {{cssxref ("градиент")}}, текущая спецификация CSS утверждает, что `transparent` должен быть вычислен в [Альфа-предварительно умноженном цветовом пространстве](https://www.w3.org/TR/2012/CR-css3-images-20120417/#color-stop-syntax). Однако имейте в виду, что старые браузеры могут рассматривать его как чёрный с Альфа-значением `0`.

> **Примечание:** `transparent` не был истинным цветом на уровне CSS 2 (Редакция 1). Это было специальное ключевое слово, которое можно было использовать вместо обычного значения `<color>` для двух свойств CSS: {{Cssxref("background")}} и {{Cssxref("border")}}. Он был существенно добавлен, чтобы позволить разработчикам переопределить унаследованный сплошной цвет. С появлением Альфа-каналов в CSS Colors Level 3, `transparent` был переопределён как истинный цвет. Теперь его можно использовать везде, где можно использовать значение `<color>`.

### [`currentColor`]() ключевое слово

Ключевое слово `currentColor` представляет значение свойства элемента {{Cssxref("color")}}. Это позволяет использовать значение `color` для свойств, которые не получают его по умолчанию.

Если текущий цвет используется в качестве значения свойства `color` , он вместо этого принимает его значение из наследуемого значения свойства `color`.

#### currentColor пример

```html
<div style="color:blue; border: 1px dashed currentColor;">
  Цвет текста-синий.
  <div style="background:currentColor; height:9px;"></div>
  This block is surrounded by a blue border.
</div>
```

{{EmbedLiveSample("currentColor_пример")}}

### RGB цвет

Цветовая модель RGB определяет заданный цвет в соответствии с его красными, зелёными и синими компонентами. Дополнительный Альфа-компонент представляет прозрачность цвета.

#### Синтаксис

Цвета RGB могут быть выражены как шестнадцатеричными (с префиксом #), так и функциональными (`rgb ()`, `rgba ()`) нотациями.

> **Примечание:** начиная с уровня цветов CSS 4, `rgba()` является псевдонимом для `rgb()`. В браузерах, реализующих стандарт уровня 4, они принимают одни и те же параметры и ведут себя одинаково.

- Шестнадцатеричное представление: `#RRGGBB[AA]`
  - : `R` (red), `G` (green), `B` (blue), and `A` (alpha) are hexadecimal characters (0-9, A-F). `A` is optional. For example, `#ff0000` is equivalent to `#ff0000ff`. `R` (красный), G (зелёный), B (синий) и A (Альфа) являются шестнадцатеричными символами (0-9, A-F). Это не является обязательным. Например, `#ff0000` эквивалентно `#ff0000ff`.
- Шестнадцатеричное представление: `#RGB[A]`
  - : `R` (красный), `G` (зелёный), `B` (синий) и `A` (Альфа) являются шестнадцатеричными символами (0-9, A-F). Это не является обязательным. Трёхзначная нотация (`#RGB`) является более короткой версией шестизначной формы (`#RRGGBB`). Например, `#f09` имеет тот же цвет, что и `#ff0099`. Кроме того, четырёхзначная нотация RGB (`#RGB`) является более короткой версией восьмизначной формы (`#RRGGBBAA`). Например, #0f38 имеет тот же цвет, что и `#00ff3388`.
- Функциональная нотация: `rgb(R, G, B[, A])` или `rgba(R, G, B, A)`
  - : `R` (красный), `G` (зелёный) и `B` (синий) могут быть либо {{cssxref("&lt;number&gt;")}}s, либо {{cssxref("&lt;percentage&gt;")}}s, где число `255` соответствует `100%`. А (Альфа) может быть {{cssxref("&lt;number&gt;")}} между `0` и `1` или {{cssxref("&lt;percentage&gt;")}}, где число 1 соответствует `100%` (полная непрозрачность).
- Функциональная нотация: `rgb(R G B[ A])` or `rgba(R G B A)`
  - : CSS Colors Level 4 добавляет поддержку разделённых пробелами значений в функциональной нотации.

#### Пример

##### RGB варианты синтаксиса

В этом примере показано множество способов создания одного цвета с помощью различных цветовых синтаксисов RGB.

```css
/* Все эти варианты синтаксиса задают один и тот же цвет: полностью непрозрачный ярко-розовый. */

/* Шестнадцатеричный синтаксис */
#f09
#F09
#ff0099
#FF0099

/* Функциональный синтаксис */
rgb(255,0,153)
rgb(255, 0, 153)
rgb(255, 0, 153.0)
rgb(100%,0%,60%)
rgb(100%, 0%, 60%)
rgb(100%, 0, 60%) /* Ошибка! Не смешивайте цифры и проценты. */
rgb(255 0 153)

/* Шестнадцатеричный синтаксис с Альфа-значением */
#f09f
#F09F
#ff0099ff
#FF0099FF

/* Функциональный синтаксис с Альфа-значением */
rgb(255, 0, 153, 1)
rgb(255, 0, 153, 100%)

/* Синтаксис пробелов */
rgb(255 0 153 / 1)
rgb(255 0 153 / 100%)

/* Функциональный синтаксис со значением floats */
rgb(255, 0, 153.6, 1)
rgb(1e2, .5e1, .5e0, +.25e2%)
```

##### RGB вариации прозрачности

```css
/* Шестнадцатеричный синтаксис */
#3a30                    /*   0% непрозрачный зелёный цвет */
#3A3F                    /* полный непрозрачный зелёный цвет */
#33aa3300                /*   0% непрозрачный зелёный цвет */
#33AA3380                /* 50% непрозрачный зелёный цвет */

/* Функциональный синтаксис */
rgba(51, 170, 51, .1)    /* непрозрачный зелёный цвет на 10%  */
rgba(51, 170, 51, .4)    /* непрозрачный зелёный цвет на */
rgba(51, 170, 51, .7)    /* непрозрачный зелёный цвет на 70% */
rgba(51, 170, 51,  1)    /* полный непрозрачный зелёный цвет  */

/* Синтаксис пробелов */
rgba(51 170 51 / 0.4)    /* непрозрачный зелёный цвет  на 40%*/
rgba(51 170 51 / 40%)    /* непрозрачный зелёный цвет на 40% */

/* Функциональный синтаксис со значением floats */
rgba(255, 0, 153.6, 1)
rgba(1e2, .5e1, .5e0, +.25e2%)
```

### Цвет HSL

Цветовая модель HSL определяет заданный цвет в соответствии с его компонентами оттенка, насыщенности и яркости. Дополнительный Альфа-компонент представляет прозрачность цвета.

Многие дизайнеры считают HSL более интуитивным, чем RGB, поскольку он позволяет независимо регулировать оттенок, насыщенность и лёгкость. HSL также может упростить создание набора подходящих цветов (например, когда вы хотите несколько оттенков одного оттенка).

#### Синтаксис

Цвета HSL выражаются через функциональные обозначения `hsl()` и `hsla()`.

> **Примечание:** Начиная с уровня цветов CSS 4, `hsla()` является псевдонимом для `hsl()`. В браузерах, реализующих стандарт уровня 4, они принимают одни и те же параметры и ведут себя одинаково.

- Функциональная нотация: `hsl(H, S, L[, A])` или `hsla(H, S, L, A)`
  - : `H` (hue) - это {{cssxref("&lt;угол&gt;")}} цветового круга, заданного в `deg`S, `rad`s, градусах или поворотах {{SpecName("CSS4 Colors","#The-HSL-notation")}}. При записи в виде unitless {{cssxref ("&lt;number&gt;")}} он интерпретируется как Градусы, как указано в {{SpecName ("CSS3 Colors","#hsl-color")}}. По определению, red=deg=360 град, с другими цветами, распространёнными по кругу, поэтому green=120deg град, blue=240deg град и т. д. В качестве < угла > он неявно обёртывается таким образом, что -120deg=240deg, 480deg=120deg, -1turn=1turn, и т. д.`S` (`насыщенность`) и `L` (`лёгкость`) являются процентами. `100%` насыщенность полностью насыщена, в то время как 0% полностью ненасыщен (серый). `100%` лёгкость белый, `0%` лёгкость чёрный, и `50%` лёгкость "нормально". `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity). `A` (Альфа) может быть {{cssxref("&lt;number&gt;")}} между `0` и `1` или {{cssxref("&lt;percentage&gt;")}}, где число `1` соответствует `100%` (полная непрозрачность).
- Функциональная нотация: `hsl(H S L[ A])` or `hsla(H S L A)`
  - : CSS Colors Level 4 добавляет поддержку разделённых пробелами значений в функциональной нотации.

#### Examples

##### HSL варианты синтаксиса

```css
/* Все эти примеры указывают один и тот же цвет: лаванда. */
hsl(270,60%,70%)
hsl(270, 60%, 70%)
hsl(270 60% 70%)
hsl(270deg, 60%, 70%)
hsl(4.71239rad, 60%, 70%)
hsl(.75turn, 60%, 70%)

/* Все эти примеры указывают один и тот же цвет: лаванда, которая на 15% непрозрачна. */
hsl(270, 60%, 50%, .15)
hsl(270, 60%, 50%, 15%)
hsl(270 60% 50% / .15)
hsl(270 60% 50% / 15%)
```

##### Полностью насыщенные цвета

| Нотация               | Описание:  | Итог |
| --------------------- | ---------- | ---- |
| `hsl(0, 100%, 50%)`   | red        |      |
| `hsl(30, 100%, 50%)`  | orange     |      |
| `hsl(60, 100%, 50%)`  | yellow     |      |
| `hsl(90, 100%, 50%)`  | lime green |      |
| `hsl(120, 100%, 50%)` | green      |      |
| `hsl(150, 100%, 50%)` | blue-green |      |
| `hsl(180, 100%, 50%)` | cyan       |      |
| `hsl(210, 100%, 50%)` | sky blue   |      |
| `hsl(240, 100%, 50%)` | blue       |      |
| `hsl(270, 100%, 50%)` | purple     |      |
| `hsl(300, 100%, 50%)` | magenta    |      |
| `hsl(330, 100%, 50%)` | pink       |      |
| `hsl(360, 100%, 50%)` | red        |      |

##### Более светлая и более тёмная зелень

| Нотация                | Описание: | Итог |
| ---------------------- | --------- | ---- |
| `hsl(120, 100%, 0%)`   | black     |      |
| `hsl(120, 100%, 20%)`  |           |      |
| `hsl(120, 100%, 40%)`  |           |      |
| `hsl(120, 100%, 60%)`  |           |      |
| `hsl(120, 100%, 80%)`  |           |      |
| `hsl(120, 100%, 100%)` | white     |      |

##### Насыщенная и ненасыщенная зелень

| Нотация               | Описание: | Итог |
| --------------------- | --------- | ---- |
| `hsl(120, 100%, 50%)` | green     |      |
| `hsl(120, 80%, 50%)`  |           |      |
| `hsl(120, 60%, 50%)`  |           |      |
| `hsl(120, 40%, 50%)`  |           |      |
| `hsl(120, 20%, 50%)`  |           |      |
| `hsl(120, 0%, 50%)`   | gray      |      |

##### Вариации прозрачности HSL

```css
hsla(240, 100%, 50%, .05)     /* непрозрачный синий на 5% */
hsla(240, 100%, 50%, .4)      /* непрозрачный синий на 40% */
hsla(240, 100%, 50%, .7)      /* непрозрачный синий на 70% */
hsla(240, 100%, 50%, 1)       /* полный непрозрачный синий */

/* Синтаксис пробелов */
hsla(240 100% 50% / .05)      /* непрозрачный синий на  5% */

/* Процентное значение для Альфа */
hsla(240 100% 50% / 5%)       /*  непрозрачный синий на 5% */
```

### Системный цвет

Не все системные цвета поддерживаются на всех системах. {{deprecated_inline}} для использования на общедоступных веб-страницах.

- ActiveBorder
  - : Активная граница окна.
- ActiveCaption
  - : Активный заголовок окна. Должен использоваться с текстом `CaptionText` в качестве цвета переднего плана.
- AppWorkspace
  - : Цвет фона интерфейса нескольких документов.
- Background
  - : Фон рабочего стола.
- ButtonFace
  - : Цвет фона лица для трёхмерных элементов, которые появляются 3-D из-за одного слоя окружающей границы. Следует использовать с текстом `ButtonText` цвет переднего плана.
- ButtonHighlight
  - : Цвет границы, обращённой к источнику света для 3-D элементов, которые появляются 3-D из-за этого слоя окружающей границы.
- ButtonShadow
  - : Цвет границы вдали от источника света для 3-D элементов, которые появляются 3-D из-за этого слоя окружающей границы. Цвет границы находится вдали от источника света для трёхмерных элементов, которые появляются 3-D из-за этого слоя, окружающего границу.
- ButtonText
  - : Следует использовать с `ButtonFace` или `ThreeDFace` цвет фона.
- CaptionText
  - : Текст в заголовке, поле размера и поле со стрелкой прокрутки. Следует использовать с цветом фона `ActiveCaption`.
- GrayText
  - : Серый (отключён) текст.
- Highlight
  - : Элемент(ы), выбранный в элементе управления. Следует использовать с `HighlightText` текста цветом переднего плана.
- HighlightText
  - : Текст элемента(ов), выбранного в элементе управления. Следует использовать с подсветкой цвета фона.
- InactiveBorder
  - : Граница неактивного окна.
- InactiveCaption
  - : Заголовок неактивного окна. Должен использоваться с цветом переднего плана `InactiveCaptionText`.
- InactiveCaptionText
  - : Следует использовать с `InactiveCaption` неактивным цветом фона заголовка.
- InfoBackground
  - : Цвет фона для элементов управления всплывающей подсказки. Должен использоваться с цветом переднего плана `InfoText`.
- InfoText
  - : Цвет текста элементов подсказки. Должен использоваться с и `InfoBackground` фона.
- Menu
  - : Фон меню. Должен использоваться с `MenuText` или `-moz-MenuBarText` строки меню цвет переднего плана.
- MenuText
  - : Текст в меню. Следует использовать с меню Цвет фона.
- Scrollbar
  - : Цвет фона полос прокрутки.
- ThreeDDarkShadow
  - : Цвет более тёмной (как правило, внешней) из двух границ от источника света для трёхмерных элементов, которые появляются 3-D из-за двух концентрических слоёв окружающей границы.
- ThreeDFace
  - : Should be used with the `ButtonText` foreground color. Цвет фона лица для трёхмерных элементов, которые появляются 3-D из-за двух концентрических слоёв окружающей границы. Следует использовать с текстом кнопки цвет переднего плана.
- ThreeDHighlight
  - : Цвет более светлого (обычно внешнего) из двух границ, обращённых к источнику света для 3-D элементов, которые появляются 3-D из-за двух концентрических слоёв окружающей границы.
- ThreeDLightShadow
  - : Цвет более тёмной (обычно внутренней) из двух границ, обращённых к источнику света для 3-D элементов, которые появляются 3-D из-за двух концентрических слоёв окружающей границы.
- ThreeDShadow
  - : Цвет более светлого (как правило, внутреннего) из двух границ от источника света для 3-D элементов, которые появляются 3-D из-за двух концентрических слоёв окружающей границы.
- Window
  - : Фон окна. Следует использовать с `WindowText` цвет переднего плана.
- WindowFrame
  - : Оконная рама
- WindowText
  - : Текст в windows. Следует использовать с цветом фона окна.

### Расширенные Цвета Системы Mozilla

- \-moz-ButtonDefault
  - : Цвет границы вокруг кнопки, которые обозначают действие по умолчанию для диалогового окна.
- \-moz-ButtonHoverFace
  - : Цвет фона кнопки, на которую наведён указатель мыши (который будет Трёхлинейным или лицом кнопки, когда указатель мыши не находится над ним). Следует использовать с-moz-кнопка наведения текста цвет переднего плана.
- \-moz-ButtonHoverText
  - : Цвет текста кнопки, на которую наведён указатель мыши (который будет ButtonText, когда указатель мыши не находится над ним). Следует использовать с-`-moz-ButtonHoverFace background` color.
- \-moz-CellHighlight
  - : Цвет фона для выбранного элемента в виджете дерево. Следует использовать с цветом переднего плана `-moz-CellHighlightText`. Смотрите также`-moz-html-CellHighlight`.
- \-moz-CellHighlightText
  - : Цвет текста для выбранного элемента в дереве. Следует использовать с цветом фона `moz-CellHighlight background`. Смотрите также `-moz-html-CellHighlightText` выделения ячейки.
- \-moz-Combobox
  - : цвет фона для комбинированных полей `-moz-ComboboxText`. Должен использоваться с цветом переднего плана текста-moz-Combobox. В версиях до 1.9.2 вместо этого используйте `-moz-Field`.
- \-moz-ComboboxText
  - : цвет текста для комбинированных полей. Следует использовать с цветом фона `-moz-Combobox`. В версиях до 1.9.2 вместо этого используйте `-moz-FieldText`.
- \-moz-Dialog
  - : Цвет фона для диалоговых окон. Должен использоваться с цветом переднего плана -`-moz-DialogText`.
- \-moz-DialogText
  - : Цвет текста для диалоговых окон. Должен использоваться с цветом фона `-moz-Dialog`.
- \-moz-dragtargetzone

  \-moz-EvenTreeRow

  - : цвет фона для чётных строк в дереве. Должен использоваться с цветом переднего плана `-moz-FieldText`. В версиях Gecko до 1.9, используйте-moz-поле. Смотрите также `-moz-OddTreeRow`.

- \-moz-Field
  - : Text field background color. Should be used with the `-moz-FieldText` foreground color. Цвет фона текстового поля. Должен использоваться с цветом переднего плана`-moz-FieldText`.
- \-moz-FieldText
  - : Text field text color. Should be used with the `-moz-Field`, `-moz-EvenTreeRow`, or `-moz-OddTreeRow` background color. Текстовое поле цвет текста. Следует использовать с `-moz-Field`, `-moz-EvenTreeRow` или `-moz-OddTreeRow` цветом фона строки дерева.
- \-moz-html-CellHighlight
  - : Background color for highlighted item in HTML {{HTMLElement("select")}}s. Should be used with the `-moz-html-CellHighlightText` foreground color. Prior to Gecko 1.9, use `-moz-CellHighlight`. цвет фона для выделенного элемента в HTML {{HTMLElement ("select")}} s. должен использоваться с цветом переднего плана `-moz-html-CellHighlight`. До Gecko 1.9, используйте `-moz-CellHighlightText`.
- \-moz-html-CellHighlightText
  - : цвет текста для `-moz-html-CellHighlight` выделенных элементов в HTML {{HTMLElement ("select")}} s. должен использоваться с цветом фона. До Gecko 1.9, используйте `moz-html-CellHighlight`.
- \-moz-mac-accentdarkestshadow

  \-moz-mac-accentdarkshadow

  \-moz-mac-accentface

  \-moz-mac-accentlightesthighlight

  \-moz-mac-accentlightshadow

  \-moz-mac-accentregularhighlight

  \-moz-mac-accentregularshadow

  \-moz-mac-chrome-active

- \-moz-mac-chrome-inactive
- \-moz-mac-focusring

  \-moz-mac-menuselect

  \-moz-mac-menushadow

  \-moz-mac-menutextselect

  \-moz-MenuHover

  - : Цвет фона для зависших пунктов меню. Часто похожи на `Highlight`. Следует использовать с `moz-MenuHoverText` или `-moz-MenuBarHoverText` при наведении цвет текста переднего плана.

- \-moz-MenuHoverText
  - : Text color for hovered menu items. Often similar to `HighlightText`. Should be used with the `-moz-MenuHover` background color. Цвет текста для зависших пунктов меню. Часто похоже на выделение текста `HighlightText`. Следует использовать с `-moz-MenuHover` наведите цвет фона.
- \-moz-MenuBarText
  - : цвет текста в строках меню. Часто похоже на текст меню "`MenuText`". Должен использоваться поверх фона `Menu`.
- \-moz-MenuBarHoverText
  - : Цвет для зависшего текста в строках меню. Часто похоже на `-moz-MenuHoverText` меню наведения текста. Следует использовать поверх `-moz-MenuHover` наведите фон.
- \-moz-nativehyperlinktext
  - : цвет гиперссылки платформы по умолчанию.
- \-moz-OddTreeRow
  - : цвет фона для нечётных строк в дереве. Должен использоваться с цветом переднего плана `-moz-FieldText`. В версиях Gecko до 1.9, используйте `-moz-Field`. Смотрите также `-moz-EvenTreeRow`.
- \-moz-win-communicationstext
  - : следует использовать для текста в объектах с `{{cssxref ("- moz-appearance")}}:- moz-win-communications-toolbox;`.
- \-moz-win-mediatext
  - : следует использовать для текста в объектах с `{{cssxref ("- moz-appearance")}}:- moz-win-media-toolbox`.
- \-moz-win-accentcolor
  - : Используется для доступа к пользовательскому цвету акцента Windows 10, который можно установить в меню Пуск, панели задач, заголовках и т. д.
- \-moz-win-accentcolortext
  - : Используется для доступа к цвету текста, размещённого над цветом пользовательского акцента Windows 10 в меню Пуск, панели задач, заголовках и т. д.

### Расширения Цветовых Предпочтений Mozilla

- \-moz-activehyperlinktext
  - : Пользовательское предпочтение цвета текста активных ссылок. Должен использоваться с цветом фона документа по умолчанию.
- \-moz-default-background-color
  - : предпочтения пользователя для цвета фона документа.
- \-moz-default-color
  - : предпочтения пользователя для цвета текста.
- \-moz-hyperlinktext
  - : Предпочтения пользователя для цвета текста непрошеных ссылок. Должен использоваться с цветом фона документа по умолчанию.
- \-moz-visitedhyperlinktext
  - : Предпочтения пользователя для цвета текста посещённых ссылок. Должен использоваться с цветом фона документа по умолчанию.

## Интерполяция

В анимации и [градиентах](/ru/docs/Web/CSS/CSS_Images/Using_CSS_gradients) значения `<color>` интерполируются на каждый из их [красных, зелёных и синих компонентов](https://www.gimp.org/docs/plug-in/appendix-alpha.html). Каждый компонент интерполируется как реальное число с плавающей запятой. Обратите внимание, что интерполяция цветов происходит в Альфа-предварительно умноженном цветовом пространстве rgba, чтобы предотвратить появление неожиданных серых цветов. В анимации, скорость интерполяции определяется [функцией времени](/ru/docs/Web/CSS/single-transition-timing-function).

## Соображения доступности

Некоторые люди с трудом различают цвета. Рекомендация [WCAG 2.0](https://www.w3.org/TR/WCAG/#visual-audio-contrast) настоятельно рекомендует не использовать цвет в качестве единственного средства передачи определённого сообщения, действия или результата. Дополнительную информацию см. В [разделе цвет и цветовой контраст](/ru/docs/Learn/Accessibility/CSS_and_JavaScript#Color_and_color_contrast).

## Технические характеристики

| Спецификация                                                            | Статус                   | Пояснения                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Colors', '#colorunits', '&lt;color&gt;')}}             | {{Spec2('CSS4 Colors')}} | Добавляет `rebeccapurple`, четырёхзначные (`#RGBA`) и восьмизначные (`#RRGGBBAA`) шестнадцатеричные обозначения, `rgba()` и `hsla()` в качестве псевдонимов `rgb()` и `hsl()` (оба с одинаковым синтаксисом параметров), разделённые пробелами параметры функции в качестве альтернативы запятым, проценты для Альфа-значений и углы для компонента оттенка в цветах `hsl()`. |
| {{SpecName('CSS3 Colors', '#colorunits', '&lt;color&gt;')}}             | {{Spec2('CSS3 Colors')}} | Устаревает системные цвета. Добавляет цвета SVG и функциональные обозначения `rgb()`, `hsl ()` и `hsla()`.                                                                                                                                                                                                                                                                    |
| {{SpecName('CSS2.1', 'syndata.html#value-def-color', '&lt;color&gt;')}} | {{Spec2('CSS2.1')}}      | Добавляет `orange` keyword(ключевое слово) и системные цвета.                                                                                                                                                                                                                                                                                                                 |
| {{SpecName('CSS1', '#color-units', '&lt;color&gt;')}}                   | {{Spec2('CSS1')}}        | Первоначальное определение. Включает в себя 16 основных ключевых слов цвета.                                                                                                                                                                                                                                                                                                  |

## Совместимость браузера

{{Compat}}

## Смотреть также

- Свойство {{Cssxref("непрозрачность")}} позволяет определить прозрачность на уровне элемента.
- Некоторые общие свойства, которые используют этот тип данных: {{Cssxref("цвет")}}, {{Cssxref("фон")}}, {{Cssxref("бордюр-колор")}}, {{Cssxref("окно-тень")}}, {{Cssxref("контур-цвет")}}, {{Cssxref("текст-тень")}}
- [Применение цвета к элементам HTML с помощью CSS](/ru/docs/Web/HTML/Applying_color)
