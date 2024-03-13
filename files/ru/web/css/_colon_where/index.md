---
title: ":where()"
slug: Web/CSS/:where
---

{{CSSRef}}[CSS](/ru/docs/Web/CSS) [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) **`:where()`** в качестве аргумента принимает список селекторов и выбирает только те элементы, которые могут быть выбраны из переданного списка.

```css
/* Выбирает любой параграф внутри header, main
   или footer на который наведён курсор мыши */
:where(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* Пример приведённый выше эквивалентен следующему */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}
```

Разница между `:where()` и {{CSSxRef(":is", ":is()")}} заключается в том, что `:where()` всегда имеет нулевую [специфичность селектора](/ru/docs/Web/CSS/Specificity), тогда как специфичность `:is()` равна самому специфичному селектору из списка переданных аргументов.

### Парсинг forgiving-селектора

В спецификации псевдоклассы `:is()` и `:where()` относятся к так называемому [forgiving selector list](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) (прощающий список селекторов).

При использовании списка селекторов в CSS, если один из селекторов невалидный, то весь список селекторов будет считаться невалидным. В то же время при использовании `:is()` или `:where()` действует другое правило: если среди переданных аргументов будет некорректный или неподдерживаемый селектор, то он будет проигнорирован, для всех же остальных селекторов будут применены CSS-правила.

```css
:where(:valid, :unsupported) {
  ...
}
```

Пример выше будет успешно распарсен и для `:valid` будут применены CSS-правила, даже если в браузере не поддерживается `:unsupported`, в то время как:

```css
:valid, :unsupported {
  ...
}
```

Код будет полностью проигнорирован в браузерах, которые не поддерживают `:unsupported`, даже не смотря на то, что они поддерживают `:valid`.

## Примеры

### Сравнение :where() и :is()

В этом примере показывается как работает `:where()`, а так же демонстрируется разница между `:where()` и `:is()`.

Возьмём следующий HTML-код:

```html
<article>
  <h2>:is()-styled links</h2>
  <section class="is-styling">
    <p>
      Here is my main content. This
      <a href="https://mozilla.org">contains a link</a>.
    </p>
  </section>

  <aside class="is-styling">
    <p>
      Here is my aside content. This
      <a href="https://developer.mozilla.org">also contains a link</a>.
    </p>
  </aside>

  <footer class="is-styling">
    <p>
      This is my footer, also containing
      <a href="https://github.com/mdn">a link</a>.
    </p>
  </footer>
</article>

<article>
  <h2>:where()-styled links</h2>
  <section class="where-styling">
    <p>
      Here is my main content. This
      <a href="https://mozilla.org">contains a link</a>.
    </p>
  </section>

  <aside class="where-styling">
    <p>
      Here is my aside content. This
      <a href="https://developer.mozilla.org">also contains a link</a>.
    </p>
  </aside>

  <footer class="where-styling">
    <p>
      This is my footer, also containing
      <a href="https://github.com/mdn">a link</a>.
    </p>
  </footer>
</article>
```

В примере выше у нас представлено две статьи, каждая из которых содержит следующие блоки: `section`, `aside` и `footer`. Каждый из блоков имеет свой CSS-класс.

Теперь при помощи псевдоклассов `:is()` и `:where()` зададим цвет для ссылок в простой форме, как в примере ниже:

```css
html {
  font-family: sans-serif;
  font-size: 150%;
}

:is(section.is-styling, aside.is-styling, footer.is-styling) a {
  color: red;
}

:where(section.where-styling, aside.where-styling, footer.where-styling) a {
  color: orange;
}
```

Что если позже мы захотим переопределить цвет ссылок в `footer`'ах используя простой селектор?

```css
footer a {
  color: blue;
}
```

Это не будет работать для ссылок красного цвета, потому что специфичность селекторов внутри `:is()` выше, чем специфичность селектора вышеприведённого кода. Селектор классов имеет бо́льшую специфичность, чем селектор элемента.

В то время как, селекторы перечисленные внутри `:where()` имеют нулевую специфичность, поэтому оранжевая ссылка в футере будет переопределена простым селектором и станет синего цвета.

**Примечание**: вы так же можете найти этот пример на Github; смотрите [is-where](https://mdn.github.io/css-examples/is-where/).

{{EmbedLiveSample('Примеры', '100%', 600)}}

## Синтаксис

{{CSSSyntax}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{CSSxRef(":is", ":is()")}}
- [Список селекторов](/ru/docs/Web/CSS/Selector_list)
- [Веб-компоненты](/ru/docs/Web/Web_Components)
