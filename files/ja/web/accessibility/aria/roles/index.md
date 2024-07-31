---
title: WAI-ARIA ロール
slug: Web/Accessibility/ARIA/Roles
l10n:
  sourceCommit: 15495ec2cf79a6677a523629925ee269343d4bf0
---

ARIA ロールは、コンテンツに意味づけ行い、スクリーンリーダーなどのツールが、その種類のオブジェクトに対するユーザーの期待に一致する方法でオブジェクトを表示し、操作に対応できるようにします。 <abbr>ARIA</abbr> ロールは、 HTML にネイティブに存在しない要素や、存在しててもブラウザーの完全な対応がまだない要素を記述するために使用することができます。

既定では、 HTML の多くの意味づけ要素はロールを持っています。例えば、 `<input type="radio">` は "radio" ロールを持ちます。 HTML の意味づけがない要素はロールを持ちません。意味を追加していない `<div>` と `<span>` は `null` を返します。 `role` 属性で意味づけを提供することができます。

ARIA ロールは `role="role type"` を使用して HTML 要素に追加します。ロールの中には、 ARIA の検証状態やプロパティを含めることを要求されるものもあります。

例えば `<ul role="tabpanel">` は、スクリーンリーダーでは「タブパネル」としてアナウンスされます。しかし、タブパネルが入れ子のタブを持たない場合、タブパネルの役割を持つ要素は実際にはタブパネルではなく、アクセシビリティに悪影響を及ぼします。

各ロールに関連する [ARIA の状態とプロパティ](/ja/docs/Web/Accessibility/ARIA/Attributes)はロールのページに含まれており、各属性も専用のページを保有します。

## ARIA ロールの種類

ARIA のロールには 6 つのカテゴリーがあります。

### 1. 文書構造ロール

文書構造ロールは、コンテンツの一部に構造的な記述を提供するために用いられます。ほとんどのブラウザーは同じ意味を持つ意味づけ HTML 要素に対応しているので、これらのロールはもう使用すべきではありません。 HTML に相当するものがないロール、例えばプレゼンテーション、ツールバー、ツールチップのロールのようなものは、同等のネイティブ HTML タグが利用できないため、スクリーンリーダーのような支援技術に文書構造に関する情報を提供します。

