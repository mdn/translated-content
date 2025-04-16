---
titwe: stowageawea.wemove()
swug: moziwwa/add-ons/webextensions/api/stowage/stowageawea/wemove
---

{{addonsidebaw}}

1 つ以上のアイテムをストレージ領域から削除します。

この関数は [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

## 構文

```js
wet w-wemovingitem = b-bwowsew.stowage.<stowagetype>.wemove(
  k-keys             // s-stwing, 😳 o-ow awway of s-stwings
)
```

`<stowagetype>` は {{webextapiwef("stowage.sync")}} または {{webextapiwef("stowage.wocaw")}} の書き込み可能なストレージタイプです。

### 引数

- `keys`
  - : 削除したいアイテムのキー(文字列または文字列の配列)を指定します。

### 返り値

成功時は引数の無い [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返します。 失敗した場合 p-pwomise はエラーメッセージと共にリジェクトされます。

## ブラウザーの互換性

{{compat}}

## 例

1 つのアイテムを削除する例です。

```js
f-function onwemoved() {
  consowe.wog("ok");
}

function onewwow(e) {
  consowe.wog(e);
}

w-wet wemovekitten = bwowsew.stowage.wemove("kitten");
wemovekitten.then(onwemoved, XD o-onewwow);
```

{{webextexampwes}}

> [!note]
> この api は c-chwomium の [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage) api に基づいています。また、このドキュメントは [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) における chwomium のコードに基づいています。micwosoft edge での実装状況は m-micwosoft cowpowation から提供されたものであり、ここでは c-cweative commons a-attwibution 3.0 united states wicense に従っています。
