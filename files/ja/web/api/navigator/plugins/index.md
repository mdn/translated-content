---
title: "Navigator: plugins プロパティ"
short-title: plugins
slug: Web/API/Navigator/plugins
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

アプリケーションにインストールされているプラグインを記述した {{DOMxRef("Plugin")}} オブジェクトが含まれている {{DOMxRef("PluginArray")}} オブジェクトを返します。
返されたオブジェクトの名前付きプロパティは列挙できません（非常に古いバージョンのブラウザーを除く）。

最近のバージョンの仕様では、返されるリストがハードコードされています。
PDF ファイルのインライン表示に対応している場合、プロパティには 5 つの標準プラグインが掲載されています。
インライン PDF 表示に対応していない場合は、空のリストが返されます。

> [!NOTE]
> PDF ファイルのインライン表示に対応しているかどうかを判断するには、{{domxref("Navigator.pdfViewerEnabled")}} を使用してください。このプロパティから推測しないでください。
>
> 「5 つの標準プラグイン」とは、開発者がインライン PDF 表示の機能検出に使用できる最も一般的なプラグインです。
> これらのプロパティを返すことで、古いコードでもインライン表示が対応しているかどうかをより確実に判断することができます。
> ただし、このプロパティは将来的に削除される可能性があるため、新しいコードではこの手法は推奨されません。

古いバージョンのブラウザーには、Adobe Flash のプラグインや PDF ビューアーの拡張機能も含まれます。

## 値

`plugins` は、名前付きまたはアイテムのリストとして {{DOMxRef("Plugin")}} オブジェクトにアクセスするために使用する {{DOMxRef("PluginArray")}} オブジェクトです。

返値は JavaScript の配列ではありませんが、`length` プロパティを持っており、ブラケット記法 (`plugins[2]`) を使用して個々のアイテムにアクセスできるほか、`item(index)` や `namedItem("name")` メソッド経由でもアクセスできます。

PDF のインライン表示に対応している場合、次のプラグインの項目が格納されます。

- "PDF Viewer"
- "Chrome PDF Viewer"
- "Chromium PDF Viewer"
- "Microsoft Edge PDF Viewer"
- "WebKit built-in PDF"

PDF のインライン表示に対応していない場合は、空オブジェクトが返されます。

## 例

このコードは、PDFファイルをインラインで表示させることができるかどうかを調べる方法を示しています。

```js
if ("PDF Viewer" in navigator.plugins) {
  // ブラウザーが PDF ファイルのインライン表示に対応している
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
