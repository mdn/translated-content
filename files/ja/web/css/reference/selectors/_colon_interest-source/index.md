---
title: "`:interest-source` 擬似クラス (CSS)"
short-title: :interest-source
slug: Web/CSS/Reference/Selectors/:interest-source
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{SeeCompatTable}}

**`:interest-source`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、その要素に対して「関心」が示された際に、[関心インボーカー要素](/ja/docs/Web/API/Popover_API/Using_interest_invokers) を表します。

## 構文

```css
:interest-source {
  /* ... */
}
```

## 例

### 関心インボーカー要素の選択

この例では、`:interest-source` を使用して、関心対象の呼び出し要素に関心が示された際に、その要素にスタイルを適用する方法を示します。

#### HTML

このマークアップには、{{htmlelement("button")}} と {{htmlelement("p")}} が含まれています。`<button>` を関心インボーカーとして指定するには、`interestfor` 属性を付与し、その値を `<p>` 要素の `id` と一致させることで、その段落を対象要素にします。また、段落に [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性を付与することで、ポップオーバーに変換し、初期状態では非表示にします。

```html live-sample___interest-source
<button interestfor="mypopover">ボタン</button>
<p id="mypopover" popover>ホバーツールチップ</p>
```

#### CSS

CSS では、`:interest-source` セレクターを使用したルールを指定し、`<button>` に対して関心が示された際に、{{cssxref("background-color")}} と {{cssxref("color")}} の特定の組み合わせを適用するようにしています。また、`<button>` にはそれ以外にもいくつかのスタイルを適用していますが、説明を簡潔にするため、ここでは省略しています。

```css hidden live-sample___interest-source
button {
  margin: 10px;
  padding: 5px 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1.5em;
  background-color: #eeeeee;

  cursor: pointer;
}
```

```css live-sample___interest-source
button:interest-source {
  background-color: hotpink;
  color: purple;
}
```

#### 結果

これは、次のように表示されます。

{{embedlivesample("interest-source", "100%", "100")}}

そのボタンに関心を示してみてください（例えば、カーソルを合わせたり、フォーカスを当てたりするなど）。そうすると、関心を示したときのみ、`hotpink` と `purple` の色の組み合わせが適用されることがわかります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":interest-target")}}
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- [関心インボーカーの使用](/ja/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
