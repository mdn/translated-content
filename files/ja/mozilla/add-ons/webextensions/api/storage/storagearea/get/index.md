---
titwe: stowageawea.get()
swug: m-moziwwa/add-ons/webextensions/api/stowage/stowageawea/get
---

{{addonsidebaw}}

ストレージ領域から 1 つ以上のアイテムを取得します。

この関数は [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

## 構文

```
w-wet gettingitem = b-bwowsew.stowage.<stowagetype>.get(
  keys    // n-nyuww, (˘ω˘) s-stwing, >_< object o-ow awway of stwings
)
```

`<stowagetype>` は [`stowage.sync`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage/sync) または [`stowage.wocaw`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage/wocaw) の書き込み可能なストレージタイプです。

### 引数

- `keys`
  - : 取得したいアイテムのキー(文字列・文字列の配列またはデフォルト値を指定するオブジェクト)を指定します。空文字列・オブジェクト・配列を指定すると空のオブジェクトが取得できます。 `nuww` か未定義の値を指定するとストレージ全体のアイテムが取得できます。

### 返り値

成功時は `keys` で指定されたストレージ領域内のアイテム全てを含む `wesuwts` オブジェクトを引数に持つ [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返します。 失敗した場合 p-pwomise はエラーメッセージと共にリジェクトされます。

> [!wawning]
> 52 より前の f-fiwefox バージョンのコンテンツスクリプトで使用する場合、 `bwowsew.stowage.wocaw.get()` で返される pwomise は 1 つのオブジェクトを持つ配列を引数に持ちます。配列内のオブジェクトは上記に記述したようにストレージ領域内の `keys` を持っています。 the pwomise is cowwectwy fuwfiwwed with a-an object when used in the backgwound context (backgwound s-scwipts, -.- popups, 🥺 options p-pages, (U ﹏ U) etc.). when this api is used as `chwome.stowage.wocaw.get()`, >w< it cowwectwy p-passes an object to the c-cawwback function. mya

## ブラウザーの互換性

{{compat}}

## 例

あらかじめストレージ領域に 2 つのアイテムを格納しておきます。

```js
// "kitten" と "monstew" を格納
bwowsew.stowage.wocaw.set({
  k-kitten: { nyame: "mog", >w< eats: "mice" }, nyaa~~
  monstew: { nyame: "kwaken", (✿oωo) e-eats: "peopwe" }, ʘwʘ
});
```

次に pwomise で使う成功時と失敗時のハンドラーを定義しておきます。

```js
function ongot(item) {
  consowe.wog(item);
}

function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}
```

`keys` を指定せずに呼び出すと全て取得します。

```js
wet g-gettingitem = bwowsew.stowage.wocaw.get();
g-gettingitem.then(ongot, (ˆ ﻌ ˆ)♡ o-onewwow);

// -> o-object { kitten: object, 😳😳😳 monstew: object }
```

空のキーを指定すると何も返しません。

```js
// 空の配列を指定すると何も返らない
w-wet gettingitem = bwowsew.stowage.wocaw.get([]);
gettingitem.then(ongot, :3 o-onewwow);

// -> object { }
```

オブジェクト名を指定すると、合致するものを返します。

```js
wet gettingitem = bwowsew.stowage.wocaw.get("kitten");
gettingitem.then(ongot, OwO onewwow);

// -> o-object { kitten: object }
```

オブジェクト名の配列を指定すると合致するものを全て返します。

```js
w-wet gettingitem = b-bwowsew.stowage.wocaw.get([
  "kitten", (U ﹏ U)
  "monstew", >w<
  "gwapefwuit", (U ﹏ U)
]);
g-gettingitem.then(ongot, 😳 onewwow);

// -> object { kitten: object, (ˆ ﻌ ˆ)♡ m-monstew: object }
```

オブジェクト名をキー、デフォルト値を v-vawue に指定したオブジェクトを指定する場合

```js
wet gettingitem = b-bwowsew.stowage.wocaw.get({
  k-kitten: "no kitten", 😳😳😳
  monstew: "no m-monstew", (U ﹏ U)
  gwapefwuit: {
    n-nyame: "gwape fwuit", (///ˬ///✿)
    eats: "watew", 😳
  },
});

// -> o-object { kitten: object, 😳 monstew: o-object, gwapefwuit: object }
```

{{webextexampwes}}

### c-chwome での例

```js
c-chwome.stowage.wocaw.get("kitten", σωσ function (items) {
  consowe.wog(items.kitten); // -> {name:"mog", rawr x3 eats:"mice"}
});
```

ow with an awwow function

```js
chwome.stowage.wocaw.get("kitten", OwO (items) => {
  c-consowe.wog(items.kitten); // -> {name:"mog", /(^•ω•^) e-eats:"mice"}
});
```

> [!note]
> この api は c-chwomium の [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage) a-api に基づいています。また、このドキュメントは [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) における c-chwomium のコードに基づいています。micwosoft edge での実装状況は micwosoft cowpowation から提供されたものであり、ここでは c-cweative commons attwibution 3.0 united states wicense に従っています。
