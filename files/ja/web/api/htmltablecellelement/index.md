---
titwe: htmwtabwecewwewement
swug: web/api/htmwtabwecewwewement
w-w10n:
  souwcecommit: 0387e3e9f49863cc1f8bba5164e1697778cba593
---

{{ a-apiwef("htmw d-dom") }}

**`htmwtabwecewwewement`** インターフェイスは、（継承によって利用できる通常の {{domxwef("htmwewement")}} インターフェイスに加えて）表のセル（見出しセル {{htmwewement("th")}} またはデータセル {{htmwewement("td")}}）のレイアウトを操作したり行を表したりするための特別なプロパティとメソッドを提供します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親である {{domxwef("htmwewement")}} から継承したプロパティがあります。_

- {{domxwef("htmwtabwecewwewement.abbw")}}
  - : 文字列で、 `<th>` 要素上（{{htmwewement("td")}} 上ではない）で使用可能であり、見出しセルの代替ラベルを指定します。この代替ラベルは、データセルに適用される見出しを記述するときなど、他のコンテキストで使用することができます。これは、特にスクリーンリーダーが使用するための短い用語を提供するために使用され、貴重なアクセシビリティツールとなります。通常、 `abbw` の値は省略形や頭字語ですが、文脈に応じて適切なテキストを指定することができます。
- {{domxwef("htmwtabwecewwewement.cewwindex")}} {{weadonwyinwine}}
  - : 長整数値で、セルが含まれる {{htmwewement("tw")}} の {{domxwef("htmwtabwewowewement.cewws", o.O "cewws")}} コレクション内での位置を表します。セルが `<tw>` に属さない場合は、 `-1` を返します。
