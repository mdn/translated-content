---
title: border-radius
slug: Web/CSS/border-radius
---

{{CSSRef}}

**`border-radius`** — это [CSS](/ru/docs/Web/CSS)-свойство, позволяющее разработчикам определять, как скругляются границы блока. Закруглённость каждого угла определяется с помощью одного или двух радиусов, определяя его форму: круг или эллипс.

{{EmbedInteractiveExample("pages/css/border-radius.html")}}

Это свойство является [короткой записью](/ru/docs/Web/CSS/Shorthand_properties) для четырёх свойств {{Cssxref("border-top-left-radius")}}, {{Cssxref("border-top-right-radius")}}, {{Cssxref("border-bottom-right-radius")}} и{{Cssxref("border-bottom-left-radius")}}.

Скругление применяется ко всему {{Cssxref ("background")}}, даже если элемент не имеет границ, точное положение отсечения определяется свойством {{Cssxref ("background-clip")}}.

Свойство `border-radius` не применяется к элементам таблицы, когда свойство {{Cssxref ("border-collapse")}} имеет значение `collapse`.

> **Примечание:** Как и с любым другим сокращённым свойством, отдельные подсвойства не могут наследоваться. Например, как в `border-radius:0 0 inherit inherit`, что будет частично переопределять существующие определения. Вместо этого должны использоваться отдельные длинные свойства.

## Синтаксис

```css
/* Такой синтаксис позволяет указать всего одно значение, вместе четырёх */
/* Скругление применяется ко всем четырём углам */
border-radius: 10px;

/* top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5%;

/* top-left | top-right-and-bottom-left | bottom-right */
border-radius: 2px 4px 2px;

/* top-left | top-right | bottom-right | bottom-left */
border-radius: 1px 0 3px 4px;

/* Синтаксис из двух радиусов также может применяться ко всем четырём углам */
/* (первые значения радиуса) /радиус */
border-radius: 10px 5% / 20px;

/* (первые значения радиуса) / top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5% / 20px 30px;

/* (первые значения радиуса) / top-left | top-right-and-bottom-left | bottom-right */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (первые значения радиуса) / top-left | top-right | bottom-right | bottom-left */
border-radius: 10px 5% / 20px 25em 30px 35em;

/* Глобальные значения */
border-radius: inherit;
border-radius: initial;
border-radius: unset;
```

Свойство `border-radius` может быть задано как:

- одно, два, три или четыре значения {{cssxref("&lt;length&gt;")}} или {{cssxref("&lt;percentage&gt;")}}. Используется для задания обычного радиуса углов.
- одна, две, три или четыре пары значений `<length>` or `<percentage>`, разделённые "/". Используется для задания эллиптического скругления.

### Значения

| _radius_                    | ![all-corner.png](/@api/deki/files/6138/=all-corner.png)                       | {{cssxref("&lt;length&gt;")}} или {{cssxref("&lt;percentage&gt;")}} устанавливает радиус скругления для всех углов элемента. Может быть указано только одно значение (или одна пара).                    |
| --------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _top-left-and-bottom-right_ | ![top-left-bottom-right.png](/@api/deki/files/6141/=top-left-bottom-right.png) | {{cssxref("&lt;length&gt;")}} или {{cssxref("&lt;percentage&gt;")}} устанавливает радиус для верхнего левого и нижнего правого угла элемента. Следует использовать синтаксис с двумя значениями.         |
| _top-right-and-bottom-left_ | ![top-right-bottom-left.png](/@api/deki/files/6143/=top-right-bottom-left.png) | {{cssxref("&lt;length&gt;")}} или {{cssxref("&lt;percentage&gt;")}} устанавливает радиус для верхнего правого и нижнего левого угла элемента. Можно использовать синтаксис с двумя или тремя значениями. |
| _top-left_                  | ![top-left.png](/@api/deki/files/6142/=top-left.png)                           | {{cssxref("&lt;length&gt;")}} или {{cssxref("&lt;percentage&gt;")}} устанавливает радиус для левого верхнего угла элемента. Можно использовать синтаксис с тремя и четырьмя значениями.                  |
| _top-right_                 | ![top-right.png](/@api/deki/files/6144/=top-right.png)                         | {{cssxref("&lt;length&gt;")}} или {{cssxref("&lt;percentage&gt;")}} устанавливает радиус для верхнего правого угла элемента. Следует использовать синтаксис с четырьмя значениями.                       |
| _bottom-right_              | ![bottom-rigth.png](/@api/deki/files/6140/=bottom-rigth.png)                   | {{cssxref("&lt;length&gt;")}} или {{cssxref("&lt;percentage&gt;")}} устанавливает радиус для нижнего правого угла элемента. Можно использовать синтаксис с тремя и четырьмя значениями.                  |
| _bottom-left_               | ![bottom-left.png](/@api/deki/files/6139/=bottom-left.png)                     | {{cssxref("&lt;length&gt;")}} или {{cssxref("&lt;percentage&gt;")}} устанавливает радиус для нижнего левого угла элемента. Следует использовать синтаксис с четырьмя значениями.                         |

