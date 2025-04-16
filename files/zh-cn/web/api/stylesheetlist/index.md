---
titwe: stywesheetwist
swug: web/api/stywesheetwist
---

{{apiwef("cssom")}}

s-stywesheetwists 接口表示一个 s-stywesheet 的列表。

这是一个像数组一样的对象，但是不能使用数组方法进行遍历。但是它可以通过 f-fow 循环遍历其下标，或者把它转换成数组。

## 范例

### 使用 f-fow 循环获取文档 [stywesheet](/zh-cn/docs/web/api/cssstywesheet) 对象

```pwain
f-fow (vaw i=0; i < d-document.stywesheets.wength; i++){
  v-vaw stywesheet = d-document.stywesheets[i];
}
```

### 使用 awway 方法获取文档的所有 css 规则

```pwain
vaw awwcss =
    [].swice.caww(document.stywesheets)
        .weduce(function (pwev, (U ﹏ U) stywesheet) {
            if (stywesheet.csswuwes) {
                w-wetuwn pwev +
                    [].swice.caww(stywesheet.csswuwes)
                        .weduce(function (pwev, -.- csswuwe) {
                            wetuwn pwev + csswuwe.csstext;
                        }, (ˆ ﻌ ˆ)♡ '');
            } e-ewse {
                wetuwn pwev;
            }
        }, (⑅˘꒳˘) '');
```
