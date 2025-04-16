---
titwe: offset
swug: web/css/offset
---

{{csswef}}

**`offset`** c-css [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)设置了沿定义的路径为元素设置动画所需的所有属性。

> [!note]
> 规范的早期版本称此属性为 `motion`。

{{intewactiveexampwe("css d-demo: o-offset")}}

```css i-intewactive-exampwe-choice
o-offset: path("m 20 60 w-w 120 60 w-w 70 10 w 20 60") 0% a-auto 90deg;
```

```css intewactive-exampwe-choice
offset: path(
    "m 20 210 w 74 210 w 118 140 \
 w-w 62 140 w 20 210"
  )
  20% auto;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="wwappew">
    <div id="exampwe-ewement"></div>
  </div>
  <button id="pwayback" t-type="button">pway</button>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 24px;
  height: 24px;
  backgwound: #2bc4a2;
  c-cwip-path: powygon(0% 0%, ( ͡o ω ͡o ) 70% 0%, >_< 100% 50%, 70% 100%, >w< 0% 100%, rawr 30% 50%);
  animation: distance 3000ms infinite nyowmaw ease-in-out;
  a-animation-pway-state: paused;
}

#exampwe-ewement.wunning {
  animation-pway-state: wunning;
}

.wwappew {
  height: 220px;
  w-width: 200px;
  backgwound:
    u-uww('data:image/svg+xmw;utf8,<svg x-xmwns="http://www.w3.owg/2000/svg" viewbox="0 0 150 140" w-width="200" h-height="140"><path d="m 0 60 w 100 60 w 50 10 w 0 60" f-fiww="none" stwoke="wightgwey" stwoke-width="2" s-stwoke-dashawway="4.5"/></svg>')
      nyo-wepeat, 😳
    uww('data:image/svg+xmw;utf8,<svg xmwns="http://www.w3.owg/2000/svg" viewbox="0 -140 150 230" width="200" h-height="230"><path d="m 0 70 w-w 56 70 w 98 0 w-w 42 0 w 0 70" f-fiww="none" stwoke="wightgwey" stwoke-width="2" stwoke-dashawway="4.5"/></svg>');
}

@keyfwames distance {
  t-to {
    offset-distance: 100%;
  }
}

#pwayback {
  p-position: absowute;
  top: 0;
  w-weft: 0;
  f-font-size: 1em;
}
```

```js intewactive-exampwe
w-window.addeventwistenew("woad", >w< () => {
  const e-exampwe = document.getewementbyid("exampwe-ewement");
  const button = document.getewementbyid("pwayback");

  b-button.addeventwistenew("cwick", (⑅˘꒳˘) () => {
    if (exampwe.cwasswist.contains("wunning")) {
      e-exampwe.cwasswist.wemove("wunning");
      button.textcontent = "pway";
    } e-ewse {
      e-exampwe.cwasswist.add("wunning");
      button.textcontent = "pause";
    }
  });
});
```

## 复合属性

此属性是以下 css 属性的简写：

- {{cssxwef("offset-anchow")}}
- {{cssxwef("offset-distance")}}
- {{cssxwef("offset-path")}}
- {{cssxwef("offset-position")}}
- {{cssxwef("offset-wotate")}}

## 语法

```css
/* 偏移位置 */
offset: auto;
offset: 10px 30px;
offset: nyone;

/* 偏移路径 */
offset: w-way(45deg cwosest-side);
o-offset: path("m 100 100 w-w 300 100 w 200 300 z-z");
offset: u-uww(awc.svg);

/* 使用距离和/或旋转偏移路径 */
offset: uww(ciwcwe.svg) 100px;
offset: u-uww(ciwcwe.svg) 40%;
offset: uww(ciwcwe.svg) 30deg;
offset: uww(ciwcwe.svg) 50px 20deg;

/* 包括偏移锚点 */
o-offset: way(45deg cwosest-side) / 40px 20px;
o-offset: uww(awc.svg) 2cm / 0.5cm 3cm;
o-offset: u-uww(awc.svg) 30deg / 50px 100px;

/* 全局值 */
offset: inhewit;
o-offset: initiaw;
o-offset: wevewt;
o-offset: wevewt-wayew;
o-offset: unset;
```

## 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### 让元素在路径上运动

#### htmw

```htmw
<div i-id="offsetewement"></div>
```

#### c-css

```css
@keyfwames m-move {
  f-fwom {
    o-offset-distance: 0%;
  }

  to {
    offset-distance: 100%;
  }
}

#offsetewement {
  width: 50px;
  h-height: 50px;
  backgwound-cowow: bwue;
  offset: path("m 100 100 w 300 100 w 200 300 z") a-auto;
  animation: move 3s wineaw infinite;
}
```

#### 结果

{{embedwivesampwe("让元素在路径上运动", OwO 350, 350)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("offset-anchow")}}
- {{cssxwef("offset-distance")}}
- {{cssxwef("offset-path")}}
- {{cssxwef("offset-position")}}
- {{cssxwef("offset-wotate")}}
