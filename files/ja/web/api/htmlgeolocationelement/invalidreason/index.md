---
title: "HTMLGeolocationElement: invalidReason プロパティ"
short-title: invalidReason
slug: Web/API/HTMLGeolocationElement/invalidReason
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

**`invalidReason`** は {{domxref("HTMLGeolocationElement")}} インターフェイスの読み取り専用プロパティで、関連付けられた {{htmlelement("geolocation")}} 要素が無効である（ブロックされている）場合、その理由を表す列挙値を返します。

[ブロッカー](/ja/docs/Web/HTML/Reference/Elements/geolocation#geolocation_のブロック)が `<geolocation>` 要素に対して有効な場合、その要素は無効とみなされます。これは、理由に応じて一時的または永続的に機能が利用できないことを意味します。

{{domxref("HTMLGeolocationElement.isValid")}} プロパティで、その `<geolocation>` 要素が有効であるかどうかを問い合わせることができます。

## 値

要素に有効なブロッカーがない場合は空文字列 (`""`)、または次の値のいずれか（優先度順）です。

- `illegal_subframe`
  - : `<geolocation>` が {{htmlelement("fencedframe")}} 要素の中に含まれている場合。

    永続的ブロッカーです。

- `unsuccesful_registration`
  - : 同じ文書に 3 つ以上の`<geolocation>`要素がある場合。

    一時的ブロッカーです。

- `recently_attached`
  - : `<geolocation>` 要素が最近 DOM に取り付けられたばかりである場合。

    期限付きブロッカーです。

- `intersection_changed`
  - : `<geolocation>` 要素が移動された場合。

    期限付きブロッカーです。

- `intersection_out_of_viewport_or_clipped`
  - : `<geolocation>` 要素がビューポートの外側にあるか、部分的に描画されている場合。

    一時的ブロッカーです。

- `intersection_occluded_or_distorted`
  - : `<geolocation>` 要素がビューポート内に完全に描画されているものの、何らかの方法で隠されている場合。例えば、他のコンテンツの背後に描画されている場合。

    一時的ブロッカーです。

- `style_invalid`
  - : `<geolocation>` 要素に、制限されたスタイルが適用されている場合（[スタイルの制約](/ja/docs/Web/HTML/Reference/Elements/geolocation#スタイルの制約)を参照）。

    一時的ブロッカーです。

これらの無効な理由が、優先度が高い順に掲載されています。
複数のブロッカーがアクティブな場合、返される `invalidReason` の値は、優先度が高い有効なブロッカーを表す値となります。

なお、前述の説明にはそれぞれの無効な理由に対応する「ブロッカー種別」が含まれており、次のいずれかとなります。

- 永続的ブロッカー
  - : この `<geolocation>` 要素は、開発者がブロック要因の発生を止めるようコードを更新するまで、永続的に無効な状態です。
- 一時的ブロッカー
  - : この `<geolocation>` 要素は、ブロック条件が解消されるまで無効です。その後、一時的なブロッカーは期限付きブロッカーに切り替わります。
- 期限付きブロッカー
  - : この `<geolocation>` 要素は、短時間無効となった後、再び有効になります。

## 例

### 基本的な使い方

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.invalidReason);
// ""。 `<geolocation>` 要素が何らかの方法でブロックされていない場合に限る
```

### 無効な理由を探る

この例では、`<geolocation>` 要素に無効化させる異なるスタイルを適用するためのフォームコントロールを提供します。それぞれのスタイルセットが適用されるたびに、ブラウザーで設定された `invalidReason` を報告します。

#### HTML

まず、`<geolocation>` 要素と、後で `<geolocation>` 要素の上にレンダリングすることができる {{htmlelement("div")}} 要素を設置します。

```html
<geolocation>
  このブラウザーは <code>&lt;geolocation&gt;</code> 要素に対応していません。
</geolocation>
<div id="cover">カバー要素</div>
```

次に {{htmlelement("p")}} 要素を提供し、それぞれのスタイルセットによって生成された `invalidReason` を表示できるようにします。。

```html
<p id="reason"></p>
```

最後に {{htmlelement("select")}} 要素を提供し、ユーザーが `<geolocation>` 要素を無効化する様々なスタイル設定の効果を選択できるようにします。

```html
<form>
  <label for="invalidate"
    ><code>&lt;geolocation&gt;</code> 要素を無効にする方法を選択:</label
  >
  <select id="invalidate">
    <option value="">なし</option>
    <option value="move-behind">要素の背後に移動</option>
    <option value="move-out">ビューポートの外へ移動</option>
    <option value="bad-contrast">コントラストを悪化</option>
  </select>
</form>
```

#### CSS

このスタイルでは、まず `<geolocation>` 要素に、位置指定ができるようにするため {{cssxref("position")}} 値を `relative` に、 {{cssxref("z-index")}} 値を `1` に設定します。

```css hidden
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin-left: 50px;
}

