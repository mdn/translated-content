---
title: "Attribut HTML universel : spellcheck"
short-title: spellcheck
slug: Web/HTML/Reference/Global_attributes/spellcheck
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`spellcheck`** est un attribut [énuméré](/fr/docs/Glossary/Enumerated) qui définit si l'élément peut être vérifié pour les erreurs d'orthographe.

> [!NOTE]
> Cet attribut n'est qu'une indication pour le navigateur&nbsp;: les navigateurs ne sont pas tenus de vérifier les fautes d'orthographe. En général, les éléments non modifiables ne sont pas vérifiés, même si l'attribut `spellcheck` est défini sur `true` et que le navigateur prend en charge la vérification orthographique.

{{InteractiveExample("Démonstration HTML&nbsp;: spellcheck", "tabbed-shorter")}}

```html interactive-example
<textarea spellcheck="true">
This exampull will be checkd fur spellung when you try to edit it.
</textarea>

<textarea spellcheck="false">
This exampull will nut be checkd fur spellung when you try to edit it.
</textarea>
```

Les valeurs autorisées pour cet attribut sont&nbsp;:

- une chaîne de caractères vide ou `true`, indique que l'élément peut, si possible, vérifier l'orthographe avec le correcteur orthographique&nbsp;;
- `false`, indique que l'élément ne doit pas vérifier les fautes d'orthographe.

Si cet attribut n'est pas défini, sa valeur par défaut est définie par le type d'élément et le navigateur. Cette valeur par défaut peut également être _héritée_, ce qui signifie que le contenu de l'élément ne sera vérifié pour les fautes d'orthographe que si son ancêtre le plus proche a un état _spellcheck_ de `true`.

## Problèmes de sécurité et de confidentialité

L'utilisation de la vérification orthographique peut avoir des conséquences sur la sécurité et la confidentialité des utilisateurs.
La spécification ne régule pas _comment_ la vérification orthographique est effectuée et le contenu de l'élément peut être envoyé à un tiers pour obtenir les résultats de la vérification orthographique (voir [vérification orthographique améliorée et le «&nbsp;vol d'orthographe&nbsp;» <sup>(angl.)</sup>](https://www.comparitech.com/blog/information-security/what-is-spell-jacking/)).

Vous devriez envisager de définir `spellcheck` sur `false` pour les éléments pouvant contenir des informations sensibles.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- L'attribut HTML universel [`autocorrect`](/fr/docs/Web/HTML/Reference/Global_attributes/autocorrect)
