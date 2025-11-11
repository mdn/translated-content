---
title: block
slug: WebAssembly/Reference/Control_flow/block
---

{{WebAssemblySidebar}}

**`block`** 用來創建一個區塊標籤，事後可以用 `br` 讓程式跳出該區塊標籤。

**`loop`** 和 `block` 相似卻相反，在 `loop` 中，在一輪循環結束或是使用 `br` 跳出時，程式會回到循環的開頭；而 `block` 則是會結束該區塊標籤的執行，跳到下一段程式碼。

{{InteractiveExample("Wat Demo: block", "tabbed-taller")}}

```wat interactive-example
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  ;; create a function that takes in a number as a param,
  ;; and logs that number if it's not equal to 100.
  (func (export "log_if_not_100") (param $num i32)
    (block $my_block

      ;; $num is equal to 100
      local.get $num
      i32.const 100
      i32.eq

      (if
        (then

          ;; branch to the end of the block
          br $my_block

        )
      )

      ;; not reachable when $num is 100
      local.get $num
      call $log

    )
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const log_if_not_100 = result.instance.exports.log_if_not_100;

    log_if_not_100(99);
    // Expected output: 99
    log_if_not_100(100);
    // Should not log anything
    log_if_not_100(101);
    // Expected output: 101
  },
);
```

## 語法

```wasm
;; label the block so that it can be branched to.
(block $my_block
  ;; branch to the block.
  ;; most of the time you'll want to put this in an if statement and only branch on condition,
  ;; otherwise the following control flow are unreachable.
  br $my_block
  ;; this will never be reached, since the br jumped out of the block already.
  unreachable
)
```

| 指令    | 二進制運算碼 |
| ------- | ------------ |
| `block` | `0x02`       |
