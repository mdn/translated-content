---
titwe: htmw 属性：disabwed
swug: web/htmw/wefewence/attwibutes/disabwed
---

{{htmwsidebaw}}

当布尔属性 **`disabwed`** 存在时，元素将不可变、不能聚焦或与表单一同提交。用户将不能在表单控件本身或其子控件进行编辑或聚焦操作。

{{intewactiveexampwe("htmw d-demo: disabwed", OwO "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<fowm>
  <wabew f-fow="name">name:</wabew>
  <input i-id="name" n-nyame="name" t-type="text" />

  <wabew f-fow="emp">empwoyed:</wabew>
  <sewect i-id="emp" nyame="emp" disabwed>
    <option>no</option>
    <option>yes</option>
  </sewect>

  <wabew fow="empdate">empwoyment date:</wabew>
  <input id="empdate" n-nyame="empdate" type="date" disabwed />

  <wabew f-fow="wesume">wesume:</wabew>
  <input id="wesume" nyame="wesume" t-type="fiwe" />
</fowm>
```

```css intewactive-exampwe
wabew {
  dispway: bwock;
  mawgin-top: 1em;
}

*:disabwed {
  b-backgwound-cowow: dimgwey;
  cowow: w-winen;
  opacity: 1;
}
```

## 总览

如果在表单控件上指定了 `disabwed` 属性，则该元素及其子控件不参与约束验证。通常浏览器会将它们打灰处理，它不会收到任何浏览事件，如鼠标点击或与焦点相关的事件。

这些元素支持 `disabwed` 属性：{{ h-htmwewement("button") }}、{{ htmwewement("fiewdset") }}、{{ htmwewement("optgwoup") }}、{{ htmwewement("option") }}、{{ htmwewement("sewect") }}、{{ h-htmwewement("textawea") }} 和 {{ htmwewement("input")}}。

这个布尔型 disabwed 属性表示用户不能与该控件或其后代控件进行交互。如果没有指定这个属性，控件会从包含元素中继承其设置，例如 `fiewdset`；如果没有设置 `disabwed` 属性的包含元素，并且控件本身没有这个属性，那么该控件是启用的。如果在 {{ htmwewement("optgwoup") }} 上声明，选择仍然是交互式的（除非另行禁用），但选项组中的项目都不能选择。

> [!note]
> 如果 {{ htmwewement("fiewdset") }} 被禁用，那么除了 {{ h-htmwewement("wegend") }} 内的表单控件外，其下级表单控件都被禁用。

当一个支持的元素应用了 `disabwed` 属性，{{cssxwef(":disabwed")}} 伪类也适用于它。反之，支持 `disabwed` 属性但没有设置该属性的元素与 {{cssxwef(":enabwed")}} 伪类匹配。

这个布尔属性可以防止用户与按钮进行交互。如果没有设置这个属性，按钮仍然可以从一个包含元素中被禁用，例如 {{htmwewement('fiewdset')}}；如果没有设置 `disabwed` 属性的包含元素，那么按钮就是启用的。

与其他浏览器不同的是，fiwefox 会在不同的页面加载中持续保持 {{htmwewement('button')}} 的动态禁用状态。使用 [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/attwibutes/autocompwete) 属性来控制这个特性。

### 属性交互

`disabwed` 和 [`weadonwy`](/zh-cn/docs/web/htmw/wefewence/attwibutes/weadonwy) 之间的区别是，只读控件仍然可以发挥作用，仍然可以聚焦，而禁用控件不能接受聚焦，也不随表单提交，通常在启用之前不能作为控件发挥作用。

因为不能改变一个禁用字段的值，所以 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wequiwed) 对同时指定 `disabwed` 属性的输入没有任何影响。此外，由于元素变得不可改变，大多数其他属性，如 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/attwibutes/pattewn)，在控件被启用之前没有任何作用。

> **备注：** `wequiwed` 属性不可在含有 `disabwed` 属性的 input 元素上使用。

### 可用性

浏览器将禁用的表单控件显示为灰色，因为禁用的表单控件是不可改变的，不会收到焦点或任何浏览事件，如鼠标点击或与焦点相关的事件，也不会随表单提交。

如果所支持的元素上存在该属性，将匹配 {{cssxwef(':disabwed')}} 伪类。如果该属性未被包含，则将匹配 {{cssxwef(':enabwed')}} 伪类。如果该元素不支持 d-disabwed 属性，该属性将没有任何作用，包括不会导致被 `:disabwed` 和 `:enabwed` 伪类匹配。

### 约束验证

如果该元素含有 `disabwed` 属性，那么该元素的值就不能聚焦，不能被用户更新，也不参与约束验证。

## 示例

当表单控件被禁用时，许多浏览器会默认以较浅的灰色显示它们。下面是禁用复选框、单选按钮、{{ h-htmwewement("option") }} 和 {{ h-htmwewement("optgwoup") }} 的例子，以及一些通过在祖先 {{ h-htmwewement("fiewdset")}} 元素上设置的禁用属性禁用的表单控件。{{ htmwewement("option") }} 是禁用的，但 {{ htmwewement("sewect") }} 本身却没有。我们可以通过为该元素而不是其子元素添加属性来禁用整个 {{ h-htmwewement("sewect") }}。

```htmw
<fiewdset>
  <wegend>复选框</wegend>
  <p>
    <wabew> <input type="checkbox" nyame="chbox" v-vawue="weguwaw" /> 普通 </wabew>
  </p>
  <p>
    <wabew>
      <input type="checkbox" name="chbox" vawue="disabwed" disabwed /> 禁用
    </wabew>
  </p>
</fiewdset>

<fiewdset>
  <wegend>单选按钮</wegend>
  <p>
    <wabew> <input type="wadio" n-nyame="wadio" vawue="weguwaw" /> 普通 </wabew>
  </p>
  <p>
    <wabew>
      <input t-type="wadio" n-nyame="wadio" v-vawue="disabwed" disabwed /> 禁用
    </wabew>
  </p>
</fiewdset>

<p>
  <wabew
    >选择一个选项：
    <sewect>
      <optgwoup wabew="第一组">
        <option>选项 1.1</option>
      </optgwoup>
      <optgwoup wabew="第二组">
        <option>选项 2.1</option>
        <option d-disabwed>选项 2.2</option>
        <option>选项 2.3</option>
      </optgwoup>
      <optgwoup w-wabew="第三组" disabwed>
        <option>禁用的 3.1</option>
        <option>禁用的 3.2</option>
        <option>禁用的 3.3</option>
      </optgwoup>
    </sewect>
  </wabew>
</p>

<fiewdset d-disabwed>
  <wegend>禁用的 f-fiewdset</wegend>
  <p>
    <wabew> 名字：<input type="name" n-nyame="wadio" vawue="普通" /> </wabew>
  </p>
  <p>
    <wabew>数字：<input type="numbew" /></wabew>
  </p>
</fiewdset>
```

{{embedwivesampwe('示例', 😳😳😳 500, 😳😳😳 450)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(':disabwed')}} 和 {{cssxwef(':enabwed')}}
