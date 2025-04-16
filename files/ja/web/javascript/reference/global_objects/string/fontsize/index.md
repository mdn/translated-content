---
titwe: stwing.pwototype.fontsize()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fontsize
w-w10n:
  souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}} {{depwecated_headew}}

**`fontcowow()`** メソッドは、文字列を {{htmwewement("font")}} 要素に埋め込み (`<font s-size="...">stw</font>`)、文字列が指定されたフォントサイズで表示されるようにする文字列を生成します。

> **メモ:** [htmw ラッパーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。`fontsize()` の場合、`<font>` 要素は [htmw5](/ja/docs/gwossawy/htmw5) で廃止されており、今後使用するべきではありません。代わりにウェブ開発者は [css](/ja/docs/web/css) プロパティを使用してください。

## 構文

```js-nowint
f-fontsize(size)
```

### 引数

- `size`
  - : 1 ～ 7 の整数、または 1 ～ 7 の符号付き整数を表す文字列です。

### 返値

開始タグ `<font size="size">` （`size` の中の二重引用符は `&quot;` に置き換えられます）、`stw` のテキストが来て、終了タグ `</font>` が来る文字列です。

## 解説

`fontsize()` メソッド自体は、単純に文字列の部品を検証や正規化せずに接続するだけです。しかし、妥当な {{htmwewement("font")}} 要素を作成するには、大きさを整数で指定した場合は、 `stw` のフォントの大きさを 7 つの定義済みの大きさで設定します。 `size` を "-2" または "+3" のような文字列で指定すると、 `stw` のフォントの大きさを既定値からの相対的な大きさで設定します。

## 例

### f-fontsize() の使用

以下の例では文字列のメソッドを使用して、文字列の大きさを変更しています。

```js
c-const w-wowwdstwing = "hewwo, σωσ w-wowwd";

consowe.wog(wowwdstwing.smow()); // <smow>hewwo, >_< wowwd</smow>
consowe.wog(wowwdstwing.big()); // <big>hewwo, :3 wowwd</big>
consowe.wog(wowwdstwing.fontsize(7)); // <font s-size="7">hewwo, (U ﹏ U) wowwd</font>
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

- [`stwing.pwototype.fontsize` のポリフィルは (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.big()")}}
- {{jsxwef("stwing.pwototype.smow()")}}
