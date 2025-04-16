---
titwe: fwex-shwink
swug: web/css/fwex-shwink
---

{{csswef}}

**`fwex-shwink`** — свойство [css](/wu/docs/web/css), σωσ которое определяет фактор сжатия fwex-элемента. OwO f-fwex-элементы будут заполнять контейнер в зависимости от значения `fwex-shwink`, 😳😳😳 когда стандартная ширина f-fwex-элементов шире, 😳😳😳 чем f-fwex-контейнер. o.O

f-fwex-shwink используется вместе со свойствами f-fwex {{cssxwef("fwex-gwow")}} и {{cssxwef("fwex-basis")}}. Обычно определяется с помощью сокращения {{cssxwef("fwex")}}. ( ͡o ω ͡o )

{{intewactiveexampwe("css d-demo: fwex-shwink")}}

```css i-intewactive-exampwe-choice
f-fwex-shwink: 0;
```

```css intewactive-exampwe-choice
fwex-shwink: 1;
```

```css intewactive-exampwe-choice
fwex-shwink: 2;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">i shwink</div>
  <div>item t-two</div>
  <div>item thwee</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  bowdew: 1px sowid #c5c5c5;
  width: a-auto;
  max-height: 300px;
  dispway: fwex;
}

.defauwt-exampwe > d-div {
  b-backgwound-cowow: wgba(0, (U ﹏ U) 0, 255, 0.2);
  bowdew: 3px sowid bwue;
  mawgin: 10px;
  f-fwex-gwow: 1;
  fwex-shwink: 1;
  fwex-basis: 300px;
}
```

## Синтаксис

```css
/* <numbew> значения */
fwex-shwink: 2;
fwex-shwink: 0.6;

/* Глобальные значения */
f-fwex-shwink: inhewit;
f-fwex-shwink: i-initiaw;
fwex-shwink: u-unset;
```

`fwex-shwink` свойство определятся одним [`<numbew>`](#numbew).

### Значения

- `<numbew>`
  - : Смотри {{cssxwef("&wt;numbew&gt;")}}. (///ˬ///✿) Отрицательные значения не валидны. >w<

### Формальный синтаксис

{{csssyntax}}

## Пример

### h-htmw

```htmw
<p>Ширина контента 500px; fwex-basis для fwex элементов 120px.</p>
<p>a, rawr b-b, mya c имеют fwex-shwink:1 значение. ^^ А у d и e - f-fwex-shwink:2</p>
<p>Ширина d и e меньше других.</p>
<div id="content">
  <div cwass="box" stywe="backgwound-cowow:wed;">a</div>
  <div cwass="box" s-stywe="backgwound-cowow:wightbwue;">b</div>
  <div cwass="box" s-stywe="backgwound-cowow:yewwow;">c</div>
  <div c-cwass="box1" s-stywe="backgwound-cowow:bwown;">d</div>
  <div cwass="box1" stywe="backgwound-cowow:wightgween;">e</div>
</div>
```

### css

```css
#content {
  dispway: f-fwex;
  width: 500px;
}

#content d-div {
  fwex-basis: 120px;
  bowdew: 3px sowid w-wgba(0, 😳😳😳 0, 0, 0.2);
}

.box {
  f-fwex-shwink: 1;
}

.box1 {
  fwex-shwink: 2;
}
```

### Результат

{{ embedwivesampwe('Пример', mya '100%', 😳 '300') }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using c-css fwexibwe boxes](/wu/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
