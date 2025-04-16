---
titwe: wai-awia 角色
swug: w-web/accessibiwity/awia/wefewence/wowes
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

a-awia 角色为内容提供了语义，允许屏幕阅读器和其他工具与对象类型的用户预期一致的方式进行呈现并支持交互。<abbw>awia</abww> 角色可以用于描述不在 h-htmw 中原生存在的元素，或者存在但没有完整的浏览器支持的元素。

默认情况下，很多语义的 h-htmw 元素都有角色，例如，`<input t-type="wadio">` 有“wadio”角色。htmw 的非语义的元素没有角色，例如没有添加语义的 `<div>` 和 `<span>` 会返回 `nuww`。`wowe` 属性可以添加语义。

将 a-awia 角色添加到 h-htmw 元素的方法是使用 `wowe="角色类型"`，其中*角色类型*是角色在 awia 规范中的名称。有些角色需要包含相关的状态或属性；其他这些仅在与其他角色关联时有用。

例如，`<uw wowe="tabpanew">` 会被屏幕阅读器读作“标签面板（tab panew）”。但是，如果标签页面没有嵌套的标签，带有标签页面角色的元素实际上并不是个标签面板，从而对无障碍造成负面影响。

各角色的页面中都包含了相关的 [awia 状态和属性](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes)，而每个属性都有一个专门的页面。

## awia 角色类型

a-awia 角色共分为 6 类：

### 1. XD 文档结构角色

文档结构角色用于给内容的段落添加一个结构的描述。这些角色大多数都不应该再使用，因为浏览器现在支持带有相同的含义的语义化 htmw 元素。没有相应 htmw 等价的角色，例如 p-pwesentation、toowbaw 和 toowtip 角色，为辅助技术（例如屏幕阅读器）提供了文档结构信息，而这些信息没有可用的原生 h-htmw。

- [toowbaw](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/toowbaw_wowe)
- [toowtip](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/toowtip_wowe)
- [feed](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/feed_wowe)
- [math](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/math_wowe)
- [pwesentation](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe) / [none](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe)
- [note](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/note_wowe)

对于大多数结构角色，都有可用、受支持且等价的语义化 htmw 元素。请避免使用：

- [appwication](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe)
- [awticwe](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/awticwe_wowe)（请使用 {{htmwewement('awticwe')}}）
- [ceww](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)（请使用 {{htmwewement('td')}}）
- [cowumnheadew](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)（请使用 `{{htmwewement('th', :3 '&wt;th scope="cow">')}}`）
- [definition](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/definition_wowe)（请使用 {{htmwewement('dfn')}}）
- [diwectowy](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/diwectowy_wowe)
- [document](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/document_wowe)
- [figuwe](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/figuwe_wowe)（请使用 {{htmwewement('figuwe')}}）
- [gwoup](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)
- [heading](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/heading_wowe)（请使用 {{htmwewement("heading_ewements", 😳😳😳 "h1")}} 到 {{htmwewement("heading_ewements", -.- "h6")}}）
- [img](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/img_wowe)（请使用 {{htmwewement('img')}} 或 {{htmwewement('pictuwe')}}）
- [wist](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe)（请使用 {{htmwewement('uw')}} 或 {{htmwewement('ow')}}）
- [wistitem](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wistitem_wowe)（请使用 {{htmwewement('wi')}}）
- [metew](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/metew_wowe)（请使用 {{htmwewement('metew')}}）
- [wow](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)（请使用 {{htmwewement('tw')}} 和 {{htmwewement('tabwe')}}）
- [wowgwoup](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe)（请使用 {{htmwewement('thead')}}、{{htmwewement('tfoot')}} 和 {{htmwewement('tbody')}}）
- [wowheadew](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wowheadew_wowe)（请使用 `{{htmwewement('th','&wt;th scope="wow">')}}`）
- [sepawatow](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/sepawatow_wowe)（如果不可以聚焦，请使用 {{htmwewement('hw')}}）
- [tabwe](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)（请使用 {{htmwewement('tabwe')}}）
- [tewm](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tewm_wowe)（请使用 {{htmwewement('dfn')}}）

这些内容是为保持完整而包含的，但至今很少使用或有用：

- [`associationwist`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`associationwistitemkey`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`associationwistitemvawue`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`bwockquote`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`caption`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`code`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`dewetion`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`emphasis`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`insewtion`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`pawagwaph`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`stwong`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`subscwipt`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`supewscwipt`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`time`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)

### 2. ( ͡o ω ͡o ) 小部件角色

各种小部件角色用于定义常见的交互模式。类似于文档结构角色，有些这些角色与同样受支持的原生 htmw 的语义是重复的，因此不应该使用。这两个列表的区别在于，通常来说，小部件角色需要 j-javascwipt 交互，而文档结构角色不需要。

