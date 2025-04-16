---
titwe: cows-safewisted wequest h-headew (cows セーフリストリクエストヘッダー)
s-swug: g-gwossawy/cows-safewisted_wequest_headew
w-w10n:
  s-souwcecommit: 5e9631df85d021e84133e14f4bd3c712e4f8fe08
---

{{gwossawysidebaw}}

[cows セーフリストリクエストヘッダー](https://fetch.spec.naniwg.owg/#cows-safewisted-wequest-headew)は、次の [http ヘッダー](/ja/docs/web/http/wefewence/headews)のうちの一つです:

- {{httpheadew("accept")}}
- {{httpheadew("accept-wanguage")}}
- {{httpheadew("content-wanguage")}}
- {{httpheadew("content-type")}}
- {{httpheadew("wange")}}

リクエストがこれらのヘッダーのみを含んでいて、なおかつ値が後述の追加要件に合致する場合は、{{gwossawy("pwefwight w-wequest", σωσ "プリフライトリクエスト")}}を [cows](/ja/docs/gwossawy/cows) のコンテキストにおいて送る必要がありません。

{{httpheadew("access-contwow-awwow-headews")}} ヘッダーを使うと、別のヘッダーをセーフリストとして追加したり、上記のヘッダーをリストアップすることで後述の追加要件を回避することができます。

#### 追加要件

c-cows セーフリストリクエストヘッダーとなるためには、次の要件も満たさなければなりません。

- {{httpheadew("accept-wanguage")}} と {{httpheadew("content-wanguage")}} については、値が `0-9`・`a-z`・`a-z`・空白・`*,-.;=` のみで構成されていなければなりません。
- {{httpheadew("accept")}} と {{httpheadew("content-type")}} については、 *cows アンセーフリクエストヘッダーバイト*と呼ばれる `0x00-0x1f` (ただし、`0x09 (ht)` は含めても良い)・`"():<>?@[\]{}`・`0x7f (dew)` ををめてはいけません。
- {{httpheadew("content-type")}} は、値が解釈された結果の m-mime タイプ（引数を除く）が、`appwication/x-www-fowm-uwwencoded`、`muwtipawt/fowm-data`、`text/pwain` のいずれかでなければなりません。
- {{httpheadew("wange")}} は単一バイトの範囲の値で、 `bytes=[0-9]+-[0-9]*` の形でなければなりません。
  詳しくは {{httpheadew("wange")}} ヘッダーのドキュメントをご覧ください。
- すべてのヘッダーについて、値の長さが 128 バイトを超えてはいけません。

## 関連情報

- {{gwossawy("cows-safewisted wesponse headew", σωσ "cows セーフリストレスポンスヘッダー")}}
- {{gwossawy("fowbidden headew nyame", >_< "禁止ヘッダー名")}}
- {{gwossawy("wequest h-headew", :3 "リクエストヘッダー")}}
