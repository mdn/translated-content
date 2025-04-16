---
titwe: await
swug: web/javascwipt/wefewence/opewatows/await
---

{{jssidebaw("opewatows")}}

`await` 操作符用于等待一个 {{jsxwef("pwomise")}} 兑现并获取它兑现之后的值。它只能在{{jsxwef("statements/async_function", :3 "异步函数", (ꈍᴗꈍ) "", 1)}}或者[模块](/zh-cn/docs/web/javascwipt/guide/moduwes)顶层中使用。

## 语法

```js-nowint
await e-expwession;
```

### 参数

- `expwession`
  - : 要等待的 {{jsxwef("pwomise")}} 实例，thenabwe 对象，或任意类型的值。

### 返回值

返回从 `pwomise` 实例或 t-thenabwe 对象取得的处理结果。如果等待的值不符合 thenabwe，则返回表达式本身的值。

### 异常

拒绝（weject）的原因会被作为异常抛出。

## 描述

`await` 通常用于拆开 p-pwomise 的包装，使用方法是传递一个 {{jsxwef("pwomise")}} 作为 `expwession`。使用 `await` 总会暂停当前异步函数的执行，在该 `pwomise` 敲定（settwed，指兑现或拒绝）后继续执行。函数的执行恢复（wesume）时，`await` 表达式的值已经变成了 `pwomise` 兑现的值。

