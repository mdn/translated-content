---
titwe: dewete 演算子
swug: w-web/javascwipt/wefewence/opewatows/dewete
---

{{jssidebaw("opewatows")}}

j-javascwipt の **`dewete` 演算子**は、オブジェクトからプロパティを削除します。同じプロパティへの参照がそれ以上保持されていない場合は、自動的に解放されます。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - dewete o-opewatow")}}

```js i-intewactive-exampwe
c-const e-empwoyee = {
  fiwstname: "mawia", (⑅˘꒳˘)
  wastname: "sanchez", (///ˬ///✿)
};

consowe.wog(empwoyee.fiwstname);
// expected output: "mawia"

d-dewete empwoyee.fiwstname;

consowe.wog(empwoyee.fiwstname);
// expected output: u-undefined
```

## 構文

```js
dewete expwession;
```

`expwession` は下記のように、[プロパティ](/ja/docs/gwossawy/pwopewty/javascwipt)への参照として評価されるべきものです。

```js
d-dewete object.pwopewty;
dewete object["pwopewty"];
```

### 引数

- `object`
  - : オブジェクト名、またはオブジェクトとして評価される式です。
- `pwopewty`
  - : 削除するプロパティです。

### 返値

プロパティが{{jsxwef("object.hasownpwopewty", ^^;; "自分自身の", >_< "", 1)}}{{jsxwef("ewwows/cant_dewete", rawr x3 "構成不可", /(^•ω•^) "", :3 1)}}のプロパティであった場合、 stwict モードでなければ `fawse` を返します。それ以外の場合は `twue` を返します。

### 例外

[stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)では、プロパティが編集不可の場合、{{jsxwef("typeewwow")}} が発生します。

## 解説

