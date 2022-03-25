---
title: CSS の Mozilla 拡張
slug: Web/CSS/Mozilla_Extensions
tags:
  - CSS
  - Mozilla 拡張
  - Reference
  - 標準外
translation_of: Web/CSS/Mozilla_Extensions
---
<div>{{CSSRef}}</div>

<p class="summary"><span class="seoSummary">Firefox などの Mozilla アプリケーションは、いくつもの特別な <strong><a href="/ja/docs/Web/CSS">CSS</a> の Mozilla 拡張</strong>に対応しています。これには、プロパティ、値、疑似要素、疑似クラス、@-規則、メディアクエリが含まれます。</span>これらの拡張には <code style="white-space: nowrap;">-moz-</code> 接頭辞が付いています。</p>

<h2 id="Mozilla-only_properties_and_pseudo-classes_(avoid_using_on_websites)" name="Mozilla-only_properties_and_pseudo-classes_(avoid_using_on_websites)">Mozilla 独自のプロパティと疑似クラス (ウェブサイトで使用してはいけません)</h2>

<div class="blockIndicator note">
<p><strong>メモ:</strong> これらのプロパティと疑似クラスは、Firefox などの Mozilla アプリケーション内でのみ動作するものであり、標準化されていません。これら標準外のプロパティの一部は、<a href="/ja/docs/Mozilla/Tech/XUL">XUL</a> 要素にのみ適用されます。</p>
</div>

<div class="index">
<h3 id="B">B</h3>

<ul>
 <li>{{CSSxRef("-moz-binding")}} {{Deprecated_Inline}}</li>
 <li>{{CSSxRef("-moz-border-bottom-colors")}} {{Obsolete_Inline}}</li>
 <li>{{CSSxRef("-moz-border-left-colors")}} {{Obsolete_Inline}}</li>
 <li>{{CSSxRef("-moz-border-right-colors")}} {{Obsolete_Inline}}</li>
 <li>{{CSSxRef("-moz-border-top-colors")}} {{Obsolete_Inline}}</li>
 <li>{{CSSxRef("-moz-box-align")}}</li>
 <li>{{CSSxRef("-moz-box-direction")}}</li>
 <li>{{CSSxRef("-moz-box-flex")}}</li>
 <li>{{CSSxRef("-moz-box-ordinal-group")}}</li>
 <li>{{CSSxRef("-moz-box-orient")}}</li>
 <li>{{CSSxRef("-moz-box-pack")}}</li>
</ul>

<h3 id="C_–_I">C – I</h3>

<ul>
 <li>{{CSSxRef("-moz-context-properties")}}</li>
 <li>{{CSSxRef("-moz-float-edge")}}</li>
 <li>{{CSSxRef("-moz-force-broken-image-icon")}}</li>
 <li>{{CSSxRef("-moz-image-region")}}</li>
</ul>

<h3 id="O">O</h3>

<ul>
 <li>{{CSSxRef("-moz-orient")}}</li>
 <li>{{CSSxRef("-moz-osx-font-smoothing")}}</li>
 <li>{{CSSxRef("-moz-outline-radius")}}</li>
 <li>{{CSSxRef("-moz-outline-radius-bottomleft")}}</li>
 <li>{{CSSxRef("-moz-outline-radius-bottomright")}}</li>
 <li>{{CSSxRef("-moz-outline-radius-topleft")}}</li>
 <li>{{CSSxRef("-moz-outline-radius-topright")}}</li>
 <li>{{CSSxRef("overflow-clip-box")}}</li>
 <li>{{CSSxRef("overflow-clip-box-block")}}</li>
 <li>{{CSSxRef("overflow-clip-box-inline")}}</li>
</ul>

<h3 id="S_–_Z">S – Z</h3>

<ul>
 <li>{{CSSxRef("-moz-stack-sizing")}}</li>
 <li>{{CSSxRef(":-moz-system-metric(images-in-menus)")}} {{Obsolete_Inline}}{{gecko_minversion_inline("1.9")}}</li>
 <li>{{CSSxRef(":-moz-system-metric(mac-graphite-theme)")}} {{Obsolete_Inline}}{{gecko_minversion_inline("1.9.1")}}</li>
 <li>{{CSSxRef(":-moz-system-metric(scrollbar-end-backward)")}} {{Obsolete_Inline}}{{gecko_minversion_inline("1.9")}}</li>
 <li>{{CSSxRef(":-moz-system-metric(scrollbar-end-forward)")}} {{Obsolete_Inline}}{{gecko_minversion_inline("1.9")}}</li>
 <li>{{CSSxRef(":-moz-system-metric(scrollbar-start-backward)")}} {{Obsolete_Inline}}{{gecko_minversion_inline("1.9")}}</li>
 <li>{{CSSxRef(":-moz-system-metric(scrollbar-start-forward)")}} {{Obsolete_Inline}}</li>
 <li>{{CSSxRef(":-moz-system-metric(scrollbar-thumb-proportional)")}} {{Obsolete_Inline}}{{gecko_minversion_inline("1.9")}}</li>
 <li>{{CSSxRef(":-moz-system-metric(touch-enabled)")}} {{Obsolete_Inline}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef(":-moz-system-metric(windows-default-theme)")}} {{Obsolete_Inline}}</li>
 <li>{{CSSxRef("-moz-user-focus")}}</li>
 <li>{{CSSxRef("-moz-user-input")}}</li>
 <li>{{CSSxRef("-moz-user-modify")}}</li>
 <li>{{CSSxRef("-moz-window-dragging")}}</li>
 <li>{{CSSxRef("-moz-window-shadow")}}</li>
