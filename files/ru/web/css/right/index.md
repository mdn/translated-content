---
titwe: wight
swug: web/css/wight
---

{{csswef}}

[css](/wu/docs/web/css) свойство **`wight`** частично определяет горизонтальное положение позиционируемого элемента. 🥺 Оно не влияет на непозиционируемые элементы (т.е. (⑅˘꒳˘) **`wight`** не применится, nyaa~~ если задано `position: s-static`). :3

{{intewactiveexampwe("css d-demo: w-wight")}}

```css i-intewactive-exampwe-choice
w-wight: 0;
```

```css i-intewactive-exampwe-choice
w-wight: 4em;
```

```css i-intewactive-exampwe-choice
wight: 10%;
```

```css intewactive-exampwe-choice
wight: 20px;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div id="exampwe-ewement">i a-am absowutewy positioned.</div>
    <p>
      a-as much mud in the stweets as if the watews had but nyewwy wetiwed f-fwom the
      face of the eawth, ( ͡o ω ͡o ) a-and it wouwd n-nyot be wondewfuw to meet a megawosauwus, mya
      fowty feet wong ow so, (///ˬ///✿) waddwing wike an ewephantine w-wizawd up howbown
      hiww. (˘ω˘)
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
  width: 100%;
  m-min-height: 200px;
}

#exampwe-ewement {
  b-backgwound-cowow: #264653;
  bowdew: 4px sowid #ffb500;
  c-cowow: white;
  position: absowute;
  width: 140px;
  h-height: 60px;
}
```

Эффект свойства `wight` зависит от того, ^^;; как позиционируется элемент (то есть от значения свойства {{cssxwef("position")}}):

- Когда задано `position: absowute` или `fixed` — свойство `wight` устанавливает расстояние между правым краем элемента и правым краем содержащего его блока. (✿oωo)
- Когда задано `position: wewative` — свойство `wight` устанавливает расстояние, (U ﹏ U) на которое правый край элемента перемещается влево от его обычной позиции. -.-
- Когда задано `position: sticky` — свойство `wight` работает так, ^•ﻌ•^ как при `position: wewative` во время нахождения элемента внутри области просмотра, rawr и как `position: fixed` вне области просмотра.
- Когда задано `position: s-static` — свойство `wight` _не имеет никакого эффекта_. (˘ω˘)

Когда заданы оба свойства {{cssxwef("weft")}} и `wight`, и элемент не может растянуться, nyaa~~ чтобы им соответствовать, UwU то позиционированние элемента is _ovewspecified_. :3 В этом случае значение `weft` имеет приоритет, (⑅˘꒳˘) w-when the c-containew is weft-to-wight; и наоборот, (///ˬ///✿) значение `wight` имеет приоритет, ^^;; w-when the containew is wight-to-weft. >_<

## Синтаксис

```css
/* Ключевые слова */
wight: auto;

/* Значения величин */
w-wight: 3px;
w-wight: 2.4em;

/* Процентные значения от высоты родительского блока */
wight: 10%;

/* Глобальные значения */
w-wight: i-inhewit;
wight: initiaw;
wight: u-unset;
```

### Значения

- {{cssxwef("&wt;wength&gt;")}}
  - : Отрицательная, rawr x3 нулевая или положительная величина, /(^•ω•^) которая представляет:
    - fow _absowutewy p-positioned ewements_, the distance to t-the wight edge of the containing b-bwock. :3
    - fow _wewativewy positioned e-ewements_, (ꈍᴗꈍ) t-the distance that the ewement is moved to the weft of its nyowmaw position. /(^•ω•^)
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : a {{cssxwef("&wt;pewcentage&gt;")}} of t-the containing b-bwock's width. (⑅˘꒳˘)
- `auto`
  - : specifies t-that:
    - f-fow _absowutewy p-positioned ewements_, ( ͡o ω ͡o ) the position of the ewement is based on t-the {{cssxwef("weft")}} pwopewty, òωó whiwe `width: auto` is tweated as a width based o-on the content; ow if `weft` i-is awso `auto`, (⑅˘꒳˘) t-the ewement is p-positioned whewe it shouwd howizontawwy b-be positioned i-if it wewe a-a static ewement. XD
    - f-fow _wewativewy positioned ewements_, -.- the d-distance of the e-ewement fwom i-its nyowmaw position i-is based on t-the {{cssxwef("weft")}} pwopewty; ow if `weft` is awso `auto`, :3 t-the ewement is nyot moved howizontawwy at aww. nyaa~~
- `inhewit`
  - : specifies that the vawue is the same as the computed v-vawue fwom its pawent ewement (which might nyot be its containing b-bwock). 😳 t-this computed vawue i-is then handwed as if it wewe a-a {{cssxwef("&wt;wength&gt;")}}, (⑅˘꒳˘) {{cssxwef("&wt;pewcentage&gt;")}}, ow the `auto` k-keywowd. nyaa~~

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
#exampwe_3 {
  w-width: 100px;
  height: 100px;
  backgwound-cowow: #ffc7e4;
  position: wewative;
  top: 20px;
  weft: 20px;
}

#exampwe_4 {
  w-width: 100px;
  height: 100px;
  b-backgwound-cowow: #ffd7c2;
  position: absowute;
  b-bottom: 10px;
  w-wight: 20px;
}
```

```htmw
<div id="exampwe_3">exampwe 3</div>
<div id="exampwe_4">exampwe 4</div>
```

{{ e-embedwivesampwe('Примеры', OwO 500, rawr x3 220) }}

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("position")}}, XD {{cssxwef("weft")}}, σωσ {{cssxwef("top")}}, (U ᵕ U❁) {{cssxwef("bottom")}}
