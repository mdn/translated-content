---
title: 一般的な XSLT エラー
slug: Web/XML/XSLT/Guides/Common_errors
original_slug: Web/XSLT/Guides/Common_errors
---

{{XsltSidebar}}

### MIME タイプ

サーバーは、XML mime タイプの`text/xml`または`application/xml`のソースとスタイルシートの両方を送信する必要があります。 現在のタイプを調べるには、Mozilla でファイルを読み込み、ページ情報を見てください。 または、ダウンロードツールを使用してください。これらのツールは通常、MIME タイプを示します。

Firefox 6 以降では、公式の XSLT mimetype である `application/xslt+xml`を使用することもできます。

### 名前空間

XSLT 1.0 の名前空間は[`http://www.w3.org/1999/XSL/Transform`](https://www.w3.org/1999/XSL/Transform)です。IE の古いバージョンでは、異なる名前空間が使用されていました。 しかしこれらのバージョンでは、最終的に XSLT 1.0 仕様となったものと互換性のない XSLT のドラフト版も使用されていました。Firefox は公式の XSLT 1.0 バージョンのみをサポートしています。

### 不足している機能

XSLT 1.0 仕様には、Firefox が残念ながらサポートしていない機能がいくつかあります。具体的には：

- XPath 式の`namespace::` 軸。これをサポートすることは将来的に可能になりそうです
- `disable-output-escaping`属性。この機能は構築された出力ドキュメントのシリアル化の仕組みを制御します。しかし、Firefox は出力ドキュメントをシリアル化しないので、属性は実際には適用されません。 `disable-output-escaping`を適用した出力ドキュメントの一部だけをシリアライズして再解析するためのヒューリスティックを追加しようとする可能性がありますが、ヒューリスティックはしばしば間違った結果を招き、これまでこれを追加することを躊躇してきました。スタイルシートに`<xsl:text disable-output-escaping="yes">&nbsp;</xsl:text>`のようなコードが含まれていることがよくあります。これはスタイルシートを入れるだけで、すべての XSLT エンジンでうまく動作します。私たちは、`disable-output-escaping`の欠如が問題であることを認識しています。私たちはそれに対する解決策を見いだしたいと思いますが、これまでのところ、良い解決策は見つかりませんでした。
- `<xsl:namespace-alias>` 要素

上記の機能のいずれかを手助けしたい場合は、大いに助けてください。
