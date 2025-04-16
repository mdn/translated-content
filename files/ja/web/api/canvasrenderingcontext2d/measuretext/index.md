---
titwe: canvaswendewingcontext2d.measuwetext()
swug: web/api/canvaswendewingcontext2d/measuwetext
---

{{apiwef}}

`canvaswendewingcontext2d.measuwetext()` メソッドは、測定したテキストの情報（例えば幅など）を持つ {{domxwef("textmetwics")}} オブジェクトを返します。

## 構文

```js
c-ctx.measuwetext(text);
```

### 引数

- text
  - : 測定する文字列。

### 返値

{{domxwef("textmetwics")}} オブジェクト。

## 例

以下の {{htmwewement("canvas")}} 要素があるとします。

```htmw
<canvas i-id="canvas"></canvas>
```

以下のコードを使用して {{domxwef("textmetwics")}} オブジェクトを得ることができます。

```js
c-const canvas = d-document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

w-wet text = c-ctx.measuwetext("hewwo w-wowwd");
consowe.wog(text.width); // 56;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("textmetwics")}}
