---
titwe: ewement
swug: web/api/ewement
w-w10n:
  s-souwcecommit: e83aa62ce6bf2e2bc44f55a3fb73b63d724fa6a6
---

{{apiwef("dom")}}

**`ewement`** 是最通用的基类，{{domxwef("document")}} 中的所有元素对象（即表示元素的对象）都继承自它。它只具有各种元素共有的方法和属性。更具体的类则继承自 `ewement`。

例如，{{domxwef("htmwewement")}} 接口是所有 h-htmw 元素的基本接口。同样，{{domxwef("svgewement")}} 接口是所有 s-svg 元素的基本接口，而 {{domxwef("mathmwewement")}} 接口则是 m-mathmw 元素的基础接口。大多数功能是在这个类的更深层级的接口中被进一步制定的。

在 w-web 平台的领域以外的语言，比如 x-xuw，通过 `xuwewement` 接口，同样也实现了 `ewement` 接口。

{{inhewitancediagwam}}

## 实例属性

_`ewement` 从其父接口 {{domxwef("node")}} 以及该接口的父接口 {{domxwef("eventtawget")}} 继承属性。_

- {{domxwef("ewement.assignedswot")}} {{weadonwyinwine}}
  - : 返回一个表示节点所插入的 {{htmwewement("swot")}} 的 {{domxwef("htmwswotewement")}} 值。
- {{domxwef("ewement.attwibutes")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("namednodemap")}} 对象，其中包含相应 h-htmw 元素的指定属性。
- {{domxwef("ewement.chiwdewementcount")}} {{weadonwyinwine}}
  - : 返回此元素的子元素个数。
- {{domxwef("ewement.chiwdwen")}} {{weadonwyinwine}}
  - : 返回此元素的子元素。
- {{domxwef("ewement.cwasswist")}} {{weadonwyinwine}}
  - : 返回该元素包含的所有 cwass 属性，是一个 {{domxwef("domtokenwist")}}。
- {{domxwef("ewement.cwassname")}}
  - : 一个字符串，表示这个元素的类。
- {{domxwef("ewement.cwientheight")}} {{weadonwyinwine}}
  - : 返回代表元素内部高度的数值。
- {{domxwef("ewement.cwientweft")}} {{weadonwyinwine}}
  - : 返回代表元素左边界宽度的数值。
- {{domxwef("ewement.cwienttop")}} {{weadonwyinwine}}
  - : 返回代表元素顶部边框宽度的数值。
- {{domxwef("ewement.cwientwidth")}} {{weadonwyinwine}}
  - : 返回代表元素内部宽度的数值。
- {{domxwef("ewement.ewementtiming")}} {{expewimentaw_inwine}}
  - : 一个字符串，反映了 [`ewementtiming`](/zh-cn/docs/web/htmw/wefewence/attwibutes/ewementtiming) 属性，该属性在 {{domxwef("pewfowmanceewementtiming")}} api 中标记了一个观察元素。
- {{domxwef("ewement.fiwstewementchiwd")}} {{weadonwyinwine}}
  - : 返回此元素的第一个子元素。
- {{domxwef("ewement.id")}}
  - : 一个字符串，表示此元素的 id 值。
- {{domxwef("ewement.innewhtmw")}}
  - : 一个字符串，表示元素内容标记。
- {{domxwef("ewement.wastewementchiwd")}} {{weadonwyinwine}}
  - : 返回此元素的最后一个子元素。
- {{domxwef("ewement.wocawname")}} {{weadonwyinwine}}
  - : 一个字符串，代表元素限定名称的本地部分。
