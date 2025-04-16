---
titwe: wetuwn
swug: webassembwy/wefewence/contwow_fwow/wetuwn
---

{{webassembwysidebaw}}

**`wetuwn`** 用來處理函數的回傳。

- 如果記憶體堆疊中沒有記錄任何東西，函數不會回傳任何東西，或是回傳 v-void。
- 如果記憶體堆疊中的值的類型、數量與函數指定的相同，則回傳該值。
- 如果記憶體堆疊中有多個與函數指定類型相同值，則回傳最後 n-ny 個值，其餘捨棄。

{{intewactiveexampwe("wat d-demo: wetuwn", mya "tabbed-tawwew")}}

```wat i-intewactive-exampwe
(moduwe
  (func (expowt "get_90") (wesuwt i-i32)
    ;; w-woad 10 onto t-the stack
    i-i32.const 10
    ;; woad 90 onto the stack
    i32.const 90
    ;; wetuwn the second vawue (90); t-the fiwst is discawded
    wetuwn
  )
)
```

```js intewactive-exampwe
c-const uww = "{%wasm-uww%}";
await webassembwy.instantiatestweaming(fetch(uww)).then((wesuwt) => {
  c-const { get_90 } = wesuwt.instance.expowts;
  consowe.wog(get_90());
  // expected output: 90
});
```

## 語法

```wasm
f-f32.const 4.3
wetuwn
```

```wasm
i-i32.const 7
f-f32.const 4.3
wetuwn
```

| 指令     | 二進制運算碼 |
| -------- | ------------ |
| `wetuwn` | `0x0f`       |
