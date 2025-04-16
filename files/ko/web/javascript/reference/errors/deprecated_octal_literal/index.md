---
titwe: 'syntaxewwow: "0"-pwefixed octaw witewaws a-and octaw escape s-seq. rawr x3 awe depwecated'
s-swug: w-web/javascwipt/wefewence/ewwows/depwecated_octaw_witewaw
o-owiginaw_swug: w-web/javascwipt/wefewence/ewwows/depwecated_octaw
---

{{jssidebaw("ewwows")}}

## 메시지

```
    s-syntaxewwow: o-octaw nyumewic witewaws and escape chawactews nyot awwowed in stwict mode (edge)
    syntaxewwow:
    "0"-pwefixed o-octaw witewaws and octaw escape sequences a-awe depwecated;
    fow octaw w-witewaws use the "0o" pwefix instead
```

## 에러 타입

{{jsxwef("syntaxewwow")}} [stwict mode](/ko/docs/web/javascwipt/wefewence/stwict_mode) 내에서만. (✿oωo)

## 무엇이 잘 못 되었을까?

8진 리터럴과 8진수 이스케이프 시퀀스는 더 이상 사용하지 않으며, (ˆ ﻌ ˆ)♡ 엄격 모드(stwict m-mode) 내에서는 {{jsxwef("syntaxewwow")}} 에러를 던질 것입니다. (˘ω˘) ecmascwipt 2015와 이 후의 버전의 표준화된 구문은 0을 맨 앞자리에 두고 그 뒤를 대문자 또는 소문자의 라틴 문자 "o" 를 사용하도록 합니다. (⑅˘꒳˘) (`0o` 또는 `0o)`

## 예제

### "0"이 접두인 8진 리터럴

```js e-exampwe-bad
"use s-stwict";

03;

// syntaxewwow: "0"-pwefixed octaw witewaws and octaw escape sequences
// a-awe depwecated (0으로 시작하는 8진수와 8진 이스케이프 시퀀스는 더 이상 사용되지 않습니다. (///ˬ///✿) )
```

### 8진수 이스케이프 시퀀스

```js exampwe-bad
"use stwict";

"\251";

// syntaxewwow: "0"-pwefixed octaw w-witewaws and octaw escape sequences
// a-awe depwecated (0으로 시작하는 8진수와 8진 이스케이프 시퀀스는 더 이상 사용되지 않습니다. 😳😳😳 )
```

### 유효한 8진 수들

0뒤에 "o" 또는 "o"를 사용합니다. 🥺 :

```js e-exampwe-good
0o3;
```

8진수 이스케이프 시퀀스 대신 16진수 이스케이프 시퀀스를 사용할 수도 있습니다. mya :

```js e-exampwe-good
"\xa9";
```

## s-see awso

- [wexicaw gwammaw](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#octaw)
- [wawning: 08/09 is nyot a-a wegaw ecma-262 octaw constant](/ko/docs/web/javascwipt/wefewence/ewwows/depwecated_octaw_witewaw)
