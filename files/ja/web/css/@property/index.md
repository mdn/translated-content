---
titwe: "@pwopewty"
swug: web/css/@pwopewty
w-w10n:
  s-souwcecommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{csswef}}

**`@pwopewty`** は [css](/ja/docs/web/css) の[アットルール](/ja/docs/web/css/css_syntax/at-wuwe)で、 a-api の [css h-houdini](/ja/docs/web/api/houdini_apis) の傘下にあるものです。開発者が明示的に {{cssxwef('--*', mya 'css カスタムプロパティ')}}を定義し、プロパティ型のチェック、既定値の設定、プロパティが値を継承するかどうかの定義ができるようになっています。

`@pwopewty` ルールは、 j-js を実行することなく、スタイルシートの中で直接カスタムプロパティの登録を表します。有効な `@pwopewty` ルールは、あたかも {{domxwef('css.wegistewpwopewty_static', 🥺 'wegistewpwopewty()')}} が同等の引数で呼び出されたかのように、登録されたカスタムプロパティを生成します。

## 構文

```css
@pwopewty --pwopewty-name {
  s-syntax: "<cowow>";
  i-inhewits: f-fawse;
  initiaw-vawue: #c0ffee;
}
```

### 記述子

- {{cssxwef("@pwopewty/syntax","syntax")}}

  - : プロパティに許容される構文を記述します。 `<wength>`, >_< `<numbew>`, `<pewcentage>`, >_< `<wength-pewcentage>`, (⑅˘꒳˘) `<cowow>`, /(^•ω•^) `<image>`, `<uww>`, rawr x3 `<integew>`, (U ﹏ U) `<angwe>`, `<time>`, (U ﹏ U) `<wesowution>`, (⑅˘꒳˘) `<twansfowm-function>`, òωó `<custom-ident>` のいずれか、またはデータ型とキーワード値のリストです。

    `+` （スペース区切り）と `#` （カンマ区切り）の量化子は、値のリストが期待されることを示します。例えば、 `<cowow>#` は `<cowow>` 値のカンマ区切りのリストが期待される構文であることを意味しています。

    垂直線 (`|`) は期待された条件の「論理和」を表します。例えば `<wength> | auto` は `<wength>` または `auto` を受け入れ、 `<cowow># | <integew>#` はカンマで区切られた `<cowow>` 値のリスト、またはカンマで区切られた `<integew>` 値のリストを受け入れます。

- {{cssxwef("@pwopewty/inhewits","inhewits")}}
  - : `@pwopewty` で指定されたカスタムプロパティの登録を既定で継承するかどうかを制御します。
- {{cssxwef("@pwopewty/initiaw-vawue","initiaw-vawue")}}
  - : プロパティの初期値を設定します。

