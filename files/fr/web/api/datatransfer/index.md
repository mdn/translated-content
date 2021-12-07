---
title: DataTransfer
slug: Web/API/DataTransfer
tags:
  - API
  - Glisser-deposer
translation_of: Web/API/DataTransfer
---
L'objet `DataTransfer` contient les données glissées au cours d'une opération de glisser-déposer. Il peut contenir un ou plusieurs éléments, du même type ou de types différents. Pour plus d'informations sur le glisser-déposer, voir [Glisser et déposer](/fr/docs/Glisser_et_d%C3%A9poser).

Cet objet est disponible depuis la propriété `dataTransfer` de tous les événements de glisser. Il ne peut pas être créé séparément.

## Aperçu des proprietés

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Propriété</td>
      <td class="header">Type</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/En/DragDrop/DataTransfer#dropEffect">dropEffect</a></code
        >
      </td>
      <td>
        <code><a href="/en/String">String</a></code>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/En/DragDrop/DataTransfer#effectAllowed"
            >effectAllowed</a
          ></code
        >
      </td>
      <td>
        <code><a href="/en/String">String</a></code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/En/DragDrop/DataTransfer#files"><code>files</code></a>
      </td>
      <td>{{ domxref("FileList") }}</td>
    </tr>
    <tr>
      <td>
        <code><a href="/En/DragDrop/DataTransfer#mozCursor">mozCursor</a></code>
        {{ non-standard_inline() }}
      </td>
      <td>
        <code><a href="/en/String">String</a></code>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/En/DragDrop/DataTransfer#mozItemCount"
            >mozItemCount</a
          ></code
        >
        {{ non-standard_inline() }}
      </td>
      <td><code>unsigned long</code></td>
    </tr>
    <tr>
      <td>
        <a href="/En/DragDrop/DataTransfer#mozSourceNode"
          ><code>mozSourceNode</code></a
        >
        {{ non-standard_inline() }}
      </td>
      <td>{{ domxref("Node") }}</td>
    </tr>
    <tr>
      <td>
        <a href="/En/DragDrop/DataTransfer#mozUserCancelled"
          ><code>mozUserCancelled</code></a
        >
      </td>
      <td>
        <a href="/en/JavaScript/Reference/Global_Objects/Boolean"
          ><code>Boolean</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/En/DragDrop/DataTransfer#types">types</a></code>
      </td>
      <td>
        <code><a href="/en/DOMStringList">StringList</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Aperçu des méthodes

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code
          >void <a href="#addElement.28.29">addElement</a>(in
          <a href="/en/XPCOM_Interface_Reference/nsIDOMElement">Element</a>
          image)</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="#clearData.28.29">clearData</a>([in
          <a href="/en/String">String</a> type])</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en/String">String</a>
          <a href="#getData.28.29">getData</a>(in
          <a href="/en/String">String</a> type)</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="#setData.28.29">setData</a>(in
          <a href="/en/String">String</a> type, in
          <a href="/en/String">String</a> data)</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="#setDragImage.28.29">setDragImage</a>(in
          <a href="/en/XPCOM_Interface_Reference/nsIDOMElement"
            >nsIDOMElement</a
          >
          image, in long x, in long y)</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="#mozClearDataAt.28.29">mozClearDataAt</a>([in
          <a href="/en/String">String</a> type, in unsigned long index])</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en/XPCOM_Interface_Reference/NsIVariant">nsIVariant</a>
          <a href="#mozGetDataAt.28.29">mozGetDataAt</a>(in
          <a href="/en/String">String</a> type, in unsigned long index)</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="#mozSetDataAt.28.29">mozSetDataAt</a>(in
          <a href="/en/String">String</a> type, in
          <a href="/en/XPCOM_Interface_Reference/NsIVariant">nsIVariant</a>
          data, in unsigned long index)</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en/StringList">StringList</a>
          <a href="#mozTypesAt.28.29">mozTypesAt</a>([in unsigned long
          index])</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Propriétés

### dropEffect

L'effet utilisé, qui doit toujours être l'une des valeurs possibles de `effectAllowed`.

Pour les événements ` d``ragenter ` et `dragover`, la propriété `dropEffect` est initialisée en fonction des actions initiées par l'utilisateur. Ceci est spécifique à la plateforme, mais en général, l'utilisateur peut appuyer sur les touches de modification pour ajuster l'action souhaitée. Dans un gestionnaire d'événement ` d``ragenter ` et `dragover`, la propriété `dropEffect` peut être modifiée si l'action de l'utilisateur demandée n'est pas celle souhaitée.

Pour les évènements `dragstart`, `drag`, and `dragleave` events, `dropEffect` est initialisé à "none". Toute valeur peut être assignée à `dropEffect`, mais elle sera ignorée.

