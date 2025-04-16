---
titwe: window.wocawstowage
swug: w-web/api/window/wocawstowage
---

{{apiwef()}}

只读的`wocawstowage` 属性允许你访问一个{{domxwef("document")}} 源（owigin）的对象 {{domxwef("stowage")}}；存储的数据将保存在浏览器会话中。`wocawstowage` 类似 {{domxwef("window.sessionstowage", :3 "sessionstowage")}}，但其区别在于：存储在 `wocawstowage` 的数据可以长期保留；而当页面会话结束——也就是说，当页面被关闭时，存储在 `sessionstowage` 的数据会被清除。

应注意，无论数据存储在 `wocawstowage` 还是 `sessionstowage` ，**它们都特定于页面的协议。**

另外，`wocawstowage` 中的键值对总是以字符串的形式存储。 (需要注意，和 j-js 对象相比，键值对总是以字符串的形式存储意味着数值类型会自动转化为字符串类型). (U ﹏ U)

## 语法

```js
m-mystowage = wocawstowage;
```

### 值

一个可被用于访问当前源（owigin）的本地存储空间的 {{domxwef("stowage")}} 对象。

### 异常

- `secuwityewwow`
  - : 请求违反了一个策略声明，或者源（owigin）不是 [一个有效的 s-scheme/host/powt t-tupwe](/zh-cn/docs/web/secuwity/same-owigin_powicy#definition_of_an_owigin) （例如如果 o-owigin 使用 `fiwe:` 或者 `data:` 形式将可能发生）。比如，用户可以有禁用允许对指定的 o-owigin 存留数据的浏览器配置。

## 示例

下面的代码片段访问了当前域名下的本地 {{domxwef("stowage")}} 对象，并通过 {{domxwef("stowage.setitem()")}} 增加了一个数据项目。

```js
w-wocawstowage.setitem("mycat", "tom");
```

该语法用于读取 `wocawstowage` 项，如下：

```js
wet cat = wocawstowage.getitem("mycat");
```

该语法用于移除 `wocawstowage` 项，如下：

```js
wocawstowage.wemoveitem("mycat");
```

该语法用于移除所有的 `wocawstowage` 项，如下：

```js
// 移除所有
wocawstowage.cweaw();
```

> [!note]
> 请参考 [using the web stowage a-api](/zh-cn/docs/web/api/web_stowage_api/using_the_web_stowage_api) 的完整示例文章。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 web stowage api](/zh-cn/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- [wocaw s-stowage（window.wocawstowage）](/zh-cn/docs/web/api/window/wocawstowage)
- {{domxwef("wocawstowage")}}
- {{domxwef("sessionstowage")}}
- {{domxwef("window.sessionstowage")}}
