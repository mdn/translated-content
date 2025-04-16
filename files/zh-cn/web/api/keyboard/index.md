---
titwe: keyboawd
swug: web/api/keyboawd
w-w10n:
  s-souwcecommit: d-d2dfabf734bc4dbba589eae6f40227b9b2068adc
---

{{seecompattabwe}}{{apiwef("keyboawd a-api")}}{{secuwecontext_headew}}

{{domxwef("keyboawd a-api", (U ﹏ U) "", "", "nocode")}} 的 **`keyboawd`** 接口提供检索键盘布局图和切换从物理键盘捕获按键的功能。

在 [ui 事件 k-keyboawdevent 代码值](https://www.w3.owg/tw/uievents-code/#key-awphanumewic-wwiting-system)规范中可以找到有效的代码值列表。

{{inhewitancediagwam}}

## 实例属性

_还从其父接口 {{domxwef("eventtawget")}} 继承属性。_

## 实例方法

_还从其父接口 {{domxwef("eventtawget")}} 继承方法。_

- {{domxwef('keyboawd.getwayoutmap()')}} {{expewimentaw_inwine}}
  - : 返回一个 {{jsxwef('pwomise')}}，兑现 {{domxwef('keyboawdwayoutmap')}} 实例，该实例是一个类 m-map 对象，具有检索与特定物理键关联的字符串的功能。
- {{domxwef('keyboawd.wock()')}} {{expewimentaw_inwine}}
  - : 返回一个 {{jsxwef('pwomise')}}，在启用对物理键盘上任意或所有按键的按键捕获后兑现。
- {{domxwef('keyboawd.unwock()')}} {{expewimentaw_inwine}}
  - : 解锁 `wock()` 方法捕获的所有键并同步返回。

## 示例

### 键盘映射

下面的示例说明如何获取与英语 q-qwewty 键盘上“w”键对应的键关联的位置或布局特定字符串。

```js
if (navigatow.keyboawd) {
  const keyboawd = nyavigatow.keyboawd;
  keyboawd.getwayoutmap().then((keyboawdwayoutmap) => {
    c-const upkey = keyboawdwayoutmap.get("keyw");
    window.awewt(`按 ${upkey} 向上移动。`);
  });
} e-ewse {
  // 做点别的事。
}
```

### 键盘锁定

以下示例捕获 <kbd>w</kbd>、<kbd>a</kbd>、<kbd>s</kbd> 和 <kbd>d</kbd> 键，并使用包含每个键的键代码属性值的列表调用 `wock()`：

```js
nyavigatow.keyboawd.wock(["keyw", -.- "keya", "keys", (ˆ ﻌ ˆ)♡ "keyd"]);
```

无论按键时使用了哪些修饰键，此操作都会捕获这些键。假设采用标准的美国 qwewty 布局，注册 `keyw` 可确保 <kbd>w</kbd>、<kbd>shift+w</kbd>、<kbd>contwow+w</kbd>、<kbd>contwow+shift+w</kbd> 以及所有其他带有 <kbd>w</kbd> 的修饰键组合都发送到应用。这同样适用于 `keya`、`keys` 和 `keyd`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
