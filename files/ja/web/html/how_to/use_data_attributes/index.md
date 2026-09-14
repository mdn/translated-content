---
title: データ属性の使用
slug: Web/HTML/How_to/Use_data_attributes
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

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

データ属性はプレーンな HTML 属性であるため、[CSS](/ja/docs/Web/CSS) からもアクセスできることに注意してください。 例えば、記事の親データを表示するには、次のように CSS で[生成コンテンツ](/ja/docs/Web/CSS/Reference/Properties/content)において {{cssxref("attr()")}} 関数を使用して実現できます。

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

データ値は文字列です。スタイル設定を適用するには、セレクター内で数値を引用符で囲む必要があります。

## 例

### スタイルの変化形

`callout` というクラスを想像してください。これに、"note" や "warning" といった異なる変化形を実装したいとします。従来は、単に異なるクラス名を使用するのが一般的でした。

```html
<div class="callout callout--note">...</div>
<div class="callout callout--warning">...</div>
```

```css
.callout {
  margin: 0.5em 0;
  padding: 0.5em;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
}

.callout--note {
  border-color: rgb(15 15 235);
  background-color: rgb(15 15 235 / 0.2);
}
.callout--warning {
  border-color: rgb(235 15 15);
  background-color: rgb(235 15 15 / 0.2);
}
```

データ属性がついている場合、次のような別の方法も検討することができます。

```html live-sample___callout-data-attr
<div class="callout">...</div>
<div class="callout" data-variant="note">...</div>
<div class="callout" data-variant="warning">...</div>
```

```css live-sample___callout-data-attr
.callout {
  margin: 0.5em 0;
  padding: 0.5em;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
}

/* デフォルトのスタイル */
.callout:not([data-variant]) {
  border-color: rgb(15 15 15);
  background-color: rgb(15 15 15 / 0.2);
}
.callout[data-variant="note"] {
  border-color: rgb(15 15 235);
  background-color: rgb(15 15 235 / 0.2);
}
.callout[data-variant="warning"] {
  border-color: rgb(235 15 15);
  background-color: rgb(235 15 15 / 0.2);
}
```

{{EmbedLiveSample("callout-data-attr", "", "200")}}

これには多くの利点があります。

- これにより、`callout` を追加せずに `callout--note` を適用したり、複数の変化形を同時に適用したりするなど、多くの不正な状態が排除されます。
- 別個の `data-variant` 属性を使用することで、リンティングや型チェックを通じて有効な値の静的解析をすることができます。
- 変化形を切り替える方が直感的です。`div.dataset.variant = "warning";` を、複数の段階を要求する [`classList`](/ja/docs/Web/API/Element/classList) を操作する代わりに使用することができます。

### DOM 要素に任意のデータを関連付ける

多くのウェブアプリでは、UI 状態の真正な情報源として JavaScript のデータが用いられています。このような場合、HTML 属性はレンダリングに必要なもののみを追加します。データ属性は、すべての情報がマークアップ内に存在し、JavaScript がイベント処理や状態の同期などにのみ必要な場合に役立ちます。

例えば、[スクロールマージン付きのカルーセル](/ja/docs/Web/API/IntersectionObserver/scrollMargin#スクロールマージン付きのカルーセル)の例では、すでに HTML ページに多くの `<img>` 要素が配置されています。画像のソースは、リクエストが発生しないようにするため、最初は `data-src` に格納されており、実際の `src` は、`<img>` がスクロールして表示範囲内に入ったときにのみ追加されます。データ（画像のソース）は要素と同じ場所に配置されており、JavaScript は動作を定義する役割のみを担っています。

## 問題

支援技術がアクセスできない可能性があるため、データ属性に表示およびアクセス可能なコンテンツを保存しないでください。 さらに、検索クローラーはデータ属性の値にインデックスしない場合があります。多くの場合、データ属性を表示させるだけであれば、[`textContent`](/ja/docs/Web/API/Node/textContent) を直接操作することが可能です。

## 関連情報

- この記事は、[hacks.mozilla.org の JavaScript および CSS でのデータ属性の使用](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/)（英語）から改編されました。
- カスタム属性は SVG 2 も対応しています。 詳細については、{{domxref("HTMLElement.dataset")}} および {{SVGAttr("data-*")}} を参照してください。
- [HTML の data 属性の使用方法](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/)（Sitepoint、英語）
