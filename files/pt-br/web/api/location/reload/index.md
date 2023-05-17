---
title: "location: reload() method"
short-title: reload()
slug: Web/API/Location/reload
page-type: web-api-instance-method
browser-compat: api.Location.reload
---

{{ APIRef("HTML DOM") }}

O método **`location.reload()`** recarrega a URL atual, como o botão Atualizar.

O recarregamento pode ser bloqueado e um `SECURITY_ERROR` {{domxref("DOMException")}} lançado. Isso acontece se a {{Glossary("origin")}} do chamado do script `location.reload()` diferir da origem da página que possui o objeto {{domxref("Location")}}. Veja [Política de mesma origem](/pt-BR/docs/Web/Security/Same-origin_policy) para mais informações.

## Sintaxe

```js-nolint
reload()
```

### Parâmetros

Nenhum.

> **Nota:** O Firefox suporta [o parâmetro boleano `forceGet`](https://searchfox.org/mozilla-central/source/dom/base/Location.cpp#544) fora do padrão para `location.reload()`, para dizer ao Firefox para contornar seu cache e forçar o recarregamento do documento atual. No entanto, em todos os outros navegadores, qualquer parâmetro que você especificar em uma chamada `location.reload()` será ignorado e não terá efeito algum.

Você pode, no entanto, encontrar instâncias de `location.reload(true)` em código existente que foi escrito com suposição de que o recarregamento forçado ocorre em todos os navegadores. A busca no GitHub por "`location.reload(true)`" retorna [várias centenas de milhares de resultados](https://github.com/search?q=%22location.reload%28true%29%22&type=code). Portando, há muito código existente que o possui.

A história disso é: alguma versão do Netscape Navigator adicionou suporte para ele, que aparentemente acabou sendo escolhido no Firefox. E, a certa altura, o W3C Web APIs Working Group [abordou um problema](https://www.w3.org/2005/06/tracker/webapi/issues/69) para considerar adicioná-lo à especificação para `location.reload()`. No entanto, nunca foi realmente adicionado.

Portanto o parâmetro boleano não faz parte da especificação atual para `location.reload()` — e de fato _nunca_ fez parte de nenhuma especificação para `location.reload()` já publicada.

### Valor de retorno

Nenhum ({{jsxref("undefined")}}).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- A interface {{domxref("Location")}} que o método pertence.
- Métodos similares: {{domxref("Location.assign()")}} e {{domxref("Location.replace()")}}.
