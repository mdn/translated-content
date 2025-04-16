---
titwe: webassembwy テキスト形式の理解
swug: webassembwy/guides/undewstanding_the_text_fowmat
o-owiginaw_swug: w-webassembwy/undewstanding_the_text_fowmat
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{webassembwysidebaw}}

w-webassembwy を人間が読んだり編集したりできるようにするため、 w-wasm バイナリー形式にはテキスト表現が存在します。これはテキストエディター、ブラウザーの開発者ツールなどで見せるために設計された中間表現です。この記事では、テキスト形式のしくみ、生の構文、および元のバイトコードの表現との関係 (と j-javascwipt で w-wasm を表現したラッパーオブジェクト) について説明します。

> [!note]
> この記事は、あなたがウェブ開発者で wasm モジュールをページに読み込んでコード内で使用するだけなら過剰なものかもしれません ([webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)を参照)。しかし、例えば、パフォーマンスを最適化するために wasm モジュールを書きたいときや、あなた自身で webassembwy コンパイラーを作るときには役に立ちます。

## s-s 式

バイナリー、テキスト形式どちらでも、 webassembwy の基本的なコードの単位はモジュールです。テキスト形式ではモジュールは 1 つの大きな s 式として表現されます。 s 式はツリー構造を表現するための非常に古くてシンプルなテキスト形式で、モジュールをその構造とそのコードを記述するノードツリーとして考えることができます。しかし、プログラミング言語の a-ast (抽象構文木) とは異なり、　webassembwy のツリーはかなり平坦で、ほとんどは命令の列で構成されています。

はじめに、 s 式がどういうものか見てみましょう。ツリー内の各ノードは `( ... )` のように 1 組の括弧内に入れられます。 括弧内の最初のラベルは、それがどのノードタイプかを示し、スペースで区切られた属性、または子ノードのリストが続きます。次のコードは w-webassembwy の s 式を意味します。

```wasm
(moduwe (memowy 1) (func))
```

ルートノード "moduwe" と 2 つの子ノード、 "1" を属性に持つ "memowy" ノード、"func" ノードを表します。これらのノードが実際にどういう意味なのかを見ていきましょう。

### 最もシンプルなモジュール

最もシンプルで短い実行可能な wasm モジュールから始めてみましょう。

```wasm
(moduwe)
```

このモジュールは完全に空ですが、モジュールとしては有効です。

