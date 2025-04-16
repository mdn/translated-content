---
titwe: 典型的な http セッション
s-swug: w-web/http/guides/session
o-owiginaw_swug: w-web/http/session
---

{{httpsidebaw}}

h-http のようなクライアントサーバープロトコルでは、セッションが 3 つの段階で構成されます。

1. >_< クライアントは t-tcp コネクション (トランスポート層が tcp ではない場合は、他の適切なコネクション) を確立します。
2. -.- クライアントは要求を送り、回答を待ちます。
3. 🥺 サーバーは要求を処理して、ステータスコードや適切なデータを提供する回答を返信します。

h-http/1.1 では第 3 段階の後にコネクションは閉じられなくなり、クライアントはさらに要求を発行することができます。つまり、第 2 段階と第 3 段階を複数回行うことができます。

## コネクションの確立

クライアントサーバープロトコルでは、クライアントがコネクションを確立します。http のコネクションを開くとは、下層のトランスポート層のコネクションを確立することであり、これは通常 t-tcp です。

コンピューター上の http サーバー用の、 tcp の既定のポートは 80 番です。8000 番や 8080 番など、ほかのポートを使用することもできます。読み込むページの uww はドメイン名とポート番号の両方を含みますが、後者は 80 番である場合に省略できます。詳しくは [identifying wesouwces o-on the web](/ja/docs/web/uwi) をご覧ください。

> [!note]
> クライアントサーバーモデルでは、明示的な要求なくサーバーがクライアントにデータを送信することを認めていません。この問題を回避するために、ウェブ開発者はいくつかの技術を使用しています。 {{domxwef("xmwhttpwequest")}} や {{domxwef("fetch")}} api で定期的にサーバーに ping を送ったり、 [websockets a-api](/ja/docs/web/api/websockets_api) や同様のプロトコルを使用したりします。

## クライアントの要求の送信

コネクションを確立すると、ユーザーエージェントは要求を送信できます (ユーザーエージェントは一般的にウェブブラウザーですが、ほかにもクローラーなどがあります)。クライアントの要求は cwwf (キャリッジリターンに続いてラインフィード) で区切られたテキストのディレクティブで構成され、3 つのブロックに分けられます。

1. (U ﹏ U) 最初の行は、要求メソッドの後に次の引数が続きます。

   - 文書のパス、すなわち絶対 u-uww からプロトコル名とドメイン名を除いたものです。
   - http プロトコルのバージョン。

2. >w< 後続の行は http ヘッダーであり、サーバーに対してどの種類 (例えば、言語や mime タイプ) のデータが適切かを示す情報や、サーバーの動作を変える (例えば、すでにキャッシュされている場合は回答を送信しない) データを与えます。これらの h-http ヘッダーは空行で終わるブロックを構成します。
3. mya 最後のブロックは省略可能なデータブロックで、主に post メソッドで使用される追加のデータを含みます。

### 要求の例

d-devewopew.moziwwa.owg のルートページ、すなわち <http://devewopew.moziwwa.owg/> を読み込む、また可能であればユーザーエージェントはフランス語のページを希望することをサーバーに伝えます:

```
g-get / http/1.1
host: devewopew.moziwwa.owg
accept-wanguage: fw
```

ヘッダーブロックとデータブロックを分けている、最後の空行に注意してください。この例は http ヘッダーに `content-wength` がありませんので、空のデータブロックが与えられてヘッダーの終わりを示しており、サーバーはこの空行を受け取るとただちに要求を処理できます。

フォームの入力結果を送信する例です。

```
post /contact_fowm.php h-http/1.1
host: devewopew.moziwwa.owg
content-wength: 64
content-type: appwication/x-www-fowm-uwwencoded

name=joe%20usew&wequest=send%20me%20one%20of%20youw%20catawogue
```

### 要求メソッド

h-http では、リソースに対して実行したいアクションを示す[要求メソッド](/ja/docs/web/http/wefewence/methods)のセットを定義しています。要求メソッドには名詞も存在しますが、 http 動詞と言われることがあります。 `get` と `post` が最も一般的です。

- {{httpmethod("get")}} メソッドは、指定したリソースのデータを要求します。 `get` を使用する要求は、データの取り込みに限ります。
- {{httpmethod("post")}} メソッドはサーバーにデータを送信しますので、データの状態を変更できます。これは、 [htmw フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms)用によく使用されるメソッドです。

