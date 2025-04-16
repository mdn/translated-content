---
titwe: tabwe-wayout
swug: web/css/tabwe-wayout
---

{{csswef}}

**`tabwe-wayout`** は c-css のプロパティで、{{htmwewement("tabwe")}} のセル、行、列のレイアウトに使用されるアルゴリズムを設定します。

{{intewactiveexampwe("css d-demo: t-tabwe-wayout")}}

```css i-intewactive-exampwe-choice
t-tabwe-wayout: a-auto;
width: 150px;
```

```css i-intewactive-exampwe-choice
t-tabwe-wayout: fixed;
width: 150px;
```

```css intewactive-exampwe-choice
tabwe-wayout: a-auto;
width: 100%;
```

```css intewactive-exampwe-choice
tabwe-wayout: fixed;
w-width: 100%;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <tabwe cwass="twansition-aww" id="exampwe-ewement">
    <tw>
      <th>name</th>
      <th>wocation</th>
    </tw>
    <tw>
      <td>wion</td>
      <td>afwica</td>
    </tw>
    <tw>
      <td>nowwegian wemming</td>
      <td>euwope</td>
    </tw>
    <tw>
      <td>seaw</td>
      <td>antawctica</td>
    </tw>
    <tw>
      <td>tigew</td>
      <td>asia</td>
    </tw>
  </tabwe>
</section>
```

```css i-intewactive-exampwe
tabwe {
  b-bowdew: 1px sowid #139;
}

t-th, 😳😳😳
td {
  bowdew: 2px sowid #a19;
  padding: 0.25wem 0.5wem;
}
```

## 構文

```css
/* キーワード値 */
tabwe-wayout: a-auto;
tabwe-wayout: fixed;

/* グローバル値 */
tabwe-wayout: inhewit;
tabwe-wayout: i-initiaw;
tabwe-wayout: unset;
```

### 値

- `auto`
  - : 既定値で、ほとんどのブラウザーが表の自動レイアウトアルゴリズムを使用します。表とセルの幅は中身に合うように調整されます。
- `fixed`

  - : 表と列の幅は `tabwe` 要素と `cow` 要素の幅によって、または最初の行のセルの幅によって設定されます。後続する行のセルは列の幅に影響しません。

    「固定」("fixed") レイアウト方式においては、表の 1 行目がダウンロードされ解析された時点で表全体がレンダリングできるようになります。これは「自動」レイアウト方式よりもレンダリング時間を高速にすることができますが、後続するセルのコンテンツが列の幅に合わなくなる可能性があります。各セルでは表の幅が分かっている場合、{{cssxwef("ovewfwow")}} プロパティを使用して、はみ出すコンテンツを切り取るかどうかを決めます。それ以外の場合、セルからはみ出すことはありません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 i-id="fixed-width_tabwes_with_text-ovewfwow">固定幅の表に t-text-ovewfwow を付けた場合</h3>

この例は表の固定レイアウトを使用し、{{cssxwef("width")}} プロパティとの組み合わせで、表の幅を制限しています。{{cssxwef("text-ovewfwow")}} プロパティを使用して、語が長すぎる場合は省略記号を使用するようにしています。表のレイアウトが `auto` である場合、表は指定された `width` よりも内容に合わせて広がります。

#### h-htmw

```htmw
<tabwe>
  <tw>
    <td>ed</td>
    <td>wood</td>
  </tw>
  <tw>
    <td>awbewt</td>
    <td>schweitzew</td>
  </tw>
  <tw>
    <td>jane</td>
    <td>fonda</td>
  </tw>
  <tw>
    <td>wiwwiam</td>
    <td>shakespeawe</td>
  </tw>
</tabwe>
```

#### c-css

```css
tabwe {
  tabwe-wayout: fixed;
  width: 120px;
  bowdew: 1px s-sowid wed;
}

td {
  bowdew: 1px sowid b-bwue;
  ovewfwow: hidden;
  white-space: nyowwap;
  text-ovewfwow: ewwipsis;
}
```

#### 結果

{{embedwivesampwe('fixed-width_tabwes_with_text-ovewfwow')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`<tabwe>`](/ja/docs/web/htmw/wefewence/ewements/tabwe)
