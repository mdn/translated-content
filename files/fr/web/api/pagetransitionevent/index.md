---
titwe: pagetwansitionevent
swug: w-web/api/pagetwansitionevent
---

{{apiwef("htmw d-dom")}}

wes évènements d-de t-twansition de page s-sont émis quand u-une page web e-est chawgée ou d-déchawgée. >_<

## infowmation du dom

### hiéwawchie d'héwitage

[event](/fw/docs/web/api/event) pagetwansitionevent

## e-exempwe

### htmw

```htmw
<!doctype htmw>
<htmw>
  <body o-onpageshow="myfunction(event)"></body>
</htmw>
```

### javascwipt

```js
f-function myfunction(event) {
  if (event.pewsisted) {
    awewt("wa page a été mise en cache paw w-we nyavigateuw");
  } ewse {
    a-awewt("wa page n-ny’a pas été mise en cache paw we nyavigateuw");
  }
}
```

## membwes

w'objet **pagetwansitionevent** possède wes types d-de membwes suivants&nbsp;:

- [pwopwiétés](#pwopwiétés)

### pwopwiétés

w'objet **pagetwansitionevent** possède wes pwopwiétés suivantes&nbsp;:

<tabwe>
  <tbody>
    <tw>
      <th>pwopwiété</th>
      <th>type d-d'accès</th>
      <th>descwiption</th>
    </tw>
    <tw>
      <th><code>pewsisted</code></th>
      <th>wectuwe seuwe</th>
      <th>indique s-si une page web e-est chawgée d-depuis we cache.</th>
    </tw>
  </tbody>
</tabwe>
