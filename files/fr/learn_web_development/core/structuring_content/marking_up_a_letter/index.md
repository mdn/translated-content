---
title: "Défi : Structurer une lettre"
slug: Learn_web_development/Core/Structuring_content/Marking_up_a_letter
original_slug: Learn/HTML/Introduction_to_HTML/Marking_up_a_letter
l10n:
  sourceCommit: 3157f78e4c4131d85ff82a4d4ab7d67e91c32b69
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}

Tôt ou tard nous apprenons tous à écrire une lettre&nbsp;; c'est aussi un exemple utile pour tester nos compétences en matière de mise en forme&nbsp;! Dans cet exercice, vous devrez opérer le balisage d'une lettre en utilisant les fonctionnalités textes élémentaires et avancées, y compris les hyperliens, et en plus nous testerons vos connaissances avec certains contenus de `<head>` en HTML.

## Point de départ

Pour commencer, cliquez sur le bouton **Play** dans le panneau d'exemple de code ci-dessous pour ouvrir le corps du texte fourni dans MDN Playground. Vous suivrez les instructions des sections suivantes pour baliser le texte de manière appropriée.

```html-nolint live-sample___start
Dr. Eleanor Gaye
Faculté des sciences étonnantes
Université de l'Étonnement
Bobtown, CA 99999,
USA
Tel: 123-456-7890
Email: no_reply@exemple.fr

20 janvier 2016

Miss Eileen Dover
4321 Cliff Top Edge
Dover, CT9 XXX
UK

Re: Candidature à l'université d'Eileen Dover

Chère Eileen,

Merci pour votre récente candidature pour nous rejoindre à la faculté des
sciences de l'Université de l'Étonnement dans le cadre de votre doctorat
DeP l'année prochaine. Je vais répondre à vos questions une par une, dans
les sections suivantes.

Dates de début

Nous sommes heureux de vous accueillir pour commencer vos études avec nous à
tout moment, cependant il nous conviendrait mieux si vous pouviez commencer au
début d'un semestre&nbsp;; les dates de début pour chacun d'eux sont les
suivantes&nbsp;:

Premier semestre&nbsp;: 9 septembre 2016
Deuxième semestre&nbsp;: 15 janvier 2017
Troisième semestre&nbsp;: 2 mai 2017

Merci de me faire savoir si cela vous convient, et si oui, quelle date de début
vous préféreriez.

Sujets d'étude

À la faculté des sciences de l'Université de l'Étonnement, nous avons une
installation de recherche assez ouverte d'esprit - tant que les sujets relèvent
du domaine de la science et de la technologie. Vous semblez être une chercheuse
intelligente et dévouée, et juste le genre de personne que nous aimerions avoir
dans notre équipe. Cela dit, parmi les idées que vous avez soumises, nous avons
été les plus intrigués par les suivantes, par ordre de priorité&nbsp;:

Transformer H2O en vin, et les bienfaits pour la santé du Resvératrol
(C14H12O3.)
Mesurer l'effet sur la performance des bassistes funk à des températures
dépassant 30°C (86°F), lorsque la taille du public augmente de manière
exponentielle (effet de 3 × 103 à 3 × 104.).
HTML, Hypertext Markup Language, et CSS, Cascading Style Sheets, constructions
pour représenter des partitions musicales.

Vérifiez s'il vous plaît si vous pouvez fournir plus d'informations sur chacun
de ces sujets, y compris combien de temps vous pensez que la recherche prendra,
le personnel requis et d'autres ressources, et tout ce que vous pensez que nous
devrions savoir&nbsp;? Merci.

Mouvements de danse exotiques

Oui, vous avez raison&nbsp;! Dans le cadre de mon travail post-doctoral, j'ai
fait des études sur les danses tribales exotiques. Pour répondre à votre
question, mes danses préférées sont les suivantes, avec des définitions&nbsp;:

Danse des poules polynésiennes
    Une danse peu connue mais très influente datant de 300 avant notre ère, un
    village entier dansait en cercle comme des poules, pour encourager leur
    bétail à être «&nbsp;fertile&nbsp;».
Danse brownienne islandaise
    Avant que les Islandais ne développent le feu comme moyen de se réchauffer,
    ils pratiquaient cette danse, qui consistait à se blottir les uns contre les
    autres en cercle sur le sol, et à se déplacer en effectuant des mouvements
    imperceptiblement petits et très rapides. Un de mes camarades de classe
    disait souvent qu'il pensait que cette danse avait inspiré des styles
    modernes tels que le Twerking.
Danse robotique arctique
    Un exemple intéressant de désinformation historique, des explorateurs
    anglais dans les années 1960 croyaient avoir découvert un nouveau style de
    danse caractérisé par des mouvements «&nbsp;robotiques&nbsp;» et raides,
    pratiqué par les habitants de l'Alaska et du Canada. Plus tard, il a été
    découvert qu'ils se déplaçaient ainsi parce qu'ils avaient vraiment froid.

Cordialement,

Dr. Eleanor Gaye

Université de l'Étonnement
Devise&nbsp;: Soyez géniaux les uns envers les autres. --
Les mémoires de M. Bill S Preston
```

