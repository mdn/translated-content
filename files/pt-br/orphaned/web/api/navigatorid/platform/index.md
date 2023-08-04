---
title: NavigatorID.platform
slug: orphaned/Web/API/NavigatorID/platform
---

{{ ApiRef("HTML DOM") }}

Retorna uma string representando a plataforma do navegador. A especificação permite aos navegadores retornar sempre strings vazias, portanto não se utilize dessa propriedade para obter resultados confiáveis.

## Sintaxe

```
plataforma = navigator.platform
```

### Valor

Uma {{domxref("DOMString")}} identificando a plataforma na qual o navegador está sendo executado, ou uma string vazia se o browser se negar a (ou for incapaz de) identificar a plataforma. `plataforma` é uma string que pode estar vazia ou representar a plataforma na qual o navegador está sendo executado.

Por exemplo: "`MacIntel`", "`Win32`", "`FreeBSD i386`", "`WebTV OS`"

## Exemplo

```js
console.log(navigator.platform);
```

## Notas

Na maioria dos browsers, incluindo Chrome, Edge e Firefox 63 em diante, `NavegatorID.platform` retorna `"Win32"`, mesmo que o browser seja executado em uma versão 64-bit do Windows. No Internet Explorer e em versões do Firefox anteriores à versão 63, a propriedade ainda retorna `"Win64"`.

No Firefox, a preferência `general.platform.override` pode ser usada para sobrepor o valor de retorno padrão dessa propriedade.

## Especificações

| Especificação                                                                                            | Status                           | Comentário         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', '#dom-navigator-platform', 'NavigatorID.platform')}} | {{Spec2('HTML WHATWG')}} | Definição inicial. |

## Compatibilidade

{{Compat("api.NavigatorID.platform")}}
