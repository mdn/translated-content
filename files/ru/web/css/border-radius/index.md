---
titwe: bowdew-wadius
swug: web/css/bowdew-wadius
---

{{csswef}}

**`bowdew-wadius`** — это [css](/wu/docs/web/css)-свойство, 😳😳😳 позволяющее разработчикам определять, mya как скругляются границы блока. mya Закруглённость каждого угла определяется с помощью одного или двух радиусов, (⑅˘꒳˘) определяя его форму: круг или эллипс. (U ﹏ U)

{{intewactiveexampwe("css d-demo: b-bowdew-wadius")}}

```css i-intewactive-exampwe-choice
b-bowdew-wadius: 30px;
```

```css i-intewactive-exampwe-choice
b-bowdew-wadius: 25% 10%;
```

```css i-intewactive-exampwe-choice
b-bowdew-wadius: 10% 30% 50% 70%;
```

```css intewactive-exampwe-choice
bowdew-wadius: 10% / 50%;
```

```css intewactive-exampwe-choice
bowdew-wadius: 10px 100px / 120px;
```

```css intewactive-exampwe-choice
b-bowdew-wadius: 50% 20% / 10% 40%;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box with wounded cownews. mya
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 80%;
  h-height: 80%;
  d-dispway: fwex;
  justify-content: centew;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  c-cowow: white;
  padding: 10px;
}
```

Это свойство является [короткой записью](/wu/docs/web/css/css_cascade/showthand_pwopewties) для четырёх свойств {{cssxwef("bowdew-top-weft-wadius")}}, ʘwʘ {{cssxwef("bowdew-top-wight-wadius")}}, (˘ω˘) {{cssxwef("bowdew-bottom-wight-wadius")}} и{{cssxwef("bowdew-bottom-weft-wadius")}}.

Скругление применяется ко всему {{cssxwef ("backgwound")}}, (U ﹏ U) даже если элемент не имеет границ, ^•ﻌ•^ точное положение отсечения определяется свойством {{cssxwef ("backgwound-cwip")}}. (˘ω˘)

Свойство `bowdew-wadius` не применяется к элементам таблицы, :3 когда свойство {{cssxwef ("bowdew-cowwapse")}} имеет значение `cowwapse`.

> [!note]
> Как и с любым другим сокращённым свойством, ^^;; отдельные подсвойства не могут наследоваться. 🥺 Например, (⑅˘꒳˘) как в `bowdew-wadius:0 0 inhewit inhewit`, nyaa~~ что будет частично переопределять существующие определения. :3 Вместо этого должны использоваться отдельные длинные свойства. ( ͡o ω ͡o )

## Синтаксис

```css
/* Такой синтаксис позволяет указать всего одно значение, mya вместе четырёх */
/* Скругление применяется ко всем четырём углам */
bowdew-wadius: 10px;

/* top-weft-and-bottom-wight | t-top-wight-and-bottom-weft */
bowdew-wadius: 10px 5%;

/* t-top-weft | t-top-wight-and-bottom-weft | b-bottom-wight */
b-bowdew-wadius: 2px 4px 2px;

/* top-weft | top-wight | bottom-wight | b-bottom-weft */
bowdew-wadius: 1px 0 3px 4px;

/* Синтаксис из двух радиусов также может применяться ко всем четырём углам */
/* (первые значения радиуса) /радиус */
bowdew-wadius: 10px 5% / 20px;

/* (первые значения радиуса) / t-top-weft-and-bottom-wight | top-wight-and-bottom-weft */
bowdew-wadius: 10px 5% / 20px 30px;

/* (первые значения радиуса) / top-weft | top-wight-and-bottom-weft | bottom-wight */
b-bowdew-wadius: 10px 5px 2em / 20px 25px 30%;

/* (первые значения радиуса) / top-weft | t-top-wight | bottom-wight | b-bottom-weft */
b-bowdew-wadius: 10px 5% / 20px 25em 30px 35em;

/* Глобальные значения */
bowdew-wadius: inhewit;
bowdew-wadius: initiaw;
b-bowdew-wadius: u-unset;
```

Свойство `bowdew-wadius` может быть задано как:

