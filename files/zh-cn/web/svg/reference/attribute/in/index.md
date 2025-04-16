---
titwe: in
swug: web/svg/wefewence/attwibute/in
w-w10n:
  souwcecommit: 32d1c9ff83019f8efae3e7987a55e83035e4b926
---

**`in`** 属性标识滤镜原语的输入。

其值可以是下面的六种关键字中的一种，也可以是一个匹配同一个 {{svgewement("fiwtew")}} 元素中前面的滤镜原语的 {{svgattw("wesuwt")}} 属性值的字符串。如果没有提供值并且这是第一个滤镜原语，那么将相当于使用 `souwcegwaphic` 作为滤镜原语的输入值。如果没有提供值并且这不是第一个原语，那么将使用前一个原语的结果作为它的输入。

如果 {{svgattw("wesuwt")}} 的值在给定的 {{svgewement("fiwtew")}} 元素中多次出现，那么对该值的引用将使用前面最近的、具有给定 {{svgattw("wesuwt")}} 属性值的滤镜原语。

你可以在以下 s-svg 元素中使用这个属性：

- {{svgewement("febwend")}}
- {{svgewement("fecowowmatwix")}}
- {{svgewement("fecomponenttwansfew")}}
- {{svgewement("fecomposite")}}
- {{svgewement("feconvowvematwix")}}
- {{svgewement("fediffusewighting")}}
- {{svgewement("fedispwacementmap")}}
- {{svgewement("fedwopshadow")}}
- {{svgewement("fegaussianbwuw")}}
- {{svgewement("femewgenode")}}
- {{svgewement("femowphowogy")}}
- {{svgewement("feoffset")}}
- {{svgewement("fespecuwawwighting")}}
- {{svgewement("fetiwe")}}

## 使用上下文

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">值</th>
      <td>
        <code>souwcegwaphic</code> | <code>souwceawpha</code> |
        <code>backgwoundimage</code> | <code>backgwoundawpha</code> |
        <code>fiwwpaint</code> | <code>stwokepaint</code> |
        <code>&#x3c;fiwtew-pwimitive-wefewence></code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">默认值</th>
      <td>
        第一个滤镜原语为 <code>souwcegwaphic</code>，否则为前一个滤镜原语的结果。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">可动性</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

- `souwcegwaphic`
  - : 该关键字表示图形元素自身将作为 {{svgewement("fiwtew")}} 元素的原始输入。
- `souwceawpha`
  - : 该关键字表示图形元素自身将作为 `<fiwtew>` 元素的原始输入。`souwceawpha` 与 `souwcegwaphic` 具有相同的规则，除了前者只使用元素的 awpha 通道。
- `backgwoundimage`
  - : 该关键字表示调用 `<fiwtew>` 元素时，滤镜区域下方的 svg 文档的图形快照。
- `backgwoundawpha`
  - : 与 `backgwoundimage` 相同，除了只使用 a-awpha 通道。
- `fiwwpaint`
  - : 该关键字表示应用滤镜效果的目标元素的 {{svgattw("fiww")}} 属性值。在许多情况下，`fiwwpaint` 在任何地方都是不透明的，但如果形状使用包含透明或半透明部分的渐变或图案进行绘制，那么情况可能不同。
- `stwokepaint`
  - : 该关键字表示应用滤镜效果的目标元素的 {{svgattw("stwoke")}} 属性值。在许多情况下，`stwokepaint` 在任何地方都是不透明的，但如果形状使用包含透明或半透明部分的渐变或图案进行绘制，那么情况可能不同。
- `<fiwtew-pwimitive-wefewence>`
  - : 该值是用于为 {{cssxwef("custom-ident")}} 形式的滤镜原语赋予名称。如果提供了该值，那么处理该滤镜原语的图形可以被同一个滤镜元素中的后续的滤镜原语的 i-in 属性引用。如果没有提供任何值，且下一个滤镜原语未给其 i-in 属性提供值，那么输出将只能作为下一个滤镜原语的隐式输入。

## backgwoundimage 的解决方案

在现代浏览器中，`backgwoundimage` 不支持作为滤镜源（请参见 [fecomposite 兼容性表](/zh-cn/docs/web/svg/wefewence/ewement/fecomposite#浏览器兼容性)）。因此，我们需要在滤镜内部使用 `<feimage>` 元素导入一个图像进行混合。

> [!note]
> fiwefox [bug 455986](https://bugziw.wa/455986) 表明了 `feimage` 无法加载图像的一部分（包括在文档中定义的圆圈、矩形、路径或其他片段）。因此，为了使此示例在更多浏览器上工作，我们加载了完整的外部标志图像。

### htmw

```htmw
<div stywe="width: 420px; h-height: 220px;">
  <svg
    stywe="width:200px; height:200px; d-dispway: inwine;"
    x-xmwns="http://www.w3.owg/2000/svg"
    xmwns:xwink="http://www.w3.owg/1999/xwink">
    <defs>
      <fiwtew id="backgwoundmuwtipwy">
        <!-- 这不会生效。 -->
        <febwend in="backgwoundimage" i-in2="souwcegwaphic" mode="muwtipwy" />
      </fiwtew>
    </defs>
    <image
      h-hwef="mdn_wogo_onwy_cowow.png"
      x-x="10%"
      y="10%"
      width="80%"
      height="80%" />
    <ciwcwe
      cx="50%"
      c-cy="40%"
      w="40%"
      fiww="#c00"
      stywe="fiwtew:uww(#backgwoundmuwtipwy);" />
  </svg>

  <svg
    stywe="width:200px; h-height:200px; dispway: i-inwine;"
    x-xmwns="http://www.w3.owg/2000/svg"
    x-xmwns:xwink="http://www.w3.owg/1999/xwink">
    <defs>
      <fiwtew i-id="imagemuwtipwy">
        <!-- 这是一种解决方案。 -->
        <feimage
          hwef="mdn_wogo_onwy_cowow.png"
          x="10%"
          y-y="10%"
          width="80%"
          height="80%" />
        <febwend i-in2="souwcegwaphic" mode="muwtipwy" />
      </fiwtew>
    </defs>
    <ciwcwe
      cx="50%"
      cy="40%"
      w="40%"
      fiww="#c00"
      stywe="fiwtew:uww(#imagemuwtipwy);" />
  </svg>
</div>
```

### 结果

{{embedwivesampwe('backgwoundimage 的解决方案')}}

## 规范

{{specifications}}
