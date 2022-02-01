---
title: Gestion des espaces dans le DOM
slug: Web/API/Document_Object_Model/Whitespace
tags:
  - DOM
translation_of: Web/API/Document_Object_Model/Whitespace
---
## Le problème

La présence d'espaces et de blancs dans le [DOM](fr/DOM) peut rendre la manipulation de l'arbre de contenu difficile dans des aspects qu'on ne prévoit pas forcément. Dans Mozilla, tous les espaces et blancs dans le contenu texte du document original sont représentés dans le DOM (cela ne concerne pas les blancs à l'intérieur des balises). (C'est nécessaire en interne afin que l'éditeur puisse conserver le formatage des documents et que l'instruction `white-space: pre` en [CSS](fr/CSS) fonctionne.) Cela signifie que :

- il y aura certains nœuds texte qui ne contiendront que du vide, et
- certains nœuds texte commenceront ou se termineront par des blancs.

En d'autres termes, l'arbre DOM pour le document qui suit ressemblera à l'image ci-dessous (où « \n » représente un retour à la ligne) :

    <!-- My document -->
    <html>
    <head>
      <title>My Document</title>
    </head>
    <body>
      <h1>Header</h1>
      <p>
        Paragraph
      </p>
    </body>
    </html>

![Arbre du DOM équivalent à l'exemple HTML ci-avant](dom-string.png)

Ceci peut rendre les choses un peu plus difficiles pour les utilisateurs du DOM qui aimeraient parcourir le contenu, sans se préoccuper des blancs.

## Rendre les choses plus faciles

On peut formater leur code comme indiqué ci-dessous pour contourner le problème:

```html
<!-- jolie impression conventionnelle
     avec des espaces entre les balises:
 -->
<div>
 <ul>
  <li>Position 1</li>
  <li>Position 2</li>
  <li>Position 3</li>
 </ul>
</div>

<!-- jolie impression adaptée au problème :
 -->
<div
 ><ul
  ><li>Position 1</li
  ><li>Position 2</li
  ><li>Position 3</li
 ></ul
></div>
```

Le code JavaScript ci-dessous définit plusieurs fonctions facilitant la manipulation d'espaces dans le DOM :

```js
/**
 * Tout au long, les espaces sont définis comme l'un des caractères
 *  "\t" TAB \u0009
 *  "\n" LF  \u000A
 *  "\r" CR  \u000D
 *  " "  SPC \u0020
 *
 * Ceci n'utilise pas le "\s" de Javascript parce que cela inclut le non-brisement
 * espaces (et aussi d'autres caractères).
 */


/**
 * Détermine si le contenu du texte d'un nœud est entièrement blanc.
 *
 * @param nod  Un nœud implémentant l'interface |CharacterData| (c'est-à-dire,
 *             un nœud |Text|, |Comment| ou |CDATASection|
 * @return     True (vrai) Si tout le contenu du texte du |nod| est un espace,
 *             sinon false (faux).
 */
function is_all_ws( nod )
{
  // Utilise ECMA-262 Edition 3 chaînes et fonctionnalités RegExp
  return !(/[^\t\n\r ]/.test(nod.textContent));
}


/**
 * Détermine si le nœud doit être ignoré par les fonctions d'itération.
 *
 * @param nod  Un objet implémentant l'interface DOM1 |Node|.
 * @return     true (vrai) si le nœud est :
 *                1) un nœud |Text| qui est tout en espace
 *                2) un nœud |Comment|
 *             et autrement false (faux).
 */

function is_ignorable( nod )
{
  return ( nod.nodeType == 8) || // un nœud commentaire
         ( (nod.nodeType == 3) && is_all_ws(nod) ); // un nœud texte, tout espace
}

/**
 * Version de |previousSibling| qui ignore les nœuds qui sont entièrement
 * espace ou commentaire.  (Normalement |previousSibling| est une propriété
 * de tous les nœuds DOM qui donnent le nœud frère, le nœud qui est
 * un enfant du même parent, qui se produit immédiatement avant le
 * nœud référence.)
 *
 * @param sib  Le nœud référence .
 * @return     soit :
 *               1) le frère précédent le plus proche de |sib| qui ne peut
 *                  être ignoré du fait de la fonction |is_ignorable|, ou
 *               2) null si aucun nœud n'existe.
 */
function node_before( sib )
{
  while ((sib = sib.previousSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * Version de |nextSibling| qui ignore les nœuds qui sont entièrement
 * espace ou commentaire.
 *
 * @param sib  Le nœud référence .
 * @return     soit :
 *               1) le frère précédent le plus proche de |sib| qui ne peut
 *                  être ignoré du fait de la fonction |is_ignorable|, ou
 *               2) null si aucun nœud n'existe.
 */
function node_after( sib )
{
  while ((sib = sib.nextSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * Version de |lastChild| qui ignore les nœuds qui sont entièrement
 * espace ou commentaire. (Normalement |lastChild| est une propriété
 * de tous les nœuds DOM qui donnent le dernier des nœuds contenus
 * directement dans le nœud de référence.)
 *
 * @param sib  Le nœud référence.
 * @return     soit :
 *               1) Le dernier enfant de |sib| qui ne peut
 *                  être ignoré du fait de la fonction |is_ignorable|, ou
 *               2) null si aucun nœud n'existe.
 */
function last_child( par )
{
  var res=par.lastChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.previousSibling;
  }
  return null;
}

/**
 * Version de |firstChild| qui ignore les nœuds qui sont entièrement
 * espace ou commentaire..
 *
 * @param sib  le nœud référence.
 * @return     soit:
 *               1) le nœud premier enfant de |sib| qui ne peut
 *                  être ignoré du fait de la fonction |is_ignorable|, ou
 *               2) null si aucun nœud n'existe.
 */
function first_child( par )
{
  var res=par.firstChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.nextSibling;
  }
  return null;
}

/**
 * Version de |data| cela n'inclut pas les espaces au début
 * et termine et normalise tous les espaces dans un seul espace. (Normalement
 * |data | est une propriété des nœuds de texte qui donne le texte du nœud.)
 *
 * @param txt  Le nœud de texte dont les données doivent être renvoyées
 * @return     Une chaîne donnant le contenu du nœud de texte avec
 *             espace blanc s'est effondré.
 */
function data_of( txt )
{
  var data = txt.textContent;
  // Utilise ECMA-262 Edition 3 chaînes et fonctionnalités RegExp
  data = data.replace(/[\t\n\r ]+/g, " ");
  if (data.charAt(0) == " ")
    data = data.substring(1, data.length);
  if (data.charAt(data.length - 1) == " ")
    data = data.substring(0, data.length - 1);
  return data;
}
```

## Exemple

Le code qui suit montre l'utilisation des fonctions présentées plus haut. Il parcourt les enfants d'un élément (dont les enfants sont tous des éléments) pour trouver celui dont le texte est `"Ceci est le troisième paragraphe"`, et change ensuite l'attribut `class` et le contenu de ce paragraphe.

```js
var cur = first_child(document.getElementById("test"));
while (cur)
{
  if (data_of(cur.firstChild) == "This is the third paragraph.")
  {
      cur.className = "magic";
      cur.firstChild.textContent = "This is the magic paragraph.";
  }
  cur = node_after(cur);
}
```
