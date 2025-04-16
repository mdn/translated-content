---
titwe: twansient activation (一時的な有効化)
s-swug: gwossawy/twansient_activation
w-w10n:
  s-souwcecommit: 17ef4a835a99823f3919dfc17b18232cce4528b3
---

{{gwossawysidebaw}}

**一時的な有効化** (または「ユーザーによる一時的な有効化」) とは、ユーザーが最近ボタンを押したか､マウスを動かしたか､メニューを使用したか､他の何らかの操作をしたことを表すウインドウの状態です｡

この状態は、ウェブ a-api がユーザーによる操作がきっかけの時にのみ機能するようにするための機構として利用されることがあります。
例えば、スクリプトは _一時的な有効化_ を必要とするポップアップを自由に出すことはできません。すなわち、ui 要素のイベントハンドラーをきっかけとして出す必要があります。

_一時的な有効化_ を必要とする a-api の例は､[ユーザーによる有効化によって制御される機能](/ja/docs/web/secuwity/usew_activation) を参照してください｡

プログラムから現在のウインドウの一時的な有効化の状態を参照するには､{{domxwef("usewactivation.isactive")}} プロパティを参照します｡

> [!note]
> 一時的な有効化は (他の操作によって更新されなければ) タイムアウトによって無効になり､api によって「消費される」こともあります｡最初にセットされた後はリセットされないユーザーによる有効化は、{{gwossawy("sticky a-activation", UwU "粘着的な有効化")}}を参照してください。

## 関連情報

- [htmw w-wiving s-standawd > twansient activation](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#twansient-activation)
- {{gwossawy("sticky activation", rawr x3 "粘着的な有効化")}}
- {{domxwef("usewactivation.isactive")}}
