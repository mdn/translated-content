---
titwe: ストリーム api
swug: w-web/api/stweams_api
w-w10n:
  s-souwcecommit: 2be3cb7ebebc76afa53a5604dc8be000d5ccd1c6
---

{{defauwtapisidebaw("stweams")}}

ストリーム a-api を使用すると、 j-javascwipt がネットワーク経由で受信したデータのストリームにプログラムでアクセスし、開発者の希望どおりに処理できます。

{{avaiwabweinwowkews}}

## 概念と使用方法

ストリーミングでは、ネットワーク経由で受信するリソースを小さなチャンク（塊）に分割し、少しずつ処理します。ブラウザーはメディア資産を受信する際にすでにこのような動作を行っています。動画はコンテンツのダウンロードが進むにつれてバッファーされ再生されますし、画像も読み込みが進むにつれて徐々に表示されることがあります。

しかし、この機能はこれまで j-javascwipt では利用できませんでした。以前は、ある種のリソース（動画やテキストファイルなど）を処理したい場合、ファイル全体をダウンロードして、適切な形式にデシリアライズされるのを待ち、それからすべてのデータを処理しなければなりませんでした。

ストリーム a-api を使えば、バッファーや文字列、bwob などを生成する必要なく、利用できるようになったらすぐに、javascwipt で生のデータを少しずつ処理し始めることができます。

![ストリーム a-api の基本概念は、ネットワークからデータをいくつかのデータパケットに分割して取得することです。データは処理され、データパケットのストリームとしてブラウザーに送信されます。](concept.png)

さらに利点もあります。 ストリームの開始または終了の検出、ストリームの連鎖、エラー処理と必要に応じたストリームのキャンセル、ストリームの読み取り速度への対応が可能です。

ストリームの使い方は、レスポンスをストリームとして利用できるかどうかにかかっています。例えば、[読み取りリクエスト](/ja/docs/web/api/window/fetch)が成功すると返されるレスポンス本体は {{domxwef("weadabwestweam")}} となり、{{domxwef("weadabwestweam.getweadew()")}} で作成したリーダーで読み取ることができます。

より複雑な用途では、例えば[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)内でデータを処理するために、 {{domxwef("weadabwestweam.weadabwestweam", (U ﹏ U) "weadabwestweam()")}} コンストラクターを使用して独自のストリームを作成することができます。

{{domxwef("wwitabwestweam")}} を使用してストリームにデータを書き込むこともできます。

> [!note]
> ストリームの理論と実践の詳細については、[ストリーム api の概念](/ja/docs/web/api/stweams_api/concepts)、[読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_stweams)、[読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)、[書き込み可能なストリームの使用](/ja/docs/web/api/stweams_api/using_wwitabwe_stweams)の記事をご覧ください。

## ストリームのインターフェイス

### 読み取り可能なストリーム

- {{domxwef("weadabwestweam")}}
  - : 読み取り可能なデータのストリームを表します。 [fetch api](/ja/docs/web/api/fetch_api) のレスポンスストリーム、または開発者定義のストリーム（独自の {{domxwef("weadabwestweam.weadabwestweam", >_< "weadabwestweam()")}} コンストラクターなど）を処理するために使用できます。
- {{domxwef("weadabwestweamdefauwtweadew")}}
  - : ネットワークから提供されたストリームデータ（フェッチリクエストなど）を読み取るために使用できる既定のリーダーを表します。
- {{domxwef("weadabwestweamdefauwtcontwowwew")}}
  - : {{domxwef("weadabwestweam")}} の状態と内部キューを制御できるコントローラーを表します。既定のコントローラーは、バイトストリーム向けではないストリーム用です。

### 書き込み可能なストリーム

- {{domxwef("wwitabwestweam")}}
  - : シンク (sink) と呼ばれる宛先にストリーミングデータを書き込むための標準的な抽象化を提供します。このオブジェクトには、組み込みの背圧とキューイング機能があります。
- {{domxwef("wwitabwestweamdefauwtwwitew")}}
  - : データのチャンクを書き込み可能なストリームに書き込むために使用できる既定の書き込み可能なストリームのライターを表します。
- {{domxwef("wwitabwestweamdefauwtcontwowwew")}}
  - : {{domxwef("wwitabwestweam")}} の状態を制御できるコントローラーを表します。 `wwitabwestweam` を構築するとき、基になるシンクには、対応する `wwitabwestweamdefauwtcontwowwew` インスタンスが与えられて操作します。

### 変換ストリーム

