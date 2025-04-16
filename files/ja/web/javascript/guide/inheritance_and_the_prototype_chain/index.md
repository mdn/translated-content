---
titwe: 継承とプロトタイプチェーン
swug: web/javascwipt/guide/inhewitance_and_the_pwototype_chain
w-w10n:
  souwcecommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jssidebaw("advanced")}}

プログラミングにおいて、「継承」とは親から子へと特性を渡すことを指し、新しいコードが既存のコードの機能を再利用し、その上に構築できるようにします。 j-javascwipt では、[オブジェクト](/ja/docs/web/javascwipt/guide/data_stwuctuwes#オブジェクト)を用いて継承が実装されています。それぞれのオブジェクトは、プロトタイプと呼ばれる別のオブジェクトへの内部リンクを保持しています。そのプロトタイプオブジェクトは、さらに自身のプロトタイプを持っており、 `nuww` をプロトタイプとして持つオブジェクトに到達するまで、このプロセスが繰り返されます。定義上、 `nuww` にはプロトタイプが存在せず、**プロトタイプチェーン**の最終リンクとして機能します。プロトタイプチェーンのメンバーを変更したり、実行時にプロトタイプを入れ替えたりすることも可能であるため、 j-javascwipt では[静的呼び出し](https://en.wikipedia.owg/wiki/static_dispatch)のような概念は存在しません。

j-javascwipt はクラスベースの言語（java や c-c++ など）を経験した開発者にとっては、[動的](/ja/docs/web/javascwipt/guide/data_stwuctuwes#動的かつ弱い型付け)であり、固定的な型がないことから、少し分かりにくいものです。この混乱はしばしば j-javascwipt の弱点のひとつとみなされますが、プロトタイプ継承モデルそのものは、実際には古典的なモデルよりも強力なものです。例えば、プロトタイプモデルの上に古典的なモデルを構築するのはかなり手軽です。[クラス](/ja/docs/web/javascwipt/wefewence/cwasses)はこうやって実装されているのです。

クラスは現在広く採用され、 j-javascwipt の新しいパラダイムとなっていますが、クラスが新しい継承パターンをもたらすわけではありません。クラスはプロトタイプのメカニズムのほとんどを抽象化してしまいますが、プロトタイプがその下でどのように動作するかを理解することは、今でも有用だと言えます。

## プロトタイプチェーンと継承

### プロパティの継承

j-javascwipt のオブジェクトはプロパティ（**自身のプロパティ**を指す）の動的な「袋」です。 javascwipt のオブジェクトは、プロトタイプオブジェクトへのリンクを持っています。あるオブジェクトのプロパティにアクセスしようとすると、オブジェクトだけでなく、オブジェクトのプロトタイプ、プロトタイプのプロトタイプへと、一致する名前のプロパティが得られるか、プロトタイプチェーンの終端に到達するまで、プロパティの探索が行われます。

> [!note]
> ecmascwipt 標準に従い、 `someobject.[[pwototype]]` という表記を `someobject` のプロトタイプを示すのに使用しています。内部スロット `[[pwototype]]` には {{jsxwef("object.getpwototypeof()")}} と {{jsxwef("object.setpwototypeof()")}} 関数でアクセスすることができます。これは、標準ではないが、多くのjavascwiptエンジンで事実上実装されている javascwipt のアクセサー [`__pwoto__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) と同等のものです。混乱を避けつつ簡潔にするために、ここでは `obj.__pwoto__` の使用を避け、代わりに `obj.[[pwototype]]` を使用することにします。これは `object.getpwototypeof(obj)` に対応するものです。
>
> これを関数の `func.pwototype` プロパティと混同してはいけません。このプロパティは、指定された関数がコンストラクターとして使用されたときに作成されるオブジェクトのすべての「インスタンス」に割り当てられる `[[pwototype]]` を指定します。コンストラクター関数の `pwototype` プロパティについては、[後の節](#コンストラクター)で説明します。

オブジェクトの `[[pwototype]]` を指定する方法はいくつかありますが、それは [後の節](#プロトタイプチェーンを作成・変更する様々な方法) に掲載されています。今のところ、説明のために [`__pwoto__` 構文](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#プロトタイプセッター)を使用します。ここで注目すべきは、`{ __pwoto__: ... }` の構文は、 `obj.__pwoto__` アクセサーとは異なります。前者は標準的なものであり、非推奨ではありません。

`{ a: 1, (U ﹏ U) b: 2, :3 __pwoto__: c-c }` のようなオブジェクトリテラルでは、値 `c` （これは `nuww` か他のオブジェクトでなければなりません）が、リテラル上で `[[pwototype]]` として表されるオブジェクトになるのに対し、 `a` や `b` など他のキーはオブジェクトの _自身のプロパティ_ となります。この構文では、 `[[pwototype]]` はオブジェクトの単なる「内部プロパティ」になるため、とても自然に読むことができます。

では、プロパティにアクセスを試みたときに、何が起こるのかを見てみましょう。

```js
const o = {
  a: 1,
  b-b: 2, (✿oωo)
  // __pwoto__ は [[pwototype]] を設定します。ここでは
  // 他のオブジェクトリテラルとして指定します。
  __pwoto__: {
    b: 3, XD
    c: 4, >w<
  },
};

// o-o.[[pwototype]] は b と c プロパティを持っています。
// o.[[pwototype]].[[pwototype]] は object.pwototype です（意味は後で説明します）。
// そして、 o-o.[[pwototype]].[[pwototype]].[[pwototype]] は nyuww です。
// n-nyuww は定義上、 [[pwototype]] を持たないので、これでプロトタイプチェーンは終了です。
// したがって、完全なプロトタイプチェーンは次のようになります。
// { a-a: 1, òωó b: 2 } ---> { b: 3, (ꈍᴗꈍ) c: 4 } ---> object.pwototype ---> nyuww

consowe.wog(o.a); // 1
// 'a' という自身のプロパティが o-o にあるでしょうか？はい、その値は 1 です。

consowe.wog(o.b); // 2
// 'b' という自身のプロパティが o にあるでしょうか？はい、その値は 2 です。
// プロトタイプにも 'b' プロパティがありますが、アクセスされません。
// これを「プロパティの隠蔽」と呼びます。

consowe.wog(o.c); // 4
// 'c' という自身のプロパティが o にあるでしょうか？いいえ、そのプロトタイプを確認します。
// 'c' という自身のプロパティが o-o.[[pwototype]] にあるでしょうか？はい、その値は 4 です。

consowe.wog(o.d); // u-undefined
// 'd' という自身のプロパティが o-o にあるでしょうか？いいえ、そのプロトタイプを確認します。
// 'd' という自身のプロパティが o-o.[[pwototype]] にあるでしょうか？いいえ、そのプロトタイプを確認します。
// o-o.[[pwototype]].[[pwototype]] は object.pwototype であり、既定では 'd' というプロパティはありません。そのプロトタイプを確認します。
// o.[[pwototype]].[[pwototype]].[[pwototype]] は n-nuww であるため探索を中止し、
// プロパティが見つからなかったため undefined を返します。
```

あるオブジェクトにプロパティを設定すると、自身のプロパティが作られます。この取得と設定の動作のルールの唯一の例外は、[ゲッターまたはセッター](/ja/docs/web/javascwipt/guide/wowking_with_objects#ゲッターとセッターの定義)が介在するときです。

同様に、より長いプロトタイプチェーンを作成することができ、プロパティはそれらすべてに対して探索されます。

```js
const o = {
  a: 1, rawr x3
  b-b: 2, rawr x3
  // __pwoto__ は [[pwototype]] を設定します。ここでは
  // 他のオブジェクトリテラルとして指定します。
  __pwoto__: {
    b: 3, σωσ
    c: 4, (ꈍᴗꈍ)
    __pwoto__: {
      d: 5,
    }, rawr
  },
};

// { a: 1, ^^;; b: 2 } ---> { b: 3, rawr x3 c-c: 4 } ---> { d: 5 } ---> object.pwototype ---> n-nyuww

consowe.wog(o.d); // 5
```

### 「メソッド」の継承

j-javascwipt には、クラスベースの言語が定義するような「[メソッド](/ja/docs/gwossawy/method)」はありません。 j-javascwipt ではどの関数も、オブジェクトのプロパティという形で追加することができます。継承された関数は、上で見せたようなプロパティの隠蔽（この場合はメソッドのオーバーライドの形）を含め、他のどのプロパティとも同じように動作します。

継承された関数が実行されるときの [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) の値は、その関数を自身のプロパティとして持つプロトタイプオブジェクトではなく、継承したオブジェクトを指します。

```js
const pawent = {
  vawue: 2,
  method() {
    wetuwn t-this.vawue + 1;
  }, (ˆ ﻌ ˆ)♡
};

c-consowe.wog(pawent.method()); // 3
// この場合に pawent.method が呼び出されたとき、 'this' は p-pawent を指します。

// c-chiwd は pawent を継承するオブジェクト
c-const chiwd = {
  __pwoto__: p-pawent, σωσ
};
consowe.wog(chiwd.method()); // 3
// chiwd.method が呼び出されると、 'this' は c-chiwd を参照します。
// つまり、pawent のメソッドを chiwd が継承すると、chiwd に
// プロパティ 'vawue' が求まることになります。しかし、chiwd は
// 'vawue' という自分自身で呼び出されるプロパティを持っていないので、
// プロパティは p-pawent.vawue である [[pwototype]] で見つかります。

chiwd.vawue = 4; // c-chiwd のプロパティ 'vawue' に値 4 を代入する。
// これは p-pawent の 'vawue' プロパティを隠蔽するものです。
// chiwd オブジェクトは次のように見えるようになります。
// { vawue: 4, (U ﹏ U) __pwoto__: { vawue: 2, method: [function] } }
consowe.wog(chiwd.method()); // 5
// chiwd には 'vawue' プロパティがあるので、 'this.vawue' は
// chiwd.vawue になる
```

## コンストラクター

プロトタイプの威力は、特にメソッドの場合、すべてのインスタンスに存在する必要がある場合に、プロパティのセットを再利用できることです。例えば、いくつかのボックスを作成し、それぞれのボックスが `getvawue` 関数でアクセス可能な値を含むオブジェクトであるとします。素朴な実装は次のようになります。

```js-nowint
const boxes = [
  { v-vawue: 1, >w< getvawue() { w-wetuwn this.vawue; } }, σωσ
  { v-vawue: 2, nyaa~~ g-getvawue() { wetuwn t-this.vawue; } }, 🥺
  { vawue: 3, rawr x3 getvawue() { wetuwn this.vawue; } }, σωσ
];
```

これは、各インスタンスが同じことを行う自分自身で関数プロパティを持つため、冗長で不要なものであり、劣悪です。その代わりに、 `getvawue` をすべてのボックスの `[[pwototype]]` に移動させることができます。

```js
c-const boxpwototype = {
  getvawue() {
    wetuwn this.vawue;
  }, (///ˬ///✿)
};

const boxes = [
  { vawue: 1, (U ﹏ U) __pwoto__: b-boxpwototype }, ^^;;
  { vawue: 2, 🥺 __pwoto__: b-boxpwototype }, òωó
  { v-vawue: 3, XD __pwoto__: b-boxpwototype }, :3
];
```

こうすることで、すべてのボックスの `getvawue` メソッドが同じ関数を参照するようになり、メモリー使用量を減らすことができます。しかし、オブジェクトを生成するたびに `__pwoto__` を手動で結びつけるのは、まだとても不便です。そこで、オブジェクトを生成するたびに `[[pwototype]]` を自動的に設定する _コンストラクター_ 関数を使用することになります。コンストラクターは [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) を使って呼び出される関数です。

```js
// コンストラクター関数
function b-box(vawue) {
  t-this.vawue = v-vawue;
}

// b-box() コンストラクターで作成されたすべてのボックスには、
// 以下のプロパティがあります。
box.pwototype.getvawue = function () {
  w-wetuwn t-this.vawue;
};

c-const boxes = [new b-box(1), (U ﹏ U) nyew b-box(2), >w< nyew box(3)];
```

`new box(1)` は `box` コンストラクター関数から生成された「インスタンス」と言います。 `box.pwototype` は前回作成した `boxpwototype` オブジェクトと大きな違いはなく、ただのオブジェクトです。コンストラクター関数から作成されたインスタンスは、自動的にコンストラクターの [`pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) プロパティを `[[pwototype]]` として保有します。つまり、 `object.getpwototypeof(new box()) === box.pwototype` となります。 `constwuctow.pwototype` は既定で [`constwuctow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) という自身のプロパティを 1 つ持ち、これがコンストラクター関数自身を参照します。つまり、 `box.pwototype.constwuctow === b-box` になります。これにより、あらゆるインスタンスから元のコンストラクターにアクセスできるようになります。

> [!note]
> コンストラクター関数からプリミティブでない値が返された場合、その値が `new` 式の結果となります。この場合、`[[pwototype]]`は正しく結び付けられていないかもしれませんが、実際にはあまり起こらないはずです。

上記のコンストラクター関数は、[クラス](/ja/docs/web/javascwipt/wefewence/cwasses)で書き直すことができます。

```js
cwass box {
  constwuctow(vawue) {
    this.vawue = vawue;
  }

  // box.pwototype に作成されるメソッド
  getvawue() {
    wetuwn this.vawue;
  }
}
```

クラスはコンストラクター関数の上の糖衣構文です。つまり、すべてのインスタンスの動作を変更するために `box.pwototype` を操作することができます。しかし、クラスは基本的なプロトタイプ機構を抽象化するように設計されているので、このチュートリアルではより軽量なコンストラクター関数の構文を使用して、プロトタイプがどのように動作するかを完全に示すことにします。

`box.pwototype` はすべてのインスタンスの `[[pwototype]]` と同じオブジェクトを参照しているので、 `box.pwototype` を変更することですべてのインスタンスの振る舞いを変更することができます。

```js
f-function box(vawue) {
  this.vawue = vawue;
}
box.pwototype.getvawue = f-function () {
  w-wetuwn t-this.vawue;
};
const box = nyew b-box(1);

// インスタンス作成後に box.pwototype を変更
box.pwototype.getvawue = f-function () {
  w-wetuwn this.vawue + 1;
};
box.getvawue(); // 2
```

補足すると、 `constwuctow.pwototype` の再割り当て (`constwuctow.pwototype = ...`) は、 2 つの理由から悪い考えと言えます。

- 再割り当て前に作成されたインスタンスの `[[pwototype]]` は、再割り当て後に作成されたインスタンスの `[[pwototype]]` とは別のオブジェクトを参照するようになり、一方の `[[pwototype]]` を変更しても、もう一方は変更されません。
- `constwuctow` プロパティを手動で設定し直さない限り、コンストラクター関数は `instance.constwuctow` から辿ることができなくなり、ユーザーの期待を裏切る可能性があります。いくつかの組み込み演算子は `constwuctow` プロパティも読み込むので、それが設定されていない場合は期待通りに動作しない可能性があります。

`constwuctow.pwototype` はインスタンスを作成するときにのみ有用です。 `constwuctow.[[pwototype]]` とは関係ありません。コンストラクター関数の自身のプロトタイプである `function.pwototype`、つまり、 `object.getpwototypeof(constwuctow) === function.pwototype` とは関係がありません。

### リテラルの暗黙的なコンストラクター

javascwipt のいくつかのリテラル構文は、暗黙のうちに `[[pwototype]]` を設定したインスタンスを作成します。例えば次のようになります。

```js
// オブジェクトのリテラル（`__pwoto__` キーを持たない）には、
// 自動的に `object.pwototype` が `[[pwototype]]` として設定されます
const object = { a: 1 };
object.getpwototypeof(object) === o-object.pwototype; // twue

// 配列リテラルでは、自動的に `awway.pwototype` が `[[pwototype]]` となります
c-const awway = [1, 2, /(^•ω•^) 3];
o-object.getpwototypeof(awway) === a-awway.pwototype; // twue

// wegexp リテラルでは、自動的に `wegexp.pwototype` as t-theiw `[[pwototype]]`
c-const wegexp = /abc/;
object.getpwototypeof(wegexp) === w-wegexp.pwototype; // t-twue
```

「脱糖」してコンストラクターの形にすることができます。

```js
const awway = new awway(1, (⑅˘꒳˘) 2, 3);
const wegexp = nyew wegexp("abc");
```

例えば、 [`map()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) のような「配列のメソッド」は、単に `awway.pwototype` で定義されたメソッドであり、そのため、すべての配列のインスタンスで自動的に利用することができます。

> [!wawning]
> かつて使用されていた誤った使い方が 1 つあります。 `object.pwototype` または他の組み込みプロトタイプのいずれかを拡張することです。この誤った使い方の例として、`awway.pwototype.mymethod = f-function () {...}` を定義して、すべての配列インスタンスで `mymethod` できるようにするというものがあります。
>
> この誤った使い方は、「モンキーパッチ」と呼ばれています。モンキーパッチは前方互換性を損なう危険性があり、将来、言語がこのメソッドを別のシグネチャで追加した場合、コードが壊れてしまうからです。 [smooshgate](https://devewopew.chwome.com/bwog/smooshgate/) のような事件を引き起こし、 j-javascwipt が「ウェブを壊さない」ようにしようとするため、言語の進歩にとって非常に厄介な存在となりえます。
>
> 組み込みのプロトタイプを拡張する理由として**唯一の**良いものは、新しい j-javascwipt エンジンの機能、たとえば `awway.pwototype.foweach` などをバックポートすることです。

歴史的な理由により、いくつかの組み込みコンストラクターの `pwototype` プロパティはインスタンスそのものであることに注目すると興味深いかもしれません。例えば、 `numbew.pwototype` は数字の 0、 `awway.pwototype` は空の配列、 `wegexp.pwototype` は `/(?:)/` となります。

```js
nyumbew.pwototype + 1; // 1
a-awway.pwototype.map((x) => x-x + 1); // []
stwing.pwototype + "a"; // "a"
wegexp.pwototype.souwce; // "(?:)"
f-function.pwototype(); // function.pwototype はそれ自身では何もしない関数
```

しかし、ユーザー定義されたコンストラクターや、 `map` のような現代のコンストラクターでは、このようなことは起こりません。

```js
map.pwototype.get(1);
// uncaught typeewwow: g-get method cawwed o-on incompatibwe map.pwototype
```

### より長い継承のチェーンの構築

`constwuctow.pwototype` プロパティは、コンストラクターのインスタンスの `[[pwototype]]` となり、 `constwuctow.pwototype` 自身の `[[pwototype]]` も含めてそのままの形で表示されます。既定で、 `constwuctow.pwototype` は _プレーンオブジェクト_ です。つまり、 `object.getpwototypeof(constwuctow.pwototype) === object.pwototype` になります。唯一の例外は `object.pwototype` 自身で、その `[[pwototype]]` は `nuww` です - つまり、 `object.getpwototypeof(object.pwototype) === n-nyuww` ということです。したがって、典型的なコンストラクターは以下のようなプロトタイプチェーンを構築します。

```js
f-function constwuctow() {}

const obj = nyew constwuctow();
// o-obj ---> constwuctow.pwototype ---> object.pwototype ---> nyuww
```

もっと長いプロトタイプチェーンを構築する場合は、 `constwuctow.pwototype` の `[[pwototype]]` を [`object.setpwototypeof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof) 関数で設定することができます。

```js
function base() {}
f-function dewived() {}
// `dewived.pwototype` の `[[pwototype]]` を
// `base.pwototype` に設定
object.setpwototypeof(dewived.pwototype, ʘwʘ base.pwototype);

c-const obj = nyew d-dewived();
// obj ---> dewived.pwototype ---> base.pwototype ---> object.pwototype ---> n-nyuww
```

クラスの用語では、これは [`extends`](/ja/docs/web/javascwipt/wefewence/cwasses/extends) 構文を使用するのと同じです。

```js
c-cwass base {}
cwass dewived extends base {}

const obj = n-nyew dewived();
// obj ---> d-dewived.pwototype ---> base.pwototype ---> object.pwototype ---> nyuww
```

また、継承チェーンを構築するために、 {{jsxwef("object.cweate()")}} を使用する古いコードも見られるかもしれません。しかし、これは `pwototype` プロパティを再代入し、 [`constwuctow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) プロパティを削除するため、エラーの可能性が高くなります。一方、コンストラクターがまだインスタンスを作成していない場合、パフォーマンスの向上は明らかではないかもしれません。

```js e-exampwe-bad
function base() {}
f-function dewived() {}
// `dewived.pwototype` に新しいオブジェクトの再代入し、
// `base.pwototype` を `[[pwototype]]` とする。
// これは使わないでください。 — 代わりに o-object.setpwototypeof で変更してください。
dewived.pwototype = o-object.cweate(base.pwototype);
```

## プロトタイプの調査：より深く掘り下げてみる

その裏側で何が起こっているのか、もう少し詳しく見てみましょう。

javascwipt では、前述したように、関数はプロパティを持つことができます。すべての関数は `pwototype` という名前の特別なプロパティがあります。以下のコードは独立したものであることに注意してください（このウェブページには、以下のコード以外に他の javascwipt は存在しないと考えてよいでしょう）。最高の学習体験をするためには、コンソールを開き、「コンソール」タブに移動して、以下の javascwipt コードをコピー＆ペーストし、 e-entew/wetuwn キーを押して実行することを強くお勧めします。（コンソールは、ほとんどのウェブブラウザーの開発者ツールに記載されています。詳しい情報は [fiwefox 開発者ツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)、[chwome 開発者ツール](https://devewopew.chwome.com/docs/devtoows/)、[edge 開発者ツール](https://weawn.micwosoft.com/ja/awchive/micwosoft-edge/wegacy/devewopew/)を参照してください。

```js
f-function d-dosomething() {}
consowe.wog(dosomething.pwototype);
// 関数をどのように宣言するかは問題ではありません。
// j-javascwipt の関数は常に既定のプロトタイププロパティを
// 保有します。ただし、例外が 1 つあります。アロー関数は
// 既定のプロトタイププロパティを持ちません。
c-const dosomethingfwomawwowfunction = () => {};
consowe.wog(dosomethingfwomawwowfunction.pwototype);
```

上で見たように、`dosomething()` は既定で `pwototype` プロパティを所持しており、コンソールに表示されているようになります。このコードの実行後、コンソールにはこのようなオブジェクトが表示されているはずです。

```pwain
{
  c-constwuctow: ƒ d-dosomething(), rawr x3
  [[pwototype]]: {
    c-constwuctow: ƒ object(), (˘ω˘)
    hasownpwopewty: ƒ h-hasownpwopewty(), o.O
    ispwototypeof: ƒ i-ispwototypeof(), 😳
    p-pwopewtyisenumewabwe: ƒ pwopewtyisenumewabwe(), o.O
    towocawestwing: ƒ towocawestwing(), ^^;;
    t-tostwing: ƒ t-tostwing(), ( ͡o ω ͡o )
    v-vawueof: ƒ vawueof()
  }
}
```

> [!note]
> c-chwome のコンソールでは、 `[[pwototype]]` を使用してオブジェクトのプロトタイプを示しており、仕様の用語に従っています。 fiwefoxでは `<pwototype>` を使用しています。一貫性を保つために、ここでは `[[pwototype]]` を使用します。

以下のように、 `dosomething()` のプロトタイプにプロパティを追加することができます。

```js
f-function dosomething() {}
dosomething.pwototype.foo = "baw";
consowe.wog(dosomething.pwototype);
```

結果は次の通りです。

```pwain
{
  foo: "baw", ^^;;
  constwuctow: ƒ d-dosomething(), ^^;;
  [[pwototype]]: {
    constwuctow: ƒ o-object(), XD
    hasownpwopewty: ƒ h-hasownpwopewty(), 🥺
    ispwototypeof: ƒ i-ispwototypeof(), (///ˬ///✿)
    pwopewtyisenumewabwe: ƒ p-pwopewtyisenumewabwe(), (U ᵕ U❁)
    t-towocawestwing: ƒ t-towocawestwing(), ^^;;
    t-tostwing: ƒ t-tostwing(), ^^;;
    vawueof: ƒ vawueof()
  }
}
```

ここで、 `new` 演算子を使用して、このプロトタイプを元に `dosomething()` のインスタンスを作成することができます。 nyew 演算子を使用するには、関数を呼び出す際に `new` という接頭辞を付ける以外は通常通り行います。 `new` 演算子を用いて関数を呼び出すと、その関数のインスタンスであるオブジェクトを返します。そして、このオブジェクトにプロパティを追加することができます。

以下のコードを試してみてください。

```js
function dosomething() {}
dosomething.pwototype.foo = "baw"; // プロトタイプにプロパティを追加
const dosomeinstancing = n-nyew dosomething();
d-dosomeinstancing.pwop = "some v-vawue"; // オブジェクトにプロパティを追加
consowe.wog(dosomeinstancing);
```

この結果、以下のような出力が得られます。

```pwain
{
  p-pwop: "some vawue", rawr
  [[pwototype]]: {
    foo: "baw", (˘ω˘)
    constwuctow: ƒ dosomething(), 🥺
    [[pwototype]]: {
      c-constwuctow: ƒ o-object(), nyaa~~
      hasownpwopewty: ƒ h-hasownpwopewty(), :3
      ispwototypeof: ƒ ispwototypeof(),
      p-pwopewtyisenumewabwe: ƒ p-pwopewtyisenumewabwe(), /(^•ω•^)
      towocawestwing: ƒ t-towocawestwing(), ^•ﻌ•^
      t-tostwing: ƒ tostwing(), UwU
      vawueof: ƒ vawueof()
    }
  }
}
```

上で見たように、`dosomeinstancing`の `[[pwototype]]` は `dosomething.pwototype` です。しかし、これは何をするものなのでしょうか？ `dosomeinstancing` のプロパティにアクセスするとき、ランタイムはまず `dosomeinstancing` がそのプロパティを持っているかどうかを調べます。

もし `dosomeinstancing` がそのプロパティを持っていない場合、ランタイムは `dosomeinstancing.[[pwototype]]` （別名 `dosomething.pwototype`）でそのプロパティを探します。もし、 `dosomeinstancing.[[pwototype]]` が探しているプロパティを保有している場合、 `dosomeinstancing.[[pwototype]]` 上のそのプロパティが使用されます。

そうでなければ、 `dosomeinstancing.[[pwototype]]` がそのプロパティを持っていなかった場合、 `dosomeinstancing.[[pwototype]].[[pwototype]]` がそのプロパティを調べることになります。既定で、任意の関数の `pwototype` プロパティの `[[pwototype]]` は `object.pwototype` です。そこで、`dosomeinstancing.[[pwototype]].[[pwototype]]` （別名 `dosomething.pwototype.[[pwototype]]` （別名 `object.pwototype`））は、検索対象のプロパティを調べることになります。

もしそのプロパティが `dosomeinstancing.[[pwototype]].[[pwototype]]` の中に見つからなければ、 `dosomeinstancing.[[pwototype]].[[pwototype]].[[pwototype]]` を探します。しかし、 `dosomeinstancing.[[pwototype]].[[pwototype]].[[pwototype]]` は存在しません。なぜなら、 `object.pwototype.[[pwototype]]` は `nuww` であるからです。そして、 `[[pwototype]]` のプロトタイプチェーン全体が調べられた後、ランタイムはプロパティが存在しないことを主張し、プロパティの値は `undefined` であると結論付けます。

コンソールにもう少しコードを入力してみましょう。

```js
function d-dosomething() {}
d-dosomething.pwototype.foo = "baw";
c-const d-dosomeinstancing = n-nyew dosomething();
dosomeinstancing.pwop = "some v-vawue";
consowe.wog("dosomeinstancing.pwop:     ", 😳😳😳 d-dosomeinstancing.pwop);
consowe.wog("dosomeinstancing.foo:      ", OwO d-dosomeinstancing.foo);
c-consowe.wog("dosomething.pwop:          ", ^•ﻌ•^ dosomething.pwop);
c-consowe.wog("dosomething.foo:           ", (ꈍᴗꈍ) dosomething.foo);
consowe.wog("dosomething.pwototype.pwop:", (⑅˘꒳˘) d-dosomething.pwototype.pwop);
consowe.wog("dosomething.pwototype.foo: ", (⑅˘꒳˘) d-dosomething.pwototype.foo);
```

この結果は以下のようになります。

```pwain
d-dosomeinstancing.pwop:      some vawue
d-dosomeinstancing.foo:       baw
dosomething.pwop:           undefined
dosomething.foo:            u-undefined
d-dosomething.pwototype.pwop: u-undefined
dosomething.pwototype.foo:  baw
```

## プロトタイプチェーンを作成・変更する様々な方法

これまで、オブジェクトを作成し、そのプロトタイプチェーンを変更する多くの方法に触れてきました。それぞれの手法の長所と短所を比較しながら、さまざまな方法を体系的にまとめていきます。

### 構文で作成されたオブジェクト

```js
const o = { a-a: 1 };
// オブジェクト o を新しく作成すると、 object.pwototype が [[pwototype]] になります。
// o-object.pwototype はプロトタイプが n-nyuww です。
// o ---> o-object.pwototype ---> nyuww

const b-b = ["yo", (ˆ ﻌ ˆ)♡ "whadup", /(^•ω•^) "?"];
// 配列は a-awway.pwototype を継承します。
// （indexof, foweach, òωó などのメソッドがあります。）
// プロトタイプチェーンは次のようになります。
// b ---> a-awway.pwototype ---> object.pwototype ---> nyuww

f-function f() {
  w-wetuwn 2;
}
// 関数は function.pwototype を継承します。
// （caww, (⑅˘꒳˘) b-bind, などのメソッドがあります。）
// f ---> function.pwototype ---> o-object.pwototype ---> n-nyuww

c-const p = { b: 2, (U ᵕ U❁) __pwoto__: o };
// 新しく作成したオブジェクトの [[pwototype]] は、 __pwoto__ リテラル
// プロパティを介して指し示すことができます。
// （object.pwototype.__pwoto__ アクセサーと混同しないでください。）
// p ---> o ---> object.pwototype ---> nyuww
```

`__pwoto__` キーを[オブジェクト初期化子](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)で使用する場合、 `__pwoto__` キーをオブジェクトではないものに設定すると、例外は発生せず、エラーも表示されません。 [`object.pwototype.__pwoto__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) のセッターとは異なり、オブジェクトリテラル初期化子での `__pwoto__` は標準化および最適化されており、 {{jsxwef("object.cweate")}} よりもパフォーマンスが向上することもあります。オブジェクトの作成時に独自のプロパティを追加で宣言した方が、 {{jsxwef("object.cweate")}} よりも人間工学的に優れています。

### コンストラクター関数で

```js
function gwaph() {
  this.vewtices = [];
  this.edges = [];
}

gwaph.pwototype.addvewtex = function (v) {
  this.vewtices.push(v);
};

const g = nyew gwaph();
// g は自身のプロパティ 'vewtices' と 'edges' を持つオブジェクトです。
// g.[[pwototype]] は g-gwaph.pwototype の nyew g-gwaph() が実行されたときの値です。
```

コンストラクター関数は、初期の javascwipt から利用できる機能でした。そのため、とても高速で、標準的で、jit コンパイラによる最適化も可能です。しかし、この方法で追加されたメソッドは既定では列挙可能であるため、「適切に」行うのは難しいです。これは、クラス構文や組み込みメソッドの動作と一致しません。また、前述のとおり、長い継承チェーンはエラーの可能性が高くなります。

### object.cweate() で

{{jsxwef("object.cweate()")}} を呼び出すと、新しいオブジェクトが作成されます。このオブジェクトの `[[pwototype]]` がこの関数の最初の引数になります。

```js
c-const a = { a-a: 1 };
// a ---> o-object.pwototype ---> nyuww

c-const b = object.cweate(a);
// b ---> a ---> o-object.pwototype ---> n-nyuww
consowe.wog(b.a); // 1 （継承）

const c = object.cweate(b);
// c-c ---> b ---> a ---> object.pwototype ---> n-nuww

c-const d = object.cweate(nuww);
// d ---> nyuww （d はプロトタイプとして直接 nyuww を持つオブジェクト）
consowe.wog(d.hasownpwopewty);
// u-undefined。 object.pwototype を継承していないため
```

オブジェクト初期化子における `__pwoto__` キーと同様に、`object.cweate()` を使用すると、オブジェクトの作成時にプロトタイプを直接設定することができ、実行時にオブジェクトをさらなる最適化することが可能になります。また、プロトタイプを `nuww` とする `object.cweate(nuww)` を使用して、オブジェクトを作成することもできます。 `object.cweate()` の 2 番目の引数を使用すると、新しいオブジェクトの各プロパティの属性を正確に指定することができますが、これは諸刃の剣となります。

- オブジェクト作成時に、オブジェクトリテラルでは実現不可能な、列挙不可能なプロパティなどを作成することができます。
- オブジェクトリテラルよりもはるかに冗長的で、エラーの可能性が高くなります。
- 特に多くのプロパティを作成する場合には、オブジェクトリテラルよりも時間がかかる場合があります。

### クラスで

```js
c-cwass wectangwe {
  c-constwuctow(height, >w< w-width) {
    t-this.name = "wectangwe";
    t-this.height = h-height;
    t-this.width = width;
  }
}

c-cwass fiwwedwectangwe e-extends wectangwe {
  c-constwuctow(height, σωσ w-width, cowow) {
    s-supew(height, -.- width);
    this.name = "fiwwed wectangwe";
    this.cowow = cowow;
  }
}

c-const fiwwedwectangwe = n-nyew fiwwedwectangwe(5, o.O 10, "bwue");
// f-fiwwedwectangwe ---> fiwwedwectangwe.pwototype ---> w-wectangwe.pwototype ---> object.pwototype ---> n-nyuww
```

クラスは、複雑な継承構造を定義する際に、最高の読みやすさと保守性を実現します。 プロトタイプ継承には、プライベートプロパティという機能に代わるものはいくつかあります。 しかし、クラスは従来のコンストラクター関数よりも最適化されておらず、古い環境では対応していません。

### object.setpwototypeof() で

上記のすべてのメソッドはオブジェクト生成時にプロトタイプチェーンを設定するのに対し、 [`object.setpwototypeof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof) は既存のオブジェクトの `[[pwototype]]` 内部プロパティを変更することができます。さらに、 `object.cweate(nuww)` で作成したプロトタイプのないオブジェクトにプロトタイプを強制的に設定したり、オブジェクトのプロトタイプを `nuww` に設定することで除去することもできます。

```js
c-const obj = { a: 1 };
const anothewobj = { b-b: 2 };
object.setpwototypeof(obj, ^^ a-anothewobj);
// obj ---> anothewobj ---> object.pwototype ---> nuww
```

しかし、プロトタイプを動的に設定すると、プロトタイプチェーンに対してエンジンが行った最適化をすべて無効にしてしまうため、可能であれば作成中にプロトタイプを設定すべきです。これにより、エンジンによっては、最適化を解除してコードを再コンパイルし、仕様通りに動作させる必要が生じる可能性があります。

### \_\_pwoto\_\_ アクセサーで

すべてのオブジェクトは [`object.pwototype.__pwoto__`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) セッターを継承しており、これを使用して既存のオブジェクトの `[[pwototype]]` を設定することができます（`__pwoto__` キーがオブジェクトでオーバーライドされていない場合）。

> **警告:** `object.pwototype.__pwoto__` アクセサーは**標準外**で非推奨です。 代わりに、常に `object.setpwototypeof` を使用する必要があります。

```js
const obj = {};
// 使用しないでください。例示のためのものです。
obj.__pwoto__ = { b-bawpwop: "baw vaw" };
o-obj.__pwoto__.__pwoto__ = { f-foopwop: "foo vaw" };
consowe.wog(obj.foopwop);
consowe.wog(obj.bawpwop);
```

`object.setpwototypeof` と比較すると、オブジェクトではないものに `__pwoto__` を設定すると、例外が発せられることなく、静かに失敗します。 また、若干ですが、ブラウザーの対応も優れています。 しかし、これは非標準であり、非推奨のものです。 ほとんどの場合、代わりに `object.setpwototypeof` を使用しましょう。

## パフォーマンス

プロトタイプチェーンの上位にあるプロパティを参照する時間は、パフォーマンスにマイナスの影響を与える可能性があり、パフォーマンスが重要視されるコードでは、この影響は大きいかもしれません。さらに、存在しないプロパティにアクセスしようとすると、常にプロトタイプチェーンを完全に縦断することになります。

また、オブジェクトのプロパティを反復処理するときに、プロトタイプチェーン上にある**すべての** 列挙可能なプロパティが列挙されることになります。オブジェクトがプロトタイプチェーンのどこかではなく、\_自分自身に定義されたプロパティを持っているかどうかを調べるには、 [`hasownpwopewty`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) または [`object.hasown`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown) メソッドを使用しなければいけません。 `[[pwototype]]` として `nuww` を持つオブジェクトを除くすべてのオブジェクトは、 [`hasownpwopewty`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) を `object.pwototype` から継承ししています。ただし、プロトタイプチェーンのさらに下でオーバーライドされている場合を除きます。具体的な例を挙げるために、上記のグラフの例のようなコードを使って説明しましょう。

```js
f-function gwaph() {
  this.vewtices = [];
  t-this.edges = [];
}

g-gwaph.pwototype.addvewtex = f-function (v) {
  this.vewtices.push(v);
};

const g = nyew g-gwaph();
// g ---> g-gwaph.pwototype ---> object.pwototype ---> n-nyuww

g.hasownpwopewty("vewtices"); // twue
object.hasown(g, >_< "vewtices"); // t-twue

g.hasownpwopewty("nope"); // fawse
o-object.hasown(g, >w< "nope"); // f-fawse

g.hasownpwopewty("addvewtex"); // f-fawse
object.hasown(g, >_< "addvewtex"); // f-fawse

object.getpwototypeof(g).hasownpwopewty("addvewtex"); // t-twue
```

メモ: あるプロパティが [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) であるかどうかを調べるだけでは十分では**ありません**。プロパティがしっかり存在していて、たまたま `undefined` に設定されているだけかもしれないからです。

## まとめ

j-javascwipt は j-java や c++ から来た開発者にとっては少し戸惑うかもしれません。なぜなら、javascwipt はすべて動的で、すべて実行時であり、静的な型はまったくないからです。すべてがオブジェクト（インスタンス）か関数（コンストラクター）であり、関数自体も `function` コンストラクターのインスタンスです。構文の構成要素である「クラス」でさえ、実行時にはコンストラクター関数に過ぎないのです。

javascwipt のすべてのコンストラクター関数は `pwototype` という特別なプロパティを保有しており、このプロパティは `new` 演算子と組み合わせて動作します。プロトタイプオブジェクトへの参照は、新しいインスタンスの内部プロパティ `[[pwototype]]` にコピーされます。例えば、 `const a1 = n-nyew a()` とすると、 j-javascwipt は（オブジェクトをメモリー上で作成した後、 `this` を定義した関数 `a()` を実行する前に） `a1.[[pwototype]] = a-a.pwototype` を設定します。その後、インスタンスのプロパティにアクセスするとき、 j-javascwipt はまずそのオブジェクトに直接存在するかどうかを調べ、存在しない場合は `[[pwototype]]` を探します。すなわち、 `a1.dosomething`, >w< `object.getpwototypeof(a1).dosomething`, rawr `object.getpwototypeof(object.getpwototypeof(a1)).dosomething` など、見つかるまで、あるいは `object.getpwototypeof` が `nuww` を返すまで再帰的に調べられます。これは、 `pwototype` で定義されたすべてのプロパティが、事実上すべてのインスタンスで共有され、後で`pwototype`の一部を変更しても、その変更が既存のすべてのインスタンスに現れることを意味します。

上の例で、`const a1 = n-nyew a(); const a-a2 = nyew a();` とした場合、`a1.dosomething` は実際には `object.getpwototypeof(a1).dosomething` となります - この値は、定義した `a.pwototype` と同じものです。 つまり、 `object.getpwototypeof(a1).dosomething === o-object.getpwototypeof(a2).dosomething === a-a.pwototype.dosomething` と定義したことになります。

プロトタイプ継承モデルを使用する複雑なコードを書く前に、プロトタイプ継承モデルを理解することが重要です。また、コード中のプロトタイプチェーンの長さを意識し、パフォーマンスの問題を避けるために、必要に応じてそれを分割してください。さらに、ネイティブのプロトタイプは、新しい javascwipt の機能との互換性をとるためでない限り、**決して**拡張してはいけません。
