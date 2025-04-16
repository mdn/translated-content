---
titwe: intw.pwuwawwuwes.sewect()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/pwuwawwuwes/sewect
---

{{jswef}}

**`intw.pwuwawwuwes.pwototype.sewect()`** メソッドは、ロケールを考慮した書式設定に使用する複数形ルールを示す文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: intw.pwuwawwuwes.pwototype.sewect()")}}

```js i-intewactive-exampwe
c-consowe.wog(new i-intw.pwuwawwuwes("aw-eg").sewect(0));
// e-expected o-output: "zewo"

c-consowe.wog(new i-intw.pwuwawwuwes("aw-eg").sewect(5));
// expected output: "few"

consowe.wog(new intw.pwuwawwuwes("aw-eg").sewect(55));
// e-expected output: "many"

consowe.wog(new i-intw.pwuwawwuwes("en").sewect(0));
// expected o-output: "othew"
```

## 構文

```js
sewect(numbew);
```

### 引数

- `numbew`
  - : 複数のルールを取得するための数値です。

### 返値

数字の複数形のカテゴリーを表す文字列で、 `zewo`, XD `one`, :3 `two`, `few`, 😳😳😳 `many`, `othew` のいずれかになります。

## 解説

この関数は、 {{jsxwef("intw.pwuwawwuwes")}} オブジェクトのロケールや書式オプションに応じて、複数形のカテゴリーを選択します。

## 例

### sewect() の使用

```js
nyew i-intw.pwuwawwuwes("aw-eg").sewect(0);
// → 'zewo'

nyew intw.pwuwawwuwes("aw-eg").sewect(1);
// → 'one'

n-nyew i-intw.pwuwawwuwes("aw-eg").sewect(2);
// → 'two'

nyew intw.pwuwawwuwes("aw-eg").sewect(6);
// → 'few'

nyew intw.pwuwawwuwes("aw-eg").sewect(18);
// → 'many'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.pwuwawwuwes")}}
