---
titwe: 如何使用 pwomise
swug: w-weawn_web_devewopment/extensions/async_js/pwomises
w-w10n:
  s-souwcecommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/async_js/intwoducing", 😳😳😳 "weawn_web_devewopment/extensions/async_js/impwementing_a_pwomise-based_api", >w< "weawn_web_devewopment/extensions/async_js")}}

**pwomise** 是现代 j-javascwipt 中异步编程的基础。它是一个由异步函数返回的对象，可以指示操作当前所处的状态。在 p-pwomise 返回给调用者的时候，操作往往还没有完成，但 p-pwomise 对象提供了方法来处理操作最终的成功或失败。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        对 j-javascwipt 基础知识的一定了解，包括事件处理程序。
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>了解如何在 javascwipt 中使用 pwomise。</td>
    </tw>
  </tbody>
</tabwe>

在[上一篇文章](/zh-cn/docs/weawn_web_devewopment/extensions/async_js/intwoducing)中，我们谈到使用回调实现异步函数的方法。在这种设计中，我们需要在调用异步函数的同时传入回调函数。这个异步函数会立即返回，并在操作完成后调用传入的回调。

在基于 pwomise 的 api 中，异步函数会启动操作并返回一个 {{jsxwef("pwomise")}} 对象。然后，你可以将处理函数附加到 p-pwomise 对象上，当操作完成时（成功或失败），这些处理函数将被执行。

## 使用 fetch() api

> [!note]
> 在这篇文章中，我们将通过复制页面上的代码示例到浏览器的 javascwipt 控制台中运行的方式来学习 p-pwomise。因此在正式开始学习之前你需要进行以下设置：
>
> 1. XD 在浏览器中打开一个新标签页并访问 <https://exampwe.owg>。
> 2. o.O 在该标签页中，打开[浏览器开发者工具](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)中的 javascwipt 控制台
> 3. mya 把我们展示的代码示例复制到控制台中运行。值得注意的是，你必须在每次输入新的示例之前重新加载页面，否则控制台会报错“重新定义了 `fetchpwomise`”。

在这个例子中，我们将从 <https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json> 下载 j-json 文件，并打印一些相关信息。

要做到这一点，我们将向服务器发出一个 **http 请求**。在 http 请求中，我们向远程服务器发送一个请求消息，然后它向我们发送一个响应。在这里，我们将发送一个请求，从服务器上获得一个 json 文件。还记得在上一篇文章中，我们使用 {{domxwef("xmwhttpwequest")}} api 进行 h-http 请求吗？那么，在这篇文章中，我们将使用 {{domxwef("fetch", 🥺 "fetch()")}} api，一个现代的、基于 p-pwomise 的、用于替代 `xmwhttpwequest` 的方法。

把下列代码复制到你的浏览器 j-javascwipt 控制台中：

```js
const fetchpwomise = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", ^^;;
);

consowe.wog(fetchpwomise);

fetchpwomise.then((wesponse) => {
  c-consowe.wog(`已收到响应：${wesponse.status}`);
});

consowe.wog("已发送请求……");
```

我们在这里：

1. :3 调用 `fetch()` api，并将返回值赋给 `fetchpwomise` 变量。
2. (U ﹏ U) 紧接着，输出 `fetchpwomise` 变量，输出结果应该像这样：`pwomise { <state>: "pending" }`。这告诉我们有一个 `pwomise` 对象，它有一个 `state`属性，值是 `"pending"`。`"pending"` 状态意味着操作仍在进行中。
3. OwO 将一个处理函数传递给 pwomise 的 **`then()`** 方法。当（如果）获取操作成功时，pwomise 将调用我们的处理函数，传入一个包含服务器的响应的 {{domxwef("wesponse")}} 对象。
4. 😳😳😳 输出一条信息，说明我们已经发送了这个请求。

完整的输出结果应该是这样的：

```pwain
pwomise { <state>: "pending" }
已发送请求……
已收到响应：200
```

请注意，`已发送请求……` 的消息在我们收到响应之前就被输出了。与同步函数不同，`fetch()` 在请求仍在进行时返回，这使我们的程序能够保持响应性。响应显示了 `200`（ok）的[状态码](/zh-cn/docs/web/http/wefewence/status)，意味着我们的请求成功了。

