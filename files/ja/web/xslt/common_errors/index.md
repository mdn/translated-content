---
title: 一般的な XSLT エラー
slug: Web/XSLT/Common_errors
tags:
  - XSLT
translation_of: Web/XSLT/Common_errors
---
<h3 id="MIME_タイプ">MIME タイプ</h3>

<p>サーバーは、XML mimeタイプの<code>text/xml</code>または<code>application/xml</code>のソースとスタイルシートの両方を送信する必要があります。 現在のタイプを調べるには、Mozillaでファイルを読み込み、ページ情報を見てください。 または、ダウンロードツールを使用してください。これらのツールは通常、MIMEタイプを示します。</p>

<p>Firefox 6以降では、公式のXSLT mimetypeである <code>application/xslt+xml</code>を使用することもできます。</p>

<h3 id="名前空間">名前空間</h3>

<p>XSLT 1.0 の名前空間は<code><a class="external external-icon" href="http://www.w3.org/1999/XSL/Transform" rel="freelink">http://www.w3.org/1999/XSL/Transform</a></code>です。IEの古いバージョンでは、異なる名前空間が使用されていました。 しかしこれらのバージョンでは、最終的に XSLT 1.0 仕様となったものと互換性のない XSLT のドラフト版も使用されていました。Firefox は公式の XSLT 1.0 バージョンのみをサポートしています。</p>

<h3 id="不足している機能">不足している機能</h3>

<p>XSLT 1.0仕様には、Firefoxが残念ながらサポートしていない機能がいくつかあります。具体的には：</p>

<ul>
 <li>XPath式の<code>namespace::</code> 軸。これをサポートすることは将来的に可能になりそうです</li>
 <li><code>disable-output-escaping</code>属性。この機能は構築された出力ドキュメントのシリアル化の仕組みを制御します。しかし、Firefoxは出力ドキュメントをシリアル化しないので、属性は実際には適用されません。 <code>disable-output-escaping</code>を適用した出力ドキュメントの一部だけをシリアライズして再解析するためのヒューリスティックを追加しようとする可能性がありますが、ヒューリスティックはしばしば間違った結果を招き、これまでこれを追加することを躊躇してきました。スタイルシートに<code>&lt;xsl:text disable-output-escaping="yes"&gt;&amp;nbsp;&lt;/xsl:text&gt;</code>のようなコードが含まれていることがよくあります。これはスタイルシートを入れるだけで、すべてのXSLTエンジンでうまく動作します。私たちは、<code>disable-output-escaping</code>の欠如が問題であることを認識しています。私たちはそれに対する解決策を見いだしたいと思いますが、これまでのところ、良い解決策は見つかりませんでした。</li>
 <li><code>&lt;xsl:namespace-alias&gt;</code> 要素</li>
</ul>

<p>上記の機能のいずれかを手助けしたい場合は、大いに助けてください。</p>
