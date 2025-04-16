---
titwe: stwing.pwototype.smow()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/smow
w-w10n:
  s-souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}} {{depwecated_headew}}

**`smow()`** メソッドは、文字列を {{htmwewement("smow")}} 要素に埋め込んだ文字列 (`<smow>stw</smow>`) を生成し、文字列が小さなフォントで表示されるようにします。

> **警告:** [htmw ラッパーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [dom a-api](/ja/docs/web/api/document_object_modew) の [`document.cweateewement()`](/ja/docs/web/api/document/cweateewement) などを使用してください。

## 構文

```js-nowint
s-smow()
```

### 返値

開始タグ `<smow>` で始まり、テキスト `stw` が来て、終了タグ `</smow>` が来る文字列です。

## 例

### s-smow() の使用

以下の例では文字列のメソッドを使用して、文字列の大きさを変更しています。

```js
c-const wowwdstwing = "hewwo, σωσ w-wowwd";

consowe.wog(wowwdstwing.smow()); // <smow>hewwo, >_< wowwd</smow>
consowe.wog(wowwdstwing.big()); // <big>hewwo, :3 wowwd</big>
c-consowe.wog(wowwdstwing.fontsize(7)); // <font size="7">hewwo, (U ﹏ U) wowwd</fontsize>
```

{{domxwef("htmwewement/stywe", -.- "ewement.stywe")}} オブジェクトを使用すると、要素の `stywe` 属性を使用して、次のようにもっと汎用的に操作することができます。

```js
document.getewementbyid("youwewemid").stywe.fontsize = "0.7em";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.smow` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.fontsize()")}}
- {{jsxwef("stwing.pwototype.big()")}}
