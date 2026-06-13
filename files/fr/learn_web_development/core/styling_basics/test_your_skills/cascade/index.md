---
title: "Testez vos compétences : La cascade"
short-title: "Test : La cascade"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics")}}

L'objectif de ce test de compétences est de vous aider à évaluer si vous comprenez les valeurs universelles des propriétés pour [contrôler l'héritage en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## La cascade 1

Dans cette tâche, nous voulons que vous utilisiez l'une des valeurs spéciales que nous avons examinées dans la section [contrôler l'héritage](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#contrôler_lhéritage).

Pour compléter la tâche, écrivez une déclaration dans une nouvelle règle qui réinitialise la couleur de fond à blanc, sans utiliser une valeur de couleur réelle.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("cascade1-start", "100%", 110)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___cascade1-start live-sample___cascade1-finish
<div class="conteneur" id="exterieur">
  <div class="conteneur" id="interieur">
    <ul>
      <li class="nav"><a href="#">Un</a></li>
      <li class="nav"><a href="#">Deux</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___cascade1-start live-sample___cascade1-finish
#exterieur div ul .nav a {
  background-color: powderblue;
  padding: 5px;
  display: inline-block;
  margin-bottom: 10px;
}

div div li a {
  color: rebeccapurple;
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("cascade1-finish", "100%", 110)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Une solution possible est la suivante&nbsp;:

```css live-sample___cascade1-finish
#exterieur #interieur a {
  background-color: inherit;
}
```

Il y a deux choses à faire dans cette tâche. Tout d'abord, écrivez un sélecteur pour l'élément `a` qui est plus spécifique que le sélecteur utilisé pour rendre le fond bleu poudre. Dans cette solution, c'est réalisé en utilisant le sélecteur `id`, qui a une spécificité très élevée.

Ensuite, vous devez vous rappeler qu'il existe des valeurs de mot-clé spéciales pour toutes les propriétés. Dans ce cas, l'utilisation de `inherit` rétablit la couleur de fond pour qu'elle soit la même que celle de son élément parent.

</details>

## La cascade 2

Pour compléter cette tâche, manipulez l'ordre des couches de la cascade pour colorer les liens en `rebeccapurple`. Ne modifiez pas la déclaration `lightgreen`&nbsp;!

Cette tâche est un objectif ambitieux — elle nécessite une connaissance des couches de la cascade, que nous n'avons pas abordée dans l'article [Gérer les conflits](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts). Vous pouvez trouver les informations nécessaires pour tenter cette tâche dans [Couches de la cascade > Déterminer la priorité en fonction de l'ordre des couches](/fr/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#déterminer_la_priorité_en_fonction_de_lordre_des_couches).

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("cascade2-start", "100%", 110)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___cascade2-start live-sample___cascade2-finish
<div class="conteneur" id="exterieur">
  <div class="conteneur" id="interieur">
    <ul>
      <li class="nav"><a href="#">Un</a></li>
      <li class="nav"><a href="#">Deux</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___cascade2-start
@layer yellow, purple, green;

@layer yellow {
  #exterieur div ul .nav a {
    padding: 5px;
    display: inline-block;
    margin-bottom: 10px;
  }
}
@layer purple {
  div div li a {
    color: rebeccapurple;
  }
}
@layer green {
  a {
    color: lightgreen;
  }
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("cascade2-finish", "100%", 110)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Une solution possible est la suivante&nbsp;:

```css live-sample___cascade2-finish
@layer yellow, green, purple;
```

```css hidden live-sample___cascade2-finish
@layer yellow {
  #exterieur div ul .nav a {
    padding: 5px;
    display: inline-block;
    margin-bottom: 10px;
  }
}
@layer purple {
  div div li a {
    color: rebeccapurple;
  }
}
@layer green {
  a {
    color: lightgreen;
  }
}
```

Il y a une chose que vous devez faire dans cette tâche&nbsp;: changer l'ordre de priorité afin que la déclaration pour la couleur souhaitée se trouve dans la dernière couche déclarée, ce que montre cette solution.

Vous devez vous rappeler que les styles normaux non organisés en couches ont la priorité sur les styles normaux organisés en couches. Mais, si tous les styles sont dans des couches — comme dans le cas de cette tâche — les styles dans les couches déclarées plus tard ont la priorité sur les styles déclarés dans les couches plus anciennes. Déplacer la couche violette à la fin signifie qu'elle a la priorité sur les couches verte et jaune.

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics")}}
