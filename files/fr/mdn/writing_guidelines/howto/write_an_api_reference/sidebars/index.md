---
title: Barres latérales de référence d'API
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

Vous pouvez inclure une barre latérale personnalisée sur les pages de référence d'API afin qu'elle affiche des liens vers des interfaces, des tutoriels et d'autres ressources pertinentes uniquement pour cette API.
Cet article explique comment procéder.

## Création d'une barre latérale

Vous devez suivre les trois étapes suivantes pour créer votre barre latérale d'API&nbsp;:

1. Créez vos pages de référence d'API.
2. Ajoutez une entrée pour votre API particulière dans le fichier [`GroupData.json` <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json).
3. Utilisez la macro [`APIRef` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs) pour insérer la barre latérale dans chaque page sur laquelle vous souhaitez l'afficher.

Passons en revue chacune de ces étapes.
L'exemple auquel nous nous référons dans cet article est [l'API Fetch](/fr/docs/Web/API/Fetch_API).

### Ajouter une entrée à GroupData.json

Le fichier `GroupData.json` contient toutes les données relatives aux liens devant apparaître dans les barres latérales de référence d'API.
Lorsqu'elle est invoquée, la macro `APIRef` prend un nom d'API donné en paramètre, recherche ce nom dans `GroupData.json`, construit une barre latérale appropriée et l'insère dans la page.

Pour ajouter une entrée à `GroupData.json`, vous devez&nbsp;:

1. Assurez-vous d'avoir un compte [GitHub <sup>(angl.)</sup>](https://github.com/).
2. Forkez le dépôt de contenu MDN, créez une nouvelle branche pour contenir vos modifications, et clonez le dépôt localement.
3. Passez à votre nouvelle branche avant de commencer le travail, et assurez-vous de pousser les modifications après avoir terminé.
4. Créez une pull request afin que l'équipe MDN puisse examiner votre travail et demander des modifications si nécessaire.

Le fichier `GroupData.json` se trouve dans le répertoire `files/jsondata/`.
En le regardant, vous pouvez voir une structure JSON géante, chaque API ayant son propre membre.
Le nom est le nom de l'API, et la valeur est un objet contenant plusieurs sous-membres définissant les liens de la barre latérale à créer.

Par exemple, regardez la page [API Fetch](/fr/docs/Web/API/Fetch_API) sur MDN.
L'entrée correspondante dans `GroupData.json` ressemble à ceci&nbsp;:

```json
{
  "Fetch API": {
    "overview": ["Fetch API"],
    "interfaces": [
      "Headers",
      "Request",
      "Response",
      "FetchController",
      "FetchObserver",
      "FetchSignal",
      "ObserverCallback"
    ],
    "methods": ["fetch()"],
    "properties": [],
    "events": []
  }
}
```

Comme vous pouvez le voir, nous avons utilisé «&nbsp;API Fetch&nbsp;» pour le nom, et à l'intérieur de la valeur de l'objet, nous incluons un certain nombre de sous-membres.

#### Sous-membres à inclure dans une entrée GroupData

Cette section répertorie tous les sous-membres que vous pouvez inclure dans une entrée `GroupData`.

Notez que la plupart des valeurs incluses dans les sous-membres listés correspondent à la fois au texte du lien et aux chemins ajoutés à la fin de la page d'index principale de l'API — `https://developer.mozilla.org/<language-code>/docs/Web/API` — pour créer l'URL finale du lien affiché.
Ainsi, par exemple, «&nbsp;Response&nbsp;» donne lieu à la création d'un lien comme suit&nbsp;:

```html
<li><a href="/fr/docs/Web/API/Response">Response</a></li>
```

Il y a quelques exceptions.
Par exemple, le sous-membre «&nbsp;guides&nbsp;» contient les URL qui pointent vers des guides/tutoriels associés.
Dans ce cas, les UR sont ajoutées à la fin de la racine des documents MDN — `https://developer.mozilla.org/<language-code>` — ce qui permet d'inclure un article n'importe où sur MDN.

Voici les membres disponibles.
Ils sont tous techniquement optionnels, mais il est fortement recommandé, au lieu de les omettre, d'inclure des tableaux vides.

1. `"overview"` — la valeur est un tableau, à l'intérieur duquel vous incluez le chemin de la page de présentation de l'API, s'il y en a une.
   «&nbsp;API Fetch&nbsp;» donne lieu à la création d'un lien vers [https://developer.mozilla.org/fr/docs/Web/API/Fetch_API](/fr/docs/Web/API/Fetch_API).
2. `"interfaces"` — la valeur est un tableau dans lequel vous devez répertorier toutes les interfaces qui font partie de cette API.
   «&nbsp;Response&nbsp;» donne lieu à la création d'un lien vers [https://developer.mozilla.org/fr/docs/Web/API/Response](/fr/docs/Web/API/Response).
3. `"methods"` — la valeur est un tableau qui doit contenir toutes les méthodes que la spécification ajoute aux interfaces associées à d'autres API, telles que les méthodes d'instanciation créées sur {{DOMxRef("Navigator")}} ou {{DOMxRef("Window")}}.
   S'il y a un grand nombre de méthodes, vous pouvez envisager de ne répertorier que les plus populaires, ou de les mettre en premier dans la liste.
   «&nbsp;fetch()&nbsp;» donne lieu à la création d'un lien vers [https://developer.mozilla.org/fr/docs/Web/API/fetch](/fr/docs/Web/API/Window/fetch).
   Ne _listez pas_ les méthodes qui sont des membres d'interfaces appartenant à la même API.
