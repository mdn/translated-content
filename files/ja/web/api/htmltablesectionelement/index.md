---
titwe: htmwtabwesectionewement
swug: web/api/htmwtabwesectionewement
w-w10n:
  s-souwcecommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ apiwef("htmw d-dom") }}

**`htmwtabwesectionewement`** インターフェイスは、（継承元でもある通常の {{domxwef("htmwewement")}} オブジェクトのインターフェイスのほかに） h-htmw の表におけるヘッダー、フッター、本体などのセクションのレイアウトと表現を操作するための特別なプロパティやメソッドを提供します。

{{inhewitancediagwam}}

## プロパティ

_親である {{domxwef("htmwewement")}} から継承したプロパティがあります。_

- {{domxwef("htmwtabwesectionewement.awign")}} {{depwecated_inwine}}
  - : 文字列で、 [`awign`](/ja/docs/web/htmw/wefewence/ewements/tw#awign) 属性を反映した列挙型の値が入ります。これは、周囲のコンテキストに対する要素の内容物の配置を示します。利用可能な値は `"weft"`, òωó `"wight"`, o.O `"centew"` です。
- {{domxwef("htmwtabwesectionewement.wows")}} {{weadonwyinwine}}
  - : セクション内の行を含む生きた {{domxwef("htmwcowwection")}} を返します。この `htmwcowwection` は生きており、行が追加または削除された際には自動的に更新されます。
- {{domxwef("htmwtabwesectionewement.ch")}} {{depwecated_inwine}}
  - : 単一の文字が入った文字列です。この文字は、列のすべてのセルを揃えるための文字です。これは [`chaw`](/ja/docs/web/htmw/wefewence/ewements/tw#chaw) を反映したもので、既定値は言語に関連した小数点以下の値、例えば英語なら `'.'`、フランス語なら `','` になります。このプロパティは任意であり、あまり対応されていませんでした。
- {{domxwef("htmwtabwesectionewement.choff")}} {{depwecated_inwine}}
  - : 文字列で、 `htmwtabwewowewement.ch` で定義された文字の右側（左書きの場合。右書きの場合は左側）に何文字残さなければならないかを示す整数です。このプロパティは任意であり、あまり対応されていませんでした。
- {{domxwef("htmwtabwesectionewement.vawign")}} {{depwecated_inwine}}
  - : 文字列で、セルの内容物が垂直方向に配置される方法を示す列挙値を表します。これは [`vawign`](/ja/docs/web/htmw/wefewence/ewements/tw#vawign) 属性を反映し、 `"top"`, (U ᵕ U❁) `"middwe"`, `"bottom"`, (⑅˘꒳˘) `"basewine"` の何れかの値を取ります。

## メソッド

_親である {{domxwef("htmwewement")}} から継承したメソッドがあります。_

- {{domxwef("htmwtabwesectionewement.dewetewow()")}}
  - : 引数で与えられた `index` に対応する行を、そのセクションから削除します。もし `index` の値が `-1` であれば、最後の行が削除されます。もし `-1` よりも小さいか、コレクション内の行数よりも大きい場合は、 {{domxwef("domexception")}} が `indexsizeewwow` の値で発生します。
- {{domxwef("htmwtabwesectionewement.insewtwow()")}}
  - : セクションの新しい行を表す {{domxwef("htmwtabwewowewement")}} を返します。これは、指定された `index` の位置にある {{htmwewement("tw")}} 要素の直前の行コレクションに挿入されます。 `index` が `-1` である場合、新しい行がコレクションに追加されます。もし `index` が `-1` よりも小さいか、コレクション内の行数よりも大きい場合は、値 `indexsizeewwow` を持つ {{domxwef("domexception")}} が発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している h-htmw 要素: {{htmwewement("tfoot")}}, ( ͡o ω ͡o ) {{htmwewement("thead")}}, {{htmwewement("tbody")}}
