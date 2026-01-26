---
title: "ARIA の使用: ロール、ステート、プロパティ"
slug: Web/Accessibility/ARIA/Guides/Techniques
original_slug: Web/Accessibility/ARIA/ARIA_Techniques
l10n:
  sourceCommit: 95cdbf44bd47782a5afb6ec4a3c4d00a5a7958e3
---

<section id="Quick_links">
  <ol>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/Annotations">ARIA アノテーション</a></li>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Guides">ARIA ガイド</a></li>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">ARIA ライブリージョン</a></li>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide">ARIA スクリーンリーダー実装ガイド</a></li>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques">ARIA の使用: ロール、ステート、プロパティ</a></li>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/forms">ウェブフォーム</a></li>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/How_to_file_ARIA-related_bugs">ARIA に関するバグの報告方法</a></li>
    <li class="toggle">
      <details><summary>ARIA ステートとプロパティ</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Attributes", 1)}}
      </details>
    </li>
    <li class="toggle">
      <details><summary>WAI-ARIA ロール</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Roles", 1)}}
      </details>
    </li>
  </ol>
</section>

ARIA は、要素に適用できる意味づけを定義しており、これらは **ロール** （ユーザーインターフェイス要素の種類を定義する）と、ロールが対応している **ステート** と **プロパティ** に分けられます。オーナーは、要素がすでに適切な ARIA の意味づけが（適切な HTML 要素を使用することによって）ある場合を除いて、そのライフサイクルの間に要素に ARIA の役割と適切な状態およびプロパティを割り当てる必要があります。ARIA の意味づけは、ブラウザーのアクセシビリティ API に余分な情報を公開するだけで、ページの DOM には影響を与えません。

## ロール

### ウィジェットロール

- [`button`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`link`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`progressbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`radio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) （フォーカス可能な場合）
- [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`switch`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`tabpanel`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
- [`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`treeitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

### 複合ロール

以下のテクニックでは、それぞれの複合ロールとその必須および任意の子ロールについて説明します。

- [`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) （[`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role), [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role), [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) ロールを含む）
- [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) （[`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) ロールを含む）
- [`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`radiogroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) （[`radio role`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role) を参照）
- [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) （[`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) および [`tabpanel`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) ロールを含む）
- [`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

### 文書構造ロール

- [`application`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`article`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
- [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`definition`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role)
- [`directory`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role)
- [`document`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/document_role)
- [`feed`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [`figure`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
- [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`heading`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [`img`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)
- [`list`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [`listitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [`math`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/math_role)
- [`none`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`note`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/note_role)
- [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowgroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`table`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [`term`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`toolbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`tooltip`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)

### ランドマークロール

- [`banner`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [`complementary`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [`contentinfo`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [`form`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [`main`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [`navigation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [`region`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)
- [`search`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)

### ライブリージョンロール

- [`alert`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`log`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [`marquee`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [`status`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [`timer`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)

### ウィンドウロール

- [`alertdialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

## ステートとプロパティ

### ウィジェット属性

- [`aria-autocomplete`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- [`aria-current`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)
- [`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-level`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-modal`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-multiline`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)
- [`aria-multiselectable`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-orientation`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
- [`aria-placeholder`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)
- [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-readonly`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [`aria-sort`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
- [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
- [`aria-valuetext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

### ライブリージョン属性

- [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)

### ドラッグ＆ドロップ属性

- [`aria-dropeffect`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect) {{deprecated_inline}}
- [`aria-grabbed`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed) {{deprecated_inline}}

### 関係属性

- [`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
- [`aria-colcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-colspan`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
- [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- [`aria-rowcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-rowspan`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

### MicrosoftEdge 固有のプロパティ

- [`x-ms-aria-flowfrom`](/ja/docs/Web/Accessibility/ARIA) {{Non-standard_Inline}}
