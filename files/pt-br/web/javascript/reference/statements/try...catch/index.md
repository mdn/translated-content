---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
---

{{jsSidebar("Statements")}}

As declarações **try...catch** marcam um bloco de declarações para testar (**try**), e especifica uma resposta, caso uma exceção seja lançada.

## Sintaxe

```
try {
   try_statements
}
[catch (exception_var_1 if condition_1) {
   catch_statements_1
}]
...
[catch (exception_var_2) {
   catch_statements_2
}]
[finally {
   finally_statements
}]
```

- `try_statements`
  - : Declarações (statements) a serem executadas.
- `catch_statements_1`, `catch_statements_2`
  - : Declarações que são executadas se uma exceção é lançada no bloco `try.`
- `exception_var_1`, `exception_var_2`
  - : Um indentificador que leva um objeto exceção para uma cláusula `catch` associada.
- `condition_1`
  - : Uma expressão condicional.
- `finally_statements`
  - : Declarações que são executadas depois que a declaração `try` é completada. Essas declarações são executadas independetemente se uma exceção foi ou não lançada ou capturada.

## Descrição

A declaração `try` consiste em um bloco `try`, que contém uma ou mais declarações, e ao menos uma cláusula `catch` ou uma cláusula `finally`, ou ambas. Ou seja, há 3 formas de declarações `try` :

1. `try...catch`
2. `try...finally`
3. `try...catch...finally`

Uma cláusula `catch` contém declarações que especificam o que fazer caso uma exceção seja lançada no bloco `try`. Ou seja, se você quer que o bloco `try` tenha êxito, e caso não tenha, você quer que o controle passe para o bloco `catch`. Caso qualquer declaração dentro do bloco `try` (ou em uma função chamada no interior do bloco `try`) lançar uma exceção o controle imediatamente muda para a cláusula `catch`. Se nenhuma exceção for lançada no bloco `try` a cláusula `catch` é ignorada.

A cláusula `finally` é executada após a excecução do bloco `try` e da(s) cláusula(s) `catch` porém antes das declarações seguintes ao `try`. Ela sempre é executada, independente se uma exceção for lançada ou capturada.

Você pode aninhar uma ou mais declarações `try`. Caso uma declaração `try` interior não tenha uma cláusula `catch`, a cláusula catch pertencente a declaração `try` que a envolve é introduzida.

Você pode usar a declaração try para manipular exceções em JavaScript. Veja o [Guia Javascript](/pt-BR/docs/Web/JavaScript/Guide) para informações sobre exceções em JavaScript.

### Cláusula catch incondicional

Quando uma única, incondicional cláusula `catch` é utilizada, o bloco `catch` é inserido quando qualquer exceção for lançada. Por exemplo, quando a exceção ocorre no código a seguir, o controle é transferido para a cláusula `catch`.

```js
try {
  throw "myException"; // gera uma exceção
} catch (e) {
  // declarações para manipular quaisquer exceções
  logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
}
```

### Cláusulas `catch` condicionais

{{non-standard_header}}

