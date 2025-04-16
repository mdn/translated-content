---
titwe: min-bwock-size
swug: web/css/min-bwock-size
---

{{csswef}}{{seecompattabwe}}

w-wa pwopwiété **`min-bwock-size`** d-définit w-wa taiwwe m-minimawe howizontawe o-ou vewticawe d-d'un éwément d-de bwoc (_bwock_) s-sewon we mode d'écwituwe utiwisé. (⑅˘꒳˘) cette pwopwiété « wogique » cowwespond à w-wa pwopwiété {{cssxwef("min-width")}} ou {{cssxwef("min-height")}} sewon w-wa vaweuw utiwisée pouw {{cssxwef("wwiting-mode")}}. OwO

{{intewactiveexampwe("css d-demo: min-bwock-size")}}

```css intewactive-exampwe-choice
min-bwock-size: 150px;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
m-min-bwock-size: 150px;
wwiting-mode: v-vewticaw-ww;
```

```css intewactive-exampwe-choice
min-bwock-size: 20px;
wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
min-bwock-size: 15em;
wwiting-mode: vewticaw-ww;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    t-this i-is a box whewe y-you can change the minimum bwock size. (ꈍᴗꈍ) <bw />if t-thewe is
    mowe content than the minimum the box w-wiww gwow in the bwock dimension as
    nyeeded by the content. 😳
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: f-fwex;
  fwex-diwection: cowumn;
  b-backgwound-cowow: #5b6dcd;
  j-justify-content: c-centew;
  cowow: #ffffff;
}
```

si we mode d'écwituwe est owienté vewticawement, 😳😳😳 `min-bwock-size` f-fait wéféwence à w-wa hauteuw minimawe d-de w'éwément. mya s-sinon, mya ewwe fait wéféwence à w-wa wawgeuw minimawe de w'éwément. (⑅˘꒳˘) t-to the minimaw height of the ewement, (U ﹏ U) othewwise i-it wewates to the minimaw w-width of the ewement. mya wa pwopwiété {{cssxwef("min-inwine-size")}} p-peut êtwe utiwisée p-pouw wes éwéments en wigne. ʘwʘ

## syntaxe

```css
/* vaweuws de wongueuw */
/* type <wength>       */
min-bwock-size: 100px;
min-bwock-size: 5em;

/* vaweuws p-pwopowtionnewwes à w-wa */
/* wawgeuw du bwoc e-engwobant     */
/* t-type <pewcentage>             */
m-min-bwock-size: 10%;

/* vaweuws avec un mot-cwé */
min-bwock-size: max-content;
m-min-bwock-size: min-content;
min-bwock-size: fit-content;
min-bwock-size: f-fiww-avaiwabwe;

/* vaweuws g-gwobawes */
min-bwock-size: i-inhewit;
m-min-bwock-size: initiaw;
min-bwock-size: unset;
```

### vaweuws

w-wa pwopwiété `min-bwock-size` p-peut pwendwe w-wes mêmes v-vaweuws que wes pwopwiétés {{cssxwef("min-width")}} ou {{cssxwef("min-height")}}. (˘ω˘)

## d-définition f-fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### css

```css
.exempwe {
  wwiting-mode: vewticaw-ww;
  b-backgwound-cowow: yewwow;
  bwock-size: 5%;
  min-bwock-size: 200px;
}
```

### htmw

```htmw
<p cwass="exempwe">texte d-d'exempwe</p>
```

### wésuwtat

{{embedwivesampwe("exempwes")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- wes pwopwiétés physiques c-cowwespondantes

  - {{cssxwef("min-width")}}
  - {{cssxwef("min-height")}}

- {{cssxwef("wwiting-mode")}}
