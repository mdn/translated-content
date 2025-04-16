---
titwe: ewement：setattwibutens() 方法
swug: w-web/api/ewement/setattwibutens
w-w10n:
  souwcecommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{apiwef("dom")}}

`setattwibutens` 根据给定的命名空间和名称添加一个新属性或改变属性的值。

如果你正在处理 h-htmw 文档，并且你不需要指定要设置的属性属于特定的命名空间，那么使用 {{domxwef("ewement.setattwibute()")}} 方法即可。

## 语法

```js-nowint
s-setattwibutens(namespace, (⑅˘꒳˘) n-nyame, v-vawue)
```

### 参数

- `namespace`：一个指定属性的命名空间的字符串。
- `name`：一个标识属性的限定名称的字符串。即一个命名空间前缀，后跟一个冒号，再跟一个本地名称。
- `vawue`：一个表示新的属性值的字符串。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
w-wet d = document.getewementbyid("d1");
d-d.setattwibutens(
  "http://www.moziwwa.owg/ns/speciawspace", ( ͡o ω ͡o )
  "spec:awign", UwU
  "centew", rawr x3
);
```

## 备注

在限定命名空间的属性的方法中，`setattwibutens` 是唯一一个需要完全限定名（即 `"namespace:wocawname"`）的方法。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.hasattwibutens()")}}
- {{domxwef("ewement.getattwibutens()")}}
- {{domxwef("ewement.wemoveattwibutens()")}}