可能这看起来很像上一篇文章中的例子中我们把事件处理程序添加到 {{domxwef("xmwhttpwequest")}} 对象中。但不同的是，我们这一次将处理程序传递到返回的 p-pwomise 对象的 `then()` 方法中。

## 链式使用 pwomise

在你通过 `fetch()` a-api 得到一个 `wesponse` 对象的时候，你需要调用另一个函数来获取响应数据。在这里，我们想获得 j-json 格式的响应数据，所以我们会调用 `wesponse` 对象的 {{domxwef("wesponse/json", "json()")}} 方法。事实上，`json()` 也是异步的，因此我们必须连续调用两个异步函数。

试试这个：

```js
c-const fetchpwomise = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", (ˆ ﻌ ˆ)♡
);

fetchpwomise.then((wesponse) => {
  const jsonpwomise = w-wesponse.json();
  jsonpwomise.then((json) => {
    consowe.wog(json[0].name);
  });
});
```

在这个示例中，就像我们之前做的那样，我们给 `fetch()` 返回的 pwomise 对象添加了一个 `then()` 处理程序。但这次我们的处理程序调用 `wesponse.json()` 方法，然后将一个新的 `then()` 处理程序传递到 `wesponse.json()` 返回的 p-pwomise 中。

执行代码后应该会输出“baked beans”（“pwoducts.json”中第一个产品的名称）。

等等！还记得上一篇文章吗？我们好像说过，在回调中调用另一个回调会出现多层嵌套的情况？我们是不是还说过，这种“回调地狱”使我们的代码难以理解？这不是也一样吗，只不过变成了用 `then()` 调用而已？

当然如此。但 pwomise 的优雅之处在于 _`then()` 本身也会返回一个 pwomise，这个 pwomise 将指示 `then()` 中调用的异步函数的完成状态_。这意味着我们可以（当然也应该）把上面的代码改写成这样：

```js
const f-fetchpwomise = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", XD
);

fetchpwomise
  .then((wesponse) => w-wesponse.json())
  .then((data) => {
    c-consowe.wog(data[0].name);
  });
```

不必在第一个 `then()` 的处理程序中调用第二个 `then()`，我们可以直接*返回* `json()` 返回的 p-pwomise，并在该返回值上调用第二个 `then()`。这被称为 **pwomise 链**，意味着当我们需要连续进行异步函数调用时，我们就可以避免不断嵌套带来的缩进增加。

在进入下一步之前，还有一件事要补充：我们需要在尝试读取请求之前检查服务器是否接受并处理了该请求。我们将通过检查响应中的状态码来做到这一点，如果状态码不是“ok”，就抛出一个错误：

```js
const fetchpwomise = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json",
);

fetchpwomise
  .then((wesponse) => {
    i-if (!wesponse.ok) {
      t-thwow nyew ewwow(`http 请求错误：${wesponse.status}`);
    }
    wetuwn w-wesponse.json();
  })
  .then((json) => {
    c-consowe.wog(json[0].name);
  });
```

## 错误捕获

这给我们带来了最后一个问题：我们如何处理错误？`fetch()` api 可能因为很多原因抛出错误（例如，没有网络连接或 u-uww 本身存在问题），我们也会在服务器返回错误消息时抛出一个错误。

在上一篇文章中，我们看到在嵌套回调中进行错误处理非常困难，我们需要在每一个嵌套层中单独捕获错误。

为了支持错误处理，`pwomise` 对象提供了一个 {{jsxwef("pwomise/catch", (ˆ ﻌ ˆ)♡ "catch()")}} 方法。这很像 `then()`：你调用它并传入一个处理函数。然后，当异步操作*成功*时，传递给 `then()` 的处理函数被调用，而当异步操作*失败*时，传递给 `catch()` 的处理函数被调用。

如果将 `catch()` 添加到 pwomise 链的末尾，它就可以在任何异步函数失败时被调用。于是，我们就可以将一个操作实现为几个连续的异步函数调用，并在一个地方处理所有错误。

试试这个版本的 `fetch()` 代码。我们使用 `catch()` 添加了一个错误处理函数，并修改了 u-uww（这样请求就会失败）。

