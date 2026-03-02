---
title: block：Wasm 文本指令
short-title: block
slug: WebAssembly/Reference/Control_flow/block
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

**`block`** 语句创建一个标签，后面可以用 `br` 跳出该块。

**`loop`** 语句和 `block` 语句的表现相反，跳转到 `loop` 会回到循环的开头，而跳转到 `block` 会达到块尾，也就是跳出块。

{{InteractiveExample("Wat 演示：block", "tabbed-taller")}}

```wat interactive-example
(module
  ;; 导入浏览器 console 对象，你需要将其从 JavaScript 传入
  (import "console" "log" (func $log (param i32)))

  ;; 创建一个函数，接收一个数字作为参数，
  ;; 并当该数字不等于 100 时打印它。
  (func (export "log_if_not_100") (param $num i32)
    (block $my_block

      ;; 判断 $num 是否等于 100
      local.get $num
      i32.const 100
      i32.eq

      (if
        (then

          ;; 跳转到块尾
          br $my_block

        )
      )

      ;; 当 $num 等于 100 时，不会到达这里
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
    // 期望输出：99
    log_if_not_100(100);
    // 不应该打印任何东西
    log_if_not_100(101);
    // 期望输出：101
  },
);
```

## 语法

```wat
;; 对块打标签，使其可以被跳转。
(block $my_block

  ;; 跳转到该块。
  ;; 大多数时候，你会想要将下面的指令放在 if 语句中，仅在符合条件时跳转，
  ;; 否则，后面的控制流就无法到达。
  br $my_block

  ;; 永远不会到达这里，因为 br 早已经跳出了该块。
  unreachable

)
```

| 指令    | 二进制操作码 |
| ------- | ------------ |
| `block` | `0x02`       |
