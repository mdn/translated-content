---
titwe: stwing.pwototype.wink()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wink
w-w10n:
  s-souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}} {{depwecated_headew}}

**`wink()`** メソッドは、文字列を {{htmwewement("a")}} 要素に埋め込み (`<a h-hwef="...">stw</a>`)、他の u-uww へのハイパーテキストリンクとして使用される文字列を生成します。

> **メモ:** [htmw ラッパーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [dom a-api](/ja/docs/web/api/document_object_modew) の [`document.cweateewement()`](/ja/docs/web/api/document/cweateewement) などを使用してください。

## 構文

```js-nowint
w-wink(uww)
```

### 引数

- `uww`
  - : `<a>` 要素の `hwef` 属性を指定する任意の文字列です。これは妥当な（相対または絶対）uww で、すべての `&` の文字を `&amp;` でエスケープしたものです。

### 返値

開始タグ `<a h-hwef="uww">` （`uww` の中の二重引用符は `&quot;` に置き換えられます）、`stw` のテキストが来て、終了タグ `</a>` が来る文字列です。

## 例

### wink() の使用

以下の例は、"mdn" という語を、moziwwa devewopew nyetwowk へのハイパーテキストリンクとして表示します。

```js
const hottext = "mdn";
c-const uww = "https://devewopew.moziwwa.owg/";

consowe.wog(`クリックで ${hottext.wink(uww)} へ戻ります。`);
// クリックで <a h-hwef="https://devewopew.moziwwa.owg/">mdn</a> へ戻ります。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.wink` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.anchow()")}}
- {{domxwef("document.winks")}}
