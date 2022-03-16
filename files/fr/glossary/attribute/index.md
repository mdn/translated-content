---
title: Attribut
slug: Glossary/Attribute
tags:
  - Encodage
  - Glossaire
  - HTML
translation_of: Glossary/Attribute
original_slug: Glossaire/Attribut
---
Un _attribut_ vient compléter un {{Glossary("tag")}}. Sa présence peut être requise ou facultative. Il peut fournir des méta-informations ou changer le comportement du tag. La syntaxe est `name=value` où _name_ est l'identificateur de l'attribut et _value_ sa valeur attribuée.

```html
<!-- Voici un exemple de tag sans attribut -->
<h2>Titre</h2>

<!-- Le même tag avec un attribut -->
<!-- Le titre apparaît désormais sur un fond jaune -->
<h2 style="background-color:yellow";>Titre</h2>
```

On peut aussi trouver des attributs sans valeur quand elle n'est pas nécessaire.

```html
<!-- Un tag avec un attribut indiquant que le champ est requis -->
<input type="text" required>

<!-- Cette notation fonctionne aussi -->
<input type="text" required="required">
```

## Pour approfondir

### Informations techniques

- [Liste des attributs HTML](/fr/docs/Web/HTML/Attributs)
- Informations concernant les [attributs universels](/fr/docs/Web/HTML/Attributs_universels) en HTML.
