---
title: itemprop
slug: Web/HTML/Global_attributes/itemprop
tags:
  - atributo
  - metatag
translation_of: Web/HTML/Global_attributes/itemprop
original_slug: Web/HTML/Atributos_Globales/itemprop
---
<p style="margin: 0.5em 0px 0px 50px; padding-top: 0px; padding-bottom: 2px; color: rgb(58, 73, 86); font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, Tahoma, Arial, sans-serif; font-size: 12px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 19.2px; text-align: left; text-indent: 0px; text-transform: none; white-space: normal;">Podemos dar más información al motor de búsqueda acerca de imágenes o datos adentro de cualquier tipo de etiquetas , como las propiedades : actores , clasificación ,genero . Para etiquetar las propiedades de un elemento , usa el atributo itemprop . Por ejemplo , para identificar al actor de una película añadir itemprop="director" al elemento que encierra el nombre del director.</p>

<p style="margin: 0.5em 0px 0px 50px; padding-top: 0px; padding-bottom: 2px; color: rgb(58, 73, 86); font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, Tahoma, Arial, sans-serif; font-size: 12px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 19.2px; text-align: left; text-indent: 0px; text-transform: none; white-space: normal;">Aquí hay un ejemplo .</p>

<pre style="font-family: Courier, monospace; font-size: 14.4px; width: auto; padding: 0px 5px 2px 10px; margin: 0.5em 0px 0px 50px; text-align: left; overflow: auto; color: rgb(58, 73, 86); font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 19.2px; text-indent: 0px; text-transform: none; background: rgb(225, 225, 225);">&lt;div itemscope itemtype="http://schema.org/Movie"&gt;
  &lt;h1 <strong>itemprop="name"</strong>&gt;Avatar&lt;/h1&gt;
  &lt;span&gt;Director: &lt;span <strong>itemprop="director"</strong>&gt;James Cameron&lt;/span&gt; (born August 16, 1954)&lt;/span&gt;
  &lt;span <strong>itemprop="genre"</strong>&gt;Ciencia ficcion&lt;/span&gt;
  &lt;a href="../movies/avatar-theatrical-trailer.html" <strong>itemprop="trailer"</strong>&gt;Trailer&lt;/a&gt;
&lt;/div&gt;</pre>

<p> </p>

<p>             Para más información acerca de los atributos relacionados consultar  https://schema.org/docs/gs.html</p>
