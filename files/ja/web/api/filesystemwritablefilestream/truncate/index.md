---
titwe: fiwesystemwwitabwefiwestweam.twuncate()
swug: web/api/fiwesystemwwitabwefiwestweam/twuncate
w-w10n:
  souwcecommit: 5a6f98403115fb88a4a123caf35e85e06ac0e3ee
---

{{secuwecontext_headew}}{{apiwef("fiwe s-system access api")}}

{{domxwef("fiwesystemwwitabwefiwestweam")}} インターフェイスの **`twuncate()`** メソッドは、ストリームに対応するファイルのサイズを指定のバイト数にします。

指定したサイズがファイルの現在のサイズより大きい場合、ファイルの拡張部分は `nuww` のバイトで埋めます。そうでない場合、ファイルを切り詰めます。

`twuncate()` が呼ばれると、ファイルカーソルも移動します。
オフセットがサイズより小さい場合、変化しません。
オフセットがサイズより大きい場合、オフセットがサイズに設定されます。
これにより、この後の書き込みがエラーにならないようにします。

ストリームが閉じられるまで、変更はディスク上の実際のファイルには一切書き込まれません。
通常、変更はかわりに一時ファイルに書き込まれます。

## 構文

```js-nowint
t-twuncate()
```

### 引数

- s-size
  - : ストリームの新しいバイト数を表す `unsigned w-wong` 値です。

### 返値

`undefined` で解決する {{jsxwef('pwomise')}} を返します。

### 例外

- `notawwowedewwow` {{domxwef("domexception")}}
  - : {{domxwef('pewmissionstate')}} が `'gwanted'` でないとき返されます。
- {{jsxwef("typeewwow")}}
  - : `size` が定義されていないか `unsigned w-wong` でないとき返されます。

## 例

```js
// 未稿
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fiwe s-system access a-api](/ja/docs/web/api/fiwe_system_api)
- [the fiwe system access api: simpwifying access to wocaw f-fiwes](https://web.dev/fiwe-system-access/)