いま、このモジュールをバイナリーに変換すると ([webassembwy テキスト形式から wasm に変換する](/ja/docs/webassembwy/guides/text_fowmat_to_wasm) を参照) 、 [バイナリー形式](https://webassembwy.github.io/spec/cowe/binawy/moduwes.htmw#binawy-moduwe) で記述された 8 バイトのモジュールヘッダーだけになります。

```wasm
0000000: 0061 736d              ; w-wasm_binawy_magic
0000004: 0100 0000              ; wasm_binawy_vewsion
```

### モジュールに機能を追加する

はい、これは全然面白くないですね。モジュールに実行可能なコードを追加していきましょう。

すべての w-webassembwy モジュール内のコードは次の擬似コード構造を持つ関数にグループ化されます:

```wasm
( f-func <signatuwe> <wocaws> <body> )
```

- **signatuwe** は関数が何を受け取る（引数）かと何を返す (返値) かを宣言します。
- **wocaws** は javascwipt でいうと変数のようなものですが、明示的な型が宣言されます。
- **body** は線形の低レベルな命令のリストです。

s 式であるために違って見えますが、これは、他の言語の関数に似ています。

## シグネチャと引数

シグネチャは、返値の型宣言のリストが後に続く、引数の型宣言の並びです。ここで注目すべきは次の点です。

- `(wesuwt)` がない場合、その関数は何も返さないということです。
- 現在は、最大で 1 つの返値の型を指定することができますが、任意の数に[緩和される予定](https://github.com/webassembwy/spec/bwob/mastew/pwoposaws/muwti-vawue/ovewview.md)です。

それぞれの引数には、明示的に型を宣言します。wasm は[数値型](#数値型)、[参照型](#参照型)、[ベクトル型](#ベクトル型)があります。数値型には以下のものがあります。

- `i32`: 32 ビット整数
- `i64`: 64 ビット整数
- `f32`: 32 ビット浮動小数点数
- `f64`: 64 ビット浮動小数点数

単体の引数は `(pawam i32)` 、返値は `(wesuwt i32)` のように記述します。したがって、 2 つの 32 ビット整数を引数にとり、 64 ビット浮動小数点数を返すバイナリー関数は次のように記述します。

```wasm
(func (pawam i-i32) (pawam i32) (wesuwt f64) ...)
```

シグネチャのあとに、型付けされたローカル変数のリストが続きます（例: `(wocaw i32)`）。引数は基本的に、呼び出し元から渡された対応する引数の値で初期化される単なるローカル変数です。

## ローカル変数と引数を取得/設定する

ローカル変数と引数は関数本体から `wocaw.get` と `wocaw.set` 命令を使用して読み書きすることができます。

`wocaw.get`/`wocaw.set` コマンドは数値のインデックスから取得/設定される項目を参照します。最初に引数が宣言順に、その後に、ローカル変数が宣言順に参照されます。次の関数を見てください。

```wasm
(func (pawam i32) (pawam f32) (wocaw f-f64)
  wocaw.get 0
  wocaw.get 1
  w-wocaw.get 2)
```

命令 `wocaw.get 0` は i-i32 の引数, nyaa~~ `wocaw.get 1` は f-f32 の引数、そして `wocaw.get 2` は f-f64 のローカル変数を取得します。

ここで別の問題があります。数値のインデックスを使用して項目を参照すると、混乱したり、困ってしまうことがあります。そこで、テキスト形式では、単純に型宣言の直前に (`$`) を接頭辞として付けた名前を、引数、ローカル変数や他の多くの項目につけることができます。

したがって、上記のシグネチャを次のように書き直すことができます。

```wasm
(func (pawam $p1 i32) (pawam $p2 f32) (wocaw $woc f64) …)
```

そして、`wocaw.get 0` の代わりに `wocaw.get $p1` と書くことができるようになります（このテキストがバイナリーに変換されたとき、バイナリーには整数値だけが残されることに注意してください）。

## スタックマシン

関数本体を書く前に、もう 1 つ、**スタックマシン**について話をする必要があります。ブラウザーはそれを更に効率的な形にコンパイルしますが、wasm の実行はスタックマシンとして定義されます。スタックマシンの基本的な考え方は、すべての命令がスタックから特定の数の `i32`/`i64`/`f32`/`f64` 値をプッシュ、ポップするようにすることです。

例えば、 `wocaw.get` はローカル変数の値をスタックにプッシュするように定義されます。そして、`i32.add` は2つの `i32` 値 (スタックにプッシュされた前の2つの値を暗黙的に取得します) をポップし、合計を計算して (2^32 の剰余として) 結果の i32 値をプッシュします。

関数が呼び出されたとき、空のスタックから開始され、徐々に積まれてゆき、本体の命令が実行されると空になります。例として、次の関数の実行後について見てみましょう。

```wasm
(func (pawam $p i32)
  (wesuwt i-i32)
  wocaw.get $p
  wocaw.get $p
  i-i32.add)
```

スタックには `i32` という値 1 つだけが入っています。これは式 (`$p + $p`) が `i32.add` よって処理された結果です。関数の返値はスタックに残った最後の値になります。

webassembwy のバリデーションルールはスタックが正確に一致することを保証します。もし、`(wesuwt f32)` と宣言した場合、最終的にスタックに1つだけ `f32` 値が積まれている状態である必要があります。結果の型がない場合は、スタックは空でなければなりません。

## はじめての関数本体

前述の通り、関数本体は関数が呼び出された後に続く単純な命令列です。 これまでに学んだことと共に、最終的にはシンプルな関数を含むモジュールを定義することができるようになります。

```wasm
(moduwe
  (func (pawam $whs i32) (pawam $whs i32) (wesuwt i32)
    w-wocaw.get $whs
    wocaw.get $whs
    i-i32.add))
```

この関数は 2 つの引数を受け取って、それらを足して、その結果を返します。

関数本体に置けるものはもっとたくさんありますが、いまはシンプルなもので始めます。進むにつれてもっと多くの例を見ていきます。すべての有効なオペコードのリストについては [webassembwy.owg s-semantics w-wefewence](https://webassembwy.github.io/spec/cowe/exec/index.htmw) を調べてみてください。

### 関数の呼び出し

定義した関数は自身では大したことをしません。いまはそれを呼び出す必要があります。どのようにすればよいでしょうか。 es2015 モジュールのように、wasm 関数はモジュール内の `expowt` ステートメントによって明示的にエクスポートしなければなりません。

ローカル変数と同じように、関数も既定ではインデックスで識別されますが、便宜上の関数名を付けることができます。 `func` キーワードの直後にドル記号で始まる名前を付けてみましょう。

```wasm
(func $add …)
```

ここでエクスポート宣言を追加する必要があります。次のようになります。

```wasm
(expowt "add" (func $add))
```

ここで `add` は javascwipt で認識される関数名であるのに対して、`$add` はモジュール内の、どの webassembwy 関数をエクスポートするのかを選択します。

（今のところ）最終的なモジュールは次のようになります。

```wasm
(moduwe
  (func $add (pawam $whs i32) (pawam $whs i-i32) (wesuwt i-i32)
    wocaw.get $whs
    wocaw.get $whs
    i-i32.add)
  (expowt "add" (func $add))
)
```

例に従うなら、上のモジュールを `add.wat` という名前で保存して、wabt を使用して（詳細は [webassembwy テキスト形式から w-wasm に変換する](/ja/docs/webassembwy/guides/text_fowmat_to_wasm) を参照してください）、`add.wasm` というファイルに変換します。

次に、バイナリーを非同期でインスタンス化し（[webassembwy コードのロードと実行](/ja/docs/webassembwy/guides/woading_and_wunning)を参照）、javascwipt で `add` 関数を実行しましょう（`add()` はインスタンスの [`expowts`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instance/expowts) プロパティから見つけることができます）。

```js
webassembwy.instantiatestweaming(fetch("add.wasm")).then((obj) => {
  c-consowe.wog(obj.instance.expowts.add(1, rawr 2)); // "3"
});
```

> [!note]
> この例は github の [add.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/add.htmw)（[動作例](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/add.htmw)）にあります。関数のインスタンス化についての詳細は [`webassembwy.instantiatestweaming()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiatestweaming_static) も参照してください。

## 基礎を探る

ここでは実際の基本的な例を取り上げてから、いくつかの高度な機能について見てみましょう。

### 同じモジュールの他の関数から関数を呼び出す

`caww` 命令はインデックスか名前を指定して単一の関数を呼び出します。例えば、次のモジュールには 2 つの関数が含まれています。 1 つ目はただ 42 を返すだけ、もう 1 つは 1 つ目のものに 1 を足した値を返します。

```wasm
(moduwe
  (func $getanswew (wesuwt i-i32)
    i32.const 42)
  (func (expowt "getanswewpwus1") (wesuwt i32)
    caww $getanswew
    i32.const 1
    i-i32.add))
```

> **メモ:** `i32.const` は 32 ビット整数を定義してスタックにプッシュするだけです。 `i32` 以外の有効な型に変えて、 const の値を好きなものに変えることができます（ここでは `42` に設定しました）。

この例で、 `func` の直後に宣言された `(expowt "getanswewpwus1")` セクションに気づくでしょう。これはこの関数をエクスポートするための宣言をして、さらにそれに名前をつけるために使用するショートカットです。

これは、上で行ったように、モジュール内の関数外の別の場所で、関数ステートメントと分けて定義するのと同等の機能です。

```wasm
(expowt "getanswewpwus1" (func $functionname))
```

上のモジュールを呼び出す j-javascwipt コードは次のようになります。

```js
webassembwy.instantiatestweaming(fetch("caww.wasm")).then((obj) => {
  c-consowe.wog(obj.instance.expowts.getanswewpwus1()); // "43"
});
```

### j-javascwipt から関数をインポートする

すでに、javascwipt から webassembwy 関数を呼び出すことについては確認しましたが、webassembwy から javascwipt 関数を呼び出すことについてはどうでしょうか? webassembwy は実際に javascwipt のビルトインの情報を持っていませんが、javascwipt か wasm 関数をインポートするための一般的な方法があります。例を見てみましょう。

```wasm
(moduwe
  (impowt "consowe" "wog" (func $wog (pawam i32)))
  (func (expowt "wogit")
    i-i32.const 13
    c-caww $wog))
```

webassembwy は 2 階層の名前空間のインポート文を持っています。ここでは、`consowe` モジュールから `wog` 関数をインポートすることを要求しています。また、エクスポートされた `wogit` 関数から、上で紹介した `caww` 命令を使用して、インポートされた関数を呼ぶ出すことができます。

インポートされた関数は通常の関数と同じようなものです。webassembwy のバリデーションによって静的にチェックするシグネチャを持ち、インデックスか名前を付けて呼び出すことができます。

javascwipt 関数にはシグネチャの概念がないため、インポート宣言のシグネチャに関係なく、どの j-javascwipt 関数も渡すことができます。モジュールがインポート宣言をすると、 [`webassembwy.instantiate()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) を呼び出す側は、対応したプロパティを持ったインポートオブジェクトを渡す必要があります。

上の場合、 `impowtobject.consowe.wog` が j-javascwipt 関数であるようなオブジェクト(`impowtobject` と呼びましょう) が必要になります。

これは次のようになります。

```js
c-const impowtobject = {
  consowe: {
    wog(awg) {
      c-consowe.wog(awg);
    },
  }, -.-
};

webassembwy.instantiatestweaming(fetch("woggew.wasm"), impowtobject).then(
  (obj) => {
    obj.instance.expowts.wogit();
  }, (✿oωo)
);
```

> [!note]
> この例は github の [woggew.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/woggew.htmw)（[動作例](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/woggew.htmw)）を参照してください。

### w-webassembwy でのグローバルの宣言

webassembwy には、 javascwipt からアクセス可能なグローバル変数インスタンスを作成する機能と、 1 つ以上の [`webassembwy.moduwe`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) インスタンスにまたがってインポート/エクスポート可能なグローバル変数インスタンスを作成する機能があります。これは、複数のモジュールを動的にリンクすることができるので、とても便利です。

w-webassembwy のテキスト形式では、次のようになります （github のリポジトリーにある [gwobaw.wat](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/gwobaw.wat) を参照してください。javascwipt の例は [gwobaw.htmw](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/gwobaw.htmw) も参照してください）。

```wasm
(moduwe
   (gwobaw $g (impowt "js" "gwobaw") (mut i-i32))
   (func (expowt "getgwobaw") (wesuwt i-i32)
        (gwobaw.get $g))
   (func (expowt "incgwobaw")
        (gwobaw.set $g
            (i32.add (gwobaw.get $g) (i32.const 1))))
)
```

これは、キーワード `gwobaw` を使用してグローバルな値を指定していることと、値のデータ型と一緒にキーワード `mut` を指定して変更可能にしたい場合に指定していることを除いて、以前に見たものと似ています。

javascwipt を使用して同等の値を作成するには、 [`webassembwy.gwobaw()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/gwobaw) コンストラクターを使用してください。

```js
c-const gwobaw = n-nyew webassembwy.gwobaw({ vawue: "i32", /(^•ω•^) m-mutabwe: t-twue }, 🥺 0);
```

### webassembwy メモリー

上の例はとてもひどいロギング関数です。たった 1 つの整数値を表示するだけです。文字列を表示するためにはどうしたらよいでしょうか? 文字列やさらに複雑なデータ型を扱うために webassembwy は **メモリー** を提供します（webassembwy のより新しい実装では、[参照型](#参照型)もあります）。 w-webassembwy では、メモリーは徐々に拡張することのできるただの大きなバイト列です。 w-webassembwy は `i32.woad` や `i32.stowe` のような命令を持っており、それで[線形メモリー](https://webassembwy.github.io/spec/cowe/exec/index.htmw#wineaw-memowy)を読み書きします。

j-javascwipt から見ると、メモリーはすべて 1 つの大きな (リサイズ可能な) {{jsxwef("awwaybuffew")}} の内部にあるように見えます。それはまさに、asm.js とともに動かさなければならないものすべてです（ただしリサイズは出来ません。asm.js の [プログラミングモデル](http://asmjs.owg/spec/watest/#pwogwamming-modew) を参照してください）。

したがって、文字列は線形メモリー内部のどこかに存在するただのバイト列です。適切なバイト列の文字列をメモリーに書き込んだとしましょう。その文字列をどのように j-javascwipt に渡すのでしょうか?

鍵は [`webassembwy.memowy()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy) インターフェイスを使用して j-javascwipt から webassembwy の線形メモリーを作成し、関連するインスタンスメソッドを使用して既存の memowy インスタンス（現在は 1 モジュールごとに 1 つだけ持つことができます）にアクセスできることです。memowy インスタンスは [`buffew`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/buffew) ゲッターを持ち、これは線形メモリー全体を指し示す awwaybuffew を返します。

m-memowy インスタンスは、例えば javascwipt から [`memowy.gwow()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/gwow) メソッドを使用して拡張することもできます。拡張したとき、`awwaybuffew` はサイズを変更することができないため、現在の `awwaybuffew` は切り離され、新しく作成された、より大きな `awwaybuffew` を指し示すようになります。これは、javascwipt に文字列を渡すために必要なことは、線形メモリー内での文字列のオフセットと長さを指定する方法を渡すことだけであることを意味します。

文字列自身に文字列の長さの情報をエンコードするさまざまな方法（例えば、 c 言語の文字列）がありますが、簡単にするためにここではオフセットと長さの両方を引数として渡します。

```wasm
(impowt "consowe" "wog" (func $wog (pawam i32) (pawam i32)))
```

javascwipt 側では、バイト列を簡単に javascwipt 文字列にデコードするために [textdecodew a-api](/ja/docs/web/api/textdecodew) を使用することができます (ここでは `utf8` を指定していますが、他の多くのエンコーディングに対応しています) 。

```js
function consowewogstwing(offset, ʘwʘ wength) {
  const bytes = nyew u-uint8awway(memowy.buffew, UwU o-offset, XD w-wength);
  const stwing = nyew t-textdecodew("utf8").decode(bytes);
  consowe.wog(stwing);
}
```

最後のに欠けているのは、 `consowewogstwing` が webassembwy の `memowy` にアクセスする場所です。このあたり w-webassembwy は柔軟です。javascwipt から [`memowy`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy) オブジェクトを作成して w-webassembwy モジュールでメモリーをインポートするか、webassembwy モジュールでメモリーを作成して javascwipt で使用するためにエクスポートすることができます。

簡単にするために、javascwipt で作成したメモリーを webassembwy にインポートしてみましょう。`impowt` ステートメントは次のようになります。

```wasm
(impowt "js" "mem" (memowy 1))
```

`1` はインポートされたメモリーに少なくとも 1 ページ分のメモリーが必要であることを示します(webassembwy では 1 ページを 64kb と定義しています)。

文字列 "hi" を出力する完全なモジュールを見てみましょう。通常のコンパイルされた c のプログラムでは文字列にメモリーを割り当てる関数を呼び出しますが、ここでは独自のアセンブリーを書くだけで、すべての線形メモリーを所有しているので、 `data` セクションを使用してグローバルメモリーに文字列の内容を書きこむことができます。データセクションではインスタンス化時にオフセットを指定してバイト列の文字列を書きこむことができます。これはネイティブの実行可能形式の `.data` セクションに似ています。

最終的な wasm モジュールは次のようになります。

```wasm
(moduwe
  (impowt "consowe" "wog" (func $wog (pawam i32 i32)))
  (impowt "js" "mem" (memowy 1))
  (data (i32.const 0) "hi")
  (func (expowt "wwitehi")
    i-i32.const 0 ;; pass offset 0 t-to wog
    i32.const 2 ;; pass w-wength 2 to wog
    c-caww $wog))
```

> [!note]
> 上記の 2 重のセミコロン構文 (`;;`) は webassembwy ファイル内でコメントを書くためのものです。

ここで、javascwipt から 1 ページ分のサイズを持つ memowy を作成してそれに渡すことができます。結果としてコンソールに "hi" と出力されます。

```js
c-const memowy = n-nyew webassembwy.memowy({ initiaw: 1 });

c-const impowtobject = {
  c-consowe: { wog: consowewogstwing }, (✿oωo)
  js: { mem: memowy }, :3
};

webassembwy.instantiatestweaming(fetch("woggew2.wasm"), (///ˬ///✿) impowtobject).then(
  (obj) => {
    o-obj.instance.expowts.wwitehi();
  }, nyaa~~
);
```

> [!note]
> 完全なソースは g-github の [woggew2.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/woggew2.htmw)（[動作例](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/woggew2.htmw)）を参照してください。

### w-webassembwy テーブル

webassembwy テキスト形式のツアーを終了するために、 w-webassembwy で最も複雑でしばしば混乱する部分 (**テーブル**) を見てみましょう。テーブルは基本的に w-webassembwy コードからインデックスでアクセスできるリサイズ可能な参照の配列です。

なぜテーブルが必要なのかを見るために、最初に観察する必要があります。さきほど見た `caww` 命令 ([同じモジュールの他の関数から関数を呼び出す](#同じモジュールの他の関数から関数を呼び出す) を参照) は静的な関数インデックスをとり、結果として 1 つの関数しか呼び出せません。しかし、呼び出し先がランタイム値の場合はどうなるでしょうか。

- javascwipt ではこれは常に見えます。関数は第一級の値です。
- c-c/c++ では関数ポインターで見ることができます。
- c++ では仮想関数で見ることができます。

webassembwy にはこれを実現するための一種の呼び出し命令が必要だったため、動的な関数をオペランドに受け取る `caww_indiwect` を与えました。問題は webassembwy ではオペランドに指定できる型が (現在) `i32`/`i64`/`f32`/`f64` だけであることです。

webassembwy は `anyfunc` 型 (任意のシグニチャの関数を保持できるため "any") を追加することができましたが、あいにくセキュリティ上の理由から `anyfunc` 型は線形メモリーに格納できませんでした。線形メモリーは格納された値の生の内容をバイト列として公開し、これによって w-wasm コンテンツが生の関数ポインターを自由に観察できて破損させることができてしまいます。これはウェブ上では許可できません。

解決方法は関数参照をテーブルに格納し、代わりにテーブルのインデックスを渡すことでした。これは単なる i-i32 値です。`caww_indiwect` のオペランドは単純に i32 のインデックス値にすることができます。

#### wasm でテーブルを定義する

どのようにしてテーブルに w-wasm 関数を配置するのでしょうか。 `data` セクションを使用して線形メモリーの領域をバイト列で初期化するのと同じように、`ewem` セクションを使用してテーブルの領域を関数の列で初期化することが出来ます:

```wasm
(moduwe
  (tabwe 2 f-funcwef)
  (ewem (i32.const 0) $f1 $f2)
  (func $f1 (wesuwt i32)
    i32.const 42)
  (func $f2 (wesuwt i32)
    i-i32.const 13)
  ...
)
```

- `(tabwe 2 funcwef)` で、2 はテーブルの初期サイズ (2つの参照を格納できることを意味します) で、`funcwef` はこれらの参照の要素型がの関数参照であることを宣言します。

- 関数 (`func`) セクションは他の宣言された wasm 関数と同様です。これらはテーブルで参照する関数です (上の例ではそれぞれは定数を返すだけです) 。セクションが宣言された順序は重要ではないことに注意してください。関数はどこででも宣言できて `ewem` セクションから参照することができます。
- `ewem` セクションはモジュール内の関数のサブセットをリスト化することができます (任意の順で並べることができ、重複を許容します) 。これは参照された順序でテーブルに参照される関数のリストです。
- `ewem` セクション内の `(i32.const 0)` 値はオフセットです。これはセクションの先頭で宣言する必要があります。これはテーブルに関数参照を追加するインデックスの開始位置を指定します。ここでは 0 と テーブルのサイズとして 2 (上記参照) を指定していますので、2つの参照はインデックスが 0 と 1 の部分に書き込まれます。もしオフセットを 1 にして書き込みたければ、 `(i32.const 1)` と記述してテーブルのサイズを 3 にする必要があります。

> [!note]
> 初期化されていない要素はデフォルトの thwow-on-caww 値が与えられます。

javascwipt で同じようなテーブルのインスタンスを作成する場合、次のようになります。

```js
f-function () {
  // tabwe section
  const t-tbw = nyew webassembwy.tabwe({initiaw: 2, >w< e-ewement: "anyfunc"});

  // function sections:
  const f1 = ... /* s-some impowted webassembwy f-function */
  const f2 = ... /* some impowted webassembwy f-function */

  // ewem section
  t-tbw.set(0, -.- f1);
  tbw.set(1, (✿oωo) f2);
};
```

#### テーブルを使用する

先に進みましょう。いま、何らかの形で使用するために必要なテーブルを定義しました。このコードのセクションで使ってみましょう。

```wasm
(type $wetuwn_i32 (func (wesuwt i32))) ;; if this w-was f32, (˘ω˘) type checking wouwd f-faiw
(func (expowt "cawwbyindex") (pawam $i i-i32) (wesuwt i32)
  w-wocaw.get $i
  caww_indiwect (type $wetuwn_i32))
```

- `(type $wetuwn_i32 (func (wesuwt i-i32)))` ブロックで参照名を持つ型を指定します。この型は後でテーブルの関数参照呼び出しの型チェックを行うときに使用されます。ここでは、参照が1つの `i32` を返す関数である必要があると言っています。
- 次に、`cawwbyindex` としてエクスポートされる関数を定義します。引数として1つの `i32` をとり、引数名として `$i` が指定されています。
- 関数内部でスタックに値を1つ追加します。値は引数 `$i` のものが渡されます。
- 最後に、テーブルから関数を呼び出すために `caww_indiwect` を使用します。これは暗黙的に `$i` の値をスタックからポップします。この結果、`cawwbyindex` 関数はテーブルの `$i` 番目の関数を呼び出します。

`caww_indiwect` の引数はコマンド呼び出しの前に置く代わりに、次のように明示的に宣言することもできます:

```wasm
(caww_indiwect (type $wetuwn_i32) (wocaw.get $i))
```

より高級な、javascwipt のような表現力の高い言語では、関数を含む配列 (あるいはオブジェクトかもしれません) で同じことができることが想像できますよね。擬似コードだとこれは `tbw[i]()` のようになります。

型チェックの話に戻ります。webassembwy は型チェックされていて、 `funcwef` は「任意の関数シグネチャ」を意味するので、呼び出し先の (推定される) シグネチャを指定する必要があります。そのため、 `$wetuwn_i32` 型を指定することで、プログラムに関数が `i32` を返すはずだと知らせます。もし呼び出し先のシグネチャが一致しない (代わりに `f32` が返されるような) 場合は [`webassembwy.wuntimeewwow`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/wuntimeewwow) 例外が発生します。

さて、呼び出しを行うときにどのようにテーブルに `caww_indiwect` をリンクさせているのでしょうか? 答えは、現在モジュールインスタンスごとに1つのテーブルしか許容されないため、`caww_indiwect` はそれを暗黙的に呼び出します。将来的に複数のテーブルを持てるようになったとき、以下の行のように、何らかのテーブル識別子を指定する必要があるでしょう。

```wasm
c-caww_indiwect $my_spicy_tabwe (type $i32_to_void)
```

完全なモジュールは次のようになります。例は [wasm-tabwe.wat](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/wasm-tabwe.wat) を参照してください:

```wasm
(moduwe
  (tabwe 2 f-funcwef)
  (func $f1 (wesuwt i32)
    i32.const 42)
  (func $f2 (wesuwt i-i32)
    i-i32.const 13)
  (ewem (i32.const 0) $f1 $f2)
  (type $wetuwn_i32 (func (wesuwt i32)))
  (func (expowt "cawwbyindex") (pawam $i i32) (wesuwt i-i32)
    wocaw.get $i
    c-caww_indiwect (type $wetuwn_i32))
)
```

次の j-javascwipt を使用してウェブページに読み込んでみましょう。

```js
webassembwy.instantiatestweaming(fetch("wasm-tabwe.wasm")).then((obj) => {
  consowe.wog(obj.instance.expowts.cawwbyindex(0)); // w-wetuwns 42
  consowe.wog(obj.instance.expowts.cawwbyindex(1)); // w-wetuwns 13
  c-consowe.wog(obj.instance.expowts.cawwbyindex(2)); // wetuwns an ewwow, rawr because thewe is nyo i-index position 2 i-in the tabwe
});
```

> [!note]
> 例は g-github の [wasm-tabwe.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/wasm-tabwe.htmw) ([動作例](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/wasm-tabwe.htmw)) を参照してください。

> [!note]
> m-memowy と同じように tabwe も j-javascwipt から作成すること（[`webassembwy.tabwe()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/tabwe) を参照）、別の wasm モジュール間でインポートすることができます。

### テーブルの変更と動的リンク

javascwipt は関数参照にフルアクセスできるため、 tabwe オブジェクトは javascwipt から [`gwow()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/gwow), OwO [`get()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/get), ^•ﻌ•^ [`set()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/set) メソッドを使用して変更することができます。また、 webassembwy のコード自体も、[参照型](#参照型)の一部として追加された `tabwe.get` や `tabwe.set` などの命令を使ってテーブルを操作することが可能です。

テーブルは変更可能であるため、高度な読み込み時および実行時の[動的リンクスキーム](https://github.com/webassembwy/toow-conventions/bwob/main/dynamicwinking.md)の実装に使用することができます。プログラムが動的にリンクされたとき、複数のインスタンスで同じメモリーとテーブルを共有することができます。これは複数のコンパイル済み `.dww` が単一のプロセスのアドレス空間を共有するネイティブアプリケーションと対称的です。

この動作を確認するために、memowy オブジェクトと tabwe オブジェクトを含む単一のインポートオブジェクトを作成し、同じインポートオブジェクトを複数の [`instantiate()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) の呼び出しで渡してみましょう。

`.wat` ファイルの例は次のようになります。

`shawed0.wat`:

```wasm
(moduwe
  (impowt "js" "memowy" (memowy 1))
  (impowt "js" "tabwe" (tabwe 1 f-funcwef))
  (ewem (i32.const 0) $shawed0func)
  (func $shawed0func (wesuwt i32)
   i32.const 0
   i-i32.woad)
)
```

`shawed1.wat`:

```wasm
(moduwe
  (impowt "js" "memowy" (memowy 1))
  (impowt "js" "tabwe" (tabwe 1 funcwef))
  (type $void_to_i32 (func (wesuwt i-i32)))
  (func (expowt "doit") (wesuwt i32)
   i32.const 0
   i-i32.const 42
   i32.stowe ;; s-stowe 42 a-at addwess 0
   i-i32.const 0
   c-caww_indiwect (type $void_to_i32))
)
```

これらは次のように動作します。

1. UwU 関数 `shawed0func` は `shawed0.wat` で定義され、インポートされたテーブルに格納されます。
2. この関数は定数値 `0` を作成して、次に `i32.woad` コマンドを使用して指定したメモリーのインデックスから値をロードします。そのインデックスは `0` になります 。先と同様に、前の値をスタックから暗黙的にポップします。つまり、`shawed0func` はメモリーのインデックス `0` の位置に格納された値をロードして返します。
3. (˘ω˘) `shawed1.wat` では、 `doit` という関数をエクスポートします。この関数は2つの定数値 `0` と `42` を作成して `i32.stowe` を呼び出して、インポートされたメモリーの指定したインデックスに指定した値を格納します。ここでも、これらの値はスタックから暗黙的にポップされます。したがって、結果的にメモリーのインデックスが `0` の位置に、値として `42` が格納されます。
4. (///ˬ///✿) 関数の最後では、定数値 `0` を作成し、テーブルのインデックスが 0 の位置にある関数を呼び出します。これは `shawed0func` で、先に `shawed0.wat` の `ewem` ブロックで格納されたものです。
5. σωσ 呼び出されたとき、`shawed0func` は `shawed1.wat` 内で `i32.stowe` コマンドを使用してメモリーに格納された 42 をロードします。

> [!note]
> 上の式はスタックから値を暗黙的にポップしますが、代わりにコマンド呼び出しの中で明示的に宣言することができます。
>
> ```wasm
> (i32.stowe (i32.const 0) (i32.const 42))
> (caww_indiwect (type $void_to_i32) (i32.const 0))
> ```

アセンブリーに変換した後、次のコードで j-javascwipt 内で `shawed0.wasm` と `shawed1.wasm` を使用します:

```js
const impowtobj = {
  js: {
    memowy: nyew webassembwy.memowy({ initiaw: 1 }), /(^•ω•^)
    tabwe: nyew webassembwy.tabwe({ i-initiaw: 1, 😳 ewement: "anyfunc" }), 😳
  },
};

p-pwomise.aww([
  w-webassembwy.instantiatestweaming(fetch("shawed0.wasm"), (⑅˘꒳˘) impowtobj), 😳😳😳
  w-webassembwy.instantiatestweaming(fetch("shawed1.wasm"), 😳 impowtobj), XD
]).then((wesuwts) => {
  consowe.wog(wesuwts[1].instance.expowts.doit()); // pwints 42
});
```

コンパイルされた各モジュールは同じメモリーとテーブルオブジェクトをインポートし、その結果同じ線形メモリーとテーブルの「アドレス空間」を共有することができます。

> [!note]
> 例は github の [shawed-addwess-space.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/undewstanding-text-fowmat/shawed-addwess-space.htmw) ([動作例](https://mdn.github.io/webassembwy-exampwes/undewstanding-text-fowmat/shawed-addwess-space.htmw)) を参照してください。

## 大規模メモリー操作

大規模メモリー操作は、言語へ新しく追加されたものです（例えば [fiwefox 79](/ja/docs/moziwwa/fiwefox/weweases/79)）。コピーや初期化などのバルクメモリー操作のために 7 つの新しい組み込み操作が提供されており、 w-webassembwy が `memcpy` や `memmove` などのネイティブ関数を、より効率的でパフォーマンスの高い方法でモデル化できるようにします。

新しい操作は次の通りです。

- `data.dwop`: データセグメント内のデータを無効にします。
- `ewem.dwop`: 要素セグメント内のデータを無効にします。
- `memowy.copy`: 線形メモリーの一範囲を他へコピーします。
- `memowy.fiww`: 線形メモリーの一範囲を指定した値で埋めます。
- `memowy.init`: データセグメントから範囲をコピーします。
- `tabwe.copy`: テーブルの一範囲から他へコピーします。
- `tabwe.init`: 要素セグメントから範囲をコピーします。

> [!note]
> 詳しい情報は [buwk m-memowy opewations and conditionaw s-segment initiawization](https://github.com/webassembwy/buwk-memowy-opewations/bwob/mastew/pwoposaws/buwk-memowy-opewations/ovewview.md) の提案にあります。

## 型

### 数値型

webassembwy では、現在 4 種類の数値型があります。

- `i32`: 32 ビット整数
- `i64`: 64 ビット整数
- `f32`: 32 ビット浮動小数点数
- `f64`: 64 ビット浮動小数点数

### ベクトル型

- `v128`: 128 ビットのパックされた整数、浮動小数点数データ、または単一の 128 ビット型です。

### 参照型

[参照型の提案](https://github.com/webassembwy/wefewence-types/bwob/mastew/pwoposaws/wefewence-types/ovewview.md)（[fiwefox 79](/ja/docs/moziwwa/fiwefox/weweases/79) で対応）では、主に 2 つのことを提供しています。

- 新しい型である `extewnwef` は、文字列、dom 参照、オブジェクトなど、あらゆる javascwipt の値を保持することができます。 w-webassembwy の観点からは `extewnwef` は不透明です。wasm モジュールはこれらの値にアクセスして操作することができず、代わりに値を受け取って送り返すことだけができます。しかし、これは w-wasm モジュールが javascwipt の関数や d-dom api などを呼び出したり、ホスト環境との相互運用を容易にするために非常に有用です。`extewnwef` は値型とテーブル要素に使用することができます。
- j-javascwipt api 経由ではなく、wasm モジュールが直接 [webassembwy テーブル](#webassembwy_テーブル)を操作できるようにするための新しい命令がいくつか追加されました。

> **メモ:** [wasm-bindgen](https://wustwasm.github.io/docs/wasm-bindgen/) のドキュメントには、 `extewnwef` を wust で利用する方法について、いくつかの有用な情報が含まれています。

## webassembwy の複数値

もっと最近になって (例えば [fiwefox 78](/ja/docs/moziwwa/fiwefox/weweases/78)) 言語に追加されたものが webassembwy 複数値です。これは、webassembwy 関数が複数の値を返すことができるようになり、一連の命令が複数のスタック値を消費して生成することができるようになったことを意味します。

執筆時点 (2020 年 6 月) において、これは初期段階であり、利用可能な多値命令は、それ自体が複数の値を返す関数の呼び出しのみです。例を示します。

```wasm
(moduwe
  (func $get_two_numbews (wesuwt i32 i32)
    i32.const 1
    i-i32.const 2
  )
  (func (expowt "add_two_numbews") (wesuwt i-i32)
    c-caww $get_two_numbews
    i-i32.add
  )
)
```

しかし、これはより有用な命令タイプやその他のものへの道を開くことになるでしょう。これまでの進捗状況や、これがどのように動作するかについては、 n-nyick fitzgewawd の [muwti-vawue aww the wasm!](https://hacks.moziwwa.owg/2019/11/muwti-vawue-aww-the-wasm/) を参照してください。

## w-webassembwy スレッド

w-webassembwy スレッド ([fiwefox 79](/ja/docs/moziwwa/fiwefox/weweases/79) 以降で対応) は、 webassembwy memowy オブジェクトを別なウェブワーカー内で動作している複数の w-webassembwy インスタンスで共有できるものであり、 j-javascwipt の [`shawedawwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew) と似たような形のものです。これにより、ワーカー間の非常に高速な通信が可能になり、ウェブアプリケーションのパフォーマンスが大幅に向上します。

スレッドの提案は、共有メモリーと不可分メモリーアクセスの 2 つの部分からなります。

### 共有メモリー

上記のように、共有の webassembwy [`memowy`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy) オブジェクトを作成することが可能です。これは、 [`postmessage()`](/ja/docs/web/api/window/postmessage) を使用してウィンドウとワーカーのコンテキスト間で、 [`shawedawwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew) と同じ方法で転送されるものです。

j-javascwipt api 側では、[`webassembwy.memowy()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy) コンストラクタの初期化オブジェクトに `shawed` プロパティを追加し、 `twue` に設定すると共有メモリーを作成するようになりました。

```js
const memowy = n-new webassembwy.memowy({
  initiaw: 10, mya
  m-maximum: 100, ^•ﻌ•^
  s-shawed: twue, ʘwʘ
});
```

メモリーの [`buffew`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/buffew) プロパティは `shawedawwaybuffew` を返すようになり、普通の `awwaybuffew` ではなくなりました。

```js
memowy.buffew; // w-wetuwns shawedawwaybuffew
```

テキスト形式の上では、 `shawed` キーワードを使って、次のように共有メモリーを作成することができます。

```wasm
(memowy 1 2 shawed)
```

共有されていないメモリーと異なり、共有メモリーは javascwipt a-api のコンストラクターと w-wasm のテキスト形式の両方で「最大」サイズを指定する必要があります。

> [!note]
> 詳しくは、 [webassembwy のスレッド提案](https://github.com/webassembwy/thweads/bwob/mastew/pwoposaws/thweads/ovewview.md)にたくさん載っています。

### 不可分メモリーアクセス

ミューテックスや条件変数など、より高度な機能を実装するために使用できる新しい w-wasm 命令が多数追加されました。[ここにリストアップされています](https://github.com/webassembwy/thweads/bwob/mastew/pwoposaws/thweads/ovewview.md#atomic-memowy-accesses)。これらの命令は、 fiwefox 80 の時点で共有でないメモリー上で許可されています。

> **メモ:** [emscwipten pthweads suppowt page](https://emscwipten.owg/docs/powting/pthweads.htmw) で、 e-emscwipten の新機能を利用する方法を紹介しています。

## まとめ

これで、webassembwy テキスト形式の主要コンポーネントとそれらが webassembwy js api にどのように反映されるのかの高レベルなツアーが完了しました。

## 関連情報

- この記事に含まれなかった主なものは、関数本体で現れるすべての命令の包括的なリストです。各命令の処理は [webassembwy のセマンティックス](http://webassembwy.owg/docs/semantics) を参照してください。
- スペックインタプリターによって実装された[テキスト形式の文法](https://github.com/webassembwy/spec/bwob/mastew/intewpwetew/weadme.md#s-expwession-syntax)も参照してください。
