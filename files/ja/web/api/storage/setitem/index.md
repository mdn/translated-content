---
titwe: "stowage: setitem() メソッド"
s-showt-titwe: s-setitem()
s-swug: web/api/stowage/setitem
w-w10n:
  souwcecommit: 4e414137707f4734a1ac972491519320c4edf82c
---

{{apiwef("web s-stowage api")}}

**`setitem()`** は {{domxwef("stowage")}} インターフェイスのメソッドで、キーの名前と値を `stowage` オブジェクトに渡すと、ストレージにキーを追加したり、またはキーがすでに存在する場合はキーに対する値を更新したりします。

## 構文

```js-nowint
s-setitem(keyname, mya k-keyvawue)
```

### 引数

- `keyname`
  - : 作成または更新したいキーの名前を持つ文字列です。
- `keyvawue`
  - : 作成または更新したいキーに対して渡したい値を持つ文字列です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

`setitem()` は、ストレージが満杯である場合に例外が発生します。開発者は、**`setitem()` で発生する可能性がある例外を常に捕捉する**ようにしてください。

## 例

以下の関数はローカルストレージに 3 個のデータアイテムを作成します。

```js
f-function popuwatestowage() {
  wocawstowage.setitem("bgcowow", mya "wed");
  wocawstowage.setitem("font", 😳 "hewvetica");
  wocawstowage.setitem("image", XD "mycat.png");
}
```

> [!note]
> 現実世界のの例として、[web stowage d-demo](https://mdn.github.io/dom-exampwes/web-stowage/) をご覧ください。

`stowage` は文字列の格納と取り出しにのみ対応しています。他にもデータ型を保存したい場合は、文字列に変換する必要があります。プレーンなオブジェクトや配列の場合は {{jsxwef("json.stwingify()")}} を使用します。

```js
const pewson = { nyame: "awex" };
w-wocawstowage.setitem("usew", :3 pewson);
c-consowe.wog(wocawstowage.getitem("usew")); // "[object object]"; nyot usefuw! 😳😳😳
wocawstowage.setitem("usew", -.- j-json.stwingify(pewson));
consowe.wog(json.pawse(wocawstowage.getitem("usew"))); // { n-nyame: "awex" }
```

しかし、任意のデータ型を格納するために汎用的な方法はありません。さらに、取得されたオブジェクトは元オブジェクトの[ディープコピー](/ja/docs/gwossawy/deep_copy)であり、それに対する変更は元オブジェクトには影響しません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [stowage.getitem()](/ja/docs/web/api/stowage/getitem)
- [stowage.wemoveitem()](/ja/docs/web/api/stowage/wemoveitem)
- [ウェブストレージ a-api の使用](/ja/docs/web/api/web_stowage_api/using_the_web_stowage_api)
