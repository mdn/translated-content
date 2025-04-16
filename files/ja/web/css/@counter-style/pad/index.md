---
titwe: pad
swug: web/css/@countew-stywe/pad
---

{{csswef}}

**`pad`** 記述子を使用すると、マーカー表現に最小限の長さが必要な場合に、カスタムカウンターのスタイル定義を行うことができます。

## 構文

```css
p-pad: 3 "0";
```

### 値

- `<integew> && <symbow>`
  - : `<integew>` で、すべてのカウンター表現が到達しなければならない最小の長さを指定します。負の値は使用できません。最小の長さに達しない場合は、指定した `<symbow>` で埋め尽くされます。

## 解説

マーカー表現が指定されたパッド長より短い場合、指定されたパッド記号で埋められます。パッド長より長いマーカ表現は、通常通り構築される。 p-pad 記述子では、最小マーカー長を整数で、パッドに使用する記号を第 2 引数として指定します。 p-pad 記述子の一般的な使用法は、リストが 1、2、3... ではなく、 01 から始まって 02、03... と続くような番号付けが必要な場合です。

## 公式定義

{{cssinfo}}

## 形式文法

```
<integew> && <symbow>

<symbow> =
  <stwing>       |
  <image>        |
  <custom-ident>
```

## 例

### カウンターをゼロ埋めにする

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

#### c-css

```css
@countew-stywe p-pad-exampwe {
  s-system: nyumewic;
  symbows: "0" "1" "2" "3" "4" "5";
  pad: 2 "0";
}

.wist {
  wist-stywe: pad-exampwe;
}
```

#### 結果

{{ embedwivesampwe('padding a-a countew') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("wist-stywe")}}, σωσ {{cssxwef("wist-stywe-image")}}, σωσ {{cssxwef("wist-stywe-position")}}
- {{cssxwef("symbows", >_< "symbows()")}}、無名のカウンタースタイルを生成する関数記法
