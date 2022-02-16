---
title: AJAX
slug: Web/Guide/AJAX
translation_of: Web/Guide/AJAX
---
**AJAX (Asynchronous JavaScript + XML)** n'est pas une technologie en soi, mais un terme désignant une « nouvelle » approche utilisant un ensemble de technologies existantes, dont : [HTML](/fr/HTML "fr/HTML") ou [XHTML](/fr/XHTML "fr/XHTML"), [les feuilles de styles CSS](/fr/CSS "fr/CSS"), [JavaScript](/fr/JavaScript "fr/JavaScript"), [le modèle objet de document](/fr/DOM "fr/DOM") (DOM), [XML](/fr/XML "fr/XML"), [XSLT](/fr/XSLT "fr/XSLT"), et l'[objet XMLHttpRequest](/fr/XMLHttpRequest "fr/XMLHttpRequest"). Lorsque ces technologies sont combinées dans le modèle AJAX, les applications Web sont capables de réaliser des mises à jour rapides et incrémentielles de l'interface utilisateur sans devoir recharger la page entière du navigateur. Les applications fonctionnent plus rapidement et sont plus réactives aux actions de l'utilisateur.

#### **Quand utiliser (ou non) AJAX ?** 

S'il n'y a pas de "bonne réponse", quelques éléments généraux sont à garder à mémoire :