</ul>
</div>

<h2 id="Formerly_proprietary_properties_that_are_now_standard" name="Formerly_proprietary_properties_that_are_now_standard"><span class="highlight-span">以前は独自</span>だったが現在は標準化されているプロパティ</h2>

<div class="blockIndicator note">
<p><strong>メモ:</strong> CSS の互換性を最大化するため、以下の接頭辞付きのものではなく、接頭辞なしの標準プロパティを使用してください。これらは、標準化されて接頭辞なしの形式が対応され次第、接頭辞付きのバージョンは順次破棄されます。</p>
</div>

<div class="index">
<ul>
 <li>
  <h3 id="A">A</h3>
 </li>
 <li>{{CSSxRef("animation", "-moz-animation")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("animation-delay", "-moz-animation-delay")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("animation-direction", "-moz-animation-direction")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("animation-duration", "-moz-animation-duration")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("animation-fill-mode", "-moz-animation-fill-mode")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("animation-iteration-count", "-moz-animation-iteration-count")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("animation-name", "-moz-animation-name")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("animation-play-state", "-moz-animation-play-state")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("animation-timing-function","-moz-animation-timing-function")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("appearance","-moz-appearance")}} {{Experimental_Inline}}</li>
 <li>
  <h3 id="B_2">B</h3>
 </li>
 <li>{{CSSxRef("backface-visibility", "-moz-backface-visibility")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("background-clip", "-moz-background-clip")}}{{Obsolete_Inline(2)}}</li>
 <li>{{CSSxRef("background-origin", "-moz-background-origin")}}{{Obsolete_Inline(2)}}</li>
 <li>{{CSSxRef("-moz-background-inline-policy")}}{{Obsolete_Inline(32)}} [標準化された {{CSSxRef("box-decoration-break")}} に置き換え]</li>
 <li>{{CSSxRef("background-size", "-moz-background-size")}}{{Obsolete_Inline(2)}}</li>
 <li>{{CSSxRef("border-inline-end","-moz-border-end")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-end")}} に置き換え]</li>
 <li>{{CSSxRef("border-inline-color","-moz-border-end-color")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-end-color")}} に置き換え]</li>
 <li>{{CSSxRef("border-inline-style","-moz-border-end-style")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-end-style")}} に置き換え]</li>
 <li>{{CSSxRef("border-inline-width","-moz-border-end-width")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-end-width")}} に置き換え]</li>
 <li>{{CSSxRef("border-image","-moz-border-image")}} {{Deprecated_Inline}}</li>
 <li>{{CSSxRef("border-inline-start","-moz-border-start")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-start")}} に置き換え]</li>
 <li>{{CSSxRef("border-inline-start-color","-moz-border-start-color")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-start-color")}} に置き換え]</li>
 <li>{{CSSxRef("border-inline-start-style","-moz-border-start-style")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-start-style")}} に置き換え]</li>
 <li>{{CSSxRef("border-inline-start-width","-moz-border-start-width")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-start-width")}} に置き換え]</li>
 <li>{{CSSxRef("box-sizing", "-moz-box-sizing")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>
  <h3 id="C">C</h3>
 </li>
 <li>{{CSSxRef("clip-path")}} {{Experimental_Inline}} [SVG 以外にも適用]</li>
 <li>{{CSSxRef("column-count","-moz-column-count")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("column-fill","-moz-column-fill")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("column-gap","-moz-column-gap")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("column-width","-moz-column-width")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("column-rule","-moz-column-rule")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("column-rule-width","-moz-column-rule-width")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("column-rule-style","-moz-column-rule-style")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("column-rule-color","-moz-column-rule-color")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("-moz-context-properties")}} {{Experimental_Inline}}</li>
 <li>
  <h3 id="F_–_M">F – M</h3>
 </li>
 <li>{{CSSxRef("filter")}} {{Experimental_Inline}} [SVG 以外にも適用]</li>
 <li>{{CSSxRef("font-feature-settings","-moz-font-feature-settings")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("font-language-override","-moz-font-language-override")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("hyphens","-moz-hyphens")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("margin-inline-end","-moz-margin-end")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("margin-inline-end")}} に置き換え]</li>
 <li>{{CSSxRef("margin-inline-start","-moz-margin-start")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("margin-inline-start")}} に置き換え]</li>
 <li>{{CSSxRef("mask")}} {{Experimental_Inline}} [SVG 以外にも適用]</li>
 <li>
  <h3 id="O_2">O</h3>
 </li>
 <li>{{CSSxRef("opacity","-moz-opacity")}}{{Obsolete_Inline("1.9.1")}}</li>
 <li>{{CSSxRef("outline","-moz-outline")}}{{Obsolete_Inline("1.9.2")}}</li>
 <li>{{CSSxRef("outline-color","-moz-outline-color")}}{{Obsolete_Inline("1.9.2")}}</li>
 <li>{{CSSxRef("outline-offset","-moz-outline-offset")}}{{Obsolete_Inline("1.9.2")}}</li>
 <li>{{CSSxRef("outline-style","-moz-outline-style")}}{{Obsolete_Inline("1.9.2")}}</li>
 <li>{{CSSxRef("outline-width","-moz-outline-width")}}{{Obsolete_Inline("1.9.2")}}</li>
 <li>
  <h3 id="P">P</h3>
 </li>
 <li>{{CSSxRef("padding-inline-end","-moz-padding-end")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("padding-inline-end")}} に置き換え]</li>
 <li>{{CSSxRef("padding-inline-start","-moz-padding-start")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("padding-inline-start")}} に置き換え]</li>
 <li>{{CSSxRef("perspective", "-moz-perspective")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("perspective-origin","-moz-perspective-origin")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("pointer-events")}} {{Experimental_Inline}} [SVG 以外にも適用]</li>
 <li>
  <h3 id="T_–_U">T – U</h3>
 </li>
 <li>{{CSSxRef("tab-size","-moz-tab-size")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("text-align-last","-moz-text-align-last")}}{{Obsolete_Inline("53")}}</li>
 <li>{{CSSxRef("text-decoration-color","-moz-text-decoration-color")}}{{Obsolete_Inline("39")}}</li>
 <li>{{CSSxRef("text-decoration-line","-moz-text-decoration-line")}}{{Obsolete_Inline("39")}}</li>
 <li>{{CSSxRef("text-decoration-style","-moz-text-decoration-style")}}{{Obsolete_Inline("39")}}</li>
 <li>{{CSSxRef("text-size-adjust","-moz-text-size-adjust")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("transform", "-moz-transform")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("transform-origin", "-moz-transform-origin")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("transform-style", "-moz-transform-style")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("transition", "-moz-transition")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("transition-delay", "-moz-transition-delay")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("transition-duration", "-moz-transition-duration")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("transition-property", "-moz-transition-property")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("transition-timing-function", "-moz-transition-timing-function")}} {{Deprecated_Inline}} [接頭辞付きも許容]</li>
 <li>{{CSSxRef("user-select","-moz-user-select")}} {{Experimental_Inline}}</li>
</ul>
</div>

<h2 id="Values" name="Values">値</h2>

<h3 id="Global_values" name="Global_values">グローバル値</h3>

<div class="index">
<ul>
 <li>{{CSSxRef("initial","-moz-initial")}}</li>
</ul>
</div>

<h3 id="-moz-appearance" name="-moz-appearance">{{CSSxRef("-moz-appearance")}}</h3>

<div class="index">
<ul>
 <li><code>button</code></li>
 <li><code>button-arrow-down</code></li>
 <li><code>button-arrow-next</code></li>
 <li><code>button-arrow-previous</code></li>
 <li><code>button-arrow-up</code></li>
 <li><code>button-bevel</code></li>
 <li><code>checkbox</code></li>
 <li><code>checkbox-container</code></li>
 <li><code>checkbox-label</code></li>
 <li><code>checkmenuitem</code></li>
 <li><code>dialog</code></li>
 <li><code>groupbox</code></li>
 <li><code>listbox</code></li>
 <li><code>menuarrow</code></li>
 <li><code>menucheckbox</code></li>
 <li><code>menuimage</code></li>
 <li><code>menuitem</code></li>
 <li><code>menuitemtext</code></li>
 <li><code>menulist</code></li>
 <li><code>menulist-button</code></li>
 <li><code>menulist-text</code></li>
 <li><code>menulist-textfield</code></li>
 <li><code>menupopup</code></li>
 <li><code>menuradio</code></li>
 <li><code>menuseparator</code></li>
 <li><code>-moz-mac-unified-toolbar</code></li>
 <li><code>-moz-win-borderless-glass</code></li>
 <li><code>-moz-win-browsertabbar-toolbox</code></li>
 <li><code>-moz-win-communications-toolbox</code></li>
 <li><code>-moz-win-glass</code></li>
 <li><code>-moz-win-media-toolbox</code></li>
 <li><code>-moz-window-button-box</code></li>
 <li><code>-moz-window-button-box-maximized</code></li>
 <li><code>-moz-window-button-close</code></li>
 <li><code>-moz-window-button-maximize</code></li>
 <li><code>-moz-window-button-minimize</code></li>
 <li><code>-moz-window-button-restore</code></li>
 <li><code>-moz-window-titlebar</code></li>
 <li><code>-moz-window-titlebar-maximized</code></li>
 <li><code>progressbar</code></li>
 <li><code>progresschunk</code></li>
 <li><code>radio</code></li>
 <li><code>radio-container</code></li>
 <li><code>radio-label</code></li>
 <li><code>radiomenuitem</code></li>
 <li><code>resizer</code></li>
 <li><code>resizerpanel</code></li>
 <li><code>scale-horizontal</code></li>
 <li><code>scalethumb-horizontal</code></li>
 <li><code>scalethumb-vertical</code></li>
 <li><code>scale-vertical</code></li>
 <li><code>scrollbarbutton-down</code></li>
 <li><code>scrollbarbutton-left</code></li>
 <li><code>scrollbarbutton-right</code></li>
 <li><code>scrollbarbutton-up</code></li>
 <li><code>scrollbar-small</code></li>
 <li><code>scrollbarthumb-horizontal</code></li>
 <li><code>scrollbarthumb-vertical</code></li>
 <li><code>scrollbartrack-horizontal</code></li>
 <li><code>scrollbartrack-vertical</code></li>
 <li><code>separator</code></li>
 <li><code>spinner</code></li>
 <li><code>spinner-downbutton</code></li>
 <li><code>spinner-textfield</code></li>
 <li><code>spinner-upbutton</code></li>
 <li><code>statusbar</code></li>
 <li><code>statusbarpanel</code></li>
 <li><code>tab</code></li>
 <li><code>tabpanels</code></li>
 <li><code>tab-scroll-arrow-back</code></li>
 <li><code>tab-scroll-arrow-forward</code></li>
 <li><code>textfield</code></li>
 <li><code>textfield-multiline</code></li>
 <li><code>toolbar</code></li>
 <li><code>toolbarbutton-dropdown</code></li>
 <li><code>toolbox</code></li>
 <li><code>tooltip</code></li>
 <li><code>treeheadercell</code></li>
 <li><code>treeheadersortarrow</code></li>
 <li><code>treeitem</code></li>
 <li><code>treetwisty</code></li>
 <li><code>treetwistyopen</code></li>
 <li><code>treeview</code></li>
 <li><code>window</code></li>
</ul>
</div>

<h3 id="background-image" name="background-image">{{CSSxRef("background-image")}}</h3>

<div class="index">
<ul>
 <li>
  <h4 id="Gradients" name="Gradients">グラデーション {{Gecko_minversion_inline("1.9.2")}}</h4>

  <ul>
   <li>{{CSSxRef("linear-gradient","-moz-linear-gradient")}} {{Deprecated_Inline}}</li>
   <li>{{CSSxRef("radial-gradient","-moz-radial-gradient")}} {{Deprecated_Inline}}</li>
  </ul>
 </li>
 <li>
  <h4 id="Elements" name="Elements">要素 {{gecko_minversion_inline("2.0")}}</h4>

  <ul>
   <li>{{CSSxRef("element","-moz-element")}}</li>
  </ul>
 </li>
 <li>
  <h4 id="Sub-images" name="Sub-images">サブ画像 {{gecko_minversion_inline("2.0")}}</h4>

  <ul>
   <li>{{CSSxRef("-moz-image-rect")}}</li>
  </ul>
 </li>
</ul>
</div>

<h3 id="border-color" name="border-color">{{CSSxRef("border-color")}}</h3>

<div class="index">
<ul>
 <li><code>-moz-use-text-color</code> {{obsolete_inline}} Gecko から削除 ({{bug(1306214)}} 参照); 代わりに <a href="/ja/docs/Web/CSS/color_value#currentColor_keyword">currentcolor</a> を使用してください。</li>
</ul>
</div>

<h3 id="border-style_and_outline-style" name="border-style_and_outline-style">{{CSSxRef("border-style")}} と {{CSSxRef("outline-style")}}</h3>

<div class="index">
<ul>
 <li><code>-moz-bg-inset</code>{{Obsolete_Inline(1.9)}}</li>
 <li><code>-moz-bg-outset</code>{{Obsolete_Inline(1.9)}}</li>
 <li><code>-moz-bg-solid</code>{{Obsolete_Inline(1.9)}}</li>
</ul>
</div>

<h3 id="color_keywords" name="color_keywords">{{CSSxRef("&lt;color&gt;")}} キーワード</h3>

<div class="index">
<ul>
 <li><code>-moz-activehyperlinktext</code></li>
 <li><code>-moz-hyperlinktext</code></li>
 <li><code>-moz-visitedhyperlinktext</code></li>
 <li><code>-moz-buttondefault</code></li>
 <li><code>-moz-buttonhoverface</code></li>
 <li><code>-moz-buttonhovertext</code></li>
 <li><code>-moz-default-background-color</code>{{Gecko_minversion_inline("5.0")}}</li>
 <li><code>-moz-default-color</code>{{Gecko_minversion_inline("5.0")}}</li>
 <li><code>-moz-cellhighlight</code></li>
 <li><code>-moz-cellhighlighttext</code></li>
 <li><code>-moz-field</code></li>
 <li><code>-moz-fieldtext</code></li>
 <li><code>-moz-dialog</code></li>
 <li><code>-moz-dialogtext</code></li>
 <li><code>-moz-dragtargetzone</code></li>
 <li><code>-moz-mac-accentdarkestshadow</code></li>
 <li><code>-moz-mac-accentdarkshadow</code></li>
 <li><code>-moz-mac-accentface</code></li>
 <li><code>-moz-mac-accentlightesthighlight</code></li>
 <li><code>-moz-mac-accentlightshadow</code></li>
 <li><code>-moz-mac-accentregularhighlight</code></li>
 <li><code>-moz-mac-accentregularshadow</code></li>
 <li><code>-moz-mac-chrome-active</code>{{Gecko_minversion_inline("1.9.1")}}</li>
 <li><code>-moz-mac-chrome-inactive</code>{{Gecko_minversion_inline("1.9.1")}}</li>
 <li><code>-moz-mac-focusring</code></li>
 <li><code>-moz-mac-menuselect</code></li>
 <li><code>-moz-mac-menushadow</code></li>
 <li><code>-moz-mac-menutextselect</code></li>
 <li><code>-moz-menuhover</code></li>
 <li><code>-moz-menuhovertext</code></li>
 <li><code>-moz-win-communicationstext</code></li>
 <li><code>-moz-win-mediatext</code>{{gecko_minversion_inline(1.9)}}</li>
 <li><code>-moz-nativehyperlinktext</code>{{Gecko_minversion_inline("1.9.1")}}</li>
</ul>
</div>

<h3 id="display" name="display">{{CSSxRef("display")}}</h3>

<div class="index">
<ul>
 <li><code>-moz-box</code> {{Deprecated_Inline}}</li>
 <li><code>-moz-inline-block</code> {{Obsolete_Inline}}</li>
 <li><code>-moz-inline-box</code> {{Deprecated_Inline}}</li>
 <li><code>-moz-inline-grid</code>{{Obsolete_Inline(62)}}</li>
 <li><code>-moz-inline-stack</code>{{Obsolete_Inline(62)}}</li>
 <li><code>-moz-inline-table</code> {{Obsolete_Inline}}</li>
 <li><code>-moz-grid</code>{{Obsolete_Inline(62)}}</li>
 <li><code>-moz-grid-group</code>{{Obsolete_Inline(62)}}</li>
 <li><code>-moz-grid-line</code>{{Obsolete_Inline(62)}}</li>
 <li><code>-moz-groupbox</code>{{Obsolete_Inline}}</li>
 <li><code>-moz-deck</code>{{Obsolete_Inline(62)}}</li>
 <li><code>-moz-popup</code>{{Obsolete_Inline(62)}}</li>
 <li><code>-moz-stack</code>{{Obsolete_Inline(62)}}</li>
 <li><code>-moz-marker</code>{{Obsolete_Inline(62)}}</li>
</ul>
</div>

<h3 id="empty-cells" name="empty-cells">{{CSSxRef("empty-cells")}}</h3>

<div class="index">
<ul>
 <li><code>-moz-show-background</code> <span style="white-space: nowrap;">(Quirks モードでは既定値)</span></li>
</ul>
</div>

<h3 id="font" name="font">{{CSSxRef("font")}}</h3>

<div class="index">
<ul>
 <li><code>-moz-button</code></li>
 <li><code>-moz-info</code></li>
 <li><code>-moz-desktop</code></li>
 <li><code>-moz-dialog</code> (色も)</li>
 <li><code>-moz-document</code></li>
 <li><code>-moz-workspace</code></li>
 <li><code>-moz-window</code></li>
 <li><code>-moz-list</code></li>
 <li><code>-moz-pull-down-menu</code></li>
 <li><code>-moz-field</code> <span style="white-space: nowrap;">(色も)</span></li>
</ul>
</div>

<h3 id="font-family" name="font-family">{{CSSxRef("font-family")}}</h3>

<div class="index">
<ul>
 <li><code>-moz-fixed</code></li>
</ul>
</div>

<h3 id="image-rendering" name="image-rendering">{{CSSxRef("image-rendering")}}</h3>

<div class="index">
<ul>
 <li>{{CSSxRef("image-rendering","-moz-crisp-edges")}}{{Gecko_minversion_inline("1.9.2")}}</li>
</ul>
</div>

<h3 id="length" name="length">{{CSSxRef("&lt;length&gt;")}}</h3>

<div class="index">
<ul>
 <li>{{CSSxRef("-moz-calc")}}{{gecko_minversion_inline("2.0")}}</li>
</ul>
</div>

<h3 id="list-style-type" name="list-style-type">{{CSSxRef("list-style-type")}}</h3>

<div class="index">
<ul>
 <li><code>-moz-arabic-indic</code></li>
 <li><code>-moz-bengali</code></li>
 <li><code>-moz-cjk-earthly-branch</code></li>
 <li><code>-moz-cjk-heavenly-stem</code></li>
 <li><code>-moz-devanagari</code></li>
 <li><code>-moz-ethiopic-halehame</code></li>
 <li><code>-moz-ethiopic-halehame-am</code></li>
 <li><code>-moz-ethiopic-halehame-ti-er</code></li>
 <li><code>-moz-ethiopic-halehame-ti-et</code></li>
 <li><code>-moz-ethiopic-numeric</code></li>
 <li><code>-moz-gujarati</code></li>
 <li><code>-moz-gurmukhi</code></li>
 <li><code>-moz-hangul</code></li>
 <li><code>-moz-hangul-consonant</code></li>
 <li><code>-moz-japanese-formal</code></li>
 <li><code>-moz-japanese-informal</code></li>
 <li><code>-moz-kannada</code></li>
 <li><code>-moz-khmer</code></li>
 <li><code>-moz-lao</code></li>
 <li><code>-moz-malayalam</code></li>
 <li><code>-moz-myanmar</code></li>
 <li><code>-moz-oriya</code></li>
 <li><code>-moz-persian</code></li>
 <li><code>-moz-simp-chinese-formal</code></li>
 <li><code>-moz-simp-chinese-informal</code></li>
 <li><code>-moz-tamil</code></li>
 <li><code>-moz-telugu</code></li>
 <li><code>-moz-thai</code></li>
 <li><code>-moz-trad-chinese-formal</code></li>
 <li><code>-moz-trad-chinese-informal</code></li>
 <li><code>-moz-urdu</code></li>
</ul>
</div>

<h3 id="overflow" name="overflow">{{CSSxRef("overflow")}}</h3>

<div class="index">
<ul>
 <li>{{CSSxRef("-moz-scrollbars-none")}} {{Obsolete_Inline}}</li>
 <li>{{CSSxRef("-moz-scrollbars-horizontal")}} {{Deprecated_Inline}}</li>
 <li>{{CSSxRef("-moz-scrollbars-vertical")}} {{Deprecated_Inline}}</li>
 <li>{{CSSxRef("-moz-hidden-unscrollable")}}</li>
</ul>
</div>

<h3 id="text-align" name="text-align">{{CSSxRef("text-align")}}</h3>

<div class="index">
<ul>
 <li><code>-moz-center</code></li>
 <li><code>-moz-left</code></li>
 <li><code>-moz-right</code></li>
</ul>
</div>

<h3 id="text-decoration" name="text-decoration">{{CSSxRef("text-decoration")}}</h3>

<div class="index">
<ul>
 <li><code>-moz-anchor-decoration</code></li>
</ul>
</div>

<h3 id="-moz-user-select" name="-moz-user-select">{{CSSxRef("-moz-user-select")}}</h3>

<div class="index">
<ul>
 <li><code>-moz-all</code></li>
 <li><code>-moz-none</code></li>
</ul>
</div>

<h3 id="width_min-width_and_max-width" name="width_min-width_and_max-width">{{CSSxRef("width")}} および {{CSSxRef("min-width")}}, {{CSSxRef("max-width")}}</h3>

<div class="index">
<ul>
 <li><code>-moz-min-content</code></li>
 <li><code>-moz-fit-content</code></li>
 <li><code>-moz-max-content</code></li>
 <li><code>-moz-available</code></li>
</ul>
</div>

<h2 id="Pseudo-elements_and_pseudo-classes" name="Pseudo-elements_and_pseudo-classes">疑似要素と疑似クラス</h2>

<div class="index">
<ul>
 <li>
  <h3 id="A_–_D">A – D</h3>
 </li>
 <li>{{CSSxRef("::-moz-anonymous-block")}} <span class="comment">eg@:- bug 331432</span></li>
 <li>{{CSSxRef("::-moz-anonymous-positioned-block")}}</li>
 <li>{{CSSxRef(":-moz-any")}}{{gecko_minversion_inline("2.0")}}</li>
 <li>{{CSSxRef(":-moz-any-link")}} [<code>:link</code> と <code>:visited</code> に一致する]</li>
 <li>{{CSSxRef(":-moz-broken")}}{{gecko_minversion_inline("1.9")}}</li>
 <li>{{CSSxRef("::-moz-canvas")}}</li>
 <li>{{CSSxRef("::-moz-color-swatch")}}</li>
 <li>{{CSSxRef("::-moz-cell-content")}}</li>
 <li>{{CSSxRef(":-moz-drag-over")}}</li>
 <li>
  <h3 id="F_–_I">F – I</h3>
 </li>
 <li>{{CSSxRef(":-moz-first-node")}}</li>
 <li>{{CSSxRef("::-moz-focus-inner")}}</li>
 <li>{{CSSxRef("::-moz-focus-outer")}}</li>
 <li>{{CSSxRef(":-moz-focusring")}}{{gecko_minversion_inline("2.0")}}</li>
 <li>{{CSSxRef(":-moz-full-screen")}}{{gecko_minversion_inline("9.0")}}</li>
 <li>{{CSSxRef(":-moz-full-screen-ancestor")}}{{gecko_minversion_inline("10.0")}}</li>
 <li>{{CSSxRef(":-moz-handler-blocked")}}{{gecko_minversion_inline("1.9.1")}}</li>
 <li>{{CSSxRef(":-moz-handler-crashed")}}{{gecko_minversion_inline("2.0")}}</li>
 <li>{{CSSxRef(":-moz-handler-disabled")}}{{gecko_minversion_inline("1.9.1")}}</li>
 <li>{{CSSxRef("::-moz-inline-table")}}</li>
 <li>
  <h3 id="L">L</h3>
 </li>
 <li>{{CSSxRef(":-moz-last-node")}}</li>
 <li>{{CSSxRef(":-moz-list-bullet")}}</li>
 <li>{{CSSxRef(":-moz-list-number")}}</li>
 <li>{{CSSxRef(":-moz-loading")}}{{gecko_minversion_inline("1.9")}}</li>
 <li>{{CSSxRef(":-moz-locale-dir(ltr)")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef(":-moz-locale-dir(rtl)")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef(":-moz-lwtheme")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef(":-moz-lwtheme-brighttext")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef(":-moz-lwtheme-darktext")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>
  <h3 id="N_–_R">N – R</h3>
 </li>
 <li>{{CSSxRef(":-moz-native-anonymous")}}{{gecko_minversion_inline("36")}}</li>
 <li>{{CSSxRef(":-moz-only-whitespace")}}</li>
 <li>{{CSSxRef("::-moz-page")}}</li>
 <li>{{CSSxRef("::-moz-page-sequence")}}</li>
 <li>{{CSSxRef("::-moz-pagebreak")}}</li>
 <li>{{CSSxRef("::-moz-pagecontent")}}</li>
 <li>{{CSSxRef(":-moz-placeholder")}}{{gecko_minversion_inline("1.9")}}{{Obsolete_Inline("51")}}</li>
 <li>{{CSSxRef("::-moz-placeholder")}}{{gecko_minversion_inline("19")}}{{Deprecated_Inline("51")}}</li>
 <li>{{CSSxRef("::-moz-progress-bar")}}</li>
 <li>{{CSSxRef("::-moz-range-progress")}}</li>
 <li>{{CSSxRef("::-moz-range-thumb")}}</li>
 <li>{{CSSxRef("::-moz-range-track")}}</li>
 <li>{{CSSxRef(":-moz-read-only")}}</li>
 <li>{{CSSxRef(":-moz-read-write")}}</li>
 <li>
  <h3 id="S">S</h3>
 </li>
 <li>{{CSSxRef("::-moz-scrolled-canvas")}}</li>
 <li>{{CSSxRef("::-moz-scrolled-content")}}</li>
 <li>{{CSSxRef("::-moz-scrolled-page-sequence")}}</li>
 <li>{{CSSxRef("::selection","::-moz-selection")}}{{Deprecated_Inline(62)}}</li>
 <li>{{CSSxRef(":-moz-submit-invalid")}}{{gecko_minversion_inline("2.0")}}</li>
 <li>{{CSSxRef(":-moz-suppressed")}}{{gecko_minversion_inline("1.9")}}</li>
 <li>{{CSSxRef("::-moz-svg-foreign-content")}}</li>
 <li>
  <h3 id="T">T</h3>
 </li>
 <li>{{CSSxRef("::-moz-table")}}</li>
 <li>{{CSSxRef("::-moz-table-cell")}}</li>
 <li>{{CSSxRef("::-moz-table-column")}}</li>
 <li>{{CSSxRef("::-moz-table-column-group")}}</li>
 <li>{{CSSxRef("::-moz-table-outer")}}</li>
 <li>{{CSSxRef("::-moz-table-row")}}</li>
 <li>{{CSSxRef("::-moz-table-row-group")}}</li>
 <li>{{CSSxRef(":-moz-tree-cell")}}</li>
 <li>{{CSSxRef(":-moz-tree-cell-text")}}</li>
 <li>{{CSSxRef(":-moz-tree-cell-text(hover)")}}{{gecko_minversion_inline("1.9")}}</li>
 <li>{{CSSxRef(":-moz-tree-checkbox")}}</li>
 <li>{{CSSxRef(":-moz-tree-column")}}</li>
 <li>{{CSSxRef(":-moz-tree-drop-feedback")}}</li>
 <li>{{CSSxRef(":-moz-tree-image")}}</li>
 <li>{{CSSxRef(":-moz-tree-indentation")}}</li>
 <li>{{CSSxRef(":-moz-tree-line")}}</li>
 <li>{{CSSxRef(":-moz-tree-progressmeter")}}</li>
 <li>{{CSSxRef(":-moz-tree-row")}}</li>
 <li>{{CSSxRef(":-moz-tree-row(hover)")}}{{gecko_minversion_inline("1.9")}}</li>
 <li>{{CSSxRef(":-moz-tree-separator")}}</li>
 <li>{{CSSxRef(":-moz-tree-twisty")}}</li>
 <li>
  <h3 id="U_–_X">U – X</h3>
 </li>
 <li>{{CSSxRef(":-moz-ui-invalid")}}{{gecko_minversion_inline("2.0")}}</li>
 <li>{{CSSxRef(":-moz-ui-valid")}}{{gecko_minversion_inline("2.0")}}</li>
 <li>{{CSSxRef(":-moz-user-disabled")}}{{gecko_minversion_inline("1.9")}}</li>
 <li>{{CSSxRef("::-moz-viewport")}}</li>
 <li>{{CSSxRef("::-moz-viewport-scroll")}}</li>
 <li>{{CSSxRef(":-moz-window-inactive")}}{{gecko_minversion_inline("2.0")}}</li>
 <li>{{CSSxRef("::-moz-xul-anonymous-block")}}</li>
</ul>
</div>

<h2 id="At-rules" name="At-rules">@-規則</h2>

<div class="index">
<ul>
 <li>{{CSSxRef("@-moz-document")}}</li>
</ul>
</div>

<h2 id="Media_features" name="Media_features">メディア特性</h2>

<div class="index">
<ul>
 <li>{{CSSxRef("@media/-moz-mac-graphite-theme", "-moz-mac-graphite-theme")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef("@media/-moz-maemo-classic", "-moz-maemo-classic")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}{{gecko_minversion_inline("2.0")}}</li>
 <li>{{CSSxRef("@media/-moz-os-version", "-moz-os-version")}}</li>
 <li>{{CSSxRef("@media/-moz-scrollbar-end-backward", "-moz-scrollbar-end-backward")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef("@media/-moz-scrollbar-end-forward", "-moz-scrollbar-end-forward")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef("@media/-moz-scrollbar-start-backward", "-moz-scrollbar-start-backward")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef("@media/-moz-scrollbar-start-forward", "-moz-scrollbar-start-forward")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef("@media/-moz-scrollbar-thumb-proportional", "-moz-scrollbar-thumb-proportional")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef("@media/-moz-touch-enabled", "-moz-touch-enabled")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef("@media/-moz-windows-accent-color-in-titlebar", "-moz-windows-accent-color-in-titlebar")}}</li>
 <li>{{CSSxRef("@media/-moz-windows-classic", "-moz-windows-classic")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef("@media/-moz-windows-compositor", "-moz-windows-compositor")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef("@media/-moz-windows-default-theme", "-moz-windows-default-theme")}}{{gecko_minversion_inline("1.9.2")}}</li>
 <li>{{CSSxRef("@media/-moz-windows-glass", "-moz-windows-glass")}}</li>
 <li>{{CSSxRef("@media/-moz-windows-theme", "-moz-windows-theme")}}{{gecko_minversion_inline("2.0")}}</li>
</ul>
</div>

<h2 id="Other" name="Other">その他</h2>

<div class="index">
<ul>
 <li>{{CSSxRef("-moz-alt-content")}} (see {{Bug(11011)}})</li>
</ul>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Mozilla/Gecko/Chrome/CSS">Chrome 専用 CSS リファレンス</a></li>
 <li><a href="/ja/docs/Web/CSS/Microsoft_Extensions">CSS の Microsoft 拡張</a></li>
 <li><a href="/ja/docs/Web/CSS/WebKit_Extensions">CSS の WebKit 拡張</a></li>
</ul>
