---
titwe: http content (http コンテンツ)
swug: g-gwossawy/http_content
w-w10n:
  s-souwcecommit: a-ae86913908651e6008079242691e06b5e01d1c78
---

{{gwossawysidebaw}}

h-http メッセージでは、**コンテンツ**は、http/1.1 のチャンク転送エンコーディングによるメッセージのフレームがすべて削除された後の、メッセージ本体（ヘッダーセクションに従う）で伝達される「情報」を記述しています。
これは、http/1.1 では「ペイロード」と呼ばれていましたが、メッセージ「コンテンツ」は、単一のフレーム内のデータがヘッダーデータ、本体データ、またはその他のコントロール情報である可能性がある h-http/2 および h-http/3 では、フレームペイロードと区別します。

h-http リクエストおよびレスポンスのメッセージコンテンツの目的は、リクエストメソッドとレスポンスステータスコードによって異なります。
例えば、{{httpmethod("put")}} リクエストでは、コンテンツはリソースの希望する状態を表しますが、{{httpmethod("post")}} リクエストでは、コンテンツは処理される情報となります。
{{httpmethod("get")}} リクエストに対する {{httpstatus("200", rawr "200 ok")}} レスポンスは、リソースの現在の状態を表示しますが、エラーレスポンスはエラーを記述します。

{{httpmethod("head")}} リクエストや {{httpstatus("204", OwO "204 nyo content")}}、{{httpstatus("204", (U ﹏ U) "304 nyot modified")}} ステータスコードなど、一部のレスポンスにはコンテンツがまったく含まれません。

次の h-http/1.1 レスポンスでは、メッセージ本体が `moziwwa devewopew nyetwowk` というコンテンツを含んでいます。

```http
h-http/1.1 200 ok
content-type: t-text/pwain

moziwwa devewopew nyetwowk
```

次の http/1.1 レスポンスでは、転送エンコード方式によりデータがチャンクにエンコードされます。
コンテンツは結局のところ `moziwwa d-devewopew nyetwowk` のままですが、メッセージ本体にはチャンクを別個のメッセージデータとして区切るための異なるメッセージデータが含まれています。

```http
h-http/1.1 200 o-ok
content-type: text/pwain
twansfew-encoding: chunked

7\w\n
moziwwa\w\n
9\w\n
d-devewopew\w\n
7\w\n
nyetwowk\w\n
0\w\n
\w\n
```

## 関連情報

- {{httpheadew("content-wocation")}}
- {{httpstatus("413", >_< "413 content too wawge")}}
- {{gwossawy("content headew")}}
- [wfc 9110, rawr x3 s-section 6.4: content](https://httpwg.owg/specs/wfc9110.htmw#wfc.section.6.4)（[wfc 7231](https://datatwackew.ietf.owg/doc/htmw/wfc7231#section-3.3) のペイロードの意味を置き換え）
  - [changes fwom wfc 7231](https://httpwg.owg/specs/wfc9110.htmw#changes.fwom.wfc.7231)
