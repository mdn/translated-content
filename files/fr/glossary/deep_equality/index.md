---
title: Égalité profonde
slug: Glossary/Deep_equality
l10n:
  sourceCommit: b7c5617fc1d8eb00c6884a708983da21ad61b228
---

**L'égalité profonde** est une comparaison de valeurs composées, telles que des objets ou des tableaux, qui compare leur contenu de manière récursive. Deux objets distincts peuvent être profondément égaux même s'ils ne sont pas le même objet. En revanche, une comparaison d'identité demande si deux références font référence au même objet.

Les implémentations de l'égalité profonde comparent généralement deux objets de manière récursive comme suit&nbsp;:

1. Les deux objets ont le même type. Les objets prototype peuvent ou non être comparés en profondeur (et généralement ils ne le sont pas), mais par exemple un tableau ({{JSxRef("Array")}}) ne doit jamais être profondément égal à un objet simple.
2. Pour chaque propriété propre d'un objet, une propriété avec la même clé existe sur l'autre objet, avec des valeurs profondément égales. Si les valeurs sont des primitives, elles sont égales par valeur.
3. Toutes les données qui ne sont pas exposées en tant que propriétés, telles que {{JSxRef("Map")}}, sont comparées en profondeur, à condition que l'implémentation reconnaisse le type d'objet et sache comment récupérer les données.
4. En général, il y a un certain support pour les références circulaires.

Notez que comme JavaScript n'a pas de mécanisme intégré qui effectue une égalité profonde, les implémentations des bibliothèques divergent souvent sur des détails techniques, tels que&nbsp;:

- Si la comparaison est sensible à l'ordre des propriétés
- Quelle règle d'égalité des primitives est utilisée, y compris la gestion de `NaN` et du zéro signé
- Si les propriétés non énumérables ou symboliques sont comparées
- Si les descripteurs de propriétés sont comparés
- Si les propriétés d'accès sont comparées en tant qu'accès, ou si elles déclenchent les accesseurs et comparent les valeurs de retour
- Si les chaînes de prototypes sont comparées par identité
- Quelles structures de données permettent de récupérer des données non-propriétés

Par exemple, Node.js fournit [`assert.deepEqual()` <sup>(angl.)</sup>](https://nodejs.org/api/assert.html#assertdeepequalactual-expected-message) et [`assert.deepStrictEqual()` <sup>(angl.)</sup>](https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message), dont les règles de comparaison diffèrent. Vérifiez les règles documentées d'un utilitaire avant de vous y fier pour vos données.

Une {{Glossary("deep copy", "copie profonde")}} vise à reproduire les données d'un objet sans partager les objets imbriqués mutables&nbsp;; le fait qu'une copie soit égale dépend des règles de copie et de comparaison.

Comparer les résultats de {{JSxRef("JSON.stringify()")}} n'est pas une vérification fiable de l'égalité profonde. La sérialisation peut omettre des propriétés ou transformer des valeurs, l'ordre des propriétés affecte la chaîne de caractères résultante, et les références circulaires provoquent une erreur.

## Voir aussi

- Termes de glossaire associés&nbsp;:
  - {{Glossary("Deep copy", "Copie profonde")}}
- [Comparaisons de qualité et identité](/fr/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
