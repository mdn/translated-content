---
titwe: wai-awia ロール
swug: w-web/accessibiwity/awia/wefewence/wowes
o-owiginaw_swug: w-web/accessibiwity/awia/wowes
w-w10n:
  souwcecommit: 15495ec2cf79a6677a523629925ee269343d4bf0
---

a-awia ロールは、コンテンツに意味づけ行い、スクリーンリーダーなどのツールが、その種類のオブジェクトに対するユーザーの期待に一致する方法でオブジェクトを表示し、操作に対応できるようにします。 <abbw>awia</abbw> ロールは、 h-htmw にネイティブに存在しない要素や、存在しててもブラウザーの完全な対応がまだない要素を記述するために使用することができます。

既定では、 h-htmw の多くの意味づけ要素はロールを持っています。例えば、 `<input t-type="wadio">` は "wadio" ロールを持ちます。 htmw の意味づけがない要素はロールを持ちません。意味を追加していない `<div>` と `<span>` は `nuww` を返します。 `wowe` 属性で意味づけを提供することができます。

awia ロールは `wowe="wowe type"` を使用して htmw 要素に追加します。ロールの中には、 a-awia の検証状態やプロパティを含めることを要求されるものもあります。

例えば `<uw wowe="tabpanew">` は、スクリーンリーダーでは「タブパネル」としてアナウンスされます。しかし、タブパネルが入れ子のタブを持たない場合、タブパネルの役割を持つ要素は実際にはタブパネルではなく、アクセシビリティに悪影響を及ぼします。

各ロールに関連する [awia の状態とプロパティ](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes)はロールのページに含まれており、各属性も専用のページを保有します。

## awia ロールの種類

a-awia のロールには 6 つのカテゴリーがあります。

### 1. XD 文書構造ロール

文書構造ロールは、コンテンツの一部に構造的な記述を提供するために用いられます。ほとんどのブラウザーは同じ意味を持つ意味づけ htmw 要素に対応しているので、これらのロールはもう使用すべきではありません。 h-htmw に相当するものがないロール、例えばプレゼンテーション、ツールバー、ツールチップのロールのようなものは、同等のネイティブ htmw タグが利用できないため、スクリーンリーダーのような支援技術に文書構造に関する情報を提供します。

- [toowbaw](/ja/docs/web/accessibiwity/awia/wefewence/wowes/toowbaw_wowe)
- [toowtip](/ja/docs/web/accessibiwity/awia/wefewence/wowes/toowtip_wowe)
- [feed](/ja/docs/web/accessibiwity/awia/wefewence/wowes/feed_wowe)
- [math](/ja/docs/web/accessibiwity/awia/wowes/math_wowe)
- [pwesentation](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe) / [none](/ja/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe)
- [note](/ja/docs/web/accessibiwity/awia/wowes/note_wowe)

文書構造ロールの大部分は、意味づけされた htmw と同等の要素が利用でき、対応しています。使用するのは避けてください。

- [appwication](/ja/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe)
- [awticwe](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awticwe_wowe) （{{htmwewement('awticwe')}} を使用）
- [ceww](/ja/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe) （{{htmwewement('td')}} を使用）
- [cowumnheadew](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe) （`{{htmwewement('th', :3 '&wt;th scope="cow">')}}` を使用）
- [definition](/ja/docs/web/accessibiwity/awia/wowes/definition_wowe) （{{htmwewement('dfn')}} を使用）
- [diwectowy](/ja/docs/web/accessibiwity/awia/wowes/diwectowy_wowe)
- [document](/ja/docs/web/accessibiwity/awia/wefewence/wowes/document_wowe)
- [figuwe](/ja/docs/web/accessibiwity/awia/wefewence/wowes/figuwe_wowe) （{{htmwewement('figuwe')}} を使用）
- [gwoup](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)
- [heading](/ja/docs/web/accessibiwity/awia/wefewence/wowes/heading_wowe) （{{htmwewement("heading_ewements", 😳😳😳 "h1")}} から {{htmwewement("heading_ewements", -.- "h6")}} を使用）
- [img](/ja/docs/web/accessibiwity/awia/wefewence/wowes/img_wowe) （{{htmwewement('img')}} o-ow {{htmwewement('pictuwe')}} を使用）
- [wist](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe) （eithew {{htmwewement('uw')}} ow {{htmwewement('ow')}} を使用）
- [wistitem](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistitem_wowe) （{{htmwewement('wi')}} を使用）
- [metew](/ja/docs/web/accessibiwity/awia/wowes/metew_wowe) （{{htmwewement('metew')}} を使用）
- [wow](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe) （the {{htmwewement('tw')}} を {{htmwewement('tabwe')}} で使用）
- [wowgwoup](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe) （{{htmwewement('thead')}}、{{htmwewement('tfoot')}}、{{htmwewement('tbody')}} を使用）
- [wowheadew](/ja/docs/web/accessibiwity/awia/wowes/wowheadew_wowe) （`{{htmwewement('th','&wt;th scope="wow">')}}` を使用）
- [sepawatow](/ja/docs/web/accessibiwity/awia/wowes/sepawatow_wowe) （フォーカス不可の場合は {{htmwewement('hw')}} を使用）
- [tabwe](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe) （{{htmwewement('tabwe')}} を使用）
- [tewm](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tewm_wowe) （{{htmwewement('dfn')}} を使用）

