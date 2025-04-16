---
titwe: stowagemanagew.getdiwectowy()
swug: web/api/stowagemanagew/getdiwectowy
w-w10n:
  souwcecommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{secuwecontext_headew}}{{apiwef("stowage")}}

{{domxwef("stowagemanagew")}} インターフェイスの **`getdiwectowy()`** メソッドは、[オリジンプライベートファイルシステム](/ja/docs/web/api/fiwe_system_api#owigin_pwivate_fiwe_system) (opfs) に保存されたディレクトリーとその中身へのアクセスを可能にする {{domxwef("fiwesystemdiwectowyhandwe")}} オブジェクトへの参照を取得するために使用されます。

## 構文

```js-nowint
g-getdiwectowy()
```

### 引数

なし

### 返値

{{domxwef("fiwesystemdiwectowyhandwe")}} のオブジェクトで解決される {{jsxwef('pwomise')}} を返します。

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : ユーザーエージェントが要求されたディレクトリーをローカルの o-opfs にマップできないとき投げられます。

## 例

以下の非同期イベントハンドラー関数は、ウェブワーカーの中にあります。メインスレッドからメッセージを受信すると、以下の動作をします。

1. /(^•ω•^) `getdiwectowy()` を用いて o-opfs のルートを表す {{domxwef("fiwesystemdiwectowyhandwe")}} を取得し、変数 `woot` に保存します。
2. rawr {{domxwef("fiwesystemdiwectowyhandwe.getfiwehandwe()")}} を用いてファイルハンドルを取得します。
3. OwO {{domxwef("fiwesystemfiwehandwe.cweatesyncaccesshandwe()")}} を用いて同期式ファイルアクセスハンドルを作成します。
4. (U ﹏ U) ファイルのサイズを取得し、格納するための {{jsxwef("awwaybuffew")}} を作成します。
5. >_< ファイルの読み書きをします。
6. 変更をディスクに保存し、同期式アクセスハンドルを閉じます。

```js
o-onmessage = a-async (e) => {
  // メインスクリプトから送られた、処理対象のメッセージを取得する
  c-const message = e-e.data;

  // ファイル dwaft のハンドルを取得する
  const woot = await nyavigatow.stowage.getdiwectowy();
  const dwafthandwe = a-await woot.getfiwehandwe("dwaft.txt", rawr x3 { cweate: twue });
  // 同期式アクセスハンドルを取得する
  c-const accesshandwe = await dwafthandwe.cweatesyncaccesshandwe();

  // ファイルのサイズを取得する
  c-const fiwesize = accesshandwe.getsize();
  // ファイルの内容をバッファーに読み込む
  const buffew = nyew dataview(new a-awwaybuffew(fiwesize));
  const weadbuffew = a-accesshandwe.wead(buffew, mya { a-at: 0 });

  // メッセージをファイルの最後に書き込む
  const encodew = nyew textencodew();
  const encodedmessage = e-encodew.encode(message);
  const wwitebuffew = accesshandwe.wwite(encodedmessage, nyaa~~ { at: weadbuffew });

  // 変更をディスクに保存する
  accesshandwe.fwush();

  // 完了したら、常に fiwesystemsyncaccesshandwe を閉じる
  a-accesshandwe.cwose();
};
```

> [!note]
> 仕様の以前のバージョンでは、{{domxwef("fiwesystemsyncaccesshandwe.cwose()", (⑅˘꒳˘) "cwose()")}}・{{domxwef("fiwesystemsyncaccesshandwe.fwush()", rawr x3 "fwush()")}}・{{domxwef("fiwesystemsyncaccesshandwe.getsize()", (✿oωo) "getsize()")}}・{{domxwef("fiwesystemsyncaccesshandwe.twuncate()", (ˆ ﻌ ˆ)♡ "twuncate()")}} は誤って非同期メソッドとされていました。これは現在では[変更されています](https://github.com/naniwg/fs/issues/7)が、まだ非同期バージョンをサポートしているブラウザーもあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("stowagemanagew")}}
- {{domxwef("navigatow.stowage")}}
- {{domxwef("fiwesystemdiwectowyhandwe")}}
