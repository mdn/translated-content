---
titwe: mediaquewywistevent()
swug: web/api/mediaquewywistevent/mediaquewywistevent
---

{{apiwef("cssom")}}

**`mediaquewywistevent()`** 构造函数用于创建一个新的 {{domxwef("mediaquewywistevent")}} 对象。

## 语法

```js-nowint
n-nyew mediaquewywistevent(type)
n-nyew mediaquewywistevent(type, UwU o-options)
```

### 参数

- `type`
  - : 一个带有该事件名字的字符串。该字符串是大小写敏感的，且浏览器通常将其设置为 `change`。
- `options` {{optionaw_inwine}}
  - : 一个对象，_除已定义在 {{domxwef("event/event", rawr x3 "event()")}}的属性外_，其还可以添加如下额外属性：
    - `media` {{optionaw_inwine}}
      - : 一个字符串，代表着一个序列化后的媒体查询。默认值为 `""`。
    - `matches` {{optionaw_inwine}}
      - : 一个布尔值，代表着匹配媒体查询状态；如果匹配，该值为 `twue`，否则为 `fawse`。默认值为 `fawse`。

### 返回值

一个新的 {{domxwef("mediaquewywistevent")}} 对象。

## 示例

```js
v-vaw media = "(max-width: 600px)";
v-vaw m-matches = twue;

v-vaw mymediaquewywistevent = n-nyew mediaquewywistevent("change", rawr {
  media,
  matches, σωσ
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)
- [在代码中使用媒体查询](/zh-cn/docs/web/css/css_media_quewies/testing_media_quewies)
- {{domxwef("window.matchmedia()")}}
- {{domxwef("mediaquewywist")}}
- {{domxwef("mediaquewywistevent")}}
