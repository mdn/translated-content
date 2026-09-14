---
title: Modèle de page ARIA
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template
l10n:
  sourceCommit: da12dd76d4c9863ce4f9c436f5e2373fe541e1c7
---

## Page de garde

Les métadonnées de la page sont décrites dans l'en-tête comme dans l'exemple suivant&nbsp;:

```md
---
title: aria-labelledby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-labelledby
sidebar: accessibilitysidebar
---
```

### Titre et chemin

Une page de rôle ARIA doit avoir un `title` et un `slug` de `ARIA: Nom du rôle`. Par exemple, le [rôle `button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) a un `title` et un `slug` de `ARIA/NameOfTheRole_role` et l'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) a un `title` de `aria-labelledby`.

### Barre latérale

La `accessibilitysidebar` peut être utilisée dans toutes les pages sous `/Web/Accessibility`&nbsp;:

```yaml
sidebar: accessibilitysidebar
```

Voir [Structures de page&nbsp;: Barres latérales](/fr/docs/MDN/Writing_guidelines/Page_structures/Sidebars) pour plus de détails.

### Macros en haut de page

Un certain nombre d'appels de macros apparaissent en haut de la section de contenu. Vous devez les mettre à jour ou les supprimer selon les conseils ci-dessous.

### Statuts

Ne pas ajouter ou modifier les clés de statut manuellement.
Pour inclure la clé de statut de fonctionnalité (appropriée) — [**expérimentale**](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#expérimental), [**obsolète**](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#obsolète), ou **non standard** — voir la section [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).

### Spécifications

Dans la valeur de la clé de métadonnées `spec-urls`, mettez à jour les URL pour pointer vers les ID de fragment des sections correctes des spécifications suivantes&nbsp;:

- [ARIA <sup>(angl.)</sup>](https://w3c.github.io/aria/)
- [Pratiques d'auteur ARIA <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/)

Ressources supplémentaires&nbsp;:

- [Modèle d'objet d'accessibilité <sup>(angl.)</sup>](https://wicg.github.io/aom/spec/)
- [ARIA dans le HTML <sup>(angl.)</sup>](https://w3c.github.io/html-aria/)

## Modèle de page

Le paragraphe de résumé — commencez par nommer le rôle ou l'attribut et expliquez ce qu'il fait. Idéalement, cela doit être une ou deux phrases courtes. Ce contenu apparaît comme info-bulle sur les liens vers cette page, alors soignez-le.

```html
<!-- Insérez un bloc de code montrant des cas d'utilisation courants -->
```

(Optionnel) Incluez une brève description de l'exemple précédent.

## Description

Incluez une description complète de l'attribut ou du rôle.

### Rôles, états et propriétés ARIA associés

- Nom des rôles associés
  - : Explication de l'exigence, lien vers les pages des fonctionnalités.
- Nom des attributs associés
  - : Explication de l'exigence, lien vers les pages des attributs, ainsi que lien vers le JS nécessaire pour modifier la valeur, si approprié.

### Interactions au clavier

### Fonctionnalités JavaScript requises

- Gestionnaires d'évènements requis
  - : Explication de chacun
- Modification des valeurs des attributs
  - : Explication de chacun

> [!NOTE]
> Incluez une note sur les alternatives sémantiques à l'utilisation de ce rôle ou attribut. La première règle de l'utilisation d'ARIA est que vous pouvez utiliser une fonctionnalité native avec la sémantique et le comportement dont vous avez besoin déjà intégrés, au lieu de réutiliser un élément et **d'ajouter** un rôle, un état ou une propriété ARIA pour le rendre accessible, puis faites-le. Ensuite, publiez tous les détails dans la section des meilleures pratiques ci-dessous.

## Exemples

Notez que nous utilisons le pluriel «&nbsp;Exemples&nbsp;» même si la page ne contient qu'un seul exemple.

### Un titre descriptif

Chaque exemple doit avoir un titre H3 nommant l'exemple. Le titre doit être descriptif de ce que fait l'exemple. Par exemple, «&nbsp;Un exemple simple&nbsp;» ne dit rien sur l'exemple et n'est donc pas un bon titre. Le titre doit être concis. Pour une description plus longue, utilisez le paragraphe après le titre.

Consultez notre guide sur la façon d'ajouter des [exemples de code](/fr/docs/MDN/Writing_guidelines/Page_structures/Code_examples) pour plus d'informations.

> [!NOTE]
> Parfois, vous pouvez vouloir créer un lien vers des exemples donnés sur une autre page.
>
> **Scénario 1&nbsp;:** Si vous avez des exemples sur cette page et d'autres exemples sur une autre page&nbsp;:
>
> Incluez un titre H3 (`###`) pour chaque exemple sur cette page, puis un dernier titre H3 (`###`) avec le texte «&nbsp;Plus d'exemples&nbsp;», sous lequel vous pouvez créer des liens vers les exemples sur d'autres pages. Par exemple&nbsp;:
>
> ```md
> ## Exemples
>
> ### Utiliser l'API fetch
>
> Exemple de Fetch
>
> ### Plus d'exemples
>
> Liens vers plus d'exemples sur d'autres pages
> ```
>
> **Scénario 2&nbsp;:** Si vous n'avez des exemples que sur une autre page et aucun sur cette page&nbsp;:
>
> N'ajoutez pas de titres H3&nbsp;; ajoutez simplement les liens directement sous le titre H2 «&nbsp;Exemples&nbsp;». Par exemple&nbsp;:
>
> ```md
> ## Exemples
>
> Pour des exemples de cette API, voir [la page sur `fetch()`](https://example.org/).
> ```

## Problèmes d'accessibilité

Optionnellement, avertissez des éventuels problèmes d'accessibilité liés à l'utilisation de cette propriété, et comment les contourner. Supprimez cette section s'il n'y en a pas à mentionner.

## Meilleures pratiques

Optionnellement, énumérez les meilleures pratiques existantes pour ce rôle. Supprimez la section s'il n'y en a pas.

### Avantages supplémentaires

- Rôle associé
  - : Si ce rôle est un parent, enfant ou voisin requis, et ce qu'il fait.

Tout avantage supplémentaire que cette fonctionnalité offre aux utilisateur·ice·s de lecteurs d'écran non typiques, comme Google ou la reconnaissance vocale mobile.

## Spécifications

`\{{Specifications}}`

_Pour utiliser cette macro, supprimez les accents inversés et l'antislash dans le fichier markdown._

## Ordre de priorité

Quelles sont les propriétés associées, et dans quel ordre cet attribut ou cette propriété est-il lu (quelle propriété a la priorité sur celle-ci, et quelle propriété est écrasée).

## Support des lecteurs d'écran

## Voir aussi

Incluez des liens vers des pages de référence et des guides liés à l'API actuelle. Pour plus de directives, consultez la [section Voir aussi](/fr/docs/MDN/Writing_guidelines/Writing_style_guide#section_«_voir_aussi_») dans le _Guide de style d'écriture_.

- lien1
- lien2
- lien_externe (année)
