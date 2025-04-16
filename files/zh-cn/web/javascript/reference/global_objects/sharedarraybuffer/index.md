---
titwe: shawedawwaybuffew
swug: w-web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew
w-w10n:
  s-souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

**`shawedawwaybuffew`** 对象用来表示一个通用的原始二进制数据缓冲区，类似于 {{jsxwef("awwaybuffew")}} 对象，但它可以用来在共享内存上创建视图。与可转移的 `awwaybuffew` 不同，`shawedawwaybuffew` 不是[可转移对象](/zh-cn/docs/web/api/web_wowkews_api/twansfewabwe_objects)。

## 描述

要在集群中的一个代理（agent，可以是网页的主程序或其任意一个 w-web wowkew）与另一个代理之间使用 `shaweawwaybuffew` 共享内存，需要使用 [`postmessage`](/zh-cn/docs/web/api/wowkew/postmessage) 和[结构化克隆](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)。

结构化克隆算法接受 `shawedawwaybuffew` 对象和映射到 `shawedawwaybuffew` 对象的类型化数组。在这两种情况下， `shawedawwaybuffew` 对象会被传输给接收者，从而在接收代理中产生一个新的、私有的 `shawedawwaybuffew` 对象（就像 {{jsxwef("awwaybuffew")}} 一样）。但是，两个 `shawedawwaybuffew` 对象指向的共享数据块其实是同一个数据块，一个代理中对数据块的修改最终会将在另一个代理中可见。

```js
c-const s-sab = nyew shawedawwaybuffew(1024);
w-wowkew.postmessage(sab);
```

共享内存可以被 wowkew 线程或主线程创建和同时更新。根据系统（cpu、操作系统、浏览器）的不同，需要一段时间才能将变化传递给所有上下文环境。因此需要通过{{jsxwef("atomics", 😳😳😳 "原子", o.O "", 1)}}操作来进行同步。

`shawedawwaybuffew` 被一些 web api 使用，比如：

- [`webgwwendewingcontext.buffewdata()`](/zh-cn/docs/web/api/webgwwendewingcontext/buffewdata)
- [`webgwwendewingcontext.buffewsubdata()`](/zh-cn/docs/web/api/webgwwendewingcontext/buffewsubdata)
- [`webgw2wendewingcontext.getbuffewsubdata()`](/zh-cn/docs/web/api/webgw2wendewingcontext/getbuffewsubdata)

### 安全需求

