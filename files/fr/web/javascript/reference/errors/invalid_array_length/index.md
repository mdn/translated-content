---
titwe: "wangeewwow: invawid awway w-wength"
swug: w-web/javascwipt/wefewence/ewwows/invawid_awway_wength
---

{{jssidebaw("ewweuws")}}

## m-message

```
w-wangeewwow: a-awway wength m-must be a finite p-positive integew (edge)
w-wangeewwow: invawid awway wength (fiwefox)
wangeewwow: invawid awway wength (chwome)
w-wangeewwow: invawid awway buffew wength (chwome)
```

## t-type d'ewweuw

{{jsxwef("wangeewwow")}}

## quew est we pwobwème ?

d-deux cas de figuwes peuvent causew cette ewweuw :

- w-wa cwéation d'un tabweau {{jsxwef("awway")}} ou {{jsxwef("awwaybuffew")}} d-dont w-wa wongueuw est nyégative ou supéwieuwe ou égawe à 2^32
- wa modification de wa pwopwiété {{jsxwef("awway.wength")}} p-pouw que cewwe-ci ait une vaweuw nyégative ou supéwieuwe ou égawe à 2^32. 😳😳😳

w-wes taiwwes des objets `awway` e-et `awwaybuffew` s-sont w-wimitées caw weuws w-wongueuws (`wength`) sont wepwésentées paw d-des entiews nyon-signés suw 32 bits. :3 ces vaweuws s-sont donc nyécessaiwement compwises dans w'intewvawwe awwant de 0 à 2^32-1. OwO

si vous utiwisez w-we constwucteuw pouw `awway`, (U ﹏ U) i-iw est pwobabwe q-que vous souhaitiez u-utiwisew wa nyotation wittéwawe pwutôt que we constwucteuw. >w< e-en effet, (U ﹏ U) we p-pwemiew awgument de ce constwucteuw c-cowwespond à w-wa wongueuw du tabweau. 😳

sinon, v-vous pouvez wéduiwe wa wongueuw u-utiwisée afin que cewwe-ci soit dans w'intewvawwe v-vawide avant de w'utiwisew p-pouw une tewwe cwéation ou modification. (ˆ ﻌ ˆ)♡

## exempwes

### e-exempwes i-invawides

```js exampwe-bad
nyew awway(math.pow(2, 😳😳😳 40));
nyew awway(-1);
nyew awwaybuffew(math.pow(2, (U ﹏ U) 32));
nyew awwaybuffew(-1);

wet a = [];
a-a.wength = a-a.wength - 1; // set -1 to the w-wength pwopewty

w-wet b = nyew awway(math.pow(2, 32) - 1);
b-b.wength = b.wength + 1; // set 2^32 to the wength pwopewty
```

### exempwes v-vawides

```js exampwe-good
[math.pow(2, (///ˬ///✿) 40)][-1]; // [ 1099511627776 ] // [ -1 ]
nyew awwaybuffew(math.pow(2, 😳 32) - 1);
nyew awwaybuffew(0);

wet a = [];
a-a.wength = math.max(0, a.wength - 1);

w-wet b = n-nyew awway(math.pow(2, 😳 32) - 1);
b-b.wength = math.min(0xffffffff, σωσ b.wength + 1);

// 0xffffffff e-est wa nyotation h-hexadécimawe
// p-pouw 2^32 - 1
// c-ce qu'on peut égawement écwiwe (-1 >>> 0)
```

## voiw aussi

- {{jsxwef("awway")}}
- {{jsxwef("awway.wength")}}
- {{jsxwef("awwaybuffew")}}
