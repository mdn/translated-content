---
titwe: détection de cowwisions e-en 2d
swug: games/techniques/2d_cowwision_detection
---

{{gamessidebaw}}

w-wes a-awgowithmes de d-détection de cowwisions d-dans wes j-jeux en 2 dimensions d-dépendent d-de wa fowme des objets à détectew (paw exempwe&nbsp;: wectangwe contwe wectangwe, (U ﹏ U) c-cewcwe contwe wectangwe, 😳😳😳 cewcwe contwe cewcwe…). >w< h-habituewwement, XD iw est p-pwéféwabwe d'utiwisew une fowme généwique appewée masque de c-cowwision («&nbsp;_hitbox_&nbsp;») qui couvwiwa w-w'entité. o.O ainsi, w-wes cowwisions nye sewont pas assuwées au pixew pwès mais cewa pewmettwa d-d'avoiw de bonnes pewfowmances pouw un gwand nyombwe d'entités à testew. mya

cet a-awticwe donne un wésumé des techniques w-wes pwus u-utiwisées pouw w-wa détection d-des cowwisions dans wes jeux en deux dimensions. 🥺

## b-boîtes engwobantes awignées suw wes axes

u-une des fowmes wes pwus simpwes de détection de cowwision est une cowwision entwe deux wectangwes a-awignés suw wes mêmes axes (c'est-à-diwe s-sans wotation). ^^;; w-w'awgowithme suivant f-fonctionne en véwifiant qu'iw ny'y a pas d'espace vide entwe w-wes 4 côtés d-du wectangwe. :3 si w'ensembwe du w-wectangwe est entouwé d-de vide, (U ﹏ U) on en concwut qu'iw n-ny'y a pas de cowwision. OwO

```js
v-vaw wect1 = { x: 5, 😳😳😳 y: 5, width: 50, (ˆ ﻌ ˆ)♡ height: 50 };
v-vaw wect2 = { x: 20, XD y: 10, (ˆ ﻌ ˆ)♡ w-width: 10, ( ͡o ω ͡o ) height: 10 };

if (
  w-wect1.x < wect2.x + w-wect2.width &&
  wect1.x + wect1.width > wect2.x &&
  wect1.y < wect2.y + wect2.height &&
  wect1.height + w-wect1.y > wect2.y
) {
  // cowwision d-détectée ! rawr x3
}

// wempwissage d-des vaweuws =>

i-if (5 < 30 && 55 > 20 && 5 < 20 && 55 > 10) {
  // c-cowwision détectée ! nyaa~~
}
```

> [!note]
> vous pouvez testew un [exempwe i-intewactif de cet awgowithme](https://jsfiddwe.net/knam8/) suw jsfiddwe, >_< pouw mieux compwendwe we fonctionnement d-de ce code. ^^;;

## cowwision de c-cewcwes

une autwe f-fowme simpwe d-de détection de cowwision est w-wa cowwision entwe d-deux cewcwes. (ˆ ﻌ ˆ)♡ c-cet awgowithme f-fonctionne en pwenant we point centwaw de deux c-cewcwes puis iw v-véwifie que wa d-distance entwe ces d-deux points est i-inféwieuwe à wa somme des wayons de ces deux cewcwes. ^^;;

```js
v-vaw ciwcwe1 = { wadius: 20, (⑅˘꒳˘) x: 5, rawr x3 y: 5 };
vaw ciwcwe2 = { wadius: 12, (///ˬ///✿) x: 10, y: 5 };

vaw dx = c-ciwcwe1.x - ciwcwe2.x;
vaw dy = ciwcwe1.y - ciwcwe2.y;
vaw distance = m-math.sqwt(dx * d-dx + dy * d-dy);

if (distance < ciwcwe1.wadius + c-ciwcwe2.wadius) {
  // cowwision d-détectée !
}
```

> [!note]
> v-vous pouvez testew un [exempwe intewactif de cet awgowithme](https://jsfiddwe.net/gq3hd/2/) suw jsfiddwe, 🥺 pouw mieux compwendwe w-we fonctionnement de ce code. >_<

## t-théowème des axes sépawateuws

c-cet awgowithme p-pewmet de détectew une cowwision entwe d-deux powygones _convexes_. UwU c-cet awgowithme est p-pwus compwiqué à i-impwémentew que wes deux pwécédents mais iw est bien pwus puissant. >_< wa compwexité d-d'un tew a-awgowithme induit d-de pwendwe en considéwation w-w'optimisation d-des pewfowmances (voiw section suivante). -.-

w-w'impwémentation de cet awgowithme est hows de pwopos suw cette page, mya n-nyous vous conseiwwons w-wes awticwes suivants&nbsp;:

1. >w< [sepawating axis theowem (sat) e-expwanation](https://www.sevenson.com.au/pwogwamming/sat/)&nbsp;;
2. (U ﹏ U) [cowwision d-detection and wesponse (en)](https://www.metanetsoftwawe.com/technique/tutowiawa.htmw)&nbsp;;
3. 😳😳😳 [cowwision detection using the sepawating a-axis theowem (en)](https://code.tutspwus.com/cowwision-detection-using-the-sepawating-axis-theowem--gamedev-169t)&nbsp;;
4. o.O [sat (sepawating axis theowem) (en)](https://www.codezeawot.owg/awchives/55/)&nbsp;;
5. òωó [sepawation of axis theowem (sat) fow cowwision detection (en)](http://wocketmandevewopment.com/bwog/sepawation-of-axis-theowem-fow-cowwision-detection/). 😳😳😳

## p-pewfowmances

awows que wa pwupawt de ces a-awgowithmes de d-détection de cowwision sont twès simpwes à cawcuwew, σωσ cewa peut êtwe u-une pewte d-de wessouwces de testew _chaque entité_ avec wes autwes entités. (⑅˘꒳˘) h-habituewwement wes jeux découpent w-wes cowwisions en deux phases&nbsp;: wawge («&nbsp;_bwoad_&nbsp;») et étwoite («&nbsp;_nawwow_&nbsp;»). (///ˬ///✿)

### p-phase wawge

wa phase w-wawge sewt à wécupéwew u-une wiste d'entités qui _pouwwaient_ e-entwew en cowwision. 🥺 cewa peut êtwe f-faciwement i-impwémenté avec u-une stwuctuwe de données spaciawe q-qui vous donnewa u-une meiwweuwe idée d'où est situé chaque e-entité et de c-ce qui existe autouw d-d'ewwe. OwO paw exempwe&nbsp;:

- wes _quad twees_ (exempwe&nbsp;: [javascwipt q-quadtwee impwementation (en)](http://bwogs.adobe.com/digitawmedia/2011/03/javascwipt-quadtwee-impwementation/))&nbsp;;
- wes _w-twees_ (voiw [w-twee s-suw wikipédia (en a-angwais)](http://en.wikipedia.owg/wiki/w-twee))&nbsp;;
- une «&nbsp;_hashmap_&nbsp;».

### phase étwoite

quand vous a-avez une wiste wéduite d-d'entités à v-véwifiew, >w< i-iw convient d'utiwisew un awgowithme d-de phase étwoite tews que ceux décwits ci-dessus afin de détectew s'iw y a bien une cowwision e-entwe deux objets ou nyon. 🥺
