---
title: Améliorations XUL dans Firefox 3
slug: Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Firefox 3 fournit un certain nombre de nouveaux éléments XUL, ainsi que des améliorations sur des éléments existants. Bien que ces éléments soient documentés ailleurs, cet article offre une liste pratique des améliorations ainsi que des liens vers la documentation détaillée.

## Nouveaux éléments

- Contrôles numériques&nbsp;:
  - Le nouvel élément `<scale>` permet de créer des curseurs qui permettent à l'utilisateur·ice de sélectionner n'importe quelle valeur dans une plage définie. Ce composant est typiquement utilisé, par exemple, pour créer un contrôle de volume.
  - Une nouvelle valeur, `number`, pour l'attribut `type` des zones de texte crée une zone de texte dans laquelle seuls les nombres peuvent être saisis. De plus, des boutons fléchés apparaissent sur un côté et peuvent être utilisés pour parcourir les valeurs. [Plus d'informations sur les zones de texte numériques <sup>(angl.)</sup>](https://wiki.mozilla.org/XUL:Specs:NumberBox). ([bogue Firefox 345510 <sup>(angl.)</sup>](https://bugzil.la/345510))
  - Un élément `<spinbuttons>` est ajouté et peut être utilisé lors de la création de composants utilisant des liaisons XBL. ([bogue Firefox 155053 <sup>(angl.)</sup>](https://bugzil.la/155053))
  - Deux composants, `<datepicker>` et `<timepicker>`, peuvent être utilisés pour permettre la saisie de dates et d'heures. Le sélecteur de date est disponible dans plusieurs styles en définissant l'attribut `type`, pour permettre la saisie avec des zones de texte ou une grille de calendrier. [Plus d'informations sur les sélecteurs de date <sup>(angl.)</sup>](https://wiki.mozilla.org/XUL:Specs:DateTimePickers)

- Un guide a été créé pour les menus et les popups décrivant les nouvelles fonctionnalités disponibles&nbsp;:
  - Un élément `<dropmarker>` est ajouté, utile lors de la création de composants de type menu utilisant des liaisons XBL. ([bogue Firefox 348614 <sup>(angl.)</sup>](https://bugzil.la/348614))
  - L'élément `<panel>` est nouveau et conçu pour les popups qui ne sont pas des menus. Ils peuvent contenir tout type de contenu. L'élément \<menupopup> doit être utilisé pour les menus. Les menus offrent une navigation au clavier et prennent en charge l'ouverture et la fermeture des sous-menus.

## Améliorations des arbres

- Les arbres peuvent désormais être défilés horizontalement. Si les colonnes ne tiennent pas dans la largeur disponible, une barre de défilement horizontale apparaît. Cela se produit si les largeurs définies des colonnes dépassent l'espace disponible. Voir [bogue Firefox 212789 <sup>(angl.)</sup>](https://bugzil.la/212789) pour plus de détails.
- Un nouveau style de sélection permet de sélectionner les cellules individuellement, au lieu de lignes entières. Pour utiliser ce style de sélection, définissez l'attribut `seltype` de l'arbre sur `cell`.
- Les arbres prennent désormais en charge l'édition des cellules individuelles. Lorsque l'utilisateur·ice double-clique sur une cellule modifiable, un champ de texte apparaît dans lequel l'utilisateur·ice peut modifier le contenu de la cellule. Voir [ces notes <sup>(angl.)</sup>](https://wiki.mozilla.org/XUL:Tree) pour plus de détails.
- Les éléments \<treecol> prennent désormais en charge un attribut `overflow` qui peut être défini sur true pour permettre au texte des cellules de cette colonne de s'étendre aux cellules voisines vides si le texte est trop grand pour tenir dans cette seule cellule.

## Améliorations des menus

- L'attribut `image` est désormais utilisé de manière cohérente pour définir les images.
- Les listes de menus déclenchent l'évènement `select` lors de la sélection d'un élément.
- Les propriétés `inputField` et `editable` ont été ajoutées à menulist
- Les éléments `<menu>`, `<menuitem>` et `<menuseparator>` ont désormais une propriété en lecture seule `selected` qui indique si l'élément est sélectionné dans un \<menulist>
- Les éléments `<menu>`, `<menuitem>` et `<menuseparator>` ont désormais une propriété en lecture seule `control` qui retourne le \<menulist> englobant
- Les éléments `<menu>`, `<menuitem>` et `<menuseparator>` prennent désormais en charge les propriétés `accessKey`, `disabled`, `crop`, `image` et `label` qui définissent l'attribut correspondant
- L'élément \<menu> dispose désormais de méthodes pour ajouter, insérer et supprimer des éléments de menu. ([bogue Firefox 372552 <sup>(angl.)</sup>](https://bugzil.la/372552))
- Les listes de menus modifiables offrent désormais une propriété `editor` pour accéder à l'éditeur interne `nsIEditor` de leur champ de texte.
- Les menus peuvent désormais être rendus translucides sur les plateformes qui le prennent en charge ([bogue Firefox 70798 <sup>(angl.)</sup>](https://bugzil.la/70798)).

## Améliorations des boîtes de texte

- La définition de l'attribut `spellcheck` d'une boîte de texte sur `true` active la vérification orthographique en ligne pour cette boîte de texte.
- L'élément `<textbox>` dispose désormais d'une méthode `reset()` pour réinitialiser la valeur de la boîte de texte à la valeur par défaut. La propriété `defaultValue` peut être utilisée pour récupérer et modifier la valeur par défaut de la boîte de texte.
- Une propriété `editor` est désormais disponible, permettant d'accéder à l'éditeur interne `nsIEditor` de la boîte de texte.
- L'élément `<textbox>` prend désormais en charge un attribut `newlines` qui définit comment les sauts de ligne dans le texte collé sont gérés. Les valeurs possibles sont&nbsp;:
  - `pasteintact` — coller tout tel quel
  - `pastetofirst` — (valeur par défaut) coller uniquement jusqu'au premier saut de ligne
  - `replacewithspaces` — remplacer les sauts de ligne par des espaces
  - `replacewithcommas` — remplacer les sauts de ligne par des virgules
  - `strip` — supprimer tous les sauts de ligne
  - `stripsurroundingwhitespace` — supprimer tous les sauts de ligne et les espaces environnants

## Autres améliorations

- L'attribut `type` d'un `<button>` peut être défini sur `repeat` pour créer des boutons qui déclenchent leur évènement de commande de manière répétée tant que le bouton de la souris est maintenu enfoncé.
- L'attribut `buttondisabledaccept` peut désormais être utilisé sur l'élément `<dialog>` pour que le bouton d'acceptation (OK) soit initialement désactivé.
- L'élément `<titlebar>` prend désormais en charge l'attribut `allowevents` pour permettre aux évènements d'être transmis aux enfants de la barre de titre.
- Le `<splitter>` prend désormais en charge une valeur supplémentaire pour l'attribut `collapse` de `'both'`, ce qui indique que le séparateur peut réduire les éléments des deux côtés lorsqu'il est déplacé. L'attribut `substate` est défini sur avant ou après lorsqu'un élément est réduit. ([bogue Firefox 337955 <sup>(angl.)</sup>](https://bugzil.la/337955))
- L'élément `<richlistbox>` prend désormais en charge la sélection multiple. Définissez l'attribut `seltype` sur `'multiple'` pour activer cette fonctionnalité.
- L'élément `<radio>` dispose d'un attribut `group` qui peut être défini sur l'identifiant d'un élément `<radiogroup>` auquel le bouton radio appartient. Cela permet de disposer les boutons radio d'une manière qui peut ne pas être aussi appropriée lorsqu'ils sont tous placés à l'intérieur d'un radiogroup.
- Les menus, panneaux et info-bulles prennent en charge deux méthodes supplémentaires, `openPopup()` et `openPopupAtScreen()`. Ces méthodes doivent être utilisées à la place de `showPopup()`, qui s'est avérée déroutante à utiliser.
- La gestion de l'élément `<key>` a été améliorée pour les utilisateur·ice·s de dispositions de clavier non latines.
- Sur Mac OS X, les attributs `activetitlebarcolor` et `inactivetitlebarcolor` des éléments racine (`<window>`, `<dialog>`, `<prefwindow>` et `<wizard>`) sont disponibles pour personnaliser la couleur des barres de titre des fenêtres.

## Voir aussi

- [Firefox 3 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/3)
