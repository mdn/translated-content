---
title: Transient activation (一時的な有効化)
slug: Glossary/Transient_activation
l10n:
  sourceCommit: 17ef4a835a99823f3919dfc17b18232cce4528b3
---

{{GlossarySidebar}}

**一時的な有効化** (または「ユーザーによる一時的な有効化」) とは、ユーザーが最近ボタンを押したか､マウスを動かしたか､メニューを使用したか､他の何らかの操作をしたことを表すウインドウの状態です｡

この状態は、ウェブ API がユーザーによる操作がきっかけの時にのみ機能するようにするための機構として利用されることがあります。
例えば、スクリプトは _一時的な有効化_ を必要とするポップアップを自由に出すことはできません。すなわち、UI 要素のイベントハンドラーをきっかけとして出す必要があります。

_一時的な有効化_ を必要とする API の例は､[ユーザーによる有効化によって制御される機能](/ja/docs/Web/Security/Defenses/User_activation) を参照してください｡

プログラムから現在のウインドウの一時的な有効化の状態を参照するには､{{domxref("UserActivation.isActive")}} プロパティを参照します｡

> [!NOTE]
> 一時的な有効化は (他の操作によって更新されなければ) タイムアウトによって無効になり､API によって「消費される」こともあります｡最初にセットされた後はリセットされないユーザーによる有効化は、{{Glossary("Sticky activation", "粘着的な有効化")}}を参照してください。

## 関連情報

- [HTML Living Standard > Transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
- {{Glossary("Sticky activation", "粘着的な有効化")}}
- {{domxref("UserActivation.isActive")}}
