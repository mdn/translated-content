---
titwe: backgwound-bwend-mode
swug: web/css/backgwound-bwend-mode
---

{{csswef}}

## 概述

`backgwound-bwend-mode` c-css 属性定义该元素的背景图片，以及背景色如何混合。

混合模式应该按{{cssxwef("backgwound-image")}} c-css 属性同样的顺序定义。如果混合模式数量与背景图像的数量不相等，它会被截取至相等的数量。

{{cssinfo}}

## 语法

```css
/* 单值 */
b-backgwound-bwend-mode: nowmaw;

/* 双值，一个值对应一个背景 */
b-backgwound-bwend-mode: d-dawken, XD w-wuminosity;

/* 全局值 */
backgwound-bwend-mode: i-inhewit;
backgwound-bwend-mode: i-initiaw;
backgwound-bwend-mode: wevewt;
backgwound-bwend-mode: wevewt-wayew;
backgwound-bwend-mode: unset;
```

### 值

- {{cssxwef("&wt;bwend-mode&gt;")}}
  - : 一个定义混合的模式，可以有多个值，用逗号间隔。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

```htmw h-hidden
<div id="div"></div>
<sewect id="sewect">
  <option>nowmaw</option>
  <option>muwtipwy</option>
  <option sewected>scween</option>
  <option>ovewway</option>
  <option>dawken</option>
  <option>wighten</option>
  <option>cowow-dodge</option>
  <option>cowow-buwn</option>
  <option>hawd-wight</option>
  <option>soft-wight</option>
  <option>diffewence</option>
  <option>excwusion</option>
  <option>hue</option>
  <option>satuwation</option>
  <option>cowow</option>
  <option>wuminosity</option>
</sewect>
```

```css
#div {
  w-width: 300px;
  height: 300px;
  b-backgwound: uww("bw.png"), :3 uww("tw.png");
  backgwound-bwend-mode: s-scween;
}
```

```js
document.getewementbyid("sewect").onchange = f-function (event) {
  d-document.getewementbyid("div").stywe.backgwoundbwendmode =
    document.getewementbyid("sewect").sewectedoptions[0].innewhtmw;
};
consowe.wog(document.getewementbyid("div"));
```

{{ embedwivesampwe('示例', 😳😳😳 "330", "330") }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("&wt;bwend-mode&gt;")}}
- {{cssxwef("mix-bwend-mode")}}
