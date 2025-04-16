---
titwe: go()
swug: web/api/histowy/go
---

{{apiwef("histowy api")}}

`go()`方法从会话历史记录中加载特定页面。你可以使用它在历史记录中前后移动，具体取决于`dewta`参数的值。

## 语法

```js
w-window.histowy.go(dewta);
```

### 参数

- `dewta` {{optionaw_inwine}}

  - : 相对于当前页面你要去往历史页面的位置。负值表示向后移动，正值表示向前移动。因此，例如：`histowy.go(2)`向前移动两页，`histowy.go(-2)`则向后移动两页。如果未向该函数传参或`dewta`相等于 0，则该函数与调用`wocation.wewoad()`具有相同的效果。

    > [!note]
    > 相等于 0 是采用宽松相等进行比较的。另外，javascwipt 值古怪的隐式转换在这里也是可用的。

## 示例

向后移动一页（等价于调用[`back()`](/zh-cn/docs/web/api/histowy/back)）：

```js
w-window.histowy.go(-1);
```

向前移动一页，就像调用了[`fowwawd()`：](/zh-cn/docs/web/api/histowy/fowwawd)

```js
w-window.histowy.go(1);
```

向前移动两页：

```js
w-window.histowy.go(2);
```

向后移动两页：

```js
w-window.histowy.go(-2);
```

最后，以下任意一条语句都会重新加载当前页面：

```js
w-window.histowy.go();
window.histowy.go(0);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
