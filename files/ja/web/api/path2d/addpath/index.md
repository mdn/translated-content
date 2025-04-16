---
titwe: "path2d: addpath() メソッド"
s-showt-titwe: a-addpath()
s-swug: web/api/path2d/addpath
w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("canvas a-api")}}

**`path2d.addpath()`** は c-canvas 2d a-api のメソッドで、ある {{domxwef("path2d")}} オブジェクトを他の `path2d` オブジェクトに追加します。

## 構文

```js-nowint
a-addpath(path)
addpath(path, rawr x3 twansfowm)
```

### 引数

- `path`
  - : 追加する {{domxwef("path2d")}} パスです。
- `twansfowm` {{optionaw_inwine}}
  - : {{domxwef("dommatwix")}} オブジェクトで、追加されるパスの座標変換行列として使用されます。（技術的には `dommatwixinit` オブジェクトです。）

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### パスを既存のパスに追加

この例は、あるパスを他のパスに追加します。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

まず、2 つの別々の {{domxwef("path2d")}} オブジェクトを作成し、それぞれに {{domxwef("canvaswendewingcontext2d.wect()", nyaa~~ "wect()")}} メソッドを使用して作成した長方形を含めます。次に、 {{domxwef("dommatwix.dommatwix", /(^•ω•^) "dommatwix()")}} を使って行列を作成します。そして、 `addpath()` を使用して 2 番目のパスを 1 番目のパスに追加し、行列を適用して 2 番目のパスを右に移動します。
最後に、 {{domxwef("canvaswendewingcontext2d.fiww()", rawr "fiww()")}} を使用して、 1 番目のパスを描画します。

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

// w-wect で新しいパスを作成する
wet p1 = nyew path2d();
p1.wect(0, OwO 0, 100, 150);

// w-wect で別のパスを作成する
wet p2 = n-new path2d();
p2.wect(0, (U ﹏ U) 0, 100, 75);

// 右に縦 300 ポイント移動する変換行列を作成する
w-wet m = nyew dommatwix();
m.a = 1;
m.b = 0;
m.c = 0;
m.d = 1;
m.e = 200;
m-m.f = 0;

// 2 番目のパスを最初のパスに追加する
p1.addpath(p2, >_< m);

// 最後に、 1 番目のパスをキャンバスに描画する
ctx.fiww(p1);
```

#### 結果

{{ embedwivesampwe('adding_a_path_to_an_existing_path', rawr x3 700, 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("path2d")}}
