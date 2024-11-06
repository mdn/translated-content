---
title: ":enabled"
slug: Web/CSS/:enabled
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:enabled`** permet de cibler un élément activé. Un élément est activé s'il peut être sélectionné, si on peut cliquer dessus ou si on peut y saisir du texte ou y passer le focus (un élément peut également être dans un état désactivé).

```css
/* Cible n'importe quel élément <input> actif */
input:enabled {
  color: #22aa22;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

Dans cet exemple, les textes des éléments activés seront verts alors que ceux des éléments désactivés seront gris. L'utilisateur peut ainsi reconnaître les éléments avec lesquels interagir.

### HTML

```html
<form action="url_of_form">
  <label for="PremierChamp">Premier champ (activé) :</label>
  <input type="text" id="PremierChamp" value="Titi" /><br />

  <label for="DeuxiemeChamp">Deuxième champ (désactivé) :</label>
  <input
    type="text"
    id="DeuxiemeChamp"
    value="Toto"
    disabled="disabled" /><br />

  <input type="button" value="Envoyer" />
</form>
```

### CSS

```css
input:enabled {
  color: #22aa22;
}

input:disabled {
  color: #d9d9d9;
}
```

### Résultat

{{EmbedLiveSample("Exemples",550,95)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":disabled")}}
