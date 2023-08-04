---
title: Console
slug: Web/API/console
---

{{APIRef("Console API")}}{{Non-standard_header}}

O objeto `console` fornece acesso ao console de debug do navegador (por exemplo, o [Web Console](/pt-BR/docs/Tools/Web_Console) do Firefox). O seu funcionamento específico varia de navegador para navegador, mas existe um conjunto de ferramentas que na prática são fornecidas normalmente.

Esta página documenta os [Métodos](#métodos) disponíveis no objeto `console` e fornece alguns exemplos de [Uso](#uso).

## Métodos

- {{domxref("console.assert()", "console.assert(expression, object[, object...])")}}
  - : Emite uma mensagem e traça a sequência de operações até o primeiro argumento for falso.
- {{domxref("console.count()", "console.count([label])")}}
  - : Mostra o número de vezes que esta linha foi chamada com a label fornecida.
- {{domxref("console.log()", "console.debug(object[, object...])")}} {{deprecated_inline}}
  - : Um atalho para `log()`; que foi adicionado para melhorar a compatibilidade de páginas já existentes que utilizavam `debug()`. Porém, ao invés destes comandos você deve utilizar {{domxref("console.log()")}}.
- {{domxref("console.dir()", "console.dir(object)")}}
  - : Exibe uma listagem interativa das propriedades de um objeto JavaScript especificado. Esta listagem permite a você expandir o objeto para visualizar o conteúdo de objetos filhos.
- {{domxref("console.error()", "console.error(object[, object...])")}}
  - : Emite uma mensagem de erro. Você pode usar substituição de string e outros argumentos adicionais com este método. Consulte [Uso de substituição de string](#uso_de_substituição_de_string).
- {{domxref("console.error()", "console.exception(object[, object...])")}}
  - : Um atalho para `error();`
- {{domxref("console.group()", "console.group(object[, object...])")}}
  - : Cria um novo grupo em linha e recua todas as mensagens seguintes para um nível de indentação superior. Para voltar um nível, utilize `groupEnd()`. Consulte [Uso de grupos no console](#uso_de_grupos_no_console).
- {{domxref("console.groupCollapsed()", "console.groupCollapsed(object[, object...])")}}
  - : Cria um novo grupo em linha e recua todas as mensagens seguintes para um nível de indentação superior; ao contrário de `group()`, o grupo em linha começa recolhido. Para revelar seu conteúdo, basta clicar no botão de revelação para expandí-lo. Para recuar um nível, utilize `groupEnd()`. Consulte [Uso de grupos no console](#uso_de_grupos_no_console).
- {{domxref("console.groupEnd()")}}
  - : Sai do grupo em linha atual. Veja [Uso de grupos no console](#uso_de_grupos_no_console).
- {{domxref("console.info()", "console.info(object[, object...])")}}
  - : Informações de registro. Você pode utilizar substituição de string e outros argumentos com este método. Consulte [Uso de substituição de string](#uso_de_substituição_de_string).
- {{domxref("console.log()", "console.log(object[, object...])")}}
  - : Utilizado para a emissão de informações de registro em geral. Você pode utilizar substituição de string e outros argumentos com este método. Consulte [Uso de substituição de string](#uso_de_substituição_de_string).
- {{domxref("console.profile()", "console.profile( [profileLabel] )")}}
  - : Inicia o [JavaScript profiler](/pt-BR/docs/Tools/Profiler). Você pode especificar qualquer label opcional para o perfil.
- {{domxref("console.profileEnd()")}}

  - : Interrompe o profiler. Você pode ver o profile resultante no [JavaScript profiler](/pt-BR/docs/Tools/Profiler).

- {{domxref("Console.table()")}}

  - : Exibe dados, como objeto e array, como uma tabela.

- {{domxref("console.time()", "console.time(label)")}}
  - : Inicia um contador de tempo com o nome especificado no parâmetro _label_. Até 10.000 contadores de tempo podem ser rodados por página.
- {{domxref("console.timeEnd()", "console.timeEnd(label)")}}
  - : Interrompe o contador de tempo especificado e emite o tempo e registros do contador de tempo em milisegundos desde o seu início. Veja [Contadores de Tempo](#contadores_de_tempo).
- {{domxref("console.trace()")}}
  - : Emite um traçado de pilha. See [Traçados de pilha](#traçados_de_pilha).
- {{domxref("console.warn()", "console.warn(object[, object...])")}}
  - : Emite uma mensagem de alerta. Você pode utilizar substituição de string e argumentos adicionais com este método. Veja [Uso de substituição de string](#uso_de_substituição_de_string).

## Uso

### Output de texto para o console

A utilização mais frequente do console é realizar o log de texto e de outros dados. Há quatro categorias de output que podem ser geradas, utilizando os métodos {{domxref("console.log()")}}, {{domxref("console.info()")}}, {{domxref("console.warn()")}} e o {{domxref("console.error()")}}. Cada um destes resultam em outputs que possuem estilos diferentes no log, e você pode utilizar os controles de filtragem fornecidos pelo navegador para ver apenas os outputs que lhe interessam.

Há duas maneiros da utilizar cada um dos métodos de outuput. Você pode simplemente passar uma lista dos objetos cuja representação em string será concatenadas em uma string e então realizar o output para o console, ou você pode passar uma string contendo zero ou mais substituições de strings seguidas por uma lista de objetos para serem utilizados na substituição.

#### Output de um único objeto

A forma mais simples de utilizar os métodos de log é realizar o output de um único objeto:

```js
var algumObjeto = { str: "Algum texto", id: 5 };
console.log(algumObjeto);
```

O output vai se parecer como algo assim:

```
[09:27:13.475] ({str:"Algum texto", id:5})
```

#### Output de múltiplos objetos

Você também pode realizar o output de múltiplos objetos ao simplesmente listá-los ao chamar o método de log, desta forma:

```js
var carro = "Fusca";
var algumObjeto = { str: "Algum texto", id: 5 };
console.info(
  "Meu primeiro carro era um ",
  carro,
  ". O objeto é: ",
  algumObjeto,
);
```

O output será algo assim:

```
[09:28:22.711] Meu primeiro carro era um Fusca. O objeto é:  ({str:"Algum texto", id:5})
```

#### Uso de substituição de string

O Gecko 9.0 introduziu o suporte à substituição de strings. Ao fornecer uma string para um dos métodos do console que aceitam uma string, você pode utilizar estas strings de substituição:

| String de substituição | Descrição                                                                  |
| ---------------------- | -------------------------------------------------------------------------- |
| %o                     | Emite um link para o objeto JavaScript. Clicar no link abre um inspetor.   |
| %d ou %i               | Emite uma numero inteiro. A formatação ainda não possui suporte.           |
| %s                     | Emite uma string.                                                          |
| %f                     | Emite um número de ponto flutuante. A formatação ainda não possui suporte. |

Cada um destes puxam o próximo argumento na lista de parâmetros após a string fornecida inicialmente. Por exemplo:

```
for (var i=0; i<5; i++) {
  console.log("Olá, %s. Você me chamou pela %dª vez.", "João", i+1);
}
```

O output será algo assim:

```
[13:14:13.481] Olá, João. Você me chamou pela 1ª vez.
[13:14:13.483] Olá, João. Você me chamou pela 2ª vez.
[13:14:13.485] Olá, João. Você me chamou pela 3ª vez.
[13:14:13.487] Olá, João. Você me chamou pela 4ª vez.
[13:14:13.488] Olá, João. Você me chamou pela 5ª vez.
```

#### Estilizando o output no console

You can use the `"%c"` directive to apply a CSS style to console output:

```js
console.log("%cMy stylish message", "color: red; font-style: italic");
```

![](console-style.png)

### Usando grupos no console

You can use nested groups to help organize your output by visually combining related material. To create a new nested block, call `console.group()`. The `console.groupCollapsed()` method is similar, but creates the new block collapsed, requiring the use of a disclosure button to open it for reading.

> **Nota:** Collapsed groups are not supported yet in Gecko; the `groupCollapsed()` method is the same as `group()` at this time.

> **Nota:** To exit the current group, simply call `console.groupEnd()`.

> **Nota:** For example, given this code:

```js
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.debug("Back to the outer level");
```

The output looks like this:

![nesting.png](/@api/deki/files/6082/=nesting.png)

### Temporizadores

In order to calculate the duration of a specific operation, Gecko 10 introduced the support of timers in the `console` object. To start a timer, call the `console.time()` method, giving it a name as only parameter. To stop the timer, and to get the elapsed time in miliseconds, just call the `console.timeEnd()` method, again passing the timer's name as the parameter. Up to 10,000 timers can run simultaneously on a given page.

For example, given this code:

```js
console.time("answer time");
alert("Click to continue");
console.timeEnd("answer time");
```

will log the time needed by the user to discard the alert box:

![timerresult.png](/@api/deki/files/6084/=timerresult.png)

Notice that the timer's name is displayed both when the timer is started and when it's stopped.

> **Nota:** It's important to note that if you're using this to log the timing for network traffic, the timer will report the total time for the transaction, while the time listed in the network panel is just the amount of time required for the header. If you have response body logging enabled, the time listed for the response header and body combined should match what you see in the console output.

### Stack traces

The console object also supports outputting a stack trace; this will show you the call path taken to reach the point at which you call {{domxref("console.trace()")}}. Given code like this:

```
foo();

function foo() {
  function bar() {
    console.trace();
  }
  bar();
}
```

The output in the console looks something like this:

![](api-trace2.png)

## Notes

- At least in Firefox, if a page defines a console object, that object overrides the one built into Firefox.
- Prior to Gecko 12.0, the console object's methods only work when the Web Console is open. Starting with Gecko 12.0, output is cached until the Web Console is opened, then displayed at that time.
- It's worth noting that the Firefox's built-in `console` object is compatible with the one provided by [Firebug](http://getfirebug.com/).

## See also

- [Tools](/pt-BR/docs/Tools)
- [Web Console](/pt-BR/docs/Tools/Web_Console) - how the Web Console in Firefox handles console API calls
- [Remote debugging](/pt-BR/docs/Tools/Remote_Debugging) - how to see console output when the debugging target is a mobile device
- [Debugging apps on Firefox OS](/pt-BR/Firefox_OS/Using_the_App_Manager) - using the App Manager to debug apps running on Firefox OS
- [On-device console logging](/pt-BR/docs/Mozilla/Firefox_OS/Debugging/On-device_console_logging) - how to do logging on Firefox OS devices

### Other implementations

- [Google Chrome DevTools](https://developers.google.com/chrome-developer-tools/docs/console-api);
- [Firebug](http://getfirebug.com/wiki/index.php/Console_API);
- [Internet Explorer](<http://msdn.microsoft.com/en-us/library/hh772173(v=vs.85).aspx>);
- [Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html).
