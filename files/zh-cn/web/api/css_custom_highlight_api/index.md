---
title: CSS 自定义高亮 API
slug: Web/API/CSS_Custom_Highlight_API
---

{{DefaultAPISidebar("CSS Custom Highlight API")}}

CSS 自定义高亮 API 提供了一种方法，可以通过使用 JavaScript 创建范围并使用 CSS 定义样式来设置文档中任意文本范围的样式。

## 概念与用法

在网页上设置文本范围样式非常有用。例如，文本编辑类的 Web 应用程序会突出显示拼写或语法错误，代码编辑器会突出显示语法错误。

CSS 自定义高亮 API 通过提供一种创建任意 {{domxref('Range')}} 对象并设置其样式的方法（而不是局限于浏览器定义的范围），扩展了其他高亮伪元素的概念，例如 {{cssxref('::selection')}}、{{cssxref('::spelling-error')}}、{{cssxref('::grammar-error')}} 和 {{cssxref('::target-text')}}。

使用 CSS 自定义高亮 API，你可以通过编程方式创建文本范围并高亮显示它们，而不会影响页面中的 DOM 结构。

使用 CSS 自定义高亮 API 设置网页上文本范围的样式有四个步骤：

1. 创建 {{domxref("Range")}} 对象。
2. 为这些范围创建 {{domxref("Highlight")}} 对象。
3. 使用 {{domxref("HighlightRegistry")}} 进行注册。
4. 使用 {{cssxref("::highlight", "::highlight()")}} 伪元素定义高亮样式。

### 创建范围

第一步是使用 JavaScript 创建 {{domxref("Range")}} 对象，标明你想设置样式的文本范围。例如：

```js
const parentNode = document.getElementById("foo");

const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);
```

### 创建高亮

第二步是为你的文本范围实例化 {{domxref("Highlight")}} 对象

多个范围可以关联到一个高亮显示。如果你希望以相同的方式高亮显示多个文本片段，只需要创建一个高亮并使用相应的范围初始化它。

```js
const highlight = new Highlight(range1, range2);
```

但你也可以根据需要创建任意多的高亮。例如，如果你正在构建一个协作文本编辑器，其中每个用户获得不同的文本颜色，那么你可以为每个用户创建一个高亮显示，如下所示：

```js
const user1Highlight = new Highlight(user1Range1, user1Range2);
const user2Highlight = new Highlight(user2Range1, user2Range2, user2Range3);
```

每个高亮可以设置不同的样式。

### 注册高亮

创建高亮显示后，使用 {{domxref("HighlightRegistry")}} 将其注册为 {{domxref("CSS.highlights")}}。

注册表是一个类 {{jsxref("Map")}} 对象，用于通过名称注册高亮，如下所示：

```js
CSS.highlights.set("user-1-highlight", user1Highlight);
CSS.highlights.set("user-2-highlight", user2Highlight);
```

在上面的代码片段中，`user-1-highlight` 和 `user-2-highlight` 是自定义标识符，用于将 CSS 中的样式应用到已注册的高亮显示上。

你可以在注册表中注册任意数量的高亮显示，也可以删除高亮显示并清除整个注册表。

```js
// 从注册表中删除一个高亮显示。
CSS.highlights.delete("user-1-highlight");

// 清除注册表。
CSS.highlights.clear();
```

### 高亮样式

最后一步是为已注册高亮显示设置样式。可以使用 {{cssxref("::highlight", "::highlight()")}} 伪元素来完成。例如，为上一步注册的 `user-1-highlight` 设置高亮样式：

```css
::highlight(user-1-highlight) {
  background-color: yellow;
  color: black;
}
```

## 接口

- {{domxref("Highlight")}}
  - : 此接口用于表示要在文档上设置样式的范围集合。
- {{domxref("HighlightRegistry")}}
  - : 可以通过 {{domxref("CSS.highlights")}} 访问，类 {{jsxref("Map")}} 对象用于使用自定义标识符注册高亮显示。

## 示例

### 高亮显示搜索结果

本示例展示了如何使用 CSS 自定义高亮 API 高亮显示搜索结果。

#### HTML

下面的 HTML 代码片段定义了一个搜索框和有几段文字的文章：

```html
<label>Search within text <input id="query" type="text" /></label>
<article>
  <p>
    Maxime debitis hic, delectus perspiciatis laborum molestiae labore,
    deleniti, quam consequatur iure veniam alias voluptas nisi quo. Dolorem
    eaque alias, quo vel quas repudiandae architecto deserunt quidem, sapiente
    laudantium nulla.
  </p>
  <p>
    Maiores odit molestias, necessitatibus doloremque dolor illum reprehenderit
    provident nostrum laboriosam iste, tempore perferendis! Ab porro neque esse
    voluptas libero necessitatibus fugiat, ex, minus atque deserunt veniam
    molestiae tempora? Vitae.
  </p>
  <p>
    Dolorum facilis voluptate eaque eius similique ducimus dignissimos assumenda
    quos architecto. Doloremque deleniti non exercitationem rerum quam alias
    harum, nisi obcaecati corporis temporibus vero sapiente voluptatum est
    quibusdam id ipsa.
  </p>
</article>
```

#### JavaScript

使用 JavaScript 监听搜索框上的 `input` 事件，当事件触发，这段代码将在文章的文本中为输入文本查找匹配项。然后它创建匹配的范围，并使用 CSS 自定义高亮 API 创建并注册一个 `search-results` 高亮对象：

```js
const query = document.getElementById("query");
const article = document.querySelector("article");

// Find all text nodes in the article. We'll search within
// these text nodes.
const treeWalker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT);
const allTextNodes = [];
let currentNode = treeWalker.nextNode();
while (currentNode) {
  allTextNodes.push(currentNode);
  currentNode = treeWalker.nextNode();
}

// Listen to the input event to run the search.
query.addEventListener("input", () => {
  // If the CSS Custom Highlight API is not supported,
  // display a message and bail-out.
  if (!CSS.highlights) {
    article.textContent = "CSS Custom Highlight API not supported.";
    return;
  }

  // Clear the HighlightRegistry to remove the
  // previous search results.
  CSS.highlights.clear();

  // Clean-up the search query and bail-out if
  // if it's empty.
  const str = query.value.trim().toLowerCase();
  if (!str) {
    return;
  }

  // Iterate over all text nodes and find matches.
  const ranges = allTextNodes
    .map((el) => {
      return { el, text: el.textContent.toLowerCase() };
    })
    .map(({ text, el }) => {
      const indices = [];
      let startPos = 0;
      while (startPos < text.length) {
        const index = text.indexOf(str, startPos);
        if (index === -1) break;
        indices.push(index);
        startPos = index + str.length;
      }

      // Create a range object for each instance of
      // str we found in the text node.
      return indices.map((index) => {
        const range = new Range();
        range.setStart(el, index);
        range.setEnd(el, index + str.length);
        return range;
      });
    });

  // Create a Highlight object for the ranges.
  const searchResultsHighlight = new Highlight(...ranges.flat());

  // Register the Highlight object in the registry.
  CSS.highlights.set("search-results", searchResultsHighlight);
});
```

#### CSS

最后，在 CSS 中使用 `::highlight()` 伪元素来设置高亮样式。

```css
::highlight(search-results) {
  background-color: #f06;
  color: white;
}
```

#### 结果

结果如下所示。在输入框中输入文本就可以显示高亮匹配了：

{{ EmbedLiveSample('高亮显示搜索结果', 700, 300) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 自定义高亮 API：Web 高亮文本范围的未来](https://css-tricks.com/css-custom-highlight-api-early-look/)
