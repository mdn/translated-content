---
title: Site
slug: Glossary/Site
tags:
  - Glossaire
  - Sécurité
  - WebMécanique
translation_of: Glossary/Site
original_slug: Glossaire/Site
---
Le _site_ d'un élément de contenu Web est déterminé par le _domaine enregistrable_ de l'hôte au sein de l'origine. Ceci est calculé en consultant une _liste de suffixes publics_ pour trouver la partie de l'hôte qui est comptée comme _suffixe public_ (par exemple, `com`, `org` ou `co.uk`).

Le concept de _site_ est utilisé dans les [cookies SameSite](/fr/docs/Web/HTTP/Headers/Set-Cookie#Directives), ainsi que dans la [politique de ressources inter-origines](</fr/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)>) d'une application Web.

## Exemples

Pour les deux URL qui suivent, on a le même site car le domaine enregistrable est le même _mozilla.org_ (les noms d'hôte et chemins de fichier différents n'ont pas d'importance) :

- `https://developer.mozilla.org/fr/docs/`
- `https://support.mozilla.org/fr/`

Là encore, ce sont les mêmes sites, car le schéma et le port ne sont pas pertinents :

- `http://example.com:8080`
- `https://example.com`

Ici, ce ne sont pas les mêmes sites car les domaines enregistrables des deux URL sont différents :

- `https://developer.mozilla.org/fr/docs/`
- `https://example.com`

## Spécifications

| Spécification                                        | Statut               | Commentaire         |
| ---------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('URL', '#host-same-site')}} | {{Spec2('URL')}} | Définition initiale |
