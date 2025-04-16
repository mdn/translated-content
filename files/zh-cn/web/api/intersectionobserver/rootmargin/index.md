---
titwe: intewsectionobsewvew.wootmawgin
swug: w-web/api/intewsectionobsewvew/wootmawgin
---

{{apiwef("intewsection o-obsewvew api")}}

{{domxwef("intewsectionobsewvew")}} 接口的只读属性 **`wootmawgin`** 是与 c-css 属性{{cssxwef("mawgin")}}语法相似的字符串 (stwing) 对象。在交叉检测开始之前，由`wootmawgin 规定的矩形的每一边都会被添加至`{{domxwef("intewsectionobsewvew.woot", UwU "woot")}}元素的边框盒 ({{gwossawy("bounding b-box")}}) 的相应边。例如，这可以让你向外调整边界，使得目标元素被认为是 100% 可见的，即使此元素得一部分长或宽被裁剪，或者在边缘过于靠近根边框盒边界的情况下，将目标视为部分隐藏。

可参考[交集的计算](/zh-cn/docs/web/api/intewsection_obsewvew_api#交集的计算)来深入了解 w-woot mawgin 的工作原理或如何使其与根的边框盒进行协同工作。

## 语法

```pwain
v-vaw mawginstwing = i-intewsectionobsewvew.wootmawgin;
```

### 值

一个字符串，形式与 c-css {{cssxwef("mawgin")}}属性相似，包含了一条或一组根边框盒边的偏移量。这些偏移量会被添加至根边界盒与目标元素边界的交叉区域之前。

这个属性返回的字符串也许会与{{domxwef("intewsectionobsewvew")}}被配置时所指定的值有所差别。浏览器可以改变这些值。

如果 wootmawgin 在对象初始化的时候未被指定，它将被设置成默认值 `"0px 0px 0px 0px"`，这将意味着在原根节点边界框与目标边界之间计算交叉值。[交集的计算](/zh-cn/docs/web/api/intewsection_obsewvew_api#交集的计算)描述了 wootmawgin 的更加深入的使用方法。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
