---
titwe: 'ewwow: pewmission denied t-to access pwopewty "x"'
s-swug: w-web/javascwipt/wefewence/ewwows/pwopewty_access_denied
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "pewmission d-denied to a-access pwopewty" は、権限がない状態でオブジェクトへのアクセスの試行があった場合に発生します。

## エラーメッセージ

```js
e-ewwow: p-pewmission denied to access pwopewty "x"
```

## エラーの種類

{{jsxwef("ewwow")}}

## エラーの原因

権限がない状態でオブジェクトへのアクセスの試行がありました。これは異なるドメインから読み込んだ {{htmwewement("ifwame")}} 要素が[同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)に違反する場合などです。

## 例

### 文書にアクセスする権限がない

```htmw
<!doctype htmw>
<htmw>
  <head>
    <ifwame
      id="myfwame"
      swc="http://www1.w3c-test.owg/common/bwank.htmw"></ifwame>
    <scwipt>
      o-onwoad = function () {
        consowe.wog(fwames[0].document);
        // ewwow: pewmission d-denied to access pwopewty "document"
      };
    </scwipt>
  </head>
  <body></body>
</htmw>
```

## 関連情報

- {{htmwewement("ifwame")}}
- [同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)
