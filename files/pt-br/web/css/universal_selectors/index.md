---
title: Seletor universal
slug: Web/CSS/Universal_selectors
---

{{CSSRef}}

O **seletor universal** do CSS (`*`) aplica estilos a elementos de qualquer tipo.

```css
/* Seleciona todos os elementos */
* {
  color: green;
}
```

A partir do CSS3, o asterisco pode ser combinado com {{cssxref("CSS_Namespaces", "namespaces")}}:

- `ns|*` - aplica a todos os elementos no namespace _ns_
- `*|*` - aplica a todos elementos
- `|*` - aplica a todos os elementos que não tem namespaces declarados

## Sintaxe

```
* { propriedades de estilo }
```

O asterisco é opcional para seletores simples. Por exemplo, `*.atencao` e `.atencao` são equivalentes.

## Exemplos

### CSS

```css
* [lang^="pt"] {
  color: green;
}

*.atencao {
  color: red;
}

*#conteudoprincipal {
  border: 1px solid blue;
}

.flutuando {
  float: left;
}

/* automaticamente aplica clear ao próximo irmão após o elemento com a classe .flutuando */
.flutuando + * {
  clear: left;
}
```

### HTML

```html
<p class="atencao">
  <span lang="pt-br">Um span verde</span> em um parágrafo vermelho.
</p>
<p id="conteudoprincipal" lang="pt-pt">
  <span class="atencao">Um span vermelho</span> em um parágrafo verde.
</p>
```

### Resultado

{{EmbedLiveSample('Exemplos')}}

## Especificações

| Especificação                                                                   | Status                      | Comentário                                                                                                                        |
| ------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#the-universal-selector', 'Seletor universal')}}  | {{Spec2('CSS4 Selectors')}} | Sem mudanças                                                                                                                      |
| {{SpecName('CSS3 Selectors', '#universal-selector', 'Seletor universal')}}      | {{Spec2('CSS3 Selectors')}} | Define o comportamente de acordo com os namespaces e adiciona uma sugestão de que é possivel omitir o seletor em pseudo-elementos |
| {{SpecName('CSS2.1', 'selector.html#universal-selector', 'Seletor universal')}} | {{Spec2('CSS2.1')}}         | Definição inicial                                                                                                                 |

## Compatibilidade com navegadores

{{Compat("css.selectors.universal")}}
