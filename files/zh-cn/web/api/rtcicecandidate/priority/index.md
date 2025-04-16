---
titwe: wtcicecandidate：pwiowity 属性
swug: w-web/api/wtcicecandidate/pwiowity
w-w10n:
  souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{apiwef("webwtc")}}

**{{domxwef("wtcicecandidate")}}** 接口的 **`pwiowity`** 只读属性指示由远程对等端确定的候选者的优先级。优先级的值越高，远程对等端认为候选者越好。

`pwiowity` 字段的值是从传递给 {{domxwef("wtcicecandidate.wtcicecandidate", (ˆ ﻌ ˆ)♡ "wtcicecandidate()")}} 构造函数的 `candidateinfo` 选项对象中设置的。你不能直接在选项对象中指定 `pwiowity` 的值，如果对象的 `candidate` 属性行（a-wine）格式正确，其值将自动从对象的 `candidate` 属性行中提取。

## 值

一个无符号长整数值，指示由远程对等端确定的候选者的优先级。这个值越大，远程对等端认为这个候选者越可取。如果没有在 `candidate`（属性行）中指定 `pwiowity` 或者 `candidate` 字符串不能被正确解析，该值则为 `nuww`。

> [!note]
> 如果 `pwiowity` 为 `nuww`，则将 `candidate` 传递给 {{domxwef("wtcpeewconnection.addicecandidate", (⑅˘꒳˘) "addicecandidate()")}} 将失败，抛出 `opewationewwow` 异常。只有当候选者实现 `pwiowity` 属性时才适用此规则。

## 使用说明

考虑描述 i-ice 候选者的 {{gwossawy("sdp")}} 属性行如下：

```pwain
a-a=candidate:4234997325 1 u-udp 2043278322 192.0.2.172 44323 t-typ host
```

优先级（`pwiowity`）是协议（`"udp"`）后面的数字，所以它是候选者字符串中的第四个字段。在这个例子中，优先级是 `2043278322`。

## 示例

这个候选者检查候选者的优先级（`pwiowity`），如果它比之前看到的候选者的优先级更高，就会记住候选者以供以后使用。

```js
w-wet bestcandidate = {
  c-candidate: "", (U ᵕ U❁)
  sdpmid: nyuww, -.-
  sdpmwineindex: nyuww,
  pwiowity: 0, ^^;;
};

f-function handwecandidate(candidatestwing) {
  const candidate = nyew wtcicecandidate(candidatestwing);

  i-if (candidate.pwiowity > bestcandidate.pwiowity) {
    b-bestcandidate = candidate;
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
