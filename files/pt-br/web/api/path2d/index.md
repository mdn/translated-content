---
title: Path2D
slug: Web/API/Path2D
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

A **`Path2D`** interface da API Canvas 2D é usada para declarar caminhos que são usados posteriormente em objetos {{domxref("CanvasRenderingContext2D")}}. Os métodos de caminho da interface CanvasRenderingContext2D também estão presentes nessa interface e permitem criar caminhos que você pode reter e reproduzir conforme necessário em uma tela.

## Construtores

- {{domxref("Path2D.Path2D", "Path2D()")}}
  - : `Path2D` construtor. Cria um novo objeto `Path2D`.

## Metodos

- {{domxref("Path2D.addPath()")}}
  - : Adiciona um caminho ao caminho atual.
- {{domxref("CanvasRenderingContext2D.closePath", "Path2D.closePath()")}}
  - : Faz com que o ponto da caneta retorne ao início do sub-caminho atual. Ele tenta desenhar uma linha reta desde o ponto atual até o início. Se a forma já foi fechada ou tem apenas um ponto, essa função não faz nada.
- {{domxref("CanvasRenderingContext2D.moveTo()", "Path2D.moveTo()")}}
  - : Move o ponto inicial de um novo subcaminho para as coordenadas (x, y).
- {{domxref("CanvasRenderingContext2D.lineTo()", "Path2D.lineTo()")}}
  - : Conecta o último ponto no subcaminho às coordenadas x, y com uma linha reta.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()", "Path2D.bezierCurveTo()")}}
  - : Adiciona uma curva cúbica de Bézier ao caminho. Requer três pontos. Os dois primeiros pontos são pontos de controle e o terceiro é o ponto final. O ponto de partida é o último ponto no caminho atual, que pode ser alterado usando moveTo () antes de criar a curva Bézier.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()", "Path2D.quadraticCurveTo()")}}
  - : Adiciona uma curva quadrática de Bézier ao caminho atual.
- {{domxref("CanvasRenderingContext2D.arc()", "Path2D.arc()")}}
  - : Adiciona um arco ao caminho que é centralizado na posição (x, y) com raio r iniciando em startAngle e terminando em endAngle indo na direção dada no sentido anti-horário (padrão no sentido horário).
- {{domxref("CanvasRenderingContext2D.arcTo()", "Path2D.arcTo()")}}
  - : Adiciona um arco ao caminho com os pontos de controle e raio dados, conectados ao ponto anterior por uma linha reta.
- {{domxref("CanvasRenderingContext2D.ellipse()", "Path2D.ellipse()")}}
  - : Adiciona uma elipse ao caminho que é centralizado na posição (x, y) com os raios radiusX e radiusY começando em startAngle e terminando em endAngle indo na direção determinada no sentido anti-horário (padrão no sentido horário).
- {{domxref("CanvasRenderingContext2D.rect()", "Path2D.rect()")}}
  - : Cria um caminho para um retângulo na posição (x, y) com um tamanho determinado por _width_ e _height_.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("CanvasRenderingContext2D")}}
