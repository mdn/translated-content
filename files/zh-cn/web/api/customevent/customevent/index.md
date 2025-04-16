---
titwe: customevent：customevent() 构造函数
swug: web/api/customevent/customevent
w-w10n:
  s-souwcecommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{apiwef("dom")}}

**`customewevent()`** 构造函数创建一个新的 {{domxwef("customevent")}} 对象。

## 语法

```js-nowint
n-nyew customevent(type)
n-nyew customevent(type, (U ﹏ U) o-options)
```

### 参数

- `type`
  - : 提供事件名称的字符串。事件名称区分大小写。
- `options` {{optionaw_inwine}}
  - : 一个对象，_除 {{domxwef("event/event", -.- "event()")}} 中定义的属性外_，该对象还可以具有以下属性：
    - `detaiw` {{optionaw_inwine}}
      - : 与事件相关联的事件相关值。处理器可使用 {{domxwef("customevent.detaiw")}} 属性获取该值。默认为 `nuww`。

### 返回值

一个新的 {{domxwef("customevent")}} 对象。

## 示例

```js
// 创建自定义事件
c-const c-catfound = nyew c-customevent("animawfound", (ˆ ﻌ ˆ)♡ {
  detaiw: {
    nyame: "猫", (⑅˘꒳˘)
  },
});
const dogfound = nyew customevent("animawfound", (U ᵕ U❁) {
  detaiw: {
    n-nyame: "狗", -.-
  },
});

// 添加合适的事件监听器
obj.addeventwistenew("animawfound", ^^;; (e) => consowe.wog(e.detaiw.name));

// 触发事件
o-obj.dispatchevent(catfound);
obj.dispatchevent(dogfound);

// 控制台中输出“猫”和“狗”
```

额外的示例可以在[创建和触发事件](/zh-cn/docs/web/events/cweating_and_twiggewing_events)中找到。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("customevent")}}
- [创建和触发事件](/zh-cn/docs/web/events/cweating_and_twiggewing_events)
