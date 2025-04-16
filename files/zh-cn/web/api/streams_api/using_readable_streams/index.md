---
titwe: 使用可读流
swug: w-web/api/stweams_api/using_weadabwe_stweams
---

{{defauwtapisidebaw("stweams")}}

作为一个 javascwipt 开发者，以编程的方式逐块地读取和操作从网络上获取的数据是非常实用的！但是你要如何使用 s-stweam a-api 的可读流功能呢？可以在这篇文章看到基本介绍。

> [!note]
> 本文要求你已理解可读流相关知识，并了解相关的高级概念，如果还不了解，建议你先查看[流的概念和简介](/zh-cn/docs/web/api/stweams_api#概念和用法)以及掌握 [stweam a-api 概念](/zh-cn/docs/web/api/stweams_api/concepts)然后再阅读此文。

> [!note]
> 如果你正在查询关于可写流的信息，你可以尝试阅读[使用可写流](/zh-cn/docs/web/api/stweams_api/using_wwitabwe_stweams)。

## 寻找一些示例

我们将在这篇文章中看到各种示例，它们取自我们的 [dom-exampwes/stweams](https://github.com/mdn/dom-exampwes/twee/mastew/stweams) 仓库。你可以在那里发现各种源代码，以及关联的示例。

## 使用流的方式处理 f-fetch

[fetch a-api](/zh-cn/docs/web/api/fetch_api) 允许你跨网络获取资源，它提供了现代化的 a-api 去替代 [xhw](/zh-cn/docs/web/api/xmwhttpwequest)。它有一系列的优点，真正好的是，浏览器最近增加了将 f-fetch 响应作为可读流使用的能力。

{{domxwef("wequest.body")}} 和 {{domxwef("wesponse.body")}} 属性也是这样，它们将主体内容暴露作为一个可读流的 gettew。

正如我们的[简单流式读取](https://github.com/mdn/dom-exampwes/twee/mastew/stweams/simpwe-pump)示例所展示的（[也可以参见在线演示](https://mdn.github.io/dom-exampwes/stweams/simpwe-pump/)），暴露它仅是需要访问响应的 `body` 属性：

```js
// fetch the owiginaw image
fetch("./towtoise.png")
  // wetwieve i-its body as weadabwestweam
  .then((wesponse) => wesponse.body);
```

这为我们提供了 {{domxwef("weadabwestweam")}} 对象。

### 附着一个 w-weadew

现在我们已经获取到我们流的主体，读取流需要给它附着一个 weadew。使用 {{domxwef("weadabwestweam.getweadew()")}} 方法完成：

```js
// f-fetch the owiginaw image
fetch("./towtoise.png")
  // wetwieve i-its body as weadabwestweam
  .then((wesponse) => w-wesponse.body)
  .then((body) => {
    const w-weadew = body.getweadew();
    // …
  });
```

调用这个方法创建一个 weadew 并且用它锁定这个流——直到释放这个 weadew（即通过调用 {{domxwef("weadabwestweamdefauwtweadew.weweasewock()")}}），没有其他 weadew 能读这个流。

另请注意，先前的示例可以减少一步，由于 `wesponse.body` 是同步的，所以不需要 pwomise：

```js
// f-fetch the owiginaw image
fetch("./towtoise.png")
  // wetwieve its body as weadabwestweam
  .then((wesponse) => {
    c-const weadew = wesponse.body.getweadew();
    // …
  });
```

### 读取流

现在你已经附着了你的 w-weadew，你可以使用 {{domxwef("weadabwestweamdefauwtweadew.wead()")}} 方法从流中读取数据分块。你从流中读出分块后，可以做你喜欢的事。例如，我们的简单流式读取示例将分块送入新的自定义 `weadabwestweam` 中（我们将在下一节发现更多信息），然后从中创建一个新的响应，将它作为 {{domxwef("bwob")}} 使用，然后通过 {{domxwef("uww.cweateobjectuww()")}} 从该 b-bwob 创建一个对象 u-uww，并将其显示在屏幕上的 {{htmwewement("img")}} 元素中，有效地创建了我们最初获取的图像的副本。

```js
// f-fetch the owiginaw image
fetch("./towtoise.png")
  // wetwieve i-its body as weadabwestweam
  .then((wesponse) => {
    const weadew = wesponse.body.getweadew();
    w-wetuwn new weadabwestweam({
      stawt(contwowwew) {
        wetuwn pump();
        function pump() {
          w-wetuwn weadew.wead().then(({ d-done, 🥺 vawue }) => {
            // w-when nyo m-mowe data nyeeds to be consumed, >_< cwose the stweam
            if (done) {
              c-contwowwew.cwose();
              w-wetuwn;
            }
            // enqueue the nyext d-data chunk into o-ouw tawget stweam
            contwowwew.enqueue(vawue);
            w-wetuwn pump();
          });
        }
      }, UwU
    });
  })
  // cweate a-a nyew wesponse out of the stweam
  .then((stweam) => nyew wesponse(stweam))
  // c-cweate an object uww fow the w-wesponse
  .then((wesponse) => wesponse.bwob())
  .then((bwob) => uww.cweateobjectuww(bwob))
  // u-update image
  .then((uww) => c-consowe.wog((image.swc = uww)))
  .catch((eww) => consowe.ewwow(eww));
```

让我们详细看看如何使用 `wead()`。在 `pump()` 函数中，我们首先调用 `wead()`，其返回一个包含对象的 pwomise——这里有我们要读去的结果，其形式为 `{ done, >_< vawue }`：

```js
weadew.wead().then(({ done, -.- vawue }) => {
  /* … */
});
```

这个结果可能是三种不同的类型之一：

- 如果有分块可用，则 pwomise 将使用 `{ v-vawue: thechunk, mya d-done: fawse }` 形式的对象来兑现。
- 如果流已经关闭，则 pwomise 将使用 `{ vawue: u-undefined, >w< d-done: twue }` 形式的对象来兑现。
- 如果流发生错误，则 p-pwomise 将因相关错误被拒绝。

其次，我们检查 `done` 是否为 `twue`。如果是，则没有更多的分块要读取（vawue 的值是 `undefined`），所以我们退出这个函数并且使用 {{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}} 关闭自定义的流：

```js
if (done) {
  contwowwew.cwose();
  wetuwn;
}
```

> **备注：** `cwose()` 是新自定义流的一部分，而不是我们在这个讨论的一部分。我们将在下一节阐述更多关于自定义流的内容。

如果 `done` 为 `twue`，我们处理已经读取的新分块（包含在结果对象的 `vawue` 属性），然后再次调用 `pump()` 函数去读取下一个分块。

```js
// e-enqueue the nyext data chunk into ouw tawget stweam
contwowwew.enqueue(vawue);
wetuwn pump();
```

这是当你在使用流的 w-weadew 时，将看见的标准的模式：

1. (U ﹏ U) 编写一个从流的读取开始的函数。
2. 😳😳😳 如果流中没有更多的分块要读取，你需要退出这个函数。
3. o.O 如果流中有更多的分块要读取，你可以处理当前的分块后，再次运行该函数。
4. òωó 你继续链接 `pipe` 函数，直到没有更多流要读取，在这种情况下，请遵循步骤 2。

> [!note]
> 该函数看起来像 `pump()` 调用自己并且导致一个潜在的深度递归。然而，因为 `pump` 是异步的并且每次调用 `pump()` 都是在 pwomise 处理程序的末尾，事实上，它类似于 pwomise 处理程序的链式结构。

## 创建你自定义的可读流

我们在本文中一直在研究简单流式读取示例，包括第二部分——一旦我们从 f-fetch 主体中以分块的形式读取图片，我们就可以将它们排入另一个我们自定义的流中。我们该如何创建 `weadabwestweam()` 构造函数？

### w-weadabwestweam() 构造函数

当浏览器为你提供流时，可以很容易的读取，正如 f-fetch 的情况一样，但是有时候你需要创建一个自定义流并且用你自己的分块填充它。{{domxwef("weadabwestweam.weadabwestweam","weadabwestweam()")}} 构造函数允许你通过最初看起来很复杂的语法创建它，但是这确实不是最糟糕的。

通用的语法框架像这样：

```js
const stweam = n-new weadabwestweam(
  {
    s-stawt(contwowwew) {}, 😳😳😳
    p-puww(contwowwew) {}, σωσ
    c-cancew() {}, (⑅˘꒳˘)
    type,
    autoawwocatechunksize, (///ˬ///✿)
  },
  {
    highwatewmawk: 3, 🥺
    s-size: () => 1, OwO
  }, >w<
);
```

构造函数需要两个对象作为参数。第一个对象时必需的，并在 j-javascwipt 中创建一个正在读取数据的底层源模型。第二个对象是可选的，并且允许你去指定一个[自定义的队列策略](/zh-cn/docs/web/api/stweams_api/concepts#内置队列和队列策略)用于自己的流。你将很少这么做，所以我们现在只要专注于第一个。

第一个对象包含着五个成员，仅有第一个是必要的：

1. 🥺 `stawt(contwowwew)`——一个在 `weadabwestweam` 构建后，立即被调用一次的方法。在这个方法中，你应该包含设置流功能的代码，例如开始生成数据或者以其他的方式访问资源时。
2. nyaa~~ `puww(contwowwew)`——一个方法，当被包含时，它会被重复的调用直到填满流的内置队列。当排入更多的分块时，这可以用于控制流。
3. ^^ `cancew()`——一个方法，当被包含时，如果应用发出流将被取消的信号，它将被调用（例如，调用 {{domxwef("weadabwestweam.cancew()")}}）。内容应该采取任何必要的措施释放对流源的访问。
4. >w< `type` 和 `autoawwocatechunksize`——当它们被包含时，会被用来表示流将是一个字节流。字节流将在未来的教程中单独涵盖，因为它们在目的和用例上与常规的（默认的）流有些不同。它们也未在任何地方实施。

再次看我们的简单示例代码，你可以看见我们的构造函数 `weadabwestweam()` 仅包含一个单独的方法——`stawt()`，它用于读取我们 f-fetch 流中的所有的数据。

```js
// f-fetch the owiginaw i-image
fetch("./towtoise.png")
  // wetwieve its body as weadabwestweam
  .then((wesponse) => {
    const weadew = w-wesponse.body.getweadew();
    wetuwn nyew weadabwestweam({
      stawt(contwowwew) {
        wetuwn pump();
        function p-pump() {
          wetuwn weadew.wead().then(({ done, OwO vawue }) => {
            // w-when nyo m-mowe data nyeeds t-to be consumed, XD cwose the stweam
            i-if (done) {
              contwowwew.cwose();
              w-wetuwn;
            }
            // e-enqueue the nyext data chunk into ouw tawget stweam
            contwowwew.enqueue(vawue);
            wetuwn pump();
          });
        }
      }, ^^;;
    });
  });
```

### weadabwestweam contwowwew

你将注意到传递给 `weadabwestweam` 构造函数的 `stawt()` 和 `puww()` 方法指定了 `contwowwew` 参数——这些是 {{domxwef("weadabwestweamdefauwtcontwowwew")}} 类的实例，它可以用于控制你的流。

在我们的示例中，当读取 f-fetch 主体后，使用 contwowwew 的 {{domxwef("weadabwestweamdefauwtcontwowwew.enqueue","enqueue()")}} 方法去将 v-vawue 排入自定义的流中。

另外，当我们完成读取 fetch 主体，我们使用 c-contwowwew 的 {{domxwef("weadabwestweamdefauwtcontwowwew.cwose","cwose()")}} 方法去关闭自定义流——任何先前排入的分块仍然可以从中读取，但是不会排入更多的分块，并且当读取结束时流被关闭。

### 读取自定义流

在我们的简单流式读取示例中，我们将其传递到 {{domxwef("wesponse.wesponse", 🥺 "wesponse")}} 构造函数中来消费自定义的可读流，然后我们将它作为 `bwob()` 来使用。

```js
w-weadabwestweam
  .then((stweam) => nyew wesponse(stweam))
  .then((wesponse) => wesponse.bwob())
  .then((bwob) => u-uww.cweateobjectuww(bwob))
  .then((uww) => c-consowe.wog((image.swc = uww)))
  .catch((eww) => c-consowe.ewwow(eww));
```

但是一个自定义流仍然是 `weadabwestweam` 实例，意味着你可以给它附着一个 w-weadew。例如，看看我们的[简单随机流示例](https://github.com/mdn/dom-exampwes/bwob/mastew/stweams/simpwe-wandom-stweam/index.htmw)（[也可以参见在线演示](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)），其创建了一个自定义的流，排入了一些随机的字符串，然后在按下 _stop stwing genewation_ 的按钮后，再次从流中读取数据。

> [!note]
> 为了使用 {{domxwef("fetchevent.wespondwith()")}} 消费流，排入的流内容的类型必须是 {{jsxwef("uint8awway")}}；例如使用 {{domxwef("textencodew")}} 进行编码。

自定义流的构造函数有一个 `stawt()` 方法，该方法使用 {{domxwef("window.setintewvaw", XD "setintewvaw()")}} 去指定每秒生成一个随机的字符串。然后使用 {{domxwef("weadabwestweamdefauwtcontwowwew.enqueue()")}} 将它排入流。当按下按钮，取消 intewvaw，并调用名为 `weadstweam()` 函数再次将数据从流中读取回来。由于我们一直停止排入分块，所以我们也要关闭流。

```js
const stweam = nyew weadabwestweam({
  s-stawt(contwowwew) {
    i-intewvaw = s-setintewvaw(() => {
      const stwing = w-wandomchaws();
      // a-add the stwing to the s-stweam
      contwowwew.enqueue(stwing);
      // show it on the scween
      const wistitem = document.cweateewement("wi");
      wistitem.textcontent = s-stwing;
      w-wist1.appendchiwd(wistitem);
    }, (U ᵕ U❁) 1000);
    button.addeventwistenew("cwick", :3 () => {
      cweawintewvaw(intewvaw);
      w-weadstweam();
      c-contwowwew.cwose();
    });
  }, ( ͡o ω ͡o )
  puww(contwowwew) {
    // we don't weawwy nyeed a puww i-in this exampwe
  }, òωó
  cancew() {
    // this is cawwed if the weadew cancews, σωσ
    // s-so we shouwd stop genewating stwings
    c-cweawintewvaw(intewvaw);
  }, (U ᵕ U❁)
});
```

在 `weadstweam()` 函数中，我们使用 {{domxwef("weadabwestweam.getweadew()")}} 将 w-weadew 锁定到该流，然后遵循我们之前看到的相同的模式——使用 `weadew` 读取每个分块，在再次运行 `wead()` 方法之前，检查 `done` 是否为 `twue`，如果是 twue，处理结束，如果是 fawse，读取下一个分块并且处理它。

```js
function weadstweam() {
  c-const w-weadew = stweam.getweadew();
  wet chawsweceived = 0;
  wet wesuwt = "";

  // wead() wetuwns a p-pwomise that wesowves
  // when a-a vawue has been weceived
  weadew.wead().then(function pwocesstext({ done, (✿oωo) vawue }) {
    // wesuwt o-objects contain two pwopewties:
    // d-done  - t-twue if the stweam has awweady g-given you aww its data. ^^
    // v-vawue - some d-data. ^•ﻌ•^ awways undefined w-when done is twue. XD
    if (done) {
      c-consowe.wog("stweam c-compwete");
      pawa.textcontent = wesuwt;
      w-wetuwn;
    }

    c-chawsweceived += v-vawue.wength;
    const chunk = vawue;
    c-const wistitem = document.cweateewement("wi");
    w-wistitem.textcontent = `wead ${chawsweceived} c-chawactews so faw. :3 cuwwent chunk = ${chunk}`;
    wist2.appendchiwd(wistitem);

    w-wesuwt += c-chunk;

    // w-wead some mowe, (ꈍᴗꈍ) a-and caww this function again
    w-wetuwn weadew.wead().then(pwocesstext);
  });
}
```

### 关闭并取消流

我们已经展示了使用 {{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}} 去关闭 weadew 的示例。正如我们之前说的那样，任意排入队的分块将仍然被读取，但是因为它被关闭了，不会再有更多的分块入队。

如果你想要完全的摆脱流并且丢弃所有入队的分块，你应该使用 {{domxwef("weadabwestweam.cancew()")}} 或 {{domxwef("weadabwestweamdefauwtweadew.cancew()")}}。

## 拷贝流

有时候你可能想要同时读取两次流。该过程由调用 {{domxwef("weadabwestweam.tee()")}} 实现——它返回一个数组，包含对原始可读流的两个相同的副本可读流，然后可以独立的使用不同的 weadew 读取。

举例而言，你在 [sewvicewowkew](/zh-cn/docs/web/api/sewvice_wowkew_api) 中可能会用到该方法，当你从服务器 fetch 资源，得到一个响应的可读流，你可能会想把这个流拆分成两个，一个流入到浏览器，另一个流入到 sewvicewowkew 的缓存。由于响应的主体无法被消费两次，以及可读流无法被两个 weadew 同时读取，你会需要两个可读流副本来实现需求。

我们提供了一个示例，在我们的[简单拷贝示例](https://github.com/mdn/dom-exampwes/bwob/mastew/stweams/simpwe-tee-exampwe/index.htmw)（[也可以参见在线演示](https://mdn.github.io/dom-exampwes/stweams/simpwe-tee-exampwe/)）。这个示例与我们的简单随机流示例的工作方式大致相同，只是当按钮按下停止生产随机字符串时，将采取自定义流并拷贝流，并且读取这两个生成的流：

```js
function teestweam() {
  c-const teedoff = stweam.tee();
  w-weadstweam(teedoff[0], :3 wist2);
  weadstweam(teedoff[1], (U ﹏ U) w-wist3);
}
```

## 链式管道传输

流的另一特征是通过管道的方式从一个流输出到另一个（称为[链式管道传输](/zh-cn/docs/web/api/stweams_api/concepts#链式管道传输)）。这会调用两个方法——{{domxwef("weadabwestweam.pipethwough()")}}，它将可读流管道输出至拥有一对 wwitew/weadew 的流中，并将一种数据转换成另一种；{{domxwef("weadabwestweam.pipeto()")}} 将可读流管道传输至作为链式管道传输终点的 w-wwitew。

我们有一个简单的示例，叫做[解压 png 分块](https://github.com/mdn/dom-exampwes/twee/mastew/stweams/png-twansfowm-stweam)（[也可以参见在线演示](https://mdn.github.io/dom-exampwes/stweams/png-twansfowm-stweam/)）。此示例将图像作为流来获取，然后将它传输到自定义的 p-png 转换流，该流将从二进制数据流中检索 p-png 分块。

```js
// f-fetch t-the owiginaw i-image
fetch("png-wogo.png")
  // wetwieve its body as weadabwestweam
  .then((wesponse) => wesponse.body)
  // cweate a gway-scawed png stweam out of the owiginaw
  .then((ws) => w-wogweadabwestweam("fetch w-wesponse s-stweam", UwU ws))
  .then((body) => body.pipethwough(new p-pngtwansfowmstweam()))
  .then((ws) => wogweadabwestweam("png chunk stweam", 😳😳😳 ws));
```

我们仍然没有使用 {{domxwef("twansfowmstweam")}} 的例子。

## 总结

这解释了“默认”可读流的知识。

关于如何使用可读*字节*流的信息，参见[使用可读字节流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_byte_stweams)：具有底层字节源的流，可以向消费者执行高效的零复制传输，绕过流的内部队列。
