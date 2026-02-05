---
title: env()
slug: Web/CSS/Reference/Values/env
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`env()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、ユーザーエージェントが定義した[環境変数](/ja/docs/Web/CSS/Guides/Environment_variables/Using)の値を CSS に挿入するために使用することができます。

## 構文

```css
/* 代替値なし */
env(safe-area-inset-top);
env(titlebar-area-width);
env(viewport-segment-right 0 0);

/* 代替値付き */
env(safe-area-inset-right, 1em);
env(titlebar-area-y, 40px);
env(viewport-segment-width 0 0, 40%);
```

### 引数

`env( <environment-variable>, <fallback> )` 関数は以下の引数を受け付けます。

- [`<environment-variable>`](/ja/docs/Web/CSS/Guides/Environment_variables/Using#ブラウザー定義の環境変数)
  - : {{cssxref("&lt;custom-ident>")}} で、挿入する環境変数の名前を指定します。指定された名前が配列風の環境変数を表す場合、その名前の後に {{cssxref("&lt;integer>")}} 値を続けて、名前が参照する特定のインスタンスを識別します。大文字小文字を区別する環境変数名は、以下のいずれかです
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : ビューポートの上端、右端、下端、左端の辺から安全な距離。画面の形状が矩形でないことによって、コンテンツが切り取られるリスクなく配置できる安全な領域を定義します。4 つの値は矩形を形成し、その内部にすべてのコンテンツが表示されます。ビューポートが矩形で、ツールバーや動的キーボードなどの機能がビューポート空間を占めていない場合、値は `0` です。それ以外の場合は `0` より大きい `px` 値となります。
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : すべての動的ユーザーインターフェイス機能がたたまれた状態における、動的変数 `safe-area-inset-*` の静的な最大値。`safe-area-inset-*` の値は現在表示されているコンテンツ領域の変化に応じて変化しますが、`safe-area-max-inset-*` の値は定数です。
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : `titlebar-area-*` 変数は、デスクトップ端末にインストールされた PWA に有用です。デスクトップの PWA が `window-controls-overlay` で [`display_override`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) の値を使用すると、 `titlebar-area-*` 変数を使用してコンテンツがウィンドウの制御ボタン（すなわち、最小化、最大化、閉じるボタン）に重ならないようにすることができます。
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : ビューポートの端からのインセットと、端末の画面上仮想キーボードのサイズ。{{domxref("VirtualKeyboard API", "仮想キーボード API", "", "nocode")}} で定義されています。
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : 特定のビューポートセグメントのサイズとオフセット位置。`viewport-segment-*` キーワードの後に、セグメントの水平位置と垂直位置（またはインデックス）を示すスペース区切りの {{cssxref("&lt;integer>")}} 値が 2 つ続きます。ビューポートセグメントキーワードは、折り曲げ型画面を持つ端末や複数の画面を持つ折りたたみ式端末など、ビューポートが 2 つ以上のセグメントで構成される場合にのみ定義されます。

- `<fallback>` {{optional_inline}}
  - : 最初の引数で参照される環境変数が存在しない場合に挿入される代替値。最初のカンマ以降のすべてが代替値と見なされます。これは 1 つの値、別の `env()` 関数、カンマ区切りの値のリストを取ることができます。

## 解説

`env()` 関数は、グローバルスコープの[ユーザーエージェント定義環境変数](/ja/docs/Web/CSS/Guides/Environment_variables/Using#ブラウザー定義の環境変数)の値を CSS に挿入するために使用されます。`env()` 関数はプロパティ値として、またはプロパティ値や記述子（例：[メディアクエリールール](/ja/docs/Web/CSS/Reference/At-rules/@media)内）の任意の部分の代わりに使用できます。

この関数は最初の引数として `<environment-variable>` を受け取ります。これは、大文字小文字を区別する {{cssxref("&lt;custom-ident>")}} であり、置換される[環境変数の名前](/ja/docs/Web/CSS/Guides/Environment_variables/Using#ブラウザー定義の環境変数)と等しいものです。たとえば、`env(viewport-segment-width 0 0)` は、複数のビューポートセグメントを持つ端末で、上側または左側のセグメントの幅を返します。

第二引数（指定された場合）は代替値であり、第一引数で参照された環境変数に対応していない、または存在しない場合に使用されます。代替値は別の環境変数でもよく、その変数自体にも代替値を設定できます。

代替値の構文は、[CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)を挿入するために使用される {{cssxref("var()")}} 関数の代替値の構文と同様に、複数のカンマを入れることができます。最初のカンマから関数の終わりまでの部分が代替値と見なされます。ただし、カンマを含まないプロパティ値や記述子内で `env()` 関数が使用された場合、カンマを含む代替値は無効となります。

構文的に有効な `env()` 関数を含むプロパティまたは記述子は、ブラウザーがダウンロードした CSS テキストを最初に読み込み解釈する解析時に有効であると見なされます。構文チェックは計算時のみ行われ、各 `env()` 関数がブラウザーが提供する値（または第一引数として渡された環境変数が認識されなかった場合の代替値）に置換された後に行われます。値が無効で代替値が提供されていない場合、`env()` 関数を含むプロパティまたは記述子は[計算値の段階で無効](/ja/docs/Web/CSS/Guides/Syntax/Error_handling#無効なカスタムプロパティ)となります。

`env()` 置換が無効であり、無効な代替値が含まれている場合、または代替値が省略されている場合であっても、その宣言は無視されません。代わりに、プロパティの[初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)または[継承値](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)が使用されます。プロパティは新しい値に設定されますが、期待した値とは異なる場合があります。

### 使用例

元々は iOS ブラウザーで、開発者がコンテンツをビューポートの安全領域に配置し、端末の切り欠きや角丸によって隠れないように提供した機能です。`safe-area-inset-*` の値を使用することで、コンテンツが閲覧者に確実に表示されるよう保証できます。この機能は後に当初の目的を超えて拡張され、例えば[端末通知がアプリ UI の一部を覆い隠すのを防ぐ](#env_を使用して端末の_ui_がボタンに被らないようにする)といった用途での利用も可能になっています。

`env()` 変数の別の用途として、[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) があります。これらは[ウィンドウコントロールオーバーレイ](/ja/docs/Web/API/Window_Controls_Overlay_API)機能を利用し、アプリケーションウィンドウの全面積を活用します。開発者は [`titlebar-area-*` 値](#titlebar-area-x)を使用して、タイトルバーがあった位置に要素を配置し、[ウィンドウ制御ボタンによってコンテンツが隠されないようにする](#env_を使用して、デスクトップの_pwa_でウィンドウ制御ボタンがコンテンツに被らないようにする)ことができます。

`viewport-segment-*` 変数名を使用すると、開閉式や折りたたみ式などのマルチビューポートセグメント端末において、コンテナーを利用可能なセグメントにぴったり収まるように設定できます。`viewport-segment-*` 名の後に続く整数は、環境変数が参照する複数のセグメントのうちのどのセグメントかを示します。

### 後に整数が付いた名前

環境変数が配列のような形の場合、つまり名前が複数の値を指す可能性ががある場合（複数のビューポートセグメントを持つ端末など）、`<environment-variable>` 引数には変数名と、関数が参照する変数の特定のインスタンスのインデックスの両方を指定します。例えば、`viewport-segment-*` 変数の場合、変数名は `env()` 関数に、値を返すセグメントのインデックスを示す 2 つの整数と共に渡されます。これらの値はいずれも `0` 以上の整数です。最初の整数はセグメントの横方向のインデックスを表し（`0` が左端のセグメント）、2 番目の値はセグメントの縦方向のインデックスを表します（`0` が最下部のセグメント）。

![2 つの端末セグメントレイアウト。横方向のレイアウトでは、0 0 が最初のセグメント、1 0 が 2 番目のセグメントとなります。縦方向のレイアウトでは、インデックスは 0 0 と 0 1 となる。](env-var-indices.png)

- 横方向に並べたレイアウトでは、左側のセグメントは `0 0` で表され、右側のセグメントは `1 0` で表されます。
- 縦方向の上下レイアウトでは、上側のセグメントは `0 0` で表され、下側のセグメントは `0 1` で表されます。
- 2 つ以上のセグメントを持つ端末では、数値はより大きくなる場合があります。例えば、3 つの横方向セグメントを持つ端末では、中央セグメントが `1 0` で表され、右側セグメントが `2 0` で表されることがあります。

例えば、以下のコードは、セグメントが水平方向に配置された 2 セグメントの折りたたみ式端末において、右側セグメントの幅を返します。

```css
env(viewport-segment-width 1 0)
```

完全な動作デモについては、[ビューポートセグメント API のデモ](https://mdn.github.io/dom-examples/viewport-segments-api/)をご覧ください（[ソースコード](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)）。また、完全なデモの説明については[ビューポートセグメント API の使用方法](/ja/docs/Web/API/Viewport_segments_API/Using)もご確認ください。

## 形式文法

{{CSSSyntax}}

## 例

### env() を使用して端末の UI がボタンに被らないようにする

次の例では、 `env()` を使用して、固定アプリのツールバーのボタンが、画面の下部に表示される端末の通知によって隠れないようにしています。デスクトップでは、 `safe-area-inset-bottom` は `0` です。しかし、 iOS のような画面下部に通知を表示する端末では、通知を表示するためのスペースを残す値が含まれています。これを {{cssxref("padding-bottom")}} の値として使用することで、その端末で自然に見える隙間を作ることができます。

#### HTML

{{htmlelement("main")}} セクションには模擬アプリケーションが含まれており、{{htmlelement("footer")}} には 2 つの {{htmlelement("button")}} 要素が含まれています。

```html
<main>アプリのメインコンテンツはこちら</main>
<footer>
  <button>あっちへ行く</button>
  <button>こっちへ行く</button>
