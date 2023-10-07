---
title: Applying SVG effects to HTML content
slug: Web/SVG/Applying_SVG_effects_to_HTML_content
---

Firefox 3.5 introduziu suporte para uso do [SVG](/pt-BR/docs/SVG) como um componente do [CSS](/pt-BR/docs/Web/CSS) em ordem para introduzir efeitos SVG no conteúdo HTML.

Você pode embutir o SVG nos estilos dentro do mesmo documento, ou com um _stylesheet_ externo.

> **Nota:** Referencias para SVG em arquivos externos podem ter mesma origem como as do documento originário.

## Usando SVG embutido

Para aplicar um efeito SVG usando o estilo CSS, você precisa primeiro criar um estilo CSS que faz referência ao SVG que deseja aplicar.

```html
<style>
  .stylename {
    mask: url(#localstyle);
  }
</style>
```

Dentro do exemplo acima, o novo estilo, identificado como "stylename", é uma máscara SVG referenciada pelo ID "localstyle". Quando isso é estabelecido, a máscara pode ser aplicada a qualquer elemento usando o estilo CSS.

Isso soa mais complicado do que realmente é; Olharemos mais de perto os exemplos para termos uma boa ideia como isso funciona.

Então você pode aplicar três estilos: O uso do `mask`, `clip-path`, ou `filter`.

### Exemplo: Masking

Por exemplo, você pod estabelecer um estilo CSS que provêm uma máscara gradiente para um documento HTML usando código SVG similar ao seguinte:

> **Aviso:** **Namespacing não é válido no HTML5**, deixe de lado as tags "svg:" para documentos HTML.

```html
<svg height="0">
  <mask
    id="m1"
    maskUnits="objectBoundingBox"
    maskContentUnits="objectBoundingBox">
    <linearGradient id="g" gradientUnits="objectBoundingBox" x2="0" y2="1">
      <stop stop-color="white" offset="0" />
      <stop stop-color="white" stop-opacity="0" offset="1" />
    </linearGradient>
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" fill="white" />
    <rect x="0.5" y="0.2" width="0.5" height="0.8" fill="url(#g)" />
  </mask>
</svg>
```

```css
.target {
  mask: url(#m1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
  margin: 1em;
}
```

Preste atenção na linha 1, a máscara é especificada usando um URL para o ID "#m1", que é um ID para a máscara SVG específicada abaixo. Todo o que foi especificado detalha mais sobre a máscara de gradiente.

Na realidade aplicar o efeito SVG para XHTML ou HTML é simplesmente feito atribuindo um estilo `target` definido abaixo do elemento, como esse:

```html
<p class="target" style="background:lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>

<p></p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <b class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b
  >
  Ut enim ad minim veniam.
</p>
```

O exemplo acima pode rodar com uma máscara aplicadaa ele.

{{ EmbedLiveSample('Exemplo_Masking', 360, 270) }}

### Exemplo: Clipping

Esse exemplo demonstra como usar SVG to recortar conteúdo HTML. Esse exemplo demonstra como usar SVG para recortar conteúdo HTML. Quando você ver a [demonstração](/@api/deki/files/3214/=clipdemo.xhtml), não irá notar que as áreas quentes para links são recortes.

```html
<p class="target" style="background:lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>

<p></p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <b class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b
  >
  Ut enim ad minim veniam.
</p>
<button onclick="toggleRadius()">Toggle radius</button>
<svg height="0">
  <clipPath id="c1" clipPathUnits="objectBoundingBox">
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" />
    <rect x="0.5" y="0.2" width="0.5" height="0.8" />
  </clipPath>
</svg>
```

```css
.target {
  clip-path: url(#c1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
  margin: 1em;
}
```

Isso estabelece uma área recortada composta por um círculo e um retângulo, e atribui para ela ID "#c1". Isso é então referenciado por um estilo. Quando o estilo `target` é estabelecido desse modo, `clip-path` pode ser atribuido para qualquer outro elemento.

