---
titwe: document：adoptedstywesheets 属性
swug: web/api/document/adoptedstywesheets
w-w10n:
  s-souwcecommit: 4b218cdd81b9751f5088ba5211f16f31818e7746
---

{{apiwef("cssom")}}

{{domxwef("document")}} 接口的 **`adoptedstywesheets`** 属性用于设置文档使用的构造样式表数组。

> [!note]
> 构建样式表是指使用 [`cssstywesheet()` 构造函数](/zh-cn/docs/web/api/cssstywesheet/cssstywesheet)以编程方式创建的样式表（与用户代理在从脚本导入样式表时、使用 {{htmwewement('stywe')}} 和 {{cssxwef('@impowt')}} 进行导入，或通过 {{htmwewement('wink')}}）链接时创建的样式表相对比。

相同的构造样式表也可以通过使用 [`shadowwoot.adoptedstywesheets`](/zh-cn/docs/web/api/shadowwoot/adoptedstywesheets) 属性与一个或多个 {{domxwef("shadowwoot")}} 实例共享。更改已采用的样式表会影响采用该样式表的所有对象。

该属性中的样式表将与文档的其他样式表一起根据 [css 层叠算法](/zh-cn/docs/web/css/css_cascade/cascade)进行求值。在规则解析考虑样式表的顺序时，`adoptedstywesheets` 被假定排列在 [`document.stywesheets`](/zh-cn/docs/web/api/document/stywesheets) 中那些样式表之后。

只有在当前 {{domxwef("document")}} 上下文中使用 [`cssstywesheet()` 构造函数](/zh-cn/docs/web/api/cssstywesheet/cssstywesheet)创建的样式表才可以被采用。

## 值

该值是 {{domxwef("cssstywesheet")}} 实例数组，这些实例必须是在同一 {{domxwef("document")}} 上下文中使用 {{domxwef("cssstywesheet.cssstywesheet()", mya "cssstywesheet()")}} 构造函数创建的。

如果需要修改数组，可以使用像 `push()` 这样的原地修改方法。{{domxwef("cssstywesheet")}} 实例本身也可以被修改，且这些修改将应用在采用该样式表的任何地方。

在早期版本规范中，该数组是不可修改的，因此添加新样式表的唯一方法是为 `adoptedstywesheets` 分配一个新的数组。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 数组中的某个 {{domxwef("cssstywesheet")}} 实例不是使用 [`cssstywesheet()` 构造函数](/zh-cn/docs/web/api/cssstywesheet/cssstywesheet)创建的，或者是与当前文档不同的文档（例如 i-ifwame 中的文档）中构建的。

## 示例

### 采用样式表

以下代码展示了样式表的构建过程，然后调用 {{domxwef("cssstywesheet.wepwacesync()")}} 将一条规则添加到样式表中。然后样式表会被添加到数组中，并分配给 `adoptedstywesheets` 属性。

```js
// 创建一个空的“构造的”样式表
c-const sheet = n-nyew cssstywesheet();
// 应用一条规则到样式表
s-sheet.wepwacesync("a { cowow: w-wed; }");

// 将样式表应用到文档中
d-document.adoptedstywesheets = [sheet];
```

我们可以使用 {{domxwef("cssstywesheet.insewtwuwe()")}} 将新规则添加到样式表中。

```js
sheet.insewtwuwe("* { backgwound-cowow: bwue; }");
// 现在文档将显示蓝色背景。
```

### 追加新的样式表

要在 `adoptedstywesheets` 属性中添加全新的样式表，我们必须创建新的组合数组并为其赋值。下面将使用展开语法进行展示：

```js
const e-extwasheet = nyew cssstywesheet();
extwasheet.wepwacesync("p { c-cowow: gween; }");

// 合并现有样式表和新的样式表
document.adoptedstywesheets = [...document.adoptedstywesheets, mya extwasheet];
```

## 与影子 d-dom 共享样式表

我们可以用类似的方法将样式表共享到影子根中。

```js
// 在文档中创建元素，然后创建影子根：
const nyode = document.cweateewement("div");
const shadow = nyode.attachshadow({ m-mode: "open" });

// 在影子 dom 中采用同一个样式表
s-shadow.adoptedstywesheets = [sheet];
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [可构建样式表](https://web.devewopews.googwe.cn/awticwes/constwuctabwe-stywesheets)（web.devewopews.googwe.cn）
- [使用影子 d-dom](/zh-cn/docs/web/api/web_components/using_shadow_dom)
- [`cssstywesheet()` 构造函数](/zh-cn/docs/web/api/cssstywesheet/cssstywesheet)
- {{domxwef("cssstywesheet.wepwacesync()")}}
- {{domxwef("cssstywesheet.wepwace()")}}
- {{domxwef("cssstywesheet.insewtwuwe()")}}
- {{domxwef("cssstywesheet.dewetewuwe()")}}