</footer>
```

#### CSS

[CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使用して、必要な高さだけになるフッターを作成します。一方、アプリケーションを含むメインセクションはビューポートの残りの領域を埋めます。

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font: 1em system-ui;
}

main {
  flex: 1;
  background-color: #eeeeee;
  padding: 1em;
}

footer {
  flex: none;
  display: flex;
  gap: 1em;
  justify-content: space-evenly;
  background: black;
}

button {
  padding: 1em;
  background: white;
  color: black;
  margin: 0;
  width: 100%;
  border: none;
  font: 1em system-ui;
}
```

フッターをビューポートの下部に固定するため、[`position: sticky`](/ja/docs/Web/CSS/Reference/Properties/position#sticky) を設定します。次に、 {{cssxref("padding")}} の一括指定を使用し、フッターにパディングを追加します。`safe-area-inset-bottom` 環境変数の値を指定し、下方向のパディングの初期値である `1em` に加えます。この変数の値が正の端末では、黒い領域がより大きく表示され、フッター内のボタンが隠れないようにします。

```css
footer {
  position: sticky;
  bottom: 0;

  padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
}
```

#### 結果

{{EmbedLiveSample("Using_env_to_ensure_buttons_are_not_obscured_by_device_UI", "200px", "500px")}}

### 代替値の使用

以下の例では、 `env()` の第二引数を使用して、環境変数が利用できなかった場合の代替値を提供しています。

#### HTML

テキストの段落を設定します。

```html-nolint
<p>
  お使いのブラウザーが <code>env()</code> 関数に対応している場合、この段落のテキストと左の境界の間に 50px のパディングが設定されますが、上、右、下には設定されません。これは、他の CSS プロパティとは異なり、ユーザーエージェントプロパティ名は大文字と小文字が区別されるため、 <code>padding: 0 0 0 50px</code> と同等の CSS になるからです。
</p>
```

#### CSS

{{cssxref("width")}} を `300px` に設定し、{{cssxref("border")}} を設定します。次に、{{cssxref("padding")}} を追加し、各辺のパディングサイズに対する代替値を指定した `env()` 関数で指定します。左側のパディングに意図的に無効な値を設定しました（環境変数名は大文字小文字を区別することを思い出してください）。これにより、代替値の動作を実証しています。

```css
p {
  width: 300px;
  border: 2px solid red;
  padding: env(safe-area-inset-top, 50px) env(safe-area-inset-right, 50px)
    env(safe-area-inset-bottom, 50px) env(SAFE-AREA-INSET-LEFT, 50px);
}
```

#### 結果

{{EmbedLiveSample("Using_the_fallback_value", "350px", "250px")}}

### env() を使用して、デスクトップの PWA でウィンドウ制御ボタンがコンテンツに被らないようにする

次の例では、`env()` を使用して、デスクトップ向けプログレッシブウェブアプリで表示されるコンテンツが、[ウィンドウコントロールオーバーレイ API](/ja/docs/Web/API/Window_Controls_Overlay_API) を使用した場合、オペレーティングシステムのウィンドウ制御ボタンによって隠されないようにします。`titlebar-area-*` の値は、通常タイトルバーが表示されていたであろう矩形を定義します。モバイル端末など、ウィンドウコントロールオーバーレイ機能に対応していない端末では、代替値が使用されます。

デスクトップ端末にインストールされた PWA は、通常次のように表示されます。

![デスクトップにインストールされた PWA が通常どのように見えるかを示す図。ウィンドウの操作ボタンとタイトルバー、その下にウェブコンテンツが表示される。](desktop-pwa-window.png)

ウィンドウコントロールオーバーレイ機能では、ウェブコンテンツがアプリのウィンドウ表面全体を覆い、ウィンドウ制御ボタンや PWA ボタンがオーバーレイ表示されます。

![デスクトップにインストールされた PWA がウィンドウコントロールオーバーレイ機能により、ウィンドウ制御ボタン、タイトルバーなし、ウィンドウ全体に広がるウェブコンテンツがどのように見えるかの図](desktop-pwa-window-wco.png)

```html
<header>ここにアプリのタイトルが入る</header>
<main>ここにアプリのメインコンテンツが入る</main>
```

```css
header {
  position: fixed;
  left: env(titlebar-area-x);
  top: env(titlebar-area-y);
  width: env(titlebar-area-width);
  height: env(titlebar-area-height);
}

main {
  margin-top: env(titlebar-area-height);
}
```

> [!NOTE]
> `position:fixed` を使用することで、ヘッダーが他のコンテンツと共にスクロールせず、代わりにウィンドウの制御ボタンと位置を揃えたまま表示されます。これは、弾性オーバースクロール（ラバーバンディングとも呼ばれる）を搭載した端末やブラウザーでも同様です。

### ビューポートセグメント

[ビューポートセグメント API のデモ](https://mdn.github.io/dom-examples/viewport-segments-api/)および[ビューポートセグメント API の使用](/ja/docs/Web/API/Viewport_segments_API/Using)ガイドでは、`env()` 関数と `viewport-segments-*` 環境変数の使用方法について、実演と解説を提供しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [環境変数の使用](/ja/docs/Web/CSS/Guides/Environment_variables/Using)
- [CSS 環境変数](/ja/docs/Web/CSS/Guides/Environment_variables)モジュール
- {{CSSxRef("var")}}
- [CSS カスタムプロパティと変数のカスケード](/ja/docs/Web/CSS/Guides/Cascading_variables)
- [カスタムプロパティ (--\*)](/ja/docs/Web/CSS/Reference/Properties/--*)
- [CSS カスタムプロパティ (変数) の使用](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [Customize the window controls overlay of your PWA's title bar](https://web.dev/articles/window-controls-overlay)
- [Display content in the title bar](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
