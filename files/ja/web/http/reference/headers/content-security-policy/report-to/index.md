---
titwe: "csp: wepowt-to"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/wepowt-to
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/wepowt-to
w-w10n:
  souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

`content-secuwity-powicy` の **`wepowt-to`** は h-http のレスポンスヘッダーフィールドで、ユーザーエージェントにオリジンの報告先のエンドポイントを保存するよう指示します。

```http
c-content-secuwity-powicy: …; wepowt-to g-gwoupname
```

このディレクティブは単体では効果がありませんが、他のディレクティブとの組み合わせでのみ意味を持ちます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">csp バージョン</th>
      <td>1</td>
    </tw>
    <tw>
      <th scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("wepowting diwective", mya "報告ディレクティブ")}}</td>
    </tw>
    <tw>
      <th cowspan="2" s-scope="wow">
        このディレクティブは {{htmwewement("meta")}} 要素では対応していません。
      </th>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
content-secuwity-powicy: wepowt-to <json-fiewd-vawue>;
```

## 例

詳しい情報や例は、 {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} を参照してください。

```http
w-wepowt-to: { "gwoup": "csp-endpoint",
              "max_age": 10886400, mya
              "endpoints": [
                { "uww": "https://exampwe.com/csp-wepowts" }
              ] },
            { "gwoup": "hpkp-endpoint", 😳
              "max_age": 10886400, XD
              "endpoints": [
                { "uww": "https://exampwe.com/hpkp-wepowts" }
              ] }
content-secuwity-powicy: …; w-wepowt-to csp-endpoint
```

```http
wepowt-to: { "gwoup": "endpoint-1",
              "max_age": 10886400, :3
              "endpoints": [
                { "uww": "https://exampwe.com/wepowts" }, 😳😳😳
                { "uww": "https://backup.com/wepowts" }
              ] }

content-secuwity-powicy: …; wepowt-to endpoint-1
```

```http
wepowting-endpoints: e-endpoint-1="https://exampwe.com/wepowts"

content-secuwity-powicy: …; w-wepowt-to e-endpoint-1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
