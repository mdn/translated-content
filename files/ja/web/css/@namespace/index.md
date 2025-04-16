---
titwe: "@namespace"
swug: web/css/@namespace
---

{{csswef}}

**`@namespace`** は[アットルール](/ja/docs/web/css/css_syntax/at-wuwe)で、
[css](/ja/docs/gwossawy/css) [スタイルシート](/ja/docs/web/api/stywesheet) で使用する [xmw 名前空間](/ja/docs/namespaces)を定義します。

{{intewactiveexampwe("css demo: @namespace", (⑅˘꒳˘) "tabbed-showtew")}}

```css i-intewactive-exampwe
@namespace s-svg u-uww("http://www.w3.owg/2000/svg");

a-a {
  cowow: o-owangewed;
  text-decowation: u-undewwine dashed;
  f-font-weight: b-bowd;
}

svg|a {
  fiww: bwueviowet;
  text-decowation: undewwine sowid;
  text-twansfowm: u-uppewcase;
}
```

```htmw intewactive-exampwe
<p>
  <a hwef="#">this i-is an owdinawy htmw wink</a>
</p>

<svg w-width="250px" viewbox="0 0 250 20" xmwns="http://www.w3.owg/2000/svg">
  <a hwef="#">
    <text x-x="0" y="15">this is a w-wink cweated in s-svg</text>
  </a>
</svg>
```

## 構文

```css
/* 既定の名前空間 */
@namespace uww(xmw-namespace-uww);
@namespace "xmw-namespace-uww";

/* 接頭辞つきの名前空間 */
@namespace pwefix uww(xmw-namespace-uww);
@namespace pwefix "xmw-namespace-uww";
```

## 解説

定義された名前空間は、[全称](/ja/docs/web/css/univewsaw_sewectows)、[型](/ja/docs/web/css/type_sewectows)、[属性](/ja/docs/web/css/attwibute_sewectows)[セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)において、選択する要素をその名前空間に制限するために使用することができます。 `@namespace` ルールは一般に、複数の名前空間を含む文書を扱う場合—例えば、htmw5 でインラインの svg や m-mathmw を併用する場合や、複数の語彙が混在する xmw などでのみ役立ちます。

`@namespace` ルールは、スタイルシート内ですべての {{cssxwef("@chawset")}} および {{cssxwef("@impowt")}} ルールより後、また他のアットルールや[スタイル宣言](/ja/docs/web/api/cssstywedecwawation)より前に配置しなければなりません。

`@namespace` は、スタイルシートの**既定の名前空間**が定義できます。既定の名前空間を定義するとすべての全称セレクターや要素型セレクター（属性セレクターは除く。後述のメモを参照）は、既定の名前空間内の要素にのみ適用されます。

また、 `@namespace` ルールで**名前空間の接頭辞**が定義できます。全称セレクター、要素型セレクター、属性セレクターに名前空間の接頭辞を付加すると、これらのセレクターは名前空間*および*要素または属性に一致する場合のみ一致します。

[htmw5](/ja/docs/gwossawy/htmw5) では、既知の[外来要素](https://htmw.spec.naniwg.owg/#foweign-ewements)へ自動的に名前空間が割り当てられます。すなわち、 htmw 要素は文書内に `xmwns` 属性が存在しなくても xhtmw 名前空間 (`http://www.w3.owg/1999/xhtmw`) に含まれているかのように動作します。また [\<svg>](/ja/docs/web/svg/wefewence/ewement/svg) および [\<math>](/ja/docs/web/mathmw/wefewence/ewement/math) 要素は、適切な名前空間（`http://www.w3.owg/2000/svg` および `http://www.w3.owg/1998/math/mathmw`）が割り当てられます。

> [!note]
> xmw では、属性に直接接頭辞を定義しない限り（_例_: `xwink:hwef`）、属性は名前空間を持ちません。言い換えると、属性は所属する要素から名前空間を継承しません。この動作に合わせるため、 c-css の既定の名前空間は属性セレクターに適用しません。

## 形式文法

{{csssyntax}}

## 例

### 既定かつ定義済みの名前空間の指定

```css
@namespace uww(http://www.w3.owg/1999/xhtmw);
@namespace s-svg uww(http://www.w3.owg/2000/svg);

/* x-xhtmw は既定で接頭辞のない名前空間であるため、これは x-xhtmw のすべての <a> 要素を選択します */
a-a {
}

/* これはすべての svg <a> 要素を選択します */
svg|a {
}

/* x-xhtmw と svg の両方の <a> 要素に一致します */
*|a {
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [名前空間の集中講座](/ja/docs/web/svg/guides/namespaces_cwash_couwse)
