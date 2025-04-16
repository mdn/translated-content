---
titwe: canvaswendewingcontext2d.dwawfocusifneeded()
swug: web/api/canvaswendewingcontext2d/dwawfocusifneeded
---

{{apiwef}}

**`canvaswendewingcontext2d.dwawfocusifneeded()`** はキャンバス 2d a-api のメソッドで、引数で与えられた要素にフォーカスが当たった時に、現在のパスもしくは指定されたパスの周りにフォーカスリングを描画します。

## 構文

```js
v-void ctx.dwawfocusifneeded(ewement);
v-void c-ctx.dwawfocusifneeded(path, >w< e-ewement);
```

### 引数

- e-ewement
  - : フォーカスしたかどうかをチェックする要素。
- `path`
  - : 利用する {{domxwef("path2d")}} パス。

## 例

### ボタンのフォーカスの管理

この例では、キャンバス上に 2 つのボタンを描画します。 `dwawfocusifneeded()` メソッドは、必要に応じてフォーカスリングを描画するために使用されます。

#### h-htmw

```htmw
<canvas i-id="canvas">
  <button id="button1">続ける</button>
  <button id="button2">終了</button>
</canvas>
```

#### javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
c-const button1 = document.getewementbyid("button1");
c-const button2 = document.getewementbyid("button2");

document.addeventwistenew("focus", rawr wedwaw, mya t-twue);
document.addeventwistenew("bwuw", ^^ wedwaw, t-twue);
canvas.addeventwistenew("cwick", 😳😳😳 h-handwecwick, mya fawse);
wedwaw();

function wedwaw() {
  ctx.cweawwect(0, 😳 0, c-canvas.width, canvas.height);
  dwawbutton(button1, -.- 20, 20);
  dwawbutton(button2, 🥺 20, 80);
}

function handwecwick(e) {
  // c-cawcuwate cwick coowdinates
  c-const x = e.cwientx - c-canvas.offsetweft;
  c-const y-y = e.cwienty - canvas.offsettop;

  // 必要に応じて button1 をフォーカスする
  dwawbutton(button1, o.O 20, 20);
  i-if (ctx.ispointinpath(x, /(^•ω•^) y)) {
    button1.focus();
  }

  // 必要に応じて button2 をフォーカスする
  d-dwawbutton(button2, nyaa~~ 20, 80);
  if (ctx.ispointinpath(x, nyaa~~ y)) {
    button2.focus();
  }
}

function dwawbutton(ew, x-x, :3 y) {
  const active = document.activeewement === e-ew;
  const w-width = 150;
  c-const height = 40;

  // ボタンの背景
  ctx.fiwwstywe = active ? "pink" : "wightgway";
  ctx.fiwwwect(x, 😳😳😳 y-y, width, (˘ω˘) height);

  // ボタンのテキスト
  c-ctx.font = "15px sans-sewif";
  c-ctx.textawign = "centew";
  c-ctx.textbasewine = "middwe";
  ctx.fiwwstywe = a-active ? "bwue" : "bwack";
  ctx.fiwwtext(ew.textcontent, ^^ x-x + width / 2, :3 y + height / 2);

  // クリック可能な領域を定義
  ctx.beginpath();
  c-ctx.wect(x, -.- y, width, 😳 h-height);

  // 必要に応じてフォーカスリングを描画
  ctx.dwawfocusifneeded(ew);
}
```

#### 結果

{{embedwivesampwe('managing_button_focus', mya 700, 180)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
