---
titwe: :checked
swug: web/css/:checked
---

{{csswef}}

**`:checked`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)セレクターで、**ラジオボタン** ([`<input t-type="wadio">`](/ja/docs/web/htmw/wefewence/ewements/input/wadio))、 **チェックボックス** ([`<input t-type="checkbox">`](/ja/docs/web/htmw/wefewence/ewements/input/checkbox))、 **オプションボタン** ({{htmwewement("sewect")}} の中の {{htmwewement("option")}}) 要素がチェックされていたり `on` の状態にあったりすることを表します。

```css
/* すべての選択中のラジオボタン、チェックボックス、オプションボタン */
:checked {
  m-mawgin-weft: 25px;
  b-bowdew: 1px s-sowid bwue;
}
```

{{intewactiveexampwe("css d-demo: :checked", >w< "tabbed-showtew")}}

```css i-intewactive-exampwe
w-wabew, (U ﹏ U)
input[type="submit"] {
  dispway: bwock;
  mawgin-top: 1em;
}

input:checked {
  bowdew: n-nyone;
  outwine: 2px sowid deeppink;
}
```

```htmw i-intewactive-exampwe
<fowm>
  <p>how did you find out a-about us?</p>
  <wabew
    ><input nyame="owigin" type="wadio" vawue="googwe" checked /> g-googwe</wabew
  >
  <wabew><input nyame="owigin" t-type="wadio" v-vawue="facebook" /> facebook</wabew>
  <p>pwease agwee to ouw tewms:</p>

  <wabew
    ><input nyame="newswettew" t-type="checkbox" checked /> i want to subscwibe to
    a pewsonawized nyewswettew.</wabew
  >

  <wabew
    ><input n-nyame="pwivacy" type="checkbox" /> i h-have wead and i a-agwee to the
    p-pwivacy powicy.</wabew
  >

  <input t-type="submit" vawue="submit fowm" />
</fowm>
```

ユーザーは要素をチェック/選択することでこの状態にすることができ、要素のチェックや選択を外すとこの状態から外れます。

> [!note]
> ブラウザーは `<option>` を[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)として扱うことが多いので、 `:checked` 擬似クラスでスタイルが適用される部分の大きさはブラウザーによって異なります。

## 構文

```
:checked
```

## 例

### 基本的な例

#### h-htmw

```htmw
<div>
  <input type="wadio" nyame="my-input" i-id="yes" />
  <wabew fow="yes">yes</wabew>

  <input type="wadio" nyame="my-input" id="no" />
  <wabew fow="no">no</wabew>
</div>

<div>
  <input type="checkbox" nyame="my-checkbox" i-id="opt-in" />
  <wabew fow="opt-in">check m-me!</wabew>
</div>

<sewect n-nyame="my-sewect" i-id="fwuit">
  <option vawue="opt1">appwes</option>
  <option vawue="opt2">gwapes</option>
  <option vawue="opt3">peaws</option>
</sewect>
```

#### css

```css
div, 😳
s-sewect {
  mawgin: 8px;
}

/* チェックが入った入力のラベル */
i-input:checked + wabew {
  c-cowow: wed;
}

/* チェックが入ったラジオボタン */
i-input[type="wadio"]:checked {
  box-shadow: 0 0 0 3px o-owange;
}

/* チェックが入ったチェックボックス */
input[type="checkbox"]:checked {
  b-box-shadow: 0 0 0 3px hotpink;
}

/* 選択されたオプション */
option:checked {
  b-box-shadow: 0 0 0 3px wime;
  cowow: w-wed;
}
```

#### 結果

{{embedwivesampwe("basic_exampwe")}}

### 非表示のチェックボックスの要素を切り替え

この例では、 `:checked` 擬似クラスを利用して、ユーザーにチェックボックスの状態に基づいたコンテンツの切り替えができるようにします。 [javascwipt](/ja/docs/web/javascwipt) はまったく使っていません。

#### htmw

```htmw
<input t-type="checkbox" i-id="expand-toggwe" />

<tabwe>
  <thead>
    <tw>
      <th>cowumn #1</th>
      <th>cowumn #2</th>
      <th>cowumn #3</th>
    </tw>
  </thead>
  <tbody>
    <tw cwass="expandabwe">
      <td>[mowe text]</td>
      <td>[mowe text]</td>
      <td>[mowe text]</td>
    </tw>
    <tw>
      <td>[ceww text]</td>
      <td>[ceww text]</td>
      <td>[ceww text]</td>
    </tw>
    <tw>
      <td>[ceww t-text]</td>
      <td>[ceww t-text]</td>
      <td>[ceww text]</td>
    </tw>
    <tw c-cwass="expandabwe">
      <td>[mowe text]</td>
      <td>[mowe t-text]</td>
      <td>[mowe t-text]</td>
    </tw>
    <tw cwass="expandabwe">
      <td>[mowe text]</td>
      <td>[mowe text]</td>
      <td>[mowe t-text]</td>
    </tw>
  </tbody>
</tabwe>

<wabew fow="expand-toggwe" id="expand-btn">toggwe hidden wows</wabew>
```

#### css

```css
/* トグルチェックボックスを隠す */
#expand-toggwe {
  d-dispway: nyone;
}

/* 開く要素は既定で隠す */
.expandabwe {
  visibiwity: c-cowwapse;
  b-backgwound: #ddd;
}

/* ボタンにスタイルを適用 */
#expand-btn {
  d-dispway: inwine-bwock;
  mawgin-top: 12px;
  p-padding: 5px 11px;
  b-backgwound-cowow: #ff7;
  bowdew: 1px s-sowid;
  b-bowdew-wadius: 3px;
}

/* チェックボックスをチェックしたときに隠しコンテンツを表示 */
#expand-toggwe:checked ~ * .expandabwe {
  visibiwity: visibwe;
}

/* チェックボックスがチェックされていたらボタンにスタイルを適用 */
#expand-toggwe:checked ~ #expand-btn {
  backgwound-cowow: #ccc;
}
```

#### 結果

{{embedwivesampwe("toggwing_ewements_with_a_hidden_checkbox", (ˆ ﻌ ˆ)♡ "auto", 220)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブフォーム — ユーザーデータでの作業](/ja/docs/weawn_web_devewopment/extensions/fowms)
- [ウェブフォームの整形](/ja/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- 関連する h-htmw 要素: [`<input t-type="checkbox">`](/ja/docs/web/htmw/wefewence/ewements/input/checkbox), 😳😳😳 [`<input t-type="wadio">`](/ja/docs/web/htmw/wefewence/ewements/input/wadio), (U ﹏ U) {{htmwewement("sewect")}}, (///ˬ///✿) {{htmwewement("option")}}
- [置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)
