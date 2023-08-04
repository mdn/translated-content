---
title: SVG
slug: Glossary/SVG
---

_Scalable Vector Graphics_ (**SVG**) é um formato de imagem vetorial 2D baseado em uma sintaxe {{Glossary("XML")}}.

A {{Glossary("W3C")}} iniciou o trabalho no SVG no final dos anos 1990, mas o SVG só se tornou popular quando o {{Glossary("Microsoft Internet Explorer", "Internet Explorer")}} 9 foi lançado com suporte a SVG. Atualmente a maioria dos {{Glossary("browser","navegadores")}} suportam SVG.

Baseado na sintaxe de {{Glossary("XML")}}, SVG pode ser estilizado com {{Glossary("CSS")}} e apresentar interatividade usando {{Glossary("JavaScript")}}. Em HTML5 é possível embutir diretamente {{Glossary("Tag","tags")}} SVG em um documento {{Glossary("HTML")}}.

Sendo um formato para [gráficos vetoriais](https://pt.wikipedia.org/wiki/Desenho_vetorial), imagens SVG podem ser redimensionadas infinitamente, tendo um valor inestimável em {{Glossary("responsive design","design responsivo")}}, já que você pode criar elementos de interface e gráficos que se comportam bem em qualquer tamanho de tela. SVG também traz um conjunto de funcionalidades úteis, como clipping, máscaras, filtros e animações.

## Exemplo

Abaixo você pode conferir a renderização de dois círculos de tamanhos e cores diferentes utilizando SVG.

```xml
<svg width="100" height="300">
   <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="10" fill="red" />
   <circle cx="50" cy="150" r="20" stroke="green" stroke-width="10" fill="yellow" />
</svg>
```

Repare que `cx` e `cy` são para definir as coordenadas x e y do círculo, `r` é para definir o raio do círculo, o preenchimento é definido com `fill`, a largura do contorno é definida com `stroke-width` e a cor do contorno é definida com `stroke`. Lembrando que a largura e altura do `svg` em si são definidas no próprio elemento.

## Saiba mais

### Conhecimento Geral

- [SVG](https://pt.wikipedia.org/wiki/SVG) na Wikipedia

### Aprendendo SVG

- [W3.org's SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html) (em inglês)

### Informação técnica

- [Documentação sobre SVG na MDN](/pt-BR/docs/Web/SVG)
- [Especificação SVG mais recente](https://www.w3.org/TR/SVG/) (em inglês)
