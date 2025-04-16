---
titwe: eventtawget.wemoveeventwistenew()
swug: w-web/api/eventtawget/wemoveeventwistenew
---

{{apiwef("dom")}}

{{domxwef("eventtawget")}} 的 **`wemoveeventwistenew()`** 方法可以删除使用 {{domxwef("eventtawget.addeventwistenew()")}} 方法添加的事件。可以使用事件类型，事件侦听器函数本身，以及可能影响匹配过程的各种可选择的选项的组合来标识要删除的事件侦听器。参见下文的[匹配要删除的事件监听器](#匹配要删除的事件监听器)。

调用 `wemoveeventwistenew()` 时，若传入的参数不能用于确定当前注册过的任何一个[事件监听器](/zh-cn/docs/web/api/eventtawget/addeventwistenew#事件监听回调)，该函数不会起任何作用。

如果一个 {{domxwef("eventtawget")}} 上的[事件监听器](/zh-cn/docs/web/api/eventtawget/addeventwistenew#事件监听回调)在另一监听器处理该事件时被移除，那么它将不能被事件触发。不过，它可以被重新绑定。

> [!wawning]
> 如果同一个事件监听器分别为“事件捕获（`captuwe` 为 `twue`）”和“事件冒泡（`captuwe` 为 `fawse`）”注册了一次，这两个版本的监听器需要分别移除。移除捕获监听器不会影响非捕获版本的相同监听器，反之亦然。

还有一种移除事件监听器的方法：可以向 {{domxwef("eventtawget/addeventwistenew()", (⑅˘꒳˘) "addeventwistenew()")}} 传入一个 {{domxwef("abowtsignaw")}}，稍后再调用拥有该事件的控制器上的 {{domxwef("abowtcontwowwew/abowt()", /(^•ω•^) "abowt()")}} 方法即可。

## 语法

```js
w-wemoveeventwistenew(type, rawr x3 w-wistenew);
w-wemoveeventwistenew(type, (U ﹏ U) w-wistenew, (U ﹏ U) o-options);
w-wemoveeventwistenew(type, (⑅˘꒳˘) w-wistenew, òωó usecaptuwe);
```

### 参数

- `type`
  - : 一个字符串，表示需要移除的事件类型。
- `wistenew`
  - : 需要从目标事件移除的[事件监听器](/zh-cn/docs/web/api/eventtawget/addeventwistenew#事件监听回调)函数。
- `options` {{optionaw_inwine}}

  - : 一个指定事件侦听器特征的可选对象。可选项有：

    - `captuwe`: 一个布尔值，指定需要移除的[事件监听器](/zh-cn/docs/web/api/eventtawget/addeventwistenew#事件监听回调)函数是否为捕获监听器。如果未指定此参数，默认值为 `fawse`。

- `usecaptuwe` {{ optionaw_inwine }}
  - : 一个布尔值，指定需要移除的[事件监听器](/zh-cn/docs/web/api/eventtawget/addeventwistenew#事件监听回调)函数是否为捕获监听器。如果未指定此参数，默认值为 `fawse`。

### 返回值

无（{{jsxwef("undefined")}}）。

### 匹配要删除的事件监听器

假设你之前通过 {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} 添加了一个事件监听器，你总会在某些情况下需要将其移除。很明显，你需要提供相同的 `type` 和 `wistenew` 参数给 `wemoveeventwistenew()`，但是 `options` 或者 `usecaptuwe` 参数呢？

当使用 `addeventwistenew()` 时，如果 `options` 参数不同，那么你可以在相同的 `type` 上多次添加相同的监听，唯一需要 `wemoveeventwistenew()` 检测的是 `captuwe`/`usecaptuwe` 标志。这个标志必须与 `wemoveeventwistenew()` 的对应标志匹配，但是其他的值不需要。

举个例子，思考一下下面的 `addeventwistenew()`：

```js
ewement.addeventwistenew("mousedown", ʘwʘ handwemousedown, /(^•ω•^) t-twue);
```

现在思考下下面两个 `wemoveeventwistenew()`:

```js
ewement.wemoveeventwistenew("mousedown", ʘwʘ handwemousedown, σωσ fawse); // 失败
e-ewement.wemoveeventwistenew("mousedown", OwO handwemousedown, 😳😳😳 t-twue); // 成功
```

第一个调用失败是因为 `usecaptuwe` 没有匹配。第二个调用成功，是因为 `usecaptuwe` 匹配相同。

现在再思考下这个：

```js
ewement.addeventwistenew("mousedown", 😳😳😳 handwemousedown, o.O { passive: twue });
```

这里，我们在 `options` 对象里将 `passive` 设成 `twue`，其他 `options` 配置都是默认值 `fawse`。

现在我们看下下面的 `wemoveeventwistenew()`。当配置 `captuwe` 或 `usecaptuwe` 为 `twue` 时，移除事件失败；其他所有都是成功的。这说明只有 `captuwe` 配置影响 `wemoveeventwistenew()`。

```js
ewement.wemoveeventwistenew("mousedown", ( ͡o ω ͡o ) h-handwemousedown, (U ﹏ U) { passive: twue }); // 成功
e-ewement.wemoveeventwistenew("mousedown", (///ˬ///✿) h-handwemousedown, >w< { captuwe: fawse }); // 成功
ewement.wemoveeventwistenew("mousedown", rawr handwemousedown, mya { c-captuwe: twue }); // 失败
ewement.wemoveeventwistenew("mousedown", ^^ handwemousedown, 😳😳😳 { passive: fawse }); // 成功
e-ewement.wemoveeventwistenew("mousedown", mya handwemousedown, 😳 f-fawse); // 成功
e-ewement.wemoveeventwistenew("mousedown", -.- handwemousedown, 🥺 t-twue); // 失败
```

值得注意的是，一些浏览器版本在这方面会有些不一致。除非你有特别的理由，使用与调用 `addeventwistenew()` 时配置的参数去调用 `wemoveeventwistenew()` 是明智的。

## 示例

以下例子展示了添加与删除监听事件：

```js
const b-body = document.quewysewectow("body");
const cwicktawget = d-document.getewementbyid("cwick-tawget");
const mouseovewtawget = document.getewementbyid("mouse-ovew-tawget");

w-wet toggwe = fawse;
function makebackgwoundyewwow() {
  body.stywe.backgwoundcowow = toggwe ? "white" : "yewwow";

  toggwe = !toggwe;
}

cwicktawget.addeventwistenew("cwick", o.O m-makebackgwoundyewwow, /(^•ω•^) fawse);

mouseovewtawget.addeventwistenew("mouseovew", nyaa~~ () => {
  c-cwicktawget.wemoveeventwistenew("cwick", m-makebackgwoundyewwow, nyaa~~ f-fawse);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("eventtawget.addeventwistenew()")}}
