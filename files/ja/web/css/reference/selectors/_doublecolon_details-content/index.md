---
title: CSS `::details-content` 擬似要素
short-title: ::details-content
slug: Web/CSS/Reference/Selectors/::details-content
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

**`::details-content`** [CSS](/ja/docs/Web/CSS) [擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements) は、{{HTMLElement("details")}} 要素の展開・折りたたみ可能なコンテンツを表します。

{{InteractiveExample("CSS Demo: ::details-content", "tabbed-shorter")}}

```css interactive-example
details[open]::details-content {
  color: dodgerblue;
  padding: 0.5em;
  border: thin solid grey;
}
```

```html interactive-example
<details open>
  <summary>summary の例</summary>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>
    Architecto cupiditate ea optio modi quas sequi, esse libero asperiores
    debitis eveniet commodi hic ad.
  </p>
</details>
```

## 構文

```css
selector::details-content
```

## 例

### 基本的な例

この例では、`::details-content` 擬似要素を使用して、{{HTMLElement("details")}} 要素のコンテンツにスタイルを設定する基本的な使い方を示しています。

#### HTML

`<details>` 要素には {{HTMLElement("summary")}} 要素が記載されており、そのコンテンツは常に表示されます。詳細コンテンツには {{HTMLElement("p")}} 要素が含まれています。

```html
<details>
  <summary>ここをクリック</summary>
  <p>こちらにコンテンツがあります</p>
</details>
```

#### CSS

{{cssxref("background-color")}} を `::details-content` 擬似要素に設定しました。

```css
details::details-content {
  background-color: #a29bfe;
}
```

#### 結果

summary をクリックすると、詳細コンテンツが表示されます。

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### トランジションの例

この例では、`::details-content` 擬似要素を使用して、{{HTMLElement("details")}} 要素のコンテンツにトランジションを設定しています。これにより、展開された際にはコンテンツが滑らかにフェードインし、折りたたまれた際には再びフェードアウトします。

#### HTML

HTML は前の例と同じです。

```html
<details>
  <summary>ここをクリック</summary>
  <p>こちらにコンテンツがあります</p>
</details>
```

#### CSS

このトランジションを実現するために、{{cssxref("transition")}} 一括指定プロパティ内で、2 つの別個のトランジションを指定します。

- {{cssxref("opacity")}} プロパティには、フェードイン／フェードアウト効果を生み出すために、`600ms` の基本的なトランジションを指定しています。
- {{cssxref("content-visibility")}} プロパティ（`<details>` のコンテンツが展開されたり折りたたまれたりするときに `hidden` と `visible` の間で切り替わるもの）には、`600ms` のトランジションを指定し、{{cssxref("transition-behavior")}} の値として `allow-discrete` が指定されます。これにより、ブラウザーは `content-visibility` に対してトランジションを開始するよう設定され、そのアニメーションの挙動は[離散的](/ja/docs/Web/CSS/Guides/Animations/Animatable_properties#離散)となります。これにより、トランジションの全期間を通じてコンテンツが表示されたままとなり、それ以外のトランジションを確認することができます。このトランジションがないと、`<details>` のコンテンツが折りたたまれたときに、コンテンツは即座に消えてしまい、滑らかなフェードアウトが確認できません。

```css
details::details-content {
  opacity: 0;
  transition:
    opacity 600ms,
    content-visibility 600ms allow-discrete;
}

details[open]::details-content {
  opacity: 1;
}
```

#### 結果

アニメーションを表示するには、概要をクリックして詳細コンテンツの表示/非表示を切り替えてください。

{{EmbedLiveSample("Transition_example", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<details>`](/ja/docs/Web/HTML/Reference/Elements/details)
- [`<summary>`](/ja/docs/Web/HTML/Reference/Elements/summary)
