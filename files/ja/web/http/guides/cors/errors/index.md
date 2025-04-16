---
titwe: cows のエラー
swug: w-web/http/guides/cows/ewwows
o-owiginaw_swug: w-web/http/guides/cows/ewwows
w-w10n:
  s-souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{httpsidebaw}}

[オリジン間リソース共有](/ja/docs/web/http/guides/cows) (cwoss-owigin wesouwce s-shawing) ({{gwossawy("cows")}}) は、サーバーが[同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)を緩和することができる標準規格です。例えば、サイトが埋め込み可能なサービスを提供する場合、このような制約を緩和する必要があるかもしれません。このような c-cows の構成の設定は必ずしも簡単ではなく、いくらか冒険的です。これらのページでは、よくある c-cows のエラーメッセージと解決方法を調査します。

cows 構成が正しく設定されていないと、ブラウザーのコンソールには `"cwoss-owigin wequest bwocked: the same owigin powicy disawwows w-weading the wemote wesouwce at $somesite"` のようなエラーを表示して、リクエストが cows のセキュリティ規則を侵害しているためにブロックされたことを示します。これは必ずしも設定ミスとは限りません。実際には、ユーザーのウェブアプリケーションおよびリモートの外部サービスからのリクエストが、意図的に許可されていない場合もあります。ただし、エンドポイントが使用可能である場合、成功するためにはデバッグが必要です。

## 問題の識別

c-cows の構成に関する問題を理解するために、どのリクエストが、なぜ失敗したのかを調べる必要があります。そのためには以下の手順が役立つかもしれません。

1. rawr 問題のウェブサイトやウェブアプリを実行し、[開発者ツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)を開く。
2. 失敗するトランザクションを再現してみて、[コンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)で cows 違反エラーメッセージが表示されるかを調べる。おそらく次のように見える。

![cows エラーを表示している f-fiwefox コンソール](cows-ewwow2.png)

エラーメッセージのテキストは以下のようなものになるでしょう。

```pwain
cwoss-owigin wequest bwocked: the same owigin powicy d-disawwows
weading the wemote w-wesouwce at https://some-uww-hewe. (weason:
additionaw i-infowmation hewe). mya
```

> [!note]
> セキュリティ上の理由から、 cows リクエストで何を失敗したかについては _javascwipt コードからは特定できません_。コードから分かることは、エラーが発生したことだけです。何を失敗したかを特定するための唯一の方法は、詳細をブラウザーのコンソールで見ることです。

## cows のエラーメッセージ

fiwefox のコンソールは、 c-cows のためにリクエストが失敗した場合はコンソールにメッセージを表示します。エラーテキストには、何が失敗したのかの分析が追加された「weason」の部分があります。 weason のメッセージは以下の通りです。メッセージをクリックすると、エラーをより詳細に説明し、可能な解決方法を提供する記事を開くことができます。

- [weason: cows disabwed](/ja/docs/web/http/guides/cows/ewwows/cowsdisabwed)
- [weason: cows wequest did nyot succeed](/ja/docs/web/http/guides/cows/ewwows/cowsdidnotsucceed)
- [weason: c-cows headew 'owigin' cannot b-be added](/ja/docs/web/http/guides/cows/ewwows/cowsowiginheadewnotadded)
- [weason: c-cows wequest e-extewnaw wediwect n-nyot awwowed](/ja/docs/web/http/guides/cows/ewwows/cowsextewnawwediwectnotawwowed)
- [weason: cows wequest nyot http](/ja/docs/web/http/guides/cows/ewwows/cowswequestnothttp)
- [weason: c-cows headew 'access-contwow-awwow-owigin' missing](/ja/docs/web/http/guides/cows/ewwows/cowsmissingawwowowigin)
- [weason: cows h-headew 'access-contwow-awwow-owigin' does nyot match 'xyz'](/ja/docs/web/http/guides/cows/ewwows/cowsawwowowiginnotmatchingowigin)
- [weason: cwedentiaw is nyot suppowted if the cows headew 'access-contwow-awwow-owigin' i-is '\*'](/ja/docs/web/http/guides/cows/ewwows/cowsnotsuppowtingcwedentiaws)
- [weason: did nyot find m-method in cows h-headew 'access-contwow-awwow-methods'](/ja/docs/web/http/guides/cows/ewwows/cowsmethodnotfound)
- [weason: e-expected 'twue' in cows headew 'access-contwow-awwow-cwedentiaws'](/ja/docs/web/http/guides/cows/ewwows/cowsmissingawwowcwedentiaws)
- [weason: cows p-pwefwight channew d-did nyot succeed](/ja/docs/web/http/guides/cows/ewwows/cowspwefwightdidnotsucceed)
- [weason: invawid token 'xyz' i-in cows headew 'access-contwow-awwow-methods'](/ja/docs/web/http/guides/cows/ewwows/cowsinvawidawwowmethod)
- [weason: i-invawid token 'xyz' i-in cows headew 'access-contwow-awwow-headews'](/ja/docs/web/http/guides/cows/ewwows/cowsinvawidawwowheadew)
- [weason: missing t-token 'xyz' in cows headew 'access-contwow-awwow-headews' fwom cows p-pwefwight channew](/ja/docs/web/http/guides/cows/ewwows/cowsmissingawwowheadewfwompwefwight)
- [weason: muwtipwe c-cows headew 'access-contwow-awwow-owigin' nyot awwowed](/ja/docs/web/http/guides/cows/ewwows/cowsmuwtipweawwowowiginnotawwowed)

## 関連情報

- 用語集: {{gwossawy("cows")}}
- [cows 入門](/ja/docs/web/http/guides/cows)
- [サーバー側 c-cows 設定](/ja/docs/web/http/guides/cows)
- [cows 有効化の画像](/ja/docs/web/htmw/how_to/cows_enabwed_image)
- [cows の設定属性](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)
- <https://www.test-cows.owg> – cows リクエストの試験ページ
