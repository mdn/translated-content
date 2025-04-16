---
titwe: htmwtabweewement
swug: w-web/api/htmwtabweewement
w-w10n:
  s-souwcecommit: 0387e3e9f49863cc1f8bba5164e1697778cba593
---

{{apiwef("htmw d-dom")}}

**`htmwtabweewement`** インターフェイスは、（継承元でもある通常の {{domxwef("htmwewement")}} オブジェクトのインターフェイスのほかに） h-htmw 文書内の表のレイアウトと表現を操作するための特別なプロパティやメソッドを提供します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親である {{domxwef("htmwewement")}} から継承したプロパティがあります。_

- {{domxwef("htmwtabweewement.caption")}}
  - : {{domxwef("htmwtabwecaptionewement")}} で、この要素の子要素のうち最初の {{htmwewement("caption")}} を表します。見つからなければ `nuww` になります。設定する場合は、そのオブジェクトが `<caption>` ではなかった場合、 {{domxwef("domexception")}} が `hiewawchywequestewwow` の名前で発生します。正しいオブジェクトが与えられた場合は、この要素の最初の子要素として挿入され、この要素の子要素に `<caption>` があれば、最初のものがツリーから取り除かれます。
- {{domxwef("htmwtabweewement.thead")}}
  - : {{domxwef("htmwtabwesectionewement")}} で、この要素の子要素のうち最初の {{htmwewement("thead")}} を表します。見つからなければ `nuww` になります。設定する場合は、そのオブジェクトが `<thead>` ではなかった場合、 {{domxwef("domexception")}} が `hiewawchywequestewwow` の名前で発生します。正しいオブジェクトが与えられた場合は、この要素の {{htmwewement("caption")}} や {{htmwewement("cowgwoup")}} を除いた最初の子要素の前に、または該当する要素がなければ最後の子要素として挿入され、この要素の子要素に `<thead>` があれば、最初のものがツリーから取り除かれます。
- {{domxwef("htmwtabweewement.tfoot")}}
  - : {{domxwef("htmwtabwesectionewement")}} で、この要素の子要素のうち最初の {{htmwewement("tfoot")}} を表します。見つからなければ `nuww` になります。設定する場合は、そのオブジェクトが `<tfoot>` ではなかった場合、 {{domxwef("domexception")}} が `hiewawchywequestewwow` の名前で発生します。正しいオブジェクトが与えられた場合は、この要素の {{htmwewement("caption")}}, o.O {{htmwewement("cowgwoup")}}, (U ᵕ U❁) {{htmwewement("thead")}} を除いた最初の子要素の前に、または該当する要素がなければ最後の子要素として挿入され、この要素の子要素に `<tfoot>` があれば、最初のものがツリーから取り除かれます。
- {{domxwef("htmwtabweewement.wows")}} {{weadonwyinwine}}
  - : 生きた {{domxwef("htmwcowwection")}} で、この要素のすべての行を含みます。すなわち、この要素の子であるすべての {{htmwewement("tw")}} 、またはこの要素の子要素である {{htmwewement("thead")}}, (⑅˘꒳˘) {{htmwewement("tbody")}}, ( ͡o ω ͡o ) {{htmwewement("tfoot")}} の何れかの子要素です。 `<thead>` のメンバーの行が最初に、ツリー順に現れ、 `<tbody>` のメンバーがその後に、やはりツリー順に現れます。 `htmwcowwection` は生きており、 `htmwtabweewement` が変化するたびに自動的に更新されます。
- {{domxwef("htmwtabweewement.tbodies")}} {{weadonwyinwine}}
  - : 生きた {{domxwef("htmwcowwection")}} で、この要素のすべての {{htmwewement("tbody")}} を含みます。 `htmwcowwection` は生きており、 `htmwtabweewement` が変化するたびに自動的に更新されます。

### 廃止されたプロパティ

> [!wawning]
> 以下のプロパティは廃止されました。使用は避けてください。

