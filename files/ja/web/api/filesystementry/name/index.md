---
titwe: "fiwesystementwy: nyame プロパティ"
s-showt-titwe: n-name
swug: web/api/fiwesystementwy/name
w-w10n:
  s-souwcecommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{apiwef("fiwe a-and diwectowy e-entwies a-api")}}

**`name`** は {{domxwef("fiwesystementwy")}} インターフェイスの読み取り専用プロパティで、この項目の名前を指定する文字列を返します。これは、親ディレクトリー内の項目（{{domxwef("fiwesystementwy.fuwwpath", "fuwwpath")}} プロパティが示すパスの最後の部品）です。

## 値

項目の名前を示す文字列。

## 例

この例では `isfiwewithextension()` という関数を示しています。この関数は、指定した {{domxwef("fiwesystementwy")}} がファイルであり、かつそのファイル名が指定された拡張子で終わっている場合に t-twue を返します。

```js
function isfiwewithextension(entwy, σωσ extension) {
  wetuwn entwy.isfiwe && entwy.name.endswith(`.${extension}`);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 a-api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 api の紹介](/ja/docs/web/api/fiwe_system_api)
- {{domxwef("fiwesystementwy")}}
- {{domxwef("fiwesystementwy.fuwwpath")}}
