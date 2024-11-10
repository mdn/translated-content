---
title: <calc-keyword>
slug: Web/CSS/calc-keyword
l10n:
  sourceCommit: 62ebcab471aceef4d843e57e310dae4ab1eda94a
---

{{CSSRef}}

**`<calc-keyword>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、 `e` や `pi` のようなよく定義された定数を表します。これらの数学定数を何桁も手作業で入力したり、計算したりする必要はなく、利便性のために CSS によって直接提供されています。

## 構文

`<calc-keyword>` 型は、 [CSS 数学関数](/ja/docs/Web/CSS/CSS_Functions#数学関数)で使用される数値の定数を定義します。

### 値

- `e`

  - : 自然対数の底、およそ `2.7182818284590452354` に等しい数値です。

- `pi`

  - : 円の円周と直径の比で、およそ `3.1415926535897932` に等しい数値です。

- `infinity` & `-infinity`

  - : 無限大の数値で、取りうる値の最大値や最小値を示すために使用します。

- `NaN`

  - : "Not a Number" （数値ではない）の正規形を表す値。

### メモ

[`calc()`](/ja/docs/Web/CSS/calc) 内の引数のシリアライズは浮動小数点数の IEEE-754 標準に従いますので、 `infinity` や `NaN` のような定数に関していくつか見なされる意味があります。

- ゼロで割ると、割られる数の符号に応じて正または負の `infinity` を返します。
- 何かに対して `infinity` を加算、減算、乗算すると、 `NaN` を生成しない限り、 `infinity` を返します（下記参照）。
- 演算に一つ以上の `NaN` 引数があると、 `NaN` を返します。
  すなわち、 `0 / 0`, `infinity / infinity`, `0 * infinity`, `infinity + (-infinity)`, `infinity - infinity` はいずれも `NaN` になります。

- 正と負のゼロが有効な数値です。 (`0⁺` および `0⁻`)。
  これには以下の効果があります。
  - 負の引数が 1 つで 0 を返す掛け算や割り算（`-5 * 0` または `1 / (-infinity)`）、または他の数学関数の組み合わせで負の結果を返す場合は `0⁻` を返します。
  - `0⁻ + 0⁻` または `0⁻ - 0` は `0⁻`　になります。
    他にも、 0 を返すような足し算や引き算はすべて `0⁺` を返します。
  - `0⁻` と正の値（`0⁺` を含む）を掛けたり割ったりすると負の値（`0⁻` または `-infinity`）を返し、 `0⁻` と負の値を掛けたり割ったりすると正の値を返します。

これらのルールの適用例は、[無限大、NaN、ゼロによる除算](#無限大、nan、ゼロによる除算)の節で示します。

> **メモ:** `infinity` を `calc()` の引数として使用する必要があることは稀ですが、ハードコードされた「マジックナンバー」を避けたり、特定の値が常に他の値よりも大きくなるようにするために使用することができます。
> プロパティがそのデータ型に対して「可能な限り大きな値」を持つことを明白にする必要がある場合に有益なことがあります。

### 公式定義

{{CSSSyntax}}

## 解説

数学定数は [CSS 数学関数](/ja/docs/Web/CSS/CSS_Functions#数学関数)の内部でのみ計算に使用することができます。数学定数は CSS キーワードではありませんが、計算以外で使用する場合は他のキーワードと同様に扱われます。
例えば、次のようになります。

- `animation-name: pi;` は "pi" という名前のアニメーションを表し、数学定数の `pi` にはなりません。
- `line-height: e;` は無効ですが、 `line-height: calc(e);` は有効です。
- `rotate(1rad * pi);` は動作しません。 {{CSSxRef("transform-function/rotate", "rotate()")}} は数学関数ではないからです。 `rotate(calc(1rad * pi));` を使用してください。

数学関数では、 `<calc-keyword>` 値は {{CSSxRef("number")}} 値として評価されるので、 `e` と `pi` は数値定数として動作します。

`infinity` と `NaN` は少し異なり、退化した数値定数とみなされます。
技術的には数値ではありませんが、 {{CSSxRef("number")}} 値として動作するので、例えば無限大の {{CSSxRef("length")}} を取得するには `calc(infinity * 1px)` のような式が必要となります。

`infinity` と `NaN` の値は、主にシリアライズをよりシンプルでわかりやすくするために記載することができますが、無限の値は許容範囲にクランプされるため、「可能な最大の値」を示すために使用することができます。
これが合理的であることは稀ですが、無限大を使用する場合は、スタイルシートに莫大な数値を入れたり、マジックナンバーをハードコーディングするよりもはるかに簡単です。

`NaN` 以外の定数はすべて大文字と小文字を区別しないので、`calc(Pi)`、`calc(E)`、`calc(InFiNiTy)` はいずれも有効になります。

```plain example-good
e
-e
E
pi
-pi
Pi
infinity
-infinity
InFiNiTy
NaN
```

The following are all invalid:

```plain example-bad
nan
Nan
NAN
```

## 例

### `calc()` における pi の使用

次の例は、要素を指数関数的に増加する角度で回転させるために `calc()` 内で `e` を使用する方法を示しています。
2 つ目のボックスは [`sin()`](/ja/docs/Web/CSS/sin) 関数の中で `pi` を使用する方法を示しています。

```css hidden
#wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 200px;
}
.container > div {
  width: 100px;
  height: 100px;
  margin: 10px;
}

