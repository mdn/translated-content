---
title: Sticky activation (粘着的な有効化)
slug: Glossary/Sticky_activation
l10n:
  sourceCommit: 17ef4a835a99823f3919dfc17b18232cce4528b3
---

{{GlossarySidebar}}

**粘着的な有効化** (または「ユーザーによる粘着的な有効化」) は、ユーザーがボタンを押したか､マウスを動かしたか､メニューを使用したか､他の何らかの操作をしたことを表すウインドウの状態です｡

ユーザーが現在ページを操作しているか、ページを読み込んでからタッチ、ポインター、またはキーボードの操作を完了したとき、ページは「ユーザーによって有効化された」とみなされます。ユーザーによる粘着的な有効化では、有効化が行われたら ({{Glossary("Transient activation", "一時的な有効化")}}と違って) セッションの間リセットされません。

_粘着的な有効化_ を必要とする API の例は、[ユーザーによる有効化によって制御される機能](/ja/docs/Web/Security/Defenses/User_activation) を参照してください。

プログラムから現在のウインドウの粘着的な有効化の状態を参照するには、{{domxref("UserActivation.hasBeenActive")}} プロパティを参照します。

## 関連情報

- [HTML Living Standard > Sticky activation](https://html.spec.whatwg.org/multipage/interaction.html#sticky-activation)
- {{Glossary("Transient activation", "一時的な有効化")}}
- {{domxref("UserActivation.hasBeenActive")}}
