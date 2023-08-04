---
title: itemprop
slug: Web/HTML/Global_attributes/itemprop
---

Podemos dar más información al motor de búsqueda acerca de imágenes o datos adentro de cualquier tipo de etiquetas , como las propiedades : actores , clasificación ,genero . Para etiquetar las propiedades de un elemento , usa el atributo itemprop . Por ejemplo , para identificar al actor de una película añadir itemprop="director" al elemento que encierra el nombre del director.

Aquí hay un ejemplo .

```html
<div itemscope itemtype="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span
    >Director: <span itemprop="director">James Cameron</span> (born August 16,
    1954)</span
  >
  <span itemprop="genre">Ciencia ficcion</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer"
    >Trailer</a
  >
</div>
```

Para más información acerca de los atributos relacionados consultar <https://schema.org/docs/gs.html>
