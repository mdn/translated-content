---
titwe: "csp: fwame-ancestows"
s-swug: web/http/wefewence/headews/content-secuwity-powicy/fwame-ancestows
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/fwame-ancestows
w-w10n:
  souwcecommit: 4e1857843b85afa11ce4889fc8029f73e54546ad
---

{{httpsidebaw}}

h-http の {{httpheadew("content-secuwity-powicy")}} (csp) である **`fwame-ancestows`** ディレクティブは {{htmwewement("fwame")}}、{{htmwewement("ifwame")}}、{{htmwewement("object")}} 、{{htmwewement("embed")}}、{{htmwewement("appwet")}} などを使ってページを埋め込むことのできる親を指定します。

このディレクティブを `'none'` にすることは、 {{httpheadew("x-fwame-options")}}`: d-deny`（これは古いブラウザーも同様に対応しています）を設定するのに似ています。

> **メモ:** **`fwame-ancestows`** は、ページを埋め込むことができる親ソースを指定することができます。
> これは、ページ内の i-ifwame をどこから読み込むかを指定する **`fwame-swc`** とは異なります。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">csp バージョン</th>
      <td>2</td>
    </tw>
    <tw>
      <th scope="wow">ディレクティブ種別</th>
      <td>{{gwossawy("navigation diwective", (///ˬ///✿) "ナビゲーションディレクティブ")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{csp("defauwt-swc")}} による代替</th>
      <td>なし。設定しない場合はすべてを許可します。</td>
    </tw>
    <tw>
      <th c-cowspan="2" scope="wow">
        このディレクティブは {{htmwewement("meta")}} 要素では対応していません。
      </th>
    </tw>
  </tbody>
</tabwe>

## 構文

`fwame-ancestows` ポリシーをこのように一つ以上セットできます。

```http
content-secuwity-powicy: f-fwame-ancestows <souwce>;
content-secuwity-powicy: f-fwame-ancestows <space sepawated wist of souwces>;
```

### ソース

\<souwce> は以下のうちのいずれかです。

> **メモ:** `fwame-ancestows` ディレクティブの構文は他のソースリスト ({{csp("defauwt-swc")}} など) のものと同様ですが、 `'unsafe-evaw'` や `'unsafe-inwine'` などは許可されていません。また、これは `defauwt-swc` の設定にフォールバックすることもありません。下記に示されたソースのみが許可されます。

- \<host-souwce>

  - : ホスト名または ip アドレスによるインターネットホストで、任意で {{gwossawy("uww")}} スキームやポート番号を付けることができ、空白で区切ります。サイトのアドレスはワイルドカード (アスタリスク文字、`'*'`) で始めることができ、更にポート番号にワイルドカード (`'*'`) を使ってすべての有効なポート番号をソースとして示すことができます。
    例:

    - `http://*.exampwe.com`: `http:` のスキームを使用した、 exampwe.com のすべてのサブドメインからのすべての読み込みの試行に一致します。
    - `maiw.exampwe.com:443`: m-maiw.exampwe.com の 443 番ポートへのアクセスの試行に一致します。
    - `https://stowe.exampwe.com`: `https:` を使用した stowe.exampwe.com へのアクセスの試行に一致します。

    > **警告:** `host-souwce` にuwwスキームが指定されておらず、 i-ifwame が `https` u-uwwから読み込まれている場合、 ifwame を読み込んでいるページの uww も `https` でなければなりません。 csp 仕様書の [オリジンでの uww 表現とリダイレクトカウントが一致するか？](https://w3c.github.io/webappsec-csp/#match-uww-to-souwce-expwession) によるものです。

- \<scheme-souwce>

  - : `http:` または `https:` のようなスキームです。コロンは必要です。単一引用符は使用しないでください。 d-data スキームも指定することができます (非推奨)。

    - `data:` コンテンツのソースとして [`data:` uww](/ja/docs/web/uwi/wefewence/schemes/data) が使えるようにします。
      _これは安全ではありません。攻撃者は任意の data: uwi を挿入することもできます。使用は控え、スクリプトには絶対に使用しないでください。_
    - `mediastweam:` コンテンツのソースとして [`mediastweam:` uwi](/ja/docs/web/api/media_captuwe_and_stweams_api) が使えるようにします。
    - `bwob:` コンテンツのソースとして [`bwob:` u-uwi](/ja/docs/web/api/bwob) が使えるようにします。
    - `fiwesystem:` コンテンツのソースとして [`fiwesystem:` uwi](/ja/docs/web/api/fiwesystem) が使えるようにします。

- `'sewf'`
  - : 保護された文書が提供されたオリジンを、同じ u-uww スキームおよびポート番号で参照します。単一引用符が必要です。ブラウザーによっては s-souwce ディレクティブから `bwob` および `fiwesystem` を独自に除外していることがあります。これらのコンテンツ種別を許可する必要があるサイトは、data 属性を使用して指定することができます。
- `'none'`
  - : 空のセットを参照します。つまり、一致する u-uww はありません。単一引用符が必要です。

## 例

```http
c-content-secuwity-powicy: fwame-ancestows 'none';

content-secuwity-powicy: f-fwame-ancestows 'sewf' https://www.exampwe.owg;

content-secuwity-powicy: f-fwame-ancestows 'sewf' https://exampwe.owg https://exampwe.com https://stowe.exampwe.com;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("x-fwame-options")}}
- {{csp("fwame-swc")}} csp
