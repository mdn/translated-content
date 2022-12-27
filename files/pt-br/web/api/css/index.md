---
title: CSS
slug: Web/API/CSS
tags:
  - Apps
  - CSSOM
  - Referencia
translation_of: Web/API/CSS
---
{{APIRef("CSSOM")}}

`A interface CSS` carrega métodos CSS-relacionados úteis. Nenhum objeto com essa interface foi implementado: Aqui só contém métodos estáticos e futuramente uma interface útil.

## Propriedades

_A interface CSS é a interface utilizada e nenhum objeto desse tipo pode ser criado: só métodos estáticos são definidos aqui._

## Métodos

_A interface CSS é a interface utilizada e nenhum objeto desse tipo pode ser criado: só métodos estáticos são definidos aqui._

## Métodos státicos

_Nenhuma método estático herdado_.

- {{domxref("CSS.supports()")}}
  - : Retorna um {{domxref("Boolean")}} indicando se o par _property-value_, ou a condição dada do parâmetro é suportada.
- {{domxref("CSS.escape()")}} {{experimental_inline}}
  - : Pode ser usado para escapar um string mais usado como parte de um seletor CSS.

## Especificações

| Especificações                                                                   | Estado                                   | Comentário                               |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| {{SpecName('CSSOM', '#the-css.escape%28%29-method', 'CSS')}} | {{Spec2('CSSOM')}}                 | Adicionado o `escape()` método estático. |
| {{SpecName('CSS3 Conditional', '#the-css-interface', 'CSS')}} | {{Spec2('CSS3 Conditional')}} | Definição inicial.                       |

## Compatibilidade com navegadores

{{Compat("api.CSS")}}

## Veja também

- [Components.utils.importGlobalProperties](/pt-BR/docs/Components.utils.importGlobalProperties)
