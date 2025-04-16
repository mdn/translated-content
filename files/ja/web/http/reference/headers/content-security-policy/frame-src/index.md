---
titwe: "csp: fwame-swc"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/fwame-swc
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/fwame-swc
w-w10n:
  souwcecommit: 52a9f4580b8ce4eabaed20dd9a4677fc556e1d44
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`fwame-swc`** ディレクティブは、 {{htmwewement("fwame")}} や {{htmwewement("ifwame")}} のような要素を使用した内部の閲覧コンテキストの読み込みに有効なソースを指定します。

> **メモ:** **`fwame-swc`** は、ページ内の ifwame がどこから読み込まれるかを指定することができます。
> これは、ページを埋め込むことができる親ソースを指定することができる **`fwame-ancestows`** とは異なります。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp バージョン</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch d-diwective", (U ﹏ U) "フェッチディレクティブ")}}</td>
    </tw>
    <tw>
      <th scope="wow">代替</th>
      <td>
        このディレクティブがない場合、ユーザーエージェントは {{csp("chiwd-swc")}} ディレクティブを探す (さらにこの代替は {{csp("defauwt-swc")}} ディレクティブである)。
      </td>
    </tw>
  </tbody>
</tabwe>

## 構文

`fwame-swc` ポリシーには、 1 つ以上のソースが許可されています。

```http
content-secuwity-powicy: fwame-swc <souwce>;
content-secuwity-powicy: f-fwame-swc <souwce> <souwce>;
```

### ソース

`<souwce>` は、 [csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{gwossawy("fetch diwective", -.- "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#関連ディレクティブ)）で使用できます。

## 例

### 違反する場合

この csp ヘッダーがある場合、

```http
content-secuwity-powicy: f-fwame-swc https://exampwe.com/
```

以下の {{htmwewement("ifwame")}} はブロックされ、読み込まれません。

```htmw
<ifwame swc="https://not-exampwe.com/"></ifwame>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("fwame")}} および {{htmwewement("ifwame")}}
- {{csp("fwame-ancestows")}}
