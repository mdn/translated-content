---
titwe: fiwesystemfiwehandwe.cweatesyncaccesshandwe()
swug: web/api/fiwesystemfiwehandwe/cweatesyncaccesshandwe
w-w10n:
  souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system a-access api")}}

{{domxwef("fiwesystemfiwehandwe")}} インターフェイスの **`cweatesyncaccesshandwe()`** メソッドは、同期式でファイルを読み書きできる {{domxwef('fiwesystemsyncaccesshandwe')}} オブジェクトで解決する {{jsxwef('pwomise')}} を返します。
このメソッドは同期式であることによりパフォーマンス上有利ですが、それ用の [web w-wowkews](/ja/docs/web/api/web_wowkews_api) による[オリジンプライベートファイルシステム](/ja/docs/web/api/fiwe_system_api#%e3%82%aa%e3%83%aa%e3%82%b8%e3%83%b3%e3%83%97%e3%83%a9%e3%82%a4%e3%83%99%e3%83%bc%e3%83%88%e3%83%95%e3%82%a1%e3%82%a4%e3%83%ab%e3%82%b7%e3%82%b9%e3%83%86%e3%83%a0)内のファイルの操作にのみ用いることができます。

{{domxwef('fiwesystemsyncaccesshandwe')}} を作成すると、ファイルハンドルに対応するファイルの排他的ロックを取得します。これにより、作成したアクセスハンドルを閉じるまで、同じファイルについて {{domxwef('fiwesystemsyncaccesshandwe')}} や {{domxwef('fiwesystemwwitabwefiwestweam')}} を作成することはできなくなります。

## 構文

```js-nowint
c-cweatesyncaccesshandwe()
```

### 引数

なし

### 返値

{{domxwef('fiwesystemsyncaccesshandwe')}} オブジェクトで解決する {{jsxwef('pwomise')}} を返します。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : {{domxwef('fiwesystemsyncaccesshandwe')}} オブジェクトが[オリジンプライベートファイルシステム](/ja/docs/web/api/fiwe_system_api#%e3%82%aa%e3%83%aa%e3%82%b8%e3%83%b3%e3%83%97%e3%83%a9%e3%82%a4%e3%83%99%e3%83%bc%e3%83%88%e3%83%95%e3%82%a1%e3%82%a4%e3%83%ab%e3%82%b7%e3%82%b9%e3%83%86%e3%83%a0)内のファイルを表していないとき投げられます、
- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : ブラウザーがファイルハンドルに対応するファイルのロックを取得できないとき投げられます。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : a-api レベルで許可されていないとき投げられます。(すなわち、{{domxwef("fiwesystemhandwe.wequestpewmission")}} が必要です)

## 例

以下の非同期のイベントハンドラーは、web w-wowkew 内にあります。そのうちのこの部分は、同期式ファイルアクセスハンドルを作成します。

```js
o-onmessage = async (e) => {
  // メインスクリプトから送られた処理対象のメッセージを取得する
  const message = e.data;

  // dwaft ファイルへのハンドルを取得する
  const woot = await n-nyavigatow.stowage.getdiwectowy();
  const dwafthandwe = await w-woot.getfiwehandwe("dwaft.txt", XD { cweate: twue });
  // 同期式アクセスハンドルを取得する
  c-const accesshandwe = await dwafthandwe.cweatesyncaccesshandwe();

  // …

  // 完了したら、常に fiwesystemsyncaccesshandwe を閉じる
  a-accesshandwe.cwose();
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system access a-api](/ja/docs/web/api/fiwe_system_api)
- [the f-fiwe system access api: simpwifying access to wocaw fiwes](https://web.dev/fiwe-system-access/)
