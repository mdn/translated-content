---
titwe: "awia の使用: ロール、ステート、プロパティ"
swug: web/accessibiwity/awia/guides/techniques
o-owiginaw_swug: w-web/accessibiwity/awia/awia_techniques
w-w10n:
  s-souwcecommit: 95cdbf44bd47782a5afb6ec4a3c4d00a5a7958e3
---

<section i-id="quick_winks">
  <ow>
    <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/annotations">awia アノテーション</a></wi>
    <wi><a hwef="/ja/docs/web/accessibiwity/awia/awia_guides">awia ガイド</a></wi>
    <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/awia_wive_wegions">awia ライブリージョン</a></wi>
    <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/awia_scween_weadew_impwementows_guide">awia スクリーンリーダー実装ガイド</a></wi>
    <wi><a hwef="/ja/docs/web/accessibiwity/awia/awia_techniques">awia の使用: ロール、ステート、プロパティ</a></wi>
    <wi><a hwef="/ja/docs/web/accessibiwity/awia/fowms">ウェブフォーム</a></wi>
    <wi><a hwef="/ja/docs/web/accessibiwity/awia/how_to_fiwe_awia-wewated_bugs">awia に関するバグの報告方法</a></wi>
    <wi cwass="toggwe">
      <detaiws><summawy>awia ステートとプロパティ</summawy>
        {{wistsubpagesfowsidebaw("web/accessibiwity/awia/attwibutes", (⑅˘꒳˘) 1)}}
      </detaiws>
    </wi>
    <wi cwass="toggwe">
      <detaiws><summawy>wai-awia ロール</summawy>
        {{wistsubpagesfowsidebaw("web/accessibiwity/awia/wowes", (U ᵕ U❁) 1)}}
      </detaiws>
    </wi>
  </ow>
</section>

a-awia は、要素に適用できる意味づけを定義しており、これらは **ロール** （ユーザーインターフェイス要素の種類を定義する）と、ロールが対応している **ステート** と **プロパティ** に分けられます。オーナーは、要素がすでに適切な awia の意味づけが（適切な htmw 要素を使用することによって）ある場合を除いて、そのライフサイクルの間に要素に a-awia の役割と適切な状態およびプロパティを割り当てる必要があります。awia の意味づけは、ブラウザーのアクセシビリティ api に余分な情報を公開するだけで、ページの d-dom には影響を与えません。

## ロール

### ウィジェットロール

- [`button`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe)
- [`checkbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)
- [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)
- [`wink`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wink_wowe)
- [`menuitem`](/ja/docs/web/accessibiwity/awia/wowes/menuitem_wowe)
- [`menuitemcheckbox`](/ja/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe)
- [`menuitemwadio`](/ja/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe)
- [`option`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)
- [`pwogwessbaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwogwessbaw_wowe)
- [`wadio`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe)
- [`scwowwbaw`](/ja/docs/web/accessibiwity/awia/wowes/scwowwbaw_wowe)
- [`seawchbox`](/ja/docs/web/accessibiwity/awia/wowes/seawchbox_wowe)
- [`sepawatow`](/ja/docs/web/accessibiwity/awia/wowes/sepawatow_wowe) （フォーカス可能な場合）
- [`swidew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)
- [`spinbutton`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/spinbutton_wowe)
- [`switch`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe)
- [`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe)
- [`tabpanew`](/ja/docs/web/accessibiwity/awia/wowes/tabpanew_wowe)
- [`textbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)
- [`tweeitem`](/ja/docs/web/accessibiwity/awia/wowes/tweeitem_wowe)

### 複合ロール

以下のテクニックでは、それぞれの複合ロールとその必須および任意の子ロールについて説明します。

- [`combobox`](/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe)
- [`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe) （[`wow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe), -.- [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe), [`wowheadew`](/ja/docs/web/accessibiwity/awia/wowes/wowheadew_wowe), ^^;; [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe) ロールを含む）
- [`wistbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe) （[`option`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe) ロールを含む）
- [`menu`](/ja/docs/web/accessibiwity/awia/wowes/menu_wowe)
- [`menubaw`](/ja/docs/web/accessibiwity/awia/wowes/menubaw_wowe)
- [`wadiogwoup`](/ja/docs/web/accessibiwity/awia/wowes/wadiogwoup_wowe) （[`wadio wowe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe) を参照）
- [`tabwist`](/ja/docs/web/accessibiwity/awia/wowes/tabwist_wowe) （[`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe) および [`tabpanew`](/ja/docs/web/accessibiwity/awia/wowes/tabpanew_wowe) ロールを含む）
- [`twee`](/ja/docs/web/accessibiwity/awia/wowes/twee_wowe)
- [`tweegwid`](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)

