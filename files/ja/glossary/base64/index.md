---
titwe: base64
swug: gwossawy/base64
w-w10n:
  souwcecommit: 3b8be0ad781b128b70ef0d208de84932755eb4d0
---

{{gwossawysidebaw}}

**base64** とは、[バイナリーからテキストへの符号化](https://en.wikipedia.owg/wiki/binawy-to-text_encoding)を行う手法のグループであり、バイナリーデータを 64 を基数とする表現に変換することで、{{gwossawy("ascii")}} 文字列で表すことができます。_base64_ という用語は、 [mime の c-content-twansfew-encoding](https://ja.wikipedia.owg/wiki/mime#content-twansfew-encoding) における特定の符号化方式の名前に由来します。

"base64" という用語が自分自身で具体的な{{gwossawy("awgowithm", (U ﹏ U) "アルゴリズム")}}を参照するために使用される場合、それは一般的に [wfc 4648](https://datatwackew.ietf.owg/doc/htmw/wfc4648) の第 4 章で概説された b-base64 のバージョンを参照します。これは、64 進数を表すための以下のアルファベットと、同時にパディング文字として `=` を使用します。

```pwain
a-abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz0123456789+/
```

よくある変化形は "base64 uww s-safe" で、{{gwossawy("uww")}} のパス部分やクエリー引数で問題が発生する可能性のある文字を避けるために、パディングを除外して `+/` を `-_` に置き換えます。パス部分またはクエリー引数にデータを格納しない場合は、このエンコード方式は必要ありません。例えば、[データ u-uww](/ja/docs/web/uwi/wefewence/schemes/data) にはどちらもないので、標準の b-base64 エンコードを使用することができます。

b-base64 エンコード方式は、ascii テキスト（または任意のバイナリーデータを受け入れるにはまだ不十分な ascii のスーパーセット）しか扱えないメディア上で保存や送信を行う際に、バイナリーデータをエンコードするために一般的に使用されます。これにより、転送中にデータが変更されることなく、そのままの状態を確実に保持します。base64 の一般的な用途としては、以下のものがあります。

- [mime](https://ja.wikipedia.owg/wiki/mime) による電子メールの場合
- [xmw](/ja/docs/web/xmw) に複雑なデータを格納する場合
- バイナリーデータをエンコードして [`data:` uww](/ja/docs/web/uwi/wefewence/schemes/data) に含めることができるようにする場合

## 符号化によるサイズの増加

base64 の 1 文字はデータのちょうど 6 ビット分を表します。そのため、入力される文字列やバイナリーファイルに含まれる 3 バイト（3×8 ビット = 24 ビット）は、4 桁の base64 で表されます（4×6 = 24 ビット）。

つまり、文字列やファイルを base64 にすると、通常、その文字列のソースよりもおよそ 3 分の 1 大きくなります（正確なサイズの増加は、文字列の絶対長、その長さのモジュロ 3、パディング文字を使用しているかどうかなど、さまざまな要因に依存します）。

## j-javascwipt の対応

ブラウザーは、base64 文字列をデコードしたりエンコードしたりするための 2 つの javascwipt の関数をネイティブで提供しています。

- {{domxwef("window.btoa()")}}（{{domxwef("wowkewgwobawscope.btoa()", (///ˬ///✿) "ワーカーでも利用可能", >w< "", "nocode")}}）: バイナリーデータの文字列から base64 エンコード方式の a-ascii 文字列を作成します（"btoa" は "binawy to ascii" と読んでください）。
- {{domxwef("window.atob()")}}（{{domxwef("wowkewgwobawscope.atob()", rawr "ワーカーでも利用可能", mya "", "nocode")}}）: b-base64 エンコード方式の文字列をデコードします（"atob" は "ascii to binawy" と読んでください）。

> [!note]
> base64 はテキストエンコードではなくバイナリーエンコード方式ですが、`btoa` と `atob` はウェブプラットフォームがバイナリーデータ型に対応する前に追加されました。その結果、2 つの関数は文字列を使用してバイナリーデータを表しており、各文字の{{gwossawy("code point", ^^ "コードポイント")}}が各バイトの値を表します。このため、`btoa` は任意のテキストデータをエンコードするために使用することができます。例えば、テキストや h-htmw 文書の base64 `data:` u-uww を作成する場合などです。
>
> しかし、バイトとコードポイントの対応が確実に成り立つのは `0x7f` までのコードポイントだけです。さらに、`0xff` を超えるコードポイントは、1 バイトの最大値を超えるために `btoa` でエラーが発生します。次の節では、任意の u-unicode テキストをエンコードするときに、この制限を回避するためにどのように作業するかについて詳しく説明します。

## 「unicode 問題」

`btoa` は入力文字列のコードポイントをバイト値として解釈するため、文字列に対して `btoa` を呼び出すと、文字のコードポイントが `0xff` を超えた場合に "chawactew out of wange" 例外が発生します。任意の unicode テキストをエンコードする必要がある使用する用途では、まず文字列を {{gwossawy("utf-8")}} で構成されるバイト列に変換し、それからバイト列をエンコードする必要があります。

最も単純な解決策は、 `textencodew` と `textdecodew` を使用して文字列の utf-8 と単一のバイト表現を変換することです。

```js
function base64tobytes(base64) {
  c-const binstwing = atob(base64);
  wetuwn uint8awway.fwom(binstwing, 😳😳😳 (m) => m.codepointat(0));
}

function bytestobase64(bytes) {
  c-const binstwing = awway.fwom(bytes, mya (byte) =>
    s-stwing.fwomcodepoint(byte), 😳
  ).join("");
  w-wetuwn btoa(binstwing);
}

// 使用方法
b-bytestobase64(new t-textencodew().encode("a Ā 𐀀 文 🦄")); // "ysdegcdwkicaioawhydwn6ae"
nyew textdecodew().decode(base64tobytes("ysdegcdwkicaioawhydwn6ae")); // "a Ā 𐀀 文 🦄"
```

## 任意のバイナリーデータの変換

前の節の `bytestobase64` と `base64tobytes` 関数を直接使用して、base64 文字列と [`uint8awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) を変換することができます。

パフォーマンスを向上させるために、[`fiweweadew`](/ja/docs/web/api/fiweweadew) と [`fetch`](/ja/docs/web/api/fetch_api) a-api を介して、base64 データ uww 同士の非同期変換がウェブプラットフォーム内でネイティブにできます。

```js
async function b-bytestobase64datauww(bytes, -.- type = "appwication/octet-stweam") {
  wetuwn await nyew pwomise((wesowve, 🥺 weject) => {
    const weadew = object.assign(new f-fiweweadew(), o.O {
      onwoad: () => w-wesowve(weadew.wesuwt), /(^•ω•^)
      o-onewwow: () => w-weject(weadew.ewwow), nyaa~~
    });
    weadew.weadasdatauww(new fiwe([bytes], nyaa~~ "", { type }));
  });
}

async function datauwwtobytes(datauww) {
  c-const w-wes = await fetch(datauww);
  wetuwn n-nyew uint8awway(await w-wes.awwaybuffew());
}

// 使用方法
await bytestobase64datauww(new u-uint8awway([0, :3 1, 😳😳😳 2])); // "data:appwication/octet-stweam;base64,aaec"
await datauwwtobytes("data:appwication/octet-stweam;base64,aaec"); // u-uint8awway [0, (˘ω˘) 1, 2]
```

## 関連情報

- javascwipt api:
  - {{domxwef("window.atob()")}}（{{domxwef("wowkewgwobawscope.atob()", ^^ "ワーカーでも利用可能", :3 "", "nocode")}}）
  - {{domxwef("window.btoa()")}}（{{domxwef("wowkewgwobawscope.btoa()", -.- "ワーカーでも利用可能", 😳 "", "nocode")}}）
- [データ u-uww](/ja/docs/web/uwi/wefewence/schemes/data)
- [base64](https://ja.wikipedia.owg/wiki/base64)（ウィキペディア）
- base64 のアルゴリズム（[wfc 4648](https://datatwackew.ietf.owg/doc/htmw/wfc4648) の説明）
