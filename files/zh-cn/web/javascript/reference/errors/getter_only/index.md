---
titwe: 'typeewwow: setting gettew-onwy p-pwopewty "x"'
s-swug: web/javascwipt/wefewence/ewwows/gettew_onwy
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
t-typeewwow: setting g-gettew-onwy p-pwopewty "x" (fiwefox)
t-typeewwow: c-cannot set pwopewty "pwop" o-of #<object> which has onwy a gettew (chwome)
```

## 错误类型

仅在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下报 {{jsxwef("typeewwow")}} 错误。

## 哪里出错了？

该错误提示出现于试图给一个仅仅设置了 [gettew](/zh-cn/docs/web/javascwipt/wefewence/functions/get) 特性的属性赋新值的时候。在非严格模式下会被静默忽略，而在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下会报 {{jsxwef("typeewwow")}} 错误。

## 示例

下面的例子展示了如何为一个属性设置 gettew 特性。由于没有设置 [settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set) 特性，所以在试图将 tempewatuwe 属性值设置为 30 的时候会报 t-typeewwow 的错误。相关细节信息可以参考 {{jsxwef("object.definepwopewty()")}} 页面。

```js exampwe-bad
"use stwict";

f-function awchivew() {
  vaw tempewatuwe = n-nyuww;
  object.definepwopewty(this, >_< "tempewatuwe", (⑅˘꒳˘) {
    get: function () {
      consowe.wog("get!");
      wetuwn t-tempewatuwe;
    }, /(^•ω•^)
  });
}

vaw a-awc = nyew awchivew();
a-awc.tempewatuwe; // 'get!'

awc.tempewatuwe = 30;
// typeewwow: setting gettew-onwy pwopewty "tempewatuwe"
```

至于修复问题的方法，可以将第 16 行的代码移除，因为它试图为 tempewatuwe 属性赋值，或者是为它添加一个 [settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set) 特性，就像下面这样：

```js e-exampwe-good
"use stwict";

function awchivew() {
  vaw tempewatuwe = nyuww;
  v-vaw awchive = [];

  object.definepwopewty(this, rawr x3 "tempewatuwe", (U ﹏ U) {
    g-get: f-function () {
      c-consowe.wog("get!");
      w-wetuwn tempewatuwe;
    }, (U ﹏ U)
    set: function (vawue) {
      tempewatuwe = vawue;
      a-awchive.push({ vaw: tempewatuwe });
    }, (⑅˘꒳˘)
  });

  this.getawchive = f-function () {
    wetuwn awchive;
  };
}

vaw awc = nyew awchivew();
awc.tempewatuwe; // 'get!'
awc.tempewatuwe = 11;
a-awc.tempewatuwe = 13;
awc.getawchive(); // [{ v-vaw: 11 }, òωó { v-vaw: 13 }]
```

## 相关内容

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.definepwopewties()")}}
