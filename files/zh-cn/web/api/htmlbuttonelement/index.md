---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
---

{{APIRef("HTML DOM")}}

**`HTMLButtonElement`** 接口提供操作 button 元素（除了 {{HTMLElement("button")}} 对象，这个接口对继承了该对象的元素也有效）的属性和方法。

## 属性

_从父对象{{domxref("HTMLElement")}}继承的属性。_

<table>
  <thead>
    <tr>
      <th scope="col">名字</th>
      <th scope="col">类型</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>accessKey</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>一个键盘字符构成的字符串，表明用哪个键盘字符能够访问这个按钮。</td>
    </tr>
    <tr>
      <td><code>autofocus</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        这个控件是否可以在页面加载时自动得到焦点。但用户选择了其他焦点除外。只有和表单关联的按钮该特性才有效。
      </td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>这个控件是否被禁用。被禁用的控件不接受任何输入和点击。</td>
    </tr>
    <tr>
      <td><code>form</code> {{readonlyInline}}</td>
      <td>{{domxref("HTMLFormElement")}}</td>
      <td>
        这个按钮所关联的表单元素。如果这个按钮是一个表单元素的后代元素，那么这个属性的值就是那个表单元素。<br />如果这个按钮不是一个表单元素的后代元素，那么这个数学可以是任意同文档中的表单元素，或者是
        <code>null</code> 表明它没有关联任何表单。
      </td>
    </tr>
    <tr>
      <td><code>formAction</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        一个处理提交信息的 URI 资源地址。如果指定该属性，会覆盖拥有该元素的 {{HTMLElement("form")}}
        元素的 <a href="/zh-CN/docs/Web/HTML/Element/form#action"><code>action</code></a> 属性。
      </td>
    </tr>
    <tr>
      <td><code>formEncType</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        表单要提交给服务器处理的内容的类型。如果指定该属性，会覆盖拥有该元素的 {{HTMLElement("form")}}
        元素的 <a href="/zh-CN/docs/Web/HTML/Element/form#enctype"
          ><code>enctype</code></a> 属性。
      </td>
    </tr>
    <tr>
      <td><code>formMethod</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        浏览器提交表单内容的 HTTP 方法。如果指定该属性，会覆盖拥有该元素的 {{HTMLElement("form")}}
        元素的 <a href="/zh-CN/docs/Web/HTML/Element/form#method"
          ><code>method</code></a
        > 属性。
      </td>
    </tr>
    <tr>
      <td><code>formNoValidate</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        表明这个表单提交时是否需要验证。如果指定该属性，会覆盖拥有该元素的 {{HTMLElement("form")}}
        元素的 <a href="/zh-CN/docs/Web/HTML/Element/form#novalidate"
          ><code>novalidate</code></a
        > 属性。
      </td>
    </tr>
    <tr>
      <td><code>formTarget</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        一个名字或关键字，用于表明显示服务器响应的页面。如果指定该属性，会覆盖拥有该元素的 {{HTMLElement("form")}}
        元素的 <a href="/zh-CN/docs/Web/HTML/Element/form#target"
          ><code>target</code></a
        > 属性。
      </td>
    </tr>
    <tr>
      <td><code>labels</code> {{readonlyInline}}</td>
      <td>{{domxref("NodeList")}}</td>
      <td>
        一个 {{HTMLElement("label")}}
        元素表，说明哪些标签是归属这个按钮的。
      </td>
    </tr>
    <tr>
      <td><code>menu</code> {{experimental_inline}}</td>
      <td>{{domxref("HTMLMenuElement")}}</td>
      <td>如果该按钮 <code>type="menu"</code>，被点击的时候应该显示的菜单。</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        提交到服务器时表单描述该对象的 name。如果指定该属性，不能使用空字符串。
      </td>
    </tr>
    <tr>
      <td><code>tabIndex</code></td>
      <td>long</td>
      <td>用于表示该元素在 tab 按钮跳动过程中的序号的一个数字。</td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        表明按钮的行为。这个属性是枚举类型，可以是以下的值：
        <ul>
          <li>
            <code>"submit"</code>：这个按钮会提交表单。如果不指定该属性，这是默认值。可以动态改为空值或者无效值。
          </li>
          <li><code>"reset"</code>：用于重置（清空）表单。</li>
          <li>
            <code>"button"</code>：什么都不做的按钮。通常通过 Javascript 挂载事件。
          </li>
          <li>
            <code>"menu"</code>：显示菜单的按钮
            {{experimental_inline}}。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>validationMessage</code> {{readonlyInline}}</td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        报告该控件不满足验证要求的，提示给用户的看的信息。如果这个控件没有验证约束（<code>willValidate</code> 值为 <code>false</code>），或者满足验证的要求，那么这个属性为空字符串。
      </td>
    </tr>
    <tr>
      <td><code>validity</code> {{readonlyInline}}</td>
      <td>{{domxref("ValidityState")}}</td>
      <td>这个控件当前的验证状态。</td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>这个控件当前的表单值。</td>
    </tr>
    <tr>
      <td><code>willValidate</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        表明这个按钮是否需要在提交前进行验证。如果不需要，这个属性值为<code
          >false</code
        >
        。
      </td>
    </tr>
  </tbody>
</table>

## 方法

_从父对象{{domxref("HTMLElement")}}继承的方法。_

| 名字                                    | 返回类型               | 描述               |
| --------------------------------------- | ---------------------- | ------------------ |
| `checkValidity()`                       | {{domxref("Boolean")}} | 对按钮元素不支持。 |
| `setCustomValidity(in DOMString error)` | `void`                 | 对按钮元素不支持。 |

在基于 Gecko 的浏览器中，在表单验证时会使用 {{cssxref(":-moz-submit-invalid")}} 伪类修饰提交按钮。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现该接口的 HTML 元素：{{ HTMLElement("button") }}
