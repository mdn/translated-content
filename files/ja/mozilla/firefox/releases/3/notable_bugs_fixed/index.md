---
title: Firefox 3 で修正された重要なバグ
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
l10n:
  sourceCommit: a35e5b74ecbe13a768edf765a4666fb81a5153a1
---

{{FirefoxSidebar}}

この記事は、ドキュメントで必ずしも明白に説明されていない、Firefox 3 で修正された重要なバグの修正の一覧を提供します。

- オーバーレイをパース中にエラーが発生した場合、オーバーレイは適用されません。パースエラーがエラーコンソールへ記録されます。 ([Firefox バグ 335755](https://bugzil.la/335755))
- バグが修正され、メニューやメニューに似た要素に対して適用された場合でもバインディングの内部に `<menupopup>` 要素を設置できるようになりました。([Firefox バグ 345896](https://bugzil.la/345896))
- ボタンの `dlgType` プロパティが正しく動作するようになりました。 ([Firefox バグ 308591](https://bugzil.la/308591))
- {{ Domxref("event.initEvent") }} の引数 `canBubble` が正しく動作するようになり、浮上しないイベントを発生させられるようになりました。 ([Firefox バグ 330190](https://bugzil.la/330190))
- `DOMAttrModified` イベントが名前空間付きの属性を適切に処理するようになりました。 ([Firefox バグ 362391](https://bugzil.la/362391))
- `<?xml-stylesheet ?>` のような XML 処理命令が、 XUL 文書の DOM へと追加されるようになりました。したがって、 {{ Domxref("Node.firstChild", "document.firstChild") }} が必ずしもルート要素であることを保証しないことになります。代わりに {{ Domxref("document.documentElement") }} を使用してください。また、 `<?xml-stylesheet ?>` や `<?xul-overlay ?>` 処理命令は、文書の前置き以外の場所では効果を発揮しないようになりました。 ([Firefox バグ 319654](https://bugzil.la/319654))
- XUL 要素や文書に対する [`getElementsByAttributeNS()`](/ja/docs/Mozilla/Tech/XUL/Method/getElementsByAttributeNS) 関数が追加されました。 ([Firefox バグ 239976](https://bugzil.la/239976))
- XUL 文書から要素を移動したり削除したりしても、イベントリスナーが保持されます。 ([Firefox バグ 286619](https://bugzil.la/286619))
- 変異イベントが非表示ドキュメントでも発生するようになりました。 ([Firefox バグ 201236](https://bugzil.la/201236))
- 要素が間違った順番で描画されることによるさまざまな問題が修正されました。 ([Firefox バグ 317375](https://bugzil.la/317375))
- [`getElementsByTagName()`](/ja/docs/Web/API/Element/getElementsByTagName) が、タグ名に名前空間接頭辞を含む要素を持つサブツリーにおいて正しく動作するように修正されました。 ([Firefox バグ 206053](https://bugzil.la/206053)).
- `DOMNodeInserted` および `DOMNodeRemoved` イベントが正しいノードに適用されるようになりました。 ([Firefox バグ 367164](https://bugzil.la/367164)).
- 正規表現の特殊文字である `\d` が Basic Latin アルファベットの数字（`[0-9]` と同じ）だけに一致するように修正されました。 ([Firefox バグ 378738](https://bugzil.la/378738))
- image-sniffing-services カテゴリーにより、拡張機能として実装された画像デコーダーが正しくない MIME タイプで送られた画像を正しくデコードできるようになります（[Firefox バグ 391667](https://bugzil.la/391667)）。
- フォームコントロール上で右クリックしても、既定ではコンテキストメニューを表示しないようになりました ([Firefox バグ 404536](https://bugzil.la/404536)。この機能を個別に有効にする方法については、[フォームコントロールにコンテキストメニューを提供する](/ja/docs/Offering%20a%20context%20menu%20for%20form%20controls)を参照してください。

### 関連情報

- [Firefox 3 for developers](/ja/docs/Mozilla/Firefox/Releases/3)
