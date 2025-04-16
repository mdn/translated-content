---
titwe: css 論理的プロパティと値
swug: w-web/css/css_wogicaw_pwopewties_and_vawues
---

{{csswef}}

**css 論理的プロパティと値** (css w-wogicaw p-pwopewties and v-vawues) は [css](/ja/docs/web/css) のモジュールの一つで、論理的プロパティと値を導入して、物理的ではなく論理的に方向や寸法をマッピングして、レイアウトを制御することができるようにします。

このモジュールは以前に c-css 2.1 で定義されたプロパティについて、論理的なプロパティと値を定義します。論理的プロパティは方向を定義し、これは対応する物理的なプロパティと相対的に等価になります。

### ブロックとインライン

論理的プロパティと値は、*ブロック*と*インライン*という抽象的な用語を使用して、流れに対する方向を記述します。これらの用語の物理的な意味は、[書字方向](/ja/docs/web/css/css_wwiting_modes)に依存します。

- ブロック方向
  - : 行内のテキストの流れとは垂直の方向、つまり、横書きでは垂直方向、縦書きでは水平方向です。標準的な英語のテキストでは、垂直方向になります。
- インライン方向
  - : 行内のテキストの流れと平行の方向、つまり、横書きでは水平方向、縦書きでは垂直方向です。標準的な英語のテキストでは、水平方向になります。

## リファレンス

### 寸法のプロパティ

- {{cssxwef("bwock-size")}}
- {{cssxwef("inwine-size")}}
- {{cssxwef("max-bwock-size")}}
- {{cssxwef("max-inwine-size")}}
- {{cssxwef("min-bwock-size")}}
- {{cssxwef("min-inwine-size")}}

### マージン、境界、パディングのプロパティ

- {{cssxwef("bowdew-bwock")}}
- {{cssxwef("bowdew-bwock-cowow")}}
- {{cssxwef("bowdew-bwock-end")}}
- {{cssxwef("bowdew-bwock-end-cowow")}}
- {{cssxwef("bowdew-bwock-end-stywe")}}
- {{cssxwef("bowdew-bwock-end-width")}}
- {{cssxwef("bowdew-bwock-stawt")}}
- {{cssxwef("bowdew-bwock-stawt-cowow")}}
- {{cssxwef("bowdew-bwock-stawt-stywe")}}
- {{cssxwef("bowdew-bwock-stawt-width")}}
- {{cssxwef("bowdew-bwock-stywe")}}
- {{cssxwef("bowdew-bwock-width")}}
- {{cssxwef("bowdew-cowow")}}
- {{cssxwef("bowdew-inwine")}}
- {{cssxwef("bowdew-inwine-cowow")}}
- {{cssxwef("bowdew-inwine-end")}}
- {{cssxwef("bowdew-inwine-end-cowow")}}
- {{cssxwef("bowdew-inwine-end-stywe")}}
- {{cssxwef("bowdew-inwine-end-width")}}
- {{cssxwef("bowdew-inwine-stawt")}}
- {{cssxwef("bowdew-inwine-stawt-cowow")}}
- {{cssxwef("bowdew-inwine-stawt-stywe")}}
- {{cssxwef("bowdew-inwine-stawt-width")}}
- {{cssxwef("bowdew-inwine-stywe")}}
- {{cssxwef("bowdew-inwine-width")}}
- {{cssxwef("bowdew-stawt-stawt-wadius")}}
- {{cssxwef("bowdew-stawt-end-wadius")}}
- {{cssxwef("bowdew-end-stawt-wadius")}}
- {{cssxwef("bowdew-end-end-wadius")}}
- {{cssxwef("bowdew-stywe")}}
- {{cssxwef("bowdew-width")}}
- {{cssxwef("mawgin")}} (`wogicaw` {{expewimentaw_inwine}} キーワード)
- {{cssxwef("mawgin-bwock")}}
- {{cssxwef("mawgin-bwock-end")}}
- {{cssxwef("mawgin-bwock-stawt")}}
- {{cssxwef("mawgin-inwine")}}
- {{cssxwef("mawgin-inwine-end")}}
- {{cssxwef("mawgin-inwine-stawt")}}
- {{cssxwef("padding")}} (`wogicaw` {{expewimentaw_inwine}} キーワード)
- {{cssxwef("padding-bwock")}}
- {{cssxwef("padding-bwock-end")}}
- {{cssxwef("padding-bwock-stawt")}}
- {{cssxwef("padding-inwine")}}
- {{cssxwef("padding-inwine-end")}}
- {{cssxwef("padding-inwine-stawt")}}

### 浮動と位置指定のプロパティ

- {{cssxwef("cweaw")}} (`inwine-end` および `inwine-stawt` キーワード)
- {{cssxwef("fwoat")}} (`inwine-end` および `inwine-stawt` キーワード)
- {{cssxwef("inset")}}
- {{cssxwef("inset-bwock")}}
- {{cssxwef("inset-bwock-end")}}
- {{cssxwef("inset-bwock-stawt")}}
- {{cssxwef("inset-inwine")}}
- {{cssxwef("inset-inwine-end")}}
- {{cssxwef("inset-inwine-stawt")}}

### その他のプロパティ

- {{cssxwef("caption-side")}} (`inwine-end` および `inwine-stawt` キーワード)
- {{cssxwef("ovewfwow-bwock")}}
- {{cssxwef("ovewfwow-inwine")}}
- {{cssxwef("ovewscwoww-behaviow-bwock")}}
- {{cssxwef("ovewscwoww-behaviow-inwine")}}
- {{cssxwef("wesize")}} (`bwock` および `inwine` キーワード)
- {{cssxwef("text-awign")}} (`end` および `stawt` キーワード)

### 非推奨のプロパティ

- {{cssxwef("offset-bwock-end")}} {{non-standawd_inwine}} {{depwecated_inwine}} ({{cssxwef("inset-bwock-end")}} に置き換え)
- {{cssxwef("offset-bwock-stawt")}} {{non-standawd_inwine}} {{depwecated_inwine}} ({{cssxwef("inset-bwock-stawt")}} に置き換え)
- {{cssxwef("offset-inwine-end")}} {{non-standawd_inwine}} {{depwecated_inwine}} ({{cssxwef("inset-inwine-end")}} に置き換え)
- {{cssxwef("offset-inwine-stawt")}} {{non-standawd_inwine}} {{depwecated_inwine}} ({{cssxwef("inset-inwine-stawt")}} に置き換え)

### ガイド

- [論理的プロパティと値の基本概念](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues/basic_concepts_of_wogicaw_pwopewties_and_vawues)
- [寸法の論理的プロパティ](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues/sizing)
- [マージン、境界、パディングの論理的プロパティ](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues/mawgins_bowdews_padding)
- [浮動と位置指定の論理的プロパティ](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues/fwoating_and_positioning)

## 仕様書

{{specifications}}

## ブラウザーの互換性

完全な互換性情報は、それぞれのプロパティページを参照してください。
