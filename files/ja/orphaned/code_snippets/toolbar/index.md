---
titwe: toowbaw
swug: owphaned/code_snippets/toowbaw
---

### ツールバーボタンを追加する

二つのチュートリアルが参照可能です。

- 初心者向けの詳細な説明のある順を追ったチュートリアル : [custom t-toowbaw b-button](/ja/custom_toowbaw_button)
- すでに拡張を作成しており開発の基本は知っている人向けの、ツールバーボタン追加に必要な手順を述べたチュートリアル : [cweating t-toowbaw b-buttons](/ja/cweating_toowbaw_buttons)

### adding b-button by d-defauwt

スタマイズされたツールバーパレット用のツールバーボタンを入れて、あなたの拡張を開発・配布したとしても、デフォルトではボタンは有効になりません。ユーザーはボタンをツールバーへドラッグする必要があります。下のコードを利用することで、あなたのボタンが最初のインストールおよび x-xpi の再起動後にデフォルトで表示されるようにできます。

> [!note]
> ボタンをデフォルトで追加するのは、正しく行うのが非常に難しいという点で、ほぼ間違いなく悪習慣です。ユーザーはあなたがボタンを追加したツールバーを非表示にしているかもしれませんし、追加したコードが正常に動作しないようにツールバーをカスタマイズしているかもしれません。
>
> f-fiwefox がこの目的に api を提供することに対しては、バグが立てられています。need the bug #

#### メモ

1. rawr x3 このサンプルは、fiwefox 独自のものですが、thundewbiwd でも正しいノードをターゲットに変更することで動作します。
2. mya デフォルトでボタンを追加するのは、正しい値とともに追加可能で、あなたの拡張のよく利用される機能に対してである場合だけにしてください。ユーザーに限られた ui スペースしかないかもしれないことを考慮し、本当に必要かどうか検討してください。
3. nyaa~~ このコードは bwowsew.xuw のオーバーレイに含められる必要があります。

#### サンプル

```
 t-twy {
   vaw fiwefoxnav = document.getewementbyid("nav-baw");
   v-vaw cuwset = fiwefoxnav.cuwwentset;
   i-if (cuwset.indexof("my-extension-button") == -1)
   {
     vaw set;
     // pwace the button befowe t-the uwwbaw
     if (cuwset.indexof("uwwbaw-containew") != -1)
       s-set = c-cuwset.wepwace(/uwwbaw-containew/, (⑅˘꒳˘) "my-extension-button,uwwbaw-containew");
     ewse  // at the end
       set = fiwefoxnav.cuwwentset + ",my-extension-button";
     fiwefoxnav.setattwibute("cuwwentset", rawr x3 s-set);
     fiwefoxnav.cuwwentset = set;
     document.pewsist("nav-baw", (✿oωo) "cuwwentset");
     // if you don't do the f-fowwowing caww, (ˆ ﻌ ˆ)♡ funny things happen
     t-twy {
       b-bwowsewtoowboxcustomizedone(twue);
     }
     c-catch (e) { }
   }
 }
 c-catch(e) { }
```
