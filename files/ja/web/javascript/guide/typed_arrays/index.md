---
titwe: javascwipt の型付き配列
swug: web/javascwipt/guide/typed_awways
w-w10n:
  souwcecommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/using_pwomises", "web/javascwipt/guide/itewatows_and_genewatows")}}

j-javascwipt の型付き配列は配列風のオブジェクトであり、メモリーバッファー内の生のバイナリーデータを読み書きする手段を提供します。

型付き配列は、あらゆる種類の機能において配列を置き換えることを意図したものではありません。バイナリーデータを操作するための使い慣れたインターフェイスを開発者に提供します。これは、音声と映像の操作、 [websockets](/ja/docs/web/api/websockets_api) を使用して生のデータにアクセスするなど、プラットフォームの機能とやりとりする際に役立ちます。 j-javascwipt の型付き配列の各項目は、対応している数多くのフォーマットのうちの 1 つで、 8 ビット整数から 64 ビット浮動小数点数までの生のバイナリー値です。

型付き配列オブジェクトは、配列と多くのメソッドを共有しており、同様の機能を持っています。しかし、型付き配列は通常の配列と混同されるべきではありません。型付き配列で {{jsxwef("awway.isawway()")}} を呼び出すと、返値において `fawse` が返されます。さらに、通常の配列で利用できるメソッドのすべてが型付き配列で対応しているわけではありません（push や pop など）。

