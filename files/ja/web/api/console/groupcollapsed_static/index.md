---
title: "console: groupCollapsed() 静的メソッド"
short-title: groupCollapsed()
slug: Web/API/console/groupCollapsed_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.groupCollapsed()`** 静的メソッドは、ウェブコンソールに新たなインライングループを作成します。 {{domxref("console/group_static", "console.group()")}} とは異なり、新しいグループは折りたたまれた状態で作成されます。グループ内に作成された項目を表示するには、グループの隣にある展開ボタンを使用する必要があります。

親グループに戻るには、{{domxref("console/groupEnd_static", "console.groupEnd()")}} を呼び出します。

詳細および使用例は、[コンソールでのグループの使用](/ja/docs/Web/API/console#コンソールでのグループの使用)（{{domxref("console")}} のドキュメント）をご覧ください。

## 構文

```js-nolint
console.groupCollapsed()
console.groupCollapsed(label)
```

### 引数

- `label` {{Optional_Inline}}
  - : グループのラベルです。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("console/group_static", "console.group()")}}
- {{domxref("console/groupEnd_static", "console.groupEnd()")}}
- [Microsoft Edge's documentation for `console.groupCollapsed()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#groupcollapsed)
- [Node.js documentation for `console.groupCollapsed()`](https://nodejs.org/docs/latest/api/console.html#consolegroupcollapsed)
- [Google Chrome's documentation for `console.groupCollapsed()`](https://developer.chrome.com/docs/devtools/console/api/#groupcollapsed)
