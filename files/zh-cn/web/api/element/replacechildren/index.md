---
title: Element.replaceChildren()
slug: Web/API/Element/replaceChildren
---

{{APIRef("DOM")}}{{seecompattable}}

**`Element.replaceChildren()`** 方法将一个 {{domxref("Node")}} 的后代替换为指定的后代集合。这些新的后代可以为 {{domxref("DOMString")}} 或 {{domxref("Node")}} 对象。

## 语法

```plain
// [Throws, Unscopable]
Element.replaceChildren(...nodesOrDOMStrings) // 返回 undefined
```

### 参数

- `nodesOrDOMStrings`
  - : 一组用于替换 `Element` 现有后代的 {{domxref("Node")}} 或 {{domxref("DOMString")}} 对象。若没有指定替代对象时，`Element` 的所有后代都将被清空。

### 异常

- {{domxref("HierarchyRequestError")}}: 当违反了[节点树的约束条件](https://dom.spec.whatwg.org/#concept-node-tree)时抛出。

## 示例

### 清空一个节点

`replaceChildren()` 为清空一个节点的后代提供了非常方便的机制，您只需在父节点不指定任何实参调用该方法即可。

```js
myNode.replaceChildren();
```

### 在父节点之间转移节点

`replaceChildren()` 允许您更轻松地在父节点之间转移节点，而无需依赖冗余的循环代码。例如，有一个简单的应用程序让您选择您派对上的食物。它的 HTML 可能如下：

```html
<h2>派对食物列表</h2>

<main>
  <div>
    <label for="no">不，谢谢了！</label>

    <select id="no" multiple size="10">
      <option>苹果</option>
      <option>橘子</option>
      <option>葡萄</option>
      <option>香蕉</option>
      <option>奇异果</option>
      <option>巧克力饼干</option>
      <option>花生饼干</option>
      <option>巧克力棒</option>
      <option>火腿三明治</option>
      <option>乳酪三明治</option>
      <option>沙拉三明治</option>
      <option>冰淇淋</option>
      <option>果冻</option>
      <option>胡萝卜和鹰嘴豆泥</option>
      <option>玛格丽特披萨</option>
      <option>腊肠比萨</option>
      <option>素比萨</option>
    </select>
  </div>

  <div class="buttons">
    <button id="to-yes">转移到"是" --&gt;</button>
    <button id="to-no">&lt;-- 转移到 "否"</button>
  </div>

  <div>
    <label for="yes">是的，请！</label>

    <select id="yes" multiple size="10"></select>
  </div>
</main>
```

使用一些简单的 CSS 将两个选择列表排成一行，并将控制按钮放置在它们之间是很有意义的：

```css
main {
  display: flex;
}

div {
  margin-right: 20px;
}

label,
button {
  display: block;
}

.buttons {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

select {
  width: 200px;
}
```

我们要做的是，当按下“是”按钮时，将“否”列表中的所有选定选项都转移到“是”列表中，然后当按下“否”按钮时，将“是”列表中的所有选定选项都转移到“否”列表中。

为此，我们为每个按钮提供一个 click 事件处理句柄，该事件句柄将所选选项赋值到第一个常量中，将要转移到的列表中的现有的选项赋值到第二个常量中。然后，它会调用列表的 `replaceChildren()` 方法，使用延展运算符传入两个常量，进而将两个常量中包含的所有选项转移到目标列表。

```js
const noSelect = document.getElementById("no");
const yesSelect = document.getElementById("yes");
const noBtn = document.getElementById("to-no");
const yesBtn = document.getElementById("to-yes");

yesBtn.addEventListener("click", () => {
  const selectedTransferOptions =
    document.querySelectorAll("#no option:checked");
  const existingYesOptions = document.querySelectorAll("#yes option");
  yesSelect.replaceChildren(...selectedTransferOptions, ...existingYesOptions);
});

noBtn.addEventListener("click", () => {
  const selectedTransferOptions = document.querySelectorAll(
    "#yes option:checked",
  );
  const existingNoOptions = document.querySelectorAll("#no option");
  noSelect.replaceChildren(...selectedTransferOptions, ...existingNoOptions);
});
```

最终结果如下：

{{EmbedLiveSample('在父节点之间转移节点', '100%', '350')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element")}} and {{domxref("ChildNode")}}
- {{domxref("Element.prepend()")}}
- {{domxref("Element.append()")}}
- {{domxref("NodeList")}}
