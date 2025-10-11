---
title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}} 要素の **`color`** は視覚的なインターフェイス、もしくは `#rrggbb` の 16 進数表記でテキストを入力することでユーザーが色を指定することができるユーザーインターフェイス要素を提供します。

CSS の色表現には他にも色名、関数表記、アルファ値つきの 16 進表記などがありますが、ここでは（アルファ値のない）基本的な 16 進の色のみが利用できます。

この要素の外見は、ブラウザーやプラットフォームによって大きく異なります。基本的なテキストの入力欄で、入力された色情報が文字列の検証のみを行う入力欄であったり、プラットフォームの標準カラーピッカーや、独自のピッカーウィンドウを表示するなど、ブラウザーやプラットフォームにより大きく異なることがあります。

{{InteractiveExample("HTML デモ: &lt;input type=&quot;color&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Choose your monster's colors:</p>

<div>
  <input type="color" id="head" name="head" value="#e66465" />
  <label for="head">Head</label>
</div>

<div>
  <input type="color" id="body" name="body" value="#f6b73c" />
  <label for="body">Body</label>
</div>
```

```css interactive-example
p,
label {
  font:
    1rem "Fira Sans",
    sans-serif;
}

input {
  margin: 0.4rem;
}
```

## 値

{{HTMLElement("input")}} 要素で型が `color` のものの [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) は、常に 16 進表記で RGB カラーを特定する 7 文字の文字列になります。入力欄には色を大文字でも小文字でも入力することができ、大文字を指定した場合、小文字に変換して格納されます。これ以外の値や、空の値になることはありません。

> [!NOTE]
> 有効な、不透明な *16 進表現*の RGB カラーではない値を設定した場合は、結果的に `#000000` に設定されます。特に、CSS で標準化されている色名や、CSS 関数を値の設定に使用することはできません。HTML と CSS は別な言語や仕様であることを考慮していただければお分かりでしょう。加えて、アルファチャネルのある色はサポートされていません。`#009900aa` のような 9 文字の 16 進表記で色を設定すると、結果的に `#000000` に設定されます。

## カラー入力欄の使用

type が `color` の入力欄は、対応する属性の数が限られているので単純です。

### 既定の色の設定

上記の例で既定値を設定するように変更すると、カラーピッカーがあらかじめ既定色で塗りつぶされ、カラーピッカーも（もしあれば）その色が既定になります。

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

色を指定していない場合、既定値は `#000000`、すなわち黒になります。値は 7 文字の 16 進表記、つまり "#" の文字に続いて赤、緑、青を示す各 2 桁が並び、`#rrggbb` のようになります。他の形式の色を使う場合は (CSS の色名や、`rgb()` または `hsl()` のような CSS 色関数など)、`value` に設定する前に 16 進表記に変換する必要があります。

### 色の変更の追跡

ほかの {{HTMLElement("input")}} 型と同様に、{{domxref("Element/input_event", "input")}} および {{domxref("HTMLElement/change_event", "change")}} イベントで色の変化を検出することができます。`input` は `<input>` 要素で色が変更されるたびに実行されます。`change` イベントはユーザーがカラーピッカーを閉じたときに実行されます。どちらの場合も、新しい値は [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) で調べることができます。

次の例は、色の変更をずっと監視します。

```js
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### 値の選択

ブラウザーがカラーピッカーインターフェイスに対応していない場合、カラー入力の実装はテキストボックスとなり、値が正しい形式であることを確認するために、自動的に中身を検証することになります。この場合、{{domxref("HTMLInputElement.select", "select()")}}メソッドを使用して、現在編集フィールドに使用されているテキストを選択することができます。

ブラウザーがカラーピッカーなどを提供している場合、`select()` は何もしません。いずれの状況でもコードが動作するように気をつける必要があります。

```js
colorPicker.select();
```

## 検証

{{Glossary("User agent", "ユーザーエージェント")}} が値を正しい形式である 7 桁の小文字の 16 進記法に変換できない場合、値は無効であると見なされます。このときは {{cssxref(":invalid")}} 擬似クラスが要素に適用されます。

## 例

{{domxref("HTMLElement/change_event", "change")}} および {{domxref("Element/input_event", "input")}} イベントを追跡して、新しい色を取得し、その度に文書の {{HTMLElement("p")}} 要素に適用する例をもう少し作成してみましょう。

### HTML

HTMLはかなり単純です。数段落の説明的な素材と、 ID が `color-picker` で `color` 型の {{HTMLElement("input")}} があり、これを使用して段落のテキストの色を変更することになります。

```html
<p><code>&lt;input type="color"&gt;</code> コントロールを使用する例です。</p>

<label for="color-picker">色:</label>
<input type="color" value="#ff0000" id="color-picker" />

<p>
  カラーピッカーを動かしたときに段落の色が変わるのを見てください。カラーピッカーに変更を加えると、最初の段落の色が、プレビューとして変化します（<code
    >input</code
  >
  イベントを使用します）。カラー ピッカーを閉じると、<code>change</code>
  イベントが実行され、全ての段落が選択された色に変化することが分かります。
</p>
```

### JavaScript

まずはいくつかの設定を行います。いくつかの変数を作成し、変数の値をページが最初に読み込まれたとき設定する色にし、ページが完全に読み込まれた時に一度スタートアップ作業を実行させるために {{domxref("Window/load_event", "load")}} ハンドラーを設定します。

```js
let colorPicker;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
```

#### 初期化

ページが読み込まれると、`load` イベントのハンドラーである `startup()` が呼び出されます。

```js
function startup() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.addEventListener("change", updateAll, false);
  colorPicker.select();
}
```

これは color の `<input>` 要素の参照を取得して `colorPicker` という変数に格納し、色入力欄の値を `defaultColor` を設定します。次に、{{domxref("Element/input_event", "input")}} イベントに `updateFirst()` 関数を、{{domxref("HTMLElement/change_event", "change")}} イベントに `updateAll()` 関数を指定します。これらについては後述します。

最後に {{domxref("HTMLInputElement.select", "select()")}} を呼び出し、色入力のテキストコンテンツを選択します。これはカラーピッカーが提供されていないなどで、テキスト入力欄として表示された場合に利用します。

#### 色の変更に応答させる

色の変更に反応する 2 つの関数を与えています。`updateFirst()` 関数は `input` イベントによって呼び出され、文書の最初にある段落要素の色を変えて、入力欄の新しい値と一致させます。 `input` イベントは値を調整する（例えば明るさを増加させるなど）たびに実行されるため、カラーピッカーが使用される毎に繰り返して実行されます。

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

カラーピッカーが閉じられると、（ユーザーがカラーピッカーを再び開かない限り）値が再び変化することはないことを示す `change` イベントが要素に送られます。そのイベントを `updateAll()` 関数で処理し、 [`Event.target.value`](/ja/docs/Web/HTML/Reference/Elements/input#value) を使用して最終的に選択された色を取得します。

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

これは、すべての {{HTMLElement("p")}} ブロックの色を設定して、その {{cssxref("color")}} 属性が color 入力（ {{domxref("Event.target", "event.target")}} を使用して参照される）の現在の値と一致するようにするものである。

### 結果

最終的な結果は次のようになります。

{{EmbedLiveSample("Example", 700, 200)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">値</a></strong></td>
      <td>
        小文字の 16 進数で {{cssxref("&lt;color&gt;")}} を定義する 7 文字の文字列
      </td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} および
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>対応する共通属性</strong></td>
      <td>
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a> および
        <a href="/ja/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>list</code> および <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM インターフェイス</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
    <tr>
      <td><strong>暗黙の ARIA ロール</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
