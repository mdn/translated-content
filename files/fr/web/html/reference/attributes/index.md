---
title: Référence des attributs HTML
short-title: Attributs
slug: Web/HTML/Reference/Attributes
original_slug: Web/HTML/Attributes
l10n:
  sourceCommit: baa785abec7bc852b909f1c827510731ada5ff4f
---

Les éléments HTML ont des **attributs**&nbsp;; ce sont des valeurs supplémentaires qui configurent les éléments ou ajustent leur comportement de différentes manières pour répondre aux critères souhaités par les utilisateur·ice·s.

## Liste des attributs

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Nom de l'attribut</th>
      <th scope="col">Éléments concernés</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/accept"><code>accept</code></a>
      </td>
      <td>{{HTMLElement("form")}}, {{HTMLElement("input")}}</td>
      <td>
        La liste des types acceptés par le serveur. Généralement, il s'agit de
        types de fichier.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/form#accept-charset"
          ><code>accept-charset</code></a
        >
      </td>
      <td>{{HTMLElement("form")}}</td>
      <td>La liste des jeux de caractères pris en charge.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/accesskey"
          ><code>accesskey</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>
        Cet attribut permet de définir un raccourci clavier pour activer un
        élément ou lui donner la sélection.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/form#action"><code>action</code></a>
      </td>
      <td>{{HTMLElement("form")}}</td>
      <td>
        L'URI d'un programme qui traite les informations envoyées par le
        formulaire.
      </td>
    </tr>
    <tr>
      <td>
        <code>align</code> {{Deprecated_Inline}}
      </td>
      <td>
        {{HTMLElement("caption")}}, {{HTMLElement("col")}},
        {{HTMLElement("colgroup")}},
        {{HTMLElement("hr")}}, {{HTMLElement("iframe")}},
        {{HTMLElement("img")}}, {{HTMLElement("table")}},
        {{HTMLElement("tbody")}}, {{HTMLElement("td")}},
        {{HTMLElement("tfoot")}}, {{HTMLElement("th")}},
        {{HTMLElement("thead")}}, {{HTMLElement("tr")}}
      </td>
      <td>Cet attribut définit l'alignement horizontal de l'élément.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/iframe#allow"
          ><code>allow</code></a
        >
      </td>
      <td>{{HTMLElement("iframe")}}</td>
      <td>
        Cet attribut définit les règles des fonctionnalités pour cette
        <em>iframe</em>.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Reference/Elements/input/color#alpha">alpha</a></code>
      </td>
      <td>{{HTMLElement("input")}}</td>
      <td>Permet à l'utilisateur·ice de sélectionner l'opacité d'une couleur sur un champ <code>type="color"</code>.</td>
    </tr>
    <tr>
      <td>
        <code>alt</code>
      </td>
      <td>
        {{HTMLElement("area")}},
        {{HTMLElement("img")}}, {{HTMLElement("input")}}
      </td>
      <td>
        Un texte alternatif à afficher lorsque l'élément ne peut pas être
        affiché.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Reference/Elements/link#as">as</a></code>
      </td>
      <td>{{HTMLElement("link")}}</td>
      <td>Spécifie le type de contenu chargé par le lien.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/script#async"
          ><code>async</code></a
        >
      </td>
      <td>{{HTMLElement("script")}}</td>
      <td>
        Cet attribut indique que le script devrait être exécuté de façon
        asynchrone.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/autocapitalize"
          ><code>autocapitalize</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>
        Cet attribut contrôle la façon dont un champ texte est saisi en
        majuscules de façon automatique.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/autocomplete"
          ><code>autocomplete</code></a
        >
      </td>
      <td>
        {{HTMLElement("form")}}, {{HTMLElement("input")}},
        {{HTMLElement("select")}},
        {{HTMLElement("textarea")}}
      </td>
      <td>
        Cet attribut indique que ces contrôles ou que ce formulaire peuvent être
        remplis automatiquement par le navigateur.
      </td>
    </tr>
    <tr>
      <td><code>autoplay</code></td>
      <td>{{HTMLElement("audio")}}, {{HTMLElement("video")}}</td>
      <td>
        Cet attribut indique que l'élément audio ou vidéo doit être lancé dès
        que possible.
      </td>
    </tr>
    <tr>
      <td><code>background</code></td>
      <td>
        {{HTMLElement("body")}}, {{HTMLElement("table")}},
        {{HTMLElement("td")}}, {{HTMLElement("th")}}
      </td>
      <td>
        <p>Définit l'URL vers un fichier qui est une image.</p>
        <div class="note notecard">
          <p>
            <strong>Note :</strong> Bien que les navigateurs et les clients
            <em>e-mails</em> prennent en charge cet attribut, cet attribut est
            obsolète. On utilisera plutôt la propriété
            {{CSSxRef("background-image")}}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>bgcolor</code></td>
      <td>
        {{HTMLElement("body")}}, {{HTMLElement("col")}},
        {{HTMLElement("colgroup")}},
        {{HTMLElement("marquee")}},
        {{HTMLElement("table")}},
        {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}}, {{HTMLElement("td")}},
        {{HTMLElement("th")}}, {{HTMLElement("tr")}}
      </td>
      <td>
        <p>Cet attribut indique la couleur d'arrière-plan pour l'élément.</p>
        <div class="note notecard">
          <p>
            <strong>Note :</strong> Cet attribut est un attribut historique.
            Veuillez utiliser la propriété CSS standard
            {{CSSxRef("background-color")}}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>border</code></td>
      <td>
        {{HTMLElement("img")}}, {{HTMLElement("object")}},
        {{HTMLElement("table")}}
      </td>
      <td>
        <p>Cet attribut indique la largeur de la bordure.</p>
        <div class="note notecard">
          <p>
            <strong>Note :</strong> Cet attribut est un attribut historique.
            Veuillez utiliser la propriété CSS standard
            {{CSSxRef("border")}}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Reference/Attributes/capture">capture</a></code>
      </td>
      <td>{{HTMLElement("input")}}</td>
      <td>
        À partir de la spécification <i lang="en">HTML Media Capture</i>, spécifie qu'un nouveau fichier peut être capturé.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/meta#charset"><code>charset</code></a>
      </td>
      <td>{{HTMLElement("meta")}}</td>
      <td>
        Cet attribut déclare l'encodage de caractères utilisé pour la page ou le
        script.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#checked"><code>checked</code></a>
      </td>
      <td>{{HTMLElement("input")}}</td>
      <td>
        Cet attribut indique si l'élément doit être vérifié au chargement de la
        page.
      </td>
    </tr>
    <tr>
      <td><code>cite</code></td>
      <td>
        {{HTMLElement("blockquote")}},
        {{HTMLElement("del")}}, {{HTMLElement("ins")}},
        {{HTMLElement("q")}}
      </td>
      <td>
        Cet attribut est une URI qui pointe vers la source de la citation ou de
        la modification.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/class"
          ><code>class</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>
        Cet attribut permet de définir la ou les classes auxquelles appartient
        un élément afin de le manipuler en script ou de le mettre en forme avec
        CSS.
      </td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>{{HTMLElement("font")}}, {{HTMLElement("hr")}}</td>
      <td>
        <p>
          Cet attribut définit la couleur du texte grâce à un nom de couleur ou
          grâce à un code hexadécimal dans le format #RRGGBB.
        </p>
        <div class="note notecard">
          <p>
            <strong>Note :</strong> Cet attribut est un attribut historique.
            Veuillez utiliser la propriété CSS standard
            {{CSSxRef("color")}}.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Reference/Elements/input/color#colorspace">colorspace</a></code>
      </td>
      <td>{{HTMLElement("input")}}</td>
      <td>Définit l'{{Glossary("Color_space", "espace colorimétrique")}} utilisé par un champ <code>type="color"</code>.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/textarea#cols"
          ><code>cols</code></a
        >
      </td>
      <td>{{HTMLElement("textarea")}}</td>
      <td>
        Cet attribut définit le nombre de colonnes pour le texte contenu dans
        un<code> textarea</code>.
      </td>
    </tr>
    <tr>
      <td><code>colspan</code></td>
      <td>{{HTMLElement("td")}}, {{HTMLElement("th")}}</td>
      <td>
        Cet attribut définit le nombre de colonnes sur lequel une cellule doit
        s'étendre.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/content"
          ><code>content</code></a
        >
      </td>
      <td>{{HTMLElement("meta")}}</td>
      <td>
        Une valeur associée avec <code>http-equiv</code> ou <code>name</code>
        selon le contexte.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable"
          ><code>contenteditable</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>Cet attribut indique si le contenu de l'élément peut être édité.</td>
    </tr>
    <tr>
      <td><code>controls</code></td>
      <td>{{HTMLElement("audio")}}, {{HTMLElement("video")}}</td>
      <td>
        Cet attribut indique si le navigateur doit afficher les contrôles de
        lecture du média pour l'utilisateur·ice.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/area#coords"
          ><code>coords</code></a
        >
      </td>
      <td>{{HTMLElement("area")}}</td>
      <td>
        Un ensemble de valeurs qui définit les coordonnées de la zone d'intérêt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/crossorigin"
          ><code>crossorigin</code></a
        >
      </td>
      <td>
        {{HTMLElement("audio")}}, {{HTMLElement("img")}},
        {{HTMLElement("link")}}, {{HTMLElement("script")}},
        {{HTMLElement("video")}}
      </td>
      <td>Cet attribut gère les requêtes de différentes origines.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/API/HTMLIFrameElement/csp"><code>csp</code></a>
        {{Experimental_Inline}}
      </td>
      <td>{{HTMLElement("iframe")}}</td>
      <td>
        Cet attribut définit la politique de sécurité de contenu que le document
        intégré doit respecter.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/object#data"
          ><code>data</code></a
        >
      </td>
      <td>{{HTMLElement("object")}}</td>
      <td>Cet attribut définit l'URL de la ressource.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/data-*"
          ><code>data-*</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>
        Grâce aux attributs de donnée, on peut associer des attributs
        personnalisés afin de transporter des informations spécifiques.
      </td>
    </tr>
    <tr>
      <td><code>datetime</code></td>
      <td>
        {{HTMLElement("del")}}, {{HTMLElement("ins")}},
        {{HTMLElement("time")}}
      </td>
      <td>Cet attribut indique la date et l'heure associées à l'élément.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/img#decoding"
          ><code>decoding</code></a
        >
      </td>
      <td>{{HTMLElement("img")}}</td>
      <td>Cet attribut indique la méthode préférée pour décoder l'image.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/track#default"
          ><code>default</code></a
        >
      </td>
      <td>{{HTMLElement("track")}}</td>
      <td>
        Cet attribut indique que la piste devrait être activée sauf si les
        préférences de l'utilisateur·ice indiquent un autre choix.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/script#defer"
          ><code>defer</code></a
        >
      </td>
      <td>{{HTMLElement("script")}}</td>
      <td>
        Cet attribut indique que le script doit être exécuté une fois que la
        page a été analysée.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/dir"><code>dir</code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>
        Cet attribut définit la direction du texte (gauche à droite ou droite à
        gauche).
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/dirname"><code>dirname</code></a>
      </td>
      <td>{{HTMLElement("input")}}, {{HTMLElement("textarea")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/disabled"
          ><code>disabled</code></a
        >
      </td>
      <td>
        {{HTMLElement("button")}}, {{HTMLElement("fieldset")}},
        {{HTMLElement("input")}}, {{HTMLElement("optgroup")}},
        {{HTMLElement("option")}}, {{HTMLElement("select")}},
        {{HTMLElement("textarea")}}
      </td>
      <td>
        Cet attribut indique si l'utilisateur·ice peut interagir avec l'élément.
      </td>
    </tr>
    <tr>
      <td><code>download</code></td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>
        Cet attribut indique si l'hyperlien est utilisé afin de télécharger une
        ressource.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/draggable"
          ><code>draggable</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>Cet attribut indique si l'élément peut être déplacé/glissé.</td>
    </tr>
    <tr></tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/form#enctype"
          ><code>enctype</code></a
        >
      </td>
      <td>{{HTMLElement("form")}}</td>
      <td>
        Cet attribut définit le type de contenu des données de formulaire
        envoyées lorsque la méthode utilisée est <code>POST</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"
          ><code>enterkeyhint</code></a
        >
      </td>
      <td>
        {{HTMLElement("textarea")}},
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable"><code>contenteditable</code></a>
      </td>
      <td>
        L'attribut <a href="https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute"><code>enterkeyhint</code
        > <sup>(angl.)</sup></a> indique le libellé ou l'icône à afficher sur la
        touche entrée des claviers virtuels. Cet attribut peut être utilisé sur
        les contrôles de formulaires ou sur les éléments qui sont éditables
        (par exemple avec l'attribut <code>contenteditable</code>).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Reference/Attributes/elementtiming">elementtiming</a></code>
      </td>
      <td>
        {{HTMLElement("img")}},
        les éléments {{SVGElement("image")}} à l'intérieur d'un {{SVGElement("svg")}},
        les images d'affiche de {{HTMLElement("video")}} éléments,
        les éléments qui ont un {{CSSxRef("background-image")}},
        et les éléments contenant des nœuds de texte, tels qu'un {{HTMLElement("p")}}
      </td>
      <td>
        Indique qu'un élément est marqué pour le suivi par des objets {{DOMxRef("PerformanceObserver")}} utilisant le type <code>"element"</code>. Pour plus de détails, voir l'interface {{DOMxRef("PerformanceElementTiming")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/for"><code>for</code></a>
      </td>
      <td>{{HTMLElement("label")}}, {{HTMLElement("output")}}</td>
      <td>
        Cet attribut décrit l'élément auquel se rapporte l'élément courant.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/form"><code>form</code></a>
      </td>
      <td>
        {{HTMLElement("button")}}, {{HTMLElement("fieldset")}},
        {{HTMLElement("input")}}, {{HTMLElement("object")}},
        {{HTMLElement("output")}}, {{HTMLElement("select")}},
        {{HTMLElement("textarea")}}
      </td>
      <td>Cet attribut indique le formulaire auquel l'élément se rapporte.</td>
    </tr>
    <tr>
      <td><code>formaction</code></td>
      <td>{{HTMLElement("input")}}, {{HTMLElement("button")}}</td>
      <td>
        Indique l'action de l'élément, en remplaçant l'action définie dans
        un élément HTML {{HTMLElement("form")}}.
      </td>
    </tr>
    <tr>
      <td><code>formenctype</code></td>
      <td>{{HTMLElement("input")}}, {{HTMLElement("button")}}</td>
      <td>
        Si le bouton ou le champ est un {{Glossary("submit button", "bouton d'envoi")}} (par exemple <code>type="submit"</code>),
        cet attribut définit le type d'encodage à utiliser lors de l'envoi du formulaire. Si
        cet attribut est spécifié, il remplace l'attribut
        <code>enctype</code> du propriétaire du formulaire
        <a href="/fr/docs/Web/HTML/Reference/Elements/form">formulaire</a>.
      </td>
    </tr>
    <tr>
      <td><code>formmethod</code></td>
      <td>{{HTMLElement("input")}}, {{HTMLElement("button")}}</td>
      <td>
        Si le bouton ou le champ est un {{Glossary("submit button", "bouton d'envoi")}} (par exemple <code>type="submit"</code>),
        cet attribut définit la méthode d'envoi à utiliser lors de la soumission du formulaire
        (<code>GET</code>, <code>POST</code>, etc.). Si cet attribut est
        spécifié, il remplace l'attribut <code>method</code> du propriétaire du
        <a href="/fr/docs/Web/HTML/Reference/Elements/form">formulaire</a>.
      </td>
    </tr>
    <tr>
      <td><code>formnovalidate</code></td>
      <td>{{HTMLElement("input")}}, {{HTMLElement("button")}}</td>
      <td>
        Si le bouton ou le champ est un {{Glossary("submit button", "bouton d'envoi")}} (par exemple <code>type="submit"</code>),
        cet attribut booléen indique que le formulaire ne doit pas être validé
        lors de son envoi. Si cet attribut est spécifié, il remplace l'attribut
        <code>novalidate</code> du propriétaire du
        <a href="/fr/docs/Web/HTML/Reference/Elements/form">formulaire</a>.
      </td>
    </tr>
    <tr>
      <td><code>formtarget</code></td>
      <td>{{HTMLElement("input")}}, {{HTMLElement("button")}}</td>
      <td>
        Si le bouton ou le champ est un {{Glossary("submit button", "bouton d'envoi")}} (par exemple <code>type="submit"</code>),
        cet attribut définit le contexte de navigation (par exemple&nbsp;: onglet, fenêtre,
        ou cadre intégré) dans lequel afficher la réponse reçue après
        l'envoi du formulaire. Si cet attribut est spécifié, il remplace l'attribut
        <code>target</code> du propriétaire du
        <a href="/fr/docs/Web/HTML/Reference/Elements/form">formulaire</a>.
      </td>
    </tr>
    <tr>
      <td><code>headers</code></td>
      <td>{{HTMLElement("td")}}, {{HTMLElement("th")}}</td>
      <td>
        Les identifiants des éléments <code>&lt;th&gt;</code> qui s'appliquent à
        cet élément.
      </td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>
        {{HTMLElement("canvas")}}, {{HTMLElement("embed")}},
        {{HTMLElement("iframe")}}, {{HTMLElement("img")}},
        {{HTMLElement("input")}}, {{HTMLElement("object")}},
        {{HTMLElement("video")}}
      </td>
      <td>
        <p>
          Pour ces éléments, cet attribut définit la hauteur occupée par
          l'élément. Pour les autres éléments, on utilisera la propriété CSS
          <a href="/fr/docs/Web/CSS/height"><code>height</code></a>.
        </p>
        <div class="note notecard">
          <p>
            <strong>Note :</strong> Pour certains éléments comme
            {{HTMLElement("div")}}, cet attribut est un reliquat et ne devrait
            plus être utilisé. C'est la propriété CSS {{CSSxRef("height")}} qui
            est la méthode standard pour définir la hauteur d'un élément.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/hidden"
          ><code>hidden</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>
        Cet attribut empêche le rendu d'un élément sur une page tout en
        conservant les éléments fils actifs.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/meter#high"
          ><code>high</code></a
        >
      </td>
      <td>{{HTMLElement("meter")}}</td>
      <td>Cet attribut indique la borne inférieure de l'intervalle haut.</td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("base")}}, {{HTMLElement("link")}}
      </td>
      <td>L'URL de la ressource liée.</td>
    </tr>
    <tr>
      <td><code>hreflang</code></td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("link")}}</td>
      <td>Cet attribut indique la langue utilisée pour la ressource liée.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/meta#http-equiv"
          ><code>http-equiv</code></a
        >
      </td>
      <td>{{HTMLElement("meta")}}</td>
      <td>
        Définit une directive Pragma.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/id"><code>id</code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>
        Cet attribut permet d'identifier un élément d'un document de façon
        unique. Il est généralement utilisé pour manipuler l'élément avec des
        scripts ou pour le mettre en forme avec CSS.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/Security/Subresource_Integrity"
          ><code>integrity</code></a
        >
      </td>
      <td>{{HTMLElement("link")}}, {{HTMLElement("script")}}</td>
      <td>
        <p>
          Définit une valeur
          <a href="/fr/docs/Web/Security/Subresource_Integrity">Subresource Integrity</a>
          qui permet aux navigateurs de vérifier ce qu'ils récupèrent.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/inputmode"
          ><code>inputmode</code></a
        >
      </td>
      <td>
        {{HTMLElement("textarea")}},
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable"><code>contenteditable</code></a>
      </td>
      <td>
        Cet attribut fournit une indication sur le type de donnée qui pourrait
        être saisi par l'utilisateur·ice lors de l'édition du formulaire ou de
        l'élément. Cet attribut peut être utilisé sur les contrôles de
        formulaires ou sur les éléments qui sont éditables (par exemple avec
        l'attribut <code>contenteditable</code>).
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/img#ismap"
          ><code>ismap</code></a
        >
      </td>
      <td>{{HTMLElement("img")}}</td>
      <td>
        Cet attribut indique que l'image contribue à une mosaïque d'images
        interactive côté serveur.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/itemprop"
          ><code>itemprop</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/track#kind"
          ><code>kind</code></a
        >
      </td>
      <td>{{HTMLElement("track")}}</td>
      <td>Cet attribut définit le type de piste textuelle.</td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>
        {{HTMLElement("optgroup")}}, {{HTMLElement("option")}},
        {{HTMLElement("track")}}
      </td>
      <td>
        Cet attribut définit un titre, lisible par un utilisateur·ice, pour
        l'élément.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/lang"><code>lang</code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>Cet attribut définit la langue utilisée dans l'élément.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/script#language"
          ><code>language</code></a
        > {{Deprecated_Inline}}
      </td>
      <td>{{HTMLElement("script")}}</td>
      <td>Cet attribut définit le langage de script utilisé dans l'élément.</td>
    </tr>
    <tr>
      <td><code>loading</code></td>
      <td>
        {{HTMLElement("img")}}, {{HTMLElement("iframe")}}
      </td>
      <td>
        Indique si l'élément doit être chargé de façon différée
        (<code>loading="lazy"</code>) ou chargé immédiatement
        (<code>loading="eager"</code>).
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#list"
          ><code>list</code></a
        >
      </td>
      <td>{{HTMLElement("input")}}</td>
      <td>
        Cet attribut constitue une liste d'options prédéfinie qui est suggérée à
        l'utilisateur·ice.
      </td>
    </tr>
    <tr>
      <td><code>loop</code></td>
      <td>
        {{HTMLElement("audio")}}, {{HTMLElement("marquee")}},
        {{HTMLElement("video")}}
      </td>
      <td>
        Cet attribut indique si le média courant doit recommencer au début une
        fois que sa lecture est terminée.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/meter#low"><code>low</code></a>
      </td>
      <td>{{HTMLElement("meter")}}</td>
      <td>Cet attribut indique la borne supérieure de l'intervalle bas.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/max"><code>max</code></a>
      </td>
      <td>
        {{HTMLElement("input")}}, {{HTMLElement("meter")}},
        {{HTMLElement("progress")}}
      </td>
      <td>Cet attribut indique la valeur maximale autorisée.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/maxlength"
          ><code>maxlength</code></a
        >
      </td>
      <td>{{HTMLElement("input")}}, {{HTMLElement("textarea")}}</td>
      <td>
        Cet attribut définit le nombre maximal de caractères autorisé dans
        l'élément.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/minlength"
          ><code>minlength</code></a
        >
      </td>
      <td>{{HTMLElement("input")}}, {{HTMLElement("textarea")}}</td>
      <td>
        Cet attribut définit le nombre minimal de caractères qui doivent être
        saisis dans l'élément.
      </td>
    </tr>
    <tr>
      <td><code>media</code></td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}, {{HTMLElement("source")}},
        {{HTMLElement("style")}}
      </td>
      <td>
        Cet attribut est indication à propos du type de média pour la ressource
        liée.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/form#method"
          ><code>method</code></a
        >
      </td>
      <td>{{HTMLElement("form")}}</td>
      <td>
        Cet attribut définit la méthode <a href="/fr/docs/Web/HTTP">HTTP</a> à
        utiliser pour l'envoi des données du formulaire (<code>GET</code> par
        défaut ou <code>POST</code>)
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/min"><code>min</code></a>
      </td>
      <td>{{HTMLElement("input")}}, {{HTMLElement("meter")}}</td>
      <td>Cet attribut indique la valeur minimale autorisée.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/multiple"
          ><code>multiple</code></a
        >
      </td>
      <td>{{HTMLElement("input")}}, {{HTMLElement("select")}}</td>
      <td>
        Cet attribut indique si plusieurs valeurs peuvent être saisies pour des
        entrées de type <code>email</code> ou <code>file</code>.
      </td>
    </tr>
    <tr>
      <td><code>muted</code></td>
      <td>{{HTMLElement("audio")}}, {{HTMLElement("video")}}</td>
      <td>
        Cet attribut indique si le son de la vidéo doit être coupé lorsque la
        page est chargée initialement.
      </td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>
        {{HTMLElement("button")}}, {{HTMLElement("form")}},
        {{HTMLElement("fieldset")}}, {{HTMLElement("iframe")}},
        {{HTMLElement("input")}}, {{HTMLElement("object")}},
        {{HTMLElement("output")}}, {{HTMLElement("select")}},
        {{HTMLElement("textarea")}}, {{HTMLElement("map")}},
        {{HTMLElement("meta")}}, {{HTMLElement("param")}}
      </td>
      <td>
        Le nom de l'élément qui peut être utilisé par le serveur pour identifier
        le champ d'un formulaire.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/form#novalidate"
          ><code>novalidate</code></a
        >
      </td>
      <td>{{HTMLElement("form")}}</td>
      <td>
        Cet attribut indique que les données du formulaire ne doivent pas être
        validées lors de l'envoi.
      </td>
    </tr>
    <tr>
      <td><code>open</code></td>
      <td>{{HTMLElement("details")}}, {{HTMLElement("dialog")}}</td>
      <td>
        Cet attribut indique si les détails seront affichés lors du chargement
        de la page.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/meter#optimum"
          ><code>optimum</code></a
        >
      </td>
      <td>{{HTMLElement("meter")}}</td>
      <td>Cet attribut indique la valeur numérique optimale.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/pattern"><code>pattern</code></a>
      </td>
      <td>{{HTMLElement("input")}}</td>
      <td>
        Cet attribut définit une expression rationnelle contre laquelle valider
        la valeur de l'élément.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/a#ping"><code>ping</code></a>
      </td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td>
        L'attribut <code>ping</code> définit une liste d'URL séparées par des
        espaces à notifier si un·e utilisateur·ice suit le lien hypertexte.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/placeholder"
          ><code>placeholder</code></a
        >
      </td>
      <td>{{HTMLElement("input")}}, {{HTMLElement("textarea")}}</td>
      <td>
        Cet attribut fournit une indication à l'utilisateur·ice sur ce qu'il peut
        saisir dans le champ.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Reference/Elements/video#playsinline">playsinline</a></code>
      </td>
      <td>{{HTMLElement("video")}}</td>
      <td>
        Un attribut booléen indiquant que la vidéo doit être lue «&nbsp;en ligne&nbsp;»&nbsp;;
        c'est-à-dire dans la zone de lecture de l'élément. Notez que l'absence
        de cet attribut n'implique pas que la vidéo sera toujours lue en plein écran.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/video#poster"
          ><code>poster</code></a
        >
      </td>
      <td>{{HTMLElement("video")}}</td>
      <td>
        Cet attribut est une URL qui indique l'image à afficher tant que
        l'utilisateur·ice n'a pas lancé la vidéo ou déplacé le curseur.
      </td>
    </tr>
    <tr>
      <td><code>preload</code></td>
      <td>{{HTMLElement("audio")}}, {{HTMLElement("video")}}</td>
      <td>
        Cet attribut indique si toute ou partie, voire aucune partie de la
        ressource doit être téléchargée en avance.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Reference/Attributes/readonly">readonly</a></code>
      </td>
      <td>{{HTMLElement("input")}}, {{HTMLElement("textarea")}}</td>
      <td>Cet attribut indique si l'élément peut être édité.</td>
    </tr>
    <tr>
      <td><code>referrerpolicy</code></td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("iframe")}}, {{HTMLElement("img")}},
        {{HTMLElement("link")}}, {{HTMLElement("script")}}
      </td>
      <td>
        Définit le référent (<em>referrer</em>) envoyé lors de la récupération
        de la ressource.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/rel"><code>rel</code></a>
      </td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("link")}}
      </td>
      <td>
        Cet attribut définit la relation entre l'objet cible et l'objet du lien.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/required"
          ><code>required</code></a
        >
      </td>
      <td>
        {{HTMLElement("input")}}, {{HTMLElement("select")}},
        {{HTMLElement("textarea")}}
      </td>
      <td>
        Cet attribut indique si l'élément doit obligatoirement être renseigné
        dans le formulaire.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/ol#reversed"
          ><code>reversed</code></a
        >
      </td>
      <td>{{HTMLElement("ol")}}</td>
      <td>
        Cet attribut indique si la liste doit être affichée dans un ordre
        décroissant plutôt que dans un ordre croissant.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles">role</a></code>
      </td>
      <td><a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a></td>
      <td>
        Définit un rôle explicite pour un élément destiné à être utilisé par les
        technologies d'assistance.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/textarea#rows"
          ><code>rows</code></a
        >
      </td>
      <td>{{HTMLElement("textarea")}}</td>
      <td>Cet attribut définit le nombre de lignes pour la zone de texte.</td>
    </tr>
    <tr>
      <td><code>rowspan</code></td>
      <td>{{HTMLElement("td")}}, {{HTMLElement("th")}}</td>
      <td>
        Cet attribut définit le nombre de lignes sur lesquelles une cellule doit
        s'étendre.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/iframe#sandbox"
          ><code>sandbox</code></a
        >
      </td>
      <td>{{HTMLElement("iframe")}}</td>
      <td>
        Empêche un élément chargé dans une <em>iframe</em> d'utiliser certaines
        fonctionnalités (envoyer des formulaires ou ouvrir de nouvelles fenêtres
        par exemples).
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/th#scope"><code>scope</code></a>
      </td>
      <td>{{HTMLElement("th")}}</td>
      <td>Définit les cellules sur lesquelles porte la cellule d'en-tête.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/option#selected"
          ><code>selected</code></a
        >
      </td>
      <td>{{HTMLElement("option")}}</td>
      <td>
        Cet attribut définit la valeur qui sera sélectionnée au chargement de la
        page.
      </td>
    </tr>
    <tr>
      <td><code>shape</code></td>
      <td>{{HTMLElement("a")}}, {{HTMLElement("area")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/size"><code>size</code></a>
      </td>
      <td>{{HTMLElement("input")}}, {{HTMLElement("select")}}</td>
      <td>
        Cet attribut définit la largeur de l'élément en pixels, si l'attribut
        <code>type</code> de l'élément vaut <code>text</code> ou
        <code>password</code>, cela correspond au nombre de caractères du champ.
      </td>
    </tr>
    <tr>
      <td><code>sizes</code></td>
      <td>
        {{HTMLElement("link")}}, {{HTMLElement("img")}},
        {{HTMLElement("source")}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/slot"><code>slot</code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>
        Cet attribut affecte un créneau pour un élément dans le
        <em>shadow DOM</em>.
      </td>
    </tr>
    <tr>
      <td><code>span</code></td>
      <td>{{HTMLElement("col")}}, {{HTMLElement("colgroup")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/spellcheck"
          ><code>spellcheck</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>
        Cet attribut indique si la vérification orthographique est activée pour
        l'élément courant.
      </td>
    </tr>
    <tr>
      <td><code>src</code></td>
      <td>
        {{HTMLElement("audio")}}, {{HTMLElement("embed")}},
        {{HTMLElement("iframe")}}, {{HTMLElement("img")}},
        {{HTMLElement("input")}}, {{HTMLElement("script")}},
        {{HTMLElement("source")}}, {{HTMLElement("track")}},
        {{HTMLElement("video")}}
      </td>
      <td>Cet attribut indique l'URL du contenu embarqué.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/iframe#srcdoc"
          ><code>srcdoc</code></a
        >
      </td>
      <td>{{HTMLElement("iframe")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/track#srclang"
          ><code>srclang</code></a
        >
      </td>
      <td>{{HTMLElement("track")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>srcset</code></td>
      <td>{{HTMLElement("img")}}, {{HTMLElement("source")}}</td>
      <td>Une ou plusieurs images candidates adaptatives.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/ol#start"><code>start</code></a>
      </td>
      <td>{{HTMLElement("ol")}}</td>
      <td>
        Cet attribut définit le premier nombre de la liste si celui-ci est
        différent de 1.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Attributes/step"><code>step</code></a>
      </td>
      <td>{{HTMLElement("input")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/style"
          ><code>style</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>
        Cet attribut définit des styles CSS qui auront la priorité sur ceux
        définis précédemment. Il ne devrait être utilisé qu'à des fins de tests,
        car il est conseillé d'utiliser un/des fichier(s) à part pour gérer la
        mise en forme.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/table#summary"
          ><code>summary</code></a
        > {{Deprecated_Inline}}
      </td>
      <td>{{HTMLElement("table")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/tabindex"
          ><code>tabindex</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>
        Cet attribut permet de modifier l'ordre dans la navigation à la
        tabulation.
      </td>
    </tr>
    <tr>
      <td><code>target</code></td>
      <td>
        {{HTMLElement("a")}}, {{HTMLElement("area")}},
        {{HTMLElement("base")}}, {{HTMLElement("form")}}
      </td>
      <td>
        Spécifie où ouvrir le document lié (dans le cas d'un élément
        <code>&lt;a&gt;</code>) ou où afficher la réponse reçue
        (dans le cas d'un élément <code>&lt;form&gt;</code>)
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/title"
          ><code>title</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>
        Cet attribut définit un texte expliquant le contenu de l'élément et qui
        est généralement affiché sous la forme d'une bulle d'information au
        survol de l'élément.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes/translate"
          ><code>translate</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes">Attribut universel</a>
      </td>
      <td>
        Cet attribut indique si le contenu textuel de l'élément doit être
        traduit ou non.
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        {{HTMLElement("button")}}, {{HTMLElement("input")}},
        {{HTMLElement("embed")}}, {{HTMLElement("object")}},
        {{HTMLElement("ol")}}, {{HTMLElement("script")}},
        {{HTMLElement("source")}}, {{HTMLElement("style")}},
        {{HTMLElement("menu")}}, {{HTMLElement("link")}}
      </td>
      <td>Cet attribut définit le type de l'élément.</td>
    </tr>
    <tr>
      <td><code>usemap</code></td>
      <td>
        {{HTMLElement("img")}}, {{HTMLElement("input")}},
        {{HTMLElement("object")}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td>
        {{HTMLElement("button")}}, {{HTMLElement("data")}},
        {{HTMLElement("input")}}, {{HTMLElement("li")}},
        {{HTMLElement("meter")}}, {{HTMLElement("option")}},
        {{HTMLElement("progress")}}, {{HTMLElement("param")}}
      </td>
      <td>
        Cet attribut définit la valeur par défaut qui sera affichée dans
        l'élément au chargement de la page.
      </td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>
        {{HTMLElement("canvas")}}, {{HTMLElement("embed")}},
        {{HTMLElement("iframe")}}, {{HTMLElement("img")}},
        {{HTMLElement("input")}}, {{HTMLElement("object")}},
        {{HTMLElement("video")}}
      </td>
      <td>
        Pour ces éléments, cet attribut définit la largeur occupée sur l'écran.
        <div class="note notecard">
          <p>
            <strong>Note :</strong> Pour tous les autres éléments, comme
            {{HTMLElement("div")}}, il faut utiliser la propriété CSS standard
            {{CSSxRef("width")}} afin de
            définir la largeur.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/textarea#wrap"
          ><code>wrap</code></a
        >
      </td>
      <td>{{HTMLElement("textarea")}}</td>
      <td>
        Cet attribut indique l'utilisation du retour automatique à la ligne pour
        le texte de l'élément.
      </td>
    </tr>
  </tbody>
</table>

## Attribut de contenu ou attribut IDL ?

En HTML, la plupart des attributs ont deux aspects&nbsp;: l'**attribut de contenu** et l'**attribut IDL** (pour _Interface Definition Language_ ou langage de définition des interfaces).

L'attribut de contenu est l'attribut qu'on définit via le contenu (le code HTML) et qu'on obtient et/ou définit via les méthodes {{DOMxRef("element.setAttribute()")}} et {{DOMxRef("element.getAttribute()")}}. L'attribut de contenu sera toujours une chaîne de caractères, y compris lorsque la valeur attendue est un entier. Ainsi, pour indiquer une `maxlength` d'un élément {{HTMLElement("input")}} à 42, on utilisera `setAttribute("maxlength", "42")` sur cet élément.

L'attribut IDL est également connu sous la forme d'une propriété JavaScript. Ce sont les attributs qu'on peut obtenir ou modifier via JavaScript sous la forme `élément.toto`. L'attribut IDL utilisera toujours la valeur de l'attribut de contenu sous-jacent, éventuellement en la modifiant pour renvoyer une valeur ou pour la modifier. Autrement dit, les attributs IDL, reflètent les attributs de contenu.

La plupart du temps, les attributs IDL renverront leurs valeurs, telles qu'elles sont utilisées. Par exemple, le type (l'attribut `type`) par défaut des éléments {{HTMLElement("input")}} vaut `"text"`, et si on définit `input.type="tototruc"`, l'élément `<input>` se comportera comme un élément de type `text` (en termes d'apparence et de comportement) mais le contenu de l'attribut `type` sera "tototruc". Cependant, l'attribut de type IDL renverra la chaîne `"text"`.

Les attributs IDL ne sont pas toujours des chaînes de caractères. `input.maxlength` est un nombre par exemple (un entier long signé pour être précis). Lorsqu'on manipule des attributs IDL on utilisera toujours le type défini pour l'interface. Ainsi, `input.maxlength` renverra toujours un nombre et si on souhaite le définir, il faudra le faire avec un nombre, si on passe une valeur d'un autre type, cette valeur sera convertie grâce aux mécanismes de conversion habituels de JavaScript.

Les attributs IDL peuvent [refléter d'autres types <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/urls-and-fetching.html) tels que les unsigned long, les URL, les booléens, etc. Malheureusement, il n'existe pas de règles claires et la façon dont les attributs IDL se comportent en conjonction avec leurs attributs de contenu correspondants, cela dépend de l'attribut. La plupart du temps, il suivra [les règles énoncées dans la spécification <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/urls-and-fetching.html), mais parfois, il ne le fera pas. Les spécifications HTML essaient de rendre cela aussi convivial que possible pour les développeurs, mais pour diverses raisons (principalement historiques), certains attributs se comportent bizarrement (`select.size`, par exemple) et vous devriez lire les spécifications pour comprendre comment ils se comportent exactement.

## Attributs booléens

Certains attributs de contenu (ex. `required`, `readonly`, `disabled`) sont des [attributs booléens <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes). Si un attribut booléen est présent, sa valeur correspondra à _vrai_ (_true_), s'il est absent, sa valeur correspondra à _faux_ (_false_).

HTML5 définit des restrictions sur les valeurs autorisées des attributs booléens&nbsp;: Si l'attribut est présent, sa valeur doit être soit la chaîne vide (équivalente, l'attribut peut avoir une valeur non attribuée), soit une valeur qui est une correspondance ASCII insensible à la casse pour le nom canonique de l'attribut, sans espace avant ou après. Les exemples suivants sont des façons valides de baliser un attribut booléen&nbsp;:

```html-nolint
<div itemscope>Ce fragment est du HTML valide mais du XML invalide.</div>
<div itemscope=itemscope>
  Ce fragment est du HTML valide mais du XML invalide.
</div>
<div itemscope="">Ce fragment est du HTML valide et du XML valide.</div>
<div itemscope="itemscope">
  Ce fragment est du HTML et du XML valide mais est plus verbeux.
</div>
```

Pour être tout à fait explicite, les valeurs `"true"` et `"false"` ne sont pas autorisées pour les attributs booléens. Pour représenter une valeur fausse, il faudra ne pas écrire l'attribut du tout. Cette règle peut entraîner quelques incompréhensions&nbsp;: si on écrit `checked="false"` l'attribut `checked` sera présent et donc considéré comme _vrai_ (_true_).

## Attributs du gestionnaire d'événements

> [!WARNING]
> L'utilisation des attributs de contenu du gestionnaire d'événements est déconseillée. Le mélange de HTML et de JavaScript produit souvent du code impossible à maintenir, et l'exécution des attributs du gestionnaire d'événements peut également être bloquée par les politiques de sécurité du contenu.

En plus des attributs répertoriés dans le tableau ci-dessus, les [gestionnaires d'événements](/fr/docs/Web/API/Document_Object_Model/Events#utilisation_des_propriété_onevent) globaux — tel que [`onclick`](/fr/docs/Web/API/Element/click_event) — peuvent également être spécifiée comme étant des [attributs du contenu](#attribut_de_contenu_ou_attribut_idl) sur tous les éléments.

Tous les attributs du gestionnaire d'événements acceptent une chaîne de caractères. La chaîne de caractères sera utilisée pour synthétiser une [fonction JavaScript](/fr/docs/Web/JavaScript/Reference/Functions) comme `function nom(/*argument*/) {corps}`, où `nom` est le nom de l'attribut , et `corps` est la valeur de l'attribut. Le gestionnaire reçoit les mêmes paramètres que son homologue du gestionnaire d'événements JavaScript — la plupart des gestionnaires ne reçoivent qu'un seul paramètre `event`, tandis que `onerror` en reçoit cinq&nbsp;: `event`, `source`, `lineno`, `colno`, `error`. Cela signifie que vous pouvez, en général, utiliser la variable `event` dans l'attribut.

```html
<div onclick="console.log(event)">Cliquez sur moi !</div>
<!-- Le gestionnaire synthétisé a un nom ; vous pouvez le référencer lui-même -->
<div onclick="console.log(onclick)">Cliquez sur moi !</div>
```

## Voir aussi

- [Les éléments HTML](/fr/docs/Web/HTML/Reference/Elements)
