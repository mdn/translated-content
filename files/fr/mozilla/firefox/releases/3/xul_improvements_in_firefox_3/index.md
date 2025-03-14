---
title: Améliorations XUL dans Firefox 3
slug: Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3
---

{{FirefoxSidebar}}

Firefox 3 fournit un certain nombre de nouveaux éléments [XUL](/fr/XUL), ainsi que des améliorations sur des éléments existants. Bien que ces éléments soient documentés ailleurs, cet article offre une liste pratique des améliorations ainsi que des liens vers la documentation détaillée.

### Nouveaux éléments

- [Contrôles numériques](/fr/Tutoriel_XUL/Les_contrôles_numériques)&nbsp;:

  - Le nouvel élément [`<scale>`](/fr/XUL/scale) permet de créer des échelles glissantes permettant à l'utilisateur de sélectionner une valeur dans un intervalle donné. Ce contrôle serait typiquement utilisé, par exemple, pour créer un contrôle de volume. [Référence de `scale`](/fr/XUL/scale) ([bug Firefox 290255](https://bugzil.la/290255))
  - Une nouvelle valeur `'number'` pour l'attribut `type` des élément `textbox` crée une boîte de texte dans laquelle seuls des nombres peuvent être entrés. De plus, des boutons fléchés apparaissent sur le côté permettant de se déplacer parmi les valeurs. ([bug Firefox 345510](https://bugzil.la/345510))
  - Un élément [`<spinbuttons>`](/fr/XUL/spinbuttons) a été ajouté, qui peut être utilisé pour créer des contrôles à l'aide de liaisons XBL. ([bug Firefox 155053](https://bugzil.la/155053))
  - Deux contrôles, [`<datepicker>`](/fr/XUL/datepicker) et [`<timepicker>`](/fr/XUL/timepicker), peuvent être utilisés pour permettre l'entrée de dates et d'heures. Le sélecteur de tdate est disponible en plusieurs styles selon l'attribut `type`, et permet des entrées via des boîtes de texte ou un calendrier. [Référence sur `datepicker`](/fr/XUL/datepicker)

- Un [guide](/fr/XUL/Guide_des_popups) a été créé pour décrire les nouvelles fonctionnalités disponibles pour les menus et les popups.

  - Un élément [`<dropmarker>`](/fr/XUL/dropmarker) a été ajouté, qui peut être utile pour créer des contrôles semblables à des menus à l'aide de liaisons XBL. ([bug Firefox 348614](https://bugzil.la/348614))
  - Le nouvel élément [`<panel>`](/fr/XUL/panel) est destiné aux popups qui ne sont pas des menus. Il peut supporter n'importe quel type de contenu. L'élément \<menupopup> devrait être utilisé pour des menus. Les menus fournissent la navigation par le clavier et l'ouverture/fermeture des sous-menus.

### Améliorations des arbres

