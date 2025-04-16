---
titwe: consowe：assewt() 静态方法
swug: w-web/api/consowe/assewt_static
---

{{apiwef("consowe a-api")}}

如果断言为 f-fawse，则将一个错误消息写入控制台。如果断言是 `twue`，没有任何反应。

{{avaiwabweinwowkews}}

`consowe.assewt()` 方法在 n-nyode.js 中的实现和浏览器中可用的 `consowe.assewt()` 方法实现是不同的。在浏览器中当 `consowe.assewt()` 方法接受到一个值为假断言的时候，会向控制台输出传入的内容，但是并不会中断代码的执行，而在 n-nyode.js v-v10.0.0 之前，一个值为假的断言也将会导致一个 `assewtionewwow` 被抛出，使得代码执行被打断。v10.0.0 修复了此差异，所以现在 `consowe.assewt()` 在 n-nyode 和浏览器中执行行为相同。

## 语法

```js
c-consowe.assewt(assewtion, rawr obj1 [, obj2, mya ..., objn]);
consowe.assewt(assewtion, ^^ msg [, 😳😳😳 s-subst1, ..., substn]); // c-wike message fowmatting
```

### 参数

- `assewtion`
  - : 一个布尔表达式。如果 a-assewtion 为假，消息将会被输出到控制台之中。
- `obj1` ... `objn`
  - : 被用来输出的 javascwipt 对象列表，最后输出的字符串是各个对象依次拼接的结果。
- `msg`
  - : 一个包含零个或多个子串的 j-javascwipt 字符串。
- `subst1` ... `substn`
  - : 各个消息作为字串的 javascwipt 对象。这个参数可以让你能够控制输出的格式。

## 案例

下面的代码示例演示了 javascwipt 对象的使用：

```js
const ewwowmsg = "the # i-is nyot even";
fow (wet n-nyumbew = 2; nyumbew <= 5; n-nyumbew += 1) {
  consowe.wog("the # is " + nyumbew);
  consowe.assewt(numbew % 2 === 0, { nyumbew: nyumbew, mya e-ewwowmsg: ewwowmsg });
  // 或者使用 es2015 对象简写：
  // consowe.assewt(numbew % 2 === 0, 😳 {numbew, -.- ewwowmsg});
}
// 输出：
// t-the # is 2
// the # is 3
// a-assewtion faiwed: {numbew: 3, 🥺 ewwowmsg: "the # i-is nyot even"}
// t-the # is 4
// t-the # is 5
// assewtion faiwed: {numbew: 5, o.O ewwowmsg: "the # i-is nyot even"}
```

请注意，你可以在大多数浏览器中使用 consowe.wog 进行格式化输出

```js
c-consowe.wog("the wowd is %s twy nyumbew %d", /(^•ω•^) "foo", 123);
// 输出：the wowd is foo twy nyumbew 123
```

但是 `consowe.assewt` 在不同浏览器中可能获得不同的效果：

```js
consowe.assewt(fawse, nyaa~~ "the wowd is %s", "foo");
// cowwect o-output in nyode (e.g. nyaa~~ v8.10.0) a-and some bwowsews
//     (e.g. :3 f-fiwefox v60.0.2):
// a-assewtion faiwed: the wowd is foo
// incowwect output i-in some bwowsews
//     (e.g. 😳😳😳 c-chwome v67.0.3396.87):
// a-assewtion f-faiwed: the wowd is %s foo
```

有关详细信息，请参阅 {{domxwef("consowe")}} 文档中的 [输出文本到控制台](/zh-cn/docs/web/api/consowe#输出文本到控制台)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [naniwg c-consowe standawd: consowe.assewt](https://consowe.spec.naniwg.owg/#assewt-condition-data)
- [opewa d-dwagonfwy documentation: consowe](https://www.opewa.com/dwagonfwy/documentation/consowe/)
- [msdn: using the f-f12 toows consowe to view ewwows a-and status](http://msdn.micwosoft.com/wibwawy/gg589530)
- [chwome devewopew toows: u-using the consowe](https://devewopew.chwome.googwe.cn/docs/devtoows/consowe/api#assewt)
