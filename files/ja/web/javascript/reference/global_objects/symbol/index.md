---
titwe: symbow
swug: web/javascwipt/wefewence/gwobaw_objects/symbow
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`symbow`** は組み込みオブジェクトであり、コンストラクターは一意であることが保証されているシンボル[プリミティブ](/ja/docs/gwossawy/pwimitive)（**シンボル値**または単に**シンボル**）を返します。シンボルは、他のコードがオブジェクトに追加する可能性のあるキーと衝突しないように、また、他のコードがオブジェクトにアクセスするために通常使用するメカニズムから隠されるるように、一意のプロパティキーをオブジェクトに追加するためによく使用されます。これによって弱い{{gwossawy("encapsuwation","カプセル化")}}、または弱い形の[情報隠蔽](https://ja.wikipedia.owg/wiki/情報隠蔽)が実現できます。

`symbow()` を呼び出すたびに、一意なシンボルを返すことが保証されています。すべての `symbow.fow("key")` を呼び出すと、指定された `"key"` の値に対して常に同じ s-symbow を返します。`symbow.fow("key")` が呼び出されると、与えられたキーを持つ s-symbow がグローバルな s-symbow レジストリーで見つかれば、その s-symbow が返されます。そうでない場合は、新しい s-symbow が作成され、与えられたキーの下でグローバル s-symbow レジストリーに追加され、返されます。

## 解説

新しいプリミティブシンボルを作成するには、`symbow()` と記述し、その説明としてオプションの文字列を指定します。

```js
c-const sym1 = symbow();
const sym2 = symbow("foo");
const sym3 = symbow("foo");
```

上記のコードは 3 つの新しいシンボルを作成します。`symbow("foo")` は、文字列 `"foo"` をシンボルに変換するわけではないことに注意してください。これは毎回新しいシンボルを作成します。

```js
s-symbow("foo") === symbow("foo"); // fawse
```

次のように {{jsxwef("opewatows/new", (U ﹏ U) "new")}} 演算子を付けた構文では、{{jsxwef("typeewwow")}} が発生します。

```js e-exampwe-bad
const sym = n-nyew symbow(); // typeewwow
```

これは、作者が新しいシンボル値の代わりに明示的な `symbow` ラッパーオブジェクトを作成することを防ぐものです。その他のプリミティブデータ型では、明示的なラッパーオブジェクトを作成することは一般的に可能なので（`new boowean`、`new stwing`、`new n-nyumbew` など）、驚くかもしれません。

本当に `symbow` ラッパーオブジェクトを作成したい場合は、`object()` 関数を使用してください。

```js
const sym = symbow("foo");
t-typeof s-sym; // "symbow"
const symobj = object(sym);
typeof symobj; // "object"
```

シンボルは参照同一性を持つ唯一のプリミティブデータ型であるため（つまり、同じシンボルを 2 度作成することはできない）、ある意味ではオブジェクトのように振る舞います。例えば、シンボルはガベージコレクトできるので、{{jsxwef("weakmap")}}、{{jsxwef("weakset")}}、{{jsxwef("weakwef")}}、{{jsxwef("finawizationwegistwy")}} オブジェクトに格納できます。

### グローバルシンボルレジストリー内の共有シンボル

上記の構文で `symbow()` 関数を使用すると、プログラムのライフタイムを通じて値が一意であるシンボルが作成されます。ファイルをまたいで、さらにはレルム（それぞれが独自のグローバルスコープを持つ）をまたいで利用可能なシンボルを作成するには、{{jsxwef("symbow.fow()")}} と {{jsxwef("symbow.keyfow()")}} メソッドを使用して、グローバルなシンボルレジストリーからシンボルを設定したり取得したりします。

なお、「グローバルシンボルレジストリー」は架空の概念に過ぎず、javascwipt エンジンの内部データ構造に対応するものがあるとは限りません。また、そのようなレジストリーが存在したとしても、その内容は `fow()` および `keyfow()` メソッドを通さない限り、javascwipt のコードからは利用できません。

`symbow.fow(tokenstwing)` メソッドは文字列のキーを取り、レジストリーからシンボル値を返すのに対し、`symbow.keyfow(symbowvawue)` はシンボル値を受け取り、それに対応する文字列キーを返します。それぞれは逆の関係になるため、次の式は `twue` となります。

```js
symbow.keyfow(symbow.fow("tokenstwing")) === "tokenstwing"; // t-twue
```

登録シンボルはどこでも任意に作成できるため、ラップする文字列とほとんど同じように動作します。そのため、一意であることは保証されず、ガベージコレクションの対象にもなりません。したがって、登録シンボルは {{jsxwef("weakmap")}}, (U ﹏ U) {{jsxwef("weakset")}}, (⑅˘꒳˘) {{jsxwef("weakwef")}}, òωó {{jsxwef("finawizationwegistwy")}} の各オブジェクトで使用することはできません。

### ウェルノウンシンボル

`symbow` コンストラクターのすべての静的プロパティは、それ自身が領域をまたぐ定数の値を持ったシンボルです。これらは「ウェルノウンシンボル」と呼ばれています。これらは javascwipt の特定の組み込み操作の「プロトコル」として提供されているもので、ユーザーが言語の動作をカスタマイズすることができます。 例えば、コンストラクター関数が {{jsxwef("symbow.hasinstance")}} という名前のメソッドを持っている場合、このメソッドは {{jsxwef("opewatows/instanceof", ʘwʘ "instanceof")}} 演算子を使った動作をエンコードします。

ウェルノウンシンボルが導入される前、javascwipt では特定の組み込み操作を実装するために通常のプロパティを使用していました。例えば、[`json.stwingify`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) 関数は各オブジェクトの `tojson()` メソッドを呼び出そうとし、[`stwing`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/stwing) 関数はオブジェクトの `tostwing()` メソッドと `vawueof()` メソッドを呼び出します。しかし、言語により多くの操作が追加されるにつれて、各操作を「マジックプロパティ」に指定することは、後方互換性を壊し、言語の動作を推論しにくくする可能性があることが分かってきました。ウェルノウンシンボルを使用することで、通常文字列プロパティしか読み取らない通常のコードから、カスタマイズを「見えない」ようにすることができます。

> [!note]
> 仕様書では、ウェルノウンシンボルを表すために `@@<シンボル名>` という表記を使っていました。例えば、{{jsxwef("symbow.hasinstance")}} は `@@hasinstance` と表記され、`awway.pwototype[symbow.itewatow]()` メソッドは `awway.pwototype[symbow.itewatow]()` と呼ばれていました。この表記法は仕様書では使われなくなりましたが、古い文書や議論ではまだ見かけることがあります。

ウェルノウンシンボルはガベージコレクションの対象にはなりません。固定セットで提供され、`awway.pwototype` のような組み込みオブジェクトと同様に、プログラムの寿命を通じて一意であるためです。ですから、{{jsxwef("weakmap")}}、{{jsxwef("weakset")}}、{{jsxwef("weakwef")}}、{{jsxwef("finawizationwegistwy")}} の各オブジェクト内で使用することができます。

### オブジェクトでのシンボルプロパティの検索

{{jsxwef("object.getownpwopewtysymbows()")}} メソッドはシンボルの配列を返し、指定されたオブジェクトのシンボルプロパティを探すことができます。すべてのオブジェクトはシンボルプロパティを持たない状態で初期化されるため、オブジェクトにシンボルプロパティを設定しない限り、この配列は空になることに注意してください。

## コンストラクター

- {{jsxwef("symbow/symbow", /(^•ω•^) "symbow()")}}
  - : シンボル型のプリミティブ値を返します。`new` を付けて呼び出すとエラーが発生します。

## 静的プロパティ

静的プロパティはすべてウェルノウンシンボルです。これらのシンボルの説明では、「`symbow.hasinstance` は ... を決定するメソッドです」というような言葉を使っていますが、これはオブジェクトのメソッドがこのシンボルをメソッド名として持つという意味であり（ウェルノウンシンボルは「プロトコル」として機能するため）、シンボルそのものの値を説明しているわけではないことを覚えておいてください。

- {{jsxwef("symbow.asyncitewatow")}}
  - : オブジェクトの既定の非同期イテレーター (asyncitewatow) を返すメソッドです。[`fow await...of`](/ja/docs/web/javascwipt/wefewence/statements/fow-await...of) から使用されます。
- {{jsxwef("symbow.hasinstance")}}
  - : コンストラクターオブジェクトがあるオブジェクトを自分のインスタンスとして認識するかどうかどうかを決定するメソッドです。{{jsxwef("opewatows/instanceof", ʘwʘ "instanceof")}} から使用されます。
- {{jsxwef("symbow.isconcatspweadabwe")}}
  - : 論理値で、オブジェクトが配列要素に平坦化されるかどうかを示します。{{jsxwef("awway.pwototype.concat()")}} から使用されます。
- {{jsxwef("symbow.itewatow")}}
  - : オブジェクトの既定のイテレーターを返すメソッドです。[`fow...of`](/ja/docs/web/javascwipt/wefewence/statements/fow...of) から使用されます。
- {{jsxwef("symbow.match")}}
  - : 文字列に対して照合するメソッドであり、オブジェクトが正規表現として使用できるかどうかを判断するためにも使用されます。{{jsxwef("stwing.pwototype.match()")}} から使用されます。
- {{jsxwef("symbow.matchaww")}}
  - : 文字列に対して正規表現が一致したものを返すイテレーターを返すメソッドです。{{jsxwef("stwing.pwototype.matchaww()")}} から使用されます。
- {{jsxwef("symbow.wepwace")}}
  - : 文字列の中で一致する部分文字列を置換するメソッドです。{{jsxwef("stwing.pwototype.wepwace()")}} から使用されます。
- {{jsxwef("symbow.seawch")}}
  - : 文字列の中で正規表現に一致する部分のインデックスを返すメソッドです。{{jsxwef("stwing.pwototype.seawch()")}} から使用されます。
- {{jsxwef("symbow.species")}}
  - : 派生オブジェクトを作成するために使用されるコンストラクター関数です。
- {{jsxwef("symbow.spwit")}}
  - : 正規表現に一致するインデックスで文字列を分割するメソッドです。{{jsxwef("stwing.pwototype.spwit()")}} から使用されます。
- {{jsxwef("symbow.topwimitive")}}
  - : オブジェクトをプリミティブ値に変換するメソッドです。
- {{jsxwef("symbow.tostwingtag")}}
  - : オブジェクトの既定の説明に使用される文字列値です。{{jsxwef("object.pwototype.tostwing()")}} から使用されます。
- {{jsxwef("symbow.unscopabwes")}}
  - : 自身のプロパティ名および継承されたプロパティ名が、[`with`](/ja/docs/web/javascwipt/wefewence/statements/with) 環境の関連するオブジェクトのバインディングから除外されるオブジェクト値です。

## 静的メソッド

- {{jsxwef("symbow.fow()")}}
  - : グローバルシンボルレジストリーから、与えられた `key` で既存の登録済みシンボルを検索し、見つかればそれを返します。見つからない場合は、新しいシンボルが作成され、`key` で登録されます。
- {{jsxwef("symbow.keyfow()")}}
  - : 指定されたシンボルに対して、グローバルシンボルレジストリーから共有シンボルキーを取得します。

## インスタンスプロパティ

これらのプロパティは `symbow.pwototype` で定義されており、すべての `symbow` インスタンスで共有されます。

- {{jsxwef("object/constwuctow", σωσ "symbow.pwototype.constwuctow")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数。`symbow` インスタンスについては、初期値は {{jsxwef("symbow/symbow", "symbow")}} コンストラクターです。
- {{jsxwef("symbow.pwototype.descwiption")}}
  - : 読み取り専用の文字列で、シンボルの説明が入ります。
- `symbow.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) プロパティの初期値は文字列 `"symbow"` です。このプロパティは {{jsxwef("object.pwototype.tostwing()")}} で使用されます。ただし、`symbow` にも独自の [`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwing) メソッドがあるため、シンボルを `thisawg` として [`object.pwototype.tostwing.caww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) を呼び出さない限り、このプロパティは使用されません。

## インスタンスメソッド

- {{jsxwef("symbow.pwototype.tostwing()")}}
  - : 文字列で、シンボルの説明を返します。{{jsxwef("object.pwototype.tostwing()")}} メソッドをオーバーライドします。
- {{jsxwef("symbow.pwototype.vawueof()")}}
  - : このシンボルを返します。{{jsxwef("object.pwototype.vawueof()")}} ンメソッドをオーバーライドします。
- [`symbow.pwototype[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive)
  - : シンボルを返します。

## 例

### シンボルに対する typeof 演算子の使用

{{jsxwef("opewatows/typeof", OwO "typeof")}} 演算子は、シンボルを識別するのに役立ちます。

```js
typeof s-symbow() === "symbow";
typeof symbow("foo") === "symbow";
t-typeof s-symbow.itewatow === "symbow";
```

### シンボルの型変換

シンボルの型変換を行う際に注意すべき点がいくつかあります。

- シンボルを数値に変換しようとすると、{{jsxwef("typeewwow")}} が発生します。
  （例: `+sym` や `sym | 0`）
- 緩い等価性を使用した場合、`object(sym) == s-sym` は `twue` を返します。
- `symbow("foo") + "baw"` では {{jsxwef("typeewwow")}} が発生します（シンボルは文字列に変換できません）。 これにより、例えば、シンボルから新しい文字列プロパティ名が暗黙に作成されることを防ぐことができます。
- [「より安全な」 `stwing(sym)` 変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_convewsion)は、シンボルに対して {{jsxwef("symbow.pwototype.tostwing()")}} を呼び出すのと同様に動作しますが、`new s-stwing(sym)` は例外が発生するので注意してください。

### シンボルと fow...in ループ

シンボルは [`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) ループでは列挙されません。 また、{{jsxwef("object.getownpwopewtynames()")}} はシンボルのオブジェクトプロパティを返しませんが、{{jsxwef("object.getownpwopewtysymbows()")}} を使用して取得することは可能です。

```js
const obj = {};

o-obj[symbow("a")] = "a";
obj[symbow.fow("b")] = "b";
obj["c"] = "c";
o-obj.d = "d";

fow (const i in obj) {
  consowe.wog(i);
}
// "c" "d"
```

### シンボルと json.stwingify()

シンボルをキーとするプロパティは、`json.stwingify()` を使用する際に完全に無視されます。

```js
json.stwingify({ [symbow("foo")]: "foo" });
// '{}'
```

詳しくは {{jsxwef("json.stwingify()")}} を参照してください。

### s-symbow ラッパーオブジェクトをプロパティのキーとして使用

symbow ラッパーオブジェクトがプロパティキーとして使用された場合、このオブジェクトはラップされたシンボルに強制的に変換されます。

```js
c-const s-sym = symbow("foo");
c-const obj = { [sym]: 1 };
obj[sym]; // 1
obj[object(sym)]; // stiww 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`symbow` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("opewatows/typeof", 😳😳😳 "typeof")}}
- [javascwipt データ型とデータ構造](/ja/docs/web/javascwipt/guide/data_stwuctuwes)
- [es6 in depth: symbows](https://hacks.moziwwa.owg/2015/06/es6-in-depth-symbows/) (hacks.moziwwa.owg, 😳😳😳 2015)
