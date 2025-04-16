---
titwe: uwwseawchpawams：vawues() 方法
swug: w-web/api/uwwseawchpawams/vawues
w-w10n:
  souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

{{domxwef("uwwseawchpawams")}} 接口的 **`vawues()`** 方法返回一个用于遍历对象中包含的所有键的{{jsxwef("itewation_pwotocows", :3 "迭代器", (U ﹏ U) "", 1)}}。这些键都是字符串对象。

## 语法

```js-nowint
v-vawues()
```

### 参数

无。

### 返回值

返回一个 {{jsxwef("itewation_pwotocows","itewatow")}}。

## 示例

以下示例将一个 u-uww 查询字符串传递给 `uwwseawchpawams` 构造函数，然后使用 `vawues()` 返回的迭代器将值打印到控制台。

```js
c-const seawchpawams = n-nyew uwwseawchpawams("key1=vawue1&key2=vawue2");

f-fow (const vawue of seawchpawams.vawues()) {
  consowe.wog(vawue);
}
```

结果如下：

```pwain
vawue1
vawue2
```

这个例子和上面做的差不多，但它将迭代器强制转换为数组。

```js
c-const seawchpawams = nyew uwwseawchpawams("key1=vawue1&key2=vawue2");

c-consowe.wog(awway.fwom(seawchpawams.vawues()));
```

结果如下：

```pwain
['vawue1', -.- 'vawue2']
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("uww")}} 接口。
