---
title: container-type
slug: Web/CSS/container-type
l10n:
  sourceCommit: 8965f6b695308878ae5d58ba81a2d0192e7c131f
---

{{CSSRef}}

要素は、[コンテナーサイズの問い合わせ](/ja/docs/Web/CSS/CSS_containment/Container_queries)のためのクエリーコンテナーとして、 **`container-type`** という [CSS](/ja/docs/Web/CSS) プロパティを使用して確立することができます。 `container-type` は、コンテナークエリーで使用するサイズ格納方法の種類を定義するために使用します。

これはコンテナークエリーで無限ループを避けるために重要です。もしそうでなければ、コンテナークエリーの中にある CSS ルールがコンテンツサイズを変更する可能性があり、その結果、クエリーが偽に評価されて親要素のサイズが変更され、そして、コンテンツサイズが変更されてクエリーが真に戻る、といった動作になります。

コンテナーサイズは、明示的に、あるいはコンテキストによって設定されます。例えば、ブロック要素、フレックスコンテナー、グリッドコンテナーは、親の幅いっぱいに伸びます。明示的またはコンテキストによるサイズが利用できない場合、サイズ抑制のある要素は折りたたまれます。

## 構文

```css
/* キーワード値 */
container-type: normal;
container-type: size;
container-type: inline-size;

/* グローバル値 */
container-type: inherit;
container-type: initial;
container-type: revert;
container-type: revert-layer;
container-type: unset;
```

### 値

- `size`

  - : [インラインおよびブロック](/ja/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#ブロック軸とインライン軸)の両方の寸法で コンテナーサイズクエリーのためのクエリー コンテナーを確立します。
    コンテナーにレイアウト抑制、スタイル抑制、サイズ抑制を適用します。

    サイズ抑制は、インライン方向とブロック方向の両方で要素に適用されます。要素のサイズは、子要素を無視して単独で計算できます。

- `inline-size`

  - : コンテナーの[インライン軸](/ja/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#ブロック軸とインライン軸)上の寸法クエリー用のクエリーコンテナーを確立します。
    要素にレイアウト、スタイル、インラインサイズ抑制を適用します。

    インラインサイズ抑制が要素に適用されます。要素のインラインサイズは、子要素を無視して単独で計算されます。

- `normal`
  - : この要素はコンテナーサイズクエリーのクエリーコンテナーではありませんが、コンテナースタイルクエリーのクエリーコンテナーであることに変わりはありません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### インラインサイズ抑制の確立

次の HTML 例は、画像、タイトル、テキストを持つカード部品があります。

```html
<div class="container">
  <div class="card">
    <h3>Normal card</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>

<div class="container wide">
  <div class="card">
    <h3>Wider card</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>
```

コンテナーコンテキストを作成するには、要素に `container-type` プロパティを追加します。以下は、 `inline-size` 値を使用してコンテナーの[インライン軸](/ja/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#ブロック軸とインライン軸)のコンテナーコンテキストを作成しています。

```css
.container {
  container-type: inline-size;
  width: 300px;
  height: 120px;
}

.wide {
  width: 500px;
}
```

```css hidden
h3 {
  height: 2rem;
  margin: 0.5rem;
}

.card {
  height: 100%;
}

.content {
  background-color: wheat;
  height: 100%;
}

.container {
  margin: 1rem;
  border: 2px dashed red;
  overflow: hidden;
}
```

コンテナークエリーを {{Cssxref("@container")}} アットルールで書くと、コンテナーの横幅が 400px を超える場合に、コンテナーの要素にスタイルが適用されます。

```css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

{{EmbedLiveSample('Establishing_inline_size_containment', '100%', 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS コンテナークエリー](/ja/docs/Web/CSS/CSS_containment/Container_queries)
- {{Cssxref("@container")}} アットルール
- CSS {{Cssxref("container")}} 一括指定プロパティ
- CSS {{Cssxref("container-name")}} プロパティ
- CSS {{cssxref("content-visibility")}} プロパティ
