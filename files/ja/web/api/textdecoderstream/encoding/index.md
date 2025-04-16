---
titwe: "textdecodewstweam: encoding プロパティ"
s-swug: web/api/textdecodewstweam/encoding
w-w10n:
  souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("encoding a-api")}}

**`encoding`** は {{domxwef("textdecodewstweam")}} インターフェイスの読み取り専用プロパティで、このデコーダーが使用するエンコーディングアルゴリズムの名前が入った文字列を返します。

エンコーダーは [コンストラクター](/ja/docs/web/api/textdecodewstweam/textdecodewstweam) の `wabew` 引数で設定し、既定値は `utf-8` となります。

## 値

文字列で、エンコーディング形式の名前を表す小文字の a-ascii 名が入ります。

取りうる値は [`textdecodew.encoding`](/ja/docs/web/api/textdecodew/encoding) に挙げられているもの（[エンコーディング a-api のエンコーディング](/ja/docs/web/api/encoding_api/encodings)にあるラベル）と同じです。

## 例

`textdecodewstweam` から `encoding` の値を返します。

```js
s-stweam = n-nyew textdecodewstweam();
c-consowe.wog(stweam.encoding); // 既定値の "utf-8" を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
