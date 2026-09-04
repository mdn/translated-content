---
title: WAI-ARIA ロール
short-title: ロール
slug: Web/Accessibility/ARIA/Reference/Roles
l10n:
  sourceCommit: 4a39dedf2c57c6947339a63a8de0e18a7abe8e2c
---

ARIA ロールは、コンテンツに意味づけ行い、スクリーンリーダーなどのツールが、その種類のオブジェクトに対するユーザーの期待に一致する方法でオブジェクトを表示し、操作に対応できるようにします。<abbr>ARIA</abbr> ロールは、 HTML にネイティブに存在しない要素や、存在しててもブラウザーの完全な対応がまだない要素を記述するために使用することができます。

デフォルトで、 HTML の多くの意味づけ要素はロールを持ちます。例えば、 `<input type="radio">` は "radio" ロールを持っています。HTML の意味づけがない要素はロールを持ちません。意味を追加していない `<div>` と `<span>` は `null` を返します。 `role` 属性で意味づけを提供することができます。

ARIA ロールは `role="role type"` を使用して HTML 要素に追加します。ここで _role type_ は ARIA 仕様書におけるロールの名前です。ロールの中には、関連する ARIA のステートやプロパティを含める必要があるものもあれば、他のロールと組み合わせて初めて有効になるものもあります。

例えば `<ul role="tabpanel">` は、スクリーンリーダーでは「タブパネル」としてアナウンスされます。しかし、タブパネルが入れ子のタブを持たない場合、タブパネルの役割を持つ要素は実際にはタブパネルではなく、アクセシビリティに悪影響を及ぼします。

各ロールに関連する [ARIA のステートとプロパティ](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes)は、そのロールのページに書かれており、各属性にも専用のページがあります。

## ARIA ロールの種類

ARIA のロールには 6 つのカテゴリーがあります。

### 1. 文書構造ロール

文書構造ロールは、コンテンツの一部に構造的な記述を提供するために用いられます。これらのロールのほとんどは、ブラウザーが同じ意味を持つ意味づけ HTML 要素に対応するようになっているので、もう使用すべきではありません。HTML に相当するものがないロール、例えば presentation、toolbar、tooltip ロールのようなものは、同等のネイティブ HTML タグが利用できないため、スクリーンリーダーのような支援技術に文書構造に関する情報を提供します。

- [`toolbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`tooltip`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)
- [`feed`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [`math`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/math_role)
- [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) / [`none`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`note`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/note_role)

文書構造ロールの大部分は、意味づけされた HTML と同等の要素が利用でき、対応しています。使用するのは避けてください。

- [`application`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`article`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) （{{HTMLElement('article')}} を使ってください）
- [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) （{{HTMLElement('td')}} を使ってください）
- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) （`{{HTMLElement('th', '&lt;th scope="col">')}}` を使ってください）
- [`definition`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) （{{HTMLElement('dfn')}} を使ってください）
- [`directory`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role)
- [`document`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/document_role)
- [`figure`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role) （{{HTMLElement('figure')}} を使ってください）
- [`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`heading`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) （{{HTMLElement("Heading_Elements", "h1")}} から {{HTMLElement("Heading_Elements", "h6")}} を使ってください）
- [`img`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) （{{HTMLElement('img')}} or {{HTMLElement('picture')}} を使ってください）
- [`list`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) （either {{HTMLElement('ul')}} or {{HTMLElement('ol')}} を使ってください）
- [`listitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role) （{{HTMLElement('li')}} を使ってください）
- [`meter`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role) （{{HTMLElement('meter')}} を使ってください）
- [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) （the {{HTMLElement('tr')}} を {{HTMLElement('table')}} を使ってください）
- [`rowgroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) （{{HTMLElement('thead')}}、{{HTMLElement('tfoot')}}、{{HTMLElement('tbody')}} を使ってください）
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) （`{{HTMLElement('th','&lt;th scope="row">')}}` を使ってください）
- [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) （フォーカス不可の場合は {{HTMLElement('hr')}} を使ってください）
- [`table`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) （{{HTMLElement('table')}} を使ってください）
- [`term`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) （{{HTMLElement('dfn')}} を使ってください）

以下のものは全体を網羅するために記載していますが、ほとんどの場合、使用しても有益なことはほとんどありません。

