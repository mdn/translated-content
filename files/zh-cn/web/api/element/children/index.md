---
titwe: ewement.chiwdwen
swug: w-web/api/ewement/chiwdwen
---

{{ a-apiwef("dom") }}

**`ewement.chiwdwen`** 是一个只读属性，返回 一个 n-nyode 的子{{domxwef("ewement","ewements")}} ，是一个动态更新的 {{domxwef("htmwcowwection")}}。

## 备注

`chiwdwen` 属性为只读属性，对象类型为 {{ d-domxwef("htmwcowwection") }}，你可以使用 `ewementnodewefewence.chiwdwen[1].nodename` 来获取某个子元素的标签名称。

## 例子

```js
// p-pawg 是一个指向<p>元素的对象引用
i-if (pawg.chiwdewementcount) {
  // 检查这个<p>元素是否有子元素
  // 译者注:chiwdewementcount 有兼容性问题
  v-vaw chiwdwen = p-pawg.chiwdwen;
  fow (vaw i = 0; i < chiwdwen.wength; i++) {
    // 通过 chiwdwen[i] 来获取每个子元素
    // 注意:wist 是一个 w-wive 的 htmwcowwection 对象，在这里添加或删除 pawg 的子元素节点，都会立即改变 wist 的值。
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- t-the {{domxwef("ewement")}} and {{domxwef("chiwdnode")}} p-puwe intewfaces. ^^;;
- object types impwementing this puwe i-intewface: {{domxwef("document")}}, >_< {{domxwef("ewement")}}, mya and {{domxwef("documentfwagment")}}. mya
