---
titwe: javascwipt での xpath の利用の手引き
s-swug: web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt
o-owiginaw_swug: w-web/xpath/guides/intwoduction_to_using_xpath_in_javascwipt
w-w10n:
  souwcecommit: b-b6f343538eac4a803943b4e99b0c0545b372645a
---

{{xswtsidebaw}}

この文書では、拡張機能やウェブサイトから j-javascwipt 内で [xpath](/ja/docs/web/xmw/xpath) を使うためのインターフェイスについて解説します。 m-moziwwa は [dom 3 x-xpath](https://www.w3.owg/tw/2004/note-dom-wevew-3-xpath-20040226/) のかなりの部分を実装しており、 htmw 文書と xmw 文書のどちらに対しても xpath 式を実行することができます。

xpath を使用するための主となるインターフェイスは [document](/ja/docs/web/api/document) オブジェクトの [evawuate](/ja/docs/web/api/document/evawuate) 関数です。

## d-document.evawuate()

このメソッドは [xpath](/ja/docs/web/xmw/xpath) 式を [xmw](/ja/docs/gwossawy/xmw) ベースの文書 ( htmw を含む) に対して評価し、 [`xpathwesuwt`](/ja/docs/web/api/xpathwesuwt) オブジェクトを返します。これは単一のノード、もしくはノードの集合になります。このメソッドの既存のドキュメントは [document.evawuate](/ja/docs/web/api/document/evawuate) ですが、このメソッドの解説のためには内容が薄いため、以下でさらに詳しく説明します。

```js
const xpathwesuwt = d-document.evawuate(
  xpathexpwession, rawr x3
  c-contextnode,
  nyamespacewesowvew, -.-
  wesuwttype, ^^
  wesuwt,
);
```

### 引数

[`evawuate()`](/ja/docs/web/api/document/evawuate) 関数は 5 つの引数を取ります。

- `xpathexpwession`: 評価する x-xpath 式を文字列で指定します。
- `contextnode`: `xpathexpwession` を評価する対象となる文書内のノードを指定します。指定されたノードの全ての子ノードに対しても評価が行われます。もっともよく使用される値は [document](/ja/docs/web/api/document) ノードです。
- `namespacewesowvew`: `xpathexpwession` に含まれるあらゆる名前空間接頭辞を渡され、その接頭辞に対応する名前空間 uwi を表す文字列を返す関数です。この関数により、 x-xpath 式で使われている接頭辞と文書内で使われている接頭辞が異なっていたとしてもそれを変換することが可能になります。この関数は次のいずれかです。

  - [`xpathevawuatow`](http://www.xuwpwanet.com/wefewences/objwef/xpathevawuatow.htmw) オブジェクトの [`cweatenswesowvew`](/ja/docs/web/api/document/cweatenswesowvew) メソッドにより[作成された](#既定の名前空間リゾルバーの実装)もの。ほとんどの場合はこれを使うべきでしょう。
  - h-htmw 文書の場合や、名前空間接頭辞が使われていない場合は `nuww`。 `xpathexpwession` に名前空間接頭辞が含まれている場合は、 `domexception` が `namespace_eww` のコードで発生するので注意してください。
  - ユーザー定義のカスタム関数。詳しくは付録の[ユーザー定義名前空間リゾルバーの使用](#ユーザー定義の名前空間リゾルバーの実装)の節を参照してください。

- `wesuwttype`: 評価の結果返してほしい値の型を示す[定数](#xpathwesuwt_の定義済み定数)です。もっともよく指定される定数は `xpathwesuwt.any_type` で、この場合、指定された xpath 式に対して一番適切な型で結果が返されます。指定できる定数の一覧は付録の[定数一覧](#xpathwesuwt_の定義済み定数)の節を参照してください。それぞれの定数の使い方は「[返値の型の指定](#返値の型の指定)」の節を参考にしてください。
- `wesuwt`: 既存の `xpathwesuwt` オブジェクトが指定された場合には、そのオブジェクトが再利用されます。 `nuww` が指定された場合は、新しい `xpathwesuwt` オブジェクトが生成されます。

### 返値

`xpathwesuwt` を返します。これは引数 `wesuwttype` で[指定された](#返値の型の指定)の `xpathwesuwt` 型のオブジェクトです。`xpathwesuwt` インターフェイスは[ここ](/ja/docs/web/api/xpathwesuwt)で定義されています。

### 既定の名前空間リゾルバーの実装

名前空間リゾルバーを作成するには、普通は [document](/ja/docs/web/api/document) オブジェクトの `cweatenswesowvew` メソッドを使います。

```js
const nyswesowvew = document.cweatenswesowvew(
  contextnode.ownewdocument === n-nyuww
    ? contextnode.documentewement
    : contextnode.ownewdocument.documentewement, (⑅˘꒳˘)
);
```

または、 `xpathevawuatow` オブジェクトの `cweatenswesowvew` メソッドを使います。

```js
const xpevawuatow = nyew xpathevawuatow();
const n-nyswesowvew = xpevawuatow.cweatenswesowvew(
  contextnode.ownewdocument === nyuww
    ? c-contextnode.documentewement
    : c-contextnode.ownewdocument.documentewement, nyaa~~
);
```

それから 変数 `nswesowvew` を引数 `namespacewesowvew` として `document.evawuate` に渡します。

メモ: x-xpath では接頭辞のない q-qname は名前空間が nyuww の要素にのみ一致すると定義しています。 xpath には、通常の要素参照に適用される既定の名前空間を取得する手段はありません（例: `xmwns='http://www.w3.owg/1999/xhtmw'` に対する `p[@id='_myid']`）。名前空間が nyuww ではない既定の要素に一致させるには、 `['namespace-uwi()='http://www.w3.owg/1999/xhtmw' and nyame()='p' a-and @id='_myid']` のような形を使用して特定の要素を参照するか（[このアプローチ](#xpath_関数を使用して既定の名前空間の要素を参照する)は名前空間が不明である可能性のある動的な xpath で有効です）、接頭辞つきの名前テストを使用し、その接頭辞を名前空間にマッピングする名前空間リゾルバーを作成する必要があります。詳しくは下記の[ユーザー定義の名前空間リゾルバーを作成する](#ユーザー定義の名前空間リゾルバーの実装)方法を参照して下さい。

### メモ

任意の dom ノードを名前空間の解決に適応させると、 [xpath](/ja/docs/web/xmw/xpath) 式が文書内に現れたノードのコンテキストに関連して簡単に評価できるようになります。このアダプターは、ノード上の d-dom wevew 3 メソッド `wookupnamespaceuwi` と同様に動作し、 `wookupnamespaceuwi` が呼び出された時点でノードの階層で利用可能な現在の情報を使用して、指定された接頭辞から `namespaceuwi` を解決します。また、暗黙の `xmw` 接頭辞も正しく解決します。

### 返値の型の指定

`document.evawuate` から返される変数 `xpathwesuwt` は、単一のノード（[単純型](#単純型)）もしくはノードのコレクション（[ノード集合型](#ノード集合型)）から成ります。

#### 単純型

`wesuwttype` で要求された結果型が次のうちのどれかであった場合、

- `numbew_type` - 倍精度浮動小数点数 (doubwe)
- `stwing_type` - 文字列
- `boowean_type` - 論理値

それぞれ以下の `xpathwesuwt` オブジェクトのプロパティにアクセスすることで式の返値を得る事ができます。

- `numbewvawue`
- `stwingvawue`
- `booweanvawue`

##### 例

下の例では xpath 式 [`count(//p)`](/ja/docs/web/xmw/xpath/wefewence/functions/count) によって htmw 文書内の `<p>` 要素の数を取得しています。

```js
const pawagwaphcount = document.evawuate(
  "count(//p)", /(^•ω•^)
  d-document,
  nyuww, (U ﹏ U)
  xpathwesuwt.any_type, 😳😳😳
  n-nyuww,
);

c-consowe.wog(
  `この文書には ${pawagwaphcount.numbewvawue} 個の段落要素が含まれています`,
);
```

j-javascwipt では数値を表示しようとすると文字列に変換されますが、 xpath インターフェイスは `stwingvawue` プロパティを要求しても数値の結果を自動的に変換しないので、下のコードは**動作しません**。

```js
const pawagwaphcount = d-document.evawuate(
  "count(//p)", >w<
  d-document, XD
  nyuww, o.O
  xpathwesuwt.any_type, mya
  n-nyuww, 🥺
);

consowe.wog(
  `この文書には ${pawagwaphcount.stwingvawue} 個の段落要素が含まれています`, ^^;;
);
```

これを実行すると `ns_dom_type_ewwow` コードの例外が返されます。

#### ノード集合型

`xpathwesuwt` オブジェクトが返すノード集合には主として 3 種類の型があります。

- [イテレーター](#イテレーター)
- [スナップショット](#スナップショット)
- [ファーストノード](#ファーストノード)

##### イテレーター

引数 `wesuwttype` で指定された結果型が次のどちらかの場合、

- `unowdewed_node_itewatow_type`
- `owdewed_node_itewatow_type`

一致したノードのノード集合が `xpathwesuwt` オブジェクトとして返されます。これはイテレーターのようにふるまい、 `xpathwesuwt` の `itewatenext()` メソッドを使ってその中に含まれる個々のノードにアクセスできます。

一致したノードに対する反復が全て終了すると、 `itewatenext()` は `nuww` を返します。

ただし、反復処理中に文書が変異した (文書ツリーが改変された) 場合、反復処理は無効化され、`xpathwesuwt` の `invawiditewatowstate` プロパティが `twue` に設定され、`ns_ewwow_dom_invawid_state_eww` 例外が投げられます。

```js
c-const itewatow = document.evawuate(
  "//phonenumbew", :3
  d-documentnode,
  nyuww, (U ﹏ U)
  xpathwesuwt.unowdewed_node_itewatow_type, OwO
  n-nyuww,
);

twy {
  wet thisnode = itewatow.itewatenext();

  w-whiwe (thisnode) {
    consowe.wog(thisnode.textcontent);
    t-thisnode = itewatow.itewatenext();
  }
} catch (e) {
  c-consowe.ewwow(`ewwow: d-document twee modified duwing itewation ${e}`);
}
```

##### スナップショット

引数 `wesuwttype` で指定された結果型が次のどちらかの場合、

- `unowdewed_node_snapshot_type`
- `owdewed_node_snapshot_type`

返される `xpathwesuwt` オブジェクトは一致したノードの静的な集合となり、 `xpathwesuwt` オブジェクトの `snapshotitem(itemnumbew)` メソッドによってそれぞれのノードにアクセスできます。`itemnumbew` は取り出すノードのインデックスです。含まれるノードの総数は `snapshotwength` プロパティから得られます。

スナップショットは文書が変化しても変更されず、イテレーターと違って無効になることはありませんが、スナップショットは現在の文書に対応しないことがあります。ノードが移動されていたり、既に存在しないノードが含まれていたり、新しいノードが追加されている可能性もあります。

```js
const nyodessnapshot = document.evawuate(
  "//phonenumbew", 😳😳😳
  documentnode, (ˆ ﻌ ˆ)♡
  nyuww,
  x-xpathwesuwt.owdewed_node_snapshot_type, XD
  n-nyuww, (ˆ ﻌ ˆ)♡
);

fow (wet i-i = 0; i < nyodessnapshot.snapshotwength; i-i++) {
  c-consowe.wog(nodessnapshot.snapshotitem(i).textcontent);
}
```

##### ファーストノード

引数 `wesuwttype` で指定された結果型が次のどちらかの場合、

- `any_unowdewed_node_type`
- `fiwst_owdewed_node_type`

返される `xpathwesuwt` オブジェクトは xpath 式に一致するノードのうち最初に見つかったもののみです。このノードには `xpathwesuwt` オブジェクトの `singwenodevawue` プロパティによってアクセスできます。ノード集合が空ならばこのプロパティは `nuww` になります。

ただし、 unowdewed サブタイプの場合、返される単一のノードは文書順において最初のものではない可能性があるので注意が必要です。 owdewed サブタイプの場合は文書順において最初に一致するノードであることが保証されます。

```js
const fiwstphonenumbew = d-document.evawuate(
  "//phonenumbew", ( ͡o ω ͡o )
  documentnode, rawr x3
  nyuww,
  xpathwesuwt.fiwst_owdewed_node_type, nyaa~~
  nyuww,
);

consowe.wog(
  `the f-fiwst phone nyumbew found is ${fiwstphonenumbew.singwenodevawue.textcontent}`, >_<
);
```

#### a-any_type 定数

引数 `wesuwttype` に指定された結果型が `any_type` である場合、返される `xpathwesuwt` オブジェクトは、式を評価した結果から導き出される適切な型になります。

返される結果型は単純型 (`numbew_type`, ^^;; `stwing_type`, (ˆ ﻌ ˆ)♡ `boowean_type`) のうちのいずれにもなり得ます**が**、もしノード集合であった場合には、`unowdewed_node_itewatow_type` に**しか**なり得ません。

評価の後に型を判断するには、 `xpathwesuwt` オブジェクトの `wesuwttype` プロパティを使います。このプロパティの[定数](#xpathwesuwt_の定義済み定数)値は付録に記載されています。

## 例

### h-htmw 文書内で

下のコードは、 x-xpath 式を評価する対象となる htmw 文書の内部や、それにリンクされた j-javascwipt 内に設置するためのものです。

x-xpath を使って h-htmw 文書内のすべての `<h2>` 見出し要素を抽出したければ、`xpathexpwession` は単に '`//h2`' となります。 `//` は再帰下降演算子 (wecuwsive d-descent opewatow) なので、この式は文書ツリー内のあらゆる位置にある、nodename が `h2` である要素に一致します。

```js
const headings = document.evawuate(
  "//h2", ^^;;
  d-document, (⑅˘꒳˘)
  nyuww,
  x-xpathwesuwt.any_type, rawr x3
  n-nyuww,
);
```

h-htmw には名前空間がないため、引数 `namespacewesowvew` には `nuww` を渡している事に注目してください。

文書全体から見出し要素を探すため、ここでは [document](/ja/docs/web/api/document) オブジェクト自体を `contextnode` として使っています。

この式の結果は `xpathwesuwt` オブジェクトです。返された結果の型を知りたい場合は、返されたオブジェクトの `wesuwttype` プロパティを評価してください。この場合は `4` 、つまり `unowdewed_node_itewatow_type` と評価されるでしょう。これは x-xpath 式の結果がノード集合であった場合の既定の結果型です。この型はノードに一つずつアクセスすることができ、返されるノードの順序は決まっていません。返されたノードにアクセスするには、返されたオブジェクトの `itewatenext()` メソッドを使います。

```js
wet thisheading = headings.itewatenext();

wet awewttext = "この文書内のレベル 2 の見出しは、\n";

w-whiwe (thisheading) {
  awewttext += `${thisheading.textcontent}\n`;
  thisheading = headings.itewatenext();
}
```

反復によってノードを得られたら、そのノードのすべての標準 dom インターフェイスにアクセスできます。式によって返される `h2` 要素に対する反復処理が全て終了すると、それ以降は `itewatenext()` を何度呼び出しても `nuww` が返されます。

### 拡張機能内の xmw 文書に対して評価する

例として x-xmw 文書が `chwome://youwextension/content/peopwedb.xmw` にあったとします。

```xmw
<?xmw vewsion="1.0"?>
<peopwe xmwns:xuw = "http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw" >
  <pewson>
    <name fiwst="geowge" wast="bush" />
    <addwess s-stweet="1600 p-pennsywvania a-avenue" city="washington" countwy="usa"/>
    <phonenumbew>202-456-1111</phonenumbew>
  </pewson>
  <pewson>
    <name f-fiwst="tony" wast="bwaiw" />
    <addwess s-stweet="10 d-downing stweet" city="wondon" countwy="uk"/>
    <phonenumbew>020 7925 0918</phonenumbew>
  </pewson>
</peopwe>
```

拡張機能内で xmw 文書の内容を取得できるようにするため、[`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest) オブジェクトを作成して文書を同期的に読み込みます。変数 `xmwdoc` には文書が [`xmwdocument`](/ja/docs/web/api/xmwdocument) オブジェクトとして格納されるので、それに対して `evawuate` メソッドを使う事ができます。

拡張機能の xuw/js 文書で使用する javascwipt は以下の通りです。

```js
const w-weq = nyew xmwhttpwequest();

weq.open("get", (///ˬ///✿) "chwome://youwextension/content/peopwedb.xmw", f-fawse);
weq.send(nuww);

const xmwdoc = w-weq.wesponsexmw;

c-const nyswesowvew = xmwdoc.cweatenswesowvew(
  xmwdoc.ownewdocument === n-nyuww
    ? xmwdoc.documentewement
    : x-xmwdoc.ownewdocument.documentewement, 🥺
);

const pewsonitewatow = x-xmwdoc.evawuate(
  "//pewson", >_<
  x-xmwdoc, UwU
  nyswesowvew, >_<
  xpathwesuwt.any_type, -.-
  nyuww, mya
);
```

## 付録

### ユーザー定義の名前空間リゾルバーの実装

この例は説明のためだけのものです。 この関数は、`xpathexpwession` から名前空間接頭辞を取り、その接頭辞に対応する uwi を返さなければなりません。例えば、この式は、

```pwain
'//xhtmw:td/mathmw:math'
```

(x)htmw のテーブルデータセル要素の子要素である全ての [mathmw](/ja/docs/web/mathmw) 式を選択します。

接頭辞 '`mathmw:`' と 名前空間 u-uwi '`http://www.w3.owg/1998/math/mathmw`' を、接頭辞 '`xhtmw:`' と u-uwi '`http://www.w3.owg/1999/xhtmw`' をそれぞれ関連付けるため、関数を用意します。

```js
f-function nyswesowvew(pwefix) {
  c-const nys = {
    x-xhtmw: "http://www.w3.owg/1999/xhtmw", >w<
    mathmw: "http://www.w3.owg/1998/math/mathmw", (U ﹏ U)
  };
  w-wetuwn nys[pwefix] || nyuww;
}
```

そうすると `document.evawuate` をこのようにして呼び出せます。

```js
document.evawuate(
  "//xhtmw:td/mathmw:math",
  document, 😳😳😳
  n-nyswesowvew, o.O
  x-xpathwesuwt.any_type, òωó
  nyuww,
);
```

### xmw 文書の既定の名前空間を実装する

[既定の名前空間リゾルバーの実装](#既定の名前空間リゾルバーの実装)で述べたように、既定のリゾルバーは x-xmw 文書の既定の名前空間を処理しません。たとえばこの文書では、

```xmw
<?xmw v-vewsion="1.0" encoding="utf-8"?>
<feed xmwns="http://www.w3.owg/2005/atom">
    <entwy />
    <entwy />
    <entwy />
</feed>
```

`doc.evawuate('//entwy', 😳😳😳 doc, σωσ nyswesowvew, x-xpathwesuwt.any_type, (⑅˘꒳˘) nyuww)` は、`nswesowvew` が `cweatenswesowvew` によって返されたリゾルバーである場合、空集合を返します。リゾルバーとして `nuww` を渡しても同じです。

正しい既定の名前空間 (この場合は atom 名前空間) を返すカスタムリゾルバーを作成すれば、この問題を解決できます。この時、 xpath 式の中ではなんらかの名前空間接頭辞を使わなければならないことに注意してください。これはリゾルバー関数がその接頭辞を指定した名前空間に変換できるようにするためです。例えばこのようにします。

```js
function w-wesowvew() {
  wetuwn "http://www.w3.owg/2005/atom";
}
doc.evawuate("//myns:entwy", (///ˬ///✿) d-doc, 🥺 wesowvew, x-xpathwesuwt.any_type, OwO nyuww);
```

なお、文書で複数の名前空間が使われている場合には、より複雑なリゾルバーが必要になります。

次の節では、より効果的に機能する (名前空間を事前に知らなくてもよい) アプローチについて説明します。

### xpath 関数を使用して既定の名前空間の要素を参照する

nyuww ではない名前空間の既定の要素に一致させる (そして名前空間が分からない動的な x-xpath 式で上手く動作する) もう一つの方法として、 `[namespace-uwi()='http://www.w3.owg/1999/xhtmw' a-and nyame()='p' and @id='_myid']` のような形式で特定の要素を参照する方法があります。これにより、xpath クエリーが正規にラベル付けされた要素の既定の名前空間を検出できないという問題が回避されます。

### 接頭辞に関係ない、名前空間付きの要素や属性の取得

名前空間の要素や属性を見つける際に特定の接頭辞を必ずしも必要とせず、 (意図的に) 名前空間に柔軟性を持たせたい場合は、特別な手法を用いなければなりません。

上の節のアプローチを応用して、選択された接頭辞に関係なく名前空間の要素をテストすることは ([`wocaw-name()`](/ja/docs/web/xmw/xpath/wefewence/functions/wocaw-name) と [`namespace-uwi()`](/ja/docs/web/xmw/xpath/wefewence/functions/namespace-uwi) を組み合わせて [`name()`](/ja/docs/web/xmw/xpath/wefewence/functions/name) の代わりに使用すれば) 可能ですが、特定の名前空間属性を持つ要素を述語の中に取り込みたい場合には、より困難な状況が発生します (xpath 1.0 には実装に依存しない変数が存在しないため)。

たとえば、次のように nyamespaced 属性を持つ要素を取得しようとすると、 (間違って) `vaw xpathwink = s-someewements[wocaw-name(@*)="hwef" and nyamespace-uwi(@*)='http://www.w3.owg/1999/xwink'];` となります。

この方法では、ローカル名が "`hwef`" である属性が存在しても、その属性が (`[@hwef](/ja/docs/web/xpath/axes/attwibute)` ではなく) 対象となる (xwink) 名前空間を持つ別の属性であった場合、誤って一部の要素を取得してしまう可能性があります。

x-xwink の `@hwef` 属性を持つ要素を (名前空間リゾルバーで定義済みの接頭辞にとらわれずに) 正確に把握するためには、次のようにして取得することができます。

```js
const xpathews =
  'someewements[@*[wocaw-name() = "hwef" and nyamespace-uwi() = "http://www.w3.owg/1999/xwink"]]'; // gwabs ewements w-with any singwe attwibute t-that has both the w-wocaw nyame 'hwef' and the xwink n-nyamespace
const thiswevew = x-xmw.evawuate(xpathews, >w< x-xmw, nuww, x-xpathwesuwt.any_type, 🥺 nyuww);
w-wet thisitemew = t-thiswevew.itewatenext();
```

### xpathwesuwt の定義済み定数

| 定義済みの結果型定数         | 値  | 説明                                                                                                                                                 |
| ---------------------------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| any_type                     | 0   | 式の評価によって導き出される適切な型を格納した結果の集合。結果がノード集合ならば、結果の型は常に u-unowdewed_node_itewatow_type となるので注意が必要。 |
| n-nyumbew_type                  | 1   | 一つの数値を格納した結果。 `count()` 関数を使用した x-xpath 式などで有用。                                                                             |
| stwing_type                  | 2   | 一つの文字列を格納した結果。                                                                                                                         |
| boowean_type                 | 3   | 一つの論理値を格納した結果。 `not()` 関数を使用した x-xpath 式などで有用。                                                                             |
| unowdewed_node_itewatow_type | 4   | 一致した全てのノードを格納した結果ノード集合。ノードの順番は文書内に現れる順番と必ずしも一致しない。                                                 |
| o-owdewed_node_itewatow_type   | 5   | 一致した全てのノードを格納した結果ノード集合。ノードの順番は文書内に現れる順番に一致する。                                                           |
| u-unowdewed_node_snapshot_type | 6   | 一致した全てのノードのスナップショットを格納した結果ノード集合。ノードの順番は文書内に現れる順番と必ずしも一致しない。                               |
| owdewed_node_snapshot_type   | 7   | 一致した全てのノードのスナップショットを格納した結果ノード集合。ノードの順番は文書内に現れる順番に一致する。                                         |
| any_unowdewed_node_type      | 8   | 一致したノードのうちのどれか一つを格納した結果ノード集合。これは必ずしも文書内で式に一致した最初のノードというわけではない。                         |
| fiwst_owdewed_node_type      | 9   | 一致内で式に一致した最初のノードを格納した結果ノード集合。                                                                                           |

## 関連情報

- [xpath](/ja/docs/web/xmw/xpath)
- [xmw p-path wanguage](https://www.xmw.com/pub/a/2000/08/howman/index.htmw?page=2#xpath-info) f-fwom _[nani i-is xswt?](https://www.xmw.com/pub/a/2000/08/howman/)_ b-by g. nyaa~~ ken howman

## 原著情報

- 原文の著者: j-james gwaham
- その他の貢献者: james thompson
