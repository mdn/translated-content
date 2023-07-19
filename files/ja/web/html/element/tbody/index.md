---
title: "<tbody>: テーブル本体要素"
slug: Web/HTML/Element/tbody
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{HTMLSidebar}}

**`<tbody>`** は [HTML](/ja/docs/Web/HTML) の要素で、表の一連の行（{{HTMLElement("tr")}} 要素）を内包し、その部分が表（{{HTMLELement("table")}}）の本体部分を構成することを表します。

{{EmbedInteractiveExample("pages/tabbed/tbody.html","tabbed-taller")}}

`<tbody>` 要素は、親戚である {{HTMLElement("thead")}} や {{HTMLElement("tfoot")}} と共に、画面やプリンターでの描画で利用できる有用な意味的情報を提供します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>0 個以上の {{HTMLElement("tr")}} 要素</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        <code>&lt;tbody&gt;</code> 要素の開始タグは、<code>&lt;tbody&gt;</code> 要素の中の最初のものが {{HTMLElement("tr")}} 要素であり、その要素の直前に終了タグが省略された <code>&lt;tbody&gt;</code> 要素、{{HTMLElement("thead")}} 要素、{{HTMLElement("tfoot")}} 要素がない場合、省略できます。（空要素の場合は省略できません。）
        <code>&lt;tbody&gt;</code> 要素の終了タグは、<code>&lt;tbody&gt;</code> 要素の直後に <code>&lt;tbody&gt;</code> 要素または {{HTMLElement("tfoot")}} 要素が続く場合、または親要素にまだコンテンツがない場合に省略できます。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("table")}} 要素。 <code>&lt;tbody&gt;</code> 要素は
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}} の各要素の後に配置することができます。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role"
            >rowgroup</a
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
      <td>{{domxref("HTMLTableSectionElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

### 非推奨の属性

- `align` {{deprecated_inline}}

  - : この列挙属性は各セルの中身について、水平方向の配置方法を制御します。以下の値が指定可能です。

    - `left`: 中身をセルの左側に揃えます。
    - `center`: 中身をセル内で中央揃えにします。
    - `right`: 中身をセルの右側に揃えます。
    - `justify`: 中身がセル内で両端揃えになるように、テキストコンテンツに空白を挿入します。
    - `char`: テキストコンテンツを特定の文字に対して、最小のオフセットで揃えます。特定の文字は [`char`](#char) 属性および [`charoff`](#charoff) 属性で定義します。

    この属性を設定しない場合は、値が `left` であるとみなされます。

    この属性は非推奨であるため、代わりに CSS の {{cssxref("text-align")}} プロパティを使用してください。

    > **メモ:** `text-align` プロパティには、 `align="char"` と同等の機能がどのブラウザーでも実装されていません。 [`text-align` のブラウザーの互換性の節](/ja/docs/Web/CSS/text-align#ブラウザーの互換性) で `<string>` の値を確認してください。

- `bgcolor` {{Deprecated_inline}}

  - : 表の背景色です。 [6 桁の 16 進 RGB コード](/ja/docs/Web/CSS/hex-color)の先頭に '`#`' をつけたものです。定義済みの[色キーワード](/ja/docs/Web/CSS/named-color)のうちの一つを利用することもできます。

    この属性は非推奨であり、代わりに CSS の {{cssxref("background-color")}} プロパティを使用してください。

- `char` {{deprecated_inline}}
  - : この属性は、列内のセルで揃える文字を設定します。よくある値としては、数値や金額を揃えようとするときのピリオド (.) があります。[`align`](#align) 属性を `char` に設定していない場合は、この属性は無視されます。
- `charoff` {{deprecated_inline}}
  - : この属性は、 `char` 属性で指定した揃え文字から列のデータをオフセットする文字数を示します。
- `valign` {{deprecated_inline}}

  - : この属性は、表本体の各行のセルにおける垂直方向のテキスト配置方法を指定します。以下の値が指定可能です。

    - `baseline`: テキストを可能な限りセルの下端に近づけますが、下端ではなく文字の[ベースライン](https://en.wikipedia.org/wiki/Baseline_%28typography%29)に揃えます。文字がサイズ全体に渡る場合は、 `bottom` と同じ効果になります。
    - `bottom`: テキストを可能な限りセルの下端に近づけて配置します。
    - `middle`: テキストをセル内の中央に置きます。
    - `top`: テキストを可能な限りセルの上端に近づけて配置します。

    この属性は非推奨であり、代わりに CSS の {{cssxref("vertical-align")}} プロパティを使用してください。

## 使用上のメモ

- 表に (意味的なヘッダー行を識別するために) {{HTMLElement("thead")}} ブロックがある場合、 `<tbody>` ブロックはその後に置く*必要があります*。
- `<tbody>` を使用する場合、表の行 ({{HTMLElement("tr")}} 要素) を {{HTMLElement("table")}} の直接の子として置くことはできませんが、 `<tbody>` の中には置くことができます。 `<tbody>` を使用する場合は、ヘッダーでもフッターでもない行をすべてその中に入れる必要があります。
- 文書を印刷するとき、複数のページにまたがる表では、 `<thead>` および {{htmlelement("tfoot")}} 要素が各ページで共通の（またはよく似た）情報を指定するのに対し、 `<tbody>` 要素の中身は一般に、ページごとに異なります。
- 表が (ウィンドウのような) 画面に表示される場合で、表全体を表示するのに十分な大きさがないとき、{{Glossary("user agent", "ユーザーエージェント")}}は `<thead>`, `<tbody>`, `<tfoot>`, {{HTMLElement("caption")}} ブロックを親である表から独立してユーザーがスクロールさせることができるようにするかもしれません。
- 連続していれば、1 つの表の中に複数の `<tbody>` を使用することが*できます*。これにより必要に応じて、巨大な表の行を複数のセクションに分割し、個別に整形することができます。

## 例

以下の例では、 `<tbody>` 要素の使用例を示します。このタグが使われているその他の例は、 {{ HTMLElement("table", "", "#例") }} の例を参照してください。

### 基本的な例

これは比較的単純な例で、学生のグループについて情報を一覧する表を {{HTMLElement("thead")}} および {{HTMLElement("tbody")}} で作成し、本体内に行番号を表示します。

#### HTML

表の HTML は下記のとおりです。なお、学生に関する情報を含む本体のセルはすべて、単一の `<tbody>` 要素の中に入っています。

```html
<table>
  <thead>
    <tr>
      <th>Student ID</th>
      <th>Name</th>
      <th>Major</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
      <td>コンピューター科学</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
      <td>ロシア文学</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
      <td>天体物理学</td>
    </tr>
  </tbody>
</table>
```

#### CSS

表を整形する CSS を次に示します。

```css
table {
  border: 2px solid #555;
  border-collapse: collapse;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

まず、表の全体的なスタイル属性を設定し、表の外枠の太さ、スタイル、色を設定し、{{cssxref("border-collapse")}} を使用して、セル間に間隔と独自の境界線を置くのではなく、境界線が隣接セル間で共有されるようにします。{{cssxref("font")}} は、表の初期フォントを設定するために使用されます。

```css
th,
td {
  border: 1px solid #bbb;
  padding: 2px 8px 0;
  text-align: left;
}
```

それから、すべてのデータセルだけでなく、{{HTMLElement("td")}} および {{HTMLElement("th")}} のセルの間で共有されるスタイルを含む、テーブル内の大部分のセルに設定されるスタイルです。セルに対して、1 ピクセルの太さで薄い灰色の輪郭、パディングの調整、すべてのセルを {{cssxref("text-align")}} を使用して左揃えにします。

```css
thead > tr > th {
  background-color: #cce;
  font-size: 18px;
  border-bottom: 2px solid #999;
}
```

最後に、{{HTMLElement("thead")}} ブロックに含まれるヘッダーのセルには追加の整形を行います。より暗い {{cssxref("background-color")}} にし、大きなフォントサイズにして、下の境界線に他のセルの境界線よりも太く暗い線を引きます。

#### 結果

結果の表は次のようになります。

{{EmbedLiveSample("Basic_example", 650, 150)}}

### 複数の本体

複数の `<tbody>` 要素を使用することで、表内の複数のセクションを作成することができます。それぞれに独自のヘッダー行がある場合もありますが、{{HTMLElement("thead")}} は表 1 つあたり 1 つしか置けません！。そのため、それぞれの `<tbody>` にヘッダーを作成するには、{{HTMLElement("th")}} 要素で埋められた {{HTMLElement("tr")}} を使用する必要があります。どのようにするかを見てみましょう。

前回の例から、リストに数人の学生を追加し、各行に学生の専攻を書く代わりに、学生を選考でグループ化し、ヘッダー行で選考を表すように更新しましょう。

#### 結果

最初に、結果の表を見て、作ろうとしているものを知っておきましょう。

{{EmbedLiveSample("Multiple_bodies", 650, 250)}}

#### HTML

修正した HTML はこのようになります。

```html
<table>
  <thead>
    <tr>
      <th>Student ID</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2">コンピューター科学</th>
    </tr>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
    </tr>
    <tr>
      <td>4077830</td>
      <td>Pierce, Benjamin</td>
    </tr>
    <tr>
      <td>5151701</td>
      <td>Kirk, James</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="2">ロシア文学</th>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="2">天体物理学</th>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
    </tr>
    <tr>
      <td>8892377</td>
      <td>Toyota, Hiroko</td>
    </tr>
  </tbody>
</table>
```

なお、各専攻は個別の `<tbody>` ブロックに配置され、最初の行に単一の {{HTMLElement("th")}} 要素に [`colspan`](#colspan) 属性を付けて表の幅全体に広がるようにしています。このヘッダーが `<tbody>` 内の専攻の名前を示します。

そして、それぞれの専攻の `<tbody>` で残りの行は 2 つのセルから成り、最初の行は学生番号で、2 つ目の行は名前です。

#### CSS

```css hidden
table {
  border: 2px solid #555;
  border-collapse: collapse;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    sans-serif;
}

th,
td {
  border: 1px solid #bbb;
  padding: 2px 8px 0;
  text-align: left;
}

thead > tr > th {
  background-color: #cce;
  font-size: 18px;
  border-bottom: 2px solid #999;
}
```

CSS のほとんどは変更ありません。しかし、（{{HTMLElement("thead")}} に含まれるものではなく） `<tbody>` に直接含まれるヘッダーセルに対して、若干のスタイルを追加しましょう。これはそれぞれの専攻を示すヘッダーに使われます。

```css
tbody > tr > th {
  background-color: #dde;
  border-bottom: 1.5px solid #bbb;
  font-weight: normal;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `<tbody>` 要素のスタイル設定に役立つであろう CSS プロパティと[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes):

  - {{ cssxref(":nth-child") }} 擬似クラス: 列内のセルの配置を設定するため
  - {{ cssxref("text-align") }} プロパティ: すべてのセル内コンテンツを '.' などの同一文字で揃えるための
