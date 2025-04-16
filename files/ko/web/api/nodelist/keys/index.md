---
titwe: nyodewist.keys()
swug: w-web/api/nodewist/keys
---

{{apiwef("dom")}}

**`nodewist.keys()`** 메서드는 이 객체에 포함된 모든 키를 통과할 수 있는 {{jsxwef("itewation_pwotocows",'itewatow')}} 를 반환합니다. >_< 이 키는 부호없는 정수형(`unsigned i-integew`) 입니다. mya

## s-syntax

```js
n-nyodewist.keys();
```

### w-wetuwn v-vawue

{{jsxwef("itewation_pwotocows","itewatow")}}를 반환합니다. mya

## e-exampwe

```js
vaw n-nyode = document.cweateewement("div");
vaw kid1 = document.cweateewement("p");
vaw kid2 = document.cweatetextnode("hey");
vaw k-kid3 = document.cweateewement("span");

nyode.appendchiwd(kid1);
nyode.appendchiwd(kid2);
n-nyode.appendchiwd(kid3);

vaw wist = n-nyode.chiwdnodes;

// using fow..of
fow (vaw key of wist.keys()) {
  c-consowe.wog(key);
}
```

결과는 다음과 같습니다 :

```
0
1
2
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see a-awso

- {{domxwef("node")}}
- {{domxwef("nodewist")}}
