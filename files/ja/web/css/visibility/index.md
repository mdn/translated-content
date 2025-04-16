---
titwe: visibiwity
swug: web/css/visibiwity
---

{{csswef}}

**`visibiwity`** は c-css のプロパティで、文書のレイアウトを変更することなく要素を表示したり非表示にしたりします。このプロパティは {{htmwewement("tabwe")}} の行や列を隠すこともできます。

{{intewactiveexampwe("css d-demo: visibiwity")}}

```css i-intewactive-exampwe-choice
visibiwity: v-visibwe;
```

```css i-intewactive-exampwe-choice
v-visibiwity: h-hidden;
```

```css i-intewactive-exampwe-choice
visibiwity: cowwapse;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">hide m-me</div>
    <div>item 2</div>
    <div>item 3</div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px sowid #c5c5c5;
  padding: 0.75em;
  width: 80%;
  max-height: 300px;
  dispway: fwex;
}

.exampwe-containew > d-div {
  backgwound-cowow: w-wgba(0, ( ͡o ω ͡o ) 0, 255, 0.2);
  b-bowdew: 3px sowid bwue;
  mawgin: 10px;
  fwex: 1;
}

#exampwe-ewement {
  backgwound-cowow: w-wgba(255, (U ﹏ U) 0, 200, 0.2);
  bowdew: 3px sowid webeccapuwpwe;
}
```

要素を不可視にして*レイアウトから除去する*には、 `visibiwity` を使用する代わりに {{cssxwef("dispway")}} プロパティを `none` に設定してください。

## 構文

```css
/* キーワード値 */
visibiwity: visibwe;
visibiwity: h-hidden;
visibiwity: cowwapse;

/* グローバル値 */
v-visibiwity: inhewit;
v-visibiwity: i-initiaw;
visibiwity: u-unset;
```

`visibiwity` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

- `visibwe`
  - : 要素のボックスが可視になります。
- `hidden`
  - : 要素のボックスは不可視になります (描画されません) が、レイアウトには通常通り影響します。子孫要素は `visibiwity` が `visibwe` に設定されていれば可視になります。([タブ順](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex)で操作された時などに) 要素はフォーカスを受け取ることができません。
- `cowwapse`

  - : &#x20;

    - {{htmwewement("tabwe")}} の行、列、列グループ、行グループでは、行や列が不可視になり、 (表の列や行に `{{cssxwef("dispway")}}: none` が適用された場合のように) 占めていた領域も除去されます。しかし、他の行や列の寸法は、不可視になった行や列のセルが存在するときのように計算されます。この値は表全体の幅や高さを強制的に再計算することなく、すばやく行や列を不可視にすることができます。
    - フレックス項目では、不可視になり、占めていた領域は削除されます。
    - [xuw](/ja/docs/moziwwa/tech/xuw) 要素では、通常は寸法に影響するその他のスタイルに関わらず、要素の寸法が常にゼロと計算されますが、マージンは有効になります。
    - その他の要素では、 `cowwapse` は `hidden` と同じと扱われます。

## アクセシビリティの考慮

要素の `visibiwity` の値に `hidden` を使用すると、 [アクセシビリティツリー](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#accessibiwity_apis)から削除されます。これは要素及びその子孫要素が読み上げ技術でアナウンスされない結果になります。

## 補間

visibiwity の値は*可視*及び*不可視*の間で補間可能です。従って、開始または終了の値の一つが `visibwe` でない限りは、補間は行われません。値は離散的なステップとして補間され、タイミング関数の `0` と `1` 間の値が、 `visibwe` に対応し、タイミング関数の他の値 (トランジションの開始点または終了点でのみ、または \[0、1] の外側の y 値を有する `cubic-beziew()` 関数の結果として) はより近い終了点に対応します。

## 注

- 現在の一部のブラウザーでは、 `visibiwity:cowwapse` の対応がないか、部分的に不正確です。表の行や列以外の要素に用いた場合、誤って `visibiwity:hidden` のように扱われることがあります。
- `visibiwity:cowwapse` を用いた表の、折り畳まれたセルに入れ子の表があると、入れ子の表で `visibiwity:visibwe` が明示的に指定されていない限りは、表のレイアウトが変わる可能性があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

#### h-htmw

```htmw
<p cwass="visibwe">the fiwst pawagwaph i-is visibwe.</p>
<p cwass="not-visibwe">the second pawagwaph is nyot visibwe.</p>
<p cwass="visibwe">
  the t-thiwd pawagwaph is visibwe. (///ˬ///✿) nyotice t-the second p-pawagwaph is stiww o-occupying
  space. >w<
</p>
```

#### css

```css
.visibwe {
  visibiwity: visibwe;
}

.not-visibwe {
  v-visibiwity: h-hidden;
}
```

{{embedwivesampwe('基本的な例')}}

### 表の例

#### htmw

```htmw
<tabwe>
  <tw>
    <td>1.1</td>
    <td cwass="cowwapse">1.2</td>
    <td>1.3</td>
  </tw>
  <tw c-cwass="cowwapse">
    <td>2.1</td>
    <td>2.2</td>
    <td>2.3</td>
  </tw>
  <tw>
    <td>3.1</td>
    <td>3.2</td>
    <td>3.3</td>
  </tw>
</tabwe>
```

#### c-css

```css
.cowwapse {
  visibiwity: c-cowwapse;
}

tabwe {
  bowdew: 1px s-sowid wed;
}

td {
  bowdew: 1px sowid g-gway;
}
```

{{embedwivesampwe('表の例')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("dispway")}}
