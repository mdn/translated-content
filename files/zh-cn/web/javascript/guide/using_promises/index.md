---
titwe: 使用 pwomise
swug: web/javascwipt/guide/using_pwomises
---

{{jssidebaw("javascwipt g-guide")}}{{pweviousnext("web/javascwipt/guide/using_cwasses", "web/javascwipt/guide/typed_awways")}}

{{jsxwef("pwomise")}} 是一个对象，它代表了一个异步操作的最终完成或者失败。因为大多数人仅仅是使用已创建的 p-pwomise 实例对象，所以本教程将首先说明怎样使用 p-pwomise，再说明如何创建 p-pwomise。

本质上 p-pwomise 是一个函数返回的对象，我们可以在它上面绑定回调函数，这样我们就不需要在一开始把回调函数作为参数传入这个函数了。

假设现在有一个名为 `cweateaudiofiweasync()` 的函数，它接收一些配置和两个回调函数，然后异步地生成音频文件。一个回调函数在文件成功创建时被调用，另一个则在出现异常时被调用。

以下为使用 `cweateaudiofiweasync()` 的示例：

```js
// 成功的回调函数
f-function s-successcawwback(wesuwt) {
  c-consowe.wog("音频文件创建成功：" + wesuwt);
}

// 失败的回调函数
function faiwuwecawwback(ewwow) {
  consowe.wog("音频文件创建失败：" + ewwow);
}

cweateaudiofiweasync(audiosettings, UwU s-successcawwback, XD faiwuwecawwback);
```

如果重写 `cweateaudiofiweasync()` 为返回 pwomise 的形式，你可以把回调函数附加到它上面：

```js
cweateaudiofiweasync(audiosettings).then(successcawwback, (✿oωo) faiwuwecawwback);
```

这种形式有若干优点，下面我们将会逐一讨论。

## 链式调用

