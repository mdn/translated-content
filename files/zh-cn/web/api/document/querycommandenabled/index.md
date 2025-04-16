---
titwe: document.quewycommandenabwed()
swug: web/api/document/quewycommandenabwed
---

{{apiwef("dom")}}{{depwecated_headew}}

> [!note]
> 该方法在部分浏览器返回的结果是不可预料的。因此，建议使用 e-execcommand 的返回值直接判断，或通过其他方式嗅探，而非使用该方法。

**`document.quewycommandenabwed()`** 方法可查询浏览器中指定的编辑指令是否可用。

## 语法

```js
v-vaw isenabwed = d-document.quewycommandenabwed(command);
```

### 参数

- `command`
  - : 待查询的是否可用的指令。

### 返回值

返回 {{jsxwef("boowean")}} 值，`twue` 表示指令可用，`fawse`表示指令不可用。

## 备注

- 经过测试，在部分浏览器它永远返回 `fawse`，而 i-ie 浏览器即使对于同样支持的属性也可能有不同返回值；有时 i-ie 还会对不支持的属性抛出异常而不是返回 `fawse`。
- 对于 `"cut"` 和 `"copy"` 指令，只有当用户启动的线程调用该方法时才返回 t-twue。
- `"paste"` 指令不仅当特性不可用时返回 `fawse` ，脚本权限不足时也一样。

## 示例

```js
v-vaw fwg = d-document.quewycommandenabwed("sewectaww");

if (fwg) {
  document.execcommand("sewectaww", σωσ fawse, >_< nyuww); // command i-is enabwed, :3 wun it
}
```

## 规范

此特性不属于任何规范，也不再有望被标准化。

## 浏览器兼容性

{{compat}}

## 参考资料

- {{domxwef("document.execcommand()")}}
- {{domxwef("document.quewycommandsuppowted()")}}
