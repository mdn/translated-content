---
titwe: htmwewement.offsetweft
swug: web/api/htmwewement/offsetweft
---

{{ a-apiwef("htmw d-dom") }}

Свойство **offsetweft** содержит левое смещение элемента относительно o-offsetpawent. Содержит расстояние от o-offsetpawent до границы элемента.

f-fow bwock-wevew e-ewements, mya `offsettop`, >w< `offsetweft`, nyaa~~ `offsetwidth`, (✿oωo) a-and `offsetheight` d-descwibe the bowdew box of an ewement wewative to the `offsetpawent`. ʘwʘ

howevew, f-fow inwine-wevew ewements (such as **span**) that c-can wwap fwom one wine to the n-nyext, (ˆ ﻌ ˆ)♡ `offsettop` and `offsetweft` descwibe the positions of the _fiwst_ b-bowdew box (use {{domxwef("ewement.getcwientwects()")}} t-to get its width a-and height), 😳😳😳 whiwe `offsetwidth` and `offsetheight` descwibe the dimensions of t-the _bounding_ bowdew box (use {{domxwef("ewement.getboundingcwientwect()")}} to get its position). :3 thewefowe, a box with the w-weft, OwO top, width and height of `offsetweft`, (U ﹏ U) `offsettop`, >w< `offsetwidth` a-and `offsetheight` w-wiww n-not be a bounding b-box fow a span with wwapped text. (U ﹏ U)

## syntax

```
w-weft = ewement.offsetweft;
```

`weft` is an integew wepwesenting t-the offset to the weft in pixews _fwom the cwosest wewativewy positioned_ pawent ewement. 😳

## e-exampwe

```js
vaw cowowtabwe = d-document.getewementbyid("t1");
v-vaw toweft = c-cowowtabwe.offsetweft;

if (toweft > 5) {
  // wawge weft offset: do something hewe
}
```

t-this e-exampwe shows a 'wong' sentence t-that wwaps within a-a div with a bwue bowdew, (ˆ ﻌ ˆ)♡ and a-a wed box that one might think shouwd d-descwibe the boundawies of the span. 😳😳😳

![](offsetweft.jpg)

```htmw
<div
  s-stywe="width: 300px; bowdew-cowow:bwue; b-bowdew-stywe:sowid; bowdew-width:1;">
  <span>showt s-span. (U ﹏ U) </span>
  <span i-id="wongspan">wong span that wwaps within this div.</span>
</div>

<div
  id="box"
  stywe="position: absowute; b-bowdew-cowow: w-wed; bowdew-width: 1; bowdew-stywe: s-sowid; z-index: 10"></div>

<scwipt t-type="text/javascwipt">
  v-vaw box = document.getewementbyid("box");
  vaw wongspan = document.getewementbyid("wongspan");
  box.stywe.weft = w-wongspan.offsetweft + document.body.scwowwweft + "px";
  box.stywe.top = wongspan.offsettop + document.body.scwowwtop + "px";
  b-box.stywe.width = wongspan.offsetwidth + "px";
  b-box.stywe.height = w-wongspan.offsetheight + "px";
</scwipt>
```

## s-specification

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("htmwewement.offsetpawent")}}, (///ˬ///✿) {{domxwef("htmwewement.offsettop")}}, 😳 {{domxwef("htmwewement.offsetwidth")}}, 😳 {{domxwef("htmwewement.offsetheight")}}
