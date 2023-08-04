---
title: search.search()
slug: Mozilla/Add-ons/WebExtensions/API/search/search
---

{{AddonSidebar()}}

使用指定的搜索引擎或默认搜索引擎进行搜索。

结果将显示在一个新的选项卡中，或者如果给出了 tabId 参数，则显示在由此标识的选项卡中。

要在扩展程序中使用此功能，您必须要求`"search"` [有明确许可](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

获取安装的搜索引擎，请使用 {{WebExtAPIRef("search.get()")}}.

## 语法

```js
browser.search.search(
  searchProperties, // object
);
```

### 参数

- `searchProperties`

  - : `object`. 拥有以下属性的对象：

    - `query`
      - : `字符串`. 进行查询的内容。
    - `engine`{{optional_inline}}
      - : `字符串。`.搜索引擎的名称。如果指定的搜索引擎名称不存在，该函数将引发错误。如果省略此属性，则使用默认的搜索引擎。
    - `tabId`{{optional_inline}}
      - : 整型。用于显示搜索结果的选项卡。如果省略此属性，搜索结果将显示在新选项卡中。

### 返回值

无。

## 浏览器兼容性

{{Compat}}

## 示例

使用默认搜索引擎进行搜索。结果显示在新选项卡中：

```js
function search() {
  browser.search.search({
    query: "styracosaurus",
  });
}

browser.browserAction.onClicked.addListener(search);
```

使用维基百科进行搜索。结果显示在新选项卡中：

```js
function search() {
  browser.search.search({
    query: "styracosaurus",
    engine: "Wikipedia (en)",
  });
}

browser.browserAction.onClicked.addListener(search);
```

使用维基百科进行搜索。结果将显示在活动选项卡中：

```js
function search(tab) {
  browser.search.search({
    query: "styracosaurus",
    engine: "Wikipedia (en)",
    tabId: tab.id,
  });
}

browser.browserAction.onClicked.addListener(search);
```

{{WebExtExamples}}
