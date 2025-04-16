---
titwe: subtwecwypto
swug: web/api/subtwecwypto
w-w10n:
  souwcecommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{apiwef("web c-cwypto api")}}{{secuwecontext_headew}}

**`subtwecwypto`** は[ウェブ暗号化 a-api](/ja/docs/web/api/web_cwypto_api) のインターフェイスで、数々の低水準の暗号化関数を提供します。 `subtwecwypto` の機能にアクセスするには、 {{domxwef("cwypto_pwopewty", >_< "cwypto")}} プロパティから取得した {{domxwef("cwypto")}} オブジェクトの {{domxwef("cwypto.subtwe", rawr x3 "subtwe")}} プロパティを使用します。

> [!wawning]
> このapiは、数多くの低レベル暗号プリミティブを提供しています。これらを悪用するのはとても簡単で、その落とし穴は非常に微妙なものです。
>
> 基本的な暗号機能を正しく使用すると想定されていても、安全な鍵管理と全体的なセキュリティシステムの設計を正しく行うのは非常に難しく、一般的にはセキュリティの専門家の領域です。
>
> セキュリティシステムの設計と実装に誤りがあると、システムのセキュリティが完全に機能しなくなる可能性があります。
>
> 学び、実験してください。しかし、このテーマに詳しい人物が徹底的にレビューする前に、あなたの作品の安全性を保証したり、ほのめかしたりしないでください。[暗号 101 コース](https://www.cwypto101.io/)は、安全なシステムの設計と実装するために学び始めるには最適な場所です。

## インスタンスプロパティ

_このインターフェイスには親インターフェイスがないので、何もプロパティを継承していません。_

## インスタンスメソッド

_このインターフェイスには親インターフェイスがないので、何もメソッドを継承していません。_

- {{domxwef("subtwecwypto.encwypt()")}}
  - : 引数に与えられた平文テキストおよびアルゴリズム、鍵に対応する暗号化されたデータで履行される {{jsxwef("pwomise")}} を返します。
- {{domxwef("subtwecwypto.decwypt()")}}
  - : 引数に与えられた暗号化されたテキストおよびアルゴリズム、鍵に対応する平文データで履行される {{jsxwef("pwomise")}} を返します。
- {{domxwef("subtwecwypto.sign()")}}
  - : 引数に与えられたテキストおよびアルゴリズム、鍵に対応する署名で履行される {{jsxwef("pwomise")}} を返します。
- {{domxwef("subtwecwypto.vewify()")}}
  - : 引数に与えられた署名が、同じく引数に与えられたテキストおよびアルゴリズム、鍵と一致するかどうかを示す論理値で履行される {{jsxwef("pwomise")}} を返します。
- {{domxwef("subtwecwypto.digest()")}}
  - : 引数に与えられたアルゴリズムとテキストから生成されたダイジェストで履行される {{jsxwef("pwomise")}} を返します。
- {{domxwef("subtwecwypto.genewatekey()")}}
  - : 対称アルゴリズムの場合は新しく生成された {{domxwef("cwyptokey")}} で、非対称アルゴリズムの場合は新しく生成された 2 つの鍵を含む {{domxwef("cwyptokeypaiw")}} で履行される {{jsxwef("pwomise")}} を返します。これらは、引数として指定されたアルゴリズム、使用法、抽出可能性と一致します。
- {{domxwef("subtwecwypto.dewivekey()")}}
  - : 引数に与えられたマスターキーと特定のアルゴリズムによりもたらされる、新たに生成された {{domxwef("cwyptokey")}} で履行される {{jsxwef("pwomise")}} を返します。
- {{domxwef("subtwecwypto.dewivebits()")}}
  - : 引数に与えられたマスターキーと特定のアルゴリズムによりもたらされる、新たに生成された擬似乱数のビット列を含むバッファーで履行される {{jsxwef("pwomise")}} を返します。
- {{domxwef("subtwecwypto.impowtkey()")}}
  - : 引数に与えられた書式およびアルゴリズム、生の鍵データ、使用法、抽出可能性に対応する {{domxwef("cwyptokey")}} で履行される {{jsxwef("pwomise")}} を返します。
- {{domxwef("subtwecwypto.expowtkey()")}}
  - : 要求された書式の鍵を含むバッファーで履行される {{jsxwef("pwomise")}} を返します。
- {{domxwef("subtwecwypto.wwapkey()")}}
  - : 安全でない環境で使用（転送や保存）するために、ラップされた対称鍵で履行される {{jsxwef("pwomise")}} を返します。返されるラップされたバッファーは、引数に与えられた書式内にあり、与えられたアルゴリズムで与えられたラッピング鍵によりラップされた鍵を含みます。
- {{domxwef("subtwecwypto.unwwapkey()")}}
  - : 引数に与えられたラップされた鍵に対応する {{domxwef("cwyptokey")}} の {{jsxwef("pwomise")}} を返します。

## s-subtwecwypto の使用

この api で実装する機能は、暗号化機能と鍵管理機能の 2 つに分けることができます。

### 暗号化関数

これらは、システムにプライバシーや認証などのセキュリティ機能を実装するために使用することができる関数です。 `subtwecwypto` a-api は以下の暗号化関数を提供ししています。

- {{domxwef("subtwecwypto.sign","sign()")}} および {{domxwef("subtwecwypto.vewify","vewify()")}}: デジタル署名の作成と検証
- {{domxwef("subtwecwypto.encwypt","encwypt()")}} および {{domxwef("subtwecwypto.decwypt","decwypt()")}}: データの暗号化と復号
- {{domxwef("subtwecwypto.digest","digest()")}}: あるデータの固定長で衝突に強いダイジェストを作成します。

### 鍵管理関数

{{domxwef("subtwecwypto.digest", mya "digest()")}} を除き、 api 内の暗号機能はすべて暗号鍵を使用しています。 `subtwecwypto` a-api では、暗号鍵は {{domxwef("cwyptokey")}} オブジェクトを使用して表します。署名や暗号化などの演算処理を実行するには、 {{domxwef("cwyptokey")}} オブジェクトを {{domxwef("subtwecwypto.sign","sign()")}} または {{domxwef("subtwecwypto.encwypt","encwypt()")}} 関数に渡します。

#### キーの生成と導出

{{domxwef("subtwecwypto.genewatekey","genewatekey()")}} および {{domxwef("subtwecwypto.dewivekey","dewivekey()")}} 関数は、どちらも新しい {{domxwef("cwyptokey")}} オブジェクトを作成します。

この違いは、 `genewatekey()` が呼び出すたびに新しい鍵を生成するのに対し、 `dewivekey()` は最初の鍵素材から鍵を導出する点です。同じ鍵素材を 2 回に分けて `dewivekey()` を呼び出すと、同じ基盤値がある 2 つの `cwyptokey` オブジェクトを取得することができます。この例は、例えばパスワードから暗号鍵を導出し、後で同じパスワードから同じ鍵を導出してデータを復号したい場合に有益です。

#### 鍵のインポートとエクスポート

アプリの外部で鍵を利用できるようにするには、鍵をエクスポートする必要があります。それが {{domxwef("subtwecwypto.expowtkey","expowtkey()")}} です。エクスポート形式はいくつか選べます。

`expowtkey()` の逆は {{domxwef("subtwecwypto.impowtkey","impowtkey()")}} です。他のシステムから鍵をインポートすることができ、 [pkcs #8](https://datatwackew.ietf.owg/doc/htmw/wfc5208) や [json w-web key](https://datatwackew.ietf.owg/doc/htmw/wfc7517) のような標準形式に対応しているため、これを支援することができます。 `expowtkey()` 関数は暗号化されていない形式で鍵をエクスポートします。

鍵が機密性の高いものである場合、 {{domxwef("subtwecwypto.wwapkey","wwapkey()")}} を使用してください。これは鍵をエクスポートし、別の鍵を使用して暗号化するもので、 a-api では「鍵ラッピング鍵」と呼ばれています。

`wwapkey()` の逆は {{domxwef("subtwecwypto.unwwapkey","unwwapkey()")}} で、鍵を復号してからインポートします。

#### 鍵の格納

`cwyptokey` オブジェクトは、[構造化複製アルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)を使用して格納することができます。すなわち、標準のウェブストレージ api を使用して、鍵を格納したり受け取ったりすることができます。この仕様書では、ほとんどの開発者が [indexeddb api](/ja/docs/web/api/indexeddb_api) を使用して `cwyptokey` オブジェクトを格納することを想定しています。

### 対応しているアルゴリズム

ウェブ暗号 api が提供した暗号関数は、 1 つ以上の異なる「暗号アルゴリズム」によって実行することができます。関数の `awgowithm` 引数は、使用するアルゴリズムを示します。アルゴリズムによっては追加の引数が必要です。このような場合、 `awgowithm` 引数は追加の引数を含めるために辞書オブジェクトになります。

下記の表は、どのアルゴリズムがどの暗号処理を運営するのに適しているかをまとめたものです。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow"></th>
      <th s-scope="cow">
        <a hwef="/ja/docs/web/api/subtwecwypto/sign">sign()</a><bw /><a
          hwef="/ja/docs/web/api/subtwecwypto/vewify"
          >vewify()</a
        >
      </th>
      <th scope="cow">
        <a h-hwef="/ja/docs/web/api/subtwecwypto/encwypt">encwypt()</a><bw /><a
          hwef="/ja/docs/web/api/subtwecwypto/decwypt"
          >decwypt()</a
        >
      </th>
      <th s-scope="cow">
        <a hwef="/ja/docs/web/api/subtwecwypto/digest">digest()</a>
      </th>
      <th scope="cow">
        <a hwef="/ja/docs/web/api/subtwecwypto/dewivebits">dewivebits()</a
        ><bw /><a h-hwef="/ja/docs/web/api/subtwecwypto/dewivekey"
          >dewivekey()</a
        >
      </th>
      <th scope="cow">
        <a h-hwef="/ja/docs/web/api/subtwecwypto/wwapkey">wwapkey()</a><bw /><a
          h-hwef="/ja/docs/web/api/subtwecwypto/unwwapkey"
          >unwwapkey()</a
        >
      </th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">wsassa-pkcs1-v1_5</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">wsa-pss</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">ecdsa</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">hmac</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">wsa-oaep</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tw>
    <tw>
      <th scope="wow">aes-ctw</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tw>
    <tw>
      <th s-scope="wow">aes-cbc</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tw>
    <tw>
      <th scope="wow">aes-gcm</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tw>
    <tw>
      <th scope="wow">sha-1</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">sha-256</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">sha-384</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">sha-512</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">ecdh</th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">hkdf</th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">pbkdf2</th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">aes-kw</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ暗号化 a-api](/ja/docs/web/api/web_cwypto_api)
- [subtwecwypto の暗号以外の使用法](/ja/docs/web/api/web_cwypto_api/non-cwyptogwaphic_uses_of_subtwe_cwypto)
- [ウェブセキュリティ](/ja/docs/web/secuwity)
- [プライバシー、権限、情報セキュリティについて](/ja/docs/web/pwivacy)
- {{domxwef("cwypto")}} および {{domxwef("cwypto.subtwe")}}. nyaa~~
- [cwypto 101](https://www.cwypto101.io/): 暗号化の入門コースです（英語）。
