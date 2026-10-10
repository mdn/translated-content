---
title: "`dynamic-range-limit` プロパティ (CSS)"
short-title: dynamic-range-limit
slug: Web/CSS/Reference/Properties/dynamic-range-limit
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

**`dynamic-range-limit`** は [CSS](/ja/docs/Web/CSS) のプロパティで、高ダイナミックレンジ (HDR) コンテンツで許容される最大輝度を指定します。

## 構文

```css
/* キーワード値 */
dynamic-range-limit: standard;
dynamic-range-limit: no-limit;
dynamic-range-limit: constrained;

/* dynamic-range-limit-mix() 関数 */
dynamic-range-limit: dynamic-range-limit-mix(standard 70%, no-limit 30%);

/* グローバル値 */
dynamic-range-limit: inherit;
dynamic-range-limit: initial;
dynamic-range-limit: revert;
dynamic-range-limit: revert-layer;
dynamic-range-limit: unset;
```

### 値

このプロパティは、以下のリストのいずれかの値として指定します。

- `standard`
  - : 最大輝度を、高ダイナミックレンジ (HDR) の基準白色として指定します。これは、CSS の色 `white` に相当します。
- `no-limit`
  - : HDR 基準白色の輝度よりもはるかに高い最大輝度を指定します。具体的な値は指定されていません。これが初期値です。
- `constrained`
  - : HDR 基準白色の輝度より若干高い値を最大輝度として指定し、標準ダイナミックレンジ (SDR) コンテンツと HDR コンテンツを混在させていても快適に視聴できるようにします。具体的なレベルについては規定されていません。
- {{cssxref("dynamic-range-limit-mix()")}}
  - : 最大輝度を、指定されたパーセント値に応じてさまざまなキーワード値を組み合わせて算出される独自の値として指定します。2 つ以上のペアを指定する必要があり、それぞれのペアは `dynamic-range-limit` キーワード、またはネストされた `dynamic-range-limit-mix()` 関数とパーセント値で構成されます。

## 解説

`dynamic-range-limit` プロパティは、高ダイナミックレンジの色を表示できるディスプレイにおいて、許容される最大輝度を指定します。**ダイナミックレンジ**とは、コンテンツの中で最も明るい部分と最も暗い部分との間の輝度（明るさ）の差のことです。ダイナミックレンジは写真用ストップで測定され、1 ストップ増加すると輝度が 2 倍になることを意味します。

### SDR, HDR, ヘッドルーム

従来のウェブコンテンツでは**標準ダイナミックレンジ (SDR)** が使用されており、この場合、最も明るい色は CSS の `white`（16 進表記では `#ffffff`）に相当します。一方、**高ダイナミックレンジ (HDR)** コンテンツの明るさは、標準的な白を超えることがあります。HDR の用語では、標準的な CSS の `white` は「HDR 基準白色」とも呼ばれます。

コンテンツを表示可能なピーク輝度は、コンテンツの種類、利用できる表示ハードウェア、およびユーザーの環境設定に依存します。白のピーク輝度が HDR 基準白色をどの程度上回るかを **HDR ヘッドルーム**と呼び、通常は写真用ストップで表されます。

SDR コンテンツの HDR ヘッドルームは常に `0` です。これは、その最も明るい白が HDR 基準白色そのものだからです。古いモニターも、より明るい色を表示できないため、HDR ヘッドルームが `0` である場合があります。一方、新しいモニターでは、HDR ヘッドルームが `0` より大きくなる場合があり、HDR コンテンツで利用できるより明るい色を表示することができます。

### `dynamic-range-limit` の用途

HDR コンテンツの明るさは、視聴者に違和感を覚えることがあります。これは、HDR コンテンツと SDR コンテンツが混在して表示されるアプリで特に顕著であり、明るさに一貫性がなくなる原因となります。

`dynamic-range-limit` プロパティを使用すると、HDR コンテンツの明るさを制御することができます。例えば、写真や動画ギャラリー内のすべてのサムネイルの最大輝度を、HDR 基準白色（これが `standard` キーワード値の動作です）に制限したり、HDR 基準白色よりわずかに高い輝度に制限したり（`constrained` キーワード値、または {{cssxref("dynamic-range-limit-mix()")}} を使用して作成した独自の制限を使用）することができます。ユーザーが単一の HDR 画像を表示する場合、またはユーザーが環境設定で HDR を有効にするオプションを選択した場合は、その画像の `dynamic-range-limit` を `no-limit` に設定することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `dynamic-range-limit` の使い方

この例では、`dynamic-range-limit` プロパティの基本的な使用方法と、HDR 画像と SDR 画像の違いを示しています。

#### HTML

このマークアップでは、{{htmlelement("img")}} 要素を使用して HDR 画像を埋め込みます。キーボードから画像にフォーカスを合わせられるようにするため、[`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) の値を `0` に設定します。

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/ultra-hdr.jpg"
  alt="A subway station platform with bright white overhead strip lights"
  tabindex="0" />
```

#### CSS

`dynamic-range-limit` プロパティを `standard` に設定することで、画像の輝度を SDR 範囲内に制限し、画像が HDR の基準白色よりも明るくならないようにします。同時に、{{cssxref("transition")}} プロパティを設定し、`<img>` 要素の状態が変化した際に、その `dynamic-range-limit` の値が `0.6` 秒かけてトランジションするようにしています。

```css
img {
  dynamic-range-limit: standard;
  transition: dynamic-range-limit 0.6s;
}
```

マウスオーバー時またはフォーカス時に、`<img>` 要素の `dynamic-range-limit` の値を `no-limit` に変更し、ブラウザーとディスプレイができる限り明るく表示させるようにします。

```css
img:hover,
img:focus {
  dynamic-range-limit: no-limit;
}
```

```css hidden
img {
  max-height: 100vh;
}
@media not (dynamic-range: high) {
  body::before {
    content: "この機器では、画像を最大輝度で表示することができません。";
    background-color: wheat;
    display: block;
    text-align: center;
  }
}
@supports not (dynamic-range-limit: standard) {
  body::before {
    content: "このブラウザーは dynamic-range-limit プロパティに対応していません。";
    background-color: wheat;
    display: block;
    text-align: center;
  }
}
```

#### 結果

{{EmbedLiveSample("Examples", 300, 400)}}

この画像はウルトラ HDR ですが、デフォルトで SDR の輝度レベルに制約されています。画像にカーソルを合わせたり、フォーカスを合わせたりしてみてください。対応しているディスプレイでは、鮮やかな HDR の色調へと切り替わる様子をご確認ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`dynamic-range`](/ja/docs/Web/CSS/Reference/At-rules/@media/dynamic-range) および [`video-dynamic-range`](/ja/docs/Web/CSS/Reference/At-rules/@media/video-dynamic-range) メディア機能
