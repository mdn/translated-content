---
title: Quand et comment signaler des bogues avec les navigateurs
slug: Learn_web_development/Howto/Web_mechanics/File_browser_bugs
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

Les navigateurs sont des logiciels et, comme tout logiciel, ils peuvent comporter des bugs. Parfois, il se peut que le site web que vous développez ne se comporte pas comme prévu, ou comme indiqué dans la documentation, telle que MDN ou les spécifications. Cela peut indiquer soit un bogue dans votre code, soit une erreur dans la documentation (espérons que non&nbsp;!), soit un bogue dans le navigateur que vous utilisez pour tester votre site. Dans cet article, nous allons voir comment déterminer l'origine du problème et comment signaler un bogue s'il s'avère que le problème vient du navigateur.

## À qui appartient le bogue ?

Avant de signaler un bogue de navigateur, vous devez confirmer qu'il s'agit bien d'un bogue du navigateur. Le problème peut provenir de l'un de ces quatre éléments&nbsp;: votre code, la documentation, le navigateur ou la spécification. Il est important d'écarter les autres possibilités avant de signaler un bogue au navigateur. En général, les spécifications sont la source la plus fiable&nbsp;: les navigateurs et la documentation s'y conforment, mais peuvent comporter des erreurs. Quant à votre code… il est toujours bon de vérifier les fautes de frappe et les erreurs de logique avant de supposer qu'il s'agit d'un bogue du navigateur.

### Créer un cas de test

La première étape pour identifier l'origine du problème consiste à créer un cas de test minimal qui reproduit le bogue. Il doit être petit et autonome, de préférence un seul fichier HTML avec le CSS et le JavaScript intégrés, sans dépendances externes ni code non lié. Cela est utile pour deux raisons&nbsp;:

- Cela minimise la possibilité que le problème soit causé par votre propre code ou une dépendance externe.
- Vous devez de toute façon en fournir un si vous souhaitez en discuter avec quelqu'un, par exemple lors du signalement d'un bogue.

Par exemple, le cas de test suivant est adapté pour un bogue lié à la pseudo-classe {{CSSxRef(":autofill")}}. Notez que nous l'avons réduit au strict minimum, ce qui signifie que nous avons omis les bonnes pratiques comme l'inclusion du doctype, des balises `<head>` et `<body>`, ou des labels pour les champs. Ce n'est pas grave, car le code pertinent est bien présent.

```html
<style>
  :autofill {
    border: 3px solid darkorange;
  }
</style>
<input id="name" name="name" type="text" autocomplete="name" />
<input id="email" name="email" type="email" autocomplete="email" />
```

### Tester votre code

