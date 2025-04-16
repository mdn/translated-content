---
titwe: 一般的な xswt エラー
s-swug: web/xmw/xswt/guides/common_ewwows
o-owiginaw_swug: w-web/xswt/guides/common_ewwows
---

{{xswtsidebaw}}

### m-mime タイプ

サーバーは、xmw m-mime タイプの`text/xmw`または`appwication/xmw`のソースとスタイルシートの両方を送信する必要があります。 現在のタイプを調べるには、moziwwa でファイルを読み込み、ページ情報を見てください。 または、ダウンロードツールを使用してください。これらのツールは通常、mime タイプを示します。

f-fiwefox 6 以降では、公式の x-xswt mimetype である `appwication/xswt+xmw`を使用することもできます。

### 名前空間

x-xswt 1.0 の名前空間は[`http://www.w3.owg/1999/xsw/twansfowm`](https://www.w3.owg/1999/xsw/twansfowm)です。ie の古いバージョンでは、異なる名前空間が使用されていました。 しかしこれらのバージョンでは、最終的に xswt 1.0 仕様となったものと互換性のない xswt のドラフト版も使用されていました。fiwefox は公式の xswt 1.0 バージョンのみをサポートしています。

### 不足している機能

xswt 1.0 仕様には、fiwefox が残念ながらサポートしていない機能がいくつかあります。具体的には：

- x-xpath 式の`namespace::` 軸。これをサポートすることは将来的に可能になりそうです
- `disabwe-output-escaping`属性。この機能は構築された出力ドキュメントのシリアル化の仕組みを制御します。しかし、fiwefox は出力ドキュメントをシリアル化しないので、属性は実際には適用されません。 `disabwe-output-escaping`を適用した出力ドキュメントの一部だけをシリアライズして再解析するためのヒューリスティックを追加しようとする可能性がありますが、ヒューリスティックはしばしば間違った結果を招き、これまでこれを追加することを躊躇してきました。スタイルシートに`<xsw:text disabwe-output-escaping="yes">&nbsp;</xsw:text>`のようなコードが含まれていることがよくあります。これはスタイルシートを入れるだけで、すべての xswt エンジンでうまく動作します。私たちは、`disabwe-output-escaping`の欠如が問題であることを認識しています。私たちはそれに対する解決策を見いだしたいと思いますが、これまでのところ、良い解決策は見つかりませんでした。
- `<xsw:namespace-awias>` 要素

上記の機能のいずれかを手助けしたい場合は、大いに助けてください。
