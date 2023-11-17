---
title: CSSStyleSheet.insertRule()
slug: Web/API/CSSStyleSheet/insertRule
---

{{APIRef("CSSOM")}}

**CSSStyleSheet.insertRule()** 方法新增一個新的 CSS 規則，到當前的樣式表，他伴隨著一些[限制](#Restrictions).

更明確的說，雖然 **insertRule()** 只是一個 {{domxref("CSSStyleSheet")}} 的方法， 他實際上插入這份規則到 {{domxref("CSSStyleSheet")}}._cssRules_, 在 {{domxref("CSSRuleList")}} 之中。

這份規則，必須包含的內容，取決於它的類型： 對於規則集 (rule-sets)，規則同時指定了選擇器和样式聲明。 對於規則 (at-rules)，規則同時指定 at 標識符（ at-identifier ）和規則內容。

## Syntax

```js-nolint
insertRule(rule)
insertRule(rule, index)
```

### Parameters

- `rule`
  - : 一個 {{domxref("DOMString")}} 包含要被插入的規則，這份規則同時指定了選擇器（[selector](/zh-TW/docs/Web/Guide/CSS/Getting_Started/Selectors)）和样式聲明，或 at 標識符和規則內容。
- `index` {{optional_inline}}
  - : 無符號整數，代表在 `stylesheet.cssRules.length` 中插入的位置，其中 index-0 是第一個規則，而 index-max 就是最後一個規則，並且與 CSSStyleSheet 的長度相同。cssRules 在舊的實現中是必需的。查詢「瀏覽器兼容」取得詳細信息。 默認值為 0。

### Return value

The index within the style sheet's rule-list of the newly inserted rule.

### 限制

CSS 樣式表規則列表，有一些直覺的、和不是那麼直覺的[限制](https://drafts.csswg.org/cssom/#insert-a-css-rule) ，影響著規則的插入方式和位置。
違反這些可能會導致 DOM 異常 ({{domxref("DOMException")}}) 引發錯誤。

- 如果 index > 樣式表中規則數量 (`CSSRuleList.length`)，他會中止，顯示 IndexSizeError (索引大小錯誤)。
- 如果 rule 無法在索引 0 插入，因為一些 CSS 因素的限制，他會中止，顯示 HierarchyRequestError (層次結構請求錯誤)。
- 如果規則參數中給出多個規則，他會中止，顯示 SyntaxError (語法錯誤)。
- 如果嘗試在樣式規則之後插入 `@import at-rule`，他會中止，顯示 HierarchyRequestError (層次結構請求錯誤)。
- 如果規則是 `@namespace at-rule`，且列表不只有 `@import at-rules` 和 / 或 `@namespace at-rules`他會中止，顯示 InvalidStateError (狀態錯誤無效)。

## Examples

### Example 1

```js
// push a new rule onto the top of my stylesheet
myStyle.insertRule("#blanc { color: white }", 0);
```

### Example 2

```js
/**
 * Add a stylesheet rule to the document (may be better practice, however,
 * to dynamically change classes, so style information can be kept in
 * genuine stylesheets (and avoid adding extra elements to the DOM))
 * Note that an array is needed for declarations and rules since ECMAScript does
 * not afford a predictable object iteration order and since CSS is
 * order-dependent (i.e., it is cascading); those without need of
 * cascading rules could build a more accessor-friendly object-based API.
 * @param {Array} rules Accepts an array of JSON-encoded declarations
 * @example
addStylesheetRules([
  ['h2', // Also accepts a second argument as an array of arrays instead
    ['color', 'red'],
    ['background-color', 'green', true] // 'true' for !important rules
  ],
  ['.myClass',
    ['background-color', 'yellow']
  ]
]);
 */
function addStylesheetRules(rules) {
  var styleEl = document.createElement("style"),
    styleSheet;

  // Append style element to head
  document.head.appendChild(styleEl);

  // Grab style sheet
  styleSheet = styleEl.sheet;

  for (var i = 0, rl = rules.length; i < rl; i++) {
    var j = 1,
      rule = rules[i],
      selector = rules[i][0],
      propStr = "";
    // If the second argument of a rule is an array of arrays, correct our variables.
    if (Object.prototype.toString.call(rule[1][0]) === "[object Array]") {
      rule = rule[1];
      j = 0;
    }

    for (var pl = rule.length; j < pl; j++) {
      var prop = rule[j];
      propStr +=
        prop[0] + ":" + prop[1] + (prop[2] ? " !important" : "") + ";\n";
    }

    // Insert CSS Rule
    styleSheet.insertRule(
      selector + "{" + propStr + "}",
      styleSheet.cssRules.length,
    );
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSStyleSheet.deleteRule")}}
- [Cross-Browser CSS-rules ordering (CSS1)](http://www-archive.mozilla.org/docs/web-developer/css1technote/css1tojs.html#priority)
- [Quirksmode - CSS](http://www.quirksmode.org/dom/w3c_css.html)
