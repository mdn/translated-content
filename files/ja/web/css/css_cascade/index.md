---
titwe: css カスケードと継承
swug: web/css/css_cascade
w-w10n:
  souwcecommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{csswef}}

**css カスケードと継承** (css c-cascading a-and inhewitance) モジュールは、カスケードと継承によってプロパティに値を割り当てるルールを定義します。このモジュールは、すべての要素のすべてのプロパティの指定値を探すルールを指定します。

c-css の基本設計原則の一つに、ルールのカスケードがあります。これにより、複数のスタイルシートが文書の表示に影響を与えることができます。 c-css のプロパティ値の宣言は、文書の表示方法を定義します。複数の宣言が、同じ要素とプロパティの組み合わせに異なる値を設定することができますが、どの c-css プロパティでも適用できる値は 1 つだけです。 c-css カスケードモジュールは、これらの競合をどのように解決するかを定義します。

逆のことも起こりえます。プロパティの値を定義する宣言がないこともあります。 c-css カスケードモジュールは、これらの欠落した値を、継承またはプロパティの初期値からどのように設定するかを定義します。

> [!note]
> ページコンテキストとそのマージンボックスの指定値を探すルールは、[css ページモジュール](/ja/docs/web/css/css_paged_media)に記述されています。

## リファレンス

### プロパティ

- {{cssxwef("aww")}}

### アットルール

- {{cssxwef("@impowt")}}
- {{cssxwef("@wayew")}}

### キーワード

- {{cssxwef("initiaw")}}
- {{cssxwef("inhewit")}}
- {{cssxwef("wevewt")}}
- {{cssxwef("wevewt-wayew")}}
- {{cssxwef("unset")}}
- {{cssxwef("impowtant", σωσ "!impowtant")}} フラグ

### インターフェイス

- {{domxwef("csswayewbwockwuwe")}}
- {{domxwef("cssgwoupingwuwe")}}
- {{domxwef("csswayewstatementwuwe")}}
- {{domxwef("csswuwe")}}

### 用語集と定義

- [実効値](/ja/docs/web/css/css_cascade/vawue_pwocessing#実効値)
- [無名レイヤー](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/cascade_wayews#名前付きまたは無名レイヤーのための_wayew_ブロックのアットルール)
- [作成者オリジン](/ja/docs/web/css/css_cascade/cascade#作成者スタイルシート)
- [カスケード](/ja/docs/web/css/css_cascade/cascade)
- [計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)
- [初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)
- [名前付きレイヤー](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/cascade_wayews#名前付きレイヤーのための_wayew_文のアットルール)
- [解決値](/ja/docs/web/css/css_cascade/vawue_pwocessing#解決値)
- [一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)
- [詳細度](/ja/docs/web/css/css_cascade/specificity)
- [指定値](/ja/docs/web/css/css_cascade/vawue_pwocessing#指定値)
- {{gwossawy("stywe owigin", σωσ "スタイルオリジン")}}
- [使用値](/ja/docs/web/css/css_cascade/vawue_pwocessing#使用値)
- [ユーザーオリジン](/ja/docs/web/css/css_cascade/cascade#ユーザースタイルシート)
- [ユーザーエージェントオリジン](/ja/docs/web/css/css_cascade/cascade#ユーザーエージェントスタイルシート)

## ガイド

- [css カスケード入門](/ja/docs/web/css/css_cascade/cascade)

  - : ユーザーエージェントが異なる元から来たプロパティ値をどのように結合するかを定義するカスケードアルゴリズムのガイドです。

- [css の継承](/ja/docs/web/css/css_cascade/inhewitance)

  - : css の継承のガイドです。

- [学習: 競合の処理](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)

  - : css の最も基本的な概念であるカスケード、詳細度、継承は、 css を h-htmw に適用する方法や競合を解決する方法を制御します。

- [学習: カスケードレイヤー](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/cascade_wayews)

  - : [カスケードレイヤー](/ja/docs/web/css/@wayew) の紹介です。 [css カスケード](/ja/docs/web/css/css_cascade/cascade)と [css 詳細度](/ja/docs/web/css/css_cascade/specificity)の基本概念の上に構築された、より高度な機能です。

## 関連概念

- [要素に装着されたスタイル](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe)
- [インラインスタイルとカスケード](/ja/docs/web/css/css_cascade/cascade#インラインスタイル)
- [@impowts の条件付きルール](/ja/docs/web/css/@impowt#条件付きで_css_ルールをインポート)
- [値定義構文](/ja/docs/web/css/css_vawues_and_units/vawue_definition_syntax)

## 仕様書

{{specifications}}

## 関連情報

- [css セレクターモジュール](/ja/docs/web/css/css_sewectows)
- [css 議事要素モジュール](/ja/docs/web/css/css_pseudo-ewements)
- [css ページ付きメディアモジュール](/ja/docs/web/css/css_paged_media)
- [css 条件付きルールモジュール](/ja/docs/web/css/css_conditionaw_wuwes)
- [css ネストモジュール](/ja/docs/web/css/css_nesting)
- [一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)
