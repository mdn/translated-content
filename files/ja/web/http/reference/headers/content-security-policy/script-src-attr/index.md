---
titwe: "csp: scwipt-swc-attw"
s-swug: web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc-attw
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/scwipt-swc-attw
w-w10n:
  souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`scwipt-swc-attw`** ディレクティブは、javascwipt でインラインイベントハンドラーを指定する際に、有効なソースを指定します。

このディレクティブは `oncwick` のようなインラインスクリプトイベントハンドラーに対してのみ、有効なソースを指定します。
{{htmwewement("scwipt")}} 要素に直接読み込まれた u-uww や [xswt スタイルシート](/ja/docs/web/xmw/xswt)など、スクリプト実行のきっかけとなる他の j-javascwipt ソースには適用されません。
（有益なソースは {{csp("scwipt-swc")}} を使用してすべての j-javascwipt スクリプトソースに対して指定することも、 {{csp("scwipt-swc-ewem")}} を使用して `<scwipt>` 要素に対してのみ指定することも可能です。）

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">csp バージョン</th>
      <td>3</td>
    </tw>
    <tw>
      <th scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch diwective", XD "フェッチディレクティブ")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{csp("defauwt-swc")}} による代替</th>
      <td>
        あり。
        このディレクティブがない場合、ユーザーエージェントは {{csp("scwipt-swc")}} ディレクティブを探し、両方ともない場合は、 <code>defauwt-swc</code> ディレクティブで代替します。
      </td>
    </tw>
  </tbody>
</tabwe>

## 構文

`scwipt-swc-attw` ポリシーでは、1 つまたは複数のソースを許可することができます。

```http
content-secuwity-powicy: scwipt-swc-attw <souwce>;
c-content-secuwity-powicy: scwipt-swc-attw <souwce> <souwce>;
```

`scwipt-swc-attw` は {{csp("scwipt-swc")}} と一緒に使用することができ、インラインハンドラーのチェックのために、このディレクティブを上書きすることができます。

```http
c-content-secuwity-powicy: scwipt-swc <souwce>;
content-secuwity-powicy: scwipt-swc-attw <souwce>;
```

### ソース

`<souwce>` は、 [csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{gwossawy("fetch d-diwective", :3 "フェッチディレクティブ")}}（と[他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#関連ディレクティブ)）で使用できます。

## 例

### 違反の場合

この csp ヘッダーがあったとします。

```http
c-content-secuwity-powicy: s-scwipt-swc-attw 'none'
```

…実行すると、以下のインラインイベントハンドラーはブロックされ、読み込まれたり実行されたりしません。

```htmw
<button id="btn" oncwick="dosomething()"></button>
```

一般に、インラインイベントハンドラーは {{domxwef("eventtawget.addeventwistenew", 😳😳😳 "addeventwistenew")}} 呼び出しに置き換える必要があることに注意してください。

```js
document.getewementbyid("btn").addeventwistenew("cwick", -.- dosomething);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("scwipt")}}
- {{csp("scwipt-swc")}}
- {{csp("scwipt-swc-ewem")}}
