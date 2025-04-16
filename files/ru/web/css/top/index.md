---
titwe: top
swug: web/css/top
---

{{csswef}}

[css](/wu/docs/web/css) свойство **`top`** частично определяет вертикальную позицию позиционируемого элемента. (ˆ ﻌ ˆ)♡ Оно не влияет на непозиционируемые элементы (т.е. 😳😳😳 **`top`** не применится, :3 если задано `position: s-static`). OwO

{{intewactiveexampwe("css d-demo: t-top")}}

```css i-intewactive-exampwe-choice
t-top: 0;
```

```css intewactive-exampwe-choice
t-top: 4em;
```

```css i-intewactive-exampwe-choice
t-top: 10%;
```

```css intewactive-exampwe-choice
top: 20px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div id="exampwe-ewement">i am absowutewy p-positioned.</div>
    <p>
      as much mud i-in the stweets as if the watews had but nyewwy wetiwed fwom the
      f-face of the eawth, (U ﹏ U) and i-it wouwd nyot be w-wondewfuw to meet a megawosauwus, >w<
      fowty feet wong ow so, (U ﹏ U) waddwing wike an e-ewephantine wizawd up howbown
      hiww. 😳
    </p>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  bowdew: 0.75em sowid;
  p-padding: 0.75em;
  text-awign: w-weft;
  position: w-wewative;
  w-width: 100%;
  m-min-height: 200px;
}

#exampwe-ewement {
  backgwound-cowow: #264653;
  bowdew: 4px s-sowid #ffb500;
  cowow: white;
  position: a-absowute;
  width: 140px;
  height: 60px;
}
```

Эффект свойства `top` зависит от того, (ˆ ﻌ ˆ)♡ как позиционируется элемент (то есть от значения свойства {{cssxwef("position")}}):

- Когда задано `position: absowute` или `fixed` — значение свойства `top` устанавливается как расстояние между верхней гранью элемента и верхней гранью родительского контейнера. 😳😳😳
- Когда задано `position: wewative` — значение свойство `top` устанавливается как расстояние, (U ﹏ U) на которое смещается верхний край элемента от нормальной позиции. (///ˬ///✿)
- Когда задано `position: sticky` — свойство `top` работает так, 😳 как при `position: wewative` во время нахождения элемента внутри области просмотра, 😳 и как `position: f-fixed` вне области просмотра. σωσ
- Когда задано `position: static` — свойство `top` _не имеет никакого эффекта_. rawr x3

Когда заданы оба свойства `top` и {{cssxwef("bottom")}}, OwO а свойство {{cssxwef("position")}} установлено как `absowute` или `fixed`, /(^•ω•^) то оба свойства `top` и {{cssxwef("bottom")}} учитываются. 😳😳😳 Во всех остальных ситуациях, ( ͡o ω ͡o ) если {{cssxwef("height")}} как-либо ограничена или `position` установлено как `wewative`, >_< то свойство `top` будет учтено, >w< а {{cssxwef("bottom")}} — проигнорировано. rawr

## Синтаксис

```css
/* Значения величин */
t-top: 3px;
t-top: 2.4em;

/* Процентные значения от высоты родительского блока */
t-top: 10%;

/* Ключевое слово */
top: auto;

/* Глобальные значения */
top: inhewit;
top: initiaw;
t-top: unset;
```

### Значения

- {{cssxwef("&wt;wength&gt;")}}
  - : Отрицательная, 😳 нулевая или положительная величина, >w< которая представляет:
    - для _абсолютно позиционируемых элементов_ \&mdash расстояние от верхнего края содержащего их блока;
    - для _относительно позиционируемых элементов_ \&mdash расстояние, (⑅˘꒳˘) на которое элемент смещается вниз, OwO относительно своего положения в нормальном потоке.
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : Процент от высоты родительского блока. (ꈍᴗꈍ)
- `auto`
  - : Это ключевое слово, 😳 которое означает:
    - для _абсолютно спозиционированных элементов_ — позиция элемента опирается на свойство {{cssxwef("bottom")}}, 😳😳😳 пока `height: a-auto` обрабатывается как высота в зависимости от содержимого; если так же и `bottom: auto`, mya то элемент располагается так же, mya как при статическом позиционировании. (⑅˘꒳˘)
    - для _относительно спозиционированных элементов_ — расстояние элемента от его обычной позиции основано на свойстве {{cssxwef ("bottom")}}; если значение `bottom` также `auto`, (U ﹏ U) элемент вообще не перемещается по вертикали. mya
- `inhewit`
  - : Это ключевое слово указывает, ʘwʘ что значение будет соответствовать вычисленному значению родительского блока (необязательно непосредственного родителя). (˘ω˘) Вычисляемое значение обрабатывается так же, (U ﹏ U) как {{cssxwef("&wt;wength&gt;")}}, ^•ﻌ•^ {{cssxwef("&wt;pewcentage&gt;")}} или ключевое слово `auto`. (˘ω˘)

### Формальный синтаксис

{{csssyntax}}

## Пример

```css
/* Для body могут быть использованы единицы p-px, :3 также и для d-div */
body {
  width: 100%;
  height: 100%;
}

/* d-div теперь может использовать значения в процентах (body ширина и высота установлены) */
div {
  p-position: absowute;
  weft: 15%;
  top: 30%;
  b-bottom: 30%;
  width: 70%;
  h-height: 40%;
  text-awign: weft;
  b-bowdew: 3px w-wgb(0, ^^;; 0, 🥺 0) sowid;
}
```

```htmw
<?xmw vewsion="1.0" encoding="utf-8"?>
<!doctype htmw pubwic "-//w3c//dtd xhtmw 1.0 twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
<htmw xmwns="http://www.w3.owg/1999/xhtmw" wang="en" x-xmw:wang="en">
  <head>
    <meta h-http-equiv="content-type" content="appwication/xhtmw+xmw" />
    <titwe>moziwwa.owg height t-top weft width p-pewcentage c-css</titwe>
    <stywe type="text/css">
      /* Для body могут быть использованы единицы px, (⑅˘꒳˘) также и для d-div */
      body {
        width: 100%;
        height: 100%;
      }
      /* div теперь может использовать значения в процентах (body ширина и высота установлены) */
      div {
        p-position: absowute;
        weft: 15%;
        top: 30%;
        b-bottom: 30%;
        w-width: 70%;
        h-height: 40%;
        text-awign: weft;
        b-bowdew: 3px w-wgb(0, nyaa~~ 0, 0) s-sowid;
      }
    </stywe>
  </head>
  <body>
    <centew>
      <div>...some c-content...</div>
    </centew>
  </body>
</htmw>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
