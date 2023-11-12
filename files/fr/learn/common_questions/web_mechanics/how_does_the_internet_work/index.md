---
title: Le fonctionnement de l'Internet
slug: Learn/Common_questions/Web_mechanics/How_does_the_Internet_work
---

Dans cet article, nous expliquons ce qu'est l'Internet et comment il fonctionne.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Aucun, mais nous vous encourageons à lire l'article
        <a href="/fr/Apprendre/Commencez_votre_projet_web"
          >Commencez votre projet Web</a
        >
        avant celui-ci.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Vous apprendrez les rudiments de l'infrastructure technique du Web et
        vous serez en mesure de distinguer «&nbsp;Internet&nbsp;» et «&nbsp;Web&nbsp;».
      </td>
    </tr>
  </tbody>
</table>

## Résumé

L'**Internet** est l'épine dorsale du Web&nbsp;: il s'agit de l'infrastructure technique qui sous-tend le Web. De façon simple, l'Internet est un vaste réseau d'ordinateurs qui communiquent les uns avec les autres.

[L'histoire des débuts de l'Internet est quelque peu nébuleuse](https://fr.wikipedia.org/wiki/Internet#Historique). Tout aurait commencé dans les années 1960 par un projet de recherche subventionné par le département de la Défense des États-Unis. L'Internet serait ensuite devenu, dans les années 1980, une infrastructure publique grâce au soutien de nombreuses universités publiques et entreprises privées. Les diverses technologies qui sous-tendent l'Internet ont évolué au fil du temps, mais son fonctionnement de base a, quant à lui, peu changé. L'Internet demeure un moyen de relier tous les ordinateurs entre eux et de s'assurer que ce lien perdure, peu importe les problèmes qui pourraient toucher le réseau.

## Pédagogie active

- [How the internet Works in 5 minutes](https://www.youtube.com/watch?v=7_LPdttKXPc)&nbsp;: Une vidéo d'une durée de 5 minutes réalisée par Aaron Titus afin d'expliquer les rudiments du fonctionnement de l'Internet. (_en anglais seulement_)

## Allons plus loin

### Un réseau de base

Pour que deux ordinateurs puissent communiquer entre eux, ils doivent être liés soit par un lien physique (généralement par un [câble Ethernet](https://fr.wikipedia.org/wiki/Ethernet)), soit sans fil (par exemple, via [WiFi](http://fr.wikipedia.org/wiki/WiFi) ou [Bluetooth](http://fr.wikipedia.org/wiki/Bluetooth)). Tous ces types de connexions sont possibles sur les ordinateurs modernes.

> **Note :** À partir de maintenant, nous ne parlerons que de connexions physiques, mais sachez que les explications ci-dessous sont tout aussi valides pour les réseaux sans fil.

![Two computers linked together](internet-schema-1.png)

Un réseau comme celui illustré ci-haut n'est pas limité à deux ordinateurs. Vous pouvez y connecter autant d'ordinateurs que vous le souhaitez, mais le tout se complique très rapidement. Ainsi, si vous voulez relier, disons, dix ordinateurs entre eux, vous aurez besoin de 45 câbles et de neuf prises sur chaque ordinateur!

![Ten computers all together](internet-schema-2.png)

Afin de résoudre ce problème, chaque ordinateur du réseau est relié à un petit ordinateur bien spécial que l'on appelle _routeur_. Ce _routeur_ n'a qu'une seule fonction&nbsp;: tout comme un signaleur de gare de train, il s'assure que les messages transmis par un ordinateur donné se rendent au bon ordinateur destinataire. Ainsi, pour envoyer un message à l'ordinateur B, l'ordinateur A transmet d'abord le message au routeur, qui s'assure alors de transférer le message à l'ordinateur B et non à l'ordinateur C.

Vous voyez donc que lorsque nous ajoutons un routeur dans notre structure, notre réseau de dix ordinateurs ne requiert alors que de dix câbles, d'une prise par ordinateur et d'un routeur de 10 ports.

![Ten computers with a router](internet-schema-3.png)

### Un réseau de réseaux

Jusqu'ici tout est beau, mais comment fait-on pour relier des centaines, des milliers ou même des millards d'ordinateurs entre eux ? Bien évidemment, un seul _routeur_ ne pourrait suffire pour tant de connexions. Cependant, si vous avez lu attentivement, vous aurez constaté qu'un _routeur_ n'est en réalité qu'un ordinateur. Serait-ce alors possible de lier deux _routeurs_ ? Oui, absolument, et en voici le résultat!

![Two routers linked together](internet-schema-4.png)

En liant les ordinateurs à des routeurs, puis les routeurs entre eux, nous avons la capacité d'étendre le réseau indéfiniment.

![Routers linked to routers](internet-schema-5.png)

Un tel réseau s'apparente de près à ce que nous appelons l'Internet, mais il y a un élément manquant. Ce réseau a été conçu pour répondre à nos besoins personnels, mais d'autres réseaux existent également. Vos amis, vos voisins et plein d'autres gens peuvent avoir leurs propres réseaux d'ordinateurs. Cependant, il vous est plutôt impossible de brancher des câbles entre votre maison et le reste de la planète, alors que faire ? Eh bien, il se trouve que votre maison est déjà câblée et liée aux réseaux électrique et téléphonique. L'infrastructure téléphonique, qui lie déjà votre maison au reste de la planète, répond parfaitement à nos besoins. Afin de lier notre réseau à l'infrastructure téléphonique, nous devons utiliser un appareil spécialisé appelé _modem_. Ce _modem_ convertit l'information de notre réseau en information décodable par l'infrastructure téléphonique et vice-versa.

![A router linked to a modem](internet-schema-6.png)

Notre réseau est donc lié à l'infrastructure téléphonique. La prochaine étape consiste alors à transmettre avec succès nos messages au réseau cible. À cette fin, nous allons lier notre réseau à un Fournisseur d'accès à Internet (FAI). Un FAI est une entreprise qui gère des _routeurs_ qui sont liés entre eux et qui ont des droits d'accès aux routeurs d'autres FAI. Le message transmis par notre réseau est ainsi transporté à travers le réseau de FAI afin d'atteindre le réseau cible. Voilà en quoi consiste l'Internet : il s'agit de toute cette infrastructure de réseaux (dans les schémas suivants, ISP signifie FAI, c'est le terme anglais pour fournisseur d'accès).

![Full Internet stack](internet-schema-7.png)

### Localiser un ordinateur

Lorsque nous souhaitons transmettre un message à un ordinateur, nous devons préciser de quel ordinateur il s'agit. Par conséquent, chaque ordinateur lié à un réseau possède une adresse unique appelée «&nbsp;adresse IP&nbsp;» (où «&nbsp;IP&nbsp;» signifie _Internet Protocol_) qui sert à localiser l'ordinateur. Cette adresse est composée d'une série de nombres séparés par des points, par exemple&nbsp;: `192.168.2.10` ou de lettres et de chiffres séparés par deux points. `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.

C'est une méthode très efficace pour les ordinateurs, mais les humains ont un peu plus de difficulté à retenir de telles adresses numériques. Afin de se faciliter la tâche, un libellé alphabétique, appelé _nom de domaine,_ est souvent associé aux adresses IP. Par example, `google.com` est le nom de domaine associé à l'adresse IP `173.194.121.32`. L'utilisation d'un nom de domaine est ainsi le moyen le plus facile d'atteindre un ordinateur via l'Internet.

![Show how a domain name can alias an IP address](dns-ip.png)

### L'Internet et le web

Vous aurez peut-être constaté que lorsque nous naviguons sur le Web avec un navigateur Web, nous utilisons un nom de domaine pour rejoindre un site web. Est-ce donc dire qu'Internet et Web réfèrent à une seule et même notion ? La réponse n'est pas si simple. Comme nous l'avons vu, l'Internet est une infrastructure technique qui lie des milliards d'ordinateurs entre eux. Parmi ces ordinateurs, certains ordinateurs (appelés _serveurs Web_) peuvent transmettre des messages décodables par les navigateurs Web. Ainsi, l'_Internet_ est une infrastructure, alors que le _Web_ est un service utilisant l'infrastructure de l'Internet. Il importe de mentionner que d'autres services utilisent l'infrastructure de l'Internet, comme le courriel et {{Glossary("IRC")}}.

## Étapes suivantes

- [Le fonctionnement du Web](/fr/Apprendre/Commencer_avec_le_web/Le_fonctionnement_du_Web)
- [Comprendre la différence entre une page web, un site web, un serveur web et un moteur de recherche](/fr/docs/Learn/Common_questions/Pages_sites_servers_and_search_engines)
- [Comprendre les noms de domaine](/fr/Apprendre/Comprendre_noms_de_domaine)
