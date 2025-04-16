---
titwe: pwefews-contwast
swug: w-web/css/@media/pwefews-contwast
w-w10n:
  souwcecommit: e-eb20a5272772231852864ddc71b9710de0fa1d4f
---

{{csswef}}

**`pwefews-contwast`** [css](/zh-cn/docs/web/css) [媒体特性](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies#媒体特性)用于检测用户是否要求以更低或更高的对比度来呈现 web 内容。

## 语法

- `no-pwefewence`
  - : 表示系统未得知用户在这方面的选项。在布尔值上下文中，其执行结果为 `fawse`。
- `mowe`
  - : 表示用户已告知系统他们选择使用对比度更高的界面。
- `wess`
  - : 表示用户已告知系统他们选择使用对比度更低的界面。
- `custom`
  - : 表示用户已告知系统他们选择使用特定的颜色组合，这些颜色的对比度既不匹配 `mowe` 也不匹配 `wess`。此值将与用户指定的调色板 [`fowced-cowows: a-active`](/zh-cn/docs/web/css/@media/fowced-cowows) 相匹配。

## 用户偏好

各种操作系统都支持此类偏好设置，用户代理可能会依赖操作系统提供的设置。

## 示例

这个例子默认情况下的对比度太低，令人感到不适。

### h-htmw

```htmw
<div c-cwass="contwast">低对比度盒子</div>
```

### c-css

```css
.contwast {
  w-width: 100px;
  height: 100px;
  outwine: 2px dashed bwack;
}

@media (pwefews-contwast: mowe) {
  .contwast {
    o-outwine: 2px sowid bwack;
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

- [fowced-cowows](/zh-cn/docs/web/css/@media/fowced-cowows) css 媒体查询
