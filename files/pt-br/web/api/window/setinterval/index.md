---
title: WindowOrWorkerGlobalScope.setInterval()
slug: Web/API/Window/setInterval
original_slug: Web/API/setInterval
---

{{APIRef("HTML DOM")}}

O método **`setInterval()`** oferecido das interfaces {{domxref("Window")}} e {{domxref("Worker")}}, repetem chamadas de funções ou executam trechos de código, com um tempo de espera fixo entre cada chamada. Isso retorna um ID único para o intervalo, podendo remove-lo mais tarde apenas o chamando {{domxref("WindowOrWorkerGlobalScope.clearInterval", "clearInterval()")}}. Este metodo é definido pelo mixin {{domxref("WindowOrWorkerGlobalScope")}}.

## Sintaxe

```
var intervalID = scope.setInterval(func, delay[, param1, param2, ...]);
var intervalID = scope.setInterval(code, delay);
```

### Parâmetros

- `func`
  - : Uma {{jsxref("function")}} para ser executada a cada `delay` em milisegundos. Não é passado nenhum parâmetro para a função, e não retorna nenhum valor esperado.
- `code`
  - : Uma sintaxe opcional permite você incuir uma string ao invés de uma função, no qual é compilado e executada a cada `delay` em milisegundos. Esta sintaxe _não é recomendada_ pelos mesmos motivos que envolvem riscos de segurança de {{jsxref("eval", "eval()")}}.
