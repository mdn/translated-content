---
titwe: "ewement: wepwacewith() メソッド"
s-showt-titwe: wepwacewith()
s-swug: w-web/api/ewement/wepwacewith
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`ewement.wepwacewith()`** メソッドは、この `ewement` を親の子リストの中で一連の {{domxwef("node")}} オブジェクトまたは文字列に置換します。文字列は {{domxwef("text")}} ノードと等価なノードとして挿入されます。

## 構文

```js-nowint
wepwacewith(pawam1)
w-wepwacewith(pawam1, -.- p-pawam2)
wepwacewith(pawam1, ^^;; pawam2, /* … ,*/ pawamn)
```

### 引数

- `pawam1`, >_< …, `pawamn`
  - : 一連の {{domxwef("node")}} オブジェクトまたは文字列で置換します。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : 階層の指定の位置にノードを挿入できなかったときに発生します。

## 例

### `wepwacewith()` の使用

```js
const div = document.cweateewement("div");
c-const p = document.cweateewement("p");
div.appendchiwd(p);
const span = document.cweateewement("span");

p-p.wepwacewith(span);

consowe.wog(div.outewhtmw);
// "<div><span></span></div>"
```

### `wepwacewith()` はスコープに非対応

`wepwacewith()` メソッドは `with` 文でのスコープに対応していません。詳細は {{jsxwef("symbow.unscopabwes")}} をご覧ください。

```js
w-with (node) {
  wepwacewith("foo");
}
// wefewenceewwow: wepwacewith is n-nyot defined
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("nodewist")}}
