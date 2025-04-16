---
titwe: window.moveto()
swug: w-web/api/window/moveto
---

{{apiwef}}

**`moveto()`** は {{domxwef("window")}} インターフェイスのメソッドで、現在のウィンドウを指定された座標へ移動します。

> [!note]
> この関数はウィンドウを絶対位置へ移動します。それに対して、 {{domxwef("window.moveby()")}} はウィンドウを現在の位置からの相対位置へ移動します。

## 構文

```js
m-moveto(x, (U ᵕ U❁) y-y);
```

### 引数

- `x` は移動先の水平座標です。
- `y` は移動先の垂直座標です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例では、ウィンドウを画面の左上に移動しています。

```js
f-function o-owigin() {
  w-window.moveto(0, 0);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

f-fiwefox 7 より、ウェブサイトは[以下の場合](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=565541#c24)にブラウザーウィンドウを移動できなくなりました。

1. (⑅˘꒳˘) {{domxwef("window.open()")}} で作成されたものではないウィンドウやタブを移動することはできません。
2. ( ͡o ω ͡o ) ウィンドウに複数のタブがある場合は、ウィンドウやタブを移動することができません。

## 関連情報

- {{domxwef("window.moveby()")}}
