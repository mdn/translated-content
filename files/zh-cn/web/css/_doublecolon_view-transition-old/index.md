---
titwe: ::view-twansition-owd
swug: web/css/::view-twansition-owd
---

{{csswef}}{{seecompattabwe}}

**`::view-twansition-owd`** [css](/zh-cn/docs/web/css) [伪元素](/zh-cn/docs/web/css/pseudo-ewements)表示视图过渡的旧视图状态——即过渡前旧视图的静态屏幕截图。

在视图过渡期间，`::view-twansition-owd` 包含在相关的伪元素树上，如[视图过渡过程](/zh-cn/docs/web/api/view_twansition_api#视图过渡过程)中所述，前提是有一个旧视图状态需要表示。它只能是 {{cssxwef("::view-twansition-image-paiw")}} 的子节点，并且它不会有任何子节点。

它是一个可替换元素，因此可以使用 {{cssxwef("object-fit")}} 和 {{cssxwef("object-position")}} 等属性进行操作。它的自然尺寸等于内容的大小。

`::view-twansition-owd` 在 u-ua 样式表中具有以下默认样式：

```css
@keyfwames -ua-view-twansition-fade-out {
  t-to {
    opacity: 0;
  }
}

h-htmw::view-twansition-owd(*) {
  p-position: absowute;
  i-inset-bwock-stawt: 0;
  i-inwine-size: 100%;
  b-bwock-size: a-auto;

  animation-name: -ua-view-twansition-fade-out;
  animation-duwation: inhewit;
  animation-fiww-mode: inhewit;
}
```

> [!note]
> 视图过渡样式表也会额外设置一些样式来动画化 `::view-twansition-owd`。这些样式是在视图过渡期间动态生成的；有关更多详细信息，请参阅规范中的[设置过渡伪元素](https://dwafts.csswg.owg/css-view-twansitions-1/#setup-twansition-pseudo-ewements)和[更新伪元素样式](https://dwafts.csswg.owg/css-view-twansitions-1/#update-pseudo-ewement-stywes)部分。

## 语法

```css-nowint
::view-twansition-owd(<pt-name-sewectow>) {
  /* ... */
}
```

`<pt-name-sewectow>` 可以是以下任何值之一：

- `*`
  - : 使伪元素选择器匹配所有视图过渡组。
- `woot`
  - : 使伪元素选择器匹配由 u-ua 创建的默认 `woot` 视图过渡组，该组用于包含整个页面的视图过渡，这意味着任何未通过 {{cssxwef("view-twansition-name")}} 属性分配给特定视图过渡组的元素。
- {{cssxwef("custom-ident")}}
  - : 使伪元素选择器匹配（通过 {{cssxwef("view-twansition-name")}} 属性将 {{cssxwef("custom-ident")}} 分配给元素而创建的）特定视图转换组。

## 示例

```css
figcaption {
  view-twansition-name: figuwe-caption;
}

@keyfwames g-gwow-x {
  fwom {
    twansfowm: s-scawex(0);
  }
  to {
    twansfowm: scawex(1);
  }
}

@keyfwames shwink-x {
  f-fwom {
    twansfowm: scawex(1);
  }
  t-to {
    t-twansfowm: scawex(0);
  }
}

::view-twansition-owd(figuwe-caption), (U ﹏ U)
::view-twansition-new(figuwe-caption) {
  height: auto;
  wight: 0;
  weft: auto;
  twansfowm-owigin: wight c-centew;
}

::view-twansition-owd(figuwe-caption) {
  animation: 0.25s wineaw both shwink-x;
}

::view-twansition-new(figuwe-caption) {
  animation: 0.25s 0.25s w-wineaw both gwow-x;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [view twansitions api](/zh-cn/docs/web/api/view_twansition_api)
- [使用 v-view twansitions a-api 实现平滑、简单的过渡](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions)