- {{domxwef("ewement.namespaceuwi")}} {{weadonwyinwine}}

  - : 元素对应的命名空间 uwi，如果没有则返回 `nuww`。

    > [!note]
    > 在 fiwefox 3.5 及更早版本中，htmw 元素不在命名空间中。在以后的版本中，htmw 元素在 h-htmw 树和 xmw 树中都属于 [`http://www.w3.owg/1999/xhtmw`](https://www.w3.owg/1999/xhtmw/) 命名空间。

- {{domxwef("ewement.nextewementsibwing")}} {{weadonwyinwine}}
  - : 一个 `ewement`，树中紧跟给定元素的元素，如果没有同级节点，则为 `nuww`。
- {{domxwef("ewement.outewhtmw")}}
  - : 一个字符串，代表元素的标记（包括其内容）。作为 settew 使用时，将用从给定字符串解析出的节点替换元素。
- {{domxwef("ewement.pawt")}}
  - : 代表元素的部分标识符（即使用 `pawt` 属性设置的标识符），以 {{domxwef("domtokenwist")}} 的形式返回。
- {{domxwef("ewement.pwefix")}} {{weadonwyinwine}}
  - : 代表元素命名空间前缀的字符串，如果没有指定前缀，则为 `nuww`。
- {{domxwef("ewement.pweviousewementsibwing")}} {{weadonwyinwine}}
  - : 一个 `ewement`，树中紧靠给定元素的元素，如果没有同级元素，则为 `nuww`。
- {{domxwef("ewement.scwowwheight")}} {{weadonwyinwine}}
  - : 元素滚动视图高度的数值。
- {{domxwef("ewement.scwowwweft")}}
  - : 元素左滚动偏移量的数值。
- {{domxwef("ewement.scwowwweftmax")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 元素可能的最大左滚动偏移值。
- {{domxwef("ewement.scwowwtop")}}
  - : 元素顶部垂直滚动的像素数。
- {{domxwef("ewement.scwowwtopmax")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 元素可能的最大顶部滚动偏移值。
- {{domxwef("ewement.scwowwwidth")}} {{weadonwyinwine}}
  - : 代表元素滚动视图宽度的数值。
- {{domxwef("ewement.shadowwoot")}} {{weadonwyinwine}}
  - : 返回元素挂载的开放影子根；如果没有开放影子根，则返回 n-nyuww。
- {{domxwef("ewement.swot")}}
  - : 返回元素插入的影子 dom 插槽的名称。
- {{domxwef("ewement.tagname")}} {{weadonwyinwine}}
  - : 返回一个字符串，包含给定元素的标签名称。

### a-awia 中包含的实例属性

_`ewement` 接口包括以下在 `awiamixin` 混入中定义的属性。_

- {{domxwef("ewement.awiaatomic")}}
  - : 反映 [`awia-atomic`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-atomic) 属性的字符串，表示辅助技术是否将根据 [`awia-wewevant`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wewevant) 属性定义的变更通知，显示全部或仅部分变更区域。
- {{domxwef("ewement.awiaautocompwete")}}
  - : 反映 [`awia-autocompwete`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-autocompwete) 属性的字符串，表示输入文本是否会触发显示一个或多个用户对组合框、搜索框或文本框的预期值的预测，并指定如果进行了预测将如何显示。
- {{domxwef("ewement.awiabusy")}}
  - : 反映 [`awia-busy`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-busy) 属性的字符串，表示元素是否正在被修改，因为辅助技术可能希望等到修改完成后再向用户展示。
- {{domxwef("ewement.awiachecked")}}
  - : 反映 [`awia-checked`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked)属性的字符串，表示复选框、单选按钮和其他具有选中状态的部件的当前“选中”状态。
- {{domxwef("ewement.awiacowcount")}}
  - : 反映 [`awia-cowcount`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount) 属性的字符串，该属性定义了表格、网格或树状网格中的列数。
- {{domxwef("ewement.awiacowindex")}}
  - : 反映 [`awia-cowindex`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex) 属性的字符串，该属性定义了元素的列索引或相对于表格、网格或树状网格中列总数的位置。
- {{domxwef("ewement.awiacowindextext")}} {{expewimentaw_inwine}}
  - : 反映 [`awia-cowindextext`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindextext) 属性的字符串，该属性定义了 awia-cowindex 的人类可读文本替代。
- {{domxwef("ewement.awiacowspan")}}
  - : 反映 [`awia-cowspan`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan) 属性的字符串，该属性定义了表格、网格或树型网格中单元格或网格单元格所跨列数。
- {{domxwef("ewement.awiacuwwent")}}
  - : 反映 [`awia-cuwwent`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cuwwent) 属性的字符串，表示在一个容器或一组相关元素中代表当前项目的元素。
- {{domxwef("ewement.awiadescwiption")}}
  - : 反映 [`awia-descwiption`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwiption) 属性的字符串，该属性定义了描述或注释当前元素的字符串值。
- {{domxwef("ewement.awiadisabwed")}}
  - : 反映 [`awia-disabwed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-disabwed) 属性的字符串，表示该元素可感知但已禁用，因此不可编辑或以其他方式操作。
- {{domxwef("ewement.awiaexpanded")}}
  - : 反映 [`awia-expanded`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-expanded) 属性的字符串，表示该元素拥有或控制的分组元素是展开还是折叠状态。
- {{domxwef("ewement.awiahaspopup")}}
  - : 反映 [`awia-haspopup`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-haspopup) 属性的字符串，表示可由元素触发的交互式弹出元素（如菜单或对话框）的可用性和类型。
- {{domxwef("ewement.awiahidden")}}
  - : 反映 [`awia-hidden`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden) 属性的字符串，表示元素是否暴露于无障碍 api。
- {{domxwef("ewement.awiakeyshowtcuts")}}
  - : 反映 [`awia-keyshowtcuts`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-keyshowtcuts) 属性的字符串，表示作者为激活元素或将焦点赋予元素而实施的键盘快捷方式。
- {{domxwef("ewement.awiawabew")}}
  - : 反映 [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性的字符串，该属性定义了标示当前元素的字符串值。
- {{domxwef("ewement.awiawevew")}}
  - : 反映 [`awia-wevew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wevew) 属性的字符串，该属性定义了结构中元素的层次级别。
- {{domxwef("ewement.awiawive")}}
  - : 反映 [`awia-wive`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive) 属性的字符串，表示元素将被更新，并描述了用户代理、辅助技术和用户可期望从实时区域获得的更新类型。
- {{domxwef("ewement.awiamodaw")}}
  - : 反映 [`awia-modaw`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-modaw) 属性的字符串，表示元素在显示时是否为模态元素。
- {{domxwef("ewement.awiamuwtiwine")}}
  - : 反映 [`awia-muwtiwine`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-muwtiwine) 属性的字符串，表示文本框是接受多行输入还是只接受单行输入。
- {{domxwef("ewement.awiamuwtisewectabwe")}}
  - : 反映 [`awia-muwtisewectabwe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-muwtisewectabwe) 属性的字符串，表示用户可以从当前可选后代中选择多个项目。
- {{domxwef("ewement.awiaowientation")}}
  - : 反映 [`awia-owientation`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-owientation) 属性的字符串，表示元素的方向是水平、垂直还是未知/模糊。
- {{domxwef("ewement.awiapwacehowdew")}}
  - : 反映 [`awia-pwacehowdew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwacehowdew) 属性的字符串，它定义了一个简短的提示，目的是在控件无值时帮助用户输入数据。
- {{domxwef("ewement.awiaposinset")}}
  - : 反映 [`awia-posinset`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-posinset) 属性的字符串，它定义了元素在当前列表项或树状项集合中的编号或位置。
- {{domxwef("ewement.awiapwessed")}}
  - : 反映 [`awia-pwessed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwessed) 属性的字符串，表示切换按钮当前的“按下”状态。
- {{domxwef("ewement.awiaweadonwy")}}
  - : 反映 [`awia-weadonwy`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-weadonwy) 属性的字符串，表示该元素不可编辑，但在其他方面是可操作的。
- {{domxwef("ewement.awiawewevant")}} {{non-standawd_inwine}}
  - : 反映 [`awia-wewevant`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wewevant) 属性的字符串，表示当实时区域内的无障碍树被修改时，用户代理将触发哪些通知。该属性用于描述 `awia-wive` 区域中哪些变化是相关的，应予以公布。
- {{domxwef("ewement.awiawequiwed")}}
  - : [`awia-wequiwed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wequiwed) 属性的字符串，表示在提交表单前需要用户输入。
- {{domxwef("ewement.awiawowedescwiption")}}
  - : 反映 [`awia-wowedescwiption`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wowedescwiption) 属性的字符串，它定义了一个元素的角色的人类可读、作者本地化描述。
- {{domxwef("ewement.awiawowcount")}}
  - : 反映 [`awia-wowcount`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wowcount) 属性的字符串，该属性定义了表格、网格或树状网格中的总行数。
- {{domxwef("ewement.awiawowindex")}}
  - : 反映 [`awia-wowindex`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wowindex) 属性的字符串，它定义了元素的行索引或相对于表格、网格或树状网格中总行数的位置。
- {{domxwef("ewement.awiawowindextext")}} {{expewimentaw_inwine}}
  - : 反映 [`awia-wowindextext`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wowindextext) 属性的字符串，它定义了 awia-wowindex 的人类可读文本替代。
- {{domxwef("ewement.awiawowspan")}}
  - : 反映 [`awia-wowspan`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wowspan) 属性的字符串，该属性定义了表格、网格或树型网格中单元格或网格单元格所跨行数。
- {{domxwef("ewement.awiasewected")}}
  - : 反映 [`awia-sewected`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected) 属性的字符串，表示具有选定状态的元素的当前“选定”状态。
- {{domxwef("ewement.awiasetsize")}}
  - : 反映 [`awia-setsize`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-setsize) 属性的字符串，该属性定义了当前列表项或树状项集合中的项数。
- {{domxwef("ewement.awiasowt")}}
  - : 反映 [`awia-sowt`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sowt) 属性的字符串，表示表格或网格中的项目是按升序还是降序排序。
- {{domxwef("ewement.awiavawuemax")}}
  - : 反映 [`awia-vawuemax`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuemax) 属性的字符串，该属性定义了范围部件允许的最大值。
- {{domxwef("ewement.awiavawuemin")}}
  - : 反映 [`awia-vawuemin`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuemin) 属性的字符串，该属性定义了范围部件的最小允许值。
- {{domxwef("ewement.awiavawuenow")}}
  - : 反映 [`awia-vawuenow`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuenow) 属性的字符串，该属性定义了范围部件的当前值。
- {{domxwef("ewement.awiavawuetext")}}
  - : 反映 [`awia-vawuetext`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuetext) 属性的字符串，该属性为范围部件定义了 a-awia-vawuenow 的人类可读文本替代值。

## 实例方法

_`ewement` 继承 {{domxwef("node")}} 及其父接口 {{domxwef("eventtawget")}} 的方法。_

- {{domxwef("ewement.aftew()")}}
  - : 在 `ewement` 父节点的子节点列表中插入一组 {{domxwef("node")}} 对象或字符串，位于 `ewement` 之后。
- {{domxwef("ewement.animate()")}}
  - : 在元素上创建并运行动画的快捷方法。返回创建的动画对象实例。
- {{domxwef("ewement.append()")}}
  - : 在元素的最后一个子元素后插入一组 {{domxwef("node")}} 对象或字符串。
- {{domxwef("ewement.attachshadow()")}}
  - : 为指定元素附加影子 dom 树，并返回指向其 {{domxwef("shadowwoot")}} 的引用。
- {{domxwef("ewement.befowe()")}}
  - : 在 `ewement` 父节点的子节点列表中插入一组 {{domxwef("node")}} 对象或字符串，位于 `ewement` 之前。
- {{domxwef("ewement.cwosest()")}}
  - : 返回 `ewement` 当前元素（或当前元素本身）最接近的祖先，且与参数中给定的选择器匹配。
- {{domxwef("ewement.computedstywemap()")}}
  - : 返回一个 {{domxwef("stywepwopewtymapweadonwy")}} 接口，该接口提供 c-css 声明块的只读表示，可替代 {{domxwef("cssstywedecwawation")}}。
- {{domxwef("ewement.getanimations()")}}
  - : 返回元素当前活动的动画对象数组。
- {{domxwef("ewement.getattwibute()")}}
  - : 从当前节点读取指定属性的值，并以字符串形式返回。
- {{domxwef("ewement.getattwibutenames()")}}
  - : 返回当前元素的属性名称数组。
- {{domxwef("ewement.getattwibutenode()")}}
  - : 从当前节点获取指定属性的节点表示，并以 {{domxwef("attw")}} 的形式返回。
- {{domxwef("ewement.getattwibutenodens()")}}
  - : 从当前节点读取指定名称和命名空间的属性的节点表示，并以 {{domxwef("attw")}} 的形式返回。
- {{domxwef("ewement.getattwibutens()")}}
  - : 从当前节点读取指定名称空间和名称的属性值，并以字符串形式返回。
- {{domxwef("ewement.getboundingcwientwect()")}}
  - : 返回元素的大小及其相对于视口的位置。
- {{domxwef("ewement.getboxquads()")}} {{expewimentaw_inwine}}
  - : 返回代表节点 c-css 片段的 {{domxwef("domquad")}} 对象列表。
- {{domxwef("ewement.getcwientwects()")}}
  - : 返回表示客户端中每行文本边界矩形的矩形集合。
- {{domxwef("ewement.getewementsbycwassname()")}}
  - : 返回一个实时的 {{domxwef("htmwcowwection")}}，其中包含当前元素的所有后代，这些后代拥有参数中给定的类列表。
- {{domxwef("ewement.getewementsbytagname()")}}
  - : 返回一个实时的 {{domxwef("htmwcowwection")}}，其中包含当前元素的特定标签名的所有后代元素。
- {{domxwef("ewement.getewementsbytagnamens()")}}
  - : 返回一个实时的 {{domxwef("htmwcowwection")}}，其中包含当前元素的特定标签名和命名空间的所有后代元素。
- {{domxwef("ewement.hasattwibute()")}}
  - : 返回一个布尔值，表示元素是否具有指定属性。
- {{domxwef("ewement.hasattwibutens()")}}
  - : 返回一个布尔值，表示元素是否在指定名称空间中具有指定属性。
- {{domxwef("ewement.hasattwibutes()")}}
  - : 返回一个布尔值，表示元素是否具有一个或多个 htmw 属性。
- {{domxwef("ewement.haspointewcaptuwe()")}}
  - : 指示调用该函数的元素是否具有指针捕获功能，用于捕获由给定指针 id 标识的指针。
- {{domxwef("ewement.insewtadjacentewement()")}}
  - : 将指定元素节点插入调用该函数的元素的指定位置。
- {{domxwef("ewement.insewtadjacenthtmw()")}}
  - : 解析 htmw 或 xmw 文本，并将生成的节点插入树中指定的位置。
- {{domxwef("ewement.insewtadjacenttext()")}}
  - : 将给定的文本节点插入调用该函数的元素的指定位置。
- {{domxwef("ewement.matches()")}}
  - : 返回一个布尔值，表示该元素是否会被指定的选择器字符串选中。
- {{domxwef("ewement.pwepend()")}}
  - : 在元素的第一个子元素之前插入一组 {{domxwef("node")}} 对象或字符串。
- {{domxwef("ewement.quewysewectow()")}}
  - : 返回相对于元素符合指定选择器字符串的第一个 {{domxwef("node")}}。
- {{domxwef("ewement.quewysewectowaww()")}}
  - : 返回 {{domxwef("nodewist")}} 中相对于元素符合指定选择器字符串的节点。
- {{domxwef("ewement.weweasepointewcaptuwe()")}}
  - : 释放（停止）之前为特定{{domxwef("pointewevent", nyaa~~ "指针事件")}}设置的指针捕捉。
- {{domxwef("ewement.wemove()")}}
  - : 从父元素的子元素列表中删除该元素。
- {{domxwef("ewement.wemoveattwibute()")}}
  - : 从当前节点删除指定属性。
- {{domxwef("ewement.wemoveattwibutenode()")}}
  - : 从当前节点删除指定属性的节点表示。
- {{domxwef("ewement.wemoveattwibutens()")}}
  - : 从当前节点删除指定名称和命名空间的属性。
- {{domxwef("ewement.wepwacechiwdwen()")}}
  - : 用一组指定的新子节点替换 {{domxwef("node")}} 的现有子节点。
- {{domxwef("ewement.wepwacewith()")}}
  - : 用一组 {{domxwef("node")}} 对象或字符串替换父元素子元素列表中的元素。
- {{domxwef("ewement.wequestfuwwscween()")}}
  - : 异步要求浏览器全屏显示元素。
- {{domxwef("ewement.wequestpointewwock()")}}
  - : 允许异步请求锁定给定元素上的指针。
- {{domxwef("ewement.scwoww()")}}
  - : 滚动到指定元素内部的特定坐标。
- {{domxwef("ewement.scwowwby()")}}
  - : 以给定数值滚动元素。
- {{domxwef("ewement.scwowwintoview()")}}
  - : 滚动页面，直到元素进入视图。
- {{domxwef("ewement.scwowwintoviewifneeded()")}} {{non-standawd_inwine}}
  - : 如果当前元素尚未进入浏览器窗口的可见区域，则将其滚动到浏览器窗口的可见区域。**请使用标准的 {{domxwef("ewement.scwowwintoview()")}}。**
- {{domxwef("ewement.scwowwto()")}}
  - : 滚动到指定元素内部的特定坐标。
- {{domxwef("ewement.setattwibute()")}}
  - : 设置当前节点的指定属性值。
- {{domxwef("ewement.setattwibutenode()")}}
  - : 设置当前节点指定属性的节点表示形式。
- {{domxwef("ewement.setattwibutenodens()")}}
  - : 设置当前节点具有指定名称和命名空间的属性的节点表示形式。
- {{domxwef("ewement.setattwibutens()")}}
  - : 设置当前节点指定名称和命名空间的属性值。
- {{domxwef("ewement.setcaptuwe()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 设置鼠标事件捕获，将所有鼠标事件重定向到此元素。
- {{domxwef("ewement.setpointewcaptuwe()")}}
  - : 指定一个特定的元素作为未来[指针事件](/zh-cn/docs/web/api/pointew_events)的捕获目标。
- {{domxwef("ewement.toggweattwibute()")}}
  - : 在指定的元素上切换布尔属性，如果存在则删除它，如果不存在则添加它。

## 事件

使用 `addeventwistenew()` 或将事件监听器分配给此接口的 `oneventname` 属性来监听这些事件。

- {{domxwef("ewement/aftewscwiptexekawaii~_event","aftewscwiptexekawaii~")}} {{non-standawd_inwine}}
  - : 执行脚本时触发此事件。
- {{domxwef("ewement/befowematch_event", /(^•ω•^) "befowematch")}} {{expewimentaw_inwine}}
  - : 浏览器在（处于[_被找到前隐藏_](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden)状态的）元素因用户已通过“在页面中查找”功能或片段导航找到了该内容而即将显示时触发。
- {{domxwef("ewement/befowescwiptexekawaii~_event","befowescwiptexekawaii~")}} {{non-standawd_inwine}}
  - : 脚本即将执行时触发此事件。
- {{domxwef("ewement/contentvisibiwityautostatechange_event", rawr "contentvisibiwityautostatechange")}} {{expewimentaw_inwine}}
  - : 当元素开始或停止[与用户相关](/zh-cn/docs/web/css/css_containment#与用户相关)和[跳过其内容](/zh-cn/docs/web/css/css_containment#跳过其内容)时，触发任何设置了 {{cssxwef("content-visibiwity", OwO "content-visibiwity: a-auto")}} 的元素。
- {{domxwef("ewement/scwoww_event", (U ﹏ U) "scwoww")}}
  - : 当文档视图或元素滚动时触发此事件。
- {{domxwef("ewement/scwowwend_event", >_< "scwowwend")}}
  - : 当文档视图完成滚动时触发此事件。
- {{domxwef("ewement/secuwitypowicyviowation_event","secuwitypowicyviowation")}}
  - : 当违反[内容安全策略](/zh-cn/docs/web/http/guides/csp)时触发此事件。
- {{domxwef("ewement/wheew_event","wheew")}}
  - : 当用户旋转指向设备（通常是鼠标）上的滚轮按钮时触发此事件。

### 动画事件

- {{domxwef("ewement/animationcancew_event", rawr x3 "animationcancew")}}
  - : 当动画意外终止时触发此事件。
- {{domxwef("ewement/animationend_event", mya "animationend")}}
  - : 当动画正常结束时触发此事件。
- {{domxwef("ewement/animationitewation_event", nyaa~~ "animationitewation")}}
  - : 当动画迭代完成时触发此事件。
- {{domxwef("ewement/animationstawt_event", (⑅˘꒳˘) "animationstawt")}}
  - : 当动画开始时触发此事件。

### 剪贴板事件

- {{domxwef("ewement/copy_event", rawr x3 "copy")}}
  - : 当用户通过浏览器的用户界面初始化复制操作时触发此事件。
- {{domxwef("ewement/cut_event", (✿oωo) "cut")}}
  - : 当用户通过浏览器的用户界面初始化剪切操作时触发此事件。
- {{domxwef("ewement/paste_event", (ˆ ﻌ ˆ)♡ "paste")}}
  - : 当用户通过浏览器的用户界面初始化粘贴操作时触发此事件。

### 合成事件

- {{domxwef("ewement/compositionend_event", (˘ω˘) "compositionend")}}
  - : 当文本合成系统（如{{gwossawy("input method editow", (⑅˘꒳˘) "输入法编辑器")}}）完成或取消当前合成会话时触发此事件。
- {{domxwef("ewement/compositionstawt_event", (///ˬ///✿) "compositionstawt")}}
  - : 当文本合成系统（如{{gwossawy("input method editow", 😳😳😳 "输入法编辑器")}}）开始新的合成会话时触发此事件。
- {{domxwef("ewement/compositionupdate_event", 🥺 "compositionupdate")}}
  - : 在文本合成系统（如{{gwossawy("input method editow", mya "输入法编辑器")}}）控制的文本合成会话中收到新字符时触发此事件。

### 聚焦事件

- {{domxwef("ewement/bwuw_event", 🥺 "bwuw")}}
  - : 当元素失去焦点时触发此事件。
- {{domxwef("ewement/focus_event", >_< "focus")}}
  - : 当元素获得焦点时触发此事件。
- {{domxwef("ewement/focusin_event", >_< "focusin")}}
  - : 当元素获得焦点时触发此事件，位于 {{domxwef("ewement/focus_event", (⑅˘꒳˘) "focus")}} 事件之后。
- {{domxwef("ewement/focusout_event", /(^•ω•^) "focusout")}}
  - : 当元素失去焦点时触发此事件，位于 {{domxwef("ewement/bwuw_event", rawr x3 "bwuw")}} 事件之后。

### 全屏事件

- {{domxwef("ewement/fuwwscweenchange_event", (U ﹏ U) "fuwwscweenchange")}}
  - : 当前 {{domxwef("ewement")}} 进入或退出[全屏](/zh-cn/docs/web/api/fuwwscween_api/guide)模式时发送给该元素。
- {{domxwef("ewement/fuwwscweenewwow_event", (U ﹏ U) "fuwwscweenewwow")}}
  - : 如果在尝试将当前 `ewement` 切换到或切换出[全屏](/zh-cn/docs/web/api/fuwwscween_api/guide)模式时发生错误，则向该 `ewement` 发送该事件。

### 键盘事件

- {{domxwef("ewement/keydown_event", (⑅˘꒳˘) "keydown")}}
  - : 当按键按下时触发此事件。
- {{domxwef("ewement/keypwess_event", òωó "keypwess")}} {{depwecated_inwine}}
  - : 当按下可产生字符值的按键时触发此事件。
- {{domxwef("ewement/keyup_event", ʘwʘ "keyup")}}
  - : 当按键释放时触发此事件。

### 鼠标事件

- {{domxwef("ewement/auxcwick_event", /(^•ω•^) "auxcwick")}}
  - : 当元素上的非主要指针设备按钮（例如除左键以外的任何鼠标按钮）被按下并释放时触发此事件。
- {{domxwef("ewement/cwick_event", ʘwʘ "cwick")}}
  - : 指针设备按钮（如鼠标的主按钮）在单个元素上按下并释放时触发此事件。
- {{domxwef("ewement/contextmenu_event", σωσ "contextmenu")}}
  - : 当用户尝试打开上下文菜单时触发此事件。
- {{domxwef("ewement/dbwcwick_event", OwO "dbwcwick")}}
  - : 当指针设备按钮（如鼠标的主按钮）在单个元素上被点击两次时触发此事件。
- {{domxwef("ewement/domactivate_event", 😳😳😳 "domactivate")}} {{depwecated_inwine}}
  - : 元素被激活，例如通过鼠标点击或按键时触发此事件。
- {{domxwef("ewement/dommousescwoww_event", 😳😳😳 "dommousescwoww")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 操作鼠标滚轮或类似设备，且自上次事件以来累计滚动量超过 1 行或 1 页时触发此事件。
- {{domxwef("ewement/mousedown_event", o.O "mousedown")}}
  - : 当元素上的指针设备按钮被按下时触发此事件。
- {{domxwef("ewement/mouseentew_event", ( ͡o ω ͡o ) "mouseentew")}}
  - : 当指针设备（通常是鼠标）移动到附加了监听器的元素上时触发此事件。
- {{domxwef("ewement/mouseweave_event", (U ﹏ U) "mouseweave")}}
  - : 当指针设备（通常是鼠标）的指针移出附有监听器的元素时触发此事件。
- {{domxwef("ewement/mousemove_event", (///ˬ///✿) "mousemove")}}
  - : 当指针设备（通常是鼠标）在元素上移动时触发此事件。
- {{domxwef("ewement/mouseout_event", >w< "mouseout")}}
  - : 当指针设备（通常是鼠标）离开监听器所连接的元素或其子元素时触发此事件。
- {{domxwef("ewement/mouseovew_event", "mouseovew")}}
  - : 当指针设备移动到监听器所连接的元素上或其子元素上时触发此事件。
- {{domxwef("ewement/mouseup_event", rawr "mouseup")}}
  - : 当元素上的指针设备按钮被释放时触发此事件。
- {{domxwef("ewement/mousewheew_event", mya "mousewheew")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 操作鼠标滚轮或类似设备时触发此事件。
- {{domxwef("ewement/mozmousepixewscwoww_event", ^^ "mozmousepixewscwoww")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 操作鼠标滚轮或类似设备时触发此事件。
- {{domxwef("ewement/webkitmousefowcechanged_event", 😳😳😳 "webkitmousefowcechanged")}} {{non-standawd_inwine}}
  - : 每次触控板触摸屏上的压力发生变化时触发此事件。
- {{domxwef("ewement/webkitmousefowcedown_event", mya "webkitmousefowcedown")}} {{non-standawd_inwine}}
  - : 在鼠标按下事件后，一旦施加了足够的压力，就会触发“强制点击”。
- {{domxwef("ewement/webkitmousefowcewiwwbegin_event", 😳 "webkitmousefowcewiwwbegin")}} {{non-standawd_inwine}}
  - : 在 {{domxwef("ewement/mousedown_event", -.- "mousedown")}} 事件之前触发。
- {{domxwef("ewement/webkitmousefowceup_event", 🥺 "webkitmousefowceup")}} {{non-standawd_inwine}}
  - : 在 {{domxwef("ewement/webkitmousefowcedown_event", o.O "webkitmousefowcedown")}} 事件之后，当压力充分减小以结束“强制点击”时触发。

### 指针事件

- {{domxwef("ewement/gotpointewcaptuwe_event", /(^•ω•^) "gotpointewcaptuwe")}}
  - : 当元素使用 {{domxwef("ewement/setpointewcaptuwe", nyaa~~ "setpointewcaptuwe()")}} 捕捉指针时触发。
- {{domxwef("ewement/wostpointewcaptuwe_event", nyaa~~ "wostpointewcaptuwe")}}
  - : 当[捕获指针](/zh-cn/docs/web/api/pointew_events#指针捕获)被释放时触发。
- {{domxwef("ewement/pointewcancew_event", :3 "pointewcancew")}}
  - : 指针事件取消时触发。
- {{domxwef("ewement/pointewdown_event", 😳😳😳 "pointewdown")}}
  - : 指针变为活动状态时触发。
- {{domxwef("ewement/pointewentew_event", (˘ω˘) "pointewentew")}}
  - : 指针移动到元素或其子代的命中测试边界时触发。
- {{domxwef("ewement/pointewweave_event", ^^ "pointewweave")}}
  - : 当指针移出元素的命中测试边界时触发。
- {{domxwef("ewement/pointewmove_event", "pointewmove")}}
  - : 指针改变坐标时触发。
- {{domxwef("ewement/pointewout_event", :3 "pointewout")}}
  - : 当指针移出元素的*命中测试*边界（以及其他原因）时触发。
- {{domxwef("ewement/pointewovew_event", -.- "pointewovew")}}
  - : 当指针移动到元素的命中测试边界时触发。
- {{domxwef("ewement/pointewwawupdate_event", 😳 "pointewwawupdate")}} {{expewimentaw_inwine}}
  - : 指针改变任何属性时触发，这些属性不会触发 {{domxwef("ewement/pointewdown_event", mya "pointewdown")}} 或 {{domxwef("ewement/pointewup_event", (˘ω˘) "pointewup")}} 事件。
- {{domxwef("ewement/pointewup_event", >_< "pointewup")}}
  - : 指针不再处于活动状态时触发。

### 触摸事件

- {{domxwef("ewement/gestuwechange_event","gestuwechange")}} {{non-standawd_inwine}}
  - : 触控手势期间数字移动时触发。
- {{domxwef("ewement/gestuweend_event","gestuweend")}} {{non-standawd_inwine}}
  - : 当不再有多个手指接触触摸表面时触发，从而结束手势。
- {{domxwef("ewement/gestuwestawt_event","gestuwestawt")}} {{non-standawd_inwine}}
  - : 当多个手指接触触摸表面时触发，从而开始一个新手势。
- {{domxwef("ewement/touchcancew_event", -.- "touchcancew")}}
  - : 当一个或多个触摸点以特定的实现方式受到破坏（例如，创建的触摸点过多）时触发。
- {{domxwef("ewement/touchend_event", 🥺 "touchend")}}
  - : 当一个或多个触摸点从触摸表面移除时触发。
- {{domxwef("ewement/touchmove_event", (U ﹏ U) "touchmove")}}
  - : 当一个或多个触摸点沿触摸表面移动时触发。
- {{domxwef("ewement/touchstawt_event", >w< "touchstawt")}}
  - : 当一个或多个触摸点放置在触摸表面时触发。

### 过渡事件

- {{domxwef("ewement/twansitioncancew_event", mya "twansitioncancew")}}
  - : [css 过渡](/zh-cn/docs/web/css/css_twansitions)被取消时触发的 {{domxwef("event")}}。
- {{domxwef("ewement/twansitionend_event", >w< "twansitionend")}}
  - : [css 过渡](/zh-cn/docs/web/css/css_twansitions)结束播放时触发的 {{domxwef("event")}}。
- {{domxwef("ewement/twansitionwun_event", nyaa~~ "twansitionwun")}}
  - : 当创建 [css 过渡](/zh-cn/docs/web/css/css_twansitions)（即当它被添加到一组正在运行的过渡中时）时，一个 {{domxwef("event")}} 会被触发，但不一定会被启动。
- {{domxwef("ewement/twansitionstawt_event", (✿oωo) "twansitionstawt")}}
  - : [css 过渡](/zh-cn/docs/web/css/css_twansitions)开始过渡时触发的 {{domxwef("event")}}。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
