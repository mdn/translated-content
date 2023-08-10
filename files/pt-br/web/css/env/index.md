---
title: env()
slug: Web/CSS/env
---

{{CSSRef}}

A função [CSS](/pt-BR/docs/Web/CSS) **`env()`** pode ser usada para inserir o valor de uma variável de ambiente definida pelo agente do usuário em seu CSS, de uma maneira semelhante à função {{cssxref("var")}} e [propriedades personalizadas](/pt-BR/docs/Web/CSS/--*). A diferença é que, além de serem definidas pelo agente do usuário em vez de serem definidas pelo usuário, as variáveis de ambiente têm escopo global para um documento, enquanto as propriedades personalizadas têm um escopo para o(s) elemento(s) no(s) qual(is) é/são declarado(s).

```css
body {
  padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px) env(
      safe-area-inset-bottom,
      20px
    ) env(safe-area-inset-left, 20px);
}
```

Além disso, ao contrário das propriedades personalizadas, que não podem ser usadas fora do escopo das declarações, a função `env()` pode ser usada em qualquer parte do valor de uma propriedade ou em qualquer parte de um _descriptor_ (por exemplo, regras [Media](/pt-BR/docs/Web/CSS/@media)). À medida que a especificação evolui, essa também pode ser usada em outros lugares, como em seletores.

Originalmente fornecido pelo navegador iOS para permitir que os desenvolvedores coloquem seu conteúdo em uma _safe area_ (área segura) na janela de visualização, os valores de `safe-area-inset-*` definidos na especificação podem ser usados para ajudar a garantir que o conteúdo seja visível até mesmo para usuários que usam uma tela não retangular.

## Sintaxe

```css
/* Usando os quatro valores de inserção safe area sem valores de fallback */
env(safe-area-inset-top);
env(safe-area-inset-right);
env(safe-area-inset-bottom);
env(safe-area-inset-left);

/* Usando-os com valores de fallback */
env(safe-area-inset-top, 20px);
env(safe-area-inset-right, 1em);
env(safe-area-inset-bottom, 0.5vh);
env(safe-area-inset-left, 1.4rem);
```

### Valores

- `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
  - : As variáveis `safe-area-inset-*` são quatro variáveis de ambiente que definem um retângulo por seus valores de inserção: _top, right, bottom_ e _left_ a partir da borda da janela de visualização, no qual é seguro colocar o conteúdo sem o risco de ser cortado pela forma de um visor não retangular. Para janelas de visualização retangulares, como o monitor de um laptop comum, seu valor é igual a zero. Para telas não retangulares - como um visor de um relógio redondo - os quatro valores definidos pelo agente do usuário formam um retângulo de modo que todo o conteúdo dentro do retângulo seja visível.

> **Nota:** Ao contrário de outras propriedades CSS, os nomes de propriedades definidos pelo agente do usuário fazem distinção entre maiúsculas e minúsculas.

### Sintaxe formal

{{cssSyntax}}

## Exemplos

O exemplo abaixo faz uso do segundo parâmetro opcional de `env()`, que permite fornecer um valor de _fallback_ caso a variável de ambiente não esteja disponível.

```html
<p>
  Se a função <code>env()</code> é suportada em seu navegador, o texto deste
  parágrafo deverá estar na borda <i>top</i>, <i>right</i> e <i>bottom</i>, ter
  50px de preenchimento entre a borda e o texto. O CSS é equivalente ao
  preenchimento: <code>padding: 0 0 0 50px</code>, porque, ao contrário de
  outras propriedades CSS, os nomes de propriedades do agente do usuário
  diferenciam letras maiúsculas de minúsculas.
</p>
```

```css
p {
  width: 300px;
  border: 2px solid red;
  padding: env(safe-area-inset-top, 50px) env(safe-area-inset-right, 50px) env(
      safe-area-inset-bottom,
      50px
    ) env(SAFE-AREA-INSET-LEFT, 50px);
}
```

{{EmbedLiveSample("Exemplos")}}

### Exemplo com valores

```css
padding: env(
  safe-area-inset-bottom,
  50px
); /* zero para todos agentes do usuário que são retangulares*/
padding: env(
  Safe-area-inset-bottom,
  50px
); /* 50px porque as propriedades do agente do usuário diferenciam maiúsculas de minúsculas */
padding: env(
  x,
  50px 20px
); /* como se estivesse preenchendo: '50px 20px' que foram definidos, porque x não é uma variável de ambiente válida */
padding: env(
  x,
  50px,
  20px
); /* ignorado '50px, 20px' porque não é um valor de preenchimento válido e x não é uma variável de ambiente válida */
```

A sintaxe _fallback_, como de propriedades customizadas, permite vírgulas. Mas se o valor da propriedade não suportar vírgulas, o valor não é válido.

> **Nota:** As propriedades do agente do usuário não são redefinidas pela propriedade [all](/pt-BR/docs/Web/CSS/all).

## Especificações

| Especificação                                                        | Status                                  | Comentário         |
| -------------------------------------------------------------------- | --------------------------------------- | ------------------ |
| {{SpecName("CSS3 Environment Variables", "#env-function", "env()")}} | {{Spec2("CSS3 Environment Variables")}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("css.properties.custom-property.env")}}

## Veja também

- {{CSSxRef("var", "var(…)")}}
- [CSS Custom Properties for Cascading Variables](/pt-BR/docs/Web/CSS/CSS_Variables)
- [Custom Properties (--\*)](/pt-BR/docs/Web/CSS/--*)
- [Using CSS custom properties (variables)](/pt-BR/docs/Web/CSS/Using_CSS_variables)
