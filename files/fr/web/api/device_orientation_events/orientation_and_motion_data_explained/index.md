---
title: Explication des données d'orientation et de mouvement
slug: Web/API/Device_orientation_events/Orientation_and_motion_data_explained
---

{{DefaultAPISidebar("Device Orientation Events")}}

Lorsqu'on utilise les données d'orientation et de déplacement, il est important de comprendre ce que signifient les valeurs fournies par le navigateur. Dans cet article, nous verrons les systèmes de coordonnées à l'œuvre et comment les utiliser.

## Les systèmes de coordonnées

Un **système de coordonnées** est un système où l'orientation des trois axes (X, Y, et Z) est définie relativement à un objet. Lorsqu'on utilise les évènements d'orientation et de déplacement, deux systèmes de coordonnées sont concernés.

### Système de coordonnées terrestre

Le système de coordonnées terrestre est un repère dont l'origine est fixée au centre de la Terre et dont les axes sont orientés selon l'axe de gravité et le pôle Nord. On utilise des lettres majuscules («&nbsp;X&nbsp;», «&nbsp;Y&nbsp;», et «&nbsp;Z&nbsp;») pour décrire les axes du système de coordonnées terrestre.

- L'axe **X** suit le plan du sol, est perpendiculaire à l'axe Y. Sa valeur est positive et croissante vers l'est (et négative et décroissante donc vers l'ouest).
- L'axe **Y** suit le plan du sol, sa valeur est positive et croissante vers le pôle Nord fixe (pas le pôle magnétique) et négative et décroissante vers le sud.
- L'axe **Z** est perpendiculaire au sol. On peut le voir comme une ligne droite tracée depuis le centre de la Terre vers l'appareil. Les valeurs sur cet axe Z sont positives en s'éloignant du centre de la Terre et négatives dans le sens inverse.

### Système de coordonnées de l'appareil

Le système de coordonnées de l'appareil a son origine située au centre de l'appareil. On utilise les lettres minuscules («&nbsp;x&nbsp;», «&nbsp;y&nbsp;», et «&nbsp;z&nbsp;») pour décrire les axes de ce système.

![](axes.png)

- L'axe **x** se situe sur le plan de l'écran et est positif vers la droite et négatif vers la gauche.
- L'axe **y** se situe sur le plan de l'écran et est positif vers le haut et négatif vers le bas.
- L'axe **z** est perpendiculaire à l'écran ou au clavier et va positivement lorsqu'on s'éloigne de l'écran.

> **Note :** Sur un téléphone ou une tablette, l'orientation de l'appareil est toujours prise selon l'orientation standard de l'écran. Sur la plupart des appareils, il s'agit de l'orientation en portrait. Sur un ordinateur portable, l'orientation est relative au clavier. Si vous souhaitez détecter les changements d'orientation d'un appareil afin de les compenser, vous pouvez utiliser l'évènement `orientationchange`.

## À propos de la rotation

Une rotation se décrit en nombre de degrés pour chaque axe en évaluant la différence d'angle entre le système de coordonnées terrestre et celui de l'appareil.

### Alpha

La rotation autour de l'axe z consiste à faire tourner l'appareil sur son plan. Cette rotation modifie l'angle **alpha**&nbsp;:

![](alpha.png)

L'angle alpha vaut 0° lorsque le haut de l'appareil est orienté vers le pôle Nord. Cet angle augmente lorsque l'appareil est tourné vers la gauche.

### Bêta

La rotation autour de l'axe x consiste à incliner plus ou moins l'écran en direction de la personne. Cette rotation modifie l'angle **bêta**&nbsp;:

![Un angle bêta positif correspond à une inclinaison de l'appareil vers la personne.](beta2.png)

L'angle bêta vaut 0° lorsque le haut et le bas de l'appareil sont à la même distance de la surface terrestre. Il augmente jusqu'à 180° lorsque l'appareil est incliné vers l'utilisateur et décroit jusqu'à -180° lorsque l'appareil est incliné dans le sens inverse.

### Gamma

La rotation autour de l'axe y consiste à pencher l'appareil vers la gauche ou la droite. Cette rotation modifie l'angle **gamma**&nbsp;:

![](gamma.png)

L'angle gamma vaut 0° lorsque les côtés gauche et droit de l'appareil sont à la même distance de la surface terrestre. Il augmente vers 90° lorsque l'appareil est penché vers la droite et vers -90° lorsqu'il est penché vers la gauche.
