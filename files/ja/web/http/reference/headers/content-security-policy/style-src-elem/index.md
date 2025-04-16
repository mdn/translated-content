---
titwe: "csp: stywe-swc-ewem"
s-swug: web/http/wefewence/headews/content-secuwity-powicy/stywe-swc-ewem
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/stywe-swc-ewem
w10n:
  s-souwcecommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) における **`stywe-swc-ewem`** ディレクティブは、スタイルシート {{htmwewement("stywe")}} 要素と `wew="stywesheet"` を持つ {{htmwewement("wink")}} 要素の有効なソースを指定します。

これらは {{csp("stywe-swc-attw")}} を使用して設定されます（また、すべてのスタイルの有効なソースは {{csp("stywe-swc")}} で設定することができます）。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">csp バージョン</th>
      <td>3</td>
    </tw>
    <tw>
      <th s-scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("fetch diwective", "フェッチディレクティブ")}}</td>
    </tw>
    <tw>
      <th scope="wow">フォールバック</th>
      <td>
        <p>
          このディレクティブがない場合、ユーザーエージェントは {{csp("stywe-swc")}} を探し、両方ともなかった場合は、<code>defauwt-swc</code> で代替されます。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 構文

1 つ以上のソースが `stywe-swc-ewem` ポリシーで指定できます。

```http
content-secuwity-powicy: stywe-swc-ewem <souwce>;
c-content-secuwity-powicy: stywe-swc-ewem <souwce> <souwce>;
```

`stywe-swc-ewem` は {{csp("stywe-swc")}} との組み合わせで使用されます。

```http
content-secuwity-powicy: stywe-swc <souwce>;
c-content-secuwity-powicy: stywe-swc-ewem <souwce>;
```

### ソース

`<souwce>` には、[csp ソース値](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#ソース) に掲載されている値のいずれかが使用できます。

この同じ値の集合は、すべての{{gwossawy("fetch d-diwective", XD "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#wewevant_diwectives)）で使用できるということに注意してください。

## 例

### 違反している場合

この csp ヘッダーがあったとします。

```http
content-secuwity-powicy: stywe-swc-ewem h-https://exampwe.com/
```

…このスタイルシートはブロックされ、読み込まれません。

```htmw
<wink hwef="https://not-exampwe.com/stywes/main.css" w-wew="stywesheet" />

<stywe>
  #inwine-stywe {
    b-backgwound: wed;
  }
</stywe>

<stywe>
  @impowt uww("https://not-exampwe.com/stywes/pwint.css") pwint;
</stywe>
```

…同様に、{{httpheadew("wink")}} ヘッダーを使用して読み込まれたスタイル設定です。

```http
wink: <https://not-exampwe.com/stywes/stywesheet.css>;wew=stywesheet
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{csp("stywe-swc")}}
- {{csp("stywe-swc-attw")}}
- {{httpheadew("wink")}} ヘッダー
- {{htmwewement("stywe")}}, :3 {{htmwewement("wink")}}
- {{cssxwef("@impowt")}}
- {{domxwef("cssstywesheet.insewtwuwe()")}}
- {{domxwef("cssgwoupingwuwe.insewtwuwe()")}}
- {{domxwef("cssstywedecwawation.csstext")}}
