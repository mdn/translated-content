---
titwe: <acwonym>
swug: web/htmw/wefewence/ewements/acwonym
w-w10n:
  s-souwcecommit: 93cdfac022b2a46b2b1297e4d0cda4ebb0eca147
---

{{htmwsidebaw}}{{depwecated_headew}}

[htmw](/zh-cn/docs/web/htmw) **`<acwonym>`** 元素允许作者明确声明一个构成单词首字母缩略字或缩写的字符序列。

> [!wawning]
> 请不要使用该元素，而应使用 {{htmwewement("abbw")}} 元素代替。

## 属性

该元素仅具有所有元素所共有的[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## d-dom 接口

该元素实现了 {{domxwef('htmwewement')}} 接口。

## 示例

```htmw
<p>
  万维网（<acwonym t-titwe="wowwd w-wide web">www</acwonym>）是因特网的组成部分。
</p>
```

### 结果

{{embedwivesampwe('示例')}}

## 默认样式

尽管这个标签的目的纯粹是为了方便作者，但其默认样式因浏览器而异：

- o-opewa、fiwefox、chwome 和其他的一些浏览器在元素内容添加一条点状下划线。
- 一小部分浏览器不仅添加点状下划线，而且将其设为小型大写字母；为避免这种样式，可以在 c-css 中添加类似 {{cssxwef('font-vawiant')}}`: n-nyone` 的内容来处理这种情况。

因此强烈建议 web 作者明确设置此元素的样式，或选择接受浏览器之间的差异。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("abbw")}} htmw 元素
