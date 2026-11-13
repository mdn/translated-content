---
title: 字面字符：a、b
slug: Web/JavaScript/Reference/Regular_expressions/Literal_character
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**字面字符**（literal character）在输入文本中精确匹配其自身。

## 语法

```regex
c
```

## 参数

- `c`
  - : 除下列语法字符之外的任意单个字符。

## 描述

在正则表达式中，大多数字符可以按字面意义出现。它们通常是模式的最基本构建块。例如，以下是来自[移除 HTML 标签](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier#移除_html_标签)示例中的模式：

```js
const pattern = /<.+?>/g;
```

在此示例中，`.`、`+` 和 `?` 被称为*语法字符*。它们在正则表达式中具有特殊含义。模式中的其余字符（`<` 和 `>`）则是字面字符。它们在输入文本中匹配自身：即左尖括号和右尖括号。

以下字符是正则表达式中的语法字符，不能作为字面字符出现：

- [`^`、`$`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [`\`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [`*`、`+`、`?`、`{`、`}`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [`(`、`)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [`[`、`]`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [`|`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)

在字符类中，更多字符可以按字面意义出现。更多信息请参阅[字符类](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)页面。例如 `\.` 和 `[.]` 均匹配字面 `.`。但在 [`v` 模式字符类](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_模式字符类)中，存在一组预留的语法字符。为确保全面性，下表列出了 ASCII 字符在不同语境下可否以转义或非转义形式出现：“✅”表示字符代表自身，“❌”表示会引发语法错误，“⚠️”表示字符有效但具有特殊含义。

<table class="fullwidth-table">
  <thead>
    <tr>
      <th scope="col" rowspan="2">字符</th>
      <th scope="col" colspan="2">在 <code>u</code> 或 <code>v</code> 模式下的外部字符类</th>
      <th scope="col" colspan="2"><code>u</code> 模式字符类</th>
      <th scope="col" colspan="2"><code>v</code> 模式字符类</th>
    </tr>
    <tr>
      <th scope="col">未转义</th>
      <th scope="col">已转义</th>
      <th scope="col">未转义</th>
      <th scope="col">已转义</th>
      <th scope="col">未转义</th>
      <th scope="col">已转义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>123456789&nbsp;"'<br>ACEFGHIJKLMN<br>OPQRTUVXYZ_<br>aceghijklmop<br>quxyz</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tr>
    <tr>
      <td><code>!#%&,:;<=>@`~</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>]</code></td>
      <td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>()[{}</code></td>
      <td>❌</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>*+?</code></td>
      <td>❌</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>/</code></td>
      <td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>0DSWbdfnrstvw</code></td>
      <td>✅</td><td>⚠️</td><td>✅</td><td>⚠️</td><td>✅</td><td>⚠️</td>
    </tr>
    <tr>
      <td><code>B</code></td>
      <td>✅</td><td>⚠️</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tr>
    <tr>
      <td><code>$.</code></td>
      <td>⚠️</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>⚠️</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>-</code></td>
      <td>✅</td><td>❌</td><td>✅⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td>
    </tr>
    <tr>
      <td><code>^</code></td>
      <td>⚠️</td><td>✅</td><td>✅⚠️</td><td>✅</td><td>✅⚠️</td><td>✅</td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>❌⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td>
    </tr>
  </tbody>
</table>

<!--
// 以上表格根据下述代码生成：
const tbl = {};

for (let i = 32; i < 127; i++) {
  const c = String.fromCharCode(i);
  const res = {};
  const allChars = Array.from({ length: 127 }, (_, i) =>
    String.fromCharCode(i),
  );
  function testProp(prop, cr) {
    try {
      const re = cr();
      const chars = allChars.filter((c) => re.test(c));
      if (chars.length !== 1 || chars[0] !== c) res[prop] = "special";
    } catch {
      res[prop] = "error";
    }
  }
  testProp("outLit", () => new RegExp(`^${c}$`, "u"));
  testProp("uInLit", () => new RegExp(`^[${c}]$`, "u"));
  testProp("vInLit", () => new RegExp(`^[${c}]$`, "v"));
  testProp("outEsc", () => new RegExp(`^\\${c}$`, "u"));
  testProp("uInEsc", () => new RegExp(`^[\\${c}]$`, "u"));
  testProp("vInEsc", () => new RegExp(`^[\\${c}]$`, "v"));
  tbl[c] = res;
}

function groupBy(arr, cb, cb2) {
  const groups = { __proto__: null };
  for (const a of arr) {
    const name = cb(a);
    groups[name] ??= "";
    groups[name] += cb2(a);
  }
  return groups;
}

console.log(
  groupBy(
    Object.entries(tbl),
    (p) =>
      ["outLit", "outEsc", "uInLit", "uInEsc", "vInLit", "vInEsc"]
        .map((k) => {
          switch (p[1][k]) {
            case undefined:
              return "✅";
            case "error":
              return "❌";
            case "special":
              return "⚠️";
          }
        })
        .join(""),
    (p) => p[0],
  ),
);
-->

> [!NOTE]
> 在 `v` 模式字符类中，既可转义又可取消转义的字符恰恰是那些被禁止作为“双重标点符号”的字符。更多信息请参阅 [`v` 模式字符类](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_模式字符类)。

当需要精确匹配语法字符时，必须使用反斜杠（`\`）进行[转义](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)。例如，要在模式中匹配字面 `*`，需在模式中写成 `\*`。将语法字符作为字面字符使用会导致意外结果或引发语法错误——例如 `/*/` 不是有效的正则表达式，因为量词前未跟随模式。在[非 Unicode 感知模式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_感知模式)下，若无法将 `]`、`{` 和 `}` 解析为字符类结束符或量词分隔符，则可能直接作为字面字符。这是一种[为 web 兼容性而保留的已废弃的语法](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)，不应依赖它。

正则表达式字面量不能包含某些非语法字面字符。`/` 不能作为字面字符出现在正则表达式字面中，因为 `/` 本身是字面的分隔符。若需匹配字面 `/`，需将其转义为 `\/`。换行符同样不能作为字面字符出现在正则表达式字面中，因为字面不能跨行存在。此时需使用[字符转义](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)（如 `\n`）。使用 {{jsxref("RegExp/RegExp", "RegExp()")}} 构造函数时则无此限制，但字符串字面量有其自身的转义规则（例如 `"\\"` 实际表示单个反斜杠字符，因此 `new RegExp("\\*")` 与 `/\*/` 效果相同）。

在[非 Unicode 感知模式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_感知模式)下，该模式被解释为 [UTF-16 码元](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)序列。这意味着代理对实际上代表两个字符。当与其他特性结合使用时，这会导致意外行为：

```js
/^[😄]$/.test("😄"); // false，因为模式被解释为 /^[\ud83d\udc04]$/
/^😄+$/.test("😄😄"); // false，因为模式被解释为 /^\ud83d\udc04+$/
```

在 Unicode 感知模式中，该模式会被解释为 Unicode 码位序列，且代理对不会被拆分。因此，应始终优先使用 `u` 标志。

## 示例

### 使用字面字符

以下示例摘自[字符转义](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape#使用字符转义)。模式中的 `a` 和 `b` 字符是字面字符，而 `\n` 是转义字符，因为它不能在正则表达式字面量中直接出现。

```js
const pattern = /a\nb/;
const string = `a
b`;
console.log(pattern.test(string)); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)指南
- [正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions)
- [字符转义：`\n`、`\u{...}`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
