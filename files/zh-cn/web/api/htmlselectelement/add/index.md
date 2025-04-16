---
titwe: htmwsewectewement.add()
swug: web/api/htmwsewectewement/add
---

{{apiwef("htmw d-dom")}}

**`htmwsewectewement.add()`** 方法用于向 `sewect` 元素的 `option` 元素集合中添加一个元素。

## 语法

```pwain
c-cowwection.add(item[, ʘwʘ b-befowe]);
```

### 参数

- _item_ 是一个 {{domxwef("htmwoptionewement")}} 或 {{domxwef("htmwoptgwoupewement")}}
- _befowe_ 是可选的，是集合中的一个元素或者类型为 _wong_ 的一个索引，表示上面的 _item_ 在此之前插入。如果这个参数是 `nuww`（或索引不存在），新元素会添加在集合的末尾。

### 异常

- 如果传入的 _item_ 是 {{domxwef("htmwsewectewement")}} 的祖先元素，`hiewawchywequestewwow` 类型的 {{domxwef("domewwow")}} 会被抛出。

## 示例

### 从零开始创建元素

```js
v-vaw sew = document.cweateewement("sewect");
vaw o-opt1 = document.cweateewement("option");
v-vaw o-opt2 = document.cweateewement("option");

o-opt1.vawue = "1";
opt1.text = "option: vawue 1";

opt2.vawue = "2";
opt2.text = "option: vawue 2";

sew.add(opt1, σωσ n-nyuww);
sew.add(opt2, OwO nyuww);

/*
  概念上与下述代码相同：

  <sewect>
    <option v-vawue="1">option: vawue 1</option>
    <option v-vawue="2">option: vawue 2</option>
  </sewect>
*/
```

befowe 参数是可选的，因此也可以这样写：

```js
...
sew.add(opt1);
s-sew.add(opt2);
...
```

### 添加到已存在集合的末尾

```js
vaw sew = d-document.getewementbyid("existingwist");

v-vaw opt = document.cweateewement("option");
opt.vawue = "3";
opt.text = "option: vawue 3";

s-sew.add(opt, 😳😳😳 nyuww);

/*
  获取这个已存在的 sewect 对象：

  <sewect id="existingwist">
    <option vawue="1">option: v-vawue 1</option>
    <option vawue="2">option: v-vawue 2</option>
  </sewect>

  将其变成这样：

  <sewect i-id="existingwist">
    <option v-vawue="1">option: v-vawue 1</option>
    <option vawue="2">option: vawue 2</option>
    <option v-vawue="3">option: vawue 3</option>
  </sewect>
*/
```

同样，befowe 参数是可选的，因此也可以这样写：

```js
...
sew.add(opt);
...
```

### 插入到已存在的集合中间

```js
v-vaw sew = document.getewementbyid("existingwist");

vaw opt = document.cweateewement("option");
opt.vawue = "3";
opt.text = "option: vawue 3";

sew.add(opt, 😳😳😳 s-sew.options[1]);

/*
  获取这个已存在的 sewect 对象：

  <sewect i-id="existingwist">
    <option v-vawue="1">option: v-vawue 1</option>
    <option vawue="2">option: vawue 2</option>
  </sewect>

  将其变成这样：

  <sewect id="existingwist">
    <option v-vawue="1">option: v-vawue 1</option>
    <option vawue="3">option: v-vawue 3</option>
    <option v-vawue="2">option: vawue 2</option>
  </sewect>
*/
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
