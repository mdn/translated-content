---
title: Rôles WAI-ARIA
short-title: Rôles
slug: Web/Accessibility/ARIA/Reference/Roles
l10n:
  sourceCommit: 4a39dedf2c57c6947339a63a8de0e18a7abe8e2c
---

Les rôles ARIA fournissent une signification sémantique au contenu, permettant aux lecteurs d'écran et autres outils de présenter et de prendre en charge l'interaction avec un objet d'une manière cohérente avec les attentes utilisateur·ice·s pour ce type d'objet. Les rôles <abbr>ARIA</abbr> peuvent être utilisés pour décrire des éléments qui n'existent pas nativement en HTML ou qui existent mais qui n'ont pas encore une prise en charge complète par les navigateurs.

Par défaut, de nombreux éléments sémantiques en HTML possèdent un rôle&nbsp;; par exemple, `<input type="radio">` a le rôle «&nbsp;radio&nbsp;». Les éléments non sémantiques en HTML n'ont pas de rôle&nbsp;; `<div>` et `<span>` sans sémantique ajoutée renvoient `null`. L'attribut `role` peut fournir une sémantique.

Les rôles ARIA sont ajoutés aux éléments HTML en utilisant `role="type de rôle"`, où _type de rôle_ est le nom d'un rôle dans la spécification ARIA. Certains rôles exigent l'inclusion d'états ou propriétés ARIA associés&nbsp;; d'autres ne sont valides qu'en association avec d'autres rôles.

Par exemple, `<ul role="tabpanel">` sera annoncé comme un «&nbsp;panneau d'onglets&nbsp;» par les lecteurs d'écran. Cependant, si le panneau d'onglets n'a pas d'onglets imbriqués, l'élément avec le rôle `tabpanel` n'est en fait pas un panneau d'onglets et l'accessibilité est en réalité négativement impactée.

Les [états et propriétés ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes) associés à chaque rôle sont inclus dans les pages des rôles, chaque attribut disposant également d'une page dédiée.

## Types de rôles ARIA

Il existe 6 catégories de rôles ARIA&nbsp;:

### 1. Rôles dans la structure des documents

Les rôles de structure de document sont utilisés pour fournir une description structurelle d'une section de contenu. La plupart de ces rôles ne devraient plus être utilisés car les navigateurs prennent désormais en charge des éléments HTML sémantiques ayant la même signification. Les rôles sans équivalents HTML, tels que les rôles `presentation`, `toolbar` et `tooltip`, fournissent des informations sur la structure du document aux technologies d'assistance comme les lecteurs d'écran puisque les balises HTML natives équivalentes ne sont pas disponibles.

- [`toolbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`tooltip`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)
- [`feed`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [`math`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/math_role)
- [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) / [`none`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`note`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/note_role)

Pour la plupart des rôles de structure de document, des éléments HTML sémantiques équivalents sont disponibles et pris en charge. Évitez d'utiliser&nbsp;:

- [`application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`article`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) (utilisez {{HTMLElement('article')}})
- [`cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) (utilisez {{HTMLElement('td')}})
- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) (utilisez `{{HTMLElement('th', '&lt;th scope="col">')}}`)
- [`definition`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) (utilisez {{HTMLElement('dfn')}})
- [`directory`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role)
- [`document`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role)
- [`figure`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role) (utilisez {{HTMLElement('figure')}} à la place)
- [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`heading`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) (utilisez {{HTMLElement("Heading_Elements", "h1")}} jusqu'à {{HTMLElement("Heading_Elements", "h6")}})
- [`img`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) (utilisez {{HTMLElement('img')}} ou {{HTMLElement('picture')}} à la place)
- [`list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) (utilisez soit {{HTMLElement('ul')}} soit {{HTMLElement('ol')}} à la place)
- [`listitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role) (utilisez {{HTMLElement('li')}} à la place)
- [`meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role) (utilisez {{HTMLElement('meter')}} à la place)
- [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) (utilisez {{HTMLElement('tr')}} avec {{HTMLElement('table')}})
- [`rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) (utilisez {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} et {{HTMLElement('tbody')}})
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) (utilisez `{{HTMLElement('th','&lt;th scope="row">')}}`)
- [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (utilisez {{HTMLElement('hr')}} s'il n'a pas le focus)
- [`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) (utilisez {{HTMLElement('table')}})
- [`term`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/term_role) (utilisez {{HTMLElement('dfn')}})

Ceux-ci sont inclus pour complétude, mais dans la plupart des cas ils sont rarement, voire jamais, utiles&nbsp;:

