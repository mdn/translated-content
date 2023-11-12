---
title: calc
slug: Web/CSS/calc
---

{{CSSRef}}

La fonction **`calc()`** peut être utilisée à n'importe quel endroit où une {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;percentage&gt;")}} ou {{cssxref("&lt;integer&gt;")}} est nécessaire. Grâce à `calc()`, il est possible de réaliser des calculs pour déterminer la valeur d'une propriété CSS.

```css
/* property: calc(expression) */
width: calc(100% - 80px);
```

Il est aussi possible d'utiliser `calc()` dans une autre fonction `calc()` et ainsi d'imbriquer les fonctions les unes dans les autres.

## Syntaxe

Une fonction qui prend comme seul argument une expression mathématique et dont le résultat est utilisé comme valeur de retour. L'expression peut être n'importe quelle expression combinant les différents opérateurs suivants, en respectant l'ordre de priorité des opérateurs :

- `+`
  - : Addition
- `-`
  - : Soustraction
- `*`
  - : Multiplication. Au moins un des arguments doit être un {{cssxref("&lt;number&gt;")}}.
- `/`
  - : Division. Il n'est pas possible de diviser par une longueur. Ceci peut être utilisé, par exemple, pour que votre longueur soit une fraction d'une longueur existante. L'opérande droit doit être une valeur de type {{cssxref("&lt;number&gt;")}}.

L'opérande dans l'expression peut utiliser n'importe quelle syntaxe de longueur. Vous pouvez utiliser des unités différentes pour chacune des valeurs si vous le souhaitez. Vous pouvez aussi utiliser les parenthèses pour définir l'ordre des opérations.

### Notes

- Une division par zéro aboutit à une erreur qui est générée par le parseur HTML.
- Les opérateurs `+` et `-` **doivent toujours être entouré d'espaces**. Par exemple l'opérande de `calc(50% -8px)` sera interprété comme une valeur en pourcentage suivie d'une longueur négative, l'expression est invalide. L'opérande de `calc(50% - 8px)` est une valeur en pourcentage suivie d'un signe moins et d'une longueur. Et ainsi, `calc(8px + -50%)` est interprété comme une longueur suivi d'un signe plus et d'un pourcentage négatif.
- Les opérateurs `*` et `/` ne nécessitent pas d'espaces, mais les ajouter pour conserver la cohérence est recommandé.
- Les expressions mathématiques manipulant des pourcentages pour les hauteurs et largeurs de colonnes d'un tableau, de groupes de colonne, de lignes d'un tableau ou de groupes de lignes contribuant à un tableau organisé de façon automatique ou en disposition fixe pourront être traitées comme si c'était `auto` qui avait été utilisé.
- Il est possible d'imbriquer des fonctions `calc()`, auquel cas, les appels « internes » sont considérés comme des parenthèses.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Positionner un objet sur l'écran avec une marge

`calc()` rend le positionnement des objets facile en définissant une marge. Dans cet exemple, le CSS crée une bannière qui s'étend sur toute la fenêtre, avec un espace de 40 pixels entre chaque bout de la bannière et les bords de la fenêtre :

```css
.banniere {
  position: absolute;
  left: 40px;
  width: calc(100% - 80px);
  border: solid black 1px;
  box-shadow: 1px 2px;
  background-color: yellow;
  padding: 6px;
  text-align: center;
  box-sizing: border-box;
}
```

```html
<div class="banniere">C'est une bannière !</div>
```

{{EmbedLiveSample("Positionner_un_objet_sur_l'écran_avec_une_marge", '100%', '60')}}

### Dimensionner automatiquement les champs d'un formulaire pour s'ajuster au conteneur

Un autre cas d'utilisation de `calc()` est d'aider à s'assurer que les champs d'un formulaire s'adaptent à l'espace disponible, sans s'étendre au-delà de la bordure du conteneur, tout en conservant une marge appropriée.

Regardons un peu le CSS :

```css
input {
  padding: 2px;
  display: block;
  width: calc(100% - 1em);
}

#boiteformulaire {
  width: calc(100% / 6);
  border: 1px solid black;
  padding: 4px;
}
```

Dans ce cas, le formulaire est lui-même défini pour utiliser un sixième de la taille disponible de la fenêtre. Ensuite, pour s'assurer que les champs gardent une taille appropriée, nous utilisons `calc()` pour définir qu'ils doivent être de la largeur de leur conteneur moins 1em. Enfin, le HTML suivant utilise le CSS défini :

```html
<form>
  <div id="boiteformulaire">
    <label>Tapez quelque chose :</label>
    <input type="text" />
  </div>
</form>
```

{{EmbedLiveSample("Dimensionner_automatiquement_les_champs_d'un_formulaire_pour_s'ajuster_au_conteneur", '100%', '80')}}

### Imbriquer plusieurs `calc()` grâce aux variables CSS

Prenons la feuille de style suivante :

```css
.toto {
  --largeurA: 100px;
  --largeurB: calc(var(--largeurA) / 2);
  --largeurC: calc(var(--largeurB) / 2);
  width: var(--largeurC);
}
```

Une fois que toutes les variables sont développées, `largeurC` aura la valeur `calc( calc( 100px / 2) / 2)` et sera ensuite affectée à la propriété {{cssxref("width")}} des éléments de la classe `toto`. Tous les `calc()` imbriqués, quel que soit leur nombre, seront convertis en parenthèses, la valeur sera donc calculée comme `calc( ( 100px / 2) / 2)` (soit 25px). En résumé, utiliser des `calc()` imbriqués revient à utiliser des parenthèses.

## Accessibilité

Lorsque vous utilisez `calc()` pour définir la taille d'un texte, assurez-vous d'inclure [une unité de longueur relative](/fr/docs/Web/CSS/length#Unités_de_longueur_relatives). Par exemple :

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

De cette façon, la taille du texte s'adaptera si le lecteur zoome/dézoome.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.4 - W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Firefox 4 : CSS3 `calc()` sur Mozilla Hacks](https://hacks.mozilla.org/2010/06/css3-calc/)
