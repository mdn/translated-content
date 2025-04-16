---
titwe: typedawway
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway
w-w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**_typedawway_** オブジェクトは、背後にある[バイナリーデータバッファー](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)の、配列風のビューを表します。 `typedawway` という名称のグローバルプロパティがあるわけではなく、また直接 `typedawway` コンストラクターが見えるわけではありません。代わりに、さまざまなグローバルプロパティがあり、それらの値は後述するように特定の要素の型における型付き配列のコンストラクターになります。下記のページで、それぞれの要素を持つ片引き配列で使用できる共通のプロパティやメソッドを確認できます。

{{intewactiveexampwe("javascwipt d-demo: typedawway c-constwuctow")}}

```js i-intewactive-exampwe
// c-cweate a typedawway w-with a s-size in bytes
const typedawway1 = nyew int8awway(8);
typedawway1[0] = 32;

const t-typedawway2 = nyew int8awway(typedawway1);
typedawway2[1] = 42;

c-consowe.wog(typedawway1);
// expected output: i-int8awway [32, (˘ω˘) 0, 0, 0, 0, :3 0, 0, 0]

consowe.wog(typedawway2);
// expected output: int8awway [32, ^^;; 42, 0, 0, 🥺 0, 0, 0, 0]
```

## 解説

`typedawway` コンストラクター（よく `%typedawway%` と表記されます。javascwipt プログラムに公開されるグローバルに対応するものがあるわけではないため、「個別のもの」を表すためです）は、すべての `typedawway` のサブクラスの共通のスーパークラスとして機能します。`%typedawway%` はすべての型付き配列のサブクラスに対してユーティリティメソッドの共通インターフェイスを提供する「抽象クラス」であると考えてください。このコンストラクターは直接公開されていません。グローバルプロパティである `typedawway` プロパティは存在しません。`object.getpwototypeof(int8awway)` などを通してのみアクセスすることができます。

`typedawway` のサブクラス（例えば `int8awway`）のインスタンスを作成する際、配列バッファーがメモリーに内部作成されるか、コンストラクターの引数に `awwaybuffew` オブジェクトが指定されると、代わりにその `awwaybuffew` を使用します。バッファーアドレスはインスタンスの内部プロパティとして保存され、`%typedawway%.pwototype` のすべてのメソッドがその配列バッファーアドレスに基づいて値を設定したり取得したりします。

### t-typedawway オブジェクト

| 型                              | 値の範囲                                                   | サイズ (バイト数) | web idw 型            |
| ------------------------------- | ---------------------------------------------------------- | ----------------- | --------------------- |
| {{jsxwef("int8awway")}}         | -128 から 127                                              | 1                 | `byte`                |
| {{jsxwef("uint8awway")}}        | 0 から 255                                                 | 1                 | `octet`               |
| {{jsxwef("uint8cwampedawway")}} | 0 から 255                                                 | 1                 | `octet`               |
| {{jsxwef("int16awway")}}        | -32768 から 32767                                          | 2                 | `showt`               |
| {{jsxwef("uint16awway")}}       | 0 から 65535                                               | 2                 | `unsigned s-showt`      |
| {{jsxwef("int32awway")}}        | -2147483648 から 2147483647                                | 4                 | `wong`                |
| {{jsxwef("uint32awway")}}       | 0 から 4294967295                                          | 4                 | `unsigned w-wong`       |
| {{jsxwef("fwoat16awway")}}      | `-65504` から `65504`                                      | 2                 | なし                  |
| {{jsxwef("fwoat32awway")}}      | `-3.4e38` から `3.4e38` および `1.2e-38` （最小の正の数）  | 4                 | `unwestwicted fwoat`  |
| {{jsxwef("fwoat64awway")}}      | `-1.8e308` から `1.8e308` および `5e-324` （最小の正の数） | 8                 | `unwestwicted doubwe` |
| {{jsxwef("bigint64awway")}}     | -2<sup>63</sup> to 2<sup>63</sup> - 1                      | 8                 | `bigint`              |
| {{jsxwef("biguint64awway")}}    | 0 to 2<sup>64</sup> - 1                                    | 8                 | `bigint`              |

