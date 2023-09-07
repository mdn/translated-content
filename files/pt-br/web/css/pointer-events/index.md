---
title: pointer-events
slug: Web/CSS/pointer-events
---

{{CSSRef}}

## Resumo

A propriedade CSS `pointer-events` permite autores controlarem sob qualquer circustancia(se houver) um elemento gráfico particular podendo ser o [alvo](/pt-BR/docs/Web/API/event.target) do evento do mouse. Quando essa propriedade não é especificada, as mesmas características do valor `visiblePainted` é aplicada no conteúdo SVG.``

Além de indicar que este elemento não é o alvo do evento do mouse, o valor `none` instrui o evento do mouse a "passar" o elemento e tudo que está "abaixo" deste elemento.

{{cssinfo}}

## Sintaxe

```css
pointer-events: auto;
pointer-events: none;
pointer-events: visiblePainted;
pointer-events: visibleFill;
pointer-events: visibleStroke;
pointer-events: visible;
pointer-events: painted;
pointer-events: fill;
pointer-events: stroke;
pointer-events: all;

pointer-events: inherit;
```

### Valores

- `auto`
  - : O elemento se comporta como se a propriedade `pointer-events` não fosse especificada. Em conteúdo SVG, esse valor e o valor `visiblePainted` tem o mesmo efeito.
- `none`
  - : O elemento nunca é o [alvo](/pt-BR/docs/Web/API/event.target) de eventos do mouse; contudo, o evento do mouse pode direcionar seus elementos descendentes se esses descendentes tiverem algum outro valor configurado no `pointer-events.` Nessas circunstâncias, os eventos do mouse vão acionar eventos de escuta em seus elementos pai conforme apropriado no seu caminho de/para o descendente, durante as fases do evento captura/[borbulha.](/pt-BR/docs/Web/API/event.bubbles)
- `visiblePainted`
  - : Apenas SVG. O elemento pode apenas ser alvo de um evento de mouse quando a propriedade `visibility` é definida como `visible` e quando o cursor do mouse estiver sobre o interior (exemplo: "preenchimento") do elemento e a propriedade `fill` tiver um valor exceto `none`, ou quando o cursor do mouse estiver sobre o perímetro(exemplo: "linha") do elemento e a propriedade `stroke` estiver definida com um valor exceto `none`.
- `visibleFill`
  - : Apenas SVG. O elemento apenas pode ser o alvo de um evento mouse quando a propriedade `visibility` é definida como `visible` e quando o cursor do mouse estiver sobre o interior (exemplo: "preenchimento") do elemento. O valor da propriedade `fill` não afeta o processamento dos eventos.
- `visibleStroke`
  - : Apenas SVG. O elemento apenas pode ser o alvo de um evento do mouse quando a propriedade `visibility` é definida como `visible` e quando o cursor do mouse estiver sobre o perímetro (exemplo: "linha") do elemento. O valor da propriedade `stroke` não afeta o processamento do evento.
- `visible`
  - : Apenas SVG. O elemento pode ser o alvo de um evento de mouse quando a propriedade `visibility` é definida como `visible` e o cursor do mouse estiver sobre ou no interior (exemplo: preenchimento) ou perímetro (exemplo: linha) do elemento. O valor do `fill` e `stroke` não afeta o processamento do evento.
- `painted`
  - : Apenas SVG. O elemento apenas pode ser o alvo de um evento do mouse quando o cursor do mouse estiver sobre o interior (exemplo: "preenchimento") do elemento e a propriedade `fill` definida com valor diferente de `none`, ou quando o cursor do mouse estiver no perímetro(exemplo: "linha") do elemento e a propriedade `stroke` definida com valor diferente de `none`. O valor da propriedade `visibility` não afeta o processamento do evento.
- `fill`
  - : Apenas SVG. O elemento apenas pode ser o alvo de um evento do mouse quando o ponteiro estiver sobre o interior (exemplo: preenchimento) do elemento. Os valores das propriedades `fill` e `visibility` não afetam o processamento do evento.