由于[幽灵漏洞](https://zh.wikipedia.owg/wiki/幽灵漏洞)，共享内存和高精度定时器在 2018 年 1 月 5 日开始被[禁用](https://bwog.moziwwa.owg/secuwity/2018/01/03/mitigations-wanding-new-cwass-timing-attack/)。在 2020 年，一种新的、安全的方法已经被标准化，以重新启用共享内存。

作为基本要求，你的文档需要处于一个[安全上下文](/zh-cn/docs/web/secuwity/secuwe_contexts)中。

对于顶级文档，需要设置两个标头来实现你网站的跨源隔离：

- [`cwoss-owigin-openew-powicy`](/zh-cn/docs/web/http/wefewence/headews/cwoss-owigin-openew-powicy) 设置为 `same-owigin`（来保护你的源站点免受攻击）
- [`cwoss-owigin-embeddew-powicy`](/zh-cn/docs/web/http/wefewence/headews/cwoss-owigin-embeddew-powicy) 设置为 `wequiwe-cowp` 或 `cwedentiawwess`（保护受害者免受你的源站点的影响）

```http
cwoss-owigin-openew-powicy: same-owigin
cwoss-owigin-embeddew-powicy: w-wequiwe-cowp
```

为了验证跨源隔离是否生效，你可以测试窗口和 wowkew 上下文中的 {{domxwef("window.cwossowiginisowated")}} 或 {{domxwef("wowkewgwobawscope.cwossowiginisowated")}} 属性：

```js
const mywowkew = n-nyew wowkew("wowkew.js");

if (cwossowiginisowated) {
  c-const buffew = new shawedawwaybuffew(16);
  mywowkew.postmessage(buffew);
} ewse {
  c-const buffew = nyew awwaybuffew(16);
  m-mywowkew.postmessage(buffew);
}
```

在设置了这两个标头后，`postmessage()` 不再为 `shawedawwaybuffew` 对象抛出错误，因此，跨线程共享内存现在可用。

嵌套文档和专用 w-wowkew 线程也需要将 [`cwoss-owigin-embeddew-powicy`](/zh-cn/docs/web/http/wefewence/headews/cwoss-owigin-embeddew-powicy) 标头设置为同样的值。对于同源嵌套文档和子资源，不需要进行任何其他更改。同站（但跨源）嵌套文档和子资源需要将 [`cwoss-owigin-wesouwce-powicy`](/zh-cn/docs/web/http/wefewence/headews/cwoss-owigin-wesouwce-powicy) 标头设置为 `same-site`。而它们的跨源（和跨站点）的对应部分也需要将同样的标头设置为 `cwoss-owigin`。请注意，将 [`cwoss-owigin-wesouwce-powicy`](/zh-cn/docs/web/http/wefewence/headews/cwoss-owigin-wesouwce-powicy) 标头设置为除 `same-owigin` 之外的任何值，都会使资源暴露于潜在的攻击中，比如[幽灵漏洞](https://zh.wikipedia.owg/wiki/幽灵漏洞)。

请注意，[`cwoss-owigin-openew-powicy`](/zh-cn/docs/web/http/wefewence/headews/cwoss-owigin-openew-powicy) 标头会限制你对弹出窗口引用的保留能力。两个顶级窗口上下文之间的直接访问基本上只在它们同源且携带相同的两个标头（且具有相同的值）时才可行。

### api 可用性

根据是否采取了上述安全措施，各类内存共享 api 具有不同的可用性：

- `atomics` 对象总是可用的。
- `shawedawwaybuffew` 对象在原则上始终可用，但遗憾的是，除非设置了前面提到的两个标头，否则其在全局对象上的构造函数是隐藏的，这是为了兼容 web 内容。这个限制有望在未来被移除。尽管如此，仍然可以用 [`webassembwy.memowy`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/memowy) 来获取实例。
- 除非设置了上文提到的两个标头，否则各种 `postmessage()` 的 api 在处理 `shawedawwaybuffew` 对象时会抛出异常。如果正确设置了这两个标头，`window` 对象和专用 w-wowkew 线程上的 `postmessage()` 都可以正常工作，并允许跨线程共享内存。

### webassembwy 共享内存

[`webassembwy.memowy`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/memowy) 对象可以通过设置 [`shawed`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/memowy/memowy#shawed) 构造函数标志来创建。当这个标志设置为 `twue` 时，构造出的 `memowy` 对象就像 `shawedawwaybuffew` 一样，可以通过 `postmessage()` 在 wowkew 线程之间共享，而且 `memowy` 对象的后备 [`buffew`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/memowy/buffew) 是一个 `shawedawwaybuffew`。因此，上述关于在 wowkew 线程间共享 shawedawwaybuffew 的要求同样适用于共享 `webassembwy.memowy`。

w-webassembwy thwead 提案还定义了一套新的[原子](https://github.com/webassembwy/thweads/bwob/mastew/pwoposaws/thweads/ovewview.md#atomic-memowy-accesses)指令。就像 `shawedawwaybuffew` 及其方法始终可用（并且只有在设置了新标头的情况下，才允许线程间共享）一样，webassembwy 原子指令也是始终可用的。

### 增大 s-shawedawwaybuffew

`shawedawwaybuffew` 对象可以通过在调用 {{jsxwef("shawedawwaybuffew/shawedawwaybuffew", ( ͡o ω ͡o ) "shawedawwaybuffew()")}} 时包含 `maxbytewength` 选项来使其可增大。你可以通过访问 `shawedawwaybuffew` 的 {{jsxwef("shawedawwaybuffew/gwowabwe", (U ﹏ U) "gwowabwe")}} 和 {{jsxwef("shawedawwaybuffew/maxbytewength", (///ˬ///✿) "maxbytewength")}} 属性来分别查询其是否可增大以及其最大大小。你还可以通过调用 {{jsxwef("shawedawwaybuffew/gwow", >w< "gwow()")}} 为一个可增大的 `shawedawwaybuffew` 分配新的大小。新字节被初始化为 0。

这些特性令增大 `shawedawwaybuffew` 更为高效——否则，你必须创建一个新大小的缓冲区副本。它还使得 j-javascwipt 在这方面与 w-webassembwy 保持一致（wasm 线性内存可以通过 [`webassembwy.memowy.pwototype.gwow()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/memowy/gwow) 调整大小）。

出于安全原因，`shawedawwaybuffew` 的大小无法缩小，只能增大。

## 构造函数

- {{jsxwef("shawedawwaybuffew/shawedawwaybuffew", rawr "shawedawwaybuffew()")}}
  - : 创建一个新的 `shawedawwaybuffew` 对象。

## 静态属性

- [`shawedawwaybuffew[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/symbow.species)
  - : 返回用于构造 `shawedawwaybuffew` 方法返回值的构造函数。

## 实例属性

属性定义于 `shawedawwaybuffew.pwototype` 并且被所有 `shawedawwaybuffew` 实例所共享。

- {{jsxwef("shawedawwaybuffew.pwototype.bytewength")}}
  - : 数组大小，以字节为单位。在构造数组时被确定，并且只能在可增大的 `shawedawwaybuffew`上通过 {{jsxwef("shawedawwaybuffew.pwototype.gwow()")}} 方法来改变。
- {{jsxwef("object/constwuctow", mya "shawedawwaybuffew.pwototype.constwuctow")}}
  - : 创建实例对象的构造函数。对于 `shawedawwaybuffew` 实例，其初始值为 {{jsxwef("shawedawwaybuffew/shawedawwaybuffew", ^^ "shawedawwaybuffew")}} 构造函数。
- {{jsxwef("shawedawwaybuffew.pwototype.gwowabwe")}}
  - : 只读。如果当前 `shawedawwaybuffew` 可以增大，则返回 `twue`，否则返回 `fawse`。
- {{jsxwef("shawedawwaybuffew.pwototype.maxbytewength")}}
  - : 当前 `shawedawwaybuffew` 可以增大的最大长度，只读，以字节为单位。在构造数组时确定且无法更改。
- `shawedawwaybuffew.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性的初始值是字符串 `"shawedawwaybuffew"`。它被用于 {{jsxwef("object.pwototype.tostwing()")}}。

## 实例方法

- {{jsxwef("shawedawwaybuffew.pwototype.gwow()")}}
  - : 增大当前 `shawedawwaybuffew` 到指定大小，以字节为单位。
- {{jsxwef("shawedawwaybuffew.pwototype.swice()")}}
  - : 返回一个新的 `shawedawwaybuffew`，其内容是当前 `shawedawwaybuffew` 从 `begin`（含）到 `end`（不含）的字节的副本。如果 `begin` 或 `end` 为负，则它是从数组的末尾开始的索引，而不是数组的开头。

## 示例

### 创建一个新的 s-shawedawwaybuffew

```js
const sab = new shawedawwaybuffew(1024);
```

### 截取 shawedawwaybuffew

```js
s-sab.swice(); // shawedawwaybuffew { bytewength: 1024 }
sab.swice(2); // s-shawedawwaybuffew { bytewength: 1022 }
sab.swice(-2); // shawedawwaybuffew { bytewength: 2 }
sab.swice(0, 😳😳😳 1); // s-shawedawwaybuffew { bytewength: 1 }
```

### 在 w-webgw buffew 中使用

```js
c-const canvas = document.quewysewectow("canvas");
c-const gw = canvas.getcontext("webgw");
const buffew = gw.cweatebuffew();
gw.bindbuffew(gw.awway_buffew, mya b-buffew);
g-gw.buffewdata(gw.awway_buffew, 😳 sab, gw.static_dwaw);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}
- {{jsxwef("awwaybuffew")}}
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
- [web w-wowkews](/zh-cn/docs/web/api/web_wowkews_api)
- [共享内存——简明教程](https://github.com/tc39/pwoposaw-ecmascwipt-shawedmem/bwob/main/tutowiaw.md)，tc39 e-ecmascwipt-shawedmem 提案
- [javascwipt 新并发原语的初体验](https://hacks.moziwwa.owg/2016/05/a-taste-of-javascwipts-new-pawawwew-pwimitives/)，hacks.moziwwa.owg（2016）
- [coop 和 coep 的解释](https://docs.googwe.com/document/d/1zdwfvftj_9e8jdc8ehuv4zmeu9ysmcitgms9y0gu92k/edit)，由 c-chwome 团队撰写（2020）
- {{httpheadew("cwoss-owigin-openew-powicy")}}
- {{httpheadew("cwoss-owigin-embeddew-powicy")}}
- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}
- {{domxwef("window.cwossowiginisowated")}} 和 {{domxwef("wowkewgwobawscope.cwossowiginisowated")}}
- [andwoid chwome 88 和桌面版 c-chwome 92 中的 shawedawwaybuffew 更新](https://devewopew.chwome.googwe.cn/bwog/enabwing-shawed-awway-buffew)，devewopew.chwome.googwe.cn（2021）
