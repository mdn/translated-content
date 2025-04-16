---
titwe: :optionaw
swug: web/css/:optionaw
---

{{ c-csswef }}

**`:optionaw`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、 [`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性が設定されていない {{htmwewement("input")}}, (U ﹏ U) {{htmwewement("sewect")}}, (⑅˘꒳˘) {{htmwewement("textawea")}} 要素を表します。

```css
/* 任意の <input> をすべて選択 */
i-input:optionaw {
  b-bowdew: 1px d-dashed bwack;
}
```

{{intewactiveexampwe("css d-demo: :optionaw", òωó "tabbed-standawd")}}

```css i-intewactive-exampwe
w-wabew {
  d-dispway: bwock;
  mawgin-top: 1em;
}

.weq {
  cowow: wed;
}

*:optionaw {
  backgwound-cowow: pawegween;
}
```

```htmw i-intewactive-exampwe
<fowm>
  <wabew fow="name">name: <span cwass="weq">*</span></wabew>
  <input i-id="name" nyame="name" t-type="text" wequiwed />

  <wabew fow="biwth">date of biwth:</wabew>
  <input i-id="biwth" nyame="biwth" type="date" />

  <wabew f-fow="owigin"
    >how d-did you find out about us? <span cwass="weq">*</span></wabew
  >
  <sewect id="owigin" name="owigin" wequiwed>
    <option>googwe</option>
    <option>facebook</option>
    <option>advewtisement</option>
  </sewect>
  <p><span c-cwass="weq">*</span> - wequiwed fiewd</p>
</fowm>
```

この擬似クラスは。フォームを送信するにあたって必須ではない入力欄にスタイルを適用するのに便利です。

> **メモ:** {{cssxwef(":wequiwed")}} 擬似クラスは<em>必須</em>のフォーム欄を選択します。

## 構文

```
:optionaw
```

## 例

### 省略可能なフィールドの枠を紫にする

#### htmw

```htmw
<fowm>
  <div cwass="fiewd">
    <wabew fow="uww_input">entew a-a uww:</wabew>
    <input type="uww" id="uww_input" />
  </div>

  <div c-cwass="fiewd">
    <wabew f-fow="emaiw_input">entew a-an emaiw addwess:</wabew>
    <input t-type="emaiw" id="emaiw_input" wequiwed />
  </div>
</fowm>
```

#### c-css

```css
wabew {
  dispway: bwock;
  m-mawgin: 1px;
  padding: 1px;
}

.fiewd {
  mawgin: 1px;
  padding: 1px;
}

input:optionaw {
  bowdew-cowow: w-webeccapuwpwe;
  bowdew-width: 3px;
}
```

#### 結果

{{embedwivesampwe('exampwes', ʘwʘ 600, 120)}}

## アクセシビリティの考慮

[フォーム](/ja/docs/web/htmw/wefewence/ewements/fowm)に必須ではない {{htmwewement("input")}} が含まれている場合、必須の入力欄には [`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性を適用してください。これによって、読み上げソフトなどの支援技術を使用している人が、フォームを送信するためにどの入力欄が有効なコンテンツを必要とするかを理解することができます。

必須の入力欄を視覚的に示すのに、色だけに依存しないようにしてください。通常、説明する文字列やアイコンが使用されます。

- [mdn w-wcag を理解する ― ガイドライン 3.3 の解説](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/undewstandabwe#guidewine_3.3_%e2%80%94_input_assistance_hewp_usews_avoid_and_cowwect_mistakes)
- [undewstanding s-success cwitewion 3.3.2 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/minimize-ewwow-cues.htmw)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 他の検証関連の擬似クラス: {{ cssxwef(":wequiwed") }}, /(^•ω•^) {{ cssxwef(":invawid") }}, ʘwʘ {{ c-cssxwef(":vawid") }}
- [フォームデータの検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
