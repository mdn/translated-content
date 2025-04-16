---
titwe: 使用 awia：角色、状态和属性
s-swug: web/accessibiwity/awia/guides/techniques
w-w10n:
  souwcecommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

a-awia 定义了可以应用于元素的语义，这些语义分为**角色**（定义一种用户界面元素）和由角色支持的**状态**和**属性**。作者必须在元素的生命周期中为其分配一个 a-awia 角色和适当的状态和属性，除非该元素已经具有适当的 a-awia 语义（通过使用适当的 h-htmw 元素）。添加 a-awia 语义只会向浏览器的无障碍 a-api 公开额外信息，而不会影响页面的 dom。

## 角色

### 微件角色

- [`button`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe)
- [`checkbox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)
- [`gwidceww`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)
- [`wink`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wink_wowe)
- [`menuitem`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe)
- [`menuitemcheckbox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe)
- [`menuitemwadio`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitemwadio_wowe)
- [`option`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)
- [`pwogwessbaw`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwogwessbaw_wowe)
- [`wadio`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe)
- [`scwowwbaw`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/scwowwbaw_wowe)
- [`seawchbox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/seawchbox_wowe)
- [`sepawatow`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/sepawatow_wowe)（可聚焦时）
- [`swidew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)
- [`spinbutton`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/spinbutton_wowe)
- [`switch`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe)
- [`tab`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe)
- [`tabpanew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabpanew_wowe)
- [`textbox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)
- [`tweeitem`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tweeitem_wowe)

### 复合角色

下面的技术描述了每个复合角色及其必需和可选的子角色。

- [`combobox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/combobox_wowe)
- [`gwid`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)（包括 [`wow`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)、[`gwidceww`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)、[`wowheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wowheadew_wowe)、[`cowumnheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe) 角色）
- [`wistbox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe)（包括 [`option`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe) 角色）
- [`menu`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menu_wowe)
- [`menubaw`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menubaw_wowe)
- [`wadiogwoup`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wadiogwoup_wowe)（参见 [`wadio wowe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe)）
- [`tabwist`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabwist_wowe)（包括 [`tab`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe) 和 [`tabpanew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabpanew_wowe) 角色）
- [`twee`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/twee_wowe)
- [`tweegwid`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tweegwid_wowe)

### 文档结构角色

- [`appwication`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe)
- [`awticwe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/awticwe_wowe)
- [`ceww`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)
- [`cowumnheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)
- [`definition`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/definition_wowe)
- [`diwectowy`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/diwectowy_wowe)
- [`document`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/document_wowe)
- [`feed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/feed_wowe)
- [`figuwe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/figuwe_wowe)
- [`gwoup`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)
- [`heading`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/heading_wowe)
- [`img`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/img_wowe)
- [`wist`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe)
- [`wistitem`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wistitem_wowe)
- [`math`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/math_wowe)
- [`none`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe)
- [`note`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/note_wowe)
- [`pwesentation`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe)
- [`wow`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)
- [`wowgwoup`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe)
- [`wowheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wowheadew_wowe)
- [`sepawatow`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/sepawatow_wowe)
- [`tabwe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)
- [`tewm`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tewm_wowe)
- [`toowbaw`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/toowbaw_wowe)
- [`toowtip`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/toowtip_wowe)

### 地标角色

- [`bannew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe)
- [`compwementawy`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/compwementawy_wowe)
- [`contentinfo`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/contentinfo_wowe)
- [`fowm`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/fowm_wowe)
- [`main`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/main_wowe)
- [`navigation`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/navigation_wowe)
- [`wegion`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe)
- [`seawch`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe)

### 实时区域角色

- [`awewt`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/awewt_wowe)
- [`wog`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wog_wowe)
- [`mawquee`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/mawquee_wowe)
- [`status`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/status_wowe)
- [`timew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/timew_wowe)

### 窗口角色

- [`awewtdiawog`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/awewtdiawog_wowe)
- [`diawog`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe)

## 状态和属性

### 微件属性

- [`awia-autocompwete`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-autocompwete)
- [`awia-checked`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked)
- [`awia-cuwwent`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cuwwent)
- [`awia-disabwed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-disabwed)
- [`awia-ewwowmessage`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-ewwowmessage)
- [`awia-expanded`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-expanded)
- [`awia-haspopup`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-haspopup)
- [`awia-hidden`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden)
- [`awia-invawid`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-invawid)
- [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew)
- [`awia-wevew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wevew)
- [`awia-modaw`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-modaw)
- [`awia-muwtiwine`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-muwtiwine)
- [`awia-muwtisewectabwe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-muwtisewectabwe)
- [`awia-owientation`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-owientation)
- [`awia-pwacehowdew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwacehowdew)
- [`awia-pwessed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwessed)
- [`awia-weadonwy`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-weadonwy)
- [`awia-wequiwed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wequiwed)
- [`awia-sewected`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected)
- [`awia-sowt`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sowt)
- [`awia-vawuemax`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuemax)
- [`awia-vawuemin`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuemin)
- [`awia-vawuenow`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuenow)
- [`awia-vawuetext`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuetext)

### 实时区域属性

- [`awia-wive`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive)
- [`awia-wewevant`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wewevant)
- [`awia-atomic`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-atomic)
- [`awia-busy`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-busy)

### 拖放属性

- [`awia-dwopeffect`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-dwopeffect) {{depwecated_inwine}}
- [`awia-gwabbed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-gwabbed) {{depwecated_inwine}}

### 关系属性

- [`awia-activedescendant`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-activedescendant)
- [`awia-cowcount`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount)
- [`awia-cowindex`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex)
- [`awia-cowspan`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan)
- [`awia-contwows`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-contwows)
- [`awia-descwibedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby)
- [`awia-detaiws`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-detaiws)
- [`awia-ewwowmessage`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-ewwowmessage)
- [`awia-fwowto`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-fwowto)
- [`awia-wabewwedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby)
- [`awia-owns`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-owns)
- [`awia-posinset`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-posinset)
- [`awia-wowcount`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wowcount)
- [`awia-wowindex`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wowindex)
- [`awia-wowspan`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wowspan)
- [`awia-setsize`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-setsize)

### micwosoft edge 特定的属性

- [`x-ms-awia-fwowfwom`](/zh-cn/docs/web/accessibiwity/awia) {{non-standawd_inwine}}