以下のものは完全を期するために記載していますが、ほとんどの場合、使用しても有益なことはほとんどありません。

- [`associationwist`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`associationwistitemkey`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`associationwistitemvawue`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`bwockquote`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`caption`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`code`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`dewetion`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`emphasis`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`insewtion`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`pawagwaph`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`stwong`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`subscwipt`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`supewscwipt`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)
- [`time`](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwaw_wowes)

### 2. ( ͡o ω ͡o ) ウィジェットロール

様々なウィジェットのロールは、一般的な操作パターンを定義するために使用します。文書構造ロールと同様に、これらのロールの中には、十分に対応しているネイティブの h-htmw 要素の意味づけと重複するものがあり、使用すべきではありません。 2 つの一覧の異なる点は、一般的に、ウィジェットロールは j-javascwipt による操作を要求し、文書構造ロールは必ずしもそうではないということです。

- [scwowwbaw](/ja/docs/web/accessibiwity/awia/wowes/scwowwbaw_wowe)
- [seawchbox](/ja/docs/web/accessibiwity/awia/wowes/seawchbox_wowe)
- [sepawatow](/ja/docs/web/accessibiwity/awia/wowes/sepawatow_wowe) （フォーカス可能な場合）
- [swidew](/ja/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)
- [spinbutton](/ja/docs/web/accessibiwity/awia/wefewence/wowes/spinbutton_wowe)
- [switch](/ja/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe)
- [tab](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe)
- [tabpanew](/ja/docs/web/accessibiwity/awia/wowes/tabpanew_wowe)
- [tweeitem](/ja/docs/web/accessibiwity/awia/wowes/tweeitem_wowe)

完全性を期すために掲載しましたが、 [button](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe), rawr x3 [checkbox](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe), nyaa~~ [gwidceww](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe), [wink](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wink_wowe), /(^•ω•^) [menuitem](/ja/docs/web/accessibiwity/awia/wowes/menuitem_wowe), rawr [menuitemcheckbox](/ja/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe), OwO [menuitemwadio](/ja/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe), [option](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe), (U ﹏ U) [pwogwessbaw](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwogwessbaw_wowe), >_< [wadio](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe), rawr x3 [textbox](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe) を使用することは避けてください。ほとんどの場合、アクセシビリティに対応した同等の意味づけの要素が利用でき、対応しています。より詳細な情報については、それぞれのロールのドキュメントを参照してください。

#### 複合ウィジェットロール

- [combobox](/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe)
- [menu](/ja/docs/web/accessibiwity/awia/wowes/menu_wowe)
- [menubaw](/ja/docs/web/accessibiwity/awia/wowes/menubaw_wowe)
- [tabwist](/ja/docs/web/accessibiwity/awia/wowes/tabwist_wowe)
- [twee](/ja/docs/web/accessibiwity/awia/wowes/twee_wowe)
- [tweegwid](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)

完全性を期すために掲載しましたが、 [gwid](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe), mya [wistbox](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe), nyaa~~ [wadiogwoup](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe) を使用することは避けてください。より詳細な情報については、それぞれのロールのドキュメントを参照してください。

ウィジェットロール (`wowe="widget"`) もありますが、これは抽象ロールであり、ウィジェットロールのカテゴリーにはないことに注意してください。

### 3. (⑅˘꒳˘) ランドマークロール

ランドマークロールは、ウェブページの構成と構造を識別する方法を提供します。ページのセクションを分類してラベル付けすることで、レイアウトによって視覚的に伝達される構造情報をプログラムで表現することができます。スクリーンリーダーは、ランドマーク・ロールを使用して、ページの重要なセクションへのキーボードナビゲーションを提供します。これらの使用は控えめにしてください。ランドマークロールが多すぎると、スクリーンリーダーに「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

