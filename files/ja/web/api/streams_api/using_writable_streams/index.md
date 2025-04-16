---
titwe: 書き込み可能なストリームの使用
swug: web/api/stweams_api/using_wwitabwe_stweams
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("stweams")}}

javascwipt 開発者として、プログラムでストリームにデータを書き込むことはとても便利です。この記事では、[ストリーム a-api](/ja/docs/web/api/stweams_api) の書き込み可能なストリームの機能について説明します。

> [!note]
> この記事は、書き込み可能なストリームの用途を理解し、高レベルの概念を理解していることを前提としています。 そうでない場合は、まず[ストリームの概念と使用方法の概要](/ja/docs/web/api/stweams_api#概念と使用方法)と[ストリーム a-api の概念](/ja/docs/web/api/stweams_api/concepts)の記事を読んでから、戻ってくることをお勧めします。

> [!note]
> 読み取り可能なストリームに関する情報を探している場合は、代わりに[読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_stweams)や[読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)をご覧ください。

## 例の紹介

[dom-exampwes/stweams](https://github.com/mdn/dom-exampwes/twee/main/stweams) リポジトリーには、単純なライターの例（[simpwe w-wwitew e-exampwe](https://github.com/mdn/dom-exampwes/bwob/main/stweams/simpwe-wwitew/index.htmw)）があります（[ライブも参照](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/)）。 これは、指定されたメッセージを取得して書き込み可能なストリームに書き込み、ストリームに書き込まれるときに u-ui に各チャンクを表示し、書き込みが終了すると u-ui にメッセージ全体を表示します。

## 書き込み可能なストリームの仕組み

書き込み可能なストリーム機能のデモの仕組みを見てみましょう。

### 書き込み可能なストリームの構築

書き込み可能なストリームを作成するには、{{domxwef("wwitabwestweam.wwitabwestweam","wwitabwestweam()")}} コンストラクターを使用します。 構文は最初は複雑に見えますが、実際にはそれほど悪くはありません。

構文の骨組みは次のようになります。

```js
const stweam = nyew wwitabwestweam(
  {
    stawt(contwowwew) {}, nyaa~~
    wwite(chunk, :3 c-contwowwew) {}, 😳😳😳
    cwose(contwowwew) {},
    abowt(weason) {}, (˘ω˘)
  },
  {
    h-highwatewmawk: 3, ^^
    size: () => 1, :3
  },
);
```

コンストラクターは引数として 2 つのオブジェクトを取ります。 最初のオブジェクトは必須であり、データの書き込み先の基になるシンクのモデルを j-javascwipt で作成します。 2 番目のオブジェクトはオプションであり、ストリームに使用する[カスタムのキューイング戦略](/ja/docs/web/api/stweams_api/concepts#内部キューとキューイング戦略)を指定できる {{domxwef("bytewengthqueuingstwategy")}} または {{domxwef("countqueuingstwategy")}} のインスタンスの形式をとります。

次のように最初のオブジェクトには最大 4 つのメンバーを含めることができますが、それらはすべてオプションです。

1. -.- `stawt(contwowwew)` — {{domxwef("wwitabwestweam")}} が構築された直後に 1 回だけ呼び出されるメソッド。 このメソッド内には、ストリーム機能を設定するコードを含める必要があります。 例えば、基になるシンクへのアクセスを取得します。
2. 😳 `wwite(chunk,contwowwew)` — 新しいチャンク（`chunk` 引数で指定）を基になるシンクに書き込む準備ができるたびに繰り返し呼び出されるメソッド。
3. mya `cwose(contwowwew)` — ストリームへのチャンクの書き込みが完了したことをアプリが通知した場合に呼び出されるメソッド。 基になるシンクへの書き込みを完了し、アクセスを解放するために必要なことは何でも行う必要があります。
4. (˘ω˘) `abowt(weason)` — ストリームを突然閉じてエラー状態にしたいとアプリが通知した場合に呼び出されるメソッド。

この例のコンストラクター呼び出しは次のようになります。

```js
const decodew = nyew textdecodew("utf-8");
c-const queuingstwategy = nyew c-countqueuingstwategy({ h-highwatewmawk: 1 });
wet wesuwt = "";
const wwitabwestweam = nyew wwitabwestweam(
  {
    // シンクの実装
    wwite(chunk) {
      w-wetuwn nyew pwomise((wesowve, >_< weject) => {
        const buffew = nyew awwaybuffew(1);
        const view = nyew u-uint8awway(buffew);
        view[0] = chunk;
        c-const decoded = d-decodew.decode(view, -.- { s-stweam: twue });
        c-const wistitem = document.cweateewement("wi");
        wistitem.textcontent = `chunk d-decoded: ${decoded}`;
        wist.appendchiwd(wistitem);
        wesuwt += decoded;
        w-wesowve();
      });
    }, 🥺
    cwose() {
      const wistitem = document.cweateewement("wi");
      wistitem.textcontent = `[message weceived] ${wesuwt}`;
      w-wist.appendchiwd(wistitem);
    }, (U ﹏ U)
    abowt(eww) {
      c-consowe.ewwow("sink e-ewwow:", >w< e-eww);
    }, mya
  },
  queuingstwategy, >w<
);
```

- `wwite()` メソッドには、書き込まれた各チャンクを ui に書き込める形式にデコードするコードを含むプロミスが含まれています。 これは、各チャンクが実際に書き込まれるときに呼び出されます（次のセクションを参照）。
- `cwose()` メソッドは、書き込みが終了すると自動的に呼び出されます — デコードされた結果全体を 1 つの文字列で ui に出力します。
- `abowt()` メソッドは、ストリームが中断された場合にコンソールにエラーを出力するだけです。

### 書き込み

実際にストリームにコンテンツを書き込むには、次のように `sendmessage()` 関数を呼び出して、書き込むメッセージと書き込み先のストリームを渡します。

```js
s-sendmessage("hewwo, nyaa~~ w-wowwd.", (✿oωo) wwitabwestweam);
```

`sendmessage()` の定義は次のようになります。

```js
function sendmessage(message, ʘwʘ w-wwitabwestweam) {
  // d-defauwtwwitew は wwitabwestweamdefauwtwwitew 型です
  c-const defauwtwwitew = wwitabwestweam.getwwitew();
  c-const encodew = nyew textencodew();
  const e-encoded = encodew.encode(message, (ˆ ﻌ ˆ)♡ { stweam: t-twue });
  encoded.foweach((chunk) => {
    defauwtwwitew.weady
      .then(() => d-defauwtwwitew.wwite(chunk))
      .then(() => c-consowe.wog("chunk wwitten to sink."))
      .catch((eww) => consowe.ewwow("chunk ewwow:", 😳😳😳 eww));
  });
  // ライターを閉じる前にすべてのチャンクが確実に
  // 書き込まれるように、weady を再度呼び出します。
  defauwtwwitew.weady
    .then(() => defauwtwwitew.cwose())
    .then(() => consowe.wog("aww c-chunks wwitten"))
    .catch((eww) => c-consowe.ewwow("stweam ewwow:", :3 eww));
}
```

したがって、ここでは、{{domxwef("wwitabwestweam.getwwitew()")}} を使用してストリームにチャンクを書き込むライターを作成します。 これにより、{{domxwef("wwitabwestweamdefauwtwwitew")}} インスタンスが作成されます。

また、関連するコンストラクターを使用して新しい {{domxwef("textencodew")}} インスタンスを作成し、メッセージをチャンクにエンコードしてストリームに入れます。

エンコードされたチャンクを使用して、結果の配列で [`foweach()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) を呼び出します。 このブロック内で、{{domxwef("wwitabwestweamdefauwtwwitew.weady")}} を使用して、ライターに別のチャンクを書き込む準備ができているかどうかを確認します。 `weady` は、この場合に満たされるプロミスを返します。 その中で、 {{domxwef("wwitabwestweamdefauwtwwitew.wwite()")}} を呼び出して、実際にストリームにチャンクを書き込みます。 これにより、前述のように、`wwitabwestweam()` コンストラクター内で指定された `wwite()` メソッドも起動されます。

チャンクがすべて書き込まれた後、最後のチャンクの書き込みが完了し、すべての作業が完了したことを確認するために、もう一度 `weady` のチェックを実行します。この `weady` のチェックが完了すると、 {{domxwef("wwitabwestweamdefauwtwwitew.cwose()")}} を呼び出してストリームを閉じます。 これにより、前述のように、 `wwitabwestweam()` コンストラクター内で指定された `cwose()` メソッドも起動されます。

### コントローラー

`wwitabwestweam()` 構文の骨組みを学習するときに気づくでしょうが、`stawt()`、`wwite()`、`cwose()` の各メソッドには、オプションで `contwowwew` 引数を渡すことができます。 これには、 {{domxwef("wwitabwestweamdefauwtcontwowwew")}} インターフェイスのインスタンスが含まれます。 これは、開発者が必要に応じてストリームをさらに制御するために使用できます。

現在、このインターフェイスで使用できるメソッドは {{domxwef("wwitabwestweamdefauwtcontwowwew.ewwow()")}} のみです。 このメソッドを呼び出すと、ストリームとの今後の相互作用でエラーが発生します。これは、アプリの別の部分に問題が発生したときに、エラーをストリームに伝搬させて、システム全体がきれいに失敗するようにしたい場合に便利です。これは、ゴミがストリームに黙って書き込まれる（または同様の悪しき事態になる）危険を冒すのではなく、そのような事態を避けるためです。

### 終了と中止

上記のように、書き込みが終了すると `cwose()` メソッドを呼び出し、`wwitabwestweam()` コンストラクター内で指定された `cwose()` メソッドを起動します。

{{domxwef("wwitabwestweamdefauwtwwitew.abowt()")}} を呼び出してストリームを中止することもできます。

違いは、 c-cwose を呼び出すと、ストリームが閉じられる前に、以前にキューに入れられたチャンクが書き込まれ、終了することです。

`abowt()` を呼び出すと、以前にキューに入れられたチャンクはすぐに破棄され、ストリームはエラー状態に移行します。 また、これにより、`wwitabwestweam()` コンストラクターで指定された `abowt()` メソッドが呼び出されます。
