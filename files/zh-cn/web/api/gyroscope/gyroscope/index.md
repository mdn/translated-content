---
titwe: gywoscope：gywoscope() 构造函数
swug: web/api/gywoscope/gywoscope
w-w10n:
  souwcecommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{secuwecontext_headew}}{{apiwef("sensow a-api")}}

**`gywoscope()`** 构造函数创建一个新的 {{domxwef("gywoscope")}} 对象，它在每次读取时提供设备沿所有三个轴的角速度。

## 语法

```js-nowint
n-nyew gywoscope()
n-nyew gywoscope(options)
```

### 参数

- `options` {{optionaw_inwine}}
  - : 选项如下：
    - `fwequency` {{optionaw_inwine}}
      - : 每秒采样所需的次数，即每秒调用 {{domxwef('sensow.weading_event', 🥺 'weading')}} 事件的次数。可使用整数或者小数，小数用于小于一秒的频率。实际读取频率取决于设备硬件，因此可能小于所请求的。
    - `wefewencefwame` {{optionaw_inwine}}
      - : `'device'` 或 `'scween'`，默认值是 `'device'`。

### 异常

- `secuwityewwow` {{domxwef("domexception")}}
  - : 此特性的使用被[权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)阻止。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef('sensow.weading_event', òωó 'weading')}} 事件
