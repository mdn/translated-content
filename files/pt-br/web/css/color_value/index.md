---
title: <color>
slug: Web/CSS/color_value
---

{{CSSRef}}

## Sumário

O tipo de dado [CSS](/pt-BR/docs/Web/CSS) `<color>` indica uma [cor no espaço sRGB](https://en.wikipedia.org/wiki/SRGB). Uma cor pode ser descrita em qualquer uma destas formas:

- usando uma _palavra-chave_
- usando o sistema de [coordenada-cúbica RGB](https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation) (via #-hexadecimal ou das notações funcional `rgb()` e `rgba()`)
- usando o sistema de [coordenada-cilíndrica HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) (via `hsl()` e notações funcionais `hsla()` )

Observe que a lista de valores de cores aceitas foi estendida à medida que a especificação evoluiu, culminando com as cores CSS3 mais recentes.

Associado à cor no espaço sRGB, um valor \<color> também pode consistir de uma coordenada de _valor de transparência_ [canal-alfa](https://en.wikipedia.org/wiki/Alpha_compositing), Indicando como a cor deve se [composta](https://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending) com sua cor de fundo.

Embora os valores de cores CSS sejam definidos com precisão, eles podem aparecer de forma diferente em dispositivos de saída diferentes. A maioria deles não está calibrada e alguns navegadores não suportam o [perfil de cores](https://pt.wikipedia.org/wiki/Perfil_de_cores_ICC) dos dispositivos de saída. Sem estes, a renderização de cores pode variar muito.

> **Nota:** A recomendação [WCAG 2.0](https://www.w3.org/TR/WCAG/#visual-audio-contrast) do W3C aconselha fortemente aos autores web não usarem cor como o único meio para transmitir uma mensagem específica, ação ou resultado. Alguns usuários têm problemas em distinguir cores e as informações transmitidas podem não ser compreendidas. Claro, isso não impede o uso da cor, mas o seu uso apenas como o único meio para descrever certas coisas (veja [Cor e contraste de cor](/pt-BR/docs/Learn/Accessibility/CSS_and_JavaScript#Color_and_color_contrast) para mais informações).

## Interpolação

Valores do tipo de dados CSS `<color>` podem ser interpolados para realizar animações ou para criar valores \<gradient>. Nesse caso, eles são interpolados em cada um de seus componentes vermelho, verde, azul, cada um manipulado como um número real, de ponto flutuante. Observe que a interpolação de cores ocorre no [espaço de cores sRGBA alfa-pré-multiplicado](https://www.gimp.org/docs/plug-in/appendix-alpha.html) para evitar que cores cinzentas inesperadas apareçam. Nas animações, a velocidade da interpolação é determinada pela [função de temporização](/pt-BR/docs/Web/CSS/timing-function) associada à animação.

## Valores

Existem várias maneiras de descrever um valor <`color>`.

### Palavras-chave de cores

As palavras-chave de cor são identificadores não sensíveis a maiúsculas e minúsculas que representam uma cor específica, ex.: `red`, `blue`, `brown`, ou `lightseagreen`. O nome descreve a cor, embora seja principalmente artificial. A lista de valores aceitos variou muito ao longo das diferentes especificações:

- CSS nível 1 aceita apenas16 cores básicas, denominadas _cores VGA_ já que foram tiradas do conjunto de cores exibíveis das placas gráficas [VGA](https://pt.wikipedia.org/wiki/Video_Graphics_Array).
- CSS nível 2 Adicionou a palavra-chave `orange`.
- Desde o início, os navegadores aceitaram outras cores, principalmente a lista de cores nomeadas X11 já que alguns dos primeiros navegadores foram aplicações X11, embora com algumas diferenças. O SVG 1.0 foi o primeiro padrão a definir formalmente essas palavras-chave; As cores no CSS nível 3 também formalmente definiram essas palavras-chave. Elas são muitas vezes referidas como _palavras-chave de cor estendida_, _cores X11_ ou _cores SVG_.

Existem algumas restrições a serem consideradas ao usar palavras-chave:

- Com exceção das 16 cores básicas comuns com HTML, as outras não podem ser usadas em HTML. O HTML vai converter esses valores desconhecidos com um algoritmo específico levando a cores completamente diferentes. Essas palavras-chave só devem ser usadas em SVG & CSS.
- Palavras-chave desconhecidas tornam a propriedade CSS inválida. Propriedades inválidas sendo ignoradas, a cor não terá efeito. Esse é um comportamento diferente do HTML.
- Nenhuma palavra-chave de core definida em CSS têm qualquer transparência — eles são cores simples, sólidas.
- Várias palavras-chave indicam as mesmas cores:

  - `darkgray` / `darkgrey`
  - `darkslategray` / `darkslategrey`
  - `dimgray` / `dimgrey`
  - `lightgray` / `lightgrey`
  - `lightslategray` / `lightslategrey`
  - `gray` / `grey`
  - `slategray` / `slategrey`

- Embora os nomes das palavras-chave tenham sido tomadas pelos nomes de cores X11 habituais, a cor pode divergir da cor do sistema correspondente em sistemas X11 como estes são adaptados para o hardware específico pelo fabricante.

<table>
  <thead>
    <tr>
      <th scope="col">Especificação</th>
      <th scope="col">Cor</th>
      <th scope="col">Palavra-chave</th>
      <th scope="col">valores hex RGB</th>
      <th scope="col">Resultado</th>
    </tr>
  </thead>
  <tbody>
    <tr style="position: relative">
      <td rowspan="16">{{SpecName("CSS1")}}</td>
      <td style="background: #000"></td>
      <td style="text-align: center"><code>black</code></td>
      <td><code>#000000</code></td>
      <td style="background: black"></td>
    </tr>
    <tr>
      <td style="background: #c0c0c0"></td>
      <td style="text-align: center"><code>silver</code></td>
      <td><code>#c0c0c0</code></td>
      <td style="background: silver"></td>
    </tr>
    <tr>
      <td style="background: #808080"></td>
      <td style="text-align: center"><code>gray</code></td>
      <td><code>#808080</code></td>
      <td style="background: gray"></td>
    </tr>
    <tr>
      <td style="background: #fff"></td>
      <td style="text-align: center"><code>white</code></td>
      <td><code>#ffffff</code></td>
      <td style="background: white"></td>
    </tr>
    <tr>
      <td style="background: #800000"></td>
      <td style="text-align: center"><code>maroon</code></td>
      <td><code>#800000</code></td>
      <td style="background: maroon"></td>
    </tr>
    <tr>
      <td style="background: #f00"></td>
      <td style="text-align: center"><code>red</code></td>
      <td><code>#ff0000</code></td>
      <td style="background: red"></td>
    </tr>
    <tr>
      <td style="background: #800080"></td>
      <td style="text-align: center"><code>purple</code></td>
      <td><code>#800080</code></td>
      <td style="background: purple"></td>
    </tr>
    <tr>
      <td style="background: #f0f"></td>
      <td style="text-align: center"><code>fuchsia</code></td>
      <td><code>#ff00ff</code></td>
      <td style="background: fuchsia"></td>
    </tr>
    <tr>
      <td style="background: #008000"></td>
      <td style="text-align: center"><code>green</code></td>
      <td><code>#008000</code></td>
      <td style="background: green"></td>
    </tr>
    <tr>
      <td style="background: #0f0"></td>
      <td style="text-align: center"><code>lime</code></td>
      <td><code>#00ff00</code></td>
      <td style="background: lime"></td>
    </tr>
    <tr>
      <td style="background: #808000"></td>
      <td style="text-align: center"><code>olive</code></td>
      <td><code>#808000</code></td>
      <td style="background: olive"></td>
    </tr>
    <tr>
      <td style="background: #ff0"></td>
      <td style="text-align: center"><code>yellow</code></td>
      <td><code>#ffff00</code></td>
      <td style="background: yellow"></td>
    </tr>
    <tr>
      <td style="background: #000080"></td>
      <td style="text-align: center"><code>navy</code></td>
      <td><code>#000080</code></td>
      <td style="background: navy"></td>
    </tr>
    <tr>
      <td style="background: #00f"></td>
      <td style="text-align: center"><code>blue</code></td>
      <td><code>#0000ff</code></td>
      <td style="background: blue"></td>
    </tr>
    <tr>
      <td style="background: #008080"></td>
      <td style="text-align: center"><code>teal</code></td>
      <td><code>#008080</code></td>
      <td style="background: teal"></td>
    </tr>
    <tr>
      <td style="background: #0ff"></td>
      <td style="text-align: center"><code>aqua</code></td>
      <td><code>#00ffff</code></td>
      <td style="background: aqua"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS2.1")}}</td>
      <td style="background: #ffa500"></td>
      <td style="text-align: center"><code>orange</code></td>
      <td><code>#ffa500</code></td>
      <td style="background: orange"></td>
    </tr>
    <tr>
      <td rowspan="129">{{SpecName("CSS3 Colors")}}</td>
      <td style="background: #f0f8ff"></td>
      <td style="text-align: center"><code>aliceblue</code></td>
      <td><code>#f0f8ff</code></td>
      <td style="background: aliceblue"></td>
    </tr>
    <tr>
      <td style="background: #faebd7"></td>
      <td style="text-align: center"><code>antiquewhite</code></td>
      <td><code>#faebd7</code></td>
      <td style="background: antiquewhite"></td>
    </tr>
    <tr>
      <td style="background: #7fffd4"></td>
      <td style="text-align: center"><code>aquamarine</code></td>
      <td><code>#7fffd4</code></td>
      <td style="background: aquamarine"></td>
    </tr>
    <tr>
      <td style="background: #f0ffff"></td>
      <td style="text-align: center"><code>azure</code></td>
      <td><code>#f0ffff</code></td>
      <td style="background: azure"></td>
    </tr>
    <tr>
      <td style="background: #f5f5dc"></td>
      <td style="text-align: center"><code>beige</code></td>
      <td><code>#f5f5dc</code></td>
      <td style="background: beige"></td>
    </tr>
    <tr>
      <td style="background: #ffe4c4"></td>
      <td style="text-align: center"><code>bisque</code></td>
      <td><code>#ffe4c4</code></td>
      <td style="background: bisque"></td>
    </tr>
    <tr>
      <td style="background: #ffebcd"></td>
      <td style="text-align: center"><code>blanchedalmond</code></td>
      <td><code>#ffebcd</code></td>
      <td style="background: blanchedalmond"></td>
    </tr>
    <tr>
      <td style="background: #8a2be2"></td>
      <td style="text-align: center"><code>blueviolet</code></td>
      <td><code>#8a2be2</code></td>
      <td style="background: blueviolet"></td>
    </tr>
    <tr>
      <td style="background: #a52a2a"></td>
      <td style="text-align: center"><code>brown</code></td>
      <td><code>#a52a2a</code></td>
      <td style="background: brown"></td>
    </tr>
    <tr>
      <td style="background: #deb887"></td>
      <td style="text-align: center"><code>burlywood</code></td>
      <td><code>#deb887</code></td>
      <td style="background: burlywood"></td>
    </tr>
    <tr>
      <td style="background: #5f9ea0"></td>
      <td style="text-align: center"><code>cadetblue</code></td>
      <td><code>#5f9ea0</code></td>
      <td style="background: cadetblue"></td>
    </tr>
    <tr>
      <td style="background: #7fff00"></td>
      <td style="text-align: center"><code>chartreuse</code></td>
      <td><code>#7fff00</code></td>
      <td style="background: chartreuse"></td>
    </tr>
    <tr>
      <td style="background: #d2691e"></td>
      <td style="text-align: center"><code>chocolate</code></td>
      <td><code>#d2691e</code></td>
      <td style="background: chocolate"></td>
    </tr>
    <tr>
      <td style="background: #ff7f50"></td>
      <td style="text-align: center"><code>coral</code></td>
      <td><code>#ff7f50</code></td>
      <td style="background: coral"></td>
    </tr>
    <tr>
      <td style="background: #6495ed"></td>
      <td style="text-align: center"><code>cornflowerblue</code></td>
      <td><code>#6495ed</code></td>
      <td style="background: cornflowerblue"></td>
    </tr>
    <tr>
      <td style="background: #fff8dc"></td>
      <td style="text-align: center"><code>cornsilk</code></td>
      <td><code>#fff8dc</code></td>
      <td style="background: cornsilk"></td>
    </tr>
    <tr>
      <td style="background: #dc143c"></td>
      <td style="text-align: center"><code>crimson</code></td>
      <td><code>#dc143c</code></td>
      <td style="background: crimson"></td>
    </tr>
    <tr>
      <td style="background: #0ff"></td>
      <td style="text-align: center"><code>cyan</code></td>
      <td><code>#00ffff</code></td>
      <td style="background: cyan"></td>
    </tr>
    <tr>
      <td style="background: #00008b"></td>
      <td style="text-align: center"><code>darkblue</code></td>
      <td><code>#00008b</code></td>
      <td style="background: darkblue"></td>
    </tr>
    <tr>
      <td style="background: #008b8b"></td>
      <td style="text-align: center"><code>darkcyan</code></td>
      <td><code>#008b8b</code></td>
      <td style="background: darkcyan"></td>
    </tr>
    <tr>
      <td style="background: #b8860b"></td>
      <td style="text-align: center"><code>darkgoldenrod</code></td>
      <td><code>#b8860b</code></td>
      <td style="background: darkgoldenrod"></td>
    </tr>
    <tr>
      <td style="background: #a9a9a9"></td>
      <td style="text-align: center"><code>darkgray</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgray"></td>
    </tr>
    <tr>
      <td style="background: #006400"></td>
      <td style="text-align: center"><code>darkgreen</code></td>
      <td><code>#006400</code></td>
      <td style="background: darkgreen"></td>
    </tr>
    <tr>
      <td style="background: #a9a9a9"></td>
      <td style="text-align: center"><code>darkgrey</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgrey"></td>
    </tr>
    <tr>
      <td style="background: #bdb76b"></td>
      <td style="text-align: center"><code>darkkhaki</code></td>
      <td><code>#bdb76b</code></td>
      <td style="background: darkkhaki"></td>
    </tr>
    <tr>
      <td style="background: #8b008b"></td>
      <td style="text-align: center"><code>darkmagenta</code></td>
      <td><code>#8b008b</code></td>
      <td style="background: darkmagenta"></td>
    </tr>
    <tr>
      <td style="background: #556b2f"></td>
      <td style="text-align: center"><code>darkolivegreen</code></td>
      <td><code>#556b2f</code></td>
      <td style="background: darkolivegreen"></td>
    </tr>
    <tr>
      <td style="background: #ff8c00"></td>
      <td style="text-align: center"><code>darkorange</code></td>
      <td><code>#ff8c00</code></td>
      <td style="background: darkorange"></td>
    </tr>
    <tr>
      <td style="background: #9932cc"></td>
      <td style="text-align: center"><code>darkorchid</code></td>
      <td><code>#9932cc</code></td>
      <td style="background: darkorchid"></td>
    </tr>
    <tr>
      <td style="background: #8b0000"></td>
      <td style="text-align: center"><code>darkred</code></td>
      <td><code>#8b0000</code></td>
      <td style="background: darkred"></td>
    </tr>
    <tr>
      <td style="background: #e9967a"></td>
      <td style="text-align: center"><code>darksalmon</code></td>
      <td><code>#e9967a</code></td>
      <td style="background: darksalmon"></td>
    </tr>
    <tr>
      <td style="background: #8fbc8f"></td>
      <td style="text-align: center"><code>darkseagreen</code></td>
      <td><code>#8fbc8f</code></td>
      <td style="background: darkseagreen"></td>
    </tr>
    <tr>
      <td style="background: #483d8b"></td>
      <td style="text-align: center"><code>darkslateblue</code></td>
      <td><code>#483d8b</code></td>
      <td style="background: darkslateblue"></td>
    </tr>
    <tr>
      <td style="background: #2f4f4f"></td>
      <td style="text-align: center"><code>darkslategray</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategray"></td>
    </tr>
    <tr>
      <td style="background: #2f4f4f"></td>
      <td style="text-align: center"><code>darkslategrey</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategrey"></td>
    </tr>
    <tr>
      <td style="background: #00ced1"></td>
      <td style="text-align: center"><code>darkturquoise</code></td>
      <td><code>#00ced1</code></td>
      <td style="background: darkturquoise"></td>
    </tr>
    <tr>
      <td style="background: #9400d3"></td>
      <td style="text-align: center"><code>darkviolet</code></td>
      <td><code>#9400d3</code></td>
      <td style="background: darkviolet"></td>
    </tr>
    <tr>
      <td style="background: #ff1493"></td>
      <td style="text-align: center"><code>deeppink</code></td>
      <td><code>#ff1493</code></td>
      <td style="background: deeppink"></td>
    </tr>
    <tr>
      <td style="background: #00bfff"></td>
      <td style="text-align: center"><code>deepskyblue</code></td>
      <td><code>#00bfff</code></td>
      <td style="background: deepskyblue"></td>
    </tr>
    <tr>
      <td style="background: #696969"></td>
      <td style="text-align: center"><code>dimgray</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgray"></td>
    </tr>
    <tr>
      <td style="background: #696969"></td>
      <td style="text-align: center"><code>dimgrey</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgrey"></td>
    </tr>
    <tr>
      <td style="background: #1e90ff"></td>
      <td style="text-align: center"><code>dodgerblue</code></td>
      <td><code>#1e90ff</code></td>
      <td style="background: dodgerblue"></td>
    </tr>
    <tr>
      <td style="background: #b22222"></td>
      <td style="text-align: center"><code>firebrick</code></td>
      <td><code>#b22222</code></td>
      <td style="background: firebrick"></td>
    </tr>
    <tr>
      <td style="background: #fffaf0"></td>
      <td style="text-align: center"><code>floralwhite</code></td>
      <td><code>#fffaf0</code></td>
      <td style="background: floralwhite"></td>
    </tr>
    <tr>
      <td style="background: #228b22"></td>
      <td style="text-align: center"><code>forestgreen</code></td>
      <td><code>#228b22</code></td>
      <td style="background: forestgreen"></td>
    </tr>
    <tr>
      <td style="background: #dcdcdc"></td>
      <td style="text-align: center"><code>gainsboro</code></td>
      <td><code>#dcdcdc</code></td>
      <td style="background: gainsboro"></td>
    </tr>
    <tr>
      <td style="background: #f8f8ff"></td>
      <td style="text-align: center"><code>ghostwhite</code></td>
      <td><code>#f8f8ff</code></td>
      <td style="background: ghostwhite"></td>
    </tr>
    <tr>
      <td style="background: #ffd700"></td>
      <td style="text-align: center"><code>gold</code></td>
      <td><code>#ffd700</code></td>
      <td style="background: gold"></td>
    </tr>
    <tr>
      <td style="background: #daa520"></td>
      <td style="text-align: center"><code>goldenrod</code></td>
      <td><code>#daa520</code></td>
      <td style="background: goldenrod"></td>
    </tr>
    <tr>
      <td style="background: #adff2f"></td>
      <td style="text-align: center"><code>greenyellow</code></td>
      <td><code>#adff2f</code></td>
      <td style="background: greenyellow"></td>
    </tr>
    <tr>
      <td style="background: #808080"></td>
      <td style="text-align: center"><code>grey</code></td>
      <td><code>#808080</code></td>
      <td style="background: grey"></td>
    </tr>
    <tr>
      <td style="background: #f0fff0"></td>
      <td style="text-align: center"><code>honeydew</code></td>
      <td><code>#f0fff0</code></td>
      <td style="background: honeydew"></td>
    </tr>
    <tr>
      <td style="background: #ff69b4"></td>
      <td style="text-align: center"><code>hotpink</code></td>
      <td><code>#ff69b4</code></td>
      <td style="background: hotpink"></td>
    </tr>
    <tr>
      <td style="background: #cd5c5c"></td>
      <td style="text-align: center"><code>indianred</code></td>
      <td><code>#cd5c5c</code></td>
      <td style="background: indianred"></td>
    </tr>
    <tr>
      <td style="background: #4b0082"></td>
      <td style="text-align: center"><code>indigo</code></td>
      <td><code>#4b0082</code></td>
      <td style="background: indigo"></td>
    </tr>
    <tr>
      <td style="background: #fffff0"></td>
      <td style="text-align: center"><code>ivory</code></td>
      <td><code>#fffff0</code></td>
      <td style="background: ivory"></td>
    </tr>
    <tr>
      <td style="background: #f0e68c"></td>
      <td style="text-align: center"><code>khaki</code></td>
      <td><code>#f0e68c</code></td>
      <td style="background: khaki"></td>
    </tr>
    <tr>
      <td style="background: #e6e6fa"></td>
      <td style="text-align: center"><code>lavender</code></td>
      <td><code>#e6e6fa</code></td>
      <td style="background: lavender"></td>
    </tr>
    <tr>
      <td style="background: #fff0f5"></td>
      <td style="text-align: center"><code>lavenderblush</code></td>
      <td><code>#fff0f5</code></td>
      <td style="background: lavenderblush"></td>
    </tr>
    <tr>
      <td style="background: #7cfc00"></td>
      <td style="text-align: center"><code>lawngreen</code></td>
      <td><code>#7cfc00</code></td>
      <td style="background: lawngreen"></td>
    </tr>
    <tr>
      <td style="background: #fffacd"></td>
      <td style="text-align: center"><code>lemonchiffon</code></td>
      <td><code>#fffacd</code></td>
      <td style="background: lemonchiffon"></td>
    </tr>
    <tr>
      <td style="background: #add8e6"></td>
      <td style="text-align: center"><code>lightblue</code></td>
      <td><code>#add8e6</code></td>
      <td style="background: lightblue"></td>
    </tr>
    <tr>
      <td style="background: #f08080"></td>
      <td style="text-align: center"><code>lightcoral</code></td>
      <td><code>#f08080</code></td>
      <td style="background: lightcoral"></td>
    </tr>
    <tr>
      <td style="background: #e0ffff"></td>
      <td style="text-align: center"><code>lightcyan</code></td>
      <td><code>#e0ffff</code></td>
      <td style="background: lightcyan"></td>
    </tr>
    <tr>
      <td style="background: #fafad2"></td>
      <td style="text-align: center"><code>lightgoldenrodyellow</code></td>
      <td><code>#fafad2</code></td>
      <td style="background: lightgoldenrodyellow"></td>
    </tr>
    <tr>
      <td style="background: #d3d3d3"></td>
      <td style="text-align: center"><code>lightgray</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgray"></td>
    </tr>
    <tr>
      <td style="background: #90ee90"></td>
      <td style="text-align: center"><code>lightgreen</code></td>
      <td><code>#90ee90</code></td>
      <td style="background: lightgreen"></td>
    </tr>
    <tr>
      <td style="background: #d3d3d3"></td>
      <td style="text-align: center"><code>lightgrey</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgrey"></td>
    </tr>
    <tr>
      <td style="background: #ffb6c1"></td>
      <td style="text-align: center"><code>lightpink</code></td>
      <td><code>#ffb6c1</code></td>
      <td style="background: lightpink"></td>
    </tr>
    <tr>
      <td style="background: #ffa07a"></td>
      <td style="text-align: center"><code>lightsalmon</code></td>
      <td><code>#ffa07a</code></td>
      <td style="background: lightsalmon"></td>
    </tr>
    <tr>
      <td style="background: #20b2aa"></td>
      <td style="text-align: center"><code>lightseagreen</code></td>
      <td><code>#20b2aa</code></td>
      <td style="background: lightseagreen"></td>
    </tr>
    <tr>
      <td style="background: #87cefa"></td>
      <td style="text-align: center"><code>lightskyblue</code></td>
      <td><code>#87cefa</code></td>
      <td style="background: lightskyblue"></td>
    </tr>
    <tr>
      <td style="background: #778899"></td>
      <td style="text-align: center"><code>lightslategray</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategray"></td>
    </tr>
    <tr>
      <td style="background: #778899"></td>
      <td style="text-align: center"><code>lightslategrey</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategrey"></td>
    </tr>
    <tr>
      <td style="background: #b0c4de"></td>
      <td style="text-align: center"><code>lightsteelblue</code></td>
      <td><code>#b0c4de</code></td>
      <td style="background: lightsteelblue"></td>
    </tr>
    <tr>
      <td style="background: #ffffe0"></td>
      <td style="text-align: center"><code>lightyellow</code></td>
      <td><code>#ffffe0</code></td>
      <td style="background: lightyellow"></td>
    </tr>
    <tr>
      <td style="background: #32cd32"></td>
      <td style="text-align: center"><code>limegreen</code></td>
      <td><code>#32cd32</code></td>
      <td style="background: limegreen"></td>
    </tr>
    <tr>
      <td style="background: #faf0e6"></td>
      <td style="text-align: center"><code>linen</code></td>
      <td><code>#faf0e6</code></td>
      <td style="background: linen"></td>
    </tr>
    <tr>
      <td style="background: #66cdaa"></td>
      <td style="text-align: center"><code>mediumaquamarine</code></td>
      <td><code>#66cdaa</code></td>
      <td style="background: mediumaquamarine"></td>
    </tr>
    <tr>
      <td style="background: #0000cd"></td>
      <td style="text-align: center"><code>mediumblue</code></td>
      <td><code>#0000cd</code></td>
      <td style="background: mediumblue"></td>
    </tr>
    <tr>
      <td style="background: #ba55d3"></td>
      <td style="text-align: center"><code>mediumorchid</code></td>
      <td><code>#ba55d3</code></td>
      <td style="background: mediumorchid"></td>
    </tr>
    <tr>
      <td style="background: #9370db"></td>
      <td style="text-align: center"><code>mediumpurple</code></td>
      <td><code>#9370db</code></td>
      <td style="background: mediumpurple"></td>
    </tr>
    <tr>
      <td style="background: #3cb371"></td>
      <td style="text-align: center"><code>mediumseagreen</code></td>
      <td><code>#3cb371</code></td>
      <td style="background: mediumseagreen"></td>
    </tr>
    <tr>
      <td style="background: #7b68ee"></td>
      <td style="text-align: center"><code>mediumslateblue</code></td>
      <td><code>#7b68ee</code></td>
      <td style="background: mediumslateblue"></td>
    </tr>
    <tr>
      <td style="background: #00fa9a"></td>
      <td style="text-align: center"><code>mediumspringgreen</code></td>
      <td><code>#00fa9a</code></td>
      <td style="background: mediumspringgreen"></td>
    </tr>
    <tr>
      <td style="background: #48d1cc"></td>
      <td style="text-align: center"><code>mediumturquoise</code></td>
      <td><code>#48d1cc</code></td>
      <td style="background: mediumturquoise"></td>
    </tr>
    <tr>
      <td style="background: #c71585"></td>
      <td style="text-align: center"><code>mediumvioletred</code></td>
      <td><code>#c71585</code></td>
      <td style="background: mediumvioletred"></td>
    </tr>
    <tr>
      <td style="background: #191970"></td>
      <td style="text-align: center"><code>midnightblue</code></td>
      <td><code>#191970</code></td>
      <td style="background: midnightblue"></td>
    </tr>
    <tr>
      <td style="background: #f5fffa"></td>
      <td style="text-align: center"><code>mintcream</code></td>
      <td><code>#f5fffa</code></td>
      <td style="background: mintcream"></td>
    </tr>
    <tr>
      <td style="background: #ffe4e1"></td>
      <td style="text-align: center"><code>mistyrose</code></td>
      <td><code>#ffe4e1</code></td>
      <td style="background: mistyrose"></td>
    </tr>
    <tr>
      <td style="background: #ffe4b5"></td>
      <td style="text-align: center"><code>moccasin</code></td>
      <td><code>#ffe4b5</code></td>
      <td style="background: moccasin"></td>
    </tr>
    <tr>
      <td style="background: #ffdead"></td>
      <td style="text-align: center"><code>navajowhite</code></td>
      <td><code>#ffdead</code></td>
      <td style="background: navajowhite"></td>
    </tr>
    <tr>
      <td style="background: #fdf5e6"></td>
      <td style="text-align: center"><code>oldlace</code></td>
      <td><code>#fdf5e6</code></td>
      <td style="background: oldlace"></td>
    </tr>
    <tr>
      <td style="background: #6b8e23"></td>
      <td style="text-align: center"><code>olivedrab</code></td>
      <td><code>#6b8e23</code></td>
      <td style="background: olivedrab"></td>
    </tr>
    <tr>
      <td style="background: #ff4500"></td>
      <td style="text-align: center"><code>orangered</code></td>
      <td><code>#ff4500</code></td>
      <td style="background: orangered"></td>
    </tr>
    <tr>
      <td style="background: #da70d6"></td>
      <td style="text-align: center"><code>orchid</code></td>
      <td><code>#da70d6</code></td>
      <td style="background: orchid"></td>
    </tr>
    <tr>
      <td style="background: #eee8aa"></td>
      <td style="text-align: center"><code>palegoldenrod</code></td>
      <td><code>#eee8aa</code></td>
      <td style="background: palegoldenrod"></td>
    </tr>
    <tr>
      <td style="background: #98fb98"></td>
      <td style="text-align: center"><code>palegreen</code></td>
      <td><code>#98fb98</code></td>
      <td style="background: palegreen"></td>
    </tr>
    <tr>
      <td style="background: #afeeee"></td>
      <td style="text-align: center"><code>paleturquoise</code></td>
      <td><code>#afeeee</code></td>
      <td style="background: paleturquoise"></td>
    </tr>
    <tr>
      <td style="background: #db7093"></td>
      <td style="text-align: center"><code>palevioletred</code></td>
      <td><code>#db7093</code></td>
      <td style="background: palevioletred"></td>
    </tr>
    <tr>
      <td style="background: #ffefd5"></td>
      <td style="text-align: center"><code>papayawhip</code></td>
      <td><code>#ffefd5</code></td>
      <td style="background: papayawhip"></td>
    </tr>
    <tr>
      <td style="background: #ffdab9"></td>
      <td style="text-align: center"><code>peachpuff</code></td>
      <td><code>#ffdab9</code></td>
      <td style="background: peachpuff"></td>
    </tr>
    <tr>
      <td style="background: #cd853f"></td>
      <td style="text-align: center"><code>peru</code></td>
      <td><code>#cd853f</code></td>
      <td style="background: peru"></td>
    </tr>
    <tr>
      <td style="background: #ffc0cb"></td>
      <td style="text-align: center"><code>pink</code></td>
      <td><code>#ffc0cb</code></td>
      <td style="background: pink"></td>
    </tr>
    <tr>
      <td style="background: #dda0dd"></td>
      <td style="text-align: center"><code>plum</code></td>
      <td><code>#dda0dd</code></td>
      <td style="background: plum"></td>
    </tr>
    <tr>
      <td style="background: #b0e0e6"></td>
      <td style="text-align: center"><code>powderblue</code></td>
      <td><code>#b0e0e6</code></td>
      <td style="background: powderblue"></td>
    </tr>
    <tr>
      <td style="background: #bc8f8f"></td>
      <td style="text-align: center"><code>rosybrown</code></td>
      <td><code>#bc8f8f</code></td>
      <td style="background: rosybrown"></td>
    </tr>
    <tr>
      <td style="background: #4169e1"></td>
      <td style="text-align: center"><code>royalblue</code></td>
      <td><code>#4169e1</code></td>
      <td style="background: royalblue"></td>
    </tr>
    <tr>
      <td style="background: #8b4513"></td>
      <td style="text-align: center"><code>saddlebrown</code></td>
      <td><code>#8b4513</code></td>
      <td style="background: saddlebrown"></td>
    </tr>
    <tr>
      <td style="background: #fa8072"></td>
      <td style="text-align: center"><code>salmon</code></td>
      <td><code>#fa8072</code></td>
      <td style="background: salmon"></td>
    </tr>
    <tr>
      <td style="background: #f4a460"></td>
      <td style="text-align: center"><code>sandybrown</code></td>
      <td><code>#f4a460</code></td>
      <td style="background: sandybrown"></td>
    </tr>
    <tr>
      <td style="background: #2e8b57"></td>
      <td style="text-align: center"><code>seagreen</code></td>
      <td><code>#2e8b57</code></td>
      <td style="background: seagreen"></td>
    </tr>
    <tr>
      <td style="background: #fff5ee"></td>
      <td style="text-align: center"><code>seashell</code></td>
      <td><code>#fff5ee</code></td>
      <td style="background: seashell"></td>
    </tr>
    <tr>
      <td style="background: #a0522d"></td>
      <td style="text-align: center"><code>sienna</code></td>
      <td><code>#a0522d</code></td>
      <td style="background: sienna"></td>
    </tr>
    <tr>
      <td style="background: #87ceeb"></td>
      <td style="text-align: center"><code>skyblue</code></td>
      <td><code>#87ceeb</code></td>
      <td style="background: skyblue"></td>
    </tr>
    <tr>
      <td style="background: #6a5acd"></td>
      <td style="text-align: center"><code>slateblue</code></td>
      <td><code>#6a5acd</code></td>
      <td style="background: slateblue"></td>
    </tr>
    <tr>
      <td style="background: #708090"></td>
      <td style="text-align: center"><code>slategray</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategray"></td>
    </tr>
    <tr>
      <td style="background: #708090"></td>
      <td style="text-align: center"><code>slategrey</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategrey"></td>
    </tr>
    <tr>
      <td style="background: #fffafa"></td>
      <td style="text-align: center"><code>snow</code></td>
      <td><code>#fffafa</code></td>
      <td style="background: snow"></td>
    </tr>
    <tr>
      <td style="background: #00ff7f"></td>
      <td style="text-align: center"><code>springgreen</code></td>
      <td><code>#00ff7f</code></td>
      <td style="background: springgreen"></td>
    </tr>
    <tr>
      <td style="background: #4682b4"></td>
      <td style="text-align: center"><code>steelblue</code></td>
      <td><code>#4682b4</code></td>
      <td style="background: steelblue"></td>
    </tr>
    <tr>
      <td style="background: #d2b48c"></td>
      <td style="text-align: center"><code>tan</code></td>
      <td><code>#d2b48c</code></td>
      <td style="background: tan"></td>
    </tr>
    <tr>
      <td style="background: #d8bfd8"></td>
      <td style="text-align: center"><code>thistle</code></td>
      <td><code>#d8bfd8</code></td>
      <td style="background: thistle"></td>
    </tr>
    <tr>
      <td style="background: #ff6347"></td>
      <td style="text-align: center"><code>tomato</code></td>
      <td><code>#ff6347</code></td>
      <td style="background: tomato"></td>
    </tr>
    <tr>
      <td style="background: #40e0d0"></td>
      <td style="text-align: center"><code>turquoise</code></td>
      <td><code>#40e0d0</code></td>
      <td style="background: turquoise"></td>
    </tr>
    <tr>
      <td style="background: #ee82ee"></td>
      <td style="text-align: center"><code>violet</code></td>
      <td><code>#ee82ee</code></td>
      <td style="background: violet"></td>
    </tr>
    <tr>
      <td style="background: #f5deb3"></td>
      <td style="text-align: center"><code>wheat</code></td>
      <td><code>#f5deb3</code></td>
      <td style="background: wheat"></td>
    </tr>
    <tr>
      <td style="background: #f5f5f5"></td>
      <td style="text-align: center"><code>whitesmoke</code></td>
      <td><code>#f5f5f5</code></td>
      <td style="background: whitesmoke"></td>
    </tr>
    <tr>
      <td style="background: #9acd32"></td>
      <td style="text-align: center"><code>yellowgreen</code></td>
      <td><code>#9acd32</code></td>
      <td style="background: yellowgreen"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS4 Colors")}}</td>
      <td style="background: #639"></td>
      <td style="text-align: center"><code>rebeccapurple</code></td>
      <td><code>#663399</code></td>
      <td style="background: rebeccapurple"></td>
    </tr>
  </tbody>
</table>

A cor `rebeccapurple` é equivalente à cor `#639`, e mais informações sobre por que foi introduzida pode ser encontrada neste post no blog Codepen por Trezy "[Honoring a Great Man](https://codepen.io/trezy/post/honoring-a-great-man)" (em inglês)

### `palavra-chave transparent`

A palavra-chave `transparent` representa uma cor totalmente transparente, isto é, a cor vista será a cor de fundo. Tecnicamente, é um preto com canal alfa no seu valor mínimo e é um atalho para `rgba(0,0,0,0)`.

> **Nota:** **Nota histórica**
> A palavra-chave `transparent` não era uma cor verdadeira no CSS nível 2 (Revisão 1). Era uma palavra-chave específica que poderia ser usada no lugar de um valor `<color>` regular em duas propriedades CSS: {{Cssxref("background")}} e {{Cssxref("border")}}. Ela foi adicionada essencialmente para permitir a substituição de cores sólidas herdadas.
>
> Com o apoio da opacidade através de [canais alfal](https://en.wikipedia.org/wiki/Alpha_compositing), `transparent` foi redefinida como uma cor verdadeira no Cores CSS nível 3 permitindo seu uso em qualquer lugar onde for exigido um valor para `<color>`, como a propriedade {{Cssxref("color")}}.

### `palavra-chave currentcolor`

A palavra-chave `currentcolor` representa o valor calculado da propriedade {{Cssxref("color")}} dos elementos . Ela permite que as propriedades de cor sejam herdadas por propriedades ou propriedades de elemento filho que não a herdam por padrão.

Ela também pode ser usada em propriedades que herdam o valor calculado da propriedade {{Cssxref ("color")}} do elemento e será equivalente à palavra-chave `inherit` nesses elementos, se houver.

#### Exemplo ao vivo

A cor da linha (uma div preenchida com cor) se adapta à cor de sua propriedade {{Cssxref ("color")}}, herdada de seu pai.

##### Exemplo 1

```html
<div style="color:darkred">
  A cor deste texto é a mesma da linha:
  <div style="background:currentcolor; height:1px"></div>
  Mais algum texto.
</div>
```

{{EmbedLiveSample('Live_example_1')}}

##### Exemplo 2

```html
<div style="color:blue; border-bottom: 1px dashed currentcolor;">
  A cor deste texto é a mesma da linha:
  <div style="background:currentcolor; height:1px"></div>
  Mais algum texto.
</div>
```

{{EmbedLiveSample('Live_example_2')}}

### `rgb()`

> **Nota:** Na especificação Módulo de cor CSS Color nível 4, a rgba() foi definida como uma função herdada com gramática e comportamento idênticos à rgb(); na verdade, um apelido. Mais para frente, ambas podem aceitar exatamente os mesmos parâmetros.

RGB colors can be expressed through both hexadecimal (prefixed with `#`) and functional (`rgb()`, `rgba()`) notations.

- [Hexadecimal notation](/pt-BR/docs/Web/CSS/hex-color): `#RGB[A]` or`#RRGGBB[AA]`
  - : `R` (red), `G` (green), `B` (blue), and `A` (alpha) are hexadecimal characters (0–9, A–F). `A` is optional. For example, `#ff0000` is equivalent to `#ff0000ff`. The three-digit notation (`#RGB`) is a shorter version of the six-digit form (`#RRGGBB`). For example, `#f09` is the same color as `#ff0099`. Likewise, the four-digit RGB notation (`#RGBA`) is a shorter version of the eight-digit form (`#RRGGBBAA`). For example, `#0f38` is the same color as `#00ff3388`.
- [`rgb()`](/pt-BR/docs/Web/CSS/color_value/rgb) or [`rgba()`](/pt-BR/docs/Web/CSS/color_value/rgba): `rgb[a](R, G, B[, A])` or `rgb[a](R G B[ / A])`
  - : `R` (red), `G` (green), and `B` (blue) can be either {{cssxref("&lt;number&gt;")}}s or {{cssxref("&lt;percentage&gt;")}}s, where the number `255` corresponds to `100%`. `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

```plain
/* These examples all specify the same RGB color: */

#f03
#F03
#ff0033
#FF0033
rgb(255,0,51)
rgb(255, 0, 51)
rgb(255, 0, 51.2) /* ERROR! Don't use fractions, use integers */
rgb(100%,0%,20%)
rgb(100%, 0%, 20%)
rgb(100%, 0, 20%) /* ERROR! Don't mix up integer and percentage notation */

/* whitespace syntax */
rgb(255 0 0)

/* optional alpha value */
rgb(255,0,0,0.4)  /* 40% opaque red */
rgb(255,0,0,40%)  /* 40% opaque red with percentage value for alpha */
rgb(255 0 0 / 0.4)  /* 40% opaque red */
rgb(255 0 0 / 40%)  /* 40% opaque red with percentage value for alpha */
```

### `hsl()`

> **Nota:** In the CSS Color Module Level 4 spec, `hsla()` has been defined as a legacy function with identical grammar and behaviour to `hsl()`; in effect, an alias. Going forward, both can accept exactly the same parameters.

Colors can also be defined via hue, saturation, and lightness, or HSL, by using the `hsl()` functional notation. The advantage of HSL over RGB is that it is far more intuitive: you can guess at the colors you want, and then tweak. It is also easier to create sets of matching colors (by keeping the hue the same and varying the lightness/darkness, and saturation).

**Hue** is represented as an angle of the color circle (i.e. the rainbow represented in a circle). This angle is given as a unitless {{cssxref("&lt;number&gt;")}}. By definition **red=0=360**, and the other colors are spread around the circle, so **green=120**, **blue=240**, etc. As an angle, it implicitly wraps around such that -120=240 and 480=120.

Saturation and lightness are represented as percentages.
`100%` is full **saturation**, and `0%` is a shade of grey.
`100%` **lightness** is white, `0%` lightness is black, and `50%` lightness is "normal."

```css
hsl(0,  100%,50%)    /* red */
hsl(30, 100%,50%)
hsl(60, 100%,50%)
hsl(90, 100%,50%)
hsl(120,100%,50%)    /* green */
hsl(150,100%,50%)
hsl(180,100%,50%)
hsl(210,100%,50%)
hsl(240,100%,50%)    /* blue */
hsl(270,100%,50%)
hsl(300,100%,50%)
hsl(330,100%,50%)
hsl(360,100%,50%)    /* red */

hsl(120,100%,25%)    /* dark green */
hsl(120,100%,50%)    /* green */
hsl(120,100%,75%)    /* light green */

hsl(120,100%,50%)    /* green */
hsl(120, 67%,50%)
hsl(120, 33%,50%)
hsl(120,  0%,50%)

hsl(120, 60%,70%)    /* pastel green */

/* whitespace syntax */
hsl(120 60% 70%)  /* pastel green */

/* angle values for hue component; also accepts rad, grad, turn */
hsl(120deg 60% 70%)  /* pastel green */

/* optional alpha value */
hsl(240,100%,50%,0.05)  /* 5% opaque blue */
hsl(240,100%,50%,5%)  /* 5% opaque blue with percentage value for alpha */
hsl(240 100% 50% / 0.05) /* 5% opaque blue */
hsl(240 100% 50% / 5%) /* 5% opaque blue with percentage value for alpha */
```

### `rgba()`

RGB colors can be expressed through both hexadecimal (prefixed with `#`) and functional (`rgb()`, `rgba()`) notations.

- [Hexadecimal notation](/pt-BR/docs/Web/CSS/hex-color): `#RGB[A]` or`#RRGGBB[AA]`
  - : `R` (red), `G` (green), `B` (blue), and `A` (alpha) are hexadecimal characters (0–9, A–F). `A` is optional. For example, `#ff0000` is equivalent to `#ff0000ff`. The three-digit notation (`#RGB`) is a shorter version of the six-digit form (`#RRGGBB`). For example, `#f09` is the same color as `#ff0099`. Likewise, the four-digit RGB notation (`#RGBA`) is a shorter version of the eight-digit form (`#RRGGBBAA`). For example, `#0f38` is the same color as `#00ff3388`.
- [`rgb()`](/pt-BR/docs/Web/CSS/color_value/rgb) or [`rgba()`](/pt-BR/docs/Web/CSS/color_value/rgba): `rgb[a](R, G, B[, A])` or `rgb[a](R G B[ / A])`
  - : `R` (red), `G` (green), and `B` (blue) can be either {{cssxref("&lt;number&gt;")}}s or {{cssxref("&lt;percentage&gt;")}}s, where the number `255` corresponds to `100%`. `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

```css
#f030                /* 0% opaque red */
#F03F                /* full opaque red */
#ff003300            /* 0% opaque red */
#FF003388            /* 50% opaque red */
rgba(255,0,0,0.1)    /* 10% opaque red */
rgba(255,0,0,0.4)    /* 40% opaque red */
rgba(255,0,0,0.7)    /* 70% opaque red */
rgba(255,0,0,  1)    /* full opaque red */

/* whitespace syntax */
rgba(255 0 0 / 0.4)  /* 40% opaque red */

/* percentage value for alpha */
rgba(255 0 0 / 40%)  /* 40% opaque red */
```

> **Nota:** In the CSS Color Module Level 4 spec, `rgba()` has been defined as a legacy function with identical grammar and behaviour to `rgb()`; in effect, an alias. Going forward, both can accept exactly the same parameters.

### `hsla()`

Colors can be defined in the hue-saturation-lightness-alpha model (HSLa) using the `hsla()` functional notation. HSLa extends the HSL color model to include the alpha channel, allowing specification of the opacity of a color.
**a** means opacity: 0=transparent; 1=opaque;

```css
hsla(240,100%,50%,0.05)   /* 5% opaque blue */
hsla(240,100%,50%, 0.4)   /* 40% opaque blue */
hsla(240,100%,50%, 0.7)   /* 70% opaque blue */
hsla(240,100%,50%,   1)   /* full opaque blue */

/* whitespace syntax */
hsla(240 100% 50% / 0.05) /* 5% opaque blue */

/* percentage value for alpha */
hsla(240 100% 50% / 5%) /* 5% opaque blue */

/* angle values for hue component; also accepts rad, grad, turn */
hsla(240deg 100% 50% / 5%) /* 5% opaque blue */
hsla(240deg,100%,50%, 0.4)  /* 40% opaque blue */
```

> **Nota:** In the CSS Color Module Level 4 spec, `hsla()` has been defined as a legacy function with identical grammar and behaviour to `hsl()`; in effect, an alias. Going forward, both can accept exactly the same parameters.

### System Colors

Not all system colors are supported on all systems. {{deprecated_inline}} for use on public web pages.

- ActiveBorder
  - : Active window border.
- ActiveCaption
  - : Active window caption. Should be used with `CaptionText` as foreground color.
- AppWorkspace
  - : Background color of multiple document interface.
- Background
  - : Desktop background.
- ButtonFace
  - : Face background color for 3-D elements that appear 3-D due to one layer of surrounding border. Should be used with the `ButtonText` foreground color.
- ButtonHighlight
  - : The color of the border facing the light source for 3-D elements that appear 3-D due to that layer of surrounding border.
- ButtonShadow
  - : The color of the border away from the light source for 3-D elements that appear 3-D due to that layer of surrounding border.
- ButtonText
  - : Text on push buttons. Should be used with the `ButtonFace` or `ThreeDFace` background color.
- CaptionText
  - : Text in caption, size box, and scrollbar arrow box. Should be used with the `ActiveCaption` background color.
- GrayText
  - : Grayed (disabled) text.
- Highlight
  - : Item(s) selected in a control. Should be used with the `HighlightText` foreground color.
- HighlightText
  - : Text of item(s) selected in a control. Should be used with the `Highlight` background color.
- InactiveBorder
  - : Inactive window border.
- InactiveCaption
  - : Inactive window caption. Should be used with the `InactiveCaptionText` foreground color.
- InactiveCaptionText
  - : Color of text in an inactive caption. Should be used with the `InactiveCaption` background color.
- InfoBackground
  - : Background color for tooltip controls. Should be used with the `InfoText` foreground color.
- InfoText
  - : Text color for tooltip controls. Should be used with the `InfoBackground` background color.
- Menu
  - : Menu background. Should be used with the `MenuText` or `-moz-MenuBarText` foreground color.
- MenuText
  - : Text in menus. Should be used with the `Menu` background color.
- Scrollbar
  - : Background color of scroll bars.
- ThreeDDarkShadow
  - : The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- ThreeDFace
  - : The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border. Should be used with the `ButtonText` foreground color.
- ThreeDHighlight
  - : The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two
    concentric layers of surrounding border.
- ThreeDLightShadow
  - : The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two
    concentric layers of surrounding border.
- ThreeDShadow
  - : The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- Window
  - : Window background. Should be used with the `WindowText` foreground color.
- WindowFrame
  - : Window frame.
- WindowText
  - : Text in windows. Should be used with the `Window` background color.

### Mozilla System Color Extensions

- \-moz-ButtonDefault
  - : The border color that goes around buttons that represent the default action for a dialog box.
- \-moz-ButtonHoverFace
  - : The background color of a button that the mouse pointer is over (which would be `ThreeDFace` or `ButtonFace` when the mouse pointer is not over it). Should be used with the `-moz-ButtonHoverText` foreground color.
- \-moz-ButtonHoverText
  - : The text color of a button that the mouse pointer is over (which would be ButtonText when the mouse pointer is not over it). Should be used with the `-moz-ButtonHoverFace background` color.
- \-moz-CellHighlight
  - : Background color for selected item in a tree widget. Should be used with the `-moz-CellHighlightText` foreground color. See also `-moz-html-CellHighlight`.
- \-moz-CellHighlightText
  - : Text color for a selected item in a tree. Should be used with the `-moz-CellHighlight background` color. See also `-moz-html-CellHighlightText`.
- \-moz-Combobox
  - : Background color for combo-boxes. Should be used with the `-moz-ComboboxText` foreground color. In versions prior to 1.9.2, use `-moz-Field` instead.
- \-moz-ComboboxText
  - : Text color for combo-boxes. Should be used with the `-moz-Combobox` background color. In versions prior to 1.9.2, use `-moz-FieldText` instead.
- \-moz-Dialog
  - : Background color for dialog boxes. Should be used with the `-moz-DialogText` foreground color.
- \-moz-DialogText
  - : Text color for dialog boxes. Should be used with the `-moz-Dialog` background color.
- \-moz-dragtargetzone

  \-moz-EvenTreeRow

  - : Background color for even-numbered rows in a tree. Should be used with the `-moz-FieldText` foreground color. In Gecko versions prior to 1.9, use `-moz-Field`. See also `-moz-OddTreeRow`.

- \-moz-Field
  - : Text field background color. Should be used with the `-moz-FieldText` foreground color.
- \-moz-FieldText
  - : Text field text color. Should be used with the `-moz-Field`, `-moz-EvenTreeRow`, or `-moz-OddTreeRow` background color.
- \-moz-html-CellHighlight
  - : Background color for highlighted item in HTML {{HTMLElement("select")}}s. Should be used with the `-moz-html-CellHighlightText` foreground color. Prior to Gecko 1.9, use `-moz-CellHighlight`.
- \-moz-html-CellHighlightText
  - : Text color for highlighted items in HTML {{HTMLElement("select")}}s. Should be used with the `-moz-html-CellHighlight` background color. Prior to Gecko 1.9, use `-moz-CellHighlightText`.
- \-moz-mac-accentdarkestshadow

  \-moz-mac-accentdarkshadow

  \-moz-mac-accentface

  \-moz-mac-accentlightesthighlight

  \-moz-mac-accentlightshadow

  \-moz-mac-accentregularhighlight

  \-moz-mac-accentregularshadow

  \-moz-mac-chrome-active

- \-moz-mac-chrome-inactive
- \-moz-mac-focusring

  \-moz-mac-menuselect

  \-moz-mac-menushadow

  \-moz-mac-menutextselect

  \-moz-MenuHover

  - : Background color for hovered menu items. Often similar to `Highlight`. Should be used with the `-moz-MenuHoverText` or `-moz-MenuBarHoverText` foreground color.

- \-moz-MenuHoverText
  - : Text color for hovered menu items. Often similar to `HighlightText`. Should be used with the `-moz-MenuHover` background color.
- \-moz-MenuBarText
  - : Text color in menu bars. Often similar to `MenuText`. Should be used on top of `Menu` background.
- \-moz-MenuBarHoverText
  - : Color for hovered text in menu bars. Often similar to `-moz-MenuHoverText`. Should be used on top of `-moz-MenuHover` background.
- \-moz-nativehyperlinktext
  - : Default platform hyperlink color.
- \-moz-OddTreeRow
  - : Background color for odd-numbered rows in a tree. Should be used with the `-moz-FieldText` foreground color. In Gecko versions prior to 1.9, use `-moz-Field`. See also `-moz-EvenTreeRow`.
- \-moz-win-communicationstext
  - : Should be used for text in objects with `{{cssxref("-moz-appearance")}}: -moz-win-communications-toolbox;`.
- \-moz-win-mediatext
  - : Should be used for text in objects with `{{cssxref("-moz-appearance")}}: -moz-win-media-toolbox`.

### Mozilla Color Preference Extensions

- \-moz-activehyperlinktext
  - : User's preference for text color of active links. Should be used with the default document background color.
- \-moz-default-background-color
  - : User's preference for the document background color.
- \-moz-default-color
  - : User's preference for the text color.
- \-moz-hyperlinktext
  - : User's preference for the text color of unvisited links. Should be used with the default document background color.
- \-moz-visitedhyperlinktext
  - : User's preference for the text color of visited links. Should be used with the default document background color.

## Specificações

| Specificação                                                            | Estado                   | Comentário                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Colors', '#colorunits', '&lt;color&gt;')}}             | {{Spec2('CSS4 Colors')}} | Added `rebeccapurple`, four- (`#RGBA`) and eight-digit (`#RRGGBBAA`) hexadecimal notations, `rgba()` and `hsla()` as aliases of `rgb()` and `hsl()` (both with identical parameter syntax), space-separated function parameters rather than commas, percentages for alpha values, and angles for the hue component in `hsl()` colors. |
| {{SpecName('CSS3 Colors', '#colorunits', '&lt;color&gt;')}}             | {{Spec2('CSS3 Colors')}} | Deprecated system-colors; added SVG colors; added `rgba()`, `hsl()`, `hsla()` functional notation.                                                                                                                                                                                                                                    |
| {{SpecName('CSS2.1', 'syndata.html#value-def-color', '&lt;color&gt;')}} | {{Spec2('CSS2.1')}}      | Added the `orange` color and the system-colors.                                                                                                                                                                                                                                                                                       |
| {{SpecName('CSS1', '#color-units', '&lt;color&gt;')}}                   | {{Spec2('CSS1')}}        | Initial definition.                                                                                                                                                                                                                                                                                                                   |

## Compatibilidade com navegadores

{{Compat("css.types.color")}}

## Ver também

- The {{Cssxref("opacity")}} property, allowing to define the transparency of color at the element level.
- The {{Cssxref("color")}}, {{Cssxref("background-color")}}, {{Cssxref("border-color")}}, {{Cssxref("outline-color")}}, {{Cssxref("text-shadow")}}, {{Cssxref("box-shadow")}} properties.
