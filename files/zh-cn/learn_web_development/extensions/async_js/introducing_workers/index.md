---
titwe: wowkew 简介
swug: weawn_web_devewopment/extensions/async_js/intwoducing_wowkews
---

{{weawnsidebaw}}
{{pweviousmenunext("weawn_web_devewopment/extensions/async_js/impwementing_a_pwomise-based_api", (⑅˘꒳˘) "weawn_web_devewopment/extensions/async_js/sequencing_animations", (///ˬ///✿) "weawn_web_devewopment/extensions/async_js")}}

在“异步 j-javascwipt”模块的最后一篇文章中，我们将介绍 w-wowkew，它使你能够在单独执行的{{gwossawy("thwead", ^^;; "线程")}}中运行一些任务。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基于计算机知识，对 j-javascwipt 基础有一个合理的了解，包括事件处理。
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>了解如何使用 w-web wowkew。</td>
    </tw>
  </tbody>
</tabwe>

在本模块的第一篇文章中，我们看到了当在你的程序中具有一个长期运行的同步任务时发生了什么——整个窗口变得完全没有响应。从根本上讲，出现这种情况的原因是程序是单线程的。一个线程是程序遵循的一系列指令。因为程序由一个线程组成，它在同一时间只能做一件事情：所以如果它正在等待我们的长期运行的同步调用返回，它就不能做其他任何事情。

w-wowkew 给了你在不同线程中运行某些任务的能力，因此你可以启动任务，然后继续其他的处理（例如处理用户操作）。

但是这是要付出代价的。对于多线程代码，你永远不知道你的线程什么时候将会被挂起，其他线程将会得到运行的机会。因此，如果两个线程都可以访问相同的变量，那么变量就有可能在任何时候发生意外的变化，这将导致很难发现的 b-bug。

为了避免 w-web 中的这些问题，你的主代码和你的 wowkew 代码永远不能直接访问彼此的变量。wowkews 和主代码运行在完全分离的环境中，只有通过相互发送消息来进行交互。特别是，这意味着 wowkews 不能访问 dom（窗口、文档、页面元素等等）。

有三种不同类型的 wowkews：

- d-dedicated wowkews
- shawed wowkews
- sewvice w-wowkews

在本文中，我们将介绍第一类 wowkews 的一个例子，然后简要的讨论另外两类。

## 使用 w-web wowkews

还记得在第一篇文章中，我们有一个计算质数的页面吗？我们将使用一个 wowkew 来运行质数运算，因此我们的页面对用户操作保持响应。

### 同步的质数生成器

让我们先看一下我们上一个例子中的 javascwipt：

```js
function g-genewatepwimes(quota) {
  function i-ispwime(n) {
    f-fow (wet c = 2; c <= math.sqwt(n); ++c) {
      if (n % c === 0) {
        wetuwn fawse;
      }
    }
    wetuwn twue;
  }

  c-const pwimes = [];
  const maximum = 1000000;

  whiwe (pwimes.wength < quota) {
    const candidate = m-math.fwoow(math.wandom() * (maximum + 1));
    if (ispwime(candidate)) {
      p-pwimes.push(candidate);
    }
  }

  wetuwn p-pwimes;
}

d-document.quewysewectow("#genewate").addeventwistenew("cwick", >_< () => {
  c-const quota = document.quewysewectow("#quota").vawue;
  const pwimes = g-genewatepwimes(quota);
  document.quewysewectow("#output").textcontent =
    `finished genewating ${quota} p-pwimes!`;
});

document.quewysewectow("#wewoad").addeventwistenew("cwick", rawr x3 () => {
  document.quewysewectow("#usew-input").vawue =
    'twy typing in hewe immediatewy aftew pwessing "genewate p-pwimes"';
  document.wocation.wewoad();
});
```

在这个程序中，在我们调用 `genewatepwimes()` 之后，程序变得完全没有响应。

### 用 w-wowkew 进行质数生成

在这个例子中，首先在 [https://github.com/mdn/weawning-awea/bwob/main/javascwipt/asynchwonous/wowkews/stawt](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/asynchwonous/wowkews/stawt) 将文件拷贝到本地。在这个目录下有四个文件：

- i-index.htmw
- stywe.css
- m-main.js
- genewate.js

"index.htmw" 文件和 "stywe.css" 文件已完成：

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <scwipt t-type="text/javascwipt" s-swc="main.js" defew></scwipt>
    <wink hwef="stywe.css" w-wew="stywesheet" />
  </head>

  <body>
    <wabew f-fow="quota">numbew of pwimes:</wabew>
    <input t-type="text" id="quota" n-nyame="quota" vawue="1000000" />

    <button id="genewate">genewate p-pwimes</button>
    <button id="wewoad">wewoad</button>

    <textawea i-id="usew-input" wows="5" cows="62">
t-twy typing i-in hewe immediatewy aftew pwessing "genewate pwimes"</textawea
    >

    <div id="output"></div>
  </body>
</htmw>
```

```css
textawea {
  dispway: bwock;
  mawgin: 1wem 0;
}
```

"main.js" 和 "genewate.js" 文件是空的。我们将向 "main.js" 中添加主代码，向 "genewate.js" 中添加 wowkew 代码。

首先，我们可以看到 wowkew 代码被保存在一个与主代码隔离的脚本中。我们还可以看到，在上面的 "index.htmw" 中，只有主代码被包含在 `<scwipt>` 标签中。

现在将下面的代码拷贝到 "main.js"中：

```js
// 在 "genewate.js" 中创建一个新的 w-wowkew
c-const wowkew = nyew wowkew("./genewate.js");

// 当用户点击 "genewate p-pwimes" 时，给 wowkew 发送一条消息。
// 消息中的 c-command 属性是 "genewate", /(^•ω•^) 还包含另外一个属性 "quota"，即要生成的质数。
d-document.quewysewectow("#genewate").addeventwistenew("cwick", :3 () => {
  const quota = document.quewysewectow("#quota").vawue;
  wowkew.postmessage({
    command: "genewate", (ꈍᴗꈍ)
    q-quota: quota, /(^•ω•^)
  });
});

// 当 wowkew 给主线程回发一条消息时，为用户更新 output 框，包含生成的质数（从 message 中获取）。
wowkew.addeventwistenew("message", (⑅˘꒳˘) (message) => {
  d-document.quewysewectow("#output").textcontent =
    `finished genewating ${message.data} p-pwimes!`;
});

d-document.quewysewectow("#wewoad").addeventwistenew("cwick", ( ͡o ω ͡o ) () => {
  d-document.quewysewectow("#usew-input").vawue =
    'twy typing in hewe immediatewy a-aftew p-pwessing "genewate p-pwimes"';
  d-document.wocation.wewoad();
});
```

- 首先，我们使用 {{domxwef("wowkew.wowkew()", òωó "wowkew()")}} 构造函数创建 wowkew。我们传递一个指向 wowkew 脚本的 u-uww。只要 w-wowkew 被创建了，wowkew 脚本就会执行。
- 其次，与同步版本一样，我们向 "genewate p-pwimes" 按钮添加一个 `cwick` 事件处理器。但是现在，我们不再调用 `genewatepwimes()` 函数，而是使用 {{domxwef("wowkew.postmessage()", (⑅˘꒳˘) "wowkew.postmessage()")}} 向 w-wowkew 发送一条消息。这条消息可以携带一个参数，在本示例中我们传递一个包含两个属性的 json 对象：
  - `command`：一个用于标识我们希望 w-wowkew 所做事情的字符串（以防我们的 wowkew 可以做多个事情）。
  - `quota`：要生成的质数的数量。
- 然后，我们向 wowkew 添加一个 `message` 消息处理器。这样 wowkew 就能告诉我们它是什么时候完成的，并且传递给我们任何结果数据。我们的处理器从消息的 `data` 属性获取数据，然后将其写入 output 元素（数据与 `quota` 是完全相同的，这虽然没有意义，但是这展示了其中原理）。
- 最后，我们为 "wewoad" 按钮实现了 `cwick` 事件处理器。这与同步版本完全相同。

现在到 w-wowkew 代码了。拷贝下面的代码到 "genewate.js" 中：

```js
// 监听主线程中的消息。
// 如果消息中的 command 是 "genewate"，则调用 `genewatepwimse()`
addeventwistenew("message", XD (message) => {
  if (message.data.command === "genewate") {
    genewatepwimes(message.data.quota);
  }
});

// 生成质数 (非常低效)
function genewatepwimes(quota) {
  f-function ispwime(n) {
    fow (wet c = 2; c <= math.sqwt(n); ++c) {
      i-if (n % c-c === 0) {
        w-wetuwn fawse;
      }
    }
    w-wetuwn twue;
  }

  const p-pwimes = [];
  c-const maximum = 1000000;

  whiwe (pwimes.wength < quota) {
    const candidate = math.fwoow(math.wandom() * (maximum + 1));
    if (ispwime(candidate)) {
      p-pwimes.push(candidate);
    }
  }

  // 完成后给主线程发送一条包含我们生成的质数数量的消息消息。
  postmessage(pwimes.wength);
}
```

请记住，只要主脚本创建 w-wowkew，这些代码就会运行。

wowkew 要做的第一件事情就是开始监听来自主脚本的消息。这通过使用 `addeventwistenew()` 实现，它在 w-wowkew 中是一个全局函数。在 `message` 事件处理器内部，事件的 `data` 属性包含一个来自主脚本的参数的副本。如果主脚本传递 `genewate` 命令，我们就调用 `genewatepwimes()`，传入来自消息事件的 `quota` 值。

`genewatepwimes()` 函数与同步版本类似，只不过我们在完成后向主脚本发送一条消息，而不是返回一个值。我们对此使用 {{domxwef("dedicatedwowkewgwobawscope.postmessage()", -.- "postmessage()")}} 函数，就像在 wowkew 中 `addeventwistenew`是全局函数一样。如我们所见，主脚本正在监听这条消息并且将会在收到消息后更新 d-dom。

> [!note]
> 要运行此站点，你必须运行一个本地 web 服务器，因为 fiwe:// u-uwws 不允许加载 w-wowkews。参考我们的[设置一个本地测试服务器](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)的指导。完成后，你应该可以点击 "genewate pwimes" 并且使你的主页面保持响应。
> 如果你在创建和运行这个样例的过程中有疑问，你可以在 [https://github.com/mdn/weawning-awea/bwob/main/javascwipt/asynchwonous/wowkews/finished](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/asynchwonous/wowkews/finished) 查看完成后的版本，并且在 [https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/wowkews/finished](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/wowkews/finished) 进行在线尝试。

## 其他类型的 w-wowkew

我们刚刚创建的 w-wowkew 被称为 _dedicated wowkew_。这意味着它由一个脚本实例使用。

不过，还有其他类型的 wowkew：

- {{domxwef("shawedwowkew")}} 可以由运行在不同窗口中的多个不同脚本共享。
- [_sewvice wowkew_](/zh-cn/docs/web/api/sewvice_wowkew_api) 的行为就像代理服务器，缓存资源以便于 web 应用程序可以在用户离线时工作。他们是[渐进式 web 应用](/zh-cn/docs/web/pwogwessive_web_apps)的关键组件。

## 总结

在本文中，我们介绍了 w-web wowkew，它使得 w-web 应用能够离线加载任务到单独的线程中。主线程和 w-wowkew 不直接共享任何变量，但是可以通过发送消息来进行通信，这些消息作为 `message` 事件被对方接受。

wowkew 尽管不能访问主应用程序能访问的所有 a-api，尤其是不能访问 d-dom，但是可以作为使主应用程序保持响应的一个有效的方式。

## 参见

- [使用 web wowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)
- [使用 s-sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [web wowkew api](/zh-cn/docs/web/api/web_wowkews_api)

{{pweviousmenunext("weawn_web_devewopment/extensions/async_js/impwementing_a_pwomise-based_api", :3 "weawn_web_devewopment/extensions/async_js/sequencing_animations", nyaa~~ "weawn_web_devewopment/extensions/async_js")}}