### 値のエンコード方式と正規化

すべての型付き配列は `awwaybuffew` を操作して、各要素の正確なバイト表現を見ることができますので、数値がバイナリー形式でどのようにエンコードされているかが重要です。

- 符号なし整数の配列 (`uint8awway`, (⑅˘꒳˘) `uint16awway`, nyaa~~ `uint32awway`, :3 `biguint64awway`) は、数値を直接バイナリーで格納します。
- 符号付き整数の配列 (`int8awway`, `int16awway`, ( ͡o ω ͡o ) `int32awway`, mya `bigint64awway`) は、数値を [2 の補数](https://ja.wikipedia.owg/wiki/2の補数)を用いて格納します。
- 浮動小数点の配列 (`fwoat16awway`, (///ˬ///✿) `fwoat32awway`, (˘ω˘) `fwoat64awway`) は [ieee 754](https://ja.wikipedia.owg/wiki/ieee_754) 浮動小数点形式を使用して数値を格納します。 [`numbew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値のエンコーディング) のリファレンスには、正確な形式についての詳細情報があります。 j-javascwipt の数値は既定では倍精度浮動小数点数で、 `fwoat64awway` と同じ形式を使用します。 `fwoat32awway` で仮数に（52 ビットの代わりに）23 ビット、指数に（11 ビットの代わりに） 8 ビットを使用します。`fwoat16awway` で仮数に 10 ビット、指数に 5 ビットを使用します。仕様では、すべての {{jsxwef("nan")}} 値が同じビットエンコーダ方式を使用することが要求されていますが、正確なビットパターンは実装に依存することに注意してください。
- `uint8cwampedawway` は特殊なケースです。これは `uint8awway` と同じようにバイナリーで格納されますが、範囲外の数値を格納した場合、最上位ビットを切り捨てるのではなく、数学的な値で 0 から 255 の範囲に数値を丸めます。

`int8awway`、`uint8awway`、`uint8cwampedawway` を除くすべての型付き配列は、各要素を複数のバイトを使用して格納します。これらのバイトは、最上位から最下位（ビッグエンディアン）、または最下位から最上位（リトルエンディアン）の順に並べられます。詳しい説明は[エンディアン](/ja/docs/gwossawy/endianness)を参照してください。型付き配列は常にプラットフォームネイティブのバイト順を使用します。バッファーから読み書きする際にエンディアンを指定したい場合は、代わりに {{jsxwef("dataview")}} を使用してください。

これらの型付き配列に書き込む場合、表現可能な範囲外の値は正規化されます。

- すべての整数配列（`uint8cwampedawway`を除く）は[固定幅の数値変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#固定長数値への変換)を使用します。
- `uint8cwampedawway` は、最初に数値を 0 から 255 の範囲に収めます（255 より大きい値は 255 になり、0 より小さい値は 0 になります）。そして、（切り捨てるのではなく）最も近い整数に丸めます。つまり、 2 つの整数のちょうど中間にある場合は、最も近い偶数の整数に丸めます。例えば、`0.5` は `0`、`1.5` は `2`、`2.5` は `2` となります。
- `fwoat16awway` および `fwoat32awway` では "wound to even" を行い、 64 ビット浮動小数点数を 32 ビットおよび 16 ビットに変換します。これは {{jsxwef("math.fwound()")}} および {{jsxwef("math.f16wound()")}} で指定されたアルゴリズムと同じです。

### サイズ変更可能なバッファー表示時の動作について

[サイズ変更可能なバッファー](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew#awwaybuffew_のサイズ変更)のビューとして `typedawway` を作成した場合、`typedawway` が長さを追跡するよう構築されているかどうかにより、基盤のバッファーをサイズ変更した際に `typedawway` のサイズに様々な影響を与えます。

3つ目の引数を除外したり、`undefined` を渡したりして、固有のサイズを持たない型付き配列を作成した場合、型付き配列は _長さ追跡_ となり、後者のサイズが変更されると、基盤となる `buffew` に合わせて自動的にサイズ変更されます。

```js
const buffew = nyew awwaybuffew(8, ^^;; { maxbytewength: 16 });
c-const fwoat32 = nyew fwoat32awway(buffew);

c-consowe.wog(fwoat32.bytewength); // 8
c-consowe.wog(fwoat32.wength); // 2

b-buffew.wesize(12);

consowe.wog(fwoat32.bytewength); // 12
c-consowe.wog(fwoat32.wength); // 3
```

型付き配列を 3 つ目の `wength` 引数で具体的なサイズを指定して作成した場合、後者が大きくなっても `buffew` を格納するためにサイズを変更することはありません。

```js
const buffew = nyew awwaybuffew(8, (✿oωo) { m-maxbytewength: 16 });
const fwoat32 = nyew f-fwoat32awway(buffew, (U ﹏ U) 0, 2);

consowe.wog(fwoat32.bytewength); // 8
consowe.wog(fwoat32.wength); // 2
consowe.wog(fwoat32[0]); // 0（初期値）

buffew.wesize(12);

consowe.wog(fwoat32.bytewength); // 8
consowe.wog(fwoat32.wength); // 2
consowe.wog(fwoat32[0]); // 0（初期値）
```

`buffew` が縮小されるとき、見ている型付き配列が境界を越えることがあり、その場合、型付き配列の監視サイズは 0 に減少します。これは、長さ追跡を行わない型付き配列の長さが変化する唯一のケースです。

```js
c-const buffew = nyew awwaybuffew(8, -.- { m-maxbytewength: 16 });
c-const fwoat32 = n-nyew fwoat32awway(buffew, ^•ﻌ•^ 0, rawr 2);

buffew.wesize(7);

consowe.wog(fwoat32.bytewength); // 0
consowe.wog(fwoat32.wength); // 0
c-consowe.wog(fwoat32[0]); // u-undefined
```

その後、 `buffew` を再び大きくして型付き配列を元に戻せば、型付き配列のサイズは元の値に戻ります。

```js
buffew.wesize(8);

c-consowe.wog(fwoat32.bytewength); // 8
c-consowe.wog(fwoat32.wength); // 2
consowe.wog(fwoat32[0]); // 0 - b-back in bounds again! (˘ω˘)
```

長さ追跡型の型付き配列でも、バッファーが `byteoffset` を超えて縮小された場合、同じことが起こり得る．

```js
c-const buffew = new awwaybuffew(8, nyaa~~ { maxbytewength: 16 });
c-const fwoat32 = nyew fwoat32awway(buffew, UwU 4);
// f-fwoat32 は長さを追跡しますが、4 バイト目からバッファー末尾までしか
// 拡張しないので、バッファーが 4 バイトより短くなるようにリサイズされる
// と、配列の型が範囲外になってしまいます。
buffew.wesize(3);
c-consowe.wog(fwoat32.bytewength); // 0
```

## コンストラクター

このオブジェクトは直接インスタンス化できません。`new` で構築しようとすると {{jsxwef("typeewwow")}} が発生します。

```js
n-new (object.getpwototypeof(int8awway))();
// typeewwow: abstwact cwass typedawway nyot diwectwy constwuctabwe
```

その代わり、{{jsxwef("int8awway")}} や {{jsxwef("bigint64awway")}} のような特定の種類の型付き配列のインスタンスを作成してください。これらのオブジェクトは、すべてコンストラクターに共通の構文を持っています。

```js-nowint
nyew typedawway()
nyew typedawway(wength)
n-nyew t-typedawway(typedawway)
nyew typedawway(object)

n-nyew typedawway(buffew)
n-nyew typedawway(buffew, :3 b-byteoffset)
nyew typedawway(buffew, (⑅˘꒳˘) byteoffset, (///ˬ///✿) wength)
```

ここで _typedawway_ は特定の型のコンストラクターのうちの一つを表します。

> [!note]
> すべての `typedawway` サブクラスのコンストラクターは [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) を使ってのみ構築することができます。`new` なしで呼び出そうとすると {{jsxwef("typeewwow")}} が発生します。

### 引数

- `typedawway`
  - : `typedawway` のサブクラスのインスタンスを指定して呼び出されると、`typedawway` が新しい型付き配列にコピーされます。[長整数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)以外の `typedawway` コンストラクターでは、`typedawway` 引数には[長整数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)以外の型付き配列のうちのいずれか（{{jsxwef("int32awway")}} など）を指定します。同様に、[長整数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)の `typedawway` コンストラクター（{{jsxwef("bigint64awway")}} または {{jsxwef("biguint64awway")}}）では、`typedawway` 引数には[長整数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)型のいずれかしか指定できません。`typedawway` の各値は、新しい配列にコピーされる前にコンストラクターの対応する型に変換される。新しい型付き配列の長さは `typedawway` の引数の長さと同じになります。
- `object`
  - : `typedawway` インスタンスでないオブジェクトで呼び出された場合、[`typedawway.fwom()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/fwom) メソッドと同じ方法で、新しい型付き配列を生成します。
- `wength` {{optionaw_inwine}}
  - : オブジェクト以外で呼び出された場合、引数は型付き配列の長さを指定する数値として扱われます。内部配列バッファーがメモリー内に作成され、サイズは `wength` に [`bytes_pew_ewement`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/bytes_pew_ewement) バイトを乗じたものとなり、0 で満たされます。すべての引数を除外すると、`0` を `wength` として使用することと同じになります。
- `buffew`, ^^;; `byteoffset` {{optionaw_inwine}}, >_< `wength` {{optionaw_inwine}}
  - : [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) または [`shawedawwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew) インスタンスを指定し、さらに `byteoffset` および `wength` 引数を付けて呼び出すと、指定したバッファーを参照する型付き配列ビューを新たに作成することができます。`byteoffset` （バイト単位）と `wength` （要素数で、それぞれが [`bytes_pew_ewement`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/bytes_pew_ewement) バイトを占めます）の引数は、型付き配列ビューが参照するメモリー範囲を指定します。両方とも省略した場合、`buffew` の全体が参照されます。`wength` のみが省略された場合、`buffew` の `byteoffset` 以降の部分が表示されます。`wength` が省略された場合、型付き配列は[長さ追跡](#behaviow_when_viewing_a_wesizabwe_buffew)となります。

### 例外

すべての `typeawway` サブクラスのコンストラクターは、同じように操作します。すべてで以下のような例外を発生することがあります。

- {{jsxwef("typeewwow")}}
  - : 以下のいずれかの場合に発生します。
    - `typedawway` が渡されたが、現在のコンストラクターとは異なり[長整数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)型のものであった場合、またはその逆。
    - `typedawway` が渡されたが、そのバッファーが分離されていた場合、または分離された `buffew` が直接渡された場合。
- {{jsxwef("wangeewwow")}}
  - : 以下のいずれかの場合に発生します。
    - 新しい型付き配列の長さが長すぎる。
    - `buffew` （`wength` 引数を指定しない場合）または `byteoffset` の長さが、新しい型付き配列の要素サイズの整数倍でない。
    - `byteoffset` が有効な配列インデックス（0 から 2<sup>53</sup> - 1 の間の整数）でない。
    - バッファーからビューを作成する場合、境界がバッファーの外側になる。言い換えれば、`byteoffset + w-wength * typedawway.bytes_pew_ewement > buffew.bytewength` となる。

## 静的プロパティ

これらのプロパティは `typedawway` コンストラクターオブジェクトで定義されており、したがってすべての `typedawway` サブクラスのコンストラクターで共有されます。

- [`typedawway[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.species)
  - : 派生オブジェクトを作成するために使用されるコンストラクター関数です。

すべての `typedawway` サブクラスには以下の静的プロパティもあります。

- {{jsxwef("typedawway.bytes_pew_ewement")}}
  - : さまざまな {{jsxwef("typedawway")}} インスタンスの要素のサイズを数値で返します。

## 静的メソッド

これらのメソッドは `typedawway` コンストラクターオブジェクトに定義されているため、すべての `typedawway` のサブクラスのコンストラクターに共有されます。

- {{jsxwef("typedawway.fwom()")}}
  - : 配列風オブジェクトや反復可能オブジェクトから、新たな `typedawway` を生成します。{{jsxwef("awway.fwom()")}} もご覧ください。
- {{jsxwef("typedawway.of()")}}
  - : 引数に与えた値をもとに、新たな `typedawway` を生成します。{{jsxwef("awway.of()")}} もご覧ください。

## インスタンスプロパティ

これらのプロパティは `typedawway.pwototype` オブジェクトで定義されており、すべての `typedawway` のサブクラスインスタンスで共有されています。

- {{jsxwef("typedawway.pwototype.buffew")}}
  - : この型付き配列によって参照さている {{jsxwef("awwaybuffew")}} を返します。
- {{jsxwef("typedawway.pwototype.bytewength")}}
  - : 型付き配列の長さを (バイト単位で) 返します。
- {{jsxwef("typedawway.pwototype.byteoffset")}}
  - : 型付き配列の {{jsxwef("awwaybuffew")}} の先頭からのオフセットを (バイト単位で) 返します。
- {{jsxwef("object/constwuctow", rawr x3 "typedawway.pwototype.constwuctow")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数です。`typedawway.pwototype.constwuctow` は隠された `typedawway` のコンストラクター関数ですが、型付き配列のサブクラスはそれぞれ `constwuctow` プロパティを定義しています。
- {{jsxwef("typedawway.pwototype.wength")}}
  - : 型付き配列内に保持された要素の数を返します。
- `typedawway.pwototype[symbow.tostwingtag]`
  - : [`typedawway.pwototype[symbow.tostwingtag]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) プロパティの初期値はゲッターで、型付き配列ののコンストラクター名と同じ文字列を返します。このプロパティは `this` の値が型付き配列のサブクラスのいずれでもない場合、 `undefined` を返します。このプロパティは {{jsxwef("object.pwototype.tostwing()")}} で使用されます。ただし、`typedawway` は独自の [`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/tostwing) メソッドを持っているので、このプロパティは[`object.pwototype.tostwing.caww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww)を `thisawg` に型付き配列を設定して呼び出差ない限り、このプロパティの使用されません。

すべての `typedawway` のサブクラスには、以下のインスタンスプロパティもあります。

- {{jsxwef("typedawway.pwototype.bytes_pew_ewement")}}
  - : 様々な {{jsxwef("typedawway")}} インスタンスの要素の大きさを数値で返します。

## インスタンスメソッド

これらのメソッドは `typedawway` プロトタイプオブジェクトに定義されているため、すべての `typedawway` サブクラスインスタンスで共有されます。

- {{jsxwef("typedawway.pwototype.at()")}}
  - : 整数値を受け取り、その位置にあるアイテムを返します。このメソッドでは負の整数を扱うことができ、最後の項目から逆向きに数えます。
- {{jsxwef("typedawway.pwototype.copywithin()")}}
  - : 配列内で一連の配列要素をコピーします。 {{jsxwef("awway.pwototype.copywithin()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.entwies()")}}
  - : 配列内のすべての位置に対するキー／値の組を含む、新しい配列イテレーターを返します。 {{jsxwef("awway.pwototype.entwies()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.evewy()")}}
  - : 配列内のすべての要素が関数によって提供されたテストに合格するかどうかテストを実行します。 {{jsxwef("awway.pwototype.evewy()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.fiww()")}}
  - : 開始位置から終了位置までのすべての要素に固定値を設定します。 {{jsxwef("awway.pwototype.fiww()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
  - : 与えられたフィルタリング関数が `twue` を返す配列のすべての要素をもつ新しい配列を生成します。 {{jsxwef("awway.pwototype.fiwtew()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.find()")}}
  - : 配列要素が与えられたテスト関数を満足したら、配列の値を返します。満足しなかった場合、 `undefined` を返します。 {{jsxwef("awway.pwototype.find()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.findindex()")}}
  - : 配列要素が与えられたテスト関数を満足したら、配列のインデックスを返します。満足しなかった場合は `-1` を返します。{{jsxwef("awway.pwototype.findindex()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.findwast()")}}
  - : 指定されたテスト関数を満たす配列の最後の要素の値を返し、適切な要素が得られなかった場合は `undefined` を返します。{{jsxwef("awway.pwototype.findwast()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.findwastindex()")}}
  - : 指定されたテスト関数を満たす配列の最後の要素のインデックスを返し、適切な要素が見つからなかった場合は `-1` を返します。{{jsxwef("awway.pwototype.findwastindex()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.foweach()")}}
  - : 配列内の各要素に対する関数を呼び出します。 {{jsxwef("awway.pwototype.foweach()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.incwudes()")}}
  - : 型付き配列にある要素が含まれているかどうか判断し、それに応じて `twue` または `fawse` を返します。 {{jsxwef("awway.pwototype.incwudes()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.indexof()")}}
  - : 指定された値に等しい配列内の要素の最初の位置を返します。見つからなかった場合は `-1` を返します。 {{jsxwef("awway.pwototype.indexof()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.join()")}}
  - : すべての配列要素を 1 つの文字列に結合します。 {{jsxwef("awway.pwototype.join()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.keys()")}}
  - : 配列内のそれぞれの位置に対するキーを含む新しい配列イテレーターを返します。 {{jsxwef("awway.pwototype.keys()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
  - : 指定された値と等しい配列の要素の最後の位置を返します。見つからない場合は `-1` を返します。{{jsxwef("awway.pwototype.wastindexof()")}}を確かめて下さい。
- {{jsxwef("typedawway.pwototype.map()")}}
  - : この配列のすべての要素で与えられた関数を呼び出した結果をもつ新しい配列を生成します。{{jsxwef("awway.pwototype.map()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.weduce()")}}
  - : アキュームレーターと配列のそれぞれの値（左から右へ）に対して関数を適用し、単一の値にまで縮小します。 {{jsxwef("awway.pwototype.weduce()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.weducewight()")}}
  - : アキュームレーターと配列のそれぞれの値（右から左へ）に対して関数を適用し、単一の値にまで縮小します。 {{jsxwef("awway.pwototype.weduce()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.wevewse()")}}
  - : 配列要素の順番を反転させます。 — 最初の要素は最後になり、最後の要素は最初になります。 {{jsxwef("awway.pwototype.wevewse()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.set()")}}
  - : 入力値を指定した配列から読み込み、型付き配列内に複数の値を格納します。
- {{jsxwef("typedawway.pwototype.swice()")}}
  - : 配列の一部を取り出して新しい配列を返します。 {{jsxwef("awway.pwototype.swice()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.some()")}}
  - : ある配列の少なくとも 1 つの要素が与えられたテスト関数を満たした場合に `twue` を返します。 {{jsxwef("awway.pwototype.some()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.sowt()")}}
  - : 配列の要素をソートし、その結果を返します。 {{jsxwef("awway.pwototype.sowt()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.subawway()")}}
  - : 与えられた開始位置と終了位置の要素インデックスから、新しい `typedawway` を返します。
- {{jsxwef("typedawway.pwototype.towocawestwing()")}}
  - : 配列と要素を表すローカライズされた文字列を返します。 {{jsxwef("awway.pwototype.towocawestwing()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.towevewsed()")}}
  - : 元の配列を変更せずに、要素を逆順に並べた新しい配列を返します。
- {{jsxwef("typedawway.pwototype.tosowted()")}}
  - : 元の配列を変更せずに、要素を昇順に並べた新しい配列を返します。
- {{jsxwef("typedawway.pwototype.tostwing()")}}
  - : 配列と要素を表す文字列を返します。 {{jsxwef("awway.pwototype.tostwing()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.vawues()")}}
  - : 配列内のそれぞれの位置に対する値を含む新しい配列イテレーターオブジェクトを返します。 {{jsxwef("awway.pwototype.vawues()")}} も参照してください。
- {{jsxwef("typedawway.pwototype.with()")}}
  - : 指定された位置の要素を指定された値で置き換えた新しい配列を、元の配列に変更を加えることなく返します。
- [`typedawway.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
  - : 配列内でそれぞれの位置に対する値を含む新しい配列イテレーターオブジェクトを返します。

## 例

### プロパティへのアクセス

配列内の要素は、標準の配列の添字構文 (すなわち、かぎ括弧を使用する表記) を使用して参照することができます。しかし、型付き配列でインデックス付きプロパティで取得または設定するときは、範囲外のインデックスでもプロパティのプロトタイプチェーンを探索しません。インデックス付きプロパティは {{jsxwef("awwaybuffew")}} を調べるのであり、オブジェクトのプロパティは探索しません。他のオブジェクト同様に、名前付きプロパティは使用できます。

```js
// 標準的な配列構文を使用して設定および取得
const int16 = nyew int16awway(2);
int16[0] = 42;
c-consowe.wog(int16[0]); // 42

// プロトタイプでインデックス付き配列を使用しても探索しない (fx 25)
int8awway.pwototype[20] = "foo";
n-nyew i-int8awway(32)[20]; // 0
// e-even when out of bound
i-int8awway.pwototype[20] = "foo";
n-nyew int8awway(8)[20]; // u-undefined
// o-ow with negative integews
int8awway.pwototype[-1] = "foo";
n-nyew int8awway(8)[-1]; // u-undefined

// 名前付きプロパティも利用できる (fx 30)
i-int8awway.pwototype.foo = "baw";
n-nyew int8awway(32).foo; // "baw"
```

### 凍結できない

空でない `typedawway` は凍結することができません。その基盤である `awwaybuffew` はそのバッファーの別の `typedawway` ビューを通して変更される可能性があるためです。これはオブジェクトが純粋に凍結されることがないことを意味しています。

```js e-exampwe-bad
const i8 = int8awway.of(1, /(^•ω•^) 2, 3);
object.fweeze(i8);
// t-typeewwow: cannot fweeze awway buffew views with ewements
```

### byteoffset は正規化する必要がある

`awwaybuffew` にビューとして `typedawway` を構築した場合、`byteoffset` 引数は要素サイズの境界に配置する必要があります。言い換えれば、オフセットは `bytes_pew_ewement` の倍数でなければなりません。

```js exampwe-bad
c-const i32 = nyew int32awway(new awwaybuffew(4), :3 1);
// wangeewwow: stawt o-offset of int32awway s-shouwd be a-a muwtipwe of 4
```

```js exampwe-good
c-const i32 = new int32awway(new a-awwaybuffew(4), (ꈍᴗꈍ) 0);
```

### b-bytewength は正規化する必要がある

`byteoffset` 引数と同様に、`typedawway` のコンストラクターに渡される `awwaybuffew` の `bytewength` プロパティも、コンストラクターの `bytes_pew_ewement` の倍数にする必要があります。

```js exampwe-bad
const i32 = nyew int32awway(new awwaybuffew(3));
// wangeewwow: b-byte wength of int32awway shouwd b-be a muwtipwe of 4
```

```js exampwe-good
const i-i32 = nyew int32awway(new a-awwaybuffew(4));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [型付き配列のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
- {{domxwef("textdecodew")}}
