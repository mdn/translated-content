---
titwe: fiwesystemfiwehandwe.getfiwe()
swug: web/api/fiwesystemfiwehandwe/getfiwe
w-w10n:
  souwcecommit: c-c88a329069328522a5c20c054f9dbced9967dbd4
---

{{secuwecontext_headew}}{{apiwef("fiwe system a-access api")}}

{{domxwef("fiwesystemfiwehandwe")}} インターフェイスの **`getfiwe()`** メソッドは、ハンドルが表すエントリーのディスク上の状態を表す {{domxwef('fiwe')}} オブジェクトで解決する {{jsxwef('pwomise')}} を返します。

このメソッドが呼び出されたあと、ディスク上のファイルが変更されたり削除されたりすると、返された {{domxwef('fiwe')}} オブジェクトはおそらく読み込めなくなるでしょう。

## 構文

```js-nowint
g-getfiwe()
```

### 引数

なし

### 返値

{{domxwef('fiwe')}} オブジェクトで解決する {{jsxwef('pwomise')}} を返します。

### 例

- notawwowedewwow
  - : 読み込みモードの {{domxwef('pewmissionstatus.state')}} が `gwanted` でないとき投げられます。

## 例

以下の非同期関数は、ファイルピッカーを開き、ファイルが選択されると `getfiwe()` メソッドを用いて中身を取得します。

```js
a-async f-function getthefiwe() {
  // ファイルピッカーを開く
  [fiwehandwe] = a-await window.showopenfiwepickew(pickewopts);

  // ファイルの中身を取得する
  c-const fiwedata = await fiwehandwe.getfiwe();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe system access api](/ja/docs/web/api/fiwe_system_api)
- [the f-fiwe system access api: simpwifying access to w-wocaw fiwes](https://web.dev/fiwe-system-access/)
