---
title: Scripts assíncronos para asm.js
slug: Games/Techniques/Async_scripts
page-type: guide
---

{{GamesSidebar}}

Todo jogo de médio ou grande porte deve compilar o código [asm.js](/pt-BR/docs/Games/Tools/asm.js) como parte de um script assíncrono para dar ao navegador a máxima flexibilidade para otimizar o processo de compilação. No Gecko, a compilação assíncrona permite que a engine JavaScript compile o asm.js fora da thread principal durante o carregamento do jogo e armazene em cache o código de máquina gerado para que o jogo não precise ser compilado em carregamentos subsequentes (a partir do Firefox 28). Para ver a diferença, ative `javascript.options.parallel_parsing` em `about:config`.

## Colocando async em ação

Obter compilação assíncrona é fácil: ao escrever seu JavaScript, basta usar o atributo `async` como abaixo:

```html
<script async src="file.js"></script>
```

ou, para fazer o mesmo através do script:

```js
const script = document.createElement("script");
script.src = "file.js";
document.body.appendChild(script);
```

(Scripts criados a partir de script são definidos como `async` por padrão.) O shell HTML padrão gerado pelo Emscripten produz o último.

## Quando async não é assíncrono?

Duas situações comuns nas quais um script \*não\* é assíncrono (conforme [definido pela especificação HTML](https://html.spec.whatwg.org/multipage/scripting.html)) são:

```html
<script async>
  code();
</script>
```

e

```js
const script = document.createElement("script");
script.textContent = "code()";
document.body.appendChild(script);
```

Ambos são considerados como scripts 'inline' e são compilados e executados imediatamente.

E se o seu código estiver em uma string JS? Em vez de usar `eval` ou `innerHTML`, os quais disparam compilação síncrona, você deve usar um Blob com uma URL de objeto:

```js
const blob = new Blob([codeString]);
const script = document.createElement("script");
const url = URL.createObjectURL(blob);
script.onload = script.onerror = () => URL.revokeObjectURL(url);
script.src = url;
document.body.appendChild(script);
```

A definição de `src` em vez de `innerHTML` é o que torna este script assíncrono.
