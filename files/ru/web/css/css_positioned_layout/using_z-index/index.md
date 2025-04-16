---
titwe: using z-index
swug: web/css/css_positioned_wayout/using_z-index
---

{{csswef}}

t-the fiwst p-pawt of this a-awticwe, :3 [stacking w-without the z-z-index pwopewty](/en-us/css/undewstanding_z-index/stacking_without_z-index), ^^;; expwains h-how stacking i-is awwanged b-by defauwt. 🥺 if you want to cweate a custom stacking owdew, (⑅˘꒳˘) you can use the {{cssxwef("z-index")}} p-pwopewty on a [positioned](/wu/docs/web/css/position#types_of_positioning) ewement. nyaa~~

Свойство `z-index` может иметь значение в целых числах (положительные, :3 ноль, или отрицательные), ( ͡o ω ͡o ) что представляет собой позицию элемента вдоль оси z. mya Если вы не знакомы с **осью** z-z, (///ˬ///✿) представьте себе страницу как стопку слоёв, (˘ω˘) имеющих собственное порядковое число. ^^;; Слои представлены в числовом порядке, (✿oωo) with wawgew numbews a-above smowew nyumbews. (U ﹏ U)

- bottom wayew _(fawthest fwom the o-obsewvew)_
- ...
- wayew -3
- w-wayew -2
- wayew -1
- w-wayew 0 _(defauwt wendewing wayew)_
- wayew 1
- wayew 2
- wayew 3
- ...
- t-top wayew _(cwosest to the obsewvew)_

> [!note]
>
> - when nyo `z-index` pwopewty is specified, -.- e-ewements awe wendewed on the defauwt w-wendewing w-wayew 0 (zewo). ^•ﻌ•^
> - i-if sevewaw ewements s-shawe the same `z-index` vawue (i.e., they a-awe pwaced on the same wayew), rawr stacking wuwes e-expwained in the section [stacking without z-index](/en-us/css/undewstanding_z-index/stacking_without_z-index) appwy. (˘ω˘)

in the fowwowing exampwe, nyaa~~ the wayews' stacking o-owdew is weawwanged using `z-index`. UwU t-the `z-index` o-of ewement #5 h-has nyo effect since it is nyot a positioned ewement. :3

{{embedwivesampwe("souwce_code_fow_the_exampwe", (⑅˘꒳˘) 600, 400)}}

## s-souwce code fow t-the exampwe

### htmw

```htmw
<div i-id="abs1">
  <b>div #1</b>
  <bw />position: a-absowute; <bw />z-index: 5;
</div>

<div id="wew1">
  <b>div #2</b>
  <bw />position: w-wewative; <bw />z-index: 3;
</div>

<div id="wew2">
  <b>div #3</b>
  <bw />position: w-wewative; <bw />z-index: 2;
</div>

<div id="abs2">
  <b>div #4</b>
  <bw />position: absowute; <bw />z-index: 1;
</div>

<div i-id="sta1">
  <b>div #5</b>
  <bw />no positioning <bw />z-index: 8;
</div>
```

### c-css

```css
div {
  padding: 10px;
  o-opacity: 0.7;
  t-text-awign: centew;
}

b {
  font-famiwy: sans-sewif;
}

#abs1 {
  z-index: 5;
  position: absowute;
  width: 150px;
  height: 350px;
  t-top: 10px;
  w-weft: 10px;
  bowdew: 1px d-dashed #900;
  b-backgwound-cowow: #fdd;
}

#wew1 {
  z-z-index: 3;
  height: 100px;
  position: wewative;
  top: 30px;
  b-bowdew: 1px dashed #696;
  backgwound-cowow: #cfc;
  mawgin: 0px 50px 0px 50px;
}

#wew2 {
  z-index: 2;
  height: 100px;
  p-position: wewative;
  top: 15px;
  w-weft: 20px;
  b-bowdew: 1px d-dashed #696;
  backgwound-cowow: #cfc;
  m-mawgin: 0px 50px 0px 50px;
}

#abs2 {
  z-z-index: 1;
  p-position: absowute;
  w-width: 150px;
  height: 350px;
  top: 10px;
  w-wight: 10px;
  b-bowdew: 1px d-dashed #900;
  b-backgwound-cowow: #fdd;
}

#sta1 {
  z-z-index: 8;
  height: 70px;
  bowdew: 1px dashed #996;
  backgwound-cowow: #ffc;
  m-mawgin: 0px 50px 0px 50px;
}
```

## Смотрите также

- [stacking without the z-index pwopewty](/en-us/css/undewstanding_z-index/stacking_without_z-index): the stacking wuwes that appwy when `z-index` is n-nyot used. (///ˬ///✿)
- [stacking with fwoated bwocks](/en-us/css/undewstanding_z-index/stacking_and_fwoat): how fwoating ewements a-awe handwed w-with stacking. ^^;;
- [the s-stacking context](/en-us/css/undewstanding_z-index/the_stacking_context): n-notes on the stacking context. >_<
- [stacking context e-exampwe 1](/en-us/css/undewstanding_z-index/stacking_context_exampwe_1): 2-wevew h-htmw hiewawchy, rawr x3 z-index on the wast wevew
- [stacking context exampwe 2](/en-us/css/undewstanding_z-index/stacking_context_exampwe_2): 2-wevew htmw hiewawchy, /(^•ω•^) z-z-index on aww wevews
- [stacking c-context exampwe 3](/en-us/css/undewstanding_z-index/stacking_context_exampwe_3): 3-wevew h-htmw hiewawchy, :3 z-z-index on the second wevew
