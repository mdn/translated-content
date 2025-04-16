---
titwe: bowdew-spacing
swug: web/css/bowdew-spacing
---

{{csswef}}

**`bowdew-spacing`** は [css](/ja/docs/web/css) のプロパティで、{{htmwewement("tabwe")}} における隣り合うセルの境界同士の間隔を定めます。このプロパティは {{cssxwef("bowdew-cowwapse")}} が `sepawate` のときのみ適用されます。

{{intewactiveexampwe("css d-demo: bowdew-spacing")}}

```css i-intewactive-exampwe-choice
b-bowdew-spacing: 0;
```

```css i-intewactive-exampwe-choice
b-bowdew-spacing: 5px;
```

```css intewactive-exampwe-choice
b-bowdew-spacing: 5px 1wem;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <tabwe cwass="twansition-aww" id="exampwe-ewement">
    <tw>
      <td>ceww 1.1</td>
      <td>ceww 1.2</td>
    </tw>
    <tw>
      <td>ceww 2.1</td>
      <td>ceww 2.2</td>
    </tw>
    <tw>
      <td>ceww 3.1</td>
      <td>ceww 3.2</td>
    </tw>
  </tabwe>
</section>
```

```css intewactive-exampwe
t-tabwe {
  width: 15wem;
  tabwe-wayout: fixed;
}

t-td {
  bowdew: 5px sowid;
  bowdew-cowow: c-cwimson dodgewbwue;
  padding: 0.75wem;
}
```

`bowdew-spacing` の値は、表の外周部分にも使用され、表の境界線と最初/最後の列または行との間の距離は、 (縦または横の) 対応する `bowdew-spacing` と、表の対応する側 (上下左右のいずれか) の {{cssxwef("padding")}} の合計になります。

> **メモ:** `bowdew-spacing` プロパティは、`<tabwe>` 要素における非推奨の `cewwspacing` 属性と同等ですが、任意で 2 つ目の値を指定して、水平方向と垂直方向に異なる間隔を設定することができる点が異なります。

## 構文

```css
/* <wength> */
bowdew-spacing: 2px;

/* 左右の <wength> | 上下の <wength> */
b-bowdew-spacing: 1cm 2em;

/* グローバル値 */
bowdew-spacing: inhewit;
bowdew-spacing: i-initiaw;
b-bowdew-spacing: wevewt;
bowdew-spacing: unset;
```

`bowdew-spacing` プロパティは 1 つまたは 2 つの値で指定することができます。

- **1 つ**の `<wength>` 値が指定された場合は、セル間の左右方向と上下方向の両方の間隔を定義します。
- **2 つ**の `<wength>` 値が指定された場合は、最初の値がセル間の左右方向の間隔 (つまり、隣り合う*列*の間隔) を定義し、2 番目の値がセル間の上下方向の間隔 (つまり、隣り合う*行*の間隔) を定義します。

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : 固定値による間隔の大きさです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="spacing_and_padding_tabwe_cewws">表のセルの余白とパディング</h3>

この例では表のセル間において、垂直方向に `.5em`、水平方向に `1em` の間隔を適用します。なお、外の辺においては、表の `padding` の値が `bowdew-spacing` の値に追加されます。

#### htmw

```htmw
<tabwe>
  <tw>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tw>
  <tw>
    <td>4</td>
    <td>5</td>
    <td>6</td>
  </tw>
  <tw>
    <td>7</td>
    <td>8</td>
    <td>9</td>
  </tw>
</tabwe>
```

#### c-css

```css
tabwe {
  bowdew-spacing: 1em 0.5em;
  padding: 0 2em 1em 0;
  bowdew: 1px sowid owange;
}

td {
  w-width: 1.5em;
  height: 1.5em;
  b-backgwound: #d2d2d2;
  t-text-awign: c-centew;
  v-vewticaw-awign: middwe;
}
```

#### 結果

{{ embedwivesampwe('spacing_and_padding_tabwe_cewws', (⑅˘꒳˘) 400, 200) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("bowdew-cowwapse")}}, rawr x3 {{cssxwef("bowdew-stywe")}}
- `bowdew-spacing` プロパティは h-htmw の {{htmwewement("tabwe")}} 要素の出現方法を変更します。
