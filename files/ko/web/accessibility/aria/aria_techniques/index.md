---
title: 'ARIA 사용하기: 규칙, 상태, 속성'
slug: Web/Accessibility/ARIA/ARIA_Techniques
tags:
  - ARIA
  - Accessibility
  - Overview
  - Reference
translation_of: Web/Accessibility/ARIA/ARIA_Techniques
---
<p class="summary">ARIA defines semantics that can be applied to elements, with these divided into <strong>roles</strong> (defining a type of user interface element) and <strong>states</strong> and <strong>properties</strong> that are supported by a role. Authors must assign an ARIA role and the appropriate states and properties to an element during its life-cycle, unless the element already has appropriate ARIA semantics (via use of an appropriate HTML element). Addition of ARIA semantics only exposes extra information to a browser's accessibility API, and does not affect a page's DOM.</p>

<h2 id="Roles">Roles</h2>

<h3 id="Widget_roles">Widget roles</h3>

<div class="index">
<ul>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role" title="Using the button role">Button</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role" title="Using the checkbox role">Checkbox</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Gridcell_Role">Gridcell</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_link_role" title="Using the Link role">Link</a></li>
 <li>Menuitem</li>
 <li>Menuitemcheckbox</li>
 <li>Menuitemradio</li>
 <li>Option</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role" title="en/ARIA/ARIA_Techniques/Using_the_progressbar_role">Progressbar</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role" title="en/ARIA/ARIA_Techniques/Using_the_radio_role">Radio</a></li>
 <li>Scrollbar</li>
 <li>Searchbox</li>
 <li>Separator (when focusable)</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role" title="en/ARIA/ARIA_Techniques/Using_the_slider_role">Slider</a></li>
 <li>Spinbutton</li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Switch_role">Switch</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role">Tab</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Tabpanel_Role">Tabpanel</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_textbox_role" title="en/ARIA/ARIA_Techniques/Using_the_textbox_role">Textbox</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Treeitem_Role">Treeitem</a></li>
</ul>
</div>

<h3 id="Composite_roles">Composite roles</h3>

<p>The techniques below describe each composite role as well as their required and optional child roles.</p>

<div class="index">
<ul>
 <li>Combobox</li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Grid_Role">Grid</a> (including <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Row_Role">row</a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Gridcell_Role">gridcell</a>, rowheader, columnheader roles)</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_listbox_role" title="en/ARIA/ARIA_Techniques/Using_the_listbox_role">Listbox </a> (including option role)</li>
 <li>Menu</li>
 <li>Menubar</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role" title="en/ARIA/ARIA_Techniques/Using_the_radio_role">Radiogroup (see radio role)</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Tablist_Role">Tablist</a> (including <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role">tab</a> and <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Tabpanel_Role">tabpanel</a> roles)</li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Tree_Role">Tree</a></li>
 <li>Treegrid</li>
</ul>
</div>

<h3 id="Document_structure_roles">Document structure roles</h3>

<div class="index">
<ul>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Application_Role">Application</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Article_Role" title="en/Accessibility/ARIA/ARIA_Techniques/Using_the_article_role">Article</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Cell_Role">Cell</a></li>
 <li>Columnheader</li>
 <li>Definition</li>
 <li>Directory</li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Document_Role">Document</a></li>
 <li>Feed</li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Figure_Role">Figure</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role" title="en/ARIA/ARIA_Techniques/Using_the_group_role">Group</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role">Heading</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Role_Img">Img</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/List_role">List</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Listitem_role">Listitem</a></li>
 <li>Math</li>
 <li>None</li>
 <li>Note</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role" title="en/ARIA/ARIA_Techniques/Using_the_presentation_role">Presentation</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Row_Role">Row</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role">Rowgroup</a></li>
 <li>Rowheader</li>
 <li>Separator</li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role">Table</a></li>
 <li>Term</li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role">Textbox</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_toolbar_role" title="en/ARIA/ARIA_Techniques/Using_the_toolbar_role">Toolbar</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Tooltip_Role">Tooltip</a></li>
</ul>
</div>

<h3 id="Landmark_roles">Landmark roles</h3>

<div class="index">
<ul>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_banner_role" title="en/ARIA/ARIA_Techniques/Using_the_banner_role">Banner</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Complementary_role">Complementary</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role">Contentinfo</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Form_Role">Form</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Main_role">Main</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role">Navigation</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Region_role">Region</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Search_role">Search</a></li>
</ul>
</div>

<h3 id="Live_Region_Roles">Live Region Roles</h3>

<div class="index">
<ul>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Alert_Role">Alert</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_log_role" title="Using the Log role">Log</a></li>
 <li>Marquee</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_status_role" title="Using the link role">Status</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/ARIA_timer_role">Timer</a></li>
</ul>
</div>

<h3 id="Window_Roles">Window Roles</h3>

<div class="index">
<ul>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role">Alertdialog</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role">Dialog</a></li>
</ul>
</div>

<h2 id="States_and_properties">States and properties</h2>

<h3 id="Widget_attributes">Widget attributes</h3>

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
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute" title="Using the aria-invalid attribute">aria-invalid</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute" title="Using the aria-labelledby attribute">aria-label</a></li>
 <li>aria-level</li>
 <li>aria-modal</li>
 <li>aria-multiline</li>
 <li>aria-multiselectable</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute" title="en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute">aria-orientation</a></li>
 <li>aria-placeholder</li>
 <li>aria-pressed</li>
 <li>aria-readonly</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute" title="Using the aria-required property">aria-required</a></li>
 <li>aria-selected</li>
 <li>aria-sort</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute" title="Using the aria-required attribute">aria-valuemax</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute" title="en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute">aria-valuemin</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute" title="en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute">aria-valuenow</a></li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute" title="en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute">aria-valuetext</a></li>
</ul>
</div>

<h3 id="Live_region_attributes">Live region attributes</h3>

<div class="index">
<ul>
 <li>aria-live</li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute" title="en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute">aria-relevant</a></li>
 <li>aria-atomic</li>
 <li>aria-busy</li>
</ul>
</div>

<h3 id="Drag_drop_attributes">Drag &amp; drop attributes</h3>

<div class="index">
<ul>
 <li>aria-dropeffect</li>
 <li>aria-dragged</li>
</ul>
</div>

<h3 id="Relationship_attributes">Relationship attributes</h3>

<div class="index">
<ul>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-activedescendant_attribute" title="Role">aria-activedescendant</a></li>
 <li>aria-colcount</li>
 <li>aria-colindex</li>
 <li>aria-colspan</li>
 <li>aria-controls</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute" title="Using the aria-labelledby attribute">aria-describedby</a></li>
 <li>aria-details</li>
 <li>aria-errormessage</li>
 <li>aria-flowto</li>
 <li><a href="/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute" title="en/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby</a></li>
 <li>aria-owns</li>
 <li>aria-posinset</li>
 <li>aria-rowcount</li>
 <li>aria-rowindex</li>
 <li>aria-rowspan</li>
 <li>aria-setsize</li>
</ul>
</div>

<h3 id="MicrosoftEdge-specific_properties">MicrosoftEdge-specific properties</h3>

<div class="index">
<ul>
 <li><a href="/en-US/docs/Web/API/x-ms-aria-flowfrom">x-ms-aria-flowfrom</a> {{Non-standard_Inline}}</li>
</ul>
</div>
