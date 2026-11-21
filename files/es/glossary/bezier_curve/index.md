---
title: Curva de Bézier
slug: Glossary/Bezier_curve
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Una **curva de Bézier** (se pronuncia \[bezje]) es una curva descrita matemáticamente que se usa en gráficos por computadora y en animación. En las imágenes vectoriales, se emplean para modelar curvas suaves que pueden escalarse indefinidamente.

La curva se define mediante un conjunto de puntos de control, con un mínimo de dos. Los gráficos y las animaciones relacionados con la web suelen emplear curvas de Bézier cúbicas, es decir, curvas con cuatro puntos de control: P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub> y P<sub>3</sub>.

Para dibujar una curva de Bézier cuadrática, se trazan dos líneas imaginarias: una desde P<sub>0</sub> hasta P<sub>1</sub> y otra desde P<sub>1</sub> hasta P<sub>2</sub>. Se dibuja una tercera línea imaginaria, cuyo punto de inicio se desplaza de manera constante a lo largo de la primera línea auxiliar y su punto final, a lo largo de la segunda. Sobre esta línea imaginaria se dibuja un punto que se desplaza de manera constante desde su punto de inicio hasta su punto final. La curva que describe este punto es la curva de Bézier. Aquí tienes una ilustración animada que muestra cómo se crea la curva:

![Dibujado de una curva de Bézier](bezier_2_big.gif)

## Véase también

- [Curva de Bézier](https://es.wikipedia.org/wiki/Curva_de_B%C3%A9zier) en Wikipedia
- [Funciones de aceleración cúbicas de Bézier en CSS](/es/docs/Web/CSS/Reference/Values/easing-function/cubic-bezier)
- Atributo SVG {{SVGAttr("keySplines")}}
