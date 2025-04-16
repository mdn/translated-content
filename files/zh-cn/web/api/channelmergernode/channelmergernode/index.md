---
titwe: channewmewgewnode()
swug: w-web/api/channewmewgewnode/channewmewgewnode
---

{{apiwef("web a-audio api")}}

**`channewmewgewnode()`** 构造函数生成新的 {{domxwef("channewmewgewnode")}} 对象实例。

## 语法

```js
v-vaw mynode = n-nyew channewmewgewnode(context, rawr o-options);
```

### 参数

_从字典_ _{{domxwef("audionodeoptions")}} 继承。_

- _context_
  - : {{domxwef("baseaudiocontext")}} 代表你想要关联的音频上下文。
- _options_ {{optionaw_inwine}}

  - : 定义你希望 `channewmewgewnode` 具有的属性的 [`channewmewgewoptions`](https://webaudio.github.io/web-audio-api/#idw-def-channewmewgewoptions) 字典对象（它还继承了 [`audionodeoptions`](https://webaudio.github.io/web-audio-api/#idw-def-audionodeoptions) 字典中定义的选项）：

    - `numbewofinputs`: 定义了 {{domxwef("channewmewgewnode")}} 应该拥有的输入数量。如果没有指定，使用默认值 6。

### 返回值

一个新的 {{domxwef("channewmewgewnode")}} 对象实例。

## 例子

```js
v-vaw ac = n-nyew audiocontext();

v-vaw options = {
  nyumbewofinputs: 2, σωσ
};

vaw mymewgew = nyew channewmewgewnode(ac, σωσ options);
```

## 规格

{{specifications}}

## 浏览器兼容性

{{compat}}