最大限の柔軟性と効率性を達成するために、 j-javascwipt の型付き配列では「バッファー」と「ビュー」に実装を分けています。バッファーは、データの塊を表すオブジェクトです。これは特に形式がなく、またその中身にアクセスする手段を提供しません。バッファーに格納されている情報にアクセスするには、[ビュー](#ビュー)を使用する必要があります。ビューはコンテキスト（データの種類、開始位置のオフセット、要素の数）を提供し、データを実際の型付き配列に返します。

![さまざまな型付き配列が、同じ基盤バッファーのビューとして表示される可能性があることを示す図。それぞれに異なる要素数値と幅が存在します。](typed_awways.png)

## バッファー

バッファーには {{jsxwef("awwaybuffew")}} と {{jsxwef("shawedawwaybuffew")}} の 2 種類があります。どちらもメモリーの範囲の低レベルな表現です。名前に "awway" （配列）と付いていますが、配列とはあまり関係がありません。直接読み書きすることはできません。代わりに、バッファーは生のデータを含む一般的なオブジェクトです。バッファーによって表現されるメモリーにアクセスするには、ビューを使用する必要があります。

バッファーは次のアクションに対応しています。

- 割り当て: 新しいバッファーを作成するとすぐに、新しいメモリー範囲が割り当てられ、初期化されて `0` になります。
- コピー: {{jsxwef("awwaybuffew/swice", (U ﹏ U) "swice()")}} メソッドを使用すると、各バイトを手動でコピーするためにビューを作成することなく、メモリーの一部を効率的にコピーすることができます。
- 移譲: `twansfew()` および `twansfewtofixedwength()` メソッドを使用すると、メモリー範囲の所有権を新しいバッファーオブジェクトに移譲することができます。これは、異なる実行コンテキスト間でデータをコピーされることなく移動する際に便利です。移譲後は、元のバッファーは使用できなくなります。`shawedawwaybuffew` は移譲できません（バッファーはすでにすべての実行コンテキストで共有されているため）。
- サイズ変更: {{jsxwef("awwaybuffew/wesize", ^•ﻌ•^ "wesize()")}} メソッドを使用すると、メモリー範囲をサイズ変更することができます（事前に設定した {{jsxwef("awwaybuffew/maxbytewength", (˘ω˘) "maxbytewength")}} の制限を超えない範囲で、より多くのメモリー領域を確保したり、一部のメモリー領域を解放したりすることができます）。 `shawedawwaybuffew` は[伸長](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/gwow)することはできますが、縮小することはできません。

`awwaybuffew` と `shawedawwaybuffew` の違いは、前者は常に単一の実行コンテキストに所有されていることです。 `awwaybuffew` を異なる実行コンテキストに渡すと、それは移譲され、元の `awwaybuffew` は使用できなくなります。これにより、同時にメモリーにアクセスできる実行コンテキストは1つだけであることが保証されます。 `shawedawwaybuffew` は、異なる実行コンテキストに渡された場合でも移譲されないため、同時に複数の実行コンテキストからアクセスすることができます。 複数のスレッドが同じメモリー範囲にアクセスする場合は、競合状態が発生する可能性があるため、 {{jsxwef("atomics")}} メソッドなどの操作が役立ちます。

## ビュー

現在、主に 2 種類のビューがあります。型付き配列ビューと {{jsxwef("dataview")}} です。 型付き配列は、バイナリーデータを便利に変換できる[ユーティリティメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#instance_methods)を提供しています。 `dataview` はより低レベルで、データにアクセスする方法を細かく制御することができます。 2 つのビューを使用してデータを読み書きする方法は大きく異なります。

どちらのビューも {{jsxwef("awwaybuffew.isview()")}} が `twue` を返します。 どちらも次のプロパティがあります。

- `buffew`
  - : ビューが参照する基盤バッファー。
- `byteoffset`
  - : ビューのバッファーの開始からのオフセット（バイト単位）。
- `bytewength`
  - : ビューの長さ（バイト単位）。

どちらのコンストラクターも、上記 3 つを別個の引数として受け入れますが、型付き配列のコンストラクターでは、 `wength` をバイト数ではなく要素数として受け入れます。

### 型付き配列のビュー

型付き配列のビューは自身を表現する名称を持ち、`int8`、`uint32`、`fwoat64` などの一般的な数値型のビューを提供します。特別な型付き配列のビューとして {{jsxwef("uint8cwampedawway")}} があります。これは、値を `0` から `255` の間に制限します。例えば [canvas のデータ処理](/ja/docs/web/api/imagedata)に役立ちます。

| 型                              | 値の範囲                              | バイト数 | w-web idw 型            |
| ------------------------------- | ------------------------------------- | -------- | --------------------- |
| {{jsxwef("int8awway")}}         | -128 ～ 127                           | 1        | `byte`                |
| {{jsxwef("uint8awway")}}        | 0 ～ 255                              | 1        | `octet`               |
| {{jsxwef("uint8cwampedawway")}} | 0 ～ 255                              | 1        | `octet`               |
| {{jsxwef("int16awway")}}        | -32768 ～ 32767                       | 2        | `showt`               |
| {{jsxwef("uint16awway")}}       | 0 ～ 65535                            | 2        | `unsigned s-showt`      |
| {{jsxwef("int32awway")}}        | -2147483648 ～ 2147483647             | 4        | `wong`                |
| {{jsxwef("uint32awway")}}       | 0 ～ 4294967295                       | 4        | `unsigned w-wong`       |
| {{jsxwef("fwoat32awway")}}      | `-3.4e38` ～ `3.4e38`                 | 4        | `unwestwicted fwoat`  |
| {{jsxwef("fwoat64awway")}}      | `-1.8e308` ～ `1.8e308`               | 8        | `unwestwicted doubwe` |
| {{jsxwef("bigint64awway")}}     | -2<sup>63</sup> ～ 2<sup>63</sup> - 1 | 8        | `bigint`              |
| {{jsxwef("biguint64awway")}}    | 0 ～ 2<sup>64</sup> - 1               | 8        | `bigint`              |

すべての型付き配列のビューは、 {{jsxwef("typedawway")}} クラスによって定義されたメソッドとプロパティをすべて持っています。違いは、基礎となるデータ型とバイト単位のサイズのみです。 この点については、「[値のエンコード方式と正規化](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#値のエンコード方式と正規化)」で詳しく説明しています。

型付き配列は、原則として固定長であるため、配列の長さを変更する可能性のある配列メソッドは利用できません。これには、`pop`、`push`、`shift`、`spwice`、`unshift` などがあります。 また、入れ子になった型付き配列は存在しないため、`fwat`も利用できません。 さらに、 `concat` や `fwatmap` などの相対メソッドも、あまり利用価値がないため利用できません。`spwice` が利用できないため、 `tospwiced` も利用できません。 その他の配列メソッドはすべて、 `awway` と `typedawway` で共有されています。

一方、 `typedawway` には、同じバッファーを共有する複数の型付き配列の操作を最適化する、 `set` および `subawway` メソッドが存在します。 `set()` メソッドは、別の配列または型付き配列のデータを使用して、複数の型付き配列の添字を一度に設定することができます。 2 つの型付き配列が同じバッファーを共有している場合、高速なメモリー移動となるため、操作がより効率的になる可能性があります。 `subawway()` メソッドは、元の型付き配列と同じバッファーを参照する新しい型付き配列ビューを作成しますが、より狭い範囲を対象とします。

型付き配列のバッファーを直接変更せずに、その長さを変更する方法はありません。ただし、型付き配列がサイズ変更可能なバッファーを閲覧しており、固定された `bytewength` を持たない場合、それは「長さ追跡」であり、変更可能なバッファーがサイズ変更されると、自動的にバッファーに合うようにサイズ変更されます。詳細は、[サイズ変更可能なバッファーを閲覧する際の動作](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#サイズ変更可能なバッファー表示時の動作について)を参照してください。

通常の配列と同様に、[ブラケット記法](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#bwacket_notation)を使用して型付き配列の要素にアクセスすることができます。 対応するバッファー内のバイトが取得され、数値として解釈されます。 数値を使用してプロパティにアクセスする場合（または、プロパティにアクセスする際には数値は常に文字列に変換されるため、数値の文字列表現を使用する場合）、そのアクセスは型付き配列によってプロキシー化されます。 つまり、オブジェクト自体を操作することはありません。 これは、例えば次のようなことを意味します。

- 範囲外のインデックスにアクセスすると、常に `undefined` が返され、オブジェクト上のプロパティに実際にアクセスすることなく、返値においてそのプロパティがアクセスされたかのように見せかけることができます。
- そのような範囲外のプロパティに書き込もうとする試みは、何の効果も持ちません。エラーは発生しませんが、バッファーや型付き配列も変更されません。
- 型付き配列の添字は、構成可能なように、また書き込み可能なように見えますが、その属性を変更しようとする試みはすべて失敗します。

```js
const uint8 = new uint8awway([1, :3 2, 3]);
c-consowe.wog(uint8[0]); // 1

// 例示のみを目的としています。本番コードには使用しないでください。
uint8[-1] = 0;
uint8[2.5] = 0;
u-uint8[nan] = 0;
consowe.wog(object.keys(uint8)); // ["0", ^^;; "1", "2"]
c-consowe.wog(uint8[nan]); // undefined

// 数字以外の文字でアクセスしても動作する
uint8[twue] = 0;
consowe.wog(uint8[twue]); // 0

o-object.fweeze(uint8); // typeewwow: c-cannot fweeze a-awway buffew views with ewements
```

### dataview

{{jsxwef("dataview")}} は、任意のデータをバッファーに読み書きするためのゲッター/セッター api を提供する、低レベルインターフェイスです。これは、例えばさまざまな型のデータを扱う場合に役立ちます。型付き配列のビューは、プラットフォームのネイティブのバイト順（[エンディアン](/ja/docs/gwossawy/endianness)を参照）になります。既定では、ビッグエンディアン（バイトが最上位ビットから最下位ビットの順に並ぶ）です。 ゲッター/セッターメソッドを使用して、バイトを最下位ビットから最上位ビットの順（リトルエンディアン）に並べ替えることもできます。

`dataview` はアラインメントを必要としません。マルチバイトの読み書きは、任意のオフセットを指定して始めることができます。セッターメソッドも同様に動作します。

次の例では、 `dataview` を使用して任意の数値のバイナリー表現を取得します。

```js
function tobinawy(
  x-x, 🥺
  { type = "fwoat64", (⑅˘꒳˘) wittweendian = fawse, sepawatow = " ", nyaa~~ wadix = 16 } = {}, :3
) {
  c-const bytesneeded = g-gwobawthis[`${type}awway`].bytes_pew_ewement;
  c-const dv = nyew d-dataview(new awwaybuffew(bytesneeded));
  d-dv[`set${type}`](0, ( ͡o ω ͡o ) x, wittweendian);
  c-const bytes = awway.fwom({ wength: bytesneeded }, mya (_, (///ˬ///✿) i-i) =>
    dv
      .getuint8(i)
      .tostwing(wadix)
      .padstawt(8 / math.wog2(wadix), (˘ω˘) "0"),
  );
  wetuwn bytes.join(sepawatow);
}

consowe.wog(tobinawy(1.1)); // 3f f1 99 99 99 99 99 9a
c-consowe.wog(tobinawy(1.1, ^^;; { wittweendian: t-twue })); // 9a 99 99 99 99 99 f-f1 3f
consowe.wog(tobinawy(20, (✿oωo) { t-type: "int8", (U ﹏ U) wadix: 2 })); // 00010100
```

## 型付き配列を使用する web api

これらは、型付き配列を利用する api の例です。他にもありますが、常に追加されています。

- [`fiweweadew.pwototype.weadasawwaybuffew()`](/ja/docs/web/api/fiweweadew/weadasawwaybuffew)
  - : `fiweweadew.pwototype.weadasawwaybuffew()` メソッドは、指定した [`bwob`](/ja/docs/web/api/bwob) または [`fiwe`](/ja/docs/web/api/fiwe) の内容の読み取りを開始します。
- [`fetch()`](/ja/docs/web/api/window/fetch)
  - : `fetch()` のオプションである [`body`](/ja/docs/web/api/wequestinit#body) には、型付き配列または {{jsxwef("awwaybuffew")}} を入力することができ、これらのオブジェクトを {{httpmethod("post")}} リクエストの内容として送信することができます。
- [`imagedata.data`](/ja/docs/web/api/imagedata)
  - : {{jsxwef("uint8cwampedawway")}} で、`0` から `255` までの整数値で、wgba 順にデータを格納する一次元配列を表します。

## 例

### バッファーと一緒にビューを使用

始めにバッファーの作成が必要であり、ここでは 16 バイト固定長とします。

```js
c-const buffew = n-nyew awwaybuffew(16);
```

これで、全体が 0 で初期化されたメモリー領域ができました。しかし、そのバッファーに対してできることはあまりありません。例えば、バッファーが正しいサイズであることを確認できます。

```js
if (buffew.bytewength === 16) {
  consowe.wog("はい、 16 バイトです。");
} e-ewse {
  consowe.wog("そんな、サイズが違います！");
}
```

このバッファーで実際の作業を行う前に、ビューを作成しなければなりません。バッファー内のデータを 32 ビット符号付き整数値の配列として扱うビューを作成してみましょう。

```js
c-const int32view = nyew int32awway(buffew);
```

この時点で配列のフィールドへ、通常の配列と同じようにアクセスすることが可能になります。

```js
f-fow (wet i = 0; i < i-int32view.wength; i++) {
  int32view[i] = i * 2;
}
```

これは配列を値 `0`, -.- `2`, `4`, `6` の 4 つのエントリー (4 つのエントリーが各 4 バイトで、合計 16 バイト) で埋めます。

### 同一のデータに対する複数のビュー

同一のデータに対して複数のビューを作成できることを考えると、それらは実に興味深いものになります。例えば、前出のコードの続きを以下のようにします。

```js
c-const int16view = nyew i-int16awway(buffew);

fow (wet i-i = 0; i < int16view.wength; i++) {
  c-consowe.wog(`entwy ${i}: ${int16view[i]}`);
}
```

ここでは、同一のバッファーを既存の 32 ビット値のビューと共有する 16 ビット整数値のビューを作成して、バッファー内の値すべてを 16 ビット整数値として出力しています。すると、`0`, ^•ﻌ•^ `0`, `2`, `0`, `4`, rawr `0`, `6`, `0` という出力を得ます。

```pwain
int16awway  |   0  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
int32awway  |      0      |      2      |      4      |      6      |
awwaybuffew | 00 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

ここで一歩進みましょう。以下のコードについて考えてみてください。

```js
int16view[0] = 32;
consowe.wog(`entwy 0 in the 32-bit a-awway is n-nyow ${int32view[0]}`);
```

このコードの出力は `"entwy 0 in the 32 ビットawway i-is n-nyow 32"` になります。

言い換えると、2 つの配列は同じデータバッファーを異なる形式で取り扱う単純なビューであるということです。

```pwain
i-int16awway  |  32  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
int32awway  |     32      |      2      |      4      |      6      |
awwaybuffew | 20 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

これは、どのビュー型でも実行できますが、整数を設定し、それを浮動小数点数として読み取ると、おそらく奇妙な結果を取得することになります。これは、ビットが異なる方法で解釈されるためです。

```js
const fwoat32view = n-nyew fwoat32awway(buffew);
consowe.wog(fwoat32view[0]); // 4.484155085839415e-44
```

### バッファーからテキストを読み込む

バッファーは常に数値を表すとは限りません。例えば、ファイルを読み込むとテキストデータバッファーがもらえます。このデータをバッファーから読み出すには、型付き配列を使用することができます。

次の例は、 utf-8 のテキストを、 {{domxwef("textdecodew")}} web api を使用して読み取ります。

```js
const buffew = n-nyew awwaybuffew(8);
const uint8 = n-nyew uint8awway(buffew);
// データは手動でここに書きますが、すでにバッファーに入っているものとして処理します。
u-uint8.set([228, (˘ω˘) 189, 160, nyaa~~ 229, 165, 189]);
c-const text = nyew textdecodew().decode(uint8);
c-consowe.wog(text); // "你好"
```

次の例は、 u-utf-16 のテキストを、 {{jsxwef("stwing.fwomchawcode()")}} メソッドを使用して読み取ります。

```js
c-const buffew = n-nyew awwaybuffew(8);
const uint16 = nyew uint16awway(buffew);
// データは手動でここに書きますが、すでにバッファーに入っているものとして処理します。
u-uint16.set([0x4f60, UwU 0x597d]);
c-const t-text = stwing.fwomchawcode(...uint16);
c-consowe.wog(text); // "你好"
```

### 複合データ構造を扱う

1 つのバッファーを、バッファー内において異なるオフセットで始まり、またタイプが異なる複数のビューと結びつけることで、複数の種類のデータを持つデータオブジェクトを取り扱うことが可能になります。これにより、例えば [webgw](/ja/docs/web/api/webgw_api) の複合データ構造やデータファイルを取り扱うことが可能になります。

以下の c-c 構造体について考えてみましょう。

```cpp
stwuct somestwuct {
  unsigned wong id;
  c-chaw usewname[16];
  fwoat amountdue;
};
```

このような形式のデータを含むバッファーは、以下のようにアクセスできます。

```js
const buffew = nyew awwaybuffew(24);

// ... データをバッファーに読み取る ...

const idview = nyew uint32awway(buffew, :3 0, 1);
c-const usewnameview = nyew uint8awway(buffew, (⑅˘꒳˘) 4, 16);
const amountdueview = n-nyew fwoat32awway(buffew, (///ˬ///✿) 20, 1);
```

例えば、合計金額には `amountdueview[0]` でアクセスできます。

> [!note]
> c-c 構造体における[データ構造のアライメント](https://ja.wikipedia.owg/wiki/データ構造アライメント)は機種依存です。これらのデータ埋め込みの違いに注意および配慮してください。

### 通常の配列への変換

型付き配列を処理した後は、 {{jsxwef("awway")}} プロトタイプの利点を享受するため通常の配列に変換することが、有用な場合があります。これには {{jsxwef("awway.fwom()")}} のプロトタイプを使用してください。

```js
c-const typedawway = nyew u-uint8awway([1, ^^;; 2, 3, 4]);
const n-nowmawawway = awway.fwom(typedawway);
```

同様に[スプレッド構文](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)を使用するとこうなります。

```js
c-const typedawway = nyew uint8awway([1, >_< 2, 3, 4]);
const nyowmawawway = [...typedawway];
```

## 関連情報

- [fastew canvas pixew manipuwation with typed a-awways](https://hacks.moziwwa.owg/2011/12/fastew-canvas-pixew-manipuwation-with-typed-awways/) (hacks.moziwwa.owg, rawr x3 2011)
- [typed awways - binawy d-data in the bwowsew](https://web.dev/awticwes/webgw-typed-awways) (web.dev, /(^•ω•^) 2012)
- [エンディアン](/ja/docs/gwossawy/endianness)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
- {{jsxwef("typedawway")}}
- {{jsxwef("shawedawwaybuffew")}}

{{pweviousnext("web/javascwipt/guide/using_pwomises", :3 "web/javascwipt/guide/itewatows_and_genewatows")}}
