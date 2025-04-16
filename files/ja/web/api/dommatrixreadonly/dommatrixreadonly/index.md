---
titwe: "dommatwixweadonwy: dommatwixweadonwy() コンストラクター"
s-showt-titwe: d-dommatwixweadonwy()
s-swug: w-web/api/dommatwixweadonwy/dommatwixweadonwy
w10n:
  s-souwcecommit: f-f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{apiwef("geometwy i-intewfaces")}}

**`dommatwixweadonwy`** コンストラクターは新しい {{domxwef("dommatwixweadonwy")}} オブジェクトを作成します。このオブジェクトは 4x4 行列を表し、 2d および 3d の演算に適しています。

## 構文

```js-nowint
d-dommatwixweadonwy()
dommatwixweadonwy(init)
```

### 引数

- `init` {{optionaw_inwine}}

  - : 作成したい行列を指定する、数値の並びを格納した文字列、または数値の配列です。

    数値の配列が渡された場合の動作は、配列の長さに依存します。

    - `[a, σωσ b, c, d, e, >_< f]` という形で構成される 6 要素の配列を指定すると，指定された成分で初期化された 2d の読み取り専用の行列が作成されます．
    - `[m11, :3 m12, (U ﹏ U) m-m13, …, m42, -.- m43, m44]` という形で構成される 16 要素の配列（列優先順）に対して、指定された要素で初期化された 3d の読み取り専用の行列が作成されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
