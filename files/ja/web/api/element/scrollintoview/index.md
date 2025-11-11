---
title: "Element: scrollIntoView() メソッド"
short-title: scrollIntoView()
slug: Web/API/Element/scrollIntoView
l10n:
  sourceCommit: 30aef1fff62894d4f47a0fc4c234248da007f504
---

{{APIRef("DOM")}}

{{domxref("Element")}} インターフェイスの **`scrollIntoView()`** メソッドは、 `scrollIntoView()` が呼び出された要素がユーザーに見えるところまで、要素の親コンテナーをスクロールします。

## 構文

```js-nolint
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(scrollIntoViewOptions)
```

### 引数

- `alignToTop` {{optional_inline}}
  - : 論理値です。
    - `true` の場合、要素の上端がスクロール可能な祖先の表示範囲の上端に来るようにスクロールします。 `scrollIntoViewOptions: {block: "start", inline: "nearest"}` に相当します。これが既定値です。
    - `false` の場合、要素の下端がスクロール可能祖先の表示範囲の下端に来るようにスクロールします。 `scrollIntoViewOptions: {block: "end", inline: "nearest"}` に相当します。

- `scrollIntoViewOptions` {{optional_inline}}
  {{experimental_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `behavior` {{optional_inline}}
      - : スクロールを即座に行うか、滑らかにアニメーションさせるかを決定します。このオプションは文字列であり、以下のいずれかの値を取ります。
        - `smooth`: スクロールをスムーズなアニメーションで行う
        - `instant`: スクロールを単一のジャンプで即座に行う
        - `auto`: スクロールの動作を {{cssxref("scroll-behavior")}} の計算値によって指定する
    - `block` {{optional_inline}}
      - : スクロール可能な祖先コンテナー内での、要素の垂直配置を定義します。このオプションは文字列であり、以下の値のいずれかを受け入れます。
        - `start`: 要素の上端をスクロール可能なコンテナーの上端に揃え、要素を可視領域の垂直方向の先頭に配置します。
        - `center`: 要素をスクロール可能なコンテナーの垂直方向の中央に配置し、可視領域の中央に位置指定します。
        - `end`: 要素の下端をスクロール可能なコンテナーの下端に揃え、要素を可視領域の垂直方向の末尾に配置します。
        - `nearest`: 要素を垂直方向の最も近い端までスクロールします。 要素がスクロール可能なコンテナー内で上端により近い場合、上に配置されます。 下端により近い場合、下端に配置されます。これにより、スクロールの距離が最小限に抑えられます。
        - 既定値は `start` です。
    - `inline` {{optional_inline}}
      - : スクロール可能な親コンテナー内で要素の水平配置を定義します。このオプションは文字列であり、以下の値のいずれかを受け入れます。
        - `start`: 要素の左端をスクロール可能なコンテナーの左端に揃え、要素を可視領域の水平方向の先頭に配置します。
        - `center`: 要素をスクロール可能なコンテナーの水平方向の中央に配置し、可視領域の中央に位置指定します。
        - `end`: 要素の右端をスクロール可能なコンテナーの右端に揃え、要素を可視領域の水平方向の末尾に配置します。
        - `nearest`: 要素を水平方向の最も近い端までスクロールします。 要素がスクロール可能なコンテナー内で左端により近い場合、左に配置されます。 下端により近い場合、下端に配置されます。これにより、スクロールの距離が最小限に抑えられます。
        - 既定値は `nearest` です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### scrollIntoView() の使用

```js
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```

### top/bottom の配置の制御

既定では、要素はスクロール可能な親要素の上端（または下端）に配置されます。独自の配置間隔を定義するには、 {{cssxref("scroll-margin-top")}} または {{cssxref("scroll-margin-bottom")}} を使用します。これは、ページに固定されたヘッダーがある場合に役立つことがよくあります。

#### HTML

```html
<body>
  <header class="navbar">ナビバー</header>
  <main class="content">
    <button id="go-to-bottom">下端へ移動</button>
    <button id="go-to-top">上端へ移動</button>
  </main>
</body>
```

#### CSS

```css
.navbar {
  height: 50px;
  position: sticky;
  top: 0;
  border-bottom: 1.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  height: 2000px;
  position: relative;
}
#go-to-bottom {
  position: absolute;
  top: 10px;
  /* これがないと、スクロールした際に、ボタンがナビゲーションバーの
  下端ではなくページの上端に配置されてしまいます。 */
  scroll-margin-top: 60px;
}
#go-to-top {
  position: absolute;
  bottom: 10px;
  scroll-margin-bottom: 0;
}
```

#### JavaScript

```js
const goToTop = document.getElementById("go-to-top");
const goToBottom = document.getElementById("go-to-bottom");
goToBottom.addEventListener("click", () => {
  goToTop.scrollIntoView({ behavior: "instant", block: "end" });
});
goToTop.addEventListener("click", () => {
  goToBottom.scrollIntoView({ behavior: "instant", block: "start" });
});
```

#### 結果

{{EmbedLiveSample("scroll-with-padding", "700", "300")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.scrollIntoViewIfNeeded()")}} {{non-standard_inline}}
