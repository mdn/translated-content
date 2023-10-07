---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
---

{{jsSidebar("Statements")}}

A **declaração** **`throw`** lança uma exceção definida pelo usuário. A execução da função atual vai parar (as instruções após o `throw` não serão executadas), e o controle será passado para o primeiro bloco [`catch`](/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch) na pilha de chamadas. Se nenhum bloco `catch` existe entre as funções "chamadoras", o programa vai terminar.

## Sintaxe

```
throw expressão;
```

- `expressão`
  - : A expressão a ser lançada.

## Descrição

Use a instrução `throw` para lançar uma exceção. Quando você lança uma exceção, `expressão` especifica o valor da exceção. Cada uma das intruções a seguir lança uma exceção:

```js
throw "Erro2"; // gera uma exceção com um valor string
throw 42; // gera uma exceção com o valor 42
throw true; // gera uma exceção com o valor true
```

Note também que a instrução `throw` é afetada pela [inserção automática de ponto-e-vírgula (ASI)](/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) como nenhum terminador de linha entre a palavra `throw` e a expressão é permitido.

## Exemplos

### Lançando um objeto

Você pode especificar um objeto quando você lança uma exceção. Você pode então referenciar as propriedades do objeto no bloco `catch`. O exemplo a seguir cria um objeto do tipo `UserException` e o usa na intrução `throw`.

```js
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}
function getMonthName(mo) {
  mo = mo - 1; // Ajusta o número do mês para index de array (1=Jan, 12=Dec)
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo] !== undefined) {
    return months[mo];
  } else {
    throw new UserException("InvalidMonthNo");
  }
}

try {
  // statements to try
  var myMonth = 15; // 15 is out of bound to raise the exception
  monthName = getMonthName(myMonth);
} catch (e) {
  monthName = "unknown";
  logMyErrors(e.message, e.name); // pass exception object to err handler
}
```

### Outro exemplo lançando um objeto

O exemplo a seguir testa uma string de entrada para um cep dos Estados Unidos. Se o CEP utiliza um formato inválido, a intrução throw lança uma exceção através da criação de um objeto do tipo `ZipCodeFormatException`.

```js
/*
 * Cria um objeto ZipCode.
 *
 * Formatos aceitos para o CEP são:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * Se o argumento passado para o construtor do ZipCode não atende
 * a um desses padrões uma exceção é lançada.
 */

function ZipCode(zip) {
  zip = new String(zip);
  pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
  if (pattern.test(zip)) {
    // o valor do CEP será a primeira combinação na string
    this.value = zip.match(pattern)[0];
    this.valueOf = function () {
      return this.value;
    };
    this.toString = function () {
      return String(this.value);
    };
  } else {
    throw new ZipCodeFormatException(zip);
  }
}

function ZipCodeFormatException(value) {
  this.value = value;
  this.message = "does not conform to the expected format for a zip code";
  this.toString = function () {
    return this.value + this.message;
  };
}

/*
 * Isso poderia estar em um script que valida dados de endereços
 * para os endereços dos Estados Unidos.
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
  try {
    z = new ZipCode(z);
  } catch (e) {
    if (e instanceof ZipCodeFormatException) {
      return ZIPCODE_INVALID;
    } else {
      return ZIPCODE_UNKNOWN_ERROR;
    }
  }
  return z;
}

a = verifyZipCode(95060); // retorna 95060
b = verifyZipCode(9560); // retorna -1
c = verifyZipCode("a"); // retorna -1
d = verifyZipCode("95060"); // retorna 95060
e = verifyZipCode("95060 1234"); // retorna 95060 1234
```

### Relançando uma exceção

Você pode usar `throw` para relançar uma exceção após você pegá-la. O exemplo a seguir pega uma exceção com um valor numérico e a relança se o valor for maior que 50. A exceção relançada propaga para a função encapsuladora ou para o nível superior para que o usuário a veja.

```js
try {
  throw n; // lança uma exceção com um valor numérico
} catch (e) {
  if (e <= 50) {
    // instruções para tratar exceções 1-50
  } else {
    // não pode tratar esta exceção então relança
    throw e;
  }
}
```

## Specifications

| Specification                                                      | Status               | Comment                                           |
| ------------------------------------------------------------------ | -------------------- | ------------------------------------------------- |
| {{SpecName('ES3')}}                                                | {{Spec2('ES3')}}     | Definição inicial. Implementada no JavaScript 1.4 |
| {{SpecName('ES5.1', '#sec-12.13', 'throw statement')}}             | {{Spec2('ES5.1')}}   |                                                   |
| {{SpecName('ES6', '#sec-throw-statement', 'throw statement')}}     | {{Spec2('ES6')}}     |                                                   |
| {{SpecName('ESDraft', '#sec-throw-statement', 'throw statement')}} | {{Spec2('ESDraft')}} |                                                   |

## Compatibilidade com navegadores

{{Compat("javascript.statements.throw")}}

## Veja também

- [`try...catch`](/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
