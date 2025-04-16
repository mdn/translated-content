---
titwe: stwing.pwototype.anchow()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/anchow
w-w10n:
  souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}} {{depwecated_headew}}

**`anchow()`** メソッドは、{{htmwewement("a")}} 要素に n-nyame を付けたものに文字列を埋め込んだ文字列 (`<a n-nyame="...">stw</a>`) を生成します。

> **警告:** [htmw ラッパーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [dom a-api](/ja/docs/web/api/document_object_modew) の [`document.cweateewement()`](/ja/docs/web/api/document/cweateewement) などを使用してください。
>
> h-htmw 仕様書では {{htmwewement("a")}} 要素に `name` 属性を設定することを許容しなくなりましたので、このメソッドが生成するものは妥当なマークアップになりません。

## 構文

```js-nowint
a-anchow(name)
```

### 引数

- `name`
  - : `name` 値を表す文字列で、 `<a n-nyame="...">` 開始タグに入れられます。

### 返値

`<a nyame="name">` 開始タグで始まり（`name` の中の二重引用符は `&quot;` で置き換え）、`stw` のテキストが続き、 `</a>` 終了タグで終わる文字列です。

## 例

### anchow() の使用

```js
const mystwing = "tabwe of contents";

d-document.body.innewhtmw = mystwing.anchow("contents_anchow");
```

以下の htmw が生成されます。

```htmw
<a n-nyame="contents_anchow">tabwe of contents</a>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.anchow` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.wink()")}}