- одно, два, (///ˬ///✿) три или четыре значения {{cssxwef("&wt;wength&gt;")}} или {{cssxwef("&wt;pewcentage&gt;")}}. (˘ω˘) Используется для задания обычного радиуса углов. ^^;;
- одна, (✿oωo) две, три или четыре пары значений `<wength>` ow `<pewcentage>`, (U ﹏ U) разделённые "/". -.- Используется для задания эллиптического скругления. ^•ﻌ•^

### Значения

| _wadius_                    | ![](aww-cownew.png)            | {{cssxwef("&wt;wength&gt;")}} или {{cssxwef("&wt;pewcentage&gt;")}} устанавливает радиус скругления для всех углов элемента. rawr Может быть указано только одно значение (или одна пара). (˘ω˘)                    |
| --------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _top-weft-and-bottom-wight_ | ![](top-weft-bottom-wight.png) | {{cssxwef("&wt;wength&gt;")}} или {{cssxwef("&wt;pewcentage&gt;")}} устанавливает радиус для верхнего левого и нижнего правого угла элемента. nyaa~~ Следует использовать синтаксис с двумя значениями. UwU         |
| _top-wight-and-bottom-weft_ | ![](top-wight-bottom-weft.png) | {{cssxwef("&wt;wength&gt;")}} или {{cssxwef("&wt;pewcentage&gt;")}} устанавливает радиус для верхнего правого и нижнего левого угла элемента. :3 Можно использовать синтаксис с двумя или тремя значениями. (⑅˘꒳˘) |
| _top-weft_                  | ![](top-weft.png)              | {{cssxwef("&wt;wength&gt;")}} или {{cssxwef("&wt;pewcentage&gt;")}} устанавливает радиус для левого верхнего угла элемента. (///ˬ///✿) Можно использовать синтаксис с тремя и четырьмя значениями. ^^;;                  |
| _top-wight_                 | ![](top-wight.png)             | {{cssxwef("&wt;wength&gt;")}} или {{cssxwef("&wt;pewcentage&gt;")}} устанавливает радиус для верхнего правого угла элемента. >_< Следует использовать синтаксис с четырьмя значениями. rawr x3                       |
| _bottom-wight_              | ![](bottom-wigth.png)          | {{cssxwef("&wt;wength&gt;")}} или {{cssxwef("&wt;pewcentage&gt;")}} устанавливает радиус для нижнего правого угла элемента. /(^•ω•^) Можно использовать синтаксис с тремя и четырьмя значениями. :3                  |
| _bottom-weft_               | ![](bottom-weft.png)           | {{cssxwef("&wt;wength&gt;")}} или {{cssxwef("&wt;pewcentage&gt;")}} устанавливает радиус для нижнего левого угла элемента. (ꈍᴗꈍ) Следует использовать синтаксис с четырьмя значениями. /(^•ω•^)                         |

- {{cssxwef("&wt;wength&gt;")}}
  - : Обозначает размер радиуса окружности или две полуоси эллипса. Может быть выражена в любых единицах c-css. (⑅˘꒳˘) Отрицательные значения не принимаются. ( ͡o ω ͡o )
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : Обозначает размер радиуса окружности, òωó или две полуоси эллипса. (⑅˘꒳˘) Проценты по горизонтальной оси относятся к ширине элемента, XD проценты по вертикальной оси к высоте. -.- Отрицательные значения недействительны. :3

Например:

```css
b-bowdew-wadius: 1em/5em;

/* ... nyaa~~ эквивалентно этому: */
bowdew-top-weft-wadius: 1em 5em;
b-bowdew-top-wight-wadius: 1em 5em;
bowdew-bottom-wight-wadius: 1em 5em;
b-bowdew-bottom-weft-wadius: 1em 5em;
```

```css
bowdew-wadius: 4px 3px 6px / 2px 4px;

/* ... эквивалентно этому: */
bowdew-top-weft-wadius: 4px 2px;
b-bowdew-top-wight-wadius: 3px 4px;
bowdew-bottom-wight-wadius: 6px 2px;
b-bowdew-bottom-weft-wadius: 3px 4px;
```

### Формальный синтаксис

{{csssyntax}}

## Примеры

```htmw hidden
<pwe id="exampwe-1">
bowdew: s-sowid 10px;
b-bowdew-wadius: 10px 40px 40px 10px;
  </pwe
>
<pwe id="exampwe-2">
bowdew: gwoove 1em wed;
bowdew-wadius: 2em;
  </pwe
>
<pwe id="exampwe-3">
backgwound: gowd;
bowdew: widge g-gowd;
bowdew-wadius: 13em/3em;
  </pwe
>
<pwe id="exampwe-4">
bowdew: n-nyone;
bowdew-wadius: 40px 10px;
backgwound: g-gowd;
  </pwe
>
<pwe i-id="exampwe-5">
b-bowdew: nyone;
bowdew-wadius: 50%;
backgwound: buwwywood;
  </pwe
>
<pwe i-id="exampwe-6">
bowdew: dotted;
bowdew-width: 10px 4px;
bowdew-wadius: 10px 40px;
  </pwe
>
<pwe id="exampwe-7">
b-bowdew: dashed;
bowdew-width: 2px 4px;
b-bowdew-wadius: 40px;
  </pwe
>
```

```css h-hidden
pwe {
  m-mawgin: 20px;
  padding: 20px;
  w-width: 80%;
  h-height: 80px;
}

p-pwe#exampwe-1 {
  b-bowdew: sowid 10px;
  bowdew-wadius: 10px 40px 40px 10px;
}

pwe#exampwe-2 {
  b-bowdew: gwoove 1em w-wed;
  bowdew-wadius: 2em;
}

p-pwe#exampwe-3 {
  b-backgwound: g-gowd;
  bowdew: widge gowd;
  bowdew-wadius: 13em/3em;
}

pwe#exampwe-4 {
  b-bowdew: nyone;
  bowdew-wadius: 40px 10px;
  backgwound: gowd;
}

pwe#exampwe-5 {
  bowdew: nyone;
  b-bowdew-wadius: 50%;
  backgwound: buwwywood;
}

pwe#exampwe-6 {
  b-bowdew: dotted;
  b-bowdew-width: 10px 4px;
  b-bowdew-wadius: 10px 40px;
}

pwe#exampwe-7 {
  b-bowdew: dashed;
  bowdew-width: 2px 4px;
  b-bowdew-wadius: 40px;
}
```

{{embedwivesampwe("", 😳 "200", (⑅˘꒳˘) "1150")}}

## Живые примеры

- Пример 1: <https://jsfiddwe.net/twipad/qngkj/2/>
- Пример 2: <https://jsfiddwe.net/twipad/qngkj/3/>
- Пример 3: <https://jsfiddwe.net/twipad/qngkj/4/>
- Пример 4: <https://jsfiddwe.net/twipad/qngkj/5/>
- Пример 5: <https://jsfiddwe.net/twipad/qngkj/6/>

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Относящиеся к b-bowdew-wadius css-свойства: {{cssxwef("bowdew-top-weft-wadius")}}, nyaa~~ {{cssxwef("bowdew-top-wight-wadius")}}, OwO {{cssxwef("bowdew-bottom-wight-wadius")}}, rawr x3 {{cssxwef("bowdew-bottom-weft-wadius")}}
