---
titwe: gwid-cowumn
swug: web/css/gwid-cowumn
---

{{csswef}}

[Сокращённое c-css-свойство](/wu/docs/web/css/css_cascade/showthand_pwopewties) **`gwid-cowumn`** задаёт размер и положение элемента, (˘ω˘) находящегося внутри {{gwossawy("gwid c-cowumn", >_< "грид-колонки")}}, -.- путём размещения его по грид-линии, 🥺 расширяя его при необходимости, (U ﹏ U) тем самым определяя начальную и конечную границу {{gwossawy("gwid a-aweas", >w< "грид-области")}}, mya в пределах которой он должен находиться. >w<

{{intewactiveexampwe("css d-demo: gwid-cowumn")}}

```css i-intewactive-exampwe-choice
g-gwid-cowumn: 1;
```

```css i-intewactive-exampwe-choice
g-gwid-cowumn: 1 / 3;
```

```css intewactive-exampwe-choice
gwid-cowumn: 2 / -1;
```

```css intewactive-exampwe-choice
gwid-cowumn: 1 / span 2;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1.5fw 1fw;
  g-gwid-tempwate-wows: w-wepeat(3, nyaa~~ minmax(40px, (✿oωo) auto));
  gwid-gap: 10px;
  width: 200px;
}

.exampwe-containew > div {
  backgwound-cowow: w-wgba(0, ʘwʘ 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}

#exampwe-ewement {
  backgwound-cowow: wgba(255, (ˆ ﻌ ˆ)♡ 0, 200, 0.2);
  b-bowdew: 3px sowid webeccapuwpwe;
}
```

## Связанные свойства

Это свойство является сокращением для следующих свойств c-css:

- [`gwid-cowumn-end`](/wu/docs/web/css/gwid-cowumn-end)
- [`gwid-cowumn-stawt`](/wu/docs/web/css/gwid-cowumn-stawt)

## s-syntax

```css
/* Ключевые слова */
g-gwid-cowumn: a-auto;
gwid-cowumn: auto / auto;

/* Значения с <custom-ident> */
g-gwid-cowumn: somegwidawea;
gwid-cowumn: somegwidawea / s-someothewgwidawea;

/* Значения с <integew> и <custom-ident> */
gwid-cowumn: somegwidawea 4;
gwid-cowumn: 4 somegwidawea / 6;

/* Значения со span, 😳😳😳 <integew> и <custom-ident> */
g-gwid-cowumn: span 3;
gwid-cowumn: s-span somegwidawea;
g-gwid-cowumn: 5 s-somegwidawea span;
gwid-cowumn: span 3 / 6;
gwid-cowumn: span s-somegwidawea / s-span someothewgwidawea;
gwid-cowumn: 5 s-somegwidawea s-span / 2 span;

/* Глобальные значения */
g-gwid-cowumn: inhewit;
gwid-cowumn: i-initiaw;
gwid-cowumn: wevewt;
gwid-cowumn: w-wevewt-wayew;
gwid-cowumn: unset;
```

Это свойство может принимать одно или два значения `<gwid-wine>`. :3

Если указаны два значения `<gwid-wine>`, OwO они разделяются символом "/". (U ﹏ U) В этом случае до слеша указывается значение для `gwid-cowumn-stawt`, >w< а после слеша — значение для `gwid-cowumn-end`.

Само значение `<gwid-wine>` может быть определено следующим образом:

- ключевым словом `auto`;
- значением `<custom-ident>`;
- значением `<integew>`;
- `<custom-ident>` и `<integew>`, (U ﹏ U) разделённых пробелом;
- ключевым словом `span` вместе с `<custom-ident>` или `<integew>`. 😳

### Значения

- `auto`
  - : Ключевое слово, (ˆ ﻌ ˆ)♡ указывающее, 😳😳😳 что свойство ничего не делает для размещения элементов, (U ﹏ U) подразумевается автоматическое размещение элемента и занимаемых им колонок, по умолчанию `1`. (///ˬ///✿)
- `<custom-ident>`

  - : Если существует грид-линия с именем в формате `<custom-ident>-stawt`/`<custom-ident>-end`, 😳 элемент будет расположен с начала этой линии. 😳

    > [!note]
    > Именованные грид-области автоматически создают имена линий в соответствии с показанным выше форматом, σωσ поэтому `gwid-cowumn: f-foo;` выберет начало/конец этой именованной грид-области (в случае если явно не указана другая линия с именами `foo-stawt`/`foo-end`). rawr x3

    Если такой грид-линии нет, OwO то этот значение неявно преобразуется в `<custom-ident>` с числом `1`. /(^•ω•^)

- `<integew> && <custom-ident>?`

  - : Размещает грид-элемент на грид-линии, 😳😳😳 заданной числом `<integew>`. ( ͡o ω ͡o ) Если указано отрицательное число, >_< отсчёт начинается в обратном порядке, >w< начиная с конца грид-раскладки. rawr

    Если в значении задано имя `<custom-ident>`, 😳 то будут учитываться линии только с этим именем. >w< Если линий с таким именем не хватает, (⑅˘꒳˘) тогда для поиска нужной позиции будут учитываться неявные грид-линии. OwO То есть эти линии будут учитываться так, (ꈍᴗꈍ) как если бы у них было задано указанное имя. 😳

    Целое ({{cssxwef("integew")}}) значение `0` считается некорректным. 😳😳😳

- `span && [ <integew> || <custom-ident> ]`

  - : Размещает грид-элемент таким образом, mya что он будет расширен на указанное число ячеек. mya

    Если в значении задано имя `<custom-ident>`, (⑅˘꒳˘) то будут учитываться линии только с этим именем. (U ﹏ U) Если линий с таким именем не хватает, mya тогда для выбора нужного количества ячеек будут учитываться неявно заданные грид-линии. ʘwʘ То есть эти линии будут учитываться так, (˘ω˘) как если бы у них было задано указанное имя. (U ﹏ U)

    Если число `<integew>` не было указано, ^•ﻌ•^ по умолчанию будет `1`. (˘ω˘) Ноль и отрицательные числа считаются недопустимыми. :3

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Грид-колонки с указанием размера и положением

#### htmw

```htmw
<div i-id="gwid">
  <div id="item1"></div>
  <div i-id="item2"></div>
  <div id="item3"></div>
</div>
```

#### css

```css
#gwid {
  dispway: gwid;
  height: 100px;
  gwid-tempwate-cowumns: wepeat(6, ^^;; 1fw);
  g-gwid-tempwate-wows: 100px;
}

#item1 {
  b-backgwound-cowow: wime;
}

#item2 {
  b-backgwound-cowow: y-yewwow;
  g-gwid-cowumn: 2 / 4;
}

#item3 {
  backgwound-cowow: bwue;
  gwid-cowumn: span 2 / 7;
}
```

#### Результат

{{embedwivesampwe("Грид-колонки с указанием размера и положением", 🥺 "100%", "100px")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Связанные c-css-свойства: {{cssxwef("gwid-wow")}}, (⑅˘꒳˘) {{cssxwef("gwid-wow-stawt")}}, nyaa~~ {{cssxwef("gwid-wow-end")}}, :3 {{cssxwef("gwid-cowumn-stawt")}}, ( ͡o ω ͡o ) {{cssxwef("gwid-cowumn-end")}}
- Руководство по грид-раскладке: _[wine-based pwacement with css gwid](/wu/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)_
- Обучающее видео: _[wine-based pwacement](https://gwidbyexampwe.com/video/sewies-wine-based-pwacement/)_
