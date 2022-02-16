---
title: 'CSP: sandbox'
slug: Web/HTTP/Headers/Content-Security-Policy/sandbox
tags:
  - CSP
  - Content-Securityè-Policy
  - Directive
  - HTTP
  - Sandbox
  - Security
  - Sécurité
translation_of: Web/HTTP/Headers/Content-Security-Policy/sandbox
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`sandbox`** active un bac à sable (_sandbox_) pour les ressources demandées similaire à l'attribut {{htmlattrxref("sandbox", "iframe")}} des éléments {{HTMLElement("iframe")}}. Elle applique des restrictions aux actions d'une page, dont le fait d'empêcher les fenêtres intruses (_popups_) et l'exécution de greffons et de scripts et de créer une contrainte de même origine.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Document directive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Cette directive n'est pas supportée dans l'élément
        {{HTMLElement("meta")}} ou par l'en-tête
        {{HTTPHeader("Content-Security-policy-Report-Only")}}.
      </th>
    </tr>
  </tbody>
</table>

## Syntaxe

    Content-Security-Policy: sandbox;
    Content-Security-Policy: sandbox <valeur>;

Où `<valeur>` peut optionnellement être une valeur parmi :

- `allow-downloads-without-user-activation` {{experimental_inline}}
  - : Autorise les téléchargements sans action de l'utilisateur.

<!---->

- `allow-forms`
  - : Autorise la soumission de de formulaires. Si ce mot-clé n'est pas spécifié, cette opération est interdite.
- `allow-modals`
  - : Autorise la page à ouvrir des fenêtres modales.
- `allow-orientation-lock`
  - : Autorise la page à désactiver la possibilité de verrouiller l'orientation de l'écran.
- `allow-pointer-lock`
  - : Autorise la page à utiliser l'[API Pointer Lock](/en-US/docs/WebAPI/Pointer_Lock).
- `allow-popups`
  - : Autorise les fenêtres intruses (comme avec `window.open`, `target="_blank"`, `showModalDialog`). Si ce mot-clé n'est pas utilisée, cette fonctionnalité échouera en silence.
- `allow-popups-to-escape-sandbox`
  - : Autorise un document cloisonné dans une bac à sable à ouvrir de nouvelles fenêtres sans les contraindre à appliquer les mêmes règles. Cela permettra, par exemple, à une publicité externe d'être sainement cloisonnée sans imposer les mêmes restrictions sur une page d'accueil.
- `allow-presentation`
  - : Autorise les pages embarquantes à avoir contrôle sur la possibilité pour l'iframe de démarrer une session de présentation ou non.
- `allow-same-origin`
  - : Autorise le contenu à être traité comme étant de son origine normale. Si ce mot-clé n'est pas utilisé, les contenu embarqués seront traités comme étant d'une origine unique.
- `allow-scripts`
  - : Autorise la page à exécuter des scripts (mais non créer des fenêtres intruses). Si ce mot-clé n'est pas utilisée, cette opération n'est pas permise.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Laisse les requêtes de ressources accéder à l'espace de stockage du parent avec l'[API Storage Access](/en-US/docs/Web/API/Storage_Access_API).
- `allow-top-navigation`
  - : Autorise la page à charger du contenu au niveau supérieur de contexte navigationnel. Si ce mot-clé n'est pas utilisé, cette opération n'est pas permise.
- `allow-top-navigation-by-user-activation`
  - : Laisse la ressource naviguer jusqu'au niveau supérieur de contexte navigationnel, mais seulement si initié par une aciton de l'utilisateur.

## Exemples

```bash
Content-Security-Policy: sandbox allow-scripts;
```

## Spécifications

| Spécification                                                                | Statut                       | Commentaire          |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-sandbox", "sandbox")}} | {{Spec2('CSP 3.0')}} | Inchangé.            |
| {{specName("CSP 1.1", "#directive-sandbox", "sandbox")}} | {{Spec2('CSP 1.1')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.sandbox")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{htmlattrxref("sandbox", "iframe")}} attribute on {{HTMLElement("iframe")}} elements
