---
title: データ属性の使用
slug: Learn/HTML/Howto/Use_data_attributes
l10n:
  sourceCommit: fd6deb4d52b44e8915b3aec2f637c05317044914
---

{{QuickLinksWithSubpages("/ja/docs/Learn/HTML/Howto")}}

HTML は、特定の要素に関連付ける必要があるが、定義済みの意味を持つ必要のないデータに対する拡張性を念頭に置いて設計されています。 [`data-*` 属性](/ja/docs/Web/HTML/Global_attributes/data-*)により、標準外の属性や DOM の追加プロパティなどの特殊な方法に頼らずに、標準的な意味のある HTML 要素に追加情報を格納することができます。

## HTML の構文

構文は単純です。あらゆる要素上で、名前が `data-` で始まるあらゆる属性がデータ属性です。例えば、記事 (article) があり、視覚表現を行わない追加情報を格納したいとします。 `data` 属性を使用するとこれだけです。

```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  …
</article>
```

## JavaScript からのアクセス

[JavaScript](/ja/docs/Web/JavaScript) でこれらの属性の値を読み出すことも、とても簡単です。 {{domxref("Element.getAttribute", "getAttribute()")}} で完全な HTML での名前を使用して読むこともできますが、もっと簡単な方法が標準で定義されています。 {{domxref("DOMStringMap")}} の形で、 {{domxref("HTMLElement/dataset", "dataset")}} プロパティを通して読み出すことができます。

`dataset` オブジェクトを通して `data` 属性を取得するには、属性名の `data-` より後の部分を使用して取得します（なお、ダッシュは{{Glossary("camel_case", "キャメルケース")}}に変換されます）。

```js
const article = document.querySelector("#electric-cars");
// 次のようにしても動作します。
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

それぞれのプロパティは文字列であり、読み書きができます。上記の場合、 `article.dataset.columns = 5` を設定すると、その属性が `"5"` に変わります。

## CSS からのアクセス

データ属性はプレーンな HTML 属性であるため、[CSS](/ja/docs/Web/CSS) からもアクセスできることに注意してください。 例えば、記事の親データを表示するには、次のように CSS で[生成コンテンツ](/ja/docs/Web/CSS/content)において [`attr()`](/ja/docs/Web/CSS/attr) 関数を使用して実現できます。

```css
article::before {
  content: attr(data-parent);
}
```

CSS の[属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)を使用して、次のようにデータに応じてスタイルを変更することもできます。

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

[この JSBin の例](https://jsbin.com/ujiday/2/edit)では、これらすべてが一緒に機能していることがわかります。

データ属性を保存して、ゲームのスコアなど、絶えず変化する情報を含めることもできます。 ここで CSS セレクターと JavaScript アクセスを使用すると、独自の表示ルーチンを作成することなく、気の利いたエフェクトを作成できます。 生成したコンテンツと CSS トランジション（transition、遷移）を使用した例については、[このスクリーンキャスト](https://www.youtube.com/watch?v=On_WyUB1gOk)を参照してください（[JSBin の例](https://jsbin.com/atawaz/3/edit)）。

データ値は文字列です。 スタイリングを有効にするには、セレクターで数値を引用符で囲む必要があります。

## 問題

支援技術がアクセスできない可能性があるため、データ属性に表示およびアクセス可能なコンテンツを保存しないでください。 さらに、検索クローラーはデータ属性の値にインデックスを付けない場合があります。

## 関連情報

- この記事は、[hacks.mozilla.org の JavaScript および CSS でのデータ属性の使用](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/)（英語）から改編されました。
- カスタム属性は SVG 2 も対応しています。 詳細については、{{domxref("HTMLElement.dataset")}} および {{SVGAttr("data-*")}} を参照してください。
- [HTML の data 属性の使用方法](https://www.sitepoint.com/use-html5-data-attributes/)（Sitepoint、英語）
