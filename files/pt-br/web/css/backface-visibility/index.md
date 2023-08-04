---
title: backface-visibility
slug: Web/CSS/backface-visibility
---

{{CSSRef}}{{SeeCompatTable}}

## Sumário

A propriedade [CSS](/pt-BR/docs/CSS) **`backface-visibility`** determina se deve ser exibido ou não a parte de trás do elemento para o usuário. A parte de trás de um elemento é sempre um fundo transparente, deixando, quando visível, uma imagem espelho da parte da frente a ser exibida.

Há casos quando nós não queremos que a parte da frente de um elemento seja visível pela parte de trás, quando estamos fazendo um efeito de giro de cartões (colocando dois elementos lado a lado).

Esta propriedade não possui nenhum efeito em transformações 2D quando não há nenhum tipo de perspectiva.

{{cssinfo}}

## Sintaxe

```css
backface-visibility: visible;
backface-visibility: hidden;
```

### Valores

Esta propriedade tem dois valores (exclusivos):

- `visible` significa que a parte de trás estará visível, permitindo que a parte da frente seja exibida como espelho
- `hidden` significa que a parte de trás não é visível, sendo então escondida pela parte da frente do elemento

### Sintaxe formal

{{csssyntax}}

## Exemplos

### Cubos com faces transparentes

#### Conteúdo HTML

```html
<table>
  <tbody>
    <tr>
      <th><code>backface-visibility: visible;</code></th>
      <th><code>backface-visibility: hidden;</code></th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube showbf">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
        <p>
          Todas as faces são transparentes e há três faces atrás que estão
          visíveis através das faces da frente.
        </p>
      </td>
      <td>
        <div class="container">
          <div class="cube hidebf">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
        <p>
          Nenhuma face é opaca, mas as três faces de trás estarão sempre
          escondidas agora.
        </p>
      </td>
    </tr>
  </tbody>
</table>
```

#### Conteúdo CSS

```css
/* Shorthand classes that will show or hide the three back faces of the "cube" */
.hidebf div {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.showbf div {
  backface-visibility: visible;
  -webkit-backface-visibility: visible;
}

/* Define the container div, the cube div, and a generic face */
.container {
  width: 150px;
  height: 150px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  perspective: 550px;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
  -webkit-perspective: 300px;
  -webkit-perspective-origin: 150% 150%;
  -webkit-transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* Define each face based on direction */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
  -webkit-transform: translateZ(50px);
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
  -webkit-transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
  -webkit-transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
  -webkit-transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
  -webkit-transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
  -webkit-transform: rotateX(-90deg) translateZ(50px);
}

/* Make the table a little nicer */
th,
p,
td {
  background-color: #eeeeee;
  margin: 0px;
  padding: 6px;
  font-family: sans-serif;
  text-align: left;
}
```

#### Resultado

{{EmbedLiveSample('Cubos_com_faces_transparentes', 620, 460)}}

## Especificações

| Especificação                                                                           | Status                       | Comentário        |
| --------------------------------------------------------------------------------------- | ---------------------------- | ----------------- |
| {{SpecName('CSS3 Transforms', '#backface-visibility-property', 'backface-visibility')}} | {{Spec2('CSS3 Transforms')}} | Definição Inicial |

## Compatibilidade com navegadores

{{Compat("css.properties.backface-visibility")}}

## Veja também

- [Usando transformações CSS](/pt-BR/docs/CSS/Using_CSS_transforms)
