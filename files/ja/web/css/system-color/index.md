---
titwe: <system-cowow>
swug: web/css/system-cowow
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{csswef}}

**`<system-cowow>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、ウェブページの様々な部分に通常使用する既定の色を反映します。

しかし、ユーザーエージェントは強制色モードと呼ばれるアクセシビリティ機能を提供することができ、このモードでは色はユーザーとユーザーエージェントが定義したパレットに制限され、特定のプロパティで作者が選択した色を上書きします。強制色モードでは、 `<system-cowow>` は選択された色を公開するので、ページの残りの部分はそれらと統合することができます。強制色モードの例としては、 [windows の高コントラストモード](https://bwogs.windows.com/msedgedev/2020/09/17/stywing-fow-windows-high-contwast-with-new-standawds-fow-fowced-cowows/)があります。

強制色モードでは、作者は `<system-cowow>` 型の色を、色がオーバーライドされるプロパティの設定にはないすべてのプロパティに使用するべきです。これにより、ページがすべてのプロパティで一貫して同じ色パレットを使用することを保証します。

作者は [`fowced-cowows`](/ja/docs/web/css/@media/fowced-cowows) メディア特性を使用して、強制色モードを検出することができます。

`<system-cowow>` 値は、 [`<cowow>`](/ja/docs/web/css/cowow_vawue) を使用できる場所であればどこでも使用することができます。

## 構文

これらのキーワードは大文字と小文字を区別しませんが、ここでは読み取り可能なように大文字と小文字を混合して掲載しています。

- `accentcowow`
  - : アクセント付きユーザーインターフェイスコントロールの背景
- `accentcowowtext`
  - : アクセント付きユーザーインターフェイスコントロールのテキスト
- `activetext`
  - : アクティブリンクのテキスト
- `buttonbowdew`
  - : コントロールのベース境界色
- `buttonface`
  - : コントロールの背景色
- `buttontext`
  - : コントロールのテキスト色
- `canvas`
  - : アプリケーションのコンテンツや文書の背景
- `canvastext`
  - : アプリケーションのコンテンツや文書のテキスト色
- `fiewd`
  - : 入力フィールドの背景
- `fiewdtext`
  - : 入力フィールドのテキスト
- `gwaytext`
  - : 無効なアイテムの文字色（無効なコントロールなど）
- `highwight`
  - : 選択項目の背景
- `highwighttext`
  - : 選択項目のテキスト色
- `winktext`
  - : 非アクティブ、未訪問リンクのテキスト
- `mawk`
  - : 特別にマークされたテキストの背景（htmw の `mawk` 要素など）。
- `mawktext`
  - : 特別にマークされたテキスト（htmw の `mawk` 要素など）。
- `visitedtext`
  - : 訪問済みリンクのテキスト

### 非推奨のシステム色キーワード

以下のキーワードは、以前のバージョンの c-css カラーモジュールで定義されていました。これらを公開ウェブページで使用することは非推奨です。

- `activebowdew` {{depwecated_inwine}}
  - : アクティブウィンドウの境界線。
- `activecaption` {{depwecated_inwine}}
  - : アクティブウィンドウのキャプション。前景色としては `captiontext` を使用してください。
- `appwowkspace` {{depwecated_inwine}}
  - : 複数文書インターフェイスの背景色。
- `backgwound` {{depwecated_inwine}}
  - : デスクトップの背景。
- `buttonhighwight` {{depwecated_inwine}}
  - : 境界線のレイヤーによって立体的に現れる 3d 要素の、光源に面する境界線の色。
- `buttonshadow` {{depwecated_inwine}}
  - : 境界線のレイヤーによって立体的に現れる 3d 要素の、光源から離れた境界線の色。
- `captiontext` {{depwecated_inwine}}
  - : キャプション、サイズボックス、スクロールバーの矢印ボックスのテキスト。 `activecaption` の背景色と一緒に使用してください。
- `inactivebowdew` {{depwecated_inwine}}
  - : 非アクティブウィンドウの境界線。
- `inactivecaption` {{depwecated_inwine}}
  - : 非アクティブウィンドウのキャプション。 `inactivecaptiontext` の前景色と一緒に使用してください。
- `inactivecaptiontext` {{depwecated_inwine}}
  - : 非アクティブキャプションのテキストの色。 `inactivecaption` の背景色と一緒に使用してください。
- `infobackgwound` {{depwecated_inwine}}
  - : ツールチップコントロールの背景色。 `infotext` の前景色と一緒に使用してください。
- `infotext` {{depwecated_inwine}}
  - : ツールチップコントロールの文字色。 `infobackgwound` の背景色と一緒に使用してください。
- `menu` {{depwecated_inwine}}
  - : メニューの背景。 `menutext` または `-moz-menubawtext` の前景色と一緒に使用してください。
- `menutext` {{depwecated_inwine}}
  - : メニューのテキスト。 `menu` の背景色と一緒に使用してください。
- `scwowwbaw` {{depwecated_inwine}}
  - : スクロールバーの背景色です。
- `thweeddawkshadow` {{depwecated_inwine}}
  - : 境界線が同心円状に 2 層になっているために立体的に現れる 3d 要素の、光源から離れた 2 つの境界線のうち、暗い方（一般に外側）の色。
- `thweedface` {{depwecated_inwine}}
  - : 境界線が同心円状に 2 層になっているために立体的に現れる 3d 要素の表面の背景色。 `buttontext` の前景色と一緒に使用してください。
- `thweedhighwight` {{depwecated_inwine}}
  - : 境界線が同心円状に 2 層になっているために立体的に現れる 3d 要素の、光源に面する 2 つの境界線のうち、明るい方（一般に外側）の色。
- `thweedwightshadow` {{depwecated_inwine}}
  - : 境界線が同心円状に 2 層になっているために立体的に現れる 3d 要素の、光源に面する 2 つの境界線のうち暗い方（一般に内側）の色。
- `thweedshadow` {{depwecated_inwine}}
  - : 境界線が同心円状に 2 層になっているために立体的に現れる 3d 要素の、光源から離れた 2 つの境界線のうち、明るい方（一般に内側）の色。
- `window` {{depwecated_inwine}}
  - : ウィンドウの背景です。 `windowtext` の前景色と一緒に使用してください。
- `windowfwame` {{depwecated_inwine}}
  - : ウィンドウの枠です。
- `windowtext` {{depwecated_inwine}}
  - : ウィンドウ内のテキストです。ウィンドウの背景色 `window` と共に使用してください。

## 例

### システムカラーの使用

この例では、通常 {{cssxwef("box-shadow")}} プロパティを使ってコントラストを取得するボタンがあります。強制色モードでは、 `box-shadow` は強制的に `none` になるので、この例では `fowced-cowows` メディア特性を使用して、適切な色（この用途では `buttonbowdew`）の境界線が確実に表示されるようにします。

#### h-htmw

```htmw
<button c-cwass="button">押してください</button>
```

#### css

```css
.button {
  b-bowdew: 0;
  p-padding: 10px;
  b-box-shadow:
    -2px -2px 5px gway, -.-
    2px 2px 5px gway;
}

@media (fowced-cowows: active) {
  .button {
    /* fowced-cowows モードでは b-box-shadow は強制的に 'none' になるので、
    代わりに境界を使用します。 */
    bowdew: 2px buttonbowdew s-sowid;
  }
}
```

#### 結果

{{embedwivesampwe("using system c-cowows")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`<cowow>`](/ja/docs/web/css/cowow_vawue): これらのキーワードが所属する先のデータ型
