---
title: "::file-selector-button"
slug: Web/CSS/::file-selector-button
---

{{CSSRef}}

El [pseudoelemento](/es/docs/Web/CSS/Pseudo-elements) [CSS](/es/docs/Web/CSS) **`::file-selector-button`** representa el botón de un {{HTMLElement("input") }} con el atributo [`type="file"`](/es/docs/Web/HTML/Element/input/file).

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-file-selector-button.html", "tabbed-shorter")}}

> **Nota:** Las versiones anteriores de navegadores compatibles con WebKit/Blink como Chrome, Opera y Safari (indicados por el prefijo `-webkit`) admitían un pseudoelemento no estándar `::-webkit-file-upload-button`.
>
> Legacy Edge y las versiones posteriores de IE admitían un pseudoelemento no estándar `::-ms-browse`.
>
> Ambos pseudo-elementos tienen el mismo propósito que `::file-selector-button`.

## Sintaxis

```css
selector::file-selector-button
```

## Ejemplos

### Ejemplo básico

#### HTML

```html
<form>
  <label for="fileUpload">Subir archivo</label>
  <input type="file" id="fileUpload" />
</form>
```

#### CSS

```css hidden
form {
  display: flex;
  gap: 1em;
  align-items: center;
}
```

```css
input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}
```

#### Resultado

{{EmbedLiveSample("Ejemplo básico", "100%", 150)}}

Ejemplo con respaldo para navegadores antiguos que admiten los prefijos `-webkit` y `-ms`. Tenga en cuenta que, como selector, deberá escribir el bloque de código completo dos veces, ya que un selector no reconocido invalida toda la lista.

Tenga en cuenta que `::file-selector-button` es un elemento completo y, como tal, coincide con las reglas de la hoja de estilo del [_User-Agent_](/es/docs/Web/HTTP/Headers/User-Agent). En particular, las fuentes y los colores no heredarán necesariamente del elemento `input`.

### Ejemeplo con respaldo

#### HTML

```html
<form>
  <label for="fileUpload">Subir archivo</label>
  <input type="file" id="fileUpload" />
</form>
```

#### CSS

```css hidden
form {
  display: flex;
  gap: 1em;
  align-items: center;
}
```

```css
input[type="file"]::-ms-browse {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
}

input[type="file"]::-webkit-file-upload-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::-ms-browse:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type="file"]::-webkit-file-upload-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type="file"]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}
```

#### Resultado

{{EmbedLiveSample("Ejemeplo con respaldo", "100%", 150)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Extensiones CSS de WebKit](/es/docs/Web/CSS/WebKit_Extensions)
- [Extensiones CSS de Microsoft](/es/docs/Web/CSS/Microsoft_Extensions)
- [API de entradas de archivos y directorios](/es/docs/Web/API/File_and_Directory_Entries_API)
- [Compatibilidad con la API de entradas de archivos y directorios en Firefox](/es/docs/Web/API/File_and_Directory_Entries_API/Firefox_support)
- [`<input type="file">`](/es/docs/Web/HTML/Element/input/file)
