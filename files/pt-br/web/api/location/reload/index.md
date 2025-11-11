---
title: "location: reload() method"
short-title: reload()
slug: Web/API/Location/reload
---

{{ APIRef("HTML DOM") }}

O método **`location.reload()`** recarrega a URL atual, como o botão Atualizar.

O recarregamento pode ser bloqueado e um `SECURITY_ERROR` {{domxref("DOMException")}} lançado. Isso acontece se a {{Glossary("origin")}} do chamado do script `location.reload()` diferir da origem da página que possui o objeto {{domxref("Location")}}. Veja [Política de mesma origem](/pt-BR/docs/Web/Security/Same-origin_policy) para mais informações.

## Sintaxe

```js-nolint
reload()
```

### Parâmetros

- `forceGet` {{non-standard_inline}}
  - : Passe `true` para forçar um recarregamento ignorando o cache. O padrão é `false`. Suportado apenas no Firefox.

### Valor de retorno

Nenhum ({{jsxref("undefined")}}).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- A interface {{domxref("Location")}} que o método pertence.
- Métodos similares: {{domxref("Location.assign()")}} e {{domxref("Location.replace()")}}.
