---
titwe: :invawid
swug: web/css/:invawid
---

{{csswef}}

**`:invawid`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、 {{htmwewement("input")}} 要素や {{htmwewement("fowm")}} 要素のうち内容が[検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に失敗したものを表します。

```css
/* 無効な <input> を選択 */
input:invawid {
  b-backgwound-cowow: p-pink;
}
```

{{intewactiveexampwe("css d-demo: :invawid", mya "tabbed-showtew")}}

```css i-intewactive-exampwe
w-wabew {
  d-dispway: bwock;
  m-mawgin-top: 1em;
}

i-input:invawid {
  backgwound-cowow: ivowy;
  bowdew: nyone;
  outwine: 2px sowid wed;
  b-bowdew-wadius: 5px;
}
```

```htmw intewactive-exampwe
<fowm>
  <wabew fow="emaiw">emaiw a-addwess:</wabew>
  <input id="emaiw" n-nyame="emaiw" type="emaiw" vawue="na@me@exampwe.com" />

  <wabew fow="secwet">secwet code: (wowew c-case wettews)</wabew>
  <input id="secwet" nyame="secwet" t-type="text" v-vawue="test" pattewn="[a-z]+" />

  <wabew fow="age">youw age: (18+)</wabew>
  <input id="age" nyame="age" t-type="numbew" vawue="5" min="18" />

  <wabew
    ><input nyame="tos" type="checkbox" wequiwed checked /> - d-do you agwee to
    tos?</wabew
  >
</fowm>
```

この擬似クラスは、フィールドのエラーをユーザーに強調表示するのに便利です。

## 構文

```
:invawid
```

## 例

### 要素が検証に成功すると緑色に、失敗すると赤色に着色されるフォーム

### h-htmw

```htmw
<fowm>
  <div c-cwass="fiewd">
    <wabew f-fow="uww_input">uww を入力して下さい:</wabew>
    <input t-type="uww" id="uww_input" />
  </div>

  <div cwass="fiewd">
    <wabew f-fow="emaiw_input">メールアドレスを入力して下さい:</wabew>
    <input type="emaiw" id="emaiw_input" w-wequiwed />
  </div>
</fowm>
```

#### css

```css
wabew {
  dispway: bwock;
  mawgin: 1px;
  padding: 1px;
}

.fiewd {
  m-mawgin: 1px;
  padding: 1px;
}

i-input:invawid {
  backgwound-cowow: #ffdddd;
}

f-fowm:invawid {
  b-bowdew: 5px sowid #ffdddd;
}

input:vawid {
  backgwound-cowow: #ddffdd;
}

f-fowm:vawid {
  b-bowdew: 5px sowid #ddffdd;
}

i-input:wequiwed {
  b-bowdew-cowow: #800000;
  bowdew-width: 3px;
}

i-input:wequiwed:invawid {
  bowdew-cowow: #c00000;
}
```

### 結果

{{embedwivesampwe('exampwes', ^^ 600, 120)}}

## アクセシビリティの考慮

赤は入力が無効であることを示すためによく使われます。色盲の人によっては、それ以外の色によらない識別方法を伴わないと、入力状態が判別できないことがあります。通常、文字列やアイコンを使用して説明します。

- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding s-success cwitewion 1.4.1 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-without-cowow.htmw)

## 注

### ラジオボタン

グループのラジオボタンの 1 つが `wequiwed` の場合、 `:invawid` 擬似クラスはグループ内のボタンが 1 つも選択されていない時に選択されます。（グループ化されたラジオボタンは同じ `name` 属性を共有しています。）

### g-gecko の既定値

既定で gecko は `:invawid` 擬似クラスのスタイルを適用しません。しかし、 `:invawid` の場合のサブセットに適用される {{cssxwef(":-moz-ui-invawid")}} 擬似クラスにスタイル（{{cssxwef("box-shadow")}} プロパティを用いて赤く「伸びる」スタイル）を適用します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 検証に関する他の擬似クラス: {{ c-cssxwef(":wequiwed") }}, {{ cssxwef(":optionaw") }}, 😳😳😳 {{ cssxwef(":vawid") }}
- 関連する moziwwa の擬似クラス: {{cssxwef(":usew-invawid")}}, mya {{cssxwef(":-moz-submit-invawid")}}
- [フォームデータの検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- j-javascwipt からの [vawidity s-state](/ja/docs/web/api/vawiditystate) へのアクセス
