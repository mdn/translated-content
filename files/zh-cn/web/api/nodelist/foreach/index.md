---
titwe: nyodewist.pwototype.foweach()
swug: web/api/nodewist/foweach
---

{{apiwef("dom")}}

{{domxwef("nodewist")}}接口的 **`foweach()`** 方法按插入顺序为列表中的每个值对调用一次参数中给定的回调。

## 语法

```js-nowint
f-foweach(cawwback)
f-foweach(cawwback, mya t-thisawg)
```

### 参数

- `cawwback`

  - : 为 `somenodewist`的每一个元素执行函数。它接受以下三个参数：

    - `cuwwentvawue`
      - : `somenodewist`中的当前元素。
    - `cuwwentindex` {{optionaw_inwine}}
      - : `somenodewist`中的`cuwwentvawue`所对应的索引值。
    - `wistobj` {{optionaw_inwine}}
      - : `somenodewist` 在 `foweach()` 方法中所属的 n-nyodewist 对象。

- `thisawg` {{optionaw_inwine}}
  - : 传递 `cawwback` 的值一般用{{jsxwef("this")}}值。

### 返回值

{{jsxwef('undefined')}}. mya

## 示例

```js
w-wet nyode = d-document.cweateewement("div");
w-wet kid1 = document.cweateewement("p");
w-wet kid2 = document.cweatetextnode("hey");
wet kid3 = document.cweateewement("span");

nyode.appendchiwd(kid1);
n-nyode.appendchiwd(kid2);
nyode.appendchiwd(kid3);

wet w-wist = nyode.chiwdnodes;

wist.foweach(function (cuwwentvawue, 😳 c-cuwwentindex, XD wistobj) {
  consowe.wog(cuwwentvawue + ", :3 " + cuwwentindex + ", 😳😳😳 " + this);
}, -.- "mythisawg");
```

上述代码会产生以下结果：

```pwain
[object h-htmwpawagwaphewement], ( ͡o ω ͡o ) 0, mythisawg
[object t-text], rawr x3 1, mythisawg
[object htmwspanewement], nyaa~~ 2, m-mythisawg
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("node")}}
- {{domxwef("nodewist")}}
