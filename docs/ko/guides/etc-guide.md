# 기타 지침

## code formatter

번역 기여자의 편의성을 위해 code formatter를 사용할 수 있습니다. 강제 사항은 아니지만 통일성을 위해 기준을 아래와 같이 정했습니다.

code formatter의 한 종류인 Prettier의 기본 설정을 따르며, 추가적으로 `printWidth: 120`, `semi: false`, `singleQuote: true`옵션이 추가됩니다. [참고 PR](https://github.com/mdn/translated-content/pull/1065)

## All hidden paragraphs about Browser Compatibility can be deleted

issue: [#1008](https://github.com/mdn/translated-content/issues/1008)

다음은 `en-us locale`에 대한 기본 compatibility 항목입니다. 현재 `ko locale`에는 여러 번역 문구들이 있습니다. 이 문구들은 모두 삭제돼야합니다.

1차적으로 <https://gist.github.com/hochan222/ad801f7a6325e2b2e391ab634d6d18ce> 로 30가지 경우에 대해 [PR 1176](https://github.com/mdn/translated-content/pull/1176) 에서 처리했으며, 나머지 경우에 대해 정규표현식을 작성해 삭제하거나 발견시 삭제 바랍니다.

### 기본 항목

- 1

```html
<div class="hidden">The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out <a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a> and send us a pull request.</div>
```

- 2

```html
<div class="hidden">
<p>The compatibility table in this page is generated from structured data. If you'd like to contribute to the data, please check out <a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a> and send us a pull request.</p>
</div>
```

- 3

```html
<p class="hidden">The compatibility table in this page is generated from structured data.
  If you'd like to contribute to the data, please check out <a
    href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>
  and send us a pull request.</p>
```
