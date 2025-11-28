---
title: "@media"
slug: Web/CSS/Reference/At-rules/@media
original_slug: Web/CSS/@media
l10n:
  sourceCommit: 6ca92a0367203aee71e98c6c7b1501b5dc9a1fe0
---

**`@media`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、1 つまたは複数の[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)の結果に基づいて、スタイルシートの一部を適用するために使用することができます。これによってメディアクエリーを指定し、そのメディアクエリーがコンテンツの使用される端末に一致する場合にのみ、文書に CSS のブロックを適用することができます。

> [!NOTE]
> JavaScript では、 `@media` を使用して作成されたルールは、 CSS オブジェクトモデルの {{domxref("CSSMediaRule")}} インターフェイスによってアクセスすることができます。

{{InteractiveExample("CSS デモ: @media", "tabbed-standard")}}

```css interactive-example
abbr {
  color: #860304;
  font-weight: bold;
  transition: color 0.5s ease;
}

@media (hover: hover) {
  abbr:hover {
    color: #001ca8;
    transition-duration: 0.5s;
  }
}

@media not all and (hover: hover) {
  abbr::after {
    content: " (" attr(title) ")";
  }
}
```

```html interactive-example
<p>
  <abbr title="National Aeronautics and Space Administration">NASA</abbr> is a
  U.S. government agency that is responsible for science and technology related
  to air and space.
</p>
```

## 構文

```css
/* コードの最上位 */
@media screen and (width >= 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* 他の条件付きアットルールの中にネスト */
@supports (display: flex) {
  @media screen and (width >= 900px) {
    article {
      display: flex;
    }
  }
}
```

`@media` アットルールは、コードの最上位に配置したり、他の条件付きグループアットルールの中に入れ子にして配置したりすることができます。

