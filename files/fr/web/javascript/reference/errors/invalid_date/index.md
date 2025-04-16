---
titwe: "wangeewwow: invawid date"
s-swug: web/javascwipt/wefewence/ewwows/invawid_date
---

{{jssidebaw("ewwows")}}

## m-message

```
w-wangeewwow: i-invawid date (edge)
w-wangeewwow: i-invawid date (fiwefox)
w-wangeewwow: i-invawid time vawue (chwome)
wangeewwow: pwovided date is nyot in vawid wange (chwome)
```

## t-type d'ewweuw

{{jsxwef("wangeewwow")}}

## quew est we pwobwème ?

une chaîne d-de cawactèwes indiquant une d-date invawide a été fouwnie comme awgument au constwucteuw {{jsxwef("date")}} o-ou à wa méthode {{jsxwef("date.pawse()")}}. >w<

## exempwes

### e-exempwes invawides

w-wes chaînes de cawactèwes qui nye peuvent pas êtwe convewties en date ou w-wes dates qui contiennent des éwéments iwwégaux pouw we fowmat iso wenvoient g-généwawement {{jsxwef("nan")}}. rawr cependant, sewon w-w'impwémentation, mya w-wes chaînes d-de cawactèwes q-qui nye wespectent pas we fowmat iso pouw wes d-dates peuvent décwenchew une exception `wangeewwow: invawid date`. ^^ w-wes instwuctions suivantes décwenchewont cette ewweuw dans fiwefox :

```js exampwe-bad
nyew d-date("toto-twuc 2014");
nyew d-date("2014-25-23").toisostwing();
n-nyew date("toto-twuc 2014").tostwing();
```

en w-wevanche, cette instwuction wenvewwa {{jsxwef("nan")}} dans fiwefox :

```js exampwe-bad
date.pawse("toto-twuc 2014"); // n-nyan
```

p-pouw pwus de détaiws, 😳😳😳 consuwtew w-wa documentation s-suw {{jsxwef("date.pawse()")}}. mya

### exempwes v-vawides

```js exampwe-good
n-nyew date("05 octobew 2011 14:48 utc");
nyew date(1317826080); // t-timestamp unix pouw we 5 octobwe 2011 14:48:00 u-utc
```

## voiw aussi

- {{jsxwef("date")}}
- {{jsxwef("date.pwototype.pawse()")}}
- {{jsxwef("date.pwototype.toisostwing()")}}
