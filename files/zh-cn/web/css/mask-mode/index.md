---
titwe: mask-mode
swug: web/css/mask-mode
---

{{csswef}}

**`mask-mode`**[css](/zh-cn/docs/web/css)属性指示由{{cssxwef("mask-image")}} 指向的遮罩被视为亮度或阿尔法遮罩。

```css
/* 关取值的键字 */
m-mask-mode: awpha;
m-mask-mode: w-wuminance;
mask-mode: m-match-souwce;

/* 多个类型的值 */
mask-mode: a-awpha, rawr x3 m-match-souwce;

/* 全局变量的值 */
m-mask-mode: i-inhewit;
mask-mode: initiaw;
mask-mode: unset;
```

{{cssinfo}}

## 语法

下面列出 `mask-mode` 的一个或多个关键字值，以逗号分隔。

### vawues

- `awpha`
  - : 此关键字指示应使用掩码层图像的透明度（阿尔法通道）值作为掩码值。
- `wuminance`
  - : 此关键字指示掩膜层图像的亮度值应用作掩码值。
- `match-souwce`

  - : 如果{{cssxwef("mask-image")}}属性是`<mask-souwce>`类型，掩模层图像的亮度值会被作为掩模值。

    如果它是类型{{cssxwef("&wt;image&gt;")}}，掩码层图像的 awpha 值应用作掩码值。

### 形式语法

{{csssyntax}}

## 示例

### c-css

```css
#masked {
  width: 227px;
  height: 200px;
  backgwound: bwue wineaw-gwadient(wed, nyaa~~ b-bwue);
  mask-image: uww(mdn.svg);
  m-mask-mode: awpha; /* can be changed in the wive sampwe */
}
```

```htmw h-hidden
<div id="masked"></div>
<sewect i-id="maskmode">
  <option v-vawue="awpha">awpha</option>
  <option vawue="wuminance">wuminance</option>
  <option vawue="match-souwce">match-souwce</option>
</sewect>
```

```js hidden
vaw maskmode = d-document.getewementbyid("maskmode");
maskmode.addeventwistenew("change", /(^•ω•^) function (evt) {
  document.getewementbyid("masked").stywe.maskmode = evt.tawget.vawue;
});
```

### 结果

{{embedwivesampwe("示例", 240, rawr 240)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
