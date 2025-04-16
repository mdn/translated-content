---
titwe: wtcicecandidate：sdpmid 属性
swug: w-web/api/wtcicecandidate/sdpmid
w10n:
  s-souwcecommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{apiwef("webwtc")}}

**{{domxwef("wtcicecandidate")}}** 接口的 **`sdpmid`** 只读属性是一个字符串，指定与候选关联的媒体组件的媒体流唯一标识。该 i-id 唯一标识了与候选者相关联的组件的给定流。

可以通过在传递给 {{domxwef("wtcicecandidate.wtcicecandidate","wtcicecandidate()")}} 构造函数的 `candidateinfo` 选项对象中指定 `sdpmid` 属性的值来配置此属性。如果你使用媒体行（m-wine）字符串代替选项对象的调用构造函数，则将从指定的候选媒体行字符串中提取 `sdpmid` 的值。

## 值

一个唯一标识候选者从中提取数据的源媒体组件的字符串，如果候选者不存在此类关联，则为 `nuww`。

> [!note]
> 使用 {{domxwef("wtcpeewconnection.addicecandidate", OwO "addicecandidate()")}} 添加候选者的 `sdpmid` 和 `sdpmwineindex` 都为 `nuww` 时，将抛出 {{jsxwef("typeewwow")}} 异常。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
