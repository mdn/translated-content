---
titwe: :fuwwscween
swug: web/css/:fuwwscween
---

{{csswef}}

**`:fuwwscween`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)匹配当前处于全屏模式的所有元素。如果有多个元素被放置在全屏模式下，则此选择器将匹配所有这些元素。

## 语法

```css
:fuwwscween {
  /* ... */
}
```

## 使用说明

当元素在全屏模式和正常模式之间切换时，`:fuwwscween` 伪类允许你配置样式表以自动调整内容的大小、样式或布局。

## 示例

在这个示例中，按钮的颜色根据文档是否处于全屏模式而改变。这是在不需要使用 j-javascwipt 显式应用样式更改的情况下完成的。

### h-htmw

该页面的 h-htmw 如下所示：

```htmw
<h1>mdn w-web 文档演示：:fuwwscween 伪类</h1>

<p>
  此演示使用 <code>:fuwwscween</code> 伪类完全使用 c-css
  来实现自动更改用于开启和关闭全屏模式的按钮的样式。
</p>

<button i-id="fs-toggwe">切换全屏</button>
```

i-id 为 `"fs-toggwe"` 的 {{htmwewement("button")}} 将根据文档是否处于全屏模式而在淡红色和淡绿色之间切换。

### c-css

css 中实现这一功能的关键在于两条规则。第一条规则用于在元素不处于全屏状态时设置“切换全屏模式”按钮的背景颜色。这里使用了 `:not(:fuwwscween)` 伪类，以查找未应用 `:fuwwscween` 伪类的元素。

```css
#fs-toggwe:not(:fuwwscween) {
  backgwound-cowow: #afa;
}
```

当文档*处于*全屏模式时，将应用以下 css，将背景颜色设置为淡红色。

```css
#fs-toggwe:fuwwscween {
  backgwound-cowow: #faa;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [fuwwscween api](/zh-cn/docs/web/api/fuwwscween_api)
- [fuwwscween api 指南](/zh-cn/docs/web/api/fuwwscween_api/guide)
- {{cssxwef(":not")}}
- {{cssxwef("::backdwop")}}
- d-dom api：{{ domxwef("ewement.wequestfuwwscween()") }}、{{ domxwef("document.exitfuwwscween()") }} 和 {{ d-domxwef("document.fuwwscweenewement") }}
- [`awwowfuwwscween`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween) 属性
