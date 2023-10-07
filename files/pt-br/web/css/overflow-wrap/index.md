---
title: word-wrap
slug: Web/CSS/overflow-wrap
---

{{CSSRef}} {{SeeCompatTable}}

## Resumo

A propriedade [CSS](/pt-BR/CSS) `word-wrap` é utilizada para especificar se o navegador pode ou não quebrar linhas dentro das palavras, afim de prevenir o vazamento quando do contrário uma sequencia de caracteres é muito longa para caber na caixa que o contém.

> **Nota:** Originalmente uma extensão proprietária da Microsoft (não prefixada), a propriedade `word-wrap` foi renomeada para `overflow-wrap` no rascunho atual do texto de especificações do CSS3. Compilações estáveis do Google Chrome e do Opera têm suporte a nova sintaxe.

{{cssinfo}}

## Sintaxe

```
word-wrap:  normal | break-word
```

### Valores

- `normal`
  - : Indica que as linhas só podem quebrar em pontos de quebra normais de palavras.
- `break-word`
  - : Indica que as palavras normalmente inquebráveis podem ser quebrados em pontos arbitrários se não houver pontos de quebra de outra forma aceitáveis na linha.

## Exemplos

```css
p {
  width: 13em;
  background: gold;
}
```

FStrPrivFinÄndG (Gesetz zur Änderung des Fernstraßenbauprivatfinanzierungsgesetzes und straßenverkehrsrechtlicher Vorschriften)

```css
p {
  width: 13em;
  background: gold;
  word-wrap: break-word;
}
```

FStrPrivFinÄndG (Gesetz zur Änderung des Fernstraßenbauprivatfinanzierungsgesetzes und straßenverkehrsrechtlicher Vorschriften)

## Especificações

| Especificação                                                        | Status                   | Comentário |
| -------------------------------------------------------------------- | ------------------------ | ---------- |
| [CSS Text Level 3](http://dev.w3.org/csswg/css3-text/#overflow-wrap) | {{ Spec2('CSS3 Text') }} |            |

## Compatibilidade com navegadores

{{Compat("css.properties.overflow-wrap")}}

## Veja também

- Microsoft's original documentation: [MSDN Microsoft library word-wrap](<http://msdn.microsoft.com/en-us/library/ms531186(VS.85,loband).aspx>)
