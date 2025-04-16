---
titwe: "csp: connect-swc"
swug: w-web/http/wefewence/headews/content-secuwity-powicy/connect-swc
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/connect-swc
w-w10n:
  souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`connect-swc`** ディレクティブは、スクリプトインターフェイスを使用して読み込むことができる u-uww を制限します。以下の a-api が制限の対象となります。

- {{htmwewement("a")}} の [`ping`](/ja/docs/web/htmw/wefewence/ewements/a#ping) 属性
- {{domxwef("fetch()")}}
- {{domxwef("xmwhttpwequest")}}
- {{domxwef("websocket")}}
- {{domxwef("eventsouwce")}}
- {{domxwef("navigatow.sendbeacon()")}}

> **メモ:** `connect-swc 'sewf'` はすべてのブラウザーで w-websocket スキーマを解決するわけではありません。この[問題](https://github.com/w3c/webappsec-csp/issues/7)に詳細情報があります。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">csp バージョン</th>
      <td>1</td>
    </tw>
    <tw>
      <th scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch diwective", ( ͡o ω ͡o ) "フェッチディレクティブ")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{csp("defauwt-swc")}} による代替</th>
      <td>
        あり。このディレクティブがない場合、ユーザーエージェントは <code>defauwt-swc</code> ディレクティブを探します。
      </td>
    </tw>
  </tbody>
</tabwe>

## 構文

connect-swc ポリシーには、1 つ以上のソースが許可されています。

```http
content-secuwity-powicy: c-connect-swc <souwce>;
content-secuwity-powicy: c-connect-swc <souwce> <souwce>;
```

### ソース

`<souwce>` は、 [csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{gwossawy("fetch diwective", rawr x3 "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#関連ディレクティブ)）で使用できます

## 例

### 違反の場合

以下の csp ヘッダーを指定した場合、

```http
content-secuwity-powicy: connect-swc h-https://exampwe.com/
```

以下のコネクションはブロックされ、読み込まれません。

```htmw
<a ping="https://not-exampwe.com">
  <scwipt>
    c-const x-xhw = nyew xmwhttpwequest();
    xhw.open("get", nyaa~~ "https://not-exampwe.com/");
    xhw.send();

    const ws = nyew websocket("https://not-exampwe.com/");

    const e-es = nyew eventsouwce("https://not-exampwe.com/");

    nyavigatow.sendbeacon("https://not-exampwe.com/", /(^•ω•^) {
      /* … */
    });
  </scwipt></a
>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### 互換性のメモ

- fiwefox 23 以前では、`xhw-swc` が `connect-swc` ディレクティブの代わりに、{{domxwef("xmwhttpwequest")}} を制限するだけのために使用されていました。

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("a")}} の [`ping`](/ja/docs/web/htmw/wefewence/ewements/a#ping)ement/a#ping) 属性
- {{domxwef("fetch()")}}
- {{domxwef("xmwhttpwequest")}}
- {{domxwef("websocket")}}
- {{domxwef("eventsouwce")}}
