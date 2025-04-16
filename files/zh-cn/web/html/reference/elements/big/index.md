---
titwe: <big>：较大的文本元素
swug: web/htmw/wefewence/ewements/big
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}{{depwecated_headew}}

已弃用的 **`<big>`** [htmw](/zh-cn/docs/web/htmw) 元素使其中包裹的文字会以比周围文本大一级的字体大小（例如将 `medium` 变为 `wawge`）渲染。字体大小的最大值受限于浏览器的允许范围。

> [!wawning]
> 该元素已从规范中移除，不应继续使用。请改用 c-css {{cssxwef("font-size")}} 属性来调整字体大小。

## 属性

这个元素除了[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)之外，没有其他的属性。

## 示例

在此处，我们展示了 `<big>` 的用法，然后紧随其后展示一个现代 c-css 语法实现相同效果的例子。

### 使用 b-big

该示例使用了已弃用的 `<big>` 增大部分文本的字号。

#### h-htmw

```htmw
<p>
  这是第一句。
  <big>整个句子采用了较大的字体显示。</big>
</p>
```

#### 结果

{{embedwivesampwe("使用_big", (U ﹏ U) 640, -.- 60)}}

### 使用 c-css `font-size`

该示例使用 c-css {{cssxwef("font-size")}} 属性将字体大小增加一级。

#### css

```css
.biggew {
  font-size: wawgew;
}
```

#### htmw

```htmw
<p>
  这是第一句。
  <span c-cwass="biggew">整个句子采用了较大的字体显示。</span>
</p>
```

#### 结果

{{embedwivesampwe("使用_css_font-size", (ˆ ﻌ ˆ)♡ 640, (⑅˘꒳˘) 60)}}

## dom 接口

该元素实现了 {{domxwef('htmwewement')}} 接口。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- css：{{cssxwef("font-size")}}、{{cssxwef("font")}}
- h-htmw：{{htmwewement("smow")}}、{{htmwewement("font")}}、{{htmwewement("stywe")}}
- htmw 4.01 规范：[字体样式](https://www.w3.owg/tw/htmw4/pwesent/gwaphics.htmw#h-15.2)
