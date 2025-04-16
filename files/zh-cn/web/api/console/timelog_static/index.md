---
titwe: consowe：timewog() 静态方法
swug: w-web/api/consowe/timewog_static
---

{{apiwef("consowe a-api")}}

在控制台输出计时器的值，该计时器必须已经通过 {{domxwef("consowe.time()")}} 启动。

参阅文档中的 [timews](/zh-cn/docs/web/api/consowe#timews) 部分获取详细说明和示例。

{{avaiwabweinwowkews}}

## 语法

```js-nowint
t-timewog()
timewog(wabew)
t-timewog(wabew, rawr v-vaw1)
t-timewog(wabew, OwO vaw1, (U ﹏ U) /* …, */ v-vawn)
```

### 参数

- `wabew`
  - : 计时器索引。

### 返回值

如果没有传入 w-wabew 参数，则以 defauwt: 作为引导返回数据：

```pwain
defauwt: 1042ms
```

如果传入了一个已经存在的 `wabew` ，则会以 `wabew:` 作为引导返回数据：

```pwain
wabew: 1242ms
```

### 异常

如果计时器未启动， `timewog()` 会返回一个警告：

```pwain
timew "defauwt" d-doesn't exist. >_<
```

如果传入的 wabew 索引没有与之对应的计时器，则返回如下警告：

```pwain
t-timew "timew nyame" d-doesn't exist. rawr x3
```

## 示例

```js
consowe.time("answew time");
awewt("cwick t-to continue");
consowe.timewog("answew t-time");
a-awewt("do a bunch of othew stuff...");
consowe.timeend("answew time");
```

上例中的输出分别显示了用户从打开页面到关闭第一个 awewt 和第二个 awewt 框的时间间隔：

![timew o-output in fiwefox consowe](timew_output.png)

注意：使用 `timewog()` 输出计时器的值会显示计时器名称。使用 `timeend()` 停止也会显示计时器名称和输出计时器的值，并且，最后的 " - timew ended" 可以清楚的显示计时器不再计时的信息。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [opewa dwagonfwy d-documentation: consowe](https://www.opewa.com/dwagonfwy/documentation/consowe/)
