---
title: "Attribut HTML universel : `autofocus`"
short-title: autofocus
slug: Web/HTML/Reference/Global_attributes/autofocus
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`autofocus`** est un attribut booléen indiquant si l'élément doit recevoir la sélection (<i lang="en">focus</i> en anglais) au chargement de la page ou, s'il est imbriqué à l'intérieur d'un élément {{HTMLElement("dialog")}} ou [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover), lorsque le `<dialog>` ou la fenêtre contextuelle est affiché.

```html
<input name="q" autofocus />
```

Seul un élément à l'intérieur d'un document, d'un élément `<dialog>` ou d'une fenêtre contextuelle peut avoir cet attribut défini. S'il est appliqué à plusieurs éléments, le premier élément pouvant recevoir la sélection la recevra.

> [!NOTE]
> L'attribut `autofocus` s'applique à tous les éléments, et pas seulement aux contrôles de formulaires. Par exemple, il peut être utilisé sur une zone [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable).

> [!NOTE]
> Au chargement de la page, si un [identifiant de fragment URI](/fr/docs/Web/URI/Reference/Fragment) est défini et identifie un élément, l'élément avec l'attribut `autofocus` ne reçoit pas la sélection avec l'attribut `autofocus`. En général, l'élément indiqué par le fragment reçoit la sélection à la place.

## Problèmes d'accessibilité

Le fait de placer automatiquement la sélection sur un élément de formulaire peut poser des difficultés aux personnes utilisant des technologies d'assistance telles que les lecteurs d'écrans et les personnes portant un handicap cognitif. Lorsque l'attribut `autofocus` est assigné, les lecteurs d'écrans vont «&nbsp;téléporter&nbsp;» le·a visiteur·euse sur l'élément de formulaire sans pouvoir l'avertir au préalable.

Concernant l'accessibilité, l'attribut `autofocus` doit être utilisé avec précaution. Placer automatiquement la sélection sur un élément de formulaire peut déclencher un défilement intempestif de la page lors de son chargement. La sélection peut aussi déclencher l'ouverture intempestive du clavier virtuel sur les appareils tactiles. Enfin, il faut noter que comme les lecteurs d'écrans annoncent le libellé d'un élément de formulaire recevant la sélection, aucun autre élément placé avant le libellé ne sera lu par l'outil d'assistance. D'ailleurs, les personnes utilisant un appareil disposant d'un petit écran perdront également le contexte fourni par les éléments situés au-dessus de l'élément de formulaire recevant la sélection.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