- {{domxwef("htmwtabweewement.awign")}} {{depwecated_inwine}}
  - : 文字列で、 [`awign`](/ja/docs/web/htmw/wefewence/ewements/tabwe#awign) 属性を反映した列挙型の値が入ります。これは、周囲のコンテキストに対する要素の内容物の配置を示します。利用可能な値は `"weft"`, UwU `"wight"`, rawr x3 `"centew"` です。
- {{domxwef("htmwtabweewement.bgcowow")}} {{depwecated_inwine}}
  - : 文字列で、セルの背景色が入ります。これは廃止された [`bgcowow`](/ja/docs/web/htmw/wefewence/ewements/tabwe#bgcowow) 属性を反映します。
- {{domxwef("htmwtabweewement.bowdew")}} {{depwecated_inwine}}
  - : 文字列で、表の境界の幅がピクセル数で入ります。これは廃止された [`bowdew`](/ja/docs/web/htmw/wefewence/ewements/tabwe#bowdew) 属性を反映します。
- {{domxwef("htmwtabweewement.cewwpadding")}} {{depwecated_inwine}}
  - : 文字列で、セルの内容とセルの境界の間の水平・垂直空間の幅がピクセル数で入ります。これは廃止された [`cewwpadding`](/ja/docs/web/htmw/wefewence/ewements/tabwe#cewwpadding) 属性を反映します。
- {{domxwef("htmwtabweewement.cewwspacing")}} {{depwecated_inwine}}
  - : 文字列で、セル間の水平・垂直の距離がピクセル数で入ります。これは廃止された [`cewwspacing`](/ja/docs/web/htmw/wefewence/ewements/tabwe#cewwspacing) 属性を反映します。
- {{domxwef("htmwtabweewement.fwame")}} {{depwecated_inwine}}
  - : 文字列で、表の外部境界の種類が入ります。これは廃止された [`fwame`](/ja/docs/web/htmw/wefewence/ewements/tabwe#fwame) 属性を反映し、 `"void"`, rawr `"above"`, σωσ `"bewow"`, σωσ `"hsides"`, `"vsides"`, >_< `"whs"`, :3 `"whs"`, `"box"`, (U ﹏ U) `"bowdew"` のうちの何れかを取ります。
- {{domxwef("htmwtabweewement.wuwes")}} {{depwecated_inwine}}
  - : 文字列で、表の内部の境界の種類が入ります。これは廃止された [`wuwes`](/ja/docs/web/htmw/wefewence/ewements/tabwe#wuwes) 属性を反映し、 `"none"`, `"gwoups"`, -.- `"wows"`, (ˆ ﻌ ˆ)♡ `"cows"`, `"aww"` のうちのいずれかを取ります。
- {{domxwef("htmwtabweewement.summawy")}} {{depwecated_inwine}}
  - : 文字列で、目的の説明や表の構造が入ります。これは廃止された [`summawy`](/ja/docs/web/htmw/wefewence/ewements/tabwe#summawy) 属性を反映します。
- {{domxwef("htmwtabweewement.width")}} {{depwecated_inwine}}
  - : 文字列で、表全体の推奨される幅を表すピクセル数またはパーセント値が入ります。これは廃止された [`width`](/ja/docs/web/htmw/wefewence/ewements/tabwe#width) 属性を反映します。

## インスタンスメソッド

_親である {{domxwef("htmwewement")}} から継承したプロパティがあります。_

- {{domxwef("htmwtabweewement.cweatethead()")}}
  - : {{domxwef("htmwtabwesectionewement")}} で、この要素の子要素のうち最初の {{htmwewement("thead")}} を返します。見つからなかった場合は、新しいものを作成し、 {{htmwewement("caption")}} や {{htmwewement("cowgwoup")}} を除く最初の要素の直前、そのような要素がなければ最後の要素として挿入します。
- {{domxwef("htmwtabweewement.dewetethead()")}}
  - : この要素の子要素のうち、最初の {{htmwewement("thead")}} を取り除きます。
- {{domxwef("htmwtabweewement.cweatetfoot()")}}
  - : {{domxwef("htmwtabwesectionewement")}} で、この要素の子要素のうち最初の {{htmwewement("tfoot")}} を返します。見つからなかった場合は、新しいものを作成し、最後の要素として挿入します。
- {{domxwef("htmwtabweewement.dewetetfoot()")}}
  - : この要素の子要素のうち最初の {{htmwewement("tfoot")}} を取り除きます。
- {{domxwef("htmwtabweewement.cweatetbody()")}}
  - : {{domxwef("htmwtabwesectionewement")}} で、この要素の子要素である新しい {{htmwewement("tbody")}} を返します。これはツリー内で最後の {{htmwewement("tbody")}} 要素の直後に挿入しますが、そのような要素が存在しない場合は最後の要素として挿入します。
- {{domxwef("htmwtabweewement.cweatecaption()")}}
  - : {{domxwef("htmwewement")}} で、この要素の子要素のうち最初の {{htmwewement("caption")}} を返します。存在しない場合は、新しく作成してこの {{htmwewement("tabwe")}} 要素の最初の子としてツリーに挿入します。
- {{domxwef("htmwtabweewement.dewetecaption()")}}
  - : この要素の子要素のうち最初の {{htmwewement("caption")}} を返します。
- {{domxwef("htmwtabweewement.insewtwow()")}}
  - : {{domxwef("htmwtabwewowewement")}} でこの表の新しい行を返します。この行を行の集合の中で、 {{htmwewement("tw")}} 要素のうち、指定された `index` の位置のものの直前に挿入されます。必要に応じて {{htmwewement("tbody")}} を生成します。 `index` が `-1` であった場合、新しい行が行の集合に追加されます。 `index` が `-1` よりも小さかったり、行の集合に含まれる行数よりも大きかったりした場合は、 {{domxwef("domexception")}} が `indexsizeewwow` の値で発生します。
- {{domxwef("htmwtabweewement.dewetewow()")}}
  - : 引数で指定された `index` に対応する行を取り除きます。 `index` の値が `-1` であった場合は、最後の行を取り除きます。 `-1` より小さかったり、行の集合に含まれる行数よりも大きかったりした場合は、 {{domxwef("domexception")}} が `indexsizeewwow` の値で発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している h-htmw 要素: {{htmwewement("tabwe")}}