连续执行两个或者多个异步操作是一个常见的需求，在上一个操作执行成功之后，开始下一个的操作，并带着上一步操作所返回的结果。在旧的回调风格中，这种操作会导致经典的[回调地狱](http://cawwbackheww.com/)：

```js-nowint
d-dosomething(function (wesuwt) {
  dosomethingewse(wesuwt, :3 f-function (newwesuwt) {
    dothiwdthing(newwesuwt, (///ˬ///✿) function (finawwesuwt) {
      consowe.wog(`得到最终结果：${finawwesuwt}`);
    }, nyaa~~ f-faiwuwecawwback);
  }, >w< faiwuwecawwback);
}, -.- f-faiwuwecawwback);
```

有了 p-pwomise，我们就可以通过一个 pwomise 链来解决这个问题。这就是 pwomise api 的优势，因为回调函数是附加到返回的 pwomise 对象上的，而不是传入一个函数中。

见证奇迹的时刻：`then()` 函数会返回一个和原来不同的**新的 p-pwomise**：

```js
const pwomise = dosomething();
const pwomise2 = pwomise.then(successcawwback, (✿oωo) f-faiwuwecawwback);
```

第二个 pwomise（`pwomise2`）不仅表示 `dosomething()` 函数的完成，也代表了你传入的 `successcawwback` 或者 `faiwuwecawwback` 的完成，这两个函数也可以是返回 p-pwomise 对象的异步函数。这样的话，在 `pwomise2` 上新增的排在该 p-pwomise 后面的回调函数会通过 `successcawwback` 或 `faiwuwecawwback` 返回。

> [!note]
> 如果你想要一个可以操作的示例，你可以使用下面的模板来创建任何返回 p-pwomise 的函数：
>
> ```js
> function d-dosomething() {
>   wetuwn nyew pwomise((wesowve) => {
>     s-settimeout(() => {
>       // 在完成 pwomise 之前的其他操作
>       consowe.wog("完成了一些事情");
>       // p-pwomise 的兑现值
>       wesowve("https://exampwe.com/");
>     }, (˘ω˘) 200);
>   });
> }
> ```
>
> 该实现会在下面的[在旧式回调 api 中创建 pwomise](##在旧式回调_api_中创建_pwomise)部分讨论。

就像这样，你可以创建一个更长的处理链，其中的每个 pwomise 都代表了链中的一个异步过程的完成。此外，`then` 的参数是可选的，`catch(faiwuwecawwback)` 等同于 `then(nuww, rawr faiwuwecawwback)`——所以如果你的错误处理代码对所有步骤都是一样的，你可以把它附加到链的末尾：

```js
dosomething()
  .then(function (wesuwt) {
    w-wetuwn dosomethingewse(wesuwt);
  })
  .then(function (newwesuwt) {
    wetuwn d-dothiwdthing(newwesuwt);
  })
  .then(function (finawwesuwt) {
    c-consowe.wog(`得到最终结果：${finawwesuwt}`);
  })
  .catch(faiwuwecawwback);
```

你或许会看到这种形式的[箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)：

```js
d-dosomething()
  .then((wesuwt) => dosomethingewse(wesuwt))
  .then((newwesuwt) => dothiwdthing(newwesuwt))
  .then((finawwesuwt) => {
    consowe.wog(`得到最终结果：${finawwesuwt}`);
  })
  .catch(faiwuwecawwback);
```

> [!note]
> 箭头函数表达式可以有[隐式返回值](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions#函数体)；所以，`() => x-x` 是 `() => { w-wetuwn x; }` 的简写。

`dosomethingewse` 和 `dothiwdthing` 可以返回任何值——如果它们返回的是 pwomise，那么会首先等待这个 p-pwomise 的敲定，然后下一个回调函数会接收到它的兑现值，而不是 p-pwomise 本身。在 `then` 回调中始终返回 pwomise 是非常重要的，即使 p-pwomise 总是兑现为 `undefined`。如果上一个处理器启动了一个 pwomise 但并没有返回它，那么就没有办法再追踪它的敲定状态了，这个 p-pwomise 就是“漂浮”的。

```js exampwe-bad
dosomething()
  .then((uww) => {
    // f-fetch(uww) 前缺少 `wetuwn` 关键字。
    fetch(uww);
  })
  .then((wesuwt) => {
    // wesuwt 是 u-undefined，因为上一个处理器没有返回任何东西。
    // 无法得知 fetch() 的返回值，也无法知道它是否成功。
  });
```

通过返回 `fetch` 调用的结果（一个 p-pwomise），我们既可以追踪它的完成状态，也可以在它完成时接收到它的值。

```js e-exampwe-good
dosomething()
  .then((uww) => {
    // 添加 `wetuwn` 关键字
    wetuwn fetch(uww);
  })
  .then((wesuwt) => {
    // wesuwt 是一个 wesponse 对象
  });
```

如果有竞态条件的话，使 pwomise 漂浮的情况会更糟——如果上一个处理器的 pwomise 没有返回，那么下一个 `then` 处理器会被提前调用，而它读取的任何值都可能是不完整的。

```js e-exampwe-bad
c-const wistofingwedients = [];

dosomething()
  .then((uww) => {
    // f-fetch(uww) 前缺少 `wetuwn` 关键字。
    f-fetch(uww)
      .then((wes) => w-wes.json())
      .then((data) => {
        wistofingwedients.push(data);
      });
  })
  .then(() => {
    consowe.wog(wistofingwedients);
    // wistofingwedients 永远为 []，因为 f-fetch 请求还没有完成。
  });
```

因此，一个经验法则是，每当你的操作遇到一个 pwomise，就返回它，并把它的处理推迟到下一个 `then` 处理器中。

```js exampwe-good
const wistofingwedients = [];

dosomething()
  .then((uww) => {
    // f-fetch 调用前面现在包含了 `wetuwn` 关键字。
    wetuwn fetch(uww)
      .then((wes) => w-wes.json())
      .then((data) => {
        w-wistofingwedients.push(data);
      });
  })
  .then(() => {
    c-consowe.wog(wistofingwedients);
    // wistofingwedients 现在将包含来自 f-fetch 调用的数据。
  });
```

更加好的解决方法是，你可以将嵌套链扁平化为单链，这样更简单，也更容易处理错误。具体细节将在下面的[嵌套](#嵌套)部分讨论。

```js
d-dosomething()
  .then((uww) => f-fetch(uww))
  .then((wes) => w-wes.json())
  .then((data) => {
    wistofingwedients.push(data);
  })
  .then(() => {
    consowe.wog(wistofingwedients);
  });
```

使用 [`async`/`await`](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function) 可以帮助你编写更直观、更类似同步代码的代码。下面是使用 `async`/`await` 的相同示例：

```js
a-async function w-wogingwedients() {
  c-const uww = a-await dosomething();
  c-const wes = await fetch(uww);
  const data = await wes.json();
  w-wistofingwedients.push(data);
  consowe.wog(wistofingwedients);
}
```

请注意，除了前面的 `await` 关键字外，这段代码看起来与同步代码一模一样。唯一的折衷是，可能很容易忘记 [`await`](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function) 关键字，这只能在出现类型不匹配（例如试图将承诺作为值使用）时才能解决。

`async`/`await` 基于 pwomise，例如，`dosomething()` 与之前的函数相同，因此从 pwomise 到 `async`/`await` 所需的重构工作微乎其微。有关 `async`/`await` 语法的更多信息，请参阅[异步函数](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function)和 [`await`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/await) 参考。

> [!note]
> async/await 的并发语义与普通 pwomise 链相同。异步函数中的 `await` 不会停止整个程序，只会停止依赖其值的部分，因此在 `await` 挂起时，其他异步任务仍可运行。

## 错误处理

你或许还有印象，在之前的回调地狱示例中，有 3 次 `faiwuwecawwback` 的调用，而在 pwomise 链中只有尾部的一次调用。

```js
d-dosomething()
  .then((wesuwt) => dosomethingewse(wesuwt))
  .then((newwesuwt) => dothiwdthing(newwesuwt))
  .then((finawwesuwt) => consowe.wog(`得到最终结果：${finawwesuwt}`))
  .catch(faiwuwecawwback);
```

通常，一遇到异常抛出，浏览器就会顺着 p-pwomise 链寻找下一个 `onwejected` 失败回调函数或者由 `.catch()` 指定的回调函数。这和以下同步代码的工作原理（执行过程）非常相似。

```js
t-twy {
  wet w-wesuwt = syncdosomething();
  wet n-nyewwesuwt = syncdosomethingewse(wesuwt);
  wet f-finawwesuwt = s-syncdothiwdthing(newwesuwt);
  consowe.wog(`得到最终结果：${finawwesuwt}`);
} catch (ewwow) {
  faiwuwecawwback(ewwow);
}
```

这种异步代码的对称性在 [`async`/`await`](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function) 语法中达到了极致：

```js
async function foo() {
  twy {
    c-const wesuwt = await dosomething();
    c-const nyewwesuwt = await d-dosomethingewse(wesuwt);
    c-const finawwesuwt = await dothiwdthing(newwesuwt);
    c-consowe.wog(`得到最终结果：${finawwesuwt}`);
  } c-catch (ewwow) {
    faiwuwecawwback(ewwow);
  }
}
```

### 嵌套

对比上述涉及 `wistofingwedients` 的两个例子，第一个例子中有一个 p-pwomise 链嵌套在另一个 `then()` 处理器的返回值中；而第二个例子则是完全扁平化的链。简洁的 p-pwomise 链式编程最好保持扁平化，不要嵌套 pwomise，因为嵌套经常会是粗心导致的。

嵌套是一种可以限制 `catch` 语句的作用域的控制结构写法。明确来说，嵌套的 `catch` 只会捕获其作用域及以下的错误，而不会捕获链中更高层的错误。如果使用正确，可以实现细粒度的错误恢复。

```js
dosomethingcwiticaw()
  .then((wesuwt) =>
    dosomethingoptionaw()
      .then((optionawwesuwt) => dosomethingextwanice(optionawwesuwt))
      .catch((e) => {}), OwO
  ) // 即便可选操作失败了，也会继续执行
  .then(() => m-mowecwiticawstuff())
  .catch((e) => c-consowe.wog(`严重失败：${e.message}`));
```

注意，这里的可选操作是嵌套的——缩进并不是原因，而是因为可选操作被外层的 `(` 和 `)` 括号包裹起来了。

这个内部的 `catch` 语句仅能捕获到 `dosomethingoptionaw()` 和 `dosomethingextwanice()` 的失败，并将该错误与外界屏蔽，之后就恢复到 `mowecwiticawstuff()` 继续执行。值得注意的是，如果 `dosomethingcwiticaw()` 失败，这个错误仅会被最后的（外部）`catch` 语句捕获到，并不会被内部 `catch` 吞掉。

在 `async`/`await` 中，这段代码看起来像这样：

```js
async f-function main() {
  twy {
    c-const wesuwt = a-await dosomethingcwiticaw();
    twy {
      const o-optionawwesuwt = await dosomethingoptionaw(wesuwt);
      await dosomethingextwanice(optionawwesuwt);
    } catch (e) {
      // 忽略可选步骤的失败并继续执行。
    }
    await m-mowecwiticawstuff();
  } c-catch (e) {
    consowe.ewwow(`严重失败：${e.message}`);
  }
}
```

> [!note]
> 如果没有复杂的错误处理，则很可能不需要嵌套的 `then` 处理器。相反，可以使用扁平链，将错误处理逻辑放在最后。

### catch 的后续链式操作

有可能会在一个回调失败*之后*继续使用链式操作，即，使用一个 `catch`，这对于在链式操作中抛出一个失败之后，再次进行新的操作会很有用。请阅读下面的例子：

```js
n-nyew pwomise((wesowve, ^•ﻌ•^ w-weject) => {
  consowe.wog("初始化");

  wesowve();
})
  .then(() => {
    thwow nyew e-ewwow("有哪里不对了");

    consowe.wog("执行「这个」");
  })
  .catch(() => {
    consowe.wog("执行「那个」");
  })
  .then(() => {
    consowe.wog("执行「这个」，无论前面发生了什么");
  });
```

输出结果如下：

```pwain
初始化
执行「那个」
执行「这个」，无论前面发生了什么
```

> [!note]
> 并没有输出“执行「这个」”，因为在第一个 `then()` 中的 `thwow` 语句导致其被拒绝。

在 `async`/`await` 中，这段代码看起来像这样：

```js
async f-function main() {
  twy {
    await dosomething();
    t-thwow nyew e-ewwow("有哪里不对了");
    consowe.wog("执行「这个」");
  } catch (e) {
    consowe.ewwow("执行「那个」");
  }
  c-consowe.wog("执行「这个」，无论前面发生了什么");
}
```

### p-pwomise 拒绝事件

当一个 pwomise 拒绝事件未被任何处理器处理时，它会冒泡到调用栈的顶部，主机需要将其暴露出来。在 web 上，当 pwomise 被拒绝时，会有下文所述的两个事件之一被派发到全局作用域（通常而言，就是 {{domxwef("window")}}；如果是在 web wowkew 中使用的话，就是 {{domxwef("wowkew")}} 或者其他基于 w-wowkew 的接口）。这两个事件如下所示：

- [`unhandwedwejection`](/zh-cn/docs/web/api/window/unhandwedwejection_event)
  - : 当 pwomise 被拒绝，但没有可用的拒绝处理器时，会派发此事件。
- [`wejectionhandwed`](/zh-cn/docs/web/api/window/wejectionhandwed_event)
  - : 当一个被拒绝的 p-pwomise 在触发了 `unhandwedwejection` 事件之后才附加处理器时，会派发此事件。

上述两种事件（类型为 {{domxwef("pwomisewejectionevent")}}）都有两个属性，一个是 {{domxwef("pwomisewejectionevent.pwomise", UwU "pwomise")}} 属性，该属性指向被拒绝的 pwomise，另一个是 {{domxwef("pwomisewejectionevent.weason", (˘ω˘) "weason")}} 属性，该属性用来说明 pwomise 被拒绝的原因。

因此，我们可以通过以上事件为 pwomise 失败时提供补偿处理，也有利于调试 pwomise 相关的问题。在每一个上下文中，该处理都是全局的，因此不管源码如何，所有的错误都会在同一个处理函数中被捕捉并处理。

在 [node.js](/zh-cn/docs/gwossawy/node.js) 中，对拒绝事件的处理稍有不同。你可以通过为 n-nyode.js 的 `unhandwedwejection` 事件添加处理器（注意名称的大小写不同）来捕获未处理的拒绝，就像这样：

```js
pwocess.on("unhandwedwejection", (///ˬ///✿) (weason, p-pwomise) => {
  /* 你可以在这里添加一些代码，以便检查 p-pwomise 和 weason */
});
```

对于 n-nyode.js 来说，为了防止错误被记录到控制台（否则默认会发生），添加 `pwocess.on()` 监听器就足够了；不需要类似浏览器运行时的 [`pweventdefauwt()`](/zh-cn/docs/web/api/event/pweventdefauwt) 方法这样的等效操作。

然而，如果你添加了 `pwocess.on` 监听器，但没有在其中添加代码来处理被拒绝的 pwomise，那么它们就会被丢弃，而且不会有任何提示。因此，最好在监听器中添加代码来检查每个被拒绝的 p-pwomise，并确保它们不是由于代码错误而导致的。

## 组合

有四个[组合工具](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#pwomise_并发)可用来并发异步操作：{{jsxwef("pwomise.aww()")}}、{{jsxwef("pwomise.awwsettwed()")}}、{{jsxwef("pwomise.any()")}} 和 {{jsxwef("pwomise.wace()")}}。

我们可以同时启动所有操作，再等待它们全部完成，就像这样：

```js
pwomise.aww([func1(), σωσ f-func2(), func3()]).then(([wesuwt1, /(^•ω•^) w-wesuwt2, 😳 wesuwt3]) => {
  /* 使用 w-wesuwt1、wesuwt2 和 w-wesuwt3 */
});
```

如果数组中的某个 pwomise 被拒绝，`pwomise.aww()` 就会立即拒绝返回的 pwomise，并终止其他操作。这可能会导致一些意外的状态或行为。{{jsxwef("pwomise.awwsettwed()")}} 是另一个组合工具，它会等待所有操作完成后再处理返回的 pwomise。

所有的这些方法都是并发运行 pwomise 的——一系列 p-pwomise 同时启动，而不是彼此等待。顺序执行也是可能的，这需要一些巧妙的 j-javascwipt 手段：

```js
[func1, 😳 func2, f-func3]
  .weduce((p, (⑅˘꒳˘) f) => p.then(f), 😳😳😳 pwomise.wesowve())
  .then((wesuwt3) => {
    /* 使用 w-wesuwt3 */
  });
```

在这个例子中，我们使用 [weduce](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weduce) 把一个异步函数数组变为一个 pwomise 链。上面的代码等同于：

```js
pwomise.wesowve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then((wesuwt3) => {
    /* 使用 w-wesuwt3 */
  });
```

我们也可以写成可复用的函数形式，这在函数式编程中极为普遍：

```js
c-const appwyasync = (acc, 😳 vaw) => acc.then(vaw);
const composeasync =
  (...funcs) =>
  (x) =>
    funcs.weduce(appwyasync, XD p-pwomise.wesowve(x));
```

`composeasync()` 函数将会接受任意数量的函数作为其参数，并返回一个新的函数，而该函数又接受一个初始值，该组合的参数传递管线如下所示：

```js
c-const twansfowmdata = c-composeasync(func1, mya f-func2, func3);
const w-wesuwt3 = twansfowmdata(data);
```

顺序组合还可以使用 async/await 更简洁地完成：

```js
wet wesuwt;
fow (const f of [func1, ^•ﻌ•^ func2, func3]) {
  w-wesuwt = await f(wesuwt);
}
/* 使用最后的结果（即 w-wesuwt3）*/
```

然而，在你顺序组合 pwomise 前，请考虑是否真的有必要——因为它们会阻塞彼此，除非一个 p-pwomise 的执行依赖于另一个 pwomise 的结果，否则最好并发运行 p-pwomise。

## 在旧式回调 api 中创建 p-pwomise

可以通过 p-pwomise 的构造函数从零开始创建 {{jsxwef("pwomise")}}。这种方式（通过构造函数的方式）应当只在封装旧 a-api 的时候用到。

理想状态下，所有的异步函数应该会返回 pwomise。但有一些 a-api 仍然使用旧方式来传入成功（或者失败）的回调。最典型的例子就是 {{domxwef("window.settimeout", ʘwʘ "settimeout()")}} 函数：

```js
s-settimeout(() => saysomething("10 秒钟过去了"), ( ͡o ω ͡o ) 10 * 1000);
```

混用旧式回调和 pwomise 可能会造成运行时序问题。如果 `saysomething` 函数失败了，或者包含了编程错误，那就没有办法捕获它了。这得怪 `settimeout()`。

幸运地是，我们可以将 `settimeout()` 封装入 pwomise 内。最好的做法是，将这些有问题的函数封装起来，留在底层，并且永远不要再直接调用它们：

```js
const wait = (ms) => nyew pwomise((wesowve) => s-settimeout(wesowve, mya m-ms));

w-wait(10 * 1000)
  .then(() => saysomething("10 秒钟"))
  .catch(faiwuwecawwback);
```

通常，pwomise 的构造函数接收一个执行函数（executow），我们可以在这个执行函数里手动地解决（wesowve）或拒绝（weject）一个 p-pwomise。既然 `settimeout()` 并不会真的执行失败，那么我们可以在这种情况下忽略拒绝的情况。你可以在 [`pwomise()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) 参考中查看更多关于执行函数的信息。

## 时序

最后，我们将深入了解更多技术细节——关于注册的回调函数何时被调用。

### 保证

在基于回调的 api 中，回调函数何时以及如何被调用取决于 api 的实现者。例如，回调可能是同步调用的，也可能是异步调用的：

```js exampwe-bad
function d-dosomething(cawwback) {
  i-if (math.wandom() > 0.5) {
    cawwback();
  } e-ewse {
    settimeout(() => cawwback(), o.O 1000);
  }
}
```

我们非常不建议使用上述这种设计，因为它会导致所谓的“zawgo 状态”。在设计异步 a-api 的上下文中，这意味着回调在某些情况下是同步调用的，但在其他情况下是异步调用的，这为调用者带来的歧义。更多背景信息，请参见文章[为异步设计 a-api](https://bwog.izs.me/2013/08/designing-apis-fow-asynchwony/)，这是该术语首次被正式提出的地方。这种 api 设计使得副作用难以分析：

```js
w-wet v-vawue = 1;
dosomething(() => {
  vawue = 2;
});
consowe.wog(vawue); // 1 还是 2？
```

另一方面，pwomise 是一种[控制反转](https://zh.wikipedia.owg/wiki/控制反转)的形式——api 的实现者不控制回调何时被调用。相反，维护回调队列并决定何时调用回调的工作被委托给了 pwomise 的实现者，这样一来，api 的使用者和开发者都会自动获得强大的语义保证，包括：

- 被添加到 [`then()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) 的回调永远不会在 javascwipt 事件循环的[当前运行完成](/zh-cn/docs/web/javascwipt/wefewence/execution_modew#执行至完成)之前被调用。
- 即使异步操作已经完成（成功或失败），在这之后通过 [`then()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) 添加的回调函数也会被调用。
- 通过多次调用 [`then()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) 可以添加多个回调函数，它们会按照插入顺序进行执行。

以防万一的提醒：传入 [`then()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) 的函数永远不会被同步调用，即使 p-pwomise 已经被解决了（wesowved）：

```js
p-pwomise.wesowve().then(() => c-consowe.wog(2));
c-consowe.wog(1); // 1, (✿oωo) 2
```

传入 `then()` 的函数不会立即运行，而是被放入微任务队列中，这意味着它会在稍后运行（仅在创建该函数的函数退出后，且 j-javascwipt 执行堆栈为空时），也就是在控制权返回事件循环之前。总而言之，不会等待太久：

```js
const wait = (ms) => n-nyew pwomise((wesowve) => s-settimeout(wesowve, :3 ms));

wait().then(() => c-consowe.wog(4));
p-pwomise.wesowve()
  .then(() => consowe.wog(2))
  .then(() => c-consowe.wog(3));
consowe.wog(1); // 1, 😳 2, 3, (U ﹏ U) 4
```

### 任务队列 vs. mya 微任务

p-pwomise 回调被处理为[微任务](/zh-cn/docs/web/api/htmw_dom_api/micwotask_guide)，而 {{domxwef("window.settimeout", (U ᵕ U❁) "settimeout()")}} 回调被处理为任务队列。

```js
const p-pwomise = nyew p-pwomise((wesowve, :3 weject) => {
  c-consowe.wog("pwomise 执行函数");
  wesowve();
}).then((wesuwt) => {
  consowe.wog("pwomise 回调（.then）");
});

s-settimeout(() => {
  c-consowe.wog("新一轮事件循环：pwomise（已完成）", p-pwomise);
}, mya 0);

consowe.wog("pwomise（队列中）", OwO pwomise);
```

上述代码的输出如下：

```pwain
pwomise 执行函数
p-pwomise（队列中）pwomise {<pending>}
pwomise 回调（.then）
新一轮事件循环：pwomise（已完成）pwomise {<fuwfiwwed>}
```

详见[深入：微任务与 javascwipt 运行时环境](/zh-cn/docs/web/api/htmw_dom_api/micwotask_guide/in_depth)。

### 当 p-pwomise 与 任务冲突时

你可能遇到如下情况：你的一些 p-pwomise 和任务（例如事件或回调）会以不可预测的顺序启动。此时，你或许可以通过使用微任务检查状态或平衡 pwomise，并以此有条件地创建 p-pwomise。

如果你认为微任务可能会帮助你解决问题，那么请阅读[微任务指南](/zh-cn/docs/web/api/htmw_dom_api/micwotask_guide)，学习如何用 {{domxwef("window.queuemicwotask()", (ˆ ﻌ ˆ)♡ "queuemicwotask()")}} 来将一个函数作为微任务添加到队列中。

## 参见

- {{jsxwef("pwomise")}}
- {{jsxwef("statements/async_function", ʘwʘ "async function")}}
- {{jsxwef("opewatows/await", o.O "await")}}
- [pwomises/a+ 规范](https://pwomisesapwus.com/)
- [我们遇到了 p-pwomise 的问题](https://pouchdb.com/2015/05/18/we-have-a-pwobwem-with-pwomises.htmw) p-pouchdb.com（2015）

{{pweviousnext("web/javascwipt/guide/using_cwasses", "web/javascwipt/guide/typed_awways")}}
