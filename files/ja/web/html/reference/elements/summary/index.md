---
title: "<summary>: 概要明示要素"
slug: Web/HTML/Reference/Elements/summary
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`<summary>`** は [HTML](/ja/docs/Web/HTML) の要素で、 {{HTMLElement("details")}} 要素の折りたたみボックスの要約、キャプション、説明、凡例を表します。 `<summary>` 要素をクリックすると、親の `<details>` 要素の開閉状態を切り替えることができます。

{{InteractiveExample("HTML デモ: &lt;summary&gt;", "tabbed-shorter")}}

```html-nolint interactive-example
<details>
  <summary>
    キーはありますが、ドアはありません。スペースはありますが、部屋はありません。入れることはできますが、出すことはできません。これは何でしょう？
  </summary>
  キーボードです。
</details>
```

```css interactive-example
details {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}
```

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみを持ちます。

## 使用上の注意

`<summary>` 要素の中身には、見出しコンテンツ、プレーンテキスト、段落内で使用できる HTML が入れられます。

`<summary>` 要素は、 `<details>` 要素の最初の子として*のみ*使用できます。ユーザーがこの概要をクリックすると、親の `<details>` 要素が開閉し、 {{domxref("HTMLElement/toggle_event", "toggle")}} イベントが `<details>` 要素に送信され、状態が変化したことを知ることができます。

`<details>` の内容は、`<summary>` の{{glossary("accessible description", "アクセシブル説明")}}となります。

### 既定のラベルテキスト

`<details>` 要素の最初の子が `<summary>` 要素でない場合、{{Glossary("user agent", "ユーザーエージェント")}}は既定の文字列（ふつうは「詳細」）を折りたたみボックスのラベルとして使用します。

### 既定のスタイル

HTML 仕様書では、`<summary>` の既定のスタイルに `display: list-item` が含まれています。これで、ラベルの隣に既定で（多くは三角形で）表示される折りたたみウィジェットとして表示されるアイコンを変更したり削除したりすることができます。

スタイルを `display: block` に変更すると、展開用の三角印を削除することができます。

