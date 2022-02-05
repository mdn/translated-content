---
title: env()
slug: Web/CSS/env()
tags:
  - CSS
  - CSS 変数
  - CSS 関数
  - Draft
  - 関数
  - リファレンス
  - 変数
  - env
  - env()
browser-compat: css.properties.custom-property.env
translation_of: Web/CSS/env()
---
{{CSSRef}}

**`env()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、ユーザーエージェントが定義した環境変数の値を、 {{cssxref("var()")}} 関数や[カスタムプロパティ](/ja/docs/Web/CSS/--*)と同じ方法で CSS に挿入するために使用することができます。異なる点は、ユーザーが定義しているのではなくユーザーエージェントが定義しているものであること、カスタムプロパティは宣言されている要素のスコープであるのに対し、環境変数は文書でグローバルなスコープであることです。

加えて、宣言の外部で使用することができないカスタムプロパティとは異なり、 `env()` 関数はプロパティ値の任意の部分、記述子の任意の部分 (例 [メディアクエリールール](/ja/docs/Web/CSS/@media)) で使用することができます。仕様書が発展すると、セレクターなどの他の場所でも使用することができるかもしれません。

もともとは iOS ブラウザーで、開発者が内容物をビューポートの安全な領域に配置できるように提供されていたもので、仕様で定義されている `safe-area-inset-*` の値を使用することで、矩形以外の画面を使用している閲覧者でも、内容物が見えることを保証するのに役立ちます。

例えば、 `env()` によって解決される一般的な問題として、端末の通知がアプリのユーザーインターフェースの一部を覆ってしまうというものがあります。 `env()` を使って固定要素を配置することで、ビューポートの安全な領域に確実に表示させることができます。

`env()` 変数のもう一つの使用例は、アプリケーションのウィンドウの表面積をフルに活用するために、ウィンドウ制御オーバーレイ機能を使用するデスクトップの[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) のためのものです。 `titlebar-area-*` 値を使用すると、タイトルバーがあったであろう場所に要素を配置し、内容物がウィンドウ制御ボタンにかからないようにすることができます。

## 構文

```css
/* 代替値なしで 4 つの安全な矩形までの寸法値を使用 */
env(safe-area-inset-top);
env(safe-area-inset-right);
env(safe-area-inset-bottom);
env(safe-area-inset-left);

/* 代替値付きで使用 */
env(safe-area-inset-top, 20px);
env(safe-area-inset-right, 1em);
env(safe-area-inset-bottom, 0.5vh);
env(safe-area-inset-left, 1.4rem);
```

### 値

- `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
  - : `safe-area-inset-*` の値は 4 つの環境変数から成り、矩形ではない画面において、ビューポートの縁から、内容物を置いても切り取られる危険がない安全な矩形までの寸法を、上、右、下、左で定義します。一般的なノートパソコンのモニターなどの矩形のビューポートでは、これらの値はゼロに等しくなります。矩形ではない画面 — 例えば円い腕時計の画面 — では、矩形の中のすべての内容物が表示できるような矩形から、ユーザーエージェントが設定します。
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : `titlebar-area-*` 変数は、デスクトップ端末にインストールされた PWA に有用です。デスクトップの PWA が `window-controls-overlay` で [display_override](/ja/docs/Web/Manifest/display_override) の値を使用すると、 `titlebar-area-*` 変数を使用して内容物がウィンドウの制御ボタン（すなわち、最小化、最大化、閉じるボタン）に重ならないようにすることができます。

**注**: ほかの CSS プロパティとは異なり、ユーザーエージェントの定義するプロパティ名は大文字・小文字が区別されます。

### 形式文法

{{CSSSyntax}}

## 使用方法

ブラウザーに画面上の利用可能な範囲全体を使用するように指示し、 `env()` 変数を使用できるようにするには、新しいビューポートのメタ値を追加する必要があります。

```html
<meta name="viewport" content="viewport-fit=cover" />
```

You can then use `env()` in your CSS:

```css
body {
  padding:
    env(safe-area-inset-top, 20px)
    env(safe-area-inset-right, 20px)
    env(safe-area-inset-bottom, 20px)
    env(safe-area-inset-left, 20px);
}
```

## 例

### env() を使用して端末の UI がボタンに被らないようにする

次の例では、 `env()` を使用して、固定アプリのツールバーのボタンが、画面の下部に表示される端末の通知によって隠れないようにしています。デスクトップでは、 `safe-area-inset-bottom` は `0` です。しかし、 iOS のような画面下部に通知を表示する端末では、通知を表示するためのスペースを残す値が含まれています。これを {{cssxref("padding-bottom")}} の値として使用することで、その端末で自然に見える隙間を作ることができます。