Vous pouvez soit enregistrer votre code HTML localement et [le servir avec un serveur de test local](/fr/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), soit utiliser un service en ligne comme [JSFiddle <sup>(angl.)</sup>](https://jsfiddle.net/) ou [CodePen <sup>(angl.)</sup>](https://codepen.io/) pour créer une démonstration en direct.

La façon la plus simple de tester si le problème est un bogue du navigateur est d'ouvrir votre cas de test dans [plusieurs navigateurs](/fr/docs/Learn_web_development/Extensions/Testing/Introduction). Si vous constatez un comportement différent selon les navigateurs, il est probable qu'il s'agisse d'un bogue du navigateur.

> [!NOTE]
> Il existe d'autres étapes pour isoler le problème, comme tester dans une fenêtre de navigation privée, désactiver les extensions ou vider le cache. Vous devez également essayer ces solutions avant de signaler le bogue.

### Vérifier l'état de l'implémentation

Commencez par faire confiance à la documentation et examinez le ou les navigateurs dont le comportement ne correspond pas à celle-ci. Tous les comportements inattendus ne sont pas des bogues. Parfois, les navigateurs peuvent implémenter une fonctionnalité ou un comportement qui n'a pas encore été intégré à la spécification, ce qui, par conséquent, est moins susceptible d'être documenté. Il est aussi possible qu'une fonctionnalité soit décrite dans la spécification mais pas encore implémentée dans un navigateur, ce qui signifie également qu'elle peut ne pas être documentée.

À ce stade, vous devez consulter d'autres sources pour déterminer l'état de l'implémentation. Voici quelques endroits où chercher&nbsp;:

- **Tableaux de compatibilité des navigateurs sur MDN**&nbsp;: Dans la section «&nbsp;Compatibilité des navigateurs&nbsp;» de nos pages de référence (par exemple, consultez [cette section](/fr/docs/Web/CSS/Reference/Values/basic-shape/shape#compatibilité_des_navigateurs) sur la page de la fonction CSS `shape()`), vous trouvez des informations sur la prise en charge d'une fonctionnalité par les navigateurs et dans quelle mesure. Cela peut indiquer qu'une fonctionnalité n'est pas implémentée dans votre navigateur cible, ou qu'elle n'est que partiellement implémentée (c'est-à-dire qu'elle comporte des bogues ou des limitations connues).
- **Dépôts des spécifications**&nbsp;: Les organismes de normalisation comme [WHATWG <sup>(angl.)</sup>](https://github.com/whatwg) (pour DOM, HTML, fetch, etc.), [CSSWG <sup>(angl.)</sup>](https://github.com/w3c/csswg-drafts) (pour CSS) et [TC39 <sup>(angl.)</sup>](https://github.com/tc39) (pour JavaScript) travaillent publiquement sur GitHub. Vous pouvez vérifier si une spécification a été récemment modifiée ou s'il existe un ticket ouvert concernant la fonctionnalité que vous testez.
- **Forums communautaires**&nbsp;: La [communauté MDN](/fr/docs/MDN/Community/Communication_channels) est un excellent point de départ, tout comme d'autres forums de développement web. Ce sont de bons endroits pour poser des questions sur l'implémentation d'une fonctionnalité ou sur l'existence d'un bogue connu.
- **Gestionnaire de tickets du navigateur testé**&nbsp;: Si vous trouvez qu'un ticket lié à votre problème a déjà été ouvert, cela confirme que le bogue est réel et vous n'avez rien d'autre à faire. Nous allons justement aborder les gestionnaires de tickets ci-dessous.

Bien sûr, même si tous les navigateurs se comportent de la même façon, il peut tout de même y avoir un bogue dans chacun d'eux, ou bien un seul navigateur implémente le comportement attendu. La documentation peut être obsolète ou incorrecte. Pour en être certain, vous devez considérer la spécification comme la source de vérité (sauf dans le cas rare où les navigateurs implémentent des fonctionnalités avant la spécification). Sur chaque page de référence MDN, vous trouverez des liens vers les spécifications concernées dans la section «&nbsp;Spécifications&nbsp;» (voir [cet exemple](/fr/docs/Web/CSS/Reference/Values/basic-shape/shape#spécifications)). Lisez la spécification pour vérifier le comportement attendu. Parfois, les spécifications peuvent être difficiles à comprendre, car elles sont destinées aux ingénieur·e·s des navigateurs, mais faites de votre mieux.

Si finalement tous les navigateurs et la spécification sont cohérents mais que MDN est incorrect, pensez à [contribuer](/fr/docs/MDN/Community/Getting_started)&nbsp;!

## Gestionnaires de bogues des navigateurs

Chaque navigateur dispose de son propre gestionnaire de bogues où vous pouvez rechercher des bogues existants et en signaler de nouveaux. L'interface et le processus peuvent sembler un peu inhabituels au début, mais il y a généralement des instructions. Le tableau suivant liste les gestionnaires de bogues des principaux navigateurs&nbsp;:

| Navigateur      | Gestionnaire de bogues                                                   |
| --------------- | ------------------------------------------------------------------------ |
| Apple Safari    | [WebKit Bugzilla <sup>(angl.)</sup>](https://webkit.org/reporting-bugs/) |
| Google Chrome   | [Chromium Issues <sup>(angl.)</sup>](https://issues.chromium.org/issues) |
| Mozilla Firefox | [Mozilla Bugzilla <sup>(angl.)</sup>](https://bugzilla.mozilla.org/)     |
| Opera           | [Opera Bug Wizard <sup>(angl.)</sup>](https://bugs.opera.com/wizard/)    |

Recherchez les rapports de bogues existants avant d'en signaler un nouveau. Si vous trouvez un rapport qui correspond à votre problème, vous pouvez ajouter un commentaire avec vos observations (par exemple, si vous avez trouvé une solution de contournement ou si vous avez plus d'informations sur le bogue). Cependant, n'ajoutez pas de commentaires du type «&nbsp;J'ai aussi ce bogue&nbsp;», car cela n'apporte pas de valeur. Si vous ne trouvez pas de rapport existant, vous pouvez en créer un nouveau&nbsp;: quelqu'un vous dit s'il s'agit d'un doublon.

Lorsque vous signalez un nouveau bogue, veillez à inclure votre cas de test minimal et toute autre information demandée par le formulaire&nbsp;: version du navigateur, résultats attendus et réels, captures d'écran, etc. Certains gestionnaires de bogues peuvent aussi vous demander de sélectionner un composant ou une catégorie pour le bogue, comme le rendu ou le réseau. Les développeur·euse·s du navigateur utilisent ces étiquettes pour organiser leur travail. Si vous ne savez pas quoi choisir, faites de votre mieux&nbsp;: quelqu'un réaffecte si besoin.

## Signaler des bogues pour des logiciels non-navigateurs

Si le bogue concerne un logiciel autre qu'un navigateur, qui peut s'intégrer au navigateur, vous devez signaler le bogue auprès de l'éditeur du logiciel concerné. Le tableau suivant liste quelques technologies d'assistance et où signaler les bogues les concernant&nbsp;:

| Logiciel                                                                                       | Où signaler                                                                                                        |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [Freedom Scientific JAWS <sup>(angl.)</sup>](https://vispero.com/jaws-screen-reader-software/) | [Formulaire de support technique JAWS <sup>(angl.)</sup>](https://support.freedomscientific.com/Forms/TechSupport) |
| [Non Visual Desktop Access (NVDA) <sup>(angl.)</sup>](https://www.nvaccess.org/)               | [Signaler un bogue NVDA <sup>(angl.)</sup>](https://github.com/nvaccess/nvda)                                      |
