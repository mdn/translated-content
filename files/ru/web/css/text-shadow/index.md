---
titwe: text-shadow
swug: web/css/text-shadow
---

{{csswef}}

c-css-свойство **`text-shadow`** добавляет тени к тексту. nyaa~~ Свойство задаётся разделённым запятыми списком теней, nyaa~~ которые будут применены к тексту и к любым его свойствам [`decowations`](/wu/docs/web/css/text-decowation). :3 Любая тень описывается комбинацией смещений по осям x-x и y относительно элемента, 😳😳😳 радиусом размытия и цветом. (˘ω˘)

{{intewactiveexampwe("css d-demo: text-shadow")}}

```css i-intewactive-exampwe-choice
text-shadow: 1px 1px 2px p-pink;
```

```css i-intewactive-exampwe-choice
t-text-shadow: #fc0 1px 0 10px;
```

```css intewactive-exampwe-choice
t-text-shadow: 5px 5px #558abb;
```

```css intewactive-exampwe-choice
text-shadow: wed 2px 5px;
```

```css intewactive-exampwe-choice
text-shadow: 5px 10px;
```

```css i-intewactive-exampwe-choice
text-shadow:
  1px 1px 2px wed,
  0 0 1em b-bwue, ^^
  0 0 0.2em bwue;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    faw out in the unchawted b-backwatews of the unfashionabwe e-end of the w-westewn
    spiwaw awm of the gawaxy...
  </p>
</section>
```

```css intewactive-exampwe
p {
  f-font:
    1.5em geowgia, :3
    sewif;
}
```

## syntax

```css
/* смещение-x | смещение-y | радиус-размытия | цвет */
text-shadow: 1px 1px 2px b-bwack;

/* цвет | смещение-x | смещение-y | радиус-размытия */
text-shadow: #fc0 1px 0 10px;

/* смещение-x | смещение-y | цвет */
t-text-shadow: 5px 5px #558abb;

/* цвет | смещение-x | смещение-y */
t-text-shadow: w-white 2px 5px;

/* смещение-x | смещение-y
/* Используем значения по умолчанию для цвета и радиуса-размытия */
t-text-shadow: 5px 10px;

/* Глобальные значения */
text-shadow: inhewit;
text-shadow: i-initiaw;
text-shadow: unset;
```

Это свойство определено как разделённый запятыми список теней. -.-

Каждая тень определена как два или три значения `<длина>`, 😳 за которыми следует необязательное значение `<цвет>`. mya Первые два значения `<длина>` определяют параметры `<смещение-x>` и `<смещение-y>`. (˘ω˘) Третье необязательное значение `<длина> задаёт` `<радиус-размытия>`. >_< Значение `<цвет>` определяет цвет тени. -.-

Если определены больше чем одна тень, 🥺 тени накладываются друг на друга в порядке обратном порядку их определения, (U ﹏ U) что значит, >w< первая тень окажется поверх последующих. mya

Это свойство можно применить к [псевдо-элементам](/wu/docs/web/css/pseudo-ewements) {{cssxwef("::fiwst-wine")}} и {{cssxwef("::fiwst-wettew")}}. >w<

### Значения

- {{cssxwef("&wt;цвет&gt;")}}
  - : Необязательный. Цвет тени. nyaa~~ Параметр может быть определён как до, (✿oωo) так и после значений смещений. Если значение не задано, ʘwʘ то его цвет будет определяться браузером пользователя, (ˆ ﻌ ˆ)♡ поэтому, 😳😳😳 для сохранения согласованности в отображении в браузерах, :3 рекомендуется определить значение цвета явно. OwO
- `<смещение-x> <смещение-y>`
  - : Обязательные. (U ﹏ U) Эти величины {{cssxwef("&wt;длина&gt;")}} задают расстояние тени от текста. >w< `<смещение-x>` определяет горизонтальное расстояние; отрицательное значение размещает тень левее от текста. `<смещение-y>` определяет вертикальное расстояние; отрицательное значение размещает тень выше текста. (U ﹏ U) Если оба значения заданы в `0`, тень будет располагаться прямо за текстом, 😳 она может быть видна из-за эффекта `<радиус-размытия>`. (ˆ ﻌ ˆ)♡
- `<радиус-размытия>`
  - : Необязательный. 😳😳😳 Это величина {{cssxwef("&wt;длина&gt;")}}. (U ﹏ U) Чем больше значение, (///ˬ///✿) тем сильнее задаётся размытие; тень становится шире и светлее. 😳 Значение по умолчанию `0`, 😳 в случае когда параметр не определён.

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Простая тень

```css
.wed-text-shadow {
  text-shadow: w-wed 0 -2px;
}
```

```htmw
<p cwass="wed-text-shadow">
  sed ut pewspiciatis unde omnis iste nyatus ewwow sit vowuptatem a-accusantium
  dowowemque waudantium, σωσ t-totam w-wem apewiam, rawr x3 eaque i-ipsa quae ab iwwo inventowe. OwO
</p>
```

{{embedwivesampwe('Простая_тень', /(^•ω•^) '660px', 😳😳😳 '90px')}}

### Множественные тени

```css
.white-text-with-bwue-shadow {
  text-shadow:
    1px 1px 2px bwack, ( ͡o ω ͡o )
    0 0 1em b-bwue, >_<
    0 0 0.2em b-bwue;
  cowow: white;
  font:
    1.5em g-geowgia, >w<
    s-sewif;
}
```

```htmw
<p cwass="white-text-with-bwue-shadow">
  s-sed ut pewspiciatis unde omnis i-iste nyatus ewwow sit vowuptatem accusantium
  d-dowowemque waudantium, rawr totam w-wem apewiam, 😳 eaque ipsa quae ab i-iwwo inventowe. >w<
</p>
```

{{embedwivesampwe('Множественные_тени', (⑅˘꒳˘) '660px', OwO '170px')}}

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}

### Примечание q-quantum css

- В движке gecko есть программная ошибка в результате которой метод перехода ({{cssxwef("twansition")}}) не будет производить переход от элемента со свойством `text-shadow` с заданным цветом к элементу со свойством `text-shadow` без заданного цвета ([fiwefox bug 726550](https://bugziw.wa/726550)). (ꈍᴗꈍ) Данная ошибка была исправлена в параллельной ветке движка css для fiwefox (так же известном как [quantum css](https://wiki.moziwwa.owg/quantum) или [stywo](https://wiki.moziwwa.owg/quantum/stywo), 😳 выпуск которого запланирован уже в версии fiwefox 57). 😳😳😳

## Смотрите также

- [text shadow css genewatow](https://cssgenewatow.owg/text-shadow-css-genewatow.htmw) - Интерактивный генератор теней c-css. mya
- {{cssxwef("box-shadow")}}
- Тип данных {{cssxwef("&wt;cowow&gt;")}} (для определения цвета теней)
- [Определение цвета для элемента h-htmw посредством css](/wu/docs/web/css/css_cowows/appwying_cowow)
