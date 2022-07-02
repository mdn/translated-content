---
title: Définir des termes avec HTML
slug: Learn/HTML/Howto/Define_terms_with_HTML
tags:
  - Beginner
  - Guide
  - HTML
  - Learn
translation_of: Learn/HTML/Howto/Define_terms_with_HTML
original_slug: Apprendre/HTML/Comment/Définir_des_termes_avec_HTML
---
HTML fournit plusieurs méthodes pour décrire la sémantique du contenu qu'on emploie (que ce soit intégré dans le texte ou dans un glossaire à part). Dans cet article, nous verrons comment correctement définir les termes utilisés au sein d'un document.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Vous devez au préalable savoir comment
        <a href="/fr/Learn/HTML/Write_a_simple_page_in_HTML"
          >créer un document HTML simple</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Apprendre comment introduire de nouveaux mots-clés et comment construire
        une liste de définitions.
      </td>
    </tr>
  </tbody>
</table>

Lorsqu'on souhaite définir un terme, on utilise généralement un dictionnaire ou un glossaire. Les dictionnaires et glossaires permettent d'associer formellement des termes clés avec une ou plusieurs descriptions. Par exemple :

> - Bleu (_adjectif_)
>   - : La couleur du ciel lors d'un temps clair.
>     _"Le ciel est bleu."_

Mais il arrive fréquemment qu'on définisse des termes de façon moins formelle, comme ici :

> **Firefox** est le navigateur web créé et développé par la Fondation Mozilla.

Pour gérer ces différents cas d'utilisation, {{Glossary("HTML")}} fournit différents éléments qui permettent de marquer les termes définis et leurs descriptions afin que vos lecteurs puissent utiliser ces informations.

## Comment écrire un description informelle

Dans certains manuels, à la première occurence d'un terme, celui-ci est placé en gras et défini immédiatement.

On peut procéder de cette façon avec HTML. En revanche, HTML ne gère pas l'aspect visuel d'un document, uniquement son contenu. On utilisera l'élément {{htmlelement("dfn")}} qui permet d'identifier la première occurence d'un terme. Attention, `<dfn>` enveloppe le terme à définir et pas sa définition (qui elle s'étend sur le paragraphe courant) :

```html
<p><dfn>Firefox</dfn> est le navigateur créé et développé par la Fondation Mozilla.</p>
```

> **Note :** On utilise également parfois le gras pour mettre en avant du contenu. Le gras, en tant que tel, est un concept qui n'appartient pas à HTML mais à la mise en forme. En revanche, pour mettre en avant (utiliser une emphase), il existe [des éléments HTML tout indiqués](/fr/Apprendre/HTML/Howto/Emphasize_content_or_indicate_that_text_is_important).

### Cas spécifique : les abréviations

En ce qui concerne les abréviations, il est préférable [de les identifier séparement](/fr/Apprendre/HTML/Howto/Mark_abbreviations_and_make_them_understandable) grâce à l'élément {{htmlelement("abbr")}} afin que les lecteurs d'écrans puissent les utiliser correctement. Comme pour la définition d'un nouveau terme, une abréviation doit être définie lors de sa première apparition.

```html
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language)</dfn>
   est un langage de description utilisé pour structurer des documents sur le Web.
</p>
```

> **Note :** La spécification HTML [met en avant l'attribut `title`](http://www.w3.org/TR/html/text-level-semantics.html#the-abbr-element) pour expliciter les termes de l'abréviation. Cependant, il reste nécessaire d'utiliser le texte classique pour fournir une explication car le contenu de l'attribut `title` ne sera pas montré aux utilisateurs, sauf si ceux-ci passent la souris au-dessus de l'abréviation. C'est également [ce qui est noté dans les spécifications](http://www.w3.org/TR/html/dom.html#attr-title).

### Améliorer l'accessibilité

{{HTMLElement('dfn')}} identifie le terme qui est défini et indique que le paragraphe courant définit le terme. Il y a donc une relation implicite entre l'élément `<dfn>` et l'élément qui le contient. Si vous souhaitez avoir une relation plus formelle ou que votre définition ne s'étend que sur une ou plusieurs phrases plutôt que sur l'ensemble du paragraphe, vous pouvez utiliser l'attribut [`aria-discribedby`](/fr/docs/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-describedby) pour associer, formellement, un terme à sa définition :

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    est le navigateur web créé et développé par la Fondation Mozilla.
  </span>
  Vous pouvez le télécharger sur <a href="http://www.mozilla.org">mozilla.org</a>
</p>
```

Les technologies d'assistance à la navigation pourront tirer parti de cet attribut pour fournir un texte alternatif pour un terme donné. `aria-describedby` peut être utilisé pour n'importe quelle balise contenant un mot-clé à définir (il n'est pas nécessaire que ce soit `<dfn>`). `aria-describedby` utilise un référence à l'{{htmlattrxref('id')}} de l'élément qui contient la description.

## Comment construire une liste de descriptions

Les listes de descriptions sont des listes de termes associés à leur description (par exemple une liste de définition, des entrées d'un dictionnaire, une FAQ, des paires de clés-valeurs, etc.).

> **Note :** Les listes de descriptions [ne doivent pas être utilisées pour retranscrire des dialogues](http://www.w3.org/TR/html5/grouping-content.html#the-dl-element). En effet, la conversation ne décrit pas les différents interlocuteurs. Voici [quelques recommandations pour retranscrire un dialogue dans un document web](http://www.w3.org/TR/html5/common-idioms.html#conversations).

Les termes à décrire sont placés dans des éléments {{htmlelement("dt")}} et la description, qui suit immédiatement, est placée dans un ou plusieurs éléments {{htmlelement("dd")}}. Enfin, l'ensemble de la liste est placé au sein d'un élément {{htmlelement("dl")}}.

### Un exemple simple

Voici un exemple simple qui dresse une liste de descriptions de plats :

```html
<dl>
  <dt>jambalaya</dt>
    <dd>
      une entrée à base de riz qui contient généralement
      du poulet, des saucisses, des fruits de mer et des
      épices
    </dd>

  <dt>sukiyaki</dt>
    <dd>
      une spécialité japonaise à base de fines tranches de
      viande, de légumes, de nouilles et qui est cuite dans
      un sauce soja et du saké
    </dd>

  <dt>chianti</dt>
    <dd>
      un vin italien, sec, originaire de Toscane
    </dd>
</dl>
```

> **Note :** La structure de base qu'on voit dans cet exemple alterne les termes (`<dt>`) et leurs descriptions (`<dd>`). Si deux (ou plusieurs) termes apparaissent les uns à la suite des autres, la description qui suit s'appliquera à tout ces termes. Si deux (ou plusieurs) descriptions se suivent, elles s'appliqueront au dernier terme.

### Améliorer l'aspect visuel

Voici comment un navigateur affichera la liste précédente :

{{EmbedLiveSample("Un_exemple_simple", 600, 180)}}

Si vous souhaitez que les termes soient plus visibles, vous pouvez les écrire en gras. Cela ne change rien au contenu, donc ce ne sera pas HTML qui sera utilisé. En revanche, cela modifie la mise en forme et nous allons donc utiliser CSS et plus particulièrement la propriété {{cssxref("font-weight")}} :

```css
dt {
  font-weight: bold;
}
```

Cela permettra d'obtenir le résultat suivant :

{{EmbedLiveSample("Comment_construire_une_liste_de_descriptions", 600, 180)}}

## En savoir plus

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [Comment utiliser l'attribut `aria-describedby`](/fr/docs/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-describedby)