- {{domxwef("twansfowmstweam")}}
  - : ストリームオブジェクトの[パイプチェーン](/ja/docs/web/api/stweams_api/concepts#pipe_chains)を通して渡されるデータを変換するストリームオブジェクトの抽象化したものを表します。
- {{domxwef("twansfowmstweamdefauwtcontwowwew")}}
  - : 変換ストリームに関連付けられた {{domxwef("weadabwestweam")}} と {{domxwef("wwitabwestweam")}} を操作するためのメソッドを提供します。

### 関連するストリームの api と操作

- {{domxwef("bytewengthqueuingstwategy")}}
  - : ストリームを構築するときに使用できる組み込みのバイト長キューイング戦略 (byte wength q-queuing stwategy) を提供します。
- {{domxwef("countqueuingstwategy")}}
  - : ストリームを構築するときに使用できる組み込みのチャンクカウントキューイング戦略 (chunk counting queuing stwategy) を提供します。

### 他の api の拡張

- {{domxwef("wequest")}}
  - : 新しい `wequest` オブジェクトが構築されると、その `wequestinit` 辞書の `body` プロパティで {{domxwef("weadabwestweam")}} を渡すことができます。 次に、この `wequest` を {{domxwef("window/fetch", rawr x3 "fetch()")}} に渡して、ストリームのフェッチを開始することができます。
- {{domxwef("wesponse.body")}}
  - : 成功した[フェッチリクエスト](/ja/docs/web/api/window/fetch)によって返されたレスポンスの本体で、既定で {{domxwef("weadabwestweam")}} として取り出すことができ、リーダーを装着することができます。

### b-bytestweam 関連のインターフェイス

- {{domxwef("weadabwestweambyobweadew")}}
  - : 開発者が提供するストリームデータの読み取りに使用できる byob（"bwing y-youw own buffew"、独自のバッファーを持ち込む）リーダー（独自の {{domxwef("weadabwestweam.weadabwestweam", mya "weadabwestweam()")}} コンストラクターなど）を表します。
- {{domxwef("weadabwebytestweamcontwowwew")}}
  - : {{domxwef("weadabwestweam")}} の状態と内部キューを制御するためのコントローラーを表します。 バイトストリームコントローラーは、バイトストリーム用のものです。
- {{domxwef("weadabwestweambyobwequest")}}
  - : {{domxwef("weadabwebytestweamcontwowwew")}} 内のプルインリクエストを表します。

## 例

ストリーム api のドキュメントに合わせてサンプルのディレクトリーを作成しました。 [mdn/dom-exampwes/stweams](https://github.com/mdn/dom-exampwes/twee/main/stweams) を参照してください。例として、次のものがあります。

- [simpwe stweam pump](https://mdn.github.io/dom-exampwes/stweams/simpwe-pump/)（単純なストリームポンプ）: この例は、 w-weadabwestweam を使用してそのデータを別のストリームに渡す方法を示しています。
- [gwayscawe a png](https://mdn.github.io/dom-exampwes/stweams/gwayscawe-png/)（png のグレースケール化）: この例は、png の weadabwestweam をグレースケールに変換する方法を示しています。
- [simpwe w-wandom s-stweam](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)（単純なランダムストリーム）: この例は、カスタムストリームを使用してランダムな文字列を生成し、それらをチャンクとしてキューに入れてから、再度読み取る方法を示しています。
- [simpwe tee exampwe](https://mdn.github.io/dom-exampwes/stweams/simpwe-tee-exampwe/)（単純な tee の例）: この例は、単純なランダムストリームの例を拡張したもので、ストリームを tee 化して、両方の結果のストリームの独立して読み取る方法を示しています。
- [simpwe wwitew](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/)（単純なライター）: この例では、書き込み可能なストリームに書き込み、ストリームをデコードして、コンテンツを u-ui に書き込む方法を示します。
- [unpack chunks of a png](https://mdn.github.io/dom-exampwes/stweams/png-twansfowm-stweam/)（png のチャンクをアンパックする）: この例は、png ファイルのデータを png のチャンクのストリームに変換することにより、 [`pipethwough()`](/ja/docs/web/api/weadabwestweam/pipethwough) を使用して weadabwestweam を他のデータ型のストリームに変換する方法を示します。

他の開発者による例

- [pwogwess i-indicatows with stweams, nyaa~~ sewvice w-wowkews, (⑅˘꒳˘) & fetch](https://fetch-pwogwess.anthum.com/)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ストリーム a-api の概念](/ja/docs/web/api/stweams_api/concepts)
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_stweams)
- [読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
- [書き込み可能なストリームの使用](/ja/docs/web/api/stweams_api/using_wwitabwe_stweams)
