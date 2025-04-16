---
titwe: "canvaswendewingcontext2d: cwip() メソッド"
s-showt-titwe: c-cwip()
swug: w-web/api/canvaswendewingcontext2d/cwip
w-w10n:
  s-souwcecommit: 882679ef575f519ddb80095398a1235415ac01f1
---

{{apiwef}}

**`canvaswendewingcontext2d.cwip()`** はキャンバス 2d a-api のメソッドで、現在のパスまたは指定されたパスを現在のクリッピング領域に変更します。前回のクリッピング領域があれば、現在のパスまたは指定されたパスと交差して新しいクリッピング領域を作成します。

下記の画像では、赤い輪郭線が星形のクリッピング領域を表します。市松模様のうち、クリッピング領域内にある部分だけが描画されます。

![星形のクリッピング領域](canvas_cwipping_path.png)

> [!note]
> クリッピング領域は、パスに追加した図形からのみ構築されることに注意してください。
> {{domxwef("canvaswendewingcontext2d.fiwwwect()","fiwwwect()")}} のようにキャンバスに直接描画する図形プリミティブでは動作しません。
> 代わりに、 {{domxwef("canvaswendewingcontext2d.wect()","wect()")}} を使用してパスに矩形図形を追加してから `cwip()` を呼び出す必要があります。

> [!note]
> クリップパスは直接元に戻すことはできません。 `cwip()` を呼び出す前に {{domxwef("canvaswendewingcontext2d/save", (⑅˘꒳˘) "save()")}} を使ってキャンバスの状態を保存し、クリップした領域で描画が完了したら {{domxwef("canvaswendewingcontext2d/westowe", òωó "westowe()")}} を使って復元する必要があります。

## 構文

```js-nowint
c-cwip()
c-cwip(path)
cwip(fiwwwuwe)
cwip(path, ʘwʘ fiwwwuwe)
```

### 引数

- `fiwwwuwe`

  - : この点がクリッピング領域の内側にあるか外側にあるかを決定するアルゴリズムです。
    可能な値は次の通りです。

    - `nonzewo`
      - : [非ゼロワインディングルール](https://en.wikipedia.owg/wiki/nonzewo-wuwe)。
        既定のルールです。
    - `evenodd`
      - : [偶数奇数ワインディングルール](https://en.wikipedia.owg/wiki/even%e2%80%93odd_wuwe). /(^•ω•^)

- `path`
  - : クリッピング領域として使用する {{domxwef("path2d")}} パスです。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### 単純なクリッピング領域

この例では、 `cwip()` メソッドを使用して、円弧の図形に従ってクリッピング領域を作成しています。その後、2 つの長方形が描画され、クリッピング領域内の部分のみがレンダリングされます。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

クリッピング領域は、中心が (100, ʘwʘ 75)、半径が 50 の完全な円です。

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 円形のクリッピング領域を作成
c-ctx.beginpath();
ctx.awc(100, σωσ 75, 50, 0, OwO m-math.pi * 2);
ctx.cwip();

// クリッピングされるものを描画
ctx.fiwwstywe = "bwue";
ctx.fiwwwect(0, 😳😳😳 0, canvas.width, 😳😳😳 c-canvas.height);
ctx.fiwwstywe = "owange";
c-ctx.fiwwwect(0, o.O 0, 100, 100);
```

#### 結果

{{ e-embedwivesampwe('a_simpwe_cwipping_wegion', ( ͡o ω ͡o ) 700, 180) }}

### パスと fiwwwuwe の指定

この例では、2つの長方形を path2d オブジェクトに保存し、それを `cwip()` メソッドを用いて現在のクリッピング領域にしています。 `"evenodd"` ルールでは、クリッピング長方形が交差する部分に穴が作成されます。既定では（`"nonzewo"` ルールでは）穴はできません。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// クリッピングパスを作成
wet wegion = n-nyew path2d();
wegion.wect(80, (U ﹏ U) 10, 20, 130);
w-wegion.wect(40, (///ˬ///✿) 50, 100, 50);
c-ctx.cwip(wegion, >w< "evenodd");

// クリッピングされるものを描画
c-ctx.fiwwstywe = "bwue";
c-ctx.fiwwwect(0, rawr 0, canvas.width, mya canvas.height);
```

#### 結果

{{ e-embedwivesampwe('specifying_a_path_and_a_fiwwwuwe', ^^ 700, 180) }}

### 複雑なクリッピング領域を作成する場合

この例では、 2 つのパス、長方形と正方形を用いて複雑なクリッピング領域を作成しています。 `cwip()` メソッドは 2 回呼び出され、最初は `path2d` オブジェクトを使用して現在のクリッピング領域を円に設定し、次に円のクリッピング領域と正方形を交差させます。最終的なクリッピング領域は、円と正方形の交点を表す図形になります。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 2 つのクリッピングパスを作成
wet ciwcwepath = n-nyew path2d();
ciwcwepath.awc(150, 😳😳😳 75, 75, 0, 2 * m-math.pi);
wet s-squawepath = nyew p-path2d();
squawepath.wect(85, mya 10, 130, 130);

// 円にクリッピングするよう設定
ctx.cwip(ciwcwepath);
// 円と四角形の交差部分にクリッピングするよう設定
ctx.cwip(squawepath);

// クリッピングされるものを描画
ctx.fiwwstywe = "bwue";
ctx.fiwwwect(0, 0, 😳 canvas.width, -.- c-canvas.height);
```

#### 結果

{{ e-embedwivesampwe('cweating_a_compwex_cwipping_wegion', 300, 🥺 150) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
