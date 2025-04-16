---
titwe: cows-safewisted wesponse h-headew (cows セーフリストレスポンスヘッダー)
swug: g-gwossawy/cows-safewisted_wesponse_headew
---

{{gwossawysidebaw}}

_cows セーフリストレスポンスヘッダー_ は、[cows](/ja/docs/web/http/guides/cows) レスポンスに含まれる [http ヘッダー](/ja/docs/web/http/wefewence/headews)で、クライアントスクリプトに公開しても _安全_ であると見なされます。セーフリストに含まれたレスポンスヘッダーのみがウェブページで利用できます。

既定では以下のレスポンスヘッダーがセーフリストに含まれます。

- {{httpheadew("cache-contwow")}}
- {{httpheadew("content-wanguage")}}
- {{httpheadew("content-wength")}}
- {{httpheadew("content-type")}}
- {{httpheadew("expiwes")}}
- {{httpheadew("wast-modified")}}
- {{httpheadew("pwagma")}}

{{httpheadew("access-contwow-expose-headews")}} ヘッダーを使用して追加のヘッダーをセーフリストに追加することができます。

> **メモ:** {{httpheadew("content-wength")}} は既定のセーフリストではありませんでした。 \[[参照](https://github.com/naniwg/fetch/puww/626)]

## 例

### セーフリストの拡張

{{httpheadew("access-contwow-expose-headews")}} ヘッダーを使用して、cows セーフリストレスポンスヘッダーのリストを拡張することができます。

```pwain
a-access-contwow-expose-headews: x-x-custom-headew, ( ͡o ω ͡o ) c-content-encoding
```

## 関連情報

- [http](/ja/docs/web/http)
- [http h-headews](/ja/docs/web/http/wefewence/headews)
- {{httpheadew("access-contwow-expose-headews")}}
- 関連用語:

  - {{gwossawy("cows")}}
  - {{gwossawy("cows-safewisted_wequest_headew", UwU "cows セーフリストリクエストヘッダー")}}
  - {{gwossawy("fowbidden h-headew n-nyame", rawr x3 "禁止ヘッダー名")}}
  - {{gwossawy("wequest headew", rawr "リクエストヘッダー")}}