{{EmbedLiveSample("start", "100%", "200px")}}

## Résumé du projet

Pour ce projet, votre tâche est de structurer une lettre qui doit être hébergée sur un intranet universitaire. La lettre est une réponse d'un chercheur à un étudiant potentiel en doctorat concernant sa candidature à l'université.

### Sémantique de bloc/structurelle

- Ajoutez une structure HTML appropriée, y compris le doctype, et les éléments {{htmlelement("html")}}, {{htmlelement("head")}} et {{htmlelement("body")}}.
- En général, la lettre doit être structurée comme une organisation de titres et de paragraphes, sauf pour les adresses mentionnées dans la prochaine puce. Il y a un titre de premier niveau (la ligne "Re:") et trois titres de deuxième niveau.
- Mettez les deux adresses à l'intérieur d'éléments {{htmlelement("address")}}. Chaque ligne de l'adresse doit se trouver sur une nouvelle ligne, mais pas dans un nouveau paragraphe.
- Utilisez un type de liste approprié pour structurer les dates de début de semestre, les matières étudiées et les danses exotiques.

### Sémantique en ligne

- Les noms de l'expéditeur et du destinataire (et _Téléphone_ et _Courriel_) doivent être balisés avec une forte (_strong_) importance.
- Les quatre dates du document doivent être enveloppées dans des éléments appropriés contenant des dates lisibles par machine.
- La première adresse et la première date de la lettre doivent avoir une valeur d'attribut `class` de `sender-column` définie sur elles. Le CSS que vous ajouterez plus tard les fera aligner à droite, comme cela devrait être le cas dans une mise en page de lettre classique.
- Marquez les cinq acronymes/abréviations suivants dans le texte principal de la lettre — «&nbsp;DeP&nbsp;», «&nbsp;HTML&nbsp;», «&nbsp;CSS&nbsp;», «&nbsp;AEC&nbsp;» et «&nbsp;M.&nbsp;» — pour fournir des développements de chacun.
- Les six indices/exposants doivent être marqués de manière appropriée — dans les formules chimiques, et les nombres 103 et 104 (ils doivent être 10 à la puissance de 3 et 4, respectivement).
- Marquez au moins deux autres mots appropriés dans le texte avec une forte importance/emphase.
- Marquez la citation et le slogan de l'université avec des éléments appropriés.

### L'en-tête du document

- Le jeu de caractères du document doit être défini sur `utf-8` à l'aide de la balise `<meta>` appropriée.
- L'auteur de la lettre doit être spécifié dans une balise `<meta>` appropriée.
- Vous devez définir la langue du document sur `fr`.
- Incluez le texte suivant à l'intérieur d'un élément de titre de document&nbsp;: «&nbsp;Correspondance de l'étonnement scientifique au sujet de la demande d'admission&nbsp;».
- Le CSS suivant doit être inclus à l'intérieur d'un élément approprié dans l'en-tête&nbsp;:

```css
body {
  font: 1.2em / 1.5 system-ui;
}

.sender-column {
  text-align: right;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.3em;
}
```

## Astuces et conseils

