---
title: "CanvasRenderingContext2D: clip() メソッド"
short-title: clip()
slug: Web/API/CanvasRenderingContext2D/clip
l10n:
  sourceCommit: 882679ef575f519ddb80095398a1235415ac01f1
---

{{APIRef}}

**`CanvasRenderingContext2D.clip()`** はキャンバス 2D API のメソッドで、現在のパスまたは指定されたパスを現在のクリッピング領域に変更します。前回のクリッピング領域があれば、現在のパスまたは指定されたパスと交差して新しいクリッピング領域を作成します。

下記の画像では、赤い輪郭線が星形のクリッピング領域を表します。市松模様のうち、クリッピング領域内にある部分だけが描画されます。

![星形のクリッピング領域](canvas_clipping_path.png)

> [!NOTE]
> クリッピング領域は、パスに追加した図形からのみ構築されることに注意してください。
> {{domxref("CanvasRenderingContext2D.fillRect()","fillRect()")}} のようにキャンバスに直接描画する図形プリミティブでは動作しません。
> 代わりに、 {{domxref("CanvasRenderingContext2D.rect()","rect()")}} を使用してパスに矩形図形を追加してから `clip()` を呼び出す必要があります。

> [!NOTE]
> クリップパスは直接元に戻すことはできません。 `clip()` を呼び出す前に {{domxref("CanvasRenderingContext2D/save", "save()")}} を使ってキャンバスの状態を保存し、クリップした領域で描画が完了したら {{domxref("CanvasRenderingContext2D/restore", "restore()")}} を使って復元する必要があります。

## 構文

```js-nolint
clip()
clip(path)
clip(fillRule)
clip(path, fillRule)
```

### 引数

- `fillRule`

  - : この点がクリッピング領域の内側にあるか外側にあるかを決定するアルゴリズムです。
    可能な値は次の通りです。

    - `nonzero`
      - : [非ゼロワインディングルール](https://en.wikipedia.org/wiki/Nonzero-rule)。
        既定のルールです。
    - `evenodd`
      - : [偶数奇数ワインディングルール](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

- `path`
  - : クリッピング領域として使用する {{domxref("Path2D")}} パスです。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 単純なクリッピング領域

この例では、 `clip()` メソッドを使用して、円弧の図形に従ってクリッピング領域を作成しています。その後、2 つの長方形が描画され、クリッピング領域内の部分のみがレンダリングされます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

クリッピング領域は、中心が (100, 75)、半径が 50 の完全な円です。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 円形のクリッピング領域を作成
ctx.beginPath();
ctx.arc(100, 75, 50, 0, Math.PI * 2);
ctx.clip();

// クリッピングされるものを描画
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "orange";
ctx.fillRect(0, 0, 100, 100);
```

#### 結果

{{ EmbedLiveSample('A_simple_clipping_region', 700, 180) }}

### パスと fillRule の指定

この例では、2つの長方形を Path2D オブジェクトに保存し、それを `clip()` メソッドを用いて現在のクリッピング領域にしています。 `"evenodd"` ルールでは、クリッピング長方形が交差する部分に穴が作成されます。既定では（`"nonzero"` ルールでは）穴はできません。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// クリッピングパスを作成
let region = new Path2D();
region.rect(80, 10, 20, 130);
region.rect(40, 50, 100, 50);
ctx.clip(region, "evenodd");

// クリッピングされるものを描画
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

#### 結果

{{ EmbedLiveSample('Specifying_a_path_and_a_fillRule', 700, 180) }}

### 複雑なクリッピング領域を作成する場合

この例では、 2 つのパス、長方形と正方形を用いて複雑なクリッピング領域を作成しています。 `clip()` メソッドは 2 回呼び出され、最初は `Path2D` オブジェクトを使用して現在のクリッピング領域を円に設定し、次に円のクリッピング領域と正方形を交差させます。最終的なクリッピング領域は、円と正方形の交点を表す図形になります。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 2 つのクリッピングパスを作成
let circlePath = new Path2D();
circlePath.arc(150, 75, 75, 0, 2 * Math.PI);
let squarePath = new Path2D();
squarePath.rect(85, 10, 130, 130);

// 円にクリッピングするよう設定
ctx.clip(circlePath);
// 円と四角形の交差部分にクリッピングするよう設定
ctx.clip(squarePath);

// クリッピングされるものを描画
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

#### 結果

{{ EmbedLiveSample('Creating_a_complex_clipping_region', 300, 150) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
