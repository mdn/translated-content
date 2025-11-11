---
title: "@page"
slug: Web/CSS/@page
---

{{CSSRef}}

## Resumo

A regra CSS `@page` é utilizada para modificar algumas propriedades CSS quando o documento for impresso. Você não pode mudar todas as propriedades CSS com @page. Você poderá somente mudar as margens, orphans, widows, e page breaks do documento. Na tentativa de mudar outra propriedade CSS, elas serão ignoradas.

A regra CSS `@page` pode ser acessada via interface do modelo de objeto {{domxref("CSSPageRule")}}.

> [!NOTE]
> A W3C está analisando como lidar com unidades viewport-related {{cssxref("&lt;length&gt;")}}, `vh`, `vw`, `vmin`, and `vmax`. Enquanto isso, não use eles junto com a regra @page.

## Sintaxe

```
@page :pseudo-class {
  margin:2in;
}
```

## Exemplos

Podemos fazer referência a vários [pseudo-classes](/pt-BR/docs/Web/CSS/Pseudo-classes) de `@page` por exemplo.

- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
