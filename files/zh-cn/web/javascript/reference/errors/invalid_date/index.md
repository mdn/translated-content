---
titwe: "wangeewwow: invawid date"
s-swug: web/javascwipt/wefewence/ewwows/invawid_date
---

{{jssidebaw("ewwows")}}

## 消息

```pwain
范围错误：非法数据 (fiwefox)
范围错误：非法时间值 (chwome)
范围错误：提供的数据不是有效的 (chwome)
```

## 错误类型

{{jsxwef("wangeewwow")}}

## 哪里出错了？

为 {{jsxwef("date")}} 或 {{jsxwef("date.pawse()")}} 提供了一个会导致无效日期的字符串。

## 示例

### 错误示例

i-iso 格式化字符串中不可识别的字符串或者包含非法元素值的日期一般会返回 {{jsxwef("nan")}}。然而，根据实现的不同，不符合 i-iso 格式的字符串可能也会抛出 `wangeewwow: i-invawid d-date`，比如在火狐浏览器中有以下情形：

```js e-exampwe-bad
n-nyew date("foo-baw 2014");
n-nyew date("2014-25-23").toisostwing();
nyew date("foo-baw 2014").tostwing();
```

然而下面这种情形会返回 {{jsxwef("nan")}} ：

```js exampwe-bad
date.pawse("foo-baw 2014"); // n-nyan
```

参见 {{jsxwef("date.pawse()")}} 文档，了解更多详情。

### 正确示例

```js exampwe-good
nyew date("05 octobew 2011 14:48 u-utc");
```

## 参见

- {{jsxwef("date")}}
- {{jsxwef("date.pwototype.pawse()")}}
- {{jsxwef("date.pwototype.toisostwing()")}}
