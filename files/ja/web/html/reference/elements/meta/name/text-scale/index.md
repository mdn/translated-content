---
title: <meta name="text-scale">
short-title: text-scale
slug: Web/HTML/Reference/Elements/meta/name/text-scale
l10n:
  sourceCommit: 4607393c465f5a8bdbb36047f2ec03c2fb058af5
---

**`text-scale`** は {{htmlelement("meta")}} 要素の [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性の値で、
{{htmlelement("html")}} ルート要素の {{cssxref("font-size")}} の初期の倍率を、OS およびブラウザーレベルのテキスト倍率設定に比例させるように設定できます。

> [!WARNING]
> ウェブサイトに `<meta name="text-scale" content="scale" />` を記載してこのテキスト倍率機能を利用する場合、対象プラットフォームの最大テキスト倍率まで対応していることを確認しなければなりません。通常、モバイルプラットフォームでは200%から300%以上まで対応しており、アクセシビリティ機能によってはさらに大きな倍率も設定可能です。OSのフォントサイズ環境設定を大きくしたり小さくしたりしているユーザーでも、ウェブサイトの表示が崩れないことを確認してください。

## 使用上のメモ

`<meta name="text-scale">` 要素には、次の追加属性があります。

- [`content`](/ja/docs/Web/HTML/Reference/Elements/meta#content)
  - : {{cssxref("font-size")}} の倍率のオプトイン動作を指定します。
    その値はキーワードであり、以下のいずれかになります。
    - `scale`
      - : この設定により、{{htmlelement("html")}} ルート要素の {{cssxref("font-size")}} の初期倍率が、OS およびブラウザレベルのテキスト倍率設定に比例して変更されます。また、これによりブラウザーでは、既存のブラウザー固有の仕組みや推定アルゴリズム（例えば、モバイル端末でのテキストの自動サイズ調整など）が無効になります。
    - `legacy`
      - : デフォルト値です。このページは、OS およびブラウザーレベルのテキスト変倍設定に応じて、ルート要素の `font-size` を変倍する設定にはなっていません。これは、`<meta>` 要素をまったく記載しない場合と同じ効果があります（OS レベルのフォント環境設定は無視されます）。

## 解説

`<meta name="text-scale" content="scale" />` 要素を文書の {{htmlelement("head")}} に指定することで、そのページがユーザーの選択したさまざまなフォントサイズ設定に適切に拡大縮小されるよう設計されていることをブラウザーに通知できます。また、これにより既存のブラウザーの仕組みや推定アルゴリズムが無効化されます。

仕様的には、{{htmlelement("html")}} ルート要素の `font-size` の初期値を、ユーザーが定義した OS およびブラウザーレベルのフォントサイズ設定に比例して変倍するように定義します。ルートの {{cssxref("font-size")}} の初期値 ({{cssxref("initial")}}) は `medium` であり、これにより [`rem`](/ja/docs/Web/CSS/Reference/Values/length#rem) 単位の値が定義されます。ルートの `font-size` を[ローカル/ルートフォント相対長の `<length>`](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#ローカルフォント相対長) 単位に設定または許容した場合、その後のキーワード（`medium` など）やフォント相対の長さ（`em` や `rem` など）は、OS やブラウザーのフォントサイズ設定に応じて比例して倍率設定されます。

例えば、ページに `<meta name="text-scale" content="scale">` が記載されている場合、次のルール、

```css
p {
  font-size: medium;
}
```

は、すべての {{htmlelement("p")}} 要素のフォントサイズが倍率設定されます。また、`font-size` を `initial` に設定しても、同様の効果を取得することができます。

モバイルプラットフォームでは、デフォルトでこの機能は有効になっていません。`<meta name="text-scale" content="scale" />` を指定することで、この倍率設定が有効になります。デスクトッププラットフォームでは、この設定により、[`env(preferred-text-scale)`](/ja/docs/Web/CSS/Reference/Values/env#preferred-text-scale) 環境変数が、ブラウザーのフォントサイズ設定に対応する倍率を反映するようになります。ただし、それ以外には目立った利点はありません。

### 使い方の概要

簡単に言うと、アプリがフォントの倍率変更に対応している場合のみ、`scale` を設定してください。推奨される使い方は以下の通りです。

1. ページの `<head>` タグ内に `<meta name="text-scale" content="scale" />` を記述してください。
2. 初期設定の {{cssxref(":root")}} `font-size` を、[絶対的な長さの単位](/ja/docs/Web/CSS/Reference/Values/length#絶対的な長さの単位)の値（例：`16px`）で上書きしないでください。
3. コンテンツのサイズ設定には、`em` や `rem` といった[フォント相対単位](/ja/docs/Web/CSS/Reference/Values/length#フォントに基づく相対的な長さの単位)や、`small`、`x-large` などのキーワードのみを使用してください。

### `<meta name="text-scale">` と `env(preferred-text-scale)`

OS のテキスト倍率設定に基づいてサイズを調整するには、[`env(preferred-text-scale)`](/ja/docs/Web/CSS/Reference/Values/env#preferred-text-scale) 環境変数よりも、`<meta name="text-scale" />` を使用することをお勧めします。モバイル端末では両者の効果は似ていますが、`<meta>` はデスクトップブラウザーでも改善効果があり（かつ使いやすいため）、推奨されます。

これらの機能を同時に使用することは避けてください。テキストの変倍が二重に適用され、フォントサイズに対する小さなサイズがさらに小さくなり、大きなサイズがさらに大きくなってしまうことがあります。

## 例

### meta viewport text-scale のデモ

この例では、`<meta name="text-scale" content="scale">` の効果を紹介しています。

#### HTML

文書 の `<head>` には、`<meta name="text-scale" content="scale">` 要素に加え、モバイル端末での正しい表示を確実にするために [`<meta name="viewport">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/viewport) 要素を指定しています。同時に、異なる `class` 属性が設定された {{htmlelement("p")}} 要素内にテキストコンテンツを記載し、それぞれを異なるスタイルで対象とすることができるようにしています。

```html-nolint live-sample___text-scale
<!doctype html>
<html>
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <p class="text-scale">
      このフォントサイズは、その環境設定がオペレーティングシステムレベルで指定されているか、ユーザーエージェントレベルで指定されているかにかかわらず、ユーザーのフォント環境設定に従います。
    </p>
    <p class="fixed">
      このフォントサイズは、text-scale が設定されていても、ユーザーのフォント環境設定を反映しません。
      <div class="text-scale">でも、このフォントサイズは反映されます。</div>
    </p>
  </body>
</html>
```

```html-nolint hidden live-sample___no-text-scale
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <p class="text-scale">
      このフォントサイズは、その設定がオペレーティングシステムレベルで指定されているか、ユーザーエージェントレベルで指定されているかを問わず、ユーザーのフォント環境設定に従いません。
    </p>
    <p class="fixed">
      このフォントサイズは、ユーザーのフォント環境設定を反映しません。
      <div class="text-scale">これも同じです！</div>
    </p>
  </body>
</html>
```

#### CSS

`class` が `text-scale` のテキストコンテナーには、{{cssxref("font-size")}} が `1rem` に指定されます。これは、`<meta name="text-scale" content="scale">` に対応しているブラウザーにおいて、OS やブラウザーのフォント設定が変更された際に、そのテキストのサイズもそれに応じて変更されることを意味します。`class` が `fixed` のテキストコンテナーには、`font-size` が `20px` に指定されます。これは、OS やブラウザーのフォント設定が変更されても、このテキストのサイズが固定されたままになることを意味します。

```css live-sample___text-scale live-sample___no-text-scale
.text-scale {
  font-size: 1rem;
}

.fixed {
  font-size: 20px;
}
```

#### 結果

このバージョンには、`<meta name="text-scale">` 要素が含まれています。

{{embedlivesample("text-scale", "100%", "200")}}

このバージョンには、`<meta name="text-scale">` 要素が含まれていません。

{{embedlivesample("no-text-scale", "100%", "200")}}

これらの例をモバイルブラウザーで試してみてください。モバイル端末の表示設定またはアクセシビリティ設定で、推奨フォントサイズを変更してみてください。最初の例では、`<meta name="text-scale">` が指定されている場合、テキストの上段と下段は OS の設定に応じて比例して拡大・縮小されますが、絶対単位で `font-size` が設定されている中段のテキストはサイズが変わらないことに注意してください。`<meta name="text-scale">` 要素がない場合、テキストは OS の設定に応じて比例して拡大・縮小されません。

簡単に試すことができるよう、下記リンクから、両方のバージョンを別のタブで全画面表示にすることができます。

- {{ LiveSampleLink("text-scale", "<code>&lt;meta name=&quot;text-scale&quot;&gt;</code> を指定してある例") }}
- {{ LiveSampleLink("no-text-scale", "<code>&lt;meta name=&quot;text-scale&quot;&gt;</code> を指定していない例") }}

### テキスト倍率のレスポンシブレイアウト

この例では、ページに `<meta name="text-scale">` を適用することで、{{cssxref("@media")}} クエリー内でフォント相対サイズを使用し、OS の文字サイズが変更された際にモバイルブラウザーがブレークポイントを自動的に調整するようにできることを示します。

#### HTML

前の例と同様に、今回のマークアップでも、`<head>` 内に `<meta name="text-scale">` および `<meta name="viewport">` 要素が記載されています。このデモでは、body のコンテンツには {{htmlelement("main")}} と {{htmlelement("aside")}} の 2 つの要素が含まれており、メインコンテンツのカラムとサイドバーを表しています。

```html live-sample___text-scale-layout
<!doctype html>
<html>
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <main>メインコンテンツ</main>
    <aside>余談コンテンツ</aside>
  </body>
</html>
```

#### CSS

デフォルトで、本文とサイドバーは上下に並べて配置されています。{{cssxref("@media")}} クエリーを指定して、ビューポートの幅が `35rem` を超えると、[CSS グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)を使用して要素を横に並べて配置するようにしています。

```css hidden live-sample___text-scale-layout
body {
  margin: 0;
}

main,
aside {
  background-color: silver;
  padding: 24px;
  font-size: 1.5rem;
}
```

```css live-sample___text-scale-layout
@media (width > 35rem) {
  body {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 18.75rem;
  }
}
```

#### 結果

{{embedlivesample("text-scale-layout", "100%", "200")}}

モバイルブラウザーでこのことを試してみてください。OS のフォントサイズを大きくすると、ブレークポイントのサイズもそれに比例して大きくなるのがお分かりいただけると思います。OS のフォントサイズが大きくなると、前回は横に並んでいたメインコンテンツとサイドコンテンツが、重なり合って表示されるようになります。この効果を確認するには、横向きで表示する必要があるかもしれません。

簡単に試せるよう、下記リンクからデモを別なタブで開くことができます。

{{ LiveSampleLink("text-scale-layout", "レスポンシブレイアウトの例") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`env(preferred-text-scale)`](/ja/docs/Web/CSS/Reference/Values/env#preferred-text-scale)
- [[meta text-scale] Support for WebView](https://chromium.googlesource.com/chromium/src/+/b29d63222d10f4c7e620d057578d737969eb7ae3) - chromium.googlesource.com (2026)
