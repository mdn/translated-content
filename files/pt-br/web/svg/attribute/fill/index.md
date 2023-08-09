---
title: fill
slug: Web/SVG/Attribute/fill
---

{{SVGRef}}O atributo **`fill`** pode ter duas diferentes interpretações. Para formas e textos, é definido como um atributo de apresentação que define a cor (ou qualquer modelo de pintura SVG como gradientes ou padrões) utilizada para colorir um elemento; para animações ele é quem define o estado final de uma animação.

Como um atributo de apresentação, ele pode ser aplicado a qualquer elemento, mas só tem efeito nestes onze elementos seguintes: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, e {{SVGElement('tspan')}}.

Para animação, apenas cinco elementos utilizam este atributo, sendo elas: {{SVGElement('animate')}}, {{SVGElement('animateColor')}}, {{SVGElement('animateMotion')}}, {{SVGElement('animateTransform')}}, e {{SVGElement('set')}}.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="https://www.w3.org/2000/svg">
  <!-- Preenchimento simples com apenas uma cor -->
  <circle cx="50" cy="50" r="40" fill="pink" />

  <!-- Preenchimento do circulo com gradiente -->
  <defs>
    <radialGradient id="myGradient">
      <stop offset="0%" stop-color="pink" />
      <stop offset="100%" stop-color="black" />
    </radialGradient>
  </defs>

  <circle cx="150" cy="50" r="40" fill="url(#myGradient)" />

  <!--
   Mantendo o estado final de um círculo animado
   sendo um círculo com o raio de 40px.
  -->
  <circle cx="250" cy="50" r="20">
    <animate
      attributeType="XML"
      attributeName="r"
      from="0"
      to="40"
      dur="5s"
      fill="freeze" />
  </circle>
