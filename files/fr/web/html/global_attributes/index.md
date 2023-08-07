---
title: Les attributs universels
slug: Web/HTML/Global_attributes
---

{{HTMLSidebar("Global_attributes")}}

Les **attributs universels** sont des attributs communs à l'ensemble des éléments HTML. Ces attributs peuvent donc être ajoutés sur tous les éléments (dans certains cas, les attributs n'auront aucun effet).

Les attributs universels peuvent être définis sur tous [les éléments HTML](/fr/docs/Web/HTML/Element), _y compris pour les éléments non définis dans le standard_. Autrement dit, les éléments non-standards doivent pouvoir accepter ces attributs. Cela permettra au navigateur de les gérer selon certains des aspects de la spécification. Par exemple, pour un navigateur conforme, un élément `<toto hidden>...</toto>` sera masqué bien que `<toto>` ne soit pas un élément HTML valide.

En plus des attributs universels HTML, il existe également les attributs universels suivants :

- `xml:lang` et `xml:base` : ces attributs proviennent des spécifications XHTML. Ils sont désormais dépréciés mais conservés pour des raisons de compatibilité.
- Les nombreux attributs [`aria-*`](/fr/docs/Accessibilité/ARIA) utilisés afin d'améliorer l'accessibilité.
- Les attributs utilisés pour [les gestionnaires d'événements](/fr/docs/Web/Guide/DOM/Events/Event_handlers) déclarés directement sur les éléments : **`onabort`**, **`onautocomplete`**, **`onautocompleteerror`**, **`onblur`**, **`oncancel`**, **`oncanplay`**, **`oncanplaythrough`**, **`onchange`**, **`onclick`**, **`onclose`**, **`oncontextmenu`**, **`oncuechange`**, **`ondblclick`**, **`ondrag`**, **`ondragend`**, **`ondragenter`**, **`ondragexit`**, **`ondragleave`**, **`ondragover`**, **`ondragstart`**, **`ondrop`**, **`ondurationchange`**, **`onemptied`**, **`onended`**, **`onerror`**, **`onfocus`**, **`oninput`**, **`oninvalid`**, **`onkeydown`**, **`onkeypress`**, **`onkeyup`**, **`onload`**, **`onloadeddata`**, **`onloadedmetadata`**, **`onloadstart`**, **`onmousedown`**, **`onmouseenter`**, **`onmouseleave`**, **`onmousemove`**, **`onmouseout`**, **`onmouseover`**, **`onmouseup`**, **`onmousewheel`**, **`onpause`**, **`onplay`**, **`onplaying`**, **`onprogress`**, **`onratechange`**, **`onreset`**, **`onresize`**, **`onscroll`**, **`onseeked`**, **`onseeking`**, **`onselect`**, **`onshow`**, **`onsort`**, **`onstalled`**, **`onsubmit`**, **`onsuspend`**, **`ontimeupdate`**, **`ontoggle`**, **`onvolumechange`**, **`onwaiting`**.

## Liste des attributs universels

- `accesskey`
  - : Cet attribut fournit une indication permettant de générer un raccourci clavier pour l'élément courant. Cet attribut se compose d'une liste de caractères séparés par des espaces. Le navigateur doit utiliser le premier caractère qui existe selon la disposition du clavier utilisée.
- `autocapitalize`

  - : Cet attribut contrôle la façon dont le texte saisi est automatiquement converti en majuscules. Les valeurs autorisées pour cet attribut sont :

    - `off` ou `none` : il n'y pas de convertion en majuscules réalisée.
    - `on` ou `sentences` : la première lettre de chaque phrase est écrite en majuscule par défaut. Les autres lettres sont en minuscules par défaut.
    - `words` : la première lettre de chaque mot est écrite en majuscule par défaut, les autres lettres sont en minuscules par défaut.
    - `characters` : toutes les lettres sont écrites en majuscules par défaut

- `class`
  - : Une liste de classes, séparées par des espaces, qui permettent de catégoriser l'élément. Les classes permettent au CSS et à JavaScript de manipuler des éléments spécifiques grâce à [des sélecteurs de classe](/fr/docs/Web/CSS/Sélecteurs_de_classe) (pour CSS) ou grâce à des fonctions telles que {{domxref("Document.getElementsByClassName()")}} (pour JavaScript).
- `contenteditable`

  - : Un attribut à valeur contrainte qui indique si l'élément peut être édité par l'utilisateur. Si c'est le cas, le navigateur modifie l'interface utilisateur afin de permettre l'édition. Les valeur autorisées pour cet attribut sont :

    - `true` ou la chaîne vide : ces valeurs indiquent que l'élément doit pouvoir être édité
    - `false` qui indique que l'élément ne doit pas pouvoir être édité.

- `contextmenu`{{deprecated_inline}}
  - : La valeur de cet attribut correspond à la valeur de l'attribut [`id`](/fr/docs/Web/HTML/Element/menu#id) d'un élément {{HTMLElement("menu")}} qui doit être utilisé comme menu contextuel par cet élément.
- `data-*`
  - : Cette classe d'attribut, appelée « attributs de données personnalisés », permet d'échanger des informations dans un format propriétaire entre le HTML et le DOM afin de pouvoir les manipuler via des langage de scripts. La propriété {{domxref("HTMLElement.dataset")}} permet d'accéder à l'ensemble des attribut définis de cette façon.
- `dir`

  - : Un attribut à valeur contrainte qui indique la directionnalité du texte de l'élément. Les valeurs autorisées pour cet attribut sont :

    - `ltr` (l'abbréviation anglaise pour _Left To Right_) indique que le contenu est écrit de gauche à droite (comme le français par exemple)
    - `rtl` (l'abbréviation anglaise pour _Right To Left_) indique que le contenu est écrit de droite à gauche (comme l'arabe par exemple)
    - `auto` : c'est l'agent utilisateur qui décide. Il utilise un algortihme qui analyse les caractères du contenu de l'élément jusqu'à trouver un caractère avec une forte directionnalité qu'il applique alors à l'ensemble de l'élément.

- `draggable`

  - : Un attribut à valeur contrainte qui indique qu'un élément peut être glissé/déposé grâce à l'[API _Drag & Drop_](/fr/docs/Web/API/API_HTML_Drag_and_Drop). Les valeurs autorisées pour cet attribut sont :

    - `true` : l'élément peut être glissé/déposé
    - `false` : l'élément ne peut pas être glissé/déposé.

- `dropzone` {{experimental_inline}}

  - : Un attribut à valeur contrainte qui indique le type de contenu qui peut être déposé sur un élément grâce à l'[API _Drag & Drop_](/fr/docs/Web/API/API_HTML_Drag_and_Drop). Les valeurs autorisées pour cet attribut sont :

    - `copy` : lorsque l'élément est déposé, une copie de l'élément est créée
    - `move` : lorsque l'élément est déposé, il est déplacé vers ce nouvel emplacement
    - `link` : un lien est créé vers les données qui sont déplacée.

- `exportparts` {{experimental_inline}}
  - : Utilisé pour exporter de façon transitive certaines parties d'un arbre _shadow_ sur un arbre réel.
- `hidden`
  - : Un attribut booléen dont la valeur indique que l'élément n'est pas encore, ou n'est plus _pertinent_. Cet attribut peut ainsi être utilisé pour masquer les éléments d'une page qui ne peuvent pas être utilisés tant que la procédure de connexion n'est pas terminée. Le navigateur n'affichera pas les éléments pour lesquels cet attribut est utilisé. Cet attribut ne doit pas être utilisé afin de masquer du contenu qui aurait pu être affiché de façon pertinente.
- `id`
  - : Cet attribut définit un identifiant, unique au sein de tout le document, ,pour un élément. Il doit permettre d'identifier un élément lorsqu'on crée un lien vers lui et/ou lorsque le manipule avec des scripts ou avec CSS.
- `inputmode`
  - : Cet attribut fournit une indication au navigateur quant au type de contenu qui sera saisi dans le champ et qui aide à déterminer la configuration du clavier virtuel qui peut être affiché pour la saisie. Ce type est principalement utilisé pour les éléments {{HTMLElement("input")}} mais peut tout à fait être utilisé sur n'importe quel élément avec le mode [`contenteditable`](#contenteditable).
- `is`
  - : Cet attribut indique qu'un élément HTML standard devrait se comporter comme un élément personnalisé natif (voir [Manipuler les custom elements](/fr/docs/Web/Web_Components/Using_custom_elements) pour plus d'informations).
- `itemid`
  - : L'identifiant unique, global, d'un objet. Cet attribut est lié [aux microdonnées](https://html.spec.whatwg.org/multipage/#toc-microdata).
- `itemprop`
  - : Cet attribut permet d'ajouter des propriétés à un objet. Cet attribut est une paire entre un nom et une valeur. Cet attribut est lié [aux microdonnées](https://html.spec.whatwg.org/multipage/#toc-microdata).
- `itemref`
  - : Les propriétés d'un objet qui ne sont pas les éléments descendants de l'élément courant peuvent être associée via l'attribut `itemscope` contenant une référence vers un `itemref`. `itemref` fournit une liste d'identifiants d'éléments qui correspondent aux propriétés supplémentaires définies autre part dans le document. Cet attribut est lié [aux microdonnées](https://html.spec.whatwg.org/multipage/#toc-microdata).
- `itemscope`
  - : `itemscope` fonctionne généralement avec `itemtype` afin d'indiquer que le coded HTML contenu dans un bloc donné concerne un objet en particulier. `itemscope` crée l'objet et définit la portée de l'`itemtype` associée. `itemtype` est une URL valide construite à partir d'un vocabulaire (par exemple [schema.org](https://schema.org/)) qui décrit les objets et leurs propriétés. Cet attribut est lié [aux microdonnées](https://html.spec.whatwg.org/multipage/#toc-microdata).
- `itemtype`
  - : Cet attribut indique l'URL du vocabulaire utilisé pour définir les propriétés d'un objet. Cet attribut est lié [aux microdonnées](https://html.spec.whatwg.org/multipage/#toc-microdata).
- `lang`
  - : Cet attribut aide à définir la langue utilisée pour l'élément. Pour les éléments non-éditables, c'est la langue dans laquelle ils sont écrits et pour les éléments éditables, c'est la langue dans laquelle ils devraient être écrits. Cet attribut contient une seule valeur telle que définie dans le document IETF [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt). L'attribut **`xml:lang`** est prioritaire par rapport à cet attribut lorsqu'il s'agit de déterminer la langue d'un élément.
- `part` {{experimental_inline}}
  - : Une liste séparée par des espaces avec les noms des parties (_parts_) de l'élément. Les noms des parties permettent au CSS de cibler et de mettre en forme certains éléments d'un arbre _shadow_ via le pseudo-élément {{cssxref("::part")}}.
- `slot`
  - : Cet attribut affecte un créneau de l'arbre du _[shadow DOM](/fr/docs/Web/Web_Components/Shadow_DOM)_ pour un élément. L'élément ayant l'attribut `slot` est affecté au créneau créé par l'élément {{HTMLElement("slot")}} pour lequel l'attribut [`name`](/fr/docs/Web/HTML/Element/slot#name) correspond à la valeur de l'attribut `slot`.
- `spellcheck` {{experimental_inline}}

  - : Un attribut à valeur contrainte qui définit s'il faut détecter les fautes d'orthographe/grammaire dans le texte de l'élément. Les valeurs autorisées pour cet attribut sont :

    - `true` qui indique que, si possible, il faut vérifier les erreurs d'orthographe
    - `false` qui indique qu'il ne faut pas vérifier les erreurs.

- `style`
  - : Cet attribut contient les déclarations [CSS](/fr/docs/Web/CSS/) utilisées pour mettre en forme l'élément. Note : il est recommandé d'utiliser un ou plusieurs fichiers séparés, plutôt que cet attribut, pour définir les règles de mise en forme. Le rôle de l'élément {{HTMLElement("style")}} consiste à permettre une mise en forme rapide, notamment pour des tests.
- `tabindex`

  - : Cet attribut à valeur entière indique l'ordre dans lequel l'élément participe à la navigation au clavier via la tabulation. Il peut prendre différente valeur :

    - une valeur négative indiquera que l'élément peut recevoir le focus mais n'est pas accessible via la navigation séquentielle au clavier
    - `0` indiquera que l'élément peut recevoir le focus et être accessible via la navigation au clavier mais l'ordre est relatif et déterminé par l'agent utilisateur
    - une valeur positive indiquera que l'élément peut recevoir le focus et qu'il est accessible via la navigation au clavier. La valeur utilisée indique l'ordre relatif de l'élément dans la navigation. Autrement dit, la navigation au clavier ira dans le sens croissant des éléments selon leurs valeurs respectives de `tabindex`. Si plusieurs éléments ont la même valeur, ce sera leur ordre relatif dans le document qui sera utilisé.

- `title`
  - : Cet attribut contient une représentation textuelle de l'information auquel il est lié. Une telle information est généralement, mais pas nécessairement, affichée sous la forme d'une bulle d'informations.
- `translate` {{experimental_inline}}

  - : Un attribut à valeur contrainte qui est utilisé pour définir si les valeurs des attributs et des éléments fils de type {{domxref("Text")}} doivent être traduits lorsque la page est localisée. Les valeurs autorisées pour cet attribut sont :

    - La chaîne vide ou `yes` qui indiquent que l'élément doit être traduit
    - `no` qui indique que l'élément ne sera pas traduit.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les interfaces {{domxref("Element")}} et {{domxref("GlobalEventHandlers")}} qui permettent de manipuler la plupart des attributs globaux.
