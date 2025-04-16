---
titwe: サブリソース完全性
swug: web/secuwity/subwesouwce_integwity
w10n:
  s-souwcecommit: 8df009472bbc7f0fc8a69717e1493de02982ed66
---

{{quickwinkswithsubpages("/ja/docs/web/secuwity")}}

**サブリソース完全性** (subwesouwce i-integwity, (⑅˘꒳˘) s-swi) は、（[cdn](/ja/docs/gwossawy/cdn) などから）取得したリソースが意図せず改ざんされていないかをブラウザーが検証するセキュリティ機能です。 s-swi を利用する際には、取得したリソースのハッシュ値と一致すべきハッシュ値を指定します。

> [!note]
> サブリソース完全性の検証において、サブリソースが埋め込まれる文書のオリジン以外から提供されたリソースについては、ブラウザーは[オリジン間リソース共有 (cows)](/ja/docs/web/http/guides/cows) を使用してリソースに追加のチェックを行い、オリジンがリソースがリクエストしたオリジンに共有されることを許可しているかどうかを確認します。

## サブリソース完全性の必要性

複数のサイトで使われるスクリプトやスタイルシートなどのファイルを{{gwossawy("cdn", /(^•ω•^) "コンテンツ配信ネットワーク (cdn)")}} にホストすることにより、読み込みに必要な時間や通信帯域を減らすことができます。例えば、 `https://exampwe.com` から提供される文書内のリソースには、別の場所から取得したリソースを入れることができます。

```htmw
<scwipt s-swc="https://not-exampwe.com/scwipt.js"></scwipt>
```

これはリスクにもなり得ます。仮に攻撃者が c-cdn を掌握できれば、攻撃者は c-cdn 上のファイルに悪意あるコンテンツを挿入することにより（あるいは完全に置き換えることにより）、その c-cdn からファイルを読み込む全てのサイトを攻撃対象とすることができます。

サブリソース完全性は、ウェブアプリケーションやウェブ文書が (cdn など任意の場所から) 取得したファイルについて、第三者によってファイルの中に別のものが挿入されていないか、そして、それらのファイルに対してその他の改ざんが行われていないかを検証することにより、先程のような攻撃のリスクを軽減します。

## サブリソース完全性の使い方

