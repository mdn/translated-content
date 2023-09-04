---
title: hifens
slug: Web/CSS/hyphens
---

{{CSSRef}}A propriedade [CSS](/pt-BR/docs/) **`hyphens`** especifica como palavras devem ser hifenizadas quando o há quebra de texto em múltiplas linhas. Você pode prevenir a hifenização completamente, especificar pontos manualmente, ou permitir que o navegador insira automaticamente quando apropriado.

```css
hyphens: none;
hyphens: manual;
hyphens: auto;

/* Valores globais */
hyphens: inherit;
hyphens: initial;
hyphens: unset;
```

Regras de hifenização são específicas para cada idioma. Em HTML, o idioma é determinado pelo atributo `lang`, e os navegadores irão utilizar hífen apenas caso este atributo esteja presente e se houver um dicionário de hifenização disponível. Em XML, deve ser usado o atributo `xml:lang.`

> **Nota:** As regras que definem como a hifenização é realizada não são explicitamente definidas pela especificação, então a hifenização exata pode variar de navegador para navegador.

{{cssinfo}}

## Sintaxe

A propriedade `hyphens` é especificada como uma única palavra-chave escolhida da lista abaixo.

### Valores

- `none`
  - : Palavras não são separadas em quebras de linha, mesmo se seus caracteres sugiram pontos de quebra de linha. Linhas são quebradas apenas em espaços em branco.
- `manual`
  - : Palavras são separadas apenas onde caracteres dentro de uma palavras sugiram oportunidades de quebra de linha. Veja abaixo [Oportunidades sugeridas de quebra de linha](#suggesting_line_break_opportunities) para mais detalhes.
- `auto`
  - : O navegador é livre para quebrar palavras automaticamente nos pontos apropriados de hifenização, seguindo quaisquer regras que ele escolher. Entretanto, oportunidades sugeridas de quebras de linha (veja [Oportunidades sugeridas de quebra de linha](#suggesting_line_break_opportunities) abaixo) irão sobrepor a seleção automática de pontos de quebra quando presentes.

> **Nota:** O comportamento da configuração `auto` requer que a propriedade idioma seja indicada corretamente para que as regras de hifenização sejam selecionadas. Você deve especificar o idioma utilizando o atributo HTML `lang` para garantir que a hifenização automática seja aplicada na linguagem de sua escolha.

## Oportunidades sugeridas de quebra de linha

Existem dois caracteres Unicode que podem ser utilizados para especificar manualmente potenciais pontos de quebra de linha no texto:

- U+2010 (HYPHEN)
  - : O caractere hífen "duro" indica uma oportunidade de quebra de linha visível. Mesmo que não haja quebra de linha naquele ponto, o hífen ainda será renderizado.
- U+00AD (SHY)
  - : Um hífen invisivel, "suave". Este caractere não é renderizado visivelmente; ao invés, ele marca um local onde o browser deve quebrar a palavra se um hífen for necessário. Em HTML você pode usar `&shy;` para inserir um hífen suave.

### Sintaxe formal

{{csssyntax}}

## Exemplo

Este exemplo usa três classes, uma para cada configuração possível da propriedade `hyphens`.

```html
<ul>
  <li>
    <code>none</code>: sem hífen; transbordar se necessário
    <p lang="en" class="none">An extreme&shy;ly long English word</p>
  </li>
  <li>
    <code>manual</code>: hífen apenas em &amp;hyphen; ou &amp;shy; (se
    necessário)
    <p lang="en" class="manual">An extreme&shy;ly long English word</p>
  </li>
  <li>
    <code>auto</code>: hífen onde o algorítmo decidir (se necessário)
    <p lang="en" class="auto">An extreme&shy;ly long English word</p>
  </li>
</ul>
```

```css
p {
  width: 55px;
  border: 1px solid black;
}
p.none {
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
p.manual {
  -webkit-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
}
p.auto {
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
```

{{EmbedLiveSample("Example", "100%", "470'")}}

## Especificações

| Especificação                                             | Condição               | Comentário         |
| --------------------------------------------------------- | ---------------------- | ------------------ |
| {{SpecName("CSS3 Text", "#hyphens-property", "hyphens")}} | {{Spec2("CSS3 Text")}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.properties.hyphens")}}

## Veja também

- {{Cssxref("content")}}
