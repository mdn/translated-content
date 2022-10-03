---
title: <input type="color">
slug: Web/HTML/Element/input/color
---

{{HTMLRef}}

{{HTMLElement("input")}} 要素の **`color`** は視覚的なインターフェイス、もしくは `#rrggbb` の 16 進数表記でテキストを入力することでユーザーが色を指定することができます。 CSS の色表現には色名、関数表記、アルファ値つきの 16 進表記などがありますが、ここでは単純な (アルファ値のない) もののみが利用できます。

この要素の外見は、ブラウザーやプラットフォームによって大きく異なります。— 単純なテキストの入力欄で、入力された色情報が文字列の検証のみを行う入力欄であったり、プラットフォームの標準カラーピッカーや、独自のピッカーウィンドウを表示するなど、ブラウザーやプラットフォームにより大きく異なることがあります。

{{EmbedInteractiveExample("pages/tabbed/input-color.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <td>
        <strong><a href="#value">値</a></strong>
      </td>
      <td>
        小文字の 16進数で {{cssxref("&lt;color&gt;")}} を定義する
        7文字の {{domxref("DOMString")}}
      </td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} および
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>対応する共通属性</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}} および
        {{htmlattrxref("list", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>list</code> および <code>value</code></td>
    </tr>
    <tr>
      <td><strong>メソッド</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
  </tbody>
</table>

## 値

type が `color` の {{HTMLElement("input")}} 要素の {{htmlattrxref("value", "input")}} は、常に 16 進表記で RGB カラーを特定する 7 文字の {{domxref("DOMString")}} になります。入力欄には色を大文字でも小文字でも入力することができ、大文字を指定した場合、小文字に変換して格納されます。これ以外の値や、空の値になることはありません。

> **メモ:** 有効な、不透明な *16 進表現*の RGB カラーではない値を設定した場合は、結果的に `#000000` に設定されます。特に、CSS で標準化されている色名や、CSS 関数を値の設定に使用することはできません。HTML と CSS は別な言語や仕様であることを考慮していただければお分かりでしょう。加えて、アルファチャネルのある色はサポートされていません。`#009900aa` のような 9 文字の 16 進表記で色を設定すると、結果的に `#000000` に設定されます。

> **メモ:** `input` の `color` 型に対応していないウェブブラウザーでは、自然に `text` 型にフォールバックされます。ユーザーは様々な方法で色を記述する可能性があるので (`rgb(255, 255, 0)` など)、回避策の一つとして、 `pattern` 属性を `#[0-9a-f]{6}` または `#[0-9A-Fa-f]{6}` に設定しておく方法にして (大文字小文字の変化で異なる結果を期待することはないので、おそらく後者)、 `placeholder` 属性を色を表すためにユーザーの入力を期待する書式、例えば `#ff0000` にする方法があります。

## カラー入力欄の使用

type が `color` の入力欄は、対応する属性の数が限られているので単純です。

### 既定の色の設定

上記の例で既定値を設定するように変更すると、色の部分があらかじめ既定色で塗りつぶされ、カラーピッカーも（もしあれば）その色が既定になります。

```html
<input type="color" value="#ff0000">
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

色を指定しない場合は、既定で黒を表す `#000000` になります。値は 7 文字の 16 進表記、つまり "#" の文字に続いて赤、緑、青を示す各 2 桁が並び、`#rrggbb` のようになります。他の形式の色を使う場合は (CSS の色名や、`rgb()` または `rgba()` のような CSS 色関数など)、`value` に設定する前に 16 進表記に変換する必要があります。

### 色の変更の追跡

ほかの {{HTMLElement("input")}} 型と同様に、{{domxref("HTMLElement/input_event", "input")}} および {{domxref("HTMLElement/change_event", "change")}} イベントで色の変化を検出することができます。`input` は `<input>` 要素で色が変更されるたびに実行されます。`change` イベントはユーザーがカラーピッカーを閉じたときに実行されます。どちらの場合も、新しい値は {{domxref("HTMLInputElement.value", "value")}} で調べることができます。

次の例は、色の変更をずっと監視します。

```js
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}
```

### 値の選択

対象のブラウザーが {{HTMLElement("input")}} 要素の `color` 型をサポートしておらず、代わりにテキスト入力欄に値を直接入力した場合、{{domxref("HTMLInputElement.select", "select()")}} メソッドで入力欄のテキストを選択することになります。ブラウザーがカラーピッカーなどを提供している場合、`select()` は何もしません。いずれの状況でもコードが動作するように気をつける必要があります。

```js
colorWell.select();
```

## 検証

{{Glossary("user agent", "ユーザーエージェント")}} が値を正しい形式である 7 桁の小文字の 16 進記法に変換できない場合、値は無効であると見なされます。このときは {{cssxref(":invalid")}} 疑似クラスが要素に適用されます。

## 例

{{domxref("HTMLElement/change_event", "change")}} および {{domxref("HTMLElement/input_event", "input")}} イベントを追跡して、新しい色を取得し、その度に文書の {{HTMLElement("p")}} 要素に適用する例をもう少し作成してみましょう。

### HTML

HTML はとても単純です。`colorWell` という ID を持つ `color` 型の{{HTMLElement("input")}} は、段落の色を変更するために用います。

```html
<p>An example demonstrating the use of the <code>&lt;input type="color"&gt;</code>
   control.</p>

<label for="colorWell">Color:</label>
<input type="color" value="#ff0000" id="colorWell">

<p>カラーピッカーを動かしたときに段落の色が変わるのを見てください。
   カラーピッカーに変更を加えると、最初の段落の色が、プレビューとして
   変化します(<code>input</code> イベントを使用します)。カラー
   ピッカーを閉じると、<code>change</code> イベントが実行され、
   全ての段落が選択された色に変化することが分かります。</p>
```

### JavaScript

まずはいくつかの設定を行います。いくつかの変数を作成し、変数の値をページが最初に読み込まれたとき設定する色にし、ページが完全に読み込まれた時に一度スタートアップ作業を実行させるために {{domxref("Window/load_event", "load")}} ハンドラーを設定します。

```js
var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
```

#### 初期化

ページが読み込まれると、`load` イベントのハンドラーである `startup()` が呼び出されます。

```js
function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}
```

`colorWell` に取得された `<input>` 要素を格納し、value プロパティに `defaultColor` を代入します。次に、{{domxref("HTMLElement/input_event", "input")}} イベントに `updateFirst()` 関数を、{{domxref("HTMLElement/change_event", "change")}} イベントに `updateAll()` 関数を指定します。これらについては後述します。

最後に {{domxref("HTMLInputElement.select", "select()")}} を呼び出し、色入力のテキストコンテンツを選択します。これはカラーピッカーが提供されていないなどで、テキスト入力欄として表示された場合に利用します。

#### 色の変更に反応させる

色の変更に反応する 2 つの関数を与えています。`updateFirst()` 関数は `input` イベントによって呼び出され、ドキュメントの最初にある段落要素の色を変えて、入力欄の新しい値と一致させます。 `input` イベントは値を調整する (例えば明るさを増加させるなど) たびに実行されるため、カラーピッカーが使用される毎に繰り返して実行されます。

```js
function updateFirst(event) {
  var p = document.querySelector("p");

  if (p) {
    p.style.color = event.target.value;
  }
}
```

カラーピッカーが閉じられると、`change` イベントが要素に送信されます。`updateAll()` 関数によってこれを捕捉し、{{domxref("HTMLInputElement.value", "Event.target.value")}} によって最終的に選択された色を取得します。

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}
```

これで {{domxref("Event.target", "event.target")}} によって参照されている色入力ボックスの {{cssxref("color")}} 属性の色を、すべての {{HTMLElement("p")}} ブロックに適用します。

### 結果

最終的な結果は次のようになります。

{{EmbedLiveSample("Example", 700, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS プロパティの互換性](/ja/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
