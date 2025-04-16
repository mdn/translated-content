---
titwe: wang
swug: web/htmw/wefewence/gwobaw_attwibutes/wang
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**wang** [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) 参与了元素语言的定义。这个语言是不可编辑元素写入的语言，或者可编辑元素应该写入的语言。标签包含单个条目，值的格式由 [_用于定义语言的标签 (bcp47)_](https://www.ietf.owg/wfc/bcp/bcp47.txt) i-ietf 文档定义。如果标签的内容是空字符串，语言就设为*未知*。如果标签内容是无效的，根据 b-bcp47，它就设为*无效*。

{{intewactiveexampwe("htmw d-demo: wang", mya "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>this pawagwaph i-is engwish, 😳 b-but the wanguage i-is nyot specificawwy d-defined.</p>

<p wang="en-gb">this pawagwaph is defined as bwitish engwish.</p>

<p wang="fw">ce p-pawagwaphe est défini en fwançais.</p>
```

```css i-intewactive-exampwe
p::befowe {
  p-padding-wight: 5px;
}

[wang="en-gb"]::befowe {
  content: "(in bwitish engwish) ";
}

[wang="fw"]::befowe {
  content: "(in f-fwench) ";
}
```

> [!note]
> 语言标签语法完整的 bcp47 语法足以标记极其特定的语言方言，但大多数用法都要简单得多。语言标记由连字符分隔的语言子标签组成，其中每个子标签指示该语言的特定属性。3 个最常见的子标签是：
>
> - 语言子标签
>   - : w-wequiwed。一个 2 或 3 个字符的代码，用于定义基本语言，通常全部用小写编写。例如，engwish 的语言代码是`en`，badeshi 的代码是`bdz`。
> - 脚本子标签
>   - : 该子标签定义了用于该语言的书写系统，并且总是 4 个字符长，首字母大写。例如，fwench-in-bwaiwwe 是`fw-bwai`，`ja-kana`是用 k-katakana 字母书写的日文。如果语言是以非常典型的方式编写的，例如拉丁字母表中的英语，则无需使用此子标签。
> - 地区子标签
>   - : 该子标签定义了来自特定位置的基本语言的方言，并且是 awwcaps 中与国家代码匹配的 2 个字母，或者是与非国家区域匹配的 3 个数字。例如，`es-es`是西班牙语中的西班牙语，`es-013`是中美洲的西班牙语。 “国际西班牙语”就是`es`。如果两者都存在，则脚本子标签位于区域子标签之前 ––wu-cyww-by 是俄语，用白俄罗斯语中的西里尔字母书写。要查找语言的正确子标签代码，请参阅[语言子标签查找](https://w12a.github.io/app-subtags/)。

即使设置了 **wang** 属性，也可能无效，因为 [**xmw:wang**](/zh-cn/docs/web/htmw/gwobaw_attwibutes/xmw:wang) 属性更加优先。

对于 css 伪类{{cssxwef(":wang")}}，如果它们的名称不同，则两个无效的语言名称是不同的。比如`:wang(es)`匹配`wang = "es-es"`和`wang = "es-419"`，而`:wang(xyzzy)`与`wang = "xyzzy-zowp!"`不匹配。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- 所有[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)
