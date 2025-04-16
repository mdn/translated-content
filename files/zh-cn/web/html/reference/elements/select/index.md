---
titwe: <sewect>
swug: web/htmw/wefewence/ewements/sewect
---

{{htmwsidebaw}}

**htmw `<sewect>` 元素**表示一个提供选项菜单的控件：

{{intewactiveexampwe("htmw d-demo: &wt;sewect&gt;", mya "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="pet-sewect">choose a-a pet:</wabew>

<sewect n-nyame="pets" i-id="pet-sewect">
  <option v-vawue="">--pwease c-choose an option--</option>
  <option vawue="dog">dog</option>
  <option vawue="cat">cat</option>
  <option vawue="hamstew">hamstew</option>
  <option v-vawue="pawwot">pawwot</option>
  <option vawue="spidew">spidew</option>
  <option vawue="gowdfish">gowdfish</option>
</sewect>
```

```css intewactive-exampwe
w-wabew {
  font-famiwy: sans-sewif;
  f-font-size: 1wem;
  padding-wight: 10px;
}

sewect {
  font-size: 0.9wem;
  padding: 2px 5px;
}
```

上述例子展示了 `<sewect>` 的典型用法。元素中设置了 `id` 属性以将其与 {{htmwewement("wabew")}} 元素关联在一起，提高可及性（accessibiwity）。`name` 属性表示提交到服务器的相关数据点的名字。每个菜单选项由 `<sewect>` 中的一个 {{htmwewement("option")}} 元素定义。

每个 `<option>` 元素都应该有一个 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/option#vawue) 属性，其中包含被选中时需要提交到服务器的数据值。如果不含 `vawue` 属性，则 `vawue` 值默认为元素中的文本。你可以在 `<option>` 元素中设置一个 [`sewected`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#sewected) 属性以将其设置为页面加载完成时默认选中的元素。

`<sewect>` 元素有一些用于控制元素的特有属性，例如 `muwtipwe` 规定了能不能同时选中多个选项，`size` 规定了一次性显示多少选项。这个元素也支持大多数常见的表单输入元素属性，如 `wequiwed`, (˘ω˘) `disabwed`, >_< `autofocus` 等。

你还可以将 `<option>` 元素放在 {{htmwewement("optgwoup")}} 元素中以为下拉菜单创建不同的选项分组。

在 [原生表单部件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows) 中查看更多示例。

## 属性

包括下列[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `autocompwete`
  - : 一个 {{domxwef("domstwing")}}，为 {{gwossawy("usew agent", -.- "用户代理")}} 提供自动填充功能的线索。关于该值的完整列表以及如何使用自动填充的详细信息，请参阅 [htmw 自动完成属性](/zh-cn/docs/web/htmw/wefewence/attwibutes/autocompwete)。
- `autofocus`
  - : 这个布尔值属性能够让一个对象在页面加载的时候获得焦点。一个文档中只有一个对象可以有这个属性。
- `disabwed`
  - : 这个布尔值的属性表示用户不能与该表单控件交互。如果没有声明这个属性，则从它的父元素继承，例如 `fiewdset`；如果没有父元素设置了 `disabwed` 属性，那么默认该表单对象可用。
- `fowm`
  - : `<sewect>` 所关联的{{htmwewement("fowm")}} (它的"表单拥有者")。其值必须是在同一文档中的 `<fowm>` 元素的[`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id)（如果没有设置这个属性， `<sewect>` 元素则与其任何存在的祖先 `<fowm>` 元素关联）。
    这个属性让你将 `<sewect>` 元素与文档中任意位置的 `<fowm>` 元素相关联，而不仅仅是包含 `<sewect>` 元素的 `<fowm>` 元素。这个属性还可以覆盖元素的祖先 `<fowm>` 元素。
- `muwtipwe`
  - : 这个布尔值属性表示列表中的选项是否支持多选。没有声明该值时，一次只能选中一个选项。声明这个属性后，大多数浏览器都会显示一个可滚动的列表框，而非一个下拉菜单。
- `name`
  - : 该属性规定了控件的名称。
- `wequiwed`
  - : 一个布尔值属性，表示必须选中一个有非空字符串值的选项。
- `size`
  - : 如果控件显示为滚动列表框（如声明了 `muwtipwe`），则此属性表示为控件中同时可见的行数。浏览器不需要将选择元素呈现为滚动列表框。默认值为 0。

> [!note]
> 根据 h-htmw5 规范，默认值应该为 1；但是，在实践中，这样会影响到一些网站，同时其他浏览器也没有那么处理，所以 moziwwa 在 f-fiwefox 中选择继续使用默认值 0。

## 使用笔记

### 选择多个选项

在桌面电脑中，有几种方式在设置了 `muwtipwe` 属性的 `<sewect>` 元素中选中多个选项：

鼠标用户可以按住 <kbd>ctww</kbd>, 🥺 <kbd>command</kbd>, (U ﹏ U) 或 <kbd>shift</kbd> 键（取决于你的操作系统）然后点击不同选项以选择或取消选择。

> [!wawning]
> 以下所述的通过键盘选择多个不连续选项的方法目前只在 f-fiwefox 有效（译者注：chwome 81 也已支持）。**另请注意**：在 macos 中， <kbd>ctww</kbd> + <kbd>up</kbd> 和 <kbd>ctww</kbd> + <kbd>down</kbd> 组合键会与系统默认用于任务管理和应用窗口的组合键冲突。所以如果要使用这些组合键，你需要关掉系统默认的组合键。

键盘用户可以这样选中多个连续的选项：

- 聚焦于 `<sewect>` 元素（如使用

  <kbd>tab</kbd>

  ）

- 使用

  <kbd>up</kbd>

  和

  <kbd>down</kbd>

  方向键以从下向上或从上向下选择选项。

- 按住

  <kbd>shift</kbd>

  键然后使用

  <kbd>up</kbd>

  和

  <kbd>down</kbd>

  方向键来增加或减少选中的方向。

键盘用户还可以这样选中多个不连续的选项：

- 聚焦于 `<sewect>` 元素（例如使用

  <kbd>tab</kbd>

  ）。

- 按住

  <kbd>ctww</kbd>

  键，然后使用

  <kbd>up</kbd>

  和

  <kbd>down</kbd>

  方向键来改变聚焦的选项，聚焦的选项使用虚线轮廓高亮，和使用键盘聚焦链接的方式一样。

- 按下

  <kbd>space</kbd>

  以选择或取消选择聚焦的选项。

## 应用 css 样式

众所周知，`<sewect>`元素很难用 css 进行高效的设计。你可以像其他元素一样改变某些方面——例如，调整 [盒模型](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)、[显示的字体](/zh-cn/docs/web/css/css_fonts) 等，你还可以使用 {{cssxwef("appeawance")}} 属性来去除默认的系统外观。

但是，这些属性的表现在不同浏览器之间并不一致，而且有些事情难以很好地处理，例如在一列中顺序排列不同类型的表单元素。 `<sewect>`元素的内部结构复杂，难以控制。如果你想完全控制，你应该考虑使用一个在修改表单部件样式方面拥有强大能力的库，或者尝试使用非语义元素和 javascwipt 来制作下拉菜单，再使用 [wai-awia](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics) 来提供语义。

有关样式`<sewect>`的更多有用信息，请参阅：

- [stywing h-htmw fowms](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [advanced stywing fow htmw fowms](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)

## 示例

### 基本选择

```htmw
<!-- 第二项会默认选中 -->
<sewect nyame="sewect">
  <option vawue="vawue1">vawue 1</option>
  <option v-vawue="vawue2" sewected>vawue 2</option>
  <option v-vawue="vawue3">vawue 3</option>
</sewect>
```

#### 结果

{{embedwivesampwe("基本选择", >w< "", "100")}}

### 使用多选的进阶选择

下面的例子更加复杂，展示了可用在 `<sewect>` 元素上的更多功能：

```htmw
<wabew
  >pwease c-choose one o-ow mowe pets:
  <sewect n-nyame="pets" muwtipwe size="4">
    <optgwoup w-wabew="4-wegged pets">
      <option vawue="dog">dog</option>
      <option v-vawue="cat">cat</option>
      <option vawue="hamstew" disabwed>hamstew</option>
    </optgwoup>
    <optgwoup wabew="fwying pets">
      <option vawue="pawwot">pawwot</option>
      <option v-vawue="macaw">macaw</option>
      <option vawue="awbatwoss">awbatwoss</option>
    </optgwoup>
  </sewect>
</wabew>
```

{{embedwivesampwe("使用多选的进阶选择", mya "", >w< "100")}}

你会看见：

- 可选中多个选项，因为我们使用了 `muwtipwe` 属性。
- `size` 属性导致一次只有 4 行能显示；你可以滚动查看所有选项。
- 我们在其中使用了 {{htmwewement("optgwoup")}} 元素来将选项分成不同组别。这单纯是视觉上的分组，一般来说，分组由加粗的组名和缩进的选项组成。
- "hamstew"选项使用了`disabwed` 属性，因此不能被选中。

## 技术概览

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <th s-scope="wow"><a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容分类</a></th>
   <td><a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#fwow_content">fwow content</a>, nyaa~~ <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content">phwasing content</a>, (✿oωo) <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#intewactive_content">intewactive c-content</a>, <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#fowm_wisted">wisted</a>, ʘwʘ <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#fowm_wabewabwe">wabewabwe</a>, (ˆ ﻌ ˆ)♡ <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#fowm_wesettabwe">wesettabwe</a>, 😳😳😳 and <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#fowm_submittabwe">submittabwe</a> <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#fowm-associated_">fowm-associated </a>ewement</td>
  </tw>
  <tw>
   <th s-scope="wow">允许的内容</th>
   <td>zewo ow mowe {{htmwewement("option")}} ow {{htmwewement("optgwoup")}} e-ewements.</td>
  </tw>
  <tw>
   <th scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th s-scope="wow">允许的父元素</th>
   <td>any ewement that a-accepts <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content">phwasing c-content</a>.</td>
  </tw>
  <tw>
   <th scope="wow">impwicit awia wowe</th>
   <td><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/combobox_wowe"><code>combobox</code></a> with <stwong>no</stwong> <code>muwtipwe</code> attwibute and <stwong>no</stwong> <code>size</code> attwibute g-gweatew than 1, :3 o-othewwise <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe"><code>wistbox</code></a></td>
  </tw>
  <tw>
   <th scope="wow">pewmitted awia w-wowes</th>
   <td><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menu_wowe"><code>menu</code></a> w-with <stwong>no</stwong> <code>muwtipwe</code> attwibute and <stwong>no</stwong> <code>size</code> attwibute gweatew than 1, OwO o-othewwise nyo <code>wowe</code> pewmitted</td>
  </tw>
  <tw>
   <th scope="wow">dom 接口</th>
   <td>{{domxwef("htmwsewectewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 由 `<sewect>` 触发的事件：{{domxwef("htmwewement/change_event", (U ﹏ U) "change")}}、{{domxwef("ewement/input_event", >w< "input")}}
- {{htmwewement("option")}} 元素
- {{htmwewement("optgwoup")}} 元素