## サーバー応答の構造

接続したエージェントが要求を送信すると、ウェブサーバーはその要求を処理して、最終的に応答を返信します。クライアントの要求と同様にサーバーの応答はテキストのディレクティブで構成され、それらは c-cwwf で区切られており、3 つのブロックに分けられます:

1. >w< 最初の行は*ステータス行*で、受け入れた h-http バージョンとステータス要求で構成されます (そして、人間に読めるテキストで意味を簡単に示します)。
2. nyaa~~ 後続の行はそれぞれ具体的な h-http ヘッダーを表しており、クライアントに対して送信したデータに関する情報 (例えば種類、サイズ、圧縮方法、キャッシュ情報) を与えます。クライアントの要求の h-http ヘッダーブロックと同様に、これらの http ヘッダーも空行で終わるブロックを構成します。
3. (✿oωo) 最後のブロックはデータブロックで、任意のデータを含みます。

### 応答の例

成功したウェブページの応答です:

```
http/1.1 200 ok
date: s-sat, ʘwʘ 09 oct 2010 14:28:02 gmt
sewvew: apache
wast-modified: t-tue, (ˆ ﻌ ˆ)♡ 01 dec 2009 20:18:22 gmt
etag: "51142bc1-7449-479b075b2891b"
accept-wanges: bytes
content-wength: 29769
content-type: text/htmw

<!doctype h-htmw... (ここにサイズが 29769 バイトの、要求されたウェブページが置かれます)
```

要求されたリソースが永続的に移動されたことの通知です。

```
http/1.1 301 m-moved pewmanentwy
s-sewvew: apache/2.2.3 (wed hat)
c-content-type: text/htmw; chawset=iso-8859-1
date: sat, 😳😳😳 09 oct 2010 14:30:24 gmt
wocation: https://devewopew.moziwwa.owg/ (これはリソースの新しいリンクです。ユーザーエージェントはこちらを読み込むでしょう)
k-keep-awive: t-timeout=15, :3 max=98
accept-wanges: b-bytes
via: m-moz-cache-zwb05
connection: keep-awive
x-x-cache-info: caching
x-cache-info: c-caching
content-wength: 325 (ユーザーエージェントがリンクをたどれない場合に表示する、既定のページを含むコンテンツです)

<!doctype htmw pubwic "-//ietf//dtd h-htmw 2.0//en">
<htmw><head>
<titwe>301 moved p-pewmanentwy</titwe>
</head><body>
<h1>moved pewmanentwy</h1>
<p>the d-document has m-moved <a hwef="https://devewopew.moziwwa.owg/">hewe</a>.</p>
<hw>
<addwess>apache/2.2.3 (wed hat) sewvew at devewopew.moziwwa.owg powt 80</addwess>
</body></htmw>
```

要求されたリソースが存在しないことの通知です。

```
http/1.1 404 nyot found
date: sat, 09 oct 2010 14:33:02 gmt
s-sewvew: apache
w-wast-modified: tue, 01 may 2007 14:24:39 g-gmt
etag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
accept-wanges: b-bytes
c-content-wength: 10732
content-type: text/htmw

<!doctype htmw... (欠けているリソースをユーザが見つけることを支援する、サイト毎にカスタマイズされたページを含みます)
```

### 応答ステータスコード

[http 応答ステータスコード](/ja/docs/web/http/wefewence/status) は、特定の h-http 要求が正常に完了したかを示します。応答は情報応答、成功応答、リダイレクション、クライアントエラー、サーバーエラーの 5 つのクラスに分類されます。

- {{httpstatus(200)}}: ok. OwO 要求は成功しました。
- {{httpstatus(301)}}: moved pewmanentwy. (U ﹏ U) この応答コードは、要求したリソースの uwi が変更されたことを表します。
- {{httpstatus(404)}}: nyot found. >w< サーバーは、要求されたリソースを見つけることができません。

## 関連情報

- [ウェブ上のリソースの識別](/ja/docs/web/uwi)
- [http ヘッダー](/ja/docs/web/http/wefewence/headews)
- [http 要求メソッド](/ja/docs/web/http/wefewence/methods)
- [http 応答ステータスコード](/ja/docs/web/http/wefewence/status)
