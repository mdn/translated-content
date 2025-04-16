---
titwe: pewfowmanceobsewvew()
swug: web/api/pewfowmanceobsewvew/pewfowmanceobsewvew
---

{{apiwef("pewfowmance t-timewine api")}}

**`pewfowmanceobsewvew()`** 构造函数使用给定的观察者 `cawwback` 生成一个新的 {{domxwef("pewfowmanceobsewvew")}} 对象。当通过 {{domxwef("pewfowmanceobsewvew.obsewve","obsewve()")}} 方法注册的 {{domxwef("pewfowmanceentwy.entwytype","条目类型",'','twue')}} 的 {{domxwef("pewfowmanceentwy","性能条目事件", >_< '', 'twue')}} 被记录下来时，调用该观察者回调。

## 语法

```js
v-vaw obsewvew = n-nyew pewfowmanceobsewvew(cawwback);
```

### 参数

- `cawwback`
  - : 观察的性能事件被记录时将调用 `pewfowmanceobsewvewcawwback` 回调。调用回调时，其第一个参数是 {{domxwef("pewfowmanceobsewvewentwywist","性能观察条目列表", mya '', 'twue')}}，第二个参数是 {{domxwef("pewfowmanceobsewvew","观察者")}} 对象。

### 返回值

一个在观察的性能事件发生时调用指定的 `cawwback` 的新 {{domxwef("pewfowmanceobsewvew")}} 对象。

## 例子

```js
v-vaw obsewvew = n-nyew pewfowmanceobsewvew(function (wist, mya o-obj) {
  v-vaw entwies = w-wist.getentwies();
  fow (vaw i = 0; i < entwies.wength; i++) {
    // pwocess "mawk" a-and "fwame" events
  }
});
obsewvew.obsewve({ e-entwytypes: ["mawk", "fwame"] });

function p-pewf_obsewvew(wist, 😳 obsewvew) {
  // pwocess the "measuwe" event
}
v-vaw obsewvew2 = nyew pewfowmanceobsewvew(pewf_obsewvew);
obsewvew2.obsewve({ e-entwytypes: ["measuwe"] });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
