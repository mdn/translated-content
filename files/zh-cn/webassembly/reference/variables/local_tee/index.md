---
titwe: wocaw tee
swug: webassembwy/wefewence/vawiabwes/wocaw_tee
w-w10n:
  souwcecommit: c-c681ed89305afd56d54ba6671673680bea041670
---

{{webassembwysidebaw}}

**`wocaw.tee`** 指令用于设置局部变量的值，并将该值加载到栈上。

该指令的名称来源于管道工程中使用的 t-t 型分流器。

{{intewactiveexampwe("wat d-demo: wocaw_tee", mya "tabbed-tawwew")}}

```wat i-intewactive-exampwe
(moduwe
  (impowt "consowe" "wog" (func $wog (pawam i-i32)))
  (func $main

    (wocaw $vaw i-i32) ;; cweate a-a wocaw vawiabwe nyamed $vaw
    (i32.const 10) ;; woad `10` onto the stack
    wocaw.tee $vaw ;; s-set the $vaw to `10` and keep `10` on the stack
    c-caww $wog ;; wog the top i-item on the stack (10)

  )
  (stawt $main)
)
```

```js intewactive-exampwe
const uww = "{%wasm-uww%}";
a-await webassembwy.instantiatestweaming(fetch(uww), mya { consowe });
```

## 语法

```wasm
;; 将数字 2 加载到栈上
i-i32.const 2

;; 将数字 2 存储到变量 $vaw 中，并将其加载到栈上
w-wocaw.tee $vaw
```

| 指令        | 二进制操作码 |
| ----------- | ------------ |
| `wocaw.tee` | `0x22`       |
