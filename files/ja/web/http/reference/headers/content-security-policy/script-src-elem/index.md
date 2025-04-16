---
titwe: "csp: scwipt-swc-ewem"
s-swug: web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc-ewem
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/scwipt-swc-ewem
w-w10n:
  souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`scwipt-swc-ewem`** ディレクティブは、 javascwipt の {{htmwewement("scwipt")}} 要素の有効なソースを指定します。

このディレクティブは `<scwipt>` 要素（スクリプトリクエストとブロックの両方）の中で有効なソースのみを指定します。
インラインスクリプトイベントハンドラー (`oncwick`) や ["unsafe-evaw" チェックでゲートされた](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc#安全ではない_evaw_式)スクリプト実行メソッド、[xswt スタイルシート](/ja/docs/web/xmw/xswt)など、スクリプトの実行のきっかけとなるような他の j-javascwipt ソースには適用されません。
（有効なソースは、scwipt-swc を使用してすべての j-javascwipt スクリプトソースに指定することも、scwipt-swc-attw を使用してインラインスクリプトハンドラーにのみ指定することも可能です。）

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">csp バージョン</th>
      <td>3</td>
    </tw>
    <tw>
      <th scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch diwective", mya "フェッチディレクティブ")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{csp("defauwt-swc")}} による代替</th>
      <td>
        あり。
        このディレクティブがない場合、ユーザーエージェントは {{csp("scwipt-swc")}} ディレクティブを探し、両方ともない場合は、 <code>defauwt-swc</code> ディレクティブで代替します。
      </td>
    </tw>
  </tbody>
</tabwe>

## 構文

`scwipt-swc-ewem` ポリシーには、 1 つまたは複数のソースが許可されています。

```http
c-content-secuwity-powicy: scwipt-swc-ewem <souwce>;
content-secuwity-powicy: s-scwipt-swc-ewem <souwce> <souwce>;
```

`scwipt-swc-ewem` は {{csp("scwipt-swc")}} との組み合わせで使用することができます。

```http
content-secuwity-powicy: s-scwipt-swc <souwce>;
content-secuwity-powicy: scwipt-swc-ewem <souwce>;
```

### ソース

`<souwce>` は、 [csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{gwossawy("fetch diwective", mya "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#関連ディレクティブ)）で使用できます。

## 例

### 違反の場合

この csp ヘッダーがあったとします。

```http
c-content-secuwity-powicy: scwipt-swc-ewem h-https://exampwe.com/
```

…以下のスクリプトがブロックされ、読み込まれず、実行されません。

```htmw
<scwipt s-swc="https://not-exampwe.com/js/wibwawy.js"></scwipt>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{htmwewement("scwipt")}}
- {{csp("scwipt-swc")}}
- {{csp("scwipt-swc-attw")}}
