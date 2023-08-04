---
title: "::after (:after)"
slug: Web/CSS/::after
---

{{CSSRef}}

Em CSS, **`::after`** cria um [pseudo-elemento](/pt-BR/docs/Web/CSS/Pseudo-elementos) que é o último filho do elemento selecionado. Muitas vezes é usado para adicionar e melhorar o conteúdo de um elemento como a propriedade {{cssxref("content")}}. É inline por padrão.

```css
/* Adiciona uma seta após os links */
a::after {
  content: "→";
}
```

## Sintaxe

{{csssyntax}}

> **Nota:** O CSS3 introduziu a notação `::after` (com dois sinais de dois pontos) para distinguir [pseudo-classes](/pt-BR/docs/Web/CSS/Pseudo-classes) dos [pseudo-elementos](/pt-BR/docs/Web/CSS/Pseudo-elements). Os navegadores também aceitam `:after`, introduzido no CSS2.

## Exemplos

### Uso simples

Vamos criar duas classes: uma para parágrafos tediosos e uma para parágrafos excitantes. Podemos então marcar cada parágrafo adicionando um pseudo-elemento ao final dele.

```html
<p class="boring-text">Here is some plain old boring text.</p>
<p>Here is some normal text that is neither boring nor exciting.</p>
<p class="exciting-text">
  Contributing to MDN is easy and fun. Just hit the edit button to add new live
  samples, or improve existing samples.
</p>
```

```css
.exciting-text::after {
  content: "<- now this *is* exciting!";
  color: green;
}

.boring-text::after {
  content: "<- BORING!";
  color: red;
}
```

#### Visualização

{{EmbedLiveSample('Uso_simples', 500, 150)}}

### Exemplos decorativos

Podemos estilizar textos ou imagens na propriedade {{cssxref("content")}} praticamente de qualquer forma que quisermos.

```html
<span class="ribbon">Observe onde a caixa de laranja está.</span>
```

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::after {
  content: "Observe esta caixa laranja";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Visualização

{{EmbedLiveSample('Exemplos_decorativos', 450, 20)}}

### Dicas

O exemplo a seguir mostra o uso do `::after` [pseudo-elemento](/pt-BR/docs/Web/CSS/Pseudo-elementos) em conjunto com a expressão CSS [`attr()`](/pt-BR/docs/Web/CSS/attr) e um [atributo data personalizado](/pt-BR/docs/Web/HTML/Global_attributes#attr-dataset) `data-descr` para criar uma _dica_ em forma de glossário feito em CSS puro. Verifique a visualização abaixo, ou veja este exemplo em [página separada.](/files/4591/css-only_tooltips.html)

```html
<p>
  Aqui está o exemplo ao vivo do código acima.<br />
  Temos um pouco de
  <span data-descr="collection of words and punctuation">texto</span> aqui com
  algumas
  <span data-descr="small popups which also hide again">dicas</span>.<br />
  Não seja tímido, passe o mouse por cima para dar uma
  <span data-descr="not to be taken literally">olhada</span>.
</p>
```

```css
span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00f;
  cursor: help;
}

span[data-descr]:hover::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### Visualização

{{EmbedLiveSample('Dicas', 450, 120)}}

## Especificações

| Especificação                                                                                          | Status                            | Comentário                                                        |
| ------------------------------------------------------------------------------------------------------ | --------------------------------- | ----------------------------------------------------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#selectordef-after', '::after')}}                                  | {{Spec2('CSS4 Pseudo-Elements')}} | Sem mudanças significativas em relação à especificação anterior.  |
| {{Specname("CSS3 Transitions", "#animatable-properties", "transitions on pseudo-element properties")}} | {{Spec2("CSS3 Transitions")}}     | Permite transições em propriedades definidas em pseudo-elementos. |
| {{Specname("CSS3 Animations", "", "animations on pseudo-element properties")}}                         | {{Spec2("CSS3 Animations")}}      | Permite animações em propriedades definidas em pseudo-elementos.  |
| {{SpecName('CSS3 Selectors', '#gen-content', '::after')}}                                              | {{Spec2('CSS3 Selectors')}}       | Introduz a sintaxe de dois sinais de dois pontos.                 |
| {{SpecName('CSS2.1', 'generate.html#before-after-content', '::after')}}                                | {{Spec2('CSS2.1')}}               | Definição inicial, usando a sintaxe de um sinal de dois pontos.   |

## Compatibilidade com navegadores

{{Compat("css.selectors.after")}}

## Veja também

- {{Cssxref("::before")}}, {{cssxref("content")}}