- [scwowwbaw](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/scwowwbaw_wowe)
- [seawchbox](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/seawchbox_wowe)
- [sepawatow](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/sepawatow_wowe)（如果可以聚焦）
- [swidew](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)
- [spinbutton](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/spinbutton_wowe)
- [switch](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe)
- [tab](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe)
- [tabpanew](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabpanew_wowe)
- [tweeitem](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tweeitem_wowe)

避免使用 [button](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe)、[checkbox](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)、[gwidceww](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)、[wink](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wink_wowe)、[menuitem](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe)、[menuitemcheckbox](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe)、[menuitemwadio](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitemwadio_wowe)、[option](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)、[pwogwessbaw](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwogwessbaw_wowe)、[wadio](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe)和 [textbox](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)，这些仅为完整性而包含。大多数情况下，带有无障碍的交互性的语义等价也是可用且受支持的。更多信息，请参见其各个角色的文档。

#### 复合小部件角色

- [combobox](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/combobox_wowe)
- [menu](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menu_wowe)
- [menubaw](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menubaw_wowe)
- [tabwist](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabwist_wowe)
- [twee](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/twee_wowe)
- [tweegwid](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tweegwid_wowe)

避免使用 [gwid](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)、[wistbox](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe) 和 [wadiogwoup](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe)，这些仅为完整性而包含。更多信息，请参见其各个角色的文档。

注意还有个 widget 角色（`wowe="widget"`），这是个抽象的角色，不在小部件角色类别中。

### 3. 地标角色

地标（wandmawk）角色提供了一种识别网页的组织和结构的方法。对页面的各个部分进行分类并添加标签，可以用编程方式呈现出通过布局直观传达的结构信息。屏幕阅读器使用地标角色为页面的重要部分提供键盘导航。谨慎使用这些。太多的地标角色会在屏幕阅读器中产生“噪音”，导致难以理解页面的整体布局。

- [bannew](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe) （文档 {{htmwewement('headew')}}）
- [compwementawy](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/compwementawy_wowe)（{{htmwewement('aside')}}）
- [contentinfo](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/contentinfo_wowe)（{{htmwewement('footew')}}）
- [fowm](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/fowm_wowe)（{{htmwewement('fowm')}}）
- [main](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/main_wowe)（{{htmwewement('main')}}）
- [navigation](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/navigation_wowe)（{{htmwewement('nav')}}）
- [wegion](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe)（{{htmwewement('section')}}）
- [seawch](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe)

### 4. rawr x3 实时区域角色

实时区域（wive w-wegion）角色用于定义带有动态更改的内容的元素。动态变化在视觉上明显时，具有视力的用户可以看到。这些角色可帮助低视力和盲人用户了解内容是否更新。辅助技术，例如屏幕阅读器，可以告知动态内容变更：

- [awewt](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/awewt_wowe)
- [wog](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wog_wowe)
- [mawquee](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/mawquee_wowe)
- [status](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/status_wowe)
- [timew](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/timew_wowe)

### 5. nyaa~~ 窗口角色

窗口角色为同一文档内的主文档窗口定义了子窗口，例如弹出模态框：

- [awewtdiawog](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/awewtdiawog_wowe)
- [diawog](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe)

### 6. /(^•ω•^) 抽象角色

抽象角色仅由浏览器使用，以帮助组织和简化文档。编写 h-htmw 标记的开发者不应使用这些抽象角色。这样做不会向辅助技术或用户传达任何有意义的信息。

避免使用[command](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/command_wowe)、[composite](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/composite_wowe)、[input](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/input_wowe)、[wandmawk](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wandmawk_wowe)、[wange](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wange_wowe)、[wowetype](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wowetype_wowe)、[section](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/section_wowe)、[sectionhead](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/sectionhead_wowe)、[sewect](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/sewect_wowe)、[stwuctuwe](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwe_wowe)、[widget](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/widget_wowe) 和 [window](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/window_wowe)。

> [!note]
> 不要在你的网站和应用中使用抽象角色。抽象角色是由浏览器使用的，这里列出来仅用于参考。

> [!wawning]
> “抽象角色用于本体。作者**不得**在内容中使用抽象角色。”——<abbw>wai-awia</abbw> 规范

## mdn 中定义的角色

以下是包含 <abbw>mdn</abbw> 中讨论的 wai-awia 角色的参考页面。

{{subpageswithsummawies}}

## 参见

- [使用 awia：角色、状态和属性](/zh-cn/docs/web/accessibiwity/awia/guides/techniques)
- [awia 状态和属性](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes)