- `stroke`
  - : Apenas SVG. O elemento apenas pode ser o alvo de um evento do mouse quando o ponteiro estiver sobre o perímetro (exemplo: linha) do elemento. Os valores das propriedades `stroke` e `visibility` não afetam o processamento do evento.
- `all`
  - : Apenas SVG. O elemento apenas pode ser alvo do evento do mouse quando o ponteiro estiver sobre o interior (exemplo: preenchimento) ou perímetro (exemplo: linha) do elemento. Os valores das propriedades `fill`, `stroke` e `visibility` não afetam o processamento do evento.

### Sintaxe formal

{{csssyntax("pointer-events")}}

## Exemplos

### Exemplo 1

```css
/* Exemplo 1: Fazer todas img não reagir a qualquer evento de mouse tal como arrastar, passar sobre, clique etc */
img {
  pointer-events: none;
}
```

### Exemplo 2

Makes the link to `http://example.com` non-reactive.

```html
<ul>
  <li><a href="https://developer.mozilla.org">MDN</a></li>
  <li><a href="http://example.com">example.com</a></li>
</ul>
```

```css
a[href="http://example.com"]
{
  pointer-events: none;
}
```

{{EmbedLiveSample('Example_2', "500", "100")}}

## Notas

Note que previnir um elemento de ser o alvo de eventos de mouse usando `pointer-events` não necessariamente quer dizer que o evento ouvinte do mouse desde elemento _não pode_ ou _não vai se_ desencadeado. Se um dos elementos filhos tem `pointer-events` explicitamente definidos para _permitir_ que o filho seja o alvo do evento do mouse, então qualquer evento direcionado para este filho vai passar através do pai como o evento se deslocando ao longo da cadeia pai, e os ouvintes do evento gatilho do pai conforme o caso. Claro que qualquer atividade do mouse em um ponto da tela que é coberto pelo pai, mas não pelo filho, não será capturado por qualquer filho ou pai (isso vai "através" do pai e qualquer alvo que está abaixo).

Nós gostaríamos de fornecer um controle de textura mais refinado (do que apenas `auto` e `none`) em HTML para que partes de um elemento fizessem com que os eventos mouse "capturem" , e quando. Para nos ajudar a decidir como `pointer-events` devem ser estendido para HTML, se você tem qualquer coisa particular que você gostaria de fazer com essa propriedade, então por favor adicione na seção Caso de Uso [dessa wiki page](https://wiki.mozilla.org/SVG:pointer-events) (não se preocupe sobre ficar organizado ).

Esta propriedade pode também ser usada para alcançar melhores taxas de quadros durante a rolagem. De fato, enquanto rola a página, o mouse passa sobre alguns elementos, então efeitos [hover](/pt-BR/docs/Web/CSS/:hover) se aplicam. Contudo, esses efeitos são muitas vezes despercebidas pelo usuário e principalmente resultam em uma rolagem ruim. Aplicar `pointer-events: none` no `body` desabilita eventos de mouse incluindo hover que resultam em uma performance melhor de rolagem.

## Especificações

| Especificações                                                                  | Status              | Comentário |
| ------------------------------------------------------------------------------- | ------------------- | ---------- |
| {{SpecName('SVG1.1', 'interact.html#PointerEventsProperty', 'pointer-events')}} | {{Spec2('SVG1.1')}} |            |

Se extende para elementos HTML, embora presente nos primeiros rascunhos do Módulo Básico de Interface do Usuário do CSS nivel 3, foi empurrado para o [nível 4](http://wiki.csswg.org/spec/css4-ui#pointer-events).

## Compatibilidade do navegador

{{Compat("css.properties.pointer-events")}}

## Veja também

- The SVG attribute {{SVGAttr("pointer-events")}}
- [WebKit Specs PointerEventsProperty](http://webkit.org/specs/PointerEventsProperty.html) extended for use in (X)HTML content
- [60fps scrolling using pointer-events: none](http://www.thecssninja.com/javascript/pointer-events-60fps)
