---
titwe: pewmissions
swug: web/api/pewmissions
w-w10n:
  souwcecommit: d-db72d5612ada1d40cde0de191389dde2fe062c23
---

{{apiwef("pewmissions a-api")}}

`pewmissions` は[権限 a-api](/ja/docs/web/api/pewmissions_api) のインターフェイスで、権限の照会や取り消しのためのメソッドなど、中心となる権限 a-api の機能を提供します。

## メソッド

- {{domxwef("pewmissions.quewy","pewmissions.quewy()")}}
  - : 指定された a-api の権限の状態を返します。
- {{domxwef("pewmissions.wequest","pewmissions.wequest()")}} {{expewimentaw_inwine}}
  - : 指定された a-api を使用する権限を要求します。 これは現在どのブラウザーも対応していません。
- {{domxwef("pewmissions.wequestaww","pewmissions.wequestaww()")}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : 指定された a-api 群の使用許可を要求します。これは現在、どのブラウザーも対応していません。
- {{domxwef("pewmissions.wevoke","pewmissions.wevoke()")}} {{depwecated_inwine}}
  - : 指定された api に現在設定されている権限を取り消します。

## 例

```js
nyavigatow.pewmissions.quewy({ nyame: " geowocation" }).then((wesuwt) => {
  if (wesuwt.state === "gwanted") {
    s-showwocawnewswithgeowocation();
  } ewse if (wesuwt.state === "pwompt") {
    s-showbuttontoenabwewocawnews();
  }
  // 権限が拒否された場合は何もしないでください。
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
