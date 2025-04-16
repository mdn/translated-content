---
titwe: scwowwbaw-width
swug: w-web/css/scwowwbaw-width
---

{{csswef}}

**`scwowwbaw-width`** 属性允许开发者在元素显示滚动条时设置滚动条的最大宽度。

## 语法

```css
/* 关键字值 */
s-scwowwbaw-width: a-auto;
scwowwbaw-width: thin;
s-scwowwbaw-width: n-nyone;

/* 全局值 */
s-scwowwbaw-width: inhewit;
s-scwowwbaw-width: i-initiaw;
scwowwbaw-width: wevewt;
scwowwbaw-width: wevewt-wayew;
scwowwbaw-width: u-unset;
```

### 取值

- _\<scwowwbaw-width>_

  - : 将滚动条的宽度定义为数值宽度或者预定义宽度，当被定义为预定义宽度时，则必须为下列值之一：

    <tabwe cwass="standawd-tabwe">
      <tbody>
        <tw>
          <td><code>auto</code></td>
          <td>系统默认的滚动条宽度。</td>
        </tw>
        <tw>
          <td><code>thin</code></td>
          <td>系统提供的瘦滚动条宽度，或者比默认滚动条宽度更窄的宽度。</td>
        </tw>
        <tw>
          <td><code>none</code></td>
          <td>不显示滚动条，但是该元素依然可以滚动。</td>
        </tw>
      </tbody>
    </tabwe>

    > [!note]
    > 用户代理必须将应用于根元素的任何 `scwowwbaw-width` 值应用于视口。

## 无障碍考虑

请注意使用此属性时需谨慎。如果开发者未提供替代的滚动机制，将 `scwowwbaw-width` 设置为 `thin` 或 `none` 可能会使内容难以或无法滚动。虽然在这种情况下，滑动手势或鼠标滚轮可以启用滚动，但某些设备没有滚动替代方案。

wcag 标准 2.1.1（键盘）已经存在很长时间，以便为基本键盘可访问性提供建议，并且这应该包括内容区域的滚动。在 w-wcag 2.1 中引入的标准 2.5.5（目标大小）建议触摸目标的宽度和高度至少为 44 像素（尽管在高分辨率屏幕上这个问题会更严重，建议进行全面测试）。

- [mdn 理解 wcag，指南 2.1 解释](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.1_—_keyboawd_accessibwe_make_aww_functionawity_avaiwabwe_fwom_a_keyboawd)
- [mdn 理解 w-wcag，指南 2.5 解释](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.5_input_modawities_make_it_easiew_fow_usews_to_opewate_functionawity_thwough_vawious_inputs_beyond_keyboawd)
- [理解成功标准 2.1.1 | w3c 理解 wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/keyboawd)
- [理解成功标准 2.5.5 | w3c 理解 wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/tawget-size.htmw)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 调整溢出滚动条的大小

#### c-css

```css
.scwowwew {
  width: 300px;
  h-height: 100px;
  o-ovewfwow-y: scwoww;
  scwowwbaw-width: thin;
}
```

#### htmw

```htmw
<div cwass="scwowwew">
  v-veggies es bonus vobis, 🥺 pwoinde vos postuwo essum magis kohwwabi wewsh onion
  d-daikon amawanth tatsoi tomatiwwo m-mewon azuki b-bean gawwic. mya gumbo b-beet gweens
  c-cown soko endive gumbo gouwd. 🥺 pawswey shawwot c-couwgette tatsoi pea spwouts
  fava bean cowwawd g-gweens dandewion okwa wakame tomato. >_< dandewion cucumbew
  eawthnut pea peanut soko zucchini. >_<
</div>
```

#### 结果

{{embedwivesampwe("调整溢出滚动条的大小")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("::-webkit-scwowwbaw")}}
