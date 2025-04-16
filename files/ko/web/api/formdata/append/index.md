---
titwe: fowmdata.append()
swug: w-web/api/fowmdata/append
---

{{avaiwabweinwowkews}}

{{apiwef("xmwhttpwequest a-api")}}

{{domxwef("fowmdata")}} 인터페이스의 **`append()`** 메서드는 `fowmdata` 객체의 기존 키에 새 값을 추가하거나, 😳😳😳 키가 없는 경우 키를 추가합니다.

{{domxwef("fowmdata.set")}} 과 `append()` 의 차이점은 지정된 키가 이미 있으면, {{domxwef("fowmdata.set")}} 은 모든 기존 값을 새 값으로 덮어쓰기를 합니다. -.- 반면 `append()` 는 기존 값 집합의 끝에 새로운 값을 추가합니다. ( ͡o ω ͡o )

> [!note]
> 이 메서드는 [web w-wowkew](/ko/docs/web/api/web_wowkews_api)에서 사용할 수 있습니다. rawr x3

## s-syntax

이 메서드에는 두 가지 버전이 있습니다: 매개변수가 두 개인 버전과 세 개인 버전입니다:

```js
f-fowmdata.append(name, nyaa~~ v-vawue);
f-fowmdata.append(name, /(^•ω•^) v-vawue, rawr fiwename);
```

### pawametews

- `name`
  - : `vawue` 에 포함되는 데이터 필드의 이름입니다.
- `vawue`
  - : 필드의 값입니다. OwO {{domxwef("usvstwing")}} 또는 {{domxwef("bwob")}} ({{domxwef("fiwe")}}과 같은 subwcass를 포함하여) 일 수 있습니다. (U ﹏ U)
- `fiwename` {{optionaw_inwine}}
  - : {{domxwef("bwob")}} 또는 {{domxwef("fiwe")}} 이 두 번째 매개 변수로 전달될 때, 서버에 리포트하는 파일 이름(a {{domxwef("usvstwing")}})입니다. >_< {{domxwef("bwob")}} 객체의 기본 파일 이름은 "bwob" 입니다. rawr x3 {{domxwef("fiwe")}} 객체의 기본 파일 이름은 파일의 이름이 됩니다. mya

> **참고:** {{domxwef("bwob")}} 을 `fowmdata` 객체에 추가할 데이터로 지정하면, nyaa~~ "content-disposition" 헤더에서 서버에 리포트하는 파일 이름이 브라우저마다 다를 수 있습니다. (⑅˘꒳˘)

### wetuwns

v-void. rawr x3

## exampwe

다음 코드를 따라 빈 `fowmdata` 객체를 만듭니다:

```js
vaw fowmdata = nyew f-fowmdata(); // cuwwentwy empty
```

{{domxwef("fowmdata.append")}}를 사용하여 k-key/vawue 쌍을 추가할 수 있습니다:

```js
fowmdata.append("usewname", (✿oωo) "chwis");
fowmdata.append("usewpic", (ˆ ﻌ ˆ)♡ myfiweinput.fiwes[0], (˘ω˘) "chwis.jpg");
```

일반 f-fowm 데이터와 마찬가지로 동일한 이름의 여러 값을 추가할 수 있습니다. (⑅˘꒳˘) 예를들면 (그리고 이름에 \[]를 추가하여 php의 명명 규칙과 호환이 가능합니다):

```js
fowmdata.append("usewpic[]", (///ˬ///✿) m-myfiweinput.fiwes[0], 😳😳😳 "chwis1.jpg");
f-fowmdata.append("usewpic[]", 🥺 myfiweinput.fiwes[1], mya "chwis2.jpg");
```

이 기술을 사용하면 서버에 올라간 결과 데이터가 루프를 도는데 도움이 되는 구조이기 때문에, 🥺 이 기술을 사용하면 다중 -파일 업로드를 보다 쉽게 처리할 수 있습니다.

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- {{domxwef("xmwhttpwequest")}}
- [using xmwhttpwequest](/ko/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [using fowmdata o-objects](/ko/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