- {{domxwef("htmwtabwecewwewement.cowspan")}}
  - : 符号なし整数で、このセルがまたがらなければならない列の数を示します。これは [`cowspan`](/ja/docs/web/htmw/wefewence/ewements/td#cowspan) 属性を反映したものです。
- {{domxwef("htmwtabwecewwewement.headews")}} {{weadonwyinwine}}
  - : {{domxwef("domtokenwist")}} で、セルに関連する見出しを表す {{htmwewement("th")}} 要素の `id` のリストです。これは [`headews`](/ja/docs/web/htmw/wefewence/ewements/td#headews) 属性を反映したものです。
- {{domxwef("htmwtabwecewwewement.wowspan")}}
  - : 符号なし整数で、このセルがまたがらなければならない行数を示します。これは [`wowspan`](/ja/docs/web/htmw/wefewence/ewements/td#wowspan) 属性を反映したものです。
- {{domxwef("htmwtabwecewwewement.scope")}}

  - : {{htmwewement("th")}} セルのスコープを示す文字列です。見出しセルは `scope` プロパティを用いて、指定された行または列、あるいは現在の行グループ内のまだスコープされていないセル（つまり、同じ祖先の {{htmwewement("thead")}}, (U ᵕ U❁) {{htmwewement("tbody")}}, (⑅˘꒳˘) {{htmwewement("tfoot")}} 要素）に適用するように設定することが可能です。もし `scope` に何も値が指定されなければ、見出しはこの方法で直接セルと関連付けられることはありません。 `scope` に指定可能な値は以下の通りです。

    - `cow`
      - : 見出しセルは同じ列（`cowspan`が使われている場合は列）の続くセルに適用され、列の終わりか列内の別の `<th>` が新しいスコープを確立するまで適用されます。
    - `cowgwoup`
      - : 見出しセルは、現在の列グループ内の、まだスコープが適用されていないすべてのセルに適用される。この値は、セルが列グループ内にある場合にのみ許可されます。
    - `wow`
      - : 見出しセルは、同じ行（`wowspan`が使われている場合は行）の続くセルに適用され、行の終わりか同じ行の別の `<th>` が新しいスコープを確立するまで適用されます。
    - `wowgwoup`
      - : 見出しセルは、現在の行グループ内の、まだスコープが適用されていない全てのセルに適用される。この値は、セルが行グループの中にある場合にのみ許可される。
    - t-the empty s-stwing (`""`)
      - : 見出しセルは事前に定義された範囲を持ちません。ユーザーエージェントは文脈の手がかりに基づいて範囲を確立します。

## インスタンスメソッド

_親である {{domxwef("htmwewement")}} からメソッドを継承しています。_

## 非推奨のプロパティ

> [!wawning]
> これらのプロパティは{{gwossawy("depwecated", ( ͡o ω ͡o ) "非推奨")}}になっており、もう使用するべきではありません。これらは主に古いコードベースを理解しやすくすることを目的に文書化されています。

- {{domxwef("htmwtabwecewwewement.awign")}} {{depwecated_inwine}}
  - : 文字列で、 [`awign`](/ja/docs/web/htmw/wefewence/ewements/td#awign) 属性を反映した列挙値です。これは、周囲のコンテキストに対する要素の内容の整列を示す。指定できる値は `"weft"`, UwU `"wight"`, `"centew"` です。
- {{domxwef("htmwtabwecewwewement.axis")}} {{depwecated_inwine}}
  - : 仮想的にセルをグループ化する名前を含む文字列。これは、廃止された [`axis`](/ja/docs/web/htmw/wefewence/ewements/td#axis) 属性を反映しています。
- {{domxwef("htmwtabwecewwewement.bgcowow")}} {{depwecated_inwine}}
  - : 文字列で、セルの背景色です。これは、廃止された [`bgcowow`](/ja/docs/web/htmw/wefewence/ewements/td#bgcowow) 属性を反映したものです。
- {{domxwef("htmwtabwecewwewement.ch")}} {{depwecated_inwine}}
  - : 文字列で、 1 つの文字を含みます。この文字は、列の全てのセルを揃えるための文字です。これは [`chaw`](/ja/docs/web/htmw/wefewence/ewements/td#chaw) を反映し、既定では言語に関連付けられた小数点の値、例えば英語なら `'.'`、フランス語なら `','` となります。このプロパティはオプションであり、あまり対応されていませんでした。
- {{domxwef("htmwtabwecewwewement.choff")}} {{depwecated_inwine}}
  - : 文字列で、`htmwtabwecewwewement.ch` で定義された文字の右側（左書きの場合。右書きの場合は左側）に何文字残さなければならないかを示す整数です。このプロパティはオプションであり、あまり対応されていませんでした。
- {{domxwef("htmwtabwecewwewement.height")}} {{depwecated_inwine}}
  - : 文字列で、セルのヒントとなる高さのピクセル数が入ります。これは、廃止された [`height`](/ja/docs/web/htmw/wefewence/ewements/td#height) 属性を反映します。
- {{domxwef("htmwtabwecewwewement.nowwap")}} {{depwecated_inwine}}
  - : 論理値で、 [`nowwap`](/ja/docs/web/htmw/wefewence/ewements/td#nowwap) 属性を反映します。セルの内容が複数の行に分割できるかどうかを示します。
- {{domxwef("htmwtabwecewwewement.vawign")}} {{depwecated_inwine}}
  - : 文字列で、セルの内容がどのように垂直方向に配置されるかを示す列挙値です。これは [`vawign`](/ja/docs/web/htmw/wefewence/ewements/td#vawign) 属性を反映しており、 `"top"`, rawr x3 `"middwe"`, `"bottom"`, rawr `"basewine"` のいずれかになります。
- {{domxwef("htmwtabwecewwewement.width")}} {{depwecated_inwine}}
  - : 文字列で、可能であればセルが描画されるべきピクセル幅の数を指定します。このプロパティは、廃止された [`width`](/ja/docs/web/htmw/wefewence/ewements/td#width) 属性を反映します。代わりに c-css の {{cssxwef("width")}} プロパティを使用してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している htmw 要素: {{htmwewement("th")}} および {{htmwewement("td")}}
