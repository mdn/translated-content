---
title: :open
slug: Web/CSS/Reference/Selectors/:open
original_slug: Web/CSS/:open
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:open`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、開閉の状態を持つ要素のうち、現在開いている状態にある要素を表します。

## 構文

```css
:open {
  /* ... */
}
```

## 解説

`:open` 擬似クラスは、現在開いている状態にある要素を選択します。これには、次のような要素があります。

- {{htmlelement("details")}} および {{htmlelement("dialog")}} 要素で、開いている状態、つまり `open` 属性が設定されている要素。
- {{htmlelement("input")}} 要素のうち、ユーザーが値を選択するためのピッカーインターフェイスを表示するもの（例えば [`<input type="color">`](/ja/docs/Web/HTML/Reference/Elements/input/color)）で、ピッカーが表示されているもの。
- {{htmlelement("select")}} 要素のうち、ユーザーが選択する値を表示するためにドロップダウンピッカーを表示するもので、そのピッカーが表示されているもの。[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)を実装する場合、ピッカー自体は {{cssxref("::picker()", "::picker(select)")}} 擬似要素を使用して選択できることに注意してください。

なお、開いている状態と閉じられた状態は意味づけの状態であり、当該要素の表示状態とは必ずしも対応していません。例えば、コンテンツを表示するために展開されている `<details>` 要素は開いている状態であり、 {{cssxref("visibility")}} の値が `hidden` であっても、 `details:open` セレクターによって選択されます。

{{domxref("Popover API", "ポップオーバー", "", "nocode")}}要素（つまり、 [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性が設定されている要素）は、表示されているか非表示であるかを表す、個別の意味づけの状態を持ち、開いている状態や閉じられた状態と共存することができます。表示状態のポップオーバー要素をターゲットにするには、代わりに {{cssxref(":popover-open")}} 擬似クラスを使用してください。

## 例

### 基本的な `:open` の使用

この例では、開いている状態を持つ HTML 要素のいくつかを示しています。

#### CSS

```css
details:open > summary {
  background-color: pink;
}

:is(select, input):open {
  background-color: pink;
}
```

```css hidden
@supports not selector(:open) {
  body::before {
    content: "このブラウザーは :open セレクターに対応していません。";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body > * {
    display: none;
  }
}
```

#### HTML

```html
<details>
  <summary>Details</summary>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar dapibus
  lacus, sit amet finibus lectus mollis eu. Nullam quis orci dictum, porta lacus
  et, cursus nunc. Aenean pulvinar imperdiet neque fermentum facilisis. Nulla
  facilisi. Curabitur vitae sapien ut nunc pulvinar semper vitae vitae nisi.
</details>
<hr />

<label for="pet-select">ペットを選択:</label>
<select id="pet-select">
  <option value="dog">イヌ</option>
  <option value="cat">ネコ</option>
  <option value="hamster">ハムスター</option>
</select>
<hr />

<label for="start">開始日:</label>
<input type="date" id="start" />
```

#### 結果

{{EmbedLiveSample("Basic `:open` usage", 300, 200)}}

### `:open` による `<select>` の独自のスタイル設定

この例では、基本的な {{htmlelement("select")}} 要素に独自のスタイルを適用しています。 `:open` 擬似クラスを使用して、ドロップダウンメニューが表示されている開いている状態にスタイルを適用しています。

#### HTML

このフルーツセレクターには特別な点はありません。

```html
<label>
  お好きなフルーツを選んでください。
  <select name="fruit">
    <option>りんご</option>
    <option>バナナ</option>
    <option>ボイセンベリー</option>
    <option>クランベリー</option>
    <option>イチジク</option>
    <option>グレープフルーツ</option>
    <option>レモン</option>
    <option>オレンジ</option>
    <option>パパイヤ</option>
    <option>ザクロ</option>
    <option>トマト</option>
  </select>
</label>
```

> [!NOTE]
> 複数行の `<select>` （つまり、 [`multiple`](/ja/docs/Web/HTML/Reference/Attributes/multiple) 属性が設定されているもの） は使用していません。これらは、ドロップダウンメニューではなく、スクロール可能なリストボックスとして表示される傾向があるため、開く状態が存在しません。

#### CSS

この CSS では、`<select>` 要素の {{cssxref("appearance")}} 値を `none` に設定して、選択ボックスから OS の既定のスタイルを削除し、いくつかの基本的なスタイルを自分自身で指定しています。最も注目すべきは、右側に下向きの矢印の SVG 背景画像を指定していることです。ユーザーは下向きの矢印で `<select>` 要素を認識する傾向があるため、これを記載することはよい考えです。

次に、 {{cssxref("padding")}} を {{htmlelement("label")}} 要素の周囲に設定し、後で色付きの境界線を追加してもレイアウトが統一されるように、透明な境界線を設定します。

```css
select {
  appearance: none;
  width: 100%;
  display: block;
  font-family: inherit;
  font-size: 100%;
  padding: 5px;
  border: 1px solid black;
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='5,5 15,5 10,15'/%3E%3C/svg%3E")
    no-repeat right 3px center / 1em 1em;
}

label {
  font-family: sans-serif;
  max-width: 20em;
  display: block;
  padding: 20px;
  border: 2px solid transparent;
}
```

`<select>` が開かれたとき、 `:open` 擬似クラスを使用して、異なる背景色を設定し、背景画像を上向き矢印に変更します。また、 `:open` 擬似クラスと {{cssxref(":has()")}} 擬似クラスを組み合わせて親セレクターを作成し、囲んでいる `<label>` 要素に異なる背景色と境界線を設定します。これは、文字通り「`<label>` を選択しますが、その子孫の `<select>` が開いている場合のみ」という意味です。

```css
select:open {
  background-color: #f8f2dc;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='5,15 10,5 15,15'/%3E%3C/svg%3E");
}

label:has(select:open) {
  background-color: #81adc8;
  border-color: #cd4631;
}
```

#### 結果

結果は次のとおりです。 `<select>` ドロップダウンを開いて、スタイル設定の効果を確認してください。

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "100") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, {{htmlelement("input")}} 要素
- {{cssxref(":popover-open")}} 擬似クラス
- {{Cssxref(":modal")}}