</svg>
```

{{EmbedLiveSample('topExample', '100%', 200)}}

## altGlyph

> **Aviso:** a partir da versão SVG2, a tag {{SVGElement('altGlyph')}} está obsoleta e não deve ser utilizada.

Para {{SVGElement('altGlyph')}}, `fill` é a apresentação do atributo que define a coloração de um glifo (figura, ícone, simbolo).

| Valor        | **[\<paint>](/docs/Web/SVG/Content_type#Paint)** |
| ------------ | ------------------------------------------------ |
| Valor Padrão | `black`                                          |
| Animável     | Sim                                              |

> **Nota:** Por ser um atributo de apresentação, `fill` pode ser usado como uma propriedade CSS.

## animate

Para {{SVGElement('animate')}}, o atributo `fill` define o estado final de uma animação.

| Valor        | `freeze` (_Mantém o estado do último quadro de animação_) \| `remove` (_Mantém o estado do primeiro quadro de animação_) |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Valor Padrão | `remove`                                                                                                                 |
| Animável     | Não                                                                                                                      |

## animateColor

> **Aviso:**A partir da versão de animação para modelos SVG2 {{SVGElement('animateColor')}} está obsoleto e não deve ser utilizado. Ao invés disso utilize {{SVGElement('animate')}}.

Para {{SVGElement('animateColor')}}, o atributo `fill` define o estado final de uma animação.

| Valor        | `freeze` (_Mantém o estado do último quadro de animação_) \| `remove` (_Mantém o estado do primeiro quadro de animação_) |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Valor Padrão | `remove`                                                                                                                 |
| Animável     | Não                                                                                                                      |

## animateMotion

Para {{SVGElement('animateMotion')}}, o atributo `fill` define o estado final de uma animação.

| Valor        | `freeze` (_Mantém o estado do último quadro de animação_) \| `remove` (_Mantém o estado do primeiro quadro de animação_) |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Valor Padrão | `remove`                                                                                                                 |
| Animável     | Não                                                                                                                      |

## animateTransform

Para {{SVGElement('animateTransform')}}, o atributo `fill` define o estado final de uma animação.

| Valor        | `freeze` (_Mantém o estado do último quadro de animação_) \| `remove` (_Mantém o estado do primeiro quadro de animação_) |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Valor Padrão | `remove`                                                                                                                 |
| Animável     | Não                                                                                                                      |

## circle

Para {{SVGElement('circle')}}, `fill` é o atributo de apresentação utilizado para definir a coloração de um círculo.

| Valor        | **[\<paint>](/docs/Web/SVG/Content_type#Paint)** |
| ------------ | ------------------------------------------------ |
| Valor Padrão | `black`                                          |
| Animável     | Sim                                              |

> **Nota:** Por ser um atributo de apresentação, `fill` pode ser usado como uma propriedade CSS.

## ellipse

Para {{SVGElement('ellipse')}}, `fill` é o atributo de apresentação utilizado para definir a cor de uma elipse.

| Valor        | **[\<paint>](/docs/Web/SVG/Content_type#Paint)** |
| ------------ | ------------------------------------------------ |
| Valor Padrão | `black`                                          |
| Animável     | Sim                                              |

> **Nota:** Por ser um atributo de apresentação, `fill` pode ser usado como uma propriedade CSS.

## path

Para {{SVGElement('path')}}, `fill` é um atributo de apresentação que define a coloração do interior de uma forma. (O interior é definido pelo atributo _{{SVGAttr('fill-rule')}}_).

| Valor        | **[\<paint>](/docs/Web/SVG/Content_type#Paint)** |
| ------------ | ------------------------------------------------ |
| Valor Padrão | `black`                                          |
| Animável     | Sim                                              |

> **Nota:** Por ser um atributo de apresentação, `fill` pode ser usado como uma propriedade CSS.

## polygon

Para {{SVGElement('polygon')}}, `fill` é um atributo de apresentação que define a coloração do interior de uma forma. (O interior é definido pelo atributo _{{SVGAttr('fill-rule')}}_).

| Valor        | **[\<paint>](/docs/Web/SVG/Content_type#Paint)** |
| ------------ | ------------------------------------------------ |
| Valor padrão | `black`                                          |
| Animável     | Sim                                              |

> **Nota:** Por ser um atributo de apresentação, `fill` pode ser usado como uma propriedade CSS.

## polyline

For {{SVGElement('polyline')}}, `fill` é um atributo de apresentação que define a coloração do interior de uma forma. (O interior é definido pelo atributo _{{SVGAttr('fill-rule')}}_).

| Valor        | **[\<paint>](/docs/Web/SVG/Content_type#Paint)** |
| ------------ | ------------------------------------------------ |
| Valor Padrão | `black`                                          |
| Animável     | Sim                                              |

> **Nota:** Por ser um atributo de apresentação, `fill` pode ser usado como uma propriedade CSS.

## rect

Para {{SVGElement('rect')}}, `fill` é o atributo de apresentação utilizado para definir a cor de um retângulo.

| Valor        | **[\<paint>](/docs/Web/SVG/Content_type#Paint)** |
| ------------ | ------------------------------------------------ |
| Valor Padrão | `black`                                          |
| Animável     | Sim                                              |

> **Nota:** Por ser um atributo de apresentação, `fill` pode ser usado como uma propriedade CSS.

## set

Para {{SVGElement('set')}}, o atributo `fill` define o estado final de uma animação.

| Valor        | `freeze` (_Mantém o estado do último quadro de animação_) \| `remove` (_Mantém o estado do primeiro quadro de animação_) |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Valor Padrão | `remove`                                                                                                                 |
| Animável     | Não                                                                                                                      |

## text

Para {{SVGElement('text')}}, `fill` é o atributo de apresentação utilizado para definir a cor de um texto.

| Valor        | **[\<paint>](/docs/Web/SVG/Content_type#Paint)** |
| ------------ | ------------------------------------------------ |
| Valor Padrão | `black`                                          |
| Animável     | Sim                                              |

> **Nota:** Por ser um atributo de apresentação, `fill` pode ser usado como uma propriedade CSS.

## textPath

For {{SVGElement('textPath')}}, `fill` é o atributo de apresentação utilizado para definir a cor de um texto

| Valor        | **[\<paint>](/docs/Web/SVG/Content_type#Paint)** |
| ------------ | ------------------------------------------------ |
| Valor Padrão | `black`                                          |
| Animável     | Sim                                              |

> **Nota:** Por ser um atributo de apresentação, `fill` pode ser usado como uma propriedade CSS.

## tref

> **Aviso:** a partir da versão SVG2, a tag {{SVGElement('tref')}} está obsoleta e não deve ser utilizada.

Para {{SVGElement('tref')}}, `fill` é o atributo de apresentação utilizado para definir a cor de um texto

| Valor        | **[\<paint>](/docs/Web/SVG/Content_type#Paint)** |
| ------------ | ------------------------------------------------ |
| Valor Padrão | `black`                                          |
| Animável     | Sim                                              |

> **Nota:** Por ser um atributo de apresentação, `fill` pode ser usado como uma propriedade CSS.

## tspan

Para {{SVGElement('tspan')}}, `fill` é o atributo de apresentação utilizado para definir a cor de um texto

| Valor        | **[\<paint>](/docs/Web/SVG/Content_type#Paint)** |
| ------------ | ------------------------------------------------ |
| Valor Padrão | `black`                                          |
| Animável     | Sim                                              |

> **Nota:** Por ser um atributo de apresentação, `fill` pode ser usado como uma propriedade CSS.

## Especificações

| Especificação                                                   | Status                        | Nota                                                                        |
| --------------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------------- |
| {{SpecName("SVG Animations 2", "#FillAttribute", "transform")}} | {{Spec2("SVG Animations 2")}} | Definição para animações                                                    |
| {{SpecName("SVG2", "painting.html#FillProperty", "fill")}}      | {{Spec2("SVG2")}}             | Definição para formas e textos. Adiciona `context-fill` e `context-stroke`. |
| {{SpecName("SVG1.1", "animate.html#FillAttribute", "fill")}}    | {{Spec2("SVG1.1")}}           | Definição inicial para animações                                            |
| {{SpecName("SVG1.1", "painting.html#FillProperty", "fill")}}    | {{Spec2("SVG1.1")}}           | Definição inicial para formas e textos.                                     |

## Compatibilidade com navegadores

{{Compat("svg.attributes.presentation.fill")}}

> **Nota:** Nota: Para obter informações do uso do `context-fill` (e do `context-stroke`) de documentos HTML, consulte a documentação da propriedade não-padrão {{cssxref("-moz-context-properties")}} .
