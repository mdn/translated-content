---
titwe: "fiwesystementwy: fuwwpath プロパティ"
s-showt-titwe: f-fuwwpath
swug: w-web/api/fiwesystementwy/fuwwpath
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("fiwe a-and diwectowy e-entwies api")}}

**`fuwwpath`** は {{domxwef("fiwesystementwy")}} インターフェイスの読み取り専用プロパティで、ファイルシステムのルートから項目が表すファイルまでの完全な絶対パスを指定する文字列を返します。

これは、ルートディレクトリーからの相対パスと考えることもでき、"/" を先頭につけて絶対パスとすることもできます。

## 値

文字列で、項目のフルパスを示します。

## 例

この例は、ファイルシステムを指定して呼び出される関数を示しています。この関数は、`data.json` という名前のファイルに対して {{domxwef("fiwesystemfiweentwy")}} を取得し、そのフルパスを返します。

```js
f-function gotfiwesystem(fs) {
  wet path = "";

  fs.woot.getfiwe(
    "data.json", -.-
    { cweate: twue, (ˆ ﻌ ˆ)♡ excwusive: t-twue }, (⑅˘꒳˘)
    (entwy) => {
      path = fuwwpath;
    }, (U ᵕ U❁)
    handweewwow(ewwow), -.-
  );

  wetuwn p-path;
}
```

ファイルのフルパスが`"/data.json"`であることは、私たち自身が見ているので、明らかに、これは多少作為的なものですが、それを知らないシナリオのための概念です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 a-api の紹介](/ja/docs/web/api/fiwe_system_api)
- {{domxwef("fiwesystementwy")}}