メディアクエリーの構文について詳しくは、[メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using#構文)を参照してください。

## 解説

メディアクエリーの `<media-query-list>` には、[`<media-type>`](#メディア種別)、[`<media-feature>`](#メディア特性)、[論理演算子](#論理演算子)があります。

### メディア種別

_`<media-type>`_ は機器の全般的な分類を記述します。
`not` または `only` 論理演算子を使用する場合を除き、メディア種別は省略可能であり、暗黙で `all` と見なされます。

- `all`
  - : すべての機器に適合します。
- `print`
  - : ページのある資料や、画面に印刷プレビューモードで表示されている文書向けのものです。（これらの形式に特有の整形上の問題については、[ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)を参照してください。）
- `screen`
  - : 主に画面向けのものです。

> [!NOTE]
> CSS2.1 および [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) では、その他のメディア種別 (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, `aural`) が定義されていましたが、これらは [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) で非推奨となったため、使用すべきではありません。

### メディア特性

_`<media feature>`_ は、{{glossary("user agent", "ユーザーエージェント")}}、出力装置、環境の特定の特徴を記述します。
メディア特性式は、その存在や、値、値の範囲を調べるもので、完全に任意です。それぞれのメディア特性式は、括弧で囲む必要があります。

- {{cssxref("@media/any-hover", "any-hover")}}
  - : 入力メカニズムで、ユーザーが要素上でのホバーを使用することができるものがあるか。
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : 入力メカニズムにポインティングデバイスがあるか、もしそうであればどれだけ正確なものであるか。
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : ビューポートの幅対高さの{{glossary("aspect ratio", "アスペクト比")}}。
- {{cssxref("@media/color", "color")}}
  - : 出力機器の色成分あたりの色のビット数、または端末がカラーでなければゼロ。
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : ユーザーエージェントおよび出力機器が対応しているおよその色の範囲。
- {{cssxref("@media/color-index", "color-index")}}
  - : 出力機器の色参照表の項目数、または端末がそのような表を使用していないのであればゼロ。
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : 出力機器の幅対高さのアスペクト比。メディアクエリーレベル 4 で非推奨。
- {{cssxref("@media/device-height", "device-height")}}
  - : 出力機器のレンダリング面の高さ。メディアクエリーレベル 4 で非推奨。
- {{cssxref("@media/device-posture", "device-posture")}}
  - : 端末の現在の姿勢、つまり、ビューポートが平らな状態か折りたたまれた状態かを検出します。 [Device Posture API](/ja/docs/Web/API/Device_Posture_API) で定義されています。
- {{cssxref("@media/device-width", "device-width")}}
  - : 出力機器のレンダリング面の幅。メディアクエリーレベル 4 で非推奨。
- {{cssxref("@media/display-mode", "display-mode")}}
  - : アプリケーションが表示されているモード。例えば、[全画面](/ja/docs/Web/CSS/Reference/At-rules/@media/display-mode#fullscreen)モードや[ピクチャインピクチャ](/ja/docs/Web/CSS/Reference/At-rules/@media/display-mode#picture-in-picture)モードなどです。
    メディアクエリーレベル 5 で追加。
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : ユーザーエージェントおよび出力端末が対応している輝度、コントラスト比、および色深度の組み合わせ。メディアクエリーレベル 5 で追加されました。
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : ユーザーエージェントがカラーパレットを制限しているかどうかを検出。
    メディアクエリーレベル 5 で追加。
- {{cssxref("@media/grid", "grid")}}
  - : 出力機器はグリッドとビットマップ画面のどちらを使用するか。
- {{cssxref("@media/height", "height")}}
  - : ビューポートの高さ。
- {{cssxref("@media/hover", "hover")}}
  - : 主要な入力メカニズムで、ユーザーが要素上でのホバーを使用することができるか。
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : ユーザーエージェントまたはその下の OS が色を反転しているか。
    メディアクエリーレベル 5 で追加。
- {{cssxref("@media/monochrome", "monochrome")}}
  - : 出力機器のモノクロフレームバッファーにおけるピクセルあたりのビット数、または端末がモノクロでなければゼロ。
- {{cssxref("@media/orientation", "orientation")}}
  - : ビューポートの向き。
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : ビューポートをブロック軸方向にあふれたコンテンツを出力機器がどのように扱うか。
    メディアクエリーレベル 4 で追加。
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : ビューポートをインライン軸方向にあふれたコンテンツがスクロールできるか。
    メディアクエリーレベル 4 で追加。
- {{cssxref("@media/pointer", "pointer")}}
  - : 主要な入力メカニズムがポインティングデバイスであるか、もしそうであればどれだけ正確なものであるか。
    メディアクエリーレベル 4 で追加。
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : ユーザーが明るいまたは暗い色遣いを望んでいるかどうかを検出。
    メディアクエリーレベル 5 で追加。
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : ユーザーがシステムに隣り合う色のコントラスト量を増加または減少させるよう要求したかどうかを検出。
    メディアクエリーレベル 5 で追加。
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : ユーザーが、インターネットのトラフィックの消費を抑えたウェブコンテンツをリクエストしたかどうかを検知します。
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : ユーザーがページであまり動きを望まないかどうか。
    メディアクエリーレベル 5 で追加。
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : ユーザーが、端末で使用されている透明または半透明のレイヤー効果を抑制する設定を端末で有効にしているかどうかを検出します。
- {{cssxref("@media/resolution", "resolution")}}
  - : 出力機器のピクセル密度。
- {{cssxref("@media/scan", "scan")}}
  - : ディスプレイの表示出力がプログレッシブかインターレスか。
- {{cssxref("@media/scripting", "scripting")}}
  - : スクリプト（すなわち、 JavaScript）が有効かどうかを検出します。
    メディアクエリーレベル 5 で追加。
- {{cssxref("@media/shape", "shape")}}
  - : 端末の形状を検出して、長方形と丸いディスプレイを判別します。
- {{cssxref("@media/update", "update")}}
  - : どれだけの頻度で出力機器がコンテンツの表示を変更できるか。
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : ユーザーエージェントの動画プレーンおよび出力端末が対応している、輝度、コントラスト比、および色深度の組み合わせ。メディアクエリーレベル 5 で追加されました。
- {{cssxref("@media/width", "width")}}
  - : スクロールバーの幅を含むビューポートの幅。
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : CSS ピクセル当たりのデバイスピクセル数。代わりに [`resolution`](/ja/docs/Web/CSS/Reference/At-rules/@media/resolution) 特性を `dppx` 単位で使用してください。
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : ブラウザーが `-webkit` の接頭辞の付いた CSS {{cssxref("animation")}} に対応しているかどうか。代わりに [`@supports (animation)`](/ja/docs/Web/CSS/Reference/At-rules/@supports) 機能クエリーを使用してください。
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : CSS ピクセル当たりのデバイスピクセル数。代わりに [`resolution`](/ja/docs/Web/CSS/Reference/At-rules/@media/resolution) 特性を `dppx` 単位で使用してください。
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : ブラウザーが `-webkit` の接頭辞の付いた 2D の CSS {{cssxref("transform")}} に対応しているかどうか。代わりに [`@supports (transform)`](/ja/docs/Web/CSS/Reference/At-rules/@supports) 機能クエリーを使用してください。
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : ブラウザーが `-webkit` の接頭辞の付いた 3D の CSS {{cssxref("transform")}} に対応しているかどうか。代わりに [`@supports (transform)`](/ja/docs/Web/CSS/Reference/At-rules/@supports) 機能クエリーを使用してください。
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : ブラウザーが `-webkit` の接頭辞の付いた CSS {{cssxref("transition")}} に対応しているかどうか。代わりに [`@supports (transition)`](/ja/docs/Web/CSS/Reference/At-rules/@supports) 機能クエリーを使用してください。

### 論理演算子

_論理演算子_ `not`, `and`, `only`, `or` を使うと、複雑なメディアクエリーを構成することができます。
また、複数のメディアクエリーをカンマで区切って 1 つのルールにまとめることもできます。

- `and`
  - : 複数のメディア特性を 1 つのメディアクエリーに結合する際に使用されます。クエリーが `true` になるためには、結合させた各機能が `true` を返すことが必要です。
    また、メディア特性とメディア種別を結合する際にも使用されます。
- `not`
  - : メディアクエリーを反転するために使用され、クエリーが `false` を返す場合に `true` を返します。
    カンマで区切られたクエリーのリストの中にある場合は、適用された特定のクエリーのみを反転します。

    > [!NOTE]
    > レベル 3 では、個々のメディア特性式を否定するために `not` キーワードを使用することはできず、メディアクエリー全体のみを否定することしかできません。

- `only`
  - : クエリー全体が一致する場合にのみスタイルを適用します。
    これは、古いブラウザーが選択したスタイルを適用できないようにするのに便利です。
    `only` を使用しない場合、古いブラウザーは `screen and (width <= 500px)` というクエリーを `screen` と解釈し、クエリーの残りの部分を無視して、すべての画面にそのスタイルを適用してしまいます。
    `only` 演算子を使用する場合は、メディア種別も指定しなければなりません。
- `,` (カンマ)
  - : カンマは、複数のメディアクエリーを 1 つのルールにまとめるために使用されます。
    カンマで区切られたリストの各クエリーは、他のクエリーとは別に扱われます。
    したがって、リスト内のクエリーのいずれかが `true` であれば、メディア文全体が `true` を返すことになります。
    言い換えれば、リストは論理的な `or` 演算子のように動作します。
- `or`
  - : `,` 演算子と同等です。メディアクエリーレベル 4 で追加されました。

### ユーザーエージェントクライアントヒント

一部のメディアクエリーには、対応する[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)があります。
これらは、特定のメディア要件に合わせて事前に最適化されたコンテンツをリクエストする HTTP ヘッダーです。
{{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} および {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} が記載されています。

## 形式文法

{{csssyntax}}

## アクセシビリティ

サイトのテキストサイズを調整するユーザーに最適に対応するには、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)に {{cssxref("&lt;length&gt;")}} が必要な場合は [`em`](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) を使用してください。

[`em`](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) および [`px`](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) はどちらも有効な単位ですが、 [`em`](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) はユーザーがブラウザーのテキストの大きさを変更した場合に、よりうまく動作します。

また、ユーザーの使い勝手を向上させるために、メディアクエリーまたは [HTTP ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)を使用することを検討してください。
例えば、 [`prefers-reduced-motion`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) または同等の HTTP ヘッダーである {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} は、ユーザー設定に基づいて、アニメーションや動きの量を最小化するために使用することができます。

## セキュリティ

メディアクエリーはユーザーが作業する端末の能力—およびその先にある、特性および設計—を調べる関係上、端末を識別する「[フィンガープリント](/ja/docs/Glossary/Fingerprinting)」を構築するために不正利用されたり、ユーザーにとって望ましくない観点のものに分類されるものに利用されたりする可能性があります。

この可能性のため、ブラウザーは返値がコンピューターを正確に識別するために使用することを防ぐために、何らかの方法で返値を偽造することがあります。ブラウザーは、この分野で他の手段を提供する場合もあります。例えば、 Firefox で「フィンガープリントの採取」をブロックしている場合、多くのメディアクエリーは実際の端末の状態を表す値ではなく既定値を報告します。

## 例

### print および screen メディア種別の検査

```css
@media print {
  body {
    font-size: 10pt;
  }
}

@media screen {
  body {
    font-size: 13px;
  }
}

@media screen, print {
  body {
    line-height: 1.2;
  }
}
```

範囲構文を使用すると、範囲を受け入れる機能を検査する際に、メディアクエリーを簡潔に記述することができます。その例を下記に示します。

```css
@media (height > 600px) {
  body {
    line-height: 1.4;
  }
}

@media (400px <= width <= 700px) {
  body {
    line-height: 1.4;
  }
}
```

他の例については、[メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)モジュール
- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- {{domxref("CSSMediaRule")}} インターフェイス
- [Mozilla 拡張メディア特性](/ja/docs/Web/CSS/Reference/Mozilla_extensions#メディア特性)
- [WebKit 拡張メディア特性](/ja/docs/Web/CSS/Reference/Webkit_extensions#メディア特性)