> **Nota:** Também você pode fazer mudanças no SVG em tempo real e ver suas alterações imediatamente afetar a renderização do HTML. Por exemplo, você pode redimensionar o círculo dentro do caminho do recorte estabelecendo o seguinte:

```js
function toggleRadius() {
  var circle = document.getElementById("circle");
  circle.r.baseVal.value = 0.4 - circle.r.baseVal.value;
}
```

{{ EmbedLiveSample('Exemplo_Clipping', 360,290) }}

O exemplo inclui um botão que você pode clicar para alterar o caminho do recorte _(clip-path)_ e ver as alterações tomando efeito.

### Exemplo: Filtering

Esse exemplo demonstra como você pode aplicar o filtro HTML ao conteúdo usado no SVG. Isso estabelece vários filtros, que podem ser aplicados para uso de estilos que cada um dos três elementos dentro dos estados normal e _mouse hover_.

Qualquer filtro SVG pode ser aplicado desse modo. Pode exemplo, para aplicar desfoque Gaussiano, você pode usar:

```xml
<svg:filter id="f1">
  <svg:feGaussianBlur stdDeviation="3"/>
</svg:filter>
```

Você pode também aplicar cor a matriz, como este:

```xml
<svg:filter id="f2">
  <svg:feColorMatrix values="0.3333 0.3333 0.3333 0 0
                             0.3333 0.3333 0.3333 0 0
                             0.3333 0.3333 0.3333 0 0
                             0      0      0      1 0"/>
</svg:filter>
```

Esses são só dois dos cinco filtros demonstrados nessa seção. Certifique-se de olhar o conteúdo do código ao final da seção se você quiser ver mais.

Os cinco filtros são aplicados usando o seguinte CSS:

```html
<style>
  p.target {
    filter: url(#f3);
  }
  p.target:hover {
    filter: url(#f5);
  }
  b.target {
    filter: url(#f1);
  }
  b.target:hover {
    filter: url(#f4);
  }
  iframe.target {
    filter: url(#f2);
  }
  iframe.target:hover {
    filter: url(#f3);
  }
</style>
```

### Exemplo: Texto Borrado

Para borrar um texto há um webkit baseado dos navegadores com o (prefixo) filtro CSS chamado blur. Você pode arquivar o mesmo efeito usando filtros SVG.

```html
<p class="blur">Time to clean my glasses</p>
<svg xmlns="https://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="wherearemyglasses" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
    </filter>
  </defs>
</svg>
```

Você pode aplicar o SVG e o filtro CSS na mesma classe:

```css
.blur {
  filter: url(#wherearemyglasses);
  /* ^ for Firefox */
  -webkit-filter: blur(1px);
  /* ^ Webkit browsers */
  filter: blur(1px);
}
```

{{ EmbedLiveSample('Exemplo_Texto_Burrado', '', '', '') }}

Borrar é um efeito pesado, então assegure-se de usá-lo com moderação, especialmente quando há uma rolagem ou animação.

## Usando referências externas

O elemento SVG vem sendo usado para clipping, masking, e mais pode ser carregado de um arquivo externo, contanto que seu documento venha da mesma origem da qual seu HTML está para fazer efeito.

Por exemplo, se seu CSS está em um arquivo com nome `default.css`, esse pode parecer com isso:

```css
.target {
  clip-path: url(resources.svg#c1);
}
```

O SVG é importado do arquivo com nome `resources.svg`, usando o clip-path com o ID c1.

**Veja também**

- [SVG](/pt-BR/docs/SVG)
- [SVG Effects for HTML Content](http://robert.ocallahan.org/2008/06/applying-svg-effects-to-html-content_04.html) (blog post)
- ([\[archive.org\] Web Tech Blog » Blog Archive » SVG External Document References](http://web.archive.org/web/20120512132948/https://developer.mozilla.org/web-tech/2008/10/10/svg-external-document-references/))
