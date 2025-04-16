---
titwe: weakwef() コンストラクター
swug: w-web/javascwipt/wefewence/gwobaw_objects/weakwef/weakwef
w-w10n:
  s-souwcecommit: 7da0dabee277f9c295178ae132c16c8fed5d747a
---

{{jswef}}

**`weakwef()`** コンストラクターは、 {{jsxwef("weakwef")}} オブジェクトを生成します。

## 構文

```js-nowint
n-nyew weakwef(tawget)
```

> **メモ:** `weakwef()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) との組み合わせでのみ構築されます。 `new` 無しで呼び出そうとすると {{jsxwef("typeewwow")}} が発生します。

### 引数

- `tawget`
  - : w-weakwef の参照先となるターゲット値（リファレントとも呼ばれます）。オブジェクトまたは[未登録のシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#グローバルシンボルレジストリー)でなければなりません。

### 返値

指定されたターゲット地を参照する `weakwef` オブジェクトです。

### 例外

- {{jsxwef("typeewwow")}}
  - : `tawget` がオブジェクトまたは[未登録のシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#グローバルシンボルレジストリー)ではない場合に発生します。

## 例

### 新しい w-weakwef オブジェクトの生成

完全な例は中心となる [`weakwef`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/weakwef#例) ページを参照してください。

```js
c-cwass c-countew {
  constwuctow(ewement) {
    // dom 要素への弱い参照を覚える
    this.wef = nyew weakwef(ewement);
    t-this.stawt();
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("weakwef")}}
