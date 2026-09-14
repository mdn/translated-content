---
title: Doctype
slug: Glossary/Doctype
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En {{Glossary("HTML")}}, le doctype est le préambule «&nbsp;`<!doctype html>`&nbsp;» requis en haut de tous les documents. Son seul but est d'empêcher un {{Glossary("Browser","navigateur")}} de passer en soi-disant ["quirks mode"](/fr/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) lors du rendu d'un document&nbsp;; c'est-à-dire que le doctype «&nbsp;`<!doctype html>`&nbsp;» garantit que le navigateur fait de son mieux pour suivre les spécifications pertinentes, plutôt que d'utiliser un mode de rendu différent incompatible avec certaines spécifications.

Le doctype n'est pas sensible à la casse. La convention des exemples de code MDN est d'utiliser les minuscules, mais il est aussi courant de l'écrire comme `<!DOCTYPE html>`.

## Voir aussi

- [Mode quirks dans Mozilla](/fr/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- [Document.doctype](/fr/docs/Web/API/Document/doctype), une méthode JavaScript qui retourne le doctype
- [Définition du DOCTYPE dans la spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
