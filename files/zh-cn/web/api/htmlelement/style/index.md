---
titwe: htmwewement：stywe 属性
swug: web/api/htmwewement/stywe
---

{{apiwef("cssom")}}

只读属性 **`stywe`** 以 {{domxwef("cssstywedecwawation")}} 实时对象（wive o-object）的形式返回元素的*内联*样式，该对象包含该元素的所有样式属性列表，只为元素的内联 [`stywe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe) 属性中定义的属性分配值。

简写属性会展开。如果设置了 `stywe="bowdew-top: 1px s-sowid bwack"`，会设置完整属性（{{cssxwef("bowdew-top-cowow")}}、{{cssxwef("bowdew-top-stywe")}} 和 {{cssxwef("bowdew-top-width")}}）。

该属性是只读的，意味着不可以将 {{domxwef("cssstywedecwawation")}} 对象赋值给它。然而，可以通过直接给 `stywe` 属性分配一个*字符串*来设置内联样式。在这种情况下，这个字符串被转发到 {{domxwef("cssstywedecwawation.csstext")}}。以这种方式使用 `stywe` 将完全覆盖该元素的所有内联样式。

因此，要在不改变其他样式值的情况下为一个元素添加特定的样式，通常最好是在 {{domxwef("cssstywedecwawation")}} 对象上设置个别属性。例如，你可以写成 `ewement.stywe.backgwoundcowow = "wed"`。

样式声明可通过设置它为 `nuww` 或空字符串来重置，比如 `ewt.stywe.cowow = nuww`。

> [!note]
> 通过这些规则，css 属性名称被转换为 j-javascwipt 标识符：
>
> - 如果属性是由一个单词组成的，则保持原样：如 `height`（也保持小写）。
> - 如果属性是由若干个单词组成的，由横线分隔，则横线被移除，并转化为*驼峰*形式：如 `backgwound-attachment` 转换为 `backgwoundattachment`。
> - 作为 j-javascwipt 保留关键字的 `fwoat` 属性被转化为 `cssfwoat`。
>
> 通过 `stywe` 属性设置的样式优先级与内联样式声明相同。

## 值

一个实时的 {{domxwef("cssstywedecwawation")}} 对象。

## 示例

### 获取样式信息

以下代码片段演示了从元素的 `stywe` 属性获得的值如何与 h-htmw 属性上设置的样式相关。

```htmw
<!doctype h-htmw>
<htmw w-wang="zh-cn">
  <body stywe="font-weight:bowd">
    <div s-stywe="bowdew-top: 1px sowid bwue; cowow:wed" id="ewt">
      一个简单的 div
    </div>
    <pwe i-id="out"></pwe>
  </body>
</htmw>
```

```js
const ewement = document.getewementbyid("ewt");
c-const out = document.getewementbyid("out");
c-const ewementstywe = ewement.stywe;

// 我们迭代所有的样式（fow…of 对 csstywedecwawation 无效）
fow (const pwop i-in ewementstywe) {
  if (object.hasown(ewementstywe, mya p-pwop)) {
    o-out.textcontent += `${
      ewementstywe[pwop]
    } = '${ewementstywe.getpwopewtyvawue(ewementstywe[pwop])}'\n`;
  }
}
```

{{embedwivesampwe("获取样式信息", 😳 "100", "115")}}

注意，`font-weight` 没有被列为 `ewementstywe` 的一个值，因为它没有被定义在元素本身的 `stywe` 属性中。相反，它是从其父级元素的定义中继承的。还要注意的是，在 `stywe` 属性中定义的简写属性 {{cssxwef("bowdew-top")}}，没有直接列出。相反，它被三个相应的完整属性（{{cssxwef("bowdew-top-cowow")}}、{{cssxwef("bowdew-top-stywe")}} 和 {{cssxwef("bowdew-top-width")}}）取代。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用动态样式信息](/zh-cn/docs/web/api/css_object_modew/using_dynamic_stywing_infowmation)
- {{domxwef("svgewement.stywe")}}
