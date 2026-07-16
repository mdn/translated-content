---
title: CSS `:current` 擬似クラス
short-title: :current
slug: Web/CSS/Reference/Selectors/:current
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{SeeCompatTable}}

**`:current`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)セレクターで、現在表示されている、またはハイライト表示されている要素またはその要素の祖先を表します。

## 構文

```css-nolint
:current {
  /* ... */
}

:current(<compound-selector-list>) {
  /* ... */
}
```

## 解説

`:current` 擬似クラス は、一連の要素のうち「現在表示されている」要素を表すために使用されます。

これは時間的な意味での「現在」を指す場合もあります。`:current` を使用すると、再生中の動画に関連付けられた、現在表示されているキャプションや字幕（[WebVTT](/ja/docs/Web/API/WebVTT_API) を使用して表現されるもの）を対象に指定できます。

また、一連の要素の中で現在ハイライト表示されている要素を指す場合もあります。例えば、`:current` を `::search-text` [擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements) と組み合わせることで、ブラウザーの「ページ内検索」機能で現在フォーカスされている検索結果に特定のスタイルを適用することができます。

例を示します。

```css
p::search-text {
  color: white;
  background-color: purple;
}

p::search-text:current {
  background-color: crimson;
}
```

## 例

### テキスト検索結果の独自スタイル

この例では、`::search-text` と `:current` を使用して、ブラウザーの「ページ内で検索」機能の検索結果に独自のスタイルを適用する方法を示します。

#### HTML

この HTML は、基本的なテキスト段落で構成されています。簡潔にするため、またレンダリングされた例で検索結果を閲覧しやすくするため、HTML ソースは表示しません。

```html hidden live-sample___custom-search-results
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus est
  eget eros congue pellentesque. Etiam a augue accumsan, scelerisque nisl sit
  amet, lobortis nulla. Aliquam condimentum eu orci eu elementum. Donec
  porttitor quam et posuere commodo. Mauris rhoncus diam a scelerisque molestie.
  Integer sollicitudin risus dui, ut sagittis lorem laoreet eget. Duis eget
  pretium enim. Morbi tristique, diam sit amet gravida finibus, metus ex
  tincidunt nibh, ac volutpat urna purus et arcu. Donec risus risus, semper vel
  purus sit amet, gravida vestibulum est. Sed et tristique urna. Nam vel mi eget
  nisi consectetur elementum. Aenean faucibus aliquam cursus. Morbi posuere
  tincidunt velit, et sagittis quam sagittis in. Nam eget ante ultrices, auctor
  dui vel, euismod lacus. Vivamus tincidunt, sem ac sodales aliquet, tortor
  tortor consequat diam, nec tempor mi dui vel eros. Aliquam ac erat et metus
  egestas scelerisque.
</p>
```

#### CSS

CSS では、まず `::search-text` 擬似要素のスタイル設定から始めます。ここに、独自の {{cssxref("background-color")}}、{{cssxref("color")}}、{{cssxref("text-shadow")}} スタイルを適用します。

```css hidden live-sample___custom-search-results
html {
  font-family: "Helvetica", "Arial";
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
  width: 90%;
  margin: 0 auto;
}

@layer no-support {
  body::before {
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em 0;
  }
  @supports not selector(::search-text) {
    body::before {
      content: "このブラウザーは ::search-text 擬似要素に対応していません。";
    }
  }
  @supports not selector(:current) {
    body::before {
      content: "このブラウザーは :current 擬似要素に対応していません。";
    }
  }
}
```

```css live-sample___custom-search-results
::search-text {
  background-color: purple;
  color: white;
  text-shadow: 1px 1px 1px black;
}
```

最後に、`::search-text:current` を使用して、現在フォーカスされている検索結果に独自の `background-color` と {{cssxref("text-decoration")}} スタイルを適用し、他の検索結果と区別できるようにします。

```css live-sample___custom-search-results
::search-text:current {
  background-color: crimson;
  text-decoration-line: underline;
  text-decoration-color: yellow;
  text-decoration-thickness: 3px;
}
```

#### 結果

この例は次のように表示されます。

{{EmbedLiveSample("live-sample___custom-search-results", "100%", 300)}}

ブラウザの「ページ内検索」機能を使って、例文中に複数回登場する "aliquam"、"amet"、"tortor" といった単語を探してみてください。検索結果の「前へ」と「次へ」を切り替えて、`:current` のスタイルを確認してみましょう。

### 現在表示中の WebVTT の字幕をスタイル設定

#### CSS

```css
:current(p, span) {
  background-color: yellow;
}
```

#### HTML

```html
<video controls preload="metadata">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src="subtitles.vtt"
    default />
</video>
```

#### WebVTT

```plain
WEBVTT FILE

1
00:00:03.500 --> 00:00:05.000
This is the first caption

2
00:00:06.000 --> 00:00:09.000
This is the second caption

3
00:00:11.000 --> 00:00:19.000
This is the third caption
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Video Text Tracks Format (WebVTT)](/ja/docs/Web/API/WebVTT_API)
- {{cssxref(":past")}}
- {{cssxref(":future")}}
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
