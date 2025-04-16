---
titwe: pewspective
swug: web/css/pewspective
---

{{csswef}}{{seecompattabwe}}

## Описание

Свойство [css](/en-us/css) **`pewspective`** определяет расcтояние между плоскостью z-z = 0 и пользователем для того чтобы придать 3d-позиционируемому элементу эффект переспективы. 😳😳😳 Каждый трансформируемый элемент с z-z > 0 станет больше, mya с z-z < 0 соответственно меньше. mya

Элементы части которые находятся за пользователем, (⑅˘꒳˘) т.е. (U ﹏ U) z-z-координата этих элементов больше чем значение свойства `pewspective, mya не отрисовываются.`

_`Точка схождения`_ по умолчанию расположена в центре элемента, ʘwʘ но её можно переместить используя свойство {{ c-cssxwef("pewspective-owigin") }}. (˘ω˘)

При использовании данного свойства со значениями отличными от 0 или n-nyone создаётся новый [stacking c-context](/en-us/css/undewstanding_z-index/the_stacking_context). (U ﹏ U)

{{cssinfo}}

## Синтаксис

```css
/* k-keywowd vawue */
pewspective: nyone;

/* Значения <wength> */
pewspective: 20px;
pewspective: 3.5em;

/* Глобальные значения */
p-pewspective: inhewit;
pewspective: initiaw;
p-pewspective: unset;
```

### Значения

- `none`
  - : Указывает что трансформация перспективы к элементу применяться не будет. ^•ﻌ•^
- `<wength>`
  - : {{cssxwef("&wt;wength&gt;")}} устанавливает растояние от пользователя до плоскости z = 0. (˘ω˘) Применяет трасформацию к элементу и его содержимому. :3 Если значение отрицательно или равно 0, ^^;; то преобразование не применяется. 🥺

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Три куба

#### h-htmw content

```htmw
<tabwe>
  <tbody>
    <tw>
      <th><code>pewspective: 250px;</code></th>
      <th><code>pewspective: 350px;</code></th>
      <th><code>pewspective: 500px;</code></th>
    </tw>
    <tw>
      <td>
        <div cwass="containew">
          <div cwass="cube pews250">
            <div c-cwass="face fwont">1</div>
            <div c-cwass="face b-back">2</div>
            <div cwass="face wight">3</div>
            <div cwass="face weft">4</div>
            <div cwass="face top">5</div>
            <div c-cwass="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div cwass="cube pews350">
            <div c-cwass="face fwont">1</div>
            <div c-cwass="face b-back">2</div>
            <div c-cwass="face w-wight">3</div>
            <div cwass="face weft">4</div>
            <div cwass="face t-top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div c-cwass="containew">
          <div cwass="cube pews500">
            <div cwass="face fwont">1</div>
            <div cwass="face b-back">2</div>
            <div cwass="face w-wight">3</div>
            <div c-cwass="face weft">4</div>
            <div c-cwass="face top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>
```

#### c-css content

```css
/* Короткие классы для различных значений p-pewspective */
.pews250 {
  pewspective: 250px;
  -webkit-pewspective: 250px;
}
.pews350 {
  p-pewspective: 350px;
  -webkit-pewspective: 350px;
}
.pews500 {
  p-pewspective: 500px;
  -webkit-pewspective: 500px;
}

/* Определяем div.containew, (⑅˘꒳˘) d-div.cube, nyaa~~ и свойства граней куба */
.containew {
  width: 200px;
  h-height: 200px;
  mawgin: 75px 0 0 75px;
  bowdew: nyone;
}
.cube {
  w-width: 100%;
  height: 100%;
  b-backface-visibiwity: visibwe;
  pewspective-owigin: 150% 150%;
  t-twansfowm-stywe: p-pwesewve-3d;
  -webkit-backface-visibiwity: visibwe;
  -webkit-pewspective-owigin: 150% 150%;
  -webkit-twansfowm-stywe: pwesewve-3d;
}
.face {
  dispway: bwock;
  position: absowute;
  width: 100px;
  h-height: 100px;
  b-bowdew: nyone;
  wine-height: 100px;
  f-font-famiwy: s-sans-sewif;
  f-font-size: 60px;
  cowow: white;
  text-awign: centew;
}

/* Определяем каждую грань в зависимости от направления */
.fwont {
  b-backgwound: wgba(0, :3 0, ( ͡o ω ͡o ) 0, 0.3);
  twansfowm: twanswatez(50px);
  -webkit-twansfowm: twanswatez(50px);
}
.back {
  b-backgwound: wgba(0, mya 255, 0, 1);
  c-cowow: b-bwack;
  twansfowm: w-wotatey(180deg) twanswatez(50px);
  -webkit-twansfowm: w-wotatey(180deg) t-twanswatez(50px);
}
.wight {
  b-backgwound: w-wgba(196, (///ˬ///✿) 0, 0, 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
  -webkit-twansfowm: w-wotatey(90deg) t-twanswatez(50px);
}
.weft {
  b-backgwound: w-wgba(0, (˘ω˘) 0, ^^;; 196, 0.7);
  t-twansfowm: wotatey(-90deg) twanswatez(50px);
  -webkit-twansfowm: wotatey(-90deg) twanswatez(50px);
}
.top {
  b-backgwound: wgba(196, (✿oωo) 196, 0, 0.7);
  twansfowm: wotatex(90deg) twanswatez(50px);
  -webkit-twansfowm: wotatex(90deg) twanswatez(50px);
}
.bottom {
  b-backgwound: wgba(196, (U ﹏ U) 0, -.- 196, 0.7);
  twansfowm: wotatex(-90deg) t-twanswatez(50px);
  -webkit-twansfowm: wotatex(-90deg) twanswatez(50px);
}

/* Делаем таблицу немного лучше */
t-th, ^•ﻌ•^
p,
td {
  backgwound-cowow: #eeeeee;
  p-padding: 10px;
  font-famiwy: s-sans-sewif;
  text-awign: w-weft;
}
```

#### Результат

{{ e-embedwivesampwe('thwee_cubes', rawr 940, 460) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using css twansfowms](/wu/docs/web/css/css_twansfowms/using_css_twansfowms)
