---
title: border-left
slug: Web/CSS/border-left
translation_of: Web/CSS/border-left
---
{{CSSRef}}

## Resumo

O propriedade **`border-left`** [CSS](/en/CSS "CSS") é um atalho que define os valores de {{ Cssxref("border-left-color") }}, {{ Cssxref("border-left-style") }}, e {{ Cssxref("border-left-width") }}. Estas propriedades descrevem a borda esquerda de elementos.

Os três valores da propriedade estenográfica pode ser especificada em qualquer ordem, e um ou dois deles podem ser omitidos.

<div class="note">Tal como acontece com todas as propriedades abreviadas, fronteira esquerda sempre define os valores de todas as propriedades que podem ser definidas, ainda que não são especificadas. Ele define aqueles que não são especificados para os valores padrão. Isso significa que:<pre class="brush: css">  border-left-style: dotted;
  border-left: thick green;
</pre><p>é o mesmo que</p><pre class="brush: css">  border-left-style: dotted;
  border-left: none thick green;
</pre><p>e o valor de {{ Cssxref("border-left-style") }} dado antes <code>border-left é ignorado</code>.</p><p>Uma vez que o valor padrão de {{ Cssxref("border-left-style") }} é <code>none</code>, não especificando o border-style parte do valor significa que a propriedade especifica o valor padrão que é none e não significa nenhum border.</p></div>

{{cssinfo}}

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

```css
border-left: 1px;
border-left: 2px dotted;
border-left: medium dashed green;
```

### Valores

- `<br-width> `
  - : Veja {{ Cssxref("border-left-width") }}.
- `<br-style> `
  - : Veja {{ Cssxref("border-left-style") }}.
- `<color> `
  - : Veja {{ Cssxref("border-left-color") }}.

### Sintaxe formal

{{csssyntax}}

<h2 id="Example" name="Example">Exemplo</h2>

### HTML

```html
<div class='box'>
  <p>This box has a border on the left side.</p>
</div>
```

### CSS

```css
.box {
  background-color: #ffaabb;
  border-left: 4px solid #000;
  height: 100px;
  width: 100px;
}

.box p {
  font-weight: bold;
  text-align: center;
}
```

{{ EmbedLiveSample('Example') }}

<h2 id="Specifications" name="Specifications">Especificações</h2>

| Especificação                                                                                    | Status                                   | Comentário                                                                                                                               |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('CSS3 Backgrounds', '#border-left', 'border-left') }}         | {{ Spec2('CSS3 Backgrounds') }} | Não ocorreram alterações diretas, através da alteração dos valores para o {{ cssxref("border-left-color") }} se aplicam a ele. |
| {{ SpecName('CSS2.1', 'box.html#propdef-border-left', 'border-left') }} | {{ Spec2('CSS2.1') }}             | Sem alterações significativas                                                                                                            |
| {{ SpecName('CSS1', '#border-left', 'border-left') }}                         | {{ Spec2('CSS1') }}                 | Definição inicial                                                                                                                        |

<h2 id="Browser_compatibility" name="Browser_compatibility">Compatibilidade do browser</h2>

{{CompatibilityTable}}

<div id="compat-desktop"><table class="compat-table"><tbody><tr><th>Característica</th><th>Chrome</th><th>Firefox (Gecko)</th><th>Internet Explorer</th><th>Opera</th><th>Safari (WebKit)</th></tr><tr><td>Suporte básico</td><td>1.0</td><td>{{ CompatGeckoDesktop("1.0") }}</td><td>4</td><td>3.5</td><td>1.0 (85)</td></tr></tbody></table></div>

<div id="compat-mobile"><table class="compat-table"><tbody><tr><th>Característica</th><th>Android</th><th>Firefox Mobile (Gecko)</th><th>IE Phone</th><th>Opera Mobile</th><th>Safari Mobile</th></tr><tr><td>Suporte básico</td><td>1.0</td><td>{{ CompatGeckoMobile("1.0") }}</td><td>{{ CompatVersionUnknown() }}</td><td>{{ CompatVersionUnknown() }}</td><td>{{ CompatVersionUnknown() }}</td></tr></tbody></table></div>
