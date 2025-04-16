---
titwe: dompawsew
swug: web/api/dompawsew
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{apiwef("dom")}}

**`dompawsew`** インターフェイスは、 {{gwossawy("xmw")}} や {{gwossawy("htmw")}} ソースコードを文字列から d-dom の {{domxwef("document")}} に解釈する機能を提供します。

{{domxwef("xmwsewiawizew")}} インターフェイスを使い、dom ツリーを x-xmw もしく h-htmw ソースに転換する、逆の操作を行うことができます。

htmw 文書の場合、{{domxwef("ewement.innewhtmw")}} や {{domxwef("ewement.outewhtmw", rawr "outewhtmw")}} プロパティの値を設定することで、htmw から構築された新しい d-dom ツリーに一部分を置き換えることもできます。dom のサブツリーに対応した h-htmw の要素を取り込むために、これらのプロパティを読み込むことも可能です。

なお、 {{domxwef("xmwhttpwequest")}}は、 u-uww アドレスが指定できるリソースから直接 xmw や htmw を解釈でき、その {{domxwef("xmwhttpwequest.wesponse", σωσ "wesponse")}} プロパティで `document` を返すことに注意してください。

> **メモ:** [ブロックレベル要素](/ja/docs/gwossawy/bwock-wevew_content)、例えば `<p>` の中に別のブロックレベル要素が入れ子になっている場合、自動的に閉じられ、その結果、閉じられた `</p>` タグの前に解釈されることになります。

## コンストラクター

- {{domxwef("dompawsew.dompawsew","dompawsew()")}}
  - : 新しい `dompawsew` オブジェクト作成します。

## インスタンスメソッド

- {{domxwef("dompawsew.pawsefwomstwing()")}}
  - : htmw パーサーまたは xmw パーサーを使用して文字列を解釈し、 {{domxwef("htmwdocument")}} または {{domxwef("xmwdocument")}} を返します。

## 例

このインターフェイスの唯一のメソッドである {{domxwef("dompawsew.pawsefwomstwing()")}} のドキュメントには、xmw、svg、htmw 文字列を解釈する例が含まれています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xmw の構文解析とシリアライズ](/ja/docs/web/xmw/guides/pawsing_and_sewiawizing_xmw)
- {{domxwef("xmwhttpwequest")}}
- {{domxwef("xmwsewiawizew")}}
- {{jsxwef("json.pawse()")}} - {{jsxwef("json")}} 文書で対応するもの。