geolocation {
  font-size: small;
}

#cover {
  width: 200px;
  height: 50px;
  color: white;
  background-color: darkblue;
  padding: 10px;
}
```

```css
geolocation {
  position: relative;
  z-index: 1;
}
```

次に、`#cover` の `<div>` に `position: absolute` を適用し、{{glossary("inset properties", "インセットプロパティ")}}を使用して `<geolocation>` 要素の右側に配置します。同時に、`z-index` 値を `2` に設定します。これにより、`<div>` が `<geolocation>` 要素と同じ領域に配置された場合、`<div>` が上に表示されるようになります。

```css
#cover {
  position: absolute;
  top: 72px;
  left: 250px;
  z-index: 2;
}
```

これで、ユーザーが様々な `<select>` の選択肢を指定した際に `<geolocation>` 要素に適用される 3 つのクラススタイルを定義します。`.move-behind` は `#cover` の `<div>` の背後に移動させ、`.move-out` は画面外に移動させ、`.bad-contrast` は[色のコントラスト](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)を悪化させます。これら 3 つのスタイルはすべて `<geolocation>` 要素を無効な状態にします。

```css
.move-behind {
  left: 150px;
}

.move-out {
  right: 250px;
}

.bad-contrast {
  background-color: red;
  color: orange;
}
```

#### JavaScript

スクリプトでは、まず `<geolocation>`、`<div>`、`<p>`、`<select>` の各要素への参照を取得することから始めます。

```js
const geo = document.querySelector("geolocation");
const coverElem = document.querySelector("#cover");
const reasonElem = document.querySelector("#reason");
const selectElem = document.querySelector("select");
```

次に、`input` イベントリスナーを `<select>` 要素に追加します。新しい選択値が選ばれた際、`<geolocation>` 要素の `class` 属性をその選択値に設定し、無効なクラススタイルを適用します。4 秒間のタイムアウト後、`class` を `""` に戻し、`<geolocation>` 要素を有効な状態に復帰させます。

```js
selectElem.addEventListener("input", () => {
  geo.className = selectElem.value;
  setTimeout(() => {
    geo.className = "";
  }, 4000);
});
```

最後に、様々な選択値が選択された際に発生する検証状態の変化を報告するコードを追加します。まず、ページが最初に読み込まれた際に `<p>` のテキストコンテンツを有効な `invalidReason` を含めるよう設定します。次に、{{domxref("HTMLGeolocationElement.validationstatuschange_event", "validationstatuschange")}} イベントリスナーを `<geolocation>` 要素に追加します。検証ステータスが変更されるたびに、{{domxref("HTMLGeolocationElement.isValid")}} を使用して `<geolocation>` 要素が有効であるかどうかを調べ、有効であれば `<p>` 要素のテキストコンテンツに確認メッセージを表示します。`<geolocation>` 要素が不正な場合、`invalidReason` を `<p>` 要素のテキストコンテンツに表示します。

```js
reasonElem.textContent = `Invalid reason: ${geo.invalidReason}`;

geo.addEventListener("validationstatuschange", () => {
  if (geo.isValid) {
    reasonElem.textContent = `<geolocation> is valid`;
  } else {
    reasonElem.textContent = `Invalid reason: ${geo.invalidReason}`;
  }
});
```

#### 結果

このコードを[ライブ実行](https://mdn.github.io/dom-examples/geolocation-element/exploring-invalid-reasons/)で確認してください（完全な[ソースコード](https://github.com/mdn/dom-examples/tree/main/geolocation-element/exploring-invalid-reasons)も参照）。異なる無効化オプションを選べます。それぞれの場合でどの無効化理由が報告されるか確認してみてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
