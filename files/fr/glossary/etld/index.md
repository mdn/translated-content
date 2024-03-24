---
title: eTLD
slug: Glossary/eTLD
l10n:
  sourceCommit: cdb0dad4aeabda32b85c397f5e45304f95edc0d1
---

{{GlossarySidebar}}

L'acronyme **eTLD** signifie «&nbsp;<i lang="en">effective top-level domain&nbsp;</i> (soit «&nbsp;domaine de plus haut niveau effectif&nbsp;» en français) et correspond au domaine sous lequel d'autres domaines peuvent être par une organisation.

Un domaine de plus haut niveau (<i lang="en">top level domain</i>, ou TLD) correspond au domaine qui suit le point final. Ainsi, le domaine de de plus haut niveau pour `crookedtimber.org` est `org`.

Si tous les domaines situés juste en dessous des domaines de plus haut niveau pouvaient être enregistrés par des organisations, on pourra avoir les domaines suivants, appartenant à la même organisation&nbsp;:

```plain
    xyz.org
abc.xyz.org
def.xyz.org
```

Toutfois, cela ne fonctionne pas toujours ainsi et certains bureaux d'enregistrement permettent aux organisations d'enregistrer des domaines en dessous du niveau le plus haut. Par exemple, `sussex.ac.uk` et `aber.ac.uk` sont enregistrés par des organisations différentes.

Cette gestion des niveaux dépend des règles de gestion du bureau d'enregistrement et il est donc impossible d'utiliser un algorithme pour déterminer si un suffixe donné (comme `ac.uk`) permet un enregistrement de domaine public ou non. La [liste des suffixes publics](https://publicsuffix.org/) est une liste maintenue de l'ensemble des suffixes sous lesquels des organisations peuvent enregistrer des noms de domaines. Autrement dit, il s'agit d'une liste d'eTLD.

La notion associée **eTLD+1** signifie l'eTLD associée à la partie inférieure du nom de domaine. Tous les domaines d'un même eTLD+1 appartiennent à une même organisation.

Les domaines qui suivent sont des exemples de domaines eTLD+1&nbsp;:

- `crookedtimber.org`
- `theguardian.com`
- `sussex.ac.uk`
- `aber.ac.uk`

Cela signifie que tous les domaines sous chacun de ces domaines appartiennent à la même organisation. Par exemple&nbsp;:

```plain
 film.theguardian.com
music.theguardian.com
```

```plain
      news.sussex.ac.uk
      blog.sussex.ac.uk
admissions.sussex.ac.uk
```

## Voir aussi

- [La liste des suffixes publics (en anglais)](https://publicsuffix.org/)
