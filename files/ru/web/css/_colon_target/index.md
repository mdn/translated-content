---
title: ":target"
slug: Web/CSS/:target
---

{{CSSRef}}

[Псевдокласс](/ru/docs/Web/CSS/Pseudo-classes) [CSS](/ru/docs/Web/CSS) **`:target`** представляет уникальный элемент (целевой элемент) с подходящим [`id`](/ru/docs/Web/HTML/Global_attributes#id) URL-фрагментом.

```css
/* Выбирает элемент с подходящим ID текущего URL-фрагмента */
:target {
  border: 2px solid black;
}
```

Для примера, следующий URL имеет фрагмент (обозначается знаком _#_), который указывает на элемент с именем `section2`:

```
http://www.example.com/index.html#section2
```

Следующий элемент будет выбран селектором `:target`, если текущий URL равен вышеуказанному:

```html
<section id="section2">Example</section>
```

## Синтаксис

{{csssyntax}}

## Примеры

### Таблица контента

Псевдокласс `:target` может использоваться для выделения части страницы, на которую была сделана ссылка из оглавления .

#### HTML

```html
<h3>Table of Contents</h3>
<ol>
  <li><a href="#p1">Jump to the first paragraph!</a></li>
  <li><a href="#p2">Jump to the second paragraph!</a></li>
  <li>
    <a href="#nowhere"
      >This link goes nowhere, because the target doesn't exist.</a
    >
  </li>
</ol>

<h3>My Fun Article</h3>
<p id="p1">
  You can target <i>this paragraph</i> using a URL fragment. Click on the link
  above to try out!
</p>
<p id="p2">
  This is <i>another paragraph</i>, also accessible from the links above. Isn't
  that delightful?
</p>
```

#### CSS

```css
p:target {
  background-color: gold;
}

/* Добавление псевдоэлемента внутрь target-элемента */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/* Стиль italic-элементов без target-элемента */
p:target i {
  color: red;
}
```

#### Результат

{{EmbedLiveSample('A_table_of_contents', 500, 300)}}

### Pure-CSS lightbox

Вы можете использовать псевдокласс `:target` для создания lightbox без использования JavaScript. Этот метод основан на способности якорных ссылок указывать на элементы, которые изначально скрыты на странице. После этого, CSS изменяет их `display` на видимый.

> **Примечание:** Более полный pure-CSS lightbox , основанный на псевдоклассе`:target` - [available on GitHub](https://github.com/madmurphy/takefive.css/) ([demo](https://madmurphy.github.io/takefive.css/)).

#### HTML

```html
<ul>
  <li><a href="#example1">Open example #1</a></li>
  <li><a href="#example2">Open example #2</a></li>
</ul>

<div class="lightbox" id="example1">
  <figure>
    <a href="#" class="close"></a>
    <figcaption>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis enim,
      placerat id eleifend eu, semper vel sem.
    </figcaption>
  </figure>
</div>

<div class="lightbox" id="example2">
  <figure>
    <a href="#" class="close"></a>
    <figcaption>
      Cras risus odio, pharetra nec ultricies et, mollis ac augue. Nunc et diam
      quis sapien dignissim auctor. Quisque quis neque arcu, nec gravida magna.
    </figcaption>
  </figure>
</div>
```

#### CSS

```css
/* Закрываем lightbox */
.lightbox {
  display: none;
}

/* Открываем lightbox */
.lightbox:target {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Содержимое lightbox  */
.lightbox figcaption {
  width: 25rem;
  position: relative;
  padding: 1.5em;
  background-color: lightpink;
}

/* Кнопка закрытия */
.lightbox .close {
  position: relative;
  display: block;
}

.lightbox .close::after {
  right: -1rem;
  top: -1rem;
  width: 2rem;
  height: 2rem;
  position: absolute;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 50%;
  color: white;
  content: "×";
  cursor: pointer;
}

/* Обёртка lightbox  */
.lightbox .close::before {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  content: "";
  cursor: default;
}
```

#### Результат

{{EmbedLiveSample('Pure-CSS_lightbox', 500, 220)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Using the :target pseudo-class in selectors](/ru/docs/Web/CSS/CSS_Selectors/Using_the_%3Atarget_pseudo-class_in_selectors)
