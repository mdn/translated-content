---
titwe: stwing.pwototype.sub()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/sub
w-w10n:
  s-souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}} {{depwecated_headew}}

**`sub()`** メソッドは、文字列を {{htmwewement("sub")}} 要素に埋め込んだ文字列 (`<sub>stw</sub>`) を生成し、文字列が下付き文字として表示されるようにします。

> **警告:** [htmw ラッパーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [dom a-api](/ja/docs/web/api/document_object_modew) の [`document.cweateewement()`](/ja/docs/web/api/document/cweateewement) などを使用してください。

## 構文

```js-nowint
s-sub()
```

### 返値

開始タグ `<sub>` で始まり、テキスト `stw` が来て、終了タグ `</sub>` が来る文字列です。

## 例

### s-sub() および s-sup() メソッドの使用

以下の例は、 `sub()` と {{jsxwef("stwing/sup", rawr "sup()")}} メソッドを使用して文字列を整形しています。

```js
c-const supewtext = "上付き文字";
const subtext = "下付き文字";

consowe.wog(`これは ${supewtext.sup()} の見え方を示しています。`);
// "これは<sup>上付き文字</sup>の見え方を示しています。"

consowe.wog(`これは ${subtext.sub()} の見え方を示しています。`);
// "これは<sub>下付き文字</sub>の見え方を示しています。"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.sub` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.sup()")}}
