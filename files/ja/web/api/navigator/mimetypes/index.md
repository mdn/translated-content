---
title: "Navigator: mimeTypes プロパティ"
short-title: mimeTypes
slug: Web/API/Navigator/mimeTypes
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ ApiRef("HTML DOM") }}{{deprecated_header}}

{{domxref("MimeTypeArray")}} オブジェクトを返します。このオブジェクトには、ブラウザーが認識し対応している MIME タイプを表す {{domxref("MimeType")}} オブジェクトのリストが含まれています。
この配列を使用して、指定した形式のファイルを処理するために使用できる有効なプラグインに関する情報を取得することができます。
返されたオブジェクトの名前付きプロパティは列挙できません（非常に古いバージョンのブラウザーを除く）。

最近のバージョンの仕様では、返される MIME タイプの設定がハードコードされています。
PDF ファイルがインラインで表示できる場合は、`application/pdf` と `text/pdf` が掲載されています。
それ以外の場合は、空のリストが返されます。

> [!NOTE]
> PDF ファイルのインライン表示が対応しているかどうかを判断するには、{{domxref("Navigator.pdfViewerEnabled")}} を使用してください。このプロパティから推測しないでください。

古いバージョンのブラウザーでは、プロパティによって返されたリストがハードコードされておらず、他にも MIME タイプを返す可能性があります。

## 値

`MimeTypeArray` オブジェクトには、 `length` プロパティのほか、`item(index)` および `namedItem(name)` メソッドがあります。

PDF のインライン表示に対応している場合、MIME タイプ `application/pdf` と `text/pdf` の項目があります。
それ以外の場合は、空の `MimeTypeArray` が返されます。
有効なプラグインが対応する説明とファイル拡張子は、それぞれ'pdf' と 'Portable Document Format' にハードコードされています。

## 例

下記コードは、PDF ファイルがインラインで表示できるかどうかをテストし、その後、プラグインの説明と対応しているファイル拡張子を出力します。

```js
if ("application/pdf" in navigator.mimeTypes) {
  // ブラウザーが PDF ファイルのインライン表示に対応しています。

  const { description, suffixes } = navigator.mimeTypes["application/pdf"];
  console.log(`Description: ${description}, Suffix: ${suffixes}`);
  // 予想される結果: Description: Portable Document Format, Suffix: pdf
}
```

上記のコードでは `application/pdf` をテストしていますが、同様に `text/pdf` を調べてもよいことに注意してください。（どちらの MIME タイプも true になります。）
さらに、現在のブラウザーでは、プラグインの説明と拡張子を取得する必要はありません。なぜなら、この情報もハードコードされているからです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
