---
title: "<table>: 表要素"
slug: Web/HTML/Element/table
l10n:
  sourceCommit: 48838af610dd803130997115dbe274a5a19c532e
---

{{HTMLSidebar}}

**`<table>`** は [HTML](/ja/docs/Web/HTML) の要素で、表形式のデータ、つまり、行と列の組み合わせによるセルに含まれたデータによる二次元の表で表現される情報です。

{{EmbedInteractiveExample("pages/tabbed/table.html","tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        以下の順となる。
        <ol>
          <li>任意の 1 個の {{HTMLElement("caption")}} 要素</li>
          <li>0 個以上の {{HTMLElement("colgroup")}} 要素</li>
          <li>任意の 1 個の {{HTMLElement("thead")}} 要素</li>
          <li>
            次の 2 つの選択肢から 1 つ:
            <ul>
              <li>0 個以上の {{HTMLElement("tbody")}} 要素</li>
              <li>1 個以上の {{HTMLElement("tr")}} 要素</li>
            </ul>
          </li>
          <li>任意の 1 個の {{HTMLElement("tfoot")}} 要素</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>フローコンテンツを受け入れるすべての要素。</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Table_Role"
            >table</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLTableElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

### 非推奨の属性

- `align` {{Deprecated_inline}}

  - : この列挙属性は、表がそれを包含する文書の中でどのように整列されなければならないかを示します。以下の値を取ります。

    - `left`: 表が文書の左端に表示される
    - `center`: 表が文書の中央に表示される
    - `right`: 表が文書の右端に表示される

    {{cssxref("margin-left")}} および {{cssxref("margin-right")}} を設定すると、align 属性に似た効果を得ることができます。

    - `left`: `margin-right: auto; margin-left: 0;`
    - `center`: `margin-right: auto; margin-left: auto;`
    - `right`: `margin-right: 0; margin-left: auto;`

- `bgcolor` {{Deprecated_inline}}

  - : 表の背景色です。値は [6 桁の 16 進 RGB コード](/ja/docs/Web/CSS/hex-color)で、その前に「`#`」が付きます。定義済みの[色キーワード](/ja/docs/Web/CSS/named-color)のうちの 1 つを使用することもできます。

    同様の効果を得るには、CSS の {{cssxref("background-color")}} プロパティを使用してください。

- `border` {{Deprecated_inline}}

  - : この整数値属性は、ピクセル値で、表を囲む枠の大きさを定義します。もし 0 が設定された場合、それは [`frame`](#frame) 属性が void に設定されることを意味します。

    同様の効果を得るには、 {{cssxref("border")}} 一括指定プロパティを使用してください。

- `cellpadding` {{Deprecated_inline}}

  - : この属性は、セルの内容と境界線の間の空間を、表示・非表示を問わず定義します。 cellpadding の長さがピクセル数で定義されたのであれば、このピクセルの大きさの余白が、4 方向全てに適用されるでしょう。長さがパーセント値を用いて定義された場合は、内容は中央に配置され、垂直方向（上下）の余白の合計値がこの値で表されます。水平方向 (左右) の余白の合計も同じことが言えます。

    同様の効果を得るには、 {{cssxref("border-collapse")}} プロパティを `<table>` 要素に適用し、値を collapse に設定した上で、 {{cssxref("padding")}} プロパティを {{HTMLElement("td")}} 要素に使用してください。

- `cellspacing` {{Deprecated_inline}}

  - : この属性は、2 つのセルの間の空間の寸法を、パーセント値またはピクセル値で定義します。この属性は水平方向と垂直方向の両方に適用され、表の上端と最初の行におけるセルの間、表の左端と最初の列の間、表の右端と最後の列の間、表の下端と最後の行の間に適用されます。

    同様の効果を得るには、{{cssxref("border-spacing")}} プロパティを `<table>` 要素に適用してください。`border-spacing` は、 {{cssxref("border-collapse")}} が collapse に設定されていると何の効果もありません。

- `frame` {{Deprecated_inline}}

  - : これは列挙型の属性で、表を囲む枠線のどの方向が表示されなければならないかを定義します。

    同様の効果を得るには、 {{cssxref("border-style")}} および {{cssxref("border-width")}} プロパティを使用してください。

- `rules` {{Deprecated_inline}}

  - : これは列挙型の属性で、表内のどこに罫線が引かれるべきかを定義します。以下の値を持つことができます。

    - none は、罫線を表示しないことを示します。既定値です。
    - `groups` は、 {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} の各要素によって定義される行グループと、 {{HTMLElement("col")}} や {{HTMLElement("colgroup")}} 要素によって定義される列グループの間にのみ、罫線を表示します。
    - `rows` は、行の間の罫線を表示します。
    - `columns` は、列の間の罫線を表示します。
    - `all` は、行と列の間の罫線が表示されます。

    同様の効果を得るには、{{cssxref("border")}} プロパティを {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}} のうち適切な要素に適用してください。

- `summary` {{Deprecated_inline}}
  - : この属性は、表の内容の概要を示す代替テキストを定義します。代わりに {{HTMLElement("caption")}} 要素を使用してください。
- `width` {{Deprecated_inline}}
  - : この属性は表の幅を定義します。代わりに CSS の {{cssxref("width")}} プロパティを使用してください。

## 例

### シンプルな表

```html
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

#### 結果

{{EmbedLiveSample('Simple_table', '100%', '100')}}

### その他のシンプルな表

```html
<p>ヘッダーのあるシンプルな表</p>
<table>
  <tr>
    <th>名</th>
    <th>姓</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>

<p>thead、tfoot、tbody のある表</p>
<table>
  <thead>
    <tr>
      <th>ヘッダー 1</th>
      <th>ヘッダー 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>本体 1</td>
      <td>本体 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>フッター 1</td>
      <td>フッター 2</td>
    </tr>
  </tfoot>
</table>

<p>colgroup のある表</p>
<table>
  <colgroup span="4"></colgroup>
  <tr>
    <th>国</th>
    <th>首都</th>
    <th>人口</th>
    <th>言語</th>
  </tr>
  <tr>
    <td>アメリカ合衆国</td>
    <td>ワシントン D.C.</td>
    <td>3 億 9 百万人</td>
    <td>英語</td>
  </tr>
  <tr>
    <td>スウェーデン</td>
    <td>ストックホルム</td>
    <td>9 百万人</td>
    <td>スウェーデン語</td>
  </tr>
</table>

<p>colgroup と col のある表</p>
<table>
  <colgroup>
    <col style="background-color: #0f0" />
    <col span="2" />
  </colgroup>
  <tr>
    <th>Lime</th>
    <th>Lemon</th>
    <th>Orange</th>
  </tr>
  <tr>
    <td>Green</td>
    <td>Yellow</td>
    <td>Orange</td>
  </tr>
</table>

<p>キャプションのあるシンプルな表</p>
<table>
  <caption>
    素晴らしいキャプション
  </caption>
  <tr>
    <td>素晴らしいデータ</td>
  </tr>
</table>
```

```css hidden
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table,
th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

#### 結果

{{EmbedLiveSample('Further_simple_examples', '100%', '700')}}

### 表のソート

#### 表の行のソート

HTML の表の行（[`<tr>`](/ja/docs/Web/HTML/Element/tr) 要素）をソートするネイティブの方法はありません。しかし、[`Array.prototype.slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.prototype.sort()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [`Node.removeChild()`](/ja/docs/Web/API/Node/removeChild), [`Node.appendChild()`](/ja/docs/Web/API/Node/appendChild) を使用して、独自の `sort()` 関数を実装し、`<tr>` 要素の [`HTMLCollection`](/ja/docs/Web/API/HTMLCollection) をソートすることができます。

次の例では、このような例を見ることができます。これを \<tbody> 要素に実装し、表のセルを値の昇順にソートし、それに合わせて表示を更新します。

##### HTML

```html
<table>
  <tbody>
    <tr>
      <td>3</td>
    </tr>
    <tr>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
    </tr>
  </tbody>
</table>
```

##### JavaScript

```js
HTMLTableSectionElement.prototype.sort = function (cb) {
  Array.from(this.rows)
    .sort(cb)
    .forEach((e) => this.appendChild(this.removeChild(e)));
};

document
  .querySelector("table")
  .tBodies[0].sort((a, b) => a.textContent.localeCompare(b.textContent));
```

##### 結果

{{EmbedLiveSample('Sorting_table_rows', '100%', '100')}}

#### th 要素をクリックすることによるソート

次の例では、 `document` にあるすべての `<table>` 要素のすべての `<th>` 要素にイベントハンドラーを追加しています。 `<tbody>` のすべての行を、行に含まれる `td` セルに基づいてソートします。

> **メモ:** この方法では、 `<td>` 要素が子孫要素のない生のテキストで作成されていることを想定しています。

##### HTML

```html
<table>
  <thead>
    <tr>
      <th>Numbers</th>
      <th>Letters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3</td>
      <td>A</td>
    </tr>
    <tr>
      <td>2</td>
      <td>B</td>
    </tr>
    <tr>
      <td>1</td>
      <td>C</td>
    </tr>
  </tbody>
</table>
```

##### JavaScript

```js
const allTables = document.querySelectorAll("table");

for (const table of allTables) {
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.rows);
  const headerCells = table.tHead.rows[0].cells;

  for (const th of headerCells) {
    const cellIndex = th.cellIndex;

    th.addEventListener("click", () => {
      rows.sort((tr1, tr2) => {
        const tr1Text = tr1.cells[cellIndex].textContent;
        const tr2Text = tr2.cells[cellIndex].textContent;
        return tr1Text.localeCompare(tr2Text);
      });

      tBody.append(...rows);
    });
  }
}
```

##### 結果

{{EmbedLiveSample('Sorting_rows_with_a_click_on_the_th_element', '100%', '100')}}

### 巨大な表を小さな空間に表示

ウェブ上の表でよくある問題は、コンテンツの量が多い場合、小さな画面ではネイティブにはあまりうまく動作しないこと、スクロール可能にする方法が明らかではないことです。特にマークアップが CDN からくると、ラッパーを持つように変更することができません。

この例では、小さな空間に表を表示する方法の一つを紹介しています。HTML の内容は非常に大きいので非表示にしていますが、特に目立ったものはありません。この例では CSS の方が検査に便利です。

```html hidden
<table>
  <thead>
    <tr>
      <th>1<sup>3</sup> equals:
      <th>2<sup>3</sup> equals:
      <th>3<sup>3</sup> equals:
      <th>4<sup>3</sup> equals:
      <th>5<sup>3</sup> equals:
      <th>6<sup>3</sup> equals:
      <th>7<sup>3</sup> equals:
  <tbody>
    <tr>
      <td>row 1: 1
      <td>row 1: 8
      <td>row 1: 27
      <td>row 1: 64
      <td>row 1: 125
      <td>row 1: 216
      <td>row 1: 343
    <tr>
      <td>row 2: 1
      <td>row 2: 8
      <td>row 2: 27
      <td>row 2: 64
      <td>row 2: 125
      <td>row 2: 216
      <td>row 2: 343
    <tr>
      <td>row 3: 1
      <td>row 3: 8
      <td>row 3: 27
      <td>row 3: 64
      <td>row 3: 125
      <td>row 3: 216
      <td>row 3: 343
    <tr>
      <td>row 4: 1
      <td>row 4: 8
      <td>row 4: 27
      <td>row 4: 64
      <td>row 4: 125
      <td>row 4: 216
      <td>row 4: 343
    <tr>
      <td>row 5: 1
      <td>row 5: 8
      <td>row 5: 27
      <td>row 5: 64
      <td>row 5: 125
      <td>row 5: 216
      <td>row 5: 343
    <tr>
      <td>row 6: 1
      <td>row 6: 8
      <td>row 6: 27
      <td>row 6: 64
      <td>row 6: 125
      <td>row 6: 216
      <td>row 6: 343
    <tr>
      <td>row 7: 1
      <td>row 7: 8
      <td>row 7: 27
      <td>row 7: 64
      <td>row 7: 125
      <td>row 7: 216
      <td>row 7: 343
    <tr>
      <td>row 8: 1
      <td>row 8: 8
      <td>row 8: 27
      <td>row 8: 64
      <td>row 8: 125
      <td>row 8: 216
      <td>row 8: 343
    <tr>
      <td>row 9: 1
      <td>row 9: 8
      <td>row 9: 27
      <td>row 9: 64
      <td>row 9: 125
      <td>row 9: 216
      <td>row 9: 343
    <tr>
      <td>row 10: 1
      <td>row 10: 8
      <td>row 10: 27
      <td>row 10: 64
      <td>row 10: 125
      <td>row 10: 216
      <td>row 10: 343
    <tr>
      <td>row 11: 1
      <td>row 11: 8
      <td>row 11: 27
      <td>row 11: 64
      <td>row 11: 125
      <td>row 11: 216
      <td>row 11: 343
    <tr>
      <td>row 12: 1
      <td>row 12: 8
      <td>row 12: 27
      <td>row 12: 64
      <td>row 12: 125
      <td>row 12: 216
      <td>row 12: 343
    <tr>
      <td>row 13: 1
      <td>row 13: 8
      <td>row 13: 27
      <td>row 13: 64
      <td>row 13: 125
      <td>row 13: 216
      <td>row 13: 343
    <tr>
      <td>row 14: 1
      <td>row 14: 8
      <td>row 14: 27
      <td>row 14: 64
      <td>row 14: 125
      <td>row 14: 216
      <td>row 14: 343
    <tr>
      <td>row 15: 1
      <td>row 15: 8
      <td>row 15: 27
      <td>row 15: 64
      <td>row 15: 125
      <td>row 15: 216
      <td>row 15: 343
    <tr>
      <td>row 16: 1
      <td>row 16: 8
      <td>row 16: 27
      <td>row 16: 64
      <td>row 16: 125
      <td>row 16: 216
      <td>row 16: 343
    <tr>
      <td>row 17: 1
      <td>row 17: 8
      <td>row 17: 27
      <td>row 17: 64
      <td>row 17: 125
      <td>row 17: 216
      <td>row 17: 343
    <tr>
      <td>row 18: 1
      <td>row 18: 8
      <td>row 18: 27
      <td>row 18: 64
      <td>row 18: 125
      <td>row 18: 216
      <td>row 18: 343
    <tr>
      <td>row 19: 1
      <td>row 19: 8
      <td>row 19: 27
      <td>row 19: 64
      <td>row 19: 125
      <td>row 19: 216
      <td>row 19: 343
    <tr>
      <td>row 20: 1
      <td>row 20: 8
      <td>row 20: 27
      <td>row 20: 64
      <td>row 20: 125
      <td>row 20: 216
      <td>row 20: 343
</table>
```

これらのスタイルを見ると、表の {{cssxref("display")}} プロパティが `block` に設定されていることに気づくでしょう。これによりスクロールが可能になりますが、テーブルはその完全性の一部を失い、テーブルのセルが可能な限り小さくなろうとします。この問題を軽減するために、`<tbody>` の {{cssxref("white-space")}} を `nowrap`に設定しました。しかし、`<thead>` ではこれを行わないようにしています。これは、長いタイトルで列がデータを表示するために必要以上に広くなるのを避けるためです。

下にスクロールしている間、表のヘッダーをページ上に保持するために、 {{cssxref("position")}} を `<th>` 要素の上で粘着するように設定しました。 {{cssxref("border-collapse")}} を `collapse` に設定して **いない**ことに注意してください。

```css
table,
th,
td {
  border: 1px solid;
}

table {
  width: 100%;
  max-width: 400px;
  height: 240px;
  margin: 0 auto;
  display: block;
  overflow-x: auto;
  border-spacing: 0;
}

tbody {
  white-space: nowrap;
}

th,
td {
  padding: 5px 10px;
  border-top-width: 0;
  border-left-width: 0;
}

th {
  position: sticky;
  top: 0;
  background: #fff;
  vertical-align: bottom;
}

th:last-child,
td:last-child {
  border-right-width: 0;
}

tr:last-child td {
  border-bottom-width: 0;
}
```

#### 結果

{{EmbedLiveSample('Displaying_large_tables_in_small_spaces', '100%', 240)}}

## アクセシビリティの考慮

### キャプション

{{HTMLElement("caption")}} 要素は明確かつ簡潔に表の目的を示すことに価値があるため、これを提供することで、表の残りの部分を読む必要があるか、飛ばすかを判断するのに役立ちます。

これはスクリーンリーダーのような支援技術を利用して操作している人、弱視の人、認知問題を抱えた人にとって役立ちます。

- [MDN \<caption> を用いて表にタイトルをつける](/ja/docs/Learn/HTML/Tables/Advanced#caption_を用いて表にキャプションを追加する)
- [Caption & Summary • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### 行と列のスコープ付け

ヘッダー要素の [`scope`](/ja/docs/Web/HTML/Element/th#scope) 属性は、単純な内容の場合はスコープが推測できるので冗長になります。しかし、支援技術によっては正しく推測することに失敗する事があるため、ヘッダーにスコープを設定すると使い勝手が向上することがあります。複雑な表では、スコープを指定するとセルとヘッダーの関係に関する必要な情報を提供することができます。

#### 例

```html
<table>
  <caption>
    Color names and values
  </caption>
  <tbody>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">HEX</th>
      <th scope="col">HSLa</th>
      <th scope="col">RGBa</th>
    </tr>
    <tr>
      <th scope="row">Teal</th>
      <td><code>#51F6F6</code></td>
      <td><code>hsl(180 90% 64% / 1)</code></td>
      <td><code>rgb(81 246 246 / 1)</code></td>
    </tr>
    <tr>
      <th scope="row">Goldenrod</th>
      <td><code>#F6BC57</code></td>
      <td><code>hsl(38 90% 65% / 1)</code></td>
      <td><code>rgba(246 188 87 / 1)</code></td>
    </tr>
  </tbody>
</table>
```

##### 結果

{{EmbedLiveSample('Scoping_rows_and_columns')}}

{{HTMLElement("th")}} 要素に `scope="col"` を宣言すると、セルが列の一番上にあることを記述するのに役立ちます。 {{HTMLElement("th")}} 要素に `scope="row"` を宣言すると、セルが行の最初の列であることを記述するのに役立ちます。

- [MDN 視覚障碍者向けの表](/ja/docs/Learn/HTML/Tables/Advanced#視覚障碍者向けの表)
- [Tables with two headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tables with irregular headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Using the scope attribute to associate header cells and data cells in data tables | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### 複雑な表

スクリーンリーダーのような支援技術は、ヘッダーのセルを厳密に水平または垂直方向に関連付けすることができない表を解析するのが困難な場合があります。これはつまり、 [`colspan`](/ja/docs/Web/HTML/Element/td#colspan) に [`rowspan`](/ja/docs/Web/HTML/Element/td#rowspan) 属性がある場合のことです。

できれば、テーブルの内容を表現するための別な方法、例えばより小さい表の集合に分解するなどで、 `colspan` および `rowspan` 属性に依存する必要がないようにすることを考慮してください。これは支援技術を使用している人が表の内容を理解しやすくするのに加えて、表のレイアウトの関連を理解することが難しい認識障碍を持った人にも利益になります。

表を分割することができないのであれば、 [`id`](/ja/docs/Web/HTML/Global_attributes#id) および [`headers`](/ja/docs/Web/HTML/Element/td#headers) 属性の組み合わせを用いて、表のセルとそのセルに関連したヘッダーをプログラム的に結び付けてください。

- [MDN 視覚障碍者向けの表](/ja/docs/Learn/HTML/Tables/Advanced#視覚障碍者向けの表)
- [Tables with multi-level headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables | Techniques for W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML データ表のチュートリアル](/ja/docs/Learn/HTML/Tables)
- `<table>` 要素をスタイルするのに特に役に立つであろう CSS の プロパティ:

  - {{cssxref("width")}}: 表の幅を定義
  - {{cssxref("border")}}, {{cssxref("border-style")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}}: セルの境界線、罫線、枠線の外観を制御
  - {{cssxref("margin")}} および {{cssxref("padding")}}: 個別のセルの内容を整形
  - {{cssxref("text-align")}} および {{cssxref("vertical-align")}}: 文字列やセルの内容の配置
