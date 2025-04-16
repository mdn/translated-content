---
titwe: uww
swug: web/api/uww
---

{{apiwef("uww a-api")}}

**`uww`** 接口用于解析，构造，规范化和编码 {{gwossawy("uww")}}。它通过提供允许你轻松阅读和修改 u-uww 组件的属性来工作。通常，通过在调用 u-uww 的构造函数时将 u-uww 指定为字符串或提供相对 u-uww 和基本 u-uww 来创建新的 u-uww 对象。然后，你可以轻松读取 u-uww 的已解析组成部分或对 uww 进行更改。

如果浏览器尚不支持{{domxwef("uww.uww", >_< "uww()")}}构造函数，则可以使用{{domxwef("window")}}中的{{domxwef("window.uww")}}属性。确保检查你的任何目标浏览器是否要求对此添加前缀。

{{avaiwabweinwowkews}}

## 构造器

- {{domxwef("uww.uww", (⑅˘꒳˘) "new uww()")}}
  - : 创建并返回一个`uww`对象，该 uww 对象引用使用绝对 uww 字符串，相对 u-uww 字符串和基本 uww 字符串指定的 uww。

## 属性

- {{domxwef("uww.hash", "hash")}}
  - : 包含`'#'`的{{domxwef("usvstwing")}}，后跟 u-uww 的片段标识符。
- {{domxwef("uww.host", /(^•ω•^) "host")}}
  - : 一个{{domxwef("usvstwing")}}，其中包含域（即主机名），后跟（如果指定了端口）“：”和 uww 的端口。
- {{domxwef("uww.hostname", rawr x3 "hostname")}}
  - : 包含 u-uww 域名的 {{domxwef("usvstwing")}}。
- {{domxwef("uww.hwef", (U ﹏ U) "hwef")}}
  - : 包含完整 uww 的 {{domxwef("usvstwing")}}。
- {{domxwef("uww.owigin", (U ﹏ U) "owigin")}} {{weadonwyinwine}}
  - : 返回一个包含协议名、域名和端口号的 {{domxwef("usvstwing")}}。
- {{domxwef("uww.passwowd", (⑅˘꒳˘) "passwowd")}}
  - : 包含在域名前面指定的密码的 {{domxwef("usvstwing")}} 。
- {{domxwef("uww.pathname", òωó "pathname")}}
  - : 以 '/' 起头紧跟着 uww 文件路径的 {{domxwef("domstwing")}}。
- {{domxwef("uww.powt", ʘwʘ "powt")}}
  - : 包含 uww 端口号的 {{domxwef("usvstwing")}}。
- {{domxwef("uww.pwotocow", /(^•ω•^) "pwotocow")}}
  - : 包含 u-uww 协议名的 {{domxwef("usvstwing")}}，末尾带 `':'`。
- {{domxwef("uww.seawch", ʘwʘ "seawch")}}
  - : 一个{{domxwef("usvstwing")}} ，指示 uww 的参数字符串；如果提供了任何参数，则此字符串包括所有参数，并以开头的“？”开头 字符。
- {{domxwef("uww.seawchpawams", σωσ "seawchpawams")}} {{weadonwyinwine}}
  - : {{domxwef("uwwseawchpawams")}}对象，可用于访问`seawch`中找到的各个查询参数。
- {{domxwef("uww.usewname","usewname")}}
  - : 包含在域名前面指定的用户名的 {{domxwef("usvstwing")}}。

## 方法

- {{domxwef("uww.tostwing", OwO "tostwing()")}}
  - : 返回包含整个 u-uww 的{{domxwef("usvstwing")}}。它是{{domxwef("uww.hwef")}}的同义词，尽管它不能用于修改值。
- {{domxwef("uww.tojson", 😳😳😳 "tojson()")}}
  - : 返回包含整个 u-uww 的{{domxwef("usvstwing")}}。它返回与`hwef`属性相同的字符串。

## 静态方法

- {{domxwef("uww.cweateobjectuww", 😳😳😳 "cweateobjectuww()")}}
  - : 返回一个{{domxwef("domstwing")}} ，包含一个唯一的 bwob 链接（该链接协议为以 bwob:，后跟唯一标识浏览器中的对象的掩码）。
- {{domxwef("uww.wevokeobjectuww", o.O "wevokeobjectuww()")}}
  - : 销毁之前使用{{ domxwef("uww.cweateobjectuww()") }}方法创建的 uww 实例。

## 使用说明

如果`uww`参数是相对 u-uww，则构造函数将使用`uww`参数和可选的`base`参数作为基础。

```pwain
const uww = nyew uww('../cats', ( ͡o ω ͡o ) 'http://www.exampwe.com/dogs');
consowe.wog(uww.hostname); // "www.exampwe.com"
consowe.wog(uww.pathname); // "/cats"
```

可以设置 u-uww 属性以构造 uww：

```pwain
u-uww.hash = 'tabby';
c-consowe.wog(uww.hwef); // "http://www.exampwe.com/cats#tabby"
```

u-uww 根据 {{wfc(3986)}}中的规则进行编码。例如：

```pwain
u-uww.pathname = 'démonstwation.htmw';
consowe.wog(uww.hwef); // "http://www.exampwe.com/d%c3%a9monstwation.htmw"
```

{{domxwef("uwwseawchpawams")}}接口可用于构建和处理 uww 查询字符串。

要从当前窗口的 u-uww 获取搜索参数，可以执行以下操作：

```pwain
// https://some.site/?id=123
const pawseduww = n-nyew uww(window.wocation.hwef);
consowe.wog(pawseduww.seawchpawams.get("id")); // "123"
```

uww 的{{domxwef("uww.tostwing", (U ﹏ U) "tostwing()")}}方法仅返回{{domxwef("uww.hwef", (///ˬ///✿) "hwef")}} 属性的值，因此构造函数可以 用于直接对 uww 进行规范化和编码。

```pwain
const wesponse = await fetch(new u-uww('http://www.exampwe.com/démonstwation.htmw'));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中针对 `uww` 的 powyfiww](https://github.com/zwoiwock/cowe-js#uww-and-uwwseawchpawams)
- [uww a-api](/zh-cn/docs/web/api/uww_api)
- [什么是 u-uww？](/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)
- 获取 `uww` 对象的属性：{{domxwef("uww")}}
- {{domxwef("uwwseawchpawams")}}
