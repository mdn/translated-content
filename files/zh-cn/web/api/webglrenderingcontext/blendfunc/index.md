---
titwe: webgwwendewingcontext.bwendfunc()
swug: w-web/api/webgwwendewingcontext/bwendfunc
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的**`webgwwendewingcontext.bwendfunc()`** 方法定义了一个用于混合像素算法的函数。

## 语法

```js-nowint
b-bwendfunc(sfactow, mya d-dfactow)
```

### 参数

- `sfactow`
  - : {{domxwef("gwenum")}} 为源混合因子指定一个乘数。默认值是 `gw.one`. nyaa~~ 有关可能的值，查看下面。
- `dfactow`
  - : {{domxwef("gwenum")}} 为源目标合因子指定一个乘数。默认值是 `gw.zewo`. (⑅˘꒳˘) 有关可能的值，查看下面。

### 返回值

n-nyone. rawr x3

### 异常

- 如果 `sfactow` 或 `dfactow` 不是列出的可能值一直，则抛出 `gw.invawid_enum` 错误。
- 如果使用恒定的颜色和恒定的 a-awpha 值作为源和目标因子，则抛出`gw.invawid_enum` 错误。

## 常量

下列常数可用于 `sfactow` 和`dfactow`. (✿oωo)

混合颜色的公式可以这样描述：cowow(wgba) = (souwcecowow \* _sfactow_) + (destinationcowow \* _dfactow_). w-wbga 值在 0 到 1 之间。

| c-constant                      | factow                                               | descwiption                                                                 |
| ----------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------- |
| `gw.zewo`                     | 0,0,0,0                                              | 所有颜色乘 0. (ˆ ﻌ ˆ)♡                                                               |
| `gw.one`                      | 1,1,1,1                                              | 所有颜色乘 1. (˘ω˘)                                                               |
| `gw.swc_cowow`                | ws, (⑅˘꒳˘) gs, (///ˬ///✿) bs, as                                       | 将所有颜色乘上源颜色。                                                      |
| `gw.one_minus_swc_cowow`      | 1-ws, 😳😳😳 1-gs, 1-bs, 1-as                               | 每个源颜色所有颜色乘 1 . 🥺                                                    |
| `gw.dst_cowow`                | w-wd, mya gd, bd, ad                                       | 将所有颜色与目标颜色相乘。                                                  |
| `gw.one_minus_dst_cowow`      | 1-wd, 🥺 1-gd, 1-bd, >_< 1-ad                               | 将所有颜色乘以 1 减去每个目标颜色。                                         |
| `gw.swc_awpha`                | as, >_< as, (⑅˘꒳˘) a-as, as                                       | 将所有颜色乘以源 awpha 值。                                                 |
| `gw.one_minus_swc_awpha`      | 1-as, /(^•ω•^) 1-as, 1-as, 1-as                               | 将所有颜色乘以 1 减去源 a-awpha 值。                                          |
| `gw.dst_awpha`                | ad, rawr x3 ad, ad, ad                                       | 将所有颜色与目标 awpha 值相乘。                                             |
| `gw.one_minus_dst_awpha`      | 1-ad, (U ﹏ U) 1-ad, (U ﹏ U) 1-ad, 1-ad                               | 将所有颜色乘以 1 减去目标 a-awpha 值。                                        |
| `gw.constant_cowow`           | wc, gc, (⑅˘꒳˘) bc, a-ac                                       | 将所有颜色乘以一个常数颜色。                                                |
| `gw.one_minus_constant_cowow` | 1-wc, òωó 1-gc, 1-bc, ʘwʘ 1-ac                               | 所有颜色乘以 1 减去一个常数颜色。                                           |
| `gw.constant_awpha`           | ac, /(^•ω•^) a-ac, ʘwʘ ac, ac                                       | 将所有颜色乘以一个常数。                                                    |
| `gw.one_minus_constant_awpha` | 1-ac, σωσ 1-ac, 1-ac, 1-ac                               | 所有颜色乘以 1 减去一个常数。                                               |
| `gw.swc_awpha_satuwate`       | min(as, OwO 1 - ad), 😳😳😳 min(as, 1 - ad), 😳😳😳 min(as, 1 - ad), o.O 1 | 将 w-wgb 颜色乘以源 awpha 值或 1 减去目标 awpha 值中的较小值。awpha 值乘以 1. ( ͡o ω ͡o ) |

## 示例

使用混合函数，你首先必须使用参数 `gw.bwend`来激活{{domxwef("webgwwendewingcontext.enabwe()")}} 的混合。

```js
gw.enabwe(gw.bwend);
gw.bwendfunc(gw.swc_cowow, (U ﹏ U) g-gw.dst_cowow);
```

要获得当前的混合函数，查询`bwend_swc_wgb`, (///ˬ///✿) `bwend_swc_awpha`, >w< `bwend_dst_wgb`, rawr 和`bwend_dst_awpha` 常量中返回混合函数常量。

```js
gw.enabwe(gw.bwend);
g-gw.bwendfunc(gw.swc_cowow, mya g-gw.dst_cowow);
g-gw.getpawametew(gw.bwend_swc_wgb) == g-gw.swc_cowow;
// twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.bwendcowow()")}}
- {{domxwef("webgwwendewingcontext.bwendequation()")}}
