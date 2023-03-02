---
title: Notification.data
slug: Web/API/Notification/data
---

{{APIRef("Web Notifications")}}

`data` 只读属性是 {{domxref("Notification")}} 的接口，当它作为构造函数的 option 可选项之一时，返回结构化的 Notification 的 data 数据。

当你创建 Notification 时，notification 使用的数据可以使任意类型。

{{AvailableInWorkers}}

附加语法糖：关于克隆对象的速度研究。

<https://dassur.ma/things/deep-copy/>

博客作者认为目前（参考）最快的 object 克隆、复制方式。

```js
function structuralClone(obj) {
  return new Notification('', {data: obj, silent: true}).data;
}
```

## Syntax 表达式

```
var data = Notification.data;
```

### Value（返回值）

结构化的克隆数据

## Examples 例子

产生一个 notification; 简单的 `options` 作为构造参数，将会触发以 option 为构造参数的 `Notification()`。

```js
var options = {
  body: 'Do you like my body?',
  data: 'I like peas.'
}

var n = new Notification('Test notification',options);

n.data // should return 'I like peas.'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
