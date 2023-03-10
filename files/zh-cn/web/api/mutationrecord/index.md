---
title: MutationRecord
slug: Web/API/MutationRecord
---

{{APIRef("DOM")}}

每个 **`MutationRecord`** 都代表一个独立的 DOM 变化，在每次随 DOM 变化调用 {{domxref("MutationObserver")}} 的回调函数时，一个相应的 `MutationRecord` 会被作为参数，传递给回调函数。

## 属性

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">属性</td>
      <td class="header">类型</td>
      <td class="header">描述</td>
    </tr>
    <tr>
      <td>{{domxref("MutationRecord.type")}}</td>
      <td><code>String</code></td>
      <td>
        如果是属性变化，则返回 <code>"attributes"</code>；<br />如果是
        <code>characterData</code> 节点变化，则返回
        <code>"characterData"</code>；<br />如果是子节点树
        <code>childList</code> 变化，则返回 <code>"childList"</code>。
      </td>
    </tr>
    <tr>
      <td>{{domxref("MutationRecord.target")}}</td>
      <td>{{domxref("Node")}}</td>
      <td>
        根据
        {{domxref("MutationRecord.type")}}，返回变化所影响的节点。<br />对于属性
        <code>attributes</code> 变化，返回属性变化的节点。<br />对于
        <code>characterData</code> 变化，返回
        <code>characterData</code> 节点。<br />对于子节点树
        <code>childList</code> 变化，返回子节点变化的节点。
      </td>
    </tr>
    <tr>
      <td>{{domxref("MutationRecord.addedNodes")}}</td>
      <td>{{domxref("NodeList")}}</td>
      <td>
        返回被添加的节点。<br />如果没有节点被添加，则该属性将是一个空的
        {{domxref("NodeList")}}。
      </td>
    </tr>
    <tr>
      <td>{{domxref("MutationRecord.removedNodes")}}</td>
      <td>{{domxref("NodeList")}}</td>
      <td>
        返回被移除的节点。<br />如果没有节点被移除，则该属性将是一个空的
        {{domxref("NodeList")}}。
      </td>
    </tr>
    <tr>
      <td>{{domxref("MutationRecord.previousSibling")}}</td>
      <td>{{domxref("Node")}}</td>
      <td>返回被添加或移除的节点之前的兄弟节点，或者 <code>null</code>。</td>
    </tr>
    <tr>
      <td>{{domxref("MutationRecord.nextSibling")}}</td>
      <td>{{domxref("Node")}}</td>
      <td>返回被添加或移除的节点之后的兄弟节点，或者 <code>null</code>。</td>
    </tr>
    <tr>
      <td>{{domxref("MutationRecord.attributeName")}}</td>
      <td><code>String</code></td>
      <td>返回被修改的属性的属性名，或者 <code>null</code>。</td>
    </tr>
    <tr>
      <td>{{domxref("MutationRecord.attributeNamespace")}}</td>
      <td><code>String</code></td>
      <td>返回被修改属性的命名空间，或者 <code>null</code>。</td>
    </tr>
    <tr>
      <td>{{domxref("MutationRecord.oldValue")}}</td>
      <td><code>String</code></td>
      <td>
        <p>
          返回值取决于 {{domxref("MutationRecord.type")}}。<br />对于属性
          <code>attributes</code> 变化，返回变化之前的属性值。<br />对于
          <code>characterData</code>
          变化，返回变化之前的数据。<br />对于子节点树
          <code>childList</code> 变化，返回 <code>null</code>。
        </p>
        <div class="note">
          <p>
            注意，如果要让这个属性起作用，在相应的
            <a href="/zh-CN/docs/Web/API/MutationObserverInit"
              >MutationObserverInit</a
            >
            参数的 <code>MutationObserver</code>
            <a href="/zh-CN/docs/Web/API/MutationObserver/observe">observe</a>
            方法中，<code>attributeOldValue</code> 或者
            <code>characterDataOldValue</code> 必须设置为 <code>true</code>。
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
