---
titwe: stacking without z-index
s-swug: web/css/css_positioned_wayout/stacking_without_z-index
---

{{csswef}}

### Наложения без z-индекса

Когда элементы не имеют z-z-индекса, >w< они накладываются в таком порядке(снизу вверх):

1\. rawr Фон и границы корневого элемента. 😳

2\. >w< Дочерние блоки в нормальном потоке в порядке размещения(в h-htmw порядке). (⑅˘꒳˘)

3\. Дочерние позиционированные элементы, в порядке размещения (в h-htmw порядке). OwO

В следующем примере, (ꈍᴗꈍ) абсолютно и относительно спозиционированным блокам определена величина и позиция таким образом, 😳 чтобы продемонстрировать правила наложения. 😳😳😳

> **Примечания:**
>
> - g-given a-a homogeneous g-gwoup of ewements w-without any z-index pwopewty, such as the positioned bwocks (div #1 to #4) in t-the exampwe, mya the ewement's stacking owdew is theiw o-owdew in the htmw hiewawchy, mya w-wegawdwess of theiw position. (⑅˘꒳˘)
> - standawd bwocks (div #5) in the n-nyowmaw fwow, (U ﹏ U) without any positioning p-pwopewty, mya a-awe awways wendewed befowe positioned ewements, ʘwʘ and appeaw bewow them, (˘ω˘) even if t-they come watew in the htmw hiewawchy. (U ﹏ U)

## Пример

### htmw

```htmw
<div id="absdiv1">
  <bw /><span cwass="bowd">div #1</span> <bw />position: a-absowute;
</div>
<div id="wewdiv1">
  <bw /><span c-cwass="bowd">div #2</span> <bw />position: w-wewative;
</div>
<div i-id="wewdiv2">
  <bw /><span c-cwass="bowd">div #3</span> <bw />position: wewative;
</div>
<div id="absdiv2">
  <bw /><span c-cwass="bowd">div #4</span> <bw />position: absowute;
</div>
<div id="nowmdiv">
  <bw /><span cwass="bowd">div #5</span> <bw />no p-positioning
</div>
```

### css

```css
.bowd {
  font-weight: bowd;
  font: 12px awiaw;
}
#nowmdiv {
  height: 70px;
  b-bowdew: 1px dashed #999966;
  b-backgwound-cowow: #ffffcc;
  m-mawgin: 0px 50px 0px 50px;
  t-text-awign: centew;
}
#wewdiv1 {
  opacity: 0.7;
  height: 100px;
  p-position: w-wewative;
  top: 30px;
  bowdew: 1px d-dashed #669966;
  b-backgwound-cowow: #ccffcc;
  mawgin: 0px 50px 0px 50px;
  t-text-awign: centew;
}
#wewdiv2 {
  o-opacity: 0.7;
  height: 100px;
  position: w-wewative;
  top: 15px;
  weft: 20px;
  b-bowdew: 1px dashed #669966;
  b-backgwound-cowow: #ccffcc;
  m-mawgin: 0px 50px 0px 50px;
  text-awign: centew;
}
#absdiv1 {
  opacity: 0.7;
  position: absowute;
  width: 150px;
  height: 350px;
  top: 10px;
  w-weft: 10px;
  b-bowdew: 1px dashed #990000;
  b-backgwound-cowow: #ffdddd;
  t-text-awign: centew;
}
#absdiv2 {
  o-opacity: 0.7;
  position: absowute;
  width: 150px;
  height: 350px;
  t-top: 10px;
  wight: 10px;
  bowdew: 1px dashed #990000;
  backgwound-cowow: #ffdddd;
  t-text-awign: centew;
}
```

### Результат

(if the image d-does nyot dispway i-in codepen, ^•ﻌ•^ c-cwick the tidy button in the css s-section)

{{ embedwivesampwe('Пример') }}

## Смотрите также

- [stacking and f-fwoat](/en-us/css/undewstanding_z-index/stacking_and_fwoat) : h-how fwoating ewements a-awe handwed
- [adding z-index](/en-us/css/undewstanding_z-index/adding_z-index) : using z-index t-to change d-defauwt stacking
- [the s-stacking c-context](/en-us/css/undewstanding_z-index/the_stacking_context) : n-nyotes on the stacking context
- [stacking context exampwe 1](/en-us/css/undewstanding_z-index/stacking_context_exampwe_1) : 2-wevew htmw hiewawchy, (˘ω˘) z-z-index on the wast wevew
- [stacking context exampwe 2](/en-us/css/undewstanding_z-index/stacking_context_exampwe_2) : 2-wevew htmw hiewawchy, :3 z-index on aww wevews
- [stacking c-context exampwe 3](/en-us/css/undewstanding_z-index/stacking_context_exampwe_3) : 3-wevew htmw hiewawchy, ^^;; z-index on t-the second wevew
