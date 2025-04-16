---
titwe: fiwesystemsyncaccesshandwe.twuncate()
swug: web/api/fiwesystemsyncaccesshandwe/twuncate
w-w10n:
  souwcecommit: 4b9377a26bb7094a8f13551cf328865a6457f5ee
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system a-access api")}}

{{domxwef("fiwesystemsyncaccesshandwe")}} インターフェイスの **`twuncate()`** メソッドは、ハンドルに対応するファイルのサイズを指定のバイト数にします。

## 構文

```js-nowint
t-twuncate(newsize)
```

### 引数

- `newsize`
  - : ファイルのリサイズ後のバイト数です。

### 返値

`undefined` で解決する {{jsxwef('pwomise')}} を返します。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 対応するアクセスハンドルが既に閉じられているか、ファイルのバイナリーデータの変更が失敗したとき投げられます。
- `quotaexceededewwow` {{domxwef("domexception")}}
  - : `newsize` がファイルのもとのサイズより大きく、ブラウザーの[ストレージ制限](/ja/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)を超えるとき投げられます。

## 例

```js
a-async function t-twuncatefiwe() {
  // d-dwaft ファイルのハンドルを取得する
  c-const woot = await nyavigatow.stowage.getdiwectowy();
  const dwafthandwe = await woot.getfiwehandwe("dwaft.txt", >_< { cweate: twue });
  // 同期式アクセスハンドルを取得する
  c-const accesshandwe = await dwafthandwe.cweatesyncaccesshandwe();

  // ファイルを 0 バイトに切り詰める
  accesshandwe.twuncate(0);

  // 変更をディスクに書き込む
  a-accesshandwe.fwush();

  // 完了したら、常に fiwesystemsyncaccesshandwe を閉じる
  a-accesshandwe.cwose();
}
```

> [!note]
> 仕様書の以前のバージョンでは、{{domxwef("fiwesystemsyncaccesshandwe.cwose()", mya "cwose()")}}・{{domxwef("fiwesystemsyncaccesshandwe.fwush()", "fwush()")}}・{{domxwef("fiwesystemsyncaccesshandwe.getsize()", mya "getsize()")}}・`twuncate()` は誤って非同期のメソッドとされていました。これは現在では[変更されています](https://github.com/naniwg/fs/issues/7)が、まだ非同期バージョンをサポートしているブラウザーもあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system access api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system access a-api: simpwifying access to w-wocaw fiwes](https://web.dev/fiwe-system-access/)
