---
title: "<u>: 非言語的注釈 (下線) 要素"
slug: Web/HTML/Element/u
---

{{HTMLSidebar}}

**HTML** の**非言語的注釈要素** (**`<u>`**) は、非言語的に注釈があることを示す方法で表示する行内テキストの区間を示します。これは既定で単純な実線の下線として表示されますが、 CSS を使用して変更することもできます。

> **警告:** この要素は古いバージョンの HTML で "Underline" (下線) 要素と呼ばれる傾向があり、現在でもそのように誤用されることがあります。テキストに下線を引くのであれば、代わりに CSS の {{cssxref("text-decoration")}} プロパティを `underline` に設定したスタイルを適用してください。

{{EmbedInteractiveExample("pages/tabbed/u.html", "tabbed-shorter")}}

`<u>` を使用するのがどのような場合に適切で、どのような場合に適切でないのかについての詳細は、[使用上の注意](#使用上の注意)を参照してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上の注意

他の純粋な整形要素と同様に、以前の HTML の下線 (`<u>`) 要素は HTML 4 で非推奨になりました。しかし `<u>` は、 HTML 5 で新しい意味論的な、何らかの曖昧な注釈が適用されるテキストをマークするという意味で復活しました。

> **メモ:** (既定で下線が引かれる) ハイパーリンクと誤認されるような方法で、 (これも既定で下線が引かれる) `<u>` 要素を使用することは避けるように注意してください。

### 用途

`<u>` 要素の有効な用途としては、綴りエラーの通知、中国語の文字列の[固有名詞記号](https://en.wikipedia.org/wiki/proper_name_mark)の記述、その他の形の注釈などがあります。

単に表現の目的で下線を引いたり、本の題名を記述したりするために `<u>` を使用するべきでは*ありません*。

### 仕様を考慮するべきその他の要素

多くの場合、次のような場合は `<u>` よりも他の要素を使用するべきです。

- {{HTMLElement("em")}}: 強調の記述
- {{HTMLElement("b")}}: テキストに注意を引かせる
- {{HTMLElement("mark")}}: キーワードや句をマーク
- {{HTMLElement("strong")}}: 強い重要性のあるテキストを示す
- {{HTMLElement("cite")}}: 書籍やその他の出版物の題名をマーク
- {{HTMLElement("i")}}: 西洋言語のテキストで技術用語、音訳、考え、船名などを記述

(`<u>` で作成された非言語的な注釈に対して) 言語的な注釈を提供する場合は、 {{HTMLElement("ruby")}} 要素を使用してください。

意味論的な意味なしで下線を引きたい場合は、 {{cssxref("text-decoration")}} プロパティの値 `underline` を使用してください。

## 例

### 綴りエラーを表示

この例は、 `<u>` 要素と CSS を使用して、綴り間違いのエラーを含む段落を表示し、エラー箇所をこの目的でよく使用される、赤い波線の下線スタイルで示します。

#### HTML

```html
<p>This paragraph includes a <u class="spelling">wrnogly</u>
spelled word.</p>
```

この HTML では、 `<u>` にクラス `spelling` を付けて、 "wrongly" という語の綴りミスを示すために使用しているのが分かります。

#### CSS

```css
u.spelling {
  text-decoration: red wavy underline;
}
```

この CSS は `<u>` 要素にクラス `spelling` がついてスタイル付けされるとき、テキストすぐ下に赤い波線の下線を引くことを示しています。これはスペルミスをスタイル付けするときに一般的なスタイル付けです。 `red dashed underline` を使って表現できるスタイルもよく使われます。

#### 結果

結果は現在利用可能なもっと有名なワープロを使ってきた人になじみがあるものでしょう。

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### \<u> の回避

多くの場合、実際には `<u>` を使用したいと思わないでしょう。いくつかの場面で代わりに何をするべきかを示す例を挙げましょう。

#### 意味を伴わない下線

意味を含むことがないテキストに下線を引くには、次のように、 {{HTMLElement("span")}} 要素と {{cssxref("text-decoration")}} プロパティに `"underline"` を設定したものを使用してください。

##### HTML

```html
<span class="underline">Today's Special</span>
<br>
Chicken Noodle Soup With Carrots
```

##### CSS

```css
.underline {
  text-decoration: underline;
}
```

##### 結果

{{EmbedLiveSample("Non-semantic_underlines", 650, 80)}}

#### 書籍の題名の表現

書籍の題名は `<u>` や `<i>` でもなく、 {{HTMLElement("cite")}} 要素を使用して表現してください。

##### HTML

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### cit 要素のスタイル付け

なお、 `<cite>` 要素の既定のスタイルではテキストを斜体で表示します。 CSS を使用して上書きすることができます。

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
```

```css
cite {
  font-style: normal;
  text-decoration: underline;
}
```

{{EmbedLiveSample("Styling_the_cite_element", 650, 80)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- ふつう、 {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}}, {{HTMLElement("cite")}} 要素が代わりに使用されます。
- 意味論的なものではない下線には、 CSS の {{cssxref("text-decoration")}} プロパティを使用してください。
