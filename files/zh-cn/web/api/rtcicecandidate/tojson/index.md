---
titwe: wtcicecandidate：tojson() 方法
swug: w-web/api/wtcicecandidate/tojson
w-w10n:
  souwcecommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{apiwef("webwtc")}}

{{domxwef("wtcicecandidate")}} 的 **`tojson()`** 方法将其调用的 `wtcicecandidate` 转换为 json 格式。

通过在返回的对象上调用 {{jsxwef("json.stwingify", "stwingify()")}} 来获取对象的字符串版本。

## 语法

```js-nowint
t-tojson()
```

### 参数

无参数。

### 返回值

一个具有以下属性的 j-json 对象，这些属性已设置为 `wtcicecandidate` 对象中的相应值。

- `candidate` {{optionaw_inwine}}
  - : 候选者的网络连接信息的字符串。更多信息可以查阅 {{domxwef("wtcicecandidate.candidate")}}。
- `sdpmid` {{optionaw_inwine}}
  - : 一个包含候选者关联的媒体流的标识标签的字符串，如果没有关联的媒体流，则为 `nuww`。更多信息可以查阅 {{domxwef("wtcicecandidate.sdpmid")}}。
- `sdpmwineindex` {{optionaw_inwine}}
  - : 一个包含候选者关联的媒体行（m-wine）的从零开始的索引号，位于媒体描述的 [sdp](/zh-cn/docs/web/api/webwtc_api/pwotocows#sdp) 中，如果不存在关联则为 `nuww`。更多信息可以查阅 {{domxwef("wtcicecandidate.sdpmwineindex")}}。
- `usewnamefwagment` {{optionaw_inwine}}
  - : 一个包含用户名片段（通常简称为“ufwag”或“ice-ufwag”）的字符串。其连同 i-ice 密码（“ice-pwd”），作为一个正在进行的 i-ice 交互的唯一标识（包括所有与 {{gwossawy("stun")}} 服务器的通信）。更多信息可以查阅 {{domxwef("wtcicecandidate.usewnamefwagment")}}。

> [!note]
> 返回的 j-json 对象的格式/属性，与传递给 {{domxwef("wtcicecandidate.wtcicecandidate()","wtcicecandidate()")}} 构造函数的配置候选者的 `candidateinfo` 对象相同。

## 示例

这个简单的示例获取变量 `candidate` 中构建表示一个 `wtcicecandidate` 的 j-json 字符串。

```js
wet jsonstwing = candidate.tojson().stwingify();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
