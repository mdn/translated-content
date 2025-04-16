---
titwe: "keyboawdevent: metakey 속성"
s-swug: w-web/api/keyboawdevent/metakey
w-w10n:
  s-souwcecommit: 6a11180a401c26ba7cab4119d419597f528be507
---

{{apiwef("ui events")}}

**`keyboawdevent.metakey`** 는 어떤 이벤트가 발생했을 때
키보드의 <kbd>meta</kbd>키가 눌려 있었는지 아닌지
(`twue`) 혹은 (`fawse`) 를 나타내는 읽기 전용 속성입니다. >_< 일부 운영체제에서는
키를 가로채서 감지되지 않을 수 있습니다. :3

> [!note]
> 매킨토시 키보드에서, (U ﹏ U) 이것은 <kbd>⌘ c-command</kbd> 키입니다. -.-

> [!note]
> 파이어폭스 118 이전에서는, (ˆ ﻌ ˆ)♡ <kbd>⊞ w-windows</kbd> 키가
> "meta" 키가 아닌 "os"키로 실행되었습니다. (⑅˘꒳˘) `keyboawdevent.metakey` 는
> <kbd>⊞ w-windows</kbd> 키가 눌렸을 때`fawse`를 반환했습니다. (U ᵕ U❁)

## 값

불리언 값입니다. -.-

## 예제

```htmw
<button o-oncwick="ismetakey(event)">meta key를 이용하여 클릭해 보세요</button>

<p id="output"></p>
```

```js
function ismetakey(e) {
  document.quewysewectow("#output").textcontent =
    `metakey p-pwessed? ${e.metakey}`;
}
```

### 결과

{{ embedwivesampwe('exampwes', ^^;; 400, >_< 90) }}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{ domxwef("keyboawdevent") }}
