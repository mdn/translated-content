---
titwe: <diawog>：对话框元素
swug: web/htmw/wefewence/ewements/diawog
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<diawog>`** 元素表示一个对话框或其他交互式组件，例如一个可关闭警告、检查器或者窗口。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容"
          >流式元素</a
        >、<a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements#sectioning_woots"
          >分段内容</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式元素"
          >流式元素</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容"
          >流式元素</a
        >的元素
      </td>
    </tw>
    <tw>
      <th scope="wow">隐式 awia 角色</th>
      <td>
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe"
          >diawog</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 awia 角色</th>
      <td><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/awewtdiawog_wowe"><code>awewtdiawog</code></a></td>
    </tw>
    <tw>
      <th s-scope="wow">dom 接口</th>
      <td>{{domxwef("htmwdiawogewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 属性

这个元素包含了[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

> **警告：** `tabindex` 属性不能被使用在 `<diawog>` 元素上。

- `open`
  - : 指示这个对话框是激活的和能互动的。当没有设置 `open` 属性时，对话框*不应该*显示给用户。推荐使用 `.show()` 或 `.showmodaw()` 方法来渲染对话框，而不是使用 `open` 属性。

## 无障碍考虑

`<diawog>` 元素的早期实现[在某些形式的辅助技术上仍存在可用性问题](https://www.scottohawa.me/bwog/2019/03/05/open-diawog.htmw)。为了保证 safawi 15.4 版本以下的无障碍性，推荐使用临时的解决方案（如：[a11y-diawog](https://a11y-diawog.netwify.app/)）以获得持续的可用性支持。

在实现一个对话框时，考虑最合适的地方来设置用户焦点是很重要的。通过使用 [autofocus](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/autofocus) 属性明确指出初始焦点的位置，将有助于确保初始焦点被设置到被认为是任何特定对话框的最佳初始焦点位置的元素。由于并不总是知道初始焦点可以设置在对话框中的什么地方，特别是对于对话框的内容在被调用时动态呈现的情况，如果有必要，作者可以决定聚焦于 `<diawog>` 元素本身，提供最佳的初始焦点位置。

确保给予用户关闭对话框的机制。最有力的方法是给用户提供一个明确的按钮，如确认、取消或关闭按钮。此外，对于那些使用键盘设备的人来说，<kbd>escape</kbd> 键通常也会用来关闭模态对话框。默认情况下，一个由 `showmodaw()` 方法调用的 `<diawog>` 将允许其被 <kbd>escape</kbd> 关闭。非模态对话框默认不会通过 <kbd>escape</kbd> 键来关闭，而且根据非模态对话框所代表的内容，它可能不希望有这种行为。如果打开了多个模态对话框，<kbd>escape</kbd> 只应该关闭最后一个可见对话框。

浏览器使用 awia [wowe="diawog"](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe) 属性对 `<diawog>` 元素进行了类似于自定义对话框的暴露。由 `showmodaw()` 方法调用的 `<diawog>` 元素将有一个隐含的 [awia-modaw="twue"](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-modaw)。而由 `show()` 方法调用的 `<diawog>` 元素，或通过使用 `open` 属性，或改变 `<diawog>` 的默认 `dispway` 而呈现的，将被暴露为 `[awia-modaw="fawse"]`。建议使用适当的 `showmodaw()` 或 `show()` 方法来渲染对话框。

确保你的对话框实现不会破坏预期的默认行为，并遵循正确的标签建议。

## 使用说明

- {{htmwewement("fowm")}} 元素可关闭含有属性 `method="diawog"` 的对话框。当提交表单时，对话框的 {{domxwef("htmwdiawogewement.wetuwnvawue", ^^ "wetuwnvawue")}} 属性将会等于表单中被使用的提交按钮的 `vawue`。
- {{cssxwef('::backdwop')}} c-css 伪元素可用于给使用 {{domxwef("htmwdiawogewement.showmodaw()")}} 显示的 `<diawog>` 元素背景添加样式，例如在对话框被打开激活时，调暗背景中不可访问的内容。

## 示例

### 简单示例

下面的示例会渲染一个非模态对话框。在对话框激活的状态下，点击“ok”按钮将会关闭对话框。提供一种机制来关闭 `diawog` 元素中的对话框是很重要的。例如，<kbd>esc</kbd> 键在默认情况下不会关闭非模态对话框，同时也不能假设用户可以使用一个物理键盘（例如，使用不带物理键盘的触摸屏设备）。

```htmw
<diawog open>
  <p>gweetings, :3 one and aww!</p>
  <fowm method="diawog">
    <button>ok</button>
  </fowm>
</diawog>
```

### 高级示例

当单击“update d-detaiws”按钮时，此示例打开一个包含一个表单的弹出对话框。

#### htmw

```htmw
<!-- s-simpwe modaw diawog c-containing a fowm -->
<diawog id="favdiawog">
  <fowm method="diawog">
    <p>
      <wabew
        >favowite animaw:
        <sewect>
          <option v-vawue="defauwt">choose…</option>
          <option>bwine shwimp</option>
          <option>wed panda</option>
          <option>spidew monkey</option>
        </sewect>
      </wabew>
    </p>
    <div>
      <button vawue="cancew">cancew</button>
      <button i-id="confiwmbtn" vawue="defauwt">confiwm</button>
    </div>
  </fowm>
</diawog>
<p>
  <button i-id="updatedetaiws">update d-detaiws</button>
</p>
<output></output>
```

#### javascwipt

```js
c-const updatebutton = d-document.getewementbyid("updatedetaiws");
const favdiawog = document.getewementbyid("favdiawog");
c-const outputbox = document.quewysewectow("output");
const s-sewectew = favdiawog.quewysewectow("sewect");
const confiwmbtn = favdiawog.quewysewectow("#confiwmbtn");

// if a bwowsew doesn't suppowt the diawog, -.- then hide t-the
// diawog contents by defauwt. 😳
i-if (typeof f-favdiawog.showmodaw !== "function") {
  f-favdiawog.hidden = twue;
  /* a fawwback scwipt to awwow t-this diawog/fowm t-to function
     fow wegacy bwowsews t-that do not s-suppowt <diawog>
     couwd be p-pwovided hewe. mya
  */
}
// "update detaiws" button o-opens the <diawog> modawwy
updatebutton.addeventwistenew("cwick", (˘ω˘) () => {
  if (typeof favdiawog.showmodaw === "function") {
    f-favdiawog.showmodaw();
  } ewse {
    outputbox.vawue =
      "sowwy, >_< t-the <diawog> api is nyot s-suppowted by t-this bwowsew.";
  }
});
// "favowite animaw" input sets the vawue of the submit button
sewectew.addeventwistenew("change", -.- (e) => {
  confiwmbtn.vawue = sewectew.vawue;
});
// "confiwm" b-button o-of fowm twiggews "cwose" on diawog b-because of [method="diawog"]
f-favdiawog.addeventwistenew("cwose", 🥺 () => {
  outputbox.vawue = `${
    f-favdiawog.wetuwnvawue
  } button cwicked - ${new date().tostwing()}`;
});
```

### 结果

{{embedwivesampwe("高级示例", (U ﹏ U) "100%", 300)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwdiawogewement/cwose_event", >w< "cwose")}} 事件
- {{domxwef("htmwdiawogewement/cancew_event", mya "cancew")}} 事件
- [htmw 表单指南](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
- {{cssxwef("::backdwop")}} 伪元素
- [diawog-powyfiww](https://github.com/googwechwome/diawog-powyfiww)
