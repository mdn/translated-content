---
title: window.close
slug: Web/API/Window/close
tags:
  - Référence_du_DOM_Gecko
translation_of: Web/API/Window/close
---
{{ ApiRef() }}

### Résumé

Ferme la fenêtre référencée.

### Syntaxe

    window.close();

### Description

Lorsque cette méthode est appelée, la fenêtre référencée est fermée.

Cette méthode est uniquement autorisée à être appelée pour des fenêtres qui ont été ouvertes par un script à l'aide de la méthode [window.open](fr/DOM/window.open). Si la fenêtre n'a pas été ouverte par un script, l'erreur suivante apparaît dans la console JavaScript : `Scripts may not close windows that were not opened by script.`

#### Exemples

##### Fermeture d'une fenêtre ouverte avec `window.open()`

```html
<script type="text/javascript">
// Variable globale pour stocker une référence vers la fenêtre ouverte
var fenetreOuverte;

function ouvrirFenetre()
{
  fenetreOuverte = window.open('details.html');
}
function fermerFenetreOuverte()
{
  fenetreOuverte.close();
}
</script>
```

##### Fermeture de la fenêtre courante

```html
<script type="text/javascript">
function fermerFenetreCourante()
{
  window.close();
}
</script>
```

### Spécification

DOM Level 0. `window.close()` ne fait partie d'aucune spécification ni recommandation technique du W3C.

### Référence additionnelle

- [window.close() sur MSDN](http://msdn.microsoft.com/library/default.asp?url=/workshop/author/dhtml/reference/methods/close_0.asp)
