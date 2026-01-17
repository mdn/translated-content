---
title: <system-color>
slug: Web/CSS/Reference/Values/system-color
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`<system-color>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、ウェブページの様々な部分に通常使用する既定の色を反映します。

しかし、ユーザーエージェントは強制色モードと呼ばれるアクセシビリティ機能を提供することができ、このモードでは色はユーザーとユーザーエージェントが定義したパレットに制限され、特定のプロパティで作者が選択した色を上書きします。強制色モードでは、 `<system-color>` は選択された色を公開するので、ページの残りの部分はそれらと統合することができます。強制色モードの例としては、 [Windows の高コントラストモード](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)があります。

強制色モードでは、作者は `<system-color>` 型の色を、色がオーバーライドされるプロパティの設定にはないすべてのプロパティに使用するべきです。これにより、ページがすべてのプロパティで一貫して同じ色パレットを使用することを保証します。

作者は [`forced-colors`](/ja/docs/Web/CSS/Reference/At-rules/@media/forced-colors) メディア特性を使用して、強制色モードを検出することができます。

`<system-color>` 値は、 [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) を使用できる場所であればどこでも使用することができます。

## 構文

これらのキーワードは大文字と小文字を区別しませんが、ここでは読み取り可能なように大文字と小文字を混合して掲載しています。

設定に応じて、表に表示されるサンプルカラーは変化する場合があります。また、さまざまなブラウザー、オペレーティングシステム、システム設定でこのページを表示すると、違いを調べることができます。

<table>
  <thead>
    <tr>
      <th>キーワード</th>
      <th>説明</th>
      <th>サンプル</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>AccentColor</code></td>
      <td>アクセント付きユーザーインターフェイスコントロールの背景です。</td>
      <td style="background-color: AccentColor;"></td>
    </tr>
    <tr>
      <td><code>AccentColorText</code></td>
      <td>アクセント付きユーザーインターフェイスコントロールのテキストです。</td>
      <td style="background-color: AccentColorText;"></td>
    </tr>
    <tr>
      <td><code>ActiveText</code></td>
      <td>アクティブリンクのテキストです。</td>
      <td style="background-color: ActiveText;"></td>
    </tr>
    <tr>
      <td><code>ButtonBorder</code></td>
      <td>コントロールのベース境界色です。</td>
      <td style="background-color: ButtonBorder;"></td>
    </tr>
    <tr>
      <td><code>ButtonFace</code></td>
      <td>コントロールの背景色です。</td>
      <td style="background-color: ButtonFace;"></td>
    </tr>
    <tr>
      <td><code>ButtonText</code></td>
      <td>コントロールのテキスト色です。</td>
      <td style="background-color: ButtonText;"></td>
    </tr>
    <tr>
      <td><code>Canvas</code></td>
      <td>アプリケーションのコンテンツや文書の背景です。</td>
      <td style="background-color: Canvas;"></td>
    </tr>
    <tr>
      <td><code>CanvasText</code></td>
      <td>アプリケーションのコンテンツや文書のテキスト色です。</td>
      <td style="background-color: CanvasText;"></td>
    </tr>
    <tr>
      <td><code>Field</code></td>
      <td>入力フィールドの背景です。</td>
      <td style="background-color: Field;"></td>
    </tr>
    <tr>
      <td><code>FieldText</code></td>
      <td>入力フィールドのテキストです。</td>
      <td style="background-color: FieldText;"></td>
    </tr>
    <tr>
      <td><code>GrayText</code></td>
      <td>無効なアイテム（無効なコントロールなど）の文字色です。</td>
      <td style="background-color: GrayText;"></td>
    </tr>
    <tr>
      <td><code>Highlight</code></td>
      <td>選択中のアイテムの背景です。</td>
      <td style="background-color: Highlight;"></td>
    </tr>
    <tr>
      <td><code>HighlightText</code></td>
      <td>選択中のアイテムのテキスト色です。</td>
      <td style="background-color: HighlightText;"></td>
    </tr>
    <tr>
      <td><code>LinkText</code></td>
      <td>非アクティブ、未訪問リンクのテキストです。</td>
      <td style="background-color: LinkText;"></td>
    </tr>
    <tr>
      <td><code>Mark</code></td>
      <td>特別にマークされたテキストの背景（HTML の <code>mark</code> 要素など）です。</td>
      <td style="background-color: Mark;"></td>
    </tr>
    <tr>
      <td><code>MarkText</code></td>
      <td>特別にマークされたテキスト（HTML の <code>mark</code> 要素など）です。</td>
      <td style="background-color: MarkText;"></td>
    </tr>
    <tr>
      <td><code>SelectedItem</code></td>
      <td>選択されたアイテム（選択されたチェックボックスなど）の背景です。</td>
      <td style="background-color: SelectedItem;"></td>
    </tr>
    <tr>
      <td><code>SelectedItemText</code></td>
      <td>選択されたアイテムのテキストです。</td>
      <td style="background-color: SelectedItemText;"></td>
    </tr>
    <tr>
      <td><code>VisitedText</code></td>
      <td>訪問済みリンクのテキストです。</td>
      <td style="background-color: VisitedText;"></td>
    </tr>
  </tbody>
</table>

### 非推奨のシステム色キーワード

以下のキーワードは、以前のバージョンの CSS カラーモジュールで定義されていました。これらを公開ウェブページで使用することは非推奨になりました。

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

<table>
  <thead>
    <tr>
      <th>キーワード</th>
      <th>説明</th>
      <th>置き換え</th>
      <th>サンプル</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ActiveBorder</code></td>
      <td>アクティブウィンドウの境界線。</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ActiveBorder;"></td>
    </tr>
    <tr>
      <td><code>ActiveCaption</code></td>
      <td>アクティブウィンドウのキャプション。前景色としては <code>CaptionText</code> を使用してください。</td>
      <td><code>Canvas</code></td>
      <td style="background-color: ActiveCaption;"></td>
    </tr>
    <tr>
      <td><code>AppWorkspace</code></td>
      <td>複数文書インターフェイスの背景色。</td>
      <td><code>Canvas</code></td>
      <td style="background-color: AppWorkspace;"></td>
    </tr>
    <tr>
      <td><code>Background</code></td>
      <td>デスクトップの背景。</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Background;"></td>
    </tr>
    <tr>
      <td><code>ButtonHighlight</code></td>
      <td>境界線のレイヤーによって立体的に現れる 3D 要素の、光源に面する境界線の色。</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonHighlight;"></td>
    </tr>
    <tr>
      <td><code>ButtonShadow</code></td>
      <td>境界線のレイヤーによって立体的に現れる 3D 要素の、光源から離れた境界線の色。</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonShadow;"></td>
    </tr>
    <tr>
      <td><code>CaptionText</code></td>
      <td>キャプション、サイズボックス、スクロールバーの矢印ボックスのテキスト。 <code>ActiveCaption</code> の背景色と一緒に使用してください。</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: CaptionText;"></td>
    </tr>
    <tr>
      <td><code>InactiveBorder</code></td>
      <td>非アクティブウィンドウの境界線。</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: InactiveBorder;"></td>
    </tr>
    <tr>
      <td><code>InactiveCaption</code></td>
      <td>非アクティブウィンドウのキャプション。<code>InactiveCaptionText</code> の前景色と一緒に使用してください。</td>
      <td><code>Canvas</code></td>
      <td style="background-color: InactiveCaption;"></td>
    </tr>
    <tr>
      <td><code>InactiveCaptionText</code></td>
      <td>非アクティブキャプションのテキストの色。<code>InactiveCaption</code> の背景色と一緒に使用してください。</td>
      <td><code>GrayText</code></td>
      <td style="background-color: InactiveCaptionText;"></td>
    </tr>
    <tr>
      <td><code>InfoBackground</code></td>
      <td>ツールチップコントロールの背景色。<code>InfoText</code> の前景色と一緒に使用してください。</td>
      <td><code>Canvas</code></td>
      <td style="background-color: InfoBackground;"></td>
    </tr>
    <tr>
      <td><code>InfoText</code></td>
      <td>ツールチップコントロールの文字色。<code>InfoBackground</code> の背景色と一緒に使用してください。</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: InfoText;"></td>
    </tr>
    <tr>
      <td><code>Menu</code></td>
      <td>メニューの背景。<code>MenuText</code> または <code>-moz-MenuBarText</code> の前景色と一緒に使用してください。</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Menu;"></td>
    </tr>
    <tr>
      <td><code>MenuText</code></td>
      <td>メニューのテキスト。<code>Menu</code> の背景色と一緒に使用してください。</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: MenuText;"></td>
    </tr>
    <tr>
      <td><code>Scrollbar</code></td>
      <td>スクロールバーの背景色です。</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Scrollbar;"></td>
    </tr>
    <tr>
      <td><code>ThreeDDarkShadow</code></td>
      <td>境界線が同心円状に 2 層になっているために立体的に現れる 3D 要素の、光源から離れた 2 つの境界線のうち、暗い方（一般に外側）の色。</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDDarkShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDFace</code></td>
      <td>境界線が同心円状に 2 層になっているために立体的に現れる 3D 要素の表面の背景色。<code>ButtonText</code> の前景色と一緒に使用してください。</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ThreeDFace;"></td>
    </tr>
    <tr>
      <td><code>ThreeDHighlight</code></td>
      <td>境界線が同心円状に 2 層になっているために立体的に現れる 3D 要素の、光源に面する 2 つの境界線のうち、明るい方（一般に外側）の色。</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDHighlight;"></td>
    </tr>
    <tr>
      <td><code>ThreeDLightShadow</code></td>
      <td>境界線が同心円状に 2 層になっているために立体的に現れる 3D 要素の、光源に面する 2 つの境界線のうち暗い方（一般に内側）の色。</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDLightShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDShadow</code></td>
      <td>境界線が同心円状に 2 層になっているために立体的に現れる 3D 要素の、光源から離れた 2 つの境界線のうち、明るい方（一般に内側）の色。</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDShadow;"></td>
    </tr>
    <tr>
      <td><code>Window</code></td>
      <td>ウィンドウの背景です。前景色 <code>WindowText</code> と一緒に使用してください。</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Window;"></td>
    </tr>
    <tr>
      <td><code>WindowFrame</code></td>
      <td>ウィンドウの枠です。</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: WindowFrame;"></td>
    </tr>
    <tr>
      <td><code>WindowText</code></td>
      <td>ウィンドウ内のテキストです。背景色 <code>Window</code> と共に使用してください。</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: WindowText;"></td>
    </tr>
  </tbody>
</table>

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

- {{cssxref("&lt;color&gt;")}}: これらのキーワードが所属する先のデータ型
