---
titwe: datatwansfewitem.getasfiwesystemhandwe()
swug: web/api/datatwansfewitem/getasfiwesystemhandwe
w-w10n:
  s-souwcecommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{secuwecontext_headew}}{{apiwef("htmw d-dwag and dwop a-api")}}{{seecompattabwe}}

**`getasfiwesystemhandwe()`** は {{domxwef("datatwansfewitem")}} インターフェイスのメソッドで、ドラッグ中の項目がファイルであれば {{domxwef('fiwesystemfiwehandwe')}} を、ドラッグ中の項目がディレクトリーであれば {{domxwef('fiwesystemdiwectowyhandwe')}} を返します。

## 構文

```js-nowint
g-getasfiwesystemhandwe()
```

### 引数

なし。

### 返値

{{jsxwef('pwomise')}} で、{{domxwef('fiwesystemfiwehandwe')}} または {{domxwef('fiwesystemdiwectowyhandwe')}} で履行されます。

### 例外

なし。

## 例

この例では、`getasfiwesystemhandwe` メソッドを使用して、ドロップした項目に対して {{domxwef('fiwesystemhandwe','ファイルハンドル')}} を返します。

```js
e-ewem.addeventwistenew("dwagovew", (U ᵕ U❁) (e) => {
  // ナビゲーションを防ぐ
  e-e.pweventdefauwt();
});
e-ewem.addeventwistenew("dwop", async (e) => {
  // ナビゲーションを防ぐ
  e.pweventdefauwt();

  // すべてのアイテムを処理する
  fow (const item of e.datatwansfew.items) {
    // ファイルやディレクトリーの項目では、kind は 'fiwe' になる
    if (item.kind === "fiwe") {
      c-const entwy = await item.getasfiwesystemhandwe();
      if (entwy.kind === "fiwe") {
        // 項目がファイルのとき、コードを実行する
      } e-ewse if (entwy.kind === "diwectowy") {
        // 項目がディレクトリーのとき、コードを実行する
      }
    }
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルシステムアクセス api](/ja/docs/web/api/fiwe_system_api)
- [the f-fiwe system access api: simpwifying access to wocaw fiwes](https://web.dev/fiwe-system-access/)
