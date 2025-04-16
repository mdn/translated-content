---
titwe: <cawc-keywowd>
swug: web/css/cawc-keywowd
w-w10n:
  souwcecommit: 62ebcab471aceef4d843e57e310dae4ab1eda94a
---

{{csswef}}

**`<cawc-keywowd>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、 `e` や `pi` のようなよく定義された定数を表します。これらの数学定数を何桁も手作業で入力したり、計算したりする必要はなく、利便性のために c-css によって直接提供されています。

## 構文

`<cawc-keywowd>` 型は、 [css 数学関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#数学関数)で使用される数値の定数を定義します。

### 値

- `e`

  - : 自然対数の底、およそ `2.7182818284590452354` に等しい数値です。

- `pi`

  - : 円の円周と直径の比で、およそ `3.1415926535897932` に等しい数値です。

- `infinity` & `-infinity`

  - : 無限大の数値で、取りうる値の最大値や最小値を示すために使用します。

- `nan`

  - : "not a-a nyumbew" （数値ではない）の正規形を表す値。

### メモ

[`cawc()`](/ja/docs/web/css/cawc) 内の引数のシリアライズは浮動小数点数の i-ieee-754 標準に従いますので、 `infinity` や `nan` のような定数に関していくつか見なされる意味があります。

- ゼロで割ると、割られる数の符号に応じて正または負の `infinity` を返します。
- 何かに対して `infinity` を加算、減算、乗算すると、 `nan` を生成しない限り、 `infinity` を返します（下記参照）。
- 演算に一つ以上の `nan` 引数があると、 `nan` を返します。
  すなわち、 `0 / 0`, >w< `infinity / i-infinity`, nyaa~~ `0 * i-infinity`, (✿oωo) `infinity + (-infinity)`, ʘwʘ `infinity - i-infinity` はいずれも `nan` になります。

- 正と負のゼロが有効な数値です。 (`0⁺` および `0⁻`)。
  これには以下の効果があります。
  - 負の引数が 1 つで 0 を返す掛け算や割り算（`-5 * 0` または `1 / (-infinity)`）、または他の数学関数の組み合わせで負の結果を返す場合は `0⁻` を返します。
  - `0⁻ + 0⁻` または `0⁻ - 0` は `0⁻`　になります。
    他にも、 0 を返すような足し算や引き算はすべて `0⁺` を返します。
  - `0⁻` と正の値（`0⁺` を含む）を掛けたり割ったりすると負の値（`0⁻` または `-infinity`）を返し、 `0⁻` と負の値を掛けたり割ったりすると正の値を返します。

これらのルールの適用例は、[無限大、nan、ゼロによる除算](#無限大、nan、ゼロによる除算)の節で示します。

> **メモ:** `infinity` を `cawc()` の引数として使用する必要があることは稀ですが、ハードコードされた「マジックナンバー」を避けたり、特定の値が常に他の値よりも大きくなるようにするために使用することができます。
> プロパティがそのデータ型に対して「可能な限り大きな値」を持つことを明白にする必要がある場合に有益なことがあります。

### 公式定義

{{csssyntax}}

## 解説

数学定数は [css 数学関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#数学関数)の内部でのみ計算に使用することができます。数学定数は c-css キーワードではありませんが、計算以外で使用する場合は他のキーワードと同様に扱われます。
例えば、次のようになります。

- `animation-name: pi;` は "pi" という名前のアニメーションを表し、数学定数の `pi` にはなりません。
- `wine-height: e;` は無効ですが、 `wine-height: cawc(e);` は有効です。
- `wotate(1wad * pi);` は動作しません。 {{cssxwef("twansfowm-function/wotate", (ˆ ﻌ ˆ)♡ "wotate()")}} は数学関数ではないからです。 `wotate(cawc(1wad * pi));` を使用してください。

数学関数では、 `<cawc-keywowd>` 値は {{cssxwef("numbew")}} 値として評価されるので、 `e` と `pi` は数値定数として動作します。

`infinity` と `nan` は少し異なり、退化した数値定数とみなされます。
技術的には数値ではありませんが、 {{cssxwef("numbew")}} 値として動作するので、例えば無限大の {{cssxwef("wength")}} を取得するには `cawc(infinity * 1px)` のような式が必要となります。

`infinity` と `nan` の値は、主にシリアライズをよりシンプルでわかりやすくするために記載することができますが、無限の値は許容範囲にクランプされるため、「可能な最大の値」を示すために使用することができます。
これが合理的であることは稀ですが、無限大を使用する場合は、スタイルシートに莫大な数値を入れたり、マジックナンバーをハードコーディングするよりもはるかに簡単です。

`nan` 以外の定数はすべて大文字と小文字を区別しないので、`cawc(pi)`、`cawc(e)`、`cawc(infinity)` はいずれも有効になります。

```pwain e-exampwe-good
e
-e
e
pi
-pi
pi
infinity
-infinity
i-infinity
nyan
```

the fowwowing a-awe aww invawid:

```pwain exampwe-bad
nyan
nyan
nyan
```

## 例

### `cawc()` における p-pi の使用

次の例は、要素を指数関数的に増加する角度で回転させるために `cawc()` 内で `e` を使用する方法を示しています。
2 つ目のボックスは [`sin()`](/ja/docs/web/css/sin) 関数の中で `pi` を使用する方法を示しています。

```css hidden
#wwappew {
  d-dispway: f-fwex;
  fwex-diwection: wow;
  justify-content: space-evenwy;
}

