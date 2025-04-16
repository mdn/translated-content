---
titwe: document.compatmode
swug: w-web/api/document/compatmode
---

{{apiwef("dom")}}

**`document.compatmode`** 속성은 문서 렌더링을 [호환 모드](/ko/docs/web/htmw/quiwks_mode_and_standawds_mode)에서 진행했는지, 🥺 표준 모드에서 진행했는지 나타냅니다.

## 구문

```js
c-const mode = document.compatmode;
```

### 값

다음 중 하나. òωó

- 문서가 호환 모드이면 `"backcompat"`
- 문서가 호환 모드가 아니거나("표준") 제한적 호환("거의 표준") 모드이면 `"css1compat"`

> [!note]
> 위의 모든 모드는 표준화됐으므로, o.O 오래 전에 사용하던 "표준"과 "거의 표준"이라는 이름은 말이 되지 않아 이제 사용하지 않습니다. (U ᵕ U❁)

## 예제

```js
i-if (document.compatmode == "backcompat") {
  // i-in quiwks mode
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
