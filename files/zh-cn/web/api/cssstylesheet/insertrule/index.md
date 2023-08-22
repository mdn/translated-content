---
title: CSSStyleSheet.insertRule()
slug: Web/API/CSSStyleSheet/insertRule
---

{{ APIRef("CSSOM") }}

**`CSSStyleSheet.insertRule()`** 方法用来给当前样式表插入新的样式规则（[CSS rule](/zh-CN/docs/Web/API/CSSRule)），并且包含一些[限制](#限制)。

> **备注：** 尽管 `insertRule()` 是 {{domxref("CSSStyleSheet")}} 的一个方法，但它实际插入的地方是 `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules` 的内部 {{domxref("CSSRuleList")}}。

## 语法

```
stylesheet.insertRule(rule [, index])
```

### 参数

- `rule`

  - : 一个包含了将要插入的规则的 {{domxref("DOMString")}}。规则字符串必须包含的内容取决于它的类型：

    - **[rule-sets](/zh-CN/docs/Web/CSS/Syntax#CSS_statements) 类型**（普通带有选择器的规则）**，**需要[选择器](/zh-CN/docs/Web/Guide/CSS/Getting_Started/Selectors)和样式声明；
    - **[at-rules](/zh-CN/docs/Web/CSS/At-rule) 类型**（以 `@` 开头的规则，如 `@import, @media` 等）**，**需要 at-identifier 和规则内容。

- `index` {{optional_inline}}
  - : 一个小于或等于 `stylesheet.cssRules.length` 的正整数，表示新插入的规则在`{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules` 中的位置。默认值是 `0`。（在过去的实现中，这个参数是必需的，详情参见[浏览器兼容性](#浏览器兼容性)。）

### 返回值

新插入的规则在当前样式表规则列表中的索引。

### 限制

CSS 中存在一些直观和不是太直观能感受到的限制规则影响着某些样式规则能否被插入。违反这些规则可能会导致一些 DOM 异常（{{domxref("DOMException")}}）。

- 如果 `index` > `{{domxref("CSSRuleList", "", "", "1")}}.length`，该方法会中止并返回一个 `IndexSizeError` 错误；
- 如果 `rule` 由于一些 CSS 约束而不能被插入到 `index` `0`，该方法会中止并返回一个 `HierarchyRequestError` 错误；
- 如果 `rule` 参数中包含超过一条样式规则，该方法会中止并返回一个 `SyntaxError`；
- 如果尝试在一条普通规则后插入一条 {{cssxref("@import")}} 这种类型的规则，该方法会中止并返回一个 `HierarchyRequestError` 错误；
- 如果 `rule` 是 {{cssxref("@namespace")}} 并且规则列表中有另外的 `@import` 和/或 `@namespace` 规则，该方法中止并返回一个 `InvalidStateError` 错误；

## 示例

### 在样式表顶部插入新的规则

下面的代码片段将在样式表 `myStyle` 的顶部插入一条新规则：

```js
myStyle.insertRule("#blanc { color: white }", 0);
```

### 实现一个添加样式表规则的函数

```js
/**
 * 在文档中添加一条样式表规则（这可能是动态改变 class 名的更好的实现方法，
 * 使得 style 样式内容可以保留在真正的样式表中，以便添加额外的元素到 DOM 中）。
 * 注意这里有必要声明一个数组，因为 ECMAScript 不保证对象按预想的顺序遍历，
 * 并且 CSS 也是依赖于顺序的。
 * 类型为数组的参数 decls 接受一个 JSON 编译的数组。
 * @example
addStylesheetRules([
  ['h2', // 还接受第二个参数作为数组中的数组
    ['color', 'red'],
    ['background-color', 'green', true] // 'true' for !important rules
  ],
  ['.myClass',
    ['background-color', 'yellow']
  ]
]);
 */
function addStylesheetRules(decls) {
  var style = document.createElement("style");
  document.getElementsByTagName("head")[0].appendChild(style);
  if (!window.createPopup) {
    /* For Safari */
    style.appendChild(document.createTextNode(""));
  }
  var s = document.styleSheets[document.styleSheets.length - 1];
  for (var i = 0, dl = decls.length; i < dl; i++) {
    var j = 1,
      decl = decls[i],
      selector = decl[0],
      rulesStr = "";
    if (Object.prototype.toString.call(decl[1][0]) === "[object Array]") {
      decl = decl[1];
      j = 0;
    }
    for (var rl = decl.length; j < rl; j++) {
      var rule = decl[j];
      rulesStr +=
        rule[0] + ":" + rule[1] + (rule[2] ? " !important" : "") + ";\n";
    }

    if (s.insertRule) {
      s.insertRule(selector + "{" + rulesStr + "}", s.cssRules.length);
    } else {
      /* IE */
      s.addRule(selector, rulesStr, -1);
    }
  }
}
```

## 兼容补丁

以下补丁将会在 IE 5-8 中纠正提供给 `insertRule()` 的参数，使其标准化。to standardize them in Internet Explorer 5–8. 它通过一个函数对 `insertRule()` 进行补充，使得在参数传递给原生的 `insertRule()` 函数之前将其中的选择器从规则中分离出来。

```
(function(Sheet_proto){
  var originalInsertRule = Sheet_proto.insertRule;

  if (originalInsertRule.length === 2){ // 2 个托管参数: (selector, rules)
    Sheet_proto.insertRule = function(selectorAndRule){
      // 首先，从规则中分离选择器
      a: for (var i=0, Len=selectorAndRule.length, isEscaped=0, newCharCode=0; i !== Len; ++i) {
        newCharCode = selectorAndRule.charCodeAt(i);
        if (!isEscaped && (newCharCode === 123)) { // 123 = "{".charCodeAt(0)
          // 其次，找到花括号
          var openBracketPos = i, closeBracketPos = -1;

          for (; i !== Len; ++i) {
            newCharCode = selectorAndRule.charCodeAt(i);
            if (!isEscaped && (newCharCode === 125)) { // 125 = "}".charCodeAt(0)
              closeBracketPos = i;
            }
            isEscaped ^= newCharCode===92?1:isEscaped; // 92 = "\\".charCodeAt(0)
          }

          if (closeBracketPos === -1) break a; // No closing bracket was found!
            /*else*/ return originalInsertRule.call(
            this, // 想要改变的样式表
            selectorAndRule.substring(0, openBracketPos), // 选择器
            selectorAndRule.substring(closeBracketPos), // 规则
            arguments[3] // 插入的索引
          );
        }

        // Works by if the char code is a backslash, then isEscaped
        // gets flipped (XOR-ed by 1), and if it is not a backslash
        // then isEscaped gets XORed by itself, zeroing it
        isEscaped ^= newCharCode===92?1:isEscaped; // 92 = "\\".charCodeAt(0)
      }
      // Else, there is no unescaped bracket
      return originalInsertRule.call(this, selectorAndRule, "", arguments[2]);
    };
  }
})(CSSStyleSheet.prototype);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 传统浏览器支持

为了支持 Internet Explorer 8 和更早版本，请使用：`addRule(selector, rule [, index]);`。例如：`addRule('pre', 'font: 14px verdana'); // add rule at end`

另外注意非标准的 [`removeRule()`](http://www.quirksmode.org/dom/w3c_css.html#change) 和 [`.rules`](http://www.quirksmode.org/dom/w3c_css.html#access) 方法分别用 {{domxref("CSSStyleSheet.deleteRule","deleteRule()")}} 和{{domxref("CSSStyleSheet",".cssRules")}} 代替。

## 相关链接

- {{domxref("CSSStyleSheet.deleteRule")}}
- [Cross-Browser CSS-rules ordering (CSS1)](http://www-archive.mozilla.org/docs/web-developer/css1technote/css1tojs.html#priority)
- [Quirksmode - CSS](http://www.quirksmode.org/dom/w3c_css.html)