- Il est possible à présent faire défiler des arbres horizontalement. Une barre de défilement horizontal apparaitra si toutes les colonnes n'entrent pas dans la largeur disponible. Cela se produira si la somme des largeurs de colonnes spécifiées est plus grande que l'espace disponible. ([bug Firefox 212789](https://bugzil.la/212789))
- Un nouveau style de sélection permet de sélectionner les cellules individuellement plutôt que des lignes entières. On peut l'utiliser en définissant l'attribut `seltype` d'un arbre à la valeur `'cell'`. ([bug Firefox 296040](https://bugzil.la/296040))
- Des cellules individuelles d'un arbre peuvent être modifiées. Un double-clic sur une cellule éditable affichera un champ texte dans lequel l'utilisateur pourra modifier le contenu de la cellule. ([bug Firefox 201499](https://bugzil.la/201499))
- Les éléments \<treecol> supportent maintenant un attribut `overflow` qui peut être défini à `true` pour permettre au texte des cellules d'un colonne de déborder dans les cellules vides voisines si le texte est trop grand pour s'afficher dans une seule cellule.

### Améliorations des menus

- L'attribut `image` est utilisé de manière consistante pour définir des images
- Les `menulist` déclenchent l'évènement `select` lorsqu'un élément est sélectionné
- Les propriétés `inputField` et `editable` ont été ajoutées à l'élément `menulist`
- Les éléments `<menu>`, `<menuitem>` et `<menuseparator>` disposent d'une propriété en lecture seule `selected` indiquant si l'élément est sélectionné dans une \<menulist>
- Les éléments `<menu>`, `<menuitem>` et `<menuseparator>` disposent d'une propriété en lecture seule `control` qui renvoie l'élément \<menulist> parent
- Les éléments `<menu>`, `<menuitem>` et `<menuseparator>` disposent de propriétés `accessKey`, `disabled`, `crop`, `image` et `label` permettant de modifier l'attribut correspondant
- L'élément \<menu> dispose à présent de méthodes pour ajouter, insérer et supprimer des éléments de menu (menuitems). ([bug Firefox 372552](https://bugzil.la/372552))
- Une propriété `editor` permet d'obtenir le [nsIEditor](/fr/NsIEditor) interne pour le champ texte d'un élément `menulist` modifiable.([bug Firefox 312867](https://bugzil.la/312867))
- Les menus peuvent être rendus translucides sur les plateformes qui le permettent. ([bug Firefox 70798](https://bugzil.la/70798))

### Améliorations des boîtes de texte

- En définissant l'attribut `spellcheck` d'une boîte de texte à `'true'`, la correction orthographique sera activée pour cette boîte de texte. ([bug Firefox 346787](https://bugzil.la/346787))
- L'élément `<textbox>` dispose d'une méthode `reset()` pour réinitialiser la valeur de la boîte de texte à sa valeur par défaut. La propriété `defaultValue` peut être utilisée pour retrouver et modifier cette valeur par défaut. ([bug Firefox 312867](https://bugzil.la/312867))
- Une propriété `editor` permet d'obtenir le [nsIEditor](/fr/NsIEditor) internet pour le champ texte. ([bug Firefox 312867](https://bugzil.la/312867))
- textbox dispose d'un attribut `newlines` spécifiant comment les retours à la ligne dans les textes collés seront traités. ([bug Firefox 253481](https://bugzil.la/253481)) Les valeurs possibles sont&nbsp;:

  - `pasteintact` — tout coller tel quel
  - `pastetofirst` — (valeur par défaut) coller uniquement ce qui précède le premier retour à la ligne
  - `replacewithspaces` — remplacer les retours à la ligne par des espaces
  - `replacewithcommas` — remplacer les retours à la ligne par des virgules
  - `strip` — retirer tous les retours à la ligne
  - `stripsurroundingwhitespace` — retirer tous les retours à la ligne et les blancs qui les entourent

### Autres améliorations

- L'attribut `type` d'un élément `<button>` peut être défini à `'repeat'` pour créer des boutons qui se déclenchent régulièrement tant que le bouton est enfoncé. ([bug Firefox 331055](https://bugzil.la/331055))
- L'attribut [`buttondisabledaccept`](/fr/XUL/Attributs/buttondisabledaccept) peut être utilisé sur l'élément `<dialog>` pour que le bouton OK soit initialement désactivé. ([bug Firefox 247849](https://bugzil.la/247849))
- L'élément `<titlebar>` dispose d'un attribut `allowevents` permettant de passer des évènements aux enfants de la barre de titre. ([bug Firefox 361425](https://bugzil.la/361425))
- L'élément `<splitter>` dispose d'une valeur supplémentaire `'both'` pour l'attribut `collapse` indiquant que le séparateur peut coller les éléments sur les deux côtés lorsqu'il est déplacé. L'attribut `substate` sera défini soit à `before`, soit à `after` lorsque l'un des deux est collé. ([bug Firefox 337955](https://bugzil.la/337955))
- L'élément `<richlistbox>` permet les sélections multiples. Définissez l'attribut `seltype` à `'multiple'` pour activer cette fonctionnalité.
- L'élément `<radio>` dispose d'un attribut `group` permettant de définir l'id de l'élément `<radiogroup>` auquel appartient le bouton radio. Cela permet aux boutons radio d'être placés d'une autre manière que de les inclure tous à l'intérieur d'un radiogroup.
- Menus, panels et tooltips supportent deux nouvelles méthodes, [`openPopup()`](/fr/XUL/Méthodes/openPopup) et [`openPopupAtScreen()`](/fr/XUL/Méthodes/openPopupAtScreen). Ces méthodes devraient être utilisées à la place de `showPopup` qui était source de confusion à l'utilisation.
- La gestion de l'élément `<key>` a été améliorée pour les utilisateurs de claviers non-Latins. Voir [Évènement keypress dans Gecko](/fr/Évènement_keypress_dans_Gecko).
- Sous Mac OS X, les attributs [activetitlebarcolor](/fr/XUL/Attributs/activetitlebarcolor) et [inactivetitlebarcolor](/fr/XUL/Attributs/inactivetitlebarcolor) des éléments racine (`<window>`, `<dialog>`, `<prefwindow>` et `<wizard>`) sont disponibles pour personnaliser la couleur de la barre de titre des fenêtres.

### Voir aussi

- [XUL](/fr/XUL)
- [Firefox 3 pour les développeurs](/fr/Firefox_3_pour_les_développeurs)