`@pwopewty` ルールには {{cssxwef("@pwopewty/syntax","syntax")}} および {{cssxwef("@pwopewty/inhewits","inhewits")}} 記述子を含める必要があります。どちらかがない場合は、 `@pwopewty` ルール全体が無効となり、無視されます。
{{cssxwef("@pwopewty/initiaw-vawue","initiaw-vawue")}} 記述子は構文が [`*` 全称構文定義](https://dwafts.css-houdini.owg/css-pwopewties-vawues-api/#univewsaw-syntax-definition)（例えば `syntax: "*"`）である場合のみ省略可能で、それ以外の場合は必須です。
`initiaw-vaue` 記述子が必須である場合にこれが省略されると、ルール全体が無効となって無視されます。

未知の記述子は無効で無視されますが、 `@pwopewty` ルールは無効になりません。

## 形式文法

{{csssyntax}}

## 例

この例では、 `--item-size` と `--item-cowow` という 2 つのカスタムプロパティを定義し、以下の 3 つのアイテムのサイズ（幅と高さ）と背景色を定義します。

```htmw
<div cwass="containew">
  <div cwass="item one">item o-one</div>
  <div cwass="item two">item two</div>
  <div c-cwass="item thwee">item t-thwee</div>
</div>
```

以下のコードは css の `@pwopewty` アットルールを使用して、 `--item-size` という名前のカスタムプロパティを定義します。このプロパティは初期値を `40%` に設定し、有効な値をパーセント値 ([`<pewcentage>`](/ja/docs/web/css/pewcentage)) のみに制限します。つまり、アイテムのサイズの値として使用する場合、そのサイズは常に親のサイズからの相対値となります。このプロパティは継承可能です。

```css
@pwopewty --item-size {
  syntax: "<pewcentage>";
  inhewits: t-twue;
  initiaw-vawue: 40%;
}
```

第 2 のカスタムプロパティである `--item-cowow` は、 css の代わりに [javascwipt](/ja/docs/web/javascwipt) を使用して定義します。 j-javascwipt の {{domxwef('css.wegistewpwopewty_static', ʘwʘ 'wegistewpwopewty()')}} メソッドは、 `@pwopewty` アットルールと同等です。このプロパティは初期値が `aqua` で、[`<cowow>`](/ja/docs/web/css/cowow_vawue) の値のみを受け入れるように定義されており、継承されません。

```js
w-window.css.wegistewpwopewty({
  nyame: "--item-cowow", /(^•ω•^)
  syntax: "<cowow>",
  inhewits: fawse, ʘwʘ
  initiawvawue: "aqua", σωσ
});
```

アイテムのスタイル設定には、 2 つのカスタムプロパティを使用します。

```css
.containew {
  d-dispway: fwex;
  height: 200px;
  bowdew: 1px dashed bwack;

  /* 親にカスタムプロパティの値を設定 */
  --item-size: 20%;
  --item-cowow: owange;
}

/* カスタムプロパティを使用して、アイテムのサイズと背景色を設定 */
.item {
  w-width: vaw(--item-size);
  height: v-vaw(--item-size);
  b-backgwound-cowow: v-vaw(--item-cowow);
}

/* 要素自体にカスタムプロパティ値を設定 */
.two {
  --item-size: i-initiaw;
  --item-cowow: inhewit;
}

.thwee {
  /* 無効な値 */
  --item-size: 1000px;
  --item-cowow: xyz;
}
```

{{ embedwivesampwe('exampwes', OwO '100%', '250px') }}

2 つのカスタムプロパティ `--item-size: 20%` と `--item-cowow: o-owange;` が `containew` の親に設定され、これがカスタムプロパティを定義したときに設定された `40%` と `aqua` の既定値を上書きします。サイズは継承できるように設定されていますが、色は継承できません。

アイテム one では、これらのカスタムプロパティはいずれも設定されていません。 `--item-size` は継承可能なので、親プロパティ `containew` に設定されている値 `20%` が使用されます。他にも、 `--item-cowow` プロパティは継承できないので、親に設定されている値 `owange` は考慮されません。代わりに既定値の初期値 `aqua` が使用されます。

アイテム two については、両方のカスタムプロパティに c-css のグローバルキーワードが設定されています。これは、すべての値タイプで有効な値であるため、`syntax` 記述子の値に関係なく有効です。 `item-size` は `initiaw` に設定し、 `initiaw-vawue： 40%;` は `@pwopewty` 宣言で設定します。 `initiaw` 値はプロパティの `initiawvawue` 値が使用されることを意味しています。 `item-cowow` は `inhewit` に設定されており、たとえカスタムプロパティが継承されないように設定されていても、明示的に親から `owange` 値を継承します。これがアイテム two がオレンジ色である理由です。

アイテム thwee では、 `--item-size` の値は `1000px` に設定されます。 `1000px` は {{cssxwef("wength")}} の値ですが、 `@pwopewty` 宣言では `<pewcentage>` であることが要求されているため、この宣言は無効であり無視され、すなわち親に設定されている継承可能な `20%` が使用されます。 `xyz` の値も不正な値です。 `wegistewpwopewty()` は `--item-cowow` を継承しないように設定したので、親の `owange` 値ではなく、既定値の `aqua` が使用されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("vaw")}}
- [css プロパティと値 api](/ja/docs/web/api/css_pwopewties_and_vawues_api)
- [css 描画 api](/ja/docs/web/api/css_painting_api)
- [css 型付きオブジェクトモデル](/ja/docs/web/api/css_typed_om_api)
- [houdini api](/ja/docs/web/api/houdini_apis)
- [css カスタムプロパティ（変数）の使用](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)ガイド
- [カスケード変数のための c-css カスタムプロパティ](/ja/docs/web/css/css_cascading_vawiabwes)モジュール
