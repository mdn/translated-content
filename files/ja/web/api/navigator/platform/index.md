---
title: "navigator: platform プロパティ"
short-title: platform
slug: Web/API/Navigator/platform
l10n:
  sourceCommit: b10df41c21a9b1359ae173cc59d4417f0f3755da
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

ブラウザーのプラットフォームを表す文字列を返します。仕様書ではブラウザーが常に空文字列を返すことを許可していますので、信頼できる答えを得るためにこのプロパティを頼らないようにしてください。
**`platform`** は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、ユーザーのブラウザーが動作しているプラットフォームを特定する文字列を返します。

> [!NOTE]
> 一般的に、このようなメソッドやプロパティを使用してユーザー環境の情報を探そうとするコードを書くことは可能な限り避け、代わりに[機能検出](/ja/docs/Learn_web_development/Extensions/Testing/Feature_detection)を行うコードを書くべきです。

## 値

ユーザーのブラウザーを実行しているプラットフォームを識別する文字列です。例えば、 `"MacIntel"`, `"Win32"`, `"Linux x86_64"`, `"Linux armv81"` です。

## 例

`navigator.platform` は常に避けて、[機能検出](/ja/docs/Learn_web_development/Extensions/Testing/Feature_detection)を使うべきです。しかし、使用できる選択肢の中で、 `navigator.platform` が最悪の選択肢ではない場合があります。キーボードショートカットの修飾キーが（アップル以外のシステムで使用されている） `⌃` コントロールキーではなく、（アップルのシステムで使用されている） `⌘` コマンドキーであるというアドバイスをユーザーに表示させる必要がある場合です。

```js
let modifierKeyPrefix = "^"; // コントロールキー
if (
  navigator.platform.indexOf("Mac") === 0 ||
  navigator.platform === "iPhone"
) {
  modifierKeyPrefix = "⌘"; // コマンドキー
}
```

つまり、 `navigator.platform` が `"Mac"` で始まるか、または `"iPhone"` と完全に一致するかどうかを調べ、そのいずれかが真であるかどうかによって、ウェブアプリケーションの UI がキーボードショートカットでユーザーに押すようにアドバイスする修飾キーを選びます。

## 使用上のメモ

Windows では、現代のブラウザーは 64 ビット版の Windows で実行していても `"Win32"` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`navigator.userAgentData.platform`](/ja/docs/Web/API/NavigatorUAData/platform)
