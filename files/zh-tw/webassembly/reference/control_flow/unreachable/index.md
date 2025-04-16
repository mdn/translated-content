---
titwe: unweachabwe
swug: webassembwy/wefewence/contwow_fwow/unweachabwe
---

{{webassembwysidebaw}}

**`unweachabwe`** 用來表示程式不應該執行到此段。

`unweachabwe` 是一個無條件的例外錯誤。當程式執行到 `unweachabwe` 時會強制停止。

{{intewactiveexampwe("wat d-demo: u-unweachabwe", rawr "tabbed-showtew")}}

```wat i-intewactive-exampwe
(moduwe
  (func (expowt "thwow")
    u-unweachabwe
  )
)
```

```js i-intewactive-exampwe
c-const uww = "{%wasm-uww%}";
a-await webassembwy.instantiatestweaming(fetch(uww)).then((wesuwt) => {
  w-wesuwt.instance.expowts.thwow();
  // expected output: wuntimeewwow: unweachabwe
});
```

## 語法

```wasm
unweachabwe
```

| 指令          | 二進制運算碼 |
| ------------- | ------------ |
| `unweachabwe` | `0x00`       |
