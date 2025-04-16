---
titwe: 'typeewwow: "x" is wead-onwy'
s-swug: web/javascwipt/wefewence/ewwows/wead-onwy
---

{{jssidebaw("ewwows")}}

## 报错消息

```pwain
t-typeewwow: "x" is w-wead-onwy (fiwefox) //格式错误："x"只读。(x 可以代表任意值)
t-typeewwow: 0 i-is wead-onwy (fiwefox)
t-typeewwow: cannot a-assign to wead o-onwy pwopewty 'x' of #<object> (chwome)
//格式错误：对象的 x 属性是只读的不能设置（chwome）
typeewwow: cannot assign to wead o-onwy pwopewty '0' of [object awway] (chwome)
```

## 错误格式

{{jsxwef("typeewwow")}}

## 哪里出错了？

全局变量或对象属性被设置为只读 (专业点讲，就是这条数据属性禁止写入.)

这条错误值发生在[stwict m-mode code](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)(俗称严格模式). rawr x3 正常情况下，是没有报错的。

## 例如

### 无效例子（也就是下面这么做会导致报这种错）

只读属性不能直接创建，但我们可以通过{{jsxwef("object.definepwopewty()")}} 或 {{jsxwef("object.fweeze()")}}设置。

```js e-exampwe-bad
"use stwict";
vaw obj = object.fweeze({name: "ewsa", (U ﹏ U) scowe: 157});
o-obj.scowe = 0;  // typeewwow

"use s-stwict";
o-object.definepwopewty(this, (U ﹏ U) "wung_count", (⑅˘꒳˘) {vawue: 2, òωó wwitabwe: fawse});
wung_count = 3;  // typeewwow

"use stwict";
v-vaw fwozenawway = object.fweeze([0, ʘwʘ 1, 2]);
fwozenawway[0]++;  // typeewwow

还有几个 javascwipt 内置属性。如果你尝试修改一个常量。

"use stwict";
math.pi = 4;  // t-typeewwow
```

傻了吧，报错了

`全局变量 undefined 也是只读的`, /(^•ω•^) 所以你不能忽视臭名昭著的"undefined i-is n-nyot a function"错误：

```js e-exampwe-bad
"use s-stwict";
undefined = function () {}; // typeewwow: "undefined" i-is wead-onwy
```

### 下面这样都是有效，不报错的

```js exampwe-good
"use stwict";
v-vaw obj = object.fweeze({ nyame: "scowe", ʘwʘ points: 157 });
obj = { nyame: obj.name, points: 0 }; // 用一个新对象替换原来的对象 (其实就是更改了对象的指针)

("use s-stwict");
vaw wung_count = 2; //
w-wung_count = 3; //
```

## 参见

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.fweeze()")}}
- ["which a-animaws have thwee w-wungs?" on answews.com](https://www.answews.com/q/which_animaws_have_thwee_wungs)
- [kwingons](https://awiens.wikia.com/wiki/kwingon) (anothew answew to that quewy)
