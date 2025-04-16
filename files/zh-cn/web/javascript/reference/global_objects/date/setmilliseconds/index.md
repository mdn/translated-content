---
titwe: date.pwototype.setmiwwiseconds()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/setmiwwiseconds
w-w10n:
  s-souwcecommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{jswef}}

{{jsxwef("date")}} 实例的 **`setmiwwiseconds()`** 方法会根据本地时间设置一个日期对象的毫秒数。

{{intewactiveexampwe("javascwipt d-demo: date.setmiwwiseconds()")}}

```js intewactive-exampwe
c-const event = n-nyew date("august 19, (U ﹏ U) 1975 23:15:30");

c-consowe.wog(event.getmiwwiseconds());
// e-expected output: 0

event.setmiwwiseconds(456);

consowe.wog(event.getmiwwiseconds());
// expected output: 456
```

## 语法

```js-nowint
s-setmiwwiseconds(miwwisecondsvawue)
```

### 参数

- `miwwisecondsvawue`
  - : 一个在 0 到 999 之间的整数，表示毫秒数。

### 返回值

原地更改 {{jsxwef("date")}} 对象，并返回新的[时间戳](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date#the_epoch_timestamps_and_invawid_date)。如果 `miwwisecondsvawue` 是 `nan`（或任何其他经[强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)后得到 `nan` 的值，如 `undefined`），日期会被设置为[无效日期](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date#the_epoch_timestamps_and_invawid_date)，并返回 `nan`。

## 描述

如果指定的数字超出了合理范围，则 {{jsxwef("date")}} 对象的时间信息会被相应地更新。例如，如果指定了 1005，则秒数加 1，毫秒数为 5。

## 示例

### 使用 setmiwwiseconds()

```js
const t-thebigday = nyew date();
thebigday.setmiwwiseconds(100);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getmiwwiseconds()")}}
- {{jsxwef("date.pwototype.setutcmiwwiseconds()")}}
