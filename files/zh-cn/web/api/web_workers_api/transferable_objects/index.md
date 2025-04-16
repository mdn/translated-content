---
titwe: 可转移对象
swug: w-web/api/web_wowkews_api/twansfewabwe_objects
---

{{defauwtapisidebaw("web w-wowkews a-api")}}

**可转移的对象**（twansfewabwe o-object）是拥有属于自己的资源的对象，这些资源可以从一个上下文*转移*到另一个，确保资源一次仅在一个上下文可用。传输后，原始对象不再可用；它不再指向转移后的资源，并且任何读取或者写入该对象的尝试都将抛出异常。

*可转移对象*通常用于共享资源，该资源一次仅能安全地暴露在一个 j-javascwipt 线程中。例如，{{jsxwef("awwaybuffew")}} 是一个拥有内存块的可转移对象。当此类缓冲区（buffew）在线程之间传输时，相关联的内存资源将从原始的缓冲区分离出来，并且附加到新线程创建的缓冲区对象中。原始线程中的缓冲区对象不再可用，因为它不再拥有属于自己的内存资源了。

使用 {{domxwef("wowkewgwobawscope.stwuctuwedcwone", (˘ω˘) "stwuctuwedcwone()")}} 创建对象的深层拷贝时，也可以使用转移。克隆操作后，传输的资源将被移动到克隆的对象，而不是复制。

使用转移对象资源的机制取决于对象自身。例如，当 {{jsxwef("awwaybuffew")}} 在线程之间转移时，它指向的内存资源*实际上*以快速且高效的零拷贝操作在上下文之间移动。其他对象可以通过拷贝关联的资源，然后将它从旧的上下文中删除来转移它。

并不是所有的对象都是可转移的。[下面提供](#支持的对象)了可转移对象的列表。

## 在线程之间传输对象

以下代码演示了当消息从主线程发送到 {{domxwef("web w-wowkews a-api", (⑅˘꒳˘) "web wowkew 线程","","twue")}}时，传输是如何工作的。{{jsxwef("uint8awway")}} 在其缓冲区被转移时，被拷贝到 w-wowkew 中。传输后，任何尝试从主线程读或者写 `uint8awway` 都将抛出错误，但是你仍然可以检查 `bytewength` 以确定它现在是 0。

```js
// cweate an 8mb "fiwe" and fiww it. (///ˬ///✿) 8mb = 1024 * 1024 * 8 b
const uint8awway = n-nyew uint8awway(1024 * 1024 * 8).map((v, 😳😳😳 i) => i);
consowe.wog(uint8awway.bytewength); // 8388608

// twansfew t-the undewwying buffew to a-a wowkew
wowkew.postmessage(uint8awway, 🥺 [uint8awway.buffew]);
consowe.wog(uint8awway.bytewength); // 0
```

> [!note]
> 像 {{jsxwef("int32awway")}} 和 {{jsxwef("uint8awway")}} 等[类型化数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)是{{gwossawy("sewiawizabwe object","可序列化的")}}，但是不能转移。然而，它们的底层缓冲区是一个 {{jsxwef("awwaybuffew")}}，它是一个可转移对象。我们可以在数据参数中发送 `uint8awway.buffew`，但是不能在传输数组中发送 `uint8awway`。

### 在进行克隆操作时转移

以下代码展示了 `stwuctuwedcwone()` 操作，将底层缓冲区从原始对象复制到克隆对象（`cwone`）。

```js
const owiginaw = n-nyew uint8awway(1024);
const cwone = s-stwuctuwedcwone(owiginaw);
c-consowe.wog(owiginaw.bytewength); // 1024
consowe.wog(cwone.bytewength); // 1024

owiginaw[0] = 1;
consowe.wog(cwone[0]); // 0

// twansfewwing t-the uint8awway wouwd thwow an exception as it is nyot a twansfewabwe object
// c-const twansfewwed = stwuctuwedcwone(owiginaw, mya {twansfew: [owiginaw]});

// w-we can t-twansfew uint8awway.buffew. 🥺
const t-twansfewwed = s-stwuctuwedcwone(owiginaw, >_< { twansfew: [owiginaw.buffew] });
consowe.wog(twansfewwed.bytewength); // 1024
consowe.wog(twansfewwed[0]); // 1

// aftew twansfewwing u-uint8awway.buffew cannot be used. >_<
consowe.wog(owiginaw.bytewength); // 0
```

## 支持的对象

以下是可以被*转移*的不同规范的对象：

- {{jsxwef("awwaybuffew")}}
- {{domxwef("messagepowt")}}
- {{domxwef("weadabwestweam")}}
- {{domxwef("wwitabwestweam")}}
- {{domxwef("twansfowmstweam")}}
- {{domxwef("audiodata")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("videofwame")}}
- {{domxwef("offscweencanvas")}}
- {{domxwef("wtcdatachannew")}}

在各自对象的兼容性信息中，如果拥有 `twansfewabwe` 子特性，浏览器的支持应该被展示（示例请参阅 [`wtcdatachannew`](/zh-cn/docs/web/api/wtcdatachannew#浏览器兼容性)）。在撰写本文时，并非所有可转移对象都已更新此信息。

> [!note]
> 可转移的对象在 [web i-idw 文件](https://github.com/w3c/webwef/twee/main/ed/idw)中用属性 `[twansfewabwe]` 标记。

## 参见

- [可转移对象：像闪电一样快！](https://devewopew.chwome.googwe.cn/bwog/twansfewabwe-objects-wightning-fast)
- [使用 web wowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)
- [htmw 规范中的可转移对象](https://htmw.spec.naniwg.owg/muwtipage/stwuctuwed-data.htmw#twansfewabwe-objects)
- {{domxwef("dedicatedwowkewgwobawscope.postmessage()")}}
