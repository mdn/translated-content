---
title: "console: group() 静的メソッド"
short-title: group()
slug: Web/API/console/group_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.group()`** 静的メソッドは、[ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)のログに、新たなインライングループを作成します。{{domxref("console/groupEnd_static", "console.groupEnd()")}} を呼び出すまで、以降のすべての出力を 1 段階字下げします。

## 構文

```js-nolint
console.group()
console.group(label)
```

### 引数

- `label` {{optional_inline}}
  - : グループ用のラベルです。

### 返値

なし ({{jsxref("undefined")}})。

## 例

ネストされたグループを使用して関連したメッセージを視覚的に結びつけることで、出力を整理する手助けができます。新しいネストのブロックを作成するには、`console.group()` を呼び出します。`console.groupCollapsed()` メソッドは類似していますが、新しいブロックが折りたたまれており、表示するには、展開ボタンをクリックする必要があります。

現在のグループを終了するには、`console.groupEnd()` を呼び出してください。例えば、以下のようなコードがあったとします。

```js
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");
```

出力は以下のようになります。

![コンソール出力に入れ子になっているメッセージのスクリーンショット。](nesting.png)

詳しくは、[コンソールでのグループの使用](/ja/docs/Web/API/console#コンソールでのグループの使用)（{{domxref("console")}} のドキュメント）をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("console/groupEnd_static", "console.groupEnd()")}}
- {{domxref("console/groupCollapsed_static", "console.groupCollapsed()")}}
- [Microsoft Edge's documentation for `console.group()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#group)
- [Node.js documentation for `console.group()`](https://nodejs.org/docs/latest/api/console.html#consolegrouplabel)
- [Google Chrome's documentation for `console.group()`](https://developer.chrome.com/docs/devtools/console/api/#group)
