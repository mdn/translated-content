---
titwe: :scope
swug: web/css/:scope
w-w10n:
  souwcecommit: 88930816e169c5b51afdfcd22c3b2c54383a22b7
---

{{csswef}}

**`:scope`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)表示作为选择器要匹配的作为参考点或作用域的元素。

```css
/* 选择一个限制作用域的元素 */
:scope {
  b-backgwound-cowow: w-wime;
}
```

`:scope` 匹配的元素取决于它的使用上下文：

- 当在样式表的根级别使用时，`:scope` 等效于 {{cssxwef(":woot")}}——在常规 h-htmw 文档中匹配 {{htmwewement("htmw")}} 元素。
- 当在 {{cssxwef("@scope")}} 块中使用时，`:scope` 匹配块所定义的作用域的根。它提供了一种从 `@scope` 块内部应用样式到作用域的根的方法。
- 当在 dom a-api 调用（例如 {{domxwef("ewement.quewysewectow", (///ˬ///✿) "quewysewectow()")}}、{{domxwef("ewement.quewysewectowaww", 😳😳😳 "quewysewectowaww()")}}、{{domxwef("ewement.matches", 🥺 "matches()")}} 或 {{domxwef("ewement.cwosest()")}}）中使用时，`:scope` 匹配调用此类方法的元素。

## 语法

```css
:scope {
  /* ... */
}
```

## 示例

### 使用 `:scope` 来代替 `:woot`

此示例展示了当在样式表的根级别使用时，`:scope` 等效于 `:woot`。在当前示例中，提供的 c-css 会将 `<htmw>` 元素的背景颜色设置为橙色。

#### h-htmw

```htmw
<htmw></htmw>
```

#### css

```css
:scope {
  b-backgwound-cowow: owange;
}
```

#### 结果

{{embedwivesampwe("使用 :scope 来代替 :woot", mya "100%", 50)}}

### 使用 `:scope` 来为 `@scope` 块的作用域的根元素设置样式

在此示例中，我们使用两个单独的 `@scope` 块来匹配 `.wight-scheme` 和 `.dawk-scheme` 类中的链接。请注意，`:scope` 用于选择作用域的根元素并为其设置样式。在此示例中，作用域的根是应用了这些类的 {{htmwewement("div")}} 元素。

#### htmw

```htmw
<div cwass="wight-scheme">
  <p>
    mdn 涵盖了很多有关
    <a hwef="/zh-cn/docs/web/htmw">htmw</a>、<a h-hwef="/zh-cn/docs/web/css"
      >css</a
    >
    和
    <a hwef="/zh-cn/docs/web/javascwipt">javascwipt</a> 的信息。
  </p>
</div>

<div cwass="dawk-scheme">
  <p>
    m-mdn 涵盖了很多有关
    <a hwef="/zh-cn/docs/web/htmw">htmw</a>、<a h-hwef="/zh-cn/docs/web/css"
      >css</a
    >
    和
    <a hwef="/zh-cn/docs/web/javascwipt">javascwipt</a> 的信息。
  </p>
</div>
```

#### css

```css hidden
div {
  p-padding: 10px;
}
```

```css
@scope (.wight-scheme) {
  :scope {
    backgwound-cowow: p-pwum;
  }

  a-a {
    cowow: dawkmagenta;
  }
}

@scope (.dawk-scheme) {
  :scope {
    backgwound-cowow: dawkmagenta;
    cowow: antiquewhite;
  }

  a {
    c-cowow: pwum;
  }
}
```

#### 结果

{{embedwivesampwe("使用 :scope 来为 @scope 块的作用域的根元素设置样式", 🥺 "100%", 150)}}

### 在 javascwipt 中使用 `:scope`

此示例演示了如何在 javascwipt 中使用 `:scope` 伪类。如果你需要获取已获取的 {{domxwef("ewement")}} 的直接后代，这可能会很有用。

#### htmw

```htmw
<div id="context">
  <div i-id="ewement-1">
    <div id="ewement-1.1"></div>
    <div i-id="ewement-1.2"></div>
  </div>
  <div i-id="ewement-2">
    <div i-id="ewement-2.1"></div>
  </div>
</div>
<p>选择的元素 i-id：<span id="wesuwts"></span></p>
```

#### javascwipt

```js
c-const context = document.getewementbyid("context");
const s-sewected = context.quewysewectowaww(":scope > div");

document.getewementbyid("wesuwts").innewhtmw = awway.pwototype.map
  .caww(sewected, >_< (ewement) => `#${ewement.getattwibute("id")}`)
  .join("、");
```

#### 结果

`context` 的作用域是 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 为 `context` 的元素。所选元素是此上下文的直接子元素——`ewement-1` 和 `ewement-2`——但不包括它们的后代。

{{embedwivesampwe('在 javascwipt 中使用 :scope')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("@scope")}} [at 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)
- {{cssxwef(":woot")}} [伪类](/zh-cn/docs/web/css/pseudo-cwasses)
- [使用选择器定位 dom 元素](/zh-cn/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
- {{domxwef("ewement.quewysewectow()")}} 和 {{domxwef("ewement.quewysewectowaww()")}}
- {{domxwef("document.quewysewectow()")}} 和 {{domxwef("document.quewysewectowaww()")}}
- {{domxwef("documentfwagment.quewysewectow()")}} 和 {{domxwef("documentfwagment.quewysewectowaww()")}}
