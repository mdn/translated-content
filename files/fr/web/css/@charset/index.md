---
title: "@charset"
slug: Web/CSS/@charset
---

{{CSSRef}}

La [règle @](/fr/docs/Web/CSS/Règles_@) **`@charset`** définit l'encodage des caractères utilisés dans la feuille de style. Cette règle doit être le premier élément de la feuille de style (aucun caractère ne doit être écrit avant). Cette règle ne fait pas partie des [instructions imbriquées](/fr/Apprendre/CSS/Les_bases/La_syntaxe#Les_instructions_CSS) et ne peut donc pas être utilisée [à l'intérieur des groupes conditionnels](/fr/docs/Web/CSS/Règles_@#R.C3.A8gles_conditionnelles_de_groupe). Si plusieurs règles `@charset` sont définies, seule la première sera utilisée. Cette règle ne pourra pas être utilisée au sein d'un attribut `style` d'un élément HTML ou avec l'élément {{HTMLElement("style")}} car c'est l'encodage du document HTML qui est alors pris en compte.

```css
@charset "utf-8";
```

Cette règle @ s'avère notamment utile lorsqu'on utilise des caractères non-ASCII pour certaines propriétés CSS telles que {{cssxref("content")}}.

Le moteur dispose de différentes méthodes pour déterminer l'encodage d'une feuille de style. Il utilisera ces méthodes dans l'ordre qui suit et s'arrêtera dès qu'un résultat sera obtenu (autrement dit, les règles qui suivent sont triées par priorité décroissante) :

1. La valeur du caractère indiquant [l'ordre des octets Unicode](https://fr.wikipedia.org/wiki/Indicateur_d'ordre_des_octets) qui est placé au début du fichier (le BOM)
2. La valeur fournie par l'attribut `charset` de l'en-tête HTTP `Content-Type` ou l'information équivalente dans le protocole utilisé pour servir la feuille de style.
3. La règle @ CSS `@charset`.
4. L'encodage défini dans le document appelant la ressource (l'attribut `charset` de l'élément {{HTMLElement("link")}}). Cette méthode est désormais obsolète et ne doit plus être utilisée.
5. Dans tous les autres cas, on considère que le document est encodé en UTF-8

## Syntaxe

```css
@charset <charset>;
```

où

- `charset`
  - : Est une chaîne de caractères (une valeur CSS de type {{cssxref("&lt;string&gt;")}}) indiquant l'encodage qui doit être utilisé. Cette valeur doit correspondre à un nom d'encodage valide pour le Web tel que défini dans [le registre IANA](https://www.iana.org/assignments/character-sets/character-sets.xhtml) et doit être délimitée par des doubles quotes, précédée d'un blanc (U+0020) et suivie d'un point-virgule. Si plusieurs noms sont associés avec l'encodage, seul celui marqué avec _préféré_ (_preferred_) doit être utilisé.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemples valides

```css
@charset "UTF-8"; /* Valide, la feuille de style est encodée en Unicode UTF-8 */
@charset "iso-8859-15"; /* Valide, la feuille de style est encodée en Latin-9 (langues d'Europe occidentale avec le symbole €) */
```

### Exemples invalides

```css-nolint example-bad
 @charset "UTF-8"; /* Invalide, il y a un caractère (un espace) avant la règle @ */
@charset UTF-8; /* Invalide, sans ' ou ", le jeu de caractères n'est pas une chaîne CSS ({{cssxref("&lt;string&gt;")}}) */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
