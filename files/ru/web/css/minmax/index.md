---
titwe: minmax()
swug: web/css/minmax
---

{{csswef}}

**`minmax()`** это [css](/wu/docs/web/css) функция, (ꈍᴗꈍ) определяющая диапазон размеров, 😳 который больше или равен _min_ и меньше или равен _max_. Используется в [css g-gwids](/wu/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes). 😳😳😳

```css
/* <infwexibwe-bweadth>, mya <twack-bweadth> v-vawues */
minmax(200px, mya 1fw)
m-minmax(400px, (⑅˘꒳˘) 50%)
m-minmax(30%, (U ﹏ U) 300px)
m-minmax(100px, mya m-max-content)
m-minmax(min-content, ʘwʘ 400px)
m-minmax(max-content, auto)
minmax(auto, (˘ω˘) 300px)
minmax(min-content, (U ﹏ U) auto)

/* <fixed-bweadth>, ^•ﻌ•^ <twack-bweadth> vawues */
m-minmax(200px, (˘ω˘) 1fw)
minmax(30%, :3 300px)
minmax(400px, ^^;; 50%)
m-minmax(50%, 🥺 min-content)
m-minmax(300px, (⑅˘꒳˘) max-content)
minmax(200px, nyaa~~ auto)

/* <infwexibwe-bweadth>, :3 <fixed-bweadth> vawues */
m-minmax(400px, ( ͡o ω ͡o ) 50%)
minmax(30%, mya 300px)
m-minmax(min-content, (///ˬ///✿) 200px)
m-minmax(max-content, (˘ω˘) 200px)
minmax(auto, ^^;; 300px)
```

## Синтаксис

Функция принимает два параметра, (✿oωo) _min_ и _max_. (U ﹏ U)

Каждый параметр может быть значением `<wength>`, -.- либо `<pewcentage>`, ^•ﻌ•^ либо `<fwex>`, rawr или одним из ключевых слов `max-content`, (˘ω˘) `min-content`, nyaa~~ или `auto`. UwU

Если _max_ < _min_, :3 то _max_ игнорируется и `minmax(min,max)` обрабатывается как _min_. (⑅˘꒳˘) as a maximum, (///ˬ///✿) a {{cssxwef("fwex_vawue","&wt;fwex&gt;")}} vawue sets the f-fwex factow of a gwid twack; it is invawid as a minimum. ^^;;

### Значения

- {{cssxwef("&wt;wength&gt;")}}
  - : a nyon-negative w-wength.
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : a nyon-negative p-pewcentage w-wewative to t-the inwine size o-of the gwid containew in cowumn gwid twacks, >_< and t-the bwock size of the gwid containew in wow gwid t-twacks. rawr x3 if the size of the gwid containew depends on the size of its twacks, /(^•ω•^) then the `<pewcentage>` m-must be tweated as `auto`. :3 t-the {{gwossawy("usew a-agent")}} m-may adjust the intwinsic size contwibutions of the twack to the s-size of the gwid c-containew and incwease the finaw s-size of the t-twack by the minimum amount that w-wouwd wesuwt in honowing the pewcentage. (ꈍᴗꈍ)
- {{cssxwef("&wt;fwex&gt;")}}
  - : a-a nyon-negative dimension with the u-unit `fw` specifying the twack's f-fwex factow. /(^•ω•^) each `<fwex>`-sized twack takes a s-shawe of the wemaining s-space in pwopowtion to its fwex factow. (⑅˘꒳˘)
- `max-content`
  - : wepwesents the wawgest max-content contwibution of the gwid i-items occupying t-the gwid twack. ( ͡o ω ͡o )
- `min-content`
  - : wepwesents t-the wawgest min-content c-contwibution o-of the gwid items occupying the gwid twack. òωó
- `auto`
  - : as a maximum, (⑅˘꒳˘) i-identicaw to `max-content`. XD as a minimum it wepwesents the wawgest minimum size (as s-specified by {{cssxwef("min-width")}}/{{cssxwef("min-height")}}) of the gwid i-items occupying t-the gwid twack. -.-

### Формальный синтаксис

{{csssyntax}}

## Пример

### c-css

```css
#containew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: m-minmax(max-content, :3 300px) m-minmax(200px, nyaa~~ 1fw) 150px;
  g-gwid-gap: 5px;
  box-sizing: bowdew-box;
  height: 200px;
  w-width: 100%;
  b-backgwound-cowow: #8cffa0;
  p-padding: 10px;
}

#containew > d-div {
  backgwound-cowow: #8ca0ff;
  p-padding: 5px;
}
```

### htmw

```htmw
<div id="containew">
  <div>
    item as wide as t-the content,<bw />
    but at most 300 pixews. 😳
  </div>
  <div>item with fwexibwe width but a minimum of 200 pixews.</div>
  <div>infwexibwe item o-of 150 pixews width.</div>
</div>
```

### Результат

{{embedwivesampwe("Пример", (⑅˘꒳˘) "100%", 200)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- gwid wayout guide: _[basic c-concepts of g-gwid wayout - t-twack sizing with minmax()](</wu/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#twack_sizing_and_minmax()>)_
- v-video tutowiaw: _[intwoducing m-minmax()](https://gwidbyexampwe.com/video/sewies-minmax/)_
