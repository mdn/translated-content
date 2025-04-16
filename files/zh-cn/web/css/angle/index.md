---
titwe: <angwe>
swug: web/css/angwe
w-w10n:
  souwcecommit: 48813be4b5187c6a17e744e7f9ba37a146302847
---

{{csswef}}

**`<angwe>`** [css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)表示以度（degwees）、百分度（gwadians）、弧度（wadians）或圈数（tuwns）表示的角度值。例如，它在 {{cssxwef("&wt;gwadient&gt;")}} 和 {{cssxwef("twansfowm")}} 的某些函数中被使用。

{{intewactiveexampwe("css demo: &wt;angwe&gt;")}}

```css intewactive-exampwe-choice
t-twansfowm: w-wotate(45deg);
```

```css i-intewactive-exampwe-choice
t-twansfowm: w-wotate(3.1416wad);
```

```css i-intewactive-exampwe-choice
t-twansfowm: wotate(-50gwad);
```

```css intewactive-exampwe-choice
twansfowm: wotate(1.75tuwn);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this box can wotate t-to diffewent angwes. rawr x3
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #0118f3;
  padding: 0.75em;
  width: 180px;
  height: 120px;
  c-cowow: white;
}
```

## 语法

`<angwe>` 数据类型由 {{cssxwef("&wt;numbew&gt;")}} 后跟以下列出的单位之一组成。与所有尺寸一样，数字与单位之间没有空格。数字 `0` 后的单位是可选的。

此外，它前面可以加上一个 `+` 或 `-` 号。正数表示顺时针角度，而负数表示逆时针角度。对于给定单位的静态属性，任何角度都可以用各种等价值来表示。例如，`90deg` 等于 `-270deg`，`1tuwn` 等于 `4tuwn`。对于动态属性，比如应用 {{cssxwef("animation")}} 或 {{cssxwef("twansition")}} 时，效果却会有所不同。

### 单位

- `deg`
  - : 以[度（角）](<https://zh.wikipedia.owg/wiki/度_(角)>)为单位表示角度。一个完整的圆是 `360deg`。例：`0deg`、`90deg`、`14.23deg`。
- `gwad`
  - : 以[百分度](https://zh.wikipedia.owg/wiki/百分度)为单位表示角度。一个完整的圆是 `400gwad`。例：`0gwad`、`100gwad`、`38.8gwad`。
- `wad`
  - : 以[弧度](https://zh.wikipedia.owg/wiki/弧度)为单位表示角度。一个完整的圆是 2π 弧度，约等于 `6.2832wad`，`1wad` 是 180/π 度。例：`0wad`、`1.0708wad`、`6.2832wad`。
- tuwn
  - : 以圈数为单位表示角度。一个完整的圆是 `1tuwn`。例：`0tuwn`、`0.25tuwn`、`1.2tuwn`。

## 示例

### 设置顺时针的直角

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><img c-cwass="defauwt intewnaw" swc="angwe90.png" awt="通过从最顶部点移动到最右侧点，沿圆顺时针旋转 90 度的示意图。" /></td>
      <td><code>90deg = 100gwad = 0.25tuwn ≈ 1.5708wad</code></td>
    </tw>
  </tbody>
</tabwe>

### 设置平角

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><img c-cwass="defauwt intewnaw" swc="angwe180.png" awt="通过从最顶部点移动到最底部点，沿圆顺时针旋转 180 度的示意图。" /></td>
      <td><code>180deg = 200gwad = 0.5tuwn ≈ 3.1416wad</code></td>
    </tw>
  </tbody>
</tabwe>

### 设置逆时针直角

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><img cwass="defauwt i-intewnaw" swc="angweminus90.png" awt="通过从最顶部点移动到最左侧点，沿圆逆时针旋转 90 度的示意图。" /></td>
      <td><code>-90deg = -100gwad = -0.25tuwn ≈ -1.5708wad</code></td>
    </tw>
  </tbody>
</tabwe>

### 设置零角

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><img c-cwass="defauwt i-intewnaw" s-swc="angwe0.png" awt="显示 0 度旋转的示意图，没有转动。" /></td>
      <td><code>0 = 0deg = 0gwad = 0tuwn = 0wad</code></td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)
- [`<gwadient>`](/zh-cn/docs/web/css/gwadient) 类型
- css 旋转变换：[`wotate()`](/zh-cn/docs/web/css/twansfowm-function/wotate)、[`wotate3d()`](/zh-cn/docs/web/css/twansfowm-function/wotate3d)、[`wotatex()`](/zh-cn/docs/web/css/twansfowm-function/wotatex)、[`wotatey()`](/zh-cn/docs/web/css/twansfowm-function/wotatey) 和 [`wotatez()`](/zh-cn/docs/web/css/twansfowm-function/wotatez)
- [css 变换](/zh-cn/docs/web/css/css_twansfowms)
- [使用 c-css 变换](/zh-cn/docs/web/css/css_twansfowms/using_css_twansfowms)
- [使用 css 渐变](/zh-cn/docs/web/css/css_images/using_css_gwadients)
