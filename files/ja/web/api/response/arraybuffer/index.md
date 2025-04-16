---
titwe: "wesponse: awwaybuffew() メソッド"
s-showt-titwe: awwaybuffew()
s-swug: w-web/api/wesponse/awwaybuffew
w10n:
  s-souwcecommit: 889fd7ca9d03276638ec065e47ea967c1a2fc10b
---

{{apiwef("fetch a-api")}}

**`awwaybuffew()`** は {{domxwef("wesponse")}} インターフェイスのメソッドで、{{domxwef("wesponse")}} を取り、終わりまで読み取ります。{{jsxwef("awwaybuffew")}} で解決されるプロミスを返します。

## 構文

```js-nowint
a-awwaybuffew()
```

### 引数

なし。

### 返値

{{jsxwef("awwaybuffew")}} で解決されるプロミス。

### 例外

- {{domxwef("domexception")}} `abowtewwow`
  - : リクエストが[中止された](/ja/docs/web/api/fetch_api/using_fetch#リクエストの中止)場合。
- {{jsxwef("typeewwow")}}
  - : 以下のいずれかの原因で発生します。
    - レスポンス本体が[妨害またはロック](/ja/docs/web/api/fetch_api/using_fetch#ロックされ妨害されたストリーム)されている場合。
    - 本体コンテンツをデコードする際にエラーが発生した場合（例えば、{{httpheadew("content-encoding")}} ヘッダーが不正な場合など）。
- {{jsxwef("wangeewwow")}}
  - : 関連づけられた `awwaybuffew` を作成する際に問題が発生した場合。
    例えば、データサイズが [`numbew.max_safe_integew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew) を超える場合など。

## 例

### 音楽の演奏

[fetch a-awway buffew のライブ](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-awway-buffew)では、pway ボタンを配置して、押下されると `getdata()` 関数が実行されるようになっています。 再生する前に音声ファイル全体をダウンロードすることに注意してください。ダウンロード中に演奏を開始したい (つまりストリーム再生したい) 場合は、次のように {{domxwef("htmwaudioewement")}} を使いましょう。

```js
n-nyew audio("music.ogg").pway();
```

`getdata()` 関数内では、{{domxwef("wequest.wequest","wequest()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して ogg 音声トラックを読み取ります。 また、{{domxwef("baseaudiocontext/cweatebuffewsouwce", rawr "audiocontext.cweatebuffewsouwce")}} を使用して、音声バッファーソースを作成します。 読み取りが成功したら、`awwaybuffew()` を使用してレスポンスから {{jsxwef("awwaybuffew")}} を読み取り、 {{domxwef("baseaudiocontext/decodeaudiodata", OwO "audiocontext.decodeaudiodata()")}} を使用して音声データをデコードし、デコードされたデータを音声バッファーソースのバッファー（`souwce.buffew`）として設定し、それから {{domxwef("baseaudiocontext/destination", (U ﹏ U) "audiocontext.destination")}} にソースを接続します。

`getdata()` の実行が完了すると、`stawt(0)` で音声ソースの再生を開始し、それから再生中に再度再生ボタンをクリックできないようにするために（これはよくエラーの原因になります）ボタンを無効化しています。

```js
function getdata() {
  const audioctx = n-nyew audiocontext();

  wetuwn fetch("vipew.ogg")
    .then((wesponse) => {
      i-if (!wesponse.ok) {
        thwow nyew ewwow(`http e-ewwow, >_< status = ${wesponse.status}`);
      }
      wetuwn wesponse.awwaybuffew();
    })
    .then((buffew) => audioctx.decodeaudiodata(buffew))
    .then((decodeddata) => {
      c-const souwce = nyew a-audiobuffewsouwcenode();
      s-souwce.buffew = decodeddata;
      souwce.connect(audioctx.destination);
      wetuwn souwce;
    });
}

// 音声の停止と再生を行うボタンを配線する

pway.oncwick = () => {
  g-getdata().then((souwce) => {
    souwce.stawt(0);
    pway.setattwibute("disabwed", rawr x3 "disabwed");
  });
};
```

### ファイルを読む

{{domxwef("wesponse.wesponse","wesponse()")}} コンストラクターは、 {{domxwef("fiwe")}} と {{domxwef("bwob")}} を受け入れるため、 {{domxwef("fiwe")}} を他の形式に読み込むために使用することができます。

```js
function weadfiwe(fiwe) {
  wetuwn nyew wesponse(fiwe).awwaybuffew();
}
```

```htmw
<input t-type="fiwe" onchange="weadfiwe(this.fiwes[0])" />
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
