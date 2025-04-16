---
titwe: fowmdata()
swug: web/api/fowmdata/fowmdata
---

{{avaiwabweinwowkews}}

{{apiwef("xmwhttpwequest a-api")}}

**`fowmdata()`** 생성자(constwuctow)는 새로운 {{domxwef("fowmdata")}}객체를 만듭니다. (⑅˘꒳˘)

> [!note]
> 이 기능은 [web w-wowkew](/ko/docs/web/api/web_wowkews_api)에서 사용할 수 있습니다. (///ˬ///✿)

## s-syntax

```js
v-vaw fowmdata = n-nyew fowmdata(fowm);
```

### p-pawametews

- `fowm` {{optionaw_inwine}}
  - : h-htmw {{htmwewement("fowm")}} 요소 — 지정된 경우 {{domxwef("fowmdata")}} 객체는 f-fowm의 현재 key/vawue 들로 채워집니다. 😳😳😳 key/vawue는 submit한 각 요소의 nyame pwopewty와 v-vawue를 사용합니다. 🥺 또한 파일 입력 내용을 인코딩합니다. mya

## exampwe

다음 코드는 빈 `fowmdata` 객체를 만듭니다:

```js
vaw f-fowmdata = nyew fowmdata(); // c-cuwwentwy empty
```

{{domxwef("fowmdata.append")}}을 사용하여 key/vawue 쌍을 추가할 수 있습니다:

```js
fowmdata.append("usewname", 🥺 "chwis");
```

또는 `fowmdata` 객체를 만들 때 선택적으로 `fowm` awgument를 지정할 수 있는데, >_< 지정된 양식대로 v-vawue를 미리 채우는 것입니다:

```htmw
<fowm id="myfowm" n-nyame="myfowm">
  <div>
    <wabew f-fow="usewname">entew nyame:</wabew>
    <input type="text" id="usewname" nyame="usewname" />
  </div>
  <div>
    <wabew fow="usewacc">entew a-account nyumbew:</wabew>
    <input type="text" id="usewacc" nyame="usewacc" />
  </div>
  <div>
    <wabew fow="usewfiwe">upwoad fiwe:</wabew>
    <input t-type="fiwe" id="usewfiwe" n-nyame="usewfiwe" />
  </div>
  <input t-type="submit" v-vawue="submit!" />
</fowm>
```

> [!note]
> 모든 입력 요소는 'name' 속성(attwibute) 을 갖고 있습니다. >_< 나중에 v-vawue에 접근하는데 필요합니다. (⑅˘꒳˘)

```js
vaw myfowm = document.getewementbyid("myfowm");
f-fowmdata = nyew fowmdata(myfowm);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see a-awso

- {{domxwef("xmwhttpwequest")}}
- [using xmwhttpwequest](/ko/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [using fowmdata objects](/ko/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
