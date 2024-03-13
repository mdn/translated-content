---
title: Microdatos
slug: Web/HTML/Microdata
---

## Resumen

Los microdatos son una especificación HTML de [WHATWG](/es/docs/Glossary/WHATWG) que se emplea para anidar metadatos en el contenido existente de las páginas web.\[1] Buscadores, arañas web y navegadores pueden extraer y procesar los microdatos a partir de una página y utilizarlos para proveer una experiencia más enriquecida para los usuarios. Los buscadores se benefician considerablemente del acceso directo a estos datos estructurados, ya que les permite entender la información contenida en las páginas y ofrecer mejores resultados a sus usuarios. Los microdatos utilizan un vocabulario de apoyo para describir tanto los elementos como conjuntos de nombre y valor y así asignar valores a sus propiedades. Los microdatos representan un intento de brindar una manera más sencilla de anotar elementos HTML con etiquetas legibles por máquinas que los métodos similares consistentes en usar RDFa y microformatos.

El Grupo de Trabajo de HTML del W3C no pudo encontrar un editor que se encargase de la especificación y, por ende, puso término a su desarrollo en 2013 con una «nota».

En un nivel elevado, los microdatos consisten de un grupo de conjuntos nombre-valor. Tales grupos se denominan elementos, y cada conjunto nombre-valor es una propiedad. Los elementos y las propiedades los representan elementos ordinarios.

- Para crear un elemento, se utiliza el atributo **itemscope** ('alcance de elemento').
- Para añadir una propiedad a un elemento, el atributo **itemprop** ('propiedad de elemento') se emplea en uno de los descendientes del elemento.

## Vocabularios

