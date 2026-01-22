---
title: text-box-edge
slug: Web/CSS/Reference/Properties/text-box-edge
original_slug: Web/CSS/text-box-edge
l10n:
  sourceCommit: 9cc1f40340f37fa05d6573cc519c9844fa4940be
---

**`text-box-edge`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキスト要素のブロックコンテナーから切り取る空間の大きさを指定します。

フォントによって縦の空間が異なるため、過去にはウェブ上で一貫した組版を行うことは困難でした。 `text-box-edge` プロパティは、切り取る側を指定する対応プロパティ {{cssxref("text-box-trim")}} と合わせて使用することで、一貫した組版を容易に実現します。 `text-box-trim` が設定されていないか、 `none` に設定されている場合、 `text-box-edge` プロパティは効果はありません。

> [!NOTE]
> 一括指定プロパティの {{cssxref("text-box")}} を使用すると、 1 つの宣言で `text-box-edge` および `text-box-trim` の値を指定することができます。

## 構文

```css
/* 単一キーワード */
text-box-edge: auto;
text-box-edge: text;

/* 2 つの <text-edge> 値 */
text-box-edge: text text;
text-box-edge: text alphabetic;
text-box-edge: cap alphabetic;
text-box-edge: ex text;

/* グローバル値 */
text-box-edge: inherit;
text-box-edge: initial;
text-box-edge: revert;
text-box-edge: revert-layer;
text-box-edge: unset;
```

### 値

`text-box-edge` プロパティの値は、 `auto` または {{cssxref("&lt;text-edge&gt;")}} 値として指定します。

- `auto`
  - : 既定値です。`text-edge` の値 `text` と同じです。
- {{cssxref("&lt;text-edge&gt;")}}
  - : テキスト要素のブロックコンテナーを切り取る、上端と下端の位置を表す 1 つまたは 2 つの別個のキーワードです。
    - 2 つの値が指定されている場合、最初の値はテキストのブロック先頭 （上） 端に適用される切断動作を指定し、2 つ目の値はテキストのブロック末尾 （下） 端に適用される切断動作を指定します。
      - 切り取る上側の端の有効値は、`text`、`cap`、`ex` です。
      - 切り取る下側の端の有効値は、`text` と `alphabetic` です。
    - 1 つの値を指定すると、上端と下端の切り取り動作を指定します。執筆時点では、有効な単一の値は `text` だけです。

## 解説

テキストのみのコンテンツの高さは、フォントの高さに対して相対的です。デジタルフォントファイルでは、高さには大文字、アセンダー、ディセンダーなど、文字すべてが記載されています。フォントによってベースラインの高さが異なるため、同じ `font-size` を指定しても、テキストの行の高さが異なり、行間の外観に影響します。

`text-box-edge` プロパティを使用すると、テキストのブロックコンテナーの先頭の端や末尾の端から空間を切り取ることができます。これには、テキストのブロックの先頭の端およびブロック末尾の先頭、およびフォント内で定義されている{{glossary("leading", "行送り")}}（前述）を含めることができます。これは、切り取る空間の上端と下端を示す {{cssxref("&lt;text-edge&gt;")}} 値を指定することで実現します。

空間を切り取る端は、 {{cssxref("text-box-trim")}} プロパティを使用して指定します。例えば、テキストのブロックコンテナーの上端、下端、あるいはその両方から空間を切り取ることを選べます。

これらのプロパティを使用すると、ブロック方向のテキストの空間をより簡単に制御できます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `text-box-edge` の使用方法

英語やアラビア語などの横書き言語で使用する最も一般的な `text-box-edge` の値は、 `cap alphabetic` および `ex alphabetic` です。 `cap` の値は、テキスト要素のブロックコンテナーの上端を大文字の上端まで切り取り、 `ex` は上端をフォントの x 高（小文字の上端）まで切り取ります。いずれの場合も、 `alphabetic` は下端をテキストのベースラインと同じ高さに切り取ります。

この例では、2 つの {{htmlelement("p")}} 要素に対して、これらの 2 つの一般的な値の効果を示します。さらに、両方の {{cssxref("text-box-trim")}} に値 `trim-both` が設定されているため、開始端と終了端が切り取られます。

```html hidden
<p class="one">これは .one です。</p>

<p class="two">これは .two です。</p>
```

```css hidden
html {
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
}

p {
  margin: 0;
  font-size: 6rem;
  font-weight: bold;
}
```

```css
p {
  text-box-trim: trim-both;
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}

.one {
  text-box-edge: cap alphabetic;
}

.two {
  text-box-edge: ex alphabetic;
}
```

#### 結果

出力は次のとおりです。各段落の上部と下部に境界線を含めることで、それぞれのケースで空間がどのように切り取られているかを確認できるようにしています。

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### 対話的な `text-box-edge` 値の比較

完全な対話型の `text-box-edge` の例については、[text-box-trim ページ](/ja/docs/Web/CSS/Reference/Properties/text-box-trim#interactive_text-box-trim_and_text-box-edge_value_comparison)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("text-box")}}, {{cssxref("text-box-trim")}}
- {{cssxref("&lt;text-edge&gt;")}} データ型
- [CSS インラインレイアウト](/ja/docs/Web/CSS/Guides/Inline_layout)モジュール
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) (developer.chrome.com, 2025)
