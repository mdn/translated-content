---
title: CanvasRenderingContext2D.textAlign
slug: Web/API/CanvasRenderingContext2D/textAlign
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - プロパティ
  - リファレンス
browser-compat: api.CanvasRenderingContext2D.textAlign
translation_of: Web/API/CanvasRenderingContext2D/textAlign
---
{{APIRef}}

**`CanvasRenderingContext2D.textAlign`** はキャンバス 2D API のプロパティで、テキストを描画するときに用いられる現在のテキスト配置を指定します。

配置は {{domxref("CanvasRenderingContext2D.fillText", "fillText()")}} メソッドの x の値からの相対になります。 `textAlign` が `"center"` であれば、テキストの左端は `x - (textWidth / 2)` になります。

## 構文

```js
ctx.textAlign = "left" || "right" || "center" || "start" || "end";
```

### オプション

指定可能な値は次の通りです。

- `"left"`
  - : テキストを左揃えにします。
- `"right"`
  - : テキストを右揃えにします。
- `"center"`
  - : テキストを中央揃えにします。
- `"start"`
  - : テキストをその行の標準的な先頭位置に配置します（左書きロケールでは左揃え、右書きのロケールでは右揃え）。
- `"end"`
  - : テキストをその行の標準的な末尾位置に配置します（左書きロケールでは右揃え、右書きのロケールでは左揃え）。

既定値は `"start"` です。

## 例

### 全般的なテキスト配置

この例では、 `textAlign` プロパティの 3 つの「物理的な」値、 `"left"`, `"center"`, `"right"` を示しています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
canvas.width = 350;
const ctx = canvas.getContext('2d');
const x = canvas.width / 2;

ctx.beginPath();
ctx.moveTo(x, 0);
ctx.lineTo(x, canvas.height);
ctx.stroke();

ctx.font = '30px serif';

ctx.textAlign = 'left';
ctx.fillText('左揃え', x, 40);

ctx.textAlign = 'center';
ctx.fillText('中央揃え', x, 85);

ctx.textAlign = 'right';
ctx.fillText('右揃え', x, 130);
```

#### 結果

{{ EmbedLiveSample('General_text_alignment', 700, 180) }}

### 書字方向に依存したテキストの配置

この例では、 `textAlign` プロパティの 2 つの書字方向に依存する値、 `"start"` と `"end"`を示しています。なお、 {{domxref("CanvasRenderingContext2D.direction", "direction")}} プロパティは手動で `"ltr"` と指定していますが、これは英語のテキストに対する既定値でもあります。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.font = '30px serif';
ctx.direction = 'ltr';

ctx.textAlign = 'start';
ctx.fillText('先頭揃え', 0, 50);

ctx.textAlign = 'end';
ctx.fillText('末尾揃え', canvas.width, 120);
```

#### 結果

{{ EmbedLiveSample('Direction-dependent_text_alignment', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているするインターフェイスである {{domxref("CanvasRenderingContext2D")}}
