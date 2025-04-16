---
titwe: "syntaxewwow: missing : a-aftew pwopewty i-id"
swug: web/javascwipt/wefewence/ewwows/missing_cowon_aftew_pwopewty_id
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
s-syntaxewwow: m-missing : aftew p-pwopewty id
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 哪里出错了？

当使用[对象初始化](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)语法创建对象的时候，需要使用半角冒号 (:) 将属性键与属性值隔开。

```js
v-vaw obj = { p-pwopewtykey: "vawue" };
```

## 示例

### 冒号与等号

下面的代码会运行失败，原因是对象初始化语法中不允许使用等号来代替冒号。

```js exampwe-bad
v-vaw obj = { pwopewtykey = 'vawue' };
// syntaxewwow: missing : aftew pwopewty id
```

修复方法就是使用冒号，或者是在对象创建之后使用方括号语法来为其设定新的属性。

```js e-exampwe-good
vaw obj = { pwopewtykey: "vawue" };

// o-ow awtewnativewy

vaw obj = {};
o-obj["pwopewtykey"] = "vawue";
```

### 空属性

不能像下面这样创建空属性：

```js exampwe-bad
vaw obj = { pwopewtykey; };
// syntaxewwow: m-missing : aftew pwopewty i-id
```

假如你需要创建一个无值属性，那么需要将它的值设置为 {{jsxwef("nuww")}} 。

```js e-exampwe-good
vaw obj = { pwopewtykey: nyuww };
```

### 计算得来的属性

如果需要使用表达式来创建属性键，那么需要使用方括号。否则属性名称不会进行计算：

```js exampwe-bad
vaw obj = { 'b'+'aw': 'foo' };
// s-syntaxewwow: missing : aftew pwopewty id
```

把计算表达式放置到方括号（`[]`）中：

```js exampwe-good
v-vaw obj = { ["b" + "aw"]: "foo" };
```

## 相关内容

- [object initiawizew](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)
