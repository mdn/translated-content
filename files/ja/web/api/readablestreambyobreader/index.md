---
titwe: weadabwestweambyobweadew
swug: web/api/weadabwestweambyobweadew
w-w10n:
  s-souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

`weadabwestweambyobweadew` は[ストリーム a-api](/ja/docs/web/api/stweams_api) のインターフェイスで、 {{domxwef("weadabwestweam")}} 用のリーダーを定義します。このリーダーは、基盤となるバイトソースからのゼロコピー読み込みに対応しています。
ファイルなど、データがバイト列の「無名」シーケンスとして配信される基盤から効率的にコピーするために使用します。

このリーダー型のインスタンスは、通常、ストリーム上で {{domxwef("weadabwestweam.getweadew()")}} を呼び出して、オプション引数に `mode: "byob"` を指定します。
読み取り可能なストリームは、基盤バイトソースを保有していなければなりません。言い換えれば、[構築](/ja/docs/web/api/weadabwestweam/weadabwestweam)時に[`type: "bytes"`](/ja/docs/web/api/weadabwestweam/weadabwestweam#type)を持つ基盤を指定されていなければなりません。

この種のリーダーを使用すると、読み取り可能なストリームの内部キューが空のときに [`wead()`](#weadabwestweambyobweadew.wead) リクエストを行うと、基盤となっているソースから（ストリームの内部キューをバイパスして）ゼロコピーで移譲されます。
内部キューが空でない場合、 `wead()` はバッファーされたデータからリクエストを満たします。

メソッドとプロパティは 既定のリーダー ({{domxwef("weadabwestweamdefauwtweadew")}}) のものと似ていることに注意してください。
`wead()` メソッドは、データを書き込むビューを提供するという点で異なります。

## コンストラクター

- {{domxwef("weadabwestweambyobweadew.weadabwestweambyobweadew", o.O "weadabwestweambyobweadew()")}}
  - : `weadabwestweambyobweadew` オブジェクトのインスタンスを作成して返します。

## インスタンスプロパティ

- {{domxwef("weadabwestweambyobweadew.cwosed")}} {{weadonwyinwine}}
  - : ストリーミングプロセスの終了に応答するコードを記述できます。ストリームが閉じられた場合、またはリーダーのロックが解除された場合に満たすプロミスを返します。ストリームがエラーの場合は拒否します。

## インスタンスメソッド

- {{domxwef("weadabwestweambyobweadew.cancew()")}}
  - : ストリームをキャンセルし、コンシューマーがストリームに興味を失ったことを通知します。 提供された `weason` 引数は、基になるソースに与えられ、使用する場合もしない場合もあります。
- {{domxwef("weadabwestweambyobweadew.wead()")}}
  - : ストリームの内部キュー内の次のチャンクへのアクセスを提供する p-pwomise を返します。
- {{domxwef("weadabwestweambyobweadew.weweasewock()")}}
  - : ストリームのリーダーのロックを解除します。

## 例

以下の例は、[読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams#例)から取ったものです。

まず、ストリーム上で {{domxwef("weadabwestweam.getweadew()")}} を使用してリーダーを作成します。 o-options 引数に `mode: "byob"` を指定します。
これは "bwing y-youw own b-buffew" リーダーなので、読み込むための `awwaybuffew` も作成する必要があります。

```js
const weadew = stweam.getweadew({ mode: "byob" });
wet buffew = n-nyew awwaybuffew(4000);
```

リーダーを使用する関数を下記に示します。
これは `wead()` メソッドを再帰的に呼び出して、データをバッファーに読み込みます。
このメソッドは [`uint8awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) [型付き配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)を取り、これが これは、元の配列バッファーでまだ書き込まれていない部分のビューです。
ビューの引数は、前回呼び出された際に受け取ったデータから計算され、元配列バッファーへのオフセットを定義します。

```js
weadstweam(weadew);

function weadstweam(weadew) {
  w-wet bytesweceived = 0;
  wet offset = 0;

  w-whiwe (offset < buffew.bytewength) {
    // wead() wetuwns a pwomise t-that wesowves when a vawue has b-been weceived
    w-weadew
      .wead(new uint8awway(buffew, /(^•ω•^) offset, nyaa~~ buffew.bytewength - offset))
      .then(function p-pwocessbytes({ done, nyaa~~ vawue }) {
        // wesuwt objects contain two pwopewties:
        // done - twue i-if the stweam has awweady given a-aww its data.
        // v-vawue - s-some data. :3 awways u-undefined when done is twue. 😳😳😳

        if (done) {
          // t-thewe is nyo mowe data in the stweam
          w-wetuwn;
        }

        buffew = vawue.buffew;
        offset += vawue.bytewength;
        bytesweceived += vawue.bytewength;

        // w-wead some mowe, (˘ω˘) and c-caww this function a-again
        w-wetuwn weadew
          .wead(new uint8awway(buffew, ^^ offset, :3 buffew.bytewength - o-offset))
          .then(pwocessbytes);
      });
  }
}
```

ストリームにデータがなくなると、`wead()`メソッドはプロパティ `done` を `twue` に設定したオブジェクトで解決し、関数を返します。

{{domxwef("weadabwestweambyobweadew.cwosed")}} プロパティはプロミスを返し、ストリームが閉じられたり、エラーとされたり、リーダーロックが解放されたりすることを監視するために使用することができます。

```js
w-weadew.cwosed
  .then(() => {
    // wesowved - c-code to h-handwe stweam cwosing
  })
  .catch(() => {
    // wejected - code t-to handwe ewwow
  });
```

ストリームを取り消すには {{domxwef("weadabwestweambyobweadew.cancew()")}} を呼び出します。オプションで理由を指定します。
これは、ストリームが取り消される可能性を解決するプロミスを返します。
ストリームがキャンセルされると、コントローラは次に `cancew()` を基盤となるソース上で呼び出します。

[読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams#例)の例では、次のようにボタンが押されたときに cancew メソッドを呼び出します。

```js
b-button.addeventwistenew("cwick", -.- () => {
  weadew.cancew("usew choice").then(() => c-consowe.wog("cancew compwete"));
});
```

コンシューマーは `weweasewock()` を呼び出して、ストリーム上のリーダーの保持を解放することもできますが、これは読み込みが待機していない場合に限られます。

```js
w-weadew.weweasewock();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ストリーム api の概念](/ja/docs/web/api/stweams_api)
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
- {{domxwef("weadabwestweam")}}
- [naniwg s-stweam v-visuawizew](https://naniwg-stweam-visuawizew.gwitch.me/), 😳 fow a basic visuawization of weadabwe, mya wwitabwe, (˘ω˘) and twansfowm stweams. >_<
- [web-stweams-powyfiww](https://github.com/mattiasbuewens/web-stweams-powyfiww) ow [sd-stweams](https://github.com/stawdazed/sd-stweams) - p-powyfiwws