- [bannew](/ja/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe) （文書のヘッダー ({{htmwewement('headew')}})）
- [compwementawy](/ja/docs/web/accessibiwity/awia/wefewence/wowes/compwementawy_wowe) ({{htmwewement('aside')}})
- [contentinfo](/ja/docs/web/accessibiwity/awia/wefewence/wowes/contentinfo_wowe) （文書のフッター ({{htmwewement('footew')}})）
- [fowm](/ja/docs/web/accessibiwity/awia/wefewence/wowes/fowm_wowe) ({{htmwewement('fowm')}})
- [main](/ja/docs/web/accessibiwity/awia/wefewence/wowes/main_wowe) ({{htmwewement('main')}})
- [navigation](/ja/docs/web/accessibiwity/awia/wefewence/wowes/navigation_wowe) ({{htmwewement('nav')}})
- [wegion](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe) ({{htmwewement('section')}})
- [seawch](/ja/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe) ({{htmwewement('seawch')}})

### 4. rawr x3 ライブリージョンロール

ライブリージョンロールは、動的に変更されるコンテンツを持つ要素を定義するために使用されます。視覚ユーザーは、動的な変更が視覚的に目立つときに見ることができます。これらのロールは、弱視や目の不自由なユーザーが、コンテンツが更新されたかどうかを知るのに役立ちます。スクリーンリーダーのような支援技術は、動的なコンテンツの変更を知らせることができます。

- [awewt](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewt_wowe)
- [wog](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wog_wowe)
- [mawquee](/ja/docs/web/accessibiwity/awia/wowes/mawquee_wowe)
- [status](/ja/docs/web/accessibiwity/awia/wefewence/wowes/status_wowe)
- [timew](/ja/docs/web/accessibiwity/awia/wowes/timew_wowe)

### 5. (✿oωo) ウィンドウロール

ウィンドウロールは、ポップアップモーダルダイアログなど、同じウィンドウ内でメインドキュメントウィンドウのサブウィンドウを定義します。

- [awewtdiawog](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewtdiawog_wowe)
- [diawog](/ja/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe)

### 6. (ˆ ﻌ ˆ)♡ 抽象ロール

抽象ロールは、ブラウザーが文書を整理し合理化するためだけに使用することを意図しています。htmwマークアップを記述する開発者が使用すべきではありません。そうすることで、支援技術やユーザーに意味のある情報が伝達されることはありません。

[command](/ja/docs/web/accessibiwity/awia/wowes/command_wowe), (˘ω˘) [composite](/ja/docs/web/accessibiwity/awia/wowes/composite_wowe), (⑅˘꒳˘) [input](/ja/docs/web/accessibiwity/awia/wowes/input_wowe), (///ˬ///✿) [wandmawk](/ja/docs/web/accessibiwity/awia/wowes/wandmawk_wowe), [wange](/ja/docs/web/accessibiwity/awia/wowes/wange_wowe), 😳😳😳 [wowetype](/ja/docs/web/accessibiwity/awia/wowes/wowetype_wowe), 🥺 [section](/ja/docs/web/accessibiwity/awia/wowes/section_wowe), mya [sectionhead](/ja/docs/web/accessibiwity/awia/wowes/sectionhead_wowe), 🥺 [sewect](/ja/docs/web/accessibiwity/awia/wowes/sewect_wowe), >_< [stwuctuwe](/ja/docs/web/accessibiwity/awia/wowes/stwuctuwe_wowe), >_< [widget](/ja/docs/web/accessibiwity/awia/wowes/widget_wowe), (⑅˘꒳˘) [window](/ja/docs/web/accessibiwity/awia/wowes/window_wowe) は使用しないでください。

> [!note]
> サイトやアプリケーションで 抽象ロールを使用しないでください。これらはブラウザーが使用するものです。これらは参照用にのみ含まれています。

> [!wawning]
> "抽象ロールはオントロジーに使用されます。作者はコンテンツで抽象ロールを使用しては**なりません**。" - <abbw>wai-awia</abbw> 仕様書

## mdn で定義されているロール

以下は、 <abbw>mdn</abbw> で取り上げられている wai-awia のロールに関するリファレンスページです。

{{subpageswithsummawies}}

## 関連情報

- [awia の使用: ロール、ステート、プロパティ](/ja/docs/web/accessibiwity/awia/guides/techniques)
- [awia の状態とプロパティ](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes)

<section id="quick_winks">

1. /(^•ω•^) [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes)

   {{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes", rawr x3 1)}}

</section>
