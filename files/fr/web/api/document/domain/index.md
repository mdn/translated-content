---
title: Document.domain
slug: Web/API/Document/domain
---

{{ApiRef}}

Retourne/définit la partie domaine de l'origine du document courant, telle qu'utilisée par la [politique d'origine identique](/fr/docs/Web/Security/Defenses/Same-origin_policy).

## Syntaxe

```js
var chaineDomaine = document.domain;
document.domain = chaine;
```

## Exemple

```js
// Pour le document www.example.xxx/good.html,
// ce script ferme la fenêtre
var mauvaisDomaine = "www.example.xxx";

if (document.domain == mauvaisDomaine) window.close(); // juste un exemple - window.close() n'a parfois aucun effet.
```

```js
// Pour l'URI https://developer.mozilla.org/fr/docs/Web, ce qui
// suit définit le domaine comme étant la chaîne "developer.mozilla.org"
var domaine = document.domain;
```

## Notes

Cette propriété retourne `null` si le domaine du document ne peut pas être identifié.

Mozilla vous laissera la définir à un superdomaine de la valeur courante, contraint par son [domaine de base](</fr/docs/XPCOM_Interface_Reference/nsIEffectiveTLDService#getBaseDomain()>). Par exemple, sur developer.mozilla.org, il est possible de la définir à "mozilla.org" mais pas à "mozilla.com" ou "org".

Si cette propriété est définie avec succès, la partie "port" de l'origine est également définie à null.

## Spécification

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy)
- {{domxref("Location.hostname")}}
- {{domxref("Location.host")}}
- {{domxref("Window.origin")}}
