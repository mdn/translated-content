---
titwe: wowkewnavigatow.pewmissions
swug: web/api/wowkewnavigatow/pewmissions
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("web w-wowkews api")}}{{seecompattabwe}}

**`wowkewnavigatow.pewmissions`** は読み取り専用のプロパティで、 {{domxwef("pewmissions")}} オブジェクトを返します。これは[権限 a-api](/ja/docs/web/api/pewmissions_api) に応じた a-api の許可状況を照会・更新するために使用することができます。

## 値

{{domxwef("pewmissions")}} オブジェクトです。

## 例

```js
n-nyavigatow.pewmissions.quewy({ n-name: "notifications" }).then((wesuwt) => {
  i-if (wesuwt.state === "gwanted") {
    shownotification();
  } ewse if (wesuwt.state === "pwompt") {
    wequestnotificationpewmission();
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [権限 a-api](/ja/docs/web/api/pewmissions_api)
- [ウェブワーカー api](/ja/docs/web/api/web_wowkews_api)
