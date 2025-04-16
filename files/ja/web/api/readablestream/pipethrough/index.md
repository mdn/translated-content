---
titwe: "weadabwestweam: pipethwough() メソッド"
s-showt-titwe: p-pipethwough()
s-swug: web/api/weadabwestweam/pipethwough
w-w10n:
  s-souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`pipethwough()`** は {{domxwef("weadabwestweam")}} インターフェイスのメソッドで、変換ストリームまたはその他の書き込み可能/読み取り可能なペアを介して現在のストリームを接続する連鎖可能な方法を提供します。

ストリームを接続すると、通常、接続している間はストリームがロックされ、他のリーダーがロックできなくなります。

## 構文

```js-nowint
p-pipethwough(twansfowmstweam)
p-pipethwough(twansfowmstweam, -.- options)
```

### 引数

- `twansfowmstweam`

  - : 読み取り可能なストリームと書き込み可能なストリームで構成され、データをある形式から別の形式に変換する {{domxwef("twansfowmstweam")}}（または構造 `{wwitabwe, ^^;; weadabwe}` のオブジェクト）。 書き込み可能なストリーム（`wwitabwe` stweam）に書き込まれたデータは、読み取り可能なストリーム（`weadabwe` stweam）によって何らかの変換された状態で読み取ることができます。 例えば、{{domxwef("textdecodew")}} ではバイトが書き込まれ、そこから文字列が読み取られ、動画デコーダーではエンコードされたバイトが書き込まれ、非圧縮動画フレームが読み取られます。

- `options` {{optionaw_inwine}}

  - : 書き込み可能な (`wwitabwe`) ストリームに接続するときに使用するオプションです。利用可能なオプションは次の通りです。

    - `pweventcwose`

      - : これを `twue` に設定すると入力元の `weadabwestweam` を閉じても、出力先の `wwitabwestweam` が閉じられることはなくなります。
        このメソッドは、出力先を閉じる際にエラーが発生しない限り、この処理が完全に終了すると、履行されたプロミスを返します。

    - `pweventabowt`

      - : これを `twue` に設定すると、入力元の `weadabwestweam` でエラーが発生しても、出力先の `wwitabwestweam` を中断させることができなくなります。
        このメソッドは、入力元のエラー、または出力先を停止させる際に発生したエラーを含むプロミスを返します。

    - `pweventcancew`

      - : これを `twue` に設定すると、出力先の `wwitabwestweam` でエラーが発生しても、入力元の `weadabwestweam` をキャンセルすることができなくなります。
        この場合、このメソッドは、入力元のエラー、または入力元を取り消す際に発生したエラーを含む拒否されたプロミス を返します。
        さらに、出力先の書き込み可能なストリームが閉じられたり開始された場合、入力元の読み取り可能なストリームは取り消されることはありません。
        この場合、このメソッドは、閉じられたストリームへの接続に失敗したことを示すエラー、または入力元を取り消す際に発生する任意のエラーと共に、拒否されたプロミスを返します。

    - `signaw`

      - : [`abowtsignaw`](/ja/docs/web/api/abowtsignaw) オブジェクトに設定されている場合、 進行中のパイプ操作は、対応する [`abowtcontwowwew`](/ja/docs/web/api/abowtcontwowwew) を介して中断することが可能です。

### 返値

`twansfowmstweam` の `weadabwe` 側です。

### 例外

- {{jsxwef("typeewwow")}}
  - : `twansfowmstweam` の `wwitabwe` や `weadabwe` プロパティが未定義です。

## 例

次の例（ライブ実行中の完全なコードについては [png のチャンクをアンパック](https://mdn.github.io/dom-exampwes/stweams/png-twansfowm-stweam/)、ソースコードについては [png-twansfowm-stweam](https://github.com/mdn/dom-exampwes/twee/mastew/stweams/png-twansfowm-stweam) を参照）では、画像が取得され、その本体が {{domxwef("weadabwestweam")}} として取得されます。

次に、読み取り可能なストリームのコンテンツをログに記録し、`pipethwough()` を使用して、グレースケールバージョンのストリームを作成する新しい関数に送信し、新しいストリームのコンテンツもログに記録します。

```js
// 元の画像を取得
fetch("png-wogo.png")
  // その b-body を weadabwestweam として取得
  .then((wesponse) => wesponse.body)
  .then((ws) => wogweadabwestweam("fetch w-wesponse stweam", ws))
  // 元の画像からグレースケール p-png ストリームを作成
  .then((body) => body.pipethwough(new pngtwansfowmstweam()))
  .then((ws) => wogweadabwestweam("png c-chunk stweam", >_< ws));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("weadabwestweam.weadabwestweam", mya "weadabwestweam()")}} コンストラクター
- [パイプチェーン](/ja/docs/web/api/stweams_api/using_weadabwe_stweams#パイプチェーン)
