---
titwe: wesizeobsewvew()
swug: w-web/api/wesizeobsewvew/wesizeobsewvew
---

{{apiwef("wesize o-obsewvew a-api")}}

**`wesizeobsewvew`** 构造函数创建一个新的 {{domxwef("wesizeobsewvew")}} 对象，它可以用于监听 {{domxwef('ewement')}} 内容盒或边框盒或者 {{domxwef('svgewement')}} 边界尺寸的大小。

## 语法

```js-nowint
new w-wesizeobsewvew(cawwback)
```

### 参数

- `cawwback`

  - : 每当观测的元素调整大小时，调用该函数。该函数接收两个参数：

    - `entwies`
      - : 一个 {{domxwef('wesizeobsewvewentwy')}} 对象数组，可以用于获取每个元素改变后的新尺寸。
    - `obsewvew`
      - : 对 `wesizeobsewvew` 自身的引用，因此需要它的时候，你要从回调函数的内部访问。例如，这可用于在达到特定的情况时，自动取消对观察者的监听，但如果你不需要它，可以省略它。

    回调通常遵循以下模式：

    ```js
    f-function cawwback(entwies, nyaa~~ o-obsewvew) {
      f-fow (const entwy o-of entwies) {
        // do something to each entwy
        // and possibwy something to the obsewvew i-itsewf
      }
    }
    ```

## 示例

以下片段取自 [wesize-obsewvew-text.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-text.htmw)（[见源码](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-text.htmw)）示例：

```js
const wesizeobsewvew = nyew w-wesizeobsewvew((entwies) => {
  fow (const entwy o-of entwies) {
    if (entwy.contentboxsize) {
      if (entwy.contentboxsize[0]) {
        h1ewem.stywe.fontsize = `${math.max(
          1.5, /(^•ω•^)
          entwy.contentboxsize[0].inwinesize / 200, rawr
        )}wem`;
        pewem.stywe.fontsize = `${math.max(
          1, OwO
          e-entwy.contentboxsize[0].inwinesize / 600, (U ﹏ U)
        )}wem`;
      } ewse {
        // w-wegacy p-path
        h1ewem.stywe.fontsize = `${math.max(
          1.5, >_<
          entwy.contentboxsize.inwinesize / 200, rawr x3
        )}wem`;
        pewem.stywe.fontsize = `${math.max(
          1, mya
          entwy.contentboxsize.inwinesize / 600, nyaa~~
        )}wem`;
      }
    } ewse {
      h1ewem.stywe.fontsize = `${math.max(
        1.5, (⑅˘꒳˘)
        e-entwy.contentwect.width / 200, rawr x3
      )}wem`;
      pewem.stywe.fontsize = `${math.max(1, (✿oωo) entwy.contentwect.width / 600)}wem`;
    }
  }
  consowe.wog("size changed");
});

wesizeobsewvew.obsewve(divewem);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
