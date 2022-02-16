---
title: HTMLOptionElement
slug: Web/API/HTMLOptionElement
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsNewLayout
  - Reference
translation_of: Web/API/HTMLOptionElement
---
{{APIRef("HTML DOM")}}

L'interface `HTMLOptionElement` représente l'élément {{HTMLElement("option")}} et hérite de toutes les classes et méthodes de l'intreface {{domxref("HTMLElement")}} .

## _Propriétés_

_hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>defaultSelected</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        <p>
          Contient la valeur initiale de l'attribut HTML
          {{htmlattrxref("selected", "option")}} ,indiquant si
          l'option est sélectionnée par défaut ou non.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        <p>
          Retourne la valeur de l'attribut HTML
          {{htmlattrxref("disabled", "option")}} , cet attribut
          indique que l'option ne peut pas être sélectionnée. Une option peut
          aussi être désactivée lorsqu'elle est fille d'un élément
          {{HTMLElement("optgroup")}} désactivé.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>form</code>{{readonlyInline}}</td>
      <td>{{domxref("HTMLFormElement")}}</td>
      <td>
        <p>
          Si l'option est une fille d'un élément
          {{HTMLElement("select")}}, cette propriété à la même valeur que
          l'attribut <code>form</code> de l'objet
          {{DomXref("HTMLSelectElement")}}
        </p>
        <p>correspondant, sinon , sa valeur est <code>null</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>index</code>{{readonlyInline}}</td>
      <td><code>long</code></td>
      <td>
        <p>
          La position de l'option dans la liste d'options à laquelle elle
          appartient, dans un ordre arborescent. Si l'option ne fait pas partie
          d'une liste d'options , comme dans le cas où elle appartient à
          l'élément {{HTMLElement("datalist")}} sa valeur est 0.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        <p>
          Reflète la valeur de l'attribut
          {{htmlattrxref("label", "option")}}, qui fourni un
          libellé à l'option. si cet attribut n'est pas spécifié, sa lecture
          retourne le text de l'élément en question.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>selected</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td><p>Indique si l'option est sélectionnée ou non .</p></td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td><p>Contient le contenu texte de l'élément.</p></td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        <p>
          Retourne la valeur de l'attribut HTML
          {{htmlattrxref("value", "option")}}, s'il existe, sinon
          la valeur de la propriété {{domxref("Node.textContent")}} est
          retournée.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Méthodes

_Hérite des méthodes de son parent , {{domxref("HTMLElement")}}._

- {{domxref("HTMLOptionElement.Option()")}}
  - : C'est le constructeur créant l'objet `HTMLOptionElement` object. il accepte quatre valeurs : le texte à afficher , `text`, la valeur associée au texte , `value`, la valeur du `defaultSelected`, et la valeur du `selected`. les trois dernières sont optionnelles.

## Spécifications

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('HTML WHATWG', "the-button-element.html#the-option-element", "HTMLOptionElement")}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td>
        <p>pas de changement depuis la {{SpecName("HTML5 W3C")}}.</p>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML5 W3C', "forms.html#the-option-element", "HTMLOptionElement")}}
      </td>
      <td>{{Spec2('HTML5 W3C')}}</td>
      <td>
        <p>
          Le constructeur, <code>Option()</code>, a été ajouté. la propriété
          <code>form </code>peut avoir la valeur <code>null</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('DOM2 HTML', 'html.html#ID-70901257', 'HTMLOptionElement')}}
      </td>
      <td>{{Spec2('DOM2 HTML')}}</td>
      <td>
        <p>
          Le sens de la propriété <code>selected a changé</code>: elle indique
          désormais si l'option est sélectionnée à l'instant , au lieu
          d'indiquer si elle a été initialement sélectionnée.
        </p>
        <p>
          La propriété <code>defaultSelected</code> n'est plus en lecture seule
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('DOM1', 'level-one-html.html#ID-70901257', 'HTMLOptionElement')}}
      </td>
      <td>{{Spec2('DOM1')}}</td>
      <td>La définition initiale .</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.HTMLOptionElement")}}

## Voir aussi

- L'élément HTML qui implémente cette interface : {{ HTMLElement("option") }}.
