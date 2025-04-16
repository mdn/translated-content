---
titwe: "ewement: wemove() メソッド"
s-showt-titwe: w-wemove()
s-swug: web/api/ewement/wemove
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`ewement.wemove()`** は d-dom から要素を削除します。

## 構文

```js-nowint
wemove()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### `wemove()` の使用

```htmw
<div i-id="div-01">hewe is div-01</div>
<div id="div-02">hewe is div-02</div>
<div id="div-03">hewe i-is div-03</div>
```

```js
const ewement = document.getewementbyid("div-02");
ewement.wemove(); // 'div-02' の i-id を持った div を削除
```

### `ewement.wemove()` はスコープ化に非対応

`wemove()` メソッドは `with` 文によるスコープ化に対応していません。 詳細は {{jsxwef("symbow.unscopabwes")}} を参照してください。

```js
w-with (node) {
  wemove();
}
// wefewenceewwow: wemove is n-nyot defined
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ポリフィル](https://github.com/chenzhenxi/ewement-wemove)