Pour les évènements `drop` et `dragend` , `dropEffect` est initialisé en fonction de l'action initiée, et correspond à la dernière valeur de `dropEffect` après le dernier événement `dragenter` ou `dragover`.

Valeurs possibles:

- **copy**: Une copie de l'élément source est faite au nouvel emplacement.
- **move**: Un élément est déplacé vers un nouvel emplacement.
- **link**: Un lien est établi depuis la source vers le nouvel emplacement.
- **none**: L'élément ne peut pas être déposé.

Attribuer une autre valeur n'a aucun effet et conserve l'ancienne valeur.

### effectAllowed

Indique les effets qui sont autorisés pour ce déplacer. Il peut être spécifié dans l'évènement `dragstart` pour définir les effets souhaités pour la source, et dans les événements `dragenter` et `dragover` pour définir les effets souhaités pour la cible. La valeur n'est pas utilisée pour d'autres événements.

Valeurs possibles:

- **copy**: Une copie de l'élément source peut être faite à son nouvel emplacement.
- **move**: Un élément peut être déplacé vers un nouvel emplacement.
- **link**: Un lien peut être établi vers la source depuis le nouvel emplacement.
- **copyLink**: Une opération copy ou link est autorisée.
- **copyMove**: Une opération copy ou move est autorisée.
- **linkMove**: Une opération link ou move est autorisée.
- **all**: Toutes les opérations sont autorisées.
- **none**: l'élément ne peut être déposé.
- **uninitialized**: la valeur par défaut lorsque l'effet n'a pas été spécifié, ce qui équivaut à all.

Attribuer une autre valeur n'a aucun effet et conserve l'ancienne valeur.

### files

Contient une liste de tous les fichiers locaux disponibles sur le transfert de données. Si le glisser n'implique pas de fichiers, cette propriété est une liste vide. Un accès à un index invalide sur le {{ domxref("FileList") }} spécifié par cette propriété renvoie `null`.

#### Exemple

Cet exemple retourne la liste des fichiers traînée dans la fenêtre du navigateur:  <http://jsfiddle.net/9C2EF/>

### types

Contient une liste des types de format des données stockées pour le premier élément, dans le même ordre oú les données ont été ajoutées. Une liste vide sera retournée si aucune donnée n'a été ajoutée.

L'état du curseur au cours d'un glisser. Cette propriété est surtout utilisée pour contrôler le curseur au cours d'un glisser d'onglet.

> **Note :** Cette méthode n'est actuellement implémentée que sur Windows.

#### Valeurs possibles

- `auto`
  - : Utilise le comportement par défaut du système.
- `default`
  - : Utilise le comportement par défaut de Gecko, qui consiste à utiliser une flèche pour curseur au cours d'un glisser.

> **Note :** Si vous spécifiez une valeur autre que "default", "auto" est supposé.

### mozItemCount

Le nombre d'éléments glissés.

> **Note :** Cette propriété est  spécifique a Gecko.

### mozSourceNode

le {{ domxref("Node") }} au dessus duquel le curseur de la souris se trouvait lorsque le bouton a été pressé pour initialiser le glisser. Cette valeur est nulle pour un glisser externe, ou si l'appelant ne peut pas accéder au nœud.

> **Note :** Cette propriété est  spécifique a Gecko.

### mozUserCancelled

Cette propriété s'applique uniquement à l'événement `dragend`, et est positionnée à `true` si l'utilisateur a annulé le glisser en appuyant sur la touche échappe. Elle est positionnée à `false` dans les autres cas, y compris si le glisser a échoué pour toute autre raison, par exemple en raison d'un déposer sur un emplacement non valide. Cette propriété n'est pas encore implémenté sous Linux.

> **Note :** Cette propriété est  spécifique a Gecko.

## Methods

### addElement()

Spécifie la source du glisser. Ceci est rarement utilisé, mais a pour effet de modifier la cible des événements `drag` et `dragend`. La cible par défaut est le nœud qui est glissé.

     void addElement(
       in Element element
     );

#### Parametres

- `element`
  - : L'élément à ajouter.

### clearData()

Supprime les données associées au type spécifié. L'argument type est facultatif. Si le type est vide ou non spécifié, les données associées à tous les types sont supprimées. Si les données pour le type spécifié n'existent pas, ou le transfert de données ne contient pas de données, cette méthode n'aura aucun effet.

     void clearData(
       [optional] in String type
     );

#### Parametres

- `type`
  - : The type of data to remove.

### getData()

Récupère les données du type spécifié, ou une chaîne vide si les données de ce type n'existe pas ou le transfert de données ne contient aucune donnée.

Une erreur de sécurité se produira si vous tentez de récupérer des données lors d'un glisser qui a été spécifié à partir d'un domaine différent ou auquel l'appelant n'a pas accès. Ces données ne seront disponibles qu'à l'issue du déposer au cours d'un événement drop.

     void getData(
       in String type
     );