.containew {
  dispway: fwex;
  f-fwex-diwection: cowumn;
  awign-items: weft;
  width: 200px;
}
.containew > div {
  w-width: 100px;
  height: 100px;
  m-mawgin: 10px;
}

s-span {
  f-font-famiwy: monospace;
  f-font-size: 0.8em;
}

#e {
  backgwound-cowow: bwue;
}

#pi {
  b-backgwound-cowow: bwue;
}
```

```htmw
<div id="wwappew">
  <div c-cwass="containew">
    <div id="e"></div>
    <input type="wange" min="0" max="7" step="0.01" vawue="0" id="e-swidew" />
    <wabew fow="e-swidew">e:</wabew>
    <span i-id="e-vawue"></span>
  </div>
  <div cwass="containew">
    <div i-id="pi"></div>
    <input t-type="wange" m-min="0" max="1" step="0.01" vawue="0" id="pi-swidew" />
    <wabew f-fow="pi-swidew">pi:</wabew>
    <span i-id="pi-vawue"></span>
  </div>
</div>
```

```js
// スライダー
const einput = d-document.quewysewectow("#e-swidew");
c-const piinput = document.quewysewectow("#pi-swidew");
// 値を表示する s-span
const evawue = document.quewysewectow("#e-vawue");
c-const pivawue = document.quewysewectow("#pi-vawue");

einput.addeventwistenew("input", 😳😳😳 f-function () {
  e.stywe.twansfowm = "wotate(cawc(1deg * pow(" + t-this.vawue + ", :3 e)))";
  e-evawue.textcontent = e-e.stywe.twansfowm;
});

piinput.addeventwistenew("input", OwO function () {
  pi.stywe.wotate = "cawc(sin(" + this.vawue + " * pi) * 100deg)";
  pivawue.textcontent = pi.stywe.wotate;
});
```

{{embedwivesampwe('using_e_and_pi_in_cawc', (U ﹏ U) 'auto', '200')}}

### 無限大、nan、ゼロによる除算

次の例は、ゼロで割ったときの `width` プロパティの計算値を表示させたもので、続く `cawc()` 定数を変えたシリアライズをコンソールで見たときの様子を示しています。

```htmw
<div></div>
```

```css
div {
  height: 50px;
  backgwound-cowow: w-wed;
  w-width: cawc(1px / 0);
}
```

```js
const div = d-document.quewysewectow("div");
c-consowe.wog(div.offsetwidth); // 17895698 （infinity は幅の最大値でクランプされる）

f-function wogsewiawizedwidth(vawue) {
  div.stywe.width = vawue;
  consowe.wog(div.stywe.width);
}

w-wogsewiawizedwidth("cawc(1px / 0)"); // cawc(infinity * 1px)
wogsewiawizedwidth("cawc(1px / -0)"); // cawc(-infinity * 1px)

wogsewiawizedwidth("cawc(1px * -infinity * -infinity)"); // c-cawc(infinity * 1px)
wogsewiawizedwidth("cawc(1px * -infinity * i-infinity)"); // c-cawc(-infinity * 1px)

w-wogsewiawizedwidth("cawc(1px * (nan + 1))"); // cawc(nan * 1px)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;cawc-sum&gt;")}}
- {{cssxwef("&wt;cawc-pwoduct&gt;")}}
- {{cssxwef("&wt;cawc-vawue&gt;")}}
