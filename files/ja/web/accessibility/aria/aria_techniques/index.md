---
title: 'ARIA を使用する: ロール、ステート、プロパティ'
slug: Web/Accessibility/ARIA/ARIA_Techniques
tags:
  - ARIA
  - Accessibility
  - Overview
  - Reference
  - TopicStub
translation_of: Web/Accessibility/ARIA/ARIA_Techniques
---
<h2 id="Roles" name="Roles">ロール</h2>



<h3 id="Widget_roles" name="Widget_roles">ウィジェットロール</h3>

<div class="index">
<ul>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role">Button</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_checkbox_role">Checkbox</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/dialog_role">Dialog</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_Gridcell_Role">Gridcell</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_link_role">Link</a></li>
 <li>Menuitem</li>
 <li>Menuitemcheckbox </li>
 <li>Menuitemradio</li>
 <li>Option</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role">Progressbar</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role">Radio</a></li>
 <li>Scrollbar</li>
 <li>Searchbox</li>
 <li>Separator（フォーカス可能な場合）</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role">Slider</a></li>
 <li>Spinbutton</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Switch_role">Switch</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Tab_Role">Tab</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Tabpanel_Role">Tabpanel</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role">Textbox</a></li>
 <li>Treeitem</li>
</ul>
</div>

<h3 id="Composite_roles" name="Composite_roles">複合ロール</h3>

<p>以下のテクニックでは、それぞれの複合ロールとその必須および任意の子ロールについて説明します。</p>

<div class="index">
<ul>
 <li>Combobox</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role">Grid</a> （<a href="/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role">row</a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/Gridcell_Role">gridcell</a>, rowheader, columnheader ロールを含む）</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/listbox_role">Listbox </a> （option ロールを含む）</li>
 <li>Menu</li>
 <li>Menubar</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role">Radiogroup （radio ロールを参照）</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Tablist_Role">Tablist</a> （<a href="/ja/docs/Web/Accessibility/ARIA/Roles/Tab_Role">tab</a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/Tabpanel_Role">tabpanel</a> ロールを含む）</li>
 <li>Tree</li>
 <li>Treegrid</li>
</ul>
</div>

<h3 id="Document_structure_roles" name="Document_structure_roles">文書構造ロール</h3>

<div class="index">
<ul>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Application_Role">Application</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Article_Role">Article</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Cell_Role">Cell</a></li>
 <li>Columnheader</li>
 <li>Definition</li>
 <li>Directory</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Document_Role">Document</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Feed_Role">Feed</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Figure_Role">Figure</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role">Group</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role">Grid</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/heading_role">Heading</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Role_Img">Img</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/List_role">List</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Listitem_role">Listitem</a></li>
 <li>Math</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role">None（presentation ロールと同義）</a></li>
 <li>Note</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role">Presentation</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role">Row</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role">Rowgroup</a></li>
 <li>Rowheader</li>
 <li>Separator</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Table_Role">Table</a></li>
 <li>Term</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role">Textbox</a></li>
 <li>Tooltip</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_toolbar_role">Toolbar</a></li>
</ul>
</div>

<h3 id="Landmark_roles" name="Landmark_roles">ランドマークロール</h3>

<div class="index">
<ul>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Banner_role">Banner</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Complementary_role">Complementary</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role">Contentinfo</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Form_Role">Form</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Main_role">Main</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Navigation_Role">Navigation</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Region_role">Region</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Search_role">Search</a></li>
</ul>
</div>

<h3 id="Live_Region_Roles" name="Live_Region_Roles">ライブリージョンロール</h3>

<div class="index">
<ul>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Alert_Role">Alert</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_log_role">Log</a></li>
 <li>Marquee</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_status_role">Status</a></li>
 <li>Timer</li>
</ul>
</div>

<h3 id="Window_Roles" name="Window_Roles">ウィンドウロール</h3>

<div class="index">
<ul>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role">Alertdialog</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/dialog_role">Dialog</a></li>
</ul>
</div>

<h2 id="States_and_properties" name="States_and_properties">ステートとプロパティ</h2>

<h3 id="Widget_attributes" name="Widget_attributes">ウィジェット属性</h3>

<div class="index">
<ul>
 <li>aria-autocomplete</li>
 <li>aria-checked</li>
 <li>aria-current</li>
 <li>aria-disabled</li>
 <li>aria-errormessage</li>
 <li>aria-expanded</li>
 <li>aria-haspopup</li>
 <li>aria-hidden</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute">aria-invalid</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute">aria-label</a></li>
 <li>aria-level</li>
 <li>aria-modal</li>
 <li>aria-multiline</li>
 <li>aria-multiselectable</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute">aria-orientation</a></li>
 <li>aria-placeholder</li>
 <li>aria-pressed</li>
 <li>aria-readonly</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute">aria-required</a></li>
 <li>aria-selected</li>
 <li>aria-sort</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute">aria-valuemax</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute">aria-valuemin</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute">aria-valuenow</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute">aria-valuetext</a></li>
</ul>
</div>

<h3 id="Live_region_attributes" name="Live_region_attributes">ライブリージョン属性</h3>

<div class="index">
<ul>
 <li>aria-live</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute">aria-relevant</a></li>
 <li>aria-atomic</li>
 <li>aria-busy</li>
</ul>
</div>

<h3 id="Drag_drop_attributes" name="Drag_drop_attributes">ドラッグ＆ドロップ属性</h3>

<div class="index">
<ul>
 <li>aria-dropeffect</li>
 <li>aria-dragged</li>
</ul>
</div>

<h3 id="Relationship_attributes" name="Relationship_attributes">関係属性</h3>

<div class="index">
<ul>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-activedescendant_attribute">aria-activedescendant</a></li>
 <li>aria-colcount</li>
 <li>aria-colindex</li>
 <li>aria-colspan</li>
 <li>aria-controls</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute">aria-describedby</a></li>
 <li>aria-details</li>
 <li>aria-errormessage</li>
 <li>aria-flowto</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby</a></li>
 <li>aria-owns</li>
 <li>aria-posinset</li>
 <li>aria-rowcount</li>
 <li>aria-rowindex</li>
 <li>aria-rowspan</li>
 <li>aria-setsize</li>
</ul>
</div>

<h3 id="MicrosoftEdge-specific_properties" name="MicrosoftEdge-specific_properties">MicrosoftEdge 固有のプロパティ</h3>

<div class="index">
<ul>
 <li><a href="/ja/docs/Web/API/x-ms-aria-flowfrom">x-ms-aria-flowfrom</a> {{Non-standard_Inline}}</li>
</ul>
</div>
