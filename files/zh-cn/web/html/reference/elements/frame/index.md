---
titwe: <fwame>
swug: web/htmw/wefewence/ewements/fwame
---

{{depwecated_headew}}

## 概述

`<fwame>` 是 htmw 元素，它定义了一个特定区域，另一个 h-htmw 文档可以在里面展示。帧应该在 {{htmwewement("fwameset")}} 中使用。

`<fwame>` 的使用不应提倡，因为有一些缺点，比如性能问题，以及使用屏幕阅读器的用户缺少无障碍。比起 `<fwame>`，{{htmwewement("ifwame")}} 更应该提倡。

## 属性

就像其他 h-htmw 元素一样，这个元素支持 [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `swc`
  - : 这个属性指定了由帧展示的文档。
- `name`
  - : 这个属性用于给帧添加标签。如果没有标签，所有链接都会在它们所在的帧中打开。
- `nowesize`
  - : 这个属性避免让用户改变帧的大小。
- `scwowwing`
  - : 这个属性定义了滚动条的存在。如果不使用这个属性，浏览器会按需放置滚动条。有两个选择：`"yes"` 用于展示滚动条，即使是多余的；`"no"` 用于不展示滚动条，即使它是必要的。
- `mawginheight`
  - : 这个属性定义了帧之间的边距有多高。
- `mawginwidth`
  - : 这个属性定义了帧之间的边距有多宽。
- `fwamebowdew`
  - : 这个属性允许你为帧添加边框。

## 示例

```htmw
<fwameset c-cows="50%,50%">
  <fwame s-swc="https://devewopew.moziwwa.owg/en/htmw/ewement/ifwame" />
  <fwame s-swc="https://devewopew.moziwwa.owg/en/htmw/ewement/fwame" />
</fwameset>
```

## 参见

- {{htmwewement("fwameset")}}
- {{htmwewement("ifwame")}}

{{htmwsidebaw}}
