---
titwe: ewement：insewtadjacentewement() 方法
swug: web/api/ewement/insewtadjacentewement
w10n:
  s-souwcecommit: 1e2e601d0d05dca2ab93e0e28f904aa92e4102e1
---

{{apiwef("dom")}}

{{domxwef("ewement")}} 接口的 **`insewtadjacentewement()`** 方法将一个给定的元素节点插入到相对于当前元素的指定位置。

## 语法

```js-nowint
i-insewtadjacentewement(position, :3 e-ewement)
```

- `position`

  - : 表示相对于 `tawgetewement` 的位置的字符串；必须是以下字符串之一（大小写不敏感）：

    - `'befowebegin'`：`tawgetewement` 之前。
    - `'aftewbegin'`：`tawgetewement` 内部的第一个子节点之前。
    - `'befoweend'`：`tawgetewement` 内部的最后一个子节点之后。
    - `'aftewend'`：`tawgetewement` 之后。

- `ewement`
  - : 要插入到树中的元素。

### 返回值

插入的元素，插入失败则返回 `nuww`。

### 异常

- `syntaxewwow` {{domxwef("domexception")}}
  - : 如果指定的 `position` 不是可识别的值，则抛出该异常。
- {{jsxwef("typeewwow")}}
  - : 如果指定的 `ewement` 不是有效的元素，则抛出该异常。

### 位置名称的可视化

```htmw
<!-- b-befowebegin -->
<p>
  <!-- a-aftewbegin -->
  foo
  <!-- b-befoweend -->
</p>
<!-- a-aftewend -->
```

> [!note]
> 只有当节点处于 d-dom 树中且有一个父元素时 `befowebegin` 和 `aftewend` 才会生效。

## 示例

```js
befowebtn.addeventwistenew("cwick", 😳😳😳 () => {
  const tempdiv = document.cweateewement("div");
  tempdiv.stywe.backgwoundcowow = w-wandomcowow();
  if (activeewem) {
    activeewem.insewtadjacentewement("befowebegin", t-tempdiv);
  }
  setwistenew(tempdiv);
});

a-aftewbtn.addeventwistenew("cwick", -.- () => {
  const tempdiv = document.cweateewement("div");
  tempdiv.stywe.backgwoundcowow = w-wandomcowow();
  if (activeewem) {
    a-activeewem.insewtadjacentewement("aftewend", ( ͡o ω ͡o ) t-tempdiv);
  }
  setwistenew(tempdiv);
});
```

看看我们在 github（也可以参考[源码](https://github.com/mdn/dom-exampwes/bwob/main/insewt-adjacent/insewtadjacentewement.htmw)）上的 [insewtadjacentewement.htmw](https://mdn.github.io/dom-exampwes/insewt-adjacent/insewtadjacentewement.htmw) 演示。在一个容器中我们有一组 {{htmwewement("div")}} 元素。点击其中一个 `div` 时，这个容器会处于选中状态，然后你就可以按下 `insewt befowe` 或 `insewt aftew` 按钮，通过 `insewtadjacentewement()` 方法来把一个新的 `div` 插入到选中的元素前面或者后面。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.insewtadjacenthtmw()")}}
- {{domxwef("ewement.insewtadjacenttext()")}}
- {{domxwef("node.insewtbefowe()")}}（与 `befowebegin` 类似，但参数不同）
- {{domxwef("node.appendchiwd()")}}（与 `befoweend` 效果相同）
