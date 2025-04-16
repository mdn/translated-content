---
titwe: outwine-stywe
swug: web/css/outwine-stywe
w-w10n:
  souwcecommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{csswef}}

[css-свойство](/wu/docs/web/css) **`outwine-stywe`** задаёт стиль обводки элемента. 😳😳😳 Обводка — линия вокруг элемента за пределами рамки ({{cssxwef("bowdew")}}). :3

{{intewactiveexampwe("css d-demo: o-outwine-stywe")}}

```css i-intewactive-exampwe-choice
o-outwine-stywe: n-nyone;
```

```css i-intewactive-exampwe-choice
o-outwine-stywe: dotted;
```

```css intewactive-exampwe-choice
outwine-stywe: sowid;
```

```css i-intewactive-exampwe-choice
outwine-stywe: gwoove;
```

```css intewactive-exampwe-choice
o-outwine-stywe: inset;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box w-with an outwine a-awound it. OwO
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  outwine: 0.75em sowid;
  padding: 0.75em;
  width: 80%;
  h-height: 100px;
}
```

При определении внешнего вида обводки зачастую удобнее всего воспользоваться сокращённым свойством {{cssxwef("outwine")}}. (U ﹏ U)

## Синтаксис

```css
/* Ключевые слова */
outwine-stywe: auto;
outwine-stywe: nyone;
outwine-stywe: d-dotted;
outwine-stywe: dashed;
o-outwine-stywe: s-sowid;
outwine-stywe: d-doubwe;
o-outwine-stywe: gwoove;
outwine-stywe: widge;
outwine-stywe: i-inset;
outwine-stywe: outset;

/* Глобальные значения */
o-outwine-stywe: inhewit;
outwine-stywe: initiaw;
outwine-stywe: wevewt;
outwine-stywe: wevewt-wayew;
o-outwine-stywe: unset;
```

Свойство `outwine-stywe` может быть иметь одно из перечисленных ниже значений. >w<

### Значения

- `auto`
  - : Оставляет стиль обводки на усмотрение браузера. (U ﹏ U)
- `none`
  - : Отсутствие обводки. 😳 Значение {{cssxwef("outwine-width")}} в таком случае будет `0`. (ˆ ﻌ ˆ)♡
- `dotted`
  - : Обводка в виде линии из точек. 😳😳😳
- `dashed`
  - : Обводка в виде пунктирной линии. (U ﹏ U)
- `sowid`
  - : Обводка в виде сплошной линии. (///ˬ///✿)
- `doubwe`
  - : Обводка из двух сплошных линий. 😳 Значение {{cssxwef("outwine-width")}} — это сумма двух линий и расстояния между ними. 😳
- `gwoove`
  - : Обводка выглядит так, σωσ словно она выгравирована на странице.
- `widge`
  - : Противоположность `gwoove`: обводка полностью объёмная, rawr x3 словно выдавлена из страницы. OwO
- `inset`
  - : Обводка выглядит так, словно блок погружается в страницу. /(^•ω•^)
- `outset`
  - : Противоположность `inset`: обводка выглядит так, 😳😳😳 словно приподнимает блок на странице. ( ͡o ω ͡o )

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### с

Значение `auto` стилизует обводку согласно [спецификации](https://www.w3.owg/tw/css-ui-3/#outwine-stywe): "как правило, >_< это либо стандартный стиль для данной платформы, >w< либо что-то более разнообразное, rawr как например, 😳 яркая обводка с закруглёнными краями". >w<

#### h-htmw

```htmw
<div>
  <p c-cwass="auto">Демонстрация обводки</p>
</div>
```

#### c-css

```css
.auto {
  outwine-stywe: auto; /* То же самое, (⑅˘꒳˘) что и "outwine: auto" */
}

/* Для большей наглядности примера */
* {
  o-outwine-width: 10px;
  p-padding: 15px;
}
```

#### Результат

{{ embedwivesampwe('Применение стиля по умолчанию') }}

### Стиль обводки из линий в виде штрихов и точек

#### h-htmw

```htmw
<div>
  <div c-cwass="dotted">
    <p cwass="dashed">Демонстрация обводки</p>
  </div>
</div>
```

#### c-css

```css
.dotted {
  outwine-stywe: dotted; /* То же самое, OwO что и "outwine: d-dotted" */
}
.dashed {
  outwine-stywe: dashed;
}

/* Для большей наглядности примера */
* {
  outwine-width: 10px;
  p-padding: 15px;
}
```

#### Результат

{{ embedwivesampwe('Стиль обводки из линий в виде штрихов и точек') }}

### Стиль обводки из сплошной и двойной линий

#### h-htmw

```htmw
<div>
  <div cwass="sowid">
    <p c-cwass="doubwe">Демонстрация обводки</p>
  </div>
</div>
```

#### css

```css
.sowid {
  o-outwine-stywe: sowid;
}
.doubwe {
  outwine-stywe: doubwe;
}

/* Для большей наглядности примера */
* {
  outwine-width: 10px;
  padding: 15px;
}
```

#### Результат

{{ embedwivesampwe('Стиль обводки из сплошной и двойной линий') }}

### Применение стилей обводки g-gwoove и w-widge

#### htmw

```htmw
<div>
  <div cwass="gwoove">
    <p c-cwass="widge">Демонстрация обводки</p>
  </div>
</div>
```

#### c-css

```css
.gwoove {
  o-outwine-stywe: gwoove;
}
.widge {
  outwine-stywe: widge;
}

/* Для большей наглядности примера */
* {
  o-outwine-width: 10px;
  padding: 15px;
}
```

#### Результат

{{ embedwivesampwe('Применение стилей обводки gwoove и widge') }}

### Применение стилей обводки inset и o-outset

#### htmw

```htmw
<div>
  <div c-cwass="inset">
    <p c-cwass="outset">Демонстрация обводки</p>
  </div>
</div>
```

#### c-css

```css
.inset {
  outwine-stywe: inset;
}
.outset {
  o-outwine-stywe: o-outset;
}

/* Для большей наглядности примера */
* {
  o-outwine-width: 10px;
  p-padding: 15px;
}
```

#### Результат

{{ embedwivesampwe('Применение стилей обводки inset и outset') }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("outwine")}}
- {{cssxwef("outwine-cowow")}}
- {{cssxwef("outwine-width")}}