- [toolbar](/ja/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
- [tooltip](/ja/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
- [feed](/ja/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [math](/ja/docs/Web/Accessibility/ARIA/Roles/math_role)
- [presentation](/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [none](/ja/docs/Web/Accessibility/ARIA/Roles/none_role)
- [note](/ja/docs/Web/Accessibility/ARIA/Roles/note_role)

文書構造ロールの大部分は、意味づけされた HTML と同等の要素が利用でき、対応しています。使用するのは避けてください。

- [application](/ja/docs/Web/Accessibility/ARIA/Roles/application_role)
- [article](/ja/docs/Web/Accessibility/ARIA/Roles/article_role) （{{HTMLElement('article')}} を使用）
- [cell](/ja/docs/Web/Accessibility/ARIA/Roles/cell_role) （{{HTMLElement('td')}} を使用）
- [columnheader](/ja/docs/Web/Accessibility/ARIA/Roles/columnheader_role) （`{{HTMLElement('th', '&lt;th scope="col">')}}` を使用）
- [definition](/ja/docs/Web/Accessibility/ARIA/Roles/definition_role) （{{HTMLElement('dfn')}} を使用）
- [directory](/ja/docs/Web/Accessibility/ARIA/Roles/directory_role)
- [document](/ja/docs/Web/Accessibility/ARIA/Roles/document_role)
- [figure](/ja/docs/Web/Accessibility/ARIA/Roles/figure_role) （{{HTMLElement('figure')}} を使用）
- [group](/ja/docs/Web/Accessibility/ARIA/Roles/group_role)
- [heading](/ja/docs/Web/Accessibility/ARIA/Roles/heading_role) （{{HTMLElement("Heading_Elements", "h1")}} から {{HTMLElement("Heading_Elements", "h6")}} を使用）
- [img](/ja/docs/Web/Accessibility/ARIA/Roles/img_role) （{{HTMLElement('img')}} or {{HTMLElement('picture')}} を使用）
- [list](/ja/docs/Web/Accessibility/ARIA/Roles/list_role) （either {{HTMLElement('ul')}} or {{HTMLElement('ol')}} を使用）
- [listitem](/ja/docs/Web/Accessibility/ARIA/Roles/listitem_role) （{{HTMLElement('li')}} を使用）
- [meter](/ja/docs/Web/Accessibility/ARIA/Roles/meter_role) （{{HTMLElement('meter')}} を使用）
- [row](/ja/docs/Web/Accessibility/ARIA/Roles/row_role) （the {{HTMLElement('tr')}} を {{HTMLElement('table')}} で使用）
- [rowgroup](/ja/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) （{{HTMLElement('thead')}}、{{HTMLElement('tfoot')}}、{{HTMLElement('tbody')}} を使用）
- [rowheader](/ja/docs/Web/Accessibility/ARIA/Roles/rowheader_role) （`{{HTMLElement('th','&lt;th scope="row">')}}` を使用）
- [separator](/ja/docs/Web/Accessibility/ARIA/Roles/separator_role) （フォーカス不可の場合は {{HTMLElement('hr')}} を使用）
- [table](/ja/docs/Web/Accessibility/ARIA/Roles/table_role) （{{HTMLElement('table')}} を使用）
- [term](/ja/docs/Web/Accessibility/ARIA/Roles/term_role) （{{HTMLElement('dfn')}} を使用）

以下のものは完全を期するために記載していますが、ほとんどの場合、使用しても有益なことはほとんどありません。

- [`associationlist`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`associationlistitemkey`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`associationlistitemvalue`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`blockquote`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`caption`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`code`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`deletion`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`emphasis`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`insertion`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`paragraph`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`strong`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`subscript`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`superscript`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`time`](/ja/docs/Web/Accessibility/ARIA/Roles/structural_roles)

### 2. ウィジェットロール

様々なウィジェットのロールは、一般的な操作パターンを定義するために使用します。文書構造ロールと同様に、これらのロールの中には、十分に対応しているネイティブの HTML 要素の意味づけと重複するものがあり、使用すべきではありません。 2 つの一覧の異なる点は、一般的に、ウィジェットロールは JavaScript による操作を要求し、文書構造ロールは必ずしもそうではないということです。

- [scrollbar](/ja/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [searchbox](/ja/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [separator](/ja/docs/Web/Accessibility/ARIA/Roles/separator_role) （フォーカス可能な場合）
- [slider](/ja/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [spinbutton](/ja/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [switch](/ja/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [tab](/ja/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [tabpanel](/ja/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
- [treeitem](/ja/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

完全性を期すために掲載しましたが、 [button](/ja/docs/Web/Accessibility/ARIA/Roles/button_role), [checkbox](/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role), [gridcell](/ja/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [link](/ja/docs/Web/Accessibility/ARIA/Roles/link_role), [menuitem](/ja/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [menuitemcheckbox](/ja/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), [menuitemradio](/ja/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role), [option](/ja/docs/Web/Accessibility/ARIA/Roles/option_role), [progressbar](/ja/docs/Web/Accessibility/ARIA/Roles/progressbar_role), [radio](/ja/docs/Web/Accessibility/ARIA/Roles/radio_role), [textbox](/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role) を使用することは避けてください。ほとんどの場合、アクセシビリティに対応した同等の意味づけの要素が利用でき、対応しています。より詳細な情報については、それぞれのロールのドキュメントを参照してください。

#### 複合ウィジェットロール

- [combobox](/ja/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [menu](/ja/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [menubar](/ja/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [tablist](/ja/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [tree](/ja/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [treegrid](/ja/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

完全性を期すために掲載しましたが、 [grid](/ja/docs/Web/Accessibility/ARIA/Roles/grid_role), [listbox](/ja/docs/Web/Accessibility/ARIA/Roles/listbox_role), [radiogroup](/ja/docs/Web/Accessibility/ARIA/Roles/radio_role) を使用することは避けてください。より詳細な情報については、それぞれのロールのドキュメントを参照してください。

ウィジェットロール (`role="widget"`) もありますが、これは抽象ロールであり、ウィジェットロールのカテゴリーにはないことに注意してください。

### 3. ランドマークロール

ランドマークロールは、ウェブページの構成と構造を識別する方法を提供します。ページのセクションを分類してラベル付けすることで、レイアウトによって視覚的に伝達される構造情報をプログラムで表現することができます。スクリーンリーダーは、ランドマーク・ロールを使用して、ページの重要なセクションへのキーボードナビゲーションを提供します。これらの使用は控えめにしてください。ランドマークロールが多すぎると、スクリーンリーダーに「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

- [banner](/ja/docs/Web/Accessibility/ARIA/Roles/banner_role) （文書のヘッダー ({{HTMLElement('header')}})）
- [complementary](/ja/docs/Web/Accessibility/ARIA/Roles/complementary_role) ({{HTMLElement('aside')}})
- [contentinfo](/ja/docs/Web/Accessibility/ARIA/Roles/contentinfo_role) （文書のフッター ({{HTMLElement('footer')}})）
- [form](/ja/docs/Web/Accessibility/ARIA/Roles/form_role) ({{HTMLElement('form')}})
- [main](/ja/docs/Web/Accessibility/ARIA/Roles/main_role) ({{HTMLElement('main')}})
- [navigation](/ja/docs/Web/Accessibility/ARIA/Roles/navigation_role) ({{HTMLElement('nav')}})
- [region](/ja/docs/Web/Accessibility/ARIA/Roles/region_role) ({{HTMLElement('section')}})
- [search](/ja/docs/Web/Accessibility/ARIA/Roles/search_role) ({{HTMLElement('search')}})

### 4. ライブリージョンロール

ライブリージョンロールは、動的に変更されるコンテンツを持つ要素を定義するために使用されます。視覚ユーザーは、動的な変更が視覚的に目立つときに見ることができます。これらのロールは、弱視や目の不自由なユーザーが、コンテンツが更新されたかどうかを知るのに役立ちます。スクリーンリーダーのような支援技術は、動的なコンテンツの変更を知らせることができます。

- [alert](/ja/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [log](/ja/docs/Web/Accessibility/ARIA/Roles/log_role)
- [marquee](/ja/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [status](/ja/docs/Web/Accessibility/ARIA/Roles/status_role)
- [timer](/ja/docs/Web/Accessibility/ARIA/Roles/timer_role)

### 5. ウィンドウロール

ウィンドウロールは、ポップアップモーダルダイアログなど、同じウィンドウ内でメインドキュメントウィンドウのサブウィンドウを定義します。

- [alertdialog](/ja/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [dialog](/ja/docs/Web/Accessibility/ARIA/Roles/dialog_role)

### 6. 抽象ロール

抽象ロールは、ブラウザーが文書を整理し合理化するためだけに使用することを意図しています。HTMLマークアップを記述する開発者が使用すべきではありません。そうすることで、支援技術やユーザーに意味のある情報が伝達されることはありません。

[command](/ja/docs/Web/Accessibility/ARIA/Roles/command_role), [composite](/ja/docs/Web/Accessibility/ARIA/Roles/composite_role), [input](/ja/docs/Web/Accessibility/ARIA/Roles/input_role), [landmark](/ja/docs/Web/Accessibility/ARIA/Roles/landmark_role), [range](/ja/docs/Web/Accessibility/ARIA/Roles/range_role), [roletype](/ja/docs/Web/Accessibility/ARIA/Roles/roletype_role), [section](/ja/docs/Web/Accessibility/ARIA/Roles/section_role), [sectionhead](/ja/docs/Web/Accessibility/ARIA/Roles/sectionhead_role), [select](/ja/docs/Web/Accessibility/ARIA/Roles/select_role), [structure](/ja/docs/Web/Accessibility/ARIA/Roles/structure_role), [widget](/ja/docs/Web/Accessibility/ARIA/Roles/widget_role), [window](/ja/docs/Web/Accessibility/ARIA/Roles/window_role) は使用しないでください。

> [!NOTE]
> サイトやアプリケーションで 抽象ロールを使用しないでください。これらはブラウザーが使用するものです。これらは参照用にのみ含まれています。

> [!WARNING]
> "抽象ロールはオントロジーに使用されます。作者はコンテンツで抽象ロールを使用しては**なりません**。" - <abbr>WAI-ARIA</abbr> 仕様書

## MDN で定義されているロール

以下は、 <abbr>MDN</abbr> で取り上げられている WAI-ARIA のロールに関するリファレンスページです。

{{SubpagesWithSummaries}}

## 関連情報

- [ARIA の使用: ロール、ステート、プロパティ](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques)
- [ARIA の状態とプロパティ](/ja/docs/Web/Accessibility/ARIA/Attributes)

<section id="Quick_links">

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles", 1)}}

</section>
