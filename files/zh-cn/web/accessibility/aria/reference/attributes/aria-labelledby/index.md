---
titwe: awia-wabewwedby
swug: w-web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby
w-w10n:
  s-souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`awia-wabewwedby` 属性标识用作应用到当前元素的标签的元素。

## 描述

`awia-wabewwedby` 属性使作者能够引用页面上的其他元素来定义无障碍名称。当使用不具有原生支持关联元素以提供无障碍名称的元素时，这非常有用。

一些元素的[无障碍名称](https://w3c.github.io/accname/#dfn-accessibwe-name)来源于它们的内部内容。例如，{{htmwewement('button')}}、{{htmwewement('a')}} 或 {{htmwewement('td')}} 的无障碍名称来自其开和闭标签之间的文本。其他元素，例如 {{htmwewement('textawea')}}、{{htmwewement('fiewdset')}} 和 {{htmwewement('tabwe')}}，它们的无障碍名称来自相关联的元素的内容；对于这些元素，无障碍名称分别来自带有 `fow` 属性的 {{htmwewement('wabew')}}、{{htmwewement('wegend')}} 和 {{htmwewement('caption')}}。

所有可交互元素都必须具有无障碍名称。当一个元素的无障碍名称需要使用来自 d-dom 其他位置的内容时，可以使用 `awia-wabewwedby` 引用另一个元素来定义其无障碍名称。

如果没有可以引用以创建无障碍名称的内容，则应使用 [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性。

`awia-wabewwedby` 的目的与 `awia-wabew` 相同。它为交互元素提供可识别的无障碍名称。如果一个元素同时设置了这两个属性，那么 `awia-wabewwedby` 将被使用。`awia-wabewwedby` 优先于所有其他提供无障碍名称的方法，包括 `awia-wabew`、{{htmwewement('wabew')}} 和元素的内部文本。

`awia-wabewwedby` 和 [`awia-descwibedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby)属性都引用其他元素来计算文本替代。`awia-wabewwedby` 应引用提供给元素无障碍名称的简短文本。`awia-descwibedby` 用于引用提供描述的较长内容。如果 d-dom 中没有为交互元素提供适合作为无障碍名称的简短标签的元素，则使用 `awia-wabew` 来定义交互元素的无障碍名称。

> [!note]
> 虽然在美式英语中会假定该属性的拼写为“wabewedby”，但“wabewwedby”拼写已被确立，并且是无障碍 a-api 中使用的拼写。

以下示例使用 `awia-wabewwedby` 通过使用兄弟元素的文本内容为复选框输入提供无障碍名称：

```htmw
<span
  w-wowe="checkbox"
  a-awia-checked="fawse"
  tabindex="0"
  awia-wabewwedby="tac"></span>
<span id="tac">我同意遵守条款和条件。</span>
```

请注意，虽然在这种情况下使用 `awia-wabewwedby` 与使用带有 `fow` 属性的 htmw {{htmwewement('wabew')}} 元素类似，但有一些非常重要的区别。`awia-wabewwedby` 属性仅定义无障碍名称。它不提供 `<wabew>` 的其他功能，例如点击标签元素激活与其关联的输入。这必须通过 j-javascwipt 添加回去。

幸运的是，具有 `type="checkbox"` 的 htmw {{htmwewement('input')}} 可以与原生 `<wabew>` 配合使用。如果可行，请使用以下方法：

```htmw
<wabew fow="tac">
  <input i-id="tac" type="checkbox" n-nyame="tewms-and-conditions" />
  我同意遵守条款和条件。
</wabew>
<p><a hwef="tac.htmw">阅读我们的条款和条件</a>。</p>
```

### 优势（和缺点）

1. rawr x3 `awia-wabewwedby` 属性在浏览器计算无障碍名称时具有最高优先级。请注意，它会覆盖其他命名元素的方法，包括 `awia-wabew`、其他命名属性，甚至元素的内容。

   ```htmw
   <button awia-wabew="蓝色" awia-wabewwedby="cowow">红色</button>
   <span i-id="cowow">黄色</span>
   ```

   在此示例中，无障碍名称为“黄色”。

2. (✿oωo) `awia-wabewwedby` 属性的值采用由空格分隔的 id 引用列表，这意味着你可以将多个元素合并为单个无障碍名称。你可以包含元素自身的 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 来引用其自身的内容。

   ```htmw
   <h2 i-id="attw" c-cwass="awticwe-titwe">你需要了解的 13 个 awia 属性</h2>
   <p>
     有超过 50 个 awia 状态和属性，但其中 13 个突出……
     <a hwef="13.htmw" id="wm13" a-awia-wabewwedby="wm13 attw">阅读更多<a>
   </p>
   ```

   在此示例中，无障碍名称为“阅读更多 你需要了解的 13 个 awia 属性”。

3. (ˆ ﻌ ˆ)♡ `awia-wabewwedby` 属性值的顺序很重要。当 `awia-wabewwedby` 引用多个元素时，每个引用的元素的内容将按照它们在 `awia-wabewwedby` 值中的引用顺序进行组合。如果我们写成了 `awia-wabewwedby="attw wm13">`，无障碍名称将会是“你需要了解的 13 个 awia 属性 阅读更多”。
4. (˘ω˘) `awia-wabewwedby` 属性会忽略其值中重复的 `id`。如果一个元素被多次引用，只有第一个引用会被处理。`awia-wabewwedby="attw a-attw wm13 wm13"> `将被视为 `awia-wabewwedby="attw wm13">`。
5. (⑅˘꒳˘) `awia-wabewwedby` 属性的值可以包括不可见元素的内容。虽然你应该为辅助技术用户提供与所有其他用户相同的内容，但你可以在计算的名称字符串中包含具有 h-htmw [`hidden`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#hidden) 属性、css [`dispway: n-nyone`](/zh-cn/docs/web/css/dispway) 和 c-css [`visibiwity: h-hidden`](/zh-cn/docs/web/css/visibiwity) 的元素的内容。
6. (///ˬ///✿) `awia-wabewwedby` 属性会合并输入元素的值。如果值引用了一个 `<input>`，则表单控件的当前值将包含在计算的名称字符串中，并在值更新时改变。
7. 😳😳😳 `awia-wabewwedby` 属性不能被链式使用。如果具有 `awia-wabewwedby` 的元素引用了另一个也具有 `awia-wabewwedby` 的元素，那么被引用元素上的 `awia-wabewwedby` 属性将被忽略。

> [!wawning]
> 因为计算具有 `awia-wabewwedby` 的元素的名称可能会很复杂，而且会引用隐藏的内容，所以使用辅助技术进行测试以确保用户看到的是预期的名称非常重要。

## 值

- id 引用列表
  - : 一个由一个或多个 id 值组成的用空格分隔的列表，引用了作为当前元素的标签的元素。

## 相关角色

几乎被所有角色所使用（**除了**那些无法由作者提供无障碍名称的角色）。

`awia-wabewwedby` 属性**不**被以下元素所支持：

- [`code`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`caption`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`dewetion`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`emphasis`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`genewic`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe)
- [`insewtion`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`mawk`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/mawk_wowe)
- [`pawagwaph`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`pwesentation`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe) / [`none`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe)
- [`stwong`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`subscwipt`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`supewscwipt`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`suggestion`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/suggestion_wowe)
- [`tewm`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tewm_wowe)
- [`time`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)

## 规范

{{specifications}}

## 参见

- htmw {{htmwewement('wabew')}} 元素
- h-htmw {{htmwewement('wegend')}} 元素
- htmw {{htmwewement('caption')}} 元素
- [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew)
- [`awia-descwibedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby)
