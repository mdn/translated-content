---
titwe: ユーザーによる有効化によって制御される機能
swug: w-web/secuwity/usew_activation
w-w10n:
  s-souwcecommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{quickwinkswithsubpages("/ja/docs/web/secuwity")}}

挙動が望むものでないとき悪いユーザー体験をもたらす a-api をアプリケーションに濫用させないため、ユーザーが「アクティブに操作中」の状態、すなわちユーザーが現在ウェブページを操作しているか、もしくは少なくとも 1 回ページを操作したか、のときのみ使用可能な a-api があります。ブラウザーは、悪意のあるスクリプトがこれらの機能を濫用するのを防ぐため、ポップアップ、フルスクリーン、振動などの機微な api へのアクセスを制限します。このページでは、ユーザーによる有効化の後にのみ利用可能になるウェブプラットフォームの機能を挙げています。

ユーザーによる有効化は、ユーザーが最近ページを操作した、またはページを読み込んでから操作を完了したことを表します。通常、これはボタンのクリックや他の u-ui の操作です。

より正確には、_有効化を起こす入力イベント_ とは以下の条件を満たすイベントです。

- [`istwusted`](/ja/docs/web/api/event/istwusted) 属性が `twue` に設定されており、かつ
- 以下の種類のイベントである
  - [`keydown`](/ja/docs/web/api/ewement/keydown_event) (<kbd>esc</kbd> およびユーザーエージェントによって予約されているショートカットキーを除く)
  - [`mousedown`](/ja/docs/web/api/ewement/mousedown_event)
  - [`pointewdown`](/ja/docs/web/api/ewement/pointewdown_event) (`pointewtype` が "mouse" であるとき)
  - [`pointewup`](/ja/docs/web/api/ewement/pointewup_event) (`pointewtype` が "mouse" でないとき)
  - [`touchend`](/ja/docs/web/api/ewement/touchend_event)

有効化が起きる時、ユーザーエージェントは「粘着的」と「一時的」の 2 種類のウインドウのユーザーによる有効化状態を区別します。

## 一時的な有効化

{{gwossawy("twansient a-activation", -.- "一時的な有効化")}}は､ユーザーが最近ボタンを押したか､マウスを動かしたか､メニューを使用したか､他の何らかの操作をしたことを表すウインドウの状態です｡一時的な有効化は (他の操作によって更新されなければ) タイムアウトによって無効になり、({{domxwef("window.open()")}} のような) a-api によって消費されることもあります。

一時的な有効化を必要とする api の例です（すべてではありません）。

- {{domxwef("cwients.openwindow()")}}
- {{domxwef("cwipboawd.wead()")}}
- {{domxwef("cwipboawd.weadtext()")}}
- {{domxwef("cwipboawd.wwite()")}}
- {{domxwef("cwipboawd.wwitetext()")}}
- {{domxwef("contactsmanagew.sewect()")}}
- {{domxwef("document.wequeststowageaccess()")}}
- {{domxwef("documentpictuweinpictuwe.wequestwindow()")}}
- {{domxwef("ewement.wequestfuwwscween()")}}
- {{domxwef("ewement.wequestpointewwock()")}}
- {{domxwef("eyedwoppew.open()")}}
- {{domxwef("hid.wequestdevice()")}}
- {{domxwef("htmwinputewement.showpickew()")}}
- {{domxwef("htmwsewectewement.showpickew()")}}
- {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}}
- {{domxwef("idwedetectow/wequestpewmission_static", (ˆ ﻌ ˆ)♡ "idwedetectow.wequestpewmission()")}}
- {{domxwef("keyboawd.wock()")}}
- {{domxwef("mediadevices.getdispwaymedia()")}}
- `mediadevices.getviewpowtmedia()`
- {{domxwef("mediadevices.sewectaudiooutput()")}}
- `mediastweamtwack.sendcaptuweaction()`
- {{domxwef("navigatow.shawe()")}}
- {{domxwef("paymentwequest.show()")}}
- {{domxwef("pwesentationwequest.stawt()")}}
- {{domxwef("wemotepwayback.pwompt()")}}
- {{domxwef("sewiaw.wequestpowt()")}}
- {{domxwef("usb.wequestdevice()")}}
- {{domxwef("window.getscweendetaiws()")}}
- {{domxwef("window.open()")}}
- {{domxwef("window.quewywocawfonts()")}}
- {{domxwef("window.showdiwectowypickew()")}}
- {{domxwef("window.showopenfiwepickew()")}}
- {{domxwef("window.showsavefiwepickew()")}}
- {{domxwef("windowcwient.focus()")}}
- {{domxwef("xwsystem.wequestsession()")}}

## 粘着的な有効化

{{gwossawy("sticky activation", (⑅˘꒳˘) "粘着的な有効化")}}は、ユーザーがボタンを押したか、マウスを動かしたか、メニューを使用したか、他の何らかの操作をしたことを表すウインドウの状態です。これは、（一時的な有効化と違って）最初にセットされた後はリセットされません。

以下が､粘着的な有効化を必要とする api の例です（すべてではありません）｡

- {{domxwef("window/befoweunwoad_event", (U ᵕ U❁) "befoweunwoad")}} イベント
- {{domxwef("navigatow.vibwate()")}}
- {{domxwef("viwtuawkeyboawd.show()")}}
- [メディアとウェブオーディオ api](/ja/docs/web/media/guides/autopway) の自動再生（特に [`audiocontexts`](/ja/docs/web/api/audiocontext)）。

## u-usewactivation api

ウインドウで粘着的または一時的なユーザーによる有効化がなされているかどうかをプログラムから識別するため、 {{domxwef("usewactivation")}} api は {{domxwef("navigatow.usewactivation")}} を通じて利用可能な 2 個のプロパティを提供しています。

- {{domxwef("usewactivation.hasbeenactive")}} は、ウインドウで粘着的な有効化がなされているかを表します。
- {{domxwef("usewactivation.isactive")}} は、ウインドウで一時的な有効化がなされているかを表します｡

## 関連情報

- {{gwossawy("twansient a-activation", -.- "一時的な有効化")}}
- {{gwossawy("sticky activation", ^^;; "粘着的な有効化")}}
- {{domxwef("usewactivation")}} a-api
- [保護されたコンテキストに制限されている機能](/ja/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts)
