---
title: Function.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
---

{{JSRef}} {{non-standard_header}}

A propriedade **`function.caller`** retorna a função que invocou a função especificada.

## Descrição

Se a função `f` foi invocada pelo codigo mais alto nível, o valor de `f.caller` é {{jsxref("null")}}, caso contrario, o valor será a função a qual invocou `f`.

Esta propriedade substitui a propriedade obsoleta {{jsxref("Functions/arguments/caller", "arguments.caller")}} do objeto {{jsxref("Functions/arguments", "arguments")}}.

A propriedade especial `__caller__`, a qual retornou o objeto de ativação do chamador, permitindo assin reconstruir o stack, foi removido por motivo de segurança.

### Notas

Note que no caso de recurção, você não pode reconstruir o stack de chamadas usando esta propriedade. Considere:

```js
function f(n) {
  g(n - 1);
}
function g(n) {
  if (n > 0) {
    f(n);
  } else {
    stop();
  }
}
f(2);
```

No momento em que `stop()` é chamado o stack será:

```js
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

O seguinte é true:

```js
stop.caller === g && f.caller === g && g.caller === f;
```

então se você tentou recuperar o stack trace na função `stop()` assim:

```js
var f = stop;
var stack = "Stack trace:";
while (f) {
  stack += "\n" + f.name;
  f = f.caller;
}
```

o loop nunca irá parar.

## Exemplos

### Verificando o valor da propriedade `caller` de uma função

O código a seguir verifica o valor da propriedade `caller` de uma função.

```js
function myFunc() {
  if (myFunc.caller == null) {
    return "The function was called from the top!";
  } else {
    return "This function's caller was " + myFunc.caller;
  }
}
```

## Especificações

Não faz parte de nenhuma especificação. Implementado no JavaScript 1.5.

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Function.caller")}}

## Ver também

- Implementation bug for SpiderMonkey [Erro do Firefox 65683](https://bugzil.la/65683)
