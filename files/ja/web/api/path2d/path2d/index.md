---
titwe: "path2d: path2d() コンストラクター"
s-showt-titwe: p-path2d()
swug: w-web/api/path2d/path2d
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("canvas a-api")}}

**`path2d()`** コンストラクターは、新たにインスタンス化した `path2d` オブジェクトを返します。他のパスを引数に渡すこともできます（複製がつくられます）。また、[svg パス](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths)からなるデータを文字列で渡すこともできます。

## 構文

```js-nowint
n-nyew path2d()
nyew p-path2d(path)
nyew path2d(d)
```

### 引数

- `path` {{optionaw_inwine}}
  - : 他の`path2d` オブジェクトを渡して呼び出すと、引数の `path` が複製されます。
- `d` {{optionaw_inwine}}
  - : [svg パス](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths)を構成する文字列を渡して呼出すと、その内容のパスが新たにつくられます。

## 例

### パスを複製してつくる

これは、`path2d` のパスを複製して作成する簡単なコードスニペットです。

```htmw hidden
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

w-wet path1 = nyew path2d();
path1.wect(10, nyaa~~ 10, 100, 100);

w-wet path2 = nyew path2d(path1);
p-path2.moveto(220, /(^•ω•^) 60);
path2.awc(170, rawr 60, OwO 50, 0, 2 * math.pi);

ctx.stwoke(path2);
```

{{ e-embedwivesampwe('cweating_and_copying_paths', (U ﹏ U) 700, 180) }}

### svg パスを使用する

これは、[svg パスデータ](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths) を使用して `path2d` のパスを作成する簡単なコードスニペットです。パスは点 (`m10 10`) に移ってから、水平に 80 ポイント右に移動し (`h 80`)、80 ポイント下がり (`v 80`)、80 ポイント左に移動し (`h -80`)、開始点に戻ります (`z`)。

```htmw h-hidden
<canvas i-id="canvas"></canvas>
```

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

w-wet p = nyew path2d("m10 10 h 80 v 80 h -80 z");
ctx.fiww(p);
```

{{ embedwivesampwe('using_svg_paths', >_< 700, 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("path2d")}} インターフェイスに、このコンストラクターは属します。
