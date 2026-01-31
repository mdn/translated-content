---
title: 環境変数の使用
slug: Web/CSS/Guides/Environment_variables/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[CSS 環境変数モジュール](/ja/docs/Web/CSS/Guides/Environment_variables) では、CSS に環境変数の概念を導入し、環境変数を使用できるようにする {{cssxref("env")}} 関数を定義しています。このガイドでは、[環境変数とは何か](#環境変数とは何か)、[ブラウザー定義の環境変数](#ブラウザー定義の環境変数)、[`env()` 関数](#env_関数)を使った[環境変数の使い方](#環境変数と_env_の使用例) について見ていきます。

## 環境変数とは何か

CSS環境変数はグローバル変数であり、文書全体にスコープが適用されます。これらはユーザーエージェントによって定義されます。環境変数は、ブラウザーやオペレーティングシステムが提供する特別な値であり、スタイルをユーザーの端末や コンテキストに適応させるのに役立ちます。これらは　`env()`　関数を使用してアクセスします。

環境変数は、[カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)や {{cssxref("var()")}} 関数と同様に機能しますが、グローバルに定義されスコープが設定されます。これは、要素単位でスコープが設定されるカスタムプロパティとは異なり、常に文書全体がスコープとなるということです。さらに、カスタムプロパティは変更可能であるのに対し、環境変数は読み取り専用です。

カスタムプロパティと同様に、環境変数は大文字小文字を区別します。宣言の外では使用できないカスタムプロパティとは異なり、`env()` 関数はプロパティ値の任意の部分、または記述子の任意の部分（[メディアクエリールール](/ja/docs/Web/CSS/Reference/At-rules/@media)内など）で使用することができます。

### 歴史

Apple が最初に iOS の Safari ブラウザーに環境変数を導入したのは、開発者がノッチや曲面エッジなど不定形の端末画面向けにレイアウトを最適化できるようにするためでした。オリジナルの `safe-area-inset-*` 環境変数により、開発者はユーザーが使用する端末やブラウザーに関係なく、コンテンツをビューポートの安全領域内に配置できます。

### 用途

環境変数を使用することで解決できる一般的な問題には、以下のようなものがあります。

- 端末の通知がアプリのユーザーインターフェイスの一部を覆い隠す。
- 動的キーボードの表示・非表示時のビューポートサイズ変更の処理。
- [プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) がインストールされた後、タイトルバーがあった位置に要素を配置し、コンテンツがウィンドウ制御ボタンと干渉しないようにすること。これは特にデスクトップブラウザーで問題となります。

## ブラウザー定義の環境変数

CSS 環境変数の仕様書では、大文字小文字を区別するいくつかの変数が定義されています。これには以下のようなものがあります。

- `preferred-text-scale`
  - : `preferred-text-scale` 環境変数は、ユーザーの好みのテキスト拡大率を表します。これは、オペレーティングシステムまたはユーザーエージェントの「デフォルト」フォントサイズに対して行われる調整です。{{cssxref("text-size-adjust")}} が有効な端末や ブラウザーでは、これは `text-size-adjust: auto` によって適用される倍率です。例えば、`text-size-adjust: auto` がテキストサイズを 2 倍にする場合、`env(preferred-text-scale)` は `2` と解決されます。

- `safe-area-inset-*`
  - : 4 つの安全領域インセット環境変数、`safe-area-inset-top`、`safe-area-inset-right`、`safe-area-inset-bottom`、`safe-area-inset-left` は、ビューポートの端からの上部、右側、下部、左側のインセットによって長方形の安全領域を定義します。この領域内にコンテンツを配置すれば、矩形以外のディスプレイ形状によってコンテンツが切断される心配がありません。通常のデスクトップやノートパソコンのモニターなど、矩形で障害物のないビューポートの場合、これら 4 つの値はすべて `0` になります。矩形ではないディスプレイ（フルサイズの画面を持つ角丸の端末や、角丸または[円形ディスプレイ](/ja/docs/Web/CSS/Guides/Round_display)のスマートウォッチなど）では、ユーザーエージェントによって設定されるこれら 4 つの値が、矩形内のすべてのコンテンツが可視かつ遮られないように矩形を形成します。

- `safe-area-max-inset-*`
  - : 4 つの安全領域最大インセット環境変数、`safe-area-max-inset-top`、`safe-area-max-inset-right`、`safe-area-max-inset-bottom`、`safe-area-max-inset-left` はそれぞれ、対応する動的変数 `safe-area-inset-*` の静的な最大値を表します。これらは、すべての動的なユーザーインターフェイス機能が収納された状態における `safe-area-inset-*` 対応変数の最大値を示します。例えば、一部のプラットフォームでは上下スクロール時にボタンバーが表示され、`safe-area-inset-*` の値が変化する場合があります。`safe-area-inset-*` の値は現在表示されているコンテンツ領域の変化に応じて変化しますが、`safe-area-max-inset-*` の値は常に一定です。

- `viewport-segment-*`
  - : これらの変数は、折りたたみ式スマートフォンなど、複数の部分を持つ端末にのみ関連します。`viewport-segment-bottom`、`viewport-segment-left`、`viewport-segment-right`、`viewport-segment-top` 変数、および `viewport-segment-height` と `viewport-segment-width` は、ビューポートの論理的に分離された領域の位置と寸法を定義します。これらの変数は、ビューポートが少なくとも 2 つのセグメントに分割されている場合にのみ定義されます。これらは、複数セグメント端末の異なるセグメントに UI の異なる部分を適切に配置し、折り畳み部分でコンテンツが切断されるのを防ぐために使用されます。

その他の仕様書で、追加の環境変数が定義されています。

[ウィンドウコントロールオーバーレイ API](/ja/docs/Web/API/Window_Controls_Overlay_API) は、デスクトップ端末にインストールされたプログレッシブウェブアプリケーション (PWA) におけるタイトルバー領域の形状に関する情報を公開する {{domxref("WindowControlsOverlay")}} インターフェイスを定義します。`window-controls-overlay` の [display_override](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) 値を使用する場合、以下の環境変数が定義されます。

- `titlebar-area-*`
  - : `titlebar-area-x`、`titlebar-area-y`、`titlebar-area-width`、`titlebar-area-height` 変数は、デスクトップ環境で実行されるインストール済みウェブアプリケーションにおいて、通常タイトルバーが占有する領域を定義します。`titlebar-area-*` 変数を使用することで、コンテンツがウィンドウ制御ボタン（最小化、最大化、閉じる）と重ならないようにすることができます。

- `keyboard-inset-*`
  - : `keyboard-inset-top`、`keyboard-inset-right`、`keyboard-inset-bottom`、`keyboard-inset-left`、`keyboard-inset-width`、`keyboard-inset-height` 変数は、画面上の仮想キーボードの位置とサイズ、具体的にはビューポートの端からの上部、右側、下部、左側のインセットに関する情報を提供します （幅と高さのインセットは他のインセットから計算されます）。詳細は{{domxref("VirtualKeyboard API", "仮想キーボード API", "", "nocode")}} を参照してください。

これまでの変数名にはすべて、left, right, top, bottom, height, width といった物理的な用語が含まれていることに気づいたかもしれません。これらの変数名は表示されるウェブサイトではなく、端末ハードウェアの物理的特性を指しているため、論理的な対応関係は必要ありません。

## `env()` 関数

{{cssxref("env")}} 関数は、環境変数の値を CSS のコンテキストに挿入するために使用されます。`env()` 関数は、任意の要素の任意のプロパティにおける値の任意の部分、または任意のアットルールの記述子における値の任意の部分（カスタムプロパティ値内を含む）の代わりに使用できます。CSS 値が許可される場所であればどこでも使用可能です。

基本的な構文は次の通りです。

```css-nolint
env( <environment-variable-name> )
env( <environment-variable-name>, <fallback-value> )
```

この関数は、大文字小文字を区別する[環境変数名](#ブラウザー定義の環境変数)と、オプションではあるが一般的に推奨される代替値を受け取ります。

```css
line-height: env(preferred-text-scale, 2);
margin: env(safe-area-inset-top, 0) env(safe-area-inset-right, auto)
  env(safe-area-inset-bottom, 3em) env(safe-area-inset-left, auto);
```

最初の引数は置換対象の[環境変数名](#ブラウザー定義の環境変数)です。カンマの後に指定された引数は代替値であり、最初の引数で参照された環境変数が存在しない場合に使用されます。これらの例では、ブラウザーに `preferred-text-scale` 環境変数が存在しない場合、{{cssxref("line-height")}} は `2` に設定されます。また、ブラウザーに `safe-area-inset-*` の値がない場合、{{cssxref("margin")}} は `margin: 0 auto 3em auto` に設定されます。

代替値の構文はカスタムプロパティの構文と同様に、複数のカンマが使用可能です。最初のカンマから関数の終わりまでの部分はすべて代替値と見なされます。ただし、プロパティ値または記述子がカンマに非対応の場合、その値は無効となります。

プロパティまたは記述子が構文的に有効な `env()` 関数を含む場合、構文解析時に有効であるとみなされます。構文チェックは、`env()` 関数がブラウザが提供する値に置換された後の計算時にのみ行われます。最初の引数として渡された環境変数が認識されない環境変数名である場合、代替値が使用されます。代替値は別の環境変数でもよく、その変数自体に代替値が設定されていても構いません。代替値が提供されていない場合、`env()` 関数を含むプロパティまたは記述子は計算時において無効となります。

## 環境変数と `env()` の使用例

環境変数を使用することで、固定アプリツールバーが端末下部に表示される通知によって隠れないようにできます。画面下部に通知を表示する端末では、ユーザーエージェントが `safe-area-inset-bottom` 環境変数の値を、ビューポートを遮る要素の上端からビューポート下端までの距離に設定します。この例では、表示されている通知の高さになる可能性が高いです。長方形のデスクトップモニターでは、`safe-area-inset-bottom`は通常`0`です。この値を利用して、コンテンツを隠さずに通知を表示するための空間をビューポート下部に確保します。

この {{htmlelement("body")}} には 2 つの子があります。 {{htmlelement("main")}} {{htmlelement("footer")}} ツールバー以外のアプリケーション全体が含まれています。

```html
<body>
  <main>アプリケーション</main>
  <footer>ツールバー</footer>
</body>
```

`<body>` は、ビューポートの高さを埋めるフレックスコンテナーとして定義されます。`<main>` アプリケーションは、その兄弟要素である `<footer>` が占有していない空間を埋めるために拡大することが許可されています。

```css
body {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
}

main {
  flex: 1;
  padding: 1em;
  overflow-y: auto;
}
```

`<footer>` はビューポートの下部に固定されるように配置されます。`position: sticky` 宣言は、`<body>`（スクロール可能な祖先要素かつ [包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)）を基準に、{{cssxref("bottom")}} の値 `0` に基づいて要素をオフセットします。`<footer>` に四辺すべてに `1em` の {{cssxref("padding")}} 値を設定します。その後、下方向のパディング `1em` に `safe-area-inset-bottom` の値を追加し、代替として `1em` を指定します。

```css
footer {
  position: sticky;
  bottom: 0;
  padding: 1em;
  padding-bottom: calc(1em + env(safe-area-inset-bottom, 1em));
}
```

簡潔にするため、追加の CSS は非表示にしています。

```css hidden
main {
  background-color: palegoldenrod;
}
footer {
  background-color: black;
  color: white;
  border-top: 1px solid white;
  display: flex;
  justify-content: space-between;
}

footer::before,
footer::after {
  content: "Button" / "Fake button";
  padding: 3px 0.5em;
  background: white;
  color: black;
  border-radius: 3px;
}
```

フッターの下部パディングは、`safe-area-inset-bottom` 環境変数の値が `0` より大きい端末では `1em` を超えて拡張されます。この CSS は、通知や画面のノッチ、端末の角が正方形でない場合など、必要に応じてフッターを拡大するための余分なパディングを提供します。

{{EmbedLiveSample("Using environment variables with env example", "200", "500")}}

将来的に、開発者定義の環境変数への対応が実現される可能性がありますが、現時点ではまだ定義も実装もされていません。

## 関連情報

- {{cssxref("var")}}
- [`@media` `shape` 記述子](/ja/docs/Web/CSS/Reference/At-rules/@media/shape)
- [CSS 環境変数](/ja/docs/Web/CSS/Guides/Environment_variables)モジュール
- [CSS round display](/ja/docs/Web/CSS/Guides/Round_display)モジュール
- [CSS カスケード変数のための CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables)モジュール
