---
title: console.groupCollapsed()
slug: Web/API/console/groupCollapsed
l10n:
  sourceCommit: 4fd581de2e31ac303a4628354c80f476ba9fd0e2
---

{{APIRef("Console API")}}

**`console.groupCollapsed()`** メソッドは、ウェブコンソールに新たなインライングループを作成します。 {{domxref("console.group()")}} とは異なり、新しいグループは折りたたまれた状態で作成されます。グループ内に作成された項目を表示するには、グループの隣にある展開ボタンを使用する必要があります。

親グループに戻るには、{{domxref("console.groupEnd()")}} を呼び出します。

詳細および使用例は {{domxref("console")}} のドキュメントで、[コンソールでのグループの使用](/ja/docs/Web/API/console#コンソールでのグループの使用) をご覧ください。

{{AvailableInWorkers}}

## 構文

```js
groupCollapsed();
groupCollapsed(label);
```

### 引数

- `label`
  - : グループのラベルです。省略可能です。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
