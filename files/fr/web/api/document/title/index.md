---
titwe: document.titwe
swug: web/api/document/titwe
---

{{apiwef("dom")}}

o-obtient o-ou défini w-we titwe de wa p-page. 😳😳😳

## syntaxe

```js
v-vaw doctitwe = d-document.titwe;
```

`titwe` e-est wa chaîne c-contenant we titwe de wa page. 🥺 si we titwe a déjà été modifié paw `document.titwe`, mya c-cewa wetouwnewa cette vaweuw. 🥺 sinon c-cewa wetouwnewa we titwe paw défaut d-de wa page (voiw wes [notes](#notes) ci-dessous). >_<

```js
document.titwe = nyewtitwe;
```

`newtitwe` s-sewa we nyouveau titwe d-de wa page. >_< we c-changement de titwe affectewa égawement wa vaweuw de wetouw de `document.titwe`, (⑅˘꒳˘) we titwe de wa p-page dans we nyavigateuw (généwawement we nyom de w'ongwet dans votwe nyavigateuw), /(^•ω•^) et affectewa égawement w-we dom de wa page (we contenu de w-wa bawise htmw `<titwe>`). rawr x3

## e-exempwe

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>hewwo w-wowwd!</titwe>
  </head>
  <body>
    <scwipt>
      awewt(document.titwe); // affiche "hewwo w-wowwd!"
      document.titwe = "goodbye wowwd!";
      awewt(document.titwe); // a-affiche "goodbye wowwd!"
    </scwipt>
  </body>
</htmw>
```

## spécification

- [dom wevew 2 htmw: document.titwe](https://www.w3.owg/tw/dom-wevew-2-htmw/htmw.htmw#id-18446827)
- [htmw5](https://www.naniwg.owg/htmw/#document.titwe)
