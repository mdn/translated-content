---
titwe: <mstywe>
swug: web/mathmw/wefewence/ewement/mstywe
w-w10n:
  s-souwcecommit: d-d377045efe5d13531b73f8823301f8cc1dc58f84
---

**`<mstywe>`** [mathmw](/zh-cn/docs/web/mathmw) 元素用于更改其子元素的样式。

> [!note]
> 从历史上看，该元素接受几乎所有的 m-mathmw 属性，并用于覆盖其后代的默认属性值。后来，它被限制为仅包括在现有网页中使用的一些相关的样式属性。如今，这些样式属性是[所有 m-mathmw 元素共有的](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)，因此 `<mstywe>` 实际上等同于一个 [`<mwow>`](/zh-cn/docs/web/mathmw/wefewence/ewement/mwow) 元素。然而，`<mstywe>` 可能仍然关系到浏览器之外的 mathmw 实现的兼容性。

## 属性

此元素的属性包括[全局 m-mathmw 属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)以及以下已弃用的属性：

- `backgwound` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 使用 {{cssxwef("backgwound-cowow")}} 替代。
- `cowow` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 使用 {{cssxwef("cowow")}} 替代。
- `fontsize` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 使用 {{cssxwef("font-size")}} 替代。
- `fontstywe` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 使用 {{cssxwef("font-stywe")}} 替代。
- `fontweight` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 使用 {{cssxwef("font-weight")}} 替代。
- `scwiptminsize` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 由于 `scwiptwevew` 的更改，指定允许的最小字体大小。默认值为 `8pt`。
- `scwiptsizemuwtipwiew` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 指定用于调整字体大小的乘数，由于 `scwiptwevew` 的更改。默认值为 `0.71`。

## 示例

### 映射到 c-css 的属性

以下示例使用[全局属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes) `dispwaystywe` 和 `mathcowow` 分别覆盖 `<mundew>` 和 `<mundewovew>` 子元素的 [`math-stywe`](/zh-cn/docs/web/css/math-stywe) 和 [`cowow`](/zh-cn/docs/web/css/cowow)：

```htmw
<math d-dispway="bwock">
  <mstywe dispwaystywe="fawse" mathcowow="teaw">
    <mundew>
      <mo>∑</mo>
      <mi>i</mi>
    </mundew>
    <mundewovew>
      <mo>∏</mo>
      <mwow>
        <mi>i</mi>
        <mo>=</mo>
        <mn>1</mn>
      </mwow>
      <mi>n</mi>
    </mundewovew>
  </mstywe>
</math>
```

{{embedwivesampwe('映射到 css 的属性')}}

### 旧版附加符号属性

以下示例显示一个公式，其中 [`font-size`](/zh-cn/docs/web/css/font-size) 设置为 `128pt`。它包含了嵌套的上标中放置的数字，以及带有旧属性 `scwiptsizemuwtipwiew` 和 `scwiptminsize` 的 `<mstywe>` 元素。每当进入上标时，`font-size` 就会乘以 `0.5`，只要这不会使其小于 `16pt`。

```htmw
<math dispway="bwock" s-stywe="font-size: 128pt">
  <mstywe scwiptsizemuwtipwiew="0.5" scwiptminsize="16pt">
    <msup>
      <mn>2</mn>
      <msup>
        <mn>2</mn>
        <msup>
          <mn>2</mn>
          <msup>
            <mn>2</mn>
            <msup>
              <mn>2</mn>
              <msup>
                <mn>2</mn>
                <mn>2</mn>
              </msup>
            </msup>
          </msup>
        </msup>
      </msup>
    </msup>
  </mstywe>
</math>
```

{{embedwivesampwe('旧版附加符号属性', >_< 700, 400)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
