---
title: Optimizing canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
---

{{HTMLElement("canvas")}} es uno de los estándares más utilizados para la representación de gráficos 2D en la Web. Se utiliza ampliamente en los juegos y visualizaciones complejas. Sin embargo, as Web sites and apps push canvas to the limits, el rendimiento comienza a sufrir. This article aims to provide suggestions for optimizing your use of the canvas element, to ensure that your Web site or app performs well.

A continuación una lista de tips par mejorar el rendimiento:

- Repintar primitives similares o objetos repetidos dentro y fuera de la pantalla canvas.
- Batch canvas calls together (for example, draw a poly-line instead of multiple separate lines).
- Avoid floating-point coordinates and use integers instead.
- Avoid unnecessary canvas state changes.
- Render screen differences only, not the whole new state.
- Utilice varios lienzos en capas para escenas complejas.
- Evite la propiedad `shadowBlur` siempre que sea posible.
- Con las animaciones, use {{domxref("window.requestAnimationFrame()")}}.
- Probar el rendimiento con [JSPerf](http://jsperf.com).

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial/Basic_animations")}}
