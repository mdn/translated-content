---
title: Éléments de niveau bloc
slug: Glossary/Block-level_content
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En CSS, le contenu qui participe à la mise en page en bloc est appelé **contenu de niveau bloc**.

Dans une mise en page en bloc, les boîtes sont disposées les unes après les autres, verticalement, en commençant par le haut du bloc conteneur. Le bord extérieur gauche de chaque boîte touche le bord gauche du bloc conteneur.
Un élément de niveau bloc commence toujours sur une nouvelle ligne. En mode d'écriture horizontal, comme l'anglais ou l'arabe, il occupe tout l'espace horizontal de son élément parent (contenant) et un espace vertical égal à la hauteur de son contenu, créant ainsi un «&nbsp;bloc&nbsp;».

> [!NOTE]
> Le comportement ci-dessus de la mise en page en bloc change si le {{CSSxRef("writing-mode")}} du bloc conteneur est défini sur une valeur autre que [la valeur par défaut](/fr/docs/Web/CSS/Reference/Properties/writing-mode#définition_formelle).

> [!NOTE]
> Les éléments HTML (pour <i lang="en">HyperText Markup Language</i> en anglais) étaient historiquement classés comme éléments «&nbsp;de niveau bloc&nbsp;» ou «&nbsp;en ligne&nbsp;». Cette caractéristique de présentation est désormais spécifiée par CSS.

## Exemples

Dans cet exemple, deux éléments paragraphe ({{HTMLElement("p")}}) sont placés dans un {{HTMLElement("div")}}.

```html
<div>
  <p>
    Ceci est le premier paragraphe. La couleur d'arrière-plan de ces paragraphes
    a été modifiée pour les distinguer de leur élément parent.
  </p>
  <p>Ceci est le second paragraphe.</p>
</div>
```

Les éléments paragraphe ({{HTMLElement("p")}}) sont de niveau bloc par défaut. C'est pourquoi ils sont affichés en mise en page en bloc&nbsp;:

```css hidden
p {
  background-color: #8abb55;
}
```

{{EmbedLiveSample("Exemples")}}

## Voir aussi

- Terme associé du glossaire&nbsp;:
  - {{Glossary("Inline-level content", "Contenu de niveau en ligne")}}
- [Contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)
- La propriété CSS {{CSSxRef("display")}}
- La propriété CSS {{CSSxRef("writing-mode")}}
