---
title: Compteurs CSS
slug: Web/CSS/CSS_Counter_Styles/Using_CSS_counters
tags:
  - Avancé
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters
original_slug: Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters
---
{{CSSRef}}

Les **compteurs CSS** sont des variables dont les valeurs sont incrémentées par les règles CSS et qui permettent de savoir combien de fois elles sont utilisées. Cela permet par exemple d'adapter la mise en forme du contenu en fonction de son emplacement dans le document.

La valeur d'un compteur peut être manipulée grâce aux propriétés {{cssxref("counter-reset")}}. {{cssxref("counter-increment")}} et on peut les afficher sur la page grâce aux fonctions `counter()` et `counters()` dans la propriété {{cssxref("content")}}.

## Utiliser les compteurs

### Manipuler la valeur d'un compteur

Pour utiliser un compteur CSS, il faut d'abord réinitialiser sa valeur (0 par défaut) à l'aide de {{cssxref("counter-reset")}}. Pour incrémenter un compteur initialisé, on peut utiliser {{cssxref("counter-increment")}}. Attention le nom du compteur ne peut pas être `none`, `inherit` ou `initial`.

### Afficher un compteur

Pour ajouter un compteur au contenu d'un élément, il faut utiliser la fonction {{cssxref("counter")}} ou {{cssxref("counters")}} dans une propriété {{cssxref("content")}}.

La fonction `counter()` prend deux formes : `counter(nom)` ou `counter(nom, style)`. Le texte ainsi généré est celui du compteur le plus proche avec ce nom. Le contenu est mis en forme avec le style indiqué (par défaut, c'est `decimal`).

La fonction `counters()` prend également deux formes : `counters(nom, chaine)` ou `counters(nom, chaine style)`. Le texte généré aura la valeur de l'ensemble des compteurs présents dans la portée du pseudo-élément (du plus loin au plus proche), séparés par la chaîne de caractères passée en argument. Les compteurs sont mis en forme avec le style indiqué (par défaut, c'est `decimal`).

### Exemple simple

Dans l'exemple qui suit, la feuille de style CSS préfixe chaque titre de niveau 3 avec « Section \<la valeur du compteur> : ».

> **Note :** La fonction {{cssxref("counter()")}} et la fonction {{cssxref("counters()")}} peuvent toutes les deux prendre un dernier argument qui correspond au style de liste utilisé (par défaut, c'est `decimal`).

#### CSS

```css
body {
  counter-reset: section;                    /* On initialise le compteur à 0 */
}

h3::before {
  counter-increment: section;                /* On incrémente le compteur section */
  content: "Section " counter(section) " : "; /* On affiche le compteur */
}
```

#### HTML

```html
<h3>Introduction</h3>
<h3>Corps</h3>
<h3>Conclusion</h3>
```

#### Résultat

{{EmbedLiveSample("Utiliser_les_compteurs", 300, 150)}}

## Imbriquer des compteurs

Un compteur CSS est particulièrement utile lorsqu'il s'agit de gérer les listes générées dynamiquement. En utilisant la fonction {{cssxref("counters","counters()")}}, on peut insérer une chaîne de caractères entre les différents niveaux des compteurs imbriqués.

### CSS

```css
ol {
  counter-reset: section;                /* On crée une nouvelle instance du
                                            compteur section avec chaque ol */
  list-style-type: none;
}

li::before {
  counter-increment: section;            /* On incrémente uniquement cette
                                            instance du compteur */
  content: counters(section,".") " ";    /* On ajoute la valeur de toutes les
                                            instances séparées par ".". */
                                         /* Si on doit supporter < IE8 il faudra
                                            faire attention à ce qu'il n'y ait
                                            aucun blanc après ',' */
}
```

### HTML

```html
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item               <!-- 2     -->
    <ol>
      <li>item</li>      <!-- 2.1   -->
      <li>item</li>      <!-- 2.2   -->
      <li>item           <!-- 2.3   -->
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
        </ol>
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
          <li>item</li>  <!-- 2.3.3 -->
        </ol>
      </li>
      <li>item</li>      <!-- 2.4   -->
    </ol>
  </li>
  <li>item</li>          <!-- 3     -->
  <li>item</li>          <!-- 4     -->
</ol>
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item</li>          <!-- 2     -->
</ol>
```

### Résultat

{{EmbedLiveSample("Imbriquer_des_compteurs", 250, 350)}}

## Spécifications

| Spécification                                                                        | État                             | Commentaires         |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName("CSS3 Lists", "#auto-numbering", "CSS Counters")}}     | {{Spec2("CSS3 Lists")}} | Aucune modification. |
| {{SpecName("CSS2.1", "generate.html#counters", "CSS Counters")}} | {{Spec2("CSS2.1")}}         | Définition initiale. |

## Voir aussi

- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
