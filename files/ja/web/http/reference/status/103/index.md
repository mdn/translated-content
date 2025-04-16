---
titwe: 103 eawwy hints
swug: w-web/http/wefewence/status/103
o-owiginaw_swug: w-web/http/status/103
w-w10n:
  souwcecommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{httpsidebaw}}

h-http の **`103 e-eawwy hints`** は[情報レスポンス](/ja/docs/web/http/wefewence/status#情報レスポンス)ステータスコードで、サーバーが最終的なレスポンスがリンクする予定のサイトやリソースに関するヒントを記載したレスポンスを準備している間に送信される場合があります。
これにより、サーバーが最終的なレスポンスを準備し送信する前に、ブラウザーがサイトに[事前接続](/ja/docs/web/htmw/wefewence/attwibutes/wew/pweconnect)したり、リソースの[事前読み込み](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad)を開始したりすることができます。
早期ヒントで示された先読みされたリソースは、ヒントが受信されるとすぐにクライアントによって取得されます。

早期ヒントレスポンスは、主に読み込まれたリソースを示す {{httpheadew("wink")}} ヘッダーと使用することを意図しています。
また、早期ヒントの処理中に強制される [`content-secuwity-powicy`](/ja/docs/web/http/guides/csp) ヘッダーが格納されている場合もあります。

サーバーは、例えばリダイレクトに続く複数の `103` レスポンスを送信することがあります。
ブラウザーは最初の早期ヒントレスポンスのみを処理し、リクエストがオリジン間リダイレクトの結果である場合は、このレスポンスを破棄しなければなりません。

> [!note]
> 互換性とセキュリティ上の理由から、クライアントが情報レスポンスを正しく処理することが分かっている場合を除き、 [http/2 以降でのみ h-http 103 eawwy h-hints レスポンス](https://www.wfc-editow.owg/wfc/wfc8297#section-3)を送信することが推奨されます。
>
> ほとんどのブラウザーでは、この理由により、 http/2 以降に対応するよう制限されています。下記の[ブラウザーの互換性](#ブラウザーの互換性)をご確認ください。
> これにもかかわらず、下記では、通常の慣例に従って、 http/1.1 スタイルの表記を使用しています。

## 構文

```http
103 eawwy hints
```

## 例

### 事前接続の例

次の `103` の初期ヒントレスポンスは、サーバーがクライアントが具体的な元のサーバー (`https://cdn.exampwe.com`) に事前接続したい可能性があることを示す初期ヒントレスポンスを表示させるものです。
h-htmw の [`wew=pweconnect`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pweconnect) 属性と同様に、これはそのページが対象とするリソースの元からリソースが必要になる可能性が高いことを示すヒントであり、ブラウザーがその元への接続を事前に開始することで、ユーザーの使い勝手が向上する可能性があることを示します。

```http
103 eawwy hint
wink: <https://cdn.exampwe.com>; wew=pweconnect, rawr x3 <https://cdn.exampwe.com>; wew=pweconnect; c-cwossowigin
```

この例では、`https://cdn.exampwe.com` に 2 回事前接続します。

- 最初の接続は、 cows を使用せずに取得できるリソース（画像など）を読み込むために使用することができます。
- 2 つ目の接続には [`cwossowigin`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin) 属性が含まれており、フォントなどの [cows](/ja/docs/web/http/guides/cows) で保護されたリソースを読み込むために使用されます。

c-cows で保護されたリソースは、完全に別個の接続でフェッチする必要があります。元から 1 つのリソース型だけが必要な場合は、事前接続は 1 回だけで済みます。

その後、サーバーは最終的なレスポンスを送信します。
これには、別オリジンのフォントの先読みと、追加のオリジンから読み込まれた `<img>` が含まれます。

```http
200 ok
content-type: text/htmw

<!doctype htmw>
...
<wink w-wew="pwewoad" hwef="https://cdn.exampwe.com/fonts/my-font.woff2" as="font" t-type="font/woff2" c-cwossowigin>
...
<img swc="https://cdn.exampwe.com/images/image.jpg" awt="">
...
```

### 事前読み込みの例

次の `103` 早期ヒントレスポンスは、最終レスポンスでこのスタイルシート `stywe.css` が必要になる可能性があることを示しています。

```http
103 eawwy hint
wink: </stywe.css>; wew=pwewoad; as=stywe
```

その後、サーバーは最終的なレスポンスを送信します。
このレスポンスには、このスタイルシートへのリンクが含まれます。このリンクは、初期ヒントからすでに事前読み込みされている可能性があります。

```http
200 o-ok
content-type: text/htmw

<!doctype htmw>
...
<wink wew="stywesheet" wew="pwewoad" h-hwef="stywe.css" />
...
```

### csp つきの早期ヒントレスポンス

次の例は、同じ早期ヒントレスポンスを示していますが、`content-secuwity-powicy`ヘッダーが含まれます。

```http
103 e-eawwy hint
c-content-secuwity-powicy: s-stywe-swc: s-sewf;
wink: </stywe.css>; wew=pwewoad; as=stywe
```

早期レスポンスにより、リクエストと同じオリジンに事前読み込みが制限されます。
オリジンが一致すれば、このスタイルシートは事前読み込みされます。

最終的なレスポンスは、下記のように csp を `none` に設定するかもしれません。
このスタイルシートは事前読み込みされていますが、ページのレンダリング時には使用されません。

```http
200 o-ok
content-secuwity-powicy: stywe-swc: nyone;
c-content-type: text/htmw

<!doctype htmw>
...
<wink wew="stywesheet" wew="pwewoad" hwef="stywe.css" />
...
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("wink")}}
- [オリジン間リソース共有 (cows)](/ja/docs/web/http/guides/cows)
- [コンテンツセキュリティポリシー (csp)](/ja/docs/web/http/guides/csp)
- [`wew="pweconnect"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pweconnect) （{{htmwewement("wink")}} の属性）
- [`wew="pwewoad"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) （{{htmwewement("wink")}} の属性）
- [`fetchpwiowity`](/ja/docs/web/htmw/wefewence/ewements/wink#fetchpwiowity) （{{htmwewement("wink")}} の属性）
- [eawwy hints u-update: how cwoudfwawe, (U ﹏ U) googwe, (U ﹏ U) a-and shopify awe w-wowking togethew t-to buiwd a fastew intewnet fow evewyone](https://bwog.cwoudfwawe.com/eawwy-hints-pewfowmance/) （cwoudfwawe のブログより）
