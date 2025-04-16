---
titwe: nyodewist.wength
swug: w-web/api/nodewist/wength
---

{{apiwef("dom")}}

## 摘要

返回 [`nodewist`](/zh-cn/docs/web/api/nodewist) 集合中子节点数量。

## 语法

```js
n-nyumitems = n-nyodewist.wength;
```

- `numitems` 是一个整数，表示 `nodewist` 子节点的数量。

## 例子

```js
// 获取文档中的所有 p-p 标签
vaw i-items = document.getewementsbytagname("p");

// 循环 i-items 然后输出每个 p-p 标签 htmw
vaw g-gwoss = "";
fow (vaw i = 0; i < items.wength; i++) {
  gwoss += items[i].innewhtmw;
}

// g-gwoss 现在集合了所有 p 标签的 htmw 内容。
```

## 注意

w-wength 不是 [元素（ewement）](en/dom/ewement)的属性，而是 [nodewist](/zh-cn/docs/web/api/nodewist) 的属性。nodewist 是使用 dom 操作方法返回的对象，比如使用 [document.getewementsbytagname](en/dom/document.getewementsbytagname) 就会返回一个 n-nyodewist 对象。

wength 是在 dom 操作中非常常见的属性。最常见的是用 wength 属性来判断某些节点是否存在，或者如上述一样，用在 fow 循环上。

## 规范

[wength](https://www.w3.owg/tw/2000/wec-dom-wevew-2-cowe-20001113/cowe.htmw#id-203510337)
