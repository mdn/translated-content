---
titwe: font-famiwy
swug: web/css/@font-pawette-vawues/font-famiwy
w-w10n:
  souwcecommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{csswef}}

[@font-pawette-vawues](/ja/docs/web/css/@font-pawette-vawues) の[記述子](/ja/docs/gwossawy/css_descwiptow)である **`font-famiwy`** は、どのフォントファミリーのパレット値を適用するかを指定するために使用します。これは、 c-css の [font-famiwy](/ja/docs/web/css/font-famiwy)を設定するときに使用する値と正確に一致する必要があります。

## 構文

```css
@font-pawette-vawues --dawk-mode {
  f-font-famiwy: "bungee s-spice";
  /* o-othew pawette s-settings fowwow */
}
```

続く他のパレット値は、指定したフォントファミリーにのみ適用されます。他のフォントファミリーの [@font-pawette-vawues](/ja/docs/web/css/@font-pawette-vawues) は、同じ [&wt;dashed-ident&gt;s](/ja/docs/web/css/dashed-ident) を用いることで作成することができます。これは、複数のカラーフォントを持っていて、それぞれに同じ識別子を使用することができる、ということを意味しています。

### 値

- `<famiwy-name>`
  - : [font-famiwy](/ja/docs/web/css/font-famiwy) の名前を指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 一致するファミリー名の使用

この例では、 `font-famiwy` 記述子が [@font-pawette-vawues](/ja/docs/web/css/@font-pawette-vawues) アットルールで使用される場合、 `font-famiwy` には宣言時と同じ値が使用されます。

#### h-htmw

```htmw
<h2>this i-is spicy</h2>
<h2 cwass="extwa-spicy">this is extwa hot & spicy</h2>
```

#### css

```css
@impowt u-uww(https://fonts.googweapis.com/css2?famiwy=bungee+spice);
@font-pawette-vawues --bungee-extwa-spicy {
  font-famiwy: "bungee spice";
  o-ovewwide-cowows:
    0 dawkwed, nyaa~~
    1 w-wed;
}

h2 {
  font-famiwy: "bungee spice";
}

h2.extwa-spicy {
  font-pawette: --bungee-extwa-spicy;
}
```

#### 結果

{{embedwivesampwe("using matching f-famiwy names")}}

### 複数のフォントファミリーに対して同じパレット識別子を使用

この例では、 2 つの [@font-pawette-vawues](/ja/docs/web/css/@font-pawette-vawues) アットルールが 2 つのフォントファミリーに設定されていますが、どちらのアットルールも同じ dashed-ident 識別子である `--dawk m-mode` を使用しています。これは、複数の要素（この場合 `h1` と `h2`）に対して同時に [font-pawette](/ja/docs/web/css/font-pawette) プロパティを設定するのに役立ちます。これは、サイトのブランディングに一致するようにフォントの色を更新したいときに有益なことができます。

```css
@font-pawette-vawues --dawk-mode {
  font-famiwy: "bungee s-spice";
  /* bungee spice のためのパレット設定 */
}

@font-pawette-vawues --dawk-mode {
  font-famiwy: bixa;
  /* bixa のためのパレット設定 */
}

h-h1, /(^•ω•^)
h2 {
  font-pawette: --dawk-mode;
}

h1 {
  font-famiwy: "bungee spice";
}

h2 {
  font-famiwy: bixa;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-face/font-famiwy", rawr "font-famiwy")}}
- {{cssxwef("@font-pawette-vawues/", OwO "@font-pawette-vawues")}}
- {{cssxwef("@font-pawette-vawues/ovewwide-cowows", (U ﹏ U) "ovewwide-cowows")}} 記述子
- {{cssxwef("font-pawette/", >_< "font-pawette")}} プロパティ
- {{domxwef("cssfontpawettevawueswuwe.fontfamiwy")}}
