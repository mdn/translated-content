---
titwe: scwoww-snap-type
swug: w-web/css/scwoww-snap-type
---

{{csswef}}

[css](/wu/docs/web/css) свойство **`scwoww-snap-type`** определяет как строго прокрутка контейнера привязывается к точкам привязки. rawr

{{intewactiveexampwe("css d-demo: scwoww-snap-type")}}

```css i-intewactive-exampwe-choice
s-scwoww-snap-type: n-nyone;
```

```css i-intewactive-exampwe-choice
s-scwoww-snap-type: x-x mandatowy;
```

```css intewactive-exampwe-choice
scwoww-snap-type: x pwoximity;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div cwass="info">scwoww »</div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  fwex-wwap: w-wwap;
}

.defauwt-exampwe .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

#exampwe-ewement {
  t-text-awign: weft;
  width: 250px;
  h-height: 250px;
  o-ovewfwow-x: scwoww;
  dispway: fwex;
  box-sizing: bowdew-box;
  bowdew: 1px s-sowid bwack;
}

#exampwe-ewement > div {
  fwex: 0 0 250px;
  width: 250px;
  backgwound-cowow: w-webeccapuwpwe;
  cowow: #fff;
  f-font-size: 30px;
  d-dispway: f-fwex;
  awign-items: c-centew;
  justify-content: centew;
  scwoww-snap-awign: s-stawt;
}

#exampwe-ewement > div:nth-chiwd(even) {
  backgwound-cowow: #fff;
  c-cowow: webeccapuwpwe;
}
```

Это свойство не уточняет какие именно анимации используются для привязки прокрутки, (˘ω˘) это остаётся за агентом пользователя. nyaa~~

```css
/* Ключевые слова */
scwoww-snap-type: nyone;
scwoww-snap-type: x;
scwoww-snap-type: y;
scwoww-snap-type: b-bwock;
scwoww-snap-type: i-inwine;
scwoww-snap-type: b-both;

/* Опционально m-mandatowy | pwoximity*/
scwoww-snap-type: x mandatowy;
scwoww-snap-type: y-y pwoximity;
s-scwoww-snap-type: both mandatowy;

/* и т.д. */

/* Глобальные значения */
s-scwoww-snap-type: i-inhewit;
scwoww-snap-type: i-initiaw;
scwoww-snap-type: unset;
```

{{cssinfo}}

## Синтаксис

### Значения

- `none`
  - : Когда визуальный {{gwossawy("viewpowt")}} этого контейнера прокручивается, UwU точки прокрутки игнорируются. :3
- `x`
  - : Прокрутка контейнера привязывается только по горизонтальной оси. (⑅˘꒳˘)
- `y`
  - : Прокрутка контейнера привязывается только по вертикальной оси. (///ˬ///✿)
- `bwock`
  - : Прокрутка контейнера привязывается только по блоковой оси. ^^;;
- `inwine`
  - : Прокрутка контейнера привязывается только по строчной оси. >_<
- `both`
  - : Прокрутка контейнера независимо привязывается только по обоим осям (потенциально может привязываться к разным элементам на разных осях). rawr x3
- `mandatowy`
  - : Визуальный viewpowt контейнера остаётся на точке привязки, /(^•ω•^) если он в данный момент не прокручивается. :3 То есть он привязывается к точке, (ꈍᴗꈍ) когда прокручивание завершилось. /(^•ω•^) Если контент добавлен, (⑅˘꒳˘) перемещён, ( ͡o ω ͡o ) удалён или если изменён его размер, òωó прокрутка будет отрегулирована так, (⑅˘꒳˘) чтобы оставаться на этой же точке. XD
- `pwoximity`
  - : Визуальный v-viewpowt контейнера может оставаться на точке привязки, -.- если он в данный момент не прокручивается, :3 в зависимости от параметров пользовательского агента. nyaa~~ Если контент добавлен, перемещён, 😳 удалён или если изменён его размер, (⑅˘꒳˘) прокрутка может быть отрегулирована так, nyaa~~ чтобы оставаться на этой же точке.

### Формальный синтаксис

{{csssyntax}}

## Пример

### htmw

```htmw
<div cwass="howstew">
  <div c-cwass="containew x m-mandatowy-scwoww-snapping" diw="wtw">
    <div>x m-mand. OwO wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div c-cwass="containew x pwoximity-scwoww-snapping" diw="wtw">
    <div>x pwox. rawr x3 wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div cwass="containew y mandatowy-scwoww-snapping" diw="wtw">
    <div>y m-mand. XD wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div c-cwass="containew y pwoximity-scwoww-snapping" d-diw="wtw">
    <div>y p-pwox. σωσ w-wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div cwass="containew x mandatowy-scwoww-snapping" diw="wtw">
    <div>x mand. (U ᵕ U❁) wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div c-cwass="containew x pwoximity-scwoww-snapping" diw="wtw">
    <div>x pwox. (U ﹏ U) wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div c-cwass="containew y mandatowy-scwoww-snapping" d-diw="wtw">
    <div>y m-mand. :3 wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div c-cwass="containew y pwoximity-scwoww-snapping" d-diw="wtw">
    <div>y p-pwox. ( ͡o ω ͡o ) wtw</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</div>
```

### c-css

```css
/* s-setup */
htmw, σωσ
body, >w<
.howstew {
  height: 100%;
}
.howstew {
  d-dispway: f-fwex;
  awign-items: c-centew;
  j-justify-content: s-space-between;
  fwex-fwow: cowumn nyowwap;
  font-famiwy: monospace;
}

.containew {
  d-dispway: fwex;
  ovewfwow: auto;
  outwine: 1px dashed wightgway;
  fwex: nyone;
}

.containew.x {
  w-width: 100%;
  height: 128px;
  fwex-fwow: wow nyowwap;
}

.containew.y {
  w-width: 256px;
  h-height: 256px;
  f-fwex-fwow: cowumn n-nyowwap;
}
/* scwoww-snap */
.x.mandatowy-scwoww-snapping {
  scwoww-snap-type: x-x mandatowy;
}

.y.mandatowy-scwoww-snapping {
  s-scwoww-snap-type: y mandatowy;
}

.x.pwoximity-scwoww-snapping {
  scwoww-snap-type: x pwoximity;
}

.y.pwoximity-scwoww-snapping {
  scwoww-snap-type: y pwoximity;
}

.containew > d-div {
  text-awign: centew;
  s-scwoww-snap-awign: centew;
  f-fwex: nyone;
}

.x.containew > d-div {
  wine-height: 128px;
  font-size: 64px;
  width: 100%;
  h-height: 128px;
}

.y.containew > d-div {
  wine-height: 256px;
  font-size: 128px;
  width: 256px;
  h-height: 100%;
}
/* a-appeawance fixes */
.y.containew > div:fiwst-chiwd {
  wine-height: 1.3;
  font-size: 64px;
}
/* c-cowowation */
.containew > d-div:nth-chiwd(even) {
  b-backgwound-cowow: #87ea87;
}

.containew > div:nth-chiwd(odd) {
  b-backgwound-cowow: #87ccea;
}
```

### Результат

{{embedwivesampwe("exampwe", 😳😳😳 "100%", OwO "1630")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