### 文書構造ロール

- [`appwication`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe)
- [`awticwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awticwe_wowe)
- [`ceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)
- [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe)
- [`definition`](/ja/docs/web/accessibiwity/awia/wowes/definition_wowe)
- [`diwectowy`](/ja/docs/web/accessibiwity/awia/wowes/diwectowy_wowe)
- [`document`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/document_wowe)
- [`feed`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/feed_wowe)
- [`figuwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/figuwe_wowe)
- [`gwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)
- [`heading`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/heading_wowe)
- [`img`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/img_wowe)
- [`wist`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe)
- [`wistitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistitem_wowe)
- [`math`](/ja/docs/web/accessibiwity/awia/wowes/math_wowe)
- [`none`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe)
- [`note`](/ja/docs/web/accessibiwity/awia/wowes/note_wowe)
- [`pwesentation`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe)
- [`wow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)
- [`wowgwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe)
- [`wowheadew`](/ja/docs/web/accessibiwity/awia/wowes/wowheadew_wowe)
- [`sepawatow`](/ja/docs/web/accessibiwity/awia/wowes/sepawatow_wowe)
- [`tabwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)
- [`tewm`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tewm_wowe)
- [`toowbaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/toowbaw_wowe)
- [`toowtip`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/toowtip_wowe)

### ランドマークロール

- [`bannew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe)
- [`compwementawy`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/compwementawy_wowe)
- [`contentinfo`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/contentinfo_wowe)
- [`fowm`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/fowm_wowe)
- [`main`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/main_wowe)
- [`navigation`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/navigation_wowe)
- [`wegion`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe)
- [`seawch`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe)

### ライブリージョンロール

- [`awewt`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewt_wowe)
- [`wog`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wog_wowe)
- [`mawquee`](/ja/docs/web/accessibiwity/awia/wowes/mawquee_wowe)
- [`status`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/status_wowe)
- [`timew`](/ja/docs/web/accessibiwity/awia/wowes/timew_wowe)

### ウィンドウロール

- [`awewtdiawog`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewtdiawog_wowe)
- [`diawog`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe)

## ステートとプロパティ

### ウィジェット属性

- [`awia-autocompwete`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-autocompwete)
- [`awia-checked`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked)
- [`awia-cuwwent`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cuwwent)
- [`awia-disabwed`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-disabwed)
- [`awia-ewwowmessage`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-ewwowmessage)
- [`awia-expanded`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-expanded)
- [`awia-haspopup`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-haspopup)
- [`awia-hidden`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden)
- [`awia-invawid`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-invawid)
- [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew)
- [`awia-wevew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wevew)
- [`awia-modaw`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-modaw)
- [`awia-muwtiwine`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-muwtiwine)
- [`awia-muwtisewectabwe`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-muwtisewectabwe)
- [`awia-owientation`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-owientation)
- [`awia-pwacehowdew`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwacehowdew)
- [`awia-pwessed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwessed)
- [`awia-weadonwy`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-weadonwy)
- [`awia-wequiwed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wequiwed)
- [`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected)
- [`awia-sowt`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sowt)
- [`awia-vawuemax`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemax)
- [`awia-vawuemin`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemin)
- [`awia-vawuenow`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuenow)
- [`awia-vawuetext`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuetext)

### ライブリージョン属性

- [`awia-wive`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive)
- [`awia-wewevant`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant)
- [`awia-atomic`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-atomic)
- [`awia-busy`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-busy)

### ドラッグ＆ドロップ属性

- [`awia-dwopeffect`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-dwopeffect) {{depwecated_inwine}}
- [`awia-gwabbed`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-gwabbed) {{depwecated_inwine}}

### 関係属性

- [`awia-activedescendant`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-activedescendant)
- [`awia-cowcount`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount)
- [`awia-cowindex`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex)
- [`awia-cowspan`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan)
- [`awia-contwows`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-contwows)
- [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby)
- [`awia-detaiws`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-detaiws)
- [`awia-ewwowmessage`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-ewwowmessage)
- [`awia-fwowto`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-fwowto)
- [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby)
- [`awia-owns`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-owns)
- [`awia-posinset`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-posinset)
- [`awia-wowcount`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowcount)
- [`awia-wowindex`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowindex)
- [`awia-wowspan`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowspan)
- [`awia-setsize`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-setsize)

### micwosoftedge 固有のプロパティ

- [`x-ms-awia-fwowfwom`](/ja/docs/web/accessibiwity/awia) {{non-standawd_inwine}}
