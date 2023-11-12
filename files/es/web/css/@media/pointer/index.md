---
title: pointer
slug: Web/CSS/@media/pointer
---

{{cssref}}

La [caracteristica](/es/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) **`pointer`** [CSS](/es/docs/CSS) comprueba si el usuario tiene un dispositivo de puntero (como el ratón), y si es así, cuán preciso es el dispositivo de puntero primario.

> **Nota:** Si quieres comprobar la precisión de cualquier dispositivo apuntador, usa [`any-pointer`](/es/docs/Web/CSS/@media/any-pointer) en su lugar.

## Sintaxis

La propiedad `pointer` se especifica como un valor de palabra clave elegido de la lista que figura a continuación.

- `none`
  - : El mecanismo de entrada principal no incluye un dispositivo apuntador.
- `coarse`
  - : El mecanismo primario de entrada incluye un dispositivo de apuntamiento de precisión limitada.
- `fine`
  - : El mecanismo de entrada principal incluye un dispositivo de apuntamiento preciso.

## Ejemplo

Este ejemplo crea una pequeño checkbox para los usuarios con punteros primarios finos y un gran checkbox para los usuarios con punteros primarios gruesos.

### HTML

```html
<input id="test" type="checkbox" /> <label for="test">Mírame!</label>
```

### CSS

```css
input[type="checkbox"] {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: solid;
  margin: 0;
}

input[type="checkbox"]:checked {
  background: gray;
}

@media (pointer: fine) {
  input[type="checkbox"] {
    width: 15px;
    height: 15px;
    border-width: 1px;
    border-color: blue;
  }
}

@media (pointer: coarse) {
  input[type="checkbox"] {
    width: 30px;
    height: 30px;
    border-width: 2px;
    border-color: red;
  }
}
```

### Resultado

{{EmbedLiveSample("Example")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [The `any-pointer` media feature](/es/docs/Web/CSS/@media/any-pointer)
