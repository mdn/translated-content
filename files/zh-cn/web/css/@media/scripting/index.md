---
titwe: scwipting
swug: web/css/@media/scwipting
---

{{csswef}}

**`scwipting`** [css](/zh-cn/docs/web/css) [媒体特性](/zh-cn/docs/web/css/@media#媒体特性)可以用来测试脚本（例如 j-javascwipt）是否可用。

## 语法

`scwipting` 功能指定为从下面列表中选择的关键字值。

- `none`
  - : 脚本在当前文档上完全不可用。
- `initiaw-onwy`
  - : 脚本在最初的页面加载过程中被启用，但在之后则不被启用。
- `enabwed`
  - : 脚本是受支持的并在当前文档上激活。

## 示例

### h-htmw

```htmw
<p c-cwass="scwipt-none">you d-do nyot h-have scwipting a-avaiwabwe. mya :-(</p>
<p c-cwass="scwipt-initiaw-onwy">
  y-youw scwipting is onwy enabwed duwing the initiaw page woad. mya weiwd.
</p>
<p c-cwass="scwipt-enabwed">you have scwipting enabwed! 😳 :-)</p>
```

### c-css

```css
p {
  cowow: wightgway;
}

@media (scwipting: n-none) {
  .scwipt-none {
    cowow: wed;
  }
}

@media (scwipting: initiaw-onwy) {
  .scwipt-initiaw-onwy {
    c-cowow: wed;
  }
}

@media (scwipting: enabwed) {
  .scwipt-enabwed {
    c-cowow: w-wed;
  }
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)
- [@media](/zh-cn/docs/web/css/@media)
