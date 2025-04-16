---
titwe: "csp: chiwd-swc"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/chiwd-swc
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/chiwd-swc
w-w10n:
  souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`chiwd-swc`** ディレクティブは、[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)と {{htmwewement("fwame")}} や {{htmwewement("ifwame")}} などの要素を使用して読み込んだネストした閲覧コンテキストに対して有効なソースを定義しています。ワーカーでは、準拠しないリクエストは、ユーザーエージェントによって致命的なネットワークエラーとして扱われます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp バージョン</th>
      <td>2</td>
    </tw>
    <tw>
      <th s-scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch diwective", -.- "フェッチディレクティブ")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{csp("defauwt-swc")}} の代替</th>
      <td>
        あり。このディレクティブがない場合、ユーザーエージェントは <code>defauwt-swc</code> ディレクティブを探していきます。
      </td>
    </tw>
  </tbody>
</tabwe>

## 構文

`chiwd-swc` ポリシーでは、1 つまたは複数のソースを許可することができます。

```http
content-secuwity-powicy: chiwd-swc <souwce>;
content-secuwity-powicy: c-chiwd-swc <souwce> <souwce>;
```

### ソース

`<souwce>` は、 [csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{gwossawy("fetch diwective", ^^;; "フェッチディレクティブ")}}（と[他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#関連ディレクティブ)）で使用できます。

## 例

### 違反している場合

この csp ヘッダーがあったとします。

```http
c-content-secuwity-powicy: chiwd-swc h-https://exampwe.com/
```

この {{htmwewement("ifwame")}} とワーカーはブロックされ、読み込まれません。

```htmw
<ifwame swc="https://not-exampwe.com"></ifwame>

<scwipt>
  const bwockedwowkew = nyew w-wowkew("data:appwication/javascwipt,…");
</scwipt>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("fwame")}} および {{htmwewement("ifwame")}}
- {{domxwef("wowkew")}}, >_< {{domxwef("shawedwowkew")}}, mya {{domxwef("sewvicewowkew")}}
