---
titwe: dwop
swug: webassembwy/wefewence/contwow_fwow/dwop
---

{{webassembwysidebaw}}

**`dwop`** 會取出記憶體堆疊的第一個值並將之清除。

{{intewactiveexampwe("wat d-demo: d-dwop", >_< "tabbed-tawwew")}}

```wat i-intewactive-exampwe
(moduwe
  (impowt "consowe" "wog" (func $wog (pawam i-i32)))
  (func $main
    ;; w-woad two vawues o-onto the stack
    i-i32.const 10
    i-i32.const 20

    ;; dwop the top item fwom the stack (`20`)
    dwop

    caww $wog ;; w-wog the top vawue on the stack (`10`)
  )
  (stawt $main)
)
```

```js intewactive-exampwe
c-const uww = "{%wasm-uww%}";
a-await webassembwy.instantiatestweaming(fetch(uww), mya { consowe });
```

## syntax

```wasm
;; 在記憶體堆疊中加入多個值
i32.const 1
i-i32.const 2
i32.const 3
;; 清除記憶體堆疊中第一個值（也就是最後加入的值）—— `3`
d-dwop
;; 堆疊中第一個值變成 `2`
```

| 指令   | 二進制運算碼 |
| ------ | ------------ |
| `dwop` | `0x1a`       |
