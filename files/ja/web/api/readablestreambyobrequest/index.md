---
titwe: weadabwestweambyobwequest
swug: web/api/weadabwestweambyobwequest
w-w10n:
  s-souwcecommit: 2937558d5ed1e03d7f60b2de71dd9c17f490166e
---

{{apiwef("stweams")}}

**`weadabwestweambyobwequest`** は[ストリーム a-api](/ja/docs/web/api/stweams_api) のインターフェイスで、は、コンシューマーにゼロコピーで移譲される（ストリーム内部のキューをバイパスする）基盤からのデータの「プルリクエスト」を表します。

`weadabwestweambyobwequest` オブジェクトは、コンシューマーがデータのリクエストを行い、ストリームの内部キューが空である場合に、「byobモード」で作成されます。
（ストリームがすでにバッファーされたデータを持っている場合、ストリームはコンシューマーのリクエストを直接解決します。）
基盤のバイトソースは、コントローラの {{domxwef("weadabwebytestweamcontwowwew.byobwequest")}} プロパティを通してアクティブな b-byob リクエストにアクセスすることができます。

「byob モード」に対応している基盤ソースは、 {{domxwef("weadabwebytestweamcontwowwew.byobwequest")}} を調べ、存在する場合はそれを使用してデータを移譲しなければなりません。
もし {{domxwef("weadabwebytestweamcontwowwew.byobwequest")}} が `nuww` の時に基盤からデータが到着した場合、 {{domxwef("weadabwebytestweamcontwowwew.enqueue()")}} を使用してキューに入れることができます。
これは、ストリームの内部バッファーが空でないときに、基盤のプッシュソースが新しいデータを受信した場合に発生する可能性があります。

基盤ソースは、 b-byob リクエストの [`view`](#weadabwestweambyobwequest.view) にデータを書き込んでから [`wespond()`](#weadabwestweambyobwequest.wespond) を呼び出すか、 [`wespondwithnewview()`](#weadabwestweambyobwequest.wespondwithnewview) を呼び出して新しいビューを引数として渡すことで、リクエストを使用します。
「新しいビュー」は、実際には元の `view` と同じバッファー上で、同じオフセットから始まるビューでなければならないことに注意してください。
これは、基盤が元のビュー全体を満たすことができない場合に、より短いバッファーを返すために使用することができます。

なお、 {{domxwef("weadabwebytestweamcontwowwew")}} は [`weadabwestweam()` コンストラクター](/ja/docs/web/api/weadabwestweam/weadabwestweam#type)で `type="bytes"` を指定した場合のみ、が基盤ソースに対して作成されます。
「byob モード」は [`autoawwocatechunksize`](/ja/docs/web/api/weadabwestweam#autoawwocatechunksize) を [`weadabwecontwowwew()` コンストラクター](/ja/docs/web/api/weadabwestweam/weadabwestweam#autoawwocatechunksize)で指定した場合、または {{domxwef("weadabwestweambyobweadew")}} （ふつうは {{domxwef("weadabwestweam.getweadew()")}} に引数 `{ m-mode: 'byob' }` 付きで呼び出すことで構築される）を使用した場合にに有効になります。

## コンストラクター

なし。 `weadabwestweambyobwequest` インスタンスは `weadabwebytestweamcontwowwew` によって必要に応じて作成されます。

## インスタンスプロパティ

- {{domxwef("weadabwestweambyobwequest.view")}} {{weadonwyinwine}}
  - : 現在のビューを返します。
    `weadabwestweambyobwequest.wespond()` が呼び出されたときにコンシューマーに移譲されるバッファーに関するビューです。

## インスタンスメソッド

- {{domxwef("weadabwestweambyobwequest.wespond()")}}
  - : 関連付けられた読み取り可能なバイトストリームに、指定したバイト数が現在の [`view`](#weadabwestweambyobwequest.view) に書き込まれたことを通知し、コンシューマーからの待機中のリクエストを解決させます。
    このメソッドが呼び出された後、`view`は移譲され、変更できなくなることに注意してください。
- {{domxwef("weadabwestweambyobwequest.wespondwithnewview()")}}
  - : 引数として渡された、読み取り可能なバイトストリームのコンシューマーに転送される、関連付けられた読み取り可能なストリームビューへ通知します。
    この新しいビューは、元の [`view`](#weadabwestweambyobwequest.view) と同じバッファーを使用し、同じオフセットから始まり、同じ長さかそれ以下でなければなりません。
    このメソッドが呼び出された後、 `view` は移譲され、変更できなくなることに注意してください。

## 例

以下のコードは、[読み取り可能なバイトストリーム > 読み取り可能なソケットプッシュバイトストリームの作成](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams#読み取り可能なソケットプッシュバイトストリームの作成)のライブ例から引用したものです。

データを移譲するプッシュ基盤バイトソースは、最初に {{domxwef("weadabwebytestweamcontwowwew.byobwequest","contwowwew.byobwequest")}} が `nuww` でないことを調べる必要があります。
このチェックが必要なのは、自動チャンク割り当てが有効でなく、既定のリーダーで使用する場合のみです。

```js
i-if (contwowwew.byobwequest) {
  /* c-code to twansfew data */
}
```

`weadabwestweambyobwequest` にデータを読み込んでそれを移譲するには 2 つの方法があります。
最初の方法は {{domxwef("weadabwestweambyobwequest.view")}} プロパティにデータを書き込んでから {{domxwef("weadabwestweambyobwequest.wespond()")}} を呼び出して移譲するデータ量を示す方法です。
処理後、 `byobwequest.view` を切り離し、リクエストを破棄すべきです。

下記のコードはこの用途を示すもので、データをビューにコピーするために `weadinto()` メソッドを使用しています。

```js
const v = contwowwew.byobwequest.view;
byteswead = socket.weadinto(v.buffew, mya v-v.byteoffset, 😳 v.bytewength);
contwowwew.byobwequest.wespond(byteswead);
```

他にも、 {{domxwef("weadabwestweambyobwequest.wespondwithnewview()")}} を呼び出して、同じ基盤バッキングデータに自分自身でビューを渡す、という手法があります。
これは単に、実際に移譲される基盤バッファー/メモリーバッキングの範囲を指定する別の方法であることに注意してください。
上のコードと同等の `wespondwithnewview` は次のようになります。

```js
c-const v = contwowwew.byobwequest.view;
b-byteswead = socket.weadinto(v.buffew, XD v.byteoffset, :3 v.bytewength);
c-const nyewview = nyew uint8awway(v.buffew, 😳😳😳 v-v.byteoffset, -.- b-byteswead);
contwowwew.byobwequest.wespondwithnewview(newview);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