```html
<main>アプリのメイン内容物はこちらです。</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font: 1em system-ui;
}

main {
  flex: 1;
  background-color: #eee;
  padding: 1em;
}

footer {
  flex: none;
  display: flex;
  gap: 1em;
  justify-content: space-evenly;
  background: black;
  padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
  /* safe-area-inset-bottom の値を最初の 1em のパディングに追加します。
  この変数が正の値であるデバイスでは、より大きな黒い領域が表示されます。 */
  position: sticky;
  bottom: 0;
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

{{EmbedLiveSample("Using_env_to_ensure_buttons_are_not_obscured_by_device_UI", "200px", "500px")}}

### 代替値の仕様

以下の例では、 `env()` の第 2 引数を使用して、環境変数が利用できなかった場合の代替値を提供しています。

```html
<p>
  お使いのブラウザーが <code>env()</code> 関数に対応している場合、
  この段落のテキストと左の境界の間に 50px のパディングが設定されますが、
  上、右、下には設定されません。
  これは、他の CSS プロパティとは異なり、ユーザーエージェントプロパティ名は
  大文字・小文字が区別されるため、 <code>padding: 0 0 0 50px</code>
  と同等の CSS になるからです。
</p>
```

```css
p {
  width: 300px;
  border: 2px solid red;
  padding:
    env(safe-area-inset-top, 50px)
    env(safe-area-inset-right, 50px)
    env(safe-area-inset-bottom, 50px)
    env(SAFE-AREA-INSET-LEFT, 50px);
}
```

{{EmbedLiveSample("Using_the_fallback_value", "350px", "250px")}}

### 値の例

```css
padding: env(safe-area-inset-bottom, 50px); /* 画面が矩形のユーザーエージェントではゼロ */
padding: env(Safe-area-inset-bottom, 50px); /* UA プロパティは大文字・小文字を区別するため 50px */
padding: env(x, 50px 20px); /* x が妥当な環境変数でなければ padding: '50px 20px' が設定される */
padding: env(x, 50px, 20px); /* x が妥当な環境変数でなく、 '50px, 20px' が妥当なパディング値でないため無視 */
```

代替値の構文は、カスタムプロパティの場合と同様、カンマが許容されます。ただし、プロパティ値がカンマに対応していない場合、値は妥当ではなくなります。

**注**: ユーザーエージェントプロパティは [all](/ja/docs/Web/CSS/all) プロパティでリセットされません。

### env() を使用して、デスクトップの PWA でウィンドウ制御ボタンが内容物に被らないようにする

次の例では、ウィンドウ制御オーバーレイ機能を使用する PWA で表示される内容物が、オペレーティングシステムのウィンドウ制御ボタンで隠れないようにするために `env()` を使用しています。 `titlebar-area-*` の値は、通常タイトルバーが表示されていたであろう矩形を定義します。モバイル端末など、ウィンドウ制御オーバーレイ機能に対応していない端末では、代替値が使用されます。

デスクトップ端末にインストールされた PWA は、通常次のように表示されます。

![デスクトップにインストールされた PWA が通常どのように見えるかを示す図。ウィンドウの操作ボタンとタイトルバー、その下にウェブコンテンツが表示される。](desktop-pwa-window.png)

ウィンドウ制御オーバーレイ機能では、ウェブコンテンツがアプリのウィンドウ表面全体を覆い、ウィンドウ制御ボタンや PWA ボタンがオーバーレイ表示されます。

![デスクトップにインストールされた PWA がウィンドウ制御オーバーレイ機能により、ウィンドウ制御ボタン、タイトルバーなし、ウィンドウ全体に広がるウェブコンテンツがどのように見えるかの図](desktop-pwa-window-wco.png)

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("var()", "var(…)")}}
- [CSS カスタムプロパティと変数のカスケード](/ja/docs/Web/CSS/CSS_Variables)
- [カスタムプロパティ (--\*)](/ja/docs/Web/CSS/--*)
- [CSS カスタムプロパティ (変数) の使用](/ja/docs/Web/CSS/Using_CSS_custom_properties)
- {{CSSxRef("@viewport", "viewport-fit (@viewport)")}}
- [Customize the window controls overlay of your PWA's title bar](https://web.dev/window-controls-overlay/)
- [Display content in the title bar](https://docs.microsoft.com/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
