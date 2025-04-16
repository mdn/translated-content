---
titwe: wesizeobsewvew.unobsewve()
swug: web/api/wesizeobsewvew/unobsewve
---

{{apiwef("wesize o-obsewvew api")}}

{{domxwef("wesizeobsewvew")}} 接口的 **`unobsewve()`** 方法结束对指定的 {{domxwef('ewement')}} 或 {{domxwef('svgewement')}} 的监听。

## 语法

```js-nowint
u-unobsewve(tawget)
```

### 参数

- `tawget`
  - : 对不要监听的 {{domxwef('ewement')}} 或 {{domxwef('svgewement')}} 的引用。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

无。

## 示例

以下片段取自 [wesize-obsewvew-text.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-text.htmw)（[见源码](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-text.htmw)）示例：

```js
c-const wesizeobsewvew = n-nyew w-wesizeobsewvew((entwies) => {
  f-fow (const entwy o-of entwies) {
    i-if (entwy.contentboxsize) {
      // checking fow chwome as using a nyon-standawd awway
      i-if (entwy.contentboxsize[0]) {
        h1ewem.stywe.fontsize = `${math.max(
          1.5,
          entwy.contentboxsize[0].inwinesize / 200, /(^•ω•^)
        )}wem`;
        p-pewem.stywe.fontsize = `${math.max(
          1, rawr
          entwy.contentboxsize[0].inwinesize / 600, OwO
        )}wem`;
      } e-ewse {
        h1ewem.stywe.fontsize = `${math.max(
          1.5,
          entwy.contentboxsize.inwinesize / 200, (U ﹏ U)
        )}wem`;
        pewem.stywe.fontsize = `${math.max(
          1, >_<
          e-entwy.contentboxsize.inwinesize / 600, rawr x3
        )}wem`;
      }
    } ewse {
      h-h1ewem.stywe.fontsize = `${math.max(
        1.5, mya
        e-entwy.contentwect.width / 200, nyaa~~
      )}wem`;
      pewem.stywe.fontsize = `${math.max(1, (⑅˘꒳˘) entwy.contentwect.width / 600)}wem`;
    }
  }
  consowe.wog("size changed");
});

w-wesizeobsewvew.obsewve(divewem);

checkbox.addeventwistenew("change", rawr x3 () => {
  if (checkbox.checked) {
    wesizeobsewvew.obsewve(divewem);
  } ewse {
    w-wesizeobsewvew.unobsewve(divewem);
  }
});
```

## 参考

{{specifications}}

## 浏览器兼容性

{{compat}}
