---
title: Uso de busca Cross-global
slug: Web/API/Fetch_API/Cross-global_fetch_usage
---

Este artigo explica um "edge case" (um problema ou situação que ocorre apenas em um parâmetro operacional extremo) que ocorre ao utilizar fetch (e potencialmente outras APIs que exibem o mesmo tipo de comportamento de recuperação de recurso). Quando uma busca de cross-origin envolvendo uma URL relativa é iniciada a partir de um {{htmlelement ("iframe")}}, a URL relativa costumava ser resolvida na localização global atual, em vez da localização do iframe.

## O "edge case"

Muitos sites nunca se deparam com este caso extremo. Para que isso aconteça:

- Você precisa de um iframe de mesma origem
- Esse iframe de mesma origem precisa ter um local com um URL base diferente
- Você tem que usar a função de busca global, por exemplo, frame.contentWindow\.fetch ()
- A URL passada precisa ser relativa

## O problema

No passado, resolveríamos o URL relativo contra o global atual, por exemplo:

```js
let absolute = new URL(relative, window.location.href);
```

Isto não é um problema como tal. É que diferentes APIs que exibem esse tipo de comportamento estavam fazendo isso de maneira inconsistente com o comportamento definido na especificação, o que poderia levar a problemas mais adiante.

## A solução

No Firefox 60 em diante, o Mozilla resolve a URL relativa contra o global que possui a função `fetch()` que está sendo usada (veja [Erro do Firefox 1432272](https://bugzil.la/1432272)). Portanto, no caso descrito acima, ele é resolvido em relação à localização do iframe:

```js
let absolute = new URL(relative, frame.contentWindow.location.href);
```

Há muita discussão em andamento sobre a obtenção de novas especificações para se alinhar a essa mudança de comportamento, a fim de mitigar possíveis problemas no futuro.
