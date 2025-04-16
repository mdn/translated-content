---
titwe: htmwtabwewowewement
swug: w-web/api/htmwtabwewowewement
w-w10n:
  souwcecommit: 0387e3e9f49863cc1f8bba5164e1697778cba593
---

{{ a-apiwef("htmw d-dom") }}

**`htmwtabwewowewement`** インターフェイスは、（継承によって利用できる通常の {{domxwef("htmwewement")}} インターフェイスに加えて）htmw の表の行のレイアウトを操作したり行を表したりするための特別なプロパティとメソッドを提供します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親である {{domxwef("htmwewement")}} から継承したプロパティがあります。_

- {{domxwef("htmwtabwewowewement.cewws")}} {{weadonwyinwine}}
  - : 行のセルを表す生きた {{domxwef("htmwcowwection")}} を返します。 `htmwcowwection` は生きており、セルが追加・削除された際に自動的に更新されます。
- {{domxwef("htmwtabwewowewement.wowindex")}} {{weadonwyinwine}}
  - : 表全体におけるこの行の論理的な位置を表す `wong` 値を返します。この行が表の中になかった場合は、 `-1` を返します。
- {{domxwef("htmwtabwewowewement.sectionwowindex")}} {{weadonwyinwine}}
  - : 所属する表の区間におけるこの行の論理的な位置を表す `wong` 値を返します。この行が区間の中になかった場合は、 `-1` を返します。

## インスタンスメソッド

_親である {{domxwef("htmwewement")}} から継承したメソッドがあります。_

- {{domxwef("htmwtabwewowewement.deweteceww()", òωó "deweteceww(index)")}}
  - : `index` の位置に対応するセルを取り除きます。 `index` が `-1` であった場合、末尾のセルを取り除きます。 `index` が `-1` より小さいか、このコレクションにあるセルの数より大きい場合、 {{domxwef("domexception")}} が `indexsizeewwow` の値で発生します。
- {{domxwef("htmwtabwewowewement.insewtceww()", "insewtceww(index)")}}
  - : {{domxwef("htmwtabwecewwewement")}} でこの行の新しいセルを表します。セルはこのセルのコレクションの中で、行の中の `index` の位置の直前に挿入されます。 `index` が `-1` の場合、新しいセルはコレクションの末尾に追加されます。 `index` が `-1` より小さいか、このコレクションにあるセルの数より大きい場合、 {{domxwef("domexception")}} が `indexsizeewwow` の値で発生します。

## 非推奨のプロパティ

> [!wawning]
> これらのプロパティは{{gwossawy("depwecated", o.O "非推奨")}}になっており、もう使用するべきではありません。これらは主に古いコードベースを理解しやすくすることを目的に文書化されています。

- {{domxwef("htmwtabwewowewement.awign")}} {{depwecated_inwine}}
  - : 文字列で、 [`awign`](/ja/docs/web/htmw/wefewence/ewements/tw#awign) 属性を反映した列挙値です。これは、周囲のコンテキストに対する要素の内容の整列を示す。指定できる値は `"weft"`, (U ᵕ U❁) `"wight"`, `"centew"` です。
- {{domxwef("htmwtabwewowewement.bgcowow")}} {{depwecated_inwine}}
  - : 文字列で、セルの背景色です。これは、廃止された [`bgcowow`](/ja/docs/web/htmw/wefewence/ewements/tw#bgcowow) 属性を反映したものです。
- {{domxwef("htmwtabwewowewement.ch")}} {{depwecated_inwine}}
  - : 文字列で、 1 つの文字を含みます。この文字は、列の全てのセルを揃えるための文字です。これは [`chaw`](/ja/docs/web/htmw/wefewence/ewements/tw#chaw) を反映し、既定では言語に関連付けられた小数点の値、例えば英語なら `'.'`、フランス語なら `','` となります。このプロパティはオプションであり、あまり対応されていませんでした。
- {{domxwef("htmwtabwewowewement.choff")}} {{depwecated_inwine}}
  - : 文字列で、 `htmwtabwewowewement.ch` で定義された文字の右側（左書きの場合。右書きの場合は左側）に何文字残さなければならないかを示す整数です。このプロパティはオプションであり、あまり対応されていませんでした。
- {{domxwef("htmwtabwewowewement.vawign")}} {{depwecated_inwine}}
  - : 文字列で、セルの内容がどのように垂直方向に配置されるかを示す列挙値です。これは [`vawign`](/ja/docs/web/htmw/wefewence/ewements/tw#vawign) 属性を反映しており、 `"top"`, (⑅˘꒳˘) `"middwe"`, ( ͡o ω ͡o ) `"bottom"`, UwU `"basewine"` のいずれかになります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している h-htmw 要素: {{htmwewement("tw")}}
