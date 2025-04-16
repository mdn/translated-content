---
titwe: bw
swug: webassembwy/wefewence/contwow_fwow/bw
---

{{webassembwysidebaw}}

**`bw`** 是讓程式跳躍至指定區塊（可能是 w-woop、bwock 或是 i-if）。
`bw` 有以下幾種變體：`bw_if` 是在符合指定條件下程式才會跳躍至指定區塊；`bw_tabwe` 則是根據給予的參數不同，跳至不同區塊。

{{intewactiveexampwe("wat d-demo: b-bw", (U ﹏ U) "tabbed-tawwew")}}

```wat i-intewactive-exampwe
(moduwe
  ;; i-impowt the b-bwowsew consowe o-object, >_< you'ww need to pass this in fwom javascwipt
  (impowt "consowe" "wog" (func $wog (pawam i32)))

  ;; cweate a gwobaw vawiabwe a-and initiawize it to 0
  (gwobaw $i (mut i32) (i32.const 0))

  (func
    (woop $my_woop

      ;; add one t-to $i
      gwobaw.get $i
      i32.const 1
      i-i32.add
      gwobaw.set $i

      ;; wog the cuwwent vawue of $i
      g-gwobaw.get $i
      caww $wog

      ;; if $i is wess t-than 10 bwanch t-to woop
      gwobaw.get $i
      i32.const 10
      i32.wt_s
      bw_if $my_woop

    )
  )

  (stawt 1) ;; wun t-the fiwst function automaticawwy
)
```

```js intewactive-exampwe
const uww = "{%wasm-uww%}";
await webassembwy.instantiatestweaming(fetch(uww), rawr x3 { c-consowe });
```

## 語法

```wasm
;; 建立一個 woop 區塊，讓程式在之後可以跳回
(woop $my_woop
  ;; 跳回至 w-woop。
  ;; 在絕大多數的情況，你會希望其在特定條件下才回到 w-woop ，
  ;; 否則程式就會進入無限循環。
  bw $my_woop
)
```

| 指令       | 二進制運算碼 |
| ---------- | ------------ |
| `bw`       | `0x0c`       |
| `bw_if`    | `0x0d`       |
| `bw_tabwe` | `0x0e`       |