- Utilisez le [validateur HTML de la W3C <sup>(angl.)</sup>](https://validator.w3.org/) pour valider votre HTML. Accordez-vous des points bonus si cela est validé.
- Vous n'avez pas besoin de connaître le CSS pour faire cette tâche. Vous devez juste mettre le CSS fourni à l'intérieur d'un élément HTML.

## Exemple

L'exemple suivant montre à quoi devrait ressembler la lettre après avoir été structurée. Si vous avez des difficultés à réaliser certaines de ces étapes, consultez la solution ci-dessous avec l'exemple en direct.

{{embedlivesample("finish", "100%", "500px")}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final devrait ressembler à ceci&nbsp;:

```html live-sample___finish
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="author" content="Dr. Eleanor Gaye" />
    <title>
      Correspondance de l'étonnement scientifique au sujet de la demande
      d'admission
    </title>
    <style>
      body {
        font: 1.2em / 1.5 system-ui;
      }

      .sender-column {
        text-align: right;
      }

      h1 {
        font-size: 1.5em;
      }

      h2 {
        font-size: 1.3em;
      }
    </style>
  </head>
  <body>
    <address class="sender-column">
      <strong>Dr. Eleanor Gaye</strong><br />
      Faculté des sciences étonnantes<br />
      Université de l'Étonnement<br />
      Bobtown, CA 99999,<br />
      USA<br />
      <strong>Tél.</strong>: 123-456-7890<br />
      <strong>Courriel</strong>: no_reply@exemple.fr
    </address>

    <p class="sender-column">
      <time datetime="2016-01-20">20 janvier 2016</time>
    </p>

    <address>
      <strong>Miss Eileen Dover</strong><br />
      4321 Cliff Top Edge<br />
      Dover, CT9 XXX<br />
      UK
    </address>

    <h1>Re: Candidature à l'université d'Eileen Dover</h1>

    <p>Chère Eileen,</p>

    <p>
      Merci pour votre récente candidature pour nous rejoindre à la faculté des
      sciences de l'Université de l'Étonnement dans le cadre de votre doctorat
      <abbr>DeP</abbr> l'année prochaine. Je vais répondre à vos questions une
      par une, dans les sections suivantes.
    </p>

    <h2>Dates de début</h2>

    <p>
      Nous sommes heureux de vous accueillir pour commencer vos études avec nous
      à tout moment, cependant il nous conviendrait mieux si vous pouviez
      commencer au début d'un semestre&nbsp;; les dates de début pour chacun
      d'eux sont les suivantes&nbsp;:
    </p>

    <ul>
      <li>
        Premier semestre&nbsp;:
        <time datetime="2016-09-09">9 septembre 2016</time>
      </li>
      <li>
        Second semestre&nbsp;:
        <time datetime="2017-01-15">15 janvier 2017</time>
      </li>
      <li>
        Troisième semestre&nbsp;: <time datetime="2017-05-02">2 mai 2017</time>
      </li>
    </ul>

    <p>
      Merci de me faire savoir si cela vous convient, et si oui, quelle date de
      début vous préféreriez.
    </p>

    <h2>Sujets d'étude</h2>

    <p>
      À la faculté des sciences de l'Université de l'Étonnement, nous avons une
      installation de recherche assez ouverte d'esprit - tant que les sujets
      relèvent du domaine de la science et de la technologie. Vous semblez être
      une chercheuse intelligente et dévouée, et juste le genre de personne que
      nous aimerions avoir dans notre équipe. Cela dit, parmi les idées que vous
      avez soumises, nous avons été les plus intrigués par les suivantes, par
      ordre de priorité&nbsp;:
    </p>

    <ol>
      <li>
        Transformer H<sub>2</sub>O en vin, et les bienfaits pour la santé du
        Resvératrol (C<sub>14</sub>H<sub>12</sub>O<sub>3</sub>.)
      </li>
      <li>
        Mesurer l'effet sur la performance des bassistes funk à des températures
        dépassant 30°C (86°F), lorsque la taille du public augmente de manière
        exponentielle (effet de 3 × 10<sup>3</sup> à 3 × 10<sup>4</sup>.)
      </li>
      <li>
        <abbr>HTML</abbr>, Hypertext Markup Language, et <abbr>CSS</abbr>,
        Cascading Style Sheets, constructions pour représenter des partitions
        musicales.
      </li>
    </ol>

    <p>
      Vérifiez s'il vous plaît si vous pouvez fournir plus d'informations sur
      chacun de ces sujets, y compris combien de temps vous pensez que la
      recherche prendra, le personnel requis et d'autres ressources, et tout ce
      que vous pensez que nous devrions savoir&nbsp;? Merci.
    </p>

    <h2>Mouvements de danse exotiques</h2>

    <p>
      Oui, vous avez raison&nbsp;! Dans le cadre de mon travail post-doctoral,
      j'ai <em>fait</em> des études sur les danses tribales exotiques. Pour
      répondre à votre question, mes danses préférées sont les suivantes, avec
      des définitions&nbsp;:
    </p>

    <dl>
      <dt>Danse des poules polynésiennes</dt>
      <dd>
        Une danse peu connue mais <em>très</em> influente datant d'aussi loin
        que 300 <abbr title="Avant l'Ère Commune">AEC</abbr>, tout un village
        dansait en cercle comme des poules, pour encourager leur bétail à être
        "fertile".
      </dd>
      <dt>Danse brownienne islandaise</dt>
      <dd>
        Avant que les Islandais ne développent le feu comme moyen de se
        réchauffer, ils pratiquaient cette danse, qui consistait à se blottir
        les uns contre les autres en cercle sur le sol, et à se déplacer en
        effectuant des mouvements imperceptiblement petits et très rapides. Un
        de mes camarades de classe disait souvent qu'il pensait que cette danse
        avait inspiré des styles modernes tels que le Twerking.
      </dd>
      <dt>Danse robotique arctique</dt>
      <dd>
        Un exemple intéressant de désinformation historique, des explorateurs
        anglais dans les années 1960 croyaient avoir découvert un nouveau style
        de danse caractérisé par des mouvements «&nbsp;robotiques&nbsp;» et
        raides, pratiqué par les habitants de l'Alaska et du Canada. Plus tard,
        il a été découvert qu'ils se déplaçaient ainsi parce qu'ils avaient
        vraiment froid.
      </dd>
    </dl>

    <p>Cordialement,</p>

    <p>Dr. Eleanor Gaye</p>

    <p>
      Université de l'Étonnement<br />
      Devise&nbsp;: <q>Soyez géniaux les uns envers les autres.</q> --
      <cite
        >Les mémoires de <abbr title="Monsieur">M.</abbr> Bill S Preston</cite
      >
    </p>
  </body>
</html>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}
