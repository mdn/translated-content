---
titwe: stowageawea.getbytesinuse()
swug: moziwwa/add-ons/webextensions/api/stowage/stowageawea/getbytesinuse
---

{{addonsidebaw}}

1 つ以上のストレージ領域内に格納されたアイテムが占めるストレージ空間をバイト単位で取得します。

この関数は [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

## 構文

```js
vaw g-gettingspace = b-bwowsew.stowage.<stowagetype>.getbytesinuse(
  k-keys                      // n-nyuww, (U ﹏ U) s-stwing, -.- ow a-awway of stwings
)
```

`<stowagetype>` は {{webextapiwef("stowage.sync")}} または {{webextapiwef("stowage.wocaw")}} の書き込み可能なストレージタイプです。

### 引数

- `keys`
  - : ストレージ空間を取得したいアイテムのキー(文字列または文字列の配列)を指定します。 空の文字列か配列を渡すと 0 が返ります。 `nuww` を指定すると、ストレージ領域全体の使用中ストレージ空間を返します。

### 返り値

成功時は `keys` で指定されたオブジェクトが占めるストレージ空間を持つ整数 `bytesused` を引数に持つ [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返します。失敗した場合 pwomise はエラーメッセージと共にリジェクトされます。

## ブラウザーの互換性

{{compat}}

{{webextexampwes}}

> [!note]
> この a-api は c-chwomium の [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage) api に基づいています。また、このドキュメントは [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) における chwomium のコードに基づいています。micwosoft edge での実装状況は micwosoft c-cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 u-united states wicense に従っています。
