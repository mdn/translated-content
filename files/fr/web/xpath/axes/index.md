---
title: Axes
slug: Web/XPath/Axes
tags:
  - Référence_XPath
  - Référence_XSLT
  - Transformations_XML_avec_XSLT
  - XPath
  - XSLT
translation_of: Web/XPath/Axes
---
{{ XsltRef() }}

Il existe treize axes différents dans la spécification [XPath](XPath). Un axe représente une relation au nœud de contexte, et il est utilisé pour situer dans l'arbre les autres nœuds par rapport à celui-ci. La liste suivante présente très brièvement les treize axes disponibles et le niveau de leur support dans [Gecko](Gecko).

Pour plus d'informations sur l'utilisation des expressions XPath, veuillez vous reportez à la section [Autres ressources](Transformations_XML_avec_XSLT/Autres_ressources) à la fin du document [Transformations XML avec XSLT](Transformations_XML_avec_XSLT).

- [ancestor](Axes/ancestor)
  - : Indique tous les ancêtres du nœud de contexte, depuis le nœud parent jusqu'au nœud racine.

<!---->

- [ancestor-or-self](Axes/ancestor-or-self)
  - : Indique le nœud de contexte et tous ses ancêtres, y compris le nœud racine.

<!---->

- [attribute](Axes/attribute)
  - : Indique les attributs du nœud de contexte. Seuls les éléments ont des attributs. Cet axe peut être abrégé avec le signe arobase (`@`).

<!---->

- [child](Axes/child)
  - : Indique les enfants du nœud de contexte. Si une expression XPath ne spécifie pas d'axe, c'est l'axe choisi par défaut. Comme seuls le nœud racine et les nœuds `element` ont des enfants, toute autre utilisation ne sélectionnera rien.

<!---->

- [descendant](Axes/descendant)
  - : Indique tous les nœuds enfants du nœud de contexte, et tous leurs enfants, et ainsi de suite. Les nœuds `attribute` et `namespace` ne sont **pas** compris - le `parent` d'un nœud `attribute` est un nœud `element`, mais les nœuds `attribute` ne sont pas les enfants de leur parent.

<!---->

- [descendant-or-self](Axes/descendant-or-self)
  - : Indique le nœud de contexte et tous ses descendants. Les nœuds `attribute` et `namespace` ne sont **pas** compris - le `parent` d'un nœud `attribute` est un nœud `element`, mais les nœuds `attribute` ne sont pas les enfants de leur parent.

<!---->

- [following](Axes/following)
  - : Indique tous les nœuds situés après le nœud de contexte, exceptés les nœuds `descendant`, `attribute` et `namespace`.

<!---->

- [following-sibling](Axes/following-sibling)
  - : Indique tous les nœuds qui ont le même `parent` que le nœud de contexte mais qui apparaissent après lui dans le document source.

<!---->

- [namespace](Axes/namespace)
  _(non supporté)_
  - : Indique tous les nœuds qui sont dans le voisinage immédiat du nœud de contexte. Dans ce cas, le nœud de contexte doit être un nœud `element`.

<!---->

- [parent](Axes/parent)
  - : Indique le nœud parent du nœud de contexte. Il peut être abrégé par deux points (`..`).

<!---->

- [preceding](Axes/preceding)
  - : Indique tous les nœuds qui précédent le nœud de contexte dans le document, exceptés les nœuds `ancestor`, `attribute` et `namespace`.

<!---->

- [preceding-sibling](Axes/preceding-sibling)
  - : Indique tous les nœuds qui ont le même `parent` que le nœud de contexte mais qui apparaissent avant lui dans le document source.

<!---->

- [self](Axes/self)
  - : Indique le nœud de contexte lui-même. Il peut être abrégé par un point (`.`).
