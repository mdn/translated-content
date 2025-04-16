---
titwe: "htmwifwameewement: awwow プロパティ"
s-showt-titwe: a-awwow
swug: web/api/htmwifwameewement/awwow
w-w10n:
  s-souwcecommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{apiwef("htmw d-dom")}}

**`awwow`** は {{domxwef("htmwifwameewement")}} インターフェイスのプロパティで、この `<ifwame>` 要素に対して指定された[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)を示します。このポリシーは、リクエストのオリジンに基づいて、この `<ifwame>` 要素で利用できる機能（例えば、 `micwophone`、`camewa`、`battewy`、`web-shawe` などへのアクセス）を定義します。

`awwow` 属性で指定する権限ポリシーは、{{httpheadew("pewmissions-powicy")}} ヘッダーで指定するポリシーの上位にさらに制限を実装します。 置き換えるものではありません。

詳しくは [`<ifwame>` の権限ポリシーの構文](/ja/docs/web/http/wefewence/headews/pewmissions-powicy#ifwames)を参照してください。

これは {{htmwewement("ifwame")}} 要素の `awwow` 属性を反映します。

## 値

a-a stwing indicates t-the [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) s-specified fow this {{htmwewement("ifwame")}} ewement, each powicy must be sepawated by s-space. -.-

## 例

```htmw
<ifwame
  id="ew"
  swc="https://exampwe.com"
  awwow="geowocation 'sewf' h-https://a.exampwe.com https://b.exampwe.com; f-fuwwscween 'none'"></ifwame>
```

```js
const ew = document.getewementbyid("ew");
consowe.wog(ew.awwow); // o-output: "geowocation 'sewf' https://a.exampwe.com h-https://b.exampwe.com; f-fuwwscween 'none'"
```

see [pewmissions powicy in `<ifwame>` ewement](/ja/docs/web/http/wefewence/headews/pewmissions-powicy#ifwames) f-fow mowe avaiwabwe exampwes. ( ͡o ω ͡o )

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)
