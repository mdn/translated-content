---
title: Mozilla JavaScript インターフェイスを使用した XSL 変換
slug: Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations
l10n:
  sourceCommit: f4f8e2f18ccf19a0bee59e1fe78753e276b98232
---

この文書では、 Mozilla 1.2 の JavaScript インターフェイスと XSLT 処理エンジン (TransforMiiX) について説明します。

### XSLTProcessor の作成

まず、 {{domxref("XSLTProcessor")}} オブジェクトを作成する必要があります。

```js
const processor = new XSLTProcessor();
```

### スタイルシートの指定

これを使用するには、 {{domxref("XSLTProcessor.importStylesheet()")}} メソッドを使用してスタイルシートをインポートする必要があります。これには単一の引数があり、インポートする XSLT スタイルシートの DOM ノードを指定します。

> **メモ:** インポートはライブです。つまりインポート後にスタイルシートの DOM を変更すると、処理に反映されます。 DOM を変更するよりも、スタイルシートの引数を使用することが推奨されています。通常より簡単に、より良いパフォーマンスを得ることができます。

```js
const testTransform = document.implementation.createDocument("", "test", null);

// DOM としてスクリプトに変換を取得する例です
// XMLDocument.load は非同期なので、すべての処理が onload ハンドラーで
// 行われる
testTransform.addEventListener("load", onload, false);
testTransform.load("test-transform.xml");
function onload() {
  processor.importStylesheet(testTransform);
}
```

{{domxref("XSLTProcessor.importStylesheet()")}} には引数、つまり DOM ノードが 1 つ必要です。そのノードが文書ノードの場合、完全な XSL Transform または[リテラル結果要素の変換](https://www.w3.org/TR/xslt/#result-element-stylesheet)を渡すことができます。そうでない場合は、 `xsl:stylesheet` または `xsl:transform` 要素でなければなりません。

### 文書の変換

{{domxref("XSLTProcessor.transformToDocument()")}} または {{domxref("XSLTProcessor.transformToFragment()")}} メソッドを使用すると、インポートされた XSLT スタイルシートを使用して文書を変換することができます。

#### transformToDocument

{{domxref("XSLTProcessor.transformToDocument()")}} は変換するソースノードを1つ引数として、変換結果とともに新しい {{domxref("Document")}} を返します。

```js
const newDocument = processor.transformToDocument(domToBeTransformed);
```

結果のオブジェクトはスタイルシートの[出力メソッド](https://www.w3.org/TR/1999/REC-xslt-19991116/#output)に依存します。

- **html** - {{domxref("HTMLDocument")}}
- **xml** - {{domxref("XMLDocument")}}
- **text** - {{domxref("XMLDocument")}} にその子として単一のルート要素 `<transformiix:result>` がついたもの

#### transformToFragment

{{domxref("XSLTProcessor.transformToFragment()")}} を使用することもでき、こちらは {{domxref("DocumentFragment")}} ノードを返します。フラグメントを別のノードに追加すると、そのフラグメントのすべての子が透過的に追加され、フラグメント自体はマージされないため、これは便利です。したがってフラグメントは、完全な文書オブジェクトのオーバーヘッドなしにノードを移動して格納するのに便利です。

{{domxref("XSLTProcessor.transformToFragment()")}} は、変換するソース文書（上記）とフラグメントを所有する {{domxref("Document")}} オブジェクトの 2 つの引数をとります（すべてのフラグメントは文書が所有しなければなりません）。

```js
const ownerDocument = document.implementation.createDocument("", "test", null);
const newFragment = processor.transformToFragment(
  domToBeTransformed,
  ownerDocument,
);
```

{{domxref("XSLTProcessor.transformToFragment()")}} は、所有文書自体が {{domxref("HTMLDocument")}} の場合、またはスタイルシートの出力メソッドが HTML の場合、 HTML DOM オブジェクトを生成します。これは、 {{domxref("XSLTProcessor.transformToFragment()")}} がこの要素の作成に使用されることはほとんど**ない**ので、結果の最上位要素のみが {{HTMLElement("html")}} の場合、 HTML DOM オブジェクトを生成しません。これをオーバーライドする場合は、通常の方法で出力メソッドを通常どおりに設定できます。

#### transforming HTML

残念ながら、XSLT を使用して HTML ノードを変換することは現在サポートされていません。パターンや式で小文字のノード名を使用してノードがnull名前空間にあるかのように扱う場合、いくつかのことが成り立ちますが、これはあまりうまくテストされていないため、すべての状況で機能しない可能性があります。これは将来のリリースで変更される可能性もあります。

しかし XHTML の変換は期待通りに機能するはずです。

### 引数の設定

[スタイルシートの引数](https://www.w3.org/TR/1999/REC-xslt-19991116/#variables)は {{domxref("XSLTProcessor.setParameter()")}}、{{domxref("XSLTProcessor.getParameter()")}}、{{domxref("XSLTProcessor.removeParameter()")}} の各メソッドを使用して制御することができます。これらはすべて {{domxref("XSLTProcessor.setParameter()")}} が設定する引数の値の 3 分の 1 を使用して、名前空間 URI とローカル名を最初の 2 つの引数として取ります。例については、 [Gecko の XSLT/JavaScript インターフェイス](/ja/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/Setting_Parameters)を参照してください。

### リセット

{{domxref("XSLTProcessor")}} オブジェクトは、すべてのスタイルシートと引数を削除してプロセッサーを初期状態に戻すために使用できる {{domxref("XSLTProcessor.reset()")}} メソッドも実装しています。このメソッドは Gecko 1.3 以降で実装されています。

### リソース

以下のものは {{domxref("XSLTProcessor")}} オブジェクトのインターフェイスを反映しています。

- [XSLTProcessor.webidl](https://dxr.mozilla.org/mozilla-central/source/dom/webidl/XSLTProcessor.webidl)
- [txXSLTProcessor.cpp](https://dxr.mozilla.org/mozilla-central/source/dom/xslt/xslt/txXSLTProcessor.cpp)

### 関連情報

- [Gecko の XSLT JavaScript インターフェイス](/ja/docs/Web/XSLT/XSLT_JS_interface_in_Gecko)
- XML 文書の読み込みに関する [document.load()](/ja/docs/Web/API/XMLDocument/load) （上記で使用したもの）

### 原著情報

- 著者: Mike Hearn
- 最終更新日: 2005 年 12 月 21 日
- 著作権情報: Copyright (C) Mike Hearn