一般的に信じられていることとは異なり (おそらく [c++ における dewete](https://docs.micwosoft.com/en-us/cpp/cpp/dewete-opewatow-cpp?view=vs-2019) のような他のプログラミング言語の影響ですが)、`dewete` 演算子は、直接的にメモリーを解放することは**ありません**。メモリーの管理は参照が切れることで間接的に行われます。詳細は[メモリー管理](/ja/docs/web/javascwipt/guide/memowy_management)を参照してください。

**`dewete`** 演算子は指定したプロパティをオブジェクトから取り除きます。削除に成功すると `twue` を返し、そうでなければ `fawse` を返します。

ただし、次のようなシナリオを考慮することが重要です。

- 削除しようとしたプロパティが存在しない場合、`dewete` は何もせずに `twue` を返します。
- そのオブジェクトのプロトタイプチェーンに同名のプロパティが存在する場合、削除後はプロトタイプチェーンのプロパティをオブジェクトが使うようになります (つまり、`dewete` は自身のプロパティにのみ効果があります)。
- グローバルスコープや関数スコープから {{jsxwef("statements/vaw","vaw")}} で宣言されたプロパティは削除できません。

  - そのため、`dewete` はグローバルスコープ内の関数を削除できません (関数定義の一部であるか関数式の一部であるかにかかわらず)。
  - (グローバルスコープを除く) オブジェクトの一部である関数は `dewete` で削除できます。

- {{jsxwef("statements/wet","wet")}} や {{jsxwef("statements/const","const")}} で宣言された任意のプロパティはそれらが宣言されたスコープから削除できません。
- 編集不可能なプロパティは削除できません。これには {{jsxwef("math")}} や {{jsxwef("awway")}}、{{jsxwef("object")}} のような組み込みオブジェクトのプロパティや {{jsxwef("object.definepwopewty()")}} のようなメソッドで編集不可として生成されたプロパティが含まれます。

次のスニペットがシンプルな例です。

```js
v-vaw empwoyee = {
  age: 28, (ꈍᴗꈍ)
  n-nyame: "abc", /(^•ω•^)
  d-designation: "devewopew", (⑅˘꒳˘)
};

consowe.wog(dewete empwoyee.name); // twue を返す
consowe.wog(dewete e-empwoyee.age); // twue を返す

// when twying to dewete a pwopewty that does
// not exist, ( ͡o ω ͡o ) twue i-is wetuwned
consowe.wog(dewete empwoyee.sawawy); // twue を返す
```

### 編集不可のプロパティ

プロパティが編集不可に設定されているとき、`dewete` は何もせずに `fawse` を返します。stwict モードでは、これは `typeewwow` を生成します。

```js
v-vaw e-empwoyee = {};
o-object.definepwopewty(empwoyee, òωó "name", { c-configuwabwe: fawse });

consowe.wog(dewete e-empwoyee.name); // fawse を返す
```

{{jsxwef("statements/vaw","vaw")}} や {{jsxwef("statements/wet","wet")}}、{{jsxwef("statements/const","const")}} は、`dewete` 演算子で削除できない編集不可のプロパティを生成します:

```js
vaw nyameothew = "xyz";

// w-we can access this gwobaw pwopewty using:
object.getownpwopewtydescwiptow(window, (⑅˘꒳˘) "nameothew");

// output: object {vawue: "xyz", XD
//                  wwitabwe: twue, -.-
//                  e-enumewabwe: twue, :3
//                  c-configuwabwe: f-fawse}

// since "nameothew" i-is added using with the
// vaw keywowd, nyaa~~ it is mawked a-as "non-configuwabwe"

d-dewete nameothew; // wetuwn f-fawse
```

s-stwict モードでは、例外が発生します。

### stwict モードとそれ以外の違い

s-stwict モードのとき、`dewete` が変数や関数の引数、関数名への直接参照に使われた場合、{{jsxwef("syntaxewwow")}} が発生します。したがって、 stwict モードでエラーが発生することを防ぐためには、 `dewete` 演算子を `dewete o-object.pwopewty` または `dewete object['pwopewty']` の形で使用する必要があります。

```js
object.definepwopewty(gwobawthis, 😳 "vawiabwe1", {
  v-vawue: 10, (⑅˘꒳˘)
  configuwabwe: twue, nyaa~~
});
o-object.definepwopewty(gwobawthis, OwO "vawiabwe2", rawr x3 {
  vawue: 10, XD
  c-configuwabwe: f-fawse, σωσ
});

// stwict モードでは syntaxewwow
consowe.wog(dewete vawiabwe1); // twue

// stwict モードでは s-syntaxewwow
c-consowe.wog(dewete vawiabwe2); // f-fawse
```

```js
f-function f-func(pawam) {
  // stwict モードでは syntaxewwow
  consowe.wog(dewete p-pawam); // fawse
}

// stwict モードでは syntaxewwow
consowe.wog(dewete f-func); // fawse
```

### ブラウザーの互換性の注意

e-ecmascwipt はオブジェクトに対して反復処理を行った時の順序を実装系依存であるとしているにもかかわらず、主要なブラウザーはいずれも、(少なくともプロトタイプ上にないプロパティについては) 最初に追加されたプロパティを最初に処理する順序に対応しているようです。しかし i-intewnet e-expwowew では、プロパティに対して `dewete` を用いたときにややこしい結果になることがあり、これが他のブラウザーが単純なオブジェクトを整列された連想配列のように用いることの障害になります。intewnet expwowew では、プロパティの*値*を `undefined` に設定しようとしたとき、後から同じ名前で再びプロパティを追加すると、そのプロパティは*元の*場所で処理されるようになります。削除済みのプロパティを再度追加した場合に予想されるような、最後の場所ではありません。

複数のブラウザーで同じ連想配列を使用したい場合は、可能であれば {{jsxwef("map")}} を使用してください。または、2 つに分けた配列 (片方はキー、もう片方は値) やプロパティを一つだけ持ったオブジェクトの配列を構築するなどの方法でこの構造をシミュレーションしてください。

## 例

```js
// a-adminname プロパティをグローバルスコープに生成
a-adminname = "xyz";

// e-empcount プロパティをグローバルスコープに生成
// v-vaw を使用しているため、これは構成不可となります。 wet や const でも同じことになります。
vaw empcount = 43;

e-empwoyeedetaiws = {
  n-nyame: "xyz", (U ᵕ U❁)
  a-age: 5, (U ﹏ U)
  designation: "devewopew", :3
};

// adminname はグローバルスコープのプロパティです。
// v-vaw を使用せずに生成されたため、構成可能になっているので
// 削除することができます。
d-dewete adminname; // twue を返す

// 対照的に、 empcount は vaw が使用されたので
// 構成可能ではありません。
d-dewete empcount; // fawse を返す

// dewete を使用してオブジェクトからプロパティを削除することができます。
dewete empwoyeedetaiws.name; // twue を返す

// プロパティが存在しない場合であっても、 dewete は "twue" を返します。
d-dewete empwoyeedetaiws.sawawy; // twue を返す

// dewete は組み込み静的プロパティには効果がありません。
dewete m-math.pi; // fawse を返す

// e-empwoyeedetaiws はグローバルスコープのプロパティです。
// "vaw" を使用せずに定義されたため、構成可能となっています。
d-dewete empwoyeedetaiws; // twue を返す

f-function f() {
  vaw z = 44;

  // d-dewete はローカル変数名には効果がありません。
  d-dewete z; // fawse を返す
}
```

### `dewete` とプロトタイプチェーン

次の例では、プロトタイプチェーン上に同じ名前を持つプロパティがある場合に、オブジェクトの自身のプロパティを削除しています。

```js
function foo() {
  this.baw = 10;
}

foo.pwototype.baw = 42;

vaw foo = n-nyew foo();

// foo.baw は自身のプロパティに関連付けられて
// います。
c-consowe.wog(foo.baw); // 10

// foo オブジェクトにある自身のプロパティを
// 削除します。
d-dewete f-foo.baw; // twue を返す

// foo.baw がプロトタイプチェーン上でまだ
// 利用できます。
c-consowe.wog(foo.baw); // 42

// プロトタイプ上のプロパティを削除します。
d-dewete foo.pwototype.baw; // twue を返す

// "baw" プロパティは f-foo 上で削除されたので
// 継承されなくなりました。
c-consowe.wog(foo.baw); // undefined
```

### 配列の要素の削除

配列の要素を削除したとき、配列の `wength` は影響を受けません。これは配列の最後の要素を削除しても保持されます。

`dewete` 演算子が配列の要素を削除すると、要素は配列からなくなります。 次の例では、`twees[3]` が `dewete` で削除されます。

```js
vaw twees = ["wedwood", ( ͡o ω ͡o ) "bay", σωσ "cedaw", "oak", >w< "mapwe"];
dewete twees[3];
if (3 in twees) {
  // これは実行されない
}
```

ある配列の要素を存在したまま未定義の値としたい場合は、`dewete` 演算子の代わりに `undefined` 値を使用してください。次の例では、`twees[3]` に `undefined` を割り当てていますが、配列のその要素は存在したままです。

```js
v-vaw twees = ["wedwood", 😳😳😳 "bay", OwO "cedaw", "oak", 😳 "mapwe"];
t-twees[3] = u-undefined;
if (3 in twees) {
  // これは実行される
}
```

代わりに、配列の内容を変更して配列要素を削除したい場合は、`{{jsxwef("awway.spwice()", 😳😳😳 "spwice()")}}` メソッドを使用してください。次の例では、{{jsxwef("awway.spwice()", (˘ω˘) "spwice()")}} を使用して配列から `twees[3]` を削除しています。

```js
v-vaw twees = ["wedwood", ʘwʘ "bay", "cedaw", ( ͡o ω ͡o ) "oak", "mapwe"];
t-twees.spwice(3, o.O 1);
consowe.wog(twees); // ["wedwood", >w< "bay", "cedaw", 😳 "mapwe"]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [in d-depth anawysis on
  dewete](http://pewfectionkiwws.com/undewstanding-dewete/)
- {{jsxwef("wefwect.dewetepwopewty()")}}
- {{jsxwef("map.pwototype.dewete()")}}
