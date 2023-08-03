---
title: "::after (:after)"
slug: Web/CSS/::after
---

{{CSSRef}}

В CSS, **`::after`** создаёт [псевдоэлемент](/ru/docs/Web/CSS/Pseudo-elements), который является последним потомком выбранного элемента. Часто используется для добавления косметического содержимого в элемент с помощью свойства {{cssxref("content")}}. По умолчанию является инлайновым.

```css
/* Добавить стрелки после ссылок */
a::after {
  content: "→";
}
```

> **Примечание:** Псведоэлементы, созданные с помощью `::before` и `::after` [содержатся в блоке форматирования элемента](https://www.w3.org/TR/CSS2/generate.html#before-after-content), и поэтому не применяются к _[замещаемым элементам](/ru/docs/Web/CSS/Replaced_element)_, таким как {{htmlelement("img")}} или {{htmlelement("br")}}.

## Синтаксис

{{csssyntax}}

> **Примечание:** В CSS3 появилась запись `::after` (с двумя двоеточиями) для различения [псевдоклассов](/ru/docs/Web/CSS/Псевдо-классы) и [псевдоэлементов](/ru/docs/Web/CSS/Pseudo-elements). Браузеры также поддерживают запись `:after`, введённую в CSS2.

## Примеры

### Простое использование

Давайте создадим два класса, один для скучных параграфов и один для потрясающих. Затем мы сможем отметить каждый параграф добавлением псевдоэлемента в его конец.

#### HTML

```html
<p class="boring-text">Вот простой скучный текст.</p>
<p>Вот нормальный текст, который не является ни скучным, ни потрясающим.</p>
<p class="exciting-text">
  Помогать MDN легко и весело. Просто нажмите кнопку редактирования, чтобы
  добавить новые живые примеры, или улучшить существующие примеры.
</p>
```

#### CSS

```css
.exciting-text::after {
  content: "<- теперь это *просто* потрясающе!";
  color: green;
}

.boring-text::after {
  content: "<- СКУЧНО!";
  color: red;
}
```

#### Результат

{{EmbedLiveSample('Простое_использование', 500, 150)}}

### Пример оформления

Можно стилизовать текст или изображения в свойстве {{cssxref("content")}} практически любым способом.

#### HTML

```html
<span class="ribbon">Посмотрите, где находится оранжевый прямоугольник.</span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::after {
  content: "Посмотрите на этот оранжевый прямоугольник.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Результат

{{EmbedLiveSample('Пример_оформления', 450, 20)}}

### Подсказки

Следующий пример показывает использование [псевдоэлемента](/ru/docs/Web/CSS/Pseudo-elements) `::after` в сочетании с CSS-выражением [`attr()`](/ru/docs/Web/CSS/attr) и [пользовательского `data-*` атрибута](/ru/docs/Web/HTML/Global_attributes#attr-dataset) `data-descr` для создания _подсказки_ на чистом CSS.

#### HTML

```html
<p>
  Здесь находится живой пример вышеприведённого кода.<br />
  У нас есть некоторый
  <span data-descr="коллекция слов и знаков препинаний">текст</span> здесь с
  несколькими
  <span data-descr="маленькие всплывающие окошки, которые снова исчезают"
    >подсказками</span
  >.<br />
  Не стесняйтесь, наводите мышку чтобы
  <span data-descr="не понимать буквально">взглянуть</span>.
</p>
```

#### CSS

```css
span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00f;
  cursor: help;
}

span[data-descr]:hover::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### Результат

{{EmbedLiveSample('Подсказки', 450, 120)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{Cssxref("::before")}}, {{cssxref("content")}}