span {
  font-family: monospace;
  font-size: 0.8em;
}

#e {
  background-color: blue;
}

#pi {
  background-color: blue;
}
```

```html
<div id="wrapper">
  <div class="container">
    <div id="e"></div>
    <input type="range" min="0" max="7" step="0.01" value="0" id="e-slider" />
    <label for="e-slider">e:</label>
    <span id="e-value"></span>
  </div>
  <div class="container">
    <div id="pi"></div>
    <input type="range" min="0" max="1" step="0.01" value="0" id="pi-slider" />
    <label for="pi-slider">pi:</label>
    <span id="pi-value"></span>
  </div>
</div>
```

```js
// スライダー
const eInput = document.querySelector("#e-slider");
const piInput = document.querySelector("#pi-slider");
// 値を表示する span
const eValue = document.querySelector("#e-value");
const piValue = document.querySelector("#pi-value");

eInput.addEventListener("input", function () {
  e.style.transform = "rotate(calc(1deg * pow(" + this.value + ", e)))";
  eValue.textContent = e.style.transform;
});

piInput.addEventListener("input", function () {
  pi.style.rotate = "calc(sin(" + this.value + " * pi) * 100deg)";
  piValue.textContent = pi.style.rotate;
});
```

{{EmbedLiveSample('Using_e_and_pi_in_calc', 'auto', '200')}}

### 無限大、NaN、ゼロによる除算

次の例は、ゼロで割ったときの `width` プロパティの計算値を表示させたもので、続く `calc()` 定数を変えたシリアライズをコンソールで見たときの様子を示しています。

```html
<div></div>
```

```css
div {
  height: 50px;
  background-color: red;
  width: calc(1px / 0);
}
```

```js
const div = document.querySelector("div");
console.log(div.offsetWidth); // 17895698 （infinity は幅の最大値でクランプされる）

function logSerializedWidth(value) {
  div.style.width = value;
  console.log(div.style.width);
}

logSerializedWidth("calc(1px / 0)"); // calc(infinity * 1px)
logSerializedWidth("calc(1px / -0)"); // calc(-infinity * 1px)

logSerializedWidth("calc(1px * -infinity * -infinity)"); // calc(infinity * 1px)
logSerializedWidth("calc(1px * -infinity * infinity)"); // calc(-infinity * 1px)

logSerializedWidth("calc(1px * (NaN + 1))"); // calc(NaN * 1px)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-product&gt;")}}
- {{CSSxRef("&lt;calc-value&gt;")}}
