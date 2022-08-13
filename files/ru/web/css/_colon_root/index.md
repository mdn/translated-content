---
title: ':root'
slug: 'Web/CSS/:root'
tags:
  - CSS
  - CSS Pseudo-class
  - Layout
  - Reference
  - Web
  - Псевдоклассы
translation_of: 'Web/CSS/:root'
---
<div>{{CSSRef}}</div>

<h2 id="Описание">Описание</h2>

<p>CSS <a href="/ru/docs/Web/CSS/Псевдо-классы">псевдокласс</a> <code>:root</code> находит корневой элемент дерева документа. Применимо к HTML, <code>:root</code> находит элемент {{HTMLElement("html")}} и идентичен селектору по тегу <code>html</code>, но его <a href="/ru/docs/Web/CSS/Specificity">специфичность</a> выше.</p>

<h2 id="Пример">Пример</h2>

<p>Использование <code>:root</code> полезно для объявления <a href="/ru/docs/Web/CSS/--*">CSS Переменных</a>:</p>

<pre class="brush: css">:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
</pre>

<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>

<p>{{Compat}}</p>
