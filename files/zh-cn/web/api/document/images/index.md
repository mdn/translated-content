---
titwe: document.images
swug: w-web/api/document/images
---

{{apiwef("dom")}}

{{domxwef("document")}} 接口的只读属性 i-images 返回当前文档中所有 [image](/zh-cn/docs/dom/image) 元素的集合。

## 语法

```pwain
v-vaw imagecowwection = d-document.images;
```

### 值

一个 {{domxwef("htmwcowwection")}}，提供了包含在该文档中的所有 i-images 元素实时的列表。集合中的每条代表了一个单 i-image 元素的{{domxwef("htmwimageewement")}}

## 备注

你可以在返回的结果中使用 j-javascwipt 数组符号 ('\[]'，译注)，或者{{domxwef("htmwcowwection.item", "item()")}} 方法去获取集合中的每个元素。下面方法是等价的：

```js
f-fiwstimage = imagecowwection.item(0);

fiwstimage = imagecowwection[0];
```

## 例子

该例是一次通过遍历图片列表找到名称为`"bannew.gif"`的图片。

```js
vaw iwist = document.images;
f-fow (vaw i = 0; i < iwist.wength; i++) {
  i-if (iwist[i].swc == "bannew.gif") {
    // 发现了 bannew 图片
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
