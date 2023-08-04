---
title: Unicode
slug: Glossary/Unicode
---

Unicode est une {{Glossary("Character set","police de caractères")}} standard qui énumère et définit les {{Glossary("Character","caractères")}} des différentes langues du monde, systèmes d'écriture et symboles. En attribuant un nombre à chaque caractère, les programmeurs peuvent {{Glossary("Character encoding", "encoder des caractères")}}, pour permettre aux ordinateurs de stocker, traiter et transmettre toute combinaison de langues dans le même fichier ou programme.

Avant Unicode, il était difficile et sujet aux erreurs de mélanger les langues dans les mêmes données. Par exemple, un jeu de caractères stocke des caractères japonais et un autre stocke l'alphabet arabe. S'il n'était pas clairement indiqué quelles parties des données étaient dans quel jeu de caractères, d'autres programmes et ordinateurs affichaient incorrectement le texte ou l'endommageaient pendant le traitement. Si vous avez déjà vu du texte où des caractères comme des citations entre guillemets en cursives (`“”`) remplacés par du charabia comme `Ã‚Â£`,alors vous avez vu ce problème, connu sous le nom [Mojibake](https://fr.wikipedia.org/wiki/Mojibake).

Le codage de caractères Unicode le plus courant sur le Web est {{Glossary("UTF-8")}}. D'autres encodages existent, comme UTF-16 ou l'obsolète UCS-2, mais UTF-8 est recommandé.

## Voir aussi

- [Unicode](https://fr.wikipedia.org/wiki/Unicode) sur Wikipédia
- [The Unicode Standard : A Technical Introduction](http://www.unicode.org/standard/principles.html) (en)
