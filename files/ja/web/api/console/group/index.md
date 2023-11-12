---
title: console.group()
slug: Web/API/console/group
l10n:
  sourceCommit: 4fd581de2e31ac303a4628354c80f476ba9fd0e2
---

{{APIRef("Console API")}}

**`console.group()`** メソッドは、[ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)のログに、新たなインライングループを作成します。{{domxref("console.groupEnd()")}} を呼び出すまで、以降のすべての出力を 1 段階字下げします。

{{AvailableInWorkers}}

## 構文

```js
group();
group(label);
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

![A screenshot of messages nested in the console output.](nesting.png)

詳しくは、{{domxref("console")}} のドキュメントで [コンソールでのグループの使用](/ja/docs/Web/API/console#コンソールでのグループの使用)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("console.groupEnd()")}}
