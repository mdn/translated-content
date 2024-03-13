---
title: Ejemplo 3 del contexto de apilamiento
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3
---

« [CSS](/en/CSS) « [Understanding CSS z-index](/en/CSS/Understanding_z-index)

Este último ejemplo muestra los problemas que surgen cuando se combinan varios elementos posicionados en una jerarquía HTML multi nivel y cuando los valores z-index son asignados usando selectores de clase.

Tomemos como ejemplo un menú jerárquico de tres niveles formado por varios DIVs posicionados. DIVs de segundo y tercer nivel aparecen cuando se pone el cursor encima o se hace clic en sus padres. Usualmente este tipo de menú es generado mediante un script del lado del cliente o del lado del servidor, así que las reglas de estilos son asignadas con un selector de clase en lugar de un selector de id.

Si los tres niveles del menú se superponen parcialmente, entonces gestionar el apilamiento se podría convertir en un problema.

El menú de primer nivel solo tiene posición relativa, así que ningún contexto de apilamiento es creado.

El menú de segundo nivel tiene posición absoluta dentro del elemento padre. Para colocarlo encima de todos los menus de primer nivel, usamos z-index. El problema es que para cada menú de segundo nivel, un contexto de apilamiento es creado y cada menú de tercer nivel pertenece al contexto de su padre.

De manera que un menú de tercer nivel va a ser apilado bajo los menus de segundo nivel porque todos los menus de segundo nivel comparten el mismo valor z-index y las reglas de apilamiento por defecto son aplicadas.

Para entender mejor la situación, esta es la jerarquía del contexto de apilamiento:

- contexto de apilamiento raíz

  - NIVEL #1

    - NIVEL #2 (z-index: 1)

      - NIVEL #3
      - ...
      - NIVEL #3

    - NIVEL #2 (z-index: 1)
    - ...
    - NIVEL #2 (z-index: 1)

  - NIVEL #1
  - ...
  - NIVEL #1

Este problema puede ser evitado al remover la superposición entre menus de diferentes niveles, o usando valores z-index individuales (y diferentes) asignados a través del selector id en lugar de un selector de clase, o aplanando la jerarquía HTML.

> **Nota:** En el código fuente vas a ver que los menus de segundo y tercer nivel están hechos de varios DIVs contenidos en un contenedor con posición absoluta. Esto es útil para agrupar y posicionarlos todos a la vez.

### Código fuente de ejemplo

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <style type="text/css">
      div {
        font: 12px Arial;
      }

      span.bold {
        font-weight: bold;
      }

      div.lev1 {
        width: 250px;
        height: 70px;
        position: relative;
        border: 2px outset #669966;
        background-color: #ccffcc;
        padding-left: 5px;
      }

      #container1 {
        z-index: 1;
        position: absolute;
        top: 30px;
        left: 75px;
      }

      div.lev2 {
        opacity: 0.9;
        width: 200px;
        height: 60px;
        position: relative;
        border: 2px outset #990000;
        background-color: #ffdddd;
        padding-left: 5px;
      }

      #container2 {
        z-index: 1;
        position: absolute;
        top: 20px;
        left: 110px;
      }

      div.lev3 {
        z-index: 10;
        width: 100px;
        position: relative;
        border: 2px outset #000099;
        background-color: #ddddff;
        padding-left: 5px;
      }
    </style>
  </head>

  <body>
    <br />

    <div class="lev1">
      <span class="bold">LEVEL #1</span>

      <div id="container1">
        <div class="lev2">
          <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;

          <div id="container2">
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
          </div>
        </div>

        <div class="lev2">
          <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;
        </div>
      </div>
    </div>

    <div class="lev1">
      <span class="bold">LEVEL #1</span>
    </div>

    <div class="lev1">
      <span class="bold">LEVEL #1</span>
    </div>

    <div class="lev1">
      <span class="bold">LEVEL #1</span>
    </div>
  </body>
</html>
```

{{EmbedLiveSample('', '320', '330')}}

### También puedes ver

- [Apilando sin z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Stacking_without_z-index) : Reglas de apilamiento por defecto
- [Apilamiento y float](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Apilamiento_y_float) : Cómo son manejados los elementos flotantes
- [Agregando z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Agregando_z-index) : Usando z-index para cambiar el apilamiento por defecto
- [El contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/El_contexto_de_apilamiento) : Notas sobre el contexto de apilamiento
- [Ejemplo 1 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_1_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en el último nivel
- [Ejemplo 2 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_2_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en todos los niveles

### Información del documento original

- Autor(es): Paolo Lombardi
- Este artículo es una traducción al inglés de un artículo que escribí en italiano para [YappY](http://www.yappy.it). He dado el derecho de compartir el contenido bajo [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
