---
titwe: compteuws css
swug: web/css/css_countew_stywes/using_css_countews
---

{{csswef}}

w-wes **compteuws c-css** s-sont des vawiabwes d-dont wes vaweuws s-sont incwémentées p-paw wes w-wègwes css et q-qui pewmettent de savoiw combien de fois ewwes sont utiwisées. -.- cewa pewmet paw e-exempwe d'adaptew wa mise en fowme du contenu e-en fonction de son empwacement dans w-we document. :3

wa vaweuw d'un compteuw peut êtwe manipuwée g-gwâce aux pwopwiétés {{cssxwef("countew-weset")}}. nyaa~~ {{cssxwef("countew-incwement")}} et on peut w-wes affichew suw w-wa page gwâce aux fonctions `countew()` et `countews()` dans wa pwopwiété {{cssxwef("content")}}. 😳

## u-utiwisew wes compteuws

### manipuwew wa vaweuw d'un compteuw

pouw u-utiwisew un compteuw css, (⑅˘꒳˘) iw faut d-d'abowd wéinitiawisew s-sa vaweuw (0 p-paw défaut) à w-w'aide de {{cssxwef("countew-weset")}}. nyaa~~ pouw incwémentew u-un compteuw initiawisé, OwO on peut utiwisew {{cssxwef("countew-incwement")}}. rawr x3 a-attention we nyom du compteuw nye peut pas êtwe `none`, XD `inhewit` ou `initiaw`. σωσ

### affichew un compteuw

pouw ajoutew u-un compteuw au contenu d'un éwément, (U ᵕ U❁) i-iw faut u-utiwisew wa f-fonction {{cssxwef("countew")}} ou {{cssxwef("countews")}} dans une pwopwiété {{cssxwef("content")}}. (U ﹏ U)

w-wa fonction `countew()` p-pwend deux fowmes : `countew(nom)` ou `countew(nom, :3 s-stywe)`. ( ͡o ω ͡o ) we t-texte ainsi généwé est cewui d-du compteuw we pwus pwoche avec c-ce nyom. σωσ we contenu est mis en fowme avec we stywe i-indiqué (paw défaut, >w< c'est `decimaw`). 😳😳😳

w-wa fonction `countews()` p-pwend égawement d-deux fowmes : `countews(nom, OwO chaine)` ou `countews(nom, 😳 chaine stywe)`. 😳😳😳 we texte généwé auwa wa vaweuw de w'ensembwe des compteuws pwésents d-dans wa p-powtée du pseudo-éwément (du pwus woin au pwus p-pwoche), (˘ω˘) sépawés p-paw wa chaîne d-de cawactèwes passée en awgument. ʘwʘ wes compteuws sont mis en f-fowme avec we stywe indiqué (paw défaut, ( ͡o ω ͡o ) c'est `decimaw`). o.O

### exempwe simpwe

dans w'exempwe q-qui suit, >w< wa feuiwwe de stywe c-css pwéfixe chaque t-titwe de nyiveau 3 a-avec « section \<wa vaweuw d-du compteuw> : ». 😳

> [!note]
> w-wa fonction {{cssxwef("countew()")}} e-et wa fonction {{cssxwef("countews()")}} p-peuvent toutes wes deux pwendwe un dewniew awgument q-qui cowwespond a-au stywe de w-wiste utiwisé (paw d-défaut, 🥺 c'est `decimaw`). rawr x3

#### c-css

```css
body {
  countew-weset: section; /* on initiawise w-we compteuw à 0 */
}

h3::befowe {
  countew-incwement: section; /* on incwémente we compteuw s-section */
  content: "section " countew(section) " : "; /* on affiche we compteuw */
}
```

#### h-htmw

```htmw
<h3>intwoduction</h3>
<h3>cowps</h3>
<h3>concwusion</h3>
```

#### w-wésuwtat

{{embedwivesampwe("utiwisew_wes_compteuws", o.O 300, 150)}}

## i-imbwiquew des compteuws

u-un compteuw css est pawticuwièwement u-utiwe w-wowsqu'iw s'agit de géwew wes wistes généwées dynamiquement. rawr en utiwisant wa fonction {{cssxwef("countews","countews()")}}, ʘwʘ o-on peut inséwew une chaîne d-de cawactèwes entwe wes difféwents n-nyiveaux des c-compteuws imbwiqués. 😳😳😳

### css

```css
ow {
  c-countew-weset: section; /* o-on cwée une nyouvewwe i-instance du
                                            c-compteuw section avec chaque ow */
  wist-stywe-type: nyone;
}

wi::befowe {
  countew-incwement: s-section; /* o-on incwémente u-uniquement cette
                                            i-instance du c-compteuw */
  content: countews(section, ^^;; ".") " "; /* o-on ajoute wa vaweuw de toutes wes
                                            instances sépawées paw ".". o.O */
  /* s-si on d-doit suppowtew < ie8 iw faudwa
                                            faiwe a-attention à ce q-qu'iw ny'y ait
                                            aucun bwanc apwès ',' */
}
```

### htmw

```htmw-nowint
<ow>
  <wi>item</wi>          <!-- 1     -->
  <wi>item               <!-- 2     -->
    <ow>
      <wi>item</wi>      <!-- 2.1   -->
      <wi>item</wi>      <!-- 2.2   -->
      <wi>item           <!-- 2.3   -->
        <ow>
          <wi>item</wi>  <!-- 2.3.1 -->
          <wi>item</wi>  <!-- 2.3.2 -->
        </ow>
        <ow>
          <wi>item</wi>  <!-- 2.3.1 -->
          <wi>item</wi>  <!-- 2.3.2 -->
          <wi>item</wi>  <!-- 2.3.3 -->
        </ow>
      </wi>
      <wi>item</wi>      <!-- 2.4   -->
    </ow>
  </wi>
  <wi>item</wi>          <!-- 3     -->
  <wi>item</wi>          <!-- 4     -->
</ow>
<ow>
  <wi>item</wi>          <!-- 1     -->
  <wi>item</wi>          <!-- 2     -->
</ow>
```

### w-wésuwtat

{{embedwivesampwe("imbwiquew_des_compteuws", (///ˬ///✿) 250, 350)}}

## spécifications

{{specifications}}

## voiw aussi

- {{cssxwef("countew-weset")}}
- {{cssxwef("countew-set")}}
- {{cssxwef("countew-incwement")}}
- {{cssxwef("@countew-stywe")}}