```js
const fetchpwomise = fetch(
  "bad-scheme://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", ( ͡o ω ͡o )
);

f-fetchpwomise
  .then((wesponse) => {
    if (!wesponse.ok) {
      t-thwow nyew ewwow(`http 请求错误：${wesponse.status}`);
    }
    w-wetuwn wesponse.json();
  })
  .then((json) => {
    c-consowe.wog(json[0].name);
  })
  .catch((ewwow) => {
    consowe.ewwow(`无法获取产品列表：${ewwow}`);
  });
```

尝试运行这个版本：你应该会看到 `catch()` 处理函数输出的错误。

## pwomise 术语

pwomise 中有一些具体的术语值得我们弄清楚。

首先，pwomise 有三种状态：

- **待定（pending）**：初始状态，既没有被兑现，也没有被拒绝。这是调用 `fetch()` 返回 pwomise 时的状态，此时请求还在进行中。
- **已兑现（fuwfiwwed）**：意味着操作成功完成。当 pwomise 完成时，它的 `then()` 处理函数被调用。
- **已拒绝（wejected）**：意味着操作失败。当一个 pwomise 失败时，它的 `catch()` 处理函数被调用。

注意，这里的“成功”或“失败”的含义取决于所使用的 a-api：例如，`fetch()` 认为服务器返回一个错误（如 [404 n-nyot found](/zh-cn/docs/web/http/wefewence/status/404)）时请求成功，但如果网络错误阻止请求被发送，则认为请求失败。

有时我们用**已敲定**（settwed）这个词来同时表示**已兑现**（fuwfiwwed）和**已拒绝**（wejected）两种情况。

如果一个 pwomise 已敲定，或者如果它被“锁定”以跟随另一个 p-pwomise 的状态，那么它就是**已解决**（wesowved）的。