#### Parametres

- `type`
  - : Le type de donnée à récupérer.

### setData()

Définit une donnée pour le type spécifié. Si des données pour le type n'existe pas, elle est ajoutée à la fin, de telle sorte que le dernier élément dans la liste des types sera le nouveau format. Si une donnée pour le type existe déjà, la donnée existante est remplacée à la même position. C'est-à-dire que l'ordre de la liste des types ne change pas lors du remplacement de la donnée d'un même type.

     void setData(
       in String type,
       in String data
     );

#### Parametres

- `type`
  - : Le type de la donnée à ajouter.
- `data`
  - : La donnée à ajouter.

### setDragImage()

Définit l'image à utiliser pour un glisser, si une image personnalisée est souhaitée. Cette méthode est rarement utilisée, dans la mesure oú une image par défaut est créée à partir du nœud glissé.

Si le nœud est un élément HTML img, un élément canvas HTML ou un élément d'image XUL, la donnée image est utilisée. Sinon, l'image doit être un nœud visible et l'image utilisée pendant le glisser est créée à partir de ce noeud. Si l'image est null, toute image personnalisé est effacée et la valeur par défaut est utilisée à la place.

Les coordonnées spécifient le décalage à l'intérieur de l'image spécifiant la position du curseur de la souris. Pour centrer l'image, par exemple, utiliser des valeurs qui sont la moitié de la largeur et de la hauteur de l'image.

     void setDragImage(
       in Element image,
       in long x,
       in long y
     );

#### Parametres

- `image`
  - : Un élément à utiliser comme image pendant le glisser
- `x`
  - : Décalage horizontal à l'intérieur de l'image.
- `y`
  - : Décalage vertical à l'intérieur de l'image.

### mozClearDataAt()

Supprime les données associées au format pour un élément à l'index spécifié. L'index est compris entre zéro et le nombre d'éléments moins un.

Si le dernier format de l'élément est supprimé, l'élément entier est retiré, réduisant `mozItemCount` par un.

Si la liste `format` est vide, alors les données associées à tous les formats sont supprimées. Si le format n'est pas trouvé, alors cette méthode n'a aucun effet.



> **Note :** Cette méthode est spécifique à Gecko.

     void mozClearDataAt(
       [optional] in String type,
       in unsigned long index
     );

#### Parametres

- `type`
  - : Le type de la donnée à supprimer.
- `index`
  - : L'index de la donnée à supprimer.

### mozGetDataAt()

Récupère les données associées au format donné pour un élément à l'index spécifié, ou null si elle n'existe pas. L'indice devrait être compris entre zéro et le nombre d'éléments moins un.

> **Note :** Cette méthode est spécifique à Gecko.

     nsIVariant mozGetDataAt(
       [optional] in String type,
       in unsigned long index
     );

#### Parametres

- `type`
  - : Le type de donnée à récupérer.
- `index`
  - : L'indice de la donnée à récupérer.

### mozSetDataAt()

Un transfert de données peut stocker plusieurs éléments, chacun à un index commençant à zéro. ` mozSetDataAt(``) ` ne peut être appelé qu'avec un index inférieur à `mozItemCount,` auquel cas un élément existant est modifié, ou égal à `mozItemCount,` auquel cas un nouvel élément est ajouté, et `mozItemCount` est incrémenté de un.

Les données doivent être ajoutées par ordre de préférence, avec le format le plus spécifique ajouté en premier et le format moins spécifique ajouté en dernier. Si la donnée du format spécifié existe déjà, elle est remplacée dans la même position que la donnée précédente.

La donnée doit être une chaîne, ou un type primitif booléen, ou un type numérique (qui sera converti en une chaîne), ou une [nsISupports](/fr/docs/XPCOM_Interface_Reference/nsISupports).

> **Note :** Cette méthode est spécifique à Gecko.

     void mozSetDataAt(
       [optional] in String type,
       in nsIVariant data,
       in unsigned long index
     );

#### Parametres

- `type`
  - : Le type de donnée à ajouter.
- `data`
  - : La donnée à ajouter.
- `index`
  - : L'index de la donnée à ajouter.

### mozTypesAt()

Contient une liste des types de format des données qui sont stockées pour un élément à l'index spécifié. Si l'index n'est pas dans compris entre 0 et le nombre d'éléments moins un, une liste de chaîne vide est retournée.

> **Note :** Cette méthode est spécifique à Gecko.

     nsIVariant mozTypesAt(
       in unsigned long index
     );

#### Parameters

- `index`
  - : L'index de la donnée pour laquelle récupérer les types.

## Voir Aussi

[Drag and Drop](/En/DragDrop/Drag_and_Drop)
