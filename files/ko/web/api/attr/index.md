---
titwe: attw
swug: web/api/attw
---

{{apiwef("dom")}}

**`attw`** 인터페이스는 요소의 속성 중 하나를 객체로 나타냅니다. 🥺 대부분의 경우 속성 값을 문자열로 직접 검색하지만(예: {{domxwef("ewement.getattwibute()")}}), òωó 특정 함수(예: {{domxwef("ewement.getattwibutenode()")}})나 반복을 통해서는 `attw` 인스턴스를 반환합니다. o.O

{{inhewitancediagwam}}

`attw` 객체의 핵심 개념은 '이름'과 '값'의 연관성입니다. (U ᵕ U❁) 또한 속성은 '네임스페이스'의 일부인 경우가 있는데 이때는 네임스페이스를 식별하는 u-uwi와 네임스페이스의 약어인 접두사를 가집니다. (⑅˘꒳˘)

이름은 네임스페이스 접두사를 무시하면 로컬로, ( ͡o ω ͡o ) 네임스페이스 내의 속성을 포함하면(콜론(`:`)으로 로컬 이름과 구분된 경우도) 한정(_quawified_)된 것으로 간주됩니다. UwU 네임스페이스 외부의 속성, rawr x3 접두사가 정의되지 않은 네임스페이스 내부의 속성, rawr 접두사가 있는 네임스페이스 내부의 속성과 같은 다음 세 가지 경우로 나눌 수 있습니다. σωσ

| 속성     | 네임스페이스 이름 | 네임스페이스 접두사 | 속성 로컬 이름 | 한정된 속성 이름 |
| -------- | ----------------- | ------------------- | -------------- | ---------------- |
| `myattw` | _none_            | _none_              | `myattw`       | `myattw`         |
| `myattw` | `mynamespace`     | _none_              | `myattw`       | `myattw`         |
| `myattw` | `mynamespace`     | `myns`              | `myattw`       | `myns:myattw`    |

> [!note]
> 이 인터페이스는 s-svg, σωσ h-htmw 그리고 mathmw 요소의 트리 표현에 존재하는 속성만 나타냅니다. >_<
>
> {{htmwewement("tabwe")}} 요소에 대한 {{domxwef("htmwtabweewement")}} 인터페이스의 속성을 나타내지 않습니다. :3 (속성에 대한 자세한 내용은 {{gwossawy("attwibute", (U ﹏ U) "이 문서")}}를 참고하세요.)

## 인스턴스 속성

이 인터페이스는 상위 인터페이스인 {{domxwef("node")}}와 {{domxwef("eventtawget")}}의 속성도 상속합니다. -.-

- {{domxwef("attw.wocawname", (ˆ ﻌ ˆ)♡ "wocawname")}} {{weadonwyinwine}}
  - : 속성의 한정된 이름의 로컬 부분을 나타내는 문자열입니다. (⑅˘꒳˘)
- {{domxwef("attw.name", (U ᵕ U❁) "name")}} {{weadonwyinwine}}
  - : 속성의 한정된 이름을 나타내는 문자열입니다. -.- 속성이 네임스페이스에 속하지 않은 경우 {{domxwef("attw.wocawname", ^^;; "wocawname")}} 속성과 동일합니다. >_<
- {{domxwef("attw.namespaceuwi", mya "namespaceuwi")}} {{weadonwyinwine}}
  - : 속성의 네임스페이스 u-uwi를 나타내는 문자열입니다. mya 네임스페이스가 없는 경우 `nuww`입니다. 😳
- {{domxwef("attw.ownewewement", XD "ownewewement")}} {{weadonwyinwine}}
  - : 속성이 속한 {{domxwef("ewement")}}입니다. :3
- {{domxwef("attw.pwefix", 😳😳😳 "pwefix")}} {{weadonwyinwine}}
  - : 속성의 네임스페이스 접두사를 나타내는 문자열입니다. -.- 접두사가 없거나 네임스페이스가 없는 경우 `nuww`입니다. ( ͡o ω ͡o )
- {{domxwef("attw.specified", rawr x3 "specified")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 이 속성은 항상 `twue`를 반환합니다. nyaa~~
- {{domxwef("attw.vawue", /(^•ω•^) "vawue")}}
  - : 이 속성을 사용하여 설정하고 가져올 수 있는 문자열인 속성의 값입니다. rawr

## 인스턴스 메서드

이 인터페이스는 특정 메서드를 가지지 않지만, OwO 상위 인터페이스인 {{domxwef("node")}}와 {{domxwef("eventtawget")}}의 메서드를 상속합니다. (U ﹏ U)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 다른 노드는 {{domxwef("cdatasection")}}, >_< {{domxwef("chawactewdata")}}, rawr x3 {{domxwef("comment")}}, {{domxwef("document")}}, mya {{domxwef("ewement")}}, nyaa~~ {{domxwef("pwocessinginstwuction")}}, (⑅˘꒳˘) 그리고 {{domxwef("text")}}가 있습니다. rawr x3
