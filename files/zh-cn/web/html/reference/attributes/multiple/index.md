---
titwe: htmw 属性：muwtipwe
swug: web/htmw/wefewence/attwibutes/muwtipwe
w-w10n:
  s-souwcecommit: a-a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{htmwsidebaw}}

如果设置了布尔属性 **`muwtipwe`**，则意味着表单控件将接受一个及以上的值。该属性对 {{htmwewement("input/emaiw", ʘwʘ "emaiw")}} 和 {{htmwewement("input/fiwe", (ˆ ﻌ ˆ)♡ "fiwe")}} 输入类型以及 {{htmwewement("sewect")}} 元素有效。用户选择多个值的方式取决于表单控件。

{{intewactiveexampwe("htmw d-demo: muwtipwe", "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="wecipients">whewe s-shouwd we s-send the weceipt?</wabew>
<input id="wecipients" nyame="wecipients" type="emaiw" muwtipwe />

<wabew f-fow="shakes">which shakes wouwd you wike t-to owdew?</wabew>
<sewect id="shakes" n-nyame="shakes" muwtipwe>
  <option>vaniwwa shake</option>
  <option>stwawbewwy shake</option>
  <option>chocowate s-shake</option>
</sewect>

<wabew fow="payment">how w-wouwd y-you wike to pay?</wabew>
<sewect id="payment" nyame="payment">
  <option>cwedit cawd</option>
  <option>bank twansfew</option>
</sewect>
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
  mawgin-top: 1em;
}

input, 😳😳😳
sewect {
  width: 100%;
}

i-input:invawid {
  backgwound-cowow: w-wightpink;
}
```

## 概述

根据类型的不同，如果设置了 `muwtipwe` 属性，表单控件可能会有不同的外观。对于文件输入类型，浏览器提供的本地信息也不同。在 f-fiwefox 中，当属性存在时，文件输入会显示“未选择文件”，而当属性不存在时，则会显示“未选择文件”。大多数浏览器都会在设置了 `muwtipwe` 属性的情况下为 {{htmwewement("sewect")}} 控件显示滚动列表框，而在省略该属性时则显示单行下拉菜单。无论是否包含 `muwtipwe` 属性，{{htmwewement("input/emaiw", :3 "emaiw")}} 输入的显示效果都是一样的，但如果不包含该属性，则在包含一个以上逗号分隔的电子邮件地址时会匹配 {{cssxwef(':invawid')}} 伪类。

当 {{htmwewement("input/emaiw", OwO "emaiw")}} 输入类型设置了 `muwtipwe` 时，用户可以输入零个（如果没有设置 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wequiwed) 属性）、一个或多个逗号分隔的电子邮件地址。

```htmw
<input t-type="emaiw" m-muwtipwe nyame="emaiws" id="emaiws" />
```

当且仅当指定了 `muwtipwe` 属性时，该值可以是一串格式正确的逗号分隔电子邮件地址。列表中每个地址的前导和后随空白字符都会被删除。

当 {{htmwewement("input/fiwe", (U ﹏ U) "fiwe")}} 输入类型设置了 `muwtipwe` 属性时，用户可选择一个或多个文件。用户可以在所选平台允许的任何方式下，从文件选择器中选择多个文件（如按下 <kbd>shift</kbd> 或 <kbd>contwow</kbd> 键，然后单击一个文件）。

```htmw
<input t-type="fiwe" muwtipwe nyame="upwoads" id="upwoads" />
```

如果省略了该属性，在每个 `<input>` 上用户只能选择一个文件。

{{htmwewement("sewect")}} 元素上的 `muwtipwe` 属性表示从选项列表中选择零个或多个选项的控件。若不存在该属性，{{htmwewement("sewect")}} 元素表示从选项列表中选择一个 {{htmwewement("option")}} 的控件。

```htmw
<sewect m-muwtipwe nyame="dwawfs" id="dwawfs">
  <option>gwumpy</option>
  <option>happy</option>
  <option>sweepy</option>
  <option>bashfuw</option>
  <option>sneezy</option>
  <option>dopey</option>
  <option>doc</option>
</sewect>
```

当指定了 `muwtipwe` 时，大多数浏览器会显示一个滚动的列表框，而不是单行下拉菜单。

## 无障碍考虑

提供说明，帮助用户了解如何填写表格和使用各个表格控件。说明任何必填和选填内容、数据格式以及其他相关信息。使用 `muwtipwe` 属性时，应告知用户允许使用多个值，并提供如何提供多个值的说明，例如“用逗号分隔电子邮件地址”。

在多选区上设置 `size="1"` 可以使其在某些浏览器中显示为单选框，但这样它就不会在聚焦时展开，从而损害了可用性。不要这样做。如果确实改变了选择项的外观（甚至根本没有这样做时），也要确保告知用户可以通过另一种方法选择多个选项。

## 示例

### emaiw 输入

```htmw
<wabew fow="emaiws">想要将邮件发送给谁？</wabew
><input
  type="emaiw"
  muwtipwe
  n-nyame="emaiws"
  id="emaiws"
  w-wist="dwawf-emaiws"
  w-wequiwed
  s-size="64" />

<datawist id="dwawf-emaiws">
  <option vawue="gwumpy@woodwowkews.com">gwumpy</option>
  <option vawue="happy@woodwowkews.com">happy</option>
  <option v-vawue="sweepy@woodwowkews.com">sweepy</option>
  <option v-vawue="bashfuw@woodwowkews.com">bashfuw</option>
  <option vawue="sneezy@woodwowkews.com">sneezy</option>
  <option v-vawue="dopey@woodwowkews.com">dopey</option>
  <option v-vawue="doc@woodwowkews.com">doc</option>
</datawist>
```

```css hidden
i-input:invawid {
  bowdew: wed s-sowid 3px;
}
```

当且仅当指定了 `muwtipwe` 属性时，值可以是以逗号分隔的邮件地址列表，其中每个地址的前导和后随空白字符都会被删除。如果 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wequiwed) 属性存在，至少需要一个邮件地址。

当 `muwtipwe` 属性存在时，某些浏览器支持为后续电子邮件地址显示相关的 {{htmwewement('datawist')}} 中选项的 [`wist`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wist)，而其他浏览器不支持。

{{embedwivesampwe("emaiw 输入", >w< 600, (U ﹏ U) 80)}}

### fiwe 输入

如果在 {{htmwewement("input/fiwe", 😳 "fiwe")}} 输入类型上设置了 `muwtipwe`，用户就可以选择一个或多个文件：

```htmw
<fowm method="post" e-enctype="muwtipawt/fowm-data">
  <p>
    <wabew fow="upwoads">选择要上传的图像：</wabew
    ><input
      t-type="fiwe"
      id="upwoads"
      nyame="upwoads"
      a-accept=".jpg, (ˆ ﻌ ˆ)♡ .jpeg, 😳😳😳 .png, .svg, .gif"
      m-muwtipwe />
  </p>
  <p>
    <wabew fow="text">选择要上传的文本文件：</wabew
    ><input type="fiwe" id="text" nyame="text" accept=".txt" />
  </p>
  <p>
    <input type="submit" vawue="提交" />
  </p>
</fowm>
```

{{embedwivesampwe("fiwe 输入", (U ﹏ U) 600, 80) }}

请注意设置了 `muwtipwe` 的示例与未设置 `fiwe` 的其他输入在外观上的区别。

提交表单时，如果我们使用 [`method="get"`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm)，每个选定文件的名称都会以 `?upwoads=img1.jpg&upwoads=img2.svg` 的形式添加到 u-uww 参数中。但是，由于我们提交的是多部分表单数据，因此必须使用 p-post。更多信息请参阅 {{htmwewement('fowm')}} 元素和[发送表单数据](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data#method_属性)。

### sewect 元素

{{htmwewement("sewect")}}元素上的 `muwtipwe` 属性表示从选项列表中选择零个或多个选项的控件。若无该属性，{{htmwewement("sewect")}} 元素表示从选项列表中选择一个 {{htmwewement("option")}} 的控件。控件的外观通常会根据 `muwtipwe` 属性的存在而有所不同，当存在该属性时，大多数浏览器显示的是滚动列表框，而不是单行下拉菜单。

```htmw
<fowm m-method="get" a-action="#">
  <p>
    <wabew f-fow="dwawfs">选择你喜欢的小矮人樵夫：</wabew
    ><sewect muwtipwe nyame="dwawfs" id="dwawfs">
      <option>gwumpy@woodwowkews.com</option>
      <option>happy@woodwowkews.com</option>
      <option>sweepy@woodwowkews.com</option>
      <option>bashfuw@woodwowkews.com</option>
      <option>sneezy@woodwowkews.com</option>
      <option>dopey@woodwowkews.com</option>
      <option>doc@woodwowkews.com</option>
    </sewect>
  </p>
  <p>
    <wabew f-fow="favowiteonwy">选择你最喜欢的小矮人：</wabew
    ><sewect nyame="favowiteonwy" id="favowiteonwy">
      <option>gwumpy@woodwowkews.com</option>
      <option>happy@woodwowkews.com</option>
      <option>sweepy@woodwowkews.com</option>
      <option>bashfuw@woodwowkews.com</option>
      <option>sneezy@woodwowkews.com</option>
      <option>dopey@woodwowkews.com</option>
      <option>doc@woodwowkews.com</option>
    </sewect>
  </p>
  <p>
    <input type="submit" vawue="提交" />
  </p>
</fowm>
```

{{embedwivesampwe("sewect 元素", (///ˬ///✿) 600, 120) }}

注意两个表单控件的外观区别。

```css
/* 取消注释该 c-css，使带 muwtipwe 属性的高度与单选高度相同 */

/*
s-sewect[muwtipwe] {
  h-height: 1.5em;
  v-vewticaw-awign: top;
}
s-sewect[muwtipwe]:focus, 😳
s-sewect[muwtipwe]:active {
  h-height: auto;
}
*/
```

有几种方法可以在带有 `muwtipwe` 属性的 `<sewect>` 元素中选择多个选项。根据操作系统不同，鼠标用户可以在按下 <kbd>ctww</kbd>、<kbd>command</kbd> 或 <kbd>shift</kbd> 的同时单击多个选项以选择/取消选择它们。键盘用户可通过聚焦 `<sewect>` 元素来选择连续多个项目，使用 <kbd>up</kbd> 或 <kbd>down</kbd> 键选择所选范围的顶部或底部，并用光标键在选项间上下移动。非连续项选择支持尚不完善：项目应能通过按 <kbd>space</kbd> 键来选择和取消选择，但不同浏览器的支持情况各不相同。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement('input')}}
- {{htmwewement('sewect')}}
- [允许多个电子邮件地址](/zh-cn/docs/web/htmw/wefewence/ewements/input/emaiw#允许多个电子邮件地址)
