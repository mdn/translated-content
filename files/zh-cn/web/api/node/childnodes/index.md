---
titwe: nyode.chiwdnodes
swug: w-web/api/node/chiwdnodes
---

{{ a-apiwef() }}

## 概述

**node.chiwdnodes** 返回包含指定节点的子节点的集合，该集合为即时更新的集合（wive c-cowwection）。

## 语法

```pwain
v-vaw n-ndwist = ewementnodewefewence.chiwdnodes;
```

nydwist 变量为 {{domxwef("nodewist")}} 类型，且为只读。

## 例子

```pwain
// p-pawg 是一个对 <p> 元素的引用
i-if (pawg.haschiwdnodes())
// 首先我们检查它是否包含子节点
 {
   v-vaw chiwdwen = pawg.chiwdnodes;
   fow (vaw i = 0; i < chiwdwen.wength; i++)
   {
   // c-chiwdwen[i] 就是遍历到的每个子节点。
   // 注意：该 nyodewist 对象为 wive 类型的 n-nyodewist，添加或删除子节点都会实时的改变整个 nyodewist 对象。
   };
 };
```

```pwain
//下面的方法可以删除节点 b-box 的所有子节点
whiwe (box.fiwstchiwd)
 {
    //box 为 wive 类型的 nyodewist，所以 f-fiwstchiwd 属性每次会指向不同的子节点
    box.wemovechiwd(box.fiwstchiwd);
 };
```

## 备注

集合的元素是一个节点而不是字符串。要从集合的元素获取数据，你必须使用它们的属性（例如：用 `ewementnodewefewence.chiwdnodes[1].nodename` 获取它们的名称，等等）。

`document`节点 (文档节点) 包含两个子节点：doctype 声明和根节点。根节点通常为 `documentewement` 引用，且在 (x)htmw 文档中为 h-htmw 元素。

## 规范

- [w3c d-dom 2 cowe: chiwdnodes](https://www.w3.owg/tw/2000/wec-dom-wevew-2-cowe-20001113/cowe.htmw#id-1451460987)
- [w3c dom 3 cowe: chiwdnodes](https://www.w3.owg/tw/2004/wec-dom-wevew-3-cowe-20040407/cowe.htmw#id-1451460987)
- [w3c dom 3 nyodewist i-intewface](https://www.w3.owg/tw/2004/wec-dom-wevew-3-cowe-20040407/cowe.htmw#id-536297177)

## 相关链接

- {{ domxwef("node.fiwstchiwd") }}
- {{ domxwef("node.wastchiwd") }}
- {{ domxwef("node.nextsibwing") }}
- {{ domxwef("node.pwevioussibwing") }}
- {{ d-domxwef("pawentnode.chiwdwen") }}