- [`associationlist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`associationlistitemkey`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`associationlistitemvalue`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`blockquote`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`caption`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`code`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`deletion`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`emphasis`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`insertion`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`paragraph`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`strong`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`subscript`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`superscript`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`time`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)

### 2. Rôles de widgets

Les rôles de widgets sont utilisés pour définir des schémas interactifs courants. Comme pour les rôles de structure de document, certains rôles de widgets ont la même sémantique que des éléments HTML natifs bien pris en charge, et doivent donc être évités. La différence clé est que les rôles de widgets nécessitent généralement JavaScript pour l'interaction, tandis que les rôles de structure de document n'en nécessitent souvent pas.

- [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`searchbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (lorsqu'il peut recevoir le focus)
- [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`switch`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`tabpanel`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
- [`treeitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

Évitez d'utiliser [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role), [`checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`link`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/link_role), [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role), [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role), [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`progressbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role), [`radio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role) et [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), que nous avons inclus pour complétude. Pour la plupart, des équivalents sémantiques avec interactivité accessible sont disponibles et pris en charge. Voir la documentation individuelle de chaque rôle pour plus d'informations.

#### Rôles de widgets composites

- [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

Évitez d'utiliser [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) et [`radiogroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role), que nous avons inclus pour complétude. Voir la documentation individuelle pour plus d'informations.

Notez qu'il existe également un rôle de widget (`role="widget"`), qui est un rôle abstrait et non inclus dans la catégorie des rôles de widgets.

### 3. Rôles de repères

Les rôles de repères fournissent un moyen d'identifier l'organisation et la structure d'une page web. En classant et étiquetant les sections d'une page, l'information structurelle transmise visuellement par la mise en page est représentée de façon programmatique. Les lecteurs d'écran utilisent les rôles de repères pour fournir une navigation clavier vers les sections importantes d'une page. Utilisez-les avec parcimonie. Trop de rôles de repères créent du «&nbsp;bruit&nbsp;» dans les lecteurs d'écran, ce qui rend difficile la compréhension de la mise en page globale de la page.

- [`banner`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) (document {{HTMLElement('header')}})
- [`complementary`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) ({{HTMLElement('aside')}})
- [`contentinfo`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role) (document {{HTMLElement('footer')}})
- [`form`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/form_role) ({{HTMLElement('form')}})
- [`main`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role) ({{HTMLElement('main')}})
- [`navigation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role) ({{HTMLElement('nav')}})
- [`region`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role) ({{HTMLElement('section')}})
- [`search`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) ({{HTMLElement('search')}})

### 4. Rôles de régions dynamiques

Les rôles de régions dynamiques sont utilisés pour définir des éléments dont le contenu sera modifié dynamiquement. Les utilisateur·ice·s voyants peuvent voir les changements dynamiques lorsqu'ils sont visuellement perceptibles. Ces rôles aident les utilisateur·ice·s malvoyant·e·s et non-voyant·e·s à savoir si le contenu a été mis à jour. Les technologies d'assistance, comme les lecteurs d'écran, peuvent être configurées pour annoncer les changements de contenu dynamiques&nbsp;:

- [`alert`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`log`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [`marquee`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [`status`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [`timer`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)

### 5. Rôles de fenêtre

Les rôles de fenêtre définissent des sous-fenêtres dans la fenêtre du document principal, au sein de la même fenêtre, telles que les boîtes de dialogue modales&nbsp;:

- [`alertdialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

### 6. Rôles abstraits

Les rôles abstraits sont uniquement destinés à être utilisés par les navigateurs pour aider à organiser et rationaliser un document. Ils ne doivent pas être utilisés par les développeur·euse·s écrivant du code HTML. Le faire ne transmettra aucune information significative aux technologies d'assistance ou aux utilisateur·ice·s.

Évitez d'utiliser [`command`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/command_role), [`composite`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role), [`input`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/input_role), [`landmark`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role), [`range`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/range_role), [`roletype`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/roletype_role), [`section`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/section_role), [`sectionhead`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role), [`select`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/select_role), [`structure`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structure_role), [`widget`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) et [`window`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/window_role).

> [!NOTE]
> N'utilisez pas de rôles abstraits dans vos sites et applications. Ils sont destinés aux navigateurs. Ils sont inclus uniquement à titre de référence.

> [!WARNING]
> «&nbsp;Les rôles abstraits sont utilisés pour l'ontologie. Les auteur·ice·s **NE DOIVENT PAS** utiliser de rôles abstraits dans le contenu.&nbsp;» - La spécification <abbr>WAI-ARIA</abbr>

## Rôles définis sur le MDN

Voici les pages de référence couvrant les rôles WAI-ARIA abordés sur le <abbr>MDN</abbr>.

{{SubpagesWithSummaries}}

## Voir aussi

- [Utiliser ARIA&nbsp;: rôles, états et propriétés](/fr/docs/Web/Accessibility/ARIA/Guides/Techniques)
- [États et propriétés ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes)