- {{cssxref("&lt;length&gt;")}}
  - : Обозначает размер радиуса окружности или две полуоси эллипса. Может быть выражена в любых единицах CSS. Отрицательные значения не принимаются.
- {{cssxref("&lt;percentage&gt;")}}
  - : Обозначает размер радиуса окружности, или две полуоси эллипса. Проценты по горизонтальной оси относятся к ширине элемента, проценты по вертикальной оси к высоте. Отрицательные значения недействительны.

Например:

```css
border-radius: 1em/5em;

/* ... эквивалентно этому: */
border-top-left-radius: 1em 5em;
border-top-right-radius: 1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius: 1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* ... эквивалентно этому: */
border-top-left-radius: 4px 2px;
border-top-right-radius: 3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius: 3px 4px;
```

### Формальный синтаксис

{{csssyntax}}

## Примеры

```html hidden
<pre id="example-1">
border: solid 10px;
border-radius: 10px 40px 40px 10px;
  </pre
>
<pre id="example-2">
border: groove 1em red;
border-radius: 2em;
  </pre
>
<pre id="example-3">
background: gold;
border: ridge gold;
border-radius: 13em/3em;
  </pre
>
<pre id="example-4">
border: none;
border-radius: 40px 10px;
background: gold;
  </pre
>
<pre id="example-5">
border: none;
border-radius: 50%;
background: burlywood;
  </pre
>
<pre id="example-6">
border: dotted;
border-width: 10px 4px;
border-radius: 10px 40px;
  </pre
>
<pre id="example-7">
border: dashed;
border-width: 2px 4px;
border-radius: 40px;
  </pre
>
```

```css hidden
pre {
  margin: 20px;
  padding: 20px;
  width: 80%;
  height: 80px;
}

pre#example-1 {
  border: solid 10px;
  border-radius: 10px 40px 40px 10px;
}

pre#example-2 {
  border: groove 1em red;
  border-radius: 2em;
}

pre#example-3 {
  background: gold;
  border: ridge gold;
  border-radius: 13em/3em;
}

pre#example-4 {
  border: none;
  border-radius: 40px 10px;
  background: gold;
}

pre#example-5 {
  border: none;
  border-radius: 50%;
  background: burlywood;
}

pre#example-6 {
  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
}

pre#example-7 {
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
}
```

{{EmbedLiveSample("", "200", "1150")}}

## Живые примеры

- Пример 1: <http://jsfiddle.net/Tripad/qnGKj/2/>
- Пример 2: <http://jsfiddle.net/Tripad/qnGKj/3/>
- Пример 3: <http://jsfiddle.net/Tripad/qnGKj/4/>
- Пример 4: <http://jsfiddle.net/Tripad/qnGKj/5/>
- Пример 5: <http://jsfiddle.net/Tripad/qnGKj/6/>

## Спецификации

| Спецификация                                                          | Статус                          | Комментарий             |
| --------------------------------------------------------------------- | ------------------------------- | ----------------------- |
| {{ SpecName('CSS3 Backgrounds', '#border-radius', 'border-radius') }} | {{ Spec2('CSS3 Backgrounds') }} | Изначальное определение |

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Относящиеся к Border-radius CSS-свойства: {{Cssxref("border-top-left-radius")}}, {{Cssxref("border-top-right-radius")}}, {{Cssxref("border-bottom-right-radius")}}, {{Cssxref("border-bottom-left-radius")}}
