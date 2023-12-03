---
title: <system-color>
slug: Web/CSS/system-color
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{CSSRef}}

**`<system-color>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、ウェブページの様々な部分に通常使用する既定の色を反映します。

しかし、ユーザーエージェントは強制色モードと呼ばれるアクセシビリティ機能を提供することができ、このモードでは色はユーザーとユーザーエージェントが定義したパレットに制限され、特定のプロパティで作者が選択した色を上書きします。強制色モードでは、 `<system-color>` は選択された色を公開するので、ページの残りの部分はそれらと統合することができます。強制色モードの例としては、 [Windows の高コントラストモード](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)があります。

強制色モードでは、作者は `<system-color>` 型の色を、色がオーバーライドされるプロパティの設定にはないすべてのプロパティに使用するべきです。これにより、ページがすべてのプロパティで一貫して同じ色パレットを使用することを保証します。

作者は [`forced-colors`](/ja/docs/Web/CSS/@media/forced-colors) メディア特性を使用して、強制色モードを検出することができます。

`<system-color>` 値は、 [`<color>`](/ja/docs/Web/CSS/color_value) を使用できる場所であればどこでも使用することができます。

## 構文

これらのキーワードは大文字と小文字を区別しませんが、ここでは読み取り可能なように大文字と小文字を混合して掲載しています。

- `AccentColor`
  - : アクセント付きユーザーインターフェイスコントロールの背景
- `AccentColorText`
  - : アクセント付きユーザーインターフェイスコントロールのテキスト
- `ActiveText`
  - : アクティブリンクのテキスト
- `ButtonBorder`
  - : コントロールのベース境界色
- `ButtonFace`
  - : コントロールの背景色
- `ButtonText`
  - : コントロールのテキスト色
- `Canvas`
  - : アプリケーションのコンテンツや文書の背景
- `CanvasText`
  - : アプリケーションのコンテンツや文書のテキスト色
- `Field`
  - : 入力フィールドの背景
- `FieldText`
  - : 入力フィールドのテキスト
- `GrayText`
  - : 無効なアイテムの文字色（無効なコントロールなど）
- `Highlight`
  - : 選択項目の背景
- `HighlightText`
  - : 選択項目のテキスト色
- `LinkText`
  - : 非アクティブ、未訪問リンクのテキスト
- `Mark`
  - : 特別にマークされたテキストの背景（HTML の `mark` 要素など）。
- `MarkText`
  - : 特別にマークされたテキスト（HTML の `mark` 要素など）。
- `VisitedText`
  - : 訪問済みリンクのテキスト

### 非推奨のシステム色キーワード

以下のキーワードは、以前のバージョンの CSS カラーモジュールで定義されていました。これらを公開ウェブページで使用することは非推奨です。

- `ActiveBorder` {{deprecated_inline}}
  - : アクティブウィンドウの境界線。
- `ActiveCaption` {{deprecated_inline}}
  - : アクティブウィンドウのキャプション。前景色としては `CaptionText` を使用してください。
- `AppWorkspace` {{deprecated_inline}}
  - : 複数文書インターフェイスの背景色。
- `Background` {{deprecated_inline}}
  - : デスクトップの背景。
- `ButtonHighlight` {{deprecated_inline}}
  - : 境界線のレイヤーによって立体的に現れる 3D 要素の、光源に面する境界線の色。
- `ButtonShadow` {{deprecated_inline}}
  - : 境界線のレイヤーによって立体的に現れる 3D 要素の、光源から離れた境界線の色。
- `CaptionText` {{deprecated_inline}}
  - : キャプション、サイズボックス、スクロールバーの矢印ボックスのテキスト。 `ActiveCaption` の背景色と一緒に使用してください。
- `InactiveBorder` {{deprecated_inline}}
  - : 非アクティブウィンドウの境界線。
- `InactiveCaption` {{deprecated_inline}}
  - : 非アクティブウィンドウのキャプション。 `InactiveCaptionText` の前景色と一緒に使用してください。
- `InactiveCaptionText` {{deprecated_inline}}
  - : 非アクティブキャプションのテキストの色。 `InactiveCaption` の背景色と一緒に使用してください。
- `InfoBackground` {{deprecated_inline}}
  - : ツールチップコントロールの背景色。 `InfoText` の前景色と一緒に使用してください。
- `InfoText` {{deprecated_inline}}
  - : ツールチップコントロールの文字色。 `InfoBackground` の背景色と一緒に使用してください。
- `Menu` {{deprecated_inline}}
  - : メニューの背景。 `MenuText` または `-moz-MenuBarText` の前景色と一緒に使用してください。
- `MenuText` {{deprecated_inline}}
  - : メニューのテキスト。 `Menu` の背景色と一緒に使用してください。
- `Scrollbar` {{deprecated_inline}}
  - : スクロールバーの背景色です。
- `ThreeDDarkShadow` {{deprecated_inline}}
  - : 境界線が同心円状に 2 層になっているために立体的に現れる 3D 要素の、光源から離れた 2 つの境界線のうち、暗い方（一般に外側）の色。
- `ThreeDFace` {{deprecated_inline}}
  - : 境界線が同心円状に 2 層になっているために立体的に現れる 3D 要素の表面の背景色。 `ButtonText` の前景色と一緒に使用してください。
- `ThreeDHighlight` {{deprecated_inline}}
  - : 境界線が同心円状に 2 層になっているために立体的に現れる 3D 要素の、光源に面する 2 つの境界線のうち、明るい方（一般に外側）の色。
- `ThreeDLightShadow` {{deprecated_inline}}
  - : 境界線が同心円状に 2 層になっているために立体的に現れる 3D 要素の、光源に面する 2 つの境界線のうち暗い方（一般に内側）の色。
- `ThreeDShadow` {{deprecated_inline}}
  - : 境界線が同心円状に 2 層になっているために立体的に現れる 3D 要素の、光源から離れた 2 つの境界線のうち、明るい方（一般に内側）の色。
- `Window` {{deprecated_inline}}
  - : ウィンドウの背景です。 `WindowText` の前景色と一緒に使用してください。
- `WindowFrame` {{deprecated_inline}}
  - : ウィンドウの枠です。
- `WindowText` {{deprecated_inline}}
  - : ウィンドウ内のテキストです。ウィンドウの背景色 `Window` と共に使用してください。

## 例

### システムカラーの使用

この例では、通常 {{cssxref("box-shadow")}} プロパティを使ってコントラストを取得するボタンがあります。強制色モードでは、 `box-shadow` は強制的に `none` になるので、この例では `forced-colors` メディア特性を使用して、適切な色（この用途では `ButtonBorder`）の境界線が確実に表示されるようにします。

#### HTML

```html
<button class="button">押してください</button>
```

#### CSS

```css
.button {
  border: 0;
  padding: 10px;
  box-shadow:
    -2px -2px 5px gray,
    2px 2px 5px gray;
}

@media (forced-colors: active) {
  .button {
    /* forced-colors モードでは box-shadow は強制的に 'none' になるので、
    代わりに境界を使用します。 */
    border: 2px ButtonBorder solid;
  }
}
```

#### 結果

{{EmbedLiveSample("Using system colors")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<color>`](/ja/docs/Web/CSS/color_value): これらのキーワードが所属する先のデータ型
