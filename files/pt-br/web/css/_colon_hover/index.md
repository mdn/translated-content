---
title: ":hover"
slug: Web/CSS/:hover
---

{{ CSSRef() }}

## Resumo

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) `:hover` corresponde quando o usuário designa um elemento com um dispositivo apontador, mas não necessariamente o ativa. Este estilo pode ser substituído por qualquer outra pseudo-classe de link-relacionados, isto é {{ cssxref(":link") }}, {{ cssxref(":visited") }}, e {{ cssxref(":active") }}, aparecendo em regras subsequentes. Na ordem para estilizar apropriadamente links, você precisa colocar a regra`:hover`depois das regras `:link` e `:visited` mas antes da regra `:active`, como definido pela ordem _LVHA_: `:link — :visited — :hover — :active.`

A pseudo-class `:hover` pode ser aplicada a qualquer [pseudo-elemento.](/pt-BR/docs/Web/CSS/Pseudo-elements) {{experimental_inline}}.

User agents visuais como Firefox, Internet Explorer, Safari, Opera ou Chrome, aplicam o estilo associado quando o cursor(mouse pointer) passa sobre um elemento.

> **Nota:** Em telas de toque (touch screens) :hover é impossível ou problemático. Dependendo do navegador a pseudo-classe :hover pode nunca funcionar, ou funcionar apenas por um curto momento depois de "tocar" um elemento, ou podem continuar a funcionar mesmo depois que o usuário pare de "tocar" o elemento até que o usuário toque outro elemento. Como dispositivos touchscreen são comuns, é importante para desenvolvedores web não terem conteúdos acessíveis apenas quando passamos sobre ele, uma vez que esse conteúdo é mais complicado ou impossível de acessar para usuários desses dispositivos.

## Exemplos

```css
:link:hover {
  outline: dotted red;
}

.foo:hover {
  background: gold;
}
```

### Menu dropdown

Com a pseudo-classe`:hover`você pode criar algoritmos complexos de cascata. Esta é uma técnica comumente usada, por exemplo, para criar **menus dropdown com CSS** puro (apenas utilizando CSS, sem usar [JavaScript](/pt-Br/JavaScript)). A essência desta técnica é criação de uma regra como a seguinte:

```css
div.menu-bar ul ul {
  display: none;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

para ser aplicada a uma estrutura HTML como a seguinte:

```html
<div class="menu-bar">
  <ul>
    <li>
      <a href="example.html">Menu</a>
      <ul>
        <li>
          <a href="example.html">Link</a>
        </li>
        <li>
          <a class="menu-nav" href="example.html">Submenu</a>
          <ul>
            <li>
              <a class="menu-nav" href="example.html">Submenu</a>
              <ul>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
              </ul>
            </li>
            <li><a href="example.html">Link</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

Veja nosso [exemplo de menu dropdown baseado em CSS](/@api/deki/files/6238/=css_dropdown_menu.html) para entender melhor.

### Galeria com imagens full-size e previews

Você pode usar a pseudo-classe `:hover` para construir uma galeria de imagem, exibindo imagens full-size apenas quando o mouse passa sobre as imagens. Veja [esse exemplo](/@api/deki/files/6247/=css-gallery.zip) para uma possível dica.

> **Nota:** Para efeitos análogos, mas baseado na pseudo-classe [`:checked`](/pt-BR/CSS/%3Achecked) (aplicada para esconder radioboxes), veja [esse demo](/@api/deki/files/6268/=css-checked-gallery.zip), tirado desta página [En/CSS/:checked.](/pt-BR/CSS/%3Achecked)

## Especificações

| Especificação                                                                           | Status                        | Comentário                                    |
| --------------------------------------------------------------------------------------- | ----------------------------- | --------------------------------------------- |
| {{ SpecName('CSS4 Selectors', '#hover', ':hover') }}                                    | {{ Spec2('CSS4 Selectors') }} | Pode ser aplicado a qualquer pseudo-elemento. |
| {{ SpecName('CSS3 Selectors', '#the-user-action-pseudo-classes-hover-act', ':hover') }} | {{ Spec2('CSS3 Selectors') }} | Sem mudança significativa.                    |
| {{ SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':hover') }}              | {{ Spec2('CSS2.1') }}         | definição inicial.                            |

## Compatibilidade com navegadores

{{Compat("css.selectors.hover")}}