- [`associationlist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`associationlistitemkey`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`associationlistitemvalue`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`blockquote`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`caption`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`code`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`deletion`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`emphasis`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`insertion`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`paragraph`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`strong`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`subscript`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`superscript`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`time`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)

### 2. ウィジェットロール

様々なウィジェットのロールは、一般的な操作パターンを定義するために使用します。文書構造ロールと同様に、これらのロールの中には、十分に対応されているネイティブの HTML 要素の意味づけと重複するものがあり、それらは使用すべきではありません。文書構造ロールとの主な違いは、ウィジェットロールは一般的に、JavaScript による操作が必要であるのに対し、文書構造ロールは必ずしもそうではないということです。

- [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`searchbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`separator`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) （フォーカス可能な場合）
- [`slider`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`switch`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tab`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`tabpanel`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
- [`treeitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

全体を網羅するために掲載しましたが、[`button`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role), [`checkbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`link`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/link_role), [`menuitem`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role), [`menuitemradio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role), [`option`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`progressbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role), [`radio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role), [`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) を使用することは避けてください。ほとんどの場合、アクセシビリティに対応した同等の意味づけの要素が利用でき、対応しています。より詳細な情報については、それぞれのロールのドキュメントを参照してください。

#### 複合ウィジェットロール

- [`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`menu`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

全体を網羅するために掲載しましたが、[`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`radiogroup`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role) を使用することは避けてください。より詳細な情報については、それぞれのロールのドキュメントを参照してください。

widget ロール (`role="widget"`) もありますが、これは抽象ロールであり、ウィジェットロールのカテゴリーにはないことに注意してください。

### 3. ランドマークロール

ランドマークロールは、ウェブページの構成と構造を識別する方法を提供します。ページのセクションを分類してラベル付けすることで、レイアウトによって視覚的に伝達される構造情報をプログラムで表現することができます。スクリーンリーダーは、ランドマークロールを使用して、ページの重要なセクションへのキーボードナビゲーションを提供します。これらの使用は控えめにしてください。ランドマークロールが多すぎると、スクリーンリーダーに「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

- [`banner`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) （文書のヘッダー ({{HTMLElement('header')}})）
- [`complementary`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) ({{HTMLElement('aside')}})
- [`contentinfo`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role) （文書のフッター ({{HTMLElement('footer')}})）
- [`form`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/form_role) ({{HTMLElement('form')}})
- [`main`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) ({{HTMLElement('main')}})
- [`navigation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role) ({{HTMLElement('nav')}})
- [`region`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) ({{HTMLElement('section')}})
- [`search`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) ({{HTMLElement('search')}})

### 4. ライブリージョンロール

ライブリージョンロールは、動的に変更されるコンテンツを持つ要素を定義するために使用されます。視覚ユーザーは、視覚的に目立っていれば動的な変更を見ることができます。これらのロールは、弱視や目の不自由なユーザーが、コンテンツが更新されたかどうかを知るのに役立ちます。スクリーンリーダーのような支援技術は、動的なコンテンツの変更を知らせることができます。

- [`alert`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`log`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [`marquee`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [`status`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [`timer`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)

### 5. ウィンドウロール

ウィンドウロールは、ポップアップモーダルダイアログなど、同じウィンドウ内でメインドキュメントウィンドウのサブウィンドウを定義します。

- [`alertdialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

### 6. 抽象ロール

抽象ロールは、ブラウザーが文書を整理し合理化するためだけに使用するためのものです。HTML マークアップを記述する開発者が使用すべきではありません。使用しても、支援技術やユーザーに意味のある情報が伝達されることはありません。

[`command`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/command_role), [`composite`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role), [`input`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/input_role), [`landmark`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role), [`range`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/range_role), [`roletype`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/roletype_role), [`section`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/section_role), [`sectionhead`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role), [`select`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/select_role), [`structure`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structure_role), [`widget`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role), [`window`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/window_role) は使用しないでください。

> [!NOTE]
> サイトやアプリケーションで 抽象ロールを使用しないでください。これらはブラウザーが使用するものです。これらは参考のために記述しています。

> [!WARNING]
> 「抽象ロールはオントロジーに使用されます。作者はコンテンツで抽象ロールを使用しては**なりません**。」 - <abbr>WAI-ARIA</abbr> 仕様書

## MDN で定義されているロール

以下は、<abbr>MDN</abbr> に掲載されている WAI-ARIA のロールのリファレンスページです。

{{SubpagesWithSummaries}}

## 関連情報

- [ARIA の使用: ロール、ステート、プロパティ](/ja/docs/Web/Accessibility/ARIA/Guides/Techniques)
- [ARIA のステートとプロパティ](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes)
