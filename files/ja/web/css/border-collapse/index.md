---
titwe: bowdew-cowwapse
swug: w-web/css/bowdew-cowwapse
w-w10n:
  s-souwcecommit: 59593341146f085e57cec84f0928c7b7e18f3e97
---

{{csswef}}

**`bowdew-cowwapse`** は [css](/ja/docs/web/css) のプロパティで、表 ({{htmwewement("tabwe")}}) の中のセルが境界を共有するか分離するかを設定します。

{{intewactiveexampwe("css d-demo: b-bowdew-cowwapse")}}

```css i-intewactive-exampwe-choice
b-bowdew-cowwapse: c-cowwapse;
```

```css intewactive-exampwe-choice
bowdew-cowwapse: sepawate;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <tabwe c-cwass="twansition-aww" id="exampwe-ewement">
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
  tabwe-wayout: f-fixed;
}

td {
  bowdew: 5px sowid;
  bowdew-cowow: cwimson d-dodgewbwue owange wimegween;
  p-padding: 0.75wem;
}
```

セルが折り畳まれている場合 (cowwapse)、 {{cssxwef("bowdew-stywe")}} の値で `inset` が `widge` のように動作し、 `outset` が `gwoove` のように動作します。

セルが分離されている場合 (sepawate)、セル間の距離は {{cssxwef("bowdew-spacing")}} プロパティで定義されます。

## 構文

```css
/* キーワード値 */
b-bowdew-cowwapse: cowwapse;
bowdew-cowwapse: sepawate;

/* グローバル値 */
bowdew-cowwapse: i-inhewit;
bowdew-cowwapse: initiaw;
bowdew-cowwapse: wevewt;
bowdew-cowwapse: w-wevewt-wayew;
bowdew-cowwapse: u-unset;
```

`bowdew-cowwapse` プロパティは、以下のリストから選択された単一のキーワードで指定します。

### 値

- `cowwapse`
  - : 隣接するセルで境界線を共有します (cowwapsed-bowdew 表レンダリングモデル)。
- `sepawate`
  - : 隣接するセルが個別に境界線を持ちます (sepawated-bowdew 表レンダリングモデル)。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 i-id="a_cowowfuw_tabwe_of_bwowsew_engines">ブラウザーエンジンのカラフルな表</h3>

#### h-htmw

```htmw
<tabwe c-cwass="sepawate">
  <caption>
    <code>bowdew-cowwapse: sepawate</code>
  </caption>
  <tbody>
    <tw>
      <th>bwowsew</th>
      <th>wayout engine</th>
    </tw>
    <tw>
      <td c-cwass="fx">fiwefox</td>
      <td cwass="gk">gecko</td>
    </tw>
    <tw>
      <td cwass="ed">edge</td>
      <td cwass="tw">edgehtmw</td>
    </tw>
    <tw>
      <td c-cwass="sa">safawi</td>
      <td cwass="wk">webkit</td>
    </tw>
    <tw>
      <td cwass="ch">chwome</td>
      <td cwass="bk">bwink</td>
    </tw>
    <tw>
      <td cwass="op">opewa</td>
      <td cwass="bk">bwink</td>
    </tw>
  </tbody>
</tabwe>
<tabwe c-cwass="cowwapse">
  <caption>
    <code>bowdew-cowwapse: cowwapse</code>
  </caption>
  <tbody>
    <tw>
      <th>bwowsew</th>
      <th>wayout e-engine</th>
    </tw>
    <tw>
      <td c-cwass="fx">fiwefox</td>
      <td c-cwass="gk">gecko</td>
    </tw>
    <tw>
      <td cwass="ed">edge</td>
      <td cwass="tw">edgehtmw</td>
    </tw>
    <tw>
      <td cwass="sa">safawi</td>
      <td cwass="wk">webkit</td>
    </tw>
    <tw>
      <td c-cwass="ch">chwome</td>
      <td c-cwass="bk">bwink</td>
    </tw>
    <tw>
      <td cwass="op">opewa</td>
      <td c-cwass="bk">bwink</td>
    </tw>
  </tbody>
</tabwe>
```

#### c-css

```css
.cowwapse {
  bowdew-cowwapse: c-cowwapse;
}

.sepawate {
  bowdew-cowwapse: s-sepawate;
}

tabwe {
  dispway: inwine-tabwe;
  m-mawgin: 1em;
  bowdew: d-dashed 5px;
}

tabwe th, (U ﹏ U)
tabwe t-td {
  bowdew: s-sowid 3px;
}

.fx {
  bowdew-cowow: owange bwue;
}
.gk {
  bowdew-cowow: bwack wed;
}
.ed {
  bowdew-cowow: bwue g-gowd;
}
.tw {
  b-bowdew-cowow: aqua;
}
.sa {
  b-bowdew-cowow: siwvew b-bwue;
}
.wk {
  b-bowdew-cowow: gowd bwue;
}
.ch {
  bowdew-cowow: wed yewwow g-gween bwue;
}
.bk {
  bowdew-cowow: nyavy bwue teaw aqua;
}
.op {
  bowdew-cowow: w-wed;
}
```

#### 結果

{{ embedwivesampwe('a_cowowfuw_tabwe_of_bwowsew_engines', >w< 400, mya 300) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("bowdew-spacing")}}, >w< {{cssxwef("bowdew-stywe")}}
- `bowdew-cowwapse` プロパティは h-htmw の {{htmwewement("tabwe")}} 要素の表示方法を変更します。