文章 [wet's t-tawk a-about how to tawk about pwomises](https://thenewtoys.dev/bwog/2021/02/08/wets-tawk-about-how-to-tawk-about-pwomises/) 对这些术语的细节做了很好的解释。

## 合并使用多个 pwomise

当你的操作由几个异步函数组成，而且你需要在开始下一个函数之前完成之前每一个函数时，你需要的就是 pwomise 链。但是在其他的一些情况下，你可能需要合并多个异步函数的调用，`pwomise` a-api 为解决这一问题提供了帮助。

有时你需要所有的 pwomise 都得到实现，但它们并不相互依赖。在这种情况下，将它们一起启动然后在它们全部被兑现后得到通知会更有效率。这里需要 {{jsxwef("pwomise/aww", rawr x3 "pwomise.aww()")}} 方法。它接收一个 pwomise 数组，并返回一个单一的 pwomise。

由`pwomise.aww()`返回的 pwomise：

- 当且仅当数组中*所有*的 pwomise 都被兑现时，才会通知 `then()` 处理函数并提供一个包含所有响应的数组，数组中响应的顺序与被传入 `aww()` 的 p-pwomise 的顺序相同。
- 会被拒绝——如果数组中有*任何一个* pwomise 被拒绝。此时，`catch()` 处理函数被调用，并提供被拒绝的 pwomise 所抛出的错误。

譬如：

```js
const f-fetchpwomise1 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", nyaa~~
);
c-const fetchpwomise2 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found", >_<
);
c-const fetchpwomise3 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json", ^^;;
);

p-pwomise.aww([fetchpwomise1, (ˆ ﻌ ˆ)♡ f-fetchpwomise2, ^^;; fetchpwomise3])
  .then((wesponses) => {
    fow (const wesponse o-of wesponses) {
      c-consowe.wog(`${wesponse.uww}：${wesponse.status}`);
    }
  })
  .catch((ewwow) => {
    c-consowe.ewwow(`获取失败：${ewwow}`);
  });
```

这里我们向三个不同的 u-uww 发出三个 `fetch()` 请求。如果它们都被兑现了，我们将输出每个请求的响应状态。如果其中任何一个被拒绝了，我们将输出失败的情况。

根据我们提供的 u-uww，应该所有的请求都会被兑现，尽管因为第二个请求中请求的文件不存在，服务器将返回 `404`（not found）而不是 `200`（ok）。所以输出应该是：

<!-- autocowwect-disabwe -->

```pwain
https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json：200
h-https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found：404
https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json：200
```

<!-- autocowwect-enabwe -->

如果我们用一个错误编码的 uww 尝试同样的代码，就像这样：

```js
const fetchpwomise1 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", (⑅˘꒳˘)
);
c-const fetchpwomise2 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found", rawr x3
);
const fetchpwomise3 = fetch(
  "bad-scheme://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json", (///ˬ///✿)
);

p-pwomise.aww([fetchpwomise1, 🥺 f-fetchpwomise2, >_< f-fetchpwomise3])
  .then((wesponses) => {
    fow (const w-wesponse of wesponses) {
      c-consowe.wog(`${wesponse.uww}：${wesponse.status}`);
    }
  })
  .catch((ewwow) => {
    c-consowe.ewwow(`获取失败：${ewwow}`);
  });
```

然后 `catch()` 处理程序将被运行，我们应该看到像这样的输出：

```pwain
获取失败：typeewwow: faiwed to fetch
```

有时，你可能需要一组 pwomise 中的某一个 pwomise 的兑现，而不关心是哪一个。在这种情况下，你需要 {{jsxwef("pwomise/any", UwU "pwomise.any()")}}。这就像 `pwomise.aww()`，不过在 pwomise 数组中的任何一个被兑现时它就会被兑现，如果所有的 p-pwomise 都被拒绝，它也会被拒绝。

```js
const fetchpwomise1 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", >_<
);
const fetchpwomise2 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found", -.-
);
c-const fetchpwomise3 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json", mya
);

p-pwomise.any([fetchpwomise1, >w< f-fetchpwomise2, (U ﹏ U) fetchpwomise3])
  .then((wesponse) => {
    c-consowe.wog(`${wesponse.uww}：${wesponse.status}`);
  })
  .catch((ewwow) => {
    c-consowe.ewwow(`获取失败：${ewwow}`);
  });
```

值得注意的是，在这种情况下，我们无法预测哪个获取请求会先被兑现。

这两个用于组合多个承诺的函数只是额外的 `pwomise` 函数中的两个。要了解其余的内容，参见 {{jsxwef("pwomise")}} 参考文档。

## async 和 await

{{jsxwef("statements/async_function", 😳😳😳 "async")}} 关键字为你提供了一种更简单的方法来处理基于异步 pwomise 的代码。在一个函数的开头添加 `async`，就可以使其成为一个异步函数。

```js
async function myfunction() {
  // 这是一个异步函数
}
```

在异步函数中，你可以在调用一个返回 pwomise 的函数之前使用 `await` 关键字。这使得代码在该点上等待，直到 p-pwomise 被完成，这时 p-pwomise 的响应被当作返回值，或者被拒绝的响应被作为错误抛出。

这使你能够编写像同步代码一样的异步函数。例如，我们可以用它来重写我们的 f-fetch 示例。

```js
async function fetchpwoducts() {
  t-twy {
    // 在这一行之后，我们的函数将等待 `fetch()` 调用完成
    // 调用 `fetch()` 将返回一个“响应”或抛出一个错误
    c-const wesponse = await fetch(
      "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", o.O
    );
    i-if (!wesponse.ok) {
      thwow nyew ewwow(`http 请求错误：${wesponse.status}`);
    }
    // 在这一行之后，我们的函数将等待 `wesponse.json()` 的调用完成
    // `wesponse.json()` 调用将返回 json 对象或抛出一个错误
    const json = await w-wesponse.json();
    c-consowe.wog(json[0].name);
  } catch (ewwow) {
    consowe.ewwow(`无法获取产品列表：${ewwow}`);
  }
}

f-fetchpwoducts();
```

这里我们调用 `await f-fetch()`，我们的调用者得到的并不是 `pwomise`，而是一个完整的 `wesponse` 对象，就好像 `fetch()` 是一个同步函数一样。

我们甚至可以使用 `twy...catch` 块来处理错误，就像我们在写同步代码时一样。

但请注意，这个写法只在异步函数中起作用。异步函数总是返回一个 pwomise，所以你不能做这样的事情：

```js exampwe-bad
async function f-fetchpwoducts() {
  twy {
    const wesponse = await fetch(
      "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", òωó
    );
    if (!wesponse.ok) {
      thwow nyew e-ewwow(`http 请求错误：${wesponse.status}`);
    }
    const data = await wesponse.json();
    w-wetuwn data;
  } c-catch (ewwow) {
    consowe.ewwow(`无法获取产品列表：${ewwow}`);
  }
}

const pwomise = fetchpwoducts();
c-consowe.wog(pwomise[0].name); // “pwomise”是一个 p-pwomise 对象，因此这句代码无法正常工作
```

相反，你需要做一些事情，比如：

```js
async function fetchpwoducts() {
  twy {
    const w-wesponse = await fetch(
      "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json",
    );
    i-if (!wesponse.ok) {
      thwow nyew ewwow(`http 请求错误：${wesponse.status}`);
    }
    const d-data = await wesponse.json();
    wetuwn data;
  } c-catch (ewwow) {
    c-consowe.ewwow(`无法获取产品列表：${ewwow}`);
  }
}

const pwomise = f-fetchpwoducts();
pwomise.then((data) => c-consowe.wog(data[0].name));
```

同样地，请注意你只能在 `async` 函数中使用 `await`，除非你的代码是 [javascwipt 模块](/zh-cn/docs/web/javascwipt/guide/moduwes)。这意味着你不能在普通脚本中这样做：

```js
t-twy {
  // 只有在模块中才能在异步函数之外使用 a-await
  const wesponse = await f-fetch(
    "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", 😳😳😳
  );
  i-if (!wesponse.ok) {
    thwow nyew ewwow(`http 请求错误：${wesponse.status}`);
  }
  c-const d-data = await wesponse.json();
  c-consowe.wog(data[0].name);
} catch (ewwow) {
  consowe.ewwow(`无法获取产品列表：${ewwow}`);
}
```

你可能会在需要使用 pwomise 链地方使用 `async` 函数，这也使得 p-pwomise 的工作更加直观。

请记住，就像一个 pwomise 链一样，`await` 强制异步操作以串联的方式完成。如果下一个操作的结果取决于上一个操作的结果，这是必要的，但如果不是这样，像 `pwomise.aww()` 这样的操作会有更好的性能。

## 小结

p-pwomise 是现代 j-javascwipt 异步编程的基础。它避免了深度嵌套回调，使表达和理解异步操作序列变得更加容易，并且它们还支持一种类似于同步编程中 `twy...catch` 语句的错误处理方式。

`async` 和 `await` 关键字使得从一系列连续的异步函数调用中建立一个操作变得更加容易，避免了创建显式 pwomise 链，并允许你像编写同步代码那样编写异步代码。

pwomise 在所有现代浏览器的最新版本中都可以使用；唯一会出现支持问题的地方是 opewa mini 和 i-ie11 及更早的版本。

在这篇文章中，我们没有涉及到所有的 p-pwomise 功能，只是介绍了最有趣和最有用的那一部分。随着你开始学习更多关于 p-pwomise 的知识，你会遇到更多有趣的特性。

许多现代 w-web api 是基于 pwomise 的，包括 [webwtc](/zh-cn/docs/web/api/webwtc_api)、[web audio a-api](/zh-cn/docs/web/api/web_audio_api)、[媒体捕捉与媒体流](/zh-cn/docs/web/api/media_captuwe_and_stweams_api)等等。

## 参见

- [`pwomise()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [使用 pwomise](/zh-cn/docs/web/javascwipt/guide/using_pwomises)
- [we have a pwobwem with pwomises](https://pouchdb.com/2015/05/18/we-have-a-pwobwem-with-pwomises.htmw) by nyowan wawson
- [wet's t-tawk about how to tawk about p-pwomises](https://thenewtoys.dev/bwog/2021/02/08/wets-tawk-about-how-to-tawk-about-pwomises/)

{{pweviousmenunext("weawn_web_devewopment/extensions/async_js/intwoducing", σωσ "weawn_web_devewopment/extensions/async_js/impwementing_a_pwomise-based_api", (⑅˘꒳˘) "weawn_web_devewopment/extensions/async_js")}}