4. `"properties"` — la valeur est un tableau qui doit contenir toutes les propriétés associées à l'API.
   Cela peut inclure des propriétés qui sont des membres d'interfaces définies dans la spécification de l'API, ainsi que des propriétés que l'API définit sur d'autres interfaces.
   S'il y a un grand nombre de propriétés, vous pouvez envisager de ne répertorier que les plus populaires, ou de les mettre en premier dans la liste.
   «&nbsp;Headers.append&nbsp;» donne lieu à la création d'un lien vers [https://developer.mozilla.org/fr/docs/Web/API/Headers/append](/fr/docs/Web/API/Headers/append).
5. `"events"` — la valeur est un tableau qui doit contenir le _titre_ des évènements qui font partie de l'API mais sont définis dans des interfaces qui ne font _pas_ partie de l'API (les évènements appartenant à des interfaces de l'API (`interfaces`) sont documentés par défaut).
   S'il y a un grand nombre d'évènements, vous pouvez envisager de ne répertorier que les plus populaires, ou de les mettre en premier dans la liste.
   Par exemple, `"Document: selectionchange"` fait partie de [l'API de sélection](/fr/docs/Web/API/Selection_API) mais `Document` ne l'est pas, donc nous ajoutons l'évènement au tableau et il est lié depuis le sujet [API de sélection](/fr/docs/Web/API/Selection_API).
6. `"guides"` — la valeur est un tableau de chaînes de caractères, chacune abordant un sujet de guide expliquant comment utiliser l'API.
   Les chaînes de caractères contiennent la partie de l'adresse URL du guide après le chemin de la langue&nbsp;: c'est-à-dire, la partie `/docs/...` de l'URL du guide.
   Par exemple, pour créer un lien vers le sujet "Utilisation de Fetch" à `https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch`, le tableau de guides contient "/docs/Web/API/Fetch_API/Using_Fetch".
7. `"dictionaries"` — un tableau de chaînes de caractères répertoriant tous les dictionnaires qui font partie de l'API.
   En général, seuls les dictionnaires utilisés par plus d'une propriété ou méthode doivent être répertoriés ici, sauf s'ils sont d'une importance particulière ou sont susceptibles d'être référencés depuis plusieurs pages.
   «&nbsp;CryptoKeyPair&nbsp;» donne lieu à un lien vers [https://developer.mozilla.org/fr/docs/Web/API/CryptoKeyPair](/fr/docs/Web/API/CryptoKeyPair).
   > [!NOTE]
   > MDN s'éloigne de la documentation séparée des dictionnaires.
   > Dans la mesure du possible, ceux-ci sont désormais décrits comme des objets dans les endroits où ils sont utilisés.
8. `"types"` — un tableau de typedefs et de types énumérés définis par l'API.
   Vous pouvez choisir de ne lister que ceux qui sont d'une importance particulière ou qui sont référencés depuis plusieurs pages, afin de garder la liste courte.
   > [!NOTE]
   > MDN s'éloigne de la documentation séparée des typedefs.
   > Dans la mesure du possible, ceux-ci sont désormais décrits comme des valeurs dans les endroits où ils sont utilisés.
9. `"callbacks"` — la valeur est un tableau contenant une liste de tous les types de fonctions de rappel définis pour l'API.
   Il se peut que vous n'ayez pas besoin d'utiliser ce groupe du tout, même pour les API qui incluent des types de fonctions de rappel, car souvent ils ne sont pas utiles à documenter séparément.

## Balises utilisées par les barres latérales

Certaines sous-membres sont automatiquement découvertes à partir des pages enfants, en fonction des balises de page.
Les pages sous l'API de niveau supérieur sont explorées chaque fois que la barre latérale est rendue, et des entrées sont automatiquement créées pour les méthodes (balise «&nbsp;<i lang="en">Method</i>&nbsp;»), les propriétés (balise «&nbsp;<i lang="en">Property</i>&nbsp;») et les constructeurs (balise «&nbsp;<i lang="en">Constructor</i>&nbsp;»).

Certaines sous-membres sont également automatiquement décorées avec des icônes d'avertissement en fonction des balises.
Des décorations sont ajoutées pour les sous-membres expérimentaux (balise «&nbsp;<i lang="en">Experimental</i>&nbsp;»), non standard (balise «&nbsp;<i lang="en">Non Standard</i>&nbsp;» ou «&nbsp;<i lang="en">Non-standard</i>&nbsp;») ou obsolètes (balise «&nbsp;<i lang="en">Deprecated</i>&nbsp;»).

Des informations supplémentaires sur le traitement basé sur les balises sont disponibles [dans la source APIRef <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs).

## Insertion de la barre latérale

Une fois que vous avez ajouté une entrée pour votre API dans `GroupData.json`, soumis une demande de tirage et que la modification a été acceptée dans le dépôt principal, vous pouvez l'inclure dans vos pages de référence API en utilisant la macro [`APIRef` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs), qui prend le nom que vous avez utilisé pour votre API dans GroupData comme paramètre.
À titre d'exemple, la barre latérale de [l'API WebVR](/fr/docs/Web/API/WebVR_API) est incluse dans ses pages avec ce qui suit&nbsp;:

```plain
\{{APIRef("WebVR API")}}
```
