---
title: Toolbar
slug: orphaned/Code_snippets/Toolbar
---

### ツールバーボタンを追加する

二つのチュートリアルが参照可能です。

- 初心者向けの詳細な説明のある順を追ったチュートリアル : [Custom Toolbar Button](/ja/Custom_Toolbar_Button)
- すでに拡張を作成しており開発の基本は知っている人向けの、ツールバーボタン追加に必要な手順を述べたチュートリアル : [Creating toolbar buttons](/ja/Creating_toolbar_buttons)

### Adding button by default

スタマイズされたツールバーパレット用のツールバーボタンを入れて、あなたの拡張を開発・配布したとしても、デフォルトではボタンは有効になりません。ユーザはボタンをツールバーへドラッグする必要があります。下のコードを利用することで、あなたのボタンが最初のインストールおよび XPI の再起動後にデフォルトで表示されるようにできます。

> **メモ:** ボタンをデフォルトで追加するのは、正しく行うのが非常に難しいという点で、ほぼ間違いなく悪習慣です。ユーザはあなたがボタンを追加したツールバーを非表示にしているかもしれませんし、追加したコードが正常に動作しないようにツールバーをカスタマイズしているかもしれません。
>
> Firefox がこの目的に API を提供することに対しては、バグが立てられています。need the bug #

#### メモ

1. このサンプルは、Firefox 独自のものですが、Thunderbird でも正しいノードをターゲットに変更することで動作します。
2. デフォルトでボタンを追加するのは、正しい値とともに追加可能で、あなたの拡張のよく利用される機能に対してである場合だけにしてください。ユーザに限られた UI スペースしかないかもしれないことを考慮し、本当に必要かどうか検討してください。
3. このコードは browser.xul のオーバーレイに含められる必要があります。

#### サンプル

```
 try {
   var firefoxnav = document.getElementById("nav-bar");
   var curSet = firefoxnav.currentSet;
   if (curSet.indexOf("my-extension-button") == -1)
   {
     var set;
     // Place the button before the urlbar
     if (curSet.indexOf("urlbar-container") != -1)
       set = curSet.replace(/urlbar-container/, "my-extension-button,urlbar-container");
     else  // at the end
       set = firefoxnav.currentSet + ",my-extension-button";
     firefoxnav.setAttribute("currentset", set);
     firefoxnav.currentSet = set;
     document.persist("nav-bar", "currentset");
     // If you don't do the following call, funny things happen
     try {
       BrowserToolboxCustomizeDone(true);
     }
     catch (e) { }
   }
 }
 catch(e) { }
```
