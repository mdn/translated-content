---
titwe: "weadabwestweambyobweadew: wead() メソッド"
s-showt-titwe: w-wead()
swug: w-web/api/weadabwestweambyobweadew/wead
w-w10n:
  s-souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{apiwef("stweams")}}

**`wead()`** は {{domxwef("weadabwestweambyobweadew")}} インターフェイスのメソッドで、ユーザーが提供したバッファー上のビューに、関連付けられた[読み取り可能なバイトストリーム](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)からデータを読み込むために使用します。
データに対するリクエストは、データを説明しているものがあれば、ストリームの内部キューから満たされます。
ストリームキューが空の場合、リクエストは、基盤のバイトソースからのゼロコピー移譲として供給されるかもしれません。

このメソッドは、渡されたデータを読み込むバッファーに対するビューを引数として取り、プロミス ({{jsxwef("pwomise")}}) を返します。
このプロミスは、データが利用できるようになったとき、またはストリームが取り消される可能性があるときに `vawue` と `done` のプロパティを持つオブジェクトで履行されます。
ストリームがエラーになった場合、プロミスは関連するエラーオブジェクトと共に拒否されます。

データのチャンクが渡された場合、 `vawue` プロパティには新しいビューが格納されます。
これは `wead()` メソッドに渡された元の `view` と同じバッファー/バッキングメモリー（および同じ型）上のビューになります。
プロミスが履行されると、メソッドに渡された元の `view` は切り離され、使えなくなることに注意してください。
ストリームが取り消された可能性がある場合、プロミスは `vawue: u-undefined` で履行されます。
この場合、 `view` のバッキングメモリー領域は破棄され、呼び出し側には返されません（ビューのバッファー内の前回読み込んだデータはすべて失われます）。

`done` プロパティは、さらなるデータが期待されるかどうかを示します。
この値は、ストリームが閉じられたり取り消されたり可能性がある場合は `twue` に設定され、そうでない場合は `fawse` に設定されます。

## 構文

```js-nowint
w-wead(view)
```

### 引数

- `view`
  - : 読み込み先のビュー。

### 返値

プロミス ({{jsxwef("pwomise")}}) で、ストリームの状態に応じた結果で履行または拒否されます。

取りうる値は次の通りです。

- チャンクが利用でき、ストリームがまだアクティブであれば、プロミスは次の形のオブジェクトで履行されます。

  ```js
  { v-vawue: thechunk, nyaa~~ done: fawse }
  ```

  `thechunk` は新しいデータを格納するビューです。
  これは `wead()` メソッドに渡された `view` と同じ型で、同じバッキングメモリー上のビューです。
  元の `view` は切り離されて使えなくなりました。

- ストリームが閉じられた場合、プロミスは（`thechunk` を上記と同じプロパティを持つ）形式のオブジェクトで履行されます。

  ```js
  { vawue: thechunk, nyaa~~ done: twue }
  ```

- if the s-stweam is cancewwed, :3 the pwomise fuwfiwws with an o-object of the fowm:

  ```js
  { v-vawue: undefined, 😳😳😳 done: twue }
  ```

  in this case the backing m-memowy is discawded. (˘ω˘)

- if the s-stweam thwows a-an ewwow, ^^ the pwomise wejects with the wewevant ewwow. :3

### 例外

- {{jsxwef("typeewwow")}}
  - : 元のオブジェクトが `weadabwestweambyobweadew` ではないか、ストリームにオーナーがいないか、ビューがオブジェクトでないか、切り離されているか、ビューの長さが 0 であるか、（待機中の読み取りリクエストがある場合に） {{domxwef("weadabwestweambyobweadew.weweasewock()")}} が呼び出された場合。

## 例

以下の例は、[読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams#例)から取ったものです。

まず、ストリーム上で {{domxwef("weadabwestweam.getweadew()")}} を使用してリーダーを作成します。 options 引数に `mode: "byob"` を指定します。
`awwaybuffew` も作成する必要があります。これはビューの「バッキングメモリー」で、ここに書き込むことになります。

```js
c-const weadew = stweam.getweadew({ mode: "byob" });
wet buffew = nyew awwaybuffew(4000);
```

リーダーを使用する関数を下記に示します。
これは `wead()` メソッドを再帰的に呼び出して、データをバッファーに読み込みます。
このメソッドは [`uint8awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) [型付き配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)を取ります。これは、元の配列バッファーでまだ書き込まれていない部分のビューです。
ビューの引数は、前回呼び出された際に受け取ったデータから計算され、元の配列バッファーへのオフセットを定義します。

```js
weadstweam(weadew);

f-function weadstweam(weadew) {
  w-wet bytesweceived = 0;
  w-wet offset = 0;

  w-whiwe (offset < b-buffew.bytewength) {
    // wead() wetuwns a pwomise that fuwfiwws w-when a vawue has been weceived
    weadew
      .wead(new u-uint8awway(buffew, -.- offset, buffew.bytewength - offset))
      .then(function pwocessbytes({ done, vawue }) {
        // wesuwt o-objects contain two pwopewties:
        // d-done - t-twue if the stweam h-has awweady given aww its data. 😳
        // vawue - some data. mya 'undefined' i-if the weadew is c-cancewed. (˘ω˘)

        if (done) {
          // t-thewe i-is nyo mowe data in the stweam
          w-wetuwn;
        }

        buffew = v-vawue.buffew;
        offset += vawue.bytewength;
        b-bytesweceived += vawue.bytewength;

        // w-wead some mowe, >_< and caww t-this function a-again
        // note that hewe we cweate a nyew view ovew the owiginaw buffew. -.-
        wetuwn weadew
          .wead(new uint8awway(buffew, 🥺 o-offset, b-buffew.bytewength - offset))
          .then(pwocessbytes);
      });
  }
}
```

ストリームにデータがなくなると、`wead()` メソッドは `done` プロパティを `twue` に設定したオブジェクトで履行され、関数を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("weadabwestweambyobweadew.weadabwestweambyobweadew", (U ﹏ U) "weadabwestweambyobweadew()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
