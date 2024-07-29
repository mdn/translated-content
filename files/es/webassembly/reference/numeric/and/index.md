---
title: AND
slug: WebAssembly/Reference/Numeric/AND
---

{{WebAssemblySidebar}}

Las instrucciones **`and`** son usadas para realizar operaciones bit a bit de tipo AND, similares al operador **`&`** en otros lenguajes.

{{EmbedInteractiveExample("pages/wat/and.html", "tabbed-taller")}}

## Sintáxis

```wasm
;; Cargar dos números en la tabla
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; ejecutar AND bit a bit
i32.and

;; El nuevo elemento será 1
(00000001)
```

| Instrucción | Código binario de operación |
| ----------- | --------------------------- |
| `i32.and`   | `0x71`                      |
| `i64.and`   | `0x83`                      |
