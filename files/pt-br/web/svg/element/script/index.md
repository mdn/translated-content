---
title: script
slug: Web/SVG/Element/script
---

Um elemento `script` é equivalente a um elemento [`script`](/pt-BR/HTML/Element/Script) em HTML e, portanto, é o lugar para os scripts (por exemplo, ECMAScript).

Quaisquer funções definidas dentro de qualquer elemento `script` tem um escopo global em todo o documento atual.

## Contexto de uso

{{svginfo}}

## Exemplo

O seguinte trecho de código demonstra o uso da tag `script` do SVG. Neste código, nós usamos o JavaScript para alterar o raio do elemento SVG {{SVGElement("circle")}}.

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 100 100"
  xmlns="https://www.w3.org/2000/svg">
  <script type="text/javascript">
    // <![CDATA[
    function change(evt) {
      var target = evt.target;
      var radius = target.getAttribute("r");

      if (radius == 15) {
        radius = 45;
      } else {
        radius = 15;
      }

      target.setAttribute("r", radius);
    }
    // ]]>
  </script>

  <circle cx="50" cy="50" r="45" fill="green" onclick="change(evt)" />
</svg>
```

Resultado:

{{EmbedLiveSample("Exemplo",150,165)}}

## Atributos

### Atributos globais

- [Atributos principais](/pt-BR/SVG/Attribute#Core) »
- [Atributos XLink](/pt-BR/SVG/Attribute#XLink) »
- {{SVGAttr("externalResourcesRequired")}}

### Atributos específicos

- {{SVGAttr("type")}}
- {{SVGAttr("xlink:href")}}

## DOM interface

Este elemento implementa a interface do [`SVGScriptElement`](/pt-BR/DOM/SVGScriptElement).

## Compatibilidade com navegadores

{{Compat("svg.elements.script")}}

## Veja também

- [Elemento `script` em HTML](/pt-BR/HTML/Element/Script)

{{SVGRef}}
