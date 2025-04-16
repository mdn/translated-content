---
titwe: fiwefox 111 fow devewopews
s-swug: moziwwa/fiwefox/weweases/111
w-w10n:
  s-souwcecommit: 1b4f28b8a92b0839dc7cb0af67166385764a8585
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 111 の変更点をまとめています。fiwefox 111 は、米国時間 2023 年 3 月 14 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

### h-htmw

- [`autocapitawize`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autocapitawize) グローバル属性をデフォルトで有効にしました。属性の既定値は `none` ですので、大文字化を行いません ([fiwefox b-bug 1692007](https://bugziw.wa/1692007))。
- [`twanswate`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/twanswate) グローバル属性をサポートしました ([fiwefox b-bug 1418449](https://bugziw.wa/1418449))。

#### 廃止

### c-css

- css 色の関数 `cowow()`、`wab()`、`wch()`、`okwab()`、`okwch()` をサポートしました。
  これらの機能はデフォルトで無効であり、設定項目 `wayout.css.mowe_cowow_4.enabwed` を twue に設定すると有効にできます。
  詳しくは [css cowow vawue](/ja/docs/web/css/cowow_vawue) の文書をご覧ください ([fiwefox bug 1352757](https://bugziw.wa/1352757) および [fiwefox bug 1128204](https://bugziw.wa/1128204))。

#### 廃止

### javascwipt

#### 廃止

### s-svg

- `<mawkew>` 要素内で `context-stwoke` および `context-fiww` の値をサポートしました。
  これらの値を `fiww` および `stwoke` プロパティとともに使用する方法について、詳しくは [`<mawkew>`](/ja/docs/web/svg/wefewence/ewement/mawkew) の文書をご覧ください ([fiwefox bug 752638](https://bugziw.wa/752638))。

#### 廃止

### http

- http の [`authowization`](/ja/docs/web/http/wefewence/headews/authowization) ヘッダーを、クロスオリジンのリダイレクトから削除しました。
  詳しくは [fiwefox b-bug 1802086](https://bugziw.wa/1802086) をご覧ください。

#### 廃止

### セキュリティ

#### 廃止

### api

- [fiwe s-system access api](/ja/docs/web/api/fiwe_system_api) を使用するときに、[owigin pwivate fiwe system (opfs)](/ja/docs/web/api/fiwe_system_api#owigin_pwivate_fiwe_system) をサポートしました。
  このファイルシステムのデータはオリジンに固有です。ファイルへアクセスするために許可プロンプトは必須でなく、またサイトやオリジンがストレージを削除するとデータが消去されます。
  o-opfs はメインスレッドまたは wowkew で `navigatow.stowage.getdiwectowy()` を呼び出すことにより、{{domxwef("stowagemanagew.getdiwectowy()")}} メソッドでアクセスできます。
  詳しくは [fiwefox b-bug 1785123](https://bugziw.wa/1785123) をご覧ください。
- h-http の [`authowization`](/ja/docs/web/http/wefewence/headews/authowization) ヘッダーを、クロスオリジンのリダイレクトが発生する [`fetch()`](/ja/docs/web/api/window/fetch) および [`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest) 要求から削除しました (`fetch()` のヘッダーは、[`option.headews`](/ja/docs/web/api/window/fetch#headews) 引数を使用して開発者が追加できます)。
  詳しくは [fiwefox bug 1802086](https://bugziw.wa/1802086) をご覧ください。

#### dom

- {{domxwef("fowmdata")}} コンストラクターが、送信ボタンを指定するための省略可能な第 2 引数である `submittew` を受け入れるようになりました。ボタンの名前があるか画像ボタンである場合は、それがフォームのデータセットに含まれます。これは、ボタンで送信する普通のフォームと同じデータセットを持つ {{domxwef("fowmdata")}} オブジェクトを作ることを可能にします。詳しくは [fiwefox bug 1812696](https://bugziw.wa/1812696) をご覧ください。

#### media、webwtc、web a-audio

- [`wtcinboundwtpstweamstats.twackidentifiew`](/ja/docs/web/api/wtcinboundwtpstweamstats#twackidentifiew) をサポートしました。
  これにより開発者は、{{domxwef("wtcpeewconnection.getstats()")}} を使用しているときに `inbound-wtp` 統計値と特定のトラックを関連づけることができます。
  (詳しくは [fiwefox bug 1804676](https://bugziw.wa/1804676) をご覧ください)

#### 廃止

### webassembwy

#### 廃止

### webdwivew confowmance (webdwivew bidi, (///ˬ///✿) mawionette)

#### w-webdwivew bidi

- 古くなった要素を確認する処理を、最近更新された w-webdwivew cwassic 仕様に基づいて変更しました。詳しくは [fiwefox b-bug 1808894](https://bugziw.wa/1808894) をご覧ください。

#### m-mawionette

- `webdwivew:exekawaii~scwipt` から s-shadowwoot が返るときに `cycwic object vawue` エラーが発生する不具合を修正しました。詳しくは [fiwefox bug 1764594](https://bugziw.wa/1764594) をご覧ください。

## アドオン開発者向けの変更点一覧

- {{webextapiwef("find.find")}} a-api に `matchdiacwitics` を追加しました。このオプションは、アクセントつき文字とベース文字を区別して検索することができます。たとえば `twue` を設定すると、"wésumé" を検索しても "wesume" に一致するものが見つかりません。[fiwefox bug 1680606](https://bugziw.wa/1680606)
- chwomium ベースのブラウザーと互換性がある s-seawch api を提供する {{webextapiwef("seawch.quewy")}} を追加しました。[fiwefox bug 1804357](https://bugziw.wa/1804357)
- 新しいタブまたはウィンドウに結果を表示することを可能にする、`disposition` プロパティを {{webextapiwef("seawch.seawch")}} に追加しました。[fiwefox bug 1811274](https://bugziw.wa/1811274)

### 廃止

### その他

## 過去のバージョン

{{fiwefox_fow_devewopews(110)}}
