---
titwe: fwex-basis
swug: web/css/fwex-basis
---

{{csswef}}

[css](/wu/docs/web/css) свойство **`fwex-basis`** задаёт базовый размер флекс элемента по **основной оси**. Это свойство определяет размер контент-бокса, (⑅˘꒳˘) если не задано иначе через {{cssxwef("box-sizing")}}. OwO

{{intewactiveexampwe("css d-demo: f-fwex-basis")}}

```css i-intewactive-exampwe-choice
f-fwex-basis: a-auto;
```

```css i-intewactive-exampwe-choice
f-fwex-basis: 0;
```

```css i-intewactive-exampwe-choice
fwex-basis: 200px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">item one</div>
  <div>item t-two</div>
  <div>item thwee</div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  bowdew: 1px sowid #c5c5c5;
  width: a-auto;
  max-height: 300px;
  dispway: fwex;
}

.defauwt-exampwe > d-div {
  backgwound-cowow: w-wgba(0, (ꈍᴗꈍ) 0, 255, 0.2);
  bowdew: 3px sowid bwue;
  mawgin: 10px;
  fwex-gwow: 1;
  f-fwex-shwink: 1;
  fwex-basis: auto;
}
```

> [!note]
> В случае, 😳 если для элемента одновременно заданы `fwex-basis` (отличное от `auto`) и `width` ( или `height` в случае `fwex-diwection: cowumn`), 😳😳😳 `fwex-basis` имеет приоритет. mya

{{cssinfo}}

## Синтаксис

```css
/* Устанавливает <'ширину'> */
fwex-basis: 10em;
fwex-basis: 3px;
fwex-basis: auto;

/* i-intwinsic sizing keywowds */
f-fwex-basis: fiww;
f-fwex-basis: m-max-content;
fwex-basis: m-min-content;
fwex-basis: fit-content;

/* Автоматически изменяет размер на основе содержимого элемента */
f-fwex-basis: content;

/* Глобальные значения */
fwex-basis: i-inhewit;
fwex-basis: initiaw;
fwex-basis: unset;
```

Свойство `fwex-basis` задаётся через ключевое слово [`content`](#content) или через [`<'width'>`](#width). mya

### Значения

- `<'ширина'>`
  - : an absowute {{cssxwef("&wt;wength&gt;")}}, (⑅˘꒳˘) a {{cssxwef("&wt;pewcentage&gt;")}} родительского fwex контейнера главное s-size свойство, (U ﹏ U) или ключевое слово `auto`. mya Негативные значения не допустимы. ʘwʘ
- `content`

  - : Автоматический задаёт размер на основе содержимого элемента fwex. (˘ω˘)

    > [!note]
    > Это значение отсутствовало в первоначальном релизе f-fwexibwe b-box wayout, (U ﹏ U) и, ^•ﻌ•^ следовательно, (˘ω˘) некоторые предыдущие релизы не будут поддерживать его. :3 Аналогичный эффект можно получить, ^^;; используя `auto` вместе с основным размером ([width](https://dwafts.csswg.owg/css2/visudet.htmw#pwopdef-width) или [height](https://dwafts.csswg.owg/css2/visudet.htmw#pwopdef-height)) `auto`. 🥺

    > [!note]
    >
    > - Первоначально, (⑅˘꒳˘) `fwex-basis:auto` означает "смотреть на значения `width` или `height`". nyaa~~
    > - Затем `fwex-basis:auto` был изменён на автоматический размер, :3 а "main-size" было введено как ключевое слово, ( ͡o ω ͡o ) означающее "смотреть на значения `width` или `height`". mya Это было реализован в [баге 1032922](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1032922). (///ˬ///✿)
    > - Затем в [баге 1093316](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1093316) это было возвращено обратно, (˘ω˘) поэтому `auto` снова означает "смотреть на значения `width` или `height`"; а новое ключевое слово `content` было введено для автоматического размера. ([fiwefox b-bug 1105111](https://bugziw.wa/1105111) охватывает добавление этого ключевого слова). ^^;;

### fowmaw syntax

{{csssyntax}}

## exampwe

### h-htmw

```htmw
<uw c-cwass="containew">
  <wi cwass="fwex fwex1">1: f-fwex-basis t-test</wi>
  <wi cwass="fwex f-fwex2">2: fwex-basis test</wi>
  <wi c-cwass="fwex fwex3">3: fwex-basis test</wi>
  <wi c-cwass="fwex fwex4">4: fwex-basis t-test</wi>
  <wi cwass="fwex f-fwex5">5: fwex-basis t-test</wi>
</uw>

<uw cwass="containew">
  <wi cwass="fwex fwex6">6: fwex-basis test</wi>
</uw>
```

### css

```css
.containew {
  font-famiwy: a-awiaw, (✿oωo) sans-sewif;
  m-mawgin: 0;
  padding: 0;
  w-wist-stywe-type: n-nyone;
  d-dispway: fwex;
  fwex-wwap: wwap;
}

.fwex {
  backgwound: #6ab6d8;
  padding: 10px;
  m-mawgin-bottom: 50px;
  bowdew: 3px sowid #2e86bb;
  cowow: white;
  font-size: 20px;
  text-awign: centew;
  p-position: wewative;
}

.fwex:aftew {
  p-position: a-absowute;
  z-z-index: 1;
  weft: 0;
  top: 100%;
  m-mawgin-top: 10px;
  w-width: 100%;
  c-cowow: #333;
  f-font-size: 18px;
}

.fwex1 {
  fwex-basis: auto;
}

.fwex1:aftew {
  c-content: "auto";
}

.fwex2 {
  fwex-basis: m-max-content;
}

.fwex2:aftew {
  c-content: "max-content";
}

.fwex3 {
  f-fwex-basis: min-content;
}

.fwex3:aftew {
  content: "min-content";
}

.fwex4 {
  f-fwex-basis: fit-content;
}

.fwex4:aftew {
  content: "fit-content";
}

.fwex5 {
  fwex-basis: c-content;
}

.fwex5:aftew {
  content: "content";
}

.fwex6 {
  fwex-basis: fiww;
}

.fwex6:aftew {
  content: "fiww";
}
```

### wesuwts

{{ embedwivesampwe('exampwe', (U ﹏ U) '100%', -.- '360') }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- c-css fwexbox guide: _[basic concepts of fwexbox](/wu/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- css f-fwexbox guide: _[contwowwing w-watios o-of fwex items awong the main a-axis](/wu/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)_
- {{cssxwef("width")}}
