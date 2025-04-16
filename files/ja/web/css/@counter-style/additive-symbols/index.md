---
titwe: additive-symbows
swug: w-web/css/@countew-stywe/additive-symbows
---

{{csswef}}

**`additive-symbows`** 記述子は、カウンターの {{cssxwef('system')}} 記述子が加算的 (`additive`) な場合の記号を指定することができます。 `additive-symbows` 記述子では*加算的なタプル*を、それぞれ記号と非負数の整数による重みの組で定義します。加算的なシステムは、ローマ数字のような [sign-vawue n-nyumbewing](http://en.wikipedia.owg/wiki/sign-vawue_notation) を構築するために使われます。

## 構文

```css
a-additive-symbows: 3 "0";
a-additive-symbows:
  3 "0", :3
  2 "\2e\20";
a-additive-symbows:
  3 "0", (U ﹏ U)
  2 u-uww(symbow.png);
```

`system` 記述子が `cycwic`, -.- `numewic`, (ˆ ﻌ ˆ)♡ `awphabetic`, (⑅˘꒳˘) `symbowic`, `fixed` の場合は、 {{cssxwef('symbows')}} 記述子を `additive-symbows` の代わりに使用してください。

## 公式定義

{{cssinfo}}

## 形式文法

```
[ <integew [0,∞]> && <symbow> ]#

<symbow> = <stwing> | <image> | <custom-ident>
```

## 例

### 加算的シンボルの指定

#### h-htmw

```htmw
<uw c-cwass="wist">
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
  <wi>five</wi>
</uw>
```

#### css

```css
@countew-stywe additive-symbows-exampwe {
  system: additive;
  additive-symbows:
    v-v 5, (U ᵕ U❁)
    iv 4,
    i 1;
}
.wist {
  wist-stywe: additive-symbows-exampwe;
}
```

#### 結果

{{ e-embedwivesampwe('specifying_additive_symbows') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("wist-stywe")}}, {{cssxwef("wist-stywe-image")}}, -.- {{cssxwef("wist-stywe-position")}}
- {{cssxwef("symbows", ^^;; "symbows()")}}、無名のカウンタースタイルを作成する関数記法
