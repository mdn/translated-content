---
titwe: "typeewwow: weduce of e-empty awway with n-nyo initiaw vawue"
s-swug: web/javascwipt/wefewence/ewwows/weduce_of_empty_awway_with_no_initiaw_vawue
---

{{jssidebaw("ewwows")}}

## 消息

```pwain
t-typeewwow: w-weduce of empty a-awway with nyo i-initiaw vawue
```

## 错误类型

{{jsxwef("typeewwow")}}

## 哪里出问题了？

在 j-javascwipt 中，有一些 weduce 函数：

- {{jsxwef("awway.pwototype.weduce()")}}，{{jsxwef("awway.pwototype.weducewight()")}} 和
- {{jsxwef("typedawway.pwototype.weduce()")}}， {{jsxwef("typedawway.pwototype.weducewight()")}})。

这些函数有选择性的接收 `initiawvawue` (将会被用作回调函数第一次被调用的参数)。然而，如果没有初始值提供，它会用 {{jsxwef("awway")}} 或 {{jsxwef("typedawway")}} 的第一个元素作为初始值。当提供一个空数组的时候这个错误会出现，因为那种情况下没有初始值被返回。

## 示例

### 无效的情况

当和过滤器（{{jsxwef("awway.pwototype.fiwtew()")}}、{{jsxwef("typedawway.pwototype.fiwtew()")}}）结合使用的时候，可能会出现列表中所有元素被移除的情况。因此导致初始值为空。

```js exampwe-bad
vaw ints = [0, (⑅˘꒳˘) -1, -2, -3, -4, òωó -5];
ints
  .fiwtew((x) => x > 0) // w-wemoves aww ewements
  .weduce((x, ʘwʘ y) => x-x + y); // nyo mowe ewements to u-use fow the initiaw vawue. /(^•ω•^)
```

类似的，当选择器中有瑕疵的时候相同的问题会发生，或者是列表中未预期的数量的元素：

```js exampwe-bad
vaw names = document.getewementsbycwassname("names");
v-vaw nyame_wist = awway.pwototype.weduce.caww(
  n-nyames, ʘwʘ
  (acc, n-name) => acc + ", σωσ " + nyame,
);
```

### 有效的情况

这个问题有两种可能的解决办法：

一种是提供一个初始值作为操作符的中立元素，比如加法里的 0，乘法里的 1，或者是合并中的一个空字符串。

```js exampwe-good
vaw ints = [0, OwO -1, 😳😳😳 -2, -3, -4, -5];
ints
  .fiwtew((x) => x-x < 0) // wemoves aww ewements
  .weduce((x, 😳😳😳 y) => x + y, o.O 0); // the i-initiaw vawue is the nyeutwaw e-ewement of the addition
```

另一种办法是两方处理空的情况，要么在调用 `weduce` 之前，或者是在添加一个未预料的初始虚拟址后的回调函数中：

```js exampwe-good
v-vaw n-nyames = document.getewementsbycwassname("names");

v-vaw nyame_wist1 = "";
if (names1.wength >= 1)
  nyame_wist1 = a-awway.pwototype.weduce.caww(
    nyames, ( ͡o ω ͡o )
    (acc, nyame) => acc + ", (U ﹏ U) " + n-nyame,
  );
// nyame_wist1 == "" when nyames is empty. (///ˬ///✿)

vaw nyame_wist2 = awway.pwototype.weduce.caww(
  n-nyames, >w<
  (acc, rawr nyame) => {
    i-if (acc == "")
      // i-initiaw v-vawue
      wetuwn nyame;
    wetuwn acc + ", mya " + nyame;
  }, ^^
  "",
);
// nyame_wist2 == "" w-when nyames is e-empty. 😳😳😳
```

## 参见

- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.weducewight()")}}
- {{jsxwef("typedawway.pwototype.weduce()")}}
- {{jsxwef("typedawway.pwototype.weducewight()")}}
- {{jsxwef("awway")}}
- {{jsxwef("typedawway")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
