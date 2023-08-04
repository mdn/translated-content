---
title: Implementando sprites de imagens em CSS
slug: Web/CSS/CSS_images/Implementing_image_sprites_in_CSS
---

{{cssRef}}

**Sprites de imagens** são utilizados em diversas aplicações web onde várias imagens são usadas. Ao invés de incluir cada arquivo de imagem separadamente, é mais amigável com a memória e largura de banda enviar tudo como uma única imagem, diminuindo o número de pedidos em HTTP.

> **Nota:** Quando usando HTTP/2, é mais amigável com a largura de banda usar vários pequenos pedidos.

## Implementação

Suponha que uma imagem é dada a cada item com a classe `toolbtn`:

```css
.toolbtn {
  background: url(myfile.png);
  display: inline-block;
  height: 20px;
  width: 20px;
}
```

A posição do plano de fundo pode ser adicionada tanto com dois valores x, y depois de {{cssxref("url()")}} em background , ou como {{cssxref("background-position")}} . Por exemplo:

```css
#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}
```

Isso vai mover o elemento com a ID 'btn1' 20 pixels para a esquerda e o elemento com a ID 'btn2' 40 pixels para a esquerda (presumindo que ambos tem a classe `toolbtn` atribuída e estão sendo afetados pela regra da imagem acima).

De forma similar, você pode criar um efeito de hover com:

```css
#btn:hover {
  background-position: <pixels para direita>px <pixels para baixo>px;
}
```

## Veja também

- [Demo completa em CSS Tricks](http://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/)
