---
title: データ属性の使用
slug: Web/HTML/How_to/Use_data_attributes
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{HTMLSidebar}}

HTML は、特定の要素に関連付ける必要があるが、定義済みの意味を持つ必要のないデータに対する拡張性を念頭に置いて設計されています。 [`data-*` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/data-*)により、標準外の属性や DOM の追加プロパティなどの特殊な方法に頼らずに、標準的な意味のある HTML 要素に追加情報を格納することができます。

## HTML の構文

構文は単純です。あらゆる要素上で、名前が `data-` で始まるあらゆる属性がデータ属性です。例えば、記事 (article) があり、視覚表現を行わない追加情報を格納したいとします。 `data` 属性を使用するとこれだけです。

```html
<main>
  <article
    id="electric-cars"
    data-columns="3"
    data-index-number="12314"
    data-parent="cars">
    <!-- Electric car content -->
  </article>

  <article
    id="solar-cars"
    data-columns="3"
    data-index-number="12315"
    data-parent="cars">
    <!-- Solar car content -->
  </article>

  <article
    id="flying-cars"
    data-columns="4"
    data-index-number="12316"
    data-parent="cars">
    <!-- Flying car content -->
  </article>
</main>
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

また、 data 属性セレクターとともに [`document.querySelector()`](/ja/docs/Web/API/Document/querySelector) または [`document.querySelectorAll()`](/ja/docs/Web/API/Document/querySelectorAll) を使用して、一致する 1 つの要素またはすべての要素を見つけることもできます。

```js
// data-columns 属性を持つすべての要素を探す
const articles = document.querySelectorAll("[data-columns]");

// data-columns="3" のすべての要素を探す
const threeColumnArticles = document.querySelectorAll('[data-columns="3"]');
// 結果を反復処理する
threeColumnArticles.forEach((article) => {
  console.log(article.dataset.indexNumber);
});
```

## CSS からのアクセス

データ属性はプレーンな HTML 属性であるため、[CSS](/ja/docs/Web/CSS) からもアクセスできることに注意してください。 例えば、記事の親データを表示するには、次のように CSS で[生成コンテンツ](/ja/docs/Web/CSS/Reference/Properties/content)において [`attr()`](/ja/docs/Web/CSS/Reference/Values/attr) 関数を使用して実現できます。

```css
article::before {
  content: attr(data-parent);
}
```

CSS の[属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)を使用して、次のようにデータに応じてスタイルを変更することもできます。

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

[この JS Bin の例](https://jsbin.com/ujiday/2/edit)では、これらすべてが一緒に機能していることがわかります。

データ属性を保存して、ゲームのスコアなど、絶えず変化する情報を含めることもできます。 ここで CSS セレクターと JavaScript アクセスを使用すると、独自の表示ルーチンを作成することなく、気の利いたエフェクトを作成できます。 生成したコンテンツと CSS トランジション（transition、遷移）を使用した例については、[このスクリーンキャスト](https://www.youtube.com/watch?v=On_WyUB1gOk)を参照してください（[JS Bin の例](https://jsbin.com/atawaz/3/edit)）。

データ値は文字列です。 スタイリングを有効にするには、セレクターで数値を引用符で囲む必要があります。

## 問題

支援技術がアクセスできない可能性があるため、データ属性に表示およびアクセス可能なコンテンツを保存しないでください。 さらに、検索クローラーはデータ属性の値にインデックスを付けない場合があります。

## 関連情報

- この記事は、[hacks.mozilla.org の JavaScript および CSS でのデータ属性の使用](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/)（英語）から改編されました。
- カスタム属性は SVG 2 も対応しています。 詳細については、{{domxref("HTMLElement.dataset")}} および {{SVGAttr("data-*")}} を参照してください。
- [HTML の data 属性の使用方法](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/)（Sitepoint、英語）
