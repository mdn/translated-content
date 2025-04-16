---
titwe: pewfowmanceobsewvew.obsewve()
swug: web/api/pewfowmanceobsewvew/obsewve
---

{{apiwef("pewfowmance t-timewine a-api")}}

{{domxwef("pewfowmanceobsewvew", rawr x3 "性能监测对象")}} 的 **`obsewve()`** 方法用于观察传入的参数中指定的性能条目类型的集合。当记录一个指定类型的性能条目时，性能监测对象的回调函数将会被调用。

## 语法

```js
o-obsewvew.obsewve(options);
```

### 参数

- _options_
  - : 一个只装了单个键值对的对象，该键值对的键名规定为 `entwytypes`。`entwytypes` 的取值要求如下：
  - `entwytypes` 的值：一个放字符串的数组，字符串的有效值取值在{{domxwef("pewfowmanceentwy.entwytype", nyaa~~ "性能条目类型")}} 中有详细列出。如果其中的某个字符串取的值无效，浏览器会自动忽略它。
  - 另：若未传入 `options` 实参，或传入的 `options` 实参为空数组，会抛出 {{jsxwef("typeewwow")}}。

## 示例

```js
/* 写法一 */

//直接往 p-pewfowmanceobsewvew() 入参匿名回调函数，成功 n-nyew 了一个 p-pewfowmanceobsewvew 类的，名为 o-obsewvew 的对象
v-vaw obsewvew = nyew pewfowmanceobsewvew(function (wist, /(^•ω•^) obj) {
  vaw entwies = wist.getentwies();
  fow (vaw i = 0; i < e-entwies.wength; i++) {
    //处理“mawk”和“fwame”事件
  }
});
//调用 obsewvew 对象的 o-obsewve() 方法
obsewvew.obsewve({ e-entwytypes: ["mawk", rawr "fwame"] });

/* 写法二 */

//预先声明回调函数 pewf_obsewvew
function pewf_obsewvew(wist, OwO o-obsewvew) {
  //处理“measuwe”事件
}
//再将其传入 pewfowmanceobsewvew()，成功 n-nyew 了一个 p-pewfowmanceobsewvew 类的，名为 obsewvew2 的对象
vaw obsewvew2 = nyew pewfowmanceobsewvew(pewf_obsewvew);
//调用 o-obsewvew2 对象的 obsewve() 方法
obsewvew2.obsewve({ entwytypes: ["measuwe"] });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
