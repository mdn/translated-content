---
title: Types de lien
slug: Web/HTML/Link_types
tags:
  - Attribute
  - HTML
  - Link
  - Link types
  - Reference
translation_of: Web/HTML/Link_types
original_slug: Web/HTML/Types_de_lien
---
{{HTMLSidebar}}

En HTML, les types de lien indiquent la relation entre deux documents, reliés ensemble grâce à un élément [`<a>`](/fr/docs/Web/HTML/Element/a), [`<area>`](/fr/docs/Web/HTML/Element/area), [`<form>`](/fr/docs/Web/HTML/Element/Form) ou [`<link>`](/fr/docs/Web/HTML/Element/link).

<table class="standard-table">
  <caption>
    Liste des types de lien HTML et leur signification
  </caption>
  <thead>
    <tr>
      <th scope="col">Type de lien</th>
      <th scope="col">Description</th>
      <th scope="col">Utilisable dans ces éléments</th>
      <th scope="col">Interdit dans ces éléments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>alternate</code></td>
      <td>
        <ul>
          <li>
            Si l'élément est un élément
            <a href="/fr/docs/Web/HTML/Element/link"
              ><code>&#x3C;link></code></a
            >
            et que l'attribut
            <a href="/fr/docs/Web/HTML/Element/link#attr-rel"
              ><code>&#x3C;rel></code></a
            >
            contient le type <code>stylesheet</code>, ce lien définit
            <a href="/fr/docs/Web/CSS/Alternative_style_sheets"
              >une feuille de style alternative</a
            >. Dans ce cas, l'attribut
            <a href="/fr/docs/Web/HTML/Element/link#attr-title"
              ><code>&#x3C;title></code></a
            >
            doit être présent et ne doit pas être la chaîne de caractères vide.
          </li>
          <li>
            Si l'attribut
            <a href="/fr/docs/Web/HTML/Element/link#attr-type"
              ><code>type</code></a
            >
            vaut <code>application/rss+xml</code> ou
            <code>application/atom+xml</code>, le lien définit
            <a href="/fr/docs/Web/Archive/RSS/Premiers_pas/Syndication"
              >un flux de syndication</a
            >. Le premier flux définit sur la page est le flux par défaut.
          </li>
          <li>
            Sinon, le lien définit une page alternative, il peut s'agir :
            <ul>
              <li>
                Si l'attribut
                <a href="/fr/docs/Web/HTML/Element/link#attr-media"
                  ><code>media</code></a
                >
                est défini, d'une page destinée à un autre support (par exemple
                une tablette)
              </li>
              <li>
                D'une page dans une autre langue si l'attribut
                <a href="/fr/docs/Web/HTML/Element/link#attr-hreflang"
                  ><code>hreflang</code></a
                >
                est défini,
              </li>
              <li>
                D'une page dans un autre format (par exemple PDF) si l'attribut
                <a href="/fr/docs/Web/HTML/Element/link#attr-type"
                  ><code>type</code></a
                >
                est défini,
              </li>
              <li>D'une combinaison de ces documents.</li>
            </ul>
          </li>
        </ul>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>archives</code> {{obsolete_inline}}</td>
      <td>
        <p>
          Ce type définit un hyperlien vers un document qui contient un lien
          d'archive vers le document courant. Un billet de blog pourrait ainsi
          créer un lien vers un index qui liste les articles publiés pendant ce
          mois.
        </p>
        <p>
          <strong>Note :</strong> Bien que la forme <code>archive</code> (au
          singulier) soit reconnue, elle est incorrecte et doit être évitée.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>author</code></td>
      <td>
        <p>
          Ce type définit un hyperlien vers une page qui décrit l'auteur ou qui
          fournit un moyen de contacter l'auteur du document.
        </p>
        <p>
          <strong>Note :</strong> Ce lien peut être un lien
          <code>mailto:</code> bien que ce ne soit pas recommandé afin d'éviter
          la collecte de l'adresse électronique (mieux vaut avoir un formulaire
          de contact).
        </p>
        <p>
          Bien que l'attribut
          <a href="/fr/docs/Web/HTML/Element/link#attr-rev"
            ><code>&#x3C;rev></code></a
          >
          soit reconnu pour les éléments
          <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
          >,
          <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a>
          et
          <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a
          >, il ne faut pas utiliser cet attribut avec un type de lien «
          <code>made</code> » mais plutôt utiliser
          <a href="/fr/docs/Web/HTML/Element/link#attr-rel"
            ><code>&#x3C;rel></code></a
          >
          avec ce type de lien (« <code>author</code> »).
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>bookmark</code></td>
      <td>
        <p>
          Ce type de lien indique l'hyperlien est
          <a href="https://fr.wikipedia.org/wiki/Permalien">un permalien</a>
          pour l'élément
          <a href="/fr/docs/Web/HTML/Element/article"
            ><code>&#x3C;article></code></a
          >
          qui est l'ancêtre le plus proche. S'il n'y en a aucun, c'est un
          permalien pour
          <a href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines"
            >la section</a
          >
          la plus proche de l'élément courant.
        </p>
        <p>
          Ce type de lien permet de placer un marque-page pour un seul article
          d'une page qui contient plusieurs articles (par exemple un
          agrégateur).
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>canonical</code></td>
      <td>
        Un lien canonique est un élément HTML qui aide les webmasters à ne pas
        dupliquer du contenu en indiquant la version <em>canonique</em> ou
        <em>préférée</em> de la page pour l'optimisation à destination des
        moteurs de recherche.
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/HTML/Link_types/dns-prefetch"
            >dns-prefetch</a
          ></code
        >
        {{experimental_inline}}
      </td>
      <td>
        Ce type de lien indique au navigateur qu'une ressource est nécessaire et
        permet au navigateur d'effectuer une requête DNS et un établissement de
        connexion avant que l'utilisateur clique sur le lien.
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>external</code></td>
      <td>
        Ce type de lien indique que l'hyperlien mène vers une ressource située à
        l'extérieur du site sur lequel se trouve la page courante. Autrement
        dit, en suivant ce lien, l'utilisateur quitte le site qu'il visite.
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
    </tr>
    <tr>
      <td><code>first</code> {{obsolete_inline}}</td>
      <td>
        <p>
          Ce type indique que l'hyperlien mène à la première ressource dans la
          série de ressources à laquelle appartient la page actuelle.
        </p>
        <p>
          <strong>Note :</strong> les autres types de lien permettant une
          navigation séquentielle sont : <code>last</code>, <code>prev</code>,
          <code>next</code> (pour respectivement la dernière, la précédente et
          la suivante).
        </p>
        <p>
          Bien que les synonymes <code>begin</code> et
          <code>start</code> puissent être reconnus, ils sont incorrects et
          devraient être évités.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>help</code></td>
      <td>
        <ul>
          <li>
            Si l'élément est un élément
            <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a> ou
            <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
            >, ce type indique que l'hyperlien mène vers une ressource contenant
            de l'aide sur l'utilisation de l'élément parent du lien et de ses
            descendants.
          </li>
          <li>
            Si l'élément est un élément
            <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a
            >, ce type indique que l'hyperlien mène vers une ressource
            fournissant une aide à propos de la page entière.
          </li>
        </ul>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a
        >, <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td><em>Aucun</em>.</td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td>
        <p>
          Ce type définit une ressource qui représente la page dans l'interface
          utilisateur. C'est généralement une icône (visuelle ou auditive).
        </p>
        <p>
          Les attributs
          <a href="/fr/docs/Web/HTML/Element/link#attr-media"
            ><code>media</code></a
          >,
          <a href="/fr/docs/Web/HTML/Element/link#attr-type"
            ><code>type</code></a
          >
          et
          <a href="/fr/docs/Web/HTML/Element/link#attr-sizes"
            ><code>sizes</code></a
          >
          permettent au navigateur de choisir l'icône la plus appropriée au
          contexte. Si plusieurs ressources sont équivalentes, le navigateur
          sélectionnera celle qui est déclarée en dernière, dans l'ordre des
          éléments de l'arbre du document. Ces attributs ne sont que des
          indications et les ressources associées peuvent ne pas correspondre,
          auquel cas, le navigateur en sélectionnera une autre s'il en existe
          une adéquate.
        </p>
        <p>
          <strong>Note :</strong> sur iOS, ce type de lien n'est pas utilisé, à
          la place, ce sont les relations (<a
            href="/fr/docs/Web/HTML/Element/link#attr-rel"
            ><code>rel</code></a
          >)
          <code
            ><a
              href="https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4"
              >apple-touch-icon</a
            ></code
          >
          et
          <code
            ><a
              href="https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6"
              >apple-touch-startup-image</a
            ></code
          >
          qui sont utilisées.
        </p>
        <p>
          Le type de lien <code>shortcut</code> est souvent vu avant
          <code>icon</code> mais il n'est pas conforme et les navigateurs
          l'ignorent, c'est pourquoi il ne doit plus être utilisé.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>import</code>{{experimental_inline}}</td>
      <td>
        <a href="/fr/docs/Web/Web_Components/HTML_Imports"
          >Imports de ressources en HTML</a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>index</code> {{Obsolete_Inline("HTML5")}}</td>
      <td>
        <p>
          Ce type indique que la page fait partie d'une structure hiérarchique
          et que l'hyperlien renvoie au niveau le plus haut de cette structure.
        </p>
        <p>
          Si un ou plusieurs liens de type <code>up</code> sont présents, la
          quantité de ces liens indique la profondeur de la page courante au
          sein de la hiérarchie.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>last</code> {{obsolete_inline}}</td>
      <td>
        <p>
          Ce type indique que l'hyperlien mène à la dernière ressource dans la
          série de ressources à laquelle appartient la page actuelle.
        </p>
        <p>
          <strong>Note :</strong> les autres types de lien permettant une
          navigation séquentielle sont : <code>first</code>, <code>prev</code>,
          <code>next</code> (pour respectivement la première, la précédente et
          la suivante).
        </p>
        <p>
          Bien que le synonyme <code>end</code> puisse être reconnu, il est
          incorrect et doit être évité.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td><em>Aucun</em>.</td>
    </tr>
    <tr>
      <td><code>license</code></td>
      <td>
        <p>
          Ce type de lien mène vers un document contenant des informations
          relatives à la licence appliquée au contenu. Si le lien n'est pas dans
          l'élément
          <a href="/fr/docs/Web/HTML/Element/head"><code>&#x3C;head></code></a
          >, le standard n'indique pas que la licence doit s'appliquer à tout ou
          partie du document, seules les données de la page permettent de le
          savoir.
        </p>
        <p>
          <strong>Note :</strong> bien qu'il puisse être reconnu, le synonyme
          <code>copyright</code> est incorrect et doit être évité.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a
        >, <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td><em>Aucun</em>.</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/HTML/Link_types/manifest">manifest</a></code
        >
      </td>
      <td>
        Ce type de lien indique que la ressource liée est
        <a href="/fr/docs/Web/Manifest">un manifeste d'application web</a>.
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/HTML/Link_types/modulepreload"
            >modulepreload</a
          ></code
        >
      </td>
      <td>
        Initialise le chargement anticipé (et prioritaire) des modules de
        scripts
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>next</code></td>
      <td>
        <p>
          Ce type indique que l'hyperlien mène à la prochaine ressource dans la
          série de ressources à laquelle appartient la page actuelle.
        </p>
        <p>
          <strong>Note :</strong> les autres types de lien permettant une
          navigation séquentielle sont : <code>first</code>, <code>prev</code>,
          <code>last</code> (pour respectivement la première, la précédente et
          la dernière).
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a
        >, <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td><em>Aucun</em>.</td>
    </tr>
    <tr>
      <td><code>nofollow</code></td>
      <td>
        Ce type de lien indique que le document lié n'est pas approuvé par
        l'auteur du document actuel, par exemple s'il n'a aucun contrôle envers
        le document lié ou si le document est un mauvais exemple ou encore s'il
        existe une relation commerciale (le lien a été vendu). Ce type de lien
        peut être utilisé par certains moteurs de recherche qui utilise des
        classements selon la popularité des documents.
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/HTML/Link_types/noopener">noopener</a></code
        >
      </td>
      <td>
        <p>
          Ce type de lien indique au navigateur d'ouvrir le lien sans que le
          nouveau contexte de navigation créé ait accès au document qui
          contenait le lien (techniquement la propriété
          <a href="/fr/docs/Web/API/Window/opener"
            ><code>Window.opener</code></a
          >
          renverra <code>null</code>).
        </p>
        <p>
          Ce type est particulièrement utile lorsqu'on ouvre un lien pour lequel
          on ne veut pas qu'il puisse interagir avec le document source (voir
          également l'article
          <em
            ><a href="https://mathiasbynens.github.io/rel-noopener/"
              >About <code>rel=noopener</code></a
            ></em
          >
          pour plus de détails) tout en fournissant un référent via l'en-tête
          HTTP (à moins que <code>noreferrer</code> n'y soit également utilisé).
        </p>
        <p>
          Lorsque <code>noopener</code> est utilisé, les noms utilisés pour
          l'attribut <code>target</code>, qui ne sont pas vides et qui ne sont
          pas <code>_top</code>, <code>_self</code> ou <code>_parent</code> sont
          alors traités comme s'ils étaient synonymes de
          <code>_blank</code> lorsqu'il s'agit de décider d'ouvrir une nouvelle
          fenêtre ou un nouvel onglet.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
    </tr>
    <tr>
      <td><code>noreferrer</code></td>
      <td>
        <p>
          Ce type de lien empêche le navigateur, lorsqu'on navigue vers une
          autre page, que le l'adresse de la page ou toute autre valeur soit
          fournie via l'en-tête HTTP
          <a href="/fr/docs/Web/HTTP/Headers/Referer"><code>Referer</code></a
          >.
        </p>
        <p>
          (Dans Firefox, avant Firefox 37, ce type ne fonctionnait que pour les
          liens sur lesquels on cliquait directement, lorsqu'on utilisait un
          menu « Ouvrir dans un nouvel onglet », ce type était ignoré.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
    </tr>
    <tr>
      <td><code>opener</code> {{experimental_inline}}</td>
      <td>
        Annule l'effet de l'ajout implicite de <code>rel="noopener"</code> sur
        les liens qui possèdent explicitement <code>target="_blank"</code> (voir
        <a href="https://github.com/whatwg/html/issues/4078"
          >la discussion sur les spécifications HTML</a
        >,
        <a href="https://trac.webkit.org/changeset/237144/webkit/"
          >la modification WebKit change</a
        >
        et
        <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1503681"
          >la discussion sur le bug Firefox correspondant</a
        >).
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
    </tr>
    <tr>
      <td><code>pingback</code></td>
      <td>
        <p>
          Ce type définit une URI vers une ressource externee qui doit être
          appelée si quelqu'un ajoute un commentaire ou une citation à propos de
          la page web courant. Le protocole pour un tel appel est défini dans la
          spécification
          <a href="https://www.hixie.ch/specs/pingback/pingback">Pingback 1.0</a
          >.
        </p>
        <p>
          <strong>Note :</strong> si l'en-tête HTTP
          <a href="/fr/docs/Web/HTTP/Headers/X-Pingback"
            ><code>X-Pingback</code></a
          >
          est également présent, celui-ci aura la prioriété sur l'élément
          <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
          avec ce type de lien.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/HTML/Link_types/preconnect"
            >preconnect</a
          ></code
        >
        {{experimental_inline}}
      </td>
      <td>
        Ce type de lien suggère au navigateur d'ouvrir une connexion vers le
        site web visé de façon anticipée, sans diffuser d'information privée et
        sans télécharger de contenu. Il est utilisé afin de pouvoir récupérer le
        contenu lié plus rapidement.
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/HTML/Link_types/prefetch">prefetch</a></code
        >
      </td>
      <td>
        <p>
          Ce type de lien suggère au navigateur de récupérer la ressource liée
          de façon anticipée phase car il est probable que l'utilisateur la
          demande. À partir de Firefox 44, la valeur de l'attribut
          <a href="/fr/docs/Web/HTML/Element/link#attr-crossorigin"
            ><code>&#x3C;crossorigin></code></a
          >
          est prise en compte, ce qui permet d'effectuer des récupérations
          anticipées anonymes.
        </p>
        <p>
          <strong>Note :</strong>
          <a href="/fr/docs/Web/HTTP/Link_prefetching_FAQ"
            >la FAQ sur <code>prefetch</code></a
          >
          explique quels liens peuvent être récupérés de façon anticipée et
          quelles peuvent être les méthodes alternatives.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Link_types/preload">preload</a></code>
      </td>
      <td>
        <p>
          Ce type de lien indique au navigateur de précharger une ressource car
          celle-ci sera nécessaire par la suite lors de la navigation.
        </p>
        <p>
          Voir l'article
          <a href="/fr/docs/Web/HTML/Preloading_content"
            >Précharger du contenu grâce à <code>rel="preload"</code></a
          >
          pour plus d'informations.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/fr/docs/Web/HTML/Link_types/prerender">prerender</a></code
        >
        {{experimental_inline}}
      </td>
      <td>
        Ce type de lien suggère au navigateur de récupérer la ressource liée en
        avance et de préparer son rendu hors de l'écran afin qu'elle puisse être
        présentée rapidement à l'utilisateur lorsqu'elle sera nécessaire.
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>prev</code></td>
      <td>
        <p>
          Ce type indique que l'hyperlien mène à la ressource précédente dans la
          série de ressources à laquelle appartient la page actuelle.
        </p>
        <p>
          <strong>Note :</strong> les autres types de lien permettant une
          navigation séquentielle sont : <code>first</code>, next,
          <code>last</code> (pour respectivement la première, la suivante et la
          dernière).
        </p>
        <p>
          Bien que la valeur <code>previous</code> soit reconnue comme synonyme,
          elle est incorrecte et ne doit pas être utilisée.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
      <td><em>Aucun</em>.</td>
    </tr>
    <tr>
      <td><code>search</code></td>
      <td>
        <p>
          Ce type de lien indique que l'hyperlien cible un document dont
          l'interface est destinée à la recherche sur ce document, sur ce site
          ou sur les ressources associées.
        </p>
        <p>
          Si l'attribut
          <a href="/fr/docs/Web/HTML/Element/link#attr-type"
            ><code>type</code></a
          >
          vaut <code>application/opensearchdescription+xml</code>, la ressource
          est <a href="/fr/docs/Web/OpenSearch">un plugin OpenSearch</a> qui
          peut facilement être ajouté à l'interface de certains navigateurs
          comme Firefox ou Internet Explorer.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
      <td><em>Aucun</em>.</td>
    </tr>
    <tr>
      <td><code>shortlink</code></td>
      <td>
        <p>
          <a
            href="https://code.google.com/archive/p/shortlink/wikis/Specification.wiki"
            >Spécification pour <code>shortlink</code></a
          >
        </p>
        <p>
          Page Wikipédia :
          <a href="https://fr.wikipedia.org/wiki/URL_shortening"
            >Le raccourcissement des URL</a
          >
        </p>
        <p>
          Certains sites web créent des liens courts pour faciliter le partage
          de liens par messagerie instantanée.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>sidebar</code>
        {{non-standard_inline}}{{Obsolete_Inline("Gecko63")}}
      </td>
      <td>
        <p>
          Ce type indique que l'hyperlien mène vers une ressource qui serait
          plus pertinente au sein d'un contexte de navigation secondaire tel
          qu'une barre latérale. Les navigateurs qui ne possèdent pas de tel
          contexte ignoreront ce mot-clé.
        </p>
        <p>
          Bien que ce type de lien ait fait partie de la spécification HTML, il
          a été retiré de la spécification et est uniquement implémenté par
          Firefox pour les versions antérieures à Firefox 63.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>stylesheet</code></td>
      <td>
        <p>
          Ce type de lien définit une ressource externe qui doit être utilisée
          comme une feuille de style. Si le type de la ressource n'est pas
          défini, le navigateur considèrera que c'est une feuille de style
          <code>text/css</code>.
        </p>
        <p>
          Utilisé avec le mot-clé <code>alternate</code>, il permet de définir
          <a href="/fr/docs/Web/CSS/Alternative_style_sheets"
            >une feuille de style alternative</a
          >
          auquel cas l'atttribut
          <a href="/fr/docs/Web/HTML/Element/link#attr-title"
            ><code>&#x3C;title></code></a
          >
          doit être présent et ne doit pas être la chaîne vide.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>tag</code></td>
      <td>
        <p>
          Ce type indique que l'hyperlien fait référence à un document qui
          décrit l'étiquette (le <em>tag</em>) appliquée à ce document.
        </p>
        <p>
          <strong>Note :</strong> ce type de lien ne doit pas être utilisé pour
          renvoyer vers un nuage de <em>tags</em> car ce dernier concerne un
          ensemble de pages et pas uniquement le document courant.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a
        >, <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
    <tr>
      <td><code>up</code> {{obsolete_inline}}</td>
      <td>
        <p>
          Ce type de lien indique que la page fait partie d'une structure
          hiérarchique et que l'hyperlien mène vers une ressource située au
          niveau supérieur de cette structure.
        </p>
        <p>
          Le nombre de <code>up</code> indique la différence de profondeur dans
          la hiérarchie entre la page courante et la page associée.
        </p>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/a"><code>&#x3C;a></code></a
        >, <a href="/fr/docs/Web/HTML/Element/area"><code>&#x3C;area></code></a
        >, <a href="/fr/docs/Web/HTML/Element/link"><code>&#x3C;link></code></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Form"><code>&#x3C;form></code></a>
      </td>
    </tr>
  </tbody>
</table>

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
        {{SpecName('Preload','#x2.link-type-preload','preload')}}
      </td>
      <td>{{Spec2('Preload')}}</td>
      <td>Ajout du type <code>preload</code>.</td>
    </tr>
    <tr>
      <td>
        {{SpecName('Resource Hints', '#dfn-preconnect', 'preconnect')}}
      </td>
      <td>{{Spec2('Resource Hints')}}</td>
      <td>
        Ajout des types <code>dns-prefetch</code>, <code>preconnect</code> et
        <code>prerender</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("HTML WHATWG", "links.html#linkTypes", "link types")}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td>
        Ajout de <code>opener</code>. <code>noopener</code> devient le
        comportement par défaut pour les liens avec
        <code>target="_blank"</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("HTML5 W3C", "links.html#linkTypes", "link types")}}
      </td>
      <td>{{Spec2('HTML5 W3C')}}</td>
      <td>
        <p>
          Ajout de <code>tag</code>, <code>search</code>, <code>prefetch</code>,
          <code>noreferrer</code>, <code>nofollow</code>, <code>icon</code> et
          <code>author</code>.
        </p>
        <p>Renommage de <code>copyright</code> en <code>license</code>.</p>
        <p>
          Suppression de <code>start</code>, <code>chapter</code>,
          <code>section</code>, <code>subsection</code> et <code>appendix</code>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("HTML4.01", "types.html#type-links", "link types")}}
      </td>
      <td>{{Spec2('HTML4.01')}}</td>
      <td>
        <p>
          Ajout de <code>alternate</code>, <code>stylesheet</code>,
          <code>start</code>, <code>chapter</code>, <code>section</code>,
          <code>subsection</code>, <code>appendix</code> et
          <code>bookmark</code>.
        </p>
        <p>Renommage de <code>previous</code> en <code>prev</code>.</p>
        <p>Suppression de <code>top</code> et <code>search</code>.</p>
      </td>
    </tr>
    <tr>
      <td>{{SpecName("HTML3.2", "#link", "&lt;link&gt;")}}</td>
      <td>Obsolete</td>
      <td>
        Ajout de <code>top</code>, <code>contents</code>, <code>index</code>,
        <code>glossary</code>, <code>copyright</code>, <code>next</code>,
        <code>previous</code>, <code>help</code> et <code>search</code>.
      </td>
    </tr>
    <tr>
      <td>{{RFC(1866, "HTML 2.0")}}</td>
      <td>Obsolete</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("html.elements.link.rel")}}
