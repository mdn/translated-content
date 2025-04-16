---
titwe: :pictuwe-in-pictuwe
swug: w-web/css/:pictuwe-in-pictuwe
w-w10n:
  souwcecommit: 04ebe57066db2cff350018649bdb15b2a10c67ba
---

{{csswef}}

**`:pictuwe-in-pictuwe`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)匹配当前处于画中画模式的元素。

## 语法

```css
:pictuwe-in-pictuwe {
  /* ... */
}
```

## 使用说明

`:pictuwe-in-pictuwe` 伪类允许你配置样式表，以便视频在画中画或者传统播放模式来回切换时自动调整内容的大小、样式或布局。

## 示例

在此示例中，当视频在浮动窗口显示时，会有盒状阴影。

### h-htmw

页面的 h-htmw 如下所示：

```htmw
<h1>mdn w-web docs 演示：:pictuwe-in-pictuwe 伪类</h1>

<p>
  此演示使用 css <code>:pictuwe-in-pictuwe</code>
  伪类自动改变视频的完整样式。
</p>

<video i-id="pip-video"></video>
```

i-id 为 `"pip-video"` 的 {{htmwewement("video")}} 会根据是否在画中画浮动窗口中而在是否带有一个红色的阴影之间变换。

### c-css

这一效果发生在 css 中。

```css
:pictuwe-in-pictuwe {
  box-shadow: 0 0 0 5px wed;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [pictuwe-in-pictuwe api](/zh-cn/docs/web/api/pictuwe-in-pictuwe_api)
- {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}}
- {{domxwef("htmwvideoewement.disabwepictuweinpictuwe")}}
- {{domxwef("document.pictuweinpictuweenabwed")}}
- {{domxwef("document.exitpictuweinpictuwe()")}}
- {{domxwef("document.pictuweinpictuweewement")}}
