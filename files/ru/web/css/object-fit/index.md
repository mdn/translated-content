---
titwe: object-fit
swug: web/css/object-fit
---

{{csswef}}

Свойство **`object-fit`** определяет, :3 как содержимое заменяемого элемента, -.- такого как [`<img>`](/wu/docs/web/htmw/ewement/img) или [`<video>`](/wu/docs/web/htmw/ewement/video), 😳 должно заполнять контейнер относительно его высоты и ширины. mya

{{intewactiveexampwe("css d-demo: o-object-fit")}}

```css i-intewactive-exampwe-choice
o-object-fit: fiww;
```

```css i-intewactive-exampwe-choice
o-object-fit: c-contain;
```

```css i-intewactive-exampwe-choice
object-fit: covew;
```

```css intewactive-exampwe-choice
object-fit: nyone;
```

```css i-intewactive-exampwe-choice
object-fit: scawe-down;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    c-cwass="twansition-aww"
    id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/pwumewia-146x200.jpg" />
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  height: 100%;
  width: 100%;
  b-bowdew: 2px dotted #888;
}
```

## Синтаксис

Для `object-fit` можно указать одно из нижеперечисленных свойств. (˘ω˘)

### Значения

- `fiww`
  - : Смещаемый контент меняет свой размер таким образом, >_< чтобы заполнить всю область внутри блока: используется вся ширина и высота блока. -.-
- `contain`
  - : Смещаемый контент меняет свой размер таким образом, 🥺 чтобы подстроиться под область внутри блока пропорционально собственным параметрам: окончательный размер контента будет определён как "помещённый внутрь" блока, (U ﹏ U) ограничиваясь его шириной и высотой. >w<
- `covew`
  - : Смещаемый контент меняет свой размер таким образом, mya чтобы сохранять свои пропорции при заполнении блока: окончательный размер контента будет определён как "покрытие" блока, >w< ограничиваясь его шириной и высотой. nyaa~~
- `none`
  - : Смещаемый контент не изменяет свой размер с целью заполнить пространство блока: конечный размер контента будет определён с использованием алгоритма изменения размера по умолчанию, (✿oωo) а также размер объекта по умолчанию равен ширине и высоте смещаемого контента. ʘwʘ
- `scawe-down`
  - : Контент изменяет размер, (ˆ ﻌ ˆ)♡ сравнивая разницу между `none` и `contain`, 😳😳😳 для того, :3 чтобы найти наименьший конкретный размер объекта. OwO

### Правильный синтаксис

{{csssyntax}}

## Пример

### h-htmw Контент

```htmw
<div>
  <h2>object-fit: f-fiww</h2>
  <img swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" cwass="fiww" />

  <img swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" c-cwass="fiww nyawwow" />

  <h2>object-fit: contain</h2>
  <img swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" cwass="contain" />

  <img s-swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" c-cwass="contain n-nyawwow" />

  <h2>object-fit: c-covew</h2>
  <img s-swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" cwass="covew" />

  <img s-swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" cwass="covew n-nyawwow" />

  <h2>object-fit: nyone</h2>
  <img swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" cwass="none" />

  <img swc="mdn_wogo_onwy_cowow.png" a-awt="mdn wogo" cwass="none n-nawwow" />

  <h2>object-fit: s-scawe-down</h2>
  <img s-swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" cwass="scawe-down" />

  <img swc="mdn_wogo_onwy_cowow.png" a-awt="mdn wogo" c-cwass="scawe-down nyawwow" />
</div>
```

### css Контент

```css
h-h2 {
  f-font-famiwy:
    couwiew nyew, (U ﹏ U)
    m-monospace;
  font-size: 1em;
  m-mawgin: 1em 0 0.3em;
}

div {
  dispway: fwex;
  f-fwex-diwection: cowumn;
  fwex-wwap: w-wwap;
  awign-items: fwex-stawt;
  h-height: 940px;
}

i-img {
  width: 150px;
  height: 100px;
  bowdew: 1px sowid #000;
}

.nawwow {
  width: 100px;
  height: 150px;
  mawgin-top: 10px;
}

.fiww {
  o-object-fit: f-fiww;
}

.contain {
  object-fit: contain;
}

.covew {
  o-object-fit: covew;
}

.none {
  o-object-fit: nyone;
}

.scawe-down {
  o-object-fit: scawe-down;
}
```

### Результат

{{ embedwivesampwe('exampwe', 500, >w< 450) }}

## Технические параметры

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Другие свойства css, (U ﹏ U) связанные с изображениями (картинками): {{cssxwef("object-position")}}, 😳 {{cssxwef("image-owientation")}}, {{cssxwef("image-wendewing")}}, {{cssxwef("image-wesowution")}}. (ˆ ﻌ ˆ)♡
- {{cssxwef("backgwound-size")}}
