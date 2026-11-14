---
title: Scripts assíncronos para asm.js
slug: Games/Techniques/Async_scripts
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Todo jogo médio ou grande deve compilar código [asm.js](/pt-BR/docs/Games/Tools/asm.js) como parte de um script assíncrono, para dar ao navegador o máximo de flexibilidade ao otimizar a compilação. No Gecko, a compilação assíncrona permite que o motor de JavaScript compile o asm.js fora da thread principal enquanto o jogo carrega e armazene em cache o código de máquina gerado, de modo que o jogo não precise ser compilado nos carregamentos seguintes (a partir do Firefox 28). Para ver a diferença, alterne `javascript.options.parallel_parsing` em `about:config`.

## Como obter a compilação assíncrona

Obter a compilação assíncrona é simples: ao escrever o JavaScript, use o atributo `async`, assim:

```html
<script async src="file.js"></script>
```

ou faça o mesmo por script:

```js
const script = document.createElement("script");
script.src = "file.js";
document.body.appendChild(script);
```

(Scripts criados por script são `async` por padrão.) O shell HTML padrão gerado pelo Emscripten produz a segunda forma.

## Quando async não é assíncrono?

Duas situações comuns em que um script _não_ é assíncrono (conforme [definido pela especificação HTML](https://html.spec.whatwg.org/multipage/scripting.html)) são:

```html
<script async>
  // Código JavaScript inline
</script>
```

e

```js
const script = document.createElement("script");
script.textContent = "// Código JavaScript inline";
document.body.appendChild(script);
```

Os dois contam como scripts inline: são compilados e, em seguida, executados imediatamente.

E se o código estiver em uma string JavaScript? Em vez de `eval` ou `innerHTML`, que disparam compilação síncrona, use um Blob com um objeto URL:

```js
const blob = new Blob([codeString]);
const script = document.createElement("script");
const url = URL.createObjectURL(blob);
script.onload = script.onerror = () => URL.revokeObjectURL(url);
script.src = url;
document.body.appendChild(script);
```

É a definição de `src`, e não de `innerHTML`, que torna esse script assíncrono.
