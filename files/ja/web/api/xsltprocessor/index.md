---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
l10n:
  sourceCommit: 9d5430a436abb2816f93935e11e1fa993a59e8ca
---

{{APIRef("XSLT")}}

**`XSLTProcessor`** は、[XSLT](/ja/docs/Web/XSLT) スタイルシート変換を XML 文書に適用して、新しい XML 文書を出力として生成します。 XSLT スタイルシートをロードし、 `<xsl:param>` 引数の値を操作し、変換処理を文書に適用するメソッドを持っています。

## コンストラクター

- {{domxref("XSLTProcessor.XSLTProcessor", "XSLTProcessor()")}}
  - : 新しい `XSLTProcessor` を作成します。

## メソッド

- {{domxref("XSLTProcessor.importStylesheet()")}}
  - : XSLT スタイルシートをインポートします。指定されたノードがドキュメントノードの場合は、完全な XSL Transform または[リテラルの結果要素の変換](https://www.w3.org/TR/xslt#result-element-stylesheet)を渡すことができます。それ以外の場合は、`<xsl:stylesheet>` または `<xsl:transform>` 要素でなければなりません。
- {{domxref("XSLTProcessor.transformToFragment()")}}
  - : {{domxref("XSLTProcessor.importStylesheet()")}} 関数を使用してインポートしたスタイルシートを適用して、ノードソースを変換します。結果として得られる文書フラグメントの文書オーナーは所有者ノードです。
- {{domxref("XSLTProcessor.transformToDocument()")}}

  - : {{domxref("XSLTProcessor.importStylesheet()")}} 関数を使用してインポートされたスタイルシートを適用して、ノードソースを変換します。

    結果のオブジェクトはスタイルシートの[メソッド出力](https://www.w3.org/TR/xslt#output)に依存します。

    | メソッド出力 | 結果の型                                                                                             |
    | ------------ | ---------------------------------------------------------------------------------------------------- |
    | `html`       | {{domxref("HTMLDocument")}}                                                                          |
    | `xml`        | {{domxref("XMLDocument")}}                                                                           |
    | `text`       | {{domxref("XMLDocument")}} と単一のルート要素 `<transformiix:result>` に子としてテキストがついたもの |

- {{domxref("XSLTProcessor.setParameter()")}}
  - : インポートされた XSLT スタイルシートに引数を設定します。 (`<xsl:param>` の値を設定します)。`namespaceURI` の値が null の場合は、空の文字列と同じように扱われます。
- {{domxref("XSLTProcessor.getParameter()")}}
  - : XSLT スタイルシートから引数の値を取得します。 `namespaceURI` の値が null の場合は、空の文字列と同じように扱われます。
- {{domxref("XSLTProcessor.removeParameter()")}}
  - : パラメータが以前に設定されていた場合は削除します。これにより、`XSLTProcessor` はスタイルシートで指定されたパラメータの既定値を使用します。`namespaceURI` の値が null の場合は、空の文字列と同じように扱われます。
- {{domxref("XSLTProcessor.clearParameters()")}}
  - : `XSLTProcessor` からすべての設定パラメータを削除します。 `XSLTProcessor` は XSLT スタイルシートで指定されているデフォルトを使用します。
- {{domxref("XSLTProcessor.reset()")}}
  - : すべてのパラメータとスタイルシートを `XSLTProcessor` から削除します。

## プロパティ

_このインターフェイスにはプロパティがありません。_

## 例

1. [基本的な例](/ja/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example)
2. [高度な例](/ja/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example)
3. [追加の例](/ja/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/JavaScript_XSLT_Bindings)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Mozilla JavaScript インターフェイスを使用した XSL 変換](/ja/docs/Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations)
