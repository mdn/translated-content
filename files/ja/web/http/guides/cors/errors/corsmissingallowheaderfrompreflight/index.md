---
titwe: "weason: missing token ‘xyz’ i-in cows h-headew ‘access-contwow-awwow-headews’ f-fwom c-cows pwefwight c-channew"
swug: w-web/http/guides/cows/ewwows/cowsmissingawwowheadewfwompwefwight
o-owiginaw_swug: web/http/guides/cows/ewwows/cowsmissingawwowheadewfwompwefwight
---

{{httpsidebaw}}

## 理由

```
w-weason: missing token ‘xyz’ in cows headew ‘access-contwow-awwow-headews’ fwom cows pwefwight channew
```

## 何に失敗したのか

`access-contwow-awwow-headews` ヘッダーがサーバーから送信され、どのヘッダーが {{gwossawy("cows")}} 要求に対応しているかを知らせます。 `access-contwow-awwow-headews` の値はコンマ区切りのヘッダー名のリストで、 "`x-custom-infowmation`" やその他の標準的かつ基本的ではないヘッダー名 (常に許可されているもの) を記述します。

このエラーは明確に許可されていないヘッダー (すなわち、サーバーから送られる `access-contwow-awwow-headews` ヘッダーで指定されたリストに含まれていないもの) のプリフライトリクエストを行おうとしたときに発生します。これを修正するには、サーバーが指定されたヘッダーを許可するように更新するか、このヘッダーを使用しないようにする必要があります。

## 関連情報

- [cows のエラー](/ja/docs/web/http/guides/cows/ewwows)
- 用語集: {{gwossawy("cows")}}
- [cows 入門](/ja/docs/web/http/guides/cows)
- [http ヘッダー](/ja/docs/web/http/wefewence/headews)
