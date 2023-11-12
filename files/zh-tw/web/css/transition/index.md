---
title: transition
slug: Web/CSS/transition
---

{{CSSRef}}

**`transition`** [CSS](/zh-TW/docs/Web/CSS) 屬性是 {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, and {{ cssxref("transition-delay") }}的 [特性簡寫](/zh-TW/docs/Web/CSS/Shorthand_properties)。

{{EmbedInteractiveExample("pages/css/transition.html")}}

Transitions 讓你可以定義元件在兩個狀態之間切換的轉場效果。兩個不同狀態可以使用[虛擬類別](/zh-TW/docs/Web/CSS/Pseudo-classes) 定義，像是{{cssxref(":hover")}} 或 {{cssxref(":active")}} 亦或是 使用 JavaScript 設定的狀態變化。

## 語法

```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | timing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition:
  margin-right 4s,
  color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;

/* Global values */
transition: inherit;
transition: initial;
transition: unset;
```

`transition` 屬性可以包含一個或多個轉場設定，每一項設定都以逗點分開。

每一項設定都描述著每一項屬性所對應的轉場效果(或是`all` 及 `none`這兩個特殊值) 。其包含了：

- 無或一個對應的屬性名稱。可以是：

  - 關鍵字 `none`
  - 關鍵字 `all`
  - 以{{cssxref("&lt;custom-ident&gt;")}}命名的 CSS 屬性。

- 無或一個{{cssxref("&lt;single-transition-timing-function&gt;")}} 表示所使用的漸變函式。
- 無、一個或兩個{{cssxref("&lt;time&gt;")}} 值。第一個值會被指派給{{cssxref("transition-duration")}}, 而第二個則被指派給{{cssxref("transition-delay")}}。

當每個轉場設定不等長時，請參見 [當 property values list 之間不等長時...](/zh-TW/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#當_property_value_list_之間並不等長時_...) 。簡而言之，多餘的描述(超過實際被執行的數量)會直接被忽略。

### 標準語法

{{csssyntax}}

## 範例

[CSS 轉場](/zh-TW/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) 有更多範例。

## 規範

{{Specifications}}

{{cssinfo}}

## 瀏覽器支援情況

{{Compat}}

## 更多資訊

- [CSS 轉場](/zh-TW/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}
