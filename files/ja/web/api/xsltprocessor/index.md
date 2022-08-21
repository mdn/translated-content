---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
tags:
  - API
  - DOM
  - DOM Reference
  - Reference
  - XSLT
translation_of: Web/API/XSLTProcessor
browser-compat: api.XSLTProcessor
---
{{Non-standard_header}}{{SeeCompatTable}}{{APIRef("XSLT")}}

**`XSLTProcessor`** は、[XSLT](/ja/docs/Web/XSLT) スタイルシート変換を XML 文書に適用して、新しい XML 文書を出力として生成します。 XSLT スタイルシートをロードし、`<xsl:param>` 引数の値を操作し、変換処理を文書に適用するメソッドを持っています。

## 構文

コンストラクターに引数はありません。

```js
new XSLTProcessor()
```

## メソッド

- `[Throws] void `{{domxref("XSLTProcessor.importStylesheet")}}`(`{{domxref("Node")}}` styleSheet)`
  - : XSLT スタイルシートをインポートします。指定されたノードがドキュメントノードの場合は、完全な XSL Transform または[リテラルの結果要素の変換](https://www.w3.org/TR/xslt#result-element-stylesheet)を渡すことができます。それ以外の場合は、`<xsl:stylesheet>` または `<xsl:transform>` 要素でなければなりません。
- `[Throws] `{{domxref("DocumentFragment")}} {{domxref("XSLTProcessor.transformToFragment")}}`(`{{domxref("Node")}}` source, `{{domxref("Document")}}` owner)`
  - : {{domxref("XSLTProcessor.importStylesheet()")}} 関数を使用してインポートしたスタイルシートを適用して、ノードソースを変換します。結果として得られる文書フラグメントの文書オーナーは所有者ノードです。
- [`[Throws]`](/ja/docs/Mozilla/WebIDL_bindings#Throws) {{domxref("Document")}} {{domxref("XSLTProcessor.transformToDocument")}}`(`{{domxref("Node")}}` source)`

  - : {{domxref("XSLTProcessor.importStylesheet()")}} 関数を使用してインポートされたスタイルシートを適用して、ノードソースを変換します。

    結果のオブジェクトはスタイルシートの[メソッド出力](https://www.w3.org/TR/xslt#output)に依存します。

    | メソッド出力 | 結果のタイプ                                                                                                   |
    | ------------ | -------------------------------------------------------------------------------------------------------------- |
    | `html`       | {{domxref("HTMLDocument")}}                                                                           |
    | `xml`        | {{domxref("XMLDocument")}}                                                                           |
    | `text`       | {{domxref("XMLDocument")}} と単一のルート要素 `<transformiix:result>` に子としてテキストがついたもの |

- `[Throws] void `{{domxref("XSLTProcessor.setParameter")}}`(`{{jsxref("String")}}` namespaceURI, `{{jsxref("String")}}` localName, any value)`
  - : インポートされた XSLT スタイルシートに引数を設定します。 (`<xsl:param>` の値を設定します)。`namespaceURI` の値が null の場合は、空の文字列と同じように扱われます。
- `[Throws] any `{{domxref("XSLTProcessor.getParameter")}}`(`{{jsxref("String")}}` namespaceURI, `{{jsxref("String")}}` localName)`
  - : XSLT スタイルシートから引数の値を取得します。 `namespaceURI` の値が null の場合は、空の文字列と同じように扱われます。
- `[Throws] void `{{domxref("XSLTProcessor.removeParameter")}}`(`{{jsxref("String")}}` namespaceURI, `{{jsxref("String")}}` localName)`
  - : パラメータが以前に設定されていた場合は削除します。これにより、`XSLTProcessor` はスタイルシートで指定されたパラメータの既定値を使用します。`namespaceURI` の値が null の場合は、空の文字列と同じように扱われます。
- `void `{{domxref("XSLTProcessor.clearParameters()")}}
  - : `XSLTProcessor` からすべての設定パラメータを削除します。 `XSLTProcessor` は XSLT スタイルシートで指定されているデフォルトを使用します。
- `void `{{domxref("XSLTProcessor.reset()")}}
  - : すべてのパラメータとスタイルシートを `XSLTProcessor` から削除します。

## プロパティ

### ウェブで公開されないプロパティ

次のプロパティは [`[ChromeOnly]`](/ja/docs/Mozilla/WebIDL_bindings#ChromeOnly) で、ウェブコンテンツには公開されません。

- `[ChromeOnly] attribute unsigned long `{{domxref("XSLTProcessor.flags")}}

  - : プロセッサの動作を調整するフラグ。{{domxref("XSLTProcessor.reset()")}} を呼び出してもリセットされません。既定値: `0`

    取りうる値は次のとおりです。

    | 名前                | 値  | エフェクト                                                                      |
    | ------------------- | --- | ------------------------------------------------------------------------------- |
    | (None)              | `0` | なし                                                                            |
    | `DISABLE_ALL_LOADS` | `1` | 外部ドキュメントの読み込みを無効にする (例: `<xsl:import>` および `document()`) |

## 例

1.  [基本的な例](/ja/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example)
2.  [高度な例](/ja/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example)
3.  [追加の例](/ja/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/JavaScript_XSLT_Bindings)

## 仕様書

*どの仕様書にも含まれていません。*これは Gecko に由来する独自のインターフェースです。

## Gecko IDL

- `{{ Source("dom/webidl/XSLTProcessor.webidl", "XSLTProcessor.webidl") }}`
- `{{ Source("dom/xslt/nsIXSLTProcessor.idl", "nsIXSLTProcessor.idl") }}`

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Mozilla JavaScript インターフェイスを使用した XSL 変換](/ja/docs/Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations)
