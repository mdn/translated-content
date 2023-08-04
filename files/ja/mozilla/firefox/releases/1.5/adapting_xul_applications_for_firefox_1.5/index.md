---
title: Firefox 1.5 に XUL アプリケーションを対応させる
slug: Mozilla/Firefox/Releases/1.5/Adapting_XUL_Applications_for_Firefox_1.5
---

このページでは、[Firefox 1.5](/ja/Firefox_1.5) の変更点のうち、XUL アプリケーション開発者に影響するものについて、リストで示します。

### 仕様の変更

- [ツリーウィジェット関連の変更点](/ja/Tree_Widget_Changes)
- [XUL JavaScript での国際文字サポート](/ja/International_characters_in_XUL_JavaScript) (拡張 (Extension)で使用する JavaScript に、非 ASCII 文字を含む場合のみ関係します)
- [XMLHttpRequest の変更点](/ja/XMLHttpRequest_changes_for_Gecko1.8)
- [Firefox 1.5 における XUL の変更点](/ja/XUL_Changes_for_Firefox_1.5)
- [XPCNativeWrapper](/ja/XPCNativeWrapper) がデフォルトになりました。このため、1.0.x と比較して、いくつか挙動 (behavior)が変わっています。
- より簡単な [Chrome Registration](/ja/Chrome_Registration) が採用されたことにより、contents.rdf は、非推奨 (deprecate)になりました。
- オーバーレイされたコンテキストメニュー関連:
  関数 gContextMenu.linkURL() は、gContextMenu.getLinkURL() に名称が変更され、linkURL は、プロパティに変更されました。後方互換性 (backwards-compatible)を確保するためには以下のようにしてください。
  url = 'getLinkURL' in gContextMenu ? gContextMenu.getLinkURL() : gContextMenu.linkURL();

### その他の情報

- [nsIXULAppInfo を使用してアプリケーションのバージョンをチェックする方法](/ja/Using_nsIXULAppInfo)
- [MozillaZine](http://kb.mozillazine.org/Dev_:_Extensions_:_Cross-Version_Compatibility_Techniques)