Você pode utilizar uma ou mais cláusulas `catch` condicionals para manipular exceções específicas. Nesse caso a cláusula `catch` apropriada será inserida quando a exceção espeficica for lançada. No exemplo a seguir, o código no bloco `try` pode potencialmente jogar três exceções: [`TypeError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/TypeError), [`RangeError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RangeError), e [`EvalError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/EvalError). Quando a exceção ocorre, o controle transfere para a cláusula `catch` apropriada. Caso a exceção não seja uma das especificadas e uma cláusula `catch` incondicional for encontrada, o controle é transferido para essa cláusula `catch`.

Se utilizar uma cláusula `catch` incondicional com uma ou mais cláusulas `catch` condicionais, o catch incondicional deve ser especificado por último. Caso contrário, o catch incondicional interceptará todos os tipos de exceção antes que eles alcancem os condicionais.

Nota: Essa funcionalidade não é parte da especificação ECMAScript.

```
try {
    myroutine(); // pode lançar três tipos de exceções
} catch (e if e instanceof TypeError) {
    // declarações para manipular exceções TypeError
} catch (e if e instanceof RangeError) {
    // declarações para manipular exceções RangeError
} catch (e if e instanceof EvalError) {
    // declarações para manipular exceções EvalError
} catch (e) {
    // declarações para manipular quaisquer exceções não especificadas
    logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
}
```

E aqui temos como implementar as mesmas "cláusulas `catch` condicionais" utilizando apenas JavaScript puro conforme a especificação ECMAScript (obviamente é mais verboso, porém, funciona em qualquer lugar):

```
try {
    myroutine(); // pode lançar três tipos de exceções
} catch (e) {
    if (e instanceof TypeError) {
        // declarações para manipular exceções TypeError
    } else if (e instanceof RangeError) {
        // declarações para manipular exceções RangeError
    } else if (e instanceof EvalError) {
        // declarações para manipular exceções EvalError
    } else {
       // declarações para manipular quaisquer exceções não especificadas
       logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
    }
}
```

### O identificador de exceção

Quando uma exceção é lançada no bloco `try`, `exception_var` (ex. o `e` dentro de `catch (e)`) armazena o valor especificado pela declaração `throw`. Você pode usar esse identificador para conseguir informação sobre a exceção que foi lançanda.

Esse identificador é local para a cláusula `catch`. Ou seja, é criado quando a cláusula `catch` é introduzida e após terminar sua excecução o identificador não se torna mais disponível.

### A cláusula `finally`

A cláusula `finally` é executada após a excecução do bloco `try` e da(s) cláusula(s) `catch` porém antes das declarações seguintes a declaração `try`. Ela sempre é executada, independente se uma exceção for lançada ou capturada.

A cláusula `finally` contém declarações para executarem após a execução do bloco `try` e da(s) cláusula(s) `catch` porém antes das declarações seguintes a declaração `try`. A cláusula `finally` é excutada independente se uma exceção for lançada ou não. Caso uma exceção seja lançada, as declarações no interior da cláusula `finally` são executadas mesmo que nenhum `catch` manipule a exceção.

Você pode utilizar a cláusula `finally` para fazer seu script falhar graciosamente quando uma exceção ocorrer; por exemplo, você pode precisar liberar um recurso que seu script possui vinculado. O exemplo seguinte abre um aquivo e então executa declarações que utilizam o arquivo (server-side JavaScript permite que você acesse arquivos). Se uma exceção for lançada enquanto o arquivo estiver aberto, a cláusula `finally` fecha o arquivo antes que o script falhe.

```js
openMyFile();
try {
  // vincula o recurso
  writeMyFile(theData);
} finally {
  closeMyFile(); // sempre fecha o recurso
}
```

## Exemplos

### Blocos try aninhados

Primeiro vamos ver o que acontece com isso:

```
try {
  try {
    throw new Error("oops");
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Resultado
// "finally"
// "outer" "oops"
```

Agora, caso nós já capturamos a exceção no bloco `try` interno adicionando um bloco `catch`

```
try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Resultado:
// "inner" "oops"
// "finally"
```

E agora, vamos relançar o erro.

```
try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Resultado:
// "inner" "oops"
// "finally"
// "outer" "oops"
```

Qualquer exceção lançada será capturada apenas uma vez pelo bloco `catch` envolvente mais próximo, a não ser que seja relançada. Obviamente qualquer nova exceção elevada no bloco "interno" (pois código em um bloco `catch` pode fazer algo que lance), será capturado pelo bloco "externo".

### Retornando de um bloco `finally`

Caso o bloco `finally` retorne um valor, esse valor torna-se o valor de retorno do produto de `try-catch-finally` inteiro, independente de qualquer declaração return nos blocos `try` e `catch`. Isso inclui exceções lançadas dentro do bloco `catch`:

```
try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
    return;
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Resultado:
// "inner" "oops"
// "finally"
```

O "oops" externo não é lançado devido ao retorno do bloco `finally`. O mesmo se aplicaria a qualquer valor retornado do bloco `catch`.

## Vejam também

- [throw](/pt-BR/JavaScript/Reference/Statements/throw)
- [Error](/pt-BR/JavaScript/Reference/Global_Objects/Error)
