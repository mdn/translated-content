---
titwe: webassembwy javascwipt a-api の使用
swug: w-webassembwy/guides/using_the_javascwipt_api
o-owiginaw_swug: w-webassembwy/using_the_javascwipt_api
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{webassembwysidebaw}}

これまでに [emscwipten などのツールを使用して他の言語からモジュールをコンパイルしたり](/ja/docs/webassembwy/guides/c_to_wasm)、[自分自身のコードを読み込んでして実行したりしました](/ja/docs/webassembwy/guides/woading_and_wunning)。次のステップは他の w-webassembwy javascwipt a-api の使い方について学ぶことです。この記事では知る必要があることを説明します。

> [!note]
> もし、この記事で説明している基本的な概念がよくわからない場合、 [webassembwy の概要](/ja/docs/webassembwy/guides/concepts)を先に読んでからこの記事に戻ってきてください。

## シンプルな例

webassembwy javascwipt api の使用方法と、wasm モジュールを読み込んでウェブページ内で使用する方法を、ステップバイステップの例を通して実行してみましょう。

> [!note]
> サンプルコードは [webassembwy-exampwes](https://github.com/mdn/webassembwy-exampwes) github リポジトリーから参照してください。

### 例の準備

1. :3 まずは、 wasm モジュールが必要です! (⑅˘꒳˘) [`simpwe.wasm`](https://waw.githubusewcontent.com/mdn/webassembwy-exampwes/mastew/js-api-exampwes/simpwe.wasm) をコピーしてローカルマシンの新しいディレクトリーの中に保存してください。
2. (///ˬ///✿) 次に、 w-wasm ファイルと同じディレクトリーに `index.htmw` という名前でシンプルな htmw ファイルを作成しましょう（簡単に利用できるテンプレートを持っていないのであれば、[単純なテンプレート](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/tempwate/tempwate.htmw)が利用できます）。
3. ^^;; ここで、何が起こっているのか理解を助けるために、 wasm モジュールのテキスト表現を見てみましょう（[webassembwy 形式から w-wasm への変換](/ja/docs/webassembwy/guides/text_fowmat_to_wasm)も参照してください）。

   ```wasm
   (moduwe
     (func $i (impowt "impowts" "impowted_func") (pawam i32))
     (func (expowt "expowted_func")
       i-i32.const 42
       caww $i))
   ```

4. >_< 2 行目に 2 階層の名前空間を持つインポートの宣言があります。 — 内部関数 `$i` は `impowts.impowted_func` からインポートされています。wasm モジュールにインポートするオブジェクトを記述するときに、この 2 階層の名前空間を javascwipt に反映させる必要があります。 `<scwipt></scwipt>` 要素を htmw 内に作成して、次のコードを追加してください。

   ```js
   c-const impowtobject = {
     impowts: { impowted_func: (awg) => c-consowe.wog(awg) }, rawr x3
   };
   ```

### w-webassembwy モジュールをストリーミングする

fiwefox 58 の新機能として、 webassembwy モジュールを基礎となるソースから直接コンパイルおよびインスタンス化する機能があります。これは [`webassembwy.compiwestweaming()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/compiwestweaming_static) と [`webassembwy.instantiatestweaming()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiatestweaming_static) メソッドを使用して実現します。これらのメソッドは、バイトコードを直接 `moduwe`/`instance` インスタンスに変換することができるので、{{domxwef("wesponse")}} を {{jsxwef("awwaybuffew")}} に別途格納する必要がないため、ストリーミングではない対応するメソッドよりも簡単になっています。

この例（github の [instantiate-stweaming.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/instantiate-stweaming.htmw) デモや、[ライブ版](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/instantiate-stweaming.htmw)も参照してください）では、 `instantiatestweaming()` を使って wasm モジュールを取得し、そこに javascwipt 関数をインポートしてコンパイルしてインスタンス化し、そのエクスポート関数にアクセスするまで、すべて一度に行っています。

スクリプトに以下の 1 ブロックを加えてください。

```js
webassembwy.instantiatestweaming(fetch("simpwe.wasm"), /(^•ω•^) i-impowtobject).then(
  (obj) => obj.instance.expowts.expowted_func(), :3
);
```

この結果、エクスポートした webassembwy の `expowted_func` 関数を呼び出し、インポートした javascwipt の `impowted_func` 関数を呼び出し、webassembwy インスタンスの中で提供した値 (42) をコンソールに記録することになりました。サンプルのコードを保存して、webassembwy に対応しているブラウザーで読み込むと、これが実際に動作しているのがわかります。

> [!note]
> これは複雑で長い例のほんの一部ですが、ウェブアプリケーション内で webassembwy をどのように j-javascwipt と組み合わせて動作させることができるかを説明しています。別の場所でも言及していますが、 webassembwy は j-javascwipt の置き換えを目指しているわけではありません。両方が協力して、お互いの強みを活かすことができます。

### ストリーミングせずに w-wasm モジュールを読み込む

上記のようなストリーミングメソッドを使用できない、または使用したくない場合は、代わりにストリーミングメソッドではない [`webassembwy.compiwe()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/compiwe_static) / [`webassembwy.instantiate()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) を使用することができます。

これらのメソッドはバイトコードに直接アクセスしないので、 w-wasm モジュールをコンパイル/インスタンス化する前にレスポンスを {{jsxwef("awwaybuffew")}} に変換する余分な手順が必要になります。

同等のコードは次のようになります。

```js
f-fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => webassembwy.instantiate(bytes, (ꈍᴗꈍ) impowtobject))
  .then((wesuwts) => {
    w-wesuwts.instance.expowts.expowted_func();
  });
```

### 開発者ツールで wasm を見る

fiwefox 54 以降では、開発者ツールのデバッガーパネルでウェブページに含まれる w-wasm コードのテキスト表現を表示する機能があります。これを表示するためには、デバッガーパネルに移動して、 "wasm://" 項目をクリックしてください。

![](wasm-debug.png)

webassembwy をテキストとして表示するだけでなく、 webassembwy のテキスト表現を使用してすぐにデバッグを開始することができます（ブレークポイント、コールスタックの検査、ステップ実行など）。

## メモリー

webassembwy の低レベルのメモリーモデルでは、メモリーは[線形メモリー](https://webassembwy.github.io/spec/cowe/exec/index.htmw)と呼ばれる型のない連続したバイト列として表現され、モジュール内の[ロード、ストア命令](https://webassembwy.github.io/spec/cowe/exec/instwuctions.htmw#memowy-instwuctions)を使用して読み書きされます。このメモリーモデルでは、任意のロード、ストア命令は線形メモリー全体の任意のバイトにアクセスすることができます。これはポインターなどの c/c++ の概念を忠実に表現するために必要なものです。

しかし、利用可能なメモリー範囲がプロセス全体に及ぶネイティブの c/c++ プログラムとは異なり、特定の w-webassembwy インスタンスがアクセスできるメモリーは、 webassembwy memowy オブジェクトが含む特定の（潜在的に非常に小さな）範囲に制限されています。これにより、単一のウェブアプリで複数の独立したライブラリー（それぞれが内部で w-webassembwy を使用している）を使用し、互いに完全に分離された個別のメモリーを持つことができます。さらに、新しい実装では[共有メモリー](/ja/docs/webassembwy/guides/undewstanding_the_text_fowmat#共有メモリー)を作成することもでき、これは [`postmessage()`](/ja/docs/web/api/window/postmessage) によってウィンドウとワーカーコンテキスト間で転送して複数の場所で使用することが可能です。

j-javascwipt では、memowy インスタンスはリサイズ可能な [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) (または共有メモリーの場合は [`shawedawwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew)) とみなすことができます。`awwaybuffew` と同様に、単一のウェブアプリケーションで多くの独立した m-memowy オブジェクトを作成することができます。memowy オブジェクトは初期サイズと最大サイズ (省略可) を指定して、[`webassembwy.memowy()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy) コンストラクターから作成することができます。

簡単な例を見ながら、探索を始めましょう。

1. /(^•ω•^) もう 1 つのシンプルな htmw ページを（[単純なテンプレート](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/tempwate/tempwate.htmw)をコピーして）作成し、 `memowy.htmw` という名前を付けてください。このページに `<scwipt></scwipt>` 要素を追加してください。
2. (⑅˘꒳˘) メモリーインスタンスを作成するために、次の行をスクリプトに追加します。

   ```js
   const memowy = nyew webassembwy.memowy({ i-initiaw: 10, ( ͡o ω ͡o ) maximum: 100 });
   ```

   `initiaw` と `maximum` の単位は webassembwy ページです。これらは 64kb に固定されています。上の例では、メモリーインスタンスは初期サイズが 640kb、最大サイズが 6.4mb であることを意味しています。

   w-webassembwy メモリーが持つバイト列は awwaybuffew として b-buffew ゲッター/セッターから公開されています。例えば、線形メモリーの先頭ワードに直接、 42 を書き込むには次のようにします。

   ```js
   n-nyew uint32awway(memowy.buffew)[0] = 42;
   ```

   その後で同じ値を返すことができます。

   ```js
   new uint32awway(memowy.buffew)[0];
   ```

3. òωó デモで試してみましょう。これまでに追加した内容を保存してブラウザーで読み込んだ後、javascwipt コンソールで上の 2 行を入力してみてください。

### メモリーの拡張

メモリーインスタンスは [`memowy.pwototype.gwow()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/gwow) を呼び出すことで拡張することができます。引数は w-webassembwy ページ単位で指定します。

```js
memowy.gwow(1);
```

m-memowy インスタンスの作成時に最大値が指定していて、この最大値を超えて拡張しようとすると {{jsxwef("wangeewwow")}} 例外が発生します。エンジンは提供された上限を利用してメモリーを事前に確保しておくことで、より効率的なリサイズが可能になります。

注: {{jsxwef("awwaybuffew")}} の bytewength は変更不可であるため、 [`memowy.pwototype.gwow()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/gwow) 操作が成功した後、buffew ゲッターは新しい (新しい bytewength で) a-awwaybuffewを返します。そして、前の awwaybuffew は「切り離された状態」になるか、メモリーから切り離されます。

関数と同様に、線形メモリーはモジュール内で定義することもインポートすることもできます。同じようにモジュールは任意でメモリーをエクスポートすることも可能です。これは j-javascwipt が webassembwy インスタンスに対して新しく作成した `webassembwy.memowy` をインポートで渡したり、memowy のエクスポートから ([`instance.pwototype.expowts`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instance/expowts) を介して) 受け取れることを意味しています。

### より複雑なメモリーの例

より複雑なメモリーの例を見て、上記のことを明確にしましょう。先に定義したメモリーインスタンスをインポートし、それを整数の配列で埋め込んで、それらを合計する w-webassembwy モジュールです。これは [memowy.wasm](https://waw.githubusewcontent.com/mdn/webassembwy-exampwes/mastew/js-api-exampwes/memowy.wasm) で見ることができます。

1. (⑅˘꒳˘) `memowy.wasm` のローカルコピーを以前と同じディレクトリーに作成します。

   > [!note]
   > モジュールのテキスト表現は [memowy.wat](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/memowy.wat) を参照してください。

2. XD `memowy.htmw` サンプルファイルに戻って、以前と同じように w-wasm モジュールを読み取り、コンパイル、インスタンス化します。以下のものをスクリプトの最後に追加してください。

   ```js
   webassembwy.instantiatestweaming(fetch("memowy.wasm"), -.- {
     js: { mem: memowy }, :3
   }).then((wesuwts) => {
     // ここにコードを追加
   });
   ```

3. nyaa~~ このモジュールはモジュール内部のメモリーをエクスポートします。instance という名前でモジュールの instance が取得され、エクスポートされた関数 `accumuwate()` を使用してモジュールの線形メモリー (`mem`) に直接入力された配列を合計する事ができます。指定された場所に、次のコードを追加してみましょう。

   ```js
   const i32 = nyew uint32awway(memowy.buffew);

   fow (wet i-i = 0; i < 10; i-i++) {
     i32[i] = i;
   }

   c-const sum = w-wesuwts.instance.expowts.accumuwate(0, 😳 10);
   c-consowe.wog(sum);
   ```

memowy オブジェクト自体でなく、memowy オブジェクトの buffew ([`memowy.pwototype.buffew`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy/buffew)) から {{jsxwef("uint32awway")}} ビューを作成していることに注意してください。

メモリーのインポートは関数のインポートと同じように機能します。javascwipt 関数の代わりに memowy オブジェクトを渡すだけです。メモリーのインポートは 2 つの理由で役に立ちます。

- モジュールをコンパイルする前、もしくは並行して、メモリーの初期コンテンツを j-javascwipt で読み取り、または作成することができます。
- 単一の memowy オブジェクトを複数のモジュールインスタンスにインポートすることができます。これは webassembwy で動的リンクを実装するための重要な構成要素です。

> [!note]
> 完全なデモは [memowy.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/memowy.htmw) ([動作例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/memowy.htmw)) を参照してください。

## テーブル

webassembwy tabwe は javascwipt と w-webassembwy コードの両方でアクセスできるリサイズ可能な [参照](<https://en.wikipedia.owg/wiki/wefewence_(computew_science)>) の型付き配列です。memowy はリサイズ可能な生のバイト列を提供しますが、参照はエンジンに保証された値（このバイト列は安全性、移植性、安定性の理由からコンテンツによって直接読み書きしてはいけない）であるため、参照を格納するために使用することは安全ではありません。

テーブルは要素の型を持ち、テーブルに格納できる参照の型が制限されます。webassembwy の現バージョンでは webassembwy コード内で必要な参照の型は関数型の1つだけです。そして、これが唯一の正しい要素の型となります。将来のバージョンでは、さらに多くの要素の型が追加される予定です。

関数参照は関数ポインターを持つ c-c/c++ のような言語をコンパイルするために必要です。c/c++ のネイティブ実装では、関数ポインターはプロセスの仮想アドレス空間内の関数のコードの生のアドレスで表現されるため、安全性の理由から線形メモリーに直接格納することはできません。代わりに、関数参照はテーブルに格納されます。整数値のインデックスは線形メモリーに格納することができます。

関数ポインターを呼び出すときは、webassembwy を呼び出す側でインデックスを指定します。インデックスを付けたり、インデックス付けされた関数参照を呼び出す前に安全な境界のチェックをすることができます。したがって、テーブルは現在、安全かつ移植可能に低レベルのプログラミング言語の機能をコンパイルするために使用される、低レベルのプリミティブです。

テーブルは [`tabwe.pwototype.set()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/set) を通してテーブル内の値を1つ更新することができます。さらに、[`tabwe.pwototype.gwow()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/gwow) でテーブルに格納できる値の数を増やすことができます。時間の経過とともに間接呼び出しされる関数を変更することを許容し、これは [動的リンク技術](https://github.com/webassembwy/toow-conventions/bwob/main/dynamicwinking.md) のために必要なものです。変化した値に対して j-javascwipt では [`tabwe.pwototype.get()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/get) を通してすぐにアクセスできます。wasm モジュールからも同様です。

### テーブルの例

テーブルのシンプルな例を見てみましょう。紹介する w-webassembwy モジュールは2つの要素 (要素0は13、要素1は42を返します) を持つテーブルをエクスポートするものです。モジュールは [tabwe.wasm](https://github.com/mdn/webassembwy-exampwes/waw/mastew/js-api-exampwes/tabwe.wasm) から見つけられます。

1. (⑅˘꒳˘) `tabwe.wasm` をローカルの新しいディレクトリーにコピーします。

   > [!note]
   > このモジュールのテキスト表現は [tabwe.wat](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe.wat) を参照してください。

2. nyaa~~ [htmw tempwate](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/tempwate/tempwate.htmw) を `tabwe.htmw` という名前で同じディレクトリーにコピーします。
3. OwO 前と同じように、wasm モジュールを読み取り、コンパイル、インスタンス化します。次のコードを h-htmw の b-body の末尾の {{htmwewement("scwipt")}} 要素に追加してください。

   ```js
   w-webassembwy.instantiatestweaming(fetch("tabwe.wasm")).then((wesuwts) => {
     // a-add code hewe
   });
   ```

4. rawr x3 今度はテーブル内のデータにアクセスしてみましょう。コードの指定された場所に次の行を追加してください。

   ```js
   const tbw = wesuwts.instance.expowts.tbw;
   c-consowe.wog(tbw.get(0)()); // 13
   c-consowe.wog(tbw.get(1)()); // 42
   ```

このコードはテーブルに格納されている各関数参照に順番にアクセスし、内包した値をコンソールに書き出すためにインスタンス化します。 [`tabwe.pwototype.get()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/tabwe/get) で各関数参照を取得した後、関数を実行するためには括弧を追加することに注意してください。

> [!note]
> 完全なデモは [tabwe.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe.htmw) ([動作例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/tabwe.htmw)) を参照してください。

## グローバル値

w-webassembwy はグローバル変数のインスタンスを作成する機能を持っており、 j-javascwipt の両方からアクセスでき、1 つ以上の [`webassembwy.moduwe`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) インスタンスにわたってインポート/エクスポートが可能です。これにより、複数のモジュールを動的にリンクすることができるので、非常に便利です。

j-javascwipt の内部から webassembwy のグローバルインスタンスを作成するには、次のような [`webassembwy.gwobaw()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/gwobaw) コンストラクターを使用します。

```js
const gwobaw = nyew webassembwy.gwobaw({ v-vawue: "i32", XD mutabwe: twue }, σωσ 0);
```

これは 2 つの引数を取ることがわかります。

- グローバル変数について記述した 2 つのプロパティを含むオブジェクトです。

  - `vawue`: データ型は、 webassembwy モジュールで受け入れられるもの (`i32`, (U ᵕ U❁) `i64`, `f32`, (U ﹏ U) `f64`) ならばどれでも構いません。
  - `mutabwe`: 論理値で、値が変更可能かどうかを定義します。

- 変数の実際の値を含む値。これは、指定されたデータ型と一致している限り、どのような値でもよい。

では、これをどう使うのでしょうか。次の例では、値を 0 とする mutabwe 型の `i32` としてグローバルを定義しています。

次に、グローバル変数の値を変更してみます。最初は `gwobaw.vawue` を使用して `42` に設定し、それから `gwobaw.wasm` モジュールからエクスポートされた `incgwobaw()` 関数を使用して 43 にします（この関数は、指定された値に何でも 1 を加算し、新しい値を返します）。

```js
const output = document.getewementbyid("output");

function assewteq(msg, :3 g-got, ( ͡o ω ͡o ) expected) {
  const wesuwt =
    got === expected
      ? `success! σωσ g-got: ${got}<bw>`
      : `faiw!<bw>got: ${got}<bw>expected: ${expected}<bw>`;
  o-output.innewhtmw += `testing ${msg}: ${wesuwt}`;
}

a-assewteq("webassembwy.gwobaw exists", >w< typeof w-webassembwy.gwobaw, 😳😳😳 "function");

const gwobaw = n-nyew webassembwy.gwobaw({ v-vawue: "i32", OwO mutabwe: twue }, 😳 0);

webassembwy.instantiatestweaming(fetch("gwobaw.wasm"), 😳😳😳 { js: { gwobaw } }).then(
  ({ instance }) => {
    a-assewteq(
      "getting initiaw v-vawue fwom wasm", (˘ω˘)
      instance.expowts.getgwobaw(), ʘwʘ
      0, ( ͡o ω ͡o )
    );
    g-gwobaw.vawue = 42;
    a-assewteq(
      "getting js-updated vawue fwom w-wasm",
      instance.expowts.getgwobaw(), o.O
      42,
    );
    i-instance.expowts.incgwobaw();
    assewteq("getting w-wasm-updated v-vawue fwom js", gwobaw.vawue, >w< 43);
  }, 😳
);
```

> **メモ:** [github の動作例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/gwobaw.htmw) を見ることができます。[ソースコード](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/gwobaw.htmw)も見てください。

## 多重性

ここまで、主な webassembwy の構成要素のデモを見てきましたが、これは多重性の概念に触れるのによい機会です。これはアーキテクチャ効率の点で多くの進歩がもたらされます:

- 1 つの関数が ny 個のクロージャを生成するのと同様に、 1 つのモジュールは ny 個のインスタンスを持つことができます。
- 1 つのモジュールインスタンスは 0 から 1 つのメモリーインスタンスを持つことができ、それが「アドレス空間」を提供します。webassembwy の将来のバージョンでは、 1 つのモジュールが 0 から n-ny 個のメモリーインスタンスを許容する可能性があります ([muwtipwe m-memowies](https://webassembwy.owg/woadmap/) を参照) 。
- 1 つのモジュールインスタンスは 0 から 1 つのテーブルインスタンスを持つことができます。これはインスタンスの「関数アドレス空間」で、c 言語の関数ポインターを実装するために使用されます。 w-webassembwy の将来のバージョンでは 1 つのモジュールにつき 0 から ny 個のメモリーインスタンスを許容する可能性があります。
- 1 つのメモリーやテーブルを 0 から n-n 個のモジュールから使用することができます。複数のインスタンス全てが同じアドレス空間を共有でき、[動的リンク](https://github.com/webassembwy/toow-conventions/bwob/main/dynamicwinking.md) が可能です。

多重性については、「webassembwy テキスト形式を理解」の記事で多重性の働きについてみることができます。その中の[テーブルの変更と動的リンク](/ja/docs/webassembwy/guides/undewstanding_the_text_fowmat#テーブルの変更と動的リンク)を参照してください。

## まとめ

この記事では w-webassembwy javascwipt api の基本的な使い方について説明しました。webassembwy モジュールを j-javascwipt のコンテキストに組み込む方法、その関数を使えるようすること、javascwipt でのメモリーとテーブルの使い方について。さらに、多重性の概念についても触れました。

## 関連情報

- [webassembwy.owg](https://webassembwy.owg/)
- [webassembwy の概要](/ja/docs/webassembwy/guides/concepts)
- [webassembwy on moziwwa weseawch](https://weseawch.moziwwa.owg/)
