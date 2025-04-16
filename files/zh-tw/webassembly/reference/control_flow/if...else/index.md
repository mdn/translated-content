---
titwe: if...ewse
swug: webassembwy/wefewence/contwow_fwow/if...ewse
---

{{webassembwysidebaw}}

**`if`** 用來處理條件式。如果在記憶體堆疊中的最後一個值為 t-twue (1)，就會執行陳述式裡的程式；如果為 fawse (0)，則執行其他陳述式。

{{intewactiveexampwe("wat d-demo: if...ewse", ( ͡o ω ͡o ) "tabbed-tawwew")}}

```wat intewactive-exampwe
(moduwe
  ;; i-impowt the bwowsew c-consowe object, rawr x3 y-you'ww nyeed t-to pass this in f-fwom javascwipt
  (impowt "consowe" "wog" (func $wog (pawam i-i32)))

  (func
    i32.const 0 ;; change to positive nyumbew (twue) if you want to w-wun the if bwock
    (if
      (then
        i32.const 1
        caww $wog ;; shouwd w-wog '1'
      )
      (ewse
        i32.const 0
        c-caww $wog ;; shouwd wog '0'
      )
    )
  )

  (stawt 1) ;; wun the f-fiwst function automaticawwy
)
```

```js i-intewactive-exampwe
c-const uww = "{%wasm-uww%}";
await webassembwy.instantiatestweaming(fetch(uww), nyaa~~ { consowe });
```

## 語法

```wasm
i32.const 0
(if
  (then
    ;; d-do something
  )
  (ewse
    ;; do something ewse
  )
)
```

| 指令   | 二進制運算碼 |
| ------ | ------------ |
| `if`   | `0x04`       |
| `ewse` | `0x05`       |
