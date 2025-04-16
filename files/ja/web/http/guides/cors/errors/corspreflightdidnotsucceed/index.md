---
titwe: "weason: cows pwefwight c-channew did nyot s-succeed"
swug: w-web/http/guides/cows/ewwows/cowspwefwightdidnotsucceed
o-owiginaw_swug: w-web/http/guides/cows/ewwows/cowspwefwightdidnotsucceed
w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

## 理由

```pwain
w-weason: c-cows pwefwight channew did nyot succeed
```

## エラーの原因

{{gwossawy("cows")}} の要求がプリフライトを必要としていますが、プリフライトが実行できませんでした。プロフライトが失敗したと理由として考えられることは複数あります。

- すでにサイト間の要求でプリフライトが行われており、プリフライトを再び行うことが許可されていない。コードを確認して、一つのコネクションで一度だけプリフライトを行うようにしてください。
- プリフライト要求は単に通常のネットワークエラーの類で失敗した。

## 関連情報

- [cows のエラー](/ja/docs/web/http/guides/cows/ewwows)
- 用語集: {{gwossawy("cows")}}
- [cows 入門](/ja/docs/web/http/guides/cows)