- `delay`
  - : O tempo, em milisegundos (milésimos de segundo), o temporizador deve atrasar entre cada execução de uma especifica função ou código. Se esse parâmetro for menos que 10, um valor de 10 é usado. Note que o atraso pode vir a ser mais longo; veja [Razões para atrasos maiores do que o especificado](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#reasons_for_delays_longer_than_specified) para exemplos.
- `param1, ..., paramN` {{optional_inline}}
  - : Parâmetros adicionais que são passados através da função especificada pela _func_ quando o temporizador expirar.

> [!NOTE]
> Passing additional parameters to `setInterval()` in the first syntax does not work in Internet Explorer 9 and earlier. If you want to enable this functionality on that browser, you must use a polyfill (see the [Callback arguments](#Callback_arguments) section).

### Return value

O `intervalID` retornado é um número, non-zero valor que identifica o temporizador criado pela chamada do `setInterval()`; este valor pode ser passado para {{domxref("WindowOrWorkerGlobalScope.clearInterval()")}} afim de cancelar o timeout.

Isso pode ser útil, estar ciente que o `setInterval()` e {{domxref("WindowOrWorkerGlobalScope.setTimeout", "setTimeout()")}} compartilham o mesmo grupo de IDs, e que o `clearInterval()` e {{domxref("WindowOrWorkerGlobalScope.clearTimeout", "clearTimeout()")}} podem tecnicamente serem usados em conjunto. Para deixar claro, contudo, você deve sempre tentar evitar combina-los, afim de evitar confusão na manutenção do seu código.

> [!NOTE]
> The `delay` parameter is converted to a signed 32-bit integer. This effectively limits `delay` to 2147483647 ms, since it's specified as a signed integer in the IDL.

## Exemplos

### Exemplo 1: Sintaxe básica

O seguinte exemplo mostra a sintaxe básica do `setInterval()`

```js
var intervalID = window.setInterval(myCallback, 500);

function myCallback() {
  // Your code here
}
```

### Exemplo 2: Alternando duas cores

O seguinte exemplo chama a função `flashtext()` uma vez por segundo até o botão de parar ser pressionado.

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>setInterval/clearInterval example</title>

    <script>
      var nIntervId;

      function changeColor() {
        nIntervId = setInterval(flashText, 1000);
      }

      function flashText() {
        var oElem = document.getElementById("my_box");
        oElem.style.color = oElem.style.color == "red" ? "blue" : "red";
        // oElem.style.color == 'red' ? 'blue' : 'red' is a ternary operator.
      }

      function stopTextColor() {
        clearInterval(nIntervId);
      }
    </script>
  </head>

  <body onload="changeColor();">
    <div id="my_box">
      <p>Hello World</p>
    </div>

    <button onclick="stopTextColor();">Stop</button>
  </body>
</html>
```

### Exemplo 3: Simulação de máquina de escrever

O seguinte exemplo simula uma máquina de escrever primeiro limpando e digitando lentamente o conteúdo para [`NodeList`](/pt-BR/docs/DOM/NodeList) que corresponde a um grupo especificado de seletores.

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript Typewriter - MDN Example</title>
    <script>
      function Typewriter(sSelector, nRate) {
        function clean() {
          clearInterval(nIntervId);
          bTyping = false;
          bStart = true;
          oCurrent = null;
          aSheets.length = nIdx = 0;
        }

        function scroll(oSheet, nPos, bEraseAndStop) {
          if (!oSheet.hasOwnProperty("parts") || aMap.length < nPos) {
            return true;
          }

          var oRel,
            bExit = false;

          if (aMap.length === nPos) {
            aMap.push(0);
          }

          while (aMap[nPos] < oSheet.parts.length) {
            oRel = oSheet.parts[aMap[nPos]];

            scroll(oRel, nPos + 1, bEraseAndStop)
              ? aMap[nPos]++
              : (bExit = true);

            if (
              bEraseAndStop &&
              ((oRel.ref.nodeType - 1) | 1) === 3 &&
              oRel.ref.nodeValue
            ) {
              bExit = true;
              oCurrent = oRel.ref;
              sPart = oCurrent.nodeValue;
              oCurrent.nodeValue = "";
            }

            oSheet.ref.appendChild(oRel.ref);
            if (bExit) {
              return false;
            }
          }

          aMap.length--;
          return true;
        }

        function typewrite() {
          if (
            sPart.length === 0 &&
            scroll(aSheets[nIdx], 0, true) &&
            nIdx++ === aSheets.length - 1
          ) {
            clean();
            return;
          }

          oCurrent.nodeValue += sPart.charAt(0);
          sPart = sPart.slice(1);
        }

        function Sheet(oNode) {
          this.ref = oNode;
          if (!oNode.hasChildNodes()) {
            return;
          }
          this.parts = Array.prototype.slice.call(oNode.childNodes);

          for (var nChild = 0; nChild < this.parts.length; nChild++) {
            oNode.removeChild(this.parts[nChild]);
            this.parts[nChild] = new Sheet(this.parts[nChild]);
          }
        }

        var nIntervId,
          oCurrent = null,
          bTyping = false,
          bStart = true,
          nIdx = 0,
          sPart = "",
          aSheets = [],
          aMap = [];

        this.rate = nRate || 100;

        this.play = function () {
          if (bTyping) {
            return;
          }
          if (bStart) {
            var aItems = document.querySelectorAll(sSelector);

            if (aItems.length === 0) {
              return;
            }
            for (var nItem = 0; nItem < aItems.length; nItem++) {
              aSheets.push(new Sheet(aItems[nItem]));
              /* Uncomment the following line if you have previously hidden your elements via CSS: */
              // aItems[nItem].style.visibility = "visible";
            }

            bStart = false;
          }

          nIntervId = setInterval(typewrite, this.rate);
          bTyping = true;
        };

        this.pause = function () {
          clearInterval(nIntervId);
          bTyping = false;
        };

        this.terminate = function () {
          oCurrent.nodeValue += sPart;
          sPart = "";
          for (nIdx; nIdx < aSheets.length; scroll(aSheets[nIdx++], 0, false));
          clean();
        };
      }

      /* usage: */
      var oTWExample1 = new Typewriter(
        /* elements: */ "#article, h1, #info, #copyleft",
        /* frame rate (optional): */ 15,
      );

      /* default frame rate is 100: */
      var oTWExample2 = new Typewriter("#controls");

      /* you can also change the frame rate value modifying the "rate" property; for example: */
      // oTWExample2.rate = 150;

      onload = function () {
        oTWExample1.play();
        oTWExample2.play();
      };
    </script>
    <style type="text/css">
      span.intLink,
      a,
      a:visited {
        cursor: pointer;
        color: #000000;
        text-decoration: underline;
      }

      #info {
        width: 180px;
        height: 150px;
        float: right;
        background-color: #eeeeff;
        padding: 4px;
        overflow: auto;
        font-size: 12px;
        margin: 4px;
        border-radius: 5px;
        /* visibility: hidden; */
      }
    </style>
  </head>

  <body>
    <p
      id="copyleft"
      style="font-style: italic; font-size: 12px; text-align: center;">
      CopyLeft 2012 by
      <a href="https://developer.mozilla.org/" target="_blank"
        >Mozilla Developer Network</a
      >
    </p>
    <p id="controls" style="text-align: center;">
      [&nbsp;<span class="intLink" onclick="oTWExample1.play();">Play</span> |
      <span class="intLink" onclick="oTWExample1.pause();">Pause</span> |
      <span class="intLink" onclick="oTWExample1.terminate();">Terminate</span
      >&nbsp;]
    </p>
    <div id="info">
      Vivamus blandit massa ut metus mattis in fringilla lectus imperdiet. Proin
      ac ante a felis ornare vehicula. Fusce pellentesque lacus vitae eros
      convallis ut mollis magna pellentesque. Pellentesque placerat enim at
      lacus ultricies vitae facilisis nisi fringilla. In tincidunt tincidunt
      tincidunt.
    </div>
    <h1>JavaScript Typewriter</h1>

    <div id="article">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices
        dolor ac dolor imperdiet ullamcorper. Suspendisse quam libero, luctus
        auctor mollis sed, malesuada condimentum magna. Quisque in ante tellus,
        in placerat est. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Donec a mi magna, quis mattis
        dolor. Etiam sit amet ligula quis urna auctor imperdiet nec faucibus
        ante. Mauris vel consectetur dolor. Nunc eget elit eget velit pulvinar
        fringilla consectetur aliquam purus. Curabitur convallis, justo posuere
        porta egestas, velit erat ornare tortor, non viverra justo diam eget
        arcu. Phasellus adipiscing fermentum nibh ac commodo. Nam turpis nunc,
        suscipit a hendrerit vitae, volutpat non ipsum.
      </p>
      <form>
        <p>
          Phasellus ac nisl lorem: <input type="text" /><br />
          <textarea style="width: 400px; height: 200px;">
Nullam commodo suscipit lacus non aliquet. Phasellus ac nisl lorem, sed facilisis ligula. Nam cursus lobortis placerat. Sed dui nisi, elementum eu sodales ac, placerat sit amet mauris. Pellentesque dapibus tellus ut ipsum aliquam eu auctor dui vehicula. Quisque ultrices laoreet erat, at ultrices tortor sodales non. Sed venenatis luctus magna, ultricies ultricies nunc fringilla eget. Praesent scelerisque urna vitae nibh tristique varius consequat neque luctus. Integer ornare, erat a porta tempus, velit justo fermentum elit, a fermentum metus nisi eu ipsum. Vivamus eget augue vel dui viverra adipiscing congue ut massa. Praesent vitae eros erat, pulvinar laoreet magna. Maecenas vestibulum mollis nunc in posuere. Pellentesque sit amet metus a turpis lobortis tempor eu vel tortor. Cras sodales eleifend interdum.</textarea
          >
        </p>
        <p><input type="submit" value="Send" /></p>
      </form>
      <p>
        Duis lobortis sapien quis nisl luctus porttitor. In tempor semper
        libero, eu tincidunt dolor eleifend sit amet. Ut nec velit in dolor
        tincidunt rhoncus non non diam. Morbi auctor ornare orci, non euismod
        felis gravida nec. Curabitur elementum nisi a eros rutrum nec blandit
        diam placerat. Aenean tincidunt risus ut nisi consectetur cursus. Ut
        vitae quam elit. Donec dignissim est in quam tempor consequat. Aliquam
        aliquam diam non felis convallis suscipit. Nulla facilisi. Donec lacus
        risus, dignissim et fringilla et, egestas vel eros. Duis malesuada
        accumsan dui, at fringilla mauris bibStartum quis. Cras adipiscing
        ultricies fermentum. Praesent bibStartum condimentum feugiat.
      </p>
      <p>
        Nam faucibus, ligula eu fringilla pulvinar, lectus tellus iaculis nunc,
        vitae scelerisque metus leo non metus. Proin mattis lobortis lobortis.
        Quisque accumsan faucibus erat, vel varius tortor ultricies ac. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero nunc.
        Nullam tortor nunc, elementum a consectetur et, ultrices eu orci. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nisl
        eu sem vehicula egestas.
      </p>
    </div>
  </body>
</html>
```

[View this demo in action](/files/3997/typewriter.html). See also: [`clearInterval()`](/pt-BR/docs/DOM/window.clearInterval).

## Argumentos callback

Como já foi discutido, Internet Explorer 9 e versões anteriores não suportam passar argumentos para a função callback em ambos `setTimeout()` ou `setInterval()`. O seguinte código **IE-specific** demonstra um método para superar esta limitação. Para usar, apenas adicione o seguinte código no topo do seu script.

```js
/*\
|*|
|*|  IE-specific polyfill that enables the passage of arbitrary arguments to the
|*|  callback functions of javascript timers (HTML5 standard syntax).
|*|
|*|  https://developer.mozilla.org/pt-BR/docs/Web/API/window.setInterval
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  Syntax:
|*|  var timeoutID = window.setTimeout(func, delay[, param1, param2, ...]);
|*|  var timeoutID = window.setTimeout(code, delay);
|*|  var intervalID = window.setInterval(func, delay[, param1, param2, ...]);
|*|  var intervalID = window.setInterval(code, delay);
|*|
\*/

if (document.all && !window.setTimeout.isPolyfill) {
  var __nativeST__ = window.setTimeout;
  window.setTimeout = function (
    vCallback,
    nDelay /*, argumentToPass1, argumentToPass2, etc. */,
  ) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeST__(
      vCallback instanceof Function
        ? function () {
            vCallback.apply(null, aArgs);
          }
        : vCallback,
      nDelay,
    );
  };
  window.setTimeout.isPolyfill = true;
}

if (document.all && !window.setInterval.isPolyfill) {
  var __nativeSI__ = window.setInterval;
  window.setInterval = function (
    vCallback,
    nDelay /*, argumentToPass1, argumentToPass2, etc. */,
  ) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeSI__(
      vCallback instanceof Function
        ? function () {
            vCallback.apply(null, aArgs);
          }
        : vCallback,
      nDelay,
    );
  };
  window.setInterval.isPolyfill = true;
}
```

Outra possibilidade é uso uma função anônima para chama o callback, apesar de que esta solução seja um pouco mais pesada. Exemplo:

```js
var intervalID = setInterval(function () {
  myFunc("one", "two", "three");
}, 1000);
```

Outra possibilidade é usar o [function's bind](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind). Exemplo:

```js
var intervalID = setInterval(function (arg1) {}.bind(undefined, 10), 1000);
```

### Abas inativas

Iniciado no Gecko 5.0, intervalos são fixados para disparar não mais do que uma vez por segundo em abas inativas.

## O problema do "[`this`](/pt-BR/docs/Web/JavaScript/Reference/Operators/this)"

Quando você passa um método para `setInterval()` ou qualquer outra função, ela é chamada com o valor do [`this`](/pt-BR/docs/Web/JavaScript/Reference/Operators/this) errado. Este problema é explicado em detalhes em [JavaScript reference](/pt-BR/docs/Web/JavaScript/Reference/Operators/this#As_an_object_method).

### Explicação

O código executado pelo `setInterval()` roda em um contexto de execução separado da função que foi chamada. Como uma consequência, o [`this`](/pt-BR/docs/Web/JavaScript/Reference/Operators/this) da função chamada, é setado como o objeto `window` (ou `global`), esse não é o mesmo valor do `this` para a função chamada em setTimeout. veja o seguinte exemplo (que usa `setTimeout()` ao invés de `setInterval()` - o problema segue para ambos os temporizadores)

```js
myArray = ["zero", "one", "two"];

myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
setTimeout(myArray.myMethod, 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1500, "1"); // prints "undefined" after 1,5 seconds
// passing the 'this' object with .call won't work
// because this will change the value of this inside setTimeout itself
// while we want to change the value of this inside myArray.myMethod
// in fact, it will be an error because setTimeout code expects this to be the window object:
setTimeout.call(myArray, myArray.myMethod, 2000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // same error
```

Como você pode ver, não há maneiras de passar o objeto `this` para a função callback.

### Uma possível solução

Um possível caminho para resolver o problema do `this`, é sobreescrever as duas funções globais nativas `setTimeout()` ou `setInterval()` com duas _non-native_ que permitem sua invocação através do método [`Function.prototype.call`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Function/call). O seguinte exemplo mostra a possível substituição.

```js
// Enable the passage of the 'this' object through the JavaScript timers

var __nativeST__ = window.setTimeout,
  __nativeSI__ = window.setInterval;

window.setTimeout = function (
  vCallback,
  nDelay /*, argumentToPass1, argumentToPass2, etc. */,
) {
  var oThis = this,
    aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeST__(
    vCallback instanceof Function
      ? function () {
          vCallback.apply(oThis, aArgs);
        }
      : vCallback,
    nDelay,
  );
};

window.setInterval = function (
  vCallback,
  nDelay /*, argumentToPass1, argumentToPass2, etc. */,
) {
  var oThis = this,
    aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeSI__(
    vCallback instanceof Function
      ? function () {
          vCallback.apply(oThis, aArgs);
        }
      : vCallback,
    nDelay,
  );
};
```

> [!NOTE]
> These two replacements also enable the HTML5 standard passage of arbitrary arguments to the callback functions of timers in IE. So they can be used as _non-standard-compliant_ polyfills also. See the [callback arguments paragraph](#Callback_arguments) for a _standard-compliant_ polyfill.

Teste da nova implementação:

```js
myArray = ["zero", "one", "two"];

myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

setTimeout(alert, 1500, "Hello world!"); // the standard use of setTimeout and setInterval is preserved, but...
setTimeout.call(myArray, myArray.myMethod, 2000); // prints "zero,one,two" after 2 seconds
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // prints "two" after 2,5 seconds
```

Outra, mais complexa, solução para o problema do `this` é [the following framework](#a_little_framework).

> [!NOTE]
> JavaScript 1.8.5 introduces the [`Function.prototype.bind()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method, which lets you specify the value that should be used as `this` for all calls to a given function. This lets you easily bypass problems where it's unclear what this will be, depending on the context from which your function was called. Also, ES2015 supports [arrow functions](/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions), with lexical this allowing us to write setInterval( () => this.myMethod) if we're inside myArray method.

## MiniDaemon - A framework for managing timers

In pages requiring many timers, it can often be difficult to keep track of all of the running timer events. One approach to solving this problem is to store information about the state of a timer in an object. Following is a minimal example of such an abstraction. The constructor architecture explicitly avoids the use of closures. It also offers an alternative way to pass the [`this`](/pt-BR/docs/Web/JavaScript/Reference/Operators/this) object to the callback function (see [The "this" problem](#The_.22this.22_problem) for details). The following code is also [available on GitHub](https://github.com/madmurphy/minidaemon.js).

> [!NOTE]
> For a more complex but still modular version of it (`Daemon`) see [JavaScript Daemons Management](/pt-BR/Add-ons/Code_snippets/Timers/Daemons). This more complex version is nothing but a big and scalable collection of methods for the `Daemon` constructor. However, the `Daemon` constructor itself is nothing but a clone of `MiniDaemon` with an added support for _init_ and _onstart_ functions declarable during the instantiation of the `daemon`. **So the `MiniDaemon` framework remains the recommended way for simple animations**, because `Daemon` without its collection of methods is essentially a clone of it.

### minidaemon.js

```js
/*\
|*|
|*|  :: MiniDaemon ::
|*|
|*|  Revision #2 - September 26, 2014
|*|
|*|  https://developer.mozilla.org/pt-BR/docs/Web/API/window.setInterval
|*|  https://developer.mozilla.org/User:fusionchess
|*|  https://github.com/madmurphy/minidaemon.js
|*|
|*|  This framework is released under the GNU Lesser General Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/lgpl-3.0.html
|*|
\*/

function MiniDaemon(oOwner, fTask, nRate, nLen) {
  if (!(this && this instanceof MiniDaemon)) {
    return;
  }
  if (arguments.length < 2) {
    throw new TypeError("MiniDaemon - not enough arguments");
  }
  if (oOwner) {
    this.owner = oOwner;
  }
  this.task = fTask;
  if (isFinite(nRate) && nRate > 0) {
    this.rate = Math.floor(nRate);
  }
  if (nLen > 0) {
    this.length = Math.floor(nLen);
  }
}

MiniDaemon.prototype.owner = null;
MiniDaemon.prototype.task = null;
MiniDaemon.prototype.rate = 100;
MiniDaemon.prototype.length = Infinity;

/* These properties should be read-only */

MiniDaemon.prototype.SESSION = -1;
MiniDaemon.prototype.INDEX = 0;
MiniDaemon.prototype.PAUSED = true;
MiniDaemon.prototype.BACKW = true;

/* Global methods */

MiniDaemon.forceCall = function (oDmn) {
  oDmn.INDEX += oDmn.BACKW ? -1 : 1;
  if (
    oDmn.task.call(oDmn.owner, oDmn.INDEX, oDmn.length, oDmn.BACKW) === false ||
    oDmn.isAtEnd()
  ) {
    oDmn.pause();
    return false;
  }
  return true;
};

/* Instances methods */

MiniDaemon.prototype.isAtEnd = function () {
  return this.BACKW
    ? isFinite(this.length) && this.INDEX < 1
    : this.INDEX + 1 > this.length;
};

MiniDaemon.prototype.synchronize = function () {
  if (this.PAUSED) {
    return;
  }
  clearInterval(this.SESSION);
  this.SESSION = setInterval(MiniDaemon.forceCall, this.rate, this);
};

MiniDaemon.prototype.pause = function () {
  clearInterval(this.SESSION);
  this.PAUSED = true;
};

MiniDaemon.prototype.start = function (bReverse) {
  var bBackw = Boolean(bReverse);
  if (this.BACKW === bBackw && (this.isAtEnd() || !this.PAUSED)) {
    return;
  }
  this.BACKW = bBackw;
  this.PAUSED = false;
  this.synchronize();
};
```

> [!NOTE]
> MiniDaemon passes arguments to the callback function. If you want to work on it with browsers that natively do not support this feature, use one of the methods proposed above.

### Syntax

```
var myDaemon = new MiniDaemon(thisObject, callback[, rate[, length]]);
```

### Description

Returns a JavaScript [`Object`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object) containing all information needed by an animation (like the [`this`](/pt-BR/docs/Web/JavaScript/Reference/Operators/this) object, the callback function, the length, the frame-rate).

#### Parameters

- `thisObject`
  - : The [`this`](/pt-BR/docs/Web/JavaScript/Reference/Operators/this) object on which the _callback_ function is called. It can be an [`object`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object) or `null`.
- `callback`
  - : The function that is repeatedly invoked . **It is called with three parameters**: _index_ (the iterative index of each invocation), _length_ (the number of total invocations assigned to the _daemon_ - finite or [`Infinity`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Infinity)) and _backwards_ (a boolean expressing whether the _index_ is increasing or decreasing). It is something like _callback_.call(_thisObject_, _index_, _length_, _backwards_). **If the callback function returns a `false` value the _daemon_ is paused**.
- `rate (optional)`
  - : The time lapse (in number of milliseconds) between each invocation. The default value is 100.
- `length (optional)`
  - : The total number of invocations. It can be a positive integer or [`Infinity`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Infinity). The default value is `Infinity`.

#### `MiniDaemon` instances properties

- `myDaemon.owner`
  - : The [`this`](/pt-BR/docs/Web/JavaScript/Reference/Operators/this) object on which is executed the daemon (read/write). It can be an [`object`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object) or `null`.
- `myDaemon.task`
  - : The function that is repeatedly invoked (read/write). It is called with three arguments: _index_ (the iterative index of each invocation), _length_ (the number of total invocations assigned to the daemon - finite or [`Infinity`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Infinity)) and backwards (a boolean expressing whether the _index_ is decreasing or not) – see above. If the `myDaemon.task` function returns a `false` value the _daemon_ is paused.
- `myDaemon.rate`
  - : The time lapse (in number of milliseconds) between each invocation (read/write).
- `myDaemon.length`
  - : The total number of invocations. It can be a positive integer or [`Infinity`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Infinity) (read/write).

#### `MiniDaemon` instances methods

- `myDaemon.isAtEnd()`
  - : Returns a boolean expressing whether the _daemon_ is at the start/end position or not.
- `myDaemon.synchronize()`
  - : Synchronize the timer of a started daemon with the time of its invocation.
- `myDaemon.pause()`
  - : Pauses the daemon.
- `myDaemon.start([reverse])`
  - : Starts the daemon forward (_index_ of each invocation increasing) or backwards (_index_ decreasing).

#### `MiniDaemon` global object methods

- `MiniDaemon.forceCall(minidaemon)`
  - : Forces a single callback to the `minidaemon.task` function regardless of the fact that the end has been reached or not. In any case the internal `INDEX` property is increased/decreased (depending on the actual direction of the process).

### Example usage

Your HTML page:

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>MiniDaemin Example - MDN</title>
    <script type="text/javascript" src="minidaemon.js"></script>
    <style type="text/css">
      #sample_div {
        visibility: hidden;
      }
    </style>
  </head>

  <body>
    <p>
      <input
        type="button"
        onclick="fadeInOut.start(false /* optional */);"
        value="fade in" />
      <input type="button" onclick="fadeInOut.start(true);" value="fade out" />
      <input type="button" onclick="fadeInOut.pause();" value="pause" />
    </p>

    <div id="sample_div">Some text here</div>

    <script type="text/javascript">
      function opacity(nIndex, nLength, bBackwards) {
        this.style.opacity = nIndex / nLength;
        if (bBackwards ? nIndex === 0 : nIndex === 1) {
          this.style.visibility = bBackwards ? "hidden" : "visible";
        }
      }

      var fadeInOut = new MiniDaemon(
        document.getElementById("sample_div"),
        opacity,
        300,
        8,
      );
    </script>
  </body>
</html>
```

[View this example in action](/files/3995/minidaemon_example.html)

## Notes

The `setInterval()` function is commonly used to set a delay for functions that are executed again and again, such as animations.

You can cancel the interval using {{domxref("WindowOrWorkerGlobalScope.clearInterval()")}}.

If you wish to have your function called _once_ after the specified delay, use {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}.

### Ensure that execution duration is shorter than interval frequency

If there is a possibility that your logic could take longer to execute than the interval time, it is recommended that you recursively call a named function using {{domxref("WindowOrWorkerGlobalScope.setTimeout")}}. For example, if using `setInterval` to poll a remote server every 5 seconds, network latency, an unresponsive server, and a host of other issues could prevent the request from completing in its allotted time. As such, you may find yourself with queued up XHR requests that won't necessarily return in order.

In these cases, a recursive `setTimeout()` pattern is preferred:

```js
(function loop() {
  setTimeout(function () {
    // Your logic here

    loop();
  }, delay);
})();
```

In the above snippet, a named function `loop()` is declared and is immediately executed. `loop()` is recursively called inside `setTimeout()` after the logic has completed executing. While this pattern does not guarantee execution on a fixed interval, it does guarantee that the previous interval has completed before recursing.

### Throttling of intervals

`setInterval()` is subject to the same throttling restrictions in Firefox as {{domxref("WindowOrWorkerGlobalScope.setTimeout","setTimeout()")}}; see [Reasons for delays longer than specified](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- [JavaScript timers](/pt-BR/Add-ons/Code_snippets/Timers)
- {{domxref("WindowOrWorkerGlobalScope.setTimeout")}}
- {{domxref("WindowOrWorkerGlobalScope.clearTimeout")}}
- {{domxref("WindowOrWorkerGlobalScope.clearInterval")}}
- {{domxref("window.requestAnimationFrame")}}
- [_Daemons_ management](/pt-BR/Add-ons/Code_snippets/Timers/Daemons)
