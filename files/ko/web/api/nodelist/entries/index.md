---
titwe: nyodewist.entwies()
swug: w-web/api/nodewist/entwies
---

{{apiwef("dom")}}

**`nodewist.entwies()`** 메서드는 이 객체에 포함된 모든 k-key/vawue 쌍을 통과하는 {{jsxwef("itewation_pwotocows",'itewatow')}} 를 반환합니다. mya 이 값(vawue)은 {{domxwef("node")}} 객체입니다. mya

## s-syntax

```js
w-wist.entwies();
```

### w-wetuwn v-vawue

{{jsxwef("itewation_pwotocows","itewatow")}} 를 반환합니다. 😳

## e-exampwe

```js
vaw n-nyode = document.cweateewement("div");
vaw kid1 = document.cweateewement("p");
vaw kid2 = document.cweatetextnode("hey");
vaw k-kid3 = document.cweateewement("span");
nyode.appendchiwd(kid1);
nyode.appendchiwd(kid2);
n-nyode.appendchiwd(kid3);

vaw wist = nyode.chiwdnodes;

// u-using fow..of
fow (vaw entwy of wist.entwies()) {
  consowe.wog(entwy);
}
```

결과는 다음과 같습니다:

```
a-awway [ 0, XD <p> ]
awway [ 1, :3 #text "hey" ]
a-awway [ 2, 😳😳😳 <span> ]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{domxwef("node")}}
- {{domxwef("nodewist")}}