詳しくは[ブラウザーの互換性](#ブラウザーの互換性)の節をご覧ください。すべてのブラウザーがこの要素の機能すべてに対応しているわけではありません。

Safari などの Webkit ベースのブラウザーでは、標準外の CSS 擬似要素 `::-webkit-details-marker` によって、アイコンの表示を制御することが可能です。三角形の表示を消すには、 `summary::-webkit-details-marker { display: none }` を使用してください。

## 例

以下に `<summary>` を使用している例をいくつか示します。{{HTMLElement("details")}} 要素のドキュメントにもいくつか例があります。

### 基本的な例

{{HTMLElement("details")}} 要素の中で `<summary>` の使用を示す簡単な例です。

```html
<details open>
  <summary>概要</summary>
  <ol>
    <li>現金: $500.00</li>
    <li>現在の請求書: $75.30</li>
    <li>期限: 2019/05/06</li>
  </ol>
</details>
```

#### 結果

{{EmbedLiveSample("Basic_example", 650, 120)}}

### 見出しとしての概要

次のように、 `<summary>` の中で見出し要素を使用することができます。

```html
<details open>
  <summary><h4>概要</h4></summary>
  <ol>
    <li>現金: $500.00</li>
    <li>現在の請求書: $75.30</li>
    <li>期限: 2019/05/06</li>
  </ol>
</details>
```

#### 結果

{{EmbedLiveSample("Summaries_as_headings", 650, 200)}}

これは現在のところ、間隔の問題をいくつか抱えており、 CSS を使用して修正することができます。

> [!WARNING]
> `<summary>` 要素の既定のロールは [button](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)（子要素からはすべてのロールを外す）ですので、この例はスクリーンリーダーのような支援技術のユーザーには動作しません。`<h4>` のロールが削除されますので、これらのユーザーからは見出しとして扱われなくなります。

### 概要の中の HTML

この例は、 `<summary>` 要素にいくらか意味を追加して、ラベルを重要であると示します。

```html
<details open>
  <summary><strong>概要</strong></summary>
  <ol>
    <li>現金: $500.00</li>
    <li>現在の請求書: $75.30</li>
    <li>期限: 2019/05/06</li>
  </ol>
</details>
```

#### 結果

{{EmbedLiveSample("HTML_in_summaries", 650, 150)}}

### 概要のアイコンの変更

`<summary>` 要素のマーカーである展開の三角形は、 CSS でカスタマイズできます。マーカーは {{cssxref("::marker")}} 擬似要素を使用して指定することができます。この擬似要素は、 {{cssxref("list-style")}} 一括指定プロパティや、 {{cssxref("list-style-type")}} などの個別指定の成分プロパティを受け付けます。これにより、三角形を画像（通常は {{cssxref("list-style-image")}} を使用）または文字列（絵文字を含む）に変更することができます。この例では、生成コンテンツを介してカスタム開示アイコンを追加する前に、`list-style: none` を設定して、1 つの開示ウィジェットのコンテンツを置き換え、別のウィジェットからアイコンを削除しています。

#### CSS

最初の開示ウィジェットでは、 `::marker` のスタイルを設定し、 {{cssxref("content")}} を `<details>`要素の `[open]` 属性に基づいて変更します。2 番目のウィジェットでは、 `list-style` プロパティを使用してマーカーを除去し、 {{cssxref("::after")}} 擬似要素を使用してスタイルを設定した生成コンテンツを追加しています。また、Safari をターゲットとする `::-webkit-details-marker` のスタイルも記載しています。ブラウザー固有の擬似要素のセレクターは、セレクターリストを不正にしないよう、 {{cssxref(":is()")}} 擬似クラスに含めています。

```css
details {
  font-size: 1rem;
  font-family: "Open Sans", Calibri, sans-serif;
  border: solid;
  padding: 2px 6px;
  margin-bottom: 1em;
}

details:first-of-type summary::marker,
:is(::-webkit-details-marker) {
  content: "+ ";
  font-family: monospace;
  color: red;
  font-weight: bold;
}

details[open]:first-of-type summary::marker {
  content: "− ";
}

details:last-of-type summary {
  list-style: none;
  &::after {
    content: "+";
    color: white;
    background-color: darkgreen;
    border-radius: 1em;
    font-weight: bold;
    padding: 0 5px;
    margin-inline-start: 5px;
  }
  [open] &::after {
    content: "−";
  }
}
details:last-of-type summary::-webkit-details-marker {
  display: none;
}
```

CSS には、 `[open]` [属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)が含まれており、 `open` 属性が存在する（`<details>` が開いている）場合にのみ一致します。 {{cssxref(":first-of-type")}} および {{cssxref(":last-of-type")}} 擬似クラスは、同じ型の最初の要素および兄弟要素をターゲットにします。`-webkit-` 接頭辞付き擬似要素を {{cssxref(":is()")}} 擬似クラスの中に含めて[寛容なセレクターリスト](/ja/docs/Web/CSS/Reference/Selectors/Selector_list#寛容なセレクターリスト)にし、接頭辞付き擬似要素がブラウザーにとって不正な場合でも、セレクターブロック全体が不正になることを防ぎます。また、CSS の[入れ子](/ja/docs/Web/CSS/Reference/Selectors/Nesting_selector)も使用しています。[CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュールを参照してください。

#### HTML

```html-nolint
<h1>ヘレン・ケラーの名言</h1>

<details>
  <summary>女性の権利について</summary>
  <p>
    <q>私たちは、騎士道精神から、男性が女性に平等な権利を与え、国家の事務に女性をパートナーとして迎えることを期待して、投票を祈願し、説得し、懇願してきました。私たちは、彼らの常識が偏見や愚かさを打ち負かすことを期待していました。彼らの自慢の正義感が、人間の精神をしばしば束縛する誤りを克服するだろうと考えていました。しかし、私たちは常に手ぶらで立ち去らざるを得ませんでした。私たちはもう懇願しません。</q>
  </p>
</details>

<details>
  <summary>楽観主義について</summary>
  <p>
    <q>楽観主義とは、達成につながる信念です。期待がなければ、何もできません。</q>
  </p>
</details>
```

#### 結果

{{EmbedLiveSample("Changing the summary's icon", 650, 400)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        なし
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、任意で<a href="/ja/docs/Web/HTML/Guides/Content_categories#見出しコンテンツ"
          >見出しコンテンツ</a
        >を交ぜることができる
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>不可。開始タグと終了タグの両方が必要。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>{{HTMLElement("details")}} 要素</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td> <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("details")}}
