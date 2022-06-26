---
title: Using ARIA
slug: Web/Accessibility/ARIA/ARIA_Techniques
translation_of: Web/Accessibility/ARIA/ARIA_Techniques
---
<h2 id="Roles（角色）">Roles（角色）</h2>

<h3 id="Widget_roles_（局部組件）"><a href="/en/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_switch_role">Widget roles （局部組件）</a></h3>

<ul>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role">Button （按鈕）</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_checkbox_role">Checkbox （複選核取方塊）</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role">Dialog （對話）</a></li>
 <li>Gridcell （網格欄）</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_link_role">Link （超連結）</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_log_role">Log （紀錄）</a></li>
 <li>Marquee</li>
 <li>Menuitem</li>
 <li>Menuitemcheckbox</li>
 <li>Menuitemradio</li>
 <li>Option</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role">Progressbar （進度條）</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role">Radio （單選選項鈕）</a></li>
 <li>Scrollbar</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role">Slider （滑軌控制鈕）</a></li>
 <li>Spinbutton</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_status_role">status （狀態）</a></li>
 <li>Tab （頁籤）</li>
 <li>Tabpanel （頁籤面板）</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_textbox_role">textbox （頁籤容器）</a></li>
 <li>Timer （計時器）</li>
 <li>Tooltip （提示）</li>
 <li>Treeitem</li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_switch_role">switch （開關）</a></li>
</ul>

<h3 id="Composite_roles">Composite roles</h3>

<p>下面的技術，描述了每個複合角色，以及他們的必要和可選的子角色。</p>

<ul>
 <li>Combobox （組合框）</li>
 <li>Grid （網格）(包含 row （橫列）, gridcell （網格欄）, rowheader （橫列表頭）, columnheader （欄表頭） roles)</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_listbox_role">Listbox  （列表框）</a> (包含 option role)</li>
 <li>Menu （選單）</li>
 <li>Menubar （選單條）</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role">Radiogroup （單選選項群組） (see radio role)</a></li>
 <li>Tablist （頁籤列表） (包含 tab 和 tabpanel roles)</li>
 <li>Tree</li>
 <li>Treegrid</li>
</ul>

<h3 id="Document_structure_roles"><a href="https://www.w3.org/TR/wai-aria/roles#document_structure_roles">Document structure roles</a></h3>

<ul>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_article_role">Article</a></li>
 <li>Definition</li>
 <li>Directory</li>
 <li>Document</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role">Group</a></li>
 <li>Heading</li>
 <li>Img</li>
 <li>List</li>
 <li>Listitem</li>
 <li>Math</li>
 <li>Note</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role">Presentation</a></li>
 <li>Region</li>
 <li>Separator</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_toolbar_role">Toolbar</a></li>
</ul>

<h3 id="Landmark_roles"><a href="https://www.w3.org/TR/wai-aria/roles#landmark_roles">Landmark roles </a></h3>

<ul>
 <li>Application</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_banner_role">Banner</a></li>
 <li>Complementary</li>
 <li>Contentinfo</li>
 <li>Form</li>
 <li>Main</li>
 <li>Navigation</li>
 <li>Search</li>
</ul>

<h2 id="States_and_properties">States and properties</h2>

<h3 id="Widget_attributes">Widget attributes</h3>

<ul>
 <li>aria-autocomplete</li>
 <li>aria-checked</li>
 <li>aria-current</li>
 <li>aria-disabled</li>
 <li>aria-expanded</li>
 <li>aria-haspopup</li>
 <li>aria-hidden</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute">aria-invalid</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute">aria-label</a></li>
 <li>aria-level</li>
 <li>aria-multiline</li>
 <li>aria-multiselectable</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute">aria-orientation</a></li>
 <li>aria-pressed</li>
 <li>aria-readonly</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute">aria-required</a></li>
 <li>aria-selected</li>
 <li>aria-sort</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute">aria-valuemax</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute">aria-valuemin</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute">aria-valuenow</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute">aria-valuetext</a></li>
</ul>

<h3 id="Live_region_attributes">Live region attributes</h3>

<ul>
 <li>aria-live</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute">aria-relevant</a></li>
 <li>aria-atomic</li>
 <li>aria-busy</li>
</ul>

<h3 id="Drag_drop_attributes">Drag &amp; drop attributes</h3>

<ul>
 <li>aria-dropeffect</li>
 <li>aria-dragged</li>
</ul>

<h3 id="Relationship_attributes">Relationship attributes</h3>

<ul>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-activedescendant_attribute">aria-activedescendant</a></li>
 <li>aria-controls</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute">aria-describedby</a></li>
 <li>aria-flowto</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby</a></li>
 <li>aria-owns</li>
 <li>aria-posinset</li>
 <li>aria-setsize</li>
</ul>
