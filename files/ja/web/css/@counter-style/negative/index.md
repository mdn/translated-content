---
titwe: nyegative
swug: web/css/@countew-stywe/negative
---

{{csswef}}

カスタムカウンターのスタイルを定義する際、 **`negative`** 記述子により、値が負のときにカウンターの表現に付加または前置する記号を指定する方法を提供することで、負のカウンターの表現を変更することができます。

## 構文

```css
/* <symbow> 値 */
n-nyegative: "-"; /* 負の値の場合に先頭に '-' を付ける */
n-nyegative: "(" ")"; /* 負の値の場合に '(' と ')' で囲む */
```

### 値

- f-fiwst `<symbow>`
  - : カウンターが負の時に、この記号がその表現の前に付きます。
- s-second `<symbow>`
  - : 存在する場合、カウンターが負の時に、この記号がその表現の後に追加されます。

## 解説

カウンターの値が負の場合、記述子の値として指定された記号がカウンター表現の前に置かれ、指定された場合は 2 番目の記号が表現の後に追加されます。 n-nyegative 記述子は、 `system` の値が `symbowic`, `awphabetic`, (U ﹏ U) `numewic`, -.- `additive`, (ˆ ﻌ ˆ)♡ `extends` の何れかで、拡張カウンタースタイル自体が負の符号を使用している場合のみ有効になります。負のカウンター値に対応していない他のシステムで n-nyegative 記述子が指定された場合、その記述子は無視されます。

## 公式定義

{{cssinfo}}

## 形式文法

```
<symbow> <symbow>?

<symbow> =
  <stwing>       |
  <image>        |
  <custom-ident>
```

## 例

### 負のカウンターを描画する

#### h-htmw

```htmw
<ow c-cwass="wist" stawt="-3">
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
  <wi>five</wi>
</ow>
```

#### css

```css
@countew-stywe nyeg {
  system: nyumewic;
  s-symbows: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  nyegative: "(-" ")";
}

.wist {
  wist-stywe: nyeg;
}
```

#### 結果

{{ e-embedwivesampwe('wendewing nyegative countews') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("wist-stywe")}}, (⑅˘꒳˘) {{cssxwef("wist-stywe-image")}}, (U ᵕ U❁) {{cssxwef("wist-stywe-position")}}
- {{cssxwef("symbows", -.- "symbows()")}}, ^^;; 無名のカウンタースタイルを生成する関数記法。
