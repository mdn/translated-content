---
title: Mutável
slug: Glossary/Mutable
---

_Mutável_ é o tipo da variável que pode ser alterada. Em {{glossary("JavaScript")}}, somente {{Glossary("Object","objetos")}} e {{Glossary("Array","arrays")}} são mutáveis, {{Glossary("primitive", "valores primitivos")}} não.

(Você _pode_ fazer o nome da variável apontar para um novo valor, mas o valor anterior continua na memória. Logo, a necessidade da coleta de lixo, "garbage collection")

Um **objeto mutável** é um objeto cujo estado pode ser modificado após sua criação.

**Imutáveis** são os objetos cujo o estado **não** podem ser mudados uma vez criados.

**Strings e Numbers são imutáveis**. Vamos entender isso com um exemplo:

```
var stringImutavel = 'Hello';

// No código acima, um novo objeto com o valor string é criado.

stringImutavel = stringImutavel + 'World';

// Agora nós estamos anexando 'World' ao valor existente.
```

Ao anexar a 'stringImutavel' com um valor de string, os seguintes eventos ocorrem:

1. O valor existente de 'stringImutavel' é recuperado.
2. 'World' é anexado ao valor existente de 'stringImutavel'.
3. O valor resultante é então alocado para um novo bloco na memória.
4. O objeto 'stringImutavel' agora aponta para um novo espaço de memória criado.
5. O espaço de memória criado anteriormente está habilitado para a coleta de lixo.

## Aprenda mais

### Conhecimentos gerais

- [Objeto Mutavel](https://pt.wikipedia.org/wiki/Objeto_imut%C3%A1vel)
