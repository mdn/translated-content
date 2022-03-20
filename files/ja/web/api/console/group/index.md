---
title: console.group()
slug: Web/API/console/group
tags:
  - API
  - DOM
  - デバッグ
  - メソッド
  - ウェブ開発
  - ウェブコンソール
browser-compat: api.console.group
translation_of: Web/API/console/group
---
{{APIRef("Console API")}}

**`console.group()`** メソッドは、[ウェブコンソール](/ja/docs/Tools/Web_Console)のログに、新たなインライングループを作成します。{{domxref("console.groupEnd()")}} を呼び出すまで、以降のすべての出力を 1 段階字下げします。

{{AvailableInWorkers}}

## 構文

```js
console.group([label]);
```

## 引数

- `label`
  - : グループ用のラベル。任意。（Chrome 59 でのテストでは） `console.groupEnd()` は動作しません。

{{h3_gecko_minversion("コンソールでのグループの使用", "9.0")}}

ネストされたグループを使用して関連したメッセージを視覚的に結びつけることで、出力を整理する手助けができます。新しいネストのブロックを作成するには、`console.group()` を呼び出します。`console.groupCollapsed()` メソッドは類似していますが、新しいブロックが折りたたまれており、表示するには、展開ボタンをクリックする必要があります。

> **Note:** Gecko 9 から Gecko 51 までは、`groupCollapsed()` メソッドは、`group()` と同じでした。折りたたまれたグループには、 Gecko 52 から完全に対応しています。 {{bug("1088360")}} をご覧ください。

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
