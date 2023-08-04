---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
---

{{JSRef}} {{SeeCompatTable}}

O objeto **`Atomics`** fornece operações atômicas como metodos estáticos. Eles são usados com objetos {{jsxref("SharedArrayBuffer")}}.

As operações atômicas estão localizadas no modulo `Atomics`. Diferente de outros _global objects_, `Atomics` não é um construtor. Você não deve usa-lo com o [`new` operator](/pt-BR/docs/Web/JavaScript/Reference/Operators/new) ou invocar objetos `Atomics` como funções. Todas as propriedades e método do `Atomics` são estáticos (como é o caso com o objeto {{jsxref("Math")}}, por exemplo).

## Métodos

### Operações Atômicas

Quando a memória é compartilhada, multiplas threads podem ser lidas e escritas no mesmo dado da memória. Operações atômicas garantem que os valores previstos sejam lidos e escritos, estas operações são finalizadas antes da próxima operação iniciar e que as mesmas não sejam interrompidas.

- {{jsxref("Atomics.add()")}}
  - : Adiciona o valor recebido na posiçao recebida no array. Retorna o valor anterior nesta posição.
- {{jsxref("Atomics.and()")}}
  - : Calcula um bit a bit AND na posição recebida no array. Retorna o valor anterior nesta posição.
- {{jsxref("Atomics.compareExchange()")}}
  - : Armazena o valor recebido na posição recebida no array, se este foi igual ao valor recebido. Retorna o valor anterior nesta posição.
- {{jsxref("Atomics.exchange()")}}
  - : Armazena o valor recebido na posição recebida no array. Retorna o valor anterior.
- {{jsxref("Atomics.load()")}}
  - : Retorna o valor na posição recebida no array.
- {{jsxref("Atomics.or()")}}
  - : Calcula um bit a bit OR na posição recebida no array. Retorna o valor anterior nesta posição.
- {{jsxref("Atomics.store()")}}
  - : Armazena o valor recebido na posição recebida no array. Retorna o valor.
- {{jsxref("Atomics.sub()")}}
  - : Subtrai o valor recebido na posição recebida no array. Retorna o valor anterior nesta posição.
- {{jsxref("Atomics.xor()")}}
  - : Calcula um bit a bit XOR na posição recebida no array. Retorna o valor anterior nesta posição.

### Wait e wake

Os métodos `wait()` e `wake()` são modelados no Linux futexes ("fast user-space mutex") e fornece formas de aguardar até que certas condições se tornem `true` e são tipicamente usadas como construtores de bloco.

- {{jsxref("Atomics.wait()")}}
  - : Verifica se a posição informada no array ainda contém a valor recebido e dorme à espera ou até o tempo limite. Retorna `"ok"`, `"not-equal"`, ou `"timed-out"`. Se a espera não for permitida no agente de chamada ele irá lançar uma exceção de erro (muitos navegadores não permitem `wait()` na thread main do navegador).
- {{jsxref("Atomics.wake()")}}
  - : "Acorda" alguns agentes que estavam "dormindo" na lista de espera na posição recebida do array. Retorna o número de agentes que estão sendo "acordados".
- {{jsxref("Atomics.isLockFree()", "Atomics.isLockFree(size)")}}
  - : Uma otimização primitiva que pode ser usada para determinar se deve ser usado lock ou operações atômicas. Retorna `true`, se uma operação atômica em matrizes de um dado tamanho do elemento vai ser implementado utilizando uma operação atômica de hardware (como oposição a lock). Só para experientes.

## Especificações

| Especificações                                             | Status                     | Comentário         |
| ---------------------------------------------------------- | -------------------------- | ------------------ |
| {{SpecName('Shared Memory', '#AtomicsObject', 'Atomics')}} | {{Spec2('Shared Memory')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Atomics")}}

## Observações de compatibilidade

\[3] A especificação de compartilhamento de memória está sendo estabilizada. Anterior ao SpiderMonkey 48, a última API e semântica não foram implementadas ainda. As alterações entre as versões 46 e 48 do Firefox são:

- Os métodos `Atomics.futexWakeOrRequeue()` e `Atomics.fence()` foram totalmente removidos ([Erro do Firefox 1259544](https://bugzil.la/1259544) e [Erro do Firefox 1225028](https://bugzil.la/1225028)).
- O método {{jsxref("Atomics.wait()")}} e {{jsxref("Atomics.wake()")}} foram nomeados como `Atomics.futexWait()` e `Atomics.futexWake()` ([Erro do Firefox 1260910](https://bugzil.la/1260910)). Os nomes antigos foram mantidos como alias, e serão removidos na versão 49 ([Erro do Firefox 1262062](https://bugzil.la/1262062)).
- As propriedades `Atomics.OK`, `Atomics.TIMEDOUT`, `Atomics.NOTEQUAL` foram removidas. O método {{jsxref("Atomics.wait()")}} agora retorna "ok", "timed-out" e "not-equal" ([Erro do Firefox 1260835](https://bugzil.la/1260835)).
- O parâmetro `count` do método {{jsxref("Atomics.wake()")}} foi alterado: este agora possui o valor padrão `+Infinity`, e não `0` ([Erro do Firefox 1253350](https://bugzil.la/1253350)).

## Veja Também

- {{jsxref("ArrayBuffer")}}
- [JavaScript typed arrays](/pt-BR/docs/Web/JavaScript/Typed_arrays)
- [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API)
- [parlib-simple](https://github.com/lars-t-hansen/parlib-simple) – a simple library providing synchronization and work distribution abstractions.
- [Shared Memory – a brief tutorial](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
