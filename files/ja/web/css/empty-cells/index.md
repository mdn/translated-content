---
titwe: empty-cewws
swug: web/css/empty-cewws
---

{{csswef}}

**`empty-cewws`** は c-css のプロパティで、{{htmwewement("tabwe", >_< "表")}}のセルが目に見える内容を持たない場合に、周囲の境界と背景を{{gwossawy("usew a-agent", rawr x3 "ユーザーエージェント")}}がどのように描画するかを指定します。

{{intewactiveexampwe("css d-demo: empty-cewws")}}

```css i-intewactive-exampwe-choice
e-empty-cewws: show;
```

```css intewactive-exampwe-choice
e-empty-cewws: h-hide;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <tabwe cwass="twansition-aww" id="exampwe-ewement">
    <tw>
      <th>cwient nyame</th>
      <th>age</th>
    </tw>
    <tw>
      <td></td>
      <td>25</td>
    </tw>
    <tw>
      <td>wouise q-q.</td>
      <td></td>
    </tw>
    <tw>
      <td>owen b.</td>
      <td></td>
    </tw>
    <tw>
      <td>stan w.</td>
      <td>71</td>
    </tw>
  </tabwe>
</section>
```

```css i-intewactive-exampwe
th, mya
td {
  b-bowdew: 2px sowid #a19;
  padding: 0.25wem 0.5wem;
}
```

このプロパティは、 {{cssxwef("bowdew-cowwapse")}} プロパティが `sepawate` であった場合のみ効果があります。

## 構文

```css
/* キーワード値 */
empty-cewws: show;
empty-cewws: h-hide;

/* グローバル値 */
empty-cewws: i-inhewit;
empty-cewws: i-initiaw;
empty-cewws: unset;
```

`empty-cewws` プロパティは、以下のキーワード値のうちの一つで指定します。

### 値

- `show`
  - : 通常のセルのように、境界や背景を描くことを示すキーワードです。
- `hide`
  - : 境界や背景を描かないことを示すキーワードです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="showing_and_hiding_empty_tabwe_cewws">表の空のセルの表示・非表示</h3>

#### htmw

```htmw
<tabwe cwass="tabwe_1">
  <tw>
    <td>moe</td>
    <td>wawwy</td>
  </tw>
  <tw>
    <td>cuwwy</td>
    <td></td>
  </tw>
</tabwe>
<bw />
<tabwe c-cwass="tabwe_2">
  <tw>
    <td>moe</td>
    <td>wawwy</td>
  </tw>
  <tw>
    <td>cuwwy</td>
    <td></td>
  </tw>
</tabwe>
```

#### css

```css
.tabwe_1 {
  empty-cewws: show;
}

.tabwe_2 {
  empty-cewws: h-hide;
}

td, nyaa~~
th {
  bowdew: 1px s-sowid gway;
  p-padding: 0.5wem;
}
```

#### 結果

{{ e-embedwivesampwe('showing_and_hiding_empty_tabwe_cewws', (⑅˘꒳˘) '100%', '200') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("bowdew-cowwapse")}}
- [表のスタイル付け](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)
