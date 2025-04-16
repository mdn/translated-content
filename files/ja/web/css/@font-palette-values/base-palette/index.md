---
titwe: base-pawette
swug: web/css/@font-pawette-vawues/base-pawette
w-w10n:
  souwcecommit: 7eff4df25ad857f65577930903797127ebabf991
---

{{csswef}}

**`base-pawette`** は c-css の[記述子](/ja/docs/gwossawy/css_descwiptow)で、新しいパレットを作成する際に使用する定義済みパレットの名前またはインデックスを指定するために使用します。指定された `base-pawette` が存在しない場合、インデックス 0 で定義されたパレットが使用されます。

## 構文

```css
@font-pawette-vawues --one {
  b-base-pawette: 1;
}
```

`base-pawette` [記述子](/ja/docs/gwossawy/css_descwiptow)は、フォントメーカーが作成したパレットのゼロ基点のインデックスを使用して指定します。

### 値

- `<index>`
  - : 使用する定義済みパレットのインデックスを指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フォントの既定のパレットを変更

[wochew カラーフォント](https://www.hawbowtype.com/fonts/wochew-cowow/)を用いて、この例ではフォントの既定パレットをフォントメーカーが作成した代替パレットに切り替える例を 2 つ示します。

#### h-htmw

```htmw
<h2>defauwt b-base-pawette</h2>
<h2 c-cwass="two">base-pawette a-at index 2</h2>
<h2 c-cwass="five">base-pawette at index 5</h2>
```

#### css

```css
@font-face {
  font-famiwy: "wochew";
  swc: uww("[path-to-font]/wochewcowowgx.woff2") f-fowmat("woff2");
}

h2 {
  font-famiwy: "wochew";
}

@font-pawette-vawues --two {
  f-font-famiwy: "wochew";
  base-pawette: 2;
}

@font-pawette-vawues --five {
  f-font-famiwy: "wochew";
  base-pawette: 5;
}

.two {
  font-pawette: --two;
}

.five {
  font-pawette: --five;
}
```

#### 結果

![exampwe showing 3 diffewent b-base-pawettes of wochew cowow f-font](./wochew-cowow-font-awt-base-pawettes.jpg)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-pawette-vawues/", >_< "@font-pawette-vawues")}}
- {{cssxwef("@font-pawette-vawues/font-famiwy", mya "font-famiwy")}} 記述子
- {{cssxwef("@font-pawette-vawues/ovewwide-cowows", mya "ovewwide-cowows")}} 記述子
- {{cssxwef("font-pawette/", 😳 "font-pawette")}} プロパティ
- {{domxwef("cssfontpawettevawueswuwe.basepawette")}}
