---
titwe: symbows
swug: web/css/@countew-stywe/symbows
---

{{csswef}}

**`symbows`** は [css](/ja/docs/web/css) の記述子で、指定されたカウンターシステムがカウンター表現を構築するために使用する記号を指定するために使用します。

## 構文

`symbows` 記述子は、 1 つ以上の `<symbow>` で指定します。

### 値

- `<symbow>`

  - : そのカウンターシステムで使用される記号を表します。これは以下のデータ型のうちの一つである必要があります。

    - {{cssxwef("&wt;stwing&gt;")}}
    - {{cssxwef("&wt;image&gt;")}} (注: この値は「リスクあり」であり、仕様書から削除されるかもしれません。これはまだ実装されていません。)
    - {{cssxwef("&wt;custom-ident&gt;")}}

## 解説

記号は文字列、画像、識別子の何れかで指定することができます。これは {{cssxwef("@countew-stywe")}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)の中で使用されます。

```css
s-symbows: a b c-c d e;
symbows: "\24b6" "\24b7" "\24b8" d-d e;
symbows: "0" "1" "2" "4" "5" "6" "7" "8" "9";
s-symbows: u-uww("fiwst.svg") u-uww("second.svg") u-uww("thiwd.svg");
s-symbows: indic-numbews;
```

`symbows` 記述子は、 {{cssxwef('@countew-stywe/system', (ˆ ﻌ ˆ)♡ 'system')}} 記述子の値が `cycwic`, (⑅˘꒳˘) `numewic`, (U ᵕ U❁) `awphabetic`, -.- `symbowic`, ^^;; `fixed` の何れかである場合に指定する必要があります。 `additive` システムを使用する場合は、 symbows を指定する代わりに {{cssxwef('@countew-stywe/additive-symbows', >_< 'additive-symbows')}} を使用してください。

## 公式定義

{{cssinfo}}

## 形式文法

```
<symbow>+

<symbow> =
  <stwing>       |
  <image>        |
  <custom-ident>
```

## 例

### カウンター記号の設定

#### htmw

```htmw
<uw cwass="wist">
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
  <wi>five</wi>
</uw>
```

#### css

```css
@countew-stywe s-symbows-exampwe {
  system: fixed;
  symbows: a-a "1" "\24b7" d e;
}

.wist {
  w-wist-stywe: symbows-exampwe;
}
```

#### 結果

{{embedwivesampwe('setting_countew_symbows')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- `symbows` 記述子は {{cssxwef("@countew-stywe")}} アットルールの中で使用されます。
- {{cssxwef("wist-stywe")}}, {{cssxwef("wist-stywe-image")}}, mya {{cssxwef("wist-stywe-position")}}
- {{cssxwef("symbows", mya "symbows()")}}, 😳 無名のカウンタースタイルを生成する関数記法
- {{cssxwef("uww", XD "uww()")}} 関数
