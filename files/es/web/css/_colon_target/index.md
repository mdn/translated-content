---
title: ":target"
slug: Web/CSS/:target
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:target`** de [CSS](/es/docs/Web/CSS) representa un elemento único (el _elemento objetivo_) con un [`id`](/es/docs/Web/HTML/Global_attributes#id) que coincide con el fragmento de la URL.

```css
/* Selecciona un elemento con una ID que coincida con el fragmento de la URL actual */
:target {
  border: 2px solid black;
}
```

Por ejemplo, la siguiente URL tiene un fragmento (indicado por el signo #) que apunta a un elemento llamado `section2`:

```
http://www.example.com/index.html#section2
```

El siguiente elemento sería seleccionado por un selector `:target` cuando la URL actual sea igual a la anterior:

```html
<section id="section2">Ejemplo</section>
```

## Sintaxis

{{csssyntax}}

## Ejemplos

### Una tabla de contenido

La pseudo-clase `:target` se puede usar para resaltar la parte de una página a la que se ha vinculado desde una tabla de contenido.

#### HTML

```html
<h3>Tabla de contenido</h3>
<ol>
  <li><a href="#p1">¡Salta al primer párrafo!</a></li>
  <li><a href="#p2">¡Salta al segundo párrafo!</a></li>
  <li>
    <a href="#nowhere"
      >Este enlace no va a ninguna parte, porque el objetivo no existe.</a
    >
  </li>
</ol>

<h3>Mi artículo divertido</h3>
<p id="p1">
  Puede orientar elegir como blanco <i>este párrafo</i> utilizando un fragmento
  de URL. ¡Haz clic en el enlace de arriba para probar!
</p>
<p id="p2">
  Este es <i>otro párrafo</i>, también accesible desde los enlaces de arriba.
  ¿No es encantador?
</p>
```

#### CSS

```css
p:target {
  background-color: gold;
}

/* Agrega un pseudo-elemento dentro del elemento de destino */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/* Estilo de elementos en cursiva dentro del elemento de destino */
p:target i {
  color: red;
}
```

#### Resultado

{{EmbedLiveSample('Una_tabla_de_contenido', 500, 300)}}

### CSS-Puro lightbox

Puede usar la pseudo-clase `:target` para crear un lightbox sin usar JavaScript. Esta técnica se basa en la capacidad de los enlaces de anclaje para señalar elementos que están inicialmente ocultos en la página. Una vez segmentado, el CSS cambia su `display` para que se muestren.

> **Nota:** Un CSS-Puro lightbox más completo basado en la pseudoclase `:target` está [disponible en GitHub](https://github.com/madmurphy/takefive.css/) ([demo](https://madmurphy.github.io/takefive.css/)).

#### HTML

```html
<ul>
  <li><a href="#ejemplo1">Abrir ejemplo #1</a></li>
  <li><a href="#ejemplo2">Abrir ejemplo #2</a></li>
</ul>

<div class="lightbox" id="ejemplo1">
  <figure>
    <a href="#" class="close"></a>
    <figcaption>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis enim,
      placerat id eleifend eu, semper vel sem.
    </figcaption>
  </figure>
</div>

<div class="lightbox" id="ejemplo2">
  <figure>
    <a href="#" class="close"></a>
    <figcaption>
      Cras risus odio, pharetra nec ultricies et, mollis ac augue. Nunc et diam
      quis sapien dignissim auctor. Quisque quis neque arcu, nec gravida magna.
    </figcaption>
  </figure>
</div>
```

#### CSS

```css
/* lightbox sin abrir */
.lightbox {
  display: none;
}

/* lightbox abierto */
.lightbox:target {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Contenido de Lightbox */
.lightbox figcaption {
  width: 25rem;
  position: relative;
  padding: 1.5em;
  background-color: lightpink;
}

/* Botón Cerrar */
.lightbox .close {
  position: relative;
  display: block;
}

.lightbox .close::after {
  right: -1rem;
  top: -1rem;
  width: 2rem;
  height: 2rem;
  position: absolute;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 50%;
  color: white;
  content: "×";
  cursor: pointer;
}

/* superposición Lightbox */
.lightbox .close::before {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  content: "";
  cursor: default;
}
```

#### Resultado

{{EmbedLiveSample('CSS-Puro_lightbox', 500, 220)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando la pseudoclase :target en selectores](/es/docs/Using_the_:target_selector)
