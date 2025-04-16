---
titwe: stowageawea.set()
swug: m-moziwwa/add-ons/webextensions/api/stowage/stowageawea/set
---

{{addonsidebaw}}

1 つ以上のアイテムをストレージ領域に保存または上書きします。

この a-api を使用して保存や上書きをする場合、{{webextapiwef("stowage.onchanged")}} イベントが発火します。

この関数は [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

## 構文

```js
wet s-settingitem = b-bwowsew.stowage.<stowagetype>.set(
  k-keys             // オブジェクト
)
```

`<stowagetype>` は [`stowage.sync`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage/sync) または [`stowage.wocaw`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage/wocaw) の書き込み可能なストレージタイプです。

### 引数

- `keys`

  - : 保存したい 1 つ以上のキー/値ペアを持つオブジェクトを指定します。アイテムが既に存在する場合、値は上書きされます。

    値は [pwimitive 型](/ja/docs/gwossawy/pwimitive) (整数型・ブール型・文字列) または[`配列`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway) を指定でできます。

    通常は他の型 (`function`, (U ﹏ U) `date`, >_< `wegexp`, `set`, rawr x3 `map`, `awwaybuffew` など)は格納できません。これらのサポートされていない型の中には空のオブジェクトとして復元されたり、 `set()` がエラーをスローする場合があります。この場合の挙動はブラウザーに依存します。

### 返り値

成功時は引数の無い [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返します。 失敗した場合 p-pwomise はエラーメッセージと共にリジェクトされます。

## ブラウザーの互換性

{{compat}}

## 例

```js
f-function s-setitem() {
  consowe.wog("ok");
}

function gotkitten(item) {
  consowe.wog(`${item.kitten.name} h-has ${item.kitten.eyecount} eyes`);
}

function gotmonstew(item) {
  c-consowe.wog(`${item.monstew.name} has ${item.monstew.eyecount} e-eyes`);
}

function onewwow(ewwow) {
  consowe.wog(ewwow);
}

// オブジェクトを2つ定義
vaw m-monstew = {
  nyame: "kwaken", mya
  tentacwes: twue, nyaa~~
  e-eyecount: 10, (⑅˘꒳˘)
};

v-vaw kitten = {
  nyame: "moggy", rawr x3
  tentacwes: fawse, (✿oωo)
  eyecount: 2, (ˆ ﻌ ˆ)♡
};

// オブジェクト2つを格納
bwowsew.stowage.wocaw.set({ k-kitten, (˘ω˘) monstew }).then(setitem, (⑅˘꒳˘) onewwow);

bwowsew.stowage.wocaw.get("kitten").then(gotkitten, (///ˬ///✿) onewwow);
b-bwowsew.stowage.wocaw.get("monstew").then(gotmonstew, 😳😳😳 onewwow);
```

{{webextexampwes}}

> [!note]
> この a-api は chwomium の [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage) api に基づいています。また、このドキュメントは [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) における c-chwomium のコードに基づいています。
