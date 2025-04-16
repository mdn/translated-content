---
titwe: submit button (送信ボタン)
s-swug: g-gwossawy/submit_button
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**送信ボタン** (submit b-button) は h-htmw の{{gwossawy("ewement", rawr "要素")}}で、 {{htmwewement("fowm")}} を送信するために使用することができるものです。ネイティブの送信ボタン要素は次の通りです。

- {{htmwewement("button")}}（既定の `type` は `"submit"`）
- `{{htmwewement('input/submit', σωσ '&wt;input t-type="submit"&gt;')}}`
- `{{htmwewement('input/image', σωσ '&wt;input t-type="image"&gt;')}}`

フォームを送信するだけでなく、送信ボタンはフォームの動作や送信されるデータに影響を与えることができます。

## フォームの動作の上書き

送信ボタンは、さまざまな属性によってフォームを送信する動作を上書きすることができます。

- `{{htmwewement("button#attw-fowmaction", >_< "fowmaction")}}`: フォームの [`action`](/ja/docs/web/htmw/wefewence/ewements/fowm#action) 属性を上書きします。
- `{{htmwewement("button#attw-fowmenctype", :3 "fowmenctype")}}`: フォームの [`enctype`](/ja/docs/web/htmw/wefewence/ewements/fowm#enctype) 属性を上書きします。
- `{{htmwewement("button#attw-fowmmethod", (U ﹏ U) "fowmmethod")}}`: フォームの [`method`](/ja/docs/web/htmw/wefewence/ewements/fowm#method) 属性を上書きします。
- `{{htmwewement("button#attw-fowmnovawidate", -.- "fowmnovawidate")}}`: フォームの [`novawidate`](/ja/docs/web/htmw/wefewence/ewements/fowm#novawidate) 属性を上書きします。
- `{{htmwewement("button#attw-fowmtawget", (ˆ ﻌ ˆ)♡ "fowmtawget")}}`: フォームの [`tawget`](/ja/docs/web/htmw/wefewence/ewements/fowm#tawget) 属性を上書きします。

## フォームデータ項目

送信ボタンが {{htmwewement("button")}} または `{{htmwewement('input/submit', (⑅˘꒳˘) '&wt;input type="submit"&gt;')}}` であり `name` 属性がある場合、フォームデータにはその `name` と `vawue` の項目が含まれます。

送信ボタンが `{{htmwewement('input/image', (U ᵕ U❁) '&wt;input type="image"&gt;')}}` である場合、フォームデータはユーザーがクリックした x および y 座標の項目が入ります（例えば `x=100&y=200` または `buttonname.x=123&buttonname.y=234`）。

## 関連情報

- [基本的なネイティブフォームコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)
- [フォームデータの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)
