---
title: text-rendering
slug: Web/CSS/text-rendering
---

{{ CSSRef() }}

## Sumário

A propriedade CSS `text-rendering` provê informações para o mecanismo de renderização sobre o que otimizar no momento em que ele renderiza texto. O navegador faz escolhas entre velocidade, legibilidade e precisão geométrica. A propriedade `text-rendering` é uma propriedade SVG que não é definida em nenhum padrão CSS. Porém, navegadores Gecko e WebKit permitem o uso da propriedade em conteúdos HTML e XML nas plataformas Windows, Mac OS X e Linux.

Um efeito bastante visível é o `optimizeLegibility`, que habilita ligaduras (ff, fi, fl etc.) para algumas fontes com o texto menores que 20px como, por exemplo, fontes da Microsoft (_Calibri, Candara, Constantia_ e _Corbel_ ou a família de fontes _DejaVu_).

{{cssinfo}}

## Syntax

```
text-rendering:  auto | optimizeSpeed | optimizeLegibility | geometricPrecision | inherit
```

### Valores

- `auto`
  - : O navegador faz sugestões de quando otimizar velocidade, legibilidade e precisão geométrica enquando formata o texto. Para diferenças em como esse valor é interpretado pelo navegador, veja a tabela de compatibilidades.
- `optimizeSpeed`
  - : O navegador prioriza a velocidade de renderização sobre a legibilidade e precisão geométrica no momento de rederização do texto. Essa opção desabilita o kerning1 e ligatures2.
- `optimizeLegibility`
  - : O navegador prioriza legibilidade sobre a velocidade de renderização e precisão geométrica. Essa propriedade habilita o kerning e ligatures opcionais.
- `geometricPrecision`

  - : O browser prioriza a precisão geométrica sobre a velocidade de renderização e legibilidade. Alguns aspectos de fontes - tais como kerning - não se escala linearmente e, dessa forma, `geometricPrecision` pode tornar essas fontes visualmente boas.

    Em SVG, quando o texto é escalado para cima ou para baixo, os navegadores calculam o tamanho final do texto (que é o tamanho de fonte específicado e a escala aplicada) e requer uma fonte de tamanho computado à partir das fontes do sistema. Mas se você requer um tamanho de fonte de, digamos, 9 com a escala de 140%, o resultado do tamanho da fonte de 12.6 não explicitamente existe no sistema, então o browser ira arredondar o tamanho da fonte para 12.

    Mas a propriedade `geometricPrecision` - quando totalmente surpotada pelo mecanismo de renderização - deixa você escalar seu texto fluidamente. Para fatores de larga escala, você pode ver uma renderização de texto não tão bonita, mas com o tamanho esperado - nem arredondado para cima ou para baixo para o mais próximo tamanho suportado pelo sistema Windows ou Linux.

    Navegadores WebKit precisamente aplicam o valor específico, mas os navegadores Gecko tratam o esse valor como `optimizeLegibility`.

## Exemplos

```css
/* make sure all fonts in the HTML document display in all its glory,
   but avoid inadequate ligatures in class foo elements */

body {
  text-rendering: optimizeLegibility;
}
.foo {
  text-rendering: optimizeSpeed;
}
```

#### Live Example

| CSS code                                                                 | Kerning | Ligatures    |
| ------------------------------------------------------------------------ | ------- | ------------ |
| font: 19.9px 'DejaVu Serif',Constantia;                                  | LYoWAT  | ff fi fl ffl |
| font: 20px 'DejaVu Serif',Constantia;                                    | LYoWAT  | ff fi fl ffl |
| font: 3em 'DejaVu Serif',Constantia; text-rendering: optimizeSpeed;      | LYoWAT  | ff fi fl ffl |
| font: 3em 'Dejavu Serif',Constantia; text-rendering: optimizeLegibility; | LYoWAT  | ff fi fl ffl |

### Gecko Notes

O valor padrão de 20px para `auto` pode ser alterado na propriedade `browser.display.auto_quality_min_font_size` do navegador.

A opção optimizeSpeed não tem efeito na versão 2.0 do Gecko, devido ao código padrão de renderização de texto que já é muito rápido e não existe até o momento um código mais rápido para esse trabalho. Veja detalhes em {{ bug(595688) }}.

## Especificações

| Specification                                                                     | Status                | Comment |
| --------------------------------------------------------------------------------- | --------------------- | ------- |
| {{ SpecName('SVG1.1', 'painting.html#TextRenderingProperty', 'text-rendering') }} | {{ Spec2('SVG1.1') }} |         |

Essa é uma especificação SVG, e não é definida em nenhum padrão CSS. Gecko (Firefox) e WebKit aplicam a propriedade `text-rendering` para códigos HTML e XML.

## Compatibilidade com navegadores

{{Compat("css.properties.text-rendering")}}