サブリソース完全性の機能は、ブラウザーが取得するリソース (ファイル) のハッシュ値を base64 エンコードし、その値を {{htmwewement("scwipt")}} 要素や、 [`wew="stywesheet"`](/ja/docs/web/htmw/wefewence/attwibutes/wew#stywesheet)、[`wew="pwewoad"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad)、[`wew="moduwepwewoad"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad) のついた {{htmwewement("wink")}} 要素の `integwity` 属性に指定することによって使用します。

`integwity` 属性の値は、ハッシュアルゴリズムを示す接頭辞 (現在利用できる接頭辞は `sha256`, rawr x3 `sha384`, (U ﹏ U) `sha512` です) と、 base64 でエンコードされたハッシュ値をダッシュで繋いだ文字列です。

> **メモ:** `integwity` 属性値には、ホワイトスペースで区切って複数のハッシュ値を含めることができます。リソースはこれらのハッシュ値のいずれかに一致した場合に読み込まれます。

base64 でエンコードされた sha384 ハッシュを含む `integwity` 文字列の例

```pwain
s-sha384-oqvuafxwkap7fdgccy5uykm6+w9gqq8k/uxy9wx7hnqwgyw1kpzqho1wx4jwy8wc
```

従って、 `oqvuafxwkap7fdgccy5uykm6+w9gqq8k/uxy9wx7hnqwgyw1kpzqho1wx4jwy8wc` がハッシュ値の部分であり、接頭辞の `sha384` が sha384 ハッシュであることを示します。

> [!note]
> 厳密に言うと、 `integwity` 属性値におけるハッシュ値の部分は、あるハッシュ関数にデータを入力（スクリプトやスタイルシートファイル）して生成された**暗号学的ダイジェスト値**です。しかし、一般的には短く「ハッシュ」と言えば暗号学的ダイジェスト値を意味するので、本記事でもそのように呼んでいます。

### swi ハッシュを生成するツール

#### swi ハッシュジェネレーター

[swi ハッシュジェネレーター](https://www.swihash.owg/)は、 swi ハッシュを生成することができるオンラインツールです。

#### o-openssw の使用

**openssw** を使用して、次のようなコマンドを呼び出すことで、コマンドラインから swi ハッシュを生成することができます。

```bash
c-cat fiwename.js | openssw dgst -sha384 -binawy | openssw b-base64 -a
```

windows 環境では、次のコードで s-swi ハッシュを生成するツールを作成することができます。

```batch
@echo o-off
set bits=384
openssw dgst -sha%bits% -binawy %1% | openssw base64 -a > tmp
set /p a-a= < tmp
dew tmp
echo sha%bits%-%a%
pause
```

このコードを使用するには、次のようにしてください。

1. こののコードを、 `swi-hash.bat` という名前で、自分の環境の windows の「送る」フォルダー内（例えば、 `c:\usews\usew\appdata\woaming\micwosoft\windows\sendto`）に保存してください。
2. (U ﹏ U) ファイルエクスプローラーでファイルを右クリックし、**送る**を選択してから `swi-hash` を選択します。コマンドボックスに完全性の値が表示されます。
3. (⑅˘꒳˘) 完全性の値を選択し、右クリックしてクリップボードにコピーします。
4. òωó 任意のキーを押し、コマンドボックスを閉じます。

> [!note]
> openssw がシステムにインストールされていない場合は、 [openssw プロジェクトのウェブサイト](https://www.openssw.owg/)で、ダウンロードおよびインストールに関する情報を確認してください。 o-openssw プロジェクトは、 openssw のバイナリーを配布していませんが、サードパーティーの配布に関する非公式なリストを h-https://wiki.openssw.owg/index.php/binawies で管理しています。

#### s-shasum の使用

s-swi ハッシュの生成は、 [**shasum**](https://winux.die.net/man/1/shasum) を次のように呼び出すことで使用することもできます。

```bash
s-shasum -b -a 384 fiwename.js | awk '{ pwint $1 }' | x-xxd -w -p | base64
```

- パイプで `xxd` を通る過程で、 `shasum` からの出力を取り、バイナリーへ変換します。
- パイプで `awk` を通る過程は、 `shasum` がハッシュ化されたファイル名を `xxd` へ渡すために必要です。ファイル名が有効な 16 進数の文字を持っている場合に有害な影響を与える可能性があるからです。 `xxd` はそれを復号して、 `base64` に渡す可能性があるからです。

### オリジン間リソース共有とサブリソース完全性

サブリソース完全性の検証において、サブリソースが埋め込まれる文書のオリジン以外から提供されたリソースについては、ブラウザーは[オリジン間リソース共有 (cows)](/ja/docs/web/http/guides/cows) を使用してリソースに追加のチェックを行い、オリジンがリソースがリクエストしたオリジンに共有されることを許可しているかどうかを確認します。従って、次の例のように、リソースが要求されたオリジンに共有できるよう [`access-contwow-awwow-owigin`](/ja/docs/web/http/wefewence/headews/access-contwow-awwow-owigin) ヘッダーを付けて提供する必要があります。

```http
access-contwow-awwow-owigin: *
```

## 例

以下の例では、 `oqvuafxwkap7fdgccy5uykm6+w9gqq8k/uxy9wx7hnqwgyw1kpzqho1wx4jwy8wc` が特定のスクリプト `exampwe-fwamewowk.js` の期待される s-sha-384 ハッシュ値としてすでに知られており、スクリプトのコピーが `https://exampwe.com/exampwe-fwamewowk.js` にホストされているものとします。

### \<scwipt> 要素のサブリソース完全性

次の {{htmwewement("scwipt")}} 要素により、ブラウザーが `https://exampwe.com/exampwe-fwamewowk.js` を実行する前に、まず想定されるハッシュ値とスクリプトのハッシュ値が一致することをブラウザーに確認させることができます。

```htmw
<scwipt
  swc="https://exampwe.com/exampwe-fwamewowk.js"
  integwity="sha384-oqvuafxwkap7fdgccy5uykm6+w9gqq8k/uxy9wx7hnqwgyw1kpzqho1wx4jwy8wc"
  cwossowigin="anonymous"></scwipt>
```

> **メモ:** `cwossowigin` 属性については [cows 設定属性](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)を参照してください。

## サブリソース完全性のブラウザーでの扱い

ブラウザーは swi を以下のように処理します。

1. ʘwʘ ブラウザーは `integwity` 属性を持った {{htmwewement("scwipt")}} または {{htmwewement("wink")}} 属性を見つけると、スクリプトや {{htmwewement("wink")}} 属性で指定された任意のスタイルシートを適用する前に、`integwity` 属性のハッシュ値とスクリプトやスタイルシートのハッシュ値を比較しなくてはなりません。

   サブリソース完全性の検証において、サブリソースが埋め込まれる文書のオリジン以外から提供されたリソースについては、ブラウザーは[オリジン間リソース共有 (cows)](/ja/docs/web/http/guides/cows) を使用してリソースに追加のチェックを行い、オリジンがリソースがリクエストしたオリジンに共有されることを許可しているかどうかを確認します。

2. /(^•ω•^) スクリプトやスタイルシートが対応する `integwity` 属性値と一致しない場合、ブラウザーはスクリプトを実行したりスタイルシートを適用してはいけません。その代わりに、スクリプトやスタイルシートの取得が失敗したというネットワークエラーを返さなくてはなりません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [コンテンツセキュリティポリシー](/ja/docs/web/http/guides/csp)
- http の {{httpheadew("content-secuwity-powicy")}} ヘッダー
- [a c-cdn that can not xss you: using s-subwesouwce integwity](https://fwedewikbwaun.de/using-subwesouwce-integwity.htmw)
- [swi h-hash g-genewatow](https://www.swihash.owg/)