- La méthode AJAX peut être résumée comme un compromis : elle évite un rechargement complet de la page mais **n'autorise pas davantage** que ce qu'apporte une requête HTTP GET ou POST (ou HEAD) classique. Les échanges sont plutôt lourds car, même pour peu d'éléments, le navigateur **doit** envoyer des entêtes et négocier la transaction. 
  La méthode est alors intérressante pour tous les sites où le contenu est changé peu fréquemment et reste prévisible : un blog, un forum, etc. où c'est l'utilisateur qui décide de changer le contenu (_le serveur ne peut pas être à l'initiative, sauf à faire des requêtes régulièrement mais il serait alors préférable de passer par les [WebSockets](https://developer.mozilla.org/fr/docs/WebSockets)_).
- La méthode AJAX a comme qualité de rester dans les standards HTTP, en plus d'être du côté client : c'est donc une méthode qui est **totalement** transparente dans les échanges standards entre un client et un serveur, donc avec tous les langages de programmes qui supportent une connexion socket classique. C'est important à garder à l'esprit dans des environnements mixtes : un serveur Apache / PHP pour la génération de pages maîtresses et un contenu déployé dans un autre langage.
  Ne pas confondre *possible* et *souhaitable* : AJAX **peut** négocier avec plusieurs domaines différents ou (des ports différents dans un même domaine). Cependant pour des [raisons de sécurité](https://developer.mozilla.org/fr/docs/HTTP/Access_control_CORS) les possibilités sont restreintes voire impossibles. La méthode AJAX est donc dépendante de ce qu'autorise ou permet le navigateur du client.
- La méthode AJAX est connue et reconnue, pouvant être utilisées à large échelle dans des bibliothèques comme [JQuery](https://fr.wikipedia.org/wiki/JQuery), dont l'intérêt de ces bibliothéques est d'accélérer la vitesse de développement. De plus l'utilisation de Javascript permet d'accéder aux ressources du DOM de la page et des données reçues si elles sont au format XML, permettant la sérialisation dans la plupart des situations. 
  Cependant AJAX rencontre aussi les difficultés liées à la grande hétérogénité des navigateurs (implantation différente de JS, donc _in fine_ des possibilités AJAX), des règles de sécurité, etc. Comme pour CSS, AJAX peut être vu comme un "plus" dans la navigation (_voir le principe de [dégradation élégante](https://fr.wikipedia.org/wiki/Am%C3%A9lioration_progressive)_) mais ne doit pas être vu comme une finalité au risque, sinon, de se couper d'une partie des utilisateurs.

<table>
  <tbody>
    <tr>
      <td>
        <h2 class="Documentation" id="Documentation">Documentation</h2>
        <dl>
          <dt>
            <a href="/fr/AJAX/Premiers_pas" title="fr/AJAX/Premiers_pas"
              >AJAX:Premiers pas</a
            >
          </dt>
          <dd>
            <small
              >Cet article vous guide à travers les bases d'AJAX et vous donne
              deux exemples simples pour commencer.</small
            >
          </dd>
        </dl>
        <dl>
          <dt>
            <a
              class="external"
              href="http://www.webreference.com/programming/ajax_tech/"
              >Techniques AJAX alternatives</a
            >
          </dt>
          <dd>
            <small
              >La plupart des articles sur AJAX se concentrent sur l'utilisation
              de XMLHttp comme moyen de communication, mais les techniques AJAX
              ne s'arrêtent pas à XMLHttp. Il y en a bien d'autres.</small
            >
          </dd>
        </dl>
        <dl>
          <dt>
            <a
              class="external"
              href="http://www.adaptivepath.com/publications/essays/archives/000385.php"
              >Ajax: A New Approach to Web Applications (en)</a
            >
          </dt>
          <dd>
            <small
              >Jesse James Garrett, du site
              <a class="external" href="http://www.adaptivepath.com"
                >adaptive path</a
              >, a écrit cet article en février 2005, introduisant le terme AJAX
              et les concepts liés.</small
            >
          </dd>
        </dl>
        <dl>
          <dt>
            <a
              class="external"
              href="http://www.onlamp.com/pub/a/onlamp/2005/05/19/xmlhttprequest.html"
              >A Simpler Ajax Path</a
            >
          </dt>
          <dd>
            <small
              >« Comme on le remarquera, il est assez facile de tirer parti de
              l'objet XMLHttpRequest pour faire se comporter une application Web
              un peu plus comme une application traditionnelle, tout en
              continuant à utiliser des outils comme des formulaires Web pour
              collecter les entrées de l'utilisateur. »</small
            >
          </dd>
        </dl>
        <dl>
          <dt>
            <a
              class="external"
              href="http://www.contentwithstyle.co.uk/Articles/38/fixing-the-back-button-and-enabling-bookmarking-for-ajax-apps"
              >Fixing the Back Button and Enabling Bookmarking for AJAX Apps</a
            >
          </dt>
          <dd>
            <small
              >Cet article rédigé par Mike Stenhouse détaille certaines méthodes
              utilisables pour rendre fonctionnel le bouton Précédent et réparer
              les problèmes causés au marquage des pages lorsque des
              applications sont développées avec les outils AJAX.</small
            >
          </dd>
        </dl>
        <dl>
          <dt>
            <a
              class="external"
              href="http://alexbosworth.backpackit.com/pub/67688"
              >Ajax Mistakes</a
            >
          </dt>
          <dd>
            <small
              >Cet article d'Alex Bosworth attire l'attention sur certaines
              erreurs que les développeurs d'applications AJAX peuvent
              faire.</small
            >
          </dd>
        </dl>
        <dl>
          <dt>
            <a class="external" href="http://www.xul.fr/xml-ajax.html"
              >Tutoriel</a
            >
            avec des exemples.
          </dt>
        </dl>
        <dl>
          <dt>
            <a class="external" href="http://www.w3.org/TR/XMLHttpRequest/"
              >La spécification XMLHttpRequest</a
            >- 
            <a class="external" href="http://www.xul.fr/XMLHttpRequest.html"
              >(Traduction française)</a
            >
          </dt>
          <dd><small>Brouillon de travail du W3C</small></dd>
        </dl>
      </td>
      <td>
        <h2 class="Community" id="Communauté">Communauté</h2>
        <ul>
          <li>
            Voir les forums de Mozilla…
            {{ DiscussionList("dev-ajax", "mozilla.dev.ajax") }}
          </li>
        </ul>
        <h2 class="Tools" id="Outils">Outils</h2>
        <ul>
          <li>
            <a class="external" href="http://www.ajaxprojects.com"
              >Toolkits et frameworks</a
            >
          </li>
          <li>
            <a class="external" href="http://www.getfirebug.com/"
              >Firebug — Outil de développement AJAX/Web</a
            >
          </li>
          <li>
            <a
              class="external"
              href="http://blog.monstuff.com/archives/000252.html"
              >Outils de débogage AJAX</a
            >
          </li>
          <li>
            <a
              class="external"
              href="http://www.osflash.org/doku.php?id=flashjs"
              >Kit d'intégration Flash/AJAX</a
            >
          </li>
          <li>
            <a class="external" href="http://xkr.us/code/javascript/XHConn/"
              >Une bibliothèque d'interface XMLHTTP simple</a
            >
          </li>
          <li>
            <a
              class="external"
              href="http://chandlerproject.org/Projects/AjaxLibraries"
              >Bibliothèques AJAX</a
            >
          </li>
        </ul>
        <h2 id="Exemples">Exemples</h2>
        <ul>
          <li>
            <a
              class="external"
              href="http://www.dhtmlgoodies.com/index.html?whichScript=ajax-poller"
              >AJAX poller script</a
            >
          </li>
          <li>
            <a
              class="external"
              href="http://www.ajaxprojects.com/ajax/tutorialdetails.php?itemid=9"
              >Ajax Chat Tutorial</a
            >
          </li>
          <li>
            <a class="external" href="http://www.funwithjustin.com/ajax-toybox/"
              >Ajax Toybox</a
            >
          </li>
          <li>
            <a
              class="external"
              href="http://www.ajaxprojects.com/ajax/tutorialdetails.php?itemid=13"
              >RSS Ticker with AJAX</a
            >
          </li>
          <li>
            <a
              class="external"
              href="http://www.jamesdam.com/ajax_login/login.html#login"
              >AJAX Login System using XMLHttpRequest</a
            >
          </li>
          <li>
            <a
              class="external"
              href="http://www.thinkvitamin.com/features/ajax/create-your-own-ajax-effects"
              >Create your own Ajax effects</a
            >
          </li>
          <li>
            <a
              class="external"
              href="http://codinginparadise.org/weblog/2005/08/ajax-creating-huge-bookmarklets.html"
              >AJAX: Creating Huge Bookmarklets</a
            >
          </li>
          <li>
            <a class="external" href="http://www.hotajax.org"
              >Hot!Ajax: many cool examples</a
            >
          </li>
        </ul>
        <h2 class="Related_Topics" id="Sujets_liés">Sujets liés</h2>
        <dl>
          <dd>
            <a href="/fr/HTML" title="fr/HTML">HTML</a>,
            <a href="/fr/XHTML" title="fr/XHTML">XHTML</a>,
            <a href="/fr/CSS" title="fr/CSS">Feuilles de style (CSS)</a>,
            <a href="/fr/DOM" title="fr/DOM">Modèle objet de document (DOM)</a>,
            <a href="/fr/JavaScript" title="fr/JavaScript">JavaScript</a>,
            <a href="/fr/XML" title="fr/XML">XML</a>,
            <a href="/fr/XSLT" title="fr/XSLT">XSLT</a> ,
            <a href="/fr/DHTML" title="fr/DHTML">DHTML</a>,
            <a href="/fr/HTML/Canvas" title="fr/HTML/Canvas">Canvas</a>
          </dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>