Google, así como otros de los principales buscadores, admiten el vocabulario para datos estructurados de [Schema.org](schema.org). Este vocabulario define un conjunto estandarizado de nombres de tipos y de propiedades: por ejemplo, [Evento musical de Schema.org](http://schema.org/MusicEvent) señala conciertos, e incluye las propiedades _[startDate](http://schema.org/startDate)_ ('fecha inicial') y _[location](http://schema.org/location)_ ('ubicación') para definir los detalles clave del acontecimiento. En este caso, [Evento musical de Schema.org](http://schema.org/MusicEvent) es el URL usado por _itemtype_ y _startDate_, y la ubicación corresponde a las _itemprop_ que defina [Evento musical de Schema.org](http://schema.org/MusicEvent).

> **Nota:** para obtener más información sobre los atributos _itemtype_, véase <http://schema.org/Thing> (en inglés)

Los vocabularios de microdatos brindan la semántica, o el significado, de los elementos. Los programadores web pueden diseñar un vocabulario personalizado o servirse de los que existen disponibles en la web, como el ampliamente utilizado vocabulario de [Schema.org](http://schema.org). Schema.org ofrece una colección de vocabularios de etiquetado usados frecuentemente.

Vocabularios usados frecuentemente:

- Obras creativas: _[CreativeWork](http://schema.org/CreativeWork)_ ('obra creativa'),_ [Book](http://schema.org/Book)_ ('libro'), _[Movie](http://schema.org/Movie)_ (película),_ [MusicRecording](http://schema.org/MusicRecording)_ ('grabación musical'),_ [Recipe](http://schema.org/Recipe)_ ('receta'),_ [TVSeries](http://schema.org/TVSeries)_ ('serie de televisión')
- Objetos distintos del texto incrustados: _[AudioObject](http://schema.org/AudioObject)_ ('objeto de audio'), _[ImageObject](http://schema.org/ImageObject)_ ('objeto de imagen'),_ [VideoObject](http://schema.org/VideoObject)_ ('objeto de vídeo')
- _[Event](http://schema.org/Event)_ ('acontecimiento')
- [Tipos relativos a la salud y la medicina](http://schema.org/docs/meddocs.html): las notas sobre los tipos relativos a la salud y la medicina se encuentran bajo _[MedicalEntity](http://schema.org/MedicalEntity)_ ('entidad médica')
- _[Organization](http://schema.org/Organization)_ ('organización')
- _[Person](http://schema.org/Person)_ ('persona')
- _[Place](http://schema.org/Place)_ ('sitio'), _[LocalBusiness](http://schema.org/LocalBusiness)_ ('negocio local'), _[Restaurant](http://schema.org/Restaurant)_ ('restaurante')
- _[Product](http://schema.org/Product)_ ('producto'), _[Offer](http://schema.org/Offer)_ ('oferta'), _[AggregateOffer](http://schema.org/AggregateOffer)_ ('oferta general')
- _[Review](http://schema.org/Review)_ ('reseña'), _[AggregateRating](http://schema.org/AggregateRating)_ ('valoración totalizada')
- _[Action](http://schema.org/Action)_ ('acción')
- _[Thing](http://schema.org/Thing)_ ('cosa')
- _[Intangible](http://schema.org/Intangible)_

Con el objeto de mejorar los resultados de las búsquedas, las empresas operarias de los principales buscadores, como Google, Microsoft y Yahoo!, dependen del vocabulario de [Schema.org](http://schema.org/). Para algunos propósitos específicos, es necesario diseñar un vocabulario especializado. Siempre que resulta posible, se anima a los autores a servirse de vocabularios existentes, dado que esto facilita la reutilización del contenido.

## Regionalización

En algunos casos, los buscadores que dan servicio a determinadas regiones pueden ofrecer ampliaciones de los microdatos específicas para tales regiones. Por ejemplo, [Yandex](https://www.yandex.com/), un buscador importante en Rusia, admite microformatos como _hCard_ (datos de contacto de empresas), _hRecipe_ (recetas de cocina), _hReview_ (reseñas de mercado) y _hProduct_ (datos de productos) y proporciona su propio formato para definir términos y mostrar artículos enciclopédicos. Se creó esta ampliación para solucionar problemas relativos a la transliteración entre los alfabetos cirílico y latino. Como consecuencia de la aplicación de parámetros de marcado adicionales del vocabulario de Schema, la indización de la información de sitios web en lengua rusa se hizo considerablemente más satisfactoria.

## Atributos globales

_[itemid](/es/docs/Web/HTML/Global_attributes/itemid)_: el identificador unívoco y global de un elemento.

_[itemprop](/es/docs/Web/HTML/Global_attributes/itemprop)_: utilizado para añadir propiedades a un elemento. Cualquier elemento HTML puede contener un atributo _itemprop_ definido, y tal _itemprop_ consiste de un nombre y un valor.

_[itemref](/es/docs/Web/HTML/Global_attributes/itemref)_: las propiedades que no desciendan de un elemento y contengan el atributo `itemscope` pueden asociarse con el elemento a través de una _**itemref**_. _Itemref_ proporciona una lista de identificadores de elementos (distintos de los `itemid`s) con propiedades adicionales en otras partes del documento.

[_itemscope_](/es/docs/Web/HTML/Global_attributes/itemscope): _Itemscope_ (por lo general) funciona en conjunto con [_itemtype_](/es/docs/Web/HTML/Global_attributes/itemtype)para especificar que el HTML contenido en un bloque se refiere a un término concreto. _itemscope_ crea el elemento y define el alcance del _itemtype_ asociado con él. _itemtype_ es un URL válido de un vocabulario (como [Schema.org](http://schema.org/)) que describe el elemento y el contexto de sus propiedades.

[_itemtype_](/es/docs/Web/HTML/Global_attributes/itemtype): Especifica el URL del vocabulario que se empleará para definir _itemprops_ ('propiedades de elementos') en la estructura de datos. Se emplea _[Itemscope](/es/docs/Web/HTML/Global_attributes/itemscope)_ para establecer el alcance del área de funcionamiento del vocabulario establecido por _itemtype_ dentro de la estructura de datos.

## Ejemplo

### HTML

```html
<div itemscope itemtype="http://schema.org/SoftwareApplication">
  <span itemprop="name">Angry Birds</span> -

  REQUIRES <span itemprop="operatingSystem">ANDROID</span><br>
  <link itemprop="applicationCategory" href="http://schema.org/GameApplication"/>

  <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
    RATING:
    <span itemprop="ratingValue">4.6</span> (
    <span itemprop="ratingCount">8864</span> ratings )
  </div>

  <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
    Price: $<span itemprop="price">1.00
    <meta itemprop="priceCurrency" content="MXN" />
  </div>
</div>
```

### Datos estructurados

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="1" rowspan="4">itemscope</td>
      <td>itemtype</td>
      <td colspan="2" rowspan="1">
        SoftwareApplication (http://schema.org/SoftwareApplication)
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Angry Birds</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>operatingSystem</td>
      <td>ANDROID</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>applicationCategory</td>
      <td>GameApplication (http://schema.org/GameApplication)</td>
    </tr>
    <tr>
      <td colspan="1" rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2" rowspan="1">
        aggregateRating [AggregateRating]
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.6</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingCount</td>
      <td>8864</td>
    </tr>
    <tr>
      <td colspan="1" rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2" rowspan="1">offers [Offer]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>price</td>
      <td>1.00</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>priceCurrency</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>

### Resultado

{{EmbedLiveSample('', '', '100')}}

> **Nota:** una útil herramienta para extraer estructuras de microdatos a partir de HTML es la [Herramienta de pruebas de datos estructurados](https://developers.google.com/structured-data/testing-tool/) de Google. Ponla a prueba en el HTML mostrado más arriba.

## Véase también

- [Atributos globales](/es/docs/Web/HTML/Global_attributes)
