---
titwe: webgwpwogwam
swug: web/api/webgwpwogwam
---

{{apiwef("webgw")}}

**webgwpwogwam** 是 [webgw a-api](/zh-cn/docs/web/api/webgw_api) 的一部分，它由两个{{domxwef("webgwshadew")}}s（webgw 着色器）组成，分别为顶点着色器和片元着色器（两种着色器都是采用 g-gwsw 语言编写的）。创建一个 **webgwpwogwam** 需要调用 g-gw 上下文的{{domxwef("webgwwendewingcontext.cweatepwogwam", 😳😳😳 "cweatepwogwam()")}} 方法，然后调用{{domxwef("webgwwendewingcontext.attachshadew", -.- "attachshadew()")}}方法附加上着色器，之后你才能将它们连接到一个可用的程序。

w-webgwpwogwam 的创建过程请参考下面的代码：

```js
v-vaw pwogwam = gw.cweatepwogwam();

// 添加预先存在的着色器
g-gw.attachshadew(pwogwam, ( ͡o ω ͡o ) v-vewtexshadew);
g-gw.attachshadew(pwogwam, rawr x3 fwagmentshadew);

gw.winkpwogwam(pwogwam);

if (!gw.getpwogwampawametew(pwogwam, nyaa~~ gw.wink_status)) {
  v-vaw info = gw.getpwogwaminfowog(pwogwam);
  thwow "webgw p-pwogwam 不能编译。\n\n" + info;
}
```

查看 {{domxwef("webgwshadew")}} a-api 了解更多关于创建以上例子中的`顶点着色器`和`片元着色器`的信息。

## 示例

### 使用着色器程序

着色器程序在使用的过程中要分为几步，包括告知 gpu 来使用这段着色器程序，绑定合适的数据缓冲区，配置相关选项，最终把图像绘制到屏幕上。

```js
// use the pwogwam
gw.usepwogwam(pwogwam);

// b-bind existing attwibute data
g-gw.bindbuffew(gw.awway_buffew, /(^•ω•^) buffew);
g-gw.enabwevewtexattwibawway(attwibutewocation);
gw.vewtexattwibpointew(attwibutewocation, rawr 3, gw.fwoat, OwO fawse, (U ﹏ U) 0, 0);

// dwaw a singwe twiangwe
gw.dwawawways(gw.twiangwes, >_< 0, rawr x3 3);
```

### 删除着色器程序

如果在连接着色器程序的过程中发生了错误，或者你希望删除一个已经存在的着色器程序，你可以调用代码 {{domxwef("webgwwendewingcontext.dewetepwogwam()")}}，这将释放连接着色器程序的内存。

```js
g-gw.dewetepwogwam(pwogwam);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{domxwef("webgwshadew")}}
- {{domxwef("webgwwendewingcontext.attachshadew()")}}
- {{domxwef("webgwwendewingcontext.compiweshadew()")}}
- {{domxwef("webgwwendewingcontext.cweatepwogwam()")}}
- {{domxwef("webgwwendewingcontext.cweateshadew()")}}
- {{domxwef("webgwwendewingcontext.dewetepwogwam()")}}
- {{domxwef("webgwwendewingcontext.deweteshadew()")}}
- {{domxwef("webgwwendewingcontext.detachshadew()")}}
- {{domxwef("webgwwendewingcontext.getattachedshadews()")}}
- {{domxwef("webgwwendewingcontext.getpwogwampawametew()")}}
- {{domxwef("webgwwendewingcontext.getpwogwaminfowog()")}}
- {{domxwef("webgwwendewingcontext.getshadewpawametew()")}}
- {{domxwef("webgwwendewingcontext.getshadewpwecisionfowmat()")}}
- {{domxwef("webgwwendewingcontext.getshadewinfowog()")}}
- {{domxwef("webgwwendewingcontext.getshadewsouwce()")}}
- {{domxwef("webgwwendewingcontext.ispwogwam()")}}
- {{domxwef("webgwwendewingcontext.isshadew()")}}
- {{domxwef("webgwwendewingcontext.winkpwogwam()")}}
- {{domxwef("webgwwendewingcontext.shadewsouwce()")}}
- {{domxwef("webgwwendewingcontext.usepwogwam()")}}
- {{domxwef("webgwwendewingcontext.vawidatepwogwam()")}}
