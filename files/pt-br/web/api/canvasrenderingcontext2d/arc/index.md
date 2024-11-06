---
title: CanvasRenderingContext2D.arc()
slug: Web/API/CanvasRenderingContext2D/arc
---

{{APIRef}}

O método **`CanvasRenderingContext2D.arc()`** da API Canvas 2D adiciona um arco circular para o atual sub-caminhoa (_sub-path_).

## Sintaxe

```
void ctx.arc(x, y, raio, anguloInicial, anguloFinal [, antiHorario]);
```

O método `arc()` cria um arco circular centralizado em `(x, y)` com um `raio`. O caminho inicia-se no `anguloInicial`, e finaliza no `anguloFinal`, e é desenhado no sentido `antiHoario` (o padrão é no sentido horario).

### Parâmetros

- `x`
  - : A coordenada horizontal do centro do arco.
- `y`
  - : A coordenada vertical do centro do arco.
- `raio`
  - : O raio do arco. Deve ser um valor positivo.
- `anguloInicial`
  - : O ângulo em radianos em que o arco começa medido a partir do eixo x positivo.
- `anguloFinal`
  - : O ângulo em que o arco finaliza medido a partir do eixo x positivo.
- `antiHorario` {{optional_inline}}
  - : Um {{jsxref("Boolean")}} opcional. Se `verdadeiro`, desenha o arco no sentido anti-horário entre os ângulos inicial e final. O padrão é `falso` (sentido horário).

## Exemplos

### Desenhando um círculo completo

O exemplo desenha um círculo completo com o método `arc()`.

#### HTML

```html
<canvas></canvas>
```

#### JavaScript

O arco recebe 100 como uma coordenada x, e 75 como uma coordenada y e um raio de 50. para fazer um círculo completo, o arco inicia no ângulo 0 (0º) em radianos e finaliza em um ângulo de 2π radianos (360**°**).

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
```

#### Resultado

{{ EmbedLiveSample('Drawing_a_full_circle', 700, 180) }}

### Diferentes formas demonstradas

Este exemplo desenha diversas formas para mostrar o que é possível fazer com o método `arc()`.

```html hidden
<canvas width="150" height="200"></canvas>
```

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Draw shapes
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 2; j++) {
    ctx.beginPath();
    let x = 25 + j * 50; // coordenada x
    let y = 25 + i * 50; // coordenada y
    let radius = 20; // raio
    let startAngle = 0; // angulo inicial
    let endAngle = Math.PI + (Math.PI * j) / 2; // angulo final
    let anticlockwise = i % 2 == 1; // sentido anti-horário

    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

    if (i > 1) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
}
```

#### Resultado

{{ EmbedLiveSample('Different_shapes_demonstrated', 160, 210, "canvas_arc.png") }}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja mais

- A interface definindo este método: {{domxref("CanvasRenderingContext2D")}}
- Utilize {{domxref("CanvasRenderingContext2D.ellipse()")}} para desenhar um arco elíptico.
