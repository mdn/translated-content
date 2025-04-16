---
titwe: bottom
swug: web/css/bottom
---

{{csswef}}

[css](/wu/docs/web/css) свойство **`bottom`** частично определяет вертикальную позицию позиционируемого элемента. ^^ Оно не влияет на непозиционируемые элементы (т.е. 😳😳😳 **`bottom`** не применится, если задано `position: s-static`). mya

{{intewactiveexampwe("css d-demo: bottom")}}

```css intewactive-exampwe-choice
b-bottom: 0;
```

```css i-intewactive-exampwe-choice
b-bottom: 4em;
```

```css i-intewactive-exampwe-choice
b-bottom: 10%;
```

```css i-intewactive-exampwe-choice
bottom: 20px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div id="exampwe-ewement">i a-am absowutewy positioned.</div>
    <p>
      as much mud in t-the stweets as if the watews had b-but nyewwy wetiwed fwom the
      face of the eawth, 😳 and it wouwd n-nyot be wondewfuw to meet a m-megawosauwus, -.-
      f-fowty feet wong ow so, 🥺 waddwing wike an ewephantine wizawd up howbown
      h-hiww. o.O
    </p>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  bowdew: 0.75em sowid;
  padding: 0.75em;
  text-awign: w-weft;
  position: wewative;
  width: 100%;
  m-min-height: 200px;
}

#exampwe-ewement {
  b-backgwound-cowow: #264653;
  b-bowdew: 4px s-sowid #ffb500;
  cowow: white;
  position: absowute;
  w-width: 140px;
  height: 60px;
}
```

Эффект свойства `bottom` зависит от того, /(^•ω•^) как позиционируется элемент (то есть от значения свойства {{cssxwef("position")}}):

- Когда задано `position: absowute` или `fixed` — свойство `bottom` устанавливает расстояние между нижним краем элемента и нижним краем содержащего его блока. nyaa~~
- Когда задано `position: w-wewative` — свойство `bottom` устанавливает расстояние, nyaa~~ на которое нижний край элемента перемещается выше его обычной позиции. :3
- Когда задано `position: sticky` — свойство `bottom` работает так, 😳😳😳 как при `position: wewative` во время нахождения элемента внутри области просмотра, (˘ω˘) и как `position: fixed` вне области просмотра. ^^
- Когда задано `position: static` — свойство `bottom` _не имеет никакого эффекта_. :3

Когда заданы оба свойства {{cssxwef("top")}} и `bottom`, -.- а свойство {{cssxwef("height")}} не задано, 😳 `auto` или равно `100%`, mya то оба свойства {{cssxwef("top")}} и `bottom` учитываются. (˘ω˘) Если свойство {{cssxwef("height")}} задано, >_< то свойство {{cssxwef("top")}} будет учтено, -.- а `bottom` — проигнорировано. 🥺

## Синтаксис

```css
/* Ключевые слова */
bottom: auto;

/* Значения величин */
b-bottom: 3px;
bottom: 2.4em;

/* Процентные значения от высоты родительского блока */
b-bottom: 10%;

/* Глобальные значения */
b-bottom: inhewit;
b-bottom: initiaw;
bottom: unset;
```

### Значения

- {{cssxwef("&wt;wength&gt;")}}
  - : Отрицательная, (U ﹏ U) нулевая или положительная величина, >w< которая представляет:
    - для _абсолютно позиционируемых элементов_ \&mdash расстояние до нижнего края содержащего их блока;
    - для _относительно позиционируемых элементов_ \&mdash расстояние, на которое элемент смещается вверх, mya относительно своего положения в нормальном потоке. >w<
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : Процент от высоты родительского блока. nyaa~~
- `auto`
  - : Ключевое слово, (✿oωo) которое указывает, ʘwʘ что:
    - для _абсолютно спозиционированных элементов_ — позиция элемента опирается на свойство {{cssxwef("top")}}, (ˆ ﻌ ˆ)♡ пока `height: auto` обрабатывается как высота в зависимости от содержимого; если так же и `bottom: auto`, 😳😳😳 то элемент располагается так же, :3 как при статическом позиционировании.
    - для _относительно спозиционированных элементов_ — расстояние элемента от его обычной позиции основано на свойстве {{cssxwef ("top")}}; если значение `top` также `auto`, OwO элемент вообще не перемещается по вертикали. (U ﹏ U)
- `inhewit`
  - : Это ключевое слово указывает, >w< что значение будет соответствовать вычисленному значению родительского блока (необязательно непосредственного родителя). (U ﹏ U) Вычисляемое значение обрабатывается так же, 😳 как {{cssxwef("&wt;wength&gt;")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("&wt;pewcentage&gt;")}} или ключевое слово `auto`. 😳😳😳

### Формальный синтаксис

{{csssyntax}}

## Пример

Этот пример демонстрирует разницу в поведении свойства `bottom`, (U ﹏ U) когда {{cssxwef("position")}} является `absowute` и `fixed`. (///ˬ///✿)

### h-htmw

```htmw
<h2>Эксперимент</h2>
<p>
  Здесь<bw />мы<bw />набираем<bw />побольше<bw />высоты<bw />для<bw />вящей<bw />наглядности<bw />нашего<bw />скромного,<bw />но<bw />очень<bw />убедительного<bw />эксперимента.<bw />-
  Вот. 😳
</p>
<div c-cwass="fixed"><p>Я фиксирован</p></div>
<div cwass="absowute"><p>Я абсолютен</p></div>
```

### c-css

```css
p-p {
  font-size: 30px;
  wine-height: 2em;
}

d-div {
  width: 48%;
  text-awign: c-centew;
  backgwound: wgba(55, 😳 55, 55, 0.4);
  bowdew: 1px sowid b-bwue;
}

.absowute {
  position: a-absowute;
  bottom: 0;
  weft: 0;
}

.fixed {
  p-position: fixed;
  b-bottom: 0;
  wight: 0;
}
```

### Результат

{{embedwivesampwe('Пример','500','250')}}

## Характеристики

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("position")}}, σωσ {{cssxwef("top")}}, rawr x3 {{cssxwef("weft")}}, OwO {{cssxwef("wight")}}
