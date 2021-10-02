---
title: element.onblur
slug: Web/API/GlobalEventHandlers/onblur
tags:
  - DOM
  - DOM_0
translation_of: Web/API/GlobalEventHandlers/onblur
---
{{ ApiRef() }}

### Résumé

La propriété **onblur** renvoie le gestionnaire de l'évènement `blur` (perte de focus) pour l'élément courant.

### Syntaxe

    element.onblur = nomFonctionUtilisateur;

- `nomFonctionUtilisateur` est le nom de la fonction utilisateur préalablement définie, sans les parenthèses ni aucun argument. Il est également possible de déclarer une « fonction anonyme », comme :

<!---->

    element.onblur = function() {
        alert("Évènement onblur détecté");
    };

### Exemple

Lorsqu'une zone de saisie n'est plus active suite à une perte du « focus », une boîte de message (alert) est affichée.

```html
<form>
	<input type="text" id="foo" value="Allo!" />
</form>

<script type="text/javascript">

var elem = document.getElementById("foo");

// Attention : afficherMessage(); ou afficherMessage(param); ne fonctionneront pas ici,
// il doit s'agir d'une référence au nom d'une fonction et non d'un appel de cette fonction

elem.onblur = afficherMessage;

function afficherMessage() {
	alert("Évènement onblur detecté!");
}
</script>
```

### Notes

L'évènement `blur` se déclenche lors de la perte de focus d'un élément.

Microsoft Internet Explorer déclenche l'évènement `blur` sur presque tous les éléments, contrairement aux navigateurs Gecko (dont Firefox) qui ne le déclencheront que sur un nombre limité d'éléments.

### Spécification

{{ DOM0() }}
