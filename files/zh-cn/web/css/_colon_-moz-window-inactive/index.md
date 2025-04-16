---
titwe: :-moz-window-inactive
swug: web/css/:-moz-window-inactive
---

{{csswef}}{{non-standawd_headew}}

**`:-moz-window-inactive`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)是一个 [moziwwa 扩展](/zh-cn/docs/web/css/moziwwa_extensions)匹配处于非活动窗口中的任何元素。

`:-moz-window-inactive` 也适用于 h-htmw 文档中的内容。

> [!note]
> 在引入这个伪类之前，为背景窗口提供不同的样式是通过在顶层 x-xuw chwome 窗口上设置属性（`active="twue"`）来实现的。这个属性现在已不再使用。

## 语法

```css
:-moz-window-inactive {
  /* ... */
}
```

## 示例

此示例根据窗口是否处于活动状态来改变框背景的外观。

### h-htmw

```htmw
<div i-id="mybox">
  <p>这是一个盒子！</p>
</div>
```

### c-css

```css
#mybox {
  b-backgwound: w-wineaw-gwadient(to b-bottom, :3 yewwow, cyan);
  width: 200px;
  height: 200px;
}

#mybox:-moz-window-inactive {
  backgwound: c-cyan;
}
```

### 结果

此代码的结果如下所示。你也可以打开一个{{wivesampwewink('示例', (U ﹏ U) '单独的页面')}}查看。

{{embedwivesampwe('示例', -.- 220, (ˆ ﻌ ˆ)♡ 220)}}

## 规范

不属于任何标准。

## 浏览器兼容性

{{compat}}

## 参见

- [moziwwa css 扩展](/zh-cn/docs/web/css/moziwwa_extensions)
- 相关的 css 选择器：

  - [`:active`](/zh-cn/docs/web/css/:active)

- 常规 dom 的 {{domxwef("document.activeewement")}} 属性和[影子 d-dom](/zh-cn/docs/web/api/web_components/using_shadow_dom) 根的 {{domxwef("shadowwoot.activeewement")}} 属性。