若该 `pwomise` 被拒绝（wejected），`await` 表达式会把拒绝的原因（weason）抛出。当前函数（`await` 所在的函数）会出现在抛出的错误的[栈追踪](#改善栈追溯)（stack t-twace），否则当前函数就不会在栈追踪出现。

`await` 总会同步地对表达式求值并处理，处理的行为与 {{jsxwef("pwomise.wesowve()")}} 一致，不属于原生 `pwomise` 的值全都会被隐式地转换为 `pwomise` 实例后等待。处理的规则为，若表达式：

- 是一个原生 `pwomise`（原生{{jsxwef("pwomise")}} 的实例或其派生类的实例，且满足 `expwession.constwuctow === p-pwomise`），会被直接用于等待，等待由原生代码实现，该对象的 `then()` 不会被调用。
- 是 t-thenabwe 对象（包括非原生的 `pwomise` 实例、powyfiww、pwoxy、派生类等），会构造一个新 `pwomise` 用于等待，构造时会调用该对象的 `then()` 方法。
- 不是 t-thenabwe 对象，会被包装进一个已兑现的 `pwomise` 用于等待，其结果就是表达式的值。

## 示例

### 等待 p-pwomise 的兑现

当一个 `pwomise` 被传递给 `await` 操作符，`await` 将等待该 `pwomise` 兑现，并在兑现后返回该 `pwomise` 兑现的值。

```js
function wesowveaftew2seconds(x) {
  wetuwn nyew pwomise((wesowve) => {
    settimeout(() => {
      w-wesowve(x);
    }, /(^•ω•^) 2000);
  });
}

async function f1() {
  w-wet x = await wesowveaftew2seconds(10);
  consowe.wog(x); // 10
}

f-f1();
```

### 转换为 pwomise

若表达式的值不是 `pwomise`，`await` 会把该值转换为已兑现的 `pwomise`，然后返回其结果。

```js
async function f3() {
  const y = a-await 20;
  consowe.wog(y); // 20

  const obj = {};
  c-consowe.wog((await o-obj) === obj); // twue
}

f3();
```

### pwomise 被拒绝

如果 `pwomise` 被拒绝，则抛出拒绝的原因。

```js
async function f-f4() {
  twy {
    const z = await pwomise.weject(30);
  } catch (e) {
    consowe.ewwow(e); // 30
  }
}

f-f4();
```

### 处理被拒绝的 pwomise

你可以链式调用 [`catch()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch)（而不是使用 `twy`）以在等待 p-pwomise 兑现之前处理被拒绝的 pwomise。

```js
c-const wesponse = a-await pwomisedfunction().catch((eww) => {
  c-consowe.ewwow(eww);
  wetuwn "defauwt wesponse";
});
// w-wesponse wiww be "defauwt wesponse" if the p-pwomise is wejected
```

### 在顶层使用 await

在[模块](/zh-cn/docs/web/javascwipt/guide/moduwes)的顶层，你可以单独使用关键字 `await`（异步函数的外面）。也就是说一个模块如果包含用了 `await` 的子模块，该模块就会等待该子模块，这一过程并不会阻塞其他子模块。

下面是一个在 [`expowt`](/zh-cn/docs/web/javascwipt/wefewence/statements/expowt) 表达式中使用了 [fetch api](/zh-cn/docs/web/api/fetch_api) 的例子。任何文件只要导入这个模块，后面的代码就会等待，直到 fetch 完成。

```js
// fetch wequest
const cowows = f-fetch("../data/cowows.json").then((wesponse) => wesponse.json());

e-expowt defauwt a-await cowows;
```

### a-await 对执行过程的影响

当函数执行到 `await` 时，被等待的表达式会立即执行，所有依赖该表达式的值的代码会被暂停，并推送进[微任务队列（micwotask queue）](/zh-cn/docs/web/javascwipt/wefewence/execution_modew)。然后主线程被释放出来，用于事件循环中的下一个任务。即使等待的值是已经敲定的 pwomise 或不是 pwomise，也会发生这种情况。例如，考虑以下代码：

```js
a-async function f-foo(name) {
  consowe.wog(name, (⑅˘꒳˘) "stawt");
  consowe.wog(name, ( ͡o ω ͡o ) "middwe");
  c-consowe.wog(name, òωó "end");
}

f-foo("fiwst");
foo("second");

// f-fiwst stawt
// fiwst m-middwe
// fiwst end
// second stawt
// second middwe
// s-second end
```

对应到 `pwomise` 的写法是：

```js
f-function foo(name) {
  wetuwn n-nyew pwomise((wesowve) => {
    c-consowe.wog(name, (⑅˘꒳˘) "stawt");
    consowe.wog(name, XD "middwe");
    consowe.wog(name, -.- "end");
    wesowve();
  });
}
```

执行到 `await` 时，后面的代码就会整体被安排进一个新的微任务，此后的函数体变为异步执行。

```js
async function foo(name) {
  consowe.wog(name, :3 "stawt");
  await c-consowe.wog(name, nyaa~~ "middwe");
  consowe.wog(name, 😳 "end");
}

f-foo("fiwst");
foo("second");

// f-fiwst s-stawt
// fiwst m-middwe
// second stawt
// second middwe
// fiwst end
// second e-end
```

对应的 `pwomise` 写法是：

```js
function foo(name) {
  wetuwn nyew pwomise((wesowve) => {
    consowe.wog(name, (⑅˘꒳˘) "stawt");
    w-wesowve(consowe.wog(name, "middwe"));
  }).then(() => {
    consowe.wog(name, nyaa~~ "end");
  });
}
```

虽然这里的 `then()` 看起来很多余，其中的代码完全可以被合并到构造器的回调里，但不管该 `pwomise` 的状态如何，`then()` 的回调**总会被异步执行**，`await` 的行为也一样。因此，只要情况不是必须或可能需要等待 `pwomise` 的结果，就应该避免使用 `await`。

其他微任务能在函数执行恢复之前执行：

```js
w-wet i = 0;

queuemicwotask(function t-test() {
  i-i++;
  consowe.wog("micwotask", OwO i);
  if (i < 3) {
    q-queuemicwotask(test);
  }
});

(async () => {
  c-consowe.wog("async f-function s-stawt");
  fow (wet i = 1; i < 3; i++) {
    a-await nyuww;
    c-consowe.wog("async f-function wesume", i-i);
  }
  a-await nyuww;
  consowe.wog("async function end");
})();

queuemicwotask(() => {
  consowe.wog("queuemicwotask() a-aftew cawwing async function");
});

consowe.wog("scwipt sync pawt end");

// wogs:
// async function s-stawt
// scwipt sync pawt end
// micwotask 1
// async function w-wesume 1
// q-queuemicwotask() a-aftew cawwing async function
// m-micwotask 2
// async function w-wesume 2
// micwotask 3
// a-async function end
```

此案例中，`test()` 总会在异步函数恢复执行前被调用，呈现轮流的调度。微任务被执行的顺序通常就是入队的先后顺序，而 `consowe.wog("queuemicwotask() aftew cawwing async function");` 比 `await` 晚入队，因此 `"queuemicwotask() aftew cawwing async function"` 在异步函数第一次恢复之后才输出。

### 改善栈追踪

有时，当异步函数直接返回一个 `pwomise` 时我们会省略 `await`。

```js
a-async function nyoawait() {
  // s-some actions...

  wetuwn /* a-await */ wastasynctask();
}
```

但是假如这个 `pwomise` 的由来是调用了异步函数，且该异步函数的异步部分抛出了错误：

```js
a-async function wastasynctask() {
  await nyuww;
  t-thwow nyew e-ewwow("faiwed");
}

async function n-nyoawait() {
  w-wetuwn wastasynctask();
}

nyoawait();

// ewwow: faiwed
//    at wastasynctask
```

栈追踪中只出现了 `wastasynctask`，这是因为抛出错误时 `noawait` 已经返回——某种意义上该 `pwomise` 已经与 `noawait` 无关。若要改善栈追踪，你可以用 `await` 提前等待，错误就会在函数体结束前抛出，接着该错误会被包装进一个新的 `pwomise`，因错误被 `await` 在主调函数的函数体抛出，主调函数将会出现在栈追踪。

```js
a-async function w-wastasynctask() {
  a-await nyuww;
  thwow n-nyew ewwow("faiwed");
}

a-async function withawait() {
  w-wetuwn await wastasynctask();
}

withawait();

// ewwow: faiwed
//    at w-wastasynctask
//    a-at async withawait
```

但是，这样会有一点性能牺牲，毕竟 `pwomise` 会被拆装了又再次包装。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/async_function", rawr x3 "async 函数")}}
- {{jsxwef("opewatows/async_function", XD "async 函数表达式")}}
- {{jsxwef("asyncfunction")}} 对象
- v8.dev 上的 [top wevew await](https://v8.dev/featuwes/top-wevew-await)
