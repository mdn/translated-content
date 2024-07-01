---
title: CSS Grid Layout
slug: Web/CSS/CSS_grid_layout
---

{{CSSRef}}

> **Nota:** CSS Grid será suportado por vários navegadores até meados de 2017. O suporte em navegadores antigos pode ser obtido habilitando-se uma flag que permite o uso da API. Nesse caso não se esqueça de consultar e fazer referência a cada propriedade e funcionalidade da especificação para certificar-se da sua compatibilidade, bem como para obter maiores informações.

**CSS Grid layout** é uma especificação do W3C projetada para proporcionar um método bi-dimensional para criação de layout CSS que oferece a possibilidade de "layoutar" itens da página com uso de linhas e colunas. CSS grid poderá ser usado para obter uma infinidade de diferentes layouts. O diferencial desse método de criação de layouts reside na possibilidade de se dividir uma página em grandes regiões e de se definir o relacionamento em termos de medidas, posicionamento e camadas entre os diferentes componentes da marcação HTML.

Tal como as tabelas, grid layout permite ao autor alinhar os componentes da página fazendo uso de linhas e colunas. Contudo ao contrário das tabelas, grid layout não se baseia em estruturação de conteúdos, possibilitando uma enorme variedade de layouts, o que não é possível de se obter com uso de tabelas. Por exemplo: elementos filhos de um grid container podem ser posicionados à vontade se sobrepondo ou mudando de layer, de modo idêntico como se faz com uso das funcionalidades do nosso já conhecido posicionamento CSS.

## Exemplo básico

### HTML

```html
<div class="wrapper">
  <div class="box a">a</div>
  <div class="box b">b</div>
  <div class="box c">c</div>
  <div class="box d">d</div>
  <div class="box e">e</div>
  <div class="box f">f</div>
</div>
```

### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
}

.box {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
}
```

## Referência

### Propriedades CSS

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("grid")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-area")}}
- {{cssxref("grid-row-gap")}}
- {{cssxref("grid-column-gap")}}
- {{cssxref("grid-gap")}}

### Funções CSS

- {{cssxref("repeat", "repeat()")}}
- {{cssxref("minmax", "minmax()")}}

### Glossário

- [Grid Lines](/pt-BR/docs/Glossary/Grid_Lines)
- [Grid Tracks](/pt-BR/docs/Glossary/Grid_Tracks)
- [Grid Cell](/pt-BR/docs/Glossary/Grid_Cell)
- [Grid Area](/pt-BR/docs/Glossary/Grid_Areas)
- [Gutters](/pt-BR/docs/Glossary/Gutters)
- [Grid row](/pt-BR/docs/Glossary/Grid_Rows)
- [Grid column](/pt-BR/docs/Glossary/Grid_Column)

## Guias

- [Conceitos básicos de Grid Layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Relação do Grid Layout com outros métodos de layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Layout usando grid lines nomeadas](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Grid template areas](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Posicionamento Automático CSS Grid Layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Alinhamento Box no CSS Grid Layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [CSS Grid, Valores Lógicos e Modos de Escrita](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- [CSS Grid Layout e Acessibilidade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid e Aprimoramento Progressivo](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Realizando layouts comuns usando CSS Grid](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Realising_common_layouts_using_CSS_Grid_)

## Especificações

{{Specifications}}

## Veja também

- Glossário:

  - [Grid lines](/pt-BR/docs/Glossary/Grid_lines)
  - [Grid tracks](/pt-BR/docs/Glossary/Grid_tracks)
  - [Grid cell](/pt-BR/docs/Glossary/Grid_cell)
  - [Grid areas](/pt-BR/docs/Glossary/Grid_areas)
  - [Gutters](/pt-BR/docs/Glossary/Gutters)
  - [Grid row](/pt-BR/docs/Glossary/Grid_rows)
  - [Grid column](/pt-BR/docs/Glossary/Grid_column)
