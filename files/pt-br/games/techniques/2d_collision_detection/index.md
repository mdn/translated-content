---
title: Detecção de Colisão 2D
slug: Games/Techniques/2D_collision_detection
---

{{GamesSidebar}}

Algoritmos para detectar colisões em jogos 2D dependem do tipo de formas que podem colidir (por exemplo, retângulo para retângulo, retângulo para círculo, círculo para círculo). Geralmente, você terá uma forma genérica simples que abrange a entidade conhecida como "hitbox", portanto, mesmo que a colisão não seja perfeita, ela terá boa aparência e terá bom desempenho em várias entidades. Este artigo fornece uma revisão das técnicas mais comuns usadas para fornecer detecção de colisão em jogos 2D.

## Caixa delimitadora alinhada por eixo

Uma das formas mais simples de detecção de colisão é entre dois retângulos alinhados no eixo — ou seja, sem rotação. O algoritmo funciona garantindo que não haja nenhum espaço entre os 4 lados dos retângulos. Qualquer lacuna significa que uma colisão não existe.

```js
var rect1 = { x: 5, y: 5, width: 50, height: 50 };
var rect2 = { x: 20, y: 10, width: 10, height: 10 };

if (
  rect1.x < rect2.x + rect2.width &&
  rect1.x + rect1.width > rect2.x &&
  rect1.y < rect2.y + rect2.height &&
  rect1.y + rect1.height > rect2.y
) {
  // collision detected!
}

// filling in the values =>

if (5 < 30 && 55 > 20 && 5 < 20 && 55 > 10) {
  // collision detected!
}
```

```html hidden
<div id="cr-stage"></div>
<p>
  Mova o retângulo com as setas do teclado. Verde significa colisão, azul
  significa não-colisão.
</p>
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```js hidden
Crafty.init(200, 200);

var dim1 = { x: 5, y: 5, w: 50, h: 50 };
var dim2 = { x: 20, y: 10, w: 60, h: 40 };

var rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");

var rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway")
  .fourway(2)
  .attr(dim2)
  .color("blue");

rect2.bind("EnterFrame", function () {
  if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  ) {
    // collision detected!
    this.color("green");
  } else {
    // no collision
    this.color("blue");
  }
});
```

{{ EmbedLiveSample('Rect_code', '700', '300', '', 'Games/Techniques/2D_collision_detection') }}

> **Nota:** [Outro exemplo sem o Canvas ou bibliotecas externas.](https://jsfiddle.net/jlr7245/217jrozd/3/)

## Colisão Circular

Outra forma simples para detecção de colisão é entre dois círculos. Esse algoritmo funciona tomando os pontos centrais dos dois círculos e garantindo que a distância entre os pontos centrais seja menor que os dois raios somados.

```html hidden
<div id="cr-stage"></div>
<p>
  Move the circle with arrow keys. Green means collision, blue means no
  collision.
</p>
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```css hidden
#cr-stage {
  position: static !important;
  height: 200px !important;
}
```

```js hidden
Crafty.init(200, 200);

var dim1 = { x: 5, y: 5 };
var dim2 = { x: 20, y: 20 };

Crafty.c("Circle", {
  circle: function (radius, color) {
    this.radius = radius;
    this.w = this.h = radius * 2;
    this.color = color || "#000000";

    this.bind("Move", Crafty.DrawManager.drawAll);
    return this;
  },

  draw: function () {
    var ctx = Crafty.canvas.context;
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.x + this.radius,
      this.y + this.radius,
      this.radius,
      0,
      Math.PI * 2,
    );
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  },
});

var circle1 = Crafty.e("2D, Canvas, Circle").attr(dim1).circle(15, "red");

var circle2 = Crafty.e("2D, Canvas, Circle, Fourway")
  .fourway(2)
  .attr(dim2)
  .circle(20, "blue");

circle2.bind("EnterFrame", function () {
  var dx = circle1.x + circle1.radius - (circle2.x + circle2.radius);
  var dy = circle1.y + circle1.radius - (circle2.y + circle2.radius);
  var distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < circle1.radius + circle2.radius) {
    // collision detected!
    this.color = "green";
  } else {
    // no collision
    this.color = "blue";
  }
});
```

```js
var circle1 = { radius: 20, x: 5, y: 5 };
var circle2 = { radius: 12, x: 10, y: 5 };

var dx = circle1.x - circle2.x;
var dy = circle1.y - circle2.y;
var distance = Math.sqrt(dx * dx + dy * dy);

if (distance < circle1.radius + circle2.radius) {
  // collision detected!
}
```

{{ EmbedLiveSample('Playable_code', '700', '300', '', 'Games/Techniques/2D_collision_detection') }}

> **Nota:** [Aqui é outro exemplo sem o Canvas ou bibliotecas externas.](https://jsfiddle.net/jlr7245/teb4znk0/20/)

## Teorema do eixo de separação

Este é um algoritmo de colisão que pode detectar uma colisão entre quaisquer dois polígonos \*convexos\*. É mais complicado implementar do que os métodos acima, mas é mais poderoso. A complexidade de um algoritmo como esse significa que precisaremos considerar a otimização de desempenho, abordada na próxima seção.

A implementação do SAT está fora do escopo desta página, portanto, veja os tutoriais recomendados abaixo:

1. [Separating Axis Theorem (SAT) explanation](http://www.sevenson.com.au/actionscript/sat/)
2. [Collision detection and response](http://www.metanetsoftware.com/technique/tutorialA.html)
3. [Collision detection Using the Separating Axis Theorem](http://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169)
4. [SAT (Separating Axis Theorem)](http://www.codezealot.org/archives/55)
5. [Separation of Axis Theorem (SAT) for Collision DDetection](http://rocketmandevelopment.com/blog/separation-of-axis-theorem-for-collision-detection/)

## Performance de Colisão

Embora alguns desses algoritmos para detecção de colisão sejam simples o suficiente para serem calculados, pode ser um desperdício de ciclos testar todas as entidades com todas as outras entidades. Normalmente os jogos dividem a colisão em duas fases, ampla e estreita.

### Fase Larga

A fase ampla deve fornecer uma lista de entidades que \*podem\* estar colidindo. Isso pode ser implementado com uma estrutura de dados espacial que lhe dará uma ideia aproximada de onde a entidade existe e o que existe em torno dela. Alguns exemplos de estruturas de dados espaciais são Quad Trees, R-Trees ou um Spash Hashmap.

### Fase estreita

Quando você tem uma pequena lista de entidades para verificar, você vai querer usar um algoritmo de fase estreita (como os listados acima) para fornecer uma resposta certa sobre se há uma colisão ou não.
