---
title: "`:interest-target` 擬似クラス (CSS)"
short-title: :interest-target
slug: Web/CSS/Reference/Selectors/:interest-target
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{SeeCompatTable}}

**`:interest-target`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、[関心インボーカー要素](/ja/docs/Web/API/Popover_API/Using_interest_invokers)に対して関心が表示された際に、その要素に関連付けられた対象要素を表します。

## 構文

```css
:interest-target {
  /* ... */
}
```

## 例

### 関心インボーカー要素に関連付けられた対象要素の選択

この例では、関心インボーカー要素に関心が示された際に、`:interest-target` を使用して、その関心インボーカー要素の対象要素にスタイルを適用する方法を使用できます。

#### HTML

このマークアップには、{{htmlelement("button")}} と {{htmlelement("p")}} が含まれています。`<button>` を関心インボーカーとして指定するために、`<p>` 要素の `id` と一致する値を `interestfor` 属性に設定し、この段落を対象要素としています。

```html live-sample___interest-target
<button interestfor="mytarget">ボタン</button>
<p id="mytarget">段落</p>
```

#### CSS

CSS では、`:interest-target` セレクターを持つルールを指定しています。これにより、`<button>` に対して関心が表示された際に、`<p>` 要素に特定のスタイルセットが適用されます。また、`<button>` に対してもいくつかのスタイルを適用していますが、説明を簡潔にするため、ここではそれらを省略しています。

```css hidden live-sample___interest-target
body {
  margin: 10px;
}

button {
  padding: 5px 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  background-color: #eeeeee;

  cursor: pointer;
}
```

```css live-sample___interest-target
p:interest-target {
  font-size: 1.5em;
  font-family: sans-serif;
  padding: 10px;
  background-color: hotpink;
  color: purple;
}
```

#### 結果

次のようにレンダリングされます。

{{embedlivesample("interest-target", "100%", "150")}}

そのボタンに関心を示してみてください（例えば、ポインターをかざしたり、フォーカスを当てたりするなど）。そうすると、先ほど示したスタイルが段落に適用される様子を確認できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":interest-source")}}
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- [関心インボーカーの使用](/ja/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
