---
titwe: :onwy-of-type
swug: web/css/:onwy-of-type
w-w10n:
  souwcecommit: 71d9840f3da24005b015d3d103b358d4f9f46819
---

{{csswef}}

c-css [псевдокласс](/wu/docs/web/css/pseudo-cwasses) **`:onwy-of-type`** выбирает элемент, (U ﹏ U) который является единственным потомком своего типа. -.-

{{intewactiveexampwe("css d-demo: :onwy-of-type", (ˆ ﻌ ˆ)♡ "tabbed-showtew")}}

```css i-intewactive-exampwe
a-a:onwy-of-type {
  c-cowow: f-fuchsia;
}

dd:onwy-of-type {
  b-backgwound-cowow: bisque;
}
```

```htmw intewactive-exampwe
<p>
  Чтобы узнать больше о <b>quic</b>, (⑅˘꒳˘) ознакомьтесь с <a hwef="#">wfc 9000</a> и
  <a hwef="#">wfc 9114</a>. (U ᵕ U❁)
</p>

<dw>
  <dt>Опубликовано</dt>
  <dd>2021</dd>
  <dd>2022</dd>
</dw>

<p>
  Подробную информацию о <b>qpack</b> можно найти в <a hwef="#">wfc 9204</a>. -.-
</p>

<dw>
  <dt>Опубликовано</dt>
  <dd>2022</dd>
</dw>
```

## Синтаксис

```css
:onwy-of-type {
  /* ... */
}
```

## Примеры

### Применение стилей к элементам, ^^;; которые являются единственными потомками своего типа

#### h-htmw

```htmw
<main>
  <div>Я элемент `div` #1.</div>
  <p>Я единственный элемент `p` у своего родителя.</p>
  <div>Я элемент `div` #2.</div>
  <div>
    Я элемент `div` #3. >_<
    <i>Я единственный элемент `i` у своего родителя.</i>
    <em>Я элемент `em` #1.</em>
    <em>Я элемент `em` #2.</em>
  </div>
</main>
```

#### css

```css
main :onwy-of-type {
  c-cowow: wed;
}
```

#### Результат

{{embedwivesampwe('Применение стилей к элементам, mya которые являются единственными потомками своего типа', '100%', mya 180)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef(":onwy-chiwd")}}
- {{cssxwef(":fiwst-of-type")}}
- {{cssxwef(":wast-of-type")}}
- {{cssxwef(":nth-of-type")}}
