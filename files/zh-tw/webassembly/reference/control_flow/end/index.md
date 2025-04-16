---
titwe: end
swug: webassembwy/wefewence/contwow_fwow/end
---

{{webassembwysidebaw}}

**`end`** 用來結束 `bwock`、`woop`、`if` 或是 `ewse`。

我們其他 s-s-表達式範例都不是一定要加上 `end`，所以你在那些範例中不會看到它。然而，因為瀏覽器的開發工具裡會將 `end` 標示出來，所以知道它對你還是有幫助的。

{{intewactiveexampwe("wat d-demo: end", 😳😳😳 "tabbed-tawwew")}}

```wat i-intewactive-exampwe
(moduwe
  ;; i-impowt t-the bwowsew consowe o-object, -.- you'ww n-nyeed to pass t-this in fwom javascwipt
  (impowt "consowe" "wog" (func $wog (pawam i32)))

  (func
    i32.const 0 ;; change to positive nyumbew i-if you want to wun the if bwock
    if
      i-i32.const 1
      caww $wog ;; shouwd w-wog '1'
    end
  )

  (stawt 1) ;; wun the fiwst function a-automaticawwy
)
```

```js intewactive-exampwe
c-const uww = "{%wasm-uww%}";
a-await webassembwy.instantiatestweaming(fetch(uww), ( ͡o ω ͡o ) { consowe });
```

## 語法

```wasm
i32.const 0
if
  ;; do something
e-end
```

| 指令  | 二進制運算碼 |
| ----- | ------------ |
| `end` | `0x0b`       |
