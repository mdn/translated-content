---
title: find.find()
slug: Mozilla/Add-ons/WebExtensions/API/find/find
---

{{AddonSidebar()}}

テキストによるタブ内の検索をします。

次のことができます。

- 標準の HTTP(S)ページ、特権ページ(about:debugging など)の検索
- tab id を使って 特定の 1 タブのみ指定。
- ページ内の全 frame
- 大文字・小文字の区別検索、単語単位検索のみ（訳注：正規表現はなし)

デフォルトではマッチ件数ぐらいしか返ってきませんが、タブ内でのより多くの情報を得るため、次のオプションを指定することができます。

- `includeRangeData`
- `includeRectData`

結果を内部的に保持しているため、ハイライト機能は次に上書き`(find()`)されるまで次の関数で起動できます。

- {{WebExtAPIRef("find.highlightResults()")}},

この関数は asynchronous/ 非同期 関数で [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。

## 構文

```js
browser.find.find(
  queryphrase, // string
  options, // optional object
);
```

### Parameters

- `queryphrase`
  - : `string`. 検索語。
- `options`{{optional_inline}}

  - : `object`. An object specifying additional options. It may take any of the following properties, all optional:

    - `tabId`
      - : `integer`. ID of the tab to search. Defaults to the active tab.
    - `caseSensitive`
      - : `boolean`. If true, the search is case-sensitive. Defaults to `false`.
    - `entireWord`
      - : `boolean`. Match only entire words: so "Tok" will not be matched inside "Tokyo". Defaults to `false`.
    - `includeRangeData`
      - : `boolean`. Include range data in the response, which describe where in the page DOM the match was found. Defaults to `false`.
    - `includeRectData`
      - : `boolean`. Include rectangle data in the response, which describes where in the rendered page the match was found. Defaults to `false`.

### Return value

A [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an object containing up to three properties:

- `count`
  - : `integer`. The number of results found.
- `rangeData`{{optional_inline}}

  - : `array`. If `includeRangeData` was given in the `options` parameter, then this property will be included. It is provided as an array of `RangeData` objects, one for each match. `それぞれのRangeData` は DOM ツリー構造をしています。検索語の周りを表示することなどにも使えます。

    次の `rectData`, も同様に配列で `rangeData[i]` と `rectData[i]`は 1 対 1 で対応します。.

    Each `RangeData` contains the following properties:

    - `framePos`
      - : マッチした frame 番号(訳注： iframe ごとで変わる番号). 0 は通常のページ部分で親です。 Note that the order of objects in the `rangeData` array will sequentially line up with the order of frame indexes: for example, `framePos` for the first sequence of `rangeData` objects will be 0, `framePos` for the next sequence will be 1, and so on.
    - `startTextNodePos`
      - : テキスト Node の 開始側 Index（訳注：直接この値を API 一本で活用できないため、下記のサンプルを参照）
    - `endTextNodePos`
      - : テキスト Node の 終端側 Index.
    - `startOffset`
      - : 開始 Node 内の 初めの文字列の位置.
    - `endOffset`
      - : 終端 Node 内の 終わりの文字列の位置

- `rectData`{{optional_inline}}

  - : `array`. 呼び出し時に`optionsで` `includeRectData` 引数を与えると結果を返します。 `RectData` objects の配列です。それらはマッチしたワードを含む、client rectangles を返します。拡張機能でハイライトなどに使えるでしょう。.

    Each `RectData` object はそれぞれ 1 つのマッチに対して 2 つのプロパティを持ちます。

    - `rectsAndTexts`

      - : 1 対 1 の関係となる２つの配列を持ちます:

        - `rectList`: ４つの integer をもつ配列: `top`, `left`, `bottom`, `right`. その位置情報は viewport における左上からの位置です。
        - `textList`: 上記`rectList[i]`に含まれた `textList[i]` (string)を持つ配列です。

        例えば Web ページ上で:

        ![](rects-1.png) "You may"を探すと 2 つの矩形エリアで表現されます。:

        ![](rects-2.png) `RectData` はこのようにマッチし、 `rectsAndTexts.rectList` と `rectsAndTexts.textList`は次のようになります。

        - `textList[0]` = "You ", `rectList[0]` は HTML 上の境界を表す矩形エリアを含みます。
        - `textList[1]` = "may", `rectList[1]`も"may"について同様です。

    - `text`
      - : マッチしたテキスト全体、上の例では"You may"が丸ごと入ります。

## Browser compatibility

{{Compat("webextensions.api.find.find", 10)}}

## Examples

### Basic examples

Search the active tab for "banana", log the number of matches, and highlight them:

```js
function found(results) {
  console.log(`There were: ${results.count} matches.`);
  if (results.count > 0) {
    browser.find.highlightResults();
  }
}

browser.find.find("banana").then(found);
```

Search for "banana" across all tabs (note that this requires the "tabs" [permission](/ja/Add-ons/WebExtensions/manifest.json/permissions), because it accesses `tab.url`):

```js
async function findInAllTabs(allTabs) {
  for (let tab of allTabs) {
    let results = await browser.find.find("banana", { tabId: tab.id });
    console.log(`In page "${tab.url}": ${results.count} matches.`);
  }
}

browser.tabs.query({}).then(findInAllTabs);
```

### Using rangeData

In this example the extension uses `rangeData` to get the context in which the match was found. The context is the complete `textContent` of the node in which the match was found. If the match spanned nodes, the context is the concatenation of the `textContent` of all spanned nodes.

Note that for simplicity, this example doesn't handle pages that contain frames. To support this you'd need to split `rangeData` into groups, one per frame, and execute the script in each frame.

The background script:

```js
// background.js

async function getContexts(matches) {
  // get the active tab ID
  let activeTabArray = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  let tabId = activeTabArray[0].id;

  // execute the content script in the active tab
  await browser.tabs.executeScript(tabId, { file: "get-context.js" });
  // ask the content script to get the contexts for us
  let contexts = await browser.tabs.sendMessage(tabId, {
    ranges: matches.rangeData,
  });
  for (let context of contexts) {
    console.log(context);
  }
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.find.find("example", { includeRangeData: true }).then(getContexts);
});
```

The content script:

```js
/**
 * Get all the text nodes into a single array
 */
function getNodes() {
  let walker = document.createTreeWalker(
    document,
    window.NodeFilter.SHOW_TEXT,
    null,
    false,
  );
  let nodes = [];
  while ((node = walker.nextNode())) {
    nodes.push(node);
  }

  return nodes;
}

/**
 * Gets all text nodes in the document, then for each match, return the
 * complete text content of nodes that contained the match.
 * If a match spanned more than one node, concatenate the textContent
 * of each node.
 */
function getContexts(ranges) {
  let contexts = [];
  let nodes = getNodes();

  for (let range of ranges) {
    let context = nodes[range.startTextNodePos].textContent;
    let pos = range.startTextNodePos;
    while (pos < range.endTextNodePos) {
      pos++;
      context += nodes[pos].textContent;
    }
    contexts.push(context);
  }
  return contexts;
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  sendResponse(getContexts(message.ranges));
});
```

### Using rectData

In this example the extension uses `rectData` to "redact" the matches, by adding black DIVs over the top of their bounding rectangles:

![](redacted.png)Note that in many ways this is a poor way to redact pages.

The background script:

```js
// background.js

async function redact(matches) {
  // get the active tab ID
  let activeTabArray = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  let tabId = activeTabArray[0].id;

  // execute the content script in the active tab
  await browser.tabs.executeScript(tabId, { file: "redact.js" });
  // ask the content script to redact matches for us
  await browser.tabs.sendMessage(tabId, { rects: matches.rectData });
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.find.find("banana", { includeRectData: true }).then(redact);
});
```

The content script:

```js
// redact.js

/**
 * Add a black DIV where the rect is.
 */
function redactRect(rect) {
  var redaction = document.createElement("div");
  redaction.style.backgroundColor = "black";
  redaction.style.position = "absolute";
  redaction.style.top = `${rect.top}px`;
  redaction.style.left = `${rect.left}px`;
  redaction.style.width = `${rect.right - rect.left}px`;
  redaction.style.height = `${rect.bottom - rect.top}px`;
  document.body.appendChild(redaction);
}

/**
 * Go through every rect, redacting them.
 */
function redactAll(rectData) {
  for (match of rectData) {
    for (rect of match.rectsAndTexts.rectList) {
      redactRect(rect);
    }
  }
}

browser.runtime.onMessage.addListener((message) => {
  redactAll(message.rects);
});
```

{{WebExtExamples}}
